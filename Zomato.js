import React, { useState } from 'react';
import './Zomato.css';

const restaurantsData = [
  {
    name: 'Restaurant 1',
    img: 'https://img.freepik.com/premium-vector/italian-food-vector-logo-badge-design_106546-1317.jpg',
    cuisine: 'Italian',
    rating: 3.9,
    subItems: [
      { name: 'pasta', img: 'https://e7.pngegg.com/pngimages/811/675/png-clipart-pasta-bolognese-sauce-carbonara-italian-cuisine-spaghetti-with-meatballs-restaurant-food-item-food-recipe-thumbnail.png', cost: '150/-' },
      { name: 'Pizza', img: 'https://w7.pngwing.com/pngs/714/325/png-transparent-lasagne-italian-cuisine-pasta-food-spinach-miscellaneous-beef-recipe-thumbnail.png', cost: '150/-' },
      { name: 'Reginald', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5hmyPajzR8U7DGnLUTRi3Pc7-FccsvY_PWA69fhURBml2xZnjtJDR8zJu2IxGkgc9Hc&usqp=CAU',cost:'100/-'},],
 },
  {
    name: 'Restaurant 2',
    img: 'https://www.pngfind.com/pngs/m/599-5998434_palm-palace-indian-restaurant-restaurant-logo-india-transparent.png',
    cuisine: 'Indian',
    rating: 4.7,
    subItems: [
      { name: 'Biryani', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLlrwe5UvcOWbLiGE2miSqmo5bDzfgVkAc9tFhiyZsg&s', cost: '10/-' },
      { name: 'ice-Cream', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXEnSIkTGEXbakkmqxg-EAhWwUnHLyORW7bT1Nb489A&s', cost: '15/-' },
      { name: 'Pizza', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikaXbn7RUwRvU_NiHr5GlJhojqUwST6N5WN1_GRxztg&s', cost: '15/-' },
    ],
  },
  {
    name: 'Restaurant 3',
    img: 'https://cdni.iconscout.com/illustration/premium/thumb/spanish-cuisine-6771840-5650001.png?f=webp',
    cuisine: 'Spanish',
    rating: 4.2,
    subItems: [
      { name: 'Causine', img: 'https://w7.pngwing.com/pngs/444/740/png-transparent-paella-spanish-cuisine-arroz-a-la-valenciana-portuguese-cuisine-rice-food-seafood-recipe-thumbnail.png', cost: '10/-' },
      { name: 'stickles', img: 'https://w7.pngwing.com/pngs/603/669/png-transparent-churro-spanish-cuisine-donuts-hot-chocolate-cuban-cuisine-chocolate-food-recipe-cooking-thumbnail.png', cost: '15/-' },
      { name: 'Mamus', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4f4RvYg-fjm9aZKlzF-yVJusQEt1jsaOdbtPbeaRY4UbeXIRfD_6kPFNT_lJPY7YGZb0&usqp=CAU', cost: '15/-' },
    ],
  },
  {
    name: 'Restaurant 4',
    img: 'https://png.pngtree.com/png-vector/20220629/ourlarge/pngtree-chinese-restaurant-cartoon-illustration-of-building-facade-and-lanterns-png-image_5600574.png',
    cuisine: 'Chinese',
    rating: 4.0,
    subItems: [
      { name: 'Burger', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHZD6OgYO4gATNOyFCX4Y3kDrXrc9RiiMMmXbqclC4A&s', cost: '199/-' },
      { name: 'Pizza', img: 'https://w7.pngwing.com/pngs/137/39/png-transparent-dish-on-plate-gobi-manchurian-indian-chinese-cuisine-chilli-chicken-chicken-food-animals-recipe-thumbnail.png', cost: '100/-' },
      { name: 'pasta', img: 'https://e7.pngegg.com/pngimages/788/786/png-clipart-orange-spaghetti-chinese-noodles-vegetarian-cuisine-food-australian-food-food-recipe-thumbnail.png', cost: '150/-' },
    ],
  },
  {
    name: 'Restaurant 5',
    img: 'https://img.favpng.com/3/18/9/korean-cuisine-riverside-korean-restaurant-barbecue-indian-cuisine-thai-cuisine-png-favpng-necnBGP1DPC5LE3ez10LcXdJQ.jpg',
    cuisine: 'Korean',
    rating: 3.5,
    subItems: [
      { name: 'Noodles', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIf3Qe9UcrkvK7mgNk_UtO7LWglBBpdFtO7B44YvLD0Q&s', cost: '10/-' },
      { name: 'Stickles', img: 'https://w7.pngwing.com/pngs/389/317/png-transparent-korean-cuisine-kimchi-food-pickling-fried-chicken-fried-chicken-korean-cuisine-kimchi-food-thumbnail.png', cost: '15/-' },
      { name: 'Soup', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CDGbSyKNSGSPgAQLXMoSuo0tIA9FX-qfDBonyHoxUg&s', cost: '15/-' },
    ],
  }
  // Add subItems for other restaurants as well
  // ...
];
const ZomatoApp = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showAddToCartMsg, setShowAddToCartMsg] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleRestaurantSelection = (restaurant) => {
    setSelectedRestaurant(restaurant === selectedRestaurant ? null : restaurant);
  };

  const handleAddToCart = (subItem) => {
    const existingItem = cartItems.find((item) => item.name === subItem.name);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.name === subItem.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
      alert('Item already added to cart! Quantity increased.');
    } else {
      setCartItems([...cartItems, { ...subItem, quantity: 1 }]);
      alert('Item added to cart!');
    }
    setShowAddToCartMsg(true);
  setTimeout(() => setShowAddToCartMsg(false), 2000);
  };
  

  
  const handleRemoveFromCart = (subItem) => {
    const existingItem = cartItems.find((item) => item.name === subItem.name);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.name !== subItem.name));
      } else {
        const updatedCartItems = cartItems.map((item) =>
          item.name === subItem.name ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems);
      }
    }
  };

  const getTotalCost = () => {
    const totalCost = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.cost.replace('$', '')) * item.quantity,
      0
    );
    return totalCost.toFixed(2);
  };
  

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.cost.replace('$', '')) * item.quantity, 0);
  };

  const handlePurchase = () => {
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();
    alert(`Total Items: ${totalItems}, Total Price: $${totalPrice.toFixed(2)}`);
    alert('thank you for purchasing!!')
    setCartItems([]); // Clear the cart after purchase
  };

  return (
    <div className="zomato-app">
      <header>
        <h1><u>Welcome To VSV Foods</u></h1>

         <marquee scrollamount="25%" direction="right"><img src="https://e7.pngegg.com/pngimages/101/848/png-clipart-pizza-delivery-fast-food-restaurant-pizza-delivery-pizza-food-logo-thumbnail.png" alt="Zomato" /> </marquee>
      </header>
      <main>
       
        <div className="restaurant-list">
          <h2>Top Restaurants</h2>
          <ul>
            {restaurantsData.map((restaurant, index) => (
              <li key={index}>
                <button onClick={() => handleRestaurantSelection(restaurant)}>
                  <img src={restaurant.img} alt={restaurant.name} />
                  <h3>{restaurant.name}</h3>
                  <p>Cuisine: {restaurant.cuisine}</p>
                  <p>Rating: {restaurant.rating}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="restaurant-details">
          {selectedRestaurant && (
             <div>
              <h2>{selectedRestaurant.name}</h2>
              <img src={selectedRestaurant.img} alt={selectedRestaurant.name} />
              <h3>Cuisine: {selectedRestaurant.cuisine}</h3>
              <h3>Rating: {selectedRestaurant.rating}</h3>
              <h3>Sub Items:</h3>
              <ul>
                {selectedRestaurant.subItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>Cost: {item.cost}</p>
                    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="cart-section">
          <button className="cart-button" onClick={() => setShowCart(!showCart) }><br/>
          <img id="carticon" src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"></img><br/>
               Cart ({cartItems.length})
          </button>
          {showCart && (
            <div className="cart">
              <h2>Cart</h2>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>Cost: {item.cost}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                  </li>
                ))}
              </ul>
              <p>Total Cost: ${getTotalCost()}</p>
              <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
            </div>
          )}
        </div>
      </main>
      {showAddToCartMsg && <div className="add-to-cart-msg">Item added to cart!</div>}
    </div>
  );
};

export default ZomatoApp;