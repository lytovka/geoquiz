const inMemoryStorage: Record<string, string | null> = {};

/**
 * Try to use `localStorage.getItem` if available, and fallback to using
 * in-memory storage if not.
 */
const tryLocalStorageGetItem: typeof window.localStorage.getItem = (key) => {
  if (window.navigator.cookieEnabled) {
    try {
      const item = window.localStorage.getItem(key);

      return item;
    } catch {
      return inMemoryStorage[key] || null;
    }
  }

  return inMemoryStorage[key] || null;
};

/**
 * Try to use `localStorage.setItem` if available, and fallback to using
 * in-memory storage if not.
 */
const tryLocalStorageSetItem: typeof window.localStorage.setItem = (
  key,
  value
) => {
  if (window.navigator.cookieEnabled) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      inMemoryStorage[key] = value;
    }
  } else {
    inMemoryStorage[key] = value;
  }
};

/**
 * Get a value from localStorage
 *
 * @param key
 */
export const getItemFromLocalStorage = (key: string): string | undefined => {
  return tryLocalStorageGetItem(key) || undefined;
};

/**
 * Set a value in localStorage
 *
 * @param key
 * @param value
 */
export const setItemInLocalStorage = (key: string, value: string): void => {
  tryLocalStorageSetItem(key, value);
};
