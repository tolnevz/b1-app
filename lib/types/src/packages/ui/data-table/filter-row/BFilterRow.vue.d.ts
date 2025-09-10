import { type PropType } from 'vue';
import type { IFilterRowAttributes } from './types';
import type { IFilterComponentAttributes } from './../filter-component/types.d';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<IFilterRowAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[] | undefined;
    };
    showSelection: {
        type: PropType<IFilterRowAttributes["showSelection"]>;
        default: boolean | undefined;
    };
    showHighlighted: {
        type: PropType<IFilterRowAttributes["showHighlighted"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
    filters: IFilterComponentAttributes[];
}, {}, {
    updateFilters(data: IFilterComponentAttributes): void;
    /**
     * Compare filters for equality (old and new)
     * @param {IFilterComponentAttributes[]} oldFilters - Old filters
     * @param {IFilterComponentAttributes[]} filters - New filters
     * @returns {boolean} - Are filters equal
     */
    areFiltersEqual(oldFilters: IFilterComponentAttributes[], filters: IFilterComponentAttributes[]): boolean;
    onChangeFilter(data: IFilterComponentAttributes): void;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("change-filter" | "change-filters")[], "change-filter" | "change-filters", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<IFilterRowAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[] | undefined;
    };
    showSelection: {
        type: PropType<IFilterRowAttributes["showSelection"]>;
        default: boolean | undefined;
    };
    showHighlighted: {
        type: PropType<IFilterRowAttributes["showHighlighted"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onChange-filter"?: ((...args: any[]) => any) | undefined;
    "onChange-filters"?: ((...args: any[]) => any) | undefined;
}>, {
    columns: import("../index.ts").IColumnAttributes[] | undefined;
    showSelection: boolean | undefined;
    showHighlighted: boolean | undefined;
}, {}, {
    BFilterCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        column: {
            type: PropType<import("../filter-cell/types").IFilterCellAttributes["column"]>;
            default: import("../index.ts").IColumnAttributes;
        };
        minWidth: {
            type: PropType<import("../filter-cell/types").IFilterCellAttributes["minWidth"]>;
            default: number | undefined;
        };
    }>, {}, {
        cssClass: string;
        visibleMenu: boolean;
    }, {
        isBelowMinWidth(): boolean;
    }, {
        onShowMenu(): void;
        onChangeFilter(data: IFilterComponentAttributes): void;
        onClear(): void;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "change-filter"[], "change-filter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        column: {
            type: PropType<import("../filter-cell/types").IFilterCellAttributes["column"]>;
            default: import("../index.ts").IColumnAttributes;
        };
        minWidth: {
            type: PropType<import("../filter-cell/types").IFilterCellAttributes["minWidth"]>;
            default: number | undefined;
        };
    }>> & Readonly<{
        "onChange-filter"?: ((...args: any[]) => any) | undefined;
    }>, {
        column: import("../index.ts").IColumnAttributes;
        minWidth: number | undefined;
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
            sizeControl: {
                type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../../types/types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
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
            sizeControl: {
                type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../../types/types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
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
            sizeControl: import("../../../types/types").TSizeControl | undefined;
            asLabel: boolean | undefined;
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
        BButtonClear: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            invisible: {
                type: PropType<import("../../index.ts").IButtonClearAttributes["invisible"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            classes(): import("../../../types/types").TClasses;
        }, {
            onClick(event: MouseEvent): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            sizeControl: {
                type: PropType<import("../../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                default: import("../../../types/types").TSizeControl | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            effectiveSizeControl(): import("../../../types/types").ESizeControl;
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
                default: import("../../../types/types").TSizeControl | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            sizeControl: import("../../../types/types").TSizeControl | undefined;
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
                sizeControl: {
                    type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../../types/types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
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
                sizeControl: {
                    type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../../types/types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
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
                sizeControl: import("../../../types/types").TSizeControl | undefined;
                asLabel: boolean | undefined;
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
                sizeControl: {
                    type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../../types/types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
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
                sizeControl: {
                    type: PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../../types/types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
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
                sizeControl: import("../../../types/types").TSizeControl | undefined;
                asLabel: boolean | undefined;
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
                default: import("../../../types/types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../../types/types").TTriggerActivate | undefined;
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
            classes(): import("../../../types/types").TClasses;
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
                default: import("../../../types/types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../../types/types").TTriggerActivate | undefined;
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
            placement: import("../../../types/types").TPlacemant | undefined;
            triggerActivate: import("../../../types/types").TTriggerActivate | undefined;
            owner: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            offsetTop: number | undefined;
            autoFocus: boolean | undefined;
            autoClose: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BFilterComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<IFilterComponentAttributes["field"]>;
                default: string | undefined;
            };
            operation: {
                type: PropType<IFilterComponentAttributes["operation"]>;
                default: any;
            };
            operations: {
                type: PropType<IFilterComponentAttributes["operations"]>;
                default: any[] | undefined;
            };
            value: {
                type: PropType<IFilterComponentAttributes["value"]>;
                default: any;
            };
            showOperation: {
                type: PropType<IFilterComponentAttributes["showOperation"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateText: string | number | undefined;
            stateValue: any;
            stateOperation: import("../filter-operation/types").IFilterOperationItem | undefined;
            stateOperations: string[];
            registeredElements: HTMLElement[];
        }, {
            operationText(): any;
            operationsProps(): Record<string, boolean>;
        }, {
            change(): void;
            onChangeOperation(item: import("../filter-operation/types").IFilterOperationItem): void;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:value" | "change")[], "update:value" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<IFilterComponentAttributes["field"]>;
                default: string | undefined;
            };
            operation: {
                type: PropType<IFilterComponentAttributes["operation"]>;
                default: any;
            };
            operations: {
                type: PropType<IFilterComponentAttributes["operations"]>;
                default: any[] | undefined;
            };
            value: {
                type: PropType<IFilterComponentAttributes["value"]>;
                default: any;
            };
            showOperation: {
                type: PropType<IFilterComponentAttributes["showOperation"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
            field: string | undefined;
            operation: any;
            showOperation: boolean | undefined;
            operations: any[] | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
