import type { IOverlayAttributes } from './types';
/**
 * @param {Partial<IOverlayAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IOverlayAttributes}
 */
export declare function useDefaultOverlayAttributes(customAttributes?: Partial<IOverlayAttributes>): IOverlayAttributes;
export declare const defaultAttributes: IOverlayAttributes;
export declare class Overlay implements IOverlayAttributes {
    visible?: boolean;
    teleportTo?: HTMLElement | string;
    transparent?: boolean;
    constructor(customAttributes?: Partial<IOverlayAttributes>);
}
