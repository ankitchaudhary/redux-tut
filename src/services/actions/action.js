import { ADD_TO_CART, REMOVE_TO_CART} from "../Constants";

export const addtoCart =(data) =>{
    return{
        type:ADD_TO_CART,
        data: data
    }
}


export const removetoCart =() =>{
    console.warn("action");

    return{
        type:REMOVE_TO_CART,
    }
}