import './AdExample.scss';
import adExample from '../../assets/images/ad-example.jpg';
import { Link } from 'react-router-dom';

const AdExample = () => {
   
    return (
        <div> 
        <Link to="/seller-profile">
        <img className="ad-post" src={adExample} ></img>
        </Link>       
        </div>
    )
} 
export default AdExample