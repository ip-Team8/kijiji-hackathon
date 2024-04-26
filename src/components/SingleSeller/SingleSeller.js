import './SingleSeller.scss';
import { Link, useNavigate } from "react-router-dom";
import sellerProf1 from '../../assets/images/seller-profile1.jpg'

const SingleSeller = () => {
 
    const navigate = useNavigate();

    const handleClick = () => {
        alert("Following new seller successful!")
        alert(`You are now going to receive notifications when Kijiji User posts new ads!`)
        navigate("/saved-sellers")
        
    }

    return (
        <div>
        <img className="seller-prof" src={sellerProf1} alt=""></img>
        <Link to="/saved-sellers">
        <div className='seller-prof__button-container'><button className='seller-prof__button' onClick={handleClick}>+ FOLLOW</button>
        </div>
        </Link>
        </div>
    )
} 

export default SingleSeller;