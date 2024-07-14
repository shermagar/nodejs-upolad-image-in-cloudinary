const express = require("express")
const router = express.Router()
const uploadRoute = require('../controller/routeUpload')
const desireFolder = require('../controller/uploadImageInDesireFolder')
const upload = require("../middleware/multer");


router.post('/upload', upload.single('image'), uploadRoute.uploadImage);
router.post('/insert', upload.single('image'), desireFolder.uploadImage);
module.exports = router