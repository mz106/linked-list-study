import createVideoModel from "../../lib/models/Videos";
import User from "../../lib/models/User";
import dbConnect from "../../lib/db/connection";
import { models } from "mongoose";

export default async function handler(req, res) {
    
    if(req.method === "POST"){
        
        try {
            
            await dbConnect();
            const Video = createVideoModel();
            // const bodyJson = JSON.parse(req.body);
            // const bodyLength = bodyJson.length;
            const vidArr = [];
           

            req.body.forEach(async (item, index) => {
                const video = await Video.create(item);
                await vidArr.push(video);
            });
            console.log("vidArr: ", vidArr)
            res.status(201).json({message: "Success!", vidArr});
        } catch (err) {
            console.log(err);
            res.status(500).json({error: err});
        }
        
    } else if (req.method === "GET") {
        await dbConnect();
        const Video = createVideoModel();
        const videos = await Video.find({});
        res.status(201).json(videos);
    }
};