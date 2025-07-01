import {useEffect, useState} from "react";
import {useParams} from "react-router";
import { ICart } from "../../models/ICart";
import {IBaseResponseCartModel} from "../../models/IBaseResponseCartModel.ts";
import {cartService} from "../../servises/general.api.service.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";





export const CartsComponent = () => {

    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {

        if (id) {
            cartService.getCartOfUser(id)
                .then(({carts}: IBaseResponseCartModel) => {
                    setCarts(carts);
                })

        }
    }, [id]);

    return (
        <div>

            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart} />)
            }

        </div>
    );
};