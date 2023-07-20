import axios from "axios";
import {
  fetchPromotionsFailure,
  fetchPromotionsStart,
  fetchPromotionsSucces,
} from "../reducers/highlightsReducer";

export const fetchHighlights = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPromotionsStart);
      const response = await axios.get("http://localhost:3001/promotion");
      const promotions = response.data;

      dispatch(fetchPromotionsSucces(promotions));
    } catch (error) {
      dispatch(fetchPromotionsFailure(error));
      console.log(error);
    }
  };
};
