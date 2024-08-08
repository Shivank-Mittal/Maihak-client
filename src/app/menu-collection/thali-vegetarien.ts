import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 18, availability: 'Menu Midi et Soir', detail:[
        {
            section: 'Plateau Complet',
            supplement:'Riz Basmati - Nan au choix',
            items: [
                {itemName: "RAITA", detail:  "yaourt aux crudités et épices", isOptional: false },
                {itemName: "DAL TARKA", detail:"Lentilles jaunes accommodées aux herbes et aromates de l'inde", isOptional: false },
                {itemName: "LEGUMES KORMA", isOptional: false},
                {itemName: "PALAK PANEER", detail: "Épinards préparés avec du fromage maison, sauce riche en épices et en herbes", isOptional: true},
                {itemName: "BAIGHAN BHARTA", detail: "Caviar d'aubergines grillées au tandoor, avec oignons et herbes indiennes", isOptional: true},
            ]
        },
        {
            section: 'Dessert',
            items: [
                {itemName: "HALWA", detail: "gâteau de semoule noix de coco", isOptional:false},
            ]
        }
    ]},
]

export default menu;