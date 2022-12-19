import { merge } from 'lodash';

export function generateQueryParamstoObject(search: string) {
  return Object.fromEntries(new URLSearchParams(search));
}

export function generateUrl(url: string, data: Object) {
  const ret: string[] = [];
  const newObjectParams = merge(generateQueryParamstoObject(window.location.search), data);
  Object.entries(newObjectParams).forEach(([key, value]) => {
    ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(value ?? '')}`);
  });
  return `${url}?${ret.join('&')}`;
}
