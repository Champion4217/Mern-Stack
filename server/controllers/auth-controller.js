const User = require("../models/user-model.js");

const register = async(req, res, next) => {
    try {
        const {username, email, phone, password} = req.body;

        if(!username || !email || !phone || !password){
            return res.status(400).json({
                success: false,
                message: "Please enter all the fields"
            })
        }

        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            })
        }
    
        const data = await User.create({
            username,
            email,
            phone,
            password
        });

        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
};

module.exports = {
    register
}

