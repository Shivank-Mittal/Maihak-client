import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 14.50, availability: 'Midi uniquement (sauf week-end et jours fériés)', detail:[
        {
            section: 'Plateau Complet',
            supplement:'Riz Basmati et Nan ou Nan Fromage HALWA',
            items: [
                {itemName: "RAITA", detail:  "yaourt aux crudités et épices", isOptional: false },
                {itemName: "DAL TARKA", detail:"Lentilles jaunes accommodées aux herbes et aromates de l'inde", isOptional: false },
                {itemName: "VEGETABLE", detail:  "CURRY Curry de légumes traditionnel", isOptional: true },
                {itemName: "POULET", detail:  "CURRY Curry de poulet traditionnel", isOptional: true },
                {itemName: "CURRY", detail:  "D'AGNEAU", isOptional: true },
                {itemName: "CURRY", detail:  "DE POISSON", isOptional: true },
            ]
        },
        {
            section: '1 Dessert',
            items: [
                {itemName: "HALWA", detail: "gâteau de semoule noix de coco", isOptional:false},
                {itemName: "CAFÉ", isOptional:true},
            ]
        }
    ]},
]

export default menu;