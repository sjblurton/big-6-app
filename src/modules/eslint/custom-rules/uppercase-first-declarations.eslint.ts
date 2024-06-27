import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`,
);

type MessageIds = "lowercase" | "uppercase";

type Options = [
  {
    preferredCase: "lower" | "upper";
  },
];
// Type: RuleModule<"uppercase", ...>
export const rule = createRule<Options, MessageIds>({
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id != null) {
          // if (options[0].preferredCase === "lower") {
          // }
          if (/^[a-z]/.test(node.id.name)) {
            context.report({
              messageId: "uppercase",
              node: node.id,
            });
          }
        }
      },
    };
  },
  name: "uppercase-first-declarations",
  meta: {
    docs: {
      description:
        "Function declaration names should start with an upper-case letter.",
    },
    messages: {
      uppercase: "Start this name with an upper-case letter.",
      lowercase: "Start this name with a lower-case letter.",
    },
    type: "suggestion",
    schema: [
      {
        type: "object",
        properties: {
          preferredCase: {
            type: "string",
            enum: ["lower", "upper"],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [
    {
      preferredCase: "lower",
    },
  ],
});
