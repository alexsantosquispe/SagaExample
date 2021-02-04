import * as Constants from './contants';

const parseUrl = (url, id) => {
  let urlParsed = url;
  if (url && id) {
    urlParsed = url.replace('{id}', id);
  }
  return `${Constants.BASE_URL}${urlParsed}`;
};

export { parseUrl };
