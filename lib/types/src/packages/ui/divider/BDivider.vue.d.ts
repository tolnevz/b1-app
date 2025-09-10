import { type PropType } from 'vue';
import type { IDividerAttributes } from './types';
import { type TClasses, EDirection } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    vertical: {
        type: PropType<IDividerAttributes["vertical"]>;
        default: boolean | undefined;
    };
    type: {
        type: PropType<IDividerAttributes["type"]>;
        default: import("../../types").TTypeBorder | undefined;
    };
    text: {
        type: PropType<IDividerAttributes["text"]>;
        default: string | undefined;
    };
    textAlign: {
        type: PropType<IDividerAttributes["textAlign"]>;
        default: import("../../types").TAlign | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    classes(): TClasses;
    direction(): EDirection;
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
    vertical: {
        type: PropType<IDividerAttributes["vertical"]>;
        default: boolean | undefined;
    };
    type: {
        type: PropType<IDividerAttributes["type"]>;
        default: import("../../types").TTypeBorder | undefined;
    };
    text: {
        type: PropType<IDividerAttributes["text"]>;
        default: string | undefined;
    };
    textAlign: {
        type: PropType<IDividerAttributes["textAlign"]>;
        default: import("../../types").TAlign | undefined;
    };
}>> & Readonly<{}>, {
    type: import("../../types").TTypeBorder | undefined;
    text: string | undefined;
    vertical: boolean | undefined;
    textAlign: import("../../types").TAlign | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
