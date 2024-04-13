const { Router } = require("express");
const { userController, authController } = require("./controller")
const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/auth", authController.authUser)

routes.get("/users", userController.getAllUser)
routes.get("/users/:id", userController.getUser)
routes.post("/users/", userController.postUser)
routes.put("/users/", userController.putUser)
routes.delete("/users/:id", userController.deleteUser)

module.exports = routes;