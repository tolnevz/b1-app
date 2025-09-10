declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {
    onClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sizeControl: {
        type: import("vue").PropType<import("./types").IButtonCollectionAttributes["sizeControl"]>;
        default: import("../../types/types").TSizeControl | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    effectiveSizeControl(): import("../../types/types").ESizeControl;
    effectiveDisabled(): boolean;
}, {
    onClick(event: MouseEvent): void;
}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sizeControl: {
        type: import("vue").PropType<import("./types").IButtonCollectionAttributes["sizeControl"]>;
        default: import("../../types/types").TSizeControl | undefined;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    sizeControl: import("../../types/types").TSizeControl | undefined;
}, {}, {
    BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        href: {
            type: import("vue").PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: import("vue").PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: import("vue").PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: import("vue").PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: import("vue").PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: import("vue").PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: import("vue").PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: import("vue").PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: import("vue").PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: import("vue").PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: import("vue").PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: import("vue").PropType<import("../button").IButtonEvents["onPropClick"]>;
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
            type: import("vue").PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: import("vue").PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: import("vue").PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: import("vue").PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: import("vue").PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: import("vue").PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: import("vue").PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: import("vue").PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: import("vue").PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: import("vue").PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: import("vue").PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: import("vue").PropType<import("../button").IButtonEvents["onPropClick"]>;
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
                type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../types/types").ISize | undefined;
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
                default: string | number | import("../../types/types").ISize | undefined;
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
            size: string | number | import("../../types/types").ISize | undefined;
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
                default: import("../../types/types").TSizeControl;
            };
        }>> & Readonly<{}>, {
            size: import("../../types/types").TSizeControl;
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
            classes(): import("../../types/types").TClasses;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<{}> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {
    BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        href: {
            type: import("vue").PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: import("vue").PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: import("vue").PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: import("vue").PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: import("vue").PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: import("vue").PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: import("vue").PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: import("vue").PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: import("vue").PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: import("vue").PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: import("vue").PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: import("vue").PropType<import("../button").IButtonEvents["onPropClick"]>;
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
            type: import("vue").PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: import("vue").PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: import("vue").PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: import("vue").PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: import("vue").PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: import("vue").PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: import("vue").PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        form: {
            type: import("vue").PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: import("vue").PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types/types").ILoading | undefined;
        };
        sizeControl: {
            type: import("vue").PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types/types").TSizeControl | undefined;
        };
        asLabel: {
            type: import("vue").PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: import("vue").PropType<import("../button").IButtonEvents["onPropClick"]>;
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
                type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../types/types").ISize | undefined;
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
                default: string | number | import("../../types/types").ISize | undefined;
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
            size: string | number | import("../../types/types").ISize | undefined;
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
                default: import("../../types/types").TSizeControl;
            };
        }>> & Readonly<{}>, {
            size: import("../../types/types").TSizeControl;
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
            classes(): import("../../types/types").TClasses;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
