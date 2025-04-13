import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../character-components/CharacterComponent.tsx";




export const FamilyComponent = () => {
    return (
        <div className='inline-grid grid-cols-2 gap-4'>
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item = {value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};