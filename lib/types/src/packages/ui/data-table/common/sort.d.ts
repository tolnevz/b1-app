import { type ISimpleItem } from '../../../types';
import { type IUseSort, type TSortDirection, type ISortColumn } from './sort.types.d';
import type { IColumnAttributes } from './../column/types.d';
/**
 * @param {boolean | { direction: TSortDirection } | TSortDirection} options - Sorting options
 * @returns {IUseSort}
 */
export declare function useSort(options?: boolean | {
    direction: TSortDirection;
} | TSortDirection): IUseSort;
/**
 * Will return the following sorting value
 * @param {TSortDirection} direction
 * @returns {TSortDirection}
 */
export declare function nextSortDirection(direction: TSortDirection): TSortDirection;
export declare function getListSortDirection(): ISimpleItem[];
/**
 * Get the sorting columns of the table
 * @param columns - The columns of the table
 * @returns {IColumnAttributes[]} - The columns with sorting
 */
export declare function getSortColumns(columns: IColumnAttributes[]): IColumnAttributes[];
/**
 * Get the sorting columns of the table
 * @param columns - The columns of the table
 * @returns {ISortColumn[]} - The columns with sorting
 */
export declare function formatterSortColumns(columns: IColumnAttributes[]): ISortColumn[];
/**
 * Get the sorting direction from a string
 * @param direction
 * @returns TSortDirection
 */
export declare function getDirectionByString(direction: string): TSortDirection;
