import mongoose from "mongoose";

const ClozeQuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [String]
});

const ClozeQuestionModel = mongoose.model("ClozeQuestion", ClozeQuestionSchema);
export default ClozeQuestionModel;