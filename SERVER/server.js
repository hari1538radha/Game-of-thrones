import express from "express";

import cors from "cors";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import { mongoURL } from "./Const/const.js";

import { getCharacter, insertData,getbyfamily, allCharacter } from "./Router/router.js"




const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/insert", insertData)

app.get("/allcharacter",allCharacter)

app.get("/character",getCharacter)

app.get("/family", getbyfamily)

mongoose.connect(mongoURL).then((res) => {
    console.log("Game Of Thrones DB connected")
    app.listen(5000, () => {
        console.log("server is running ")
    });
});