import {ICart} from "../../models/ICart.ts";


interface CartComponentProps {
    cart: ICart;
}

export const CartComponent = ({cart:{total}}: CartComponentProps) => {
    return (
        <div>
                <p>Total: {total}</p>
        </div>
    );
};