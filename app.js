<<<<<<< HEAD
require('dotenv').config();
//jshint esversion:6
=======
//jshint esversion:6

>>>>>>> 22f42cbd5fc1609539792b8f62af56e176e7055e
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
<<<<<<< HEAD
const mongoose = require("mongoose");
const {
  result
} = require("lodash");
const {
  response
} = require("express");

=======
>>>>>>> 22f42cbd5fc1609539792b8f62af56e176e7055e


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

<<<<<<< HEAD
// set connection and/or new DB

try {
  await mongoose.connect("mongodb+srv://:<password>@cluster0.numyi.gcp.mongodb.net/blogDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  console.log(error);
}


// Schema and Model
const blogSchema = {
  title: String,
  content: String
}

const Post = mongoose.model("Post", blogSchema);


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function (req, res) {
  Post.find({}, function (err, blogPosts) {
    res.render("home", {
      startingContent: homeStartingContent,
      posts: blogPosts
    });
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    aboutContent: aboutContent
  });
});

app.get("/contact", function (req, res) {
  res.render("contact", {
    contactContent: contactContent
  });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  // if content doesn't exsis create new post else add your post
  Post.exists({
    content: post.content
  }, function (err, result) {
    if (result) {
      console.log("There is another post like this!");
      res.redirect("/compose");
    } else {
      post.save(function (err) {
        if (!err) {
          res.redirect("/");
        }
      });
    }
  });
})

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({
    _id: requestedPostId
  }, function (err, post) {
    if (err) {
      console.log(err);
    } else {
      res.render("post", {
        title: post.title,
        content: post.content
      })
    }
  })
});



app.listen(3000, function () {
  console.log("Server started on port 3000");
});
=======
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const blogEntries = [];


app.get("/", (req,res) => {
  res.render("home", {
    homeContent : homeStartingContent,
    posts: blogEntries
    });

})

app.get("/contact", (req,res) => {
  res.render("contact", {
    contactContent : contactContent });
})

app.get("/about", (req,res) => {
  res.render("about", {
    aboutContent : aboutContent });
})

app.get("/compose", (req, res) => {
  res.render("compose", {
    // going to be sending input text to this 
  });
})

app.post("/compose", (req, res) => {

  const postTitle = req.body.postTitle;
  const postBody = req.body.postBody;
  const postURL = __dirname + "/post/"

  let entry = {
    entryTitle: postTitle,
    entryBody: postBody,
    entryLink: postURL + postTitle // use this later to add
  }
  console.log(entry.entryLink)
  blogEntries.push(entry);
  res.redirect("/");
  
})

app.get("/post/:title", (req, res) => {
  let storedTitle = _.lowerCase(req.params.title);
  // iterate through blog array and find the title and
  // match them with posts param
  // print suucess statemtne
  blogEntries.forEach(post => {
    let title = post.entryTitle.toLowerCase();
    let body = post.entryBody.toLowerCase();
    let link = post.entryLink + storedTitle
  
    let posts = {
      entryTitle: title,
      entryBody: body,
      entryLink: link
    }

    if (storedTitle === title) {
      console.log("FOund match");
      res.render("post", {
        singlePost: posts
      })
    } else {
      console.log("No Match!")
    }
  });
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
>>>>>>> 22f42cbd5fc1609539792b8f62af56e176e7055e
