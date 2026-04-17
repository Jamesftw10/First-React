import profileData from "./Profile.js";
import  AddButton  from "./button/button.jsx";

import './index.css'

function ProfileCard() {
    return (
        <div className="profile-container" style={{ display: 'flex', gap: '15px' }}>

            {profileData.map((profile, index) => (
                <div key={index} className="card">
                    <img
                        src={profile.img}
                        alt={profile.name}
                        style={{
                            width: '100px', height: '100px', borderRadius: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                    <h3>{profile.name}</h3>
                    <p>{profile.mf}</p>
                    <AddButton/>
                </div>
            ))}
        </div>
    );
}

export default ProfileCard;