import type { IConfirmDialogAttributes } from './types';
/**
 * @param {Partial<IConfirmDialogAttributes>} customAttributes - User attributes to reduce default values
 * @returns {IConfirmDialogAttributes}
 */
export declare function useDefaultConfirmDialogAttributes(customAttributes?: Partial<IConfirmDialogAttributes>): IConfirmDialogAttributes;
export declare const defaultAttributes: IConfirmDialogAttributes;
