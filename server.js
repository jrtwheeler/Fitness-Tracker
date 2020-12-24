// Dependencies
// =============================================================
const express = require("express");
const mongoose = require("mongoose");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//Connect to mongodb on host environment or local environment
// =============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//Require html and API routes
// =============================================================
require("./routes/apiRoutes")(app);
require("./routes/publicRoutes")(app);

//Listener
// =============================================================
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
