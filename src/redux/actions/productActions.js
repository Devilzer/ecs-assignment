import axios from "axios";

export const fetchProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json");
        var list = data.slice(0,50);
        list.reverse();
        // console.log(list);
        dispatch({
            type : "SET_PRODUCTS",
            payload : list
        })
    } catch (error) {
        console.log(error);
    }
};