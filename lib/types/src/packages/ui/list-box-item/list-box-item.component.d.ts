import type { IListBoxItemAttributes } from './types.d';
import type { TValue } from './../../types';
import { type IEventItemClick, type IEventSelected } from '../collection-item';
import { type TIconProp } from '../icon';
/**
 * @param {Partial<IListBoxItemAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IListBoxItemAttributes}
 */
export declare function useDefaultListBoxItemAttributes(customAttributes?: Partial<IListBoxItemAttributes>): IListBoxItemAttributes;
export declare const defaultAttributes: IListBoxItemAttributes;
export declare class ListBoxItem implements IListBoxItemAttributes {
    disabled?: boolean;
    visible?: boolean;
    text?: string;
    value?: TValue;
    icon?: TIconProp;
    readonly?: boolean;
    selected?: boolean;
    wordWrap?: boolean;
    onPropClick?: IEventItemClick | undefined;
    onPropSelected?: IEventSelected | undefined;
    constructor(customAttributes?: Partial<IListBoxItemAttributes>);
}
