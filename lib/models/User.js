import { Schema, model, models } from "mongoose";
import { String } from "mongoose/lib/error/messages";

export default function createUserModel() {
    
        const userSchema = new Schema({
            username: {
                type: String,
                required: true,
                unique: true,
            },
            videoList: {
                vid1: {
                    type: Boolean,
                },
                vid2: {
                    type: Boolean,
                },
                vid3: {
                    type: Boolean,
                }

            }
        });

        const User = models.user || model("User", userSchema);
        return User;
    
};





