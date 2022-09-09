import { charactersModel } from "../Schema/schema.js";
import { mockdata } from "../Data/mock.js";

export const insertData = (req, res) => {
    charactersModel.find((err, data) => {
        if (data == !data) {
            charactersModel.insertMany(mockdata, function (err, data) {
                if (err) {
                    return console.error(err);
                } else {
                    res.send("Data is inserted")
                }
            });
        }
        else {
            res.send("Already uploaded");
        }
    })

}

export const allCharacter = (req, res) => {
    charactersModel.find((err, data) => {
        if (err) {
            return res.send(err);
        }
        else {
            if (data == !data) {
                res.send("there is no data")
            }
            else {
                console.log(data);
                return res.send({
                    status: 500,
                    message: "All the character are displayed",
                    data: data
                })
            }
        }
    })
}

export const getCharacter = (req, res) => {
    console.log(req.query);
    charactersModel.findOne({ firstName: req.query.firstName },
        (err, data) => {
            if (err) {
                res.send(err)
            }
            else {
                if (!data) {
                    return res.send("Please check the firstname")
                }
                return res.send({
                    status: 200,
                    message: 'Charecter Data display',
                    data: data
                });
            }
        }
    )
}

export const getbyfamily = async (req, res) => {
    console.log(req.query);
    charactersModel.find({ family: req.query.family },
        (err, data) => {
            if (err) {
                res.send(err)
            }
            else {
                if (!data) {
                    return res.send("Please check the family name")
                }
                console.log(data);
                return res.send({
                    status: 100,
                    message: 'Charecter Data display',
                    data: data
                });
            }
        }
    )
}