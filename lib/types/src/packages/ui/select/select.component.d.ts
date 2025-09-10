import type { ISelectAttributes } from './types';
import type { TPlacemant, TTriggerActivate } from './../../types';
import { type IEventItemsSelected } from '../list-box';
import type { IEventSelected } from '../collection-item';
import { type IListBoxItemAttributes } from '../list-box-item';
import { type TInputType } from '../input';
import { ESizeControl, type TState, type ILoading, type TValue } from '../../types';
/**
 * @param {Partial<ISelectAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {ISelectAttributes}
 */
export declare function useDefaultSelectAttributes(customAttributes?: Partial<ISelectAttributes>): ISelectAttributes;
export declare const defaultAttributes: ISelectAttributes;
export declare class Select implements ISelectAttributes {
    disabled?: boolean;
    items: IListBoxItemAttributes[];
    selected?: IListBoxItemAttributes | IListBoxItemAttributes[];
    multiple?: boolean;
    readonly?: boolean;
    editable?: boolean;
    visible?: boolean;
    text?: string;
    value?: TValue;
    onSelectedItem?: IEventSelected;
    onSelectedItems?: IEventItemsSelected;
    placement?: TPlacemant;
    triggerActivate?: TTriggerActivate;
    placeholder?: string;
    type?: TInputType;
    maxlength?: number;
    minlength?: number;
    visibility?: boolean;
    clearButton?: boolean;
    clearWithText?: boolean;
    state?: TState;
    showStateIcon?: boolean;
    sizeControl?: ESizeControl;
    loading?: boolean | ILoading;
    constructor(customAttributes?: Partial<ISelectAttributes>);
}
