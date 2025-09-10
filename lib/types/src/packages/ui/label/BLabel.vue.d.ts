import { type PropType } from 'vue';
import type { ILabelAttributes } from './types';
import type { TClasses } from './../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<ILabelAttributes["text"]>;
        default: string | undefined;
    };
    align: {
        type: PropType<ILabelAttributes["align"]>;
        default: import("./../../types").TAlign | undefined;
    };
    required: {
        type: PropType<ILabelAttributes["required"]>;
        default: boolean | undefined;
    };
    placementRequired: {
        type: PropType<ILabelAttributes["placementRequired"]>;
        default: import("./types").TPlacementRequired | undefined;
    };
}>, {}, {
    cssClass: string;
    inputId: string;
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
    text: {
        type: PropType<ILabelAttributes["text"]>;
        default: string | undefined;
    };
    align: {
        type: PropType<ILabelAttributes["align"]>;
        default: import("./../../types").TAlign | undefined;
    };
    required: {
        type: PropType<ILabelAttributes["required"]>;
        default: boolean | undefined;
    };
    placementRequired: {
        type: PropType<ILabelAttributes["placementRequired"]>;
        default: import("./types").TPlacementRequired | undefined;
    };
}>> & Readonly<{}>, {
    text: string | undefined;
    required: boolean | undefined;
    align: import("./../../types").TAlign | undefined;
    placementRequired: import("./types").TPlacementRequired | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
