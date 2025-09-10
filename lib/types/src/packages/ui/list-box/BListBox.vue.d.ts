import { type ComponentPublicInstance, type PropType } from 'vue';
import type { TClasses, TValue } from './../../types';
import type { IListBoxAttributes } from './types';
import { type ICollectionItemAttributes } from '../collection-item';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    filterText: {
        type: PropType<IListBoxAttributes["filterText"]>;
        default: string | undefined;
    };
    maxRows: {
        type: PropType<IListBoxAttributes["maxRows"]>;
        default: number | undefined;
    };
    autoWidth: {
        type: PropType<IListBoxAttributes["autoWidth"]>;
        default: boolean | undefined;
    };
    wordWrap: {
        type: PropType<IListBoxAttributes["wordWrap"]>;
        default: boolean | undefined;
    };
    draggable: {
        type: PropType<IListBoxAttributes["draggable"]>;
        default: boolean | undefined;
    };
}>, {}, {
    containerHeight: string;
    isHeightCalculated: boolean;
    stateFilterText: string;
    copyStateItems: ICollectionItemAttributes[];
    draggedItem: ICollectionItemAttributes | null;
    draggedIndex: number;
}, {
    classes(): TClasses;
    outItems(): ICollectionItemAttributes[];
    /**
     * Maximum number of rows, which can be displayed
     * If 0, then we display all lines
     * @returns {number}
     */
    maxRowsVisible(): number;
    transitionGroupName(): string;
}, {
    /**
     * Get items as ComponentPublicInstance[]
     * @returns ComponentPublicInstance[]
     */
    getRefItems(): ComponentPublicInstance[];
    /**
     * Get the first visible element
     * @returns {HTMLElement}
     */
    getRefLastVisibleItem(): HTMLElement | undefined;
    /**
     * Get visible items height
     * @returns number
     */
    getVisibleItemsHeight(): number;
    createObserver(element: HTMLElement, callback: () => void): void;
    /**
     * Scroll to the active item
     */
    scrollToActiveItem(): void;
    /**
     * Calculate container height
     * @returns void
     */
    calculateContainerHeight(): void;
    calculateContainerHeightNextTick(): void;
    /**
     * Search and installation of an active element by text
     * @param {string} text
     */
    searchByText(text: string): void;
    onDragStart({ event }: {
        event: DragEvent;
    }): void;
    onDragEnter({ event }: {
        event: DragEvent;
    }): void;
    onDragEnd({ event }: {
        event: DragEvent;
    }): void;
    onDrop({ event, value }: {
        event: DragEvent;
        value: TValue;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["selected"]>;
        default: unknown;
    };
    multiple: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["multiple"]>;
        default: boolean | undefined;
    };
    separator: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["separator"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["singleSelection"]>;
        default: boolean | undefined;
    };
    noSelect: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["noSelect"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
        default: import("../collection-item").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
        default: import("../collection-abstract").IEventItemsSelected<unknown> | undefined;
    };
}>, {}, {
    cssClass: string;
    stateSelected: ICollectionItemAttributes[];
    stateItems: ICollectionItemAttributes[];
    currentIndex: number;
    isFocused: boolean;
}, {}, {
    watcherHandlerItems(value: ICollectionItemAttributes[]): void;
    initItems(): ICollectionItemAttributes[];
    initSelected(): ICollectionItemAttributes[];
    toggleItemSelected(item: ICollectionItemAttributes): void;
    onClickItem({ event, item }: {
        event: MouseEvent;
        item: ICollectionItemAttributes;
    }): void;
    count(): number;
    isEmpty(): boolean;
    isSelected(): boolean;
    getItemByValue(value: TValue): ICollectionItemAttributes | undefined;
    getIndexByValue(value: TValue): number;
    removeSelectedItem(value: TValue): boolean;
    updateSelected(value: TValue, selected: boolean, forward?: boolean): boolean;
    sendEventSelectedItems(): void;
    resetSelected(): void;
    searchByValue(value: TValue | TValue[] | undefined): boolean;
    getSelectedText(): string | undefined;
    getSelectedValue(): TValue | TValue[] | null;
    getNextValidIndex(startIndex: number, direction: number): number;
    nextActiveItem(): void;
    prevActiveItem(): void;
    setSelectedActiveItem(): void;
    isItemValidateByIndex(index: number): boolean;
    handleKeydown(event: KeyboardEvent): void;
    handleFocus(): void;
    handleBlur(): void;
    handleMouseEnterInItem(index: number): void;
    handleMouseLeaveInItem(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<import("../collection").ICollectionAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
        default: unknown;
    };
}>, {}, {
    cssClass: string;
}, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<import("../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
        type: PropType<import("../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("../index.ts").IComponentAttributes["id"];
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
        type: PropType<import("../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
        type: PropType<import("../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
        type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<import("../collection").ICollectionAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
        default: unknown;
    };
}>> & Readonly<{}>, {
    items: any[];
    selected: any;
}, {}, {
    BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../index.ts").IComponentAttributes["id"];
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
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["selected"]>;
        default: unknown;
    };
    multiple: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["multiple"]>;
        default: boolean | undefined;
    };
    separator: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["separator"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["singleSelection"]>;
        default: boolean | undefined;
    };
    noSelect: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["noSelect"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
        default: import("../collection-item").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
        default: import("../collection-abstract").IEventItemsSelected<unknown> | undefined;
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
    onPropItemSelected: import("../collection-item").IEventSelected | undefined;
    onPropItemsSelected: import("../collection-abstract").IEventItemsSelected<any> | undefined;
}, {}, {}, {}, string, () => {
    updateSelected: (value: TValue, selected: boolean, forward?: boolean) => boolean;
}, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    filterText: {
        type: PropType<IListBoxAttributes["filterText"]>;
        default: string | undefined;
    };
    maxRows: {
        type: PropType<IListBoxAttributes["maxRows"]>;
        default: number | undefined;
    };
    autoWidth: {
        type: PropType<IListBoxAttributes["autoWidth"]>;
        default: boolean | undefined;
    };
    wordWrap: {
        type: PropType<IListBoxAttributes["wordWrap"]>;
        default: boolean | undefined;
    };
    draggable: {
        type: PropType<IListBoxAttributes["draggable"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
    "onMove-item"?: ((...args: any[]) => any) | undefined;
}>, {
    draggable: boolean | undefined;
    wordWrap: boolean | undefined;
    filterText: string | undefined;
    maxRows: number | undefined;
    autoWidth: boolean | undefined;
}, {}, {
    BCollection: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../collection").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>, {}, {
        cssClass: string;
    }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../index.ts").IComponentAttributes["id"];
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
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../collection").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>> & Readonly<{}>, {
        items: any[];
        selected: any;
    }, {}, {
        BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BListBoxItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        wordWrap: {
            type: PropType<import("../list-box-item").IListBoxItemAttributes["selected"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        attributes(): import("./../../types").TAttributes;
        classText(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        component: {
            type: PropType<ICollectionItemAttributes["component"]>;
            default: string;
        };
        text: {
            type: PropType<ICollectionItemAttributes["text"]>;
            default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
        };
        icon: {
            type: PropType<ICollectionItemAttributes["icon"]>;
            default: any;
        };
        selected: {
            type: PropType<ICollectionItemAttributes["selected"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<ICollectionItemAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<ICollectionItemAttributes["required"]>;
            default: boolean | undefined;
        };
        meta: {
            type: PropType<ICollectionItemAttributes["meta"]>;
            default: any;
        };
        toggleable: {
            type: PropType<ICollectionItemAttributes["toggleable"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: PropType<ICollectionItemAttributes["draggable"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<ICollectionItemAttributes["onPropClick"]>;
            default: import("../collection-item").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: PropType<ICollectionItemAttributes["onPropSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("./../icon").IIconAttributes | null;
        stateSelected: boolean;
        draggedIndex: number;
    }, {
        classIcon(): string;
        classText(): string;
        itemComponent(): any;
    }, {
        onClick(event: Event): void;
        toggle(): void;
        onDragStart(event: DragEvent): void;
        onDragEnd(event: DragEvent): void;
        onDragOver(event: DragEvent): void;
        onDrop(event: DragEvent): void;
        onDragEnter(event: DragEvent): void;
        onDragLeave(event: DragEvent): void;
    }, import("../../types/types").TClassesMixin | {
        computed: {
            attributes(): import("./../../types").TAttributes;
        };
    }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../index.ts").IComponentAttributes["id"];
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
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        component: {
            type: PropType<ICollectionItemAttributes["component"]>;
            default: string;
        };
        text: {
            type: PropType<ICollectionItemAttributes["text"]>;
            default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
        };
        icon: {
            type: PropType<ICollectionItemAttributes["icon"]>;
            default: any;
        };
        selected: {
            type: PropType<ICollectionItemAttributes["selected"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<ICollectionItemAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<ICollectionItemAttributes["required"]>;
            default: boolean | undefined;
        };
        meta: {
            type: PropType<ICollectionItemAttributes["meta"]>;
            default: any;
        };
        toggleable: {
            type: PropType<ICollectionItemAttributes["toggleable"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: PropType<ICollectionItemAttributes["draggable"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<ICollectionItemAttributes["onPropClick"]>;
            default: import("../collection-item").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: PropType<ICollectionItemAttributes["onPropSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
        };
    }>> & Readonly<{
        onDragend?: ((...args: any[]) => any) | undefined;
        onDragenter?: ((...args: any[]) => any) | undefined;
        onDragleave?: ((...args: any[]) => any) | undefined;
        onDragstart?: ((...args: any[]) => any) | undefined;
        onDrop?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        onSelected?: ((...args: any[]) => any) | undefined;
    }>, {
        component: any;
        meta: any;
        text: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
        icon: any;
        onPropClick: import("../collection-item").IEventItemClick | undefined;
        selected: boolean | undefined;
        readonly: boolean | undefined;
        required: boolean | undefined;
        toggleable: boolean | undefined;
        draggable: boolean | undefined;
        onPropSelected: import("../collection-item").IEventSelected | undefined;
    }, {}, {
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("./../icon").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("./../icon").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("./../icon").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("./../icon").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("./../icon").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("./../icon").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("./../icon").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("./../icon").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("./../icon").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("./../icon").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("./../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        wordWrap: {
            type: PropType<import("../list-box-item").IListBoxItemAttributes["selected"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{}>, {
        wordWrap: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        alt: {
            type: PropType<import("./../icon").IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("./../icon").IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<import("./../icon").IIconAttributes["size"]>;
            default: string | number | import("./../../types").ISize | undefined;
        };
        width: {
            type: PropType<import("./../icon").IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<import("./../icon").IIconAttributes["height"]>;
            default: string | number | undefined;
        };
    }>, {}, {}, {
        sizeStyle(): Record<string, string>;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../index.ts").IComponentAttributes["id"];
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
            type: PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        alt: {
            type: PropType<import("./../icon").IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("./../icon").IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<import("./../icon").IIconAttributes["size"]>;
            default: string | number | import("./../../types").ISize | undefined;
        };
        width: {
            type: PropType<import("./../icon").IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<import("./../icon").IIconAttributes["height"]>;
            default: string | number | undefined;
        };
    }>> & Readonly<{}>, {
        size: string | number | import("./../../types").ISize | undefined;
        width: string | number | undefined;
        height: string | number | undefined;
        alt: string | undefined;
        icon: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
