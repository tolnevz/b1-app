import type { IDateRangePickerAttributes } from './types';
import { ESizeControl, type TPlacemant, type TState } from '../../types';
import { type TIconProp } from '../icon';
/**
 * @param {Partial<IDateRangePickerAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IDateRangePickerAttributes}
 */
export declare function useDefaultDateRangePickerAttributes(customAttributes?: Partial<IDateRangePickerAttributes>): IDateRangePickerAttributes;
export declare const defaultAttributes: IDateRangePickerAttributes;
export declare class DateRangePicker implements IDateRangePickerAttributes {
    format?: string;
    disabled?: boolean;
    text?: string;
    value?: number;
    visible?: boolean;
    date1?: Date;
    date2?: Date;
    text1?: string;
    text2?: string;
    value1?: number;
    value2?: number;
    minDate?: Date | number | string;
    maxDate?: Date | number | string;
    placeholder1?: string;
    placeholder2?: string;
    placeholder?: string;
    clearButton?: boolean;
    clearWithText?: boolean;
    state?: TState;
    showStateIcon?: boolean;
    sizeControl?: ESizeControl;
    readonly?: boolean;
    editable?: boolean;
    placement?: TPlacemant;
    icon?: TIconProp;
    constructor(customAttributes?: Partial<IDateRangePickerAttributes>);
}
