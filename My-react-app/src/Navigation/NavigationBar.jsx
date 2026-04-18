import './index.css'
import styles from './NavigationBar.module.css'
import {useNavigate} from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    return(
        <nav className={styles.nav}>
            <div className='Flex-Align-Css'>
                <h2>Add Friend</h2>
            
            <div style={{display: 'flex', justifyContent: 'start'
            }}>
                <ul>
                    <li>Background</li>
                    <li>Project</li>
                    <li>Info</li>
                    <li>Contact</li>
                </ul>
            </div>

                <button onClick={() => navigate('/')}>
                     Log out
                </button>
            </div>
            
        </nav>
    );
}

export default Navigation