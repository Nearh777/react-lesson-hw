import { useEffect, useState } from "react";
import {ICommentJsonPlaceholderModel} from "../../model/ICommentJsonPlaceholderModel.ts";
import { commentServiceJsonPlaceholder } from "../../services/api.service.ts";
import {CommentJsonplaceholderComponent} from "../comment-jsonplaceholder-component/CommentJsonplaceholderComponent.tsx";


export const CommentsJsonplaceholderComponent = () => {

    const [comments, setComments] = useState <ICommentJsonPlaceholderModel[]> ([])

    useEffect(() => {
        commentServiceJsonPlaceholder.getComments().then((allComments) => {
                setComments(allComments)
            })

    }, [])

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                comments.map((comment: ICommentJsonPlaceholderModel) => <CommentJsonplaceholderComponent item={comment} key={comment.id} />)
            }
        </div>
    );
};