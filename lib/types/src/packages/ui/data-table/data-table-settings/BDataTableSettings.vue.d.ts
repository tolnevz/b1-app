import { type PropType } from 'vue';
import type { IDataTableSettingsAttributes } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<IDataTableSettingsAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[] | undefined;
    };
    selected: {
        type: PropType<IDataTableSettingsAttributes["selected"]>;
        default: import("../index.ts").IColumnAttributes | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    items(): {
        text: string;
        value: string;
        readonly: boolean;
        meta: {
            header: string;
            field: string;
            dataType?: import("../../../types/types").TDataType;
            sort: import("../index.ts").ISort;
            minWidth?: number;
            maxWidth?: number;
            width?: number;
            draggable?: boolean;
            resizable?: boolean;
            filterComponent?: import("vue").Component | import("vue").VNode | (() => Promise<import("vue").Component>) | (() => import("vue").VNode);
            filter?: import("../index.ts").IFilterComponentAttributes;
            footerValue?: any;
            text?: string | number;
            disabled?: boolean;
            focused?: boolean;
            id?: string;
            component?: any;
            visible?: boolean;
            hidden?: boolean;
        };
    }[];
}, {
    onConfirm(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("../../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean | undefined;
}, {
    getId(): import("../../component").IComponentAttributes["id"];
    classes(): string[];
    isHidden(): boolean;
    isVisibility(): boolean;
}, {
    show(): void;
    hide(): void;
    onTriggerShow(): void;
    onTriggerHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("../../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
    columns: {
        type: PropType<IDataTableSettingsAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[] | undefined;
    };
    selected: {
        type: PropType<IDataTableSettingsAttributes["selected"]>;
        default: import("../index.ts").IColumnAttributes | undefined;
    };
}>> & Readonly<{}>, {
    selected: import("../index.ts").IColumnAttributes | undefined;
    columns: import("../index.ts").IColumnAttributes[] | undefined;
}, {}, {
    BDialog: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        closable: {
            type: PropType<import("../../dialog").IDialogAttributes["closable"]>;
            default: boolean | undefined;
        };
        header: {
            type: PropType<import("../../dialog").IDialogAttributes["header"]>;
            default: string | undefined;
        };
        height: {
            type: PropType<import("../../dialog").IDialogAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: PropType<import("../../dialog").IDialogAttributes["width"]>;
            default: string | number | undefined;
        };
        confirmText: {
            type: PropType<import("../../dialog").IDialogAttributes["confirmText"]>;
            default: string | undefined;
        };
        confirmType: {
            type: PropType<import("../../dialog").IDialogAttributes["confirmType"]>;
            default: import("../../../types/types").TComponentVariantType | undefined;
        };
        fullScreen: {
            type: PropType<import("../../dialog").IDialogAttributes["fullScreen"]>;
            default: boolean | undefined;
        };
        defaultActions: {
            type: PropType<import("../../dialog").IDialogAttributes["defaultActions"]>;
            default: boolean | undefined;
        };
    }>, {
        t: import("vue-i18n").VueI18nTranslation<{}, string, import("@intlify/core-base").RemoveIndexSignature<{
            [x: string]: import("vue-i18n").LocaleMessageValue<import("vue-i18n").VueMessageType>;
        }>, never, never, never>;
    }, {}, {
        confirmButtonText(): string;
    }, {
        onConfirm(): void;
        onCancel(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        align: {
            type: PropType<import("../../index.ts").IModalAttributes["align"]>;
            default: import("../../../types/types").TAlign | undefined;
        };
        height: {
            type: PropType<import("../../index.ts").IModalAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: PropType<import("../../index.ts").IModalAttributes["width"]>;
            default: string | number | undefined;
        };
        closeOnEsc: {
            type: PropType<import("../../index.ts").IModalAttributes["closeOnEsc"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../../index.ts").IModalAttributes["visible"]>;
            default: boolean | undefined;
        };
        modal: {
            type: PropType<import("../../index.ts").IModalAttributes["modal"]>;
            default: boolean | undefined;
        };
        layer: {
            type: PropType<import("../../index.ts").IModalAttributes["layer"]>;
            default: undefined;
        };
        fullScreen: {
            type: PropType<import("../../index.ts").IModalAttributes["fullScreen"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateVisible: boolean;
        cmpOverlay: import("../../index.ts").IUseOverlay;
        stateLayer: number | undefined;
    }, {
        effectiveWidth(): string;
        effectiveHeight(): string;
        styles(): Record<string, string>;
        classes(): import("../../../types/types").TClasses;
    }, {
        handleEsc(event: KeyboardEvent): void;
        onHide(): void;
        onTriggerShow(): void;
        onTriggerHide(): void;
        onAfterLeave(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean | undefined;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
        classes(): string[];
        isHidden(): boolean;
        isVisibility(): boolean;
    }, {
        show(): void;
        hide(): void;
        onTriggerShow(): void;
        onTriggerHide(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IModalAttributes["align"]>;
            default: import("../../../types/types").TAlign | undefined;
        };
        height: {
            type: PropType<import("../../index.ts").IModalAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: PropType<import("../../index.ts").IModalAttributes["width"]>;
            default: string | number | undefined;
        };
        closeOnEsc: {
            type: PropType<import("../../index.ts").IModalAttributes["closeOnEsc"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../../index.ts").IModalAttributes["visible"]>;
            default: boolean | undefined;
        };
        modal: {
            type: PropType<import("../../index.ts").IModalAttributes["modal"]>;
            default: boolean | undefined;
        };
        layer: {
            type: PropType<import("../../index.ts").IModalAttributes["layer"]>;
            default: undefined;
        };
        fullScreen: {
            type: PropType<import("../../index.ts").IModalAttributes["fullScreen"]>;
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
        align: import("../../../types/types").TAlign | undefined;
        modal: boolean | undefined;
        layer: number | undefined;
        fullScreen: boolean | undefined;
    }, {}, {
        BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            teleportTo: {
                type: PropType<import("../../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: PropType<import("../../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../../types/types").TClasses;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: PropType<import("../../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            visible: boolean | undefined;
            teleportTo: string | Boolean | HTMLElement | undefined;
            transparent: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "cancel" | "closed" | "confirm")[], "update:visible" | "cancel" | "closed" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        closable: {
            type: PropType<import("../../dialog").IDialogAttributes["closable"]>;
            default: boolean | undefined;
        };
        header: {
            type: PropType<import("../../dialog").IDialogAttributes["header"]>;
            default: string | undefined;
        };
        height: {
            type: PropType<import("../../dialog").IDialogAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: PropType<import("../../dialog").IDialogAttributes["width"]>;
            default: string | number | undefined;
        };
        confirmText: {
            type: PropType<import("../../dialog").IDialogAttributes["confirmText"]>;
            default: string | undefined;
        };
        confirmType: {
            type: PropType<import("../../dialog").IDialogAttributes["confirmType"]>;
            default: import("../../../types/types").TComponentVariantType | undefined;
        };
        fullScreen: {
            type: PropType<import("../../dialog").IDialogAttributes["fullScreen"]>;
            default: boolean | undefined;
        };
        defaultActions: {
            type: PropType<import("../../dialog").IDialogAttributes["defaultActions"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
    }>, {
        width: string | number | undefined;
        height: string | number | undefined;
        header: string | undefined;
        fullScreen: boolean | undefined;
        closable: boolean | undefined;
        confirmText: string | undefined;
        confirmType: import("../../../types/types").TComponentVariantType | undefined;
        defaultActions: boolean | undefined;
    }, {}, {
        BModal: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            align: {
                type: PropType<import("../../index.ts").IModalAttributes["align"]>;
                default: import("../../../types/types").TAlign | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IModalAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IModalAttributes["width"]>;
                default: string | number | undefined;
            };
            closeOnEsc: {
                type: PropType<import("../../index.ts").IModalAttributes["closeOnEsc"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IModalAttributes["visible"]>;
                default: boolean | undefined;
            };
            modal: {
                type: PropType<import("../../index.ts").IModalAttributes["modal"]>;
                default: boolean | undefined;
            };
            layer: {
                type: PropType<import("../../index.ts").IModalAttributes["layer"]>;
                default: undefined;
            };
            fullScreen: {
                type: PropType<import("../../index.ts").IModalAttributes["fullScreen"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateVisible: boolean;
            cmpOverlay: import("../../index.ts").IUseOverlay;
            stateLayer: number | undefined;
        }, {
            effectiveWidth(): string;
            effectiveHeight(): string;
            styles(): Record<string, string>;
            classes(): import("../../../types/types").TClasses;
        }, {
            handleEsc(event: KeyboardEvent): void;
            onHide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
            onAfterLeave(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IModalAttributes["align"]>;
                default: import("../../../types/types").TAlign | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IModalAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IModalAttributes["width"]>;
                default: string | number | undefined;
            };
            closeOnEsc: {
                type: PropType<import("../../index.ts").IModalAttributes["closeOnEsc"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IModalAttributes["visible"]>;
                default: boolean | undefined;
            };
            modal: {
                type: PropType<import("../../index.ts").IModalAttributes["modal"]>;
                default: boolean | undefined;
            };
            layer: {
                type: PropType<import("../../index.ts").IModalAttributes["layer"]>;
                default: undefined;
            };
            fullScreen: {
                type: PropType<import("../../index.ts").IModalAttributes["fullScreen"]>;
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
            align: import("../../../types/types").TAlign | undefined;
            modal: boolean | undefined;
            layer: number | undefined;
            fullScreen: boolean | undefined;
        }, {}, {
            BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                teleportTo: {
                    type: PropType<import("../../index.ts").IOverlayAttributes["teleportTo"]>;
                    default: string | Boolean | HTMLElement | undefined;
                };
                transparent: {
                    type: PropType<import("../../index.ts").IOverlayAttributes["transparent"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: PropType<import("../../index.ts").IOverlayAttributes["visible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types/types").TClasses;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
                classes(): string[];
                isHidden(): boolean;
                isVisibility(): boolean;
            }, {
                show(): void;
                hide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IOverlayAttributes["teleportTo"]>;
                    default: string | Boolean | HTMLElement | undefined;
                };
                transparent: {
                    type: PropType<import("../../index.ts").IOverlayAttributes["transparent"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: PropType<import("../../index.ts").IOverlayAttributes["visible"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{}>, {
                visible: boolean | undefined;
                teleportTo: string | Boolean | HTMLElement | undefined;
                transparent: boolean | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            href: {
                type: PropType<import("../../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: PropType<import("../../index.ts").IButtonAttributes["target"]>;
                default: import("../../button/types").TTarget | undefined;
            };
            to: {
                type: PropType<import("../../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: PropType<import("../../index.ts").IButtonAttributes["type"]>;
                default: import("../../../types/types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                default: import("../../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../../types/types").ILoading | undefined;
            };
            onPropClick: {
                type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                default: import("../../../types/events").IEventHandler | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../../index.ts").IIconAttributes | null;
            stateDisabled: boolean;
            stateLoading: import("../../../types/types").ILoading;
        }, {
            getComponentParams(): {
                tag: string;
                attrs: Record<string, any>;
            };
            attrs(): Record<string, any>;
            classes(): import("../../../types/types").TClasses;
            getComponent(): string;
            listeners(): Record<string, any>;
        }, {
            onClick(event: MouseEvent): void;
            setLoading(value: boolean | import("../../../types/types").ILoading): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            rootClasses(): string;
            attributes(): Record<string, any>;
        }, {
            focus(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: PropType<import("../../index.ts").IButtonAttributes["target"]>;
                default: import("../../button/types").TTarget | undefined;
            };
            to: {
                type: PropType<import("../../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: PropType<import("../../index.ts").IButtonAttributes["type"]>;
                default: import("../../../types/types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                default: import("../../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../../types/types").ILoading | undefined;
            };
            onPropClick: {
                type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                default: import("../../../types/events").IEventHandler | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("../../../types/types").TComponentVariantType | undefined;
            form: import("../../button/types").TFormType | undefined;
            icon: any;
            href: string | undefined;
            outlined: boolean | undefined;
            plain: boolean | undefined;
            simple: boolean | undefined;
            target: import("../../button/types").TTarget | undefined;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            loading: boolean | import("../../../types/types").ILoading | undefined;
            onPropClick: import("../../../types/events").IEventHandler | undefined;
        }, {}, {
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types/types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
                classes(): string[];
                isHidden(): boolean;
                isVisibility(): boolean;
            }, {
                show(): void;
                hide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types/types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>> & Readonly<{}>, {
                size: string | number | import("../../../types/types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                borderSize: {
                    type: PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                    default: import("../../../types/types").TSizeControl;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types/types").TClasses;
                styles(): {
                    borderWidth: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
                classes(): string[];
                isHidden(): boolean;
                isVisibility(): boolean;
            }, {
                show(): void;
                hide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                    default: import("../../../types/types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../../types/types").TSizeControl;
                borderSize: number | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                width: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
                    default: import("../../index.ts").TSkeletonAnimation | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types/types").TClasses;
                styles(): {
                    width: string;
                    height: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
                classes(): string[];
                isHidden(): boolean;
                isVisibility(): boolean;
            }, {
                show(): void;
                hide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
                    default: import("../../index.ts").TSkeletonAnimation | undefined;
                };
            }>> & Readonly<{}>, {
                type: import("../../index.ts").TSkeletonType | undefined;
                width: string | undefined;
                height: string | undefined;
                animation: import("../../index.ts").TSkeletonAnimation | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BCheckBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        indeterminate: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["indeterminate"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["sizeControl"]>;
            default: import("../../../types/types").TSizeControl | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateValue: boolean;
        stateType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        stateIndeterminate: boolean | undefined;
        refInput: HTMLInputElement | null;
    }, {
        classes(): import("../../../types/types").TClasses;
        checked(): number;
        getName(): string;
    }, {
        onChange(event: Event): void;
        onFocus(event: FocusEvent): void;
        onBlur(event: FocusEvent): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        readonly: {
            type: PropType<import("../../index.ts").IControlInputAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../../index.ts").IControlInputAttributes["required"]>;
            default: boolean | undefined;
        };
        invalid: {
            type: PropType<import("../../index.ts").IControlInputAttributes["invalid"]>;
            default: boolean | undefined;
        };
        state: {
            type: PropType<import("../../index.ts").IControlInputAttributes["state"]>;
            default: import("../../../types/types").TState | undefined;
        };
    }>, {}, {
        stateText: string | number | undefined;
        stateState: import("../../../types/types").TState;
        stateInvalid: boolean;
        stateValue: import("../../../types/types").TValue;
        stateDisabled: boolean;
        stateName: string;
    }, {}, {
        isFormField(): boolean;
        getValueFromModelByName(defaultValue: any): any;
        setValueFromModelByName(value: any): void;
        getInvalidateFromModelByName(): boolean;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: import("../../../types/types").TValue;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        rootClasses(): string;
        attributes(): Record<string, any>;
    }, {
        focus(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean | undefined;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
        classes(): string[];
        isHidden(): boolean;
        isVisibility(): boolean;
    }, {
        show(): void;
        hide(): void;
        onTriggerShow(): void;
        onTriggerHide(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: import("../../../types/types").TValue;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: import("../../../types/types").TValue;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        readonly: {
            type: PropType<import("../../index.ts").IControlInputAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../../index.ts").IControlInputAttributes["required"]>;
            default: boolean | undefined;
        };
        invalid: {
            type: PropType<import("../../index.ts").IControlInputAttributes["invalid"]>;
            default: boolean | undefined;
        };
        state: {
            type: PropType<import("../../index.ts").IControlInputAttributes["state"]>;
            default: import("../../../types/types").TState | undefined;
        };
    }>> & Readonly<{}>, {
        readonly: boolean | undefined;
        required: boolean | undefined;
        invalid: boolean | undefined;
        state: import("../../../types/types").TState | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        indeterminate: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["indeterminate"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["sizeControl"]>;
            default: import("../../../types/types").TSizeControl | undefined;
        };
    }>> & Readonly<{
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:indeterminate"?: ((...args: any[]) => any) | undefined;
    }>, {
        sizeControl: import("../../../types/types").TSizeControl | undefined;
        indeterminate: boolean | undefined;
    }, {}, {
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types/types").ISize | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types/types").ISize | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("../../../types/types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BLabel: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../../label").ILabelAttributes["text"]>;
            default: string | undefined;
        };
        align: {
            type: PropType<import("../../label").ILabelAttributes["align"]>;
            default: import("../../../types/types").TAlign | undefined;
        };
        required: {
            type: PropType<import("../../label").ILabelAttributes["required"]>;
            default: boolean | undefined;
        };
        placementRequired: {
            type: PropType<import("../../label").ILabelAttributes["placementRequired"]>;
            default: import("../../label/types").TPlacementRequired | undefined;
        };
    }>, {}, {
        cssClass: string;
        inputId: string;
    }, {
        classes(): import("../../../types/types").TClasses;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean | undefined;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
        classes(): string[];
        isHidden(): boolean;
        isVisibility(): boolean;
    }, {
        show(): void;
        hide(): void;
        onTriggerShow(): void;
        onTriggerHide(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../label").ILabelAttributes["text"]>;
            default: string | undefined;
        };
        align: {
            type: PropType<import("../../label").ILabelAttributes["align"]>;
            default: import("../../../types/types").TAlign | undefined;
        };
        required: {
            type: PropType<import("../../label").ILabelAttributes["required"]>;
            default: boolean | undefined;
        };
        placementRequired: {
            type: PropType<import("../../label").ILabelAttributes["placementRequired"]>;
            default: import("../../label/types").TPlacementRequired | undefined;
        };
    }>> & Readonly<{}>, {
        text: string | undefined;
        required: boolean | undefined;
        align: import("../../../types/types").TAlign | undefined;
        placementRequired: import("../../label/types").TPlacementRequired | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BListBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        filterText: {
            type: PropType<import("../../list-box").IListBoxAttributes["filterText"]>;
            default: string | undefined;
        };
        maxRows: {
            type: PropType<import("../../list-box").IListBoxAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../../list-box").IListBoxAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../../list-box").IListBoxAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: PropType<import("../../list-box").IListBoxAttributes["draggable"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        containerHeight: string;
        isHeightCalculated: boolean;
        stateFilterText: string;
        copyStateItems: import("../../index.ts").ICollectionItemAttributes[];
        draggedItem: import("../../index.ts").ICollectionItemAttributes | null;
        draggedIndex: number;
    }, {
        classes(): import("../../../types/types").TClasses;
        outItems(): import("../../index.ts").ICollectionItemAttributes[];
        maxRowsVisible(): number;
        transitionGroupName(): string;
    }, {
        getRefItems(): import("vue").ComponentPublicInstance[];
        getRefLastVisibleItem(): HTMLElement | undefined;
        getVisibleItemsHeight(): number;
        createObserver(element: HTMLElement, callback: () => void): void;
        scrollToActiveItem(): void;
        calculateContainerHeight(): void;
        calculateContainerHeightNextTick(): void;
        searchByText(text: string): void;
        onDragStart({ event }: {
            event: DragEvent;
        }): void;
        onDragEnter({ event }: {
            event: DragEvent;
        }): void;
        onDragEnd({ event }: {
            event: DragEvent;
        }): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
            default: unknown;
        };
        multiple: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
            default: boolean | undefined;
        };
        separator: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
            default: boolean | undefined;
        };
        noSelect: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
            default: import("../../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateSelected: import("../../index.ts").ICollectionItemAttributes[];
        stateItems: import("../../index.ts").ICollectionItemAttributes[];
        currentIndex: number;
        isFocused: boolean;
    }, {}, {
        initItems(): import("../../index.ts").ICollectionItemAttributes[];
        initSelected(): import("../../index.ts").ICollectionItemAttributes[];
        toggleItemSelected(item: import("../../index.ts").ICollectionItemAttributes): void;
        onClickItem({ event, item }: {
            event: MouseEvent;
            item: import("../../index.ts").ICollectionItemAttributes;
        }): void;
        count(): number;
        isEmpty(): boolean;
        isSelected(): boolean;
        getItemByValue(value: import("../../../types/types").TValue): import("../../index.ts").ICollectionItemAttributes | undefined;
        getIndexByValue(value: import("../../../types/types").TValue): number;
        removeSelectedItem(value: import("../../../types/types").TValue): boolean;
        updateSelected(value: import("../../../types/types").TValue, selected: boolean, forward?: boolean): boolean;
        sendEventSelectedItems(): void;
        resetSelected(): void;
        searchByValue(value: import("../../../types/types").TValue | import("../../../types/types").TValue[] | undefined): boolean;
        getSelectedText(): string | undefined;
        getSelectedValue(): import("../../../types/types").TValue | import("../../../types/types").TValue[] | undefined;
        getNextValidIndex(startIndex: number, direction: number): number;
        nextActiveItem(): void;
        prevActiveItem(): void;
        setSelectedActiveItem(): void;
        isItemValidateByIndex(index: number): boolean;
        handleKeydown(event: KeyboardEvent): void;
        handleFocus(): void;
        handleBlur(): void;
        handleMouseEnterInItem(index: number): void;
        handleMouseLeaveInItem(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>, {}, {
        cssClass: string;
    }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: import("../../../types/types").TValue;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        rootClasses(): string;
        attributes(): Record<string, any>;
    }, {
        focus(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean | undefined;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
        classes(): string[];
        isHidden(): boolean;
        isVisibility(): boolean;
    }, {
        show(): void;
        hide(): void;
        onTriggerShow(): void;
        onTriggerHide(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: import("../../../types/types").TValue;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: import("../../../types/types").TValue;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>> & Readonly<{}>, {
        selected: any;
        items: any[];
    }, {}, {
        BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
            default: unknown;
        };
        multiple: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
            default: boolean | undefined;
        };
        separator: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
            default: boolean | undefined;
        };
        noSelect: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
            default: import("../../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:text"?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onSelected-item"?: ((...args: any[]) => any) | undefined;
        "onSelected-items"?: ((...args: any[]) => any) | undefined;
        "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
    }>, {
        selected: any;
        items: any[];
        multiple: boolean | undefined;
        singleSelection: boolean | undefined;
        noSelect: boolean | undefined;
        separator: string | undefined;
        onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
        onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
    }, {}, {}, {}, string, () => {
        updateSelected: (value: import("../../../types/types").TValue, selected: boolean, forward?: boolean) => boolean;
    }, true, {}, any>, ("click" | "refresh")[], "click" | "refresh", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        filterText: {
            type: PropType<import("../../list-box").IListBoxAttributes["filterText"]>;
            default: string | undefined;
        };
        maxRows: {
            type: PropType<import("../../list-box").IListBoxAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../../list-box").IListBoxAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../../list-box").IListBoxAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        draggable: {
            type: PropType<import("../../list-box").IListBoxAttributes["draggable"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onRefresh?: ((...args: any[]) => any) | undefined;
    }>, {
        draggable: boolean | undefined;
        wordWrap: boolean | undefined;
        filterText: string | undefined;
        maxRows: number | undefined;
        autoWidth: boolean | undefined;
    }, {}, {
        BCollection: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>, {}, {
            cssClass: string;
        }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: import("../../../types/types").TValue;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            rootClasses(): string;
            attributes(): Record<string, any>;
        }, {
            focus(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: import("../../../types/types").TValue;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: import("../../../types/types").TValue;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>> & Readonly<{}>, {
            selected: any;
            items: any[];
        }, {}, {
            BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
                classes(): string[];
                isHidden(): boolean;
                isVisibility(): boolean;
            }, {
                show(): void;
                hide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BListBoxItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            wordWrap: {
                type: PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            attributes(): import("../../../types/types").TAttributes;
            classText(): string;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            component: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                default: string;
            };
            text: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                default: any;
            };
            selected: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                default: boolean | undefined;
            };
            readonly: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                default: boolean | undefined;
            };
            meta: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                default: any;
            };
            toggleable: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                default: import("../../index.ts").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                default: import("../../index.ts").IEventSelected | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../../index.ts").IIconAttributes | null;
            stateSelected: boolean;
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
        }, import("../../../types/types").TClassesMixin | {
            computed: {
                attributes(): import("../../../types/types").TAttributes;
            };
        }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: import("../../../types/types").TValue;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            rootClasses(): string;
            attributes(): Record<string, any>;
        }, {
            focus(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: import("../../../types/types").TValue;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: import("../../../types/types").TValue;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            component: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                default: string;
            };
            text: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                default: any;
            };
            selected: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                default: boolean | undefined;
            };
            readonly: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                default: boolean | undefined;
            };
            meta: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                default: any;
            };
            toggleable: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                default: import("../../index.ts").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                default: import("../../index.ts").IEventSelected | undefined;
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
            onPropClick: import("../../index.ts").IEventItemClick | undefined;
            readonly: boolean | undefined;
            required: boolean | undefined;
            selected: boolean | undefined;
            toggleable: boolean | undefined;
            draggable: boolean | undefined;
            onPropSelected: import("../../index.ts").IEventSelected | undefined;
        }, {}, {
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types/types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
                classes(): string[];
                isHidden(): boolean;
                isVisibility(): boolean;
            }, {
                show(): void;
                hide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types/types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>> & Readonly<{}>, {
                size: string | number | import("../../../types/types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            wordWrap: {
                type: PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            wordWrap: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types/types").ISize | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
            classes(): string[];
            isHidden(): boolean;
            isVisibility(): boolean;
        }, {
            show(): void;
            hide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../component").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types/types").ISize | undefined;
            };
            width: {
                type: PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("../../../types/types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
