import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
    phoneName: { type: String, required: true },
    phoneImages: { type: Array, required: true },
    phoneBrand: { type: String, required: true },
    phoneStorage: { type: String, required: true },
    phonePrice: { type: Number, required: true },
    phoneCondition: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    phoneFeature1: { type: String },
    phoneFeature2: { type: String },
    phoneFeature3: { type: String },
    phoneFeature4: { type: String },
    isApproved: { type: Boolean, default: false }, 
    date: { type: Number, required: true }
});

const phoneModel = mongoose.models.phone || mongoose.model('phone', phoneSchema);

export default phoneModel;
