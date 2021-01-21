import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './style/App.scss';
import Cart from "./components/Cart";
import Books from "./components/Books";
import BookCard from "./components/BookCard";
import { fetchProducts } from "./redux/actions/productActions";
import { setPage, setFilter ,updateSearch} from "./redux/actions/uiActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  useEffect(()=>dispatch(fetchProducts()),[dispatch]);
  var ele ;
  if(state.ui.filter==="true"){
    ele = <div className="sort-con">
        <div onClick={()=>dispatch(setFilter("false"))}>
        &nbsp;<span>Sort By Price</span>&nbsp;<i className="fas fa-times-circle"></i>
        </div>
      </div>;
  }
  else{
    ele = <div className="sort-con">
        <div onClick={()=>dispatch(setFilter("true"))}>
        &nbsp;<span>Sort By Price</span>&nbsp;
        </div>
      </div>;
  }

  return (

    <div className="App">
      <div className= "header"> 
          <div className="heading" onClick={()=>dispatch(setPage("home"))}>
            Book Store
          </div>
          {state.ui.page==="home"&&<input type="text" placeholder="Search Book...." value={state.ui.search} onChange={(e)=>dispatch(updateSearch(e.target.value))}/>}
        
        <div className ="head-buttons">
          <div className="cart" onClick={()=>dispatch(setPage("cart"))}>
            <span>{state.cart.cart.length}</span><i className="fab fa-opencart"></i>
          </div>
        </div>
      </div>
      
      {state.ui.page==="home"&&ele}
      {state.ui.page==="home"&&<Books/>}
      {state.ui.page==="cart"&&<Cart/>}
      {state.ui.page==="productcard"&&<BookCard/>}
      
    </div>
  );
}

export default App;
