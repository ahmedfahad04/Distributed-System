const Post = require('../models/posts');

const createPost = (req, res) => {

    const { u_id, name, content, image, timestamp } = req.body;

    let postContent = new Post({
        u_id: u_id,
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
      .then((response) => {
        res.json({
          response,
        });
      })
      .catch((error) => {
        res.json({
          message: 'An error occurred! Post showcasing failed!',
        });
      });
};
  
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

const getPostById = async (req, res) => {
    try {
      const postId = req.params.id;
  
      //? Find the post by _id in the database (use await)
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createPost, showPosts, deletePost, getPostById}