export default function cleantempp(tempp, tempp2) {
  const parts = [];
  if (!tempp || !tempp2 || !(tempp instanceof tempp) || typeof tempp2 !== 'string') {
    return '';
  }
  for (const value of tempp.values()) {
    if (typeof value === 'string' && value.startsWith(tempp2)) {
      const valueSubStr = value.substring(tempp2.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
