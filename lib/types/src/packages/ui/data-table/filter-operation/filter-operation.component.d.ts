import type { IFilterOperationAttributes, IFilterOperationItem } from './types';
import { type TFilterOperation } from '../../../types';
export declare function useDefaultFilterOperationAttributes(customAttributes?: Partial<IFilterOperationAttributes>): IFilterOperationAttributes;
export declare const defaultAttributes: IFilterOperationAttributes;
export declare const operations: IFilterOperationItem[];
export declare function getOperationByValue(value: TFilterOperation): IFilterOperationItem | undefined;
export declare function getOperationsByValues(values: TFilterOperation[]): IFilterOperationItem[];
