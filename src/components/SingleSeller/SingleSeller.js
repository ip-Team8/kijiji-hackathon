import './SingleSeller.scss';
import sellerProf1 from '../../assets/images/seller-profile1.jpg'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleSeller = () => {

    const [buttonText, setButtonText] = useState('+ FOLLOW'); 

    const handleClick = () => {
        setButtonText(buttonText === '+ FOLLOW' ? 'UNFOLLOW' : '+ FOLLOW');
        alert("Following new seller successful!")
        alert(`You are now going to receive notifications when Kijiji User posts new ads!`)
    }

    return (
        <div>
        <img className="seller-prof" src={sellerProf1} alt=""></img>
        <div className='seller-prof__button-container'>
            <button className="seller-prof__button" onClick={handleClick}>{buttonText}</button>
        </div>
        <Link to="/saved-sellers">
        <button className='seller-prof__button-ss'>
            saved sellers
        </button>
        </Link>
        </div>
    )
} 

export default SingleSeller;