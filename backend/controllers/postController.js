const Post = require('../models/posts');

const createPost = (req, res) => {

    const { name, content, image, timestamp } = req.body;

    const id = Math.random().toString(36);

    let postContent = new Post({
        name: name,
        content: content,
        image: image,
        timestamp: timestamp
    })

    postContent.save()
    .then((savedpost) => {
        res.json({
            message: 'Post Published Successfully!',
            postID: savedpost._id
        })
    })
    .catch(() => {
        res.json({
            message: 'Post Publishion Failed!'
        })
    })

}

const showPosts = (req, res, next) => {

    Post.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured! Post showcasing failed!'
        })
    })

}

const deletePost = (req, res, next) => {

    const postID = req.body.postID;

    Post.findByIdAndRemove(postID)
    .then(() => {
        res.status(200).json({
            message: 'Post deleted successfully!'
        })
    })
    .catch((error) => {
        res.status(400).json({
            message: error 
        })
    })

}

module.exports = { createPost, showPosts, deletePost}