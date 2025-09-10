import { type PropType } from 'vue';
import type { IIconAttributes } from './types.d';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        default: string | number | import("../../types/types").ISize | undefined;
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
        default: string | number | import("../../types/types").ISize | undefined;
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
    size: string | number | import("../../types/types").ISize | undefined;
    width: string | number | undefined;
    height: string | number | undefined;
    alt: string | undefined;
    icon: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
