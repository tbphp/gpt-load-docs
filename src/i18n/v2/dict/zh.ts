/**
 * 中文词典 —— **源语言**。
 *
 * 结构以本文件为准：新增文案先加在这里，`en.ts` 与 `ja.ts` 会因类型不匹配而报错，
 * 从而强制三份保持同步。不要在其它语言里增删键。
 */
export const zh = {
  nav: {
    docs: "文档",
    channels: "渠道",
    deploy: "部署",
    changelog: "更新日志",
    quickstart: "快速开始",
    github: "GitHub",
    menu: "菜单",
    close: "关闭",
    sponsor: "赞助",
    language: "语言",
  },
  footer: {
    tagline: "自托管 AI 网关",
    license: "MIT LICENSE · VERSION 2.0",
    colDocs: "文档",
    colFeatures: "功能",
    colProject: "项目",
    colLegacy: "旧版本",
    docsQuickstart: "快速开始",
    docsInstall: "部署",
    docsConfig: "配置参考",
    docsFaq: "常见问题",
    featChannels: "渠道",
    featGroups: "分组与模型",
    featKeys: "AccessKey",
    featMonitoring: "日志与用量",
    projGithub: "GitHub",
    projChangelog: "更新日志",
    projSponsor: "赞助支持",
    projContributors: "贡献者",
    legacySite: "1.4.x 官网",
    legacyDocs: "1.4.x 文档",
    legacyMigrate: "迁移说明",
    copyright: "© 2026 GPT-LOAD · MIT LICENSE",
    thanks: "感谢",
    stillOnV1: "仍在使用 1.4.x？→",
  },
};

export type Dict = typeof zh;
