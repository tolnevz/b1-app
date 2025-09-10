import type { IBodyAttributes, IBodyOptions } from './types.d';
import type { IBodyRowAttributes } from '../body-row/types.d';
import type { IColumnAttributes } from '../column/types.d';
export declare function useDefaultBodyAttributes(customAttributes?: Partial<IBodyAttributes>): IBodyAttributes;
export declare const defaultAttributes: IBodyAttributes;
export declare class Body implements IBodyAttributes {
    columns: IColumnAttributes[];
    rows: IBodyRowAttributes[];
    options?: IBodyOptions;
    visible?: boolean;
    constructor(customAttributes?: Partial<IBodyAttributes>);
}
