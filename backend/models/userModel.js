const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            unique: [true, "Email already taken"]
        },
        imageURL: {
            type: String
        },
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Project"
            }
        ]
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
