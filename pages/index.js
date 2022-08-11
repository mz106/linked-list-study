
import { useState, useEffect } from "react";
import { addVidToDll } from "../lib/dll/dll";

import VideoDisplay from "../components/VideoDisplay"
import UserDisplay from "../components/UserDisplay";

import { updateUserVideoListArr } from "../lib/helpers/helpers";

export default function Home() {

  const [ vidData, setVidData ] = useState();
  const [ dll, setDll ] = useState();
  const [ displayVid, setDisplayVid ] = useState();
  // const [ optionArr, setOptionArr ] = useState();
  const [ user, setUser ] = useState({});

  useEffect(() => {
    // (async() => {
    //   const res = await fetch("http://localhost:3000/api/video");
    //   console.log("res: ", res)
    //   const data = await res.json();
    //   console.log("data in useEffect: ", data);
    //   setVidData(data);
    //   console.log("vidData: ", vidData)
    // })()

    async function fetchVids() {
      const res = await fetch("http://localhost:3000/api/video");
      const data = await res.json();
      setVidData(data)
    };

    fetchVids()

    // async function getUser() {
    //   const res = await fetch("http://localhost:3000/api/dave");
    //   const data = await res.json();
    //   await setUser(data);
    // };

    // getUser();

  }, []);

  const handleClick = () => {

    const ll = addVidToDll(vidData);
    
    setDll(ll);
    setTimeout(setDisplayVid(dll.head), 3000);
    const updatedUserVideoList = updateUserVideoListArr(user.username, displayVid.next.val.url);
  };

  const handleNext = () => {
    if(user) {
      if(displayVid.next) {
      
        setDisplayVid(displayVid.next);
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
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
      {displayVid && <VideoDisplay displayVid={displayVid} user={user} setUser={setUser} />}
      <div>
        <UserDisplay user={user} setUser={setUser}/>
      </div>
    </div>
  );
}


