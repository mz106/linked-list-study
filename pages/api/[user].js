import createUserModel from "../../lib/models/User";
import dbConnect from "../../lib/db/connection"

export default async function handler(req, res) {
    
    if(req.method === "GET" && req.query) {
        await dbConnect();
        // const bodyJson = JSON.parse(req.body);
        const User = await createUserModel();
        const user = await User.findOne({username: req.query.user});
        console.log("!!!!!!!!!!!!: ", user)
        res.send(user)
    } 
};