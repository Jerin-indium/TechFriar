import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import Chart from "../Components/TreeCard/TreeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired, faList, faCalendar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './style.css';

const Home = () => {
    return (
        <div className="master-container">
            <SideBar />
            <div className="main-body">
                <Header />
                <div className="view-button-container">
                    <div className='view-button'>
                        <FontAwesomeIcon color='gray' icon={faList} size="sm" />
                        <FontAwesomeIcon color='gray' icon={faCalendar} size="sm" />
                        <div className="icon-select">
                            <FontAwesomeIcon color='gray' icon={faNetworkWired} size="sm" />
                        </div>
                    </div>
                </div>
                {/* Data */}
                <Chart nodes={[
                    { id: 1, pids: [2], name: 'Seth Willams', img: 'https://cdn.balkan.app/shared/2.jpg', position: 'Managing director', icon: '', add: '' },
                    { id: 2, fid: 1, name: 'Dave Cooper', img: 'https://cdn.balkan.app/shared/m30/5.jpg', position: 'Regional Director', icon: '', add: '' },
                    { id: 3, fid: 1, name: 'Ramon Harris', img: 'https://cdn.balkan.app/shared/m10/2.jpg', position: 'Regional Director', icon: '', titleCard: 'Brazil', add: '' },
                    { id: 4, fid: 1, name: 'Dan Morgan', img: 'https://cdn.balkan.app/shared/m10/1.jpg', position: 'Regional Director', icon: '', titleCard: 'USA', add: '' },
                    { id: 5, fid: 1, name: 'Stellah Nelson', img: 'https://cdn.balkan.app/shared/w10/3.jpg', position: 'Regional Director', icon: '', titleCard: 'Italy', add: '' },
                    { id: 6, fid: 3, name: 'CEO', img: 'https://cdn.balkan.app/shared/2.jpg', position: 'Janet Perks', icon: '', add: '', icon2: '' },
                    { id: 7, fid: 3, name: 'CFO', img: 'https://cdn.balkan.app/shared/m30/5.jpg', position: 'Isabelle Kaif', icon: '', add: '', icon2: '' },
                    { id: 8, fid: 4, name: 'CEO', img: 'https://cdn.balkan.app/shared/2.jpg', position: 'Ivan Tony', icon: '', add: '', icon2: '' },
                    { id: 9, fid: 4, name: 'CFO', img: 'https://cdn.balkan.app/shared/m30/5.jpg', position: 'Sabrina Francis', icon: '', add: '', icon2: '' },
                    { id: 10, fid: 5, name: 'Chief Adminstartor', img: 'https://cdn.balkan.app/shared/2.jpg', position: 'Miles Clarke', icon: '', add: '', icon2: '' },
                    { id: 11, fid: 5, name: 'Chief Adminstartor', img: 'https://cdn.balkan.app/shared/m30/5.jpg', position: 'Angela', icon: '', add: '', icon2: '' },
                    { id: 12, fid: 8, name: 'Manager', img: 'https://cdn.balkan.app/shared/m10/1.jpg', position: 'Brian Walker', icon: '', add: '' },
                    { id: 13, fid: 8, name: 'Manager', img: 'https://cdn.balkan.app/shared/w10/3.jpg', position: 'Vera Martinez', icon: '', add: '' },
                ]} />
            </div>
            <div className="zoom-button">
                    <FontAwesomeIcon color='black' icon={faPlus} size="sm" />
                    <FontAwesomeIcon color='black' icon={faMinus} size="sm" />
                </div>
        </div>
    )
}

export default Home;