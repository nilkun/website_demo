import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleLeft, faAngleRight, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import Loading from './Loading';

const Project = props => {
    
    const handleScroll = () => { if((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) addContent(); }
    // VARIABLES
    const { noOfMedia, videos, images, thumbnail, mediatype, title, description, changePage, credits, noAvatar } = props;

    const isAddingContent = useRef(false);
    const media = useRef(images ? images : videos ? videos : [[thumbnail]]);
    const source = useRef(images ? "srcset" : videos ? "picture_url" : 0);
    const contentNumberConstant = useRef(6);
    const wheel = useRef(handleScroll);
    const touchmove = useRef(handleScroll);

    const showFullscreen = useRef(false);
    const startFullscreen = useRef(!!document.fullscreenElement);

    // FUNCTIONS
    const addContent = () => {
        if(!isAddingContent.current) {
            isAddingContent.current = true;
            setContentNumber(prev => Math.min(noOfMedia.length, prev + contentNumberConstant.current));
        }
    }

    //HOOKS
    const [isFullscreen, setFullscreen] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState("");
    const [contentNumber, setContentNumber] = useState(contentNumberConstant.current);

    useEffect(() => window.addEventListener("wheel", wheel.current), []);
    useEffect(() => window.addEventListener("touchmove", touchmove.current), []);   
    useEffect(() => { return () => window.removeEventListener("wheel", wheel.current) }, []);
    useEffect(() => { return () => window.removeEventListener("touchmove", touchmove.current) }, []);
    useEffect(() => { 
        isAddingContent.current = false;
    }); 

    // The following two classes refer to the whole screen (not the viewport)
    const switchToFullscreen = () => {
        document.documentElement.requestFullscreen();
        setFullscreen(true);
    }
    const switchFromFullscreen = () => {
        if(document.fullscreenElement) {
            if (document.exitFullscreen)  document.exitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen(); 
            setFullscreen(false);
        }
    }

    const openFullscreen = (index) => {
        // 1 stands for video
        if(mediatype === 1) {
            window.open(videos[index].url);
        }
        else {
            startFullscreen.current = !!document.fullscreenElement;
            showFullscreen.current = true;
            setFullscreen(startFullscreen.current);
            setFullscreenImage(index);
        }
    }

    const exitFullscreen = () => {
        showFullscreen.current = false;
        startFullscreen.current 
        ? switchToFullscreen()
        : switchFromFullscreen()
        setFullscreenImage(-1);
    }

    const getImage = (number) => {
        let newIndex = fullscreenImage + number;
        if(newIndex < 0) newIndex += images.length;
        else if(newIndex >= images.length) newIndex -= images.length;
        setFullscreenImage(newIndex);
    }

    return (mediatype || thumbnail
        ? <div className="project">
            <div className="project__info">
                <div className="project__info__container">
                    <h1 className="project__info__title">{title}</h1>
                    <div className="project__info__description">{description}</div>                    
                </div>
                <div className="project__info__credits">
                    { credits.map((credits, index) => {
                        return( <div key={index} className="project__info__credits__container">
                            <div className="project__info__credits__role">{credits.name}</div> 
                            <div className="project__info__credits__name" onClick={() => changePage("Profile", credits.user.screen_name)}>
                                <img src={ credits.user.profile.avatar.thumb2x === null ? noAvatar : credits.user.profile.avatar.thumb2x } alt="user avatar"/>
                                { credits.user.profile.name}
                            </div> 
                        </div>
                        )
                })}</div>
            </div> 

            <div style={{margin: "1rem"}} />    
            
            <div className="portfolio">
                <div className="portfolio__listing">                                      
                { media.current.map((image, index) => { 
                    return <div key={index} className="portfolio__listing__wrapper">
                        <div className="project__view">
                            <img className="portfolio__listing__container__thumbnail zoominCursor" 
                                src={image[source.current]}
                                alt="portfolio item" 
                                onClick= { () => openFullscreen(index) }
                            />
                        </div>
                    </div>
                })                
            }
            </div>    
        </div>
        { showFullscreen.current 
        ? <div className="fullscreenImage">
            <div onClick={ () => exitFullscreen() } className="fullscreenImage__overlay"></div>
            <img src={ media.current[fullscreenImage].srcset } alt="viewing fullscreen" />
            <div onClick={ () => getImage(-1) } className="fullscreenImage__button fullscreenImage__button-left" ><FontAwesomeIcon icon = {faAngleLeft}/></div>
            <div onClick={ () => getImage(1) } className="fullscreenImage__button fullscreenImage__button-right" ><FontAwesomeIcon icon = {faAngleRight}/></div>
            <div onClick={ () => exitFullscreen() } className="fullscreenImage__button fullscreenImage__button-close" ><FontAwesomeIcon icon = {faTimes}/></div>
            { isFullscreen
                ? <div onClick={ () => switchFromFullscreen() } className="fullscreenImage__button fullscreenImage__button-fullscreen" ><FontAwesomeIcon icon = {faCompress}/></div>
                : <div onClick={ () => switchToFullscreen() } className="fullscreenImage__button fullscreenImage__button-fullscreen" ><FontAwesomeIcon icon = {faExpand}/></div>
            }
        </div> 
        : "" }
    </div>
    : <Loading />)
}

export default Project;