import { Types } from "./actions";

const initialState = {
  loading: false,
  title: null,
  data: [],
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_DATA:
      return {
        ...state,
        loading: true,
      };
    case Types.SET_DATA:
      // TODO add immutability (lodash/cloneDeep)
      return {
        ...state,
        loading: false,
        data: action.data,
        title: action.title,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
