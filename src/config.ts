// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "dev.NUOVOTAKA";
export const SITE_DESCRIPTION =
  "時々更新のブログです。 最近は、膠原病（EGPA：好酸球性多発血管炎性肉芽腫症）の投稿が多くなっています。";
export const TWITTER_HANDLE = "@nuovotaka";
export const MY_NAME = "NUOVOTAKA";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
