import {useEffect, useState } from "react";
import {ICommentDummyjsonModel} from "../../model/ICommentDummyjsonModel.ts";
import {commentServiceDummyJson} from "../../services/api.service.ts";
import { CommentDummyjsonComponent } from "../comment-dummyjson-component/CommentDummyjsonComponent.tsx";





export const CommentsDummyjsonComponent = () => {

    const [comments, setComments] = useState <ICommentDummyjsonModel[]> ([])

    useEffect(() => {
        commentServiceDummyJson.getComments().then((allComments) => {
                setComments(allComments)
            })

    }, [])

    return (
        <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
            {
                comments.map((comment: ICommentDummyjsonModel) => <CommentDummyjsonComponent item={comment} key={comment.id}/>)
            }
        </div>
    );
};

// export const CommentsDummyjsonComponent = () => {
//
//     const [comments, setUsers] = useState <IUserDummyModel[]>([])
//
//     useEffect(() => {
//         userServiceDummyjson.getUsers().then((allUsers) => {
//             setUsers(allUsers)
//         })
//
//     }, [])
//
//     return (
//         <div className='mx-auto grid grid-cols-4 gap-4 m-32'>
//             {
//                 users.map((user: IUserDummyModel) => <UserDummyComponent user={user} key={user.id} />)
//             }
//         </div>
//     );
// };