import { type PropType, type ComponentPublicInstance } from 'vue';
import type { IDateRangeAttributes } from './types';
import type { TClasses } from '../../types';
import { BDate, type IUseDate, type TDate, type ICellDay } from '../date';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    date1: {
        type: PropType<IDateRangeAttributes["date1"]>;
        default: Date | undefined;
    };
    date2: {
        type: PropType<IDateRangeAttributes["date2"]>;
        default: Date | undefined;
    };
    text1: {
        type: PropType<IDateRangeAttributes["text1"]>;
        default: string | undefined;
    };
    text2: {
        type: PropType<IDateRangeAttributes["text2"]>;
        default: string | undefined;
    };
    value1: {
        type: PropType<IDateRangeAttributes["value1"]>;
        default: number | undefined;
    };
    value2: {
        type: PropType<IDateRangeAttributes["value2"]>;
        default: number | undefined;
    };
    format: {
        type: PropType<IDateRangeAttributes["format"]>;
        default(): string | undefined;
    };
    text: {
        type: PropType<IDateRangeAttributes["text"]>;
        default: string | number | undefined;
    };
    value: {
        type: PropType<IDateRangeAttributes["value"]>;
        default: any;
    };
    minDate: {
        type: PropType<IDateRangeAttributes["minDate"]>;
        default: string | number | Date | undefined;
    };
    maxDate: {
        type: PropType<IDateRangeAttributes["maxDate"]>;
        default: string | number | Date | undefined;
    };
    firstDate: {
        type: PropType<IDateRangeAttributes["firstDate"]>;
        default: boolean | undefined;
    };
    secondDate: {
        type: PropType<IDateRangeAttributes["secondDate"]>;
        default: boolean | undefined;
    };
}>, {}, {
    cssClass: string;
    stateDate1: IUseDate | null;
    stateDate2: IUseDate | null;
    stateMinDate: number;
    stateMaxDate: number;
    selectionDate2: number;
    selected: IUseDate[];
    calendar1: InstanceType<typeof BDate> | null;
    calendar2: InstanceType<typeof BDate> | null;
    invalid: boolean;
}, {
    classes(): TClasses;
}, {
    /**
     * Validate the date
     * @param {TDate} value
     * @returns {boolean}
     */
    validateDate(value: TDate): boolean;
    /**
     * Change the date depending on the selected value
     * @param value TDate
     * @param old TDate | null
     * @param stateKey 'stateDate1' | 'stateDate2'
     */
    handleDateChange(value: TDate, old: TDate | null, stateKey: "stateDate1" | "stateDate2"): void;
    /**
     * Emit change event
     * @param IUseDate date1
     * @param IUseDate date2
     */
    emitChange(date1: IUseDate | null, date2: IUseDate | null): void;
    /**
     * Update Calendares
     */
    updateCalendares(): void;
    /**
     * Get count days
     * @returns number
     */
    getCountDays(): number;
    /**
     * Is begin selected
     * @returns boolean
     */
    isBeginSelected(): boolean;
    /**
     * Add selected date
     * @param date IUseDate
     */
    addSelected(date: IUseDate): void;
    /**
     * Get selected index
     * @param unixTime number
     * @returns number
     */
    getSelectedIndex(unixTime: number): number;
    handleToggleSelected(date: Date, calendar: InstanceType<typeof BDate> | null, otherCalendar: InstanceType<typeof BDate> | null): void;
    reset(): void;
    onPeriodChange1({ month, year }: {
        month: number;
        year: number;
    }): void;
    onPeriodChange2({ month, year }: {
        month: number;
        year: number;
    }): void;
    onMountedDate1(instance: InstanceType<typeof BDate>): void;
    onMountedDate2(instance: InstanceType<typeof BDate>): void;
    additionalClass(item: ICellDay): string;
    onMouseEnterDay(item: ICellDay): void;
    onError({ error }: {
        error: Error;
    }): void;
    onClick1({ event, date, unixTime, text }: {
        event: MouseEvent;
        date: Date;
        unixTime: number;
        text: string;
    }): void;
    onClick2({ event, date, unixTime, text }: {
        event: MouseEvent;
        date: Date;
        unixTime: number;
        text: string;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "click" | "change" | "range" | "count" | "update:date1" | "update:date2" | "update:text1" | "update:text2" | "update:value1" | "update:value2")[], "error" | "click" | "change" | "range" | "count" | "update:date1" | "update:date2" | "update:text1" | "update:text2" | "update:value1" | "update:value2", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    date1: {
        type: PropType<IDateRangeAttributes["date1"]>;
        default: Date | undefined;
    };
    date2: {
        type: PropType<IDateRangeAttributes["date2"]>;
        default: Date | undefined;
    };
    text1: {
        type: PropType<IDateRangeAttributes["text1"]>;
        default: string | undefined;
    };
    text2: {
        type: PropType<IDateRangeAttributes["text2"]>;
        default: string | undefined;
    };
    value1: {
        type: PropType<IDateRangeAttributes["value1"]>;
        default: number | undefined;
    };
    value2: {
        type: PropType<IDateRangeAttributes["value2"]>;
        default: number | undefined;
    };
    format: {
        type: PropType<IDateRangeAttributes["format"]>;
        default(): string | undefined;
    };
    text: {
        type: PropType<IDateRangeAttributes["text"]>;
        default: string | number | undefined;
    };
    value: {
        type: PropType<IDateRangeAttributes["value"]>;
        default: any;
    };
    minDate: {
        type: PropType<IDateRangeAttributes["minDate"]>;
        default: string | number | Date | undefined;
    };
    maxDate: {
        type: PropType<IDateRangeAttributes["maxDate"]>;
        default: string | number | Date | undefined;
    };
    firstDate: {
        type: PropType<IDateRangeAttributes["firstDate"]>;
        default: boolean | undefined;
    };
    secondDate: {
        type: PropType<IDateRangeAttributes["secondDate"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onRange?: ((...args: any[]) => any) | undefined;
    onCount?: ((...args: any[]) => any) | undefined;
    "onUpdate:date1"?: ((...args: any[]) => any) | undefined;
    "onUpdate:date2"?: ((...args: any[]) => any) | undefined;
    "onUpdate:text1"?: ((...args: any[]) => any) | undefined;
    "onUpdate:text2"?: ((...args: any[]) => any) | undefined;
    "onUpdate:value1"?: ((...args: any[]) => any) | undefined;
    "onUpdate:value2"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
    text: string | number | undefined;
    format: string | undefined;
    minDate: string | number | Date | undefined;
    maxDate: string | number | Date | undefined;
    date1: Date | undefined;
    date2: Date | undefined;
    text1: string | undefined;
    text2: string | undefined;
    value1: number | undefined;
    value2: number | undefined;
    firstDate: boolean | undefined;
    secondDate: boolean | undefined;
}, {}, {
    BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        href: {
            type: PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("../button").IButtonEvents["onPropClick"]>;
            default: import("../../types").IEventHandler | undefined;
        };
    }>, {}, {
        cssClass: string;
        iconProps: import("../index.ts").IIconAttributes | null;
        stateDisabled: boolean;
        stateLoading: import("../../types").ILoading;
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
        setLoading(value: boolean | import("../../types").ILoading): void;
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
            type: PropType<import("../button").IButtonAttributes["href"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../button").IButtonAttributes["icon"]>;
            default: any;
        };
        outlined: {
            type: PropType<import("../button").IButtonAttributes["outlined"]>;
            default: boolean | undefined;
        };
        plain: {
            type: PropType<import("../button").IButtonAttributes["plain"]>;
            default: boolean | undefined;
        };
        simple: {
            type: PropType<import("../button").IButtonAttributes["simple"]>;
            default: boolean | undefined;
        };
        target: {
            type: PropType<import("../button").IButtonAttributes["target"]>;
            default: import("../button/types").TTarget | undefined;
        };
        to: {
            type: PropType<import("../button").IButtonAttributes["to"]>;
            default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        };
        type: {
            type: PropType<import("../button").IButtonAttributes["type"]>;
            default: import("../../types").TComponentVariantType | undefined;
        };
        form: {
            type: PropType<import("../button").IButtonAttributes["form"]>;
            default: import("../button/types").TFormType | undefined;
        };
        loading: {
            type: PropType<import("../button").IButtonAttributes["loading"]>;
            default: boolean | import("../../types").ILoading | undefined;
        };
        sizeControl: {
            type: PropType<import("../button").IButtonAttributes["sizeControl"]>;
            default: import("../../types").TSizeControl | undefined;
        };
        asLabel: {
            type: PropType<import("../button").IButtonAttributes["asLabel"]>;
            default: boolean | undefined;
        };
        onPropClick: {
            type: PropType<import("../button").IButtonEvents["onPropClick"]>;
            default: import("../../types").IEventHandler | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        type: import("../../types").TComponentVariantType | undefined;
        form: import("../button/types").TFormType | undefined;
        icon: any;
        href: string | undefined;
        outlined: boolean | undefined;
        plain: boolean | undefined;
        simple: boolean | undefined;
        target: import("../button/types").TTarget | undefined;
        to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        loading: boolean | import("../../types").ILoading | undefined;
        sizeControl: import("../../types").TSizeControl | undefined;
        asLabel: boolean | undefined;
        onPropClick: import("../../types").IEventHandler | undefined;
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
                default: string | number | import("../../types").ISize | undefined;
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
                default: string | number | import("../../types").ISize | undefined;
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
            size: string | number | import("../../types").ISize | undefined;
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
                default: import("../../types").TSizeControl;
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
                default: import("../../types").TSizeControl;
            };
        }>> & Readonly<{}>, {
            size: import("../../types").TSizeControl;
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
    BDropDown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        hidden: {
            type: PropType<import("../drop-down").IDropDownAttributes["hidden"]>;
            default: boolean | undefined;
        };
        items: {
            type: PropType<import("../drop-down").IDropDownAttributes["items"]>;
            default: import("../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../drop-down").IDropDownAttributes["selected"]>;
            default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../drop-down").IDropDownAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../drop-down").IDropDownAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../drop-down").IDropDownAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../drop-down").IDropDownAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filterText: {
            type: PropType<import("../drop-down").IDropDownAttributes["filterText"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../drop-down").IDropDownAttributes["singleSelection"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../drop-down").IDropDownAttributes["onPropItemSelected"]>;
            default: import("../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../drop-down").IDropDownAttributes["onPropItemsSelected"]>;
            default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
        };
        placement: {
            type: PropType<import("../drop-down").IDropDownAttributes["placement"]>;
            default: import("../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../drop-down").IDropDownAttributes["triggerActivate"]>;
            default: import("../../types").TTriggerActivate | undefined;
        };
        owner: {
            type: PropType<import("../drop-down").IDropDownAttributes["owner"]>;
            default: HTMLElement | ComponentPublicInstance | undefined;
        };
        contextMenu: {
            type: PropType<import("../drop-down").IDropDownAttributes["contextMenu"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../drop-down").IDropDownAttributes["visible"]>;
            default: boolean | undefined;
        };
        offsetTop: {
            type: PropType<import("../drop-down").IDropDownAttributes["offsetTop"]>;
            default: number | undefined;
        };
        autoFocus: {
            type: PropType<import("../drop-down").IDropDownAttributes["autoFocus"]>;
            default: boolean | undefined;
        };
        autoClose: {
            type: PropType<import("../drop-down").IDropDownAttributes["autoClose"]>;
            default: boolean | undefined;
        };
        teleportTo: {
            type: PropType<import("../drop-down").IDropDownAttributes["teleportTo"]>;
            default: string | HTMLElement | undefined;
        };
    }>, {}, {
        cmpControl: InstanceType<typeof import("../index.ts").BDropDownComponent> | null;
        registeredElements: HTMLElement[];
    }, {
        classes(): TClasses;
    }, {
        onSelectedItem(data: import("../index.ts").ICollectionItemAttributes): void;
        onSelectedItems({ selected, text, value }: {
            selected: import("../index.ts").ICollectionItemAttributes;
            text: string;
            value: import("../../types").TValue | import("../../types").TValue[];
        }): void;
        onToggleVisible(value: boolean): void;
        onMounted(instance: InstanceType<typeof import("../index.ts").BDropDownComponent>): void;
        afterShow(): void;
        onClick({ event, item }: {
            event: MouseEvent;
            item: import("../index.ts").ICollectionItemAttributes;
        }): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>, {}, {
        cssClass: string;
    }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
            default: unknown[];
        };
        selected: {
            type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
            default: unknown;
        };
    }>> & Readonly<{}>, {
        items: any[];
        selected: any;
    }, {}, {
        BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        hidden: {
            type: PropType<import("../drop-down").IDropDownAttributes["hidden"]>;
            default: boolean | undefined;
        };
        items: {
            type: PropType<import("../drop-down").IDropDownAttributes["items"]>;
            default: import("../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../drop-down").IDropDownAttributes["selected"]>;
            default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../drop-down").IDropDownAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../drop-down").IDropDownAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../drop-down").IDropDownAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../drop-down").IDropDownAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filterText: {
            type: PropType<import("../drop-down").IDropDownAttributes["filterText"]>;
            default: string | undefined;
        };
        singleSelection: {
            type: PropType<import("../drop-down").IDropDownAttributes["singleSelection"]>;
            default: boolean | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../drop-down").IDropDownAttributes["onPropItemSelected"]>;
            default: import("../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../drop-down").IDropDownAttributes["onPropItemsSelected"]>;
            default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
        };
        placement: {
            type: PropType<import("../drop-down").IDropDownAttributes["placement"]>;
            default: import("../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../drop-down").IDropDownAttributes["triggerActivate"]>;
            default: import("../../types").TTriggerActivate | undefined;
        };
        owner: {
            type: PropType<import("../drop-down").IDropDownAttributes["owner"]>;
            default: HTMLElement | ComponentPublicInstance | undefined;
        };
        contextMenu: {
            type: PropType<import("../drop-down").IDropDownAttributes["contextMenu"]>;
            default: boolean | undefined;
        };
        visible: {
            type: PropType<import("../drop-down").IDropDownAttributes["visible"]>;
            default: boolean | undefined;
        };
        offsetTop: {
            type: PropType<import("../drop-down").IDropDownAttributes["offsetTop"]>;
            default: number | undefined;
        };
        autoFocus: {
            type: PropType<import("../drop-down").IDropDownAttributes["autoFocus"]>;
            default: boolean | undefined;
        };
        autoClose: {
            type: PropType<import("../drop-down").IDropDownAttributes["autoClose"]>;
            default: boolean | undefined;
        };
        teleportTo: {
            type: PropType<import("../drop-down").IDropDownAttributes["teleportTo"]>;
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
        items: import("../index.ts").IListBoxItemAttributes[];
        selected: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
        wordWrap: boolean | undefined;
        multiple: boolean | undefined;
        singleSelection: boolean | undefined;
        onPropItemSelected: import("../index.ts").IEventSelected | undefined;
        onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
        teleportTo: string | HTMLElement | undefined;
        placement: import("../../types").TPlacemant | undefined;
        triggerActivate: import("../../types").TTriggerActivate | undefined;
        owner: HTMLElement | ComponentPublicInstance | undefined;
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
                type: PropType<import("../index.ts").IDropDownComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["required"]>;
                default: boolean | undefined;
            };
            placement: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["placement"]>;
                default: import("../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["owner"]>;
                default: HTMLElement | ComponentPublicInstance | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
            cmpComponent: ComponentPublicInstance | null;
            registeredElements: Set<HTMLElement>;
        }, {
            classes(): TClasses;
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
            calculateTopStart(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
            calculateTopEnd(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
            calculateBottomStart(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
            calculateBottomEnd(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
            updateComponentPosition(): void;
            calculateInner(ownerRect: DOMRect, event?: MouseEvent): {
                top: number;
                left: number;
            };
            onUpdateComponentRect(): void;
            onMountedComponent(cmpComponent: ComponentPublicInstance, register?: boolean): void;
            afterShow(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            hidden: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["required"]>;
                default: boolean | undefined;
            };
            placement: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["placement"]>;
                default: import("../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["owner"]>;
                default: HTMLElement | ComponentPublicInstance | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
            placement: import("../../types").TPlacemant | undefined;
            triggerActivate: import("../../types").TTriggerActivate | undefined;
            owner: HTMLElement | ComponentPublicInstance | undefined;
            offsetTop: number | undefined;
            autoFocus: boolean | undefined;
            autoClose: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        BListBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            filterText: {
                type: PropType<import("../index.ts").IListBoxAttributes["filterText"]>;
                default: string | undefined;
            };
            maxRows: {
                type: PropType<import("../index.ts").IListBoxAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../index.ts").IListBoxAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../index.ts").IListBoxAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: PropType<import("../index.ts").IListBoxAttributes["draggable"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            containerHeight: string;
            isHeightCalculated: boolean;
            stateFilterText: string;
            copyStateItems: import("../index.ts").ICollectionItemAttributes[];
            draggedItem: import("../index.ts").ICollectionItemAttributes | null;
            draggedIndex: number;
        }, {
            classes(): TClasses;
            outItems(): import("../index.ts").ICollectionItemAttributes[];
            maxRowsVisible(): number;
            transitionGroupName(): string;
        }, {
            getRefItems(): ComponentPublicInstance[];
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
                value: import("../../types").TValue;
            }): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                default: unknown;
            };
            multiple: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                default: boolean | undefined;
            };
            separator: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                default: boolean | undefined;
            };
            noSelect: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                default: import("../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateSelected: import("../index.ts").ICollectionItemAttributes[];
            stateItems: import("../index.ts").ICollectionItemAttributes[];
            currentIndex: number;
            isFocused: boolean;
        }, {}, {
            watcherHandlerItems(value: import("../index.ts").ICollectionItemAttributes[]): void;
            initItems(): import("../index.ts").ICollectionItemAttributes[];
            initSelected(): import("../index.ts").ICollectionItemAttributes[];
            toggleItemSelected(item: import("../index.ts").ICollectionItemAttributes): void;
            onClickItem({ event, item }: {
                event: MouseEvent;
                item: import("../index.ts").ICollectionItemAttributes;
            }): void;
            count(): number;
            isEmpty(): boolean;
            isSelected(): boolean;
            getItemByValue(value: import("../../types").TValue): import("../index.ts").ICollectionItemAttributes | undefined;
            getIndexByValue(value: import("../../types").TValue): number;
            removeSelectedItem(value: import("../../types").TValue): boolean;
            updateSelected(value: import("../../types").TValue, selected: boolean, forward?: boolean): boolean;
            sendEventSelectedItems(): void;
            resetSelected(): void;
            searchByValue(value: import("../../types").TValue | import("../../types").TValue[] | undefined): boolean;
            getSelectedText(): string | undefined;
            getSelectedValue(): import("../../types").TValue | import("../../types").TValue[] | null;
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
                type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>, {}, {
            cssClass: string;
        }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>> & Readonly<{}>, {
            items: any[];
            selected: any;
        }, {}, {
            BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                default: unknown;
            };
            multiple: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                default: boolean | undefined;
            };
            separator: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                default: boolean | undefined;
            };
            noSelect: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                default: import("../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
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
            onPropItemSelected: import("../index.ts").IEventSelected | undefined;
            onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
        }, {}, {}, {}, string, () => {
            updateSelected: (value: import("../../types").TValue, selected: boolean, forward?: boolean) => boolean;
        }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            filterText: {
                type: PropType<import("../index.ts").IListBoxAttributes["filterText"]>;
                default: string | undefined;
            };
            maxRows: {
                type: PropType<import("../index.ts").IListBoxAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../index.ts").IListBoxAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../index.ts").IListBoxAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            draggable: {
                type: PropType<import("../index.ts").IListBoxAttributes["draggable"]>;
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
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>, {}, {
                cssClass: string;
            }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                items: {
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>> & Readonly<{}>, {
                items: any[];
                selected: any;
            }, {}, {
                BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BListBoxItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                wordWrap: {
                    type: PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {
                attributes(): import("../../types").TAttributes;
                classText(): string;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                component: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                    default: string;
                };
                text: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                    default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                };
                icon: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                    default: any;
                };
                selected: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
                readonly: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                    default: boolean | undefined;
                };
                meta: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                    default: any;
                };
                toggleable: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                    default: import("../index.ts").IEventItemClick | undefined;
                };
                onPropSelected: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                    default: import("../index.ts").IEventSelected | undefined;
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
                    attributes(): import("../../types").TAttributes;
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
                    type: PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                    default: string;
                };
                text: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                    default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                };
                icon: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                    default: any;
                };
                selected: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
                readonly: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                    default: boolean | undefined;
                };
                meta: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                    default: any;
                };
                toggleable: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                    default: import("../index.ts").IEventItemClick | undefined;
                };
                onPropSelected: {
                    type: PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                    default: import("../index.ts").IEventSelected | undefined;
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
                onPropClick: import("../index.ts").IEventItemClick | undefined;
                selected: boolean | undefined;
                readonly: boolean | undefined;
                required: boolean | undefined;
                toggleable: boolean | undefined;
                draggable: boolean | undefined;
                onPropSelected: import("../index.ts").IEventSelected | undefined;
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
                        default: string | number | import("../../types").ISize | undefined;
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
                        default: string | number | import("../../types").ISize | undefined;
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
                    size: string | number | import("../../types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                wordWrap: {
                    type: PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{}>, {
                wordWrap: boolean | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                    default: string | number | import("../../types").ISize | undefined;
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
                    default: string | number | import("../../types").ISize | undefined;
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
                size: string | number | import("../../types").ISize | undefined;
                width: string | number | undefined;
                height: string | number | undefined;
                alt: string | undefined;
                icon: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BDate: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        date: {
            type: PropType<import("../date").IDateAttributes["date"]>;
            default: Date | undefined;
        };
        format: {
            type: PropType<import("../date").IDateAttributes["format"]>;
            default(): string | undefined;
        };
        text: {
            type: PropType<import("../date").IDateAttributes["text"]>;
            default: string | number | undefined;
        };
        value: {
            type: PropType<import("../date").IDateAttributes["value"]>;
            default: any;
        };
        minDate: {
            type: PropType<import("../date").IDateAttributes["minDate"]>;
            default: string | number | Date | undefined;
        };
        maxDate: {
            type: PropType<import("../date").IDateAttributes["maxDate"]>;
            default: string | number | Date | undefined;
        };
        multiple: {
            type: PropType<import("../date").IDateAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxSelections: {
            type: PropType<import("../date").IDateAttributes["maxSelections"]>;
            default: number | undefined;
        };
        pop: {
            type: PropType<import("../date").IDateAttributes["pop"]>;
            default: boolean | undefined;
        };
        separator: {
            type: PropType<import("../date").IDateAttributes["separator"]>;
            default: string | undefined;
        };
        currentMonth: {
            type: PropType<import("../date").IDateAttributes["currentMonth"]>;
            default: number | undefined;
        };
        currentYear: {
            type: PropType<import("../date").IDateAttributes["currentYear"]>;
            default: number | undefined;
        };
        toggle: {
            type: PropType<import("../date").IDateAttributes["toggle"]>;
            default: boolean | undefined;
        };
        additionalClass: {
            type: PropType<(item: ICellDay) => string | string[]>;
            default: () => "";
        };
        arrowKeys: {
            type: PropType<import("../date").IDateAttributes["arrowKeys"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        today: number;
        selected: IUseDate[];
        displayedMonth: number;
        displayedYear: number;
        showMonths: boolean;
        showYears: boolean;
        styleForList: {
            [key: string]: string;
        };
        stateMinDate: number;
        stateMaxDate: number;
        invalid: boolean;
        disableWatchSelected: boolean;
    }, {
        classes(): TClasses;
        days(): ICellDay[][];
        weekDayNames(): string[];
        monthName(): string;
        months(): import("../../types").ISimpleItem[];
        years(): import("../../types").ISimpleItem[];
    }, {
        updateCurrentMonth(value?: number): void;
        updateCurrentYear(value?: number): void;
        removeSelected(unixTime: number): boolean;
        toggleSelected(value: TDate): void;
        validateDate(value: TDate): boolean;
        addSelected(value: TDate, updateCalendar?: boolean): boolean;
        updateSelectedFromArray(values: string[] | number[] | Date[], updateCalendar?: boolean): void;
        getSelectedTexts(): string[];
        getSelectedValues(): number[];
        getSelectedDates(): Date[];
        getTexts(): string;
        getValues(): number[];
        getDates(): Date[];
        getSelectedIndex(unixTime: number): number;
        prevMonth(): void;
        nextMonth(): void;
        prevYear(): void;
        nextYear(): void;
        onClick(event: MouseEvent, unixTime: number): void;
        onClickShowMonths(): void;
        onClickShowYears(): void;
        onSelectedMonth(value: import("../../types").ISimpleItem): void;
        onSelectedYear(value: import("../../types").ISimpleItem): void;
        reset(): void;
        onKeyDown(e: KeyboardEvent): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "update:text" | "click" | "update:value" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day")[], "error" | "update:text" | "click" | "update:value" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        date: {
            type: PropType<import("../date").IDateAttributes["date"]>;
            default: Date | undefined;
        };
        format: {
            type: PropType<import("../date").IDateAttributes["format"]>;
            default(): string | undefined;
        };
        text: {
            type: PropType<import("../date").IDateAttributes["text"]>;
            default: string | number | undefined;
        };
        value: {
            type: PropType<import("../date").IDateAttributes["value"]>;
            default: any;
        };
        minDate: {
            type: PropType<import("../date").IDateAttributes["minDate"]>;
            default: string | number | Date | undefined;
        };
        maxDate: {
            type: PropType<import("../date").IDateAttributes["maxDate"]>;
            default: string | number | Date | undefined;
        };
        multiple: {
            type: PropType<import("../date").IDateAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxSelections: {
            type: PropType<import("../date").IDateAttributes["maxSelections"]>;
            default: number | undefined;
        };
        pop: {
            type: PropType<import("../date").IDateAttributes["pop"]>;
            default: boolean | undefined;
        };
        separator: {
            type: PropType<import("../date").IDateAttributes["separator"]>;
            default: string | undefined;
        };
        currentMonth: {
            type: PropType<import("../date").IDateAttributes["currentMonth"]>;
            default: number | undefined;
        };
        currentYear: {
            type: PropType<import("../date").IDateAttributes["currentYear"]>;
            default: number | undefined;
        };
        toggle: {
            type: PropType<import("../date").IDateAttributes["toggle"]>;
            default: boolean | undefined;
        };
        additionalClass: {
            type: PropType<(item: ICellDay) => string | string[]>;
            default: () => "";
        };
        arrowKeys: {
            type: PropType<import("../date").IDateAttributes["arrowKeys"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onError?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:text"?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        "onUpdate:date"?: ((...args: any[]) => any) | undefined;
        "onMonth-changed"?: ((...args: any[]) => any) | undefined;
        "onYear-changed"?: ((...args: any[]) => any) | undefined;
        "onPeriod-changed"?: ((...args: any[]) => any) | undefined;
        "onToggle-selected"?: ((...args: any[]) => any) | undefined;
        "onMouse-enter-day"?: ((...args: any[]) => any) | undefined;
        "onMouse-leave-day"?: ((...args: any[]) => any) | undefined;
    }>, {
        pop: boolean | undefined;
        value: any;
        text: string | number | undefined;
        separator: string | undefined;
        date: Date | undefined;
        toggle: boolean | undefined;
        multiple: boolean | undefined;
        format: string | undefined;
        minDate: string | number | Date | undefined;
        maxDate: string | number | Date | undefined;
        currentMonth: number | undefined;
        currentYear: number | undefined;
        maxSelections: number | undefined;
        arrowKeys: boolean | undefined;
        additionalClass: (item: ICellDay) => string | string[];
    }, {}, {
        BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            href: {
                type: PropType<import("../button").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../button").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: PropType<import("../button").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: PropType<import("../button").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: PropType<import("../button").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: PropType<import("../button").IButtonAttributes["target"]>;
                default: import("../button/types").TTarget | undefined;
            };
            to: {
                type: PropType<import("../button").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: PropType<import("../button").IButtonAttributes["type"]>;
                default: import("../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../button").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../button").IButtonAttributes["loading"]>;
                default: boolean | import("../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../button").IButtonAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../button").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../button").IButtonEvents["onPropClick"]>;
                default: import("../../types").IEventHandler | undefined;
            };
        }>, {}, {
            cssClass: string;
            iconProps: import("../index.ts").IIconAttributes | null;
            stateDisabled: boolean;
            stateLoading: import("../../types").ILoading;
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
            setLoading(value: boolean | import("../../types").ILoading): void;
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
                type: PropType<import("../button").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../button").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: PropType<import("../button").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: PropType<import("../button").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: PropType<import("../button").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: PropType<import("../button").IButtonAttributes["target"]>;
                default: import("../button/types").TTarget | undefined;
            };
            to: {
                type: PropType<import("../button").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: PropType<import("../button").IButtonAttributes["type"]>;
                default: import("../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../button").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../button").IButtonAttributes["loading"]>;
                default: boolean | import("../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../button").IButtonAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../button").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../button").IButtonEvents["onPropClick"]>;
                default: import("../../types").IEventHandler | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("../../types").TComponentVariantType | undefined;
            form: import("../button/types").TFormType | undefined;
            icon: any;
            href: string | undefined;
            outlined: boolean | undefined;
            plain: boolean | undefined;
            simple: boolean | undefined;
            target: import("../button/types").TTarget | undefined;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            loading: boolean | import("../../types").ILoading | undefined;
            sizeControl: import("../../types").TSizeControl | undefined;
            asLabel: boolean | undefined;
            onPropClick: import("../../types").IEventHandler | undefined;
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
                    default: string | number | import("../../types").ISize | undefined;
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
                    default: string | number | import("../../types").ISize | undefined;
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
                size: string | number | import("../../types").ISize | undefined;
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
                    default: import("../../types").TSizeControl;
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
                    default: import("../../types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../types").TSizeControl;
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
        BDropDown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            hidden: {
                type: PropType<import("../drop-down").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: PropType<import("../drop-down").IDropDownAttributes["items"]>;
                default: import("../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: PropType<import("../drop-down").IDropDownAttributes["selected"]>;
                default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: PropType<import("../drop-down").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: PropType<import("../drop-down").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../drop-down").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../drop-down").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: PropType<import("../drop-down").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../drop-down").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../drop-down").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../drop-down").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: PropType<import("../drop-down").IDropDownAttributes["placement"]>;
                default: import("../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../drop-down").IDropDownAttributes["triggerActivate"]>;
                default: import("../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../drop-down").IDropDownAttributes["owner"]>;
                default: HTMLElement | ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: PropType<import("../drop-down").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../drop-down").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../drop-down").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../drop-down").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../drop-down").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../drop-down").IDropDownAttributes["teleportTo"]>;
                default: string | HTMLElement | undefined;
            };
        }>, {}, {
            cmpControl: InstanceType<typeof import("../index.ts").BDropDownComponent> | null;
            registeredElements: HTMLElement[];
        }, {
            classes(): TClasses;
        }, {
            onSelectedItem(data: import("../index.ts").ICollectionItemAttributes): void;
            onSelectedItems({ selected, text, value }: {
                selected: import("../index.ts").ICollectionItemAttributes;
                text: string;
                value: import("../../types").TValue | import("../../types").TValue[];
            }): void;
            onToggleVisible(value: boolean): void;
            onMounted(instance: InstanceType<typeof import("../index.ts").BDropDownComponent>): void;
            afterShow(): void;
            onClick({ event, item }: {
                event: MouseEvent;
                item: import("../index.ts").ICollectionItemAttributes;
            }): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>, {}, {
            cssClass: string;
        }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>> & Readonly<{}>, {
            items: any[];
            selected: any;
        }, {}, {
            BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:visible" | "mounted" | "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            hidden: {
                type: PropType<import("../drop-down").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: PropType<import("../drop-down").IDropDownAttributes["items"]>;
                default: import("../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: PropType<import("../drop-down").IDropDownAttributes["selected"]>;
                default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: PropType<import("../drop-down").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: PropType<import("../drop-down").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../drop-down").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../drop-down").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: PropType<import("../drop-down").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../drop-down").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../drop-down").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../drop-down").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: PropType<import("../drop-down").IDropDownAttributes["placement"]>;
                default: import("../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../drop-down").IDropDownAttributes["triggerActivate"]>;
                default: import("../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../drop-down").IDropDownAttributes["owner"]>;
                default: HTMLElement | ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: PropType<import("../drop-down").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../drop-down").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../drop-down").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../drop-down").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../drop-down").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../drop-down").IDropDownAttributes["teleportTo"]>;
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
            items: import("../index.ts").IListBoxItemAttributes[];
            selected: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
            wordWrap: boolean | undefined;
            multiple: boolean | undefined;
            singleSelection: boolean | undefined;
            onPropItemSelected: import("../index.ts").IEventSelected | undefined;
            onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
            teleportTo: string | HTMLElement | undefined;
            placement: import("../../types").TPlacemant | undefined;
            triggerActivate: import("../../types").TTriggerActivate | undefined;
            owner: HTMLElement | ComponentPublicInstance | undefined;
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
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["required"]>;
                    default: boolean | undefined;
                };
                placement: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["placement"]>;
                    default: import("../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                    default: import("../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["owner"]>;
                    default: HTMLElement | ComponentPublicInstance | undefined;
                };
                visible: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                cmpComponent: ComponentPublicInstance | null;
                registeredElements: Set<HTMLElement>;
            }, {
                classes(): TClasses;
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
                calculateTopStart(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
                calculateTopEnd(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
                calculateBottomStart(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
                calculateBottomEnd(ownerRect: DOMRect, forward?: boolean): import("../index.ts").TPositionComponent;
                updateComponentPosition(): void;
                calculateInner(ownerRect: DOMRect, event?: MouseEvent): {
                    top: number;
                    left: number;
                };
                onUpdateComponentRect(): void;
                onMountedComponent(cmpComponent: ComponentPublicInstance, register?: boolean): void;
                afterShow(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                hidden: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["required"]>;
                    default: boolean | undefined;
                };
                placement: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["placement"]>;
                    default: import("../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                    default: import("../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["owner"]>;
                    default: HTMLElement | ComponentPublicInstance | undefined;
                };
                visible: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: PropType<import("../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                placement: import("../../types").TPlacemant | undefined;
                triggerActivate: import("../../types").TTriggerActivate | undefined;
                owner: HTMLElement | ComponentPublicInstance | undefined;
                offsetTop: number | undefined;
                autoFocus: boolean | undefined;
                autoClose: boolean | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BListBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                filterText: {
                    type: PropType<import("../index.ts").IListBoxAttributes["filterText"]>;
                    default: string | undefined;
                };
                maxRows: {
                    type: PropType<import("../index.ts").IListBoxAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: PropType<import("../index.ts").IListBoxAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: PropType<import("../index.ts").IListBoxAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../index.ts").IListBoxAttributes["draggable"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                containerHeight: string;
                isHeightCalculated: boolean;
                stateFilterText: string;
                copyStateItems: import("../index.ts").ICollectionItemAttributes[];
                draggedItem: import("../index.ts").ICollectionItemAttributes | null;
                draggedIndex: number;
            }, {
                classes(): TClasses;
                outItems(): import("../index.ts").ICollectionItemAttributes[];
                maxRowsVisible(): number;
                transitionGroupName(): string;
            }, {
                getRefItems(): ComponentPublicInstance[];
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
                    value: import("../../types").TValue;
                }): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                items: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                    default: unknown;
                };
                multiple: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                    default: boolean | undefined;
                };
                separator: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                    default: string | undefined;
                };
                singleSelection: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                    default: boolean | undefined;
                };
                noSelect: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                    default: boolean | undefined;
                };
                onPropItemSelected: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                    default: import("../index.ts").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                    default: import("../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
                };
            }>, {}, {
                cssClass: string;
                stateSelected: import("../index.ts").ICollectionItemAttributes[];
                stateItems: import("../index.ts").ICollectionItemAttributes[];
                currentIndex: number;
                isFocused: boolean;
            }, {}, {
                watcherHandlerItems(value: import("../index.ts").ICollectionItemAttributes[]): void;
                initItems(): import("../index.ts").ICollectionItemAttributes[];
                initSelected(): import("../index.ts").ICollectionItemAttributes[];
                toggleItemSelected(item: import("../index.ts").ICollectionItemAttributes): void;
                onClickItem({ event, item }: {
                    event: MouseEvent;
                    item: import("../index.ts").ICollectionItemAttributes;
                }): void;
                count(): number;
                isEmpty(): boolean;
                isSelected(): boolean;
                getItemByValue(value: import("../../types").TValue): import("../index.ts").ICollectionItemAttributes | undefined;
                getIndexByValue(value: import("../../types").TValue): number;
                removeSelectedItem(value: import("../../types").TValue): boolean;
                updateSelected(value: import("../../types").TValue, selected: boolean, forward?: boolean): boolean;
                sendEventSelectedItems(): void;
                resetSelected(): void;
                searchByValue(value: import("../../types").TValue | import("../../types").TValue[] | undefined): boolean;
                getSelectedText(): string | undefined;
                getSelectedValue(): import("../../types").TValue | import("../../types").TValue[] | null;
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
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>, {}, {
                cssClass: string;
            }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                items: {
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>> & Readonly<{}>, {
                items: any[];
                selected: any;
            }, {}, {
                BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                items: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                    default: unknown;
                };
                multiple: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                    default: boolean | undefined;
                };
                separator: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                    default: string | undefined;
                };
                singleSelection: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                    default: boolean | undefined;
                };
                noSelect: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                    default: boolean | undefined;
                };
                onPropItemSelected: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                    default: import("../index.ts").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: PropType<import("../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                    default: import("../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
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
                onPropItemSelected: import("../index.ts").IEventSelected | undefined;
                onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
            }, {}, {}, {}, string, () => {
                updateSelected: (value: import("../../types").TValue, selected: boolean, forward?: boolean) => boolean;
            }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                filterText: {
                    type: PropType<import("../index.ts").IListBoxAttributes["filterText"]>;
                    default: string | undefined;
                };
                maxRows: {
                    type: PropType<import("../index.ts").IListBoxAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: PropType<import("../index.ts").IListBoxAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: PropType<import("../index.ts").IListBoxAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../index.ts").IListBoxAttributes["draggable"]>;
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
                        type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                        default: unknown;
                    };
                }>, {}, {
                    cssClass: string;
                }, {}, {}, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    items: {
                        type: PropType<import("../index.ts").ICollectionAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: PropType<import("../index.ts").ICollectionAttributes<any>["selected"]>;
                        default: unknown;
                    };
                }>> & Readonly<{}>, {
                    items: any[];
                    selected: any;
                }, {}, {
                    BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BListBoxItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    wordWrap: {
                        type: PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {}, {
                    attributes(): import("../../types").TAttributes;
                    classText(): string;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    component: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                        default: string;
                    };
                    text: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                        default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                    };
                    icon: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                        default: any;
                    };
                    selected: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                    readonly: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                        default: boolean | undefined;
                    };
                    required: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                        default: boolean | undefined;
                    };
                    meta: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                        default: any;
                    };
                    toggleable: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                        default: import("../index.ts").IEventItemClick | undefined;
                    };
                    onPropSelected: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                        default: import("../index.ts").IEventSelected | undefined;
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
                        attributes(): import("../../types").TAttributes;
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
                        type: PropType<import("../index.ts").ICollectionItemAttributes["component"]>;
                        default: string;
                    };
                    text: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["text"]>;
                        default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                    };
                    icon: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["icon"]>;
                        default: any;
                    };
                    selected: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                    readonly: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["readonly"]>;
                        default: boolean | undefined;
                    };
                    required: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["required"]>;
                        default: boolean | undefined;
                    };
                    meta: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["meta"]>;
                        default: any;
                    };
                    toggleable: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["toggleable"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["draggable"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["onPropClick"]>;
                        default: import("../index.ts").IEventItemClick | undefined;
                    };
                    onPropSelected: {
                        type: PropType<import("../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                        default: import("../index.ts").IEventSelected | undefined;
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
                    onPropClick: import("../index.ts").IEventItemClick | undefined;
                    selected: boolean | undefined;
                    readonly: boolean | undefined;
                    required: boolean | undefined;
                    toggleable: boolean | undefined;
                    draggable: boolean | undefined;
                    onPropSelected: import("../index.ts").IEventSelected | undefined;
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
                            default: string | number | import("../../types").ISize | undefined;
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
                            default: string | number | import("../../types").ISize | undefined;
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
                        size: string | number | import("../../types").ISize | undefined;
                        width: string | number | undefined;
                        height: string | number | undefined;
                        alt: string | undefined;
                        icon: any;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    wordWrap: {
                        type: PropType<import("../index.ts").IListBoxItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{}>, {
                    wordWrap: boolean | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                        default: string | number | import("../../types").ISize | undefined;
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
                        default: string | number | import("../../types").ISize | undefined;
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
                    size: string | number | import("../../types").ISize | undefined;
                    width: string | number | undefined;
                    height: string | number | undefined;
                    alt: string | undefined;
                    icon: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                default: string | number | import("../../types").ISize | undefined;
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
                default: string | number | import("../../types").ISize | undefined;
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
            size: string | number | import("../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BDivider: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        vertical: {
            type: PropType<import("../divider").IDividerAttributes["vertical"]>;
            default: boolean | undefined;
        };
        type: {
            type: PropType<import("../divider").IDividerAttributes["type"]>;
            default: import("../../types").TTypeBorder | undefined;
        };
        text: {
            type: PropType<import("../divider").IDividerAttributes["text"]>;
            default: string | undefined;
        };
        textAlign: {
            type: PropType<import("../divider").IDividerAttributes["textAlign"]>;
            default: import("../../types").TAlign | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): TClasses;
        direction(): import("../../types").EDirection;
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
        vertical: {
            type: PropType<import("../divider").IDividerAttributes["vertical"]>;
            default: boolean | undefined;
        };
        type: {
            type: PropType<import("../divider").IDividerAttributes["type"]>;
            default: import("../../types").TTypeBorder | undefined;
        };
        text: {
            type: PropType<import("../divider").IDividerAttributes["text"]>;
            default: string | undefined;
        };
        textAlign: {
            type: PropType<import("../divider").IDividerAttributes["textAlign"]>;
            default: import("../../types").TAlign | undefined;
        };
    }>> & Readonly<{}>, {
        type: import("../../types").TTypeBorder | undefined;
        text: string | undefined;
        vertical: boolean | undefined;
        textAlign: import("../../types").TAlign | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
