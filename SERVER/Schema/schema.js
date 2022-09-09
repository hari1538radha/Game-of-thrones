import mongoose from "mongoose";

export const characterSchema = new mongoose.Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        fullName:String,
        title: String,
        family: String,
        image: String,
        imageUrl: String
    }
)

export const charactersModel = mongoose.model("Character", characterSchema,"characters");
