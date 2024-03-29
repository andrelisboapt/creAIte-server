// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const {isAuthenticated} = require('./middleware/jwt.middleware')

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);


    const authRoutes = require("./routes/auth.routes");
    app.use("/auth", authRoutes);



//Começando as nossas rotas:
//Add Post
const addPostRoutes = require("./routes/addPost.routes");
app.use("/api", addPostRoutes);

// Comments
const commentsRoutes = require("./routes/comments.routes");
app.use("/api", commentsRoutes);

//Edit Profile
const editProfileRoutes = require("./routes/editProfile.routes");
app.use("/api", editProfileRoutes);

//Feed
const feedRoutes = require("./routes/feed.routes");
app.use("/api", feedRoutes);

//Genarator
const generatorRoutes = require("./routes/generator.routes");
app.use("/api", generatorRoutes);

//profile
const profileRoutes = require("./routes/profile.routes");
app.use("/api", profileRoutes);

//Add to gallery
const addGalleryRoutes = require("./routes/addGallery.routes");
app.use("/api", addGalleryRoutes)

//Add like to post
const likeRoutes = require("./routes/like.routes");
app.use("/api", likeRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

/* fiz isto hoje!! */
