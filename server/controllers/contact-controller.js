const Contact = require("../models/contact-model.js");

const contact = async(req, res, next) => {
    try {
        const {username, email, message} = req.body;

        const contactDetails = await Contact.create({
            username,
            email,
            message
        });

        return res.status(200).json({
            success: false,
            message: `Added Successfully ${contactDetails.username}`,
            contactDetails
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {
    contact
}