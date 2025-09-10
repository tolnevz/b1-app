import { type PropType } from 'vue';
import type { IProgressBarCircularAttributes } from './types';
import type { TClasses } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<IProgressBarCircularAttributes["size"]>;
        default: number | undefined;
    };
    strokeWidth: {
        type: PropType<IProgressBarCircularAttributes["strokeWidth"]>;
        default: number | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    styles(): string;
    viewBox(): string;
    halfSize(): number;
    radius(): number;
    circumference(): number;
    dash(): number;
}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["value"]>;
        default: number | undefined;
    };
    showValue: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["showValue"]>;
        default: boolean | undefined;
    };
    max: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["max"]>;
        default: number | undefined;
    };
    mode: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["mode"]>;
        default: import("../progress-bar").TProgressBarMode | undefined;
    };
    type: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["type"]>;
        default: import("../../types").TComponentVariantType | undefined;
    };
    unit: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["unit"]>;
        default: string | undefined;
    };
    bgSimilar: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["bgSimilar"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    classes(): TClasses;
    stylesProgress(): string;
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
    value: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["value"]>;
        default: number | undefined;
    };
    showValue: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["showValue"]>;
        default: boolean | undefined;
    };
    max: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["max"]>;
        default: number | undefined;
    };
    mode: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["mode"]>;
        default: import("../progress-bar").TProgressBarMode | undefined;
    };
    type: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["type"]>;
        default: import("../../types").TComponentVariantType | undefined;
    };
    unit: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["unit"]>;
        default: string | undefined;
    };
    bgSimilar: {
        type: PropType<import("../progress-bar").IProgressBarAttributes["bgSimilar"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{}>, {
    type: import("../../types").TComponentVariantType | undefined;
    value: number | undefined;
    mode: import("../progress-bar").TProgressBarMode | undefined;
    max: number | undefined;
    showValue: boolean | undefined;
    unit: string | undefined;
    bgSimilar: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<IProgressBarCircularAttributes["size"]>;
        default: number | undefined;
    };
    strokeWidth: {
        type: PropType<IProgressBarCircularAttributes["strokeWidth"]>;
        default: number | undefined;
    };
}>> & Readonly<{}>, {
    size: number | undefined;
    strokeWidth: number | undefined;
}, {}, {
    BProgressBar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["value"]>;
            default: number | undefined;
        };
        showValue: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["showValue"]>;
            default: boolean | undefined;
        };
        max: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["max"]>;
            default: number | undefined;
        };
        mode: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["mode"]>;
            default: import("../progress-bar").TProgressBarMode | undefined;
        };
        type: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["type"]>;
            default: import("../../types").TComponentVariantType | undefined;
        };
        unit: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["unit"]>;
            default: string | undefined;
        };
        bgSimilar: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["bgSimilar"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): TClasses;
        stylesProgress(): string;
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
        value: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["value"]>;
            default: number | undefined;
        };
        showValue: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["showValue"]>;
            default: boolean | undefined;
        };
        max: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["max"]>;
            default: number | undefined;
        };
        mode: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["mode"]>;
            default: import("../progress-bar").TProgressBarMode | undefined;
        };
        type: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["type"]>;
            default: import("../../types").TComponentVariantType | undefined;
        };
        unit: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["unit"]>;
            default: string | undefined;
        };
        bgSimilar: {
            type: PropType<import("../progress-bar").IProgressBarAttributes["bgSimilar"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{}>, {
        type: import("../../types").TComponentVariantType | undefined;
        value: number | undefined;
        mode: import("../progress-bar").TProgressBarMode | undefined;
        max: number | undefined;
        showValue: boolean | undefined;
        unit: string | undefined;
        bgSimilar: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
