import type { Dict } from "./zh";

/**
 * 日本語辞書。
 * キーは `zh.ts` を基準に型チェックされる。zh に項目を足すとこのファイルが
 * 型エラーになるので、三言語が自動的に揃う。
 */
export const ja: Dict = {
  nav: {
    docs: "ドキュメント",
    channels: "チャネル",
    deploy: "デプロイ",
    changelog: "更新履歴",
    quickstart: "クイックスタート",
    github: "GitHub",
    menu: "メニュー",
    close: "閉じる",
    language: "言語",
  },
  footer: {
    tagline: "セルフホスト型 AI ゲートウェイ",
    license: "MIT LICENSE · VERSION 2.0",
    colDocs: "ドキュメント",
    colFeatures: "機能",
    colProject: "プロジェクト",
    colLegacy: "旧バージョン",
    docsQuickstart: "クイックスタート",
    docsInstall: "デプロイ",
    docsConfig: "設定リファレンス",
    docsFaq: "よくある質問",
    featChannels: "チャネル",
    featGroups: "グループとモデル",
    featKeys: "AccessKey",
    featMonitoring: "ログと使用量",
    projGithub: "GitHub",
    projChangelog: "更新履歴",
    projSponsor: "スポンサー",
    projContributors: "コントリビューター",
    legacySite: "1.4.x サイト",
    legacyDocs: "1.4.x ドキュメント",
    legacyMigrate: "移行ガイド",
    copyright: "© 2026 GPT-LOAD · MIT LICENSE",
    thanks: "謝辞",
    stillOnV1: "1.4.x をお使いですか？→",
  },
};
