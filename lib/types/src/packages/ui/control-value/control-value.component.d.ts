import { type IControlValueAttributes } from './types.d';
/**
 * Атрибуты контрола в котором будет значение
 * @type {IControlValueAttributes}
 * @default { value: null }
 */
export declare const defaultControlValueAttributes: IControlValueAttributes;
export declare function useControlValueAttributes(customAttributes?: Partial<IControlValueAttributes>): IControlValueAttributes;
