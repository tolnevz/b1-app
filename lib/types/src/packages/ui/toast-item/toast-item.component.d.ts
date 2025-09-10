import type { IToastItemAttributes } from './types';
import { EVariant } from '../../types';
/**
 * @param {Partial<IToastItemAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IToastItemAttributes}
 */
export declare function useDefaultToastItemAttributes(customAttributes?: Partial<IToastItemAttributes>): IToastItemAttributes;
export declare const defaultAttributes: IToastItemAttributes;
export declare class ToastItem implements IToastItemAttributes {
    header?: string;
    type: EVariant;
    icon?: boolean;
    closable?: boolean;
    datetime?: string;
    text?: string;
    visible?: boolean;
    constructor(customAttributes?: Partial<IToastItemAttributes>);
}
