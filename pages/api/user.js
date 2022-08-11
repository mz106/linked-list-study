import createVideoModel from "../../lib/models/Videos";
import createUserModel from "../../lib/models/User";
import dbConnect from "../../lib/db/connection"

export default async function handler(req, res) {
    if(req.method === "GET" && req.query) {
        // console.log("in get route")
        console.log(req.query)
        await dbConnect();
        const User = createUserModel();
        // const user = await User.findOne({username: req.params.username});
        // res.status(200).json({message: "Success!", user});
        const users = await User.findOne({username: req.query})
        res.send(users)
    } else if (req.method === "POST") {
        await dbConnect();
        const User = createUserModel();
        const user = await User.create(req.body);
        console.log(user);
        
        res.status(201).json({message: "Success!", user})
        
        
    } else if(req.method === "PUT") {
        const bodyJson = JSON.parse(req.body);
        
        if(bodyJson.resetVideos === true) {
            console.log("put for deleting arr")
            
            await dbConnect();
            const User = await createUserModel();
            const bodyJson = JSON.parse(req.body);
            const user = await User.findOne({username: bodyJson.username});
            console.log("user before update: ", user);
            const arr = await [...user.videoList]
            const updated = await User.updateOne(
            
                {username: bodyJson.username}, {$pullAll: {videoList: arr}}
            );
            const updatedUser = await User.findOne({username: user.username});
            res.status(201).json({message: "success", updated, updatedUser});
        } else {
            console.log("put for updating arr")
            console.log(req.body)
            await dbConnect();
            const User = await createUserModel();
            const bodyJson = JSON.parse(req.body);
            console.log("bodyJson: ", bodyJson)
            const user = await User.findOne({username: bodyJson.username});
            console.log(user)
            const updated = await User.updateOne(
                {
                    username: user.username}, {videoList: [...user.videoList, bodyJson.videoUrl]
                });
            
            const updatedUser = await User.findOne({username: bodyJson.username});
            res.status(201).json({message: "success", updated, updatedUser});
        }
    }
}
