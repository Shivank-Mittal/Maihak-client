const baseUrl = '../../../assets/images/food'

export type FoodType = 
    | 'entreé'
    | 'soupes'
    | 'beignets'
    | 'salades'
    | 'grillades'
    | 'pains'
    | 'desserts'
    | 'menu maihak'
    | 'menu delhi'
    | 'menu punjab'
    | 'menu thali maihak'
    | 'thali vegetarien'
    | 'menu infant'
    | 'menu express'
    | 'thali express'
    | 'plat Poulet'
    | 'plat Agneau'
    | 'briyani'
    | 'nouilles Sautées'
    | 'legume'
    | 'riz Basmati'


const foodTypes: FoodType[] = [
    'entreé',
    'soupes',
    'beignets',
    'salades',
    'grillades',
    'pains',
    'desserts',
    'menu maihak',
    'menu delhi',
    'menu punjab',
    'menu thali maihak',
    'thali vegetarien',
    'menu infant',
    'menu express',
    'thali express',
    'plat Poulet',
    'plat Agneau',
    'briyani',
    'nouilles Sautées',
    'legume',
    'riz Basmati',
]


function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getCollection(): any[] {
    const menu: any[]= []
    foodTypes.forEach(foodType => {
        const imgUrl = `${baseUrl}/${foodType}.jpg`;
        const type = foodType.split('-').map(word => capitalizeFirstLetter(word)).join(' ');
        menu.push({type, imgUrl})
    });
    
    return menu;
}