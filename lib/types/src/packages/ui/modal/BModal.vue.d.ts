import { type PropType } from 'vue';
import type { IModalAttributes } from './types.d';
import type { TClasses } from './../../types';
import { type IUseOverlay } from '../overlay';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<IModalAttributes["align"]>;
        default: import("./../../types").TAlign | undefined;
    };
    height: {
        type: PropType<IModalAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<IModalAttributes["width"]>;
        default: string | number | undefined;
    };
    closeOnEsc: {
        type: PropType<IModalAttributes["closeOnEsc"]>;
        default: boolean | undefined;
    };
    visible: {
        type: PropType<IModalAttributes["visible"]>;
        default: boolean | undefined;
    };
    modal: {
        type: PropType<IModalAttributes["modal"]>;
        default: boolean | undefined;
    };
    layer: {
        type: PropType<IModalAttributes["layer"]>;
        default: undefined;
    };
    fullScreen: {
        type: PropType<IModalAttributes["fullScreen"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
    stateVisible: boolean;
    cmpOverlay: IUseOverlay;
    stateLayer: number | undefined;
}, {
    effectiveWidth(): string;
    effectiveHeight(): string;
    styles(): Record<string, string>;
    classes(): TClasses;
}, {
    handleEsc(event: KeyboardEvent): void;
    beforeHide(): boolean;
    afterShow(): void;
    afterHide(): void;
    onAfterLeave(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("../component").IComponentAttributes["id"];
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
        type: PropType<import("../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../component").IComponentAttributes["hidden"]>;
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
        type: PropType<IModalAttributes["align"]>;
        default: import("./../../types").TAlign | undefined;
    };
    height: {
        type: PropType<IModalAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<IModalAttributes["width"]>;
        default: string | number | undefined;
    };
    closeOnEsc: {
        type: PropType<IModalAttributes["closeOnEsc"]>;
        default: boolean | undefined;
    };
    visible: {
        type: PropType<IModalAttributes["visible"]>;
        default: boolean | undefined;
    };
    modal: {
        type: PropType<IModalAttributes["modal"]>;
        default: boolean | undefined;
    };
    layer: {
        type: PropType<IModalAttributes["layer"]>;
        default: undefined;
    };
    fullScreen: {
        type: PropType<IModalAttributes["fullScreen"]>;
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
    align: import("./../../types").TAlign | undefined;
    modal: boolean | undefined;
    layer: number | undefined;
    fullScreen: boolean | undefined;
}, {}, {
    BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        teleportTo: {
            type: PropType<import("../overlay").IOverlayAttributes["teleportTo"]>;
            default: string | Boolean | HTMLElement | undefined;
        };
        transparent: {
            type: PropType<import("../overlay").IOverlayAttributes["transparent"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../overlay").IOverlayAttributes["visible"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): TClasses;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../overlay").IOverlayAttributes["teleportTo"]>;
            default: string | Boolean | HTMLElement | undefined;
        };
        transparent: {
            type: PropType<import("../overlay").IOverlayAttributes["transparent"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../overlay").IOverlayAttributes["visible"]>;
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
export default _default;
