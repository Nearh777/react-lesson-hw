import { IAddressDummy } from "./IAddressDummy";

export interface ICompanyDummy {
    department: string;
    name: string;
    title: string;
    address: IAddressDummy;
}