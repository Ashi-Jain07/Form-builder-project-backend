import { addQuestion, getQuestion } from "../Controller/CategorizeQuestion.controller.js";

export function CategorizeQuestionRoutes(app) {
    app.get("/getCategorize", getQuestion);
    app.post("/addCategorize", addQuestion);
};