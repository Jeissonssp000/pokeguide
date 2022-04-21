export const getCode = (url) => {
  let array = url.split("/");
  const pos = array.length - 2;
  return array[pos];
};
