export type Records<T, K> = Record<keyof T, K>;
export interface DesignSystemProps<T> {
  design?: T;
}

export const isBool = (type: unknown): type is boolean => {
  if (typeof type === 'boolean') {
    return true;
  }

  return false;
};

export const isString = (str: unknown): str is string => {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
};

export const isStringArray = (arr: unknown): arr is string[] => {
  if (!arr || !Array.isArray(arr) || !arr.length) {
    return false;
  }

  return arr.reduce((prev, curr) => (!isString(curr) ? false : prev), true);
};

export const isNumber = (num: unknown): num is number => {
  if (typeof num === 'number' || num instanceof Number) {
    return true;
  }
  return false;
};

export type MultiDimensionalArray<T> = Array<MultiDimensionalArray<T> | T>;
