const sellModel = require("../models/sellModel");

exports.sell = async (req, res) => {
  try {
    const { user, name, type, price, description } = req.body;
    const image = req.file ? req.file.path : req.body.image;

    const newSell = new sellModel({ user, name, type, price, description, image });
    await newSell.save();

    res.status(201).json({ message: "Sell created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding weapon', error });
  }
};
