import bgImage from "../meals.jpg";
import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";




export default function Main(props) {
  const [cartItems, setCartItem] = useState([]);
  console.log(cartItems)
    
    return(
        <main>
            <div className="w-full relative mb-[7rem]">
                <img src={bgImage} alt="Table of different dishes" className="w-full h-[20rem] object-cover clipPath" />
                <div className="text-white top-[11rem] left-[50%] -translate-x-[50%] shadow-lg w-[35%]  bg-gray-600 rounded-lg px-4 py-5 text-center space-y-4 absolute">
                    <h1 className="text-[2rem] capitalize font-bold ">delicious food, delivered to you</h1>
                    <p>
                        Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                    </p>
                    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </div>
            </div>
            <div className="bg-white mx-auto w-[55%] rounded-lg px-10 py-8">
             
              {props.DUMMY_MEALS.map((meals, index) => 
                <Menu meals={meals}  key={index} cartItems={cartItems} setCartItem={setCartItem}/>
               )}
            
            </div>
            <Cart openCart={props.openCart} setOpenCart={props.setOpenCart} cartItems={cartItems}/>
        </main>
    )
}