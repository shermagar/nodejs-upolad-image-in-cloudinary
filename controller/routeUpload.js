const cloudinary = require("../utils/cloudinary");

// function to upload image in cloudinary
exports.uploadImage = async (req, res) => {
  cloudinary.uploader.upload(req.file.path, function (err, result){
    if(err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error"
      })
    }

    res.status(200).json({
      success: true,
      message:"Uploaded!",
      url: result.secure_url
    })
  })
};