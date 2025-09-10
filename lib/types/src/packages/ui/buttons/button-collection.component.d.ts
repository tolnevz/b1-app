import { type TSizeControl } from './../../types';
import type { IButtonCollectionAttributes } from './types.d';
/**
 * Создать атрибуты кнопки с возможностью переопределения дефолтных значений
 * @param {Partial<IButtonAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {IButtonAttributes}
 */
export declare function useDefaultButtonCollectionAttributes(customAttributes?: Partial<IButtonCollectionAttributes>): IButtonCollectionAttributes;
export declare const defaultAttributes: IButtonCollectionAttributes;
export declare class ButtonCollection implements IButtonCollectionAttributes {
    sizeControl?: TSizeControl;
    constructor(customAttributes?: Partial<IButtonCollectionAttributes>);
}
