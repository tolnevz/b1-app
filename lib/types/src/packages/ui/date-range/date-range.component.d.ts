import type { IDateRangeAttributes } from './types';
/**
 * @param {Partial<IDateRangeAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IDateRangeAttributes}
 */
export declare function useDefaultDateRangeAttributes(customAttributes?: Partial<IDateRangeAttributes>): IDateRangeAttributes;
export declare const defaultAttributes: IDateRangeAttributes;
export declare class DateRangeComponent implements IDateRangeAttributes {
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
    secondDate?: boolean;
    constructor(customAttributes?: Partial<IDateRangeAttributes>);
}
