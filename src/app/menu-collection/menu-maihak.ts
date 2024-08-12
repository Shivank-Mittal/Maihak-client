import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 29, availability: 'Menu Midi et Soir', detail:[
        {
            section: 'Entrée + Galette maison (Nan ou Nan Fromage)',
            items: [
                {itemName: 'MIXED GRILL', detail: 'Agneau, poulet, gambas, saumon (cuit au tandoor)', isOptional: false,},
                {itemName: "CREVETTES PAKORA", detail: "Beignets de crevettes gratinées", isOptional: true},
                {itemName: "GOLDEN CHICKEN", detail: "Beignets de blanc de poulet", isOptional: true},
                {itemName: "SAUMON TIKKA", detail: "Saumon mariné grillés au tandoor", isOptional: true},
            ]
        },
        {
            section: 'Plats',
            supplement: 'Riz Basmati',
            items: [
                {itemName: "POULET TIKKA MASALA", detail: "Blancs de poulets grillés avec une sauce curry, crème, beurre, épices indiennes", isOptional:false},
                {itemName: "AGNEAU SHAI KORMA", detail: "Agneau, sauce aux noix de cajou, amandes, crème fraîche, raisins secs (doux)", isOptional:true},
                {itemName: "SAUMON TIKKA MASALA", detail: "Pavés de saumon avec une sauce curry, crème, beurre, épices indiennes", isOptional:true},
                {itemName: "CREVETTES MASALA Crevettes", detail: "au curry moyennement épicées, herbes fraîches, poivrons, tomates (relevé)", isOptional:true},
            ]
        },
        {
            section: 'Desserts',
            items: [
                {itemName: "GULAB JAMUN", detail: "Boule de semoule pochée au sirop de rosee", isOptional:false},
                {itemName: "KULFI Glace", detail: "pistache ou mangue fait maisone", isOptional:true},
            ]
        }
    ]},
]

export default menu;
