import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const SNS = props => {
    const { arr, profile, className } = props;
    return (
        <div className={ className }>
            { arr.map((sns, key) => {
                if(profile[sns]==="") return "";
                let icon;
                switch(sns) {
                    case "twitter_url": icon = faTwitter; break;
                    case "instagram_url": icon = faInstagram; break;
                    case "website": icon = faGlobe; break;
                    default: icon = faGlobe; break;
                }
                return (
                    <div key={key} onClick={() => window.open(profile[sns])} className="profile__userdata__snsIcon">
                        <FontAwesomeIcon icon = {icon}/>                
                    </div>
                )
            })}
        </div>
    )
}

export default SNS;

