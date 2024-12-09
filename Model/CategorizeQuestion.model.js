import mongoose from "mongoose";

const CategorizeQuestionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    categories: [String],
    answers: [{ text: String, category: String }]
});

const CategorizeQuestionModel = mongoose.model('CategorizeQuestion', CategorizeQuestionSchema);
export default CategorizeQuestionModel;