import { SHOW_NAV, HIDE_NAV } from "../actionTypes";

const initialState = {
    isOpen: false
}

export default function nav(state = initialState, action){
    switch(action.type){

        case SHOW_NAV:
        return{
            isOpen: true
        }

        case HIDE_NAV:
            return{
                isOpen: false
            }


        default:
        return state
    }
}