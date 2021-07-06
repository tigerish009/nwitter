import React from 'react';
import { authService } from "fbase";
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
    const onLogOutClicks = () => {
        authService.signOut();
        history.push("/");
    }
    return (
        <>
            <button oncClick={onLogOutClicks}>Log Out</button>
        </>
    )
}

export default Profile;