import DataJson from "../data/data.json";

export interface Column {
    title: string;
    links: string[]; 
}

const footerColumns: Column[] = [
    {
        title: DataJson.footer.column1.title,
        links: DataJson.footer.column1.links,
    },
    {
        title: DataJson.footer.column2.title,
        links: DataJson.footer.column2.links,
    },
    {
        title: DataJson.footer.column3.title,
        links: DataJson.footer.column3.links,
    },
    {
        title: DataJson.footer.column4.title,
        links: DataJson.footer.column4.links,
    },
    {
        title: DataJson.footer.column5.title,
        links: DataJson.footer.column5.links,
    },
];

export default footerColumns;
