import { ActionType } from 'type';

export type GlobalState = {
    clicks: number;
};

const initialState: GlobalState = {
    clicks: 1,
};

const globalReducer = (
    // eslint-disable-next-line default-param-last, @typescript-eslint/default-param-last
    state: GlobalState = initialState,
    action: ActionType,
) => {
    if (action.type === 'DECREMENT') {
        return { ...state, clicks: state.clicks - 1 };
    }

    if (action.type === 'INCREMENT') {
        return { ...state, clicks: state.clicks + 1 };
    }

    if (action.type === 'SETVALUE') {
        return { ...state, clicks: action.payload };
    }

    return state;
};

export default globalReducer;
