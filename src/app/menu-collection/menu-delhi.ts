import { menuItem } from "../pages/menu/menu-type"

const menu: menuItem[] = [
    { type: 'MENU', price: 23, availability: 'Menu Midi et Soir', detail:[
        {
            section: 'Entrée + Galette maison (Nan ou Nan Fromage)',
            items: [
                { itemName: "PRAWN CHAAT", detail: "Crevettes garnies d'une salade composée de tomate, concombre, pomme, herbes fraîches, crème fraîche", isOptional:false },
                { itemName: "CHICKEN TANDOORI", detail: "Cuisse de poulet mariné grillé", isOptional:true },
                { itemName: "SAMOSA VIANDE", detail: "Chaussons de viande d'agneau haché, petits pois, raisins secs, noix de cajou", isOptional:true },
                { itemName: "BAIGHAN BHARTA", detail: "Caviar d'aubergine grillé avec crème et coriandre fraîche", isOptional:true },
            ]
        },
        {
            section: '1 Plats au choix',
            supplement: 'Riz Basmati',
            items: [
                { itemName: "CHILI CHICKEN", detail: "Blancs de poulets grillés, poivrons, tomates, coriandre fraîche (peu épicé)", isOptional:false},
                { itemName: "AGNEAU MAIHAK", detail: "Agneau au curry épicé, sauce tomate et amandes (relevé)", isOptional:true},
                { itemName: "POISSON MASALA", detail: "(Colin d'Alaska) Filet de Colin, poivrons, tomates, coriandre fraîche (peu épicé)", isOptional:true},
                { itemName: "DAL TARKA", detail: "Lentilles jaunes accommodées aux herbes et aromates de l'inde", isOptional:true},
            ]
        },
        {
            section: '1 Desserts au choix',
            items: [
                {itemName: "HALWA", detail: "Gâteau de semoule noix de coco", isOptional:false},
                {itemName: "SORBET", detail: "2 boules au choix", isOptional:true},
            ]
        }
    ]},
]

export default menu;



