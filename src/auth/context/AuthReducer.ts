import { TYPES } from "../types/types";
import { IInitialState } from "./AppProvider";

type ActionType = 
    | { type: TYPES.login, payload: { name: string, id: string } } 
    | { type: TYPES.logout }


export const authReducer = ( state: IInitialState, action: ActionType ): IInitialState => {

   switch (action.type) {
      case TYPES.login:
         return {
            ...state,
            logged: true,
            user: action.payload
         }

      case TYPES.logout:
        return {
            ...state,
            logged: false,
            user: null
         }

       default:
          return state;
   }

}