import {LOGO_URL} from "../utils/constants"

let Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Address</div>
                <div>Cart</div>
            </div>
        </div>
    )
};

export default Header;