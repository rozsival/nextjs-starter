module.exports = {
  customSyntax: 'postcss-styled-syntax',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'function-no-unknown': [true, { ignoreFunctions: [/^\${/] }],
    'order/order': ['custom-properties', 'declarations', 'rules', 'at-rules'],
    'order/properties-alphabetical-order': true,
  },
};
