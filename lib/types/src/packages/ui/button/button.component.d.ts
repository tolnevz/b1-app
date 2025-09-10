import type { IButtonAttributes } from './types.d';
/**
 * Create attributes of buttons with the possibility of redevelopment of default values
 * @param {Partial<IButtonAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IButtonAttributes}
 */
export declare function useDefaultButtonAttributes(customAttributes?: Partial<IButtonAttributes>): IButtonAttributes;
export declare const defaultAttributes: IButtonAttributes;
