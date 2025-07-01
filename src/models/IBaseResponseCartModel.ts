import { ICart } from "./ICart";

export type IBaseResponseCartModel = {
    carts: ICart[];
    total: number,
    skip: number,
    limit: number
}