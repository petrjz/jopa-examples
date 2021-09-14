import ActionType from "./ActionType";
import {ThunkDispatch} from "../util/Util";
import {asyncActionRequest, asyncActionSuccess, asyncActionSuccessWithPayload} from "./SyncActions";
import axios from "axios";

const URL = `${process.env.REACT_APP_SERVER_URL || ""}/rest`;

export function loadSettings(key: string) {
    const action = {type: ActionType.LOAD_SETTINGS};
    return (dispatch: ThunkDispatch) => {
        dispatch(asyncActionRequest(action));
        return axios.get(`${URL}/configuration?key=${key}`).then(resp => {
            dispatch(asyncActionSuccessWithPayload(action, resp.data));
            return Promise.resolve(resp.data);
        });
    };
}

export function saveSettings(settings: {}) {
    const action = {type: ActionType.SAVE_SETTINGS};
    return (dispatch: ThunkDispatch) => {
        dispatch(asyncActionRequest(action));
        return axios.put(`${URL}/configuration`, undefined, {params: settings}).then(() => {
            dispatch(asyncActionSuccess(action));
            return Promise.resolve();
        });
    };
}

export function loadData(format: string) {
    const action = {type: ActionType.LOAD_DATA};
    return (dispatch: ThunkDispatch) => {
        dispatch(asyncActionRequest(action));
        return axios.get(`${URL}/data`, {params: {format}, headers: {"accept": "text/plain"}}).then(resp => {
            dispatch(asyncActionSuccess(action));
            return Promise.resolve(resp.data as string);
        });
    };
}
