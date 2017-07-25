import db from '../models';

const commentController = {};

commentController.post = (req, res) => {
  const {
    text,
    userId,
    postId
  } = req.body;


  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId
  });

  comment.save().then((newPost) => {
    db.Post.findByIdAndUpdate()
    res.status(200).json({
      success: true,
      data: newUser
    });
  }).catch((err) => {
    res.status(500).json({
      message: err
    });
  });

};

export default userController;
