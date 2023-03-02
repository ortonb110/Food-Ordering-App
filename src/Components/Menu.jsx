import { Fragment, useState } from "react";



export default function Menu(props) {
    const [quantity, setQuantity] = useState(1)
    const quantityHandler = (e) => {
        setQuantity(e.target.value)
    }
    
    const addHandler = () => {
        props.setCartItem({
            name: props.meals.name,
            price: props.meals.price,
            quantity: quantity
        })
    }


    return (
        <Fragment>
            <div className="flex justify-between border-b-[1px] border-gray-200 pb-4 mb-5">
                <div>
                    <h3 className="capitalize font-bold tracking-wide">{props.meals.name}</h3>
                    <p className="italic">{props.meals.description}</p>
                    <p className="text-orange-500 font-bold text-[1.3rem]"><span>$</span>{props.meals.price}</p>
                </div>
                <div className="">
                    <div className="flex gap-2 mb-3">
                        <h3 className="font-bold capitalize">quantity</h3>
                        <input type="number" value={quantity} onChange={quantityHandler} className="w-[2rem] border-[1px] border-gray-200 text-center focus:ring-1 focus:ring-indigo-400 focus:outline-none rounded-md"/>
                    </div>
                    <button onClick={addHandler} className="px-10 font-bold hover:bg-red-900  py-2 bg-red-800 text-white capitalize rounded-3xl transition-all ease-in-out duration-100 active:translate-y-1 ">+ add</button>
                </div>
            </div>
        </Fragment>
    )
}