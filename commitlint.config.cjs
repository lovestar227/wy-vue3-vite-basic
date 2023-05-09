/**
 * 规范Git的提交
 */

module.exports = {
  ignores: [commit => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    //body以空行开头
    "body-leading-blank": [2, "always"],
    //subject以小写开头
    "subject-case": [0, "always"],
    //subject不能为空
    "subject-empty": [2, "never"],
    //type不能为空
    "type-empty": [2, "never"],
    //提交类型
    "type-enum": [
      2,
      "always",
      [
        "feat", //新功能
        "fix", //修复
        "perf", //性能优化
        "style", //代码格式(不影响代码运行的变动)
        "docs", //文档变更/注释变更
        "test", //增加测试
        "refactor", //重构(既不是增加feature，也不是修复bug)
        "build", //打包
        "chore", //构建过程或辅助工具的变动
        "revert", //回退
        "wip", //未完全完成的任务
        "release" //发版
      ]
    ]
  }
};
