import { useState, useEffect } from 'react';

import { updateUserVideoListArr } from '../lib/helpers/helpers';

const VideoDisplay = ({ displayVid, user, setUser }) => {
  const [ selected, setSelected ] = useState("false");
  const [ optionArr, setOptionArr ] = useState([]);

  useEffect(()=> {
    async function makeOptionsArr() {
      const arr = [];
      for (let i in displayVid.val.options) {
          const value = await displayVid.val.options[i]
          await arr.push(value);
        }
        await setOptionArr(arr)
    };

    makeOptionsArr()
  }, [displayVid])

  const radioChangeHandler = (e) => {
    console.log(e)
    setSelected(e.target.value)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(selected === displayVid.val.answer) {
        console.log("correct")
        if(!displayVid.next) {
          console.log("you have completed all videos!");
        } else {
          console.log("user before submit: ", user)
          const updatedUserVideoList = await updateUserVideoListArr(user.username, displayVid.next.val.url);
          await setUser(updatedUserVideoList.udpatedUser);
          console.log("user after submit: ", user);
        }
        
    } else {
        console.log("incorrect");
    }
  };

  return (
    <>
      <p>{displayVid.val.title}</p>
      <iframe src={`https://youtube.com/embed/${displayVid.val.url}`} />
      <p>{displayVid.val.question}</p>
      <p>{optionArr.optionOne}</p>
      <form onSubmit={handleSubmit}>
        {optionArr.map((item, index) => (
            <>
                <label>{item}</label>
                <input 
                    type="radio"
                    value={item}
                    checked={selected === item}
                    onChange={radioChangeHandler}
                />
            </>
        ))}
        <button type="submit">Submit Answer</button>
        
      </form>
    </>
  );
}

export default VideoDisplay;