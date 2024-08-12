import { FoodType } from "./menu-collection"

export type menu = Map<string, string>

type menuALaCarte = {
    section: string,
    items: {itemName: string, detail?: string, isOptional: boolean}[],
    supplement?: string,
}

type menuALaCarteCollection = menuALaCarte[]

export type menuItem = 
    { type: 'A La Carte', item: string, detail?: string , price: number } |
    { type: 'MENU', availability?: string, detail?: menuALaCarteCollection, price: number } 


export type menuCollection = {type: FoodType, collection: menuItem[]}[]