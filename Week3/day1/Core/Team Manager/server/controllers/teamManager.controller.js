const TeamManager= require("../models/teamManager.model");


module.exports.getAllTeamManager=(req, res) => {
    TeamManager.find({})
        .then((allTeamManager) => res.json(allTeamManager))
        .catch((err) => console.log(err));
}

module.exports.createTeamManager= (req, res) => {
    TeamManager.create(req.body)
        .then((newTeamManager) => res.json(newTeamManager))
        .catch((err) => console.log(err));
}

module.exports.getOneTeamManager=(req, res) => {
    TeamManager.findOne({ _id: req.params.id })
        .then((oneTeamManager) => res.json(oneTeamManager))
        .catch((err) => console.log(err));
}


module.exports.DeleteOneTeamManager=(req , res) =>{
    TeamManager.deleteOne({ _id: req.params.id })
.then(result =>res.json("Delete with "))
.catch((err) => res.json(400).json(err));
}

module.exports.updateTeamManager= (req, res) => {
    TeamManager.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
})
    .then((updatedTeamManager) => res.json(updatedTeamManager))
    .catch((err) => console.log(err));
}
