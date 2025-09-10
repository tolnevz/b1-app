import { type PropType } from 'vue';
import type { IButtonAttributes, IButtonEvents } from './types.d';
import { type IIconAttributes } from '../icon';
import { type TClasses, type ILoading } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    href: {
        type: PropType<IButtonAttributes["href"]>;
        default: string | undefined;
    };
    icon: {
        type: PropType<IButtonAttributes["icon"]>;
        default: any;
    };
    outlined: {
        type: PropType<IButtonAttributes["outlined"]>;
        default: boolean | undefined;
    };
    plain: {
        type: PropType<IButtonAttributes["plain"]>;
        default: boolean | undefined;
    };
    simple: {
        type: PropType<IButtonAttributes["simple"]>;
        default: boolean | undefined;
    };
    target: {
        type: PropType<IButtonAttributes["target"]>;
        default: import("./types.d").TTarget | undefined;
    };
    to: {
        type: PropType<IButtonAttributes["to"]>;
        default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    };
    type: {
        type: PropType<IButtonAttributes["type"]>;
        default: import("../../types").TComponentVariantType | undefined;
    };
    form: {
        type: PropType<IButtonAttributes["form"]>;
        default: import("./types.d").TFormType | undefined;
    };
    loading: {
        type: PropType<IButtonAttributes["loading"]>;
        default: boolean | ILoading | undefined;
    };
    sizeControl: {
        type: PropType<IButtonAttributes["sizeControl"]>;
        default: import("../../types").TSizeControl | undefined;
    };
    asLabel: {
        type: PropType<IButtonAttributes["asLabel"]>;
        default: boolean | undefined;
    };
    onPropClick: {
        type: PropType<IButtonEvents["onPropClick"]>;
        default: import("../../types").IEventHandler | undefined;
    };
}>, {}, {
    cssClass: string;
    iconProps: IIconAttributes | null;
    stateDisabled: boolean;
    stateLoading: ILoading;
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
    setLoading(value: boolean | ILoading): void;
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
        type: PropType<IButtonAttributes["href"]>;
        default: string | undefined;
    };
    icon: {
        type: PropType<IButtonAttributes["icon"]>;
        default: any;
    };
    outlined: {
        type: PropType<IButtonAttributes["outlined"]>;
        default: boolean | undefined;
    };
    plain: {
        type: PropType<IButtonAttributes["plain"]>;
        default: boolean | undefined;
    };
    simple: {
        type: PropType<IButtonAttributes["simple"]>;
        default: boolean | undefined;
    };
    target: {
        type: PropType<IButtonAttributes["target"]>;
        default: import("./types.d").TTarget | undefined;
    };
    to: {
        type: PropType<IButtonAttributes["to"]>;
        default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    };
    type: {
        type: PropType<IButtonAttributes["type"]>;
        default: import("../../types").TComponentVariantType | undefined;
    };
    form: {
        type: PropType<IButtonAttributes["form"]>;
        default: import("./types.d").TFormType | undefined;
    };
    loading: {
        type: PropType<IButtonAttributes["loading"]>;
        default: boolean | ILoading | undefined;
    };
    sizeControl: {
        type: PropType<IButtonAttributes["sizeControl"]>;
        default: import("../../types").TSizeControl | undefined;
    };
    asLabel: {
        type: PropType<IButtonAttributes["asLabel"]>;
        default: boolean | undefined;
    };
    onPropClick: {
        type: PropType<IButtonEvents["onPropClick"]>;
        default: import("../../types").IEventHandler | undefined;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: import("../../types").TComponentVariantType | undefined;
    form: import("./types.d").TFormType | undefined;
    icon: any;
    href: string | undefined;
    outlined: boolean | undefined;
    plain: boolean | undefined;
    simple: boolean | undefined;
    target: import("./types.d").TTarget | undefined;
    to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    loading: boolean | ILoading | undefined;
    sizeControl: import("../../types").TSizeControl | undefined;
    asLabel: boolean | undefined;
    onPropClick: import("../../types").IEventHandler | undefined;
}, {}, {
    BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        alt: {
            type: PropType<IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<IIconAttributes["size"]>;
            default: string | number | import("../../types").ISize | undefined;
        };
        width: {
            type: PropType<IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<IIconAttributes["height"]>;
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
            type: PropType<IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<IIconAttributes["size"]>;
            default: string | number | import("../../types").ISize | undefined;
        };
        width: {
            type: PropType<IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<IIconAttributes["height"]>;
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
            type: PropType<import("./../spinner").ISpinnerAttributes["borderSize"]>;
            default: number | undefined;
        };
        size: {
            type: PropType<import("./../spinner").ISpinnerAttributes["size"]>;
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
            type: PropType<import("./../spinner").ISpinnerAttributes["borderSize"]>;
            default: number | undefined;
        };
        size: {
            type: PropType<import("./../spinner").ISpinnerAttributes["size"]>;
            default: import("../../types").TSizeControl;
        };
    }>> & Readonly<{}>, {
        size: import("../../types").TSizeControl;
        borderSize: number | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        width: {
            type: PropType<import("../skeleton").ISkeletonAttributes["width"]>;
            default: string | undefined;
        };
        height: {
            type: PropType<import("../skeleton").ISkeletonAttributes["height"]>;
            default: string | undefined;
        };
        type: {
            type: PropType<import("../skeleton").ISkeletonAttributes["type"]>;
            default: import("../skeleton").TSkeletonType | undefined;
        };
        animation: {
            type: PropType<import("../skeleton").ISkeletonAttributes["animation"]>;
            default: import("../skeleton").TSkeletonAnimation | undefined;
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
            type: PropType<import("../skeleton").ISkeletonAttributes["width"]>;
            default: string | undefined;
        };
        height: {
            type: PropType<import("../skeleton").ISkeletonAttributes["height"]>;
            default: string | undefined;
        };
        type: {
            type: PropType<import("../skeleton").ISkeletonAttributes["type"]>;
            default: import("../skeleton").TSkeletonType | undefined;
        };
        animation: {
            type: PropType<import("../skeleton").ISkeletonAttributes["animation"]>;
            default: import("../skeleton").TSkeletonAnimation | undefined;
        };
    }>> & Readonly<{}>, {
        type: import("../skeleton").TSkeletonType | undefined;
        width: string | undefined;
        height: string | undefined;
        animation: import("../skeleton").TSkeletonAnimation | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
