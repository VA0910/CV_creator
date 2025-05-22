const router = require("express").Router();
const passport = require("passport");
require('dotenv').config(); 
const authController = require("../controllers/authController")

router.get(
  "/google/callback",
  passport.authenticate("google", {
    prompt:'select_account',
    successRedirect: process.env.CLIENT_URL || "http://localhost:3000/",
    failureRedirect: "/login/failed",
  })
);

router.get("/login/failed", authController.LoginFailed);

router.get("/login/success", authController.LoginSuccess);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/logout", authController.LogOut);

module.exports = router;
