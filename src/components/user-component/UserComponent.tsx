import { IUser } from "../../models/IUser.ts";



interface UserComponentProps {
    user: IUser;
}

export const UserComponent = ({user: {firstName, lastName, image, gender, age}}: UserComponentProps) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-2 text-center sm:text-left border-4 border-purple-200 rounded-xl">

            <img src={image} alt={gender}/>
            <h3 className="text-lg font-semibold text-black">{firstName} {lastName}</h3>
            <p className="font-medium text-gray-700">Age: {age}</p>

        </div>
    );
};