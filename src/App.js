import { Fragment, useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import Main from "./Components/Main";
import Cart from "./Components/Cart";

function App() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <Fragment >
      <NavigationBar openCart={openCart} setOpenCart={setOpenCart}/>
      <Main openCart={openCart} setOpenCart={setOpenCart}/>
      
    </Fragment>
  );
}

export default App;
