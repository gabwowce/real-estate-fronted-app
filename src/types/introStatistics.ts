import DataJson from "../data/data.json";

export interface IntroStatistic {
    title: string;
    value: string;
}

const introStatistics: IntroStatistic[] = DataJson.intro.statistics;



export default introStatistics;
