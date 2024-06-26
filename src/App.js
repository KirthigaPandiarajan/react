// let root = ReactDOM.createRoot(document.getElementById("root"));
// let h1 = React.createElement("h1", {className: "heading"}, "Hello World!");
// root.render(h1);

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement(
//             "h1",
//             {className: "heading"},
//             "Hello World"
//         )
//     )
// );
// root.render(parent);


// let root = ReactDOM.createRoot(document.getElementById('root'));
// let parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement(
//             "h1",
//             {className: "heading"},
//             "Hello World"
//         ),
//         React.createElement(
//             "h2",
//             {className: "heading"},
//             "Hello World"
//         )]
//     )
// );
// root.render(parent);


// import React from "react";
// import ReactDOM from "react-dom/client";

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement(
//             "h1",
//             {className: "heading"},
//             "Hello World"
//         ),
//         React.createElement(
//             "h2",
//             {className: "heading"},
//             "Hello World"
//         )]
//     )
// );
// root.render(parent);


// import React from "react";
// import ReactDOM from "react-dom/client";

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let parent = <h1 className="heading">Hello World!</h1>;
// root.render(parent);


// import React from "react";
// import ReactDOM from "react-dom/client";

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let parent = (
//     <div className="parent">
//         <div className="child">
//             <h1 className="heading">Hello World!</h1>
//             <h2 className="heading">Hello World!</h2>
//         </div>
//     </div>

// );
// root.render(parent);


// import React from "react";
// import ReactDOM from "react-dom/client";

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let Parent = () => {
//     return <div className="parent">
//         <div className="child">
//             <h1 className="heading">Hello World!</h1>
//             <Child />
//             <h2 className="heading">Hello World!</h2>
//         </div>
//     </div>

// };
// let Child = () => <h1>Kritz!<GrandParent /></h1>;
// let GrandParent = () => (
//    <div> 
//     <h1>Mango</h1>
//     <h2>Badam</h2>
//     <h3>Cakes</h3>
//     </div>
// );
// root.render(<Parent />);


// import React from "react";
// import ReactDOM from "react-dom/client";

// let root = ReactDOM.createRoot(document.getElementById('root'));
// let Parent = function() {
//     return <h5>Chocolate</h5>;
// }; 
// let child = (<div><Parent></Parent>{Parent()}<h4>Ice cream</h4></div>);

// let GrandParent = () => (
//    <div> 
//     <h1>Mango</h1>
//     <h2>Badam</h2>
//     <h3>Cakes</h3>
//     {child}
//     {Parent()}
//      </div>
// );
// root.render(<GrandParent></GrandParent>);


// import React from "react";
// import ReactDOM from "react-dom/client";

// let root = ReactDOM.createRoot(document.getElementById("root"));
// let Header = () => {
//     return (
//         <div className="header">
//             <div className="logo">
//                 <img src="https://i.pinimg.com/736x/9e/70/be/9e70be8c7684bab4537c7b682d2eb687.jpg" />
//             </div>
//             <div className="nav">
//                 <div>Home</div>
//                 <div>About</div>
//                 <div>Contact</div>
//                 <div>Address</div>
//                 <div>Cart</div>
//             </div>
//         </div>
//     )
// };
// let Footer = () => {
//     return (
//         <div className="footer">
//             <div className="copyright"></div>
//             <div className="help"></div>
//         </div>
//     )
// };
// let Restaurant = (props) => {
//     let {cloudinaryImageId, name, sla, avgRating, cuisines} = props.obj;
//     return (
//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
//             <div className="name">{name}</div>
//             <div>
//                 <span className="rating">{avgRating}
//                     <img src="https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-115283.jpg" />
//                 </span>
//                 <span className="time">{sla.slaString}</span>
//             </div>
//             <div className="cusinines">{cuisines}</div>
//         </div>
//     )
// };
// let data = {
//     "id": "top_brands_for_you",
//     "gridElements": {
//         "infoWithStyle": {
//             "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
//             "restaurants": [{
//                 "info": {
//                 "id": "485445",
//                 "name": "Chinese Wok",
//                 "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//                 "locality": "Old Mahabalipuram Road OMR",
//                 "areaName": "Old Mahabalipuram Road OMR",
//                 "costForTwo": "₹250 for two",
//                 "cuisines": [
//                     "Chinese",
//                     "Asian",
//                     "Tibetan",
//                     "Desserts"
//                 ],
//                 "avgRating": 4,
//                 "parentId": "61955",
//                 "avgRatingString": "4.0",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 43,
//                     "lastMileTravel": 4,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "40-45 mins",
//                     "lastMileTravelString": "4.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 02:00:00",
//                     "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "ITEMS",
//                     "subHeader": "AT ₹199"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "678545",
//                 "name": "Wow! Momo",
//                 "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
//                 "locality": "ST. Thomas Mount",
//                 "areaName": "Sholinganallur Signal",
//                 "costForTwo": "₹300 for two",
//                 "cuisines": [
//                     "Tibetan",
//                     "Healthy Food",
//                     "Asian",
//                     "Chinese",
//                     "Snacks",
//                     "Continental",
//                     "Desserts",
//                     "Beverages"
//                 ],
//                 "avgRating": 4.1,
//                 "parentId": "1776",
//                 "avgRatingString": "4.1",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 36,
//                     "lastMileTravel": 1.6,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "35-40 mins",
//                     "lastMileTravelString": "1.6 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 03:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Chinese.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "ITEMS",
//                     "subHeader": "AT ₹99"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/wow-momo-st-thomas-mount-sholinganallur-signal-chennai-678545",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "690702",
//                 "name": "Pizza Hut",
//                 "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//                 "locality": "Karapakkam",
//                 "areaName": "Thoraipakkam",
//                 "costForTwo": "₹350 for two",
//                 "cuisines": [
//                     "Pizzas"
//                 ],
//                 "avgRating": 4.2,
//                 "parentId": "721",
//                 "avgRatingString": "4.2",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 40,
//                     "lastMileTravel": 6.4,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "40-45 mins",
//                     "lastMileTravelString": "6.4 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 03:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "60% OFF",
//                     "subHeader": "UPTO ₹120"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/pizza-hut-karapakkam-thoraipakkam-chennai-690702",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "307780",
//                 "name": "Barbeque Nation",
//                 "cloudinaryImageId": "ajmtkvs0nhmk4fhcxwjf",
//                 "locality": "Thuraipakkam",
//                 "areaName": "Thuraipakkam",
//                 "costForTwo": "₹600 for two",
//                 "cuisines": [
//                     "North Indian",
//                     "Barbecue",
//                     "Biryani",
//                     "Kebabs",
//                     "Mughlai",
//                     "Desserts"
//                 ],
//                 "avgRating": 3.9,
//                 "parentId": "2438",
//                 "avgRatingString": "3.9",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 46,
//                     "lastMileTravel": 6.5,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "45-50 mins",
//                     "lastMileTravelString": "6.5 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:30:00",
//                     "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "₹150 OFF",
//                     "subHeader": "ABOVE ₹599",
//                     "discountTag": "FLAT DEAL"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/barbeque-nation-thuraipakkam-chennai-307780",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "234986",
//                 "name": "McDonald's",
//                 "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/458385cd-a8f2-459b-9fb0-12dba021332d_234986.jpg",
//                 "locality": "Gire Thoraipakkam",
//                 "areaName": "Nehru Nagar",
//                 "costForTwo": "₹400 for two",
//                 "cuisines": [
//                     "Burgers",
//                     "Beverages",
//                     "Cafe",
//                     "Desserts"
//                 ],
//                 "avgRating": 4.3,
//                 "parentId": "630",
//                 "avgRatingString": "4.3",
//                 "totalRatingsString": "10K+",
//                 "sla": {
//                     "deliveryTime": 29,
//                     "lastMileTravel": 4,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "25-30 mins",
//                     "lastMileTravelString": "4.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 02:45:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Burger.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Burger.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "30% OFF",
//                     "subHeader": "UPTO ₹75"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/mcdonalds-gire-thoraipakkam-nehru-nagar-chennai-234986",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "564242",
//                 "name": "KFC",
//                 "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_564242.JPG",
//                 "locality": "Rajiv Gandhi Salai",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹400 for two",
//                 "cuisines": [
//                     "Burgers",
//                     "Fast Food",
//                     "Rolls & Wraps"
//                 ],
//                 "avgRating": 4.2,
//                 "parentId": "547",
//                 "avgRatingString": "4.2",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 34,
//                     "lastMileTravel": 2,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "2.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Burger.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Burger.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "40% OFF",
//                     "subHeader": "UPTO ₹80"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/kfc-rajiv-gandhi-salai-sholinganallur-chennai-564242",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "25881",
//                 "name": "Subway",
//                 "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_25881.JPG",
//                 "locality": "Shollinganalur",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹350 for two",
//                 "cuisines": [
//                     "Salads",
//                     "Snacks",
//                     "Desserts",
//                     "Beverages"
//                 ],
//                 "avgRating": 4.4,
//                 "parentId": "2",
//                 "avgRatingString": "4.4",
//                 "totalRatingsString": "10K+",
//                 "sla": {
//                     "deliveryTime": 16,
//                     "lastMileTravel": 1,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "15-20 mins",
//                     "lastMileTravelString": "1.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:57:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "aggregatedDiscountInfoV2": {},
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/subway-shollinganalur-sholinganallur-chennai-25881",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "678546",
//                 "name": "Wow! China",
//                 "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
//                 "locality": "ST. Thomas Mount",
//                 "areaName": "Sholinganallur Signal",
//                 "costForTwo": "₹300 for two",
//                 "cuisines": [
//                     "Tibetan",
//                     "Chinese",
//                     "Asian",
//                     "Snacks",
//                     "Continental",
//                     "Desserts",
//                     "Beverages"
//                 ],
//                 "avgRating": 3.9,
//                 "parentId": "226836",
//                 "avgRatingString": "3.9",
//                 "totalRatingsString": "500+",
//                 "sla": {
//                     "deliveryTime": 34,
//                     "lastMileTravel": 1.6,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "1.6 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 03:00:00",
//                     "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "50% OFF",
//                     "subHeader": "UPTO ₹100"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/wow-china-st-thomas-mount-sholinganallur-signal-chennai-678546",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "355768",
//                 "name": "Grameen Kulfi",
//                 "cloudinaryImageId": "cen5ate9scfbku6jr7y9",
//                 "locality": "Anna Street",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹120 for two",
//                 "cuisines": [
//                     "Ice Cream",
//                     "Desserts"
//                 ],
//                 "avgRating": 4.3,
//                 "veg": true,
//                 "parentId": "12175",
//                 "avgRatingString": "4.3",
//                 "totalRatingsString": "100+",
//                 "sla": {
//                     "deliveryTime": 19,
//                     "lastMileTravel": 2.2,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "15-20 mins",
//                     "lastMileTravelString": "2.2 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:20:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "v1695133679/badges/Pure_Veg111.png",
//                     "description": "pureveg"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "pureveg",
//                             "imageId": "v1695133679/badges/Pure_Veg111.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "60% OFF",
//                     "subHeader": "UPTO ₹120"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/grameen-kulfi-anna-street-sholinganallur-chennai-355768",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "104680",
//                 "name": "Domino's Pizza",
//                 "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//                 "locality": "KAILASH OMR SHOLINAGANALLUR CHENNAI",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹400 for two",
//                 "cuisines": [
//                     "Pizzas",
//                     "Italian",
//                     "Pastas",
//                     "Desserts"
//                 ],
//                 "avgRating": 4.2,
//                 "parentId": "2456",
//                 "avgRatingString": "4.2",
//                 "totalRatingsString": "5K+",
//                 "sla": {
//                     "deliveryTime": 25,
//                     "lastMileTravel": 1.2,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "20-25 mins",
//                     "lastMileTravelString": "1.2 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:59:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "₹150 OFF",
//                     "subHeader": "ABOVE ₹299",
//                     "discountTag": "FLAT DEAL"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/dominos-pizza-kailash-omr-sholinaganallur-sholinganallur-chennai-104680",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "397254",
//                 "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
//                 "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b5c089a5-a673-4a2f-9374-08378e3da502_397254.JPG",
//                 "locality": "Shollinganallur",
//                 "areaName": "OMR Navalur",
//                 "costForTwo": "₹300 for two",
//                 "cuisines": [
//                     "Desserts",
//                     "Ice Cream",
//                     "Ice Cream Cakes"
//                 ],
//                 "avgRating": 4.6,
//                 "veg": true,
//                 "parentId": "582",
//                 "avgRatingString": "4.6",
//                 "totalRatingsString": "500+",
//                 "sla": {
//                     "deliveryTime": 29,
//                     "lastMileTravel": 2.8,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "25-30 mins",
//                     "lastMileTravelString": "2.8 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 00:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "v1695133679/badges/Pure_Veg111.png",
//                     "description": "pureveg"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "pureveg",
//                             "imageId": "v1695133679/badges/Pure_Veg111.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "50% OFF",
//                     "subHeader": "UPTO ₹100"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-shollinganallur-omr-navalur-chennai-397254",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "592991",
//                 "name": "Great Indian Khichdi by EatFit",
//                 "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
//                 "locality": "4th Cross Street",
//                 "areaName": "Muthamzhil Nagar",
//                 "costForTwo": "₹200 for two",
//                 "cuisines": [
//                     "Indian",
//                     "Home Food",
//                     "Healthy Food",
//                     "Snacks"
//                 ],
//                 "avgRating": 4.4,
//                 "parentId": "319582",
//                 "avgRatingString": "4.4",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 22,
//                     "lastMileTravel": 3,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "20-25 mins",
//                     "lastMileTravelString": "3.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "v1695133679/badges/Pure_Veg111.png",
//                     "description": "pureveg"
//                     }],
//                     "textExtendedBadges": [{
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand",
//                     "fontColor": "#7E808C"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "pureveg",
//                             "imageId": "v1695133679/badges/Pure_Veg111.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "",
//                             "fontColor": "#7E808C",
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "brand"
//                         }
//                         }]
//                     }
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "60% OFF",
//                     "subHeader": "UPTO ₹120"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-4th-cross-street-muthamzhil-nagar-chennai-592991",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "678547",
//                 "name": "Wow! Chicken By Wow! Momo",
//                 "cloudinaryImageId": "ee9c2f12dd4fe8e3cb8c0e8a7ecc56be",
//                 "locality": "Ward-197",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹300 for two",
//                 "cuisines": [
//                     "American",
//                     "Snacks",
//                     "Beverages",
//                     "Continental"
//                 ],
//                 "avgRating": 3.8,
//                 "parentId": "268366",
//                 "avgRatingString": "3.8",
//                 "totalRatingsString": "500+",
//                 "sla": {
//                     "deliveryTime": 34,
//                     "lastMileTravel": 1.6,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "1.6 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 03:00:00",
//                     "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "50% OFF",
//                     "subHeader": "UPTO ₹100"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/wow-chicken-by-wow-momo-ward-197-sholinganallur-chennai-678547",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "617972",
//                 "name": "SMOOR",
//                 "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/84929d8c-df28-48d2-a84b-a95c39a078c8_617972.jpg",
//                 "locality": "Ex Serviceman Colony",
//                 "areaName": "Medavakkam",
//                 "costForTwo": "₹350 for two",
//                 "cuisines": [
//                     "Desserts",
//                     "Bakery"
//                 ],
//                 "avgRating": 4.4,
//                 "parentId": "3506",
//                 "avgRatingString": "4.4",
//                 "totalRatingsString": "500+",
//                 "sla": {
//                     "deliveryTime": 32,
//                     "lastMileTravel": 3,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "3.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "textExtendedBadges": [{
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available",
//                     "fontColor": "#7E808C"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "",
//                             "fontColor": "#7E808C",
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "options available"
//                         }
//                         }]
//                     }
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "50% OFF",
//                     "subHeader": "UPTO ₹100"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/smoor-ex-serviceman-colony-medavakkam-chennai-617972",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "592995",
//                 "name": "HRX by EatFit",
//                 "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
//                 "locality": "4th Cross Street",
//                 "areaName": "Muthamzhil Nagar",
//                 "costForTwo": "₹450 for two",
//                 "cuisines": [
//                     "Healthy Food",
//                     "Salads",
//                     "Keto",
//                     "Pastas"
//                 ],
//                 "avgRating": 4.5,
//                 "parentId": "335529",
//                 "avgRatingString": "4.5",
//                 "totalRatingsString": "100+",
//                 "sla": {
//                     "deliveryTime": 24,
//                     "lastMileTravel": 3,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "20-25 mins",
//                     "lastMileTravelString": "3.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "textExtendedBadges": [{
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand",
//                     "fontColor": "#7E808C"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "",
//                             "fontColor": "#7E808C",
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "brand"
//                         }
//                         }]
//                     }
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "50% OFF",
//                     "subHeader": "UPTO ₹100"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-4th-cross-street-muthamzhil-nagar-chennai-592995",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "58162",
//                 "name": "Roll Baby Roll",
//                 "cloudinaryImageId": "uokfd61wpfknjqjfqzrk",
//                 "locality": "GANDHI 2ND\r\nSTREET",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹250 for two",
//                 "cuisines": [
//                     "Indian",
//                     "Rolls & Wraps",
//                     "Fast Food",
//                     "Street Food",
//                     "Snacks",
//                     "Beverages",
//                     "Juices"
//                 ],
//                 "avgRating": 4.3,
//                 "parentId": "4228",
//                 "avgRatingString": "4.3",
//                 "totalRatingsString": "10K+",
//                 "sla": {
//                     "deliveryTime": 28,
//                     "lastMileTravel": 3,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "25-30 mins",
//                     "lastMileTravelString": "3.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-22 23:59:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Rolls.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Rolls.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "40% OFF",
//                     "subHeader": "UPTO ₹80"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/roll-baby-roll-gandhi-2nd-street-sholinganallur-chennai-58162",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "691463",
//                 "name": "The Brownie Studio",
//                 "cloudinaryImageId": "68590de82cfdd60b837cca9399e9127b",
//                 "locality": "perumpakkam main road",
//                 "areaName": "Medavakkam",
//                 "costForTwo": "₹800 for two",
//                 "cuisines": [
//                     "Bakery",
//                     "Desserts",
//                     "Ice Cream",
//                     "Sweets",
//                     "Ice Cream Cakes",
//                     "Cafe"
//                 ],
//                 "avgRating": 4.6,
//                 "parentId": "5976",
//                 "avgRatingString": "4.6",
//                 "totalRatingsString": "500+",
//                 "sla": {
//                     "deliveryTime": 34,
//                     "lastMileTravel": 3,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "3.0 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 00:15:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "textExtendedBadges": [{
//                     "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
//                     "shortDescription": "Perfect cake delivery",
//                     "fontColor": "#7E808C"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "",
//                             "fontColor": "#7E808C",
//                             "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
//                             "shortDescription": "Perfect cake delivery"
//                         }
//                         }]
//                     }
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "₹100 OFF",
//                     "subHeader": "ABOVE ₹749",
//                     "discountTag": "FLAT DEAL"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/the-brownie-studio-perumpakkam-main-road-medavakkam-chennai-691463",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "795325",
//                 "name": "Popeyes",
//                 "cloudinaryImageId": "32b44c3add0a7c57ad034b26aae79f7b",
//                 "locality": "KAILASH NAGAR",
//                 "areaName": "PERUMBAKKAM",
//                 "costForTwo": "₹500 for two",
//                 "cuisines": [
//                     "American",
//                     "Burgers",
//                     "Snacks"
//                 ],
//                 "avgRating": 3.9,
//                 "parentId": "397044",
//                 "avgRatingString": "3.9",
//                 "totalRatingsString": "500+",
//                 "sla": {
//                     "deliveryTime": 35,
//                     "lastMileTravel": 2.5,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "25-35 mins",
//                     "lastMileTravelString": "2.5 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 01:00:00",
//                     "opened": true
//                 },
//                 "badges": {},
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "40% OFF",
//                     "subHeader": "UPTO ₹80"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/popeyes-kailash-nagar-perumbakkam-chennai-795325",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "21477",
//                 "name": "Dindigul Thalappakatti",
//                 "cloudinaryImageId": "yibdrd2b0h8zkw6nbfum",
//                 "locality": "Karappakam",
//                 "areaName": "Karappakam",
//                 "costForTwo": "₹600 for two",
//                 "cuisines": [
//                     "Biryani",
//                     "Barbecue",
//                     "South Indian",
//                     "Chinese",
//                     "North Indian"
//                 ],
//                 "avgRating": 4.3,
//                 "parentId": "332",
//                 "avgRatingString": "4.3",
//                 "totalRatingsString": "10K+",
//                 "sla": {
//                     "deliveryTime": 31,
//                     "lastMileTravel": 4.5,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "30-35 mins",
//                     "lastMileTravelString": "4.5 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 01:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "Rxawards/_CATEGORY-Biryani.png",
//                     "description": "Delivery!"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "Delivery!",
//                             "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "40% OFF",
//                     "subHeader": "UPTO ₹80"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-karappakam-chennai-21477",
//                 "type": "WEBLINK"
//                 }
//             },
//             {
//                 "info": {
//                 "id": "349839",
//                 "name": "NIC Ice Creams",
//                 "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
//                 "locality": "Anna Street",
//                 "areaName": "Sholinganallur",
//                 "costForTwo": "₹120 for two",
//                 "cuisines": [
//                     "Ice Cream",
//                     "Desserts"
//                 ],
//                 "avgRating": 4.4,
//                 "veg": true,
//                 "parentId": "6249",
//                 "avgRatingString": "4.4",
//                 "totalRatingsString": "1K+",
//                 "sla": {
//                     "deliveryTime": 17,
//                     "lastMileTravel": 2.2,
//                     "serviceability": "SERVICEABLE",
//                     "slaString": "15-20 mins",
//                     "lastMileTravelString": "2.2 km",
//                     "iconType": "ICON_TYPE_EMPTY"
//                 },
//                 "availability": {
//                     "nextCloseTime": "2024-06-23 00:00:00",
//                     "opened": true
//                 },
//                 "badges": {
//                     "imageBadges": [{
//                     "imageId": "v1695133679/badges/Pure_Veg111.png",
//                     "description": "pureveg"
//                     }],
//                     "textExtendedBadges": [{
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand",
//                     "fontColor": "#7E808C"
//                     }]
//                 },
//                 "isOpen": true,
//                 "type": "F",
//                 "badgesV2": {
//                     "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "pureveg",
//                             "imageId": "v1695133679/badges/Pure_Veg111.png"
//                         }
//                         }]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [{
//                         "attributes": {
//                             "description": "",
//                             "fontColor": "#7E808C",
//                             "iconId": "guiltfree/GF_Logo_android_3x",
//                             "shortDescription": "brand"
//                         }
//                         }]
//                     }
//                     }
//                 },
//                 "aggregatedDiscountInfoV3": {
//                     "header": "ITEMS",
//                     "subHeader": "AT ₹169"
//                 },
//                 "differentiatedUi": {
//                     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                     "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                     }
//                 },
//                 "reviewsSummary": {},
//                 "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                 "restaurantOfferPresentationInfo": {}
//                 },
//                 "analytics": {},
//                 "cta": {
//                 "link": "https://www.swiggy.com/restaurants/nic-ice-creams-anna-street-sholinganallur-chennai-349839",
//                 "type": "WEBLINK"
//                 }
//             }
//             ],
//             "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
//             "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
//             "style": {
//             "width": {
//                 "type": "TYPE_RELATIVE",
//                 "value": 0.41111112,
//                 "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
//             },
//             "height": {
//                 "type": "TYPE_RELATIVE",
//                 "value": 0.7027027,
//                 "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
//             },
//             "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
//             },
//             "collectionId": "84124"
//         }
//     }
// };
// let restaurants = data.gridElements.infoWithStyle.restaurants;
// let Body = () => {
//     return (
//         <div className="container">
//                 {
//                     restaurants.map(function(restaurant) {
//                         return (
//                         <Restaurant key={restaurant.info.id} obj={restaurant.info} />
//                         )
//                     })
//                 }
                
//         </div>
//     )
// };
// let parent = (
//     <div>
//         <Header />
//         <Body />
//         <Footer />
//     </div>
// );
// root.render(parent);



import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

let root = ReactDOM.createRoot(document.getElementById("root"));
let parent = (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
);
let route = createBrowserRouter([{
    path: "/",
    element: parent,
    errorElement: <Error />,
    children: [{
        path: "/",
        element: <Body />
    },{
        path: "/home",
        element: <Home />
    },{
        path: "/about",
        element: <About />
    },{
        path: "/contact",
        element: <Contact />
    },{
        path: "/address",
        element: <Address />
    },
    {
        path: "/restaurantMenu/:resId",
        element: <Menu />
    }
    ],
    errorElement: <Error />
}]);
root.render(<RouterProvider router={route} />);