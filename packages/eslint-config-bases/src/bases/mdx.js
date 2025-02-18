/**
 * Opinionated config base for https://github.com/mdx-js/eslint-mdx
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const mdxPatterns = {
  files: ['*.mdx'],
};

module.exports = {
  overrides: [
    {
      // For performance enable this only on mdx files
      files: mdxPatterns.files,
      extends: ['plugin:mdx/recommended'],
      parser: 'eslint-mdx',
      rules: {
        '@typescript-eslint/consistent-type-exports': 'off',
      },
    },
  ],
};
