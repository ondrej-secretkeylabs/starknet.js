import { LibraryError } from './errors';

export default (typeof fetch === 'function' && window.fetch.bind(window)) ||
  // throw with instructions when no fetch is detected
  ((() => {
    throw new LibraryError(
      "'fetch()' not detected, use the 'baseFetch' constructor parameter to set it"
    );
  }) as WindowOrWorkerGlobalScope['fetch']);
