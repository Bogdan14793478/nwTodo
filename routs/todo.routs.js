const { Router } = require("express");
const router = Router();
const Help = require("../helper/todohelper");
// /api
router.post("/", async (req, res) => Help.get(req, res));
router.post("/add", async (req, res) => Help.add(req, res));

module.exports = router;
