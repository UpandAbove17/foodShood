// import { useEffect,useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL } from "../config";
// import Shimmer from "./Shimmer";


// const RestaurantDetails = () => {

//     const params = useParams();
//     const {resId} = params;
    

//     const[restaurant , setRestaurant] = useState(null);
//     const[menu , setMenu]  = useState({});


//     useEffect(() => {
//         getRestaurantData();
//     },[])

//     async function getRestaurantData(){

//         const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8537051&lng=80.9484195&restaurantId="
//         +resId+"&catalog_qa=undefined&submitAction=ENTER");
//         const response_data = await response.json();
//         const resInfo = response_data?.data?.cards[0]?.card?.card?.info;
//         const menuList = response_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        

//         setRestaurant(resInfo);
        
//         setMenu(menuList);
//     }

//     return !restaurant ?(<Shimmer />)  : (
//         <div className="detailedRestaurantView">
//             <div className="restaurantSummary">
//                 <img
//                     src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
//                     className="resImage"
//                  />
//                 <h3>{restaurant?.name}</h3>
//                 <h3>{restaurant?.city}</h3>
//                 <h3>{restaurant?.avgRating} stars</h3>
                
//             </div>
//             <div className="MenuItems">
                
//                 <h3>Menu Items</h3>

//                 {
//                     menu?.map((item)=> {
//                         // key is essential parameter while using map , 
//                         // the thing which needs to be rendered will be given in between the tags
//                         return <li key={item.card.info.id}>{item?.card?.info?.name}</li>
//                     })
//                 }
                
                

//             </div>
//         </div>
//     )
// }

// export default RestaurantDetails;