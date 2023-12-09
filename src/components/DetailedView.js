import { useParams } from "react-router-dom"
import useRestaurant from "../Utils/useRestaurant" 
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";


const DetailedView = () => {


    const {resId} = useParams();

    const restaurant = useRestaurant(resId);

    // console.log(restaurant);

    

    return !restaurant ?(<Shimmer />)  : (
        <div className="detailedRestaurantView">
            <div className="restaurantSummary">
                <img
                    src={IMG_CDN_URL+ restaurant?.resInfo?.cloudinaryImageId}
                    className="resImage"
                 />
                <h3>{restaurant?.resInfo?.name}</h3>
                <h3>{restaurant?.resInfo?.city}</h3>
                <h3>{restaurant?.resInfo?.avgRating} stars</h3>
                
            </div>
            <div className="MenuItems">
                
                <h3>Menu Items</h3>

                {
                    restaurant?.menu?.map((item)=> {
                        // key is essential parameter while using map , 
                        // the thing which needs to be rendered will be given in between the tags
                        return <li key={item.card.info.id}>{item?.card?.info?.name}</li>
                    })
                }
                
                

            </div>
        </div>
    )
}

export default DetailedView;