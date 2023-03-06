import { Fragment, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import Main from "./Components/Main";
import cartProvider from "./Store/Cartprovider";



const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <cartProvider>
      <NavigationBar openCart={openCart} setOpenCart={setOpenCart}/>
      <Main openCart={openCart} setOpenCart={setOpenCart} DUMMY_MEALS={DUMMY_MEALS}/>
      
    </cartProvider>
  );
}

export default App;
