/**
 * stylelint配置
 */
module.exports = {
  root: true,
  //插件
  plugins: ["stylelint-order"],
  //指定规则拓展
  //stylelint-config-standard集成了stylelint-config-recommended
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  //忽略文件
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json"],
  overrides: [
    {
      files: ["**/*.vue", "*.vue"],
      //stylelint-config-recommended-vue 集成了 stylelint-config-recommended-scss和stylelint-config-html
      extends: ["stylelint-config-recommended-vue"],
      customSyntax: "postcss-html"
    },
    {
      files: ["**/*.scss", "*.scss"],
      extends: ["stylelint-config-recommended-scss"],
      rules: {
        "scss/at-if-no-null": null
      }
    },
    {
      files: ["**/*.html", "*.html"],
      extends: ["stylelint-config-html"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    //不允许未知的伪类选择器。
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"]
      }
    ],
    //不允许未知的伪元素选择器。
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-global", "v-slotted"]
      }
    ],
    //不允许未知的at-rules。 @unknown {}
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "if",
          "each",
          "include",
          "mixin",
          "use",
          "return",
          "else"
        ]
      }
    ],
    //不允许空源。
    "no-empty-source": null,
    "named-grid-areas-no-invalid": null,
    //为类选择器指定一个匹配模式
    "selector-class-pattern": null,
    //不允许Unicode字节顺序标记
    "unicode-bom": "never",
    //禁止低优先级的选择器出现在高优先级的选择器之后
    "no-descending-specificity": null,
    //字体系列中不允许缺少通用系列关键字
    "font-family-no-missing-generic-family-keyword": null,
    //在冒号之后要求有一个空格或禁止有空白
    "declaration-colon-space-after": "always-single-line",
    //在冒号之前要求有一个空格或禁止有空白
    "declaration-colon-space-before": "never",
    //在规则之前是一个空行
    "rule-empty-line-before": null,
    //禁止使用未知单位
    "unit-no-unknown": true,
    //css属性顺序
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font-size",
      "font-family",
      "font-weight",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-right",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-left",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-radius",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition"
    ]
  }
};
