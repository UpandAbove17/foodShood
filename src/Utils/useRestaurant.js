import { useEffect, useState } from "react";

const useRestaurant = (resId ) => {
    const [restaurant , setRestaurant] = useState(null);

    useEffect(() => {
        getResInfo();
    },[])

    async function getResInfo() {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8537051&lng=80.9484195&restaurantId="
        +resId+"&catalog_qa=undefined&submitAction=ENTER");
        const response = await data.json();


        const modifiedData = {
        resInfo : response?.data?.cards[0]?.card?.card?.info,
        menu : response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards,
        
        }
        setRestaurant(modifiedData);
    }

  return restaurant;  
}
export default useRestaurant;