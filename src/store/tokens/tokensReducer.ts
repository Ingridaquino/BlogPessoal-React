import { Action } from "./actions";


//model o state atual do token
export interface TokenState {
  tokens: string;
}

// o state inicial do token 
const initialState = {
  tokens: ""
}


//metodo do reducer, onde a magica acontece 
export const tokenReducer = (state: TokenState = initialState, action: Action) => {

    switch(action.type){
      case "ADD_TOKEN": {
        return {tokens: action.payload}
      }
        default: 
          return state
  }
}