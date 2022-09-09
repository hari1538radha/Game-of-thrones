import { charactersModel } from "../Schema/schema.js";


export const insertData = (req, res) => {
    //console.log(charactersModel.collection.count());
    charactersModel.collection.insertMany(mockdata, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Data are uploaded");
            res.send('data inserted')
        }
    });
}

export const getCharacter = (req, res) => {
    console.log(req.query);
    charactersModel.collection.findOne({ firstName: req.query.firstName },
        (err, data) => {
            if (err) {
                res.send(err)
            }
            else {
                if (!data) {
                    return res.send("Please check the firstname")
                }
                return res.send({
                    status: 100,
                    message: 'Charecter Data display',
                    data: [data]
                });
            }
        }
    )
}

export const getbyfamily = (req, res) => {
    console.log(req.query);

    // const cursor = collection.find({});
    // await cursor.forEach(doc => console.log(doc));

    charactersModel.collection.find({ family: req.query.family },
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