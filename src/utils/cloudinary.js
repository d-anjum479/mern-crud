import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // uploading file
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // if file upload successful
    console.log("File uploading successfully on cloudinary");
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove file from server, temporarily uploaded
    return null;
  }
};

export { uploadOnCloudinary };