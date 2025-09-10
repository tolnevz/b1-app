import { type PropType } from 'vue';
import type { IDialogAttributes } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    closable: {
        type: PropType<IDialogAttributes["closable"]>;
        default: boolean | undefined;
    };
    header: {
        type: PropType<IDialogAttributes["header"]>;
        default: string | undefined;
    };
    height: {
        type: PropType<IDialogAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<IDialogAttributes["width"]>;
        default: string | number | undefined;
    };
    confirmText: {
        type: PropType<IDialogAttributes["confirmText"]>;
        default: string | undefined;
    };
    confirmType: {
        type: PropType<IDialogAttributes["confirmType"]>;
        default: import("../../types/types").TComponentVariantType | undefined;
    };
    fullScreen: {
        type: PropType<IDialogAttributes["fullScreen"]>;
        default: boolean | undefined;
    };
    defaultActions: {
        type: PropType<IDialogAttributes["defaultActions"]>;
        default: boolean | undefined;
    };
}>, {
    t: import("vue-i18n").VueI18nTranslation<{}, string, import("@intlify/core-base").RemoveIndexSignature<{
        [x: string]: import("vue-i18n").LocaleMessageValue<import("vue-i18n").VueMessageType>;
    }>, never, never, never>;
}, {}, {
    confirmButtonText(): string;
}, {
    onConfirm(): Promise<void>;
    onCancel(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<import("../modal").IModalAttributes["align"]>;
        default: import("../../types/types").TAlign | undefined;
    };
    height: {
        type: PropType<import("../modal").IModalAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<import("../modal").IModalAttributes["width"]>;
        default: string | number | undefined;
    };
    closeOnEsc: {
        type: PropType<import("../modal").IModalAttributes["closeOnEsc"]>;
        default: boolean | undefined;
    };
    visible: {
        type: PropType<import("../modal").IModalAttributes["visible"]>;
        default: boolean | undefined;
    };
    modal: {
        type: PropType<import("../modal").IModalAttributes["modal"]>;
        default: boolean | undefined;
    };
    layer: {
        type: PropType<import("../modal").IModalAttributes["layer"]>;
        default: undefined;
    };
    fullScreen: {
        type: PropType<import("../modal").IModalAttributes["fullScreen"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
    stateVisible: boolean;
    cmpOverlay: import("../index.ts").IUseOverlay;
    stateLayer: number | undefined;
}, {
    effectiveWidth(): string;
    effectiveHeight(): string;
    styles(): Record<string, string>;
    classes(): import("../../types/types").TClasses;
}, {
    handleEsc(event: KeyboardEvent): void;
    beforeHide(): boolean;
    afterShow(): void;
    afterHide(): void;
    onAfterLeave(): void;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "closed")[], "update:visible" | "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<import("../modal").IModalAttributes["align"]>;
        default: import("../../types/types").TAlign | undefined;
    };
    height: {
        type: PropType<import("../modal").IModalAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<import("../modal").IModalAttributes["width"]>;
        default: string | number | undefined;
    };
    closeOnEsc: {
        type: PropType<import("../modal").IModalAttributes["closeOnEsc"]>;
        default: boolean | undefined;
    };
    visible: {
        type: PropType<import("../modal").IModalAttributes["visible"]>;
        default: boolean | undefined;
    };
    modal: {
        type: PropType<import("../modal").IModalAttributes["modal"]>;
        default: boolean | undefined;
    };
    layer: {
        type: PropType<import("../modal").IModalAttributes["layer"]>;
        default: undefined;
    };
    fullScreen: {
        type: PropType<import("../modal").IModalAttributes["fullScreen"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
}>, {
    visible: boolean | undefined;
    width: string | number | undefined;
    height: string | number | undefined;
    closeOnEsc: boolean | undefined;
    align: import("../../types/types").TAlign | undefined;
    modal: boolean | undefined;
    layer: number | undefined;
    fullScreen: boolean | undefined;
}, {}, {
    BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        teleportTo: {
            type: PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
            default: string | Boolean | HTMLElement | undefined;
        };
        transparent: {
            type: PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../index.ts").IOverlayAttributes["visible"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): import("../../types/types").TClasses;
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
        teleportTo: {
            type: PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
            default: string | Boolean | HTMLElement | undefined;
        };
        transparent: {
            type: PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../index.ts").IOverlayAttributes["visible"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{}>, {
        visible: boolean | undefined;
        teleportTo: string | Boolean | HTMLElement | undefined;
        transparent: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, () => {
    modalLayer: () => number | undefined;
}, true, {}, any>, ("update:visible" | "cancel" | "closed" | "confirm")[], "update:visible" | "cancel" | "closed" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    closable: {
        type: PropType<IDialogAttributes["closable"]>;
        default: boolean | undefined;
    };
    header: {
        type: PropType<IDialogAttributes["header"]>;
        default: string | undefined;
    };
    height: {
        type: PropType<IDialogAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<IDialogAttributes["width"]>;
        default: string | number | undefined;
    };
    confirmText: {
        type: PropType<IDialogAttributes["confirmText"]>;
        default: string | undefined;
    };
    confirmType: {
        type: PropType<IDialogAttributes["confirmType"]>;
        default: import("../../types/types").TComponentVariantType | undefined;
    };
    fullScreen: {
        type: PropType<IDialogAttributes["fullScreen"]>;
        default: boolean | undefined;
    };
    defaultActions: {
        type: PropType<IDialogAttributes["defaultActions"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    width: string | number | undefined;
    height: string | number | undefined;
    header: string | undefined;
    fullScreen: boolean | undefined;
    closable: boolean | undefined;
    confirmText: string | undefined;
    confirmType: import("../../types/types").TComponentVariantType | undefined;
    defaultActions: boolean | undefined;
}, {}, {
    BModal: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        align: {
            type: PropType<import("../modal").IModalAttributes["align"]>;
            default: import("../../types/types").TAlign | undefined;
        };
        height: {
            type: PropType<import("../modal").IModalAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: PropType<import("../modal").IModalAttributes["width"]>;
            default: string | number | undefined;
        };
        closeOnEsc: {
            type: PropType<import("../modal").IModalAttributes["closeOnEsc"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../modal").IModalAttributes["visible"]>;
            default: boolean | undefined;
        };
        modal: {
            type: PropType<import("../modal").IModalAttributes["modal"]>;
            default: boolean | undefined;
        };
        layer: {
            type: PropType<import("../modal").IModalAttributes["layer"]>;
            default: undefined;
        };
        fullScreen: {
            type: PropType<import("../modal").IModalAttributes["fullScreen"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateVisible: boolean;
        cmpOverlay: import("../index.ts").IUseOverlay;
        stateLayer: number | undefined;
    }, {
        effectiveWidth(): string;
        effectiveHeight(): string;
        styles(): Record<string, string>;
        classes(): import("../../types/types").TClasses;
    }, {
        handleEsc(event: KeyboardEvent): void;
        beforeHide(): boolean;
        afterShow(): void;
        afterHide(): void;
        onAfterLeave(): void;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "closed")[], "update:visible" | "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        align: {
            type: PropType<import("../modal").IModalAttributes["align"]>;
            default: import("../../types/types").TAlign | undefined;
        };
        height: {
            type: PropType<import("../modal").IModalAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: PropType<import("../modal").IModalAttributes["width"]>;
            default: string | number | undefined;
        };
        closeOnEsc: {
            type: PropType<import("../modal").IModalAttributes["closeOnEsc"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../modal").IModalAttributes["visible"]>;
            default: boolean | undefined;
        };
        modal: {
            type: PropType<import("../modal").IModalAttributes["modal"]>;
            default: boolean | undefined;
        };
        layer: {
            type: PropType<import("../modal").IModalAttributes["layer"]>;
            default: undefined;
        };
        fullScreen: {
            type: PropType<import("../modal").IModalAttributes["fullScreen"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
    }>, {
        visible: boolean | undefined;
        width: string | number | undefined;
        height: string | number | undefined;
        closeOnEsc: boolean | undefined;
        align: import("../../types/types").TAlign | undefined;
        modal: boolean | undefined;
        layer: number | undefined;
        fullScreen: boolean | undefined;
    }, {}, {
        BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            teleportTo: {
                type: PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types/types").TClasses;
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
            teleportTo: {
                type: PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            visible: boolean | undefined;
            teleportTo: string | Boolean | HTMLElement | undefined;
            transparent: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, () => {
        modalLayer: () => number | undefined;
    }, true, {}, any>;
    BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        href: {
            type: PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("../button").IButtonEvents["onPropClick"]>;
            default: import("../../types/events").IEventHandler | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../index.ts").IIconAttributes | null;
        stateDisabled: boolean;
        stateLoading: import("../../types/types").ILoading;
    }, {
        getComponentParams(): {
            tag: string;
            attrs: Record<string, any>;
        };
        attrs(): Record<string, any>;
        classes(): import("../../types/types").TClasses;
        getComponent(): string;
        listeners(): Record<string, any>;
    }, {
        onClick(event: MouseEvent): void;
        setLoading(value: boolean | import("../../types/types").ILoading): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        href: {
            type: PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("../button").IButtonEvents["onPropClick"]>;
            default: import("../../types/events").IEventHandler | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        type: import("../../types/types").TComponentVariantType | undefined;
        form: import("../button/types").TFormType | undefined;
        icon: any;
        href: string | undefined;
        outlined: boolean | undefined;
        plain: boolean | undefined;
        simple: boolean | undefined;
        target: import("../button/types").TTarget | undefined;
        to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        loading: boolean | import("../../types/types").ILoading | undefined;
        sizeControl: import("../../types/types").TSizeControl | undefined;
        asLabel: boolean | undefined;
        onPropClick: import("../../types/events").IEventHandler | undefined;
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
                default: string | number | import("../../types/types").ISize | undefined;
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
                default: string | number | import("../../types/types").ISize | undefined;
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
            size: string | number | import("../../types/types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            borderSize: {
                type: PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                default: number | undefined;
            };
            size: {
                type: PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                default: import("../../types/types").TSizeControl;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types/types").TClasses;
            styles(): {
                borderWidth: string;
            };
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
            borderSize: {
                type: PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                default: number | undefined;
            };
            size: {
                type: PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                default: import("../../types/types").TSizeControl;
            };
        }>> & Readonly<{}>, {
            size: import("../../types/types").TSizeControl;
            borderSize: number | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            width: {
                type: PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                default: string | undefined;
            };
            height: {
                type: PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                default: import("../index.ts").TSkeletonType | undefined;
            };
            animation: {
                type: PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                default: import("../index.ts").TSkeletonAnimation | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types/types").TClasses;
            styles(): {
                width: string;
                height: string;
            };
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
            width: {
                type: PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                default: string | undefined;
            };
            height: {
                type: PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                default: import("../index.ts").TSkeletonType | undefined;
            };
            animation: {
                type: PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                default: import("../index.ts").TSkeletonAnimation | undefined;
            };
        }>> & Readonly<{}>, {
            type: import("../index.ts").TSkeletonType | undefined;
            width: string | undefined;
            height: string | undefined;
            animation: import("../index.ts").TSkeletonAnimation | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
