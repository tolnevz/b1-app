import type { ICollapseAttributes, IEventItemsSelected } from './types.d';
import type { IEventSelected } from '../collection-item';
import { type ICollapseItemAttributes } from '../collapse-item';
/**
 * @param {Partial<ICollapseAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {ICollapseAttributes}
 */
export declare function useDefaultCollapseAttributes(customAttributes?: Partial<ICollapseAttributes>): ICollapseAttributes;
export declare const defaultAttributes: ICollapseAttributes;
export declare class Collapse implements ICollapseAttributes {
    disabled?: boolean;
    items: ICollapseItemAttributes[];
    selected?: ICollapseItemAttributes | ICollapseItemAttributes[];
    multiple?: boolean;
    content?: string;
    visible?: boolean;
    text?: string;
    onSelectedItem?: IEventSelected;
    onSelectedItems?: IEventItemsSelected;
    constructor(customAttributes?: Partial<ICollapseAttributes>);
}
