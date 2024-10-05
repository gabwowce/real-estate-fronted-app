import DataAboutUs from "../../data/data-AboutUs.json";


export interface valueCard {
    title: string;
    value: string;
    icon: string;
}

const valueCard: valueCard[] = DataAboutUs.ourValues.slogans;

export default valueCard;
