const initialState = {
    cart : []
};


const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "ADD_PRODUCT_CART":
            var tempCart = state.cart;
            var index = tempCart.findIndex((product,index)=>{
                if(product.id===action.payload){
                  return true;
                }
              });
            if(index===-1){
                var product = {
                    id : action.payload,
                    quantity :  1
                }
                tempCart.push(product);
            }
            else{
                const qty = tempCart[index].quantity;
                tempCart[index].quantity = qty+1;
            }
            return {
                ...state,
                cart : tempCart
            };
        case "DECRESE_QUANTITY":
                var cart = state.cart;
                var idx = cart.findIndex((product,index)=>{
                if(product.id===action.payload){
                  return true;
                }
                });
                const qty =cart[idx].quantity;
                cart[idx].quantity = qty-1;
                return{
                    ...state,
                    cart : cart
                };
        case "DELETE_PRODUCT_CART":
            var newCart = state.cart;
            var i = newCart.findIndex((product,index)=>{
                if(product.id===action.payload){
                  return true;
                }
                });
            newCart.splice(i,1);
            return{
                ...state,
                cart : newCart
            };
        default:
            return state;
    }
};

export default reducer;