const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Project name is required"],
            trim: true
        },

        users: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            }
        ],

        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Project owner is required"]
        },
        
        visibility: {
            type: Boolean,
            default: false
        },
        
        description: {
            type: String,
            required: false
        },
        
        projectType: {
            type: Boolean,
            required: true
        },
        
        chats: [
            {
            text: { type: String },
            userprompt: { type: Schema.Types.Mixed  },
            airesponse: { type: Schema.Types.Mixed },
            time: {type: Schema.Types.Mixed}
            }
        ],
        votes: {
            upvotes: [{
                type: Schema.Types.ObjectId,
                ref: "User"
            }],
            downvotes: [{
                type: Schema.Types.ObjectId,
                ref: "User"
            }]
        },
        voteCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true 
    }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

module.exports = Project;
