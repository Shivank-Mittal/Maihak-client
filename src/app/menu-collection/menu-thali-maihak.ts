import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 20, availability: 'Menu Midi et Soir', detail:[
        {
            section: 'Plateau Complet',
            supplement:'Riz Basmati et Nan ou Nan Fromage',
            items: [
                { itemName: "RAITA Yaourt", detail:  "aux crudités et épices", isOptional: false} ,
                { itemName: "POULET CURRY", detail:  "Curry de poulet traditionnel", isOptional: false} ,
                { itemName: "AGNEAU CURRY", detail:  "Curry d'agneau traditionnel", isOptional: false} ,
                { itemName: "ALOO PAKORA", detail:  "Beignets de pomme de terre", isOptional: false} ,
                { itemName: "LEGUMES CURRY", detail:  "Curry de légumes traditionnel", isOptional: false} ,
            ]
        },
        {
            section: '1 Dessert au choix',
            items: [
                {itemName: "GULAB JAMUN", detail: "boule préparé à base de lait parfumée à la rose et au miel", isOptional:false},
                {itemName: "GLACE", detail: "2 boules au choix", isOptional:true},
            ]
        }
    ]},
]

export default menu;


