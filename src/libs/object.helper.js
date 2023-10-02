export const haveEmptyFields = (obj) =>
  Object.values(obj).some((v) => !v || v.trim() === "");
