import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";
import { useState, useEffect } from "react";
import { addVidToDll } from "../lib/dll/dll";

export default function Home() {

  const [ vidData, setVidData ] = useState();
  const [ dll, setDll ] = useState();
  const [ displayVid, setDisplayVid ] = useState();

  useEffect(() => {
    (async() => {
      const res = await fetch("http://localhost:3000/api/video");
      console.log("res: ", res)
      const data = await res.json();
      console.log("data in useEffect: ", data);
      setVidData(data);
      console.log("vidData: ", vidData)
    })();

  }, []);

  const handleClick = () => {

    const ll = addVidToDll(vidData);
    console.log("ll in handleClick: ", ll)
    setDll(ll);
    // setDll(addVidToDll(vidData));
    console.log("dll in handleClick: ", dll)
    // setToState(addVidToDll(arr));
    // console.log(state)
    // console.log("dll in handle clickdll: ", dll.head.val)
    // // dll.map((item) => console.log(`This is ${item.title}`))
    // // // console.log("dll head in handleClick: ", dll.head)
    setDisplayVid(dll.head)
    console.log("displayVid in click: ", displayVid)
  };

  // const handleNext = () => {
  //   if(!displayVid.head.next) {
  //       setToState("No more users")
  //       // console.log("no more users: ", displayUser)
  //   } else {
  //       // console.log(dll.head.val.username);
  //       let current = state.head.next.val;
  //       console.log("current: ", current);
  //       setToState(current);
  //       let next = state.head.next.val;
  //       console.log("next: ", next)
  //       // console.log("current: ", current)
  //       // console.log("next: ", next)
  //       // current = next;
  //       state.shift();
  //       // console.log("current2: ", current);
  //       // setDisplayVid(current);
  //   }
  //   // console.log("handleNext clicked")
  // };

  const handleNext = () => {
    if(displayVid.next) {
      setDisplayVid(displayVid.next);
    }  
  };

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
      {displayVid && <p>{displayVid.val.title}</p>}
      {/* {dll && dll.printList()} */}
      {displayVid && console.log("display vid in render: ", displayVid)}
    </div>
  )
}
