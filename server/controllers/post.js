import Post from '../models/post.js';

// CREATE
export const createPost = async (req, res) => {
    try{
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        await newPost.save();
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch{
        res.status(409).json({ message: error.message });
    }
}