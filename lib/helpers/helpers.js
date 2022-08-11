


export const updateUserVideoListArr = async (username, videoUrl) => {
    
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
    
    const data = res.json();
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