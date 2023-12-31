const User = require('../models/User');
// usersController.js
const getAllUsers = async (req, res) => {
      try {
            const users = await User.find({});
            res.status(200).json(users);
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
};

const createNewUser = async (req, res) => {
      try {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(201).json(newUser);
      } catch (error) {
            res.status(400).json({ message: error.message });
      }
};

const getUser = async (req, res) => {
      try {
            const user = await User.findById(req.params.userId);
            if(!user) {
                  return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
};

const updateUser = async (req, res) => {
      try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
            if (!updatedUser) {
                  return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
      } catch (error) {
            res.status(400).json({ message: error.message });
      }
};

const deleteUser = async (req, res) => {
      try {
            const user = await User.findByIdAndDelete(req.params.userId);
            if (!user) {
                  return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
            res.status(500).json({ message: error.message });
      }
};

module.exports = {
    getAllUsers,
    createNewUser,
    getUser,
    updateUser,
    deleteUser
};