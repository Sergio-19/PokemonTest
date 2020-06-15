import { SHOW_NAV, HIDE_NAV } from "../actionTypes";

export function showNavHandler(){
    return{
        type: SHOW_NAV
    }
}

export function hideNavHandler(){
    return{
        type: HIDE_NAV
    }
}