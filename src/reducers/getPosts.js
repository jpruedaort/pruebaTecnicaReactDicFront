import axios from "axios";

const initialState = {
  count: 0,
};

const getPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALL":
      return { count: state.count + 1 };
    //   axios.get("localhost:2000/getpost/getallpost").then((res) => {
    //     return JSON.stringify(res.data);
    //   });
    default:
      return state;
  }
};

export default getPostReducer;
