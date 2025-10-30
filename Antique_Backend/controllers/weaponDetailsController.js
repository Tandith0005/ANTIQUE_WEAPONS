const sell = require("../models/sellModel");

exports.getWeaponDetails = async (req, res) => {
    try {
        const weaponId = req.params.id;
        const weapon = await sell.findById(weaponId);
        if (!weapon) {
            return res.status(404).json({ message: "Weapon not found" });
        }
        res.status(200).json(weapon);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching weapon details", error });
    }
};