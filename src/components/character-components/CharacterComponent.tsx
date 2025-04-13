import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface ICharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: ICharacterComponentProps) => {
    return (
        <div className='flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ... '>
            <h3 className='font-bold text-2xl'>{item.name} {item.surname}</h3>
            <img className='h-40 w-30 rounded-full' src={item.photo} alt={item.name}/>
            <p className='font-medium text-gray-500 font-serif'>{children}</p>

        </div>
    );
};


