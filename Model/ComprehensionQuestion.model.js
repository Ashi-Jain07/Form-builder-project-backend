import mongoose from "mongoose";

const ComprehensionQuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  para: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [String]
});

const ComprehensionQuestionModel = mongoose.model("ComprehensionQuestion", ComprehensionQuestionSchema);
export default ComprehensionQuestionModel;