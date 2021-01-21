import './style/App.scss';

function App() {
  return (
    <div className="App">
      <div className= "header">
        <div className="heading">
          Book Store
        </div>
        <input type="text" placeholder="Search Book...."/>
        <div className ="head-buttons">
          <div className="cart" >
            <span>0</span><i className="fab fa-opencart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
