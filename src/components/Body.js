import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnLine from "../Utils/useOnLine";


function filterData(searchText, restaurants) {
    // 8 restraunt list = > filtered  rest with "King"
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  
    return filterData;
  }
  
  const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
  
    // empty dependency array => once after render
    // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
    useEffect(() => {
      // API call 
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      // Optional Chaining
      setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements.infoWithStyle.restaurants);
    }

    const isOnLine = useOnLine();
    if(!isOnLine) {
      return <h1>Offline , Please Check Internet Connection!!</h1>
    }
  
    // not render component (Early return)
    if (!allRestaurants) return null;

  
    return allRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //need to filter the data
              const data = filterData(searchText, allRestaurants);
              // update the state - restaurants
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurant-list">
          {/* You have to write logic for NO restraunt fount here */}
          {filteredRestaurants.map((restaurant) => {
            return (
              // key should be in the Link component
              <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                <RestaurantCard {...restaurant?.info}  />
              </Link>
            );
          })}
        </div>
      </>
    );
  };
  
  export default Body;