import { LibraryError } from './errors';

export default (typeof fetch === 'function' && globalThis.fetch.bind(globalThis)) ||
  // throw with instructions when no fetch is detected
  ((() => {
    throw new LibraryError(
      "'fetch()' not detected, use the 'baseFetch' constructor parameter to set it"
    );
  }) as WindowOrWorkerGlobalScope['fetch']);
