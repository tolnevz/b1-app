import type { IMenuAttributes, IEventItemsSelected } from './types';
import type { IEventSelected } from '../collection-item';
import { type IMenuItemAttributes } from '../menu-item';
/**
 * @param {Partial<IMenuAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IMenuAttributes}
 */
export declare function useDefaultMenuAttributes(customAttributes?: Partial<IMenuAttributes>): IMenuAttributes;
export declare const defaultAttributes: IMenuAttributes;
export declare class Menu implements IMenuAttributes {
    disabled?: boolean;
    items: IMenuItemAttributes[];
    selected?: IMenuItemAttributes | IMenuItemAttributes[];
    multiple?: boolean;
    visible?: boolean;
    text?: string;
    onSelectedItem?: IEventSelected;
    onSelectedItems?: IEventItemsSelected;
    constructor(customAttributes?: Partial<IMenuAttributes>);
}
