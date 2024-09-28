import DataJson from "../data/data.json";


export interface IntroSlogan {
    title: string;
    icon: string;
}

const introSlogans: IntroSlogan[] = DataJson.intro.slogans;

export default introSlogans;
