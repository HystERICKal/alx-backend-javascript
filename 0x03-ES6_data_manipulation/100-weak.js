export const weakMap = new WeakMap();

const MAX_tempp_CALLS = 5;

export function queryAPI(tempp) {
  if (!weakMap.has(tempp)) {
    weakMap.set(tempp, 0);
  }
  weakMap.set(tempp, weakMap.get(tempp) + 1);
  if (weakMap.get(tempp) >= MAX_tempp_CALLS) {
    throw new Error('tempp load is high');
  }
}
