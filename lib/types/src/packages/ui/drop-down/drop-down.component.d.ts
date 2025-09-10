import type { IDropDownAttributes } from './types';
import type { TPlacemant, TTriggerActivate } from './../../types';
import { type IEventItemsSelected } from '../list-box';
import type { IEventSelected } from '../collection-item';
import { type IListBoxItemAttributes } from '../list-box-item';
import type { ComponentPublicInstance } from 'vue';
/**
 * @param {Partial<IDropDownAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IDropDownAttributes}
 */
export declare function useDefaultDropDownAttributes(customAttributes?: Partial<IDropDownAttributes>): IDropDownAttributes;
export declare const defaultAttributes: IDropDownAttributes;
export declare class DropDown implements IDropDownAttributes {
    disabled?: boolean;
    items: IListBoxItemAttributes[];
    selected?: IListBoxItemAttributes | IListBoxItemAttributes[];
    multiple?: boolean;
    visible?: boolean;
    text?: string;
    onSelectedItem?: IEventSelected;
    onSelectedItems?: IEventItemsSelected;
    placement?: TPlacemant;
    triggerActivate?: TTriggerActivate;
    owner?: HTMLElement | ComponentPublicInstance;
    contextMenu?: boolean;
    autoWidth?: boolean;
    wordWrap?: boolean;
    offsetTop?: number;
    maxRows?: number;
    autoFocus?: boolean;
    autoClose?: boolean;
    teleportTo?: HTMLElement | string;
    constructor(customAttributes?: Partial<IDropDownAttributes>);
}
