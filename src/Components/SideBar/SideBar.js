import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFileArchive, faUser, faCalendar, faBuilding, faList, faBell} from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../../Images/prof.jpg';

const SideBar = () => {
    return (
        <div className="main-container-side-bar">
            <div className='top-container'>
                <FontAwesomeIcon color='#ffcccc' icon={faCircle} size="2x" />
            </div>
            <div className='icon-container'>
                <FontAwesomeIcon color='gray' icon={faList} size="xl" />
                <FontAwesomeIcon color='gray' icon={faFileArchive} size="xl" />
                <FontAwesomeIcon color='gray' icon={faCalendar} size="xl" />
                <FontAwesomeIcon color='yellow' icon={faUser} size="xl" />
                <FontAwesomeIcon color='gray' icon={faFileArchive} size="xl" />
                <FontAwesomeIcon color='gray' icon={faBuilding} size="xl" />
            </div>
            <div className='bottom-container'>
                <div className='bottom-icon-container'>
                    <FontAwesomeIcon color='gray' icon={faBell} size="xl" />
                    <div className='profile-pic'>
                        <img src={ProfilePic} alt="profile-pic" width={50} height={40}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;