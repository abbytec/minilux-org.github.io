import siteConfig from "@generated/docusaurus.config";

export default function prismIncludeLanguages(PrismObject: any): void {
  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism as { additionalLanguages: string[] };

  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang: string) => {
    require(`prismjs/components/prism-${lang}`);
  });
  delete (globalThis as any).Prism;

  // Minilux custom language definition
  PrismObject.languages.minilux = {
    comment: {
      pattern: /#.*/,
      greedy: true,
    },
    string: {
      pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: true,
    },
    keyword: /\b(?:if|else|elseif|while|func|include|AND|OR)\b/,
    "builtin-function": {
      pattern: /\b(?:printf|print|read|len|number|lower|upper|shell|sleep|sockopen|sockwrite|sockread|sockclose)\b/,
      alias: "function",
    },
    "builtin-statement": {
      pattern: /\b(?:inc|dec|push|pop|shift|unshift)\b/,
      alias: "keyword",
    },
    variable: /\$\w+/,
    number: /\b\d+\b/,
    operator: /&&|\|\||[!=<>]=?|[+\-*/%=]/,
    punctuation: /[{}[\](),]/,
  };
}
