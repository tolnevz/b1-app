import type { IInputAttributes, TInputType } from './types.d';
import { ESizeControl, type TState, type ILoading, type TValue } from '../../types';
/**
 * @param {Partial<IInputAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IInputAttributes}
 */
export declare function useDefaultInputAttributes(customAttributes?: Partial<IInputAttributes>): IInputAttributes;
export declare const defaultAttributes: IInputAttributes;
export declare class Input implements IInputAttributes {
    placeholder?: string;
    type?: TInputType;
    pattern?: string;
    required?: boolean;
    autocomplete?: string;
    maxlength?: number;
    minlength?: number;
    readonly?: boolean;
    visibility?: boolean;
    clearButton?: boolean;
    clearWithText?: boolean;
    text?: string;
    value?: TValue;
    disabled?: boolean;
    state?: TState;
    showStateIcon?: boolean;
    sizeControl?: ESizeControl;
    loading?: boolean | ILoading;
    simple?: boolean;
    constructor(customAttributes?: Partial<IInputAttributes>);
}
