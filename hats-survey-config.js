/**
 * HaTS Survey Configurations
 */

/**
 * Config item object structure;
 * `id` - Required (String): HaTS Trigger ID.
 * `urlLocales` - Required (Array<String>): list of locales.
 * `urlPath` - Optional (String): HTML `path` attribute for page.
 * `urlPathRegex` - Optional (String): Combination of HTML `path` attribute and RegEx for subdomain page.
 * `urlPathExcludes` - Optional (String): HTML `path` attribute for page to exclude.
 */
 export const HaTSSurveyConfig = [
    {
      // Sitewide APAC - (AU)
      id: '3nF3mmeMg0gMjUpJXu90Q5sDVkA8',
      urlLocales: ['ALL_au'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-australia/',
    },
    {
      // Sitewide APAC - (KR)
      id: '3nF3mmeMg0gMjUpJXu90Q5sDVkA8',
      urlLocales: ['ALL_kr', 'ko_ALL'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-korea/',
    },
    {
      // Sitewide APAC - (NZ)
      id: '3nF3mmeMg0gMjUpJXu90Q5sDVkA8',
      urlLocales: ['ALL_nz'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-new-zealand/',
    },
    {
      // Sitewide APAC - (CN, HK, ID, JP, SG, MY, TH, TW, VN)
      id: '3nF3mmeMg0gMjUpJXu90Q5sDVkA8',
      urlLocales: ['ALL_cn', 'ALL_hk', 'ALL_id', 'en_id', 'ALL_in',
      'ALL_jp', 'ALL_sg', 'ALL_my', 'ALL_th', 'ALL_tw',
      'ALL_vn', 'hi_in', 'hi_ALL', 'ja_ALL', 'ms_ALL', 'ms_my',
      'th_ALL', 'vi_ALL', 'zh-CN_ALL', 'zh-TW_ALL'],
      urlPathRegex: '.*',
    },
    {
      // APAC Country Page - (AU)
      id: 'z4UtDnFxJ0gMjUpJXu90T95onLN8',
      urlLocales: ['ALL_au'],
      urlPath: '/google-in-australia/',
    },
    {
      // APAC Country Page - (KR)
      id: 'z4UtDnFxJ0gMjUpJXu90T95onLN8',
      urlLocales: ['ALL_kr', 'ko_ALL'],
      urlPath: '/google-in-korea/',
    },
    {
      // APAC Country Page - (NZ)
      id: 'z4UtDnFxJ0gMjUpJXu90T95onLN8',
      urlLocales: ['ALL_nz'],
      urlPath: '/google-in-new-zealand/',
    },
    {
      // Sitewide - USA EN traffic
      id: 'y58Yu6pPt0gMjUpJXu90VLdD3T1d',
      urlLocales: ['ALL_us', 'en_US'],
      urlPathRegex: '.*',
      urlPathExcludes: '/stayinformed/policy-that-could-impact-your-business/',
    },
    {
      // Sitewide EMEA - (Italy)
      id: '6YggqMapQ0gMjUpJXu90PSUoLxYD',
      urlLocales: ['ALL_it', 'it_ALL'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-italy/',
    },
    {
      // Sitewide EMEA - (Turkey)
      id: '6YggqMapQ0gMjUpJXu90PSUoLxYD',
      urlLocales: ['ALL_tr', 'tr_ALL'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-turkey/',
    },
    {
      // Sitewide EMEA - (UK)
      id: '6YggqMapQ0gMjUpJXu90PSUoLxYD',
      urlLocales: ['ALL_uk', 'en-GB_ALL'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-uk/',
    },
    {
      // Sitewide EMEA - (DE)
      id: '6YggqMapQ0gMjUpJXu90PSUoLxYD',
      urlLocales: ['ALL_de', 'de_ALL'],
      urlPathRegex: '.*',
      urlPathExcludes: '/google-in-germany/',
    },
    {
      // Sitewide EMEA - (FR)
      id: '6YggqMapQ0gMjUpJXu90PSUoLxYD',
      urlLocales: ['ALL_fr', 'fr_ALL'],
      urlPathRegex: '.*',
      urlPathExcludes: '/impact/',
    },
    {
      // Sitewide EMEA - (ES, RU, PL, NL, BR, MX)
      id: '6YggqMapQ0gMjUpJXu90PSUoLxYD',
      urlLocales: ['ALL_es', 'es_ALL', 'es-419_ALL', 'ALL_ru', 'ru_ALL',
      'ALL_pl', 'pl_ALL', 'ALL_nl', 'nl_ALL', 'ALL_br', 'pt-BR_ALL',
      'ALL_mx'],
      urlPathRegex: '.*',
    },
    {
      // Home page - USA EN traffic
      id: 'RzFXDacCD0gMjUpJXu90NuK762Qx',
      urlLocales: ['ALL_us', 'en_US'],
      urlPath: '/',
    },
    {
      // Stories subdomain page - USA EN traffic
      id: 'dci5NmHcb0gMjUpJXu90Xqkjvid4',
      urlLocales: ['ALL_us', 'en_US'],
      urlPathRegex: '/stories/.+',
    },
  ];
  