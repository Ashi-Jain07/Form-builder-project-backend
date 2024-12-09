import CategorizeQuestionModel from "../Model/CategorizeQuestion.model.js";

//Api for fetch data
export function getQuestion(req, res) {
    CategorizeQuestionModel.find().then(data => {
        if (!data) {
            return res.status(404).json({ message: "Questions not found" })
        }
        res.send(data)
    }).catch(err => res.status(500).json({ message: err.message }))
};


//Api for add data
export function addQuestion(req, res) {
    const { type, description, categories, answers } = req.body;

    if (!type || !description || !categories || !answers) {
        return res.status(400).json({ message: "Enter required details" });
    }

    const newQuestions = new CategorizeQuestionModel({
        type: type,
        description: description,
        categories: categories,
        answers: answers
    });

    newQuestions.save().then(data => {
        if (!data) {
            return res.status(400).json({ message: "Failed to add question" })
        }
        res.send(data)
    }).catch(err => res.status(500).json({ message: err.message }))
};