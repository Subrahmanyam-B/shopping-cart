import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
   id : number, 
   quantity : number
}

export function CartItem({id , quantity} : CartItemProps){
   const {removeCartQuantity , getItemQuantity} = useShoppingCart()
   const item = storeItems.find( i => i.id === id)

   if (item == null) return null

   return (
      <div className="my-2 mx-4 flex justify-between">
         <div className = "flex">
            <img className="rounded-sm" src={item.imgUrl} style = {{width : "150px", height : "90px" , objectFit : "cover" }}/>
            <div className="flex flex-col justify-center px-5">
               <div className = "font-semibold text-xl">{item.name} <span className = "text-sm text-gray-700">x{getItemQuantity(item.id)}</span></div>
               <div className = "text-gray-700">{formatCurrency(item.price)}</div>
            </div>
         </div>
         <div className=" flex items-center text-xl font-semibold gap-2">
            <div className="text-gray-800">{formatCurrency(item.price*getItemQuantity(id))}</div>
            <button onClick={() => removeCartQuantity(id)} className = "w-7 h-7 flex justify-center items-center text-white bg-red-700 rounded-sm hover:bg-transparent hover:border-red-700 hover:shadow-lg hover:text-red-700">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
            </button>
         </div>
      </div>
   )

}