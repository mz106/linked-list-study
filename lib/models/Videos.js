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
            }
        });
    
        const Video = models.Video || model("Video", videoSchema);
        return Video
    
    
};

