export const getIdImg = (url) => {
  let array = url.split("/");
  const pos = array.length - 2;
  const code = array[pos];
  const id = code < 10 ? `00${code}` : code < 100 ? `0${code}` : `${code}`;
  return id;
};
