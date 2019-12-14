import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons'
import SNS from './SNS';


const Profile = p => {

    const handleScroll = () => { if((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) addContent(); }
    // VARIABLES        

    const isAddingContent = useRef(false);
    const contentNumberConstant = useRef(6);
    const wheel = useRef(handleScroll);
    const touchmove = useRef(handleScroll);
    const numberOfItems = useRef(6);

    // FUNCTIONS
    const addContent = () => {
        if(!isAddingContent.current) {
            isAddingContent.current = true;
            setContentNumber(prev => Math.min(props.tags[currentTag].length, prev + contentNumberConstant.current));
            numberOfItems.current =  (numberOfItems.current + 6 > (props.tags[currentTag].length)) ? props.tags[currentTag].length : numberOfItems.current + 6;
        }
    }
    const gotoTag = (tag) => {
        setTag(tag);
        setContentNumber(contentNumberConstant.current);
    }    

    //HOOKS
    const [props, setProps] = useState(p);
    const [currentTag, setTag] = useState("All");
    const [contentNumber, setContentNumber] = useState(contentNumberConstant.current);

    useEffect(() => window.addEventListener("wheel", wheel.current), []);
    useEffect(() => window.addEventListener("touchmove", touchmove.current), []);   
    useEffect(() => { return () => window.removeEventListener("wheel", wheel.current) }, []);
    useEffect(() => { return () => window.removeEventListener("touchmove", touchmove.current) }, []);
    useEffect(() => { isAddingContent.current = false }); 
    useEffect(() => {
        setTag("All");
        setContentNumber(contentNumberConstant.current);
        numberOfItems.current += 6;
        setProps(p);
    },[p])

    return <div className="profile">
            <div className="profile__userdata">
                <div className="profile__userdata__avatar">
                    <img src={ props.profile.avatar.thumb2x ? props.profile.avatar.thumb2x : props.noAvatar } alt="user avatar" width="60px" />
                </div>
                <div className="profile__userdata__container">
                    <div className="profile__userdata__name">{props.profile.name}</div>
                    <div className="profile__userdata__profession">{props.profile.profession} {props.profile.location && "@\u00A0" + props.profile.location}</div>
                    <div className="profile__userdata__bio"><br/>{props.profile.bio}</div>
                    <div className="profile__userdata__location"></div>
                    <div className="profile__userdata__lookingFor"><br/>{props.profile.i_want_to_work_with}</div>
                    <SNS className="profile__userdata__sns" arr = {["twitter_url", "instagram_url", "website"]} profile={props.profile} />
                </div>
            </div>     
            <div className="portfolio">
                <div className="portfolio__taglist">{
                    Object.keys(props.tags).map((tag, i) => {
                        return currentTag===tag 
                        ? <div className="portfolio__taglist__tag portfolio__taglist__selected" key = {i}>{tag}</div>
                        : <div className="portfolio__taglist__tag " onClick={() => gotoTag(tag)} key = {i}>{tag}</div>
                    })}
                </div>
                <div className="portfolio__listing">
                    { props.tags[currentTag].slice(0, numberOfItems.current).map((tag, index) => {                            
                        const work = props.works[tag];
                        return <div key={index} className="portfolio__listing__wrapper" onClick={ () => props.changePage("Project", work.id)}>
                            <div className="portfolio__listing__container">
                                <img className="portfolio__listing__container__thumbnail polaroid" src={work.thumbnail} alt="thumbnail"/>    
                                <div className="portfolio__listing__container__overlay">
                                    <div className="portfolio__listing__container__overlay__title">
                                        {work.title}
                                    </div>
                                    <div className="portfolio__listing__container__overlay__roles">
                                        {work.user_roles.map((role, index, arr) => {
                                                return <div key={index}>{role} {index<arr.length -1 ? `and\u00A0 ` : ""}</div>
                                        })}
                                    </div>
                                    <div className="portfolio__listing__container__overlay__icon">
                                        { work.type === "image" 
                                            ? <FontAwesomeIcon icon = {faImage}/>
                                            : <FontAwesomeIcon icon = {faVideo}/>                                        
                                        }
                                    </div>                                    
                                </div>
                                <div className="portfolio__listing__wrapper__info">
                                    <div className="portfolio__listing__wrapper__info__title">
                                        { work.type === "image" 
                                            ? <FontAwesomeIcon icon = {faImage}/>
                                            : <FontAwesomeIcon icon = {faVideo}/>                                        
                                        }
                                        &nbsp;{work.title}
                                    </div> 
                                    <div className="portfolio__listing__wrapper__info__roles">
                                        {work.user_roles.map((role, index, arr) => {
                                                return <div key={index}>{role} {index<arr.length -1 ? `and\u00A0` : ""}</div>
                                        })}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    })}
                </div> 
            </div>           
        </div>
}

export default Profile;