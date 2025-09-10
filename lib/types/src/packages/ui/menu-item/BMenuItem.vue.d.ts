import { type PropType } from 'vue';
import type { IMenuItemAttributes } from './types.d';
import type { TClasses } from './../../types';
import { type ICollectionItemAttributes } from '../collection-item';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    asCollapse: {
        type: PropType<IMenuItemAttributes["asCollapse"]>;
        default: boolean | undefined;
    };
    asHeader: {
        type: PropType<IMenuItemAttributes["asHeader"]>;
        default: boolean | undefined;
    };
    items: {
        type: PropType<IMenuItemAttributes["items"]>;
        default: IMenuItemAttributes[] | undefined;
    };
    level: {
        type: PropType<IMenuItemAttributes["level"]>;
        default: number | undefined;
    };
    expanded: {
        type: PropType<IMenuItemAttributes["expanded"]>;
        default: boolean | undefined;
    };
}>, {}, {}, {
    classes(): TClasses;
    styles(): Record<string, string>;
}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        default: import("../collection-item").IEventItemClick | undefined;
    };
    onPropSelected: {
        type: PropType<ICollectionItemAttributes["onPropSelected"]>;
        default: import("../collection-item").IEventSelected | undefined;
    };
}>, {}, {
    cssClass: string;
    iconProps: import("../index.ts").IIconAttributes | null;
    stateSelected: boolean;
    draggedIndex: number;
}, {
    classIcon(): string;
    classText(): string;
    itemComponent(): any;
}, {
    onClick(event: Event): void;
    toggle(): void;
    onDragStart(event: DragEvent): void;
    onDragEnd(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    onDragEnter(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
}, import("../../types/types").TClassesMixin | {
    computed: {
        attributes(): import("./../../types").TAttributes;
    };
}, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
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
        type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
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
        default: import("../collection-item").IEventItemClick | undefined;
    };
    onPropSelected: {
        type: PropType<ICollectionItemAttributes["onPropSelected"]>;
        default: import("../collection-item").IEventSelected | undefined;
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
    onPropClick: import("../collection-item").IEventItemClick | undefined;
    selected: boolean | undefined;
    readonly: boolean | undefined;
    required: boolean | undefined;
    toggleable: boolean | undefined;
    draggable: boolean | undefined;
    onPropSelected: import("../collection-item").IEventSelected | undefined;
}, {}, {
    BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        alt: {
            type: PropType<import("../index.ts").IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../index.ts").IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<import("../index.ts").IIconAttributes["size"]>;
            default: string | number | import("./../../types").ISize | undefined;
        };
        width: {
            type: PropType<import("../index.ts").IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
            type: PropType<import("../index.ts").IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../index.ts").IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<import("../index.ts").IIconAttributes["size"]>;
            default: string | number | import("./../../types").ISize | undefined;
        };
        width: {
            type: PropType<import("../index.ts").IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<import("../index.ts").IIconAttributes["height"]>;
            default: string | number | undefined;
        };
    }>> & Readonly<{}>, {
        size: string | number | import("./../../types").ISize | undefined;
        width: string | number | undefined;
        height: string | number | undefined;
        alt: string | undefined;
        icon: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    asCollapse: {
        type: PropType<IMenuItemAttributes["asCollapse"]>;
        default: boolean | undefined;
    };
    asHeader: {
        type: PropType<IMenuItemAttributes["asHeader"]>;
        default: boolean | undefined;
    };
    items: {
        type: PropType<IMenuItemAttributes["items"]>;
        default: IMenuItemAttributes[] | undefined;
    };
    level: {
        type: PropType<IMenuItemAttributes["level"]>;
        default: number | undefined;
    };
    expanded: {
        type: PropType<IMenuItemAttributes["expanded"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    items: IMenuItemAttributes[] | undefined;
    asCollapse: boolean | undefined;
    asHeader: boolean | undefined;
    level: number | undefined;
    expanded: boolean | undefined;
}, {}, {
    BListBoxItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        wordWrap: {
            type: PropType<import("../list-box-item").IListBoxItemAttributes["selected"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        attributes(): import("./../../types").TAttributes;
        classText(): string;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            default: import("../collection-item").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: PropType<ICollectionItemAttributes["onPropSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../index.ts").IIconAttributes | null;
        stateSelected: boolean;
        draggedIndex: number;
    }, {
        classIcon(): string;
        classText(): string;
        itemComponent(): any;
    }, {
        onClick(event: Event): void;
        toggle(): void;
        onDragStart(event: DragEvent): void;
        onDragEnd(event: DragEvent): void;
        onDragOver(event: DragEvent): void;
        onDrop(event: DragEvent): void;
        onDragEnter(event: DragEvent): void;
        onDragLeave(event: DragEvent): void;
    }, import("../../types/types").TClassesMixin | {
        computed: {
            attributes(): import("./../../types").TAttributes;
        };
    }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
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
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
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
            default: import("../collection-item").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: PropType<ICollectionItemAttributes["onPropSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
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
        onPropClick: import("../collection-item").IEventItemClick | undefined;
        selected: boolean | undefined;
        readonly: boolean | undefined;
        required: boolean | undefined;
        toggleable: boolean | undefined;
        draggable: boolean | undefined;
        onPropSelected: import("../collection-item").IEventSelected | undefined;
    }, {}, {
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("./../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        wordWrap: {
            type: PropType<import("../list-box-item").IListBoxItemAttributes["selected"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{}>, {
        wordWrap: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BCollapseItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        content: {
            type: PropType<import("../collapse-item").ICollapseItemAttributes["content"]>;
            default: string | undefined;
        };
    }>, {}, {}, {
        attributes(): import("./../../types").TAttributes;
        attributesContent(): import("./../../types").TAttributes;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            default: import("../collection-item").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: PropType<ICollectionItemAttributes["onPropSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../index.ts").IIconAttributes | null;
        stateSelected: boolean;
        draggedIndex: number;
    }, {
        classIcon(): string;
        classText(): string;
        itemComponent(): any;
    }, {
        onClick(event: Event): void;
        toggle(): void;
        onDragStart(event: DragEvent): void;
        onDragEnd(event: DragEvent): void;
        onDragOver(event: DragEvent): void;
        onDrop(event: DragEvent): void;
        onDragEnter(event: DragEvent): void;
        onDragLeave(event: DragEvent): void;
    }, import("../../types/types").TClassesMixin | {
        computed: {
            attributes(): import("./../../types").TAttributes;
        };
    }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
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
            type: PropType<import("../index.ts").IControlValueAttributes["value"]>;
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
            default: import("../collection-item").IEventItemClick | undefined;
        };
        onPropSelected: {
            type: PropType<ICollectionItemAttributes["onPropSelected"]>;
            default: import("../collection-item").IEventSelected | undefined;
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
        onPropClick: import("../collection-item").IEventItemClick | undefined;
        selected: boolean | undefined;
        readonly: boolean | undefined;
        required: boolean | undefined;
        toggleable: boolean | undefined;
        draggable: boolean | undefined;
        onPropSelected: import("../collection-item").IEventSelected | undefined;
    }, {}, {
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("./../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        content: {
            type: PropType<import("../collapse-item").ICollapseItemAttributes["content"]>;
            default: string | undefined;
        };
    }>> & Readonly<{}>, {
        content: string | undefined;
    }, {}, {
        BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            href: {
                type: PropType<import("../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: PropType<import("../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: PropType<import("../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: PropType<import("../index.ts").IButtonAttributes["target"]>;
                default: import("../button/types").TTarget | undefined;
            };
            to: {
                type: PropType<import("../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: PropType<import("../index.ts").IButtonAttributes["type"]>;
                default: import("./../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("./../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("./../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                default: import("./../../types").IEventHandler | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../index.ts").IIconAttributes | null;
            stateDisabled: boolean;
            stateLoading: import("./../../types").ILoading;
        }, {
            getComponentParams(): {
                tag: string;
                attrs: Record<string, any>;
            };
            attrs(): Record<string, any>;
            classes(): TClasses;
            getComponent(): string;
            listeners(): Record<string, any>;
        }, {
            onClick(event: MouseEvent): void;
            setLoading(value: boolean | import("./../../types").ILoading): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            href: {
                type: PropType<import("../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: PropType<import("../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: PropType<import("../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: PropType<import("../index.ts").IButtonAttributes["target"]>;
                default: import("../button/types").TTarget | undefined;
            };
            to: {
                type: PropType<import("../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: PropType<import("../index.ts").IButtonAttributes["type"]>;
                default: import("./../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("./../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("./../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                default: import("./../../types").IEventHandler | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("./../../types").TComponentVariantType | undefined;
            form: import("../button/types").TFormType | undefined;
            icon: any;
            href: string | undefined;
            outlined: boolean | undefined;
            plain: boolean | undefined;
            simple: boolean | undefined;
            target: import("../button/types").TTarget | undefined;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            loading: boolean | import("./../../types").ILoading | undefined;
            sizeControl: import("./../../types").TSizeControl | undefined;
            asLabel: boolean | undefined;
            onPropClick: import("./../../types").IEventHandler | undefined;
        }, {}, {
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                    type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("./../../types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>> & Readonly<{}>, {
                size: string | number | import("./../../types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                borderSize: {
                    type: PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                    default: import("./../../types").TSizeControl;
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
                borderSize: {
                    type: PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                    default: import("./../../types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("./../../types").TSizeControl;
                borderSize: number | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                width: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                    default: import("../index.ts").TSkeletonAnimation | undefined;
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
                width: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                    default: import("../index.ts").TSkeletonAnimation | undefined;
                };
            }>> & Readonly<{}>, {
                type: import("../index.ts").TSkeletonType | undefined;
                width: string | undefined;
                height: string | undefined;
                animation: import("../index.ts").TSkeletonAnimation | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
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
                type: PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("./../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("./../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BMenuSub: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../menu-sub").IMenuSubAttributes["items"]>;
            default: IMenuItemAttributes[] | undefined;
        };
        level: {
            type: PropType<import("../menu-sub").IMenuSubAttributes["level"]>;
            default: number | undefined;
        };
    }>, {}, {}, {}, {
        onClick(data: any): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../menu-sub").IMenuSubAttributes["items"]>;
            default: IMenuItemAttributes[] | undefined;
        };
        level: {
            type: PropType<import("../menu-sub").IMenuSubAttributes["level"]>;
            default: number | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        items: IMenuItemAttributes[] | undefined;
        level: number | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
