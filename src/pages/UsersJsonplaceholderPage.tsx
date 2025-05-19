import {
    UsersJsonplaceholderComponent
} from "../components/users-jsonplaceholder-component/UsersJsonplaceholderComponent.tsx";

export const UsersJsonplaceholderPage = () => {
    return (
        <div className='mx-auto grid grid-cols-4 gap-4 '>
            <UsersJsonplaceholderComponent/>
        </div>
    );
};