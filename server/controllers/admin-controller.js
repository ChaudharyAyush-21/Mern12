const User = require('../models/user-model');
const Contact = require('../models/contact-model');

const getAllUsers = async (req, res) => {
        try {
            const users = await User.find({}, { password:0});
            if(!users || users.length === 0) {
                return res.status(404).json({ msg: "No Users found" });
            }
            res.status(200).json({users});
        } catch (error) {
            next(error);
        }
    };

const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find({});
        if(!contacts || contacts.length === 0) {
        return res.status(404).json({ msg: "No Contacts found" });
    }
    res.status(200).json({contacts});
    } catch (error) {
    next(error);
    }

};

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsers , getAllContacts , deleteUserById };
