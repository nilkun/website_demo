import React, { useState, useEffect, useRef } from "react";
import Card from './Card';
import Loading from './Loading';

const UserList = props => {

    const handleScroll = () => { if((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) addContent(); }
    // VARIABLES
    const { users, noAvatar, changePage } = props;
    
    const isAddingContent = useRef(false);
    const contentNumberConstant = useRef(4);
    const wheel = useRef(handleScroll);
    const touchmove = useRef(handleScroll);

    // FUNCTIONS
    const addContent = () => {
        if(!isAddingContent.current) {
            isAddingContent.current = true;
            setContentNumber(prev => Math.min(users.length, prev + contentNumberConstant.current));
        }
    }

    //HOOKS
    const [contentNumber, setContentNumber] = useState(contentNumberConstant.current);

    useEffect(() => window.addEventListener("wheel", wheel.current), []);
    useEffect(() => window.addEventListener("touchmove", touchmove.current), []);   
    useEffect(() => { return () => window.removeEventListener("wheel", wheel.current) }, []);
    useEffect(() => { return () => window.removeEventListener("touchmove", touchmove.current) }, []);
    useEffect(() => { isAddingContent.current = false }); 

    return ( 
        users.length > 0         
        ? <div className="pickedCreators">
                <h1 className="pickedCreators__title">Picked up creators</h1>
                <div className="pickedCreators__cardContainer">
                    { users.slice(0, contentNumber).map((user, key) => <Card key={key} className="card" user={user} changePage={changePage} noAvatar={noAvatar}/>)}
                </div>
            </div>
        : <Loading />
        )
}

export default UserList;