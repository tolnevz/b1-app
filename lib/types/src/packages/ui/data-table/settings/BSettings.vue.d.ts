import { type PropType } from 'vue';
import type { ISettingsAttributes, ISettingsItem } from './types';
import { BListBox } from '../../list-box';
import { ESizeControl } from '../../../types';
import type { ICollectionItemAttributes } from '../../collection-item';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<ISettingsAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[] | undefined;
    };
    multiSort: {
        type: PropType<ISettingsAttributes["multiSort"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
}, {
    items(): ISettingsItem[];
}, {
    onConfirm(): void;
    onSortDirectionChange(items: ICollectionItemAttributes[], column: ISettingsItem): void;
    onMoveColumn({ item, targetIndex }: {
        item: ICollectionItemAttributes;
        targetIndex: number;
    }): void;
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
    stateVisible: boolean;
}, {
    getId(): import("../../component").IComponentAttributes["id"];
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("cancel" | "confirm")[], "cancel" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<ISettingsAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[] | undefined;
    };
    multiSort: {
        type: PropType<ISettingsAttributes["multiSort"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    columns: import("../index.ts").IColumnAttributes[] | undefined;
    multiSort: boolean | undefined;
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
            default: import("../../../types").TComponentVariantType | undefined;
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
        onConfirm(): Promise<void>;
        onCancel(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        align: {
            type: PropType<import("../../index.ts").IModalAttributes["align"]>;
            default: import("../../../types").TAlign | undefined;
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
        classes(): import("../../../types").TClasses;
    }, {
        handleEsc(event: KeyboardEvent): void;
        beforeHide(): boolean;
        afterShow(): void;
        afterHide(): void;
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
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            default: import("../../../types").TAlign | undefined;
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
        align: import("../../../types").TAlign | undefined;
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
            classes(): import("../../../types").TClasses;
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
    }, {}, string, () => {
        modalLayer: () => number | undefined;
    }, true, {}, any>, ("update:visible" | "cancel" | "closed" | "confirm")[], "update:visible" | "cancel" | "closed" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
            default: import("../../../types").TComponentVariantType | undefined;
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
        onClosed?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
    }>, {
        width: string | number | undefined;
        height: string | number | undefined;
        header: string | undefined;
        fullScreen: boolean | undefined;
        closable: boolean | undefined;
        confirmText: string | undefined;
        confirmType: import("../../../types").TComponentVariantType | undefined;
        defaultActions: boolean | undefined;
    }, {}, {
        BModal: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            align: {
                type: PropType<import("../../index.ts").IModalAttributes["align"]>;
                default: import("../../../types").TAlign | undefined;
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
            classes(): import("../../../types").TClasses;
        }, {
            handleEsc(event: KeyboardEvent): void;
            beforeHide(): boolean;
            afterShow(): void;
            afterHide(): void;
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: import("../../../types").TAlign | undefined;
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
            align: import("../../../types").TAlign | undefined;
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
                classes(): import("../../../types").TClasses;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
        }, {}, string, () => {
            modalLayer: () => number | undefined;
        }, true, {}, any>;
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
                default: import("../../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                default: import("../../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                default: import("../../../types").IEventHandler | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../../index.ts").IIconAttributes | null;
            stateDisabled: boolean;
            stateLoading: import("../../../types").ILoading;
        }, {
            getComponentParams(): {
                tag: string;
                attrs: Record<string, any>;
            };
            attrs(): Record<string, any>;
            classes(): import("../../../types").TClasses;
            getComponent(): string;
            listeners(): Record<string, any>;
        }, {
            onClick(event: MouseEvent): void;
            setLoading(value: boolean | import("../../../types").ILoading): void;
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
        }>, {}, {
            stateDisabled: boolean | undefined;
        }, {
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: import("../../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                default: import("../../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                default: import("../../../types").IEventHandler | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("../../../types").TComponentVariantType | undefined;
            form: import("../../button/types").TFormType | undefined;
            icon: any;
            href: string | undefined;
            outlined: boolean | undefined;
            plain: boolean | undefined;
            simple: boolean | undefined;
            target: import("../../button/types").TTarget | undefined;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            loading: boolean | import("../../../types").ILoading | undefined;
            sizeControl: import("../../../types").TSizeControl | undefined;
            asLabel: boolean | undefined;
            onPropClick: import("../../../types").IEventHandler | undefined;
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                size: string | number | import("../../../types").ISize | undefined;
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
                    default: import("../../../types").TSizeControl;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types").TClasses;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: import("../../../types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../../types").TSizeControl;
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
                classes(): import("../../../types").TClasses;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
            default: import("../../../types").TSizeControl | undefined;
        };
        marked: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["marked"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateValue: boolean;
        stateType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        stateIndeterminate: boolean | undefined;
        refInput: HTMLInputElement | null;
    }, {
        classes(): import("../../../types").TClasses;
        checked(): number;
        getName(): string;
    }, {
        onChange(event: Event): void;
        onFocus(event: FocusEvent): void;
        onBlur(event: FocusEvent): void;
        onClick(event: MouseEvent): void;
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
            default: import("../../../types").TState | undefined;
        };
    }>, {}, {
        stateText: string | number | undefined;
        stateState: import("../../../types").TState;
        stateInvalid: boolean;
        stateValue: any;
        stateDisabled: boolean;
        stateName: string;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
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
    }>, {}, {
        stateDisabled: boolean | undefined;
    }, {
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
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
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
            default: import("../../../types").TState | undefined;
        };
    }>> & Readonly<{}>, {
        readonly: boolean | undefined;
        required: boolean | undefined;
        invalid: boolean | undefined;
        state: import("../../../types").TState | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        indeterminate: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["indeterminate"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        marked: {
            type: PropType<import("../../check-box").ICheckBoxAttributes["marked"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:indeterminate"?: ((...args: any[]) => any) | undefined;
    }>, {
        sizeControl: import("../../../types").TSizeControl | undefined;
        indeterminate: boolean | undefined;
        marked: boolean | undefined;
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
                default: string | number | import("../../../types").ISize | undefined;
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: string | number | import("../../../types").ISize | undefined;
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
            size: string | number | import("../../../types").ISize | undefined;
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
            default: import("../../../types").TAlign | undefined;
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
        classes(): import("../../../types").TClasses;
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
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            default: import("../../../types").TAlign | undefined;
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
        align: import("../../../types").TAlign | undefined;
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
        copyStateItems: ICollectionItemAttributes[];
        draggedItem: ICollectionItemAttributes | null;
        draggedIndex: number;
    }, {
        classes(): import("../../../types").TClasses;
        outItems(): ICollectionItemAttributes[];
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
        onDrop({ event, value }: {
            event: DragEvent;
            value: import("../../../types").TValue;
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
            default: import("../../collection-item").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
        };
    }>, {}, {
        cssClass: string;
        stateSelected: ICollectionItemAttributes[];
        stateItems: ICollectionItemAttributes[];
        currentIndex: number;
        isFocused: boolean;
    }, {}, {
        watcherHandlerItems(value: ICollectionItemAttributes[]): void;
        initItems(): ICollectionItemAttributes[];
        initSelected(): ICollectionItemAttributes[];
        toggleItemSelected(item: ICollectionItemAttributes): void;
        onClickItem({ event, item }: {
            event: MouseEvent;
            item: ICollectionItemAttributes;
        }): void;
        count(): number;
        isEmpty(): boolean;
        isSelected(): boolean;
        getItemByValue(value: import("../../../types").TValue): ICollectionItemAttributes | undefined;
        getIndexByValue(value: import("../../../types").TValue): number;
        removeSelectedItem(value: import("../../../types").TValue): boolean;
        updateSelected(value: import("../../../types").TValue, selected: boolean, forward?: boolean): boolean;
        sendEventSelectedItems(): void;
        resetSelected(): void;
        searchByValue(value: import("../../../types").TValue | import("../../../types").TValue[] | undefined): boolean;
        getSelectedText(): string | undefined;
        getSelectedValue(): import("../../../types").TValue | import("../../../types").TValue[] | null;
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
            default: any;
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
    }>, {}, {
        stateDisabled: boolean | undefined;
    }, {
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
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
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
        items: any[];
        selected: any;
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
            default: import("../../collection-item").IEventSelected | undefined;
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
        items: any[];
        selected: any;
        separator: string | undefined;
        multiple: boolean | undefined;
        singleSelection: boolean | undefined;
        noSelect: boolean | undefined;
        onPropItemSelected: import("../../collection-item").IEventSelected | undefined;
        onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
    }, {}, {}, {}, string, () => {
        updateSelected: (value: import("../../../types").TValue, selected: boolean, forward?: boolean) => boolean;
    }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        "onMove-item"?: ((...args: any[]) => any) | undefined;
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
                default: any;
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
        }>, {}, {
            stateDisabled: boolean | undefined;
        }, {
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
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
            items: any[];
            selected: any;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
            attributes(): import("../../../types").TAttributes;
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
                default: import("../../collection-item").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: PropType<ICollectionItemAttributes["onPropSelected"]>;
                default: import("../../collection-item").IEventSelected | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../../index.ts").IIconAttributes | null;
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
        }, import("../../../types/types").TClassesMixin | {
            computed: {
                attributes(): import("../../../types").TAttributes;
            };
        }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
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
        }>, {}, {
            stateDisabled: boolean | undefined;
        }, {
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: import("../../collection-item").IEventItemClick | undefined;
            };
            onPropSelected: {
                type: PropType<ICollectionItemAttributes["onPropSelected"]>;
                default: import("../../collection-item").IEventSelected | undefined;
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
            onPropClick: import("../../collection-item").IEventItemClick | undefined;
            selected: boolean | undefined;
            readonly: boolean | undefined;
            required: boolean | undefined;
            toggleable: boolean | undefined;
            draggable: boolean | undefined;
            onPropSelected: import("../../collection-item").IEventSelected | undefined;
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                size: string | number | import("../../../types").ISize | undefined;
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
                default: string | number | import("../../../types").ISize | undefined;
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: string | number | import("../../../types").ISize | undefined;
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
            size: string | number | import("../../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BSelect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../select").ISelectAttributes["items"]>;
            default: import("../../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../../select").ISelectAttributes["selected"]>;
            default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../../select").ISelectAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../../select").ISelectAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../../select").ISelectAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../../select").ISelectAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filter: {
            type: PropType<import("../../select").ISelectAttributes["filter"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../../select").ISelectAttributes["placement"]>;
            default: import("../../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../../select").ISelectAttributes["triggerActivate"]>;
            default: import("../../../types").TTriggerActivate | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../../select").ISelectAttributes["onPropItemSelected"]>;
            default: import("../../collection-item").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../select").ISelectAttributes["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
        };
        placeholder: {
            type: PropType<import("../../select").ISelectAttributes["placeholder"]>;
            default: string | undefined;
        };
        type: {
            type: PropType<import("../../select").ISelectAttributes["type"]>;
            default: any;
        };
        maxlength: {
            type: PropType<import("../../select").ISelectAttributes["maxlength"]>;
            default: number | undefined;
        };
        minlength: {
            type: PropType<import("../../select").ISelectAttributes["minlength"]>;
            default: number | undefined;
        };
        visibility: {
            type: PropType<import("../../select").ISelectAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<import("../../select").ISelectAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: PropType<import("../../select").ISelectAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: PropType<import("../../select").ISelectAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: PropType<import("../../select").ISelectAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../select").ISelectAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        loading: {
            type: PropType<import("../../select").ISelectAttributes["loading"]>;
            default: boolean | import("../../../types").ILoading | undefined;
        };
        simple: {
            type: PropType<import("../../select").ISelectAttributes["simple"]>;
            default: boolean | undefined;
        };
        editable: {
            type: PropType<import("../../select").ISelectAttributes["editable"]>;
            default: boolean | undefined;
        };
        emptyText: {
            type: PropType<import("../../select").ISelectAttributes["emptyText"]>;
            default: string | boolean | undefined;
        };
        showIcon: {
            type: PropType<import("../../select").ISelectAttributes["showIcon"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        showDialog: boolean;
        elementOwner: HTMLElement | undefined;
        cmpInput: InstanceType<typeof import("../../index.ts").BInput> | null;
        cmpDialog: InstanceType<typeof BListBox> | null;
        filterText: string;
        isChangeText: boolean;
    }, {
        classes(): import("../../../types").TClasses;
        effectiveItems(): ICollectionItemAttributes[];
    }, {
        toggleDropDown(): void;
        onClickToggleDropDown(): void;
        onInputClick(): void;
        openDropDown(): void;
        hideDropDown(): void;
        nextActiveItem(init?: boolean): void;
        prevActiveItem(close?: boolean): void;
        onInput(event: InputEvent): void;
        onInputKeyDown(event: KeyboardEvent): void;
        onSelectedItem(data: ICollectionItemAttributes): void;
        onSelectedItems({ selected, text, value }: {
            selected: ICollectionItemAttributes;
            text: string;
            value: import("../../../types").TValue | import("../../../types").TValue[];
        }): void;
        onInputClear(): void;
        onInputClickClear(): void;
        onMountedInput(input: InstanceType<typeof import("../../index.ts").BInput>): void;
        onMountedDropDown(instance: InstanceType<typeof import("../../index.ts").BDropDown>): void;
        reset(): void;
        onRemoveTag({ event, item }: {
            event: MouseEvent;
            item: ICollectionItemAttributes;
        }): void;
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
            default: import("../../../types").TState | undefined;
        };
    }>, {}, {
        stateText: string | number | undefined;
        stateState: import("../../../types").TState;
        stateInvalid: boolean;
        stateValue: any;
        stateDisabled: boolean;
        stateName: string;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
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
    }>, {}, {
        stateDisabled: boolean | undefined;
    }, {
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
        stateVisible: boolean;
    }, {
        getId(): import("../../component").IComponentAttributes["id"];
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
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
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
            default: import("../../../types").TState | undefined;
        };
    }>> & Readonly<{}>, {
        readonly: boolean | undefined;
        required: boolean | undefined;
        invalid: boolean | undefined;
        state: import("../../../types").TState | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../../select").ISelectAttributes["items"]>;
            default: import("../../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../../select").ISelectAttributes["selected"]>;
            default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../../select").ISelectAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../../select").ISelectAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../../select").ISelectAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../../select").ISelectAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filter: {
            type: PropType<import("../../select").ISelectAttributes["filter"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../../select").ISelectAttributes["placement"]>;
            default: import("../../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../../select").ISelectAttributes["triggerActivate"]>;
            default: import("../../../types").TTriggerActivate | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../../select").ISelectAttributes["onPropItemSelected"]>;
            default: import("../../collection-item").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../../select").ISelectAttributes["onPropItemsSelected"]>;
            default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
        };
        placeholder: {
            type: PropType<import("../../select").ISelectAttributes["placeholder"]>;
            default: string | undefined;
        };
        type: {
            type: PropType<import("../../select").ISelectAttributes["type"]>;
            default: any;
        };
        maxlength: {
            type: PropType<import("../../select").ISelectAttributes["maxlength"]>;
            default: number | undefined;
        };
        minlength: {
            type: PropType<import("../../select").ISelectAttributes["minlength"]>;
            default: number | undefined;
        };
        visibility: {
            type: PropType<import("../../select").ISelectAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<import("../../select").ISelectAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: PropType<import("../../select").ISelectAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: PropType<import("../../select").ISelectAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: PropType<import("../../select").ISelectAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../select").ISelectAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        loading: {
            type: PropType<import("../../select").ISelectAttributes["loading"]>;
            default: boolean | import("../../../types").ILoading | undefined;
        };
        simple: {
            type: PropType<import("../../select").ISelectAttributes["simple"]>;
            default: boolean | undefined;
        };
        editable: {
            type: PropType<import("../../select").ISelectAttributes["editable"]>;
            default: boolean | undefined;
        };
        emptyText: {
            type: PropType<import("../../select").ISelectAttributes["emptyText"]>;
            default: string | boolean | undefined;
        };
        showIcon: {
            type: PropType<import("../../select").ISelectAttributes["showIcon"]>;
            default: boolean | undefined;
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
        filter: boolean | undefined;
        type: any;
        simple: boolean | undefined;
        loading: boolean | import("../../../types").ILoading | undefined;
        sizeControl: import("../../../types").TSizeControl | undefined;
        visibility: boolean | undefined;
        items: import("../../index.ts").IListBoxItemAttributes[];
        selected: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
        readonly: boolean | undefined;
        wordWrap: boolean | undefined;
        multiple: boolean | undefined;
        onPropItemSelected: import("../../collection-item").IEventSelected | undefined;
        onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
        placement: import("../../../types").TPlacemant | undefined;
        triggerActivate: import("../../../types").TTriggerActivate | undefined;
        maxRows: number | undefined;
        autoWidth: boolean | undefined;
        placeholder: string | undefined;
        maxlength: number | undefined;
        minlength: number | undefined;
        clearButton: boolean | undefined;
        clearWithText: boolean | undefined;
        showStateIcon: boolean | undefined;
        editable: boolean | undefined;
        emptyText: string | boolean | undefined;
        showIcon: boolean | undefined;
    }, {}, {
        BDropDown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            hidden: {
                type: PropType<import("../../index.ts").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: PropType<import("../../index.ts").IDropDownAttributes["items"]>;
                default: import("../../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: PropType<import("../../index.ts").IDropDownAttributes["selected"]>;
                default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: PropType<import("../../index.ts").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: PropType<import("../../index.ts").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../../index.ts").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../../index.ts").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: PropType<import("../../index.ts").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../../index.ts").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../../collection-item").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: PropType<import("../../index.ts").IDropDownAttributes["placement"]>;
                default: import("../../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../../index.ts").IDropDownAttributes["triggerActivate"]>;
                default: import("../../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../../index.ts").IDropDownAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: PropType<import("../../index.ts").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../../index.ts").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../../index.ts").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../../index.ts").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../../index.ts").IDropDownAttributes["teleportTo"]>;
                default: string | HTMLElement | undefined;
            };
        }>, {}, {
            cmpControl: InstanceType<typeof import("../../index.ts").BDropDownComponent> | null;
            registeredElements: HTMLElement[];
        }, {
            classes(): import("../../../types").TClasses;
        }, {
            onSelectedItem(data: ICollectionItemAttributes): void;
            onSelectedItems({ selected, text, value }: {
                selected: ICollectionItemAttributes;
                text: string;
                value: import("../../../types").TValue | import("../../../types").TValue[];
            }): void;
            onToggleVisible(value: boolean): void;
            onMounted(instance: InstanceType<typeof import("../../index.ts").BDropDownComponent>): void;
            afterShow(): void;
            onClick({ event, item }: {
                event: MouseEvent;
                item: ICollectionItemAttributes;
            }): void;
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
                default: any;
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
        }>, {}, {
            stateDisabled: boolean | undefined;
        }, {
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
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
            items: any[];
            selected: any;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            hidden: {
                type: PropType<import("../../index.ts").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: PropType<import("../../index.ts").IDropDownAttributes["items"]>;
                default: import("../../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: PropType<import("../../index.ts").IDropDownAttributes["selected"]>;
                default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: PropType<import("../../index.ts").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: PropType<import("../../index.ts").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../../index.ts").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../../index.ts").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: PropType<import("../../index.ts").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../../index.ts").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../../collection-item").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: PropType<import("../../index.ts").IDropDownAttributes["placement"]>;
                default: import("../../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../../index.ts").IDropDownAttributes["triggerActivate"]>;
                default: import("../../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../../index.ts").IDropDownAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: PropType<import("../../index.ts").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../../index.ts").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../../index.ts").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../../index.ts").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../../index.ts").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../../index.ts").IDropDownAttributes["teleportTo"]>;
                default: string | HTMLElement | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onMounted?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:text"?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            "onSelected-item"?: ((...args: any[]) => any) | undefined;
            "onSelected-items"?: ((...args: any[]) => any) | undefined;
            "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
        }>, {
            visible: boolean | undefined;
            hidden: boolean | undefined;
            items: import("../../index.ts").IListBoxItemAttributes[];
            selected: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
            wordWrap: boolean | undefined;
            multiple: boolean | undefined;
            singleSelection: boolean | undefined;
            onPropItemSelected: import("../../collection-item").IEventSelected | undefined;
            onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
            teleportTo: string | HTMLElement | undefined;
            placement: import("../../../types").TPlacemant | undefined;
            triggerActivate: import("../../../types").TTriggerActivate | undefined;
            owner: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            offsetTop: number | undefined;
            autoFocus: boolean | undefined;
            autoClose: boolean | undefined;
            filterText: string | undefined;
            maxRows: number | undefined;
            autoWidth: boolean | undefined;
            contextMenu: boolean | undefined;
        }, {}, {
            BDropDownComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                hidden: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                    default: boolean | undefined;
                };
                placement: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                    default: import("../../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                    default: import("../../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                };
                visible: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
                    default: string | HTMLElement | undefined;
                };
            }>, {}, {
                cssClass: string;
                stateVisible: boolean;
                position: {
                    top: string;
                    left: string;
                };
                marginY: number;
                cmpComponent: import("vue").ComponentPublicInstance | null;
                registeredElements: Set<HTMLElement>;
            }, {
                classes(): import("../../../types").TClasses;
                styles(): Record<string, string>;
            }, {
                elementRoot(): HTMLElement;
                elementOwner(): HTMLElement;
                registerElement(element: HTMLElement | HTMLElement[]): void;
                unregisterElement(element: HTMLElement): void;
                isPartOfComponent(target: Node): boolean;
                isOutsideComponent(target: Node): boolean;
                handleDocumentClick(event: MouseEvent): void;
                handleKeyDown(event: KeyboardEvent): void;
                handleFocusOut(event: FocusEvent): void;
                calculatePosition(event?: MouseEvent): {
                    top: string;
                    left: string;
                } | undefined;
                calculateTopStart(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
                calculateTopEnd(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
                calculateBottomStart(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
                calculateBottomEnd(ownerRect: DOMRect, forward?: boolean): import("../../index.ts").TPositionComponent;
                updateComponentPosition(): void;
                calculateInner(ownerRect: DOMRect, event?: MouseEvent): {
                    top: number;
                    left: number;
                };
                onUpdateComponentRect(): void;
                onMountedComponent(cmpComponent: import("vue").ComponentPublicInstance, register?: boolean): void;
                afterShow(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
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
            }>, {}, {
                stateDisabled: boolean | undefined;
            }, {
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                hidden: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                    default: boolean | undefined;
                };
                placement: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                    default: import("../../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                    default: import("../../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                };
                visible: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
                    default: string | HTMLElement | undefined;
                };
            }>> & Readonly<{
                onMounted?: ((...args: any[]) => any) | undefined;
                "onUpdate:text"?: ((...args: any[]) => any) | undefined;
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
            }>, {
                visible: boolean | undefined;
                hidden: boolean | undefined;
                required: boolean | undefined;
                teleportTo: string | HTMLElement | undefined;
                placement: import("../../../types").TPlacemant | undefined;
                triggerActivate: import("../../../types").TTriggerActivate | undefined;
                owner: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                offsetTop: number | undefined;
                autoFocus: boolean | undefined;
                autoClose: boolean | undefined;
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
                copyStateItems: ICollectionItemAttributes[];
                draggedItem: ICollectionItemAttributes | null;
                draggedIndex: number;
            }, {
                classes(): import("../../../types").TClasses;
                outItems(): ICollectionItemAttributes[];
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
                onDrop({ event, value }: {
                    event: DragEvent;
                    value: import("../../../types").TValue;
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
                    default: import("../../collection-item").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                    default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
                };
            }>, {}, {
                cssClass: string;
                stateSelected: ICollectionItemAttributes[];
                stateItems: ICollectionItemAttributes[];
                currentIndex: number;
                isFocused: boolean;
            }, {}, {
                watcherHandlerItems(value: ICollectionItemAttributes[]): void;
                initItems(): ICollectionItemAttributes[];
                initSelected(): ICollectionItemAttributes[];
                toggleItemSelected(item: ICollectionItemAttributes): void;
                onClickItem({ event, item }: {
                    event: MouseEvent;
                    item: ICollectionItemAttributes;
                }): void;
                count(): number;
                isEmpty(): boolean;
                isSelected(): boolean;
                getItemByValue(value: import("../../../types").TValue): ICollectionItemAttributes | undefined;
                getIndexByValue(value: import("../../../types").TValue): number;
                removeSelectedItem(value: import("../../../types").TValue): boolean;
                updateSelected(value: import("../../../types").TValue, selected: boolean, forward?: boolean): boolean;
                sendEventSelectedItems(): void;
                resetSelected(): void;
                searchByValue(value: import("../../../types").TValue | import("../../../types").TValue[] | undefined): boolean;
                getSelectedText(): string | undefined;
                getSelectedValue(): import("../../../types").TValue | import("../../../types").TValue[] | null;
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
                    default: any;
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
            }>, {}, {
                stateDisabled: boolean | undefined;
            }, {
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
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
                items: any[];
                selected: any;
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                    default: import("../../collection-item").IEventSelected | undefined;
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
                items: any[];
                selected: any;
                separator: string | undefined;
                multiple: boolean | undefined;
                singleSelection: boolean | undefined;
                noSelect: boolean | undefined;
                onPropItemSelected: import("../../collection-item").IEventSelected | undefined;
                onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
            }, {}, {}, {}, string, () => {
                updateSelected: (value: import("../../../types").TValue, selected: boolean, forward?: boolean) => boolean;
            }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
                "onMove-item"?: ((...args: any[]) => any) | undefined;
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
                        default: any;
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
                }>, {}, {
                    stateDisabled: boolean | undefined;
                }, {
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: any;
                    };
                }>> & Readonly<{
                    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                }>, {
                    value: any;
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
                    items: any[];
                    selected: any;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                    attributes(): import("../../../types").TAttributes;
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
                        default: import("../../collection-item").IEventItemClick | undefined;
                    };
                    onPropSelected: {
                        type: PropType<ICollectionItemAttributes["onPropSelected"]>;
                        default: import("../../collection-item").IEventSelected | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                    iconProps: import("../../index.ts").IIconAttributes | null;
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
                }, import("../../../types/types").TClassesMixin | {
                    computed: {
                        attributes(): import("../../../types").TAttributes;
                    };
                }, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    value: {
                        type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
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
                }>, {}, {
                    stateDisabled: boolean | undefined;
                }, {
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: import("../../collection-item").IEventItemClick | undefined;
                    };
                    onPropSelected: {
                        type: PropType<ICollectionItemAttributes["onPropSelected"]>;
                        default: import("../../collection-item").IEventSelected | undefined;
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
                    onPropClick: import("../../collection-item").IEventItemClick | undefined;
                    selected: boolean | undefined;
                    readonly: boolean | undefined;
                    required: boolean | undefined;
                    toggleable: boolean | undefined;
                    draggable: boolean | undefined;
                    onPropSelected: import("../../collection-item").IEventSelected | undefined;
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        size: string | number | import("../../../types").ISize | undefined;
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
                        default: string | number | import("../../../types").ISize | undefined;
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: string | number | import("../../../types").ISize | undefined;
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
                    size: string | number | import("../../../types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            placeholder: {
                type: PropType<import("../../index.ts").IInputAttributes["placeholder"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../../index.ts").IInputAttributes["type"]>;
                default: any;
            };
            pattern: {
                type: PropType<import("../../index.ts").IInputAttributes["pattern"]>;
                default: string | undefined;
            };
            required: {
                type: PropType<import("../../index.ts").IInputAttributes["required"]>;
                default: boolean | undefined;
            };
            autocomplete: {
                type: PropType<import("../../index.ts").IInputAttributes["autocomplete"]>;
                default: string | undefined;
            };
            maxlength: {
                type: PropType<import("../../index.ts").IInputAttributes["maxlength"]>;
                default: number | undefined;
            };
            minlength: {
                type: PropType<import("../../index.ts").IInputAttributes["minlength"]>;
                default: number | undefined;
            };
            visibility: {
                type: PropType<import("../../index.ts").IInputAttributes["visibility"]>;
                default: boolean | undefined;
            };
            clearButton: {
                type: PropType<import("../../index.ts").IInputAttributes["clearButton"]>;
                default: boolean | undefined;
            };
            clearWithText: {
                type: PropType<import("../../index.ts").IInputAttributes["clearWithText"]>;
                default: boolean | undefined;
            };
            showStateIcon: {
                type: PropType<import("../../index.ts").IInputAttributes["showStateIcon"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").IInputAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            loading: {
                type: PropType<import("../../index.ts").IInputAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            simple: {
                type: PropType<import("../../index.ts").IInputAttributes["simple"]>;
                default: boolean | undefined;
            };
            asSelect: {
                type: PropType<import("../../index.ts").IInputAttributes["asSelect"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateVisibility: boolean | undefined;
            stateLoading: import("../../../types").ILoading;
            keysup: string[];
            keysdown: string[];
        }, {
            classes(): import("../../../types").TClasses;
            effectiveType(): import("../../index.ts").TInputType;
            visibleClearButton(): boolean;
        }, {
            onVisibility(): void;
            onClear(event: Event): void;
            onInput(event: Event): void;
            focus(): void;
            reset(): void;
            validateInput(event: Event): void;
            onChange(event: Event): void;
            onClickBody(event: Event): void;
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
                default: import("../../../types").TState | undefined;
            };
        }>, {}, {
            stateText: string | number | undefined;
            stateState: import("../../../types").TState;
            stateInvalid: boolean;
            stateValue: any;
            stateDisabled: boolean;
            stateName: string;
        }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
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
        }>, {}, {
            stateDisabled: boolean | undefined;
        }, {
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
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
                default: import("../../../types").TState | undefined;
            };
        }>> & Readonly<{}>, {
            readonly: boolean | undefined;
            required: boolean | undefined;
            invalid: boolean | undefined;
            state: import("../../../types").TState | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value" | "update:visibility" | "change" | "click-clear" | "click-body")[], "clear" | "update:text" | "update:value" | "update:visibility" | "change" | "click-clear" | "click-body", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            placeholder: {
                type: PropType<import("../../index.ts").IInputAttributes["placeholder"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../../index.ts").IInputAttributes["type"]>;
                default: any;
            };
            pattern: {
                type: PropType<import("../../index.ts").IInputAttributes["pattern"]>;
                default: string | undefined;
            };
            required: {
                type: PropType<import("../../index.ts").IInputAttributes["required"]>;
                default: boolean | undefined;
            };
            autocomplete: {
                type: PropType<import("../../index.ts").IInputAttributes["autocomplete"]>;
                default: string | undefined;
            };
            maxlength: {
                type: PropType<import("../../index.ts").IInputAttributes["maxlength"]>;
                default: number | undefined;
            };
            minlength: {
                type: PropType<import("../../index.ts").IInputAttributes["minlength"]>;
                default: number | undefined;
            };
            visibility: {
                type: PropType<import("../../index.ts").IInputAttributes["visibility"]>;
                default: boolean | undefined;
            };
            clearButton: {
                type: PropType<import("../../index.ts").IInputAttributes["clearButton"]>;
                default: boolean | undefined;
            };
            clearWithText: {
                type: PropType<import("../../index.ts").IInputAttributes["clearWithText"]>;
                default: boolean | undefined;
            };
            showStateIcon: {
                type: PropType<import("../../index.ts").IInputAttributes["showStateIcon"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").IInputAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            loading: {
                type: PropType<import("../../index.ts").IInputAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            simple: {
                type: PropType<import("../../index.ts").IInputAttributes["simple"]>;
                default: boolean | undefined;
            };
            asSelect: {
                type: PropType<import("../../index.ts").IInputAttributes["asSelect"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:text"?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            onClear?: ((...args: any[]) => any) | undefined;
            "onUpdate:visibility"?: ((...args: any[]) => any) | undefined;
            "onClick-clear"?: ((...args: any[]) => any) | undefined;
            "onClick-body"?: ((...args: any[]) => any) | undefined;
        }>, {
            type: any;
            pattern: string | undefined;
            simple: boolean | undefined;
            loading: boolean | import("../../../types").ILoading | undefined;
            sizeControl: import("../../../types").TSizeControl | undefined;
            visibility: boolean | undefined;
            required: boolean | undefined;
            placeholder: string | undefined;
            autocomplete: string | undefined;
            maxlength: number | undefined;
            minlength: number | undefined;
            clearButton: boolean | undefined;
            clearWithText: boolean | undefined;
            showStateIcon: boolean | undefined;
            asSelect: boolean | undefined;
        }, {}, {
            BButtonClear: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                invisible: {
                    type: PropType<import("../../index.ts").IButtonClearAttributes["invisible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {
                classes(): import("../../../types").TClasses;
            }, {
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: PropType<import("../../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                effectiveSizeControl(): ESizeControl;
                effectiveDisabled(): boolean;
            }, {
                onClick(event: MouseEvent): void;
            }, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
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
            }>, {}, {
                stateDisabled: boolean | undefined;
            }, {
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: PropType<import("../../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                sizeControl: import("../../../types").TSizeControl | undefined;
            }, {}, {
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
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                        default: import("../../../types").IEventHandler | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                    iconProps: import("../../index.ts").IIconAttributes | null;
                    stateDisabled: boolean;
                    stateLoading: import("../../../types").ILoading;
                }, {
                    getComponentParams(): {
                        tag: string;
                        attrs: Record<string, any>;
                    };
                    attrs(): Record<string, any>;
                    classes(): import("../../../types").TClasses;
                    getComponent(): string;
                    listeners(): Record<string, any>;
                }, {
                    onClick(event: MouseEvent): void;
                    setLoading(value: boolean | import("../../../types").ILoading): void;
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
                }>, {}, {
                    stateDisabled: boolean | undefined;
                }, {
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                        default: import("../../../types").IEventHandler | undefined;
                    };
                }>> & Readonly<{
                    onClick?: ((...args: any[]) => any) | undefined;
                }>, {
                    type: import("../../../types").TComponentVariantType | undefined;
                    form: import("../../button/types").TFormType | undefined;
                    icon: any;
                    href: string | undefined;
                    outlined: boolean | undefined;
                    plain: boolean | undefined;
                    simple: boolean | undefined;
                    target: import("../../button/types").TTarget | undefined;
                    to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    loading: boolean | import("../../../types").ILoading | undefined;
                    sizeControl: import("../../../types").TSizeControl | undefined;
                    asLabel: boolean | undefined;
                    onPropClick: import("../../../types").IEventHandler | undefined;
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        size: string | number | import("../../../types").ISize | undefined;
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
                            default: import("../../../types").TSizeControl;
                        };
                    }>, {}, {
                        cssClass: string;
                    }, {
                        classes(): import("../../../types").TClasses;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: import("../../../types").TSizeControl;
                        };
                    }>> & Readonly<{}>, {
                        size: import("../../../types").TSizeControl;
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
                        classes(): import("../../../types").TClasses;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value")[], "clear" | "update:text" | "update:value", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                invisible: {
                    type: PropType<import("../../index.ts").IButtonClearAttributes["invisible"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:text"?: ((...args: any[]) => any) | undefined;
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                onClear?: ((...args: any[]) => any) | undefined;
            }>, {
                invisible: boolean | undefined;
            }, {}, {
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
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                        default: import("../../../types").IEventHandler | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                    iconProps: import("../../index.ts").IIconAttributes | null;
                    stateDisabled: boolean;
                    stateLoading: import("../../../types").ILoading;
                }, {
                    getComponentParams(): {
                        tag: string;
                        attrs: Record<string, any>;
                    };
                    attrs(): Record<string, any>;
                    classes(): import("../../../types").TClasses;
                    getComponent(): string;
                    listeners(): Record<string, any>;
                }, {
                    onClick(event: MouseEvent): void;
                    setLoading(value: boolean | import("../../../types").ILoading): void;
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
                }>, {}, {
                    stateDisabled: boolean | undefined;
                }, {
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                        default: import("../../../types").IEventHandler | undefined;
                    };
                }>> & Readonly<{
                    onClick?: ((...args: any[]) => any) | undefined;
                }>, {
                    type: import("../../../types").TComponentVariantType | undefined;
                    form: import("../../button/types").TFormType | undefined;
                    icon: any;
                    href: string | undefined;
                    outlined: boolean | undefined;
                    plain: boolean | undefined;
                    simple: boolean | undefined;
                    target: import("../../button/types").TTarget | undefined;
                    to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    loading: boolean | import("../../../types").ILoading | undefined;
                    sizeControl: import("../../../types").TSizeControl | undefined;
                    asLabel: boolean | undefined;
                    onPropClick: import("../../../types").IEventHandler | undefined;
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        size: string | number | import("../../../types").ISize | undefined;
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
                            default: import("../../../types").TSizeControl;
                        };
                    }>, {}, {
                        cssClass: string;
                    }, {
                        classes(): import("../../../types").TClasses;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: import("../../../types").TSizeControl;
                        };
                    }>> & Readonly<{}>, {
                        size: import("../../../types").TSizeControl;
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
                        classes(): import("../../../types").TClasses;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                size: string | number | import("../../../types").ISize | undefined;
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
                    default: import("../../../types").TSizeControl;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types").TClasses;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: import("../../../types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../../types").TSizeControl;
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
                classes(): import("../../../types").TClasses;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
        }, {}, string, () => {
            sizeControl: import("vue").ComputedRef<import("../../../types").TSizeControl | undefined>;
            disabled: import("vue").ComputedRef<boolean>;
            visibility: import("vue").ComputedRef<boolean | undefined>;
            onVisibility: () => void;
        }, true, {}, any>;
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
                default: string | number | import("../../../types").ISize | undefined;
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: string | number | import("../../../types").ISize | undefined;
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
            size: string | number | import("../../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BTags: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../../index.ts").ITagsAttributes["items"]>;
                default: import("../../tags/types").ITagItemAttributes[];
            };
            type: {
                type: PropType<import("../../index.ts").ITagsAttributes["type"]>;
                default: import("../../../types").TComponentVariantType | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").ITagsAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
        }>, {}, {
            stateItems: any[];
        }, {
            classes(): import("../../../types").TClasses;
        }, {
            onClick(event: MouseEvent, item: import("../../tags/types").ITagItemAttributes): void;
            onRemove(event: MouseEvent, item: import("../../tags/types").ITagItemAttributes): void;
            onKeyDown(event: KeyboardEvent, item: import("../../tags/types").ITagItemAttributes): void;
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
                default: any;
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
        }>, {}, {
            stateDisabled: boolean | undefined;
        }, {
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
            stateVisible: boolean;
        }, {
            getId(): import("../../component").IComponentAttributes["id"];
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
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
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
            items: any[];
            selected: any;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "change" | "remove" | "update:items")[], "click" | "change" | "remove" | "update:items", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../../index.ts").ITagsAttributes["items"]>;
                default: import("../../tags/types").ITagItemAttributes[];
            };
            type: {
                type: PropType<import("../../index.ts").ITagsAttributes["type"]>;
                default: import("../../../types").TComponentVariantType | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").ITagsAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            onClick?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
            "onUpdate:items"?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("../../../types").TComponentVariantType | undefined;
            sizeControl: import("../../../types").TSizeControl | undefined;
            items: import("../../tags/types").ITagItemAttributes[];
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: string | number | import("../../../types").ISize | undefined;
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
                size: string | number | import("../../../types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BTag: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                type: {
                    type: PropType<import("../../index.ts").ITagAttributes["type"]>;
                    default: import("../../../types").TComponentVariantType | undefined;
                };
                sizeControl: {
                    type: PropType<import("../../index.ts").ITagAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../../index.ts").ITagAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                outlined: {
                    type: PropType<import("../../index.ts").ITagAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: PropType<import("../../index.ts").ITagAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: PropType<import("../../index.ts").ITagAttributes["simple"]>;
                    default: boolean | undefined;
                };
                loading: {
                    type: PropType<import("../../index.ts").ITagAttributes["loading"]>;
                    default: boolean | import("../../../types").ILoading | undefined;
                };
                onPropClick: {
                    type: PropType<import("../../index.ts").ITagAttributes["onPropClick"]>;
                    default: import("../../../types").IEventHandler | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types").TClasses;
            }, {
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
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
            }>, {}, {
                stateDisabled: boolean | undefined;
            }, {
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
                stateVisible: boolean;
            }, {
                getId(): import("../../component").IComponentAttributes["id"];
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
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "remove")[], "click" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: PropType<import("../../index.ts").ITagAttributes["type"]>;
                    default: import("../../../types").TComponentVariantType | undefined;
                };
                sizeControl: {
                    type: PropType<import("../../index.ts").ITagAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../../index.ts").ITagAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                outlined: {
                    type: PropType<import("../../index.ts").ITagAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: PropType<import("../../index.ts").ITagAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: PropType<import("../../index.ts").ITagAttributes["simple"]>;
                    default: boolean | undefined;
                };
                loading: {
                    type: PropType<import("../../index.ts").ITagAttributes["loading"]>;
                    default: boolean | import("../../../types").ILoading | undefined;
                };
                onPropClick: {
                    type: PropType<import("../../index.ts").ITagAttributes["onPropClick"]>;
                    default: import("../../../types").IEventHandler | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                onRemove?: ((...args: any[]) => any) | undefined;
            }>, {
                type: import("../../../types").TComponentVariantType | undefined;
                outlined: boolean | undefined;
                plain: boolean | undefined;
                simple: boolean | undefined;
                loading: boolean | import("../../../types").ILoading | undefined;
                sizeControl: import("../../../types").TSizeControl | undefined;
                asLabel: boolean | undefined;
                onPropClick: import("../../../types").IEventHandler | undefined;
            }, {}, {
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
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                        default: import("../../../types").IEventHandler | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                    iconProps: import("../../index.ts").IIconAttributes | null;
                    stateDisabled: boolean;
                    stateLoading: import("../../../types").ILoading;
                }, {
                    getComponentParams(): {
                        tag: string;
                        attrs: Record<string, any>;
                    };
                    attrs(): Record<string, any>;
                    classes(): import("../../../types").TClasses;
                    getComponent(): string;
                    listeners(): Record<string, any>;
                }, {
                    onClick(event: MouseEvent): void;
                    setLoading(value: boolean | import("../../../types").ILoading): void;
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
                }>, {}, {
                    stateDisabled: boolean | undefined;
                }, {
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
                        default: import("../../../types").IEventHandler | undefined;
                    };
                }>> & Readonly<{
                    onClick?: ((...args: any[]) => any) | undefined;
                }>, {
                    type: import("../../../types").TComponentVariantType | undefined;
                    form: import("../../button/types").TFormType | undefined;
                    icon: any;
                    href: string | undefined;
                    outlined: boolean | undefined;
                    plain: boolean | undefined;
                    simple: boolean | undefined;
                    target: import("../../button/types").TTarget | undefined;
                    to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    loading: boolean | import("../../../types").ILoading | undefined;
                    sizeControl: import("../../../types").TSizeControl | undefined;
                    asLabel: boolean | undefined;
                    onPropClick: import("../../../types").IEventHandler | undefined;
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: string | number | import("../../../types").ISize | undefined;
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
                        size: string | number | import("../../../types").ISize | undefined;
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
                            default: import("../../../types").TSizeControl;
                        };
                    }>, {}, {
                        cssClass: string;
                    }, {
                        classes(): import("../../../types").TClasses;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                            default: import("../../../types").TSizeControl;
                        };
                    }>> & Readonly<{}>, {
                        size: import("../../../types").TSizeControl;
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
                        classes(): import("../../../types").TClasses;
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
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../component").IComponentAttributes["id"];
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
                        default: string | number | import("../../../types").ISize | undefined;
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
                    stateVisible: boolean;
                }, {
                    getId(): import("../../component").IComponentAttributes["id"];
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
                        default: string | number | import("../../../types").ISize | undefined;
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
                    size: string | number | import("../../../types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
