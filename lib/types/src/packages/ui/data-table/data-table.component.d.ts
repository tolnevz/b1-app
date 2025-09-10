import type { IDataTableAttributes, IDataTablePagination } from './types.d';
export declare function useDataTablePagination(customAttributes?: Partial<IDataTablePagination>): IDataTablePagination;
/**
 * @param {Partial<IDataTableAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IDataTableAttributes}
 */
export declare function useDefaultDataTableAttributes(customAttributes?: Partial<IDataTableAttributes>): IDataTableAttributes;
export declare const defaultAttributes: IDataTableAttributes;
