import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 10, availability: 'Menu Midi et Soir \n Plateau Complet', detail:[
        {
            section: '-10 ans',
            items: [
                {itemName: "POULET TIKKA", detail: "Blanc de poulet grillé", isOptional: true},
                {itemName: "POULET KORMA", detail: "Blancs de poulet, sauce aux noix de cajou, amandes, crème fraîche, raisins secs", isOptional: true},
                {itemName: "Riz", isOptional: false},
            ]
        },
        {
            section: 'Desserts',
            items: [
                {itemName: "GLACE", detail: "1 Boule au choix", isOptional:false},
            ]
        }
    ]},
]

export default menu;
