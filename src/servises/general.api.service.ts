import {IBaseResponseCartModel} from "../models/IBaseResponseCartModel.ts";


const baseUrl = import.meta.env.VITE_BASE_URL;


export const getAll = async <T,>(endpoint: string): Promise <T> => {
            return await fetch(`${baseUrl}${endpoint}`).then(res => res.json());
}


export const cartService = {
    getCartOfUser: async (userId: string): Promise<IBaseResponseCartModel> => {
            return fetch('https://dummyjson.com/carts/user/' + userId)
                .then(res => res.json())
    }
}


