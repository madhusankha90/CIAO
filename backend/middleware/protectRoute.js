const jwt = require('jsonwebtoken');

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401),json({error: 'Unauthorized No JWT Token provided'});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);

        if(!decoded) {
            return res.status(401),json({error: 'Unauthorized Invalid tokenn'});
        }

        const user = await User.findById(decoded.user).select('-password');

        if(!user) {
            return res.status(404),json({error: 'User not found'});
        }

    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal server error" });
        
    }
}