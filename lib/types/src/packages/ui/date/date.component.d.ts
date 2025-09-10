import type { IDateAttributes, IUseDate, TDate } from './types';
/**
 * @param {Partial<IDateAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IDateAttributes}
 */
export declare function useDefaultDateAttributes(customAttributes?: Partial<IDateAttributes>): IDateAttributes;
export declare const defaultAttributes: IDateAttributes;
export declare class DateComponent implements IDateAttributes {
    format?: string;
    date?: Date;
    minDate?: Date | number | string;
    maxDate?: Date | number | string;
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
    constructor(customAttributes?: Partial<IDateAttributes>);
}
/**
 * Return functions to manage the date
 * @param {string | number} value
 * @param {string} format
 * @returns {IUseDate}
 */
export declare function useDate(value?: TDate, format?: string): IUseDate;
export declare const transform: {
    toUseDate: (value: TDate, format?: string) => IUseDate;
    toUnixTime: (value: TDate, format?: string) => number;
    toDateByUnixTime: (value: number) => Date;
};
