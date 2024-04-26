import './FavouriteAds.scss';
import faveAds from '../../assets/images/save-sellers-inactive.jpg';
import { Link } from 'react-router-dom';

const FavouriteAds = () => {
   
    return (
        <>
        <div>
            <Link to="/searches">
            <img className="fave-ads" src={faveAds}></img>
            </Link>

        </div>
        </>
    )
} 
export default FavouriteAds