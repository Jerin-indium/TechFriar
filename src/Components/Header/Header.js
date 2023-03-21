import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Header = () => {
    return (
        <div className='main-container-header'>
            <div className='left-container'>
                <h1 style={{ marginLeft: '20px' }}>People</h1>
                <div className='plus-icon'>
                    <FontAwesomeIcon color='white' icon={faPlus} size="lg" />
                </div>
            </div>
            <div className='right-container'>
                <div className='input-container'>
                    <FontAwesomeIcon color='gray' icon={faSearch} size="sm" />
                    <input placeholder='search' className='input-field' />
                </div>
                <div className='filter-button'>
                    <FontAwesomeIcon color='black' icon={faBarsStaggered} size="sm" />
                    <p style={{ marginLeft: '10px' }}>Filter</p>
                </div>
            </div>
        </div>
    )
}

export default Header;