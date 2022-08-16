import { useState, useEffect } from 'react';
import { resetUserVideoListArr } from '../lib/helpers/helpers';
import { addVidToDll } from '../lib/dll/dll';

const UserDisplay = ({ 
    user, 
    setUser, 
    displayVid, 
    setDisplayVid, 
    dll, 
    setDll,
    vidData,
    setVidData,
    optionArr,
    setOptionArr 
  }) => {
  

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

    if(user) {
      async function fetchVids() {
        const res = await fetch("http://localhost:3000/api/video");
        const data = await res.json();
        return data;
      };
        
      const vids = await fetchVids()
      const ll = addVidToDll(vids);
      
      await setDisplayVid(ll.head)
      console.log(displayVid)
    }

    if(user && displayVid) {
      async function makeOptionsArr() {
        const arr = [];
        for (let i in displayVid.val.options) {
            const value = await displayVid.val.options[i]
            await arr.push(value);
          }
          await setOptionArr(arr)
          
      };
  
      await makeOptionsArr()
    }else {
      console.log("no user and/or dispayVid: ")
    }
    
  };

  const resetUserVideosHandler = async () => {
    
    const resetUserVideos = await resetUserVideoListArr(user.username);
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