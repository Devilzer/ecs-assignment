import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { addProductCart } from "../redux/actions/cartActions";
function BookCard() {
    const product = useSelector(state => state.ui.product);
    const dispatch = useDispatch();
    const addToCart = ()=>{
      dispatch(addProductCart(product.bookID));
    }
    return (

        <div className="product-card">
        <div className="img-con">
          <img src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg" className="image" alt="product"></img>
        </div>
        
        <div className="name">{product.title}</div>
        <div className="rating">
        <Rating name="read-only" value={5} readOnly />
        </div>
        <div className="price">
          <span>Rs</span> {product.price}
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
        <div className="btn">
           <Button size="large" variant="contained" color="primary" onClick={addToCart}>
              <i className="fas fa-cart-plus"></i>
            </Button>
        </div>
    </div>

    )
}

export default BookCard;