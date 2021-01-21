export const setPage = (page)=>{
    return{
        type : "SET_PAGE",
        payload : page
    };
};

export const setFilter = (value)=>{

    return{
        type : "SET_FILTER",
        payload : value
    };
};

export const setCardPage = (card)=>{
    return{
        type : "SET_CARD_PAGE",
        payload : card
    };
};
export const updateSearch = (value)=>{
    return{
        type : "UPDATE_SEARCH",
        payload : value
    };
}