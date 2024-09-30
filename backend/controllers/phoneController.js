import phoneModel from "../models/phoneModel.js";

const addPhone = async (req, res) => {
    try {
        const {
            phoneName,
            phoneImages,
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

        const phoneData = {
            phoneName,
            phoneImages,
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
            date: Date.now() 
        };

        const phone = new phoneModel(phoneData);
        await phone.save();

        res.json({ success: true, message: "Phone Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export  {addPhone};
