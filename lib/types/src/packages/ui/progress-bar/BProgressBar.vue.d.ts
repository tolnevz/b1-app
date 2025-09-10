import { type PropType } from 'vue';
import type { IProgressBarAttributes } from './types';
import type { TClasses } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<IProgressBarAttributes["value"]>;
        default: number | undefined;
    };
    showValue: {
        type: PropType<IProgressBarAttributes["showValue"]>;
        default: boolean | undefined;
    };
    max: {
        type: PropType<IProgressBarAttributes["max"]>;
        default: number | undefined;
    };
    mode: {
        type: PropType<IProgressBarAttributes["mode"]>;
        default: import("./types").TProgressBarMode | undefined;
    };
    type: {
        type: PropType<IProgressBarAttributes["type"]>;
        default: import("../../types").TComponentVariantType | undefined;
    };
    unit: {
        type: PropType<IProgressBarAttributes["unit"]>;
        default: string | undefined;
    };
    bgSimilar: {
        type: PropType<IProgressBarAttributes["bgSimilar"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    classes(): TClasses;
    stylesProgress(): string;
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
    value: {
        type: PropType<IProgressBarAttributes["value"]>;
        default: number | undefined;
    };
    showValue: {
        type: PropType<IProgressBarAttributes["showValue"]>;
        default: boolean | undefined;
    };
    max: {
        type: PropType<IProgressBarAttributes["max"]>;
        default: number | undefined;
    };
    mode: {
        type: PropType<IProgressBarAttributes["mode"]>;
        default: import("./types").TProgressBarMode | undefined;
    };
    type: {
        type: PropType<IProgressBarAttributes["type"]>;
        default: import("../../types").TComponentVariantType | undefined;
    };
    unit: {
        type: PropType<IProgressBarAttributes["unit"]>;
        default: string | undefined;
    };
    bgSimilar: {
        type: PropType<IProgressBarAttributes["bgSimilar"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{}>, {
    type: import("../../types").TComponentVariantType | undefined;
    value: number | undefined;
    mode: import("./types").TProgressBarMode | undefined;
    max: number | undefined;
    showValue: boolean | undefined;
    unit: string | undefined;
    bgSimilar: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
