import './index.css'

function Navigation() {
    return(
        <nav>
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

                <button>
                     Hire Me!
                </button>
            </div>
            
        </nav>
    );
}

export default Navigation