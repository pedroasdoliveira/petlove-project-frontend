/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {
  // controller generator
  plop.setGenerator("page", {
    description: "application page logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
    ],
  });
}
