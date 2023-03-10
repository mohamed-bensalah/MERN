const TeamManagerController = require("../controllers/teamManager.controller");



module.exports = (app) => {
    app.get("/api/teamManager",TeamManagerController.getAllTeamManager);
    app.post("/api/teamManager", TeamManagerController.createTeamManager);
    app.get("/api/teamManager/:id", TeamManagerController.getOneTeamManager);
    app.put("/api/updateTeamManager/:id", TeamManagerController.updateTeamManager);
    app.delete("/api/deleteTeamManager/:id", TeamManagerController.DeleteOneTeamManager);
}