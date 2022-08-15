


export const updateUserVideoListArr = async (username, videoUrl) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!")
    const body = {
        username, 
        videoUrl,
    };
    
    const stringyBody = JSON.stringify(body)
    
    const res = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        content: "application/json",
        body: stringyBody
    });
    
    const data = await res.json();
    console.log("data helpers: ", data)
    return data;
};

export const resetUserVideoListArr = async (username) => {
    const body = {
        username, 
        resetVideos: true,
        emptyArr: [],
    };
    
    const stringyBody = JSON.stringify(body)
    
    const res = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        content: "application/json",
        body: stringyBody
    });
    
    const data = res.json();
    return data;
};

export const getUser = async () => {
    const res = await fetch("http://localhost:3000/api/michael");
    
    const data = await res.json()
    
    return data
};