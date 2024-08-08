import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 11,availability: 'Midi uniquement (sauf week-end et jours fériés)' +  '\n' + 'servi avec une galette maison (nan nature ou nan fromage)', 
        detail:[
        {
            section: '1 Plat au choix',
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
                {itemName: "POULET TANDOORI", detail: "Cuisse de poulet mariné et grillé, cuit au tandoor", isOptional: false},
                {itemName: "MIXED PAKORA", detail: "beignets de pommes de terre, aubergine et oignons", isOptional: true},
                {itemName: "PRAWN CHAAT", detail: "Crevettes macérées dans du jus de citron vert, garnie d'une salade composée (tomate, concombre, pommes et herbes fraîches)", isOptional: true},
                {itemName: "POULET CURRY", detail: "Poulet au curry accommodé et épices (moyennement relevé)", isOptional: true},
                {itemName: "VEGETABLE CURRY", detail: "Variété de légumes accommodés au curry", isOptional: true},
            ]
        },
        {
            section: '1 Dessert',
            items: [
                {itemName: "HALWA", detail: "Gâteau de semoule noix de coco", isOptional:false},
            ]
        }
    ]},
]

export default menu;




