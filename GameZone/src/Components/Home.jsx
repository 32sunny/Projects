import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import './Home.css';

const Home = () => {
  const [searched, setsearched] = useState("");
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500)
  const [visibleItem ,setVisiblItem] = useState(20)
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  // Function to filter products by category
  const filterByCategory = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  // Function to search the products
  function handleSearch(query) {
    const searchedData = query.toLowerCase();
    setsearched(query);
    const filteredBySearch = products.filter((product) =>
      product.name.toLowerCase().includes(searchedData)
    );
    setFilteredProducts(filteredBySearch);
  }

  // Fetch data from Firebase Api
  const fetchdata = async () => {
    try {
      const response = await axios.get('https://shre-5279e-default-rtdb.firebaseio.com/Products.json');
      const productsData = Object.values(response.data);
      setProducts(productsData); 
      setFilteredProducts(productsData); 
    } catch (error) {
      console.log("Some error:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);


   // Function to filter products by price range
  const filterByPriceRange = (e) => {
    setMinPrice(e.target.value);
    const filteredByPrice = products.filter((product) => 
      product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filteredByPrice);
  };

   // Function to filter products by brand
   const filterByBrand = (brand) => {
    const filtered = products.filter((product) => product.brand === brand);
    setFilteredProducts(filtered);
  };

  //show more
function handleShowMore(){
   setVisiblItem(res=>res+12)
}

 // Open the details popup
  function viewAllDetails(card) {
    setSelectedCard(card);
    setIsPopupOpen(true);
    setShowFilter(false)
  }
  

  return (
    <>
      <div className="button-container">
        <button onClick={() => setShowFilter(!showFilter)}>Filter</button>
        <input
          type="text"
          value={searched}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for Products and More"
          className="search"
        />
      </div>

{/* rendering the data  */}

      <div className="container">
        {filteredProducts.slice(0,visibleItem).map((item, id) => (
          <div key={id} className="card"  onClick={() => viewAllDetails(item)} >
            <img src={item.image} alt="Image is Not Available" className="card-image" />
            <div className="card-content">
              <h3>{item.name}</h3>
              <h4><ul>{item.brand}</ul></h4>
              <p>{item.description}</p>
              <p>
                <span className="card-price">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
         
      </div>
      <div className='showMoreContainer'>
      <button onClick={handleShowMore} className="showMore">
            Show More
          </button>
          </div>

{/* filetring */}

      {showFilter === true && (
        <div className="popup">
          
          <div className="span">Filter</div>
          <div className="nav_filter">
          <p>Brands</p> 
        <div className='brands'>
     
            <button id='brand' onClick={() => filterByBrand('TimeKeeper')}>TimeKeeper</button>
            <button id='brand' onClick={() => filterByBrand('TechGiant')}>TechGiant</button>
            <button id='brand' onClick={() => filterByBrand('StyleCo')}>StyleCo</button>
            <button  id='brand'onClick={() => filterByBrand('AudioTech')}>AudioTech</button>
            <button id='brand' onClick={() => filterByBrand('SportFit')}>SportFit</button>
            <button id='brand' onClick={() => filterByBrand(products)}>Show All</button>
            </div>
          <p>Filter by Price</p>
           <div className='priceSet'><span>${minPrice} </span> <span>${maxPrice}</span></div> 
           <input
              type="range"
              min="0"
              max="500"
              value={minPrice}
              onChange={(e) =>filterByPriceRange(e)}
            />
         <p>Categories</p> 
            <button  id='category' onClick={() => filterByCategory('Electronics')}>Show Electronics</button>
            <button  id='category' onClick={() => filterByCategory('Accessories')}>Show Accessories</button>
            <button  id='category' onClick={() => filterByCategory('Watches')}>Show Watches</button>
            <button  id='category' onClick={() => filterByCategory('Clothes')}>Show Clothes</button>
            <button  id='category' onClick={() => setFilteredProducts(products)}>Show All</button>
          </div>
          <button className="close-btn" onClick={() => setShowFilter(false)}>Close</button>
        </div>
              
      )}


{/* details box */}

{isPopupOpen ? (
  <div className="popup-overlay" >
    <div
      className="popup-box" >
      <button className="close-btn" onClick={() => setIsPopupOpen(false)}>
       ❌
      </button>
      <img
        src={selectedCard.image}
        alt={selectedCard.name}
        className="popup-image"
      />
      <div id='buydetails' style={{background:'white'}}>
      <h1  style={{background:'white'}}>{selectedCard.name}</h1>
      <h4 style={{background:'white'}}> Rating :{selectedCard.rating}</h4>
      <h3  style={{background:'white'}}>Brand: {selectedCard.brand}</h3>
      <p  style={{background:'white'}}>{selectedCard.description}</p>
      <p  style={{background:'white'}}>Price: ${selectedCard.price}</p>
      <button className='buyNow'  >Buy Now</button>
      </div>
    </div>
  </div>
) : ""}



    </>
  );
};

export default Home;