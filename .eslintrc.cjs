/**
 * eslint配置
 */
module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  // 全局环境
  env: {
    node: true // 支持新的 node 全局变量和类型
  },
  // 全局变量
  globals: {
    // Ref sugar (take 2)
    $: "readonly",
    $$: "readonly",
    $ref: "readonly",
    $shallowRef: "readonly",
    $computed: "readonly",

    // index.d.ts
    // global.d.ts
    Fn: "readonly",
    PromiseFn: "readonly",
    RefType: "readonly",
    LabelValueOptions: "readonly",
    EmitType: "readonly",
    TargetContext: "readonly",
    ComponentElRef: "readonly",
    ComponentRef: "readonly",
    ElRef: "readonly",
    global: "readonly",
    ForDataType: "readonly",
    ComponentRoutes: "readonly",

    // script setup
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  //集成eslint风格或者eslint插件的最佳实践
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/eslint-config-typescript"
  ],
  // 新增第三方插件检查规则
  plugins: ["simple-import-sort"], //自动调整引入 引出代码顺序
  // 解析器
  parser: "vue-eslint-parser",
  // 解析器选项
  parserOptions: {
    parser: "@typescript-eslint/parser", //提供另外解析器的属性 @typescript-eslint/parser
    ecmaVersion: 2020, // 支持的ES语法版本，默认为5。注意只是语法，不包括ES的全局变量。
    sourceType: "module", // 指定JS代码来源的类型，script(script标签引入？) | module（es6的module模块），默认为script。
    ecmaFeatures: {
      // Features是特征的意思，这里用于指定要使用其他那些语言对象
      jsx: true //启用jsx语法
    }
  },
  // 规则，手动自定义代码规范
  rules: {
    "no-undef": "off", //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-debugger": "error", //禁用debugger
    "no-const-assign": 2, //禁止修改const声明的变量
    "simple-import-sort/imports": "error", //引入顺序 error
    "simple-import-sort/exports": "error", //导出顺序 error
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-useless-escape": "off", // 禁用不必要的转义字符
    "linebreak-style": "off", //校验行尾序列是否符合linux标准
    "vue/no-v-html": "off", //不允许v-html
    "vue/require-default-prop": "off", //prop 需要默认值
    "vue/require-explicit-emits": "off", //要求emit触发必须为$emit()
    "vue/multi-word-component-names": "off", //要求组件名称必须包含多个单词
    "@typescript-eslint/no-explicit-any": "off", //ts 不允许写any
    "@typescript-eslint/explicit-module-boundary-types": "off", //在导出的函数和类的公共类方法上要求显式返回和参数类型
    "@typescript-eslint/ban-types": "off", //禁止使用特定类型
    "@typescript-eslint/ban-ts-comment": "off", //禁止使用@ts-<directive>注释或要求在指令后添加说明
    "@typescript-eslint/no-empty-function": "off", //不允许空函数
    "@typescript-eslint/no-non-null-assertion": "off", //不允许使用!后缀运算符
    "@typescript-eslint/no-unused-vars": "off", //禁止出现未使用过的变量
    "prettier/prettier": [
      //自动化格式冲突
      "error",
      {
        endOfLine: "auto" //保留现有行尾
      }
    ]
  }
};
