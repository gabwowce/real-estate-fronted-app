import DataJson from "../data/data.json";

export interface realEstateCard {
    id: number;
    title: string;
    description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    pic: string;
}

const realEstateCards: realEstateCard[] = DataJson.realEstate.realEstateCards;

export default realEstateCards;
