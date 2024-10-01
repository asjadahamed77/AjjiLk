import { v2 as cloudinary } from "cloudinary";
import phoneModel from "../models/phoneModel.js";
import userModel from "../models/userModel.js";
const addPhone = async (req, res) => {
    try {
      const {
        phoneName,
        phoneBrand,
        phoneStorage,
        phonePrice,
        phoneCondition,
        phoneNumber,
        phoneFeature1,
        phoneFeature2,
        phoneFeature3,
        phoneFeature4
      } = req.body;
  
      const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
  
      // Create the phone data object
      const phoneData = {
        phoneName,
        phoneImages: imagesUrl, // Store paths relative to the static directory
        phoneBrand,
        phoneStorage,
        phonePrice: Number(phonePrice),
        phoneCondition,
        phoneNumber: Number(phoneNumber),
        phoneFeature1,
        phoneFeature2,
        phoneFeature3,
        phoneFeature4,
        isApproved: false,
        date: Date.now(),
      };
  
      // Save the phone to the database
      const phone = new phoneModel(phoneData);
      await phone.save();
  
      res.json({ success: true, message: "Phone Added" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };

// Admin Approval Route
const approvePhone = async (req, res) => {
    try {
        const { phoneId } = req.body;

        // Find the phone by ID and update the 'isApproved' field to true
        const phone = await phoneModel.findByIdAndUpdate(
            phoneId,
            { isApproved: true },
            { new: true } // Return the updated document
        );

        if (!phone) {
            return res.json({ success: false, message: "Phone not found" });
        }

        res.json({ success: true, message: "Phone approved", phone });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error approving phone" });
    }
};

// Reject Phone Listing
const rejectPhone = async (req, res) => {
    try {
        const { phoneId } = req.body;

        // Find the phone by ID and remove it
        const phone = await phoneModel.findByIdAndDelete(phoneId);

        if (!phone) {
            return res.status(404).json({ success: false, message: "Phone not found" });
        }

        res.json({ success: true, message: "Phone rejected and deleted" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error rejecting phone" });
    }
};

// Fetch all user-added phones (both approved and unapproved)
const getUserAddedPhones = async (req, res) => {
    try {
        const phones = await phoneModel.find({}); // You can filter here if needed (e.g., by user ID or approval status)
        res.json({ success: true, phones });
    } catch (error) {
        console.error("Error fetching phones:", error);
        res.json({ success: false, message: "Server error" });
    }
};


// Fetch approved phones only
const getApprovedPhones = async (req, res) => {
    try {
        const phones = await phoneModel.find({ isApproved: true }); // Filter for approved phones only
        res.json({ success: true, phones });
    } catch (error) {
        console.error("Error fetching approved phones:", error);
        res.json({ success: false, message: "Server error" });
    }
};








export  {addPhone,approvePhone,rejectPhone,getUserAddedPhones,getApprovedPhones};
