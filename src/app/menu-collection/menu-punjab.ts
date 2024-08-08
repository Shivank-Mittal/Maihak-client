import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 20, availability: 'Menu Midi et Soir',
         detail:[
        {
            section: '1 Entrée au choix',
            supplement: 'Nan Fromage',
            items: [
                { itemName: "RESHMI KABAB", detail: "Blanc de poulet haché, coriandre, forme de saucisses grillées", isOptional: false},
                { itemName: "SHEEKH KABAB", detail: "Viande d'agneau hachés épicés, gingembre, herbes fraîches", isOptional: true},
                { itemName: "FISH PAKORA", detail: "Beignets de poisson", isOptional: true},
                { itemName: "ONION BHAJI", detail: "Beignets d'oignon", isOptional: true},
            ]
        },
        {
            section: 'Plats',
            supplement: 'Riz Basmati',
            items: [
                {itemName: "POULET CURRY", detail:  "Poulet au curry accommodé aux herbes, et épices (moyennement relevé)", isOptional: false},
                {itemName: "POISSON CURRY", detail:  "Filet de poisson au curry accommodé aux herbes et épices", isOptional: true},
                {itemName: "LEGUMES CURRY", detail:  "Variété de légumes accommodés au curry", isOptional: true},
                {itemName: "DAL TARKA", detail:  "Lentilles jaunes au curry, beurre et coriandre", isOptional: true},
            ]
        },
        {
            section: '1 Dessert au choix',
            items: [
                {itemName: "HALWA", detail: "Gâteau de semoule noix de coco", isOptional:false},
                {itemName: "MANGO ICE CREAM", detail: "boule de glace à la vanille avec son coulis de mangue, crème et chantilly", isOptional:true},
            ]
        }
    ]},
]

export default menu;


