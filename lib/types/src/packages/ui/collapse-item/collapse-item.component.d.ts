import type { ICollapseItemAttributes } from './types.d';
import type { TValue } from './../../types';
import { type IEventItemClick, type IEventSelected } from '../collection-item';
import { type TIconProp } from '../icon';
/**
 * @param {Partial<ICollapseItemAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {ICollapseItemAttributes}
 */
export declare function useDefaultCollapseItemAttributes(customAttributes?: Partial<ICollapseItemAttributes>): ICollapseItemAttributes;
export declare const defaultAttributes: ICollapseItemAttributes;
export declare class CollapseItem implements ICollapseItemAttributes {
    disabled?: boolean;
    visible?: boolean;
    text?: string;
    value?: TValue;
    icon?: TIconProp;
    readonly?: boolean;
    selected?: boolean;
    content?: string;
    onPropClick?: IEventItemClick | undefined;
    onPropSelected?: IEventSelected | undefined;
    constructor(customAttributes?: Partial<ICollapseItemAttributes>);
}
