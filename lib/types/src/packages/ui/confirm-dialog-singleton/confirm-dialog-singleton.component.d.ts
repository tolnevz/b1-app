import { type Ref } from 'vue';
import type { IConfirmDialogSingletonAttributes, IUseConfirmDialogSingleton } from './types';
/**
 * @param {Partial<IConfirmDialogSingletonAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IConfirmDialogSingletonAttributes}
 */
export declare function useDefaultConfirmDialogSingletonAttributes(customAttributes?: Partial<IConfirmDialogSingletonAttributes>): IConfirmDialogSingletonAttributes;
export declare const defaultAttributes: IConfirmDialogSingletonAttributes;
export declare class ConfirmDialogSingleton implements IConfirmDialogSingletonAttributes {
    visible?: boolean;
    constructor(customAttributes?: Partial<IConfirmDialogSingletonAttributes>);
}
export declare function useConfirm(): IUseConfirmDialogSingleton;
export declare function getInstances(): Ref<IUseConfirmDialogSingleton[]>;
