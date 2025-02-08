const userModel = require("../models/user.models");

// ✅ Get all users
module.exports.getUserController = async (req, res) => {
    try {
        const users = await userModel.find(); // ✅ Correct - Fetches all users
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ❌ Mistake: `findOne()` is not awaited, and potential issue with `_id: id`
module.exports.getaUserController = async (req, res) => {
    try {
        const id = req.params.id;

        // ❌ Mistake: Missing `await`, so this returns a **Promise** instead of actual data.
        const user = await userModel.findOne({ _id: id });

        // ❌ Mistake: Even if `user` is `null`, the check will not work correctly without `await`.
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ✅ Corrected version:
module.exports.getaUserController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const user = await userModel.findById(id); // ✅ Better to use `findById()` for fetching by ID

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ✅ Create a new user
module.exports.createUserController = async (req, res) => {
    try {
        const { name, age } = req.body;

        // ✅ Validation check for missing fields
        if (!name || !age) {
            return res.status(400).json({ message: "Name and age are required" });
        }

        const newUser = await userModel.create({ name, age });
        console.log("User Created:", newUser);

        res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ✅ Delete a user by ID
module.exports.deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // ❌ Mistake: `findByIdAndDelete()` does not return an error if the user is missing. We need to check manually.
        const deletedUser = await userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ❌ Mistake: `UpdateUserController` is empty, and update logic is missing.
module.exports.UpdateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const { name, age } = req.body;

        if (!id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // ✅ Updating user and returning new updated document
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            { name, age },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
