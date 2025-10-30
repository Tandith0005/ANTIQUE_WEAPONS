const job = require("../models/jobsModel");

exports.getJobs = async (req, res) => {
    try {
        const jobs = await job.find({});
        res.status(200).json(jobs);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}