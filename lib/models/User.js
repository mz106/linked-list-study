import { Schema, model, models } from "mongoose";


export default function createUserModel() {
    
        const userSchema = new Schema({
            username: {
                type: String,
                required: true,
                unique: true,
            },
            // videoList: {
            //     vid1: {
            //         type: Boolean,
            //     },
            //     vid2: {
            //         type: Boolean,
            //     },
            //     vid3: {
            //         type: Boolean,
            //     }
            videoList: {
                type: Array,
            },
        });

        const User = models.User || model("User", userSchema);
        return User;
    
};





