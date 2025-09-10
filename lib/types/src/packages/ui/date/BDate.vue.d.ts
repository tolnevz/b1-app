import { type PropType, type ComponentPublicInstance } from 'vue';
import type { IDateAttributes, ICellDay, IUseDate, TDate } from './types';
import type { TClasses, ISimpleItem } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    date: {
        type: PropType<IDateAttributes["date"]>;
        default: Date | undefined;
    };
    format: {
        type: PropType<IDateAttributes["format"]>;
        default(): string | undefined;
    };
    text: {
        type: PropType<IDateAttributes["text"]>;
        default: string | number | undefined;
    };
    value: {
        type: PropType<IDateAttributes["value"]>;
        default: any;
    };
    minDate: {
        type: PropType<IDateAttributes["minDate"]>;
        default: string | number | Date | undefined;
    };
    maxDate: {
        type: PropType<IDateAttributes["maxDate"]>;
        default: string | number | Date | undefined;
    };
    multiple: {
        type: PropType<IDateAttributes["multiple"]>;
        default: boolean | undefined;
    };
    maxSelections: {
        type: PropType<IDateAttributes["maxSelections"]>;
        default: number | undefined;
    };
    pop: {
        type: PropType<IDateAttributes["pop"]>;
        default: boolean | undefined;
    };
    separator: {
        type: PropType<IDateAttributes["separator"]>;
        default: string | undefined;
    };
    currentMonth: {
        type: PropType<IDateAttributes["currentMonth"]>;
        default: number | undefined;
    };
    currentYear: {
        type: PropType<IDateAttributes["currentYear"]>;
        default: number | undefined;
    };
    toggle: {
        type: PropType<IDateAttributes["toggle"]>;
        default: boolean | undefined;
    };
    additionalClass: {
        type: PropType<(item: ICellDay) => string | string[]>;
        default: () => "";
    };
    arrowKeys: {
        type: PropType<IDateAttributes["arrowKeys"]>;
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
    /**
     * Get the days of the calendar
     */
    days(): ICellDay[][];
    /**
     * Get the names of the days of the week
     */
    weekDayNames(): string[];
    /**
     * Get the name of the month
     */
    monthName(): string;
    /**
     * Get the months of the year
     */
    months(): ISimpleItem[];
    /**
     * Get list of years
     */
    years(): ISimpleItem[];
}, {
    /**
     * Update the current month
     * @param {number} value
     */
    updateCurrentMonth(value?: number): void;
    /**
     * Update the current year
     * @param {number} value
     */
    updateCurrentYear(value?: number): void;
    /**
     * Remove the selected date
     * @param {number} unixTime
     * @returns {boolean}
     */
    removeSelected(unixTime: number): boolean;
    /**
     * Toggle the selected date
     * @param {TDate} value
     */
    toggleSelected(value: TDate): void;
    /**
     * Validate the date
     * @param {TDate} value
     * @returns {boolean}
     */
    validateDate(value: TDate): boolean;
    /**
     * Set the selected date
     * @param {TDate} value
     * @param {boolean} updateCalendar
     * @returns {boolean}
     */
    addSelected(value: TDate, updateCalendar?: boolean): boolean;
    /**
     * Update the selected dates
     * @param {string[] | number[] | Date[]} values
     * @param {boolean} updateCalendar
     * @returns {void}
     */
    updateSelectedFromArray(values: string[] | number[] | Date[], updateCalendar?: boolean): void;
    getSelectedTexts(): string[];
    getSelectedValues(): number[];
    getSelectedDates(): Date[];
    getTexts(): string;
    getValues(): number[];
    getDates(): Date[];
    /**
     * Check if the unixTime is selected
     * @param {number} unixTime
     * @returns {number}
     */
    getSelectedIndex(unixTime: number): number;
    /**
     * Go to the previous month
     */
    prevMonth(): void;
    /**
     * Go to the next month
     */
    nextMonth(): void;
    /**
     * Go to the previous year
     */
    prevYear(): void;
    /**
     * Go to the next year
     */
    nextYear(): void;
    /**
     * Event when the date is clicked
     * @param {MouseEvent} event
     * @param {number} unixTime
     */
    onClick(event: MouseEvent, unixTime: number): void;
    /**
     * Event when the month is selected
     */
    onClickShowMonths(): void;
    /**
     * Event when the year is selected
     */
    onClickShowYears(): void;
    onSelectedMonth(value: ISimpleItem): void;
    onSelectedYear(value: ISimpleItem): void;
    /**
     * Clear the selected dates
     */
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
        type: PropType<IDateAttributes["date"]>;
        default: Date | undefined;
    };
    format: {
        type: PropType<IDateAttributes["format"]>;
        default(): string | undefined;
    };
    text: {
        type: PropType<IDateAttributes["text"]>;
        default: string | number | undefined;
    };
    value: {
        type: PropType<IDateAttributes["value"]>;
        default: any;
    };
    minDate: {
        type: PropType<IDateAttributes["minDate"]>;
        default: string | number | Date | undefined;
    };
    maxDate: {
        type: PropType<IDateAttributes["maxDate"]>;
        default: string | number | Date | undefined;
    };
    multiple: {
        type: PropType<IDateAttributes["multiple"]>;
        default: boolean | undefined;
    };
    maxSelections: {
        type: PropType<IDateAttributes["maxSelections"]>;
        default: number | undefined;
    };
    pop: {
        type: PropType<IDateAttributes["pop"]>;
        default: boolean | undefined;
    };
    separator: {
        type: PropType<IDateAttributes["separator"]>;
        default: string | undefined;
    };
    currentMonth: {
        type: PropType<IDateAttributes["currentMonth"]>;
        default: number | undefined;
    };
    currentYear: {
        type: PropType<IDateAttributes["currentYear"]>;
        default: number | undefined;
    };
    toggle: {
        type: PropType<IDateAttributes["toggle"]>;
        default: boolean | undefined;
    };
    additionalClass: {
        type: PropType<(item: ICellDay) => string | string[]>;
        default: () => "";
    };
    arrowKeys: {
        type: PropType<IDateAttributes["arrowKeys"]>;
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
        iconProps: import("../icon").IIconAttributes | null;
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
                type: PropType<import("../icon").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../icon").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../icon").IIconAttributes["size"]>;
                default: string | number | import("../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../icon").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../icon").IIconAttributes["height"]>;
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
                type: PropType<import("../icon").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: PropType<import("../icon").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: PropType<import("../icon").IIconAttributes["size"]>;
                default: string | number | import("../../types").ISize | undefined;
            };
            width: {
                type: PropType<import("../icon").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: PropType<import("../icon").IIconAttributes["height"]>;
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
                iconProps: import("../icon").IIconAttributes | null;
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
                        type: PropType<import("../icon").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: PropType<import("../icon").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: PropType<import("../icon").IIconAttributes["size"]>;
                        default: string | number | import("../../types").ISize | undefined;
                    };
                    width: {
                        type: PropType<import("../icon").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: PropType<import("../icon").IIconAttributes["height"]>;
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
                        type: PropType<import("../icon").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: PropType<import("../icon").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: PropType<import("../icon").IIconAttributes["size"]>;
                        default: string | number | import("../../types").ISize | undefined;
                    };
                    width: {
                        type: PropType<import("../icon").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: PropType<import("../icon").IIconAttributes["height"]>;
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
                    type: PropType<import("../icon").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../icon").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../icon").IIconAttributes["size"]>;
                    default: string | number | import("../../types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../icon").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../icon").IIconAttributes["height"]>;
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
                    type: PropType<import("../icon").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: PropType<import("../icon").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: PropType<import("../icon").IIconAttributes["size"]>;
                    default: string | number | import("../../types").ISize | undefined;
                };
                width: {
                    type: PropType<import("../icon").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: PropType<import("../icon").IIconAttributes["height"]>;
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
            type: PropType<import("../icon").IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../icon").IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<import("../icon").IIconAttributes["size"]>;
            default: string | number | import("../../types").ISize | undefined;
        };
        width: {
            type: PropType<import("../icon").IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<import("../icon").IIconAttributes["height"]>;
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
            type: PropType<import("../icon").IIconAttributes["alt"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../icon").IIconAttributes["icon"]>;
            default: any;
        };
        size: {
            type: PropType<import("../icon").IIconAttributes["size"]>;
            default: string | number | import("../../types").ISize | undefined;
        };
        width: {
            type: PropType<import("../icon").IIconAttributes["width"]>;
            default: string | number | undefined;
        };
        height: {
            type: PropType<import("../icon").IIconAttributes["height"]>;
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
export default _default;
