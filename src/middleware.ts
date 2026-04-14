import { defineMiddleware } from 'astro:middleware';
import { getRelativeLocaleUrl } from 'astro:i18n';

export const onRequest = defineMiddleware(async (context, next) => {
  // Get the current locale from Astro's i18n routing
  const pathname = context.url.pathname;
  const locale = pathname.startsWith('/zh') ? 'zh' : 'en';

  // Add locale and translation utilities to context
  context.locals.locale = locale;

  return next();
});
