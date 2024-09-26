import DataJson from "../data/data.json";

export interface comment {
    title: string;
    value: string;
    clientName: string;
    clientLocation: string;
    profilePic: string;
}

const clientComments: comment[] = DataJson.clientFeedback.comments;

export default clientComments;
