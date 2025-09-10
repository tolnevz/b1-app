import { type PropType } from 'vue';
import type { ISkeletonAttributes } from './types.d';
import type { TClasses } from './../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<ISkeletonAttributes["width"]>;
        default: string | undefined;
    };
    height: {
        type: PropType<ISkeletonAttributes["height"]>;
        default: string | undefined;
    };
    type: {
        type: PropType<ISkeletonAttributes["type"]>;
        default: import("./types.d").TSkeletonType | undefined;
    };
    animation: {
        type: PropType<ISkeletonAttributes["animation"]>;
        default: import("./types.d").TSkeletonAnimation | undefined;
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
    width: {
        type: PropType<ISkeletonAttributes["width"]>;
        default: string | undefined;
    };
    height: {
        type: PropType<ISkeletonAttributes["height"]>;
        default: string | undefined;
    };
    type: {
        type: PropType<ISkeletonAttributes["type"]>;
        default: import("./types.d").TSkeletonType | undefined;
    };
    animation: {
        type: PropType<ISkeletonAttributes["animation"]>;
        default: import("./types.d").TSkeletonAnimation | undefined;
    };
}>> & Readonly<{}>, {
    type: import("./types.d").TSkeletonType | undefined;
    width: string | undefined;
    height: string | undefined;
    animation: import("./types.d").TSkeletonAnimation | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
