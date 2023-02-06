import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try{
        let token = req.header("Authorization");
        if(!token) return res.status(403).json({ message: "Token is not valid" });
        if(token.startsWith("Bearer ")) token = token.slice(7, token.length);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch{
        res.status(500).json({ error: error.message });
    }
}