import type { IDialogAttributes } from './types';
import { type TComponentVariantType } from '../../types';
/**
 * @param {Partial<IDialogAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IDialogAttributes}
 */
export declare function useDefaultDialogAttributes(customAttributes?: Partial<IDialogAttributes>): IDialogAttributes;
export declare const defaultAttributes: IDialogAttributes;
export declare class Dialog implements IDialogAttributes {
    closable?: boolean;
    header?: string;
    height?: string;
    width?: string;
    visible?: boolean;
    confirmText?: string;
    confirmType?: TComponentVariantType;
    defaultActions?: boolean;
    constructor(customAttributes?: Partial<IDialogAttributes>);
}
