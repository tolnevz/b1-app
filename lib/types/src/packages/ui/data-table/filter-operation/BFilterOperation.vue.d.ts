import { type PropType } from 'vue';
import type { IFilterOperationItem, IFilterOperationAttributes } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    operation: {
        type: PropType<IFilterOperationAttributes["operation"]>;
        default: any;
    };
    equal: {
        type: PropType<IFilterOperationAttributes["equal"]>;
        default: boolean | undefined;
    };
    notEqual: {
        type: PropType<IFilterOperationAttributes["notEqual"]>;
        default: boolean | undefined;
    };
    less: {
        type: PropType<IFilterOperationAttributes["less"]>;
        default: boolean | undefined;
    };
    lessOrEqual: {
        type: PropType<IFilterOperationAttributes["lessOrEqual"]>;
        default: boolean | undefined;
    };
    greater: {
        type: PropType<IFilterOperationAttributes["greater"]>;
        default: boolean | undefined;
    };
    greaterOrEqual: {
        type: PropType<IFilterOperationAttributes["greaterOrEqual"]>;
        default: boolean | undefined;
    };
    contains: {
        type: PropType<IFilterOperationAttributes["contains"]>;
        default: boolean | undefined;
    };
    notContains: {
        type: PropType<IFilterOperationAttributes["notContains"]>;
        default: boolean | undefined;
    };
    startsWith: {
        type: PropType<IFilterOperationAttributes["startsWith"]>;
        default: boolean | undefined;
    };
    notStartsWith: {
        type: PropType<IFilterOperationAttributes["notStartsWith"]>;
        default: boolean | undefined;
    };
    endsWith: {
        type: PropType<IFilterOperationAttributes["endsWith"]>;
        default: boolean | undefined;
    };
    notEndsWith: {
        type: PropType<IFilterOperationAttributes["notEndsWith"]>;
        default: boolean | undefined;
    };
    in: {
        type: PropType<IFilterOperationAttributes["in"]>;
        default: boolean | undefined;
    };
    notIn: {
        type: PropType<IFilterOperationAttributes["notIn"]>;
        default: boolean | undefined;
    };
    between: {
        type: PropType<IFilterOperationAttributes["between"]>;
        default: boolean | undefined;
    };
    notBetween: {
        type: PropType<IFilterOperationAttributes["notBetween"]>;
        default: boolean | undefined;
    };
    isNull: {
        type: PropType<IFilterOperationAttributes["isNull"]>;
        default: boolean | undefined;
    };
    isNotNull: {
        type: PropType<IFilterOperationAttributes["isNotNull"]>;
        default: boolean | undefined;
    };
}>, {}, {
    showMenu: boolean;
    items: IFilterOperationItem[];
    selected: IFilterOperationItem | null;
}, {
    operationText(): any;
}, {
    onShowMenu(): void;
    onSelectedItem(item: IFilterOperationItem): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<import("../../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("../../index.ts").IComponentAttributes["id"];
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
        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
        type: PropType<import("../../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
        type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    operation: {
        type: PropType<IFilterOperationAttributes["operation"]>;
        default: any;
    };
    equal: {
        type: PropType<IFilterOperationAttributes["equal"]>;
        default: boolean | undefined;
    };
    notEqual: {
        type: PropType<IFilterOperationAttributes["notEqual"]>;
        default: boolean | undefined;
    };
    less: {
        type: PropType<IFilterOperationAttributes["less"]>;
        default: boolean | undefined;
    };
    lessOrEqual: {
        type: PropType<IFilterOperationAttributes["lessOrEqual"]>;
        default: boolean | undefined;
    };
    greater: {
        type: PropType<IFilterOperationAttributes["greater"]>;
        default: boolean | undefined;
    };
    greaterOrEqual: {
        type: PropType<IFilterOperationAttributes["greaterOrEqual"]>;
        default: boolean | undefined;
    };
    contains: {
        type: PropType<IFilterOperationAttributes["contains"]>;
        default: boolean | undefined;
    };
    notContains: {
        type: PropType<IFilterOperationAttributes["notContains"]>;
        default: boolean | undefined;
    };
    startsWith: {
        type: PropType<IFilterOperationAttributes["startsWith"]>;
        default: boolean | undefined;
    };
    notStartsWith: {
        type: PropType<IFilterOperationAttributes["notStartsWith"]>;
        default: boolean | undefined;
    };
    endsWith: {
        type: PropType<IFilterOperationAttributes["endsWith"]>;
        default: boolean | undefined;
    };
    notEndsWith: {
        type: PropType<IFilterOperationAttributes["notEndsWith"]>;
        default: boolean | undefined;
    };
    in: {
        type: PropType<IFilterOperationAttributes["in"]>;
        default: boolean | undefined;
    };
    notIn: {
        type: PropType<IFilterOperationAttributes["notIn"]>;
        default: boolean | undefined;
    };
    between: {
        type: PropType<IFilterOperationAttributes["between"]>;
        default: boolean | undefined;
    };
    notBetween: {
        type: PropType<IFilterOperationAttributes["notBetween"]>;
        default: boolean | undefined;
    };
    isNull: {
        type: PropType<IFilterOperationAttributes["isNull"]>;
        default: boolean | undefined;
    };
    isNotNull: {
        type: PropType<IFilterOperationAttributes["isNotNull"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    endsWith: boolean | undefined;
    startsWith: boolean | undefined;
    operation: any;
    equal: boolean | undefined;
    notEqual: boolean | undefined;
    less: boolean | undefined;
    lessOrEqual: boolean | undefined;
    greater: boolean | undefined;
    greaterOrEqual: boolean | undefined;
    contains: boolean | undefined;
    notContains: boolean | undefined;
    notStartsWith: boolean | undefined;
    notEndsWith: boolean | undefined;
    in: boolean | undefined;
    notIn: boolean | undefined;
    between: boolean | undefined;
    notBetween: boolean | undefined;
    isNull: boolean | undefined;
    isNotNull: boolean | undefined;
}, {}, {
    BDropDown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        hidden: {
            type: PropType<import("../../drop-down").IDropDownAttributes["hidden"]>;
            default: boolean | undefined;
        };
        items: {
            type: PropType<import("../../drop-down").IDropDownAttributes["items"]>;
            default: import("../../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../../drop-down").IDropDownAttributes["selected"]>;
            default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../../drop-down").IDropDownAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../../drop-down").IDropDownAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../../drop-down").IDropDownAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../../drop-down").IDropDownAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filterText: {
            type: PropType<import("../../drop-down").IDropDownAttributes["filterText"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../../drop-down").IDropDownAttributes["singleSelection"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../../drop-down").IDropDownAttributes["onPropItemSelected"]>;
            default: import("../../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../drop-down").IDropDownAttributes["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
        };
        placement: {
            type: PropType<import("../../drop-down").IDropDownAttributes["placement"]>;
            default: import("../../../types/types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../../drop-down").IDropDownAttributes["triggerActivate"]>;
            default: import("../../../types/types").TTriggerActivate | undefined;
        };
        owner: {
            type: PropType<import("../../drop-down").IDropDownAttributes["owner"]>;
            default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
        };
        contextMenu: {
            type: PropType<import("../../drop-down").IDropDownAttributes["contextMenu"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../../drop-down").IDropDownAttributes["visible"]>;
            default: boolean | undefined;
        };
        offsetTop: {
            type: PropType<import("../../drop-down").IDropDownAttributes["offsetTop"]>;
            default: number | undefined;
        };
        autoFocus: {
            type: PropType<import("../../drop-down").IDropDownAttributes["autoFocus"]>;
            default: boolean | undefined;
        };
        autoClose: {
            type: PropType<import("../../drop-down").IDropDownAttributes["autoClose"]>;
            default: boolean | undefined;
        };
        teleportTo: {
            type: PropType<import("../../drop-down").IDropDownAttributes["teleportTo"]>;
            default: string | HTMLElement | undefined;
        };
    }>, {}, {
        cmpControl: InstanceType<typeof import("../../index.ts").BDropDownComponent> | null;
        registeredElements: HTMLElement[];
    }, {
        classes(): import("../../../types/types").TClasses;
    }, {
        onSelectedItem(data: import("../../index.ts").ICollectionItemAttributes): void;
        onSelectedItems({ selected, text, value }: {
            selected: import("../../index.ts").ICollectionItemAttributes;
            text: string;
            value: import("../../../types/types").TValue | import("../../../types/types").TValue[];
        }): void;
        onToggleVisible(value: boolean): void;
        onMounted(instance: InstanceType<typeof import("../../index.ts").BDropDownComponent>): void;
        afterShow(): void;
        onClick({ event, item }: {
            event: MouseEvent;
            item: import("../../index.ts").ICollectionItemAttributes;
        }): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>, {}, {
        cssClass: string;
    }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../../index.ts").IComponentAttributes["id"];
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>> & Readonly<{}>, {
        items: any[];
        selected: any;
    }, {}, {
        BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../drop-down").IDropDownAttributes["hidden"]>;
            default: boolean | undefined;
        };
        items: {
            type: PropType<import("../../drop-down").IDropDownAttributes["items"]>;
            default: import("../../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../../drop-down").IDropDownAttributes["selected"]>;
            default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../../drop-down").IDropDownAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../../drop-down").IDropDownAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../../drop-down").IDropDownAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../../drop-down").IDropDownAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filterText: {
            type: PropType<import("../../drop-down").IDropDownAttributes["filterText"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../../drop-down").IDropDownAttributes["singleSelection"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../../drop-down").IDropDownAttributes["onPropItemSelected"]>;
            default: import("../../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../drop-down").IDropDownAttributes["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
        };
        placement: {
            type: PropType<import("../../drop-down").IDropDownAttributes["placement"]>;
            default: import("../../../types/types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../../drop-down").IDropDownAttributes["triggerActivate"]>;
            default: import("../../../types/types").TTriggerActivate | undefined;
        };
        owner: {
            type: PropType<import("../../drop-down").IDropDownAttributes["owner"]>;
            default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
        };
        contextMenu: {
            type: PropType<import("../../drop-down").IDropDownAttributes["contextMenu"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../../drop-down").IDropDownAttributes["visible"]>;
            default: boolean | undefined;
        };
        offsetTop: {
            type: PropType<import("../../drop-down").IDropDownAttributes["offsetTop"]>;
            default: number | undefined;
        };
        autoFocus: {
            type: PropType<import("../../drop-down").IDropDownAttributes["autoFocus"]>;
            default: boolean | undefined;
        };
        autoClose: {
            type: PropType<import("../../drop-down").IDropDownAttributes["autoClose"]>;
            default: boolean | undefined;
        };
        teleportTo: {
            type: PropType<import("../../drop-down").IDropDownAttributes["teleportTo"]>;
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
        items: import("../../index.ts").IListBoxItemAttributes[];
        selected: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
        wordWrap: boolean | undefined;
        multiple: boolean | undefined;
        singleSelection: boolean | undefined;
        onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
        onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
        teleportTo: string | HTMLElement | undefined;
        placement: import("../../../types/types").TPlacemant | undefined;
        triggerActivate: import("../../../types/types").TTriggerActivate | undefined;
        owner: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                default: boolean | undefined;
            };
            placement: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                default: import("../../../types/types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../../types/types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
            cmpComponent: import("vue").ComponentPublicInstance | null;
            registeredElements: Set<HTMLElement>;
        }, {
            classes(): import("../../../types/types").TClasses;
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
            calculateTopStart(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
            calculateTopEnd(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
            calculateBottomStart(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
            calculateBottomEnd(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
            updateComponentPosition(): void;
            calculateInner(ownerRect: DOMRect, event?: MouseEvent): {
                top: number;
                left: number;
            };
            onUpdateComponentRect(): void;
            onMountedComponent(cmpComponent: import("vue").ComponentPublicInstance, register?: boolean): void;
            afterShow(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            hidden: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                default: boolean | undefined;
            };
            placement: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                default: import("../../../types/types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../../types/types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
            placement: import("../../../types/types").TPlacemant | undefined;
            triggerActivate: import("../../../types/types").TTriggerActivate | undefined;
            owner: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            offsetTop: number | undefined;
            autoFocus: boolean | undefined;
            autoClose: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BListBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            filterText: {
                type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                default: string | undefined;
            };
            maxRows: {
                type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            containerHeight: string;
            isHeightCalculated: boolean;
            stateFilterText: string;
            copyStateItems: import("../../index.ts").ICollectionItemAttributes[];
            draggedItem: import("../../index.ts").ICollectionItemAttributes | null;
            draggedIndex: number;
        }, {
            classes(): import("../../../types/types").TClasses;
            outItems(): import("../../index.ts").ICollectionItemAttributes[];
            maxRowsVisible(): number;
            transitionGroupName(): string;
        }, {
            getRefItems(): import("vue").ComponentPublicInstance[];
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
                value: import("../../../types/types").TValue;
            }): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                default: unknown;
            };
            multiple: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                default: boolean | undefined;
            };
            separator: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                default: boolean | undefined;
            };
            noSelect: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                default: import("../../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateSelected: import("../../index.ts").ICollectionItemAttributes[];
            stateItems: import("../../index.ts").ICollectionItemAttributes[];
            currentIndex: number;
            isFocused: boolean;
        }, {}, {
            watcherHandlerItems(value: import("../../index.ts").ICollectionItemAttributes[]): void;
            initItems(): import("../../index.ts").ICollectionItemAttributes[];
            initSelected(): import("../../index.ts").ICollectionItemAttributes[];
            toggleItemSelected(item: import("../../index.ts").ICollectionItemAttributes): void;
            onClickItem({ event, item }: {
                event: MouseEvent;
                item: import("../../index.ts").ICollectionItemAttributes;
            }): void;
            count(): number;
            isEmpty(): boolean;
            isSelected(): boolean;
            getItemByValue(value: import("../../../types/types").TValue): import("../../index.ts").ICollectionItemAttributes | undefined;
            getIndexByValue(value: import("../../../types/types").TValue): number;
            removeSelectedItem(value: import("../../../types/types").TValue): boolean;
            updateSelected(value: import("../../../types/types").TValue, selected: boolean, forward?: boolean): boolean;
            sendEventSelectedItems(): void;
            resetSelected(): void;
            searchByValue(value: import("../../../types/types").TValue | import("../../../types/types").TValue[] | undefined): boolean;
            getSelectedText(): string | undefined;
            getSelectedValue(): import("../../../types/types").TValue | import("../../../types/types").TValue[] | null;
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
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>, {}, {
            cssClass: string;
        }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>> & Readonly<{}>, {
            items: any[];
            selected: any;
        }, {}, {
            BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                default: unknown;
            };
            multiple: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                default: boolean | undefined;
            };
            separator: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                default: boolean | undefined;
            };
            noSelect: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                default: import("../../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
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
            onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
            onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
        }, {}, {}, {}, string, () => {
            updateSelected: (value: import("../../../types/types").TValue, selected: boolean, forward?: boolean) => boolean;
        }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            filterText: {
                type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                default: string | undefined;
            };
            maxRows: {
                type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                    type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>, {}, {
                cssClass: string;
            }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                items: {
                    type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>> & Readonly<{}>, {
                items: any[];
                selected: any;
            }, {}, {
                BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {
                attributes(): import("../../../types/types").TAttributes;
                classText(): string;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                component: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                    default: string;
                };
                text: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                    default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                    default: any;
                };
                selected: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
                readonly: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                    default: boolean | undefined;
                };
                meta: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                    default: any;
                };
                toggleable: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                    default: import("../../index.ts").IEventItemClick | undefined;
                };
                onPropSelected: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                    default: import("../../index.ts").IEventSelected | undefined;
                };
            }>, {}, {
                cssClass: string;
                iconProps: import("../../index.ts").IIconAttributes | null;
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
            }, import("../../../types/types").TClassesMixin | {
                computed: {
                    attributes(): import("../../../types/types").TAttributes;
                };
            }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: PropType<import("../../control-value").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                component: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                    default: string;
                };
                text: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                    default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                    default: any;
                };
                selected: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
                readonly: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                    default: boolean | undefined;
                };
                meta: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                    default: any;
                };
                toggleable: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                    default: import("../../index.ts").IEventItemClick | undefined;
                };
                onPropSelected: {
                    type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                    default: import("../../index.ts").IEventSelected | undefined;
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
                onPropClick: import("../../index.ts").IEventItemClick | undefined;
                selected: boolean | undefined;
                readonly: boolean | undefined;
                required: boolean | undefined;
                toggleable: boolean | undefined;
                draggable: boolean | undefined;
                onPropSelected: import("../../index.ts").IEventSelected | undefined;
            }, {}, {
                BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    alt: {
                        type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../../types/types").ISize | undefined;
                    };
                    width: {
                        type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>, {}, {}, {
                    sizeStyle(): Record<string, string>;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../../types/types").ISize | undefined;
                    };
                    width: {
                        type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>> & Readonly<{}>, {
                    size: string | number | import("../../../types/types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                wordWrap: {
                    type: PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{}>, {
                wordWrap: boolean | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types/types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types/types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>> & Readonly<{}>, {
                size: string | number | import("../../../types/types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        href: {
            type: PropType<import("../../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("../../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("../../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("../../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("../../button").IButtonAttributes["target"]>;
            default: import("../../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("../../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("../../button").IButtonAttributes["type"]>;
            default: import("../../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("../../button").IButtonAttributes["form"]>;
            default: import("../../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("../../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("../../button").IButtonAttributes["sizeControl"]>;
            default: import("../../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("../../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("../../button").IButtonEvents["onPropClick"]>;
            default: import("../../../types/events").IEventHandler | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../../index.ts").IIconAttributes | null;
        stateDisabled: boolean;
        stateLoading: import("../../../types/types").ILoading;
    }, {
        getComponentParams(): {
            tag: string;
            attrs: Record<string, any>;
        };
        attrs(): Record<string, any>;
        classes(): import("../../../types/types").TClasses;
        getComponent(): string;
        listeners(): Record<string, any>;
    }, {
        onClick(event: MouseEvent): void;
        setLoading(value: boolean | import("../../../types/types").ILoading): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../../index.ts").IComponentAttributes["id"];
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("../../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("../../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("../../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("../../button").IButtonAttributes["target"]>;
            default: import("../../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("../../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("../../button").IButtonAttributes["type"]>;
            default: import("../../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("../../button").IButtonAttributes["form"]>;
            default: import("../../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("../../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("../../button").IButtonAttributes["sizeControl"]>;
            default: import("../../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("../../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("../../button").IButtonEvents["onPropClick"]>;
            default: import("../../../types/events").IEventHandler | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        type: import("../../../types/types").TComponentVariantType | undefined;
        form: import("../../button/types").TFormType | undefined;
        icon: any;
        href: string | undefined;
        outlined: boolean | undefined;
        plain: boolean | undefined;
        simple: boolean | undefined;
        target: import("../../button/types").TTarget | undefined;
        to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        loading: boolean | import("../../../types/types").ILoading | undefined;
        sizeControl: import("../../../types/types").TSizeControl | undefined;
        asLabel: boolean | undefined;
        onPropClick: import("../../../types/events").IEventHandler | undefined;
    }, {}, {
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types/types").ISize | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types/types").ISize | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("../../../types/types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            borderSize: {
                type: PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                default: number | undefined;
            };
            size: {
                type: PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                default: import("../../../types/types").TSizeControl;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../../types/types").TClasses;
            styles(): {
                borderWidth: string;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                default: number | undefined;
            };
            size: {
                type: PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                default: import("../../../types/types").TSizeControl;
            };
        }>> & Readonly<{}>, {
            size: import("../../../types/types").TSizeControl;
            borderSize: number | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            width: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                default: string | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                default: import("../../index.ts").TSkeletonType | undefined;
            };
            animation: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
                default: import("../../index.ts").TSkeletonAnimation | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../../types/types").TClasses;
            styles(): {
                width: string;
                height: string;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                default: string | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                default: import("../../index.ts").TSkeletonType | undefined;
            };
            animation: {
                type: PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
                default: import("../../index.ts").TSkeletonAnimation | undefined;
            };
        }>> & Readonly<{}>, {
            type: import("../../index.ts").TSkeletonType | undefined;
            width: string | undefined;
            height: string | undefined;
            animation: import("../../index.ts").TSkeletonAnimation | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
