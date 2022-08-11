import { Schema, model, models } from "mongoose";

export default function createVideoModel() {
    
        const videoSchema = new Schema({
            title: {
                type: String,
                required: true,
                unique: true,
            },
            description: {
                type: String,
                required: true,
                unique: true,
            },
            url: {
                type: String,
                required: true,
                unique: true,
            },
            question: {
                type: String,
                required: true, 
                unique: true,
            },
            answer: {
                type: String,
                required: true,
                unique: true
            },
            options: {
                optionOne: {
                    type: String,
                    required: true,
                },
                optionTwo: {
                    type: String,
                    required: true,
                },
                optionThree: {
                    type: String,
                    required: false,
                },
                optionFour: {
                    type: String,
                    required: false,
                }
            }
        });
    
        const Video = models.Video || model("Video", videoSchema);
        return Video
    
    
};



