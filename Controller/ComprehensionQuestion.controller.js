import ComprehensionQuestionModel from "../Model/ComprehensionQuestion.model.js";

//Api for fetch data
export function getQuestion(req, res) {
    ComprehensionQuestionModel.find().then(data => {
        if (!data) {
            return res.status(404).json({ message: "Questions not found" })
        }
        res.send(data)
    }).catch(err => res.status(500).json({ message: err.message }))
};

//Api for add data
export function addQuestion(req, res) {
    const { type, para, question, options } = req.body;

    if (!type || !para || !question || !options) {
        return res.status(400).json({ message: "Enter required details" });
    }

    const newQuestions = new ComprehensionQuestionModel({
        type: type,
        para: para,
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