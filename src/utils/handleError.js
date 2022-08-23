import { AxiosError } from 'axios';
import i18next from './i18next';

export default function handleError (error) {
  console.log('a', error)
  let title = "";
  let message = "";
  let showLoading = false;

  if (error instanceof AxiosError) {
    let tKey = "components.errors." + error._type;
    // console.error('tKey', tKey)

    title = i18next.t(tKey + '.title');
    if (error._retrying) {
      message = i18next.t(tKey + '.retrying_message');
      showLoading = true;
    } else {
      message = i18next.t(tKey + '.message');
      showLoading = false;

      if (error._retryCount) {
        // console.error(error)
        // this.isDev() ? console.error(error) : Sentry.captureException(error);
      }
    }
  } else {
    // console.error(error)
    // this.isDev() ? console.error(error) : Sentry.captureException(error);
  }

  return [title, message, showLoading];
}
