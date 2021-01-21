const initialState = {
    page : "home",
    product:{},
    filter : "false",
    search : ""
}
const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "SET_PAGE":
            return{
                ...state,
                page : action.payload
            };
        case "SET_FILTER":
            return{
                ...state,
                filter : action.payload
            }
        case "SET_CARD_PAGE":
            return{
                ...state,
                product : action.payload
            };
        case "UPDATE_SEARCH":
            return{
                ...state,
                search : action.payload
            }
        default:
            return state;
    }
};

export default reducer;