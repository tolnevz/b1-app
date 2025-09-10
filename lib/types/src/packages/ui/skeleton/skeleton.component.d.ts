import type { ISkeletonAttributes, TSkeletonAnimation, TSkeletonType } from './types.d';
/**
 * @param {Partial<ISkeletonAttributes>} customAttributes - User attributes to reduce default values
 * @returns {ISkeletonAttributes}
 */
export declare function useDefaultSkeletonAttributes(customAttributes?: Partial<ISkeletonAttributes>): ISkeletonAttributes;
export declare const defaultAttributes: ISkeletonAttributes;
export declare class Skeleton implements ISkeletonAttributes {
    width?: string;
    height?: string;
    type?: TSkeletonType;
    animation?: TSkeletonAnimation;
    visible?: boolean;
    constructor(customAttributes?: Partial<ISkeletonAttributes>);
}
