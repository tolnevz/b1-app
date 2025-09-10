import { type PropType } from 'vue';
import type { IMenuSubAttributes } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IMenuSubAttributes["items"]>;
        default: import("../menu-item").IMenuItemAttributes[] | undefined;
    };
    level: {
        type: PropType<IMenuSubAttributes["level"]>;
        default: number | undefined;
    };
}>, {}, {}, {}, {
    onClick(data: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IMenuSubAttributes["items"]>;
        default: import("../menu-item").IMenuItemAttributes[] | undefined;
    };
    level: {
        type: PropType<IMenuSubAttributes["level"]>;
        default: number | undefined;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    items: import("../menu-item").IMenuItemAttributes[] | undefined;
    level: number | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
