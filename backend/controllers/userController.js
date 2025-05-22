const User = require('../models/userModel'); 
const Project = require('../models/projectModel');

exports.getMyData = async (req, res) => {
    console.log("Authenticated:", req.isAuthenticated());
    console.log("User object:", req.user);
  
    if (req.isAuthenticated()) {
      try {
       
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password').populate('projects', 'name visibility');
        
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
      }
    } else {
      return res.status(401).json({ message: 'Not authenticated' });
    }
  };

exports.updateMyData = async (req, res) => {
    try {
        const userId = req.user.id; 
        const updates = req.body;

        const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getMyProjects = async (req, res) => {
    try {
        
        const userId = req.user._id;
       
        const projects = await Project.find({
            $or: [
                { owner: userId },
                { users: userId }
            ]
        }).populate('owner', 'name email').populate('users', 'name email'); 

        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { userid } = req.params;
        const user = await User.findById(userid).select('-password').populate('projects', 'name visibility'); 

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};