import './SavedSellers.scss';
import savedSellers from '../../assets/images/saved-sellers-selected.jpg';
import { Link } from 'react-router-dom';

const SavedSellers = () => {
   
    return (
        <>
        <div>
        <Link to="/faveads">
        <img className="saved-sellers" src={savedSellers}></img>
        </Link>
        <h2 className='saved-sellers__list-number'>Showing 1 - 1 of 1 results</h2>
        <div className='saved-sellers__list'>
            <label className='saved-sellers__label'>Name
            <Link to="/seller-profile">
            <p className='saved-selleres__list-item'>Kijiji User</p>
            </Link>
            </label>
            <label className='saved-sellers__label'>Recent listing
            <p className='saved-selleres__list-item'>1 day ago</p>
            </label>
        </div>
        <div className='saved-sellers__list'>
            <label className='saved-sellers__label'>Name
            <Link to="/seller-profile">
            <p className='saved-selleres__list-item'>Sariah</p>
            </Link>
            </label>
            <label className='saved-sellers__label'>Recent listing
            <p className='saved-selleres__list-item'>1 day ago</p>
            </label>
        </div>
        <div className='saved-sellers__list'>
            <label className='saved-sellers__label'>Name
            <Link to="/seller-profile">
            <p className='saved-selleres__list-item'>Felicia</p>
            </Link>
            </label>
            <label className='saved-sellers__label'>Recent listing
            <p className='saved-selleres__list-item'>1 day ago</p>
            </label>
        </div>
        </div>
        </>
    )
} 
export default SavedSellers