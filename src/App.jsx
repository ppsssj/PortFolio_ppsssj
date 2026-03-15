import { useLayoutEffect, useRef } from "react";
import templateHtml from "../fdsafdsa.html?raw";

const HEAD_SKIP_SELECTOR = 'script, meta[charset], meta[name="viewport"], title';

function copyAttributes(source, target) {
  Array.from(source.attributes).forEach((attribute) => {
    target.setAttribute(attribute.name, attribute.value);
  });
}

function syncElementAttributes(target, source) {
  const previousAttributes = Array.from(target.attributes).map((attribute) => ({
    name: attribute.name,
    value: attribute.value,
  }));

  Array.from(source.attributes).forEach((attribute) => {
    target.setAttribute(attribute.name, attribute.value);
  });

  return () => {
    Array.from(target.attributes).forEach((attribute) => {
      if (!previousAttributes.some((item) => item.name === attribute.name)) {
        target.removeAttribute(attribute.name);
      }
    });

    previousAttributes.forEach((attribute) => {
      target.setAttribute(attribute.name, attribute.value);
    });
  };
}

function createExecutableScript(source) {
  const script = document.createElement("script");
  copyAttributes(source, script);

  if (source.src) {
    script.src = source.src;
  } else {
    script.textContent = source.textContent;
  }

  return script;
}

export default function App() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(templateHtml, "text/html");

    const restoreHtmlAttributes = syncElementAttributes(
      document.documentElement,
      parsedDocument.documentElement,
    );
    const restoreBodyAttributes = syncElementAttributes(
      document.body,
      parsedDocument.body,
    );

    document.title = parsedDocument.title || document.title;

    const injectedHeadNodes = [];
    Array.from(parsedDocument.head.children).forEach((node) => {
      if (node.matches?.(HEAD_SKIP_SELECTOR)) {
        return;
      }

      const clone = node.cloneNode(true);
      clone.setAttribute("data-template-head", "true");
      document.head.appendChild(clone);
      injectedHeadNodes.push(clone);
    });

    const headScripts = Array.from(parsedDocument.head.querySelectorAll("script"));
    const bodyScripts = Array.from(parsedDocument.body.querySelectorAll("script"));

    headScripts.forEach((script) => script.remove());
    bodyScripts.forEach((script) => script.remove());

    container.innerHTML = parsedDocument.body.innerHTML;

    const injectedScripts = [];
    const scriptQueue = [...headScripts, ...bodyScripts];

    scriptQueue.forEach((sourceScript) => {
      const executableScript = createExecutableScript(sourceScript);
      executableScript.setAttribute("data-template-script", "true");
      document.body.appendChild(executableScript);
      injectedScripts.push(executableScript);
    });

    return () => {
      injectedScripts.forEach((script) => script.remove());
      injectedHeadNodes.forEach((node) => node.remove());
      container.innerHTML = "";
      restoreBodyAttributes();
      restoreHtmlAttributes();
    };
  }, []);

  return <div ref={containerRef} className="template-host" />;
}
