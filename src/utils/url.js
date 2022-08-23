import i18next from '@/utils/i18next';

export default function url (urlWithoutLocale, locale = i18next.language) {
  if (urlWithoutLocale === null) {
    const pathname = window.location.pathname;
    urlWithoutLocale = pathname.slice(pathname.indexOf("/", 1));
  }
  return `/${locale}${urlWithoutLocale}`;
}

// usage
// url('/user/create') // go to different path without changing locale
// url('/user', 'en') // go to different path with changing locale
// url(null, 'en') // just changing locale without changing current path