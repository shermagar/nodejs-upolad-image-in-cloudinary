const cloudinary = require("../utils/cloudinary");

// function to upload image in desire folder in cloudinary
exports.uploadImage = async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'product'
      });
      res.status(200).json({
        success: true,
        message:"Uploaded!",
        url: result.secure_url
      })
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };