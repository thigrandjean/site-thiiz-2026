// .prettierrc.mjs
export default {
  plugins: ["prettier-plugin-astro"],
  trailingComma: "none",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
