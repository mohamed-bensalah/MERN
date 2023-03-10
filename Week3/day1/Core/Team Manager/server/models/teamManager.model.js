const mongoose = require("mongoose");
const teamManagerSchema = new mongoose.Schema(
    {
       playerName : {
            type: String,
            required: [
                true,
                "playerName is required"
            ],
            minLength:[2, "name must be at least 2 Characters in length"]
        },

        preferredPosition: {
            type: String,
        },


    },
    { timestamps: true },
);

const teamManager = mongoose.model("teamManager", teamManagerSchema);
module.exports = teamManager;
