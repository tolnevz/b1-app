import { type PropType } from 'vue';
import type { IToastItemAttributes } from './types';
import { type TClasses } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    header: {
        type: PropType<IToastItemAttributes["header"]>;
        default: string | undefined;
    };
    type: {
        type: PropType<IToastItemAttributes["type"]>;
        default: import("../../types").TComponentVariantType;
    };
    icon: {
        type: PropType<IToastItemAttributes["icon"]>;
        default: boolean | undefined;
    };
    closable: {
        type: PropType<IToastItemAttributes["closable"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
    datetime: string;
    icons: {
        danger: string;
        primary: string;
        warning: string;
        success: string;
        secondary: string;
    };
}, {
    classes(): TClasses;
}, {
    onHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<import("../control").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../control").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../control").IControlAttributes["focused"]>;
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
        type: PropType<import("../control").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../control").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../control").IControlAttributes["focused"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:focused"?: ((...args: any[]) => any) | undefined;
}>, {
    text: string | number | undefined;
    disabled: boolean | undefined;
    focused: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "hide"[], "hide", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: PropType<IToastItemAttributes["header"]>;
        default: string | undefined;
    };
    type: {
        type: PropType<IToastItemAttributes["type"]>;
        default: import("../../types").TComponentVariantType;
    };
    icon: {
        type: PropType<IToastItemAttributes["icon"]>;
        default: boolean | undefined;
    };
    closable: {
        type: PropType<IToastItemAttributes["closable"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onHide?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("../../types").TComponentVariantType;
    header: string | undefined;
    icon: boolean | undefined;
    closable: boolean | undefined;
}, {}, {
    BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        href: {
            type: PropType<import("./../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("./../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("./../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("./../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("./../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("./../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("./../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("./../button").IButtonAttributes["type"]>;
            default: import("../../types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("./../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("./../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("./../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("./../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("./../button").IButtonEvents["onPropClick"]>;
            default: import("../../types").IEventHandler | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("./../icon").IIconAttributes | null;
        stateDisabled: boolean;
        stateLoading: import("../../types").ILoading;
    }, {
        getComponentParams(): {
            tag: string;
            attrs: Record<string, any>;
        };
        attrs(): Record<string, any>;
        classes(): TClasses;
        getComponent(): string;
        listeners(): Record<string, any>;
    }, {
        onClick(event: MouseEvent): void;
        setLoading(value: boolean | import("../../types").ILoading): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../control").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../control").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../control").IControlAttributes["focused"]>;
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
            type: PropType<import("../control").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../control").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../control").IControlAttributes["focused"]>;
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
            type: PropType<import("./../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("./../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("./../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("./../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("./../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("./../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("./../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("./../button").IButtonAttributes["type"]>;
            default: import("../../types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("./../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("./../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("./../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("./../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("./../button").IButtonEvents["onPropClick"]>;
            default: import("../../types").IEventHandler | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        type: import("../../types").TComponentVariantType | undefined;
        form: import("../button/types").TFormType | undefined;
        icon: any;
        href: string | undefined;
        outlined: boolean | undefined;
        plain: boolean | undefined;
        simple: boolean | undefined;
        target: import("../button/types").TTarget | undefined;
        to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        loading: boolean | import("../../types").ILoading | undefined;
        sizeControl: import("../../types").TSizeControl | undefined;
        asLabel: boolean | undefined;
        onPropClick: import("../../types").IEventHandler | undefined;
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
                default: string | number | import("../../types").ISize | undefined;
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
                default: string | number | import("../../types").ISize | undefined;
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
            size: string | number | import("../../types").ISize | undefined;
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
                default: import("../../types").TSizeControl;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): TClasses;
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
                default: import("../../types").TSizeControl;
            };
        }>> & Readonly<{}>, {
            size: import("../../types").TSizeControl;
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
            classes(): TClasses;
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
            default: string | number | import("../../types").ISize | undefined;
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
            default: string | number | import("../../types").ISize | undefined;
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
        size: string | number | import("../../types").ISize | undefined;
        width: string | number | undefined;
        height: string | number | undefined;
        alt: string | undefined;
        icon: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
