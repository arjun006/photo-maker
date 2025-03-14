const express = require("express");
const {register, login} = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", (req, res)=>{
    req.session.destroy(() => res.redirect("/"));
});
// additional routes
// Update profile -> /update/:id
// Delete user  -> /delete-user/:id

module.exports = router;