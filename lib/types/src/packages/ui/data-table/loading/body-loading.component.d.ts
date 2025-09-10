import type { IBodyLoadingAttributes } from './types';
import { type ILoading } from '../../../types';
export declare function useDefaultBodyLoadingAttributes(customAttributes?: Partial<IBodyLoadingAttributes>): IBodyLoadingAttributes;
export declare const defaultAttributes: IBodyLoadingAttributes;
export declare let loading: import("vue").Ref<{
    visible: boolean;
    type?: import("../../../types").TLoadingType;
    animation?: import("../..").TSkeletonAnimation | undefined;
}, ILoading | {
    visible: boolean;
    type?: import("../../../types").TLoadingType;
    animation?: import("../..").TSkeletonAnimation | undefined;
}>;
export declare function setDataTableLoading(value: boolean | ILoading | undefined): void;
export declare function getDataTableLoading(): ILoading;
