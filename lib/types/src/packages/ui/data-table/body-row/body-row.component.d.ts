import type { IBodyRowAttributes } from './types.d';
import type { IBodyCellAttributes } from '../body-cell/types.d';
export declare function useDefaultBodyRowAttributes(customAttributes?: Partial<IBodyRowAttributes>): IBodyRowAttributes;
export declare const defaultAttributes: IBodyRowAttributes;
export declare class BodyRow implements IBodyRowAttributes {
    cells: IBodyCellAttributes[];
    uuid: string;
    selected?: boolean;
    evenRow?: boolean;
    visible?: boolean;
    constructor(customAttributes?: Partial<IBodyRowAttributes>);
}
