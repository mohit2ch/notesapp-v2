import mongoose from "mongoose";

const chapterSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    parentChapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter"
    }
},
{
    timestamps: true,
}
);

export const Chapter = mongoose.model('Chapter', chapterSchema);