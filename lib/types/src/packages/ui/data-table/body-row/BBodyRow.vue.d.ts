import { type PropType } from 'vue';
import type { IBodyRowAttributes } from './types';
import { type TClasses } from '../../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    cells: {
        type: PropType<IBodyRowAttributes["cells"]>;
        default: import("../body-cell/types").IBodyCellAttributes[] | undefined;
    };
    uuid: {
        type: PropType<IBodyRowAttributes["uuid"]>;
        required: true;
    };
    selected: {
        type: PropType<IBodyRowAttributes["selected"]>;
        default: boolean;
    };
    evenRow: {
        type: PropType<IBodyRowAttributes["evenRow"]>;
        default: boolean | undefined;
    };
    showSelection: {
        type: PropType<IBodyRowAttributes["showSelection"]>;
        default: boolean | undefined;
    };
    highlighted: {
        type: PropType<IBodyRowAttributes["highlighted"]>;
        default: boolean | undefined;
    };
}>, {}, {}, {
    classes(): TClasses;
    stateSelected(): boolean | undefined;
}, {
    onClick(event: MouseEvent): void;
    onDblClick(event: MouseEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("../../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("../../component").IComponentAttributes["id"];
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
        type: PropType<import("../../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "dblclick" | "cell-click" | "cell-dblclick")[], "click" | "dblclick" | "cell-click" | "cell-dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    cells: {
        type: PropType<IBodyRowAttributes["cells"]>;
        default: import("../body-cell/types").IBodyCellAttributes[] | undefined;
    };
    uuid: {
        type: PropType<IBodyRowAttributes["uuid"]>;
        required: true;
    };
    selected: {
        type: PropType<IBodyRowAttributes["selected"]>;
        default: boolean;
    };
    evenRow: {
        type: PropType<IBodyRowAttributes["evenRow"]>;
        default: boolean | undefined;
    };
    showSelection: {
        type: PropType<IBodyRowAttributes["showSelection"]>;
        default: boolean | undefined;
    };
    highlighted: {
        type: PropType<IBodyRowAttributes["highlighted"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
}>, {
    selected: boolean | undefined;
    highlighted: boolean | undefined;
    showSelection: boolean | undefined;
    evenRow: boolean | undefined;
    cells: import("../body-cell/types").IBodyCellAttributes[] | undefined;
}, {}, {
    BBodyCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        field: {
            type: PropType<import("../body-cell/types").IBodyCellAttributes["field"]>;
            default: string;
        };
        value: {
            type: PropType<import("../body-cell/types").IBodyCellAttributes["value"]>;
            default: any;
        };
        selection: {
            type: PropType<import("../body-cell/types").IBodyCellAttributes["selection"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): TClasses;
        isEmpty(): boolean;
        valueComponent(): any;
        hasLoading(): boolean;
        hasSkeleton(): boolean;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
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
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "dblclick")[], "click" | "dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        field: {
            type: PropType<import("../body-cell/types").IBodyCellAttributes["field"]>;
            default: string;
        };
        value: {
            type: PropType<import("../body-cell/types").IBodyCellAttributes["value"]>;
            default: any;
        };
        selection: {
            type: PropType<import("../body-cell/types").IBodyCellAttributes["selection"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onDblclick?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
        field: string;
        selection: boolean | undefined;
    }, {}, {
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
            classes(): TClasses;
            styles(): {
                width: string;
                height: string;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
    BCheckBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        indeterminate: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["indeterminate"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        marked: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["marked"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateValue: boolean;
        stateType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        stateIndeterminate: boolean | undefined;
        refInput: HTMLInputElement | null;
    }, {
        classes(): TClasses;
        checked(): number;
        getName(): string;
    }, {
        onChange(event: Event): void;
        onFocus(event: FocusEvent): void;
        onBlur(event: FocusEvent): void;
        onClick(event: MouseEvent): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        readonly: {
            type: PropType<import("../../index.ts").IControlInputAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../../index.ts").IControlInputAttributes["required"]>;
            default: boolean | undefined;
        };
        invalid: {
            type: PropType<import("../../index.ts").IControlInputAttributes["invalid"]>;
            default: boolean | undefined;
        };
        state: {
            type: PropType<import("../../index.ts").IControlInputAttributes["state"]>;
            default: import("../../../types").TState | undefined;
        };
    }>, {}, {
        stateText: string | number | undefined;
        stateState: import("../../../types").TState;
        stateInvalid: boolean;
        stateValue: any;
        stateDisabled: boolean;
        stateName: string;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
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
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        readonly: {
            type: PropType<import("../../index.ts").IControlInputAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../../index.ts").IControlInputAttributes["required"]>;
            default: boolean | undefined;
        };
        invalid: {
            type: PropType<import("../../index.ts").IControlInputAttributes["invalid"]>;
            default: boolean | undefined;
        };
        state: {
            type: PropType<import("../../index.ts").IControlInputAttributes["state"]>;
            default: import("../../../types").TState | undefined;
        };
    }>> & Readonly<{}>, {
        readonly: boolean | undefined;
        required: boolean | undefined;
        invalid: boolean | undefined;
        state: import("../../../types").TState | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        indeterminate: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["indeterminate"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        marked: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["marked"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:indeterminate"?: ((...args: any[]) => any) | undefined;
    }>, {
        sizeControl: import("../../../types").TSizeControl | undefined;
        indeterminate: boolean | undefined;
        marked: boolean | undefined;
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
                default: string | number | import("../../../types").ISize | undefined;
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
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                default: string | number | import("../../../types").ISize | undefined;
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
            size: string | number | import("../../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
