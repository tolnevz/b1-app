import type { ICollectionAttributes } from './types.d';
import type { TValue } from './../../types';
/**
 * @param {Partial<ICollectionAttributes>} customAttributes - User attributes to reduce default values
 * @returns {ICollectionAttributes}
 */
export declare function useDefaultCollectionAttributes<T>(customAttributes?: Partial<ICollectionAttributes<T>>): ICollectionAttributes<T>;
export declare const defaultAttributes: ICollectionAttributes<unknown>;
export declare class Collection<T> implements ICollectionAttributes<T> {
    disabled?: boolean | undefined;
    items: T[];
    visible?: boolean;
    text?: string | undefined;
    value?: TValue | undefined;
    selected?: T | T[] | Boolean;
    constructor(customAttributes?: Partial<ICollectionAttributes<T>>);
}
