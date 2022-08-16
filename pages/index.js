
import { useState, useEffect } from "react";
import { addVidToDll } from "../lib/dll/dll";

import VideoDisplay from "../components/VideoDisplay"
import UserDisplay from "../components/UserDisplay";

import { updateUserVideoListArr } from "../lib/helpers/helpers";

export default function Home() {

  const [ vidData, setVidData ] = useState();
  const [ dll, setDll ] = useState();
  const [ displayVid, setDisplayVid ] = useState();
  const [ optionArr, setOptionArr ] = useState();
  const [ user, setUser ] = useState({});

  // useEffect(() => {
  //   // (async() => {
  //   //   const res = await fetch("http://localhost:3000/api/video");
  //   //   console.log("res: ", res)
  //   //   const data = await res.json();
  //   //   console.log("data in useEffect: ", data);
  //   //   setVidData(data);
  //   //   console.log("vidData: ", vidData)
  //   // })()

  //   if(user) {
  //       async function fetchVids() {
  //       const res = await fetch("http://localhost:3000/api/video");
  //       const data = await res.json();
  //       setVidData(data)
  //       console.log("vidData useEffect index.js: ", vidData);
  //     };
  
  //     fetchVids()
  //   } console.log("Please get user first")
    

  //   // async function getUser() {
  //   //   const res = await fetch("http://localhost:3000/api/dave");
  //   //   const data = await res.json();
  //   //   await setUser(data);
  //   // };

  //   // getUser();

  // }, [user]);

  const handleClick = () => {

    const ll = addVidToDll(vidData);
    
    setDll(ll);
    setTimeout(setDisplayVid(dll.head), 3000);
    const updatedUserVideoList = updateUserVideoListArr(user.username, displayVid.next.val.url);
  };

  const handleNext = () => {
    if(user) {
      if(displayVid.next) {
        
        const filteredUserVidList = user.videoList.filter(url => url === displayVid.next.val.url);
        console.log("filteredUserVidList: ", filteredUserVidList)
        if(filteredUserVidList.length === 0) {
          
          console.log("no permission: ", filteredUserVidList)
          
        } else {
          setDisplayVid(displayVid.next);
        }
        // console.log(displayVid.val.url)
        // console.log("filteredUserVidList: ", filteredUserVidList)
        // console.log("handleNext displayVid.next before change: ", displayVid.next)
        
        // console.log("handleNext displayVid after change: ", displayVid)
        const arr = [];
        // for (let i in displayVid.next.val.options) {
        //   const value = displayVid.next.val.options[i]
        //   arr.push(value);
        // }
        // console.log("arr in handlenext: ", arr)
        // setOptionArr(arr);
      }
    } else {
      console.log("no user selected")
    }
     
  }

  const handlePrev = () => {
    if(displayVid.prev) {
      
      setDisplayVid(displayVid.prev)
    } else {
      console.log("This is the first video")
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
      {displayVid && <VideoDisplay 
                        displayVid={displayVid} 
                        user={user} 
                        setUser={setUser} 
                        optionArr={optionArr}
                        setOptionArr={setOptionArr}
                      />}
      <div>
        <UserDisplay 
          user={user} 
          setUser={setUser} 
          displayVid={displayVid} 
          setDisplayVid={setDisplayVid} 
          dll={dll} 
          setDll={setDll} 
          vidData={vidData}
          setVidData={setVidData}
          optionArr={optionArr}
          setOptionArr={setOptionArr}
        />
      </div>
    </div>
  );
}


