import {useEffect, useState} from "react";
import {ProductModel} from "../../model/ProductModel.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import { loadProducts } from "../../service/api.service.ts";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        loadProducts().then(value => setProducts(value))
    }, [])

    return (

        <div className='mx-auto grid grid-cols-3 gap-4' >
            {products.map((product) => <ProductComponent product={product} key={product.id}/>)}
        </div>
    );
};