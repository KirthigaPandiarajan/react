import {CLOUDINARY_URL, STAR_URL} from "../utils/constants";

let Restaurant = (props) => {
    let {cloudinaryImageId, name, sla, avgRating, cuisines} = props?.obj;
    return (
        <div className="card">
            <img src={CLOUDINARY_URL + cloudinaryImageId} />
            <div className="name">{name}</div>
            <div>
                <span className="rating">{avgRating}
                    <img src={STAR_URL} />
                </span>
                <span className="time">{sla.slaString}</span>
            </div>
            <div className="cusinines">{cuisines}</div>
        </div>
    )
};

export default Restaurant;