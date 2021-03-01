import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

// ACTION CREATORS
export const signin = (formData, history) => async (dispatch) => {
    try {
        // LOG IN THE USER
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // SIGN UP THE USER
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};
