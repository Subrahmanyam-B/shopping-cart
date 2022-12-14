import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeCartQuantity} = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="bg-white flex-col rounded-lg shadow-lg overflow-hidden">
      <img src={imgUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="flex-col">
        <p className="flex justify-between text-xl p-4">
          <span className="font-semibold">{name}</span>
          <span className="text-gray-500">{formatCurrency(price)}</span>
        </p>
        <div className="p-4">
          {quantity === 0 ? (
            <button onClick={()=>increaseCartQuantity(id)} className="bg-indigo-600 w-full rounded-sm text-white p-2 text-center">
              + Add to Cart
            </button>
          ) : <div className="flex flex-col items-center gap-1">
               <div className = "flex items-center justify-center gap-1" >
                  <button onClick={()=>increaseCartQuantity(id)} className="bg-indigo-600 w-10 rounded-sm text-white p-2 text-center font-semibold">+</button>
                  <div><span className="text-2xl px-5">{quantity}</span></div>
                  <button onClick={()=>decreaseCartQuantity(id)} className="bg-indigo-600 w-10 rounded-sm text-white p-2 text-center font-semibold">-</button>
               </div>
               <button onClick={()=>removeCartQuantity(id)} className="bg-red-700  rounded-sm text-sm mt-1 text-white p-2 text-center">Remove</button>
            </div>}
        </div>
      </div>
    </div>
  );
}
