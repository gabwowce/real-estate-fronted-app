import DataJson from "../data/data.json";

export interface MenuItem {
    label: string;
    link: string;
}

const menuItems: MenuItem[] = DataJson.header.menu.items;

export default menuItems;
