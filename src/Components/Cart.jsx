
import CartOrders from "./CartOrders";
import { useEffect, useState } from "react";

export default function Cart(props) {

    let cartMenuList = [];



    const openCartHandler = () => {
        props.setOpenCart(!props.openCart)
    }

    return (<div className={`bg-black bg-opacity-70 top-0 left-0 h-screen w-full z-20 ${props.openCart? "!absolute" : "hidden"}`}>
        
        <div className="px-8 py-5 z-100 bg-white opacity-100 w-[41%] rounded-md  top-[50%] fixed left-[50%] -translate-x-[50%] -translate-y-[50%]">
            {
                cartMenuList.map((items, index) => <CartOrders key={index} cartMenuList={items}/>

                )
            }
            
            <div className="">
                <div className="flex justify-between mb-4 font-bold text-[1.5rem] capitalize">
                    <h2>total amount</h2>
                    <p><span>$</span> {props.total}</p>
                </div>
                <div className="float-right">
                    <button className="border-red-900 border-[1px] font-bold px-8 py-1 rounded-2xl mr-4  text-red-900" onClick={openCartHandler}>Close</button>
                    <button className="bg-red-900 font-bold px-8 py-1 rounded-2xl  text-white">Order</button>
                </div>
            </div>
        </div>
        
    </div>)

}