import './SavedSearches.scss';
import savedSearches from '../../assets/images/saved-searches.jpg';

const SavedSearches = () => {
    return (
        <>
        <div>
            <img className="saved-searches" src={savedSearches}></img>
        </div>
        </>
    )
} 
export default SavedSearches;