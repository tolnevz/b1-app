declare const _default: import("vue").DefineComponent<{}, {
    instances: import("vue").Ref<import("./types").IUseConfirmDialogSingleton[], import("./types").IUseConfirmDialogSingleton[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean | undefined;
}, {
    getId(): import("../component").IComponentAttributes["id"];
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
        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    BConfirmDialog: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        align: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["align"]>;
            default: import("../../types/types").TAlign | undefined;
        };
        text: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["text"]>;
            default: string | undefined;
        };
        height: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["width"]>;
            default: string | number | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["icon"]>;
            default: any;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../index.ts").IIconAttributes | null;
        icons: {
            danger: string;
            primary: string;
            warning: string;
            success: string;
            secondary: undefined;
        };
    }, {
        classes(): import("../../types/types").TClasses;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        closable: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["closable"]>;
            default: boolean | undefined;
        };
        header: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["header"]>;
            default: string | undefined;
        };
        height: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["width"]>;
            default: string | number | undefined;
        };
        confirmText: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmText"]>;
            default: string | undefined;
        };
        confirmType: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmType"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        defaultActions: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["defaultActions"]>;
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
            type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
            default: import("../../types/types").TAlign | undefined;
        };
        height: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
            default: string | number | undefined;
        };
        closeOnEsc: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
            default: boolean | undefined;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
            default: boolean | undefined;
        };
        modal: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
            default: boolean | undefined;
        };
        layer: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
            default: undefined;
        };
    }>, {}, {
        cssClass: string;
        stateVisible: boolean;
        cmpOverlay: import("../index.ts").IUseOverlay;
        stateLayer: number | undefined;
    }, {
        effectiveWidth(): string;
        effectiveHeight(): string;
        styles(): Record<string, string>;
        classes(): import("../../types/types").TClasses;
    }, {
        handleEsc(event: KeyboardEvent): void;
        onHide(): void;
        onTriggerShow(): void;
        onTriggerHide(): void;
        onAfterLeave(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean | undefined;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
            default: import("../../types/types").TAlign | undefined;
        };
        height: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
            default: string | number | undefined;
        };
        closeOnEsc: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
            default: boolean | undefined;
        };
        visible: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
            default: boolean | undefined;
        };
        modal: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
            default: boolean | undefined;
        };
        layer: {
            type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
            default: undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
    }>, {
        visible: boolean | undefined;
        width: string | number | undefined;
        height: string | number | undefined;
        closeOnEsc: boolean | undefined;
        align: import("../../types/types").TAlign | undefined;
        modal: boolean | undefined;
        layer: number | undefined;
    }, {}, {
        BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            teleportTo: {
                type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types/types").TClasses;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            visible: boolean | undefined;
            teleportTo: string | Boolean | HTMLElement | undefined;
            transparent: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "cancel" | "closed" | "confirm")[], "update:visible" | "cancel" | "closed" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        closable: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["closable"]>;
            default: boolean | undefined;
        };
        header: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["header"]>;
            default: string | undefined;
        };
        height: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["width"]>;
            default: string | number | undefined;
        };
        confirmText: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmText"]>;
            default: string | undefined;
        };
        confirmType: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmType"]>;
            default: import("../../types/types").TComponentVariantType | undefined;
        };
        defaultActions: {
            type: import("vue").PropType<import("../index.ts").IDialogAttributes["defaultActions"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
    }>, {
        width: string | number | undefined;
        height: string | number | undefined;
        header: string | undefined;
        closable: boolean | undefined;
        confirmText: string | undefined;
        confirmType: import("../../types/types").TComponentVariantType | undefined;
        defaultActions: boolean | undefined;
    }, {}, {
        BModal: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            align: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
                default: import("../../types/types").TAlign | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
                default: string | number | undefined;
            };
            closeOnEsc: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
                default: boolean | undefined;
            };
            modal: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
                default: boolean | undefined;
            };
            layer: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
                default: undefined;
            };
        }>, {}, {
            cssClass: string;
            stateVisible: boolean;
            cmpOverlay: import("../index.ts").IUseOverlay;
            stateLayer: number | undefined;
        }, {
            effectiveWidth(): string;
            effectiveHeight(): string;
            styles(): Record<string, string>;
            classes(): import("../../types/types").TClasses;
        }, {
            handleEsc(event: KeyboardEvent): void;
            onHide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
            onAfterLeave(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
                default: import("../../types/types").TAlign | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
                default: string | number | undefined;
            };
            closeOnEsc: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
                default: boolean | undefined;
            };
            modal: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
                default: boolean | undefined;
            };
            layer: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
                default: undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onClosed?: ((...args: any[]) => any) | undefined;
        }>, {
            visible: boolean | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            closeOnEsc: boolean | undefined;
            align: import("../../types/types").TAlign | undefined;
            modal: boolean | undefined;
            layer: number | undefined;
        }, {}, {
            BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                teleportTo: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                    default: string | Boolean | HTMLElement | undefined;
                };
                transparent: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../types/types").TClasses;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                    default: string | Boolean | HTMLElement | undefined;
                };
                transparent: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
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
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["target"]>;
                default: import("../button/types").TTarget | undefined;
            };
            to: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["type"]>;
                default: import("../../types/types").TComponentVariantType | undefined;
            };
            form: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../types/types").ILoading | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                default: import("../../types/events").IEventHandler | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../index.ts").IIconAttributes | null;
            stateDisabled: boolean;
            stateLoading: import("../../types/types").ILoading;
        }, {
            getComponentParams(): {
                tag: string;
                attrs: Record<string, any>;
            };
            attrs(): Record<string, any>;
            classes(): import("../../types/types").TClasses;
            getComponent(): string;
            listeners(): Record<string, any>;
        }, {
            onClick(event: MouseEvent): void;
            setLoading(value: boolean | import("../../types/types").ILoading): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {}, {
            focus(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["target"]>;
                default: import("../button/types").TTarget | undefined;
            };
            to: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["type"]>;
                default: import("../../types/types").TComponentVariantType | undefined;
            };
            form: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: import("vue").PropType<import("../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../types/types").ILoading | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                default: import("../../types/events").IEventHandler | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("../../types/types").TComponentVariantType | undefined;
            form: import("../button/types").TFormType | undefined;
            icon: any;
            href: string | undefined;
            outlined: boolean | undefined;
            plain: boolean | undefined;
            simple: boolean | undefined;
            target: import("../button/types").TTarget | undefined;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            loading: boolean | import("../../types/types").ILoading | undefined;
            onPropClick: import("../../types/events").IEventHandler | undefined;
        }, {}, {
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../types/types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../types/types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>> & Readonly<{}>, {
                size: string | number | import("../../types/types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                borderSize: {
                    type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                    default: import("../../types/types").TSizeControl;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../types/types").TClasses;
                styles(): {
                    borderWidth: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                    default: import("../../types/types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../types/types").TSizeControl;
                borderSize: number | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                width: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                    default: import("../index.ts").TSkeletonAnimation | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../types/types").TClasses;
                styles(): {
                    width: string;
                    height: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                    default: import("../index.ts").TSkeletonAnimation | undefined;
                };
            }>> & Readonly<{}>, {
                type: import("../index.ts").TSkeletonType | undefined;
                width: string | undefined;
                height: string | undefined;
                animation: import("../index.ts").TSkeletonAnimation | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "cancel" | "confirm")[], "update:visible" | "cancel" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        align: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["align"]>;
            default: import("../../types/types").TAlign | undefined;
        };
        text: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["text"]>;
            default: string | undefined;
        };
        height: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["height"]>;
            default: string | number | undefined;
        };
        width: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["width"]>;
            default: string | number | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../confirm-dialog").IConfirmDialogAttributes["icon"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
    }>, {
        width: string | number | undefined;
        height: string | number | undefined;
        text: string | undefined;
        icon: any;
        align: import("../../types/types").TAlign | undefined;
    }, {}, {
        BDialog: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            closable: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["closable"]>;
                default: boolean | undefined;
            };
            header: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["header"]>;
                default: string | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["width"]>;
                default: string | number | undefined;
            };
            confirmText: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmText"]>;
                default: string | undefined;
            };
            confirmType: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmType"]>;
                default: import("../../types/types").TComponentVariantType | undefined;
            };
            defaultActions: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["defaultActions"]>;
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
                type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
                default: import("../../types/types").TAlign | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
                default: string | number | undefined;
            };
            closeOnEsc: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
                default: boolean | undefined;
            };
            modal: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
                default: boolean | undefined;
            };
            layer: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
                default: undefined;
            };
        }>, {}, {
            cssClass: string;
            stateVisible: boolean;
            cmpOverlay: import("../index.ts").IUseOverlay;
            stateLayer: number | undefined;
        }, {
            effectiveWidth(): string;
            effectiveHeight(): string;
            styles(): Record<string, string>;
            classes(): import("../../types/types").TClasses;
        }, {
            handleEsc(event: KeyboardEvent): void;
            onHide(): void;
            onTriggerShow(): void;
            onTriggerHide(): void;
            onAfterLeave(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
                default: import("../../types/types").TAlign | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
                default: string | number | undefined;
            };
            closeOnEsc: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
                default: boolean | undefined;
            };
            modal: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
                default: boolean | undefined;
            };
            layer: {
                type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
                default: undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onClosed?: ((...args: any[]) => any) | undefined;
        }>, {
            visible: boolean | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            closeOnEsc: boolean | undefined;
            align: import("../../types/types").TAlign | undefined;
            modal: boolean | undefined;
            layer: number | undefined;
        }, {}, {
            BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                teleportTo: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                    default: string | Boolean | HTMLElement | undefined;
                };
                transparent: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../types/types").TClasses;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                    default: string | Boolean | HTMLElement | undefined;
                };
                transparent: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{}>, {
                visible: boolean | undefined;
                teleportTo: string | Boolean | HTMLElement | undefined;
                transparent: boolean | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "cancel" | "closed" | "confirm")[], "update:visible" | "cancel" | "closed" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            closable: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["closable"]>;
                default: boolean | undefined;
            };
            header: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["header"]>;
                default: string | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["height"]>;
                default: string | number | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["width"]>;
                default: string | number | undefined;
            };
            confirmText: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmText"]>;
                default: string | undefined;
            };
            confirmType: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["confirmType"]>;
                default: import("../../types/types").TComponentVariantType | undefined;
            };
            defaultActions: {
                type: import("vue").PropType<import("../index.ts").IDialogAttributes["defaultActions"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onCancel?: ((...args: any[]) => any) | undefined;
            onClosed?: ((...args: any[]) => any) | undefined;
            onConfirm?: ((...args: any[]) => any) | undefined;
        }>, {
            width: string | number | undefined;
            height: string | number | undefined;
            header: string | undefined;
            closable: boolean | undefined;
            confirmText: string | undefined;
            confirmType: import("../../types/types").TComponentVariantType | undefined;
            defaultActions: boolean | undefined;
        }, {}, {
            BModal: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                align: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
                    default: import("../../types/types").TAlign | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
                    default: string | number | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
                    default: string | number | undefined;
                };
                closeOnEsc: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
                    default: boolean | undefined;
                };
                modal: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
                    default: boolean | undefined;
                };
                layer: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
                    default: undefined;
                };
            }>, {}, {
                cssClass: string;
                stateVisible: boolean;
                cmpOverlay: import("../index.ts").IUseOverlay;
                stateLayer: number | undefined;
            }, {
                effectiveWidth(): string;
                effectiveHeight(): string;
                styles(): Record<string, string>;
                classes(): import("../../types/types").TClasses;
            }, {
                handleEsc(event: KeyboardEvent): void;
                onHide(): void;
                onTriggerShow(): void;
                onTriggerHide(): void;
                onAfterLeave(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["align"]>;
                    default: import("../../types/types").TAlign | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["height"]>;
                    default: string | number | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["width"]>;
                    default: string | number | undefined;
                };
                closeOnEsc: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["closeOnEsc"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["visible"]>;
                    default: boolean | undefined;
                };
                modal: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["modal"]>;
                    default: boolean | undefined;
                };
                layer: {
                    type: import("vue").PropType<import("../index.ts").IModalAttributes["layer"]>;
                    default: undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onClosed?: ((...args: any[]) => any) | undefined;
            }>, {
                visible: boolean | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                closeOnEsc: boolean | undefined;
                align: import("../../types/types").TAlign | undefined;
                modal: boolean | undefined;
                layer: number | undefined;
            }, {}, {
                BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    teleportTo: {
                        type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                        default: string | Boolean | HTMLElement | undefined;
                    };
                    transparent: {
                        type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                        default: boolean | undefined;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                }, {
                    classes(): import("../../types/types").TClasses;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean | undefined;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                        default: string | Boolean | HTMLElement | undefined;
                    };
                    transparent: {
                        type: import("vue").PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                        default: boolean | undefined;
                    };
                    visible: {
                        type: import("vue").PropType<import("../index.ts").IOverlayAttributes["visible"]>;
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
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["href"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["icon"]>;
                    default: any;
                };
                outlined: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["simple"]>;
                    default: boolean | undefined;
                };
                target: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["target"]>;
                    default: import("../button/types").TTarget | undefined;
                };
                to: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["to"]>;
                    default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["type"]>;
                    default: import("../../types/types").TComponentVariantType | undefined;
                };
                form: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../types/types").ILoading | undefined;
                };
                onPropClick: {
                    type: import("vue").PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                    default: import("../../types/events").IEventHandler | undefined;
                };
            }>, {}, {
                cssClass: string;
                iconProps: import("../index.ts").IIconAttributes | null;
                stateDisabled: boolean;
                stateLoading: import("../../types/types").ILoading;
            }, {
                getComponentParams(): {
                    tag: string;
                    attrs: Record<string, any>;
                };
                attrs(): Record<string, any>;
                classes(): import("../../types/types").TClasses;
                getComponent(): string;
                listeners(): Record<string, any>;
            }, {
                onClick(event: MouseEvent): void;
                setLoading(value: boolean | import("../../types/types").ILoading): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {}, {
                focus(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean | undefined;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["href"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["icon"]>;
                    default: any;
                };
                outlined: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["simple"]>;
                    default: boolean | undefined;
                };
                target: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["target"]>;
                    default: import("../button/types").TTarget | undefined;
                };
                to: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["to"]>;
                    default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["type"]>;
                    default: import("../../types/types").TComponentVariantType | undefined;
                };
                form: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: import("vue").PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../types/types").ILoading | undefined;
                };
                onPropClick: {
                    type: import("vue").PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
                    default: import("../../types/events").IEventHandler | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                type: import("../../types/types").TComponentVariantType | undefined;
                form: import("../button/types").TFormType | undefined;
                icon: any;
                href: string | undefined;
                outlined: boolean | undefined;
                plain: boolean | undefined;
                simple: boolean | undefined;
                target: import("../button/types").TTarget | undefined;
                to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                loading: boolean | import("../../types/types").ILoading | undefined;
                onPropClick: import("../../types/events").IEventHandler | undefined;
            }, {}, {
                BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    alt: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../types/types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>, {}, {}, {
                    sizeStyle(): Record<string, string>;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean | undefined;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../types/types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>> & Readonly<{}>, {
                    size: string | number | import("../../types/types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BSpinner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    borderSize: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                        default: number | undefined;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                        default: import("../../types/types").TSizeControl;
                    };
                }>, {}, {
                    cssClass: string;
                }, {
                    classes(): import("../../types/types").TClasses;
                    styles(): {
                        borderWidth: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean | undefined;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["borderSize"]>;
                        default: number | undefined;
                    };
                    size: {
                        type: import("vue").PropType<import("../index.ts").ISpinnerAttributes["size"]>;
                        default: import("../../types/types").TSizeControl;
                    };
                }>> & Readonly<{}>, {
                    size: import("../../types/types").TSizeControl;
                    borderSize: number | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    width: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                        default: string | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                        default: string | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                        default: import("../index.ts").TSkeletonType | undefined;
                    };
                    animation: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                        default: import("../index.ts").TSkeletonAnimation | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                }, {
                    classes(): import("../../types/types").TClasses;
                    styles(): {
                        width: string;
                        height: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean | undefined;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["width"]>;
                        default: string | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["height"]>;
                        default: string | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["type"]>;
                        default: import("../index.ts").TSkeletonType | undefined;
                    };
                    animation: {
                        type: import("vue").PropType<import("../index.ts").ISkeletonAttributes["animation"]>;
                        default: import("../index.ts").TSkeletonAnimation | undefined;
                    };
                }>> & Readonly<{}>, {
                    type: import("../index.ts").TSkeletonType | undefined;
                    width: string | undefined;
                    height: string | undefined;
                    animation: import("../index.ts").TSkeletonAnimation | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconDanger: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
        IconInfo: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
        IconWarning: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
        IconSuccess: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../types/types").ISize | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean | undefined;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../component").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../types/types").ISize | undefined;
            };
            width: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: import("vue").PropType<import("../index.ts").IIconAttributes["height"]>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
