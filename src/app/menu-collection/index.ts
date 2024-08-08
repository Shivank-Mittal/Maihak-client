import { menuCollection, menuItem } from '../pages/menu/menu-type';
import pains from './pain';
import desserts from './dessert';
import entreé from './entreé';
import soupe from './soupe';
import beignet from './beignet';
import salad from './salad';
import grillad from './grillad';
import platPoulet from './plats-poulet';
import platAgneau from './plats-agneau';
import briyani from './briyani';
import nouillesSautées from './nouilles-sautées';
import legume from './legume';
import rizBasmati from './riz-basmati';
import menuMaihak from './menu-maihak';
import menuDelhi from './menu-delhi';
import menuPunjab from './menu-punjab';
import menuThaliMaihak from './menu-thali-maihak';
import menuExpress from './menu-express';
import thaliExpress from './thali-express';
import thaliVegetarian from './thali-vegetarien';
import menuInfant from './menu-infant';

const collections: menuCollection = [
    { type: 'pains', collection: pains},
    { type: 'desserts', collection: desserts},
    { type: 'entreé', collection: entreé},
    { type: 'soupes', collection: soupe},
    { type: 'beignets', collection: beignet},
    { type: 'salades', collection: salad},
    { type: 'grillades', collection: grillad},
    { type: 'plat Poulet', collection: platPoulet},
    { type: 'plat Agneau', collection: platAgneau},
    { type: 'briyani', collection: briyani},
    { type: 'nouilles Sautées', collection: nouillesSautées},
    { type: 'legume', collection: rizBasmati},
    { type: 'riz Basmati', collection: legume},
    { type: 'menu maihak', collection: menuMaihak},
    { type: 'menu delhi', collection: menuDelhi},
    { type: 'menu punjab', collection: menuPunjab},
    { type: 'menu thali maihak', collection: menuThaliMaihak},
    { type: 'menu express', collection: menuExpress},
    { type: 'thali express', collection: thaliExpress},
    { type: 'thali vegetarien', collection: thaliVegetarian},
    { type: 'menu infant', collection: menuInfant},
]
export default collections;