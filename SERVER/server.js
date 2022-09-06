import express from "express";

import cors from "cors";

import bodyParser from "body-parser";

import mongoose from "mongoose";

import { mongoURL } from "./Const/const.js";

import { data } from './Data/mock.js'

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(data)
})

mongoose.connect(mongoURL).then((res) => {
    console.log("GOT DB connected")
    app.listen(5000, () => {
        console.log("server is running ")
    })
})