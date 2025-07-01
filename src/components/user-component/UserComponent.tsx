import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";

interface UserComponentProps {
    user: IUser;
}

export const UserComponent = ({user: {firstName, lastName, image, gender, age, id}}: UserComponentProps) => {

    const navigate = useNavigate();
    const onButtonClickNavigate = () => {
               navigate(`/users/` + id + `/carts`);
    }
    return (
        <div
            className="flex flex-col justify-center items-center space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">

            <img src={image} alt={gender}/>
            <h3 className="text-lg font-semibold text-black">{firstName} {lastName}</h3>
            <p className="font-medium text-gray-700">Age: {age}</p>
            <button onClick={onButtonClickNavigate} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click me</button>
        </div>
    );
};