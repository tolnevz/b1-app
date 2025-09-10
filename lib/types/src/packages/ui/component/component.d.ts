import type { IComponentAttributes } from './types.d';
/**
 * Атрибуты компонента
 * @type {IComponentAttributes}
 * @default { visible: true }
 */
export declare const defaultComponentAttributes: IComponentAttributes;
export declare function useComponentAttributes(customAttributes?: Partial<IComponentAttributes>): IComponentAttributes;
