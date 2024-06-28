import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";


let Body = () => {
    let [restaurantAll, setRestaurantAll] = useState([]);
    let [restaurantSearch, setRestaurantSearch] = useState([]);
    let [searchValue, setSearchValue] = useState('');
    let  api = async () => {
        let responseData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let data = await responseData.json();
        setRestaurantAll(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantSearch(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    useEffect(() => {
        api();
    },[]);

    return restaurantAll.length === 0 ? <Shimmer /> : (
        <div>
            <div className="search_box">
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="search" onClick={() => {
                    let search = restaurantAll.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                    setRestaurantSearch(search);
                }}>Search</button>
            </div>
            <button className="top-restaurant" onClick={() =>{
                let restaurantFiltered = restaurantAll.filter((res) => res.info.avgRating > 4.2);

                setRestaurantSearch(restaurantFiltered);
            }}>
                Top Rated Restaurants
            </button>
            <div className="container">
                    {
                        restaurantSearch.map(function(restaurant) {
                            return (
                            <Link to={"/restaurantMenu/" + restaurant.info.id} key={restaurant.info.id}><Restaurant key={restaurant.info.id} obj={restaurant.info} /></Link>
                            )
                        })
                    }
                    
            </div>
        </div>
    )
};

export default Body;