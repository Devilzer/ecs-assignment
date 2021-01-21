import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { addProductCart } from "../redux/actions/cartActions";
import { setPage , setCardPage } from "../redux/actions/uiActions";

function SingleBook({product}) {
    const dispatch = useDispatch();
    const addToCart = () =>{
        var cartProduct = product.bookID;
        dispatch(addProductCart(cartProduct));
      };

      const handleCardClick = ()=>{
          dispatch(setCardPage(product));
          dispatch(setPage("productcard"));
      };

    return (
        <div className="product">
            <div className="info" onClick={handleCardClick}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WP3-X20pJa8OLkI-jCS4T4mroDBJ7w5XEg&usqp=CAU" className="image" alt="product">
                </img>
            <div className="sub-info">
                <div className="name">
                {product.title}
                </div>
                <Rating name="read-only" value={Math.round(product.average_rating)} readOnly />
                <div className="price">
                <span>Rs</span> {product.price}
                </div>
            </div>
            <div className="description">
                <div>
                    <span>
                        Author
                    </span><br/>
                    {product.authors}
                </div>
                <div>
                    <span>
                        Language
                    </span><br/>
                    {product.language_code}
                </div>
            
            </div>

            </div>
            <div className="btns">
            <Button variant="contained" color="primary" onClick={addToCart}>
                <i className="fas fa-cart-plus"></i>
            </Button>
            </div>
        </div>
    )
}

export default SingleBook;
