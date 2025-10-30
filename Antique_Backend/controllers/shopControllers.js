const sell = require("../models/sellModel");

exports.getAllItem = async (req, res) => {
  try {
    const currentPage = parseInt(req.query.page) || 0;
    const itemsPerPage = 9;
    const totalItems = await sell.estimatedDocumentCount();
    if (totalItems > 9 ) {
      const items = await sell.find({}).sort({ _id: -1 }).limit(itemsPerPage).skip(currentPage * itemsPerPage).exec();
      res.status(200).json({items, totalItems});
      
    } else{
      const items = await sell.find({}).sort({ _id: -1 }).exec();
      res.status(200).json(items);
    }

  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items", error });
  }
};
