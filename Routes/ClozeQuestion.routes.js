import { addQuestion, getQuestion } from "../Controller/ClozeQuestion.controller.js";

export function ClozeQuestionRoutes(app) {
    app.get("/getCloze", getQuestion);
    app.post("/addCloze", addQuestion);
};