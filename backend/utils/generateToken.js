const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn: "20d"
    })

    res.cookie("jwt",token,{
        maxAge: 20 * 24 * 60 * 60 * 1000, //20 days in miliseconds
        httpOnly: true,
        sameSite:"strict"
    });
}

module.exports = generateTokenAndSetCookie;