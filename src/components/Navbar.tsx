import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const {openCart , cartQuantity} = useShoppingCart()

  return (
    <>
      <div className=" bg-white mx-0 flex h-16 max-w-screen-xxl items-center gap-8 px-6 sm:px-6 lg:px-10">
        <div className="flex flex-1 items-center justify-between">
          <nav aria-label="Site Nav" className="block">
            <ul className="flex items-center gap-6 text-lg font-semibold">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/store"
                >
                  Store
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center text-lg">
            <button
              onClick = {openCart}
              className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              <span className="sr-only"> </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
               </svg>
            </button>
            <div className = "text-white rounded-full h-5 w-5 bg-red-700 flex justify-center absolute top-10 translate-x-8 items-center">{cartQuantity}</div>
          </div>
        </div>
      </div>
    </>
  );
}
