export function isFieldPositiveInteger(value) {
  if (!String(value)) return false;
  return Number(value) > 0;
}
