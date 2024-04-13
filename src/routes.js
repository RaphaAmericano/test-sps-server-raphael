const { Router } = require("express");
const { userController, authController } = require("./controller");
const { isAuth } = require("./middleware/auth.middleware");
const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/auth",  authController.authUser)

routes.get("/users", isAuth, userController.getAllUser)
routes.get("/users/:id", isAuth, userController.getUser)
routes.post("/users/", isAuth, userController.postUser)
routes.put("/users/:id", isAuth, userController.putUser)
routes.delete("/users/:id", isAuth, userController.deleteUser)

module.exports = routes;