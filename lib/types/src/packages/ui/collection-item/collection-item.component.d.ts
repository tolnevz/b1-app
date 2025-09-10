import type { ICollectionItemAttributes, IEventItemClick, IEventSelected } from './types.d';
import type { TValue } from './../../types';
import { type TIconProp } from '../icon';
import type { Component, VNode } from 'vue';
/**
 * @param {Partial<ICollectionItemAttributes>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {ICollectionItemAttributes}
 */
export declare function useDefaultCollectionItemAttributes(customAttributes?: Partial<ICollectionItemAttributes>): ICollectionItemAttributes;
export declare const defaultAttributes: ICollectionItemAttributes;
export declare class CollectionItem implements ICollectionItemAttributes {
    disabled?: boolean;
    visible?: boolean;
    text?: string | number | Component | VNode | (() => Promise<Component>) | (() => VNode);
    value?: TValue;
    icon?: TIconProp;
    readonly?: boolean;
    selected?: boolean;
    required?: boolean;
    meta?: any;
    onPropClick?: IEventItemClick;
    onPropSelected?: IEventSelected;
    constructor(customAttributes?: Partial<ICollectionItemAttributes>);
}
