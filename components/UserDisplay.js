import { useState, useEffect } from 'react';
import { resetUserVideoListArr } from '../lib/helpers/helpers';

const UserDisplay = ({ user, setUser }) => {
  

//   useEffect(() => {
//     async function getUser() {
//         const res = await fetch("http://localhost:3000/api/dave");
//         const data = await res.json();
//         await setUser(data);
//     };

//     getUser();
//   }, []);  

  const getUserHandler = async () => {
    
    const res = await fetch("http://localhost:3000/api/michael");
    
    const data = await res.json()
    
    await setUser(data)
    console.log("user after setUser getUserHandler: ", user);
  };

  const resetUserVideosHandler = async () => {
    
    const resetUserVideos = await resetUserVideoListArr(user.username);
    console.log(resetUserVideos)
    setUser(resetUserVideos.updatedUser)
  }


  return (
    <>
        <div>UserDisplay</div>
        <button onClick={getUserHandler}>GetUser</button>
        {user && <p>{user.username}</p>}
        {user && <button onClick={resetUserVideosHandler}>ResetUserVideos</button>}
    </>
  );
};

export default UserDisplay;