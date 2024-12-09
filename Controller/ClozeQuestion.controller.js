import ClozeQuestionModel from "../Model/ClozeQuestion.model.js";

//Api for fetch data
export function getQuestion(req, res) {
    ClozeQuestionModel.find().then(data => {
        if (!data) {
            return res.status(404).json({ message: "Questions not found" })
        }
        res.send(data)
    }).catch(err => res.status(500).json({ message: err.message }))
};

//Api for add data
export function addQuestion(req, res) {
    const { type, question, options } = req.body;

    if (!type || !question || !options) {
        return res.status(400).json({ message: "Enter required details" });
    }

    const newQuestions = new ClozeQuestionModel({
        type: type,
        question: question,
        options: options
    });

    newQuestions.save().then(data => {
        if (!data) {
            return res.status(400).json({ message: "Failed to add question" })
        }
        res.send(data)
    }).catch(err => res.status(500).json({ message: err.message }))
};