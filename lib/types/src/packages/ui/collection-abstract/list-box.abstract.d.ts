import { type PropType } from 'vue';
import type { IListBoxAbstractAttributes } from './list-box.types.d';
import type { TValue } from './../../types';
import { type ICollectionItemAttributes } from '../collection-item';
export declare const ListBoxAbstract: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IListBoxAbstractAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<IListBoxAbstractAttributes<any>["selected"]>;
        default: unknown;
    };
    multiple: {
        type: PropType<IListBoxAbstractAttributes<any>["multiple"]>;
        default: boolean | undefined;
    };
    separator: {
        type: PropType<IListBoxAbstractAttributes<any>["separator"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: PropType<IListBoxAbstractAttributes<any>["singleSelection"]>;
        default: boolean | undefined;
    };
    noSelect: {
        type: PropType<IListBoxAbstractAttributes<any>["noSelect"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: PropType<IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
        default: import("..").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: PropType<IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
        default: import("./list-box.types.d").IEventItemsSelected<unknown> | undefined;
    };
}>, {}, {
    cssClass: string;
    stateSelected: ICollectionItemAttributes[];
    stateItems: ICollectionItemAttributes[];
    currentIndex: number;
    isFocused: boolean;
}, {}, {
    watcherHandlerItems(value: ICollectionItemAttributes[]): void;
    /**
     * Initialize items
     * @returns {ICollectionItemAttributes[]}
     */
    initItems(): ICollectionItemAttributes[];
    /**
     * Get the selected items
     * @returns {ICollectionItemAttributes[]}
     */
    initSelected(): ICollectionItemAttributes[];
    toggleItemSelected(item: ICollectionItemAttributes): void;
    onClickItem({ event, item }: {
        event: MouseEvent;
        item: ICollectionItemAttributes;
    }): void;
    /**
     * Get the number of items
     * @returns {number}
     */
    count(): number;
    /**
     * Check if the list is empty
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     * Check if the item is selected
     * @returns {boolean}
     */
    isSelected(): boolean;
    /**
     * Get an item by value
     * @param value any
     * @returns {ICollectionItemAttributes | undefined}
     */
    getItemByValue(value: TValue): ICollectionItemAttributes | undefined;
    /**
     * Get the index of the item by value
     * @param value any
     * @returns { number }
     */
    getIndexByValue(value: TValue): number;
    /**
     * Remove the selected item
     * @param value
     * @returns {boolean}
     */
    removeSelectedItem(value: TValue): boolean;
    /**
     * Update the selected item
     * @param value
     * @param selected
     * @returns {boolean}
     */
    updateSelected(value: TValue, selected: boolean, forward?: boolean): boolean;
    /**
     * Send an event with selected items
     */
    sendEventSelectedItems(): void;
    /**
     * Reset the selected elements
     */
    resetSelected(): void;
    searchByValue(value: TValue | TValue[] | undefined): boolean;
    /**
     * Get the text of the selected elements
     * @returns {string}
     */
    getSelectedText(): string | undefined;
    /**
     * Get the meaning of the selected elements
     * @returns {string}
     */
    getSelectedValue(): TValue | TValue[] | null;
    /**
     * Get the next valid index that is not disabled
     * @param {number} startIndex - The starting index
     * @param {number} direction - The direction to move (1 for down, -1 for up)
     * @returns {number} - The next valid index or -1 if all items are disabled
     */
    getNextValidIndex(startIndex: number, direction: number): number;
    /**
     * Move the active item to the next or previous item
     */
    nextActiveItem(): void;
    /**
     * Move the active item to the previous item
     */
    prevActiveItem(): void;
    /**
     * Set the selected item as the active item
     */
    setSelectedActiveItem(): void;
    /**
     * Check if the item is valid by index
     * @param {number} index - The index of the item
     * @returns {boolean} - True if the item is valid, otherwise false
     */
    isItemValidateByIndex(index: number): boolean;
    /**
     * Handle keydown event
     * @param {KeyboardEvent} event
     */
    handleKeydown(event: KeyboardEvent): void;
    /**
     * Handle focus event
     */
    handleFocus(): void;
    /**
     * Handle blur event
     */
    handleBlur(): void;
    /**
     * Handle mouseenter event on an item
     */
    handleMouseEnterInItem(index: number): void;
    /**
     * Handle mouseleave event on an item
     */
    handleMouseLeaveInItem(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<import("..").ICollectionAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<import("..").ICollectionAttributes<any>["selected"]>;
        default: unknown;
    };
}>, {}, {
    cssClass: string;
}, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("..").IControlValueAttributes["value"]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<import("..").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("..").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("..").IControlAttributes["focused"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateDisabled: boolean | undefined;
}, {
    rootClasses(): string;
    attributes(): Record<string, any>;
}, {
    focus(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("..").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("..").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("..").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("..").IComponentAttributes["id"];
    classes(): string[];
    isHidden(): boolean;
    isVisibility(): boolean;
}, {
    beforeShow(): boolean;
    show(): boolean;
    beforeHide(): boolean;
    hide(forward?: boolean): boolean;
    afterShow(): void;
    afterHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("..").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("..").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("..").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onMounted?: ((...args: any[]) => any) | undefined;
    onToggleVisible?: ((...args: any[]) => any) | undefined;
    onCreated?: ((...args: any[]) => any) | undefined;
}>, {
    id: string | undefined;
    component: any;
    visible: boolean | undefined;
    hidden: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "update:focused")[], "update:text" | "update:focused", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<import("..").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("..").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("..").IControlAttributes["focused"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:focused"?: ((...args: any[]) => any) | undefined;
}>, {
    text: string | number | undefined;
    disabled: boolean | undefined;
    focused: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "update:value"[], "update:value", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("..").IControlValueAttributes["value"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<import("..").ICollectionAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<import("..").ICollectionAttributes<any>["selected"]>;
        default: unknown;
    };
}>> & Readonly<{}>, {
    items: any[];
    selected: any;
}, {}, {
    BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("..").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("..").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("..").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("..").IComponentAttributes["id"];
        classes(): string[];
        isHidden(): boolean;
        isVisibility(): boolean;
    }, {
        beforeShow(): boolean;
        show(): boolean;
        beforeHide(): boolean;
        hide(forward?: boolean): boolean;
        afterShow(): void;
        afterHide(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("..").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("..").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("..").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
        onMounted?: ((...args: any[]) => any) | undefined;
        onToggleVisible?: ((...args: any[]) => any) | undefined;
        onCreated?: ((...args: any[]) => any) | undefined;
    }>, {
        id: string | undefined;
        component: any;
        visible: boolean | undefined;
        hidden: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IListBoxAbstractAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<IListBoxAbstractAttributes<any>["selected"]>;
        default: unknown;
    };
    multiple: {
        type: PropType<IListBoxAbstractAttributes<any>["multiple"]>;
        default: boolean | undefined;
    };
    separator: {
        type: PropType<IListBoxAbstractAttributes<any>["separator"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: PropType<IListBoxAbstractAttributes<any>["singleSelection"]>;
        default: boolean | undefined;
    };
    noSelect: {
        type: PropType<IListBoxAbstractAttributes<any>["noSelect"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: PropType<IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
        default: import("..").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: PropType<IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
        default: import("./list-box.types.d").IEventItemsSelected<unknown> | undefined;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onSelected-item"?: ((...args: any[]) => any) | undefined;
    "onSelected-items"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
}>, {
    items: any[];
    selected: any;
    separator: string | undefined;
    multiple: boolean | undefined;
    singleSelection: boolean | undefined;
    noSelect: boolean | undefined;
    onPropItemSelected: import("..").IEventSelected | undefined;
    onPropItemsSelected: import("./list-box.types.d").IEventItemsSelected<any> | undefined;
}, {}, {}, {}, string, () => {
    updateSelected: (value: TValue, selected: boolean, forward?: boolean) => boolean;
}, true, {}, any>;
