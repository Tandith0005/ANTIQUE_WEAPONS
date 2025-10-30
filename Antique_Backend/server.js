const express = require('express')
const app = express()
const cors = require('cors'); 
const connectDB = require('./config/db');
const sell = require('./routes/sellRoutes');
const shopRoutes = require('./routes/shopRoutes');
const weaponDetailsRoute = require('./routes/weaponDetailsRoute');
const jobsRoute = require('./routes/getJobRoutes');
require('dotenv').config();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://antique-weapons-client.vercel.app", 
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// Database
connectDB();


// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/sell', sell);
app.use('/shop', shopRoutes);
app.use(`/shop`, weaponDetailsRoute);
app.use('/jobs', jobsRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
