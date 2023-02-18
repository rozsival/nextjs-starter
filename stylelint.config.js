module.exports = {
  customSyntax: 'postcss-styled-syntax',
  extends: ['stylelint-config-recommended'],
  plugins: ['stylelint-order'],
  rules: {
    'no-empty-source': null, // eslint-disable-line unicorn/no-null
    'order/order': ['custom-properties', 'declarations', 'rules', 'at-rules'],
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  },
};
