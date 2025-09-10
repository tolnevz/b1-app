import { type PropType } from 'vue';
import type { ICollectionItemAttributes } from './types.d';
import { type IIconAttributes } from '../icon';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    component: {
        type: PropType<ICollectionItemAttributes["component"]>;
        default: string;
    };
    text: {
        type: PropType<ICollectionItemAttributes["text"]>;
        default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
    };
    icon: {
        type: PropType<ICollectionItemAttributes["icon"]>;
        default: any;
    };
    selected: {
        type: PropType<ICollectionItemAttributes["selected"]>;
        default: boolean | undefined;
    };
    readonly: {
        type: PropType<ICollectionItemAttributes["readonly"]>;
        default: boolean | undefined;
    };
    required: {
        type: PropType<ICollectionItemAttributes["required"]>;
        default: boolean | undefined;
    };
    meta: {
        type: PropType<ICollectionItemAttributes["meta"]>;
        default: any;
    };
    toggleable: {
        type: PropType<ICollectionItemAttributes["toggleable"]>;
        default: boolean | undefined;
    };
    draggable: {
        type: PropType<ICollectionItemAttributes["draggable"]>;
        default: boolean | undefined;
    };
    onPropClick: {
        type: PropType<ICollectionItemAttributes["onPropClick"]>;
        default: import("./types.d").IEventItemClick | undefined;
    };
    onPropSelected: {
        type: PropType<ICollectionItemAttributes["onPropSelected"]>;
        default: import("./types.d").IEventSelected | undefined;
    };
}>, {}, {
    cssClass: string;
    iconProps: IIconAttributes | null;
    stateSelected: boolean;
    draggedIndex: number;
}, {
    classIcon(): string;
    classText(): string;
    itemComponent(): any;
}, {
    onClick(event: Event): void;
    toggle(): void;
    /**
     * Drag start
     * @param {DragEvent} event
     */
    onDragStart(event: DragEvent): void;
    /**
     * Drag end
     */
    onDragEnd(event: DragEvent): void;
    /**
     * Drag over
     * @param {DragEvent} event
     */
    onDragOver(event: DragEvent): void;
    /**
     * Drop
     * @param {DragEvent} event
     */
    onDrop(event: DragEvent): void;
    /**
     * Drag enter
     * @param {DragEvent} event
     */
    onDragEnter(event: DragEvent): void;
    /**
     * Drag leave
     * @param {DragEvent} event
     */
    onDragLeave(event: DragEvent): void;
}, import("../../types/types").TClassesMixin | {
    computed: {
        attributes(): import("../../types/types").TAttributes;
    };
}, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("../control-value").IControlValueAttributes["value"]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: PropType<import("../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../index.ts").IControlAttributes["focused"]>;
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
        type: PropType<import("../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: PropType<import("../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: PropType<import("../index.ts").IControlAttributes["focused"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:focused"?: ((...args: any[]) => any) | undefined;
}>, {
    text: string | number | undefined;
    disabled: boolean | undefined;
    focused: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "update:value"[], "update:value", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("../control-value").IControlValueAttributes["value"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    component: {
        type: PropType<ICollectionItemAttributes["component"]>;
        default: string;
    };
    text: {
        type: PropType<ICollectionItemAttributes["text"]>;
        default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
    };
    icon: {
        type: PropType<ICollectionItemAttributes["icon"]>;
        default: any;
    };
    selected: {
        type: PropType<ICollectionItemAttributes["selected"]>;
        default: boolean | undefined;
    };
    readonly: {
        type: PropType<ICollectionItemAttributes["readonly"]>;
        default: boolean | undefined;
    };
    required: {
        type: PropType<ICollectionItemAttributes["required"]>;
        default: boolean | undefined;
    };
    meta: {
        type: PropType<ICollectionItemAttributes["meta"]>;
        default: any;
    };
    toggleable: {
        type: PropType<ICollectionItemAttributes["toggleable"]>;
        default: boolean | undefined;
    };
    draggable: {
        type: PropType<ICollectionItemAttributes["draggable"]>;
        default: boolean | undefined;
    };
    onPropClick: {
        type: PropType<ICollectionItemAttributes["onPropClick"]>;
        default: import("./types.d").IEventItemClick | undefined;
    };
    onPropSelected: {
        type: PropType<ICollectionItemAttributes["onPropSelected"]>;
        default: import("./types.d").IEventSelected | undefined;
    };
}>> & Readonly<{
    onDragend?: ((...args: any[]) => any) | undefined;
    onDragenter?: ((...args: any[]) => any) | undefined;
    onDragleave?: ((...args: any[]) => any) | undefined;
    onDragstart?: ((...args: any[]) => any) | undefined;
    onDrop?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
}>, {
    component: any;
    meta: any;
    text: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
    icon: any;
    onPropClick: import("./types.d").IEventItemClick | undefined;
    selected: boolean | undefined;
    readonly: boolean | undefined;
    required: boolean | undefined;
    toggleable: boolean | undefined;
    draggable: boolean | undefined;
    onPropSelected: import("./types.d").IEventSelected | undefined;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
