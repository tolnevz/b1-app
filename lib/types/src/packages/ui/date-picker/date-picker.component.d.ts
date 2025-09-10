import type { IDatePickerAttributes } from './types';
import { ESizeControl, type TPlacemant, type TState } from '../../types';
import { type TIconProp } from '../icon';
/**
 * @param {Partial<IDatePickerAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IDatePickerAttributes}
 */
export declare function useDefaultDatePickerAttributes(customAttributes?: Partial<IDatePickerAttributes>): IDatePickerAttributes;
export declare const defaultAttributes: IDatePickerAttributes;
export declare class DatePickerComponent implements IDatePickerAttributes {
    format?: string;
    date?: Date;
    minDatePicker?: Date | number | string;
    maxDatePicker?: Date | number | string;
    multiple?: boolean;
    separator?: string;
    currentMonth?: number;
    currentYear?: number;
    maxSelections?: number;
    toggle?: boolean;
    disabled?: boolean;
    text?: string;
    value?: number;
    visible?: boolean;
    placeholder?: string;
    visibility?: boolean;
    clearButton?: boolean;
    clearWithText?: boolean;
    state?: TState;
    showStateIcon?: boolean;
    sizeControl?: ESizeControl;
    readonly?: boolean;
    editable?: boolean;
    placement?: TPlacemant;
    icon?: TIconProp;
    constructor(customAttributes?: Partial<IDatePickerAttributes>);
}
