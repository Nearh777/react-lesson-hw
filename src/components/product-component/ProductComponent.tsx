import {ProductModel} from "../../model/ProductModel.ts";
import {FC} from "react";


type PropTypeProduct = {
    product: ProductModel
}


export const ProductComponent: FC<PropTypeProduct> = ({product: {title, description, thumbnail, price}}) => {
    return (
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border-4 border-purple-500 rounded-xl bg-white ...">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 bg-white" src={thumbnail} alt={title}/>
            <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="font-medium text-gray-500">{description}</p>
                <p className="font-medium text-slate-500">Price: {price}$</p>
            </div>
            </div>
        </div>
    );
};