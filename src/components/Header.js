import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faStar } from '@fortawesome/free-solid-svg-icons'


const Header = props => {
    const [isHidden, setHistory] = useState(true);
    const toggle = (e) => {
        e.stopPropagation();
        setHistory(!isHidden);        
    }
    const hideHistory = useRef(true);
    useEffect(() => window.addEventListener("click", hideHistory.current = () => setHistory(true)), [])
    useEffect(() => { return () => window.removeEventListener("click", hideHistory.current) }, [])

    return (
        <div className="header">
            <h1 className="header__title">foriio</h1>
            <nav className="header__navbar">
                <div className="header__navbar__item" onClick={() => props.changePage("UserList")}>
                    <FontAwesomeIcon icon={faStar}/> 
                    <span className="header__navbar__item__text">Picked up creators</span>
                </div>                
                <div className="header__navbar__item" onClick={toggle}><FontAwesomeIcon icon={faHistory}/> 
                    <span className="header__navbar__item__text">{isHidden ? "Open" : "Close" } history</span>
                </div>                    
            </nav>
            <div className={"history" + (isHidden ? ' history__hide' : "")}>
                { props.history.length > 0 
                    ? props.history.sort((el1, el2) => (el1.time < el2.time) ? 1 : -1).map((user, index) => 
                        <div className="history__user" key={index}> 
                            <div className="history__user__container" onClick={() => props.changePage("Profile", user.username)}>
                                <img className="history__user__avatar" src={user.avatar} alt="user avatar"/>
                                <div className="history__user__about">
                                    <div className="history__user__about__name">{user.name}</div>
                                    <div className="history__user__about__profession">{user.profession}</div>                                                                        
                                </div>
                            </div>
                            <div className="history__projects">
                                { user.visited.map((project, idx) => 
                                    <div key={idx} onClick={() => props.changePage("Project", project.id)} className="history__projects__image">
                                        <img src={project.thumbnail} alt="project"/>
                                        <div className="history__projects__title">{project.title}</div>
                                    </div>
                                )}
                            </div>
                        </div>) 
                    : <div className="history__user history__empty">You haven't visited any pages yet...</div>
                }
            </div> 
        </div>
    )
}

export default Header;