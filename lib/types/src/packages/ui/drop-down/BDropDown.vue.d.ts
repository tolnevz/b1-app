import { type PropType, type ComponentPublicInstance } from 'vue';
import type { IDropDownAttributes } from './types.d';
import type { TClasses, TValue } from './../../types';
import type { ICollectionItemAttributes } from '../collection-item';
import { BDropDownComponent } from '../drop-down-component';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    hidden: {
        type: PropType<IDropDownAttributes["hidden"]>;
        default: boolean | undefined;
    };
    items: {
        type: PropType<IDropDownAttributes["items"]>;
        default: import("../index.ts").IListBoxItemAttributes[];
    };
    selected: {
        type: PropType<IDropDownAttributes["selected"]>;
        default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
    };
    multiple: {
        type: PropType<IDropDownAttributes["multiple"]>;
        default: boolean | undefined;
    };
    maxRows: {
        type: PropType<IDropDownAttributes["maxRows"]>;
        default: number | undefined;
    };
    autoWidth: {
        type: PropType<IDropDownAttributes["autoWidth"]>;
        default: boolean | undefined;
    };
    wordWrap: {
        type: PropType<IDropDownAttributes["wordWrap"]>;
        default: boolean | undefined;
    };
    filterText: {
        type: PropType<IDropDownAttributes["filterText"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: PropType<IDropDownAttributes["singleSelection"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: PropType<IDropDownAttributes["onPropItemSelected"]>;
        default: import("../collection-item").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: PropType<IDropDownAttributes["onPropItemsSelected"]>;
        default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
    };
    placement: {
        type: PropType<IDropDownAttributes["placement"]>;
        default: import("./../../types").TPlacemant | undefined;
    };
    triggerActivate: {
        type: PropType<IDropDownAttributes["triggerActivate"]>;
        default: import("./../../types").TTriggerActivate | undefined;
    };
    owner: {
        type: PropType<IDropDownAttributes["owner"]>;
        default: HTMLElement | ComponentPublicInstance | undefined;
    };
    contextMenu: {
        type: PropType<IDropDownAttributes["contextMenu"]>;
        default: boolean | undefined;
    };
    visible: {
        type: PropType<IDropDownAttributes["visible"]>;
        default: boolean | undefined;
    };
    offsetTop: {
        type: PropType<IDropDownAttributes["offsetTop"]>;
        default: number | undefined;
    };
    autoFocus: {
        type: PropType<IDropDownAttributes["autoFocus"]>;
        default: boolean | undefined;
    };
    autoClose: {
        type: PropType<IDropDownAttributes["autoClose"]>;
        default: boolean | undefined;
    };
    teleportTo: {
        type: PropType<IDropDownAttributes["teleportTo"]>;
        default: string | HTMLElement | undefined;
    };
}>, {}, {
    cmpControl: InstanceType<typeof BDropDownComponent> | null;
    registeredElements: HTMLElement[];
}, {
    classes(): TClasses;
}, {
    /**
     * A separate event
     * @param { ICollectionItemAttributes } data
     */
    onSelectedItem(data: ICollectionItemAttributes): void;
    /**
     * A separate event
     * @param { ICollectionItemAttributes[] } data
     */
    onSelectedItems({ selected, text, value }: {
        selected: ICollectionItemAttributes;
        text: string;
        value: TValue | TValue[];
    }): void;
    onToggleVisible(value: boolean): void;
    onMounted(instance: InstanceType<typeof BDropDownComponent>): void;
    afterShow(): void;
    onClick({ event, item }: {
        event: MouseEvent;
        item: ICollectionItemAttributes;
    }): void;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    hidden: {
        type: PropType<IDropDownAttributes["hidden"]>;
        default: boolean | undefined;
    };
    items: {
        type: PropType<IDropDownAttributes["items"]>;
        default: import("../index.ts").IListBoxItemAttributes[];
    };
    selected: {
        type: PropType<IDropDownAttributes["selected"]>;
        default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
    };
    multiple: {
        type: PropType<IDropDownAttributes["multiple"]>;
        default: boolean | undefined;
    };
    maxRows: {
        type: PropType<IDropDownAttributes["maxRows"]>;
        default: number | undefined;
    };
    autoWidth: {
        type: PropType<IDropDownAttributes["autoWidth"]>;
        default: boolean | undefined;
    };
    wordWrap: {
        type: PropType<IDropDownAttributes["wordWrap"]>;
        default: boolean | undefined;
    };
    filterText: {
        type: PropType<IDropDownAttributes["filterText"]>;
        default: string | undefined;
    };
    singleSelection: {
        type: PropType<IDropDownAttributes["singleSelection"]>;
        default: boolean | undefined;
    };
    onPropItemSelected: {
        type: PropType<IDropDownAttributes["onPropItemSelected"]>;
        default: import("../collection-item").IEventSelected | undefined;
    };
    onPropItemsSelected: {
        type: PropType<IDropDownAttributes["onPropItemsSelected"]>;
        default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
    };
    placement: {
        type: PropType<IDropDownAttributes["placement"]>;
        default: import("./../../types").TPlacemant | undefined;
    };
    triggerActivate: {
        type: PropType<IDropDownAttributes["triggerActivate"]>;
        default: import("./../../types").TTriggerActivate | undefined;
    };
    owner: {
        type: PropType<IDropDownAttributes["owner"]>;
        default: HTMLElement | ComponentPublicInstance | undefined;
    };
    contextMenu: {
        type: PropType<IDropDownAttributes["contextMenu"]>;
        default: boolean | undefined;
    };
    visible: {
        type: PropType<IDropDownAttributes["visible"]>;
        default: boolean | undefined;
    };
    offsetTop: {
        type: PropType<IDropDownAttributes["offsetTop"]>;
        default: number | undefined;
    };
    autoFocus: {
        type: PropType<IDropDownAttributes["autoFocus"]>;
        default: boolean | undefined;
    };
    autoClose: {
        type: PropType<IDropDownAttributes["autoClose"]>;
        default: boolean | undefined;
    };
    teleportTo: {
        type: PropType<IDropDownAttributes["teleportTo"]>;
        default: string | HTMLElement | undefined;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onMounted?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    "onSelected-item"?: ((...args: any[]) => any) | undefined;
    "onSelected-items"?: ((...args: any[]) => any) | undefined;
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
}>, {
    visible: boolean | undefined;
    hidden: boolean | undefined;
    items: import("../index.ts").IListBoxItemAttributes[];
    selected: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
    wordWrap: boolean | undefined;
    multiple: boolean | undefined;
    singleSelection: boolean | undefined;
    onPropItemSelected: import("../collection-item").IEventSelected | undefined;
    onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
    teleportTo: string | HTMLElement | undefined;
    placement: import("./../../types").TPlacemant | undefined;
    triggerActivate: import("./../../types").TTriggerActivate | undefined;
    owner: HTMLElement | ComponentPublicInstance | undefined;
    offsetTop: number | undefined;
    autoFocus: boolean | undefined;
    autoClose: boolean | undefined;
    filterText: string | undefined;
    maxRows: number | undefined;
    autoWidth: boolean | undefined;
    contextMenu: boolean | undefined;
}, {}, {
    BDropDownComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        hidden: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["required"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["placement"]>;
            default: import("./../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["triggerActivate"]>;
            default: import("./../../types").TTriggerActivate | undefined;
        };
        owner: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["owner"]>;
            default: HTMLElement | ComponentPublicInstance | undefined;
        };
        visible: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        offsetTop: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["offsetTop"]>;
            default: number | undefined;
        };
        autoFocus: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["autoFocus"]>;
            default: boolean | undefined;
        };
        autoClose: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["autoClose"]>;
            default: boolean | undefined;
        };
        teleportTo: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["teleportTo"]>;
            default: string | HTMLElement | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateVisible: boolean;
        position: {
            top: string;
            left: string;
        };
        marginY: number;
        cmpComponent: ComponentPublicInstance | null;
        registeredElements: Set<HTMLElement>;
    }, {
        classes(): TClasses;
        styles(): Record<string, string>;
    }, {
        elementRoot(): HTMLElement;
        elementOwner(): HTMLElement;
        registerElement(element: HTMLElement | HTMLElement[]): void;
        unregisterElement(element: HTMLElement): void;
        isPartOfComponent(target: Node): boolean;
        isOutsideComponent(target: Node): boolean;
        handleDocumentClick(event: MouseEvent): void;
        handleKeyDown(event: KeyboardEvent): void;
        handleFocusOut(event: FocusEvent): void;
        calculatePosition(event?: MouseEvent): {
            top: string;
            left: string;
        } | undefined;
        calculateTopStart(ownerRect: DOMRect, forward?: boolean): import("../drop-down-component").TPositionComponent;
        calculateTopEnd(ownerRect: DOMRect, forward?: boolean): import("../drop-down-component").TPositionComponent;
        calculateBottomStart(ownerRect: DOMRect, forward?: boolean): import("../drop-down-component").TPositionComponent;
        calculateBottomEnd(ownerRect: DOMRect, forward?: boolean): import("../drop-down-component").TPositionComponent;
        updateComponentPosition(): void;
        calculateInner(ownerRect: DOMRect, event?: MouseEvent): {
            top: number;
            left: number;
        };
        onUpdateComponentRect(): void;
        onMountedComponent(cmpComponent: ComponentPublicInstance, register?: boolean): void;
        afterShow(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        hidden: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["required"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["placement"]>;
            default: import("./../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["triggerActivate"]>;
            default: import("./../../types").TTriggerActivate | undefined;
        };
        owner: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["owner"]>;
            default: HTMLElement | ComponentPublicInstance | undefined;
        };
        visible: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        offsetTop: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["offsetTop"]>;
            default: number | undefined;
        };
        autoFocus: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["autoFocus"]>;
            default: boolean | undefined;
        };
        autoClose: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["autoClose"]>;
            default: boolean | undefined;
        };
        teleportTo: {
            type: PropType<import("../drop-down-component").IDropDownComponentAttributes["teleportTo"]>;
            default: string | HTMLElement | undefined;
        };
    }>> & Readonly<{
        onMounted?: ((...args: any[]) => any) | undefined;
        "onUpdate:text"?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
    }>, {
        visible: boolean | undefined;
        hidden: boolean | undefined;
        required: boolean | undefined;
        teleportTo: string | HTMLElement | undefined;
        placement: import("./../../types").TPlacemant | undefined;
        triggerActivate: import("./../../types").TTriggerActivate | undefined;
        owner: HTMLElement | ComponentPublicInstance | undefined;
        offsetTop: number | undefined;
        autoFocus: boolean | undefined;
        autoClose: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BListBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        filterText: {
            type: PropType<import("../list-box").IListBoxAttributes["filterText"]>;
            default: string | undefined;
        };
        maxRows: {
            type: PropType<import("../list-box").IListBoxAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../list-box").IListBoxAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../list-box").IListBoxAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: PropType<import("../list-box").IListBoxAttributes["draggable"]>;
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
        maxRowsVisible(): number;
        transitionGroupName(): string;
    }, {
        getRefItems(): ComponentPublicInstance[];
        getRefLastVisibleItem(): HTMLElement | undefined;
        getVisibleItemsHeight(): number;
        createObserver(element: HTMLElement, callback: () => void): void;
        scrollToActiveItem(): void;
        calculateContainerHeight(): void;
        calculateContainerHeightNextTick(): void;
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
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
            default: unknown;
        };
        multiple: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
            default: boolean | undefined;
        };
        separator: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
            default: boolean | undefined;
        };
        noSelect: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
            default: import("../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
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
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
            default: unknown;
        };
        multiple: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
            default: boolean | undefined;
        };
        separator: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
            default: boolean | undefined;
        };
        noSelect: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
            default: import("../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
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
        onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
    }, {}, {}, {}, string, () => {
        updateSelected: (value: TValue, selected: boolean, forward?: boolean) => boolean;
    }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        filterText: {
            type: PropType<import("../list-box").IListBoxAttributes["filterText"]>;
            default: string | undefined;
        };
        maxRows: {
            type: PropType<import("../list-box").IListBoxAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../list-box").IListBoxAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../list-box").IListBoxAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: PropType<import("../list-box").IListBoxAttributes["draggable"]>;
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
                type: PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
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
                    type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                    type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                type: PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            wordWrap: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
