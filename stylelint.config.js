module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'max-nesting-depth': 3,
    'declaration-no-important': true,
    'font-weight-notation': 'numeric',
  },
}
