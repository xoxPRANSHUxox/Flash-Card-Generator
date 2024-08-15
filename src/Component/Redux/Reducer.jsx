import {TYPE} from "./Action"

const intialState = {
    group: [],
    cards: [],
    finalCards: [],
};

export const reducer = (state = intialState, actions) => {
  
    if(actions.type === TYPE.CREATEGROUP){
        return {...state, group: [...state.group, actions.payload]};
    }
  
    return state;
}
