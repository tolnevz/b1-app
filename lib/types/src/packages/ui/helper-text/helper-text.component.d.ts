import type { TState } from '../../types';
import type { IHelperTextAttributes } from './types.d';
/**
 * @param {Partial<IHelperTextAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IHelperTextAttributes}
 */
export declare function useDefaultHelperTextAttributes(customAttributes?: Partial<IHelperTextAttributes>): IHelperTextAttributes;
export declare const defaultAttributes: IHelperTextAttributes;
export declare class HelperText implements IHelperTextAttributes {
    invalid?: boolean;
    state: TState;
    stateTexts?: Record<TState, string>;
    visible?: boolean;
    constructor(customAttributes?: Partial<IHelperTextAttributes>);
}
