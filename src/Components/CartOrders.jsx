

export default function CartOders() {
    return (
        <div className="flex justify-between pb-8 border-b-2 border-red-700 items-center mb-5">
            <div>
                <h3 className="capitalize font-bold tracking-wide mb-3">Sushi</h3> 
                <div className="flex gap-10">
                    <p className="text-orange-500 font-bold text-[1.3rem]"><span>$</span>22</p>
                    <span className="border-[1px] px-2 py-1 rounded-md font-bold "><span className="mr-1">x</span>1</span>
                </div>
            </div>
            <div >
                <button className="text-red-500 font-bold mr-2 border-[1px] hover:text-white border-red-500 px-4 py-1 rounded-md hover:bg-red-900 transition-all ease-in-out duration-150">-</button>
                <button className="text-red-500 font-bold mr-2 border-[1px] hover:text-white border-red-500 px-4 py-1 rounded-md hover:bg-red-900 transition-all ease-in-out duration-150">+</button>
                
            </div>
        </div>
    )
}