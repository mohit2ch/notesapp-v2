import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        chapter_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Chapter"
        }
    },
    {
        timestamps: true
    }
)

export const Note = mongoose.model('Notes', noteSchema);