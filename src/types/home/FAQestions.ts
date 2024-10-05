import DataJson from "../../data/data.json";

export interface question {
    question: string;
    answer: string;
}

const FAQestions: question[] = DataJson.FAQ.questions;

export default FAQestions;
