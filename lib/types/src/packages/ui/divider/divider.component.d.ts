import type { IDividerAttributes } from './types';
import { type TAlign, type TTypeBorder } from '../../types';
/**
 * @param {Partial<IDividerAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IDividerAttributes}
 */
export declare function useDefaultDividerAttributes(customAttributes?: Partial<IDividerAttributes>): IDividerAttributes;
export declare const defaultAttributes: IDividerAttributes;
export declare class Divider implements IDividerAttributes {
    vertical?: boolean;
    type?: TTypeBorder;
    text?: string;
    textAlign?: TAlign;
    constructor(customAttributes?: Partial<IDividerAttributes>);
}
