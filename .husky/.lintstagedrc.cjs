/**
 * lint-staged配置
 */

/**
 * 当只暂存了iconfont.css，由于忽略了iconfont的校验，所以stylelint校验变成了无输入，校验会报错。
 * 所以stylelint--fix 需要跟上--allow - empty - input
 */
module.exports = {
  "*.vue": [
    "eslint --fix",
    "prettier --write",
    "stylelint --fix --allow-empty-input"
  ],
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,less,html}": [
    "stylelint --fix --allow-empty-input",
    "prettier --write"
  ],
  "*.md": ["prettier --write"]
};
