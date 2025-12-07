export default function (plop) {
  plop.setHelper("creationDate", () => {
    return new Date().toISOString().substring(0, 10);
  });
  plop.setGenerator("post", {
    description: "New post",

    prompts: [
      {
        type: "imput",
        name: "name",
        message: "Post title?"
      },
      {
        type: "list",
        name: "category",
        message: "Choose a category",
        choices: [
          { name: "Dreams", value: "dreams" },
          { name: "Work", value: "work" }
        ]
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/posts/{{creationDate}}-{{kebabCase name}}/index.mdx",
        templateFile: "templates/post.mdx.hbs"
      }
    ]
  });
}
