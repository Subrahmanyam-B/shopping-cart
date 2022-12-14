import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

export default function Store() {
  
  return (<>
      <h1 className = "text-3xl py-5">Store</h1>
    <div className = "grid gap-4 lg:grid-cols-4 md:grid-cols-2">
      {storeItems.map((item) => (
        <div>
          <StoreItem {...item}/>
        </div>
      ))}
    </div>
  </>
  );
} 