var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "How to cook the best burger pt. 4",
    content: "My kids are a nightmare, they don't care about burgers at all."
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});


// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });