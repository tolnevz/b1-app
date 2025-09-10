import { type IMenuItemAttributes } from '../menu-item';
import type { TValue } from './../../types';
declare const _default: import("vue").DefineComponent<{}, {}, {
    cssClass: string;
}, {}, {
    /**
     * override init items method to collect all items
     */
    initItems(): IMenuItemAttributes[] | undefined;
    initSelected(): IMenuItemAttributes[];
    /**
     * override method to get item by value. Recursive menu search
     */
    getItemByValue(value: TValue): IMenuItemAttributes | undefined;
    /**
     * Expanded all items in the menu
     * @param this
     * @param items - items to expand or collapse, default is all items in the menu
     */
    expanded(this: any, items?: IMenuItemAttributes[]): void;
    /**
     * Collapse all items in the menu
     * @param this
     * @param items - items to collapse, default is all items in the menu
     */
    collapsed(this: any, items?: IMenuItemAttributes[]): void;
    /**
     * Expand all items in the menu to the selected item
     * @param this
     * @param items - items to expand, default is all items in the menu
     */
    expandToSelected(this: any, items?: IMenuItemAttributes[]): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["selected"]>;
        default: unknown;
    };
    multiple: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["multiple"]>;
        default: boolean | undefined;
    };
    separator: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["separator"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["singleSelection"]>;
        default: boolean | undefined;
    };
    noSelect: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["noSelect"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
        default: import("../index.ts").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
        default: import("../collection-abstract").IEventItemsSelected<unknown> | undefined;
    };
}>, {}, {
    cssClass: string;
    stateSelected: import("../index.ts").ICollectionItemAttributes[];
    stateItems: import("../index.ts").ICollectionItemAttributes[];
    currentIndex: number;
    isFocused: boolean;
}, {}, {
    watcherHandlerItems(value: import("../index.ts").ICollectionItemAttributes[]): void;
    initItems(): import("../index.ts").ICollectionItemAttributes[];
    initSelected(): import("../index.ts").ICollectionItemAttributes[];
    toggleItemSelected(item: import("../index.ts").ICollectionItemAttributes): void;
    onClickItem({ event, item }: {
        event: MouseEvent;
        item: import("../index.ts").ICollectionItemAttributes;
    }): void;
    count(): number;
    isEmpty(): boolean;
    isSelected(): boolean;
    getItemByValue(value: TValue): import("../index.ts").ICollectionItemAttributes | undefined;
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
        type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
        default: unknown;
    };
}>, {}, {
    cssClass: string;
}, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
        type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
        type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
        default: unknown;
    };
}>> & Readonly<{}>, {
    items: any[];
    selected: any;
}, {}, {
    BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["items"]>;
        default: unknown[];
    };
    selected: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["selected"]>;
        default: unknown;
    };
    multiple: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["multiple"]>;
        default: boolean | undefined;
    };
    separator: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["separator"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["singleSelection"]>;
        default: boolean | undefined;
    };
    noSelect: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["noSelect"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
        default: import("../index.ts").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: import("vue").PropType<import("../collection-abstract").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
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
    onPropItemSelected: import("../index.ts").IEventSelected | undefined;
    onPropItemsSelected: import("../collection-abstract").IEventItemsSelected<any> | undefined;
}, {}, {}, {}, string, () => {
    updateSelected: (value: TValue, selected: boolean, forward?: boolean) => boolean;
}, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    BCollection: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>, {}, {
        cssClass: string;
    }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: import("vue").PropType<import("../collection").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>> & Readonly<{}>, {
        items: any[];
        selected: any;
    }, {}, {
        BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
    BMenuItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        asCollapse: {
            type: import("vue").PropType<IMenuItemAttributes["asCollapse"]>;
            default: boolean | undefined;
        };
        asHeader: {
            type: import("vue").PropType<IMenuItemAttributes["asHeader"]>;
            default: boolean | undefined;
        };
        items: {
            type: import("vue").PropType<IMenuItemAttributes["items"]>;
            default: IMenuItemAttributes[] | undefined;
        };
        level: {
            type: import("vue").PropType<IMenuItemAttributes["level"]>;
            default: number | undefined;
        };
        expanded: {
            type: import("vue").PropType<IMenuItemAttributes["expanded"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        classes(): import("./../../types").TClasses;
        styles(): Record<string, string>;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        component: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
            default: string;
        };
        text: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
            default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
            default: any;
        };
        selected: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
            default: boolean | undefined;
        };
        meta: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
            default: any;
        };
        toggleable: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
            default: import("../index.ts").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
            default: import("../index.ts").IEventSelected | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../index.ts").IIconAttributes | null;
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
            type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        component: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
            default: string;
        };
        text: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
            default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
            default: any;
        };
        selected: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
            default: boolean | undefined;
        };
        meta: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
            default: any;
        };
        toggleable: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
            default: import("../index.ts").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
            default: import("../index.ts").IEventSelected | undefined;
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
        onPropClick: import("../index.ts").IEventItemClick | undefined;
        selected: boolean | undefined;
        readonly: boolean | undefined;
        required: boolean | undefined;
        toggleable: boolean | undefined;
        draggable: boolean | undefined;
        onPropSelected: import("../index.ts").IEventSelected | undefined;
    }, {}, {
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("./../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        asCollapse: {
            type: import("vue").PropType<IMenuItemAttributes["asCollapse"]>;
            default: boolean | undefined;
        };
        asHeader: {
            type: import("vue").PropType<IMenuItemAttributes["asHeader"]>;
            default: boolean | undefined;
        };
        items: {
            type: import("vue").PropType<IMenuItemAttributes["items"]>;
            default: IMenuItemAttributes[] | undefined;
        };
        level: {
            type: import("vue").PropType<IMenuItemAttributes["level"]>;
            default: number | undefined;
        };
        expanded: {
            type: import("vue").PropType<IMenuItemAttributes["expanded"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        items: IMenuItemAttributes[] | undefined;
        asCollapse: boolean | undefined;
        asHeader: boolean | undefined;
        level: number | undefined;
        expanded: boolean | undefined;
    }, {}, {
        BListBoxItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            wordWrap: {
                type: import("vue").PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            attributes(): import("./../../types").TAttributes;
            classText(): string;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            component: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                default: string;
            };
            text: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                default: any;
            };
            selected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                default: boolean | undefined;
            };
            readonly: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                default: boolean | undefined;
            };
            meta: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                default: any;
            };
            toggleable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                default: import("../index.ts").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../index.ts").IIconAttributes | null;
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
                type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            component: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                default: string;
            };
            text: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                default: any;
            };
            selected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                default: boolean | undefined;
            };
            readonly: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                default: boolean | undefined;
            };
            meta: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                default: any;
            };
            toggleable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                default: import("../index.ts").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
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
            onPropClick: import("../index.ts").IEventItemClick | undefined;
            selected: boolean | undefined;
            readonly: boolean | undefined;
            required: boolean | undefined;
            toggleable: boolean | undefined;
            draggable: boolean | undefined;
            onPropSelected: import("../index.ts").IEventSelected | undefined;
        }, {}, {
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
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
                type: import("vue").PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            wordWrap: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BCollapseItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            content: {
                type: import("vue").PropType<import("../index.ts").ICollapseItemAttributes["content"]>;
                default: string | undefined;
            };
        }>, {}, {}, {
            attributes(): import("./../../types").TAttributes;
            attributesContent(): import("./../../types").TAttributes;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            component: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                default: string;
            };
            text: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                default: any;
            };
            selected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                default: boolean | undefined;
            };
            readonly: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                default: boolean | undefined;
            };
            meta: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                default: any;
            };
            toggleable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                default: import("../index.ts").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../index.ts").IIconAttributes | null;
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
                type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            component: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                default: string;
            };
            text: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                default: any;
            };
            selected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                default: boolean | undefined;
            };
            readonly: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                default: boolean | undefined;
            };
            meta: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                default: any;
            };
            toggleable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                default: import("../index.ts").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: import("vue").PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
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
            onPropClick: import("../index.ts").IEventItemClick | undefined;
            selected: boolean | undefined;
            readonly: boolean | undefined;
            required: boolean | undefined;
            toggleable: boolean | undefined;
            draggable: boolean | undefined;
            onPropSelected: import("../index.ts").IEventSelected | undefined;
        }, {}, {
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
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
            content: {
                type: import("vue").PropType<import("../index.ts").ICollapseItemAttributes["content"]>;
                default: string | undefined;
            };
        }>> & Readonly<{}>, {
            content: string | undefined;
        }, {}, {
            BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                href: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["href"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["icon"]>;
                    default: any;
                };
                outlined: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["simple"]>;
                    default: boolean | undefined;
                };
                target: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["target"]>;
                    default: import("../button/types").TTarget | undefined;
                };
                to: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["to"]>;
                    default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["type"]>;
                    default: import("./../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("./../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("./../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: import("vue").PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                    default: import("./../../types").IEventHandler | undefined;
                };
            }>, {}, {
                cssClass: string;
                iconProps: import("../index.ts").IIconAttributes | null;
                stateDisabled: boolean;
                stateLoading: import("./../../types").ILoading;
            }, {
                getComponentParams(): {
                    tag: string;
                    attrs: Record<string, any>;
                };
                attrs(): Record<string, any>;
                classes(): import("./../../types").TClasses;
                getComponent(): string;
                listeners(): Record<string, any>;
            }, {
                onClick(event: MouseEvent): void;
                setLoading(value: boolean | import("./../../types").ILoading): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:text"?: ((...args: any[]) => any) | undefined;
                "onUpdate:focused"?: ((...args: any[]) => any) | undefined;
            }>, {
                text: string | number | undefined;
                disabled: boolean | undefined;
                focused: boolean | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                href: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["href"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["icon"]>;
                    default: any;
                };
                outlined: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["simple"]>;
                    default: boolean | undefined;
                };
                target: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["target"]>;
                    default: import("../button/types").TTarget | undefined;
                };
                to: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["to"]>;
                    default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["type"]>;
                    default: import("./../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("./../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("./../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: import("vue").PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                    default: import("./../../types").IEventHandler | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                type: import("./../../types").TComponentVariantType | undefined;
                form: import("../button/types").TFormType | undefined;
                icon: any;
                href: string | undefined;
                outlined: boolean | undefined;
                plain: boolean | undefined;
                simple: boolean | undefined;
                target: import("../button/types").TTarget | undefined;
                to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                loading: boolean | import("./../../types").ILoading | undefined;
                sizeControl: import("./../../types").TSizeControl | undefined;
                asLabel: boolean | undefined;
                onPropClick: import("./../../types").IEventHandler | undefined;
            }, {}, {
                BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    alt: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("./../../types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>, {}, {}, {
                    sizeStyle(): Record<string, string>;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("./../../types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>> & Readonly<{}>, {
                    size: string | number | import("./../../types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    borderSize: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                        default: number | undefined;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                        default: import("./../../types").TSizeControl;
                    };
                }>, {}, {
                    cssClass: string;
                }, {
                    classes(): import("./../../types").TClasses;
                    styles(): {
                        borderWidth: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    borderSize: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                        default: number | undefined;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                        default: import("./../../types").TSizeControl;
                    };
                }>> & Readonly<{}>, {
                    size: import("./../../types").TSizeControl;
                    borderSize: number | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    width: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                        default: string | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                        default: string | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                        default: import("../index.ts").TSkeletonType | undefined;
                    };
                    animation: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                        default: import("../index.ts").TSkeletonAnimation | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                }, {
                    classes(): import("./../../types").TClasses;
                    styles(): {
                        width: string;
                        height: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    width: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                        default: string | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                        default: string | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                        default: import("../index.ts").TSkeletonType | undefined;
                    };
                    animation: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                        default: import("../index.ts").TSkeletonAnimation | undefined;
                    };
                }>> & Readonly<{}>, {
                    type: import("../index.ts").TSkeletonType | undefined;
                    width: string | undefined;
                    height: string | undefined;
                    animation: import("../index.ts").TSkeletonAnimation | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
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
        BMenuSub: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: import("vue").PropType<import("../index.ts").IMenuSubAttributes["items"]>;
                default: IMenuItemAttributes[] | undefined;
            };
            level: {
                type: import("vue").PropType<import("../index.ts").IMenuSubAttributes["level"]>;
                default: number | undefined;
            };
        }>, {}, {}, {}, {
            onClick(data: any): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: import("vue").PropType<import("../index.ts").IMenuSubAttributes["items"]>;
                default: IMenuItemAttributes[] | undefined;
            };
            level: {
                type: import("vue").PropType<import("../index.ts").IMenuSubAttributes["level"]>;
                default: number | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            items: IMenuItemAttributes[] | undefined;
            level: number | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
