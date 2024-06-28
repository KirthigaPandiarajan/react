import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const Menu = () => {
    let [menu, setMenu] = useState(null);
    let {resId} = useParams();
    const api = MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER";
    const apiFetch = async () => {
        const response = await fetch(api);
        const res = await response.json();
        setMenu(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    };
    useEffect(() => {
        apiFetch();
    }, []);
    if(menu === null) {
        return <Shimmer />;
    }
    return (
        <div>
            <div>Menu</div>
            <ul>
                {
                    menu.map((item) => <li key={item.card.info.id}>{item.card.info.name}</li>
                    )
                }
                
            </ul>
        </div>
    )
};

export default Menu;