import { addQuestion, getQuestion } from "../Controller/ComprehensionQuestion.controller.js";

export function ComprehensionQuestionRoutes(app) {
    app.get("/getComprehension", getQuestion);
    app.post("/addComprehension", addQuestion);
};