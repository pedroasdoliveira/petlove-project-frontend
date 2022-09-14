/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {
  // controller generator
  plop.setGenerator("component", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
    ],
  });
}


