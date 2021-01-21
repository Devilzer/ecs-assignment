export const addProductCart = (value)=>{

    // showNotification("Added to Cart.");
    return{
        type : "ADD_PRODUCT_CART",
        payload : value
    }
};
export const decreseQuantity = (value)=>{

    // showNotification("Removed from Cart.");
    return{
        type : "DECRESE_QUANTITY",
        payload : value
    };
};

export const deleteCartProduct = (value)=>{
    // showNotification("Removed from Cart.");

    return{
        type : "DELETE_PRODUCT_CART",
        payload : value
    };
};