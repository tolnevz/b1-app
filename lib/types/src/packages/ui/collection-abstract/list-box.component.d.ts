import type { IListBoxAbstractAttributes } from './list-box.types';
/**
 * @param {Partial<IListBoxAbstractAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IListBoxAbstractAttributes}
 */
export declare function useDefaultListBoxAbstractAttributes<T>(customAttributes?: Partial<IListBoxAbstractAttributes<T>>): IListBoxAbstractAttributes<T>;
export declare const defaultAttributes: IListBoxAbstractAttributes<unknown>;
