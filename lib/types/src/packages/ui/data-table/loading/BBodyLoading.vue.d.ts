import { type PropType } from 'vue';
import type { IBodyLoadingAttributes } from './types';
import { type TClasses } from '../../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    loading: {
        type: PropType<IBodyLoadingAttributes["loading"]>;
        default: any;
    };
    offsetTopOverlay: {
        type: PropType<IBodyLoadingAttributes["offsetTopOverlay"]>;
        default: number | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    classes(): TClasses;
    styles(): Record<string, string>;
    hasLoading(): boolean;
    hasSpinner(): boolean;
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
    loading: {
        type: PropType<IBodyLoadingAttributes["loading"]>;
        default: any;
    };
    offsetTopOverlay: {
        type: PropType<IBodyLoadingAttributes["offsetTopOverlay"]>;
        default: number | undefined;
    };
}>> & Readonly<{}>, {
    loading: any;
    offsetTopOverlay: number | undefined;
}, {}, {
    BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        borderSize: {
            type: PropType<import("./../../spinner").ISpinnerAttributes["borderSize"]>;
            default: number | undefined;
        };
        size: {
            type: PropType<import("./../../spinner").ISpinnerAttributes["size"]>;
            default: import("../../../types").TSizeControl;
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
        borderSize: {
            type: PropType<import("./../../spinner").ISpinnerAttributes["borderSize"]>;
            default: number | undefined;
        };
        size: {
            type: PropType<import("./../../spinner").ISpinnerAttributes["size"]>;
            default: import("../../../types").TSizeControl;
        };
    }>> & Readonly<{}>, {
        size: import("../../../types").TSizeControl;
        borderSize: number | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        teleportTo: {
            type: PropType<import("./../../overlay").IOverlayAttributes["teleportTo"]>;
            default: string | Boolean | HTMLElement | undefined;
        };
        transparent: {
            type: PropType<import("./../../overlay").IOverlayAttributes["transparent"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("./../../overlay").IOverlayAttributes["visible"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): TClasses;
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
        teleportTo: {
            type: PropType<import("./../../overlay").IOverlayAttributes["teleportTo"]>;
            default: string | Boolean | HTMLElement | undefined;
        };
        transparent: {
            type: PropType<import("./../../overlay").IOverlayAttributes["transparent"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("./../../overlay").IOverlayAttributes["visible"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{}>, {
        visible: boolean | undefined;
        teleportTo: string | Boolean | HTMLElement | undefined;
        transparent: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
