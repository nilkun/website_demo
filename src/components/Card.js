import React from 'react';

const Card = props => {
    const { className, user, changePage, noAvatar } = props;
    const works = user.works.slice(0, 4);
    
    return <div className={className} key={user.id}>
        <div className="card__infobox">
            <div className="card__infobox__imgContainer">
                <img onClick={ () => changePage("Profile", user.screen_name)} className="card__infobox__image" src={user.avatar === "" ? noAvatar : user.avatar } alt="avatar" />
            </div>
            <div className="card__infobox__username">{user.name}</div>
            <div className="card__infobox__usertitle">{user.profession}</div>
        </div>            
        <div className="card__works">
            { works.map(work => <img key={work.id} onClick={ () => changePage("Project", work.id)} className="card__works__individual" src={work.thumbnail} alt="{work.title}" /> )}                
        </div>
    </div>
}

export default Card;