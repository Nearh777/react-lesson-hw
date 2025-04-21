import {useEffect, useState} from "react";
import { CommentModel } from "../../model/CommentModel"
import { loadComments } from "../../service/api.service";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";


export const CommentsComponent = () => {

    const[comments, setComment] = useState<CommentModel[]>([]);

    useEffect(() => {
        loadComments().then(value => {setComment(value)})
    })


    return (
            <div className='mx-auto grid grid-cols-4 gap-4 '>
                {
                    comments.map((comment: CommentModel) => <CommentComponent comment={comment} key={comment.id}/>)
                }
            </div>
    );
};