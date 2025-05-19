import {IUserDummyModel} from "./IUserDummyModel.ts";




export interface IUserDummyResp {
    users: IUserDummyModel[];
    total: number;
    skip: number;
    limit: number;
}
