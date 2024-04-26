import './SingleSeller.scss';
import { Link, useNavigate } from "react-router-dom";
import sellerProf1 from '../../assets/images/seller-profile1.jpg'

const SingleSeller = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        alert("Following new seller successful!")
        navigate("/saved-sellers")
    }

    return (
        <div>
        <img className="seller-prof" src={sellerProf1}></img>
        <Link to="/saved-sellers">
        <div className='seller-prof__button-container'><button className="seller-prof__button" onClick={handleClick}>+ FOLLOW</button>
        </div>
        </Link>
        </div>
        /* <>
        <div className="Seller__Container">
            <div>

            </div>
            <div>
                <div>
                    <h2>Name</h2>
                    <button>Follow</button>
                </div>
                <div>
                    <div>
                        <h3>1.5hr</h3>
                        <h4>avg reply</h4>
                    </div>
                    <div>
                        <h3>40%</h3>
                        <h4>reply rate</h4>
                    </div>
                    <div> 
                        <h3>5 yrs</h3>  
                        <h4>on Kijiji</h4>
                    </div>
                </div>
            </div>
        </div>
        </> */

    )
} 

export default SingleSeller;