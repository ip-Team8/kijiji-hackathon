import './SavedSearches.scss';
import saveSearches from '../../assets/images/saved-searches.jpg';

const SavedSearches = () => {
    return (
        <div>
            <img className='saved-searches' src={saveSearches}></img>
        </div>
    )
} 
export default SavedSearches;