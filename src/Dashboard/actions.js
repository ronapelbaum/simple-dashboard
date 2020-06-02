export const Types = {
  GET_DATA: "GET_DATA",
  SET_DATA: "SET_DATA",
};

export const getData = () => ({
  type: Types.GET_DATA,
});
export const setData = (data, title) => ({
  type: Types.SET_DATA,
  data,
  title,
});
