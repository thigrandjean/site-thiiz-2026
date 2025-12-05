// .prettierrc.mjs
export default {
  plugins: ["prettier-plugin-astro"],
  trailingComma: "none",
  printWidth: 80,
  proseWrap: "always",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};
