import data from "../utils/mockData";
import Restaurant from "./Restaurant";
import { useState } from "react";

let Body = () => {
    let restaurants = data.gridElements.infoWithStyle.restaurants;
    let [restaurantAll, setRestaurantAll] = useState(restaurants);

    return (
        <div>
            <button className="top-restaurant" onClick={() =>{
                let restaurantFiltered = restaurantAll.filter((res) => res.info.avgRating > 4.2);

                setRestaurantAll(restaurantFiltered);
            }}>
                Top Rated Restaurants
            </button>
            <div className="container">
                    {
                        restaurantAll.map(function(restaurant) {
                            return (
                            <Restaurant key={restaurant.info.id} obj={restaurant.info} />
                            )
                        })
                    }
                    
            </div>
        </div>
    )
};

export default Body;