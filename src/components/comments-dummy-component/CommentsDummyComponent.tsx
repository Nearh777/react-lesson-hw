import {useEffect, useState} from "react";
import {CommentDummyModel} from "../../model/CommentDummyModel.ts";
import {loadDummyComments} from "../../service/api.service.ts";
import {CommentDummyComponent} from "../comment-dummy-component/CommentDummyComponent.tsx";


export const CommentsDummyComponent = () => {

    const [comments, setComments] = useState<CommentDummyModel[]>([]);

    useEffect(() => {
        loadDummyComments().then(value => {setComments(value)})
    })

    return (

            <div className='mx-auto grid grid-cols-4 gap-4 '>
                {
                    comments.map((comment: CommentDummyModel) => <CommentDummyComponent comment={comment} key={comment.id}/>)
                }
            </div>

    );
};