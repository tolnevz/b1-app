import type { IMenuSubAttributes } from './types';
import type { IMenuItemAttributes } from '../menu-item';
/**
 * @param {Partial<IMenuSubAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IMenuSubAttributes}
 */
export declare function useDefaultMenuSubAttributes(customAttributes?: Partial<IMenuSubAttributes>): IMenuSubAttributes;
export declare const defaultAttributes: IMenuSubAttributes;
export declare class MenuSub implements IMenuSubAttributes {
    items?: IMenuItemAttributes[];
    constructor(customAttributes?: Partial<IMenuSubAttributes>);
}
