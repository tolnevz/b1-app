import type { IToastAttributes, IUseToast } from './types';
/**
 * @param {Partial<IToastAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IToastAttributes}
 */
export declare function useDefaultToastAttributes(customAttributes?: Partial<IToastAttributes>): IToastAttributes;
export declare const defaultAttributes: IToastAttributes;
export declare class Toast implements IToastAttributes {
    constructor(customAttributes?: Partial<IToastAttributes>);
}
export declare function useToast(): IUseToast;
