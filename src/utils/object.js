export const deepCopy = (obj) => {
  console.log(obj);
  return JSON.parse(JSON.stringify(obj));
};
