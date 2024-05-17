import i18n, { type Config } from 'sveltekit-i18n';

const config: Config<Config> = {
  initLocale: 'de',
  preprocess: 'preserveArrays',
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./lang/en.json')).default
    },
    {
      locale: 'de',
      key: '',
      loader: async () => (await import('./lang/de.json')).default
    },
  ]
};

export const { t, loading, locales, locale, initialized, translations, loadTranslations } =
    new i18n(config);