import type { Dict } from "./zh";

/**
 * English dictionary.
 *
 * Keys are typed against `zh.ts`; adding a key there breaks this file until it is
 * translated here too. That type error is intentional — it keeps the three
 * dictionaries in sync without manual diffing.
 */
export const en: Dict = {
  nav: {
    docs: "Docs",
    channels: "Channels",
    deploy: "Deploy",
    changelog: "Changelog",
    quickstart: "Quick start",
    github: "GitHub",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  footer: {
    tagline: "Self-hosted AI gateway",
    license: "MIT LICENSE · VERSION 2.0",
    colDocs: "Docs",
    colFeatures: "Features",
    colProject: "Project",
    colLegacy: "Legacy",
    docsQuickstart: "Quick start",
    docsInstall: "Deploy",
    docsConfig: "Configuration",
    docsFaq: "FAQ",
    featChannels: "Channels",
    featGroups: "Groups & models",
    featKeys: "AccessKey",
    featMonitoring: "Logs & usage",
    projGithub: "GitHub",
    projChangelog: "Changelog",
    projSponsor: "Sponsor",
    projContributors: "Contributors",
    legacySite: "1.4.x site",
    legacyDocs: "1.4.x docs",
    legacyMigrate: "Migration guide",
    copyright: "© 2026 GPT-LOAD · MIT LICENSE",
    thanks: "Thanks to",
    stillOnV1: "Still on 1.4.x? →",
  },
};
