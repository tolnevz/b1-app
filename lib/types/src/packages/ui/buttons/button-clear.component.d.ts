import type { IButtonClearAttributes } from './types.d';
/**
 * Создать атрибуты кнопки с возможностью переопределения дефолтных значений
 * @param {Partial<IButtonAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IButtonAttributes}
 */
export declare function useDefaultButtonClearAttributes(customAttributes?: Partial<IButtonClearAttributes>): IButtonClearAttributes;
export declare const defaultAttributes: IButtonClearAttributes;
export declare class ButtonClear implements IButtonClearAttributes {
    invisible?: boolean;
    constructor(customAttributes?: Partial<IButtonClearAttributes>);
}
