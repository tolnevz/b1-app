import { type IUseDate } from '../../date';
import { ESizeControl } from '../../../types';
declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {
    onChange({ texts, values }: {
        texts: string;
        values: number[];
    }): void;
    onKeyDown(event: KeyboardEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    field: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["field"]>;
        default: string | undefined;
    };
    operation: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["operation"]>;
        default: any;
    };
    operations: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["operations"]>;
        default: any[] | undefined;
    };
    value: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["value"]>;
        default: any;
    };
    showOperation: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["showOperation"]>;
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
        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
        default: any;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("../../index.ts").IComponentAttributes["id"];
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
        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
        default: string | number | undefined;
    };
    disabled: {
        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
        default: boolean | undefined;
    };
    focused: {
        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}>, {
    value: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:value" | "change")[], "update:value" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    field: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["field"]>;
        default: string | undefined;
    };
    operation: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["operation"]>;
        default: any;
    };
    operations: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["operations"]>;
        default: any[] | undefined;
    };
    value: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["value"]>;
        default: any;
    };
    showOperation: {
        type: import("vue").PropType<import("./types").IFilterComponentAttributes["showOperation"]>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
    [x: string]: any;
}, {}, {
    BDatePicker: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        date: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["date"]>;
            default: Date | undefined;
        };
        format: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["format"]>;
            default(): string | undefined;
        };
        text: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["text"]>;
            default: string | number | undefined;
        };
        value: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["value"]>;
            default: any;
        };
        minDate: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["minDate"]>;
            default: string | number | Date | undefined;
        };
        maxDate: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["maxDate"]>;
            default: string | number | Date | undefined;
        };
        multiple: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxSelections: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["maxSelections"]>;
            default: number | undefined;
        };
        separator: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["separator"]>;
            default: string | undefined;
        };
        currentMonth: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["currentMonth"]>;
            default: number | undefined;
        };
        currentYear: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["currentYear"]>;
            default: number | undefined;
        };
        toggle: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["toggle"]>;
            default: boolean | undefined;
        };
        arrowKeys: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["arrowKeys"]>;
            default: boolean | undefined;
        };
        placeholder: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["placeholder"]>;
            default: string | undefined;
        };
        visibility: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        simple: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["simple"]>;
            default: boolean | undefined;
        };
        placement: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["placement"]>;
            default: import("../../../types").TPlacemant | undefined;
        };
        required: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["required"]>;
            default: boolean | undefined;
        };
        editable: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["editable"]>;
            default: boolean | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["icon"]>;
            default: any;
        };
    }>, {}, {
        cssClass: string;
        stateText: string;
        stateValue: number | undefined;
        showDialog: boolean;
        cmpInput: InstanceType<typeof import("../../index.ts").BInput> | null;
        cmpDialog: InstanceType<typeof import("../../date").BDate> | null;
        iconProps: import("../../index.ts").IIconAttributes | null;
    }, {
        classes(): import("../../../types").TClasses;
    }, {
        toggleDropDown(): void;
        onClickToggleDropDown(): void;
        onInputClick(): void;
        onInputBlur(): void;
        openDropDown(): void;
        hideDropDown(): void;
        onInputKeyDown(event: KeyboardEvent): void;
        onInputClear(): void;
        onInputClickClear(): void;
        onMountedInput(input: InstanceType<typeof import("../../index.ts").BInput>): void;
        onMountedDate(date: InstanceType<typeof import("../../date").BDate>): void;
        onDateChange({ texts, values, dates }: {
            texts: string;
            values: string;
            dates: Date[];
        }): void;
        onToggleSelected({ selected }: {
            selected: IUseDate[];
        }): void;
        reset(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../../index.ts").IComponentAttributes["id"];
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
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "update:text" | "click" | "update:value" | "selected" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day")[], "error" | "update:text" | "click" | "update:value" | "selected" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        date: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["date"]>;
            default: Date | undefined;
        };
        format: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["format"]>;
            default(): string | undefined;
        };
        text: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["text"]>;
            default: string | number | undefined;
        };
        value: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["value"]>;
            default: any;
        };
        minDate: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["minDate"]>;
            default: string | number | Date | undefined;
        };
        maxDate: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["maxDate"]>;
            default: string | number | Date | undefined;
        };
        multiple: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxSelections: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["maxSelections"]>;
            default: number | undefined;
        };
        separator: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["separator"]>;
            default: string | undefined;
        };
        currentMonth: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["currentMonth"]>;
            default: number | undefined;
        };
        currentYear: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["currentYear"]>;
            default: number | undefined;
        };
        toggle: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["toggle"]>;
            default: boolean | undefined;
        };
        arrowKeys: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["arrowKeys"]>;
            default: boolean | undefined;
        };
        placeholder: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["placeholder"]>;
            default: string | undefined;
        };
        visibility: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        simple: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["simple"]>;
            default: boolean | undefined;
        };
        placement: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["placement"]>;
            default: import("../../../types").TPlacemant | undefined;
        };
        required: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["required"]>;
            default: boolean | undefined;
        };
        editable: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["editable"]>;
            default: boolean | undefined;
        };
        icon: {
            type: import("vue").PropType<import("../../date-picker").IDatePickerAttributes["icon"]>;
            default: any;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onError?: ((...args: any[]) => any) | undefined;
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:text"?: ((...args: any[]) => any) | undefined;
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        onSelected?: ((...args: any[]) => any) | undefined;
        "onUpdate:date"?: ((...args: any[]) => any) | undefined;
        "onMonth-changed"?: ((...args: any[]) => any) | undefined;
        "onYear-changed"?: ((...args: any[]) => any) | undefined;
        "onPeriod-changed"?: ((...args: any[]) => any) | undefined;
        "onToggle-selected"?: ((...args: any[]) => any) | undefined;
        "onMouse-enter-day"?: ((...args: any[]) => any) | undefined;
        "onMouse-leave-day"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
        text: string | number | undefined;
        icon: any;
        simple: boolean | undefined;
        sizeControl: import("../../../types").TSizeControl | undefined;
        visibility: boolean | undefined;
        separator: string | undefined;
        readonly: boolean | undefined;
        required: boolean | undefined;
        date: Date | undefined;
        toggle: boolean | undefined;
        multiple: boolean | undefined;
        placement: import("../../../types").TPlacemant | undefined;
        placeholder: string | undefined;
        clearButton: boolean | undefined;
        clearWithText: boolean | undefined;
        showStateIcon: boolean | undefined;
        editable: boolean | undefined;
        format: string | undefined;
        minDate: string | number | Date | undefined;
        maxDate: string | number | Date | undefined;
        currentMonth: number | undefined;
        currentYear: number | undefined;
        maxSelections: number | undefined;
        arrowKeys: boolean | undefined;
    }, {}, {
        BDate: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            date: {
                type: import("vue").PropType<import("../../date").IDateAttributes["date"]>;
                default: Date | undefined;
            };
            format: {
                type: import("vue").PropType<import("../../date").IDateAttributes["format"]>;
                default(): string | undefined;
            };
            text: {
                type: import("vue").PropType<import("../../date").IDateAttributes["text"]>;
                default: string | number | undefined;
            };
            value: {
                type: import("vue").PropType<import("../../date").IDateAttributes["value"]>;
                default: any;
            };
            minDate: {
                type: import("vue").PropType<import("../../date").IDateAttributes["minDate"]>;
                default: string | number | Date | undefined;
            };
            maxDate: {
                type: import("vue").PropType<import("../../date").IDateAttributes["maxDate"]>;
                default: string | number | Date | undefined;
            };
            multiple: {
                type: import("vue").PropType<import("../../date").IDateAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxSelections: {
                type: import("vue").PropType<import("../../date").IDateAttributes["maxSelections"]>;
                default: number | undefined;
            };
            pop: {
                type: import("vue").PropType<import("../../date").IDateAttributes["pop"]>;
                default: boolean | undefined;
            };
            separator: {
                type: import("vue").PropType<import("../../date").IDateAttributes["separator"]>;
                default: string | undefined;
            };
            currentMonth: {
                type: import("vue").PropType<import("../../date").IDateAttributes["currentMonth"]>;
                default: number | undefined;
            };
            currentYear: {
                type: import("vue").PropType<import("../../date").IDateAttributes["currentYear"]>;
                default: number | undefined;
            };
            toggle: {
                type: import("vue").PropType<import("../../date").IDateAttributes["toggle"]>;
                default: boolean | undefined;
            };
            additionalClass: {
                type: import("vue").PropType<(item: import("../../date").ICellDay) => string | string[]>;
                default: () => "";
            };
            arrowKeys: {
                type: import("vue").PropType<import("../../date").IDateAttributes["arrowKeys"]>;
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
            classes(): import("../../../types").TClasses;
            days(): import("../../date").ICellDay[][];
            weekDayNames(): string[];
            monthName(): string;
            months(): import("../../../types").ISimpleItem[];
            years(): import("../../../types").ISimpleItem[];
        }, {
            updateCurrentMonth(value?: number): void;
            updateCurrentYear(value?: number): void;
            removeSelected(unixTime: number): boolean;
            toggleSelected(value: import("../../date").TDate): void;
            validateDate(value: import("../../date").TDate): boolean;
            addSelected(value: import("../../date").TDate, updateCalendar?: boolean): boolean;
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
            onSelectedMonth(value: import("../../../types").ISimpleItem): void;
            onSelectedYear(value: import("../../../types").ISimpleItem): void;
            reset(): void;
            onKeyDown(e: KeyboardEvent): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "update:text" | "click" | "update:value" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day")[], "error" | "update:text" | "click" | "update:value" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            date: {
                type: import("vue").PropType<import("../../date").IDateAttributes["date"]>;
                default: Date | undefined;
            };
            format: {
                type: import("vue").PropType<import("../../date").IDateAttributes["format"]>;
                default(): string | undefined;
            };
            text: {
                type: import("vue").PropType<import("../../date").IDateAttributes["text"]>;
                default: string | number | undefined;
            };
            value: {
                type: import("vue").PropType<import("../../date").IDateAttributes["value"]>;
                default: any;
            };
            minDate: {
                type: import("vue").PropType<import("../../date").IDateAttributes["minDate"]>;
                default: string | number | Date | undefined;
            };
            maxDate: {
                type: import("vue").PropType<import("../../date").IDateAttributes["maxDate"]>;
                default: string | number | Date | undefined;
            };
            multiple: {
                type: import("vue").PropType<import("../../date").IDateAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxSelections: {
                type: import("vue").PropType<import("../../date").IDateAttributes["maxSelections"]>;
                default: number | undefined;
            };
            pop: {
                type: import("vue").PropType<import("../../date").IDateAttributes["pop"]>;
                default: boolean | undefined;
            };
            separator: {
                type: import("vue").PropType<import("../../date").IDateAttributes["separator"]>;
                default: string | undefined;
            };
            currentMonth: {
                type: import("vue").PropType<import("../../date").IDateAttributes["currentMonth"]>;
                default: number | undefined;
            };
            currentYear: {
                type: import("vue").PropType<import("../../date").IDateAttributes["currentYear"]>;
                default: number | undefined;
            };
            toggle: {
                type: import("vue").PropType<import("../../date").IDateAttributes["toggle"]>;
                default: boolean | undefined;
            };
            additionalClass: {
                type: import("vue").PropType<(item: import("../../date").ICellDay) => string | string[]>;
                default: () => "";
            };
            arrowKeys: {
                type: import("vue").PropType<import("../../date").IDateAttributes["arrowKeys"]>;
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
            additionalClass: (item: import("../../date").ICellDay) => string | string[];
        }, {}, {
            BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                href: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                    default: any;
                };
                outlined: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                    default: boolean | undefined;
                };
                target: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                    default: import("../../button/types").TTarget | undefined;
                };
                to: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                    default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                    default: import("../../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                    default: import("../../button/types").TFormType | undefined;
                };
                loading: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                    default: any;
                };
                outlined: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                    default: boolean | undefined;
                };
                target: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                    default: import("../../button/types").TTarget | undefined;
                };
                to: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                    default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                    default: import("../../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                    default: import("../../button/types").TFormType | undefined;
                };
                loading: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../../types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>, {}, {}, {
                    sizeStyle(): Record<string, string>;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../../types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                        type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                        default: number | undefined;
                    };
                    size: {
                        type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                        default: number | undefined;
                    };
                    size: {
                        type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                        default: import("../../../types").TSizeControl;
                    };
                }>> & Readonly<{}>, {
                    size: import("../../../types").TSizeControl;
                    borderSize: number | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    width: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                        default: string | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                        default: string | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                        default: import("../../index.ts").TSkeletonType | undefined;
                    };
                    animation: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                        default: string | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                        default: string | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                        default: import("../../index.ts").TSkeletonType | undefined;
                    };
                    animation: {
                        type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
                        default: import("../../index.ts").TSkeletonAnimation | undefined;
                    };
                }>> & Readonly<{}>, {
                    type: import("../../index.ts").TSkeletonType | undefined;
                    width: string | undefined;
                    height: string | undefined;
                    animation: import("../../index.ts").TSkeletonAnimation | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BDropDown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                items: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["items"]>;
                    default: import("../../index.ts").IListBoxItemAttributes[];
                };
                selected: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["selected"]>;
                    default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
                };
                multiple: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["multiple"]>;
                    default: boolean | undefined;
                };
                maxRows: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                filterText: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["filterText"]>;
                    default: string | undefined;
                };
                singleSelection: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["singleSelection"]>;
                    default: boolean | undefined;
                };
                onPropItemSelected: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                    default: import("../../index.ts").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                    default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
                };
                placement: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["placement"]>;
                    default: import("../../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["triggerActivate"]>;
                    default: import("../../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["owner"]>;
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                };
                contextMenu: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["contextMenu"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["teleportTo"]>;
                    default: string | HTMLElement | undefined;
                };
            }>, {}, {
                cmpControl: InstanceType<typeof import("../../index.ts").BDropDownComponent> | null;
                registeredElements: HTMLElement[];
            }, {
                classes(): import("../../../types").TClasses;
            }, {
                onSelectedItem(data: import("../../index.ts").ICollectionItemAttributes): void;
                onSelectedItems({ selected, text, value }: {
                    selected: import("../../index.ts").ICollectionItemAttributes;
                    text: string;
                    value: import("../../../types").TValue | import("../../../types").TValue[];
                }): void;
                onToggleVisible(value: boolean): void;
                onMounted(instance: InstanceType<typeof import("../../index.ts").BDropDownComponent>): void;
                afterShow(): void;
                onClick({ event, item }: {
                    event: MouseEvent;
                    item: import("../../index.ts").ICollectionItemAttributes;
                }): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                items: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>, {}, {
                cssClass: string;
            }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                items: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>> & Readonly<{}>, {
                items: any[];
                selected: any;
            }, {}, {
                BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                items: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["items"]>;
                    default: import("../../index.ts").IListBoxItemAttributes[];
                };
                selected: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["selected"]>;
                    default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
                };
                multiple: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["multiple"]>;
                    default: boolean | undefined;
                };
                maxRows: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                filterText: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["filterText"]>;
                    default: string | undefined;
                };
                singleSelection: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["singleSelection"]>;
                    default: boolean | undefined;
                };
                onPropItemSelected: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                    default: import("../../index.ts").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                    default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
                };
                placement: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["placement"]>;
                    default: import("../../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["triggerActivate"]>;
                    default: import("../../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["owner"]>;
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                };
                contextMenu: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["contextMenu"]>;
                    default: boolean | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["teleportTo"]>;
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
                onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
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
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                    required: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                        default: boolean | undefined;
                    };
                    placement: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                        default: import("../../../types").TPlacemant | undefined;
                    };
                    triggerActivate: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                        default: import("../../../types").TTriggerActivate | undefined;
                    };
                    owner: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                        default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    offsetTop: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                        default: number | undefined;
                    };
                    autoFocus: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                        default: boolean | undefined;
                    };
                    autoClose: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                        default: boolean | undefined;
                    };
                    teleportTo: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    text: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>> & Readonly<{
                    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                }>, {
                    value: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                    required: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                        default: boolean | undefined;
                    };
                    placement: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                        default: import("../../../types").TPlacemant | undefined;
                    };
                    triggerActivate: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                        default: import("../../../types").TTriggerActivate | undefined;
                    };
                    owner: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                        default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    offsetTop: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                        default: number | undefined;
                    };
                    autoFocus: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                        default: boolean | undefined;
                    };
                    autoClose: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                        default: boolean | undefined;
                    };
                    teleportTo: {
                        type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                        default: string | undefined;
                    };
                    maxRows: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                        default: number | undefined;
                    };
                    autoWidth: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                        default: boolean | undefined;
                    };
                    wordWrap: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                    classes(): import("../../../types").TClasses;
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
                    onDrop({ event, value }: {
                        event: DragEvent;
                        value: import("../../../types").TValue;
                    }): void;
                }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    items: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                        default: unknown;
                    };
                    multiple: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                        default: boolean | undefined;
                    };
                    separator: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                        default: string | undefined;
                    };
                    singleSelection: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                        default: boolean | undefined;
                    };
                    noSelect: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                        default: boolean | undefined;
                    };
                    onPropItemSelected: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                        default: import("../../index.ts").IEventSelected | undefined;
                    };
                    onPropItemsSelected: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                        default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                    stateSelected: import("../../index.ts").ICollectionItemAttributes[];
                    stateItems: import("../../index.ts").ICollectionItemAttributes[];
                    currentIndex: number;
                    isFocused: boolean;
                }, {}, {
                    watcherHandlerItems(value: import("../../index.ts").ICollectionItemAttributes[]): void;
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
                    getItemByValue(value: import("../../../types").TValue): import("../../index.ts").ICollectionItemAttributes | undefined;
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
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                        default: unknown;
                    };
                }>, {}, {
                    cssClass: string;
                }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    value: {
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    text: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>> & Readonly<{
                    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                }>, {
                    value: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    items: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                        default: unknown;
                    };
                }>> & Readonly<{}>, {
                    items: any[];
                    selected: any;
                }, {}, {
                    BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                        default: unknown;
                    };
                    multiple: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                        default: boolean | undefined;
                    };
                    separator: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                        default: string | undefined;
                    };
                    singleSelection: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                        default: boolean | undefined;
                    };
                    noSelect: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                        default: boolean | undefined;
                    };
                    onPropItemSelected: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                        default: import("../../index.ts").IEventSelected | undefined;
                    };
                    onPropItemsSelected: {
                        type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
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
                    onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
                    onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
                }, {}, {}, {}, string, () => {
                    updateSelected: (value: import("../../../types").TValue, selected: boolean, forward?: boolean) => boolean;
                }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    filterText: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                        default: string | undefined;
                    };
                    maxRows: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                        default: number | undefined;
                    };
                    autoWidth: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                        default: boolean | undefined;
                    };
                    wordWrap: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                            default: unknown[];
                        };
                        selected: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                            default: unknown;
                        };
                    }>, {}, {
                        cssClass: string;
                    }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        value: {
                            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                            default: any;
                        };
                    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        text: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                            default: string | number | undefined;
                        };
                        disabled: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                            default: boolean | undefined;
                        };
                        focused: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                            default: string | number | undefined;
                        };
                        disabled: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                            default: boolean | undefined;
                        };
                        focused: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                            default: any;
                        };
                    }>> & Readonly<{
                        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                    }>, {
                        value: any;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        items: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                            default: unknown[];
                        };
                        selected: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                            default: unknown;
                        };
                    }>> & Readonly<{}>, {
                        items: any[];
                        selected: any;
                    }, {}, {
                        BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            id: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {}, {
                        attributes(): import("../../../types").TAttributes;
                        classText(): string;
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        component: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                            default: string;
                        };
                        text: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                            default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                            default: any;
                        };
                        selected: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                            default: boolean | undefined;
                        };
                        readonly: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                            default: boolean | undefined;
                        };
                        required: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                            default: boolean | undefined;
                        };
                        meta: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                            default: any;
                        };
                        toggleable: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                            default: boolean | undefined;
                        };
                        draggable: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                            default: boolean | undefined;
                        };
                        onPropClick: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                            default: import("../../index.ts").IEventItemClick | undefined;
                        };
                        onPropSelected: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                            default: import("../../index.ts").IEventSelected | undefined;
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
                            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                            default: any;
                        };
                    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        text: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                            default: string | number | undefined;
                        };
                        disabled: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                            default: boolean | undefined;
                        };
                        focused: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                            default: string | number | undefined;
                        };
                        disabled: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                            default: boolean | undefined;
                        };
                        focused: {
                            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                            default: any;
                        };
                    }>> & Readonly<{
                        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                    }>, {
                        value: any;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                        component: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                            default: string;
                        };
                        text: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                            default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                            default: any;
                        };
                        selected: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                            default: boolean | undefined;
                        };
                        readonly: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                            default: boolean | undefined;
                        };
                        required: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                            default: boolean | undefined;
                        };
                        meta: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                            default: any;
                        };
                        toggleable: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                            default: boolean | undefined;
                        };
                        draggable: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                            default: boolean | undefined;
                        };
                        onPropClick: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                            default: import("../../index.ts").IEventItemClick | undefined;
                        };
                        onPropSelected: {
                            type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
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
                        selected: boolean | undefined;
                        readonly: boolean | undefined;
                        required: boolean | undefined;
                        toggleable: boolean | undefined;
                        draggable: boolean | undefined;
                        onPropSelected: import("../../index.ts").IEventSelected | undefined;
                    }, {}, {
                        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            alt: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                                default: string | undefined;
                            };
                            icon: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                                default: any;
                            };
                            size: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                                default: string | number | import("../../../types").ISize | undefined;
                            };
                            width: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                                default: string | number | undefined;
                            };
                            height: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                                default: string | number | undefined;
                            };
                        }>, {}, {}, {
                            sizeStyle(): Record<string, string>;
                        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            id: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                                default: string | undefined;
                            };
                            icon: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                                default: any;
                            };
                            size: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                                default: string | number | import("../../../types").ISize | undefined;
                            };
                            width: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                                default: string | number | undefined;
                            };
                            height: {
                                type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{}>, {
                        wordWrap: boolean | undefined;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        alt: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                            default: string | number | undefined;
                        };
                    }>, {}, {}, {
                        sizeStyle(): Record<string, string>;
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
            BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                alt: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
        BInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            placeholder: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["placeholder"]>;
                default: string | undefined;
            };
            type: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["type"]>;
                default: any;
            };
            pattern: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["pattern"]>;
                default: string | undefined;
            };
            required: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["required"]>;
                default: boolean | undefined;
            };
            autocomplete: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["autocomplete"]>;
                default: string | undefined;
            };
            maxlength: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["maxlength"]>;
                default: number | undefined;
            };
            minlength: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["minlength"]>;
                default: number | undefined;
            };
            visibility: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["visibility"]>;
                default: boolean | undefined;
            };
            clearButton: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["clearButton"]>;
                default: boolean | undefined;
            };
            clearWithText: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["clearWithText"]>;
                default: boolean | undefined;
            };
            showStateIcon: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["showStateIcon"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            loading: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            simple: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["simple"]>;
                default: boolean | undefined;
            };
            asSelect: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["asSelect"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["required"]>;
                default: boolean | undefined;
            };
            invalid: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["invalid"]>;
                default: boolean | undefined;
            };
            state: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["state"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            readonly: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["required"]>;
                default: boolean | undefined;
            };
            invalid: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["invalid"]>;
                default: boolean | undefined;
            };
            state: {
                type: import("vue").PropType<import("../../index.ts").IControlInputAttributes["state"]>;
                default: import("../../../types").TState | undefined;
            };
        }>> & Readonly<{}>, {
            readonly: boolean | undefined;
            required: boolean | undefined;
            invalid: boolean | undefined;
            state: import("../../../types").TState | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value" | "update:visibility" | "change" | "click-clear" | "click-body")[], "clear" | "update:text" | "update:value" | "update:visibility" | "change" | "click-clear" | "click-body", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            placeholder: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["placeholder"]>;
                default: string | undefined;
            };
            type: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["type"]>;
                default: any;
            };
            pattern: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["pattern"]>;
                default: string | undefined;
            };
            required: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["required"]>;
                default: boolean | undefined;
            };
            autocomplete: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["autocomplete"]>;
                default: string | undefined;
            };
            maxlength: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["maxlength"]>;
                default: number | undefined;
            };
            minlength: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["minlength"]>;
                default: number | undefined;
            };
            visibility: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["visibility"]>;
                default: boolean | undefined;
            };
            clearButton: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["clearButton"]>;
                default: boolean | undefined;
            };
            clearWithText: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["clearWithText"]>;
                default: boolean | undefined;
            };
            showStateIcon: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["showStateIcon"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            loading: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            simple: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["simple"]>;
                default: boolean | undefined;
            };
            asSelect: {
                type: import("vue").PropType<import("../../index.ts").IInputAttributes["asSelect"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IButtonClearAttributes["invisible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {
                classes(): import("../../../types").TClasses;
            }, {
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: import("vue").PropType<import("../../index.ts").IButtonCollectionAttributes["sizeControl"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: import("vue").PropType<import("../../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../../types").TSizeControl | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                sizeControl: import("../../../types").TSizeControl | undefined;
            }, {}, {
                BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    href: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                        default: any;
                    };
                    outlined: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                        default: boolean | undefined;
                    };
                    plain: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                        default: boolean | undefined;
                    };
                    simple: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                        default: boolean | undefined;
                    };
                    target: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                        default: import("../../button/types").TTarget | undefined;
                    };
                    to: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                        default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                        default: any;
                    };
                    outlined: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                        default: boolean | undefined;
                    };
                    plain: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                        default: boolean | undefined;
                    };
                    simple: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                        default: boolean | undefined;
                    };
                    target: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                        default: import("../../button/types").TTarget | undefined;
                    };
                    to: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                        default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                            default: string | number | undefined;
                        };
                    }>, {}, {}, {
                        sizeStyle(): Record<string, string>;
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                            default: number | undefined;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                            default: number | undefined;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                            default: import("../../../types").TSizeControl;
                        };
                    }>> & Readonly<{}>, {
                        size: import("../../../types").TSizeControl;
                        borderSize: number | undefined;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        width: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                            default: string | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                            default: string | undefined;
                        };
                        type: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                            default: import("../../index.ts").TSkeletonType | undefined;
                        };
                        animation: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                            default: string | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                            default: string | undefined;
                        };
                        type: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                            default: import("../../index.ts").TSkeletonType | undefined;
                        };
                        animation: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IButtonClearAttributes["invisible"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                        default: any;
                    };
                    outlined: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                        default: boolean | undefined;
                    };
                    plain: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                        default: boolean | undefined;
                    };
                    simple: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                        default: boolean | undefined;
                    };
                    target: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                        default: import("../../button/types").TTarget | undefined;
                    };
                    to: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                        default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                        default: any;
                    };
                    outlined: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                        default: boolean | undefined;
                    };
                    plain: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                        default: boolean | undefined;
                    };
                    simple: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                        default: boolean | undefined;
                    };
                    target: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                        default: import("../../button/types").TTarget | undefined;
                    };
                    to: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                        default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
                    };
                    type: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                        default: import("../../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                        default: import("../../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                            default: string | number | undefined;
                        };
                    }>, {}, {}, {
                        sizeStyle(): Record<string, string>;
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                            default: number | undefined;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                            default: number | undefined;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                            default: import("../../../types").TSizeControl;
                        };
                    }>> & Readonly<{}>, {
                        size: import("../../../types").TSizeControl;
                        borderSize: number | undefined;
                    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                    BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        width: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                            default: string | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                            default: string | undefined;
                        };
                        type: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                            default: import("../../index.ts").TSkeletonType | undefined;
                        };
                        animation: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                            default: string | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                            default: string | undefined;
                        };
                        type: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                            default: import("../../index.ts").TSkeletonType | undefined;
                        };
                        animation: {
                            type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                    default: import("../../../types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../../types").TSizeControl;
                borderSize: number | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                width: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
        BDropDownComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                default: boolean | undefined;
            };
            placement: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                default: import("../../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
            required: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                default: boolean | undefined;
            };
            placement: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                default: import("../../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                default: import("../../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
        BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            alt: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types").ISize | undefined;
            };
            width: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>, {}, {}, {
            sizeStyle(): Record<string, string>;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                default: string | number | import("../../../types").ISize | undefined;
            };
            width: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                default: string | number | undefined;
            };
            height: {
                type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                default: string | number | undefined;
            };
        }>> & Readonly<{}>, {
            size: string | number | import("../../../types").ISize | undefined;
            width: string | number | undefined;
            height: string | number | undefined;
            alt: string | undefined;
            icon: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        IconCalendar: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BFilterOperation: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        operation: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["operation"]>;
            default: any;
        };
        equal: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["equal"]>;
            default: boolean | undefined;
        };
        notEqual: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notEqual"]>;
            default: boolean | undefined;
        };
        less: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["less"]>;
            default: boolean | undefined;
        };
        lessOrEqual: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["lessOrEqual"]>;
            default: boolean | undefined;
        };
        greater: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["greater"]>;
            default: boolean | undefined;
        };
        greaterOrEqual: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["greaterOrEqual"]>;
            default: boolean | undefined;
        };
        contains: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["contains"]>;
            default: boolean | undefined;
        };
        notContains: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notContains"]>;
            default: boolean | undefined;
        };
        startsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["startsWith"]>;
            default: boolean | undefined;
        };
        notStartsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notStartsWith"]>;
            default: boolean | undefined;
        };
        endsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["endsWith"]>;
            default: boolean | undefined;
        };
        notEndsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notEndsWith"]>;
            default: boolean | undefined;
        };
        in: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["in"]>;
            default: boolean | undefined;
        };
        notIn: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notIn"]>;
            default: boolean | undefined;
        };
        between: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["between"]>;
            default: boolean | undefined;
        };
        notBetween: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notBetween"]>;
            default: boolean | undefined;
        };
        isNull: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["isNull"]>;
            default: boolean | undefined;
        };
        isNotNull: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["isNotNull"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        showMenu: boolean;
        items: import("../filter-operation/types").IFilterOperationItem[];
        selected: import("../filter-operation/types").IFilterOperationItem | null;
    }, {
        operationText(): any;
    }, {
        onShowMenu(): void;
        onSelectedItem(item: import("../filter-operation/types").IFilterOperationItem): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../../index.ts").IComponentAttributes["id"];
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
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
            default: string | number | undefined;
        };
        disabled: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
            default: boolean | undefined;
        };
        focused: {
            type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
            type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
            default: any;
        };
    }>> & Readonly<{
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }>, {
        value: any;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        operation: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["operation"]>;
            default: any;
        };
        equal: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["equal"]>;
            default: boolean | undefined;
        };
        notEqual: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notEqual"]>;
            default: boolean | undefined;
        };
        less: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["less"]>;
            default: boolean | undefined;
        };
        lessOrEqual: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["lessOrEqual"]>;
            default: boolean | undefined;
        };
        greater: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["greater"]>;
            default: boolean | undefined;
        };
        greaterOrEqual: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["greaterOrEqual"]>;
            default: boolean | undefined;
        };
        contains: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["contains"]>;
            default: boolean | undefined;
        };
        notContains: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notContains"]>;
            default: boolean | undefined;
        };
        startsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["startsWith"]>;
            default: boolean | undefined;
        };
        notStartsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notStartsWith"]>;
            default: boolean | undefined;
        };
        endsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["endsWith"]>;
            default: boolean | undefined;
        };
        notEndsWith: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notEndsWith"]>;
            default: boolean | undefined;
        };
        in: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["in"]>;
            default: boolean | undefined;
        };
        notIn: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notIn"]>;
            default: boolean | undefined;
        };
        between: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["between"]>;
            default: boolean | undefined;
        };
        notBetween: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["notBetween"]>;
            default: boolean | undefined;
        };
        isNull: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["isNull"]>;
            default: boolean | undefined;
        };
        isNotNull: {
            type: import("vue").PropType<import("../filter-operation/types").IFilterOperationAttributes["isNotNull"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
    }>, {
        endsWith: boolean | undefined;
        startsWith: boolean | undefined;
        operation: any;
        equal: boolean | undefined;
        notEqual: boolean | undefined;
        less: boolean | undefined;
        lessOrEqual: boolean | undefined;
        greater: boolean | undefined;
        greaterOrEqual: boolean | undefined;
        contains: boolean | undefined;
        notContains: boolean | undefined;
        notStartsWith: boolean | undefined;
        notEndsWith: boolean | undefined;
        in: boolean | undefined;
        notIn: boolean | undefined;
        between: boolean | undefined;
        notBetween: boolean | undefined;
        isNull: boolean | undefined;
        isNotNull: boolean | undefined;
    }, {}, {
        BDropDown: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["items"]>;
                default: import("../../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["selected"]>;
                default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["placement"]>;
                default: import("../../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["triggerActivate"]>;
                default: import("../../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["teleportTo"]>;
                default: string | HTMLElement | undefined;
            };
        }>, {}, {
            cmpControl: InstanceType<typeof import("../../index.ts").BDropDownComponent> | null;
            registeredElements: HTMLElement[];
        }, {
            classes(): import("../../../types").TClasses;
        }, {
            onSelectedItem(data: import("../../index.ts").ICollectionItemAttributes): void;
            onSelectedItems({ selected, text, value }: {
                selected: import("../../index.ts").ICollectionItemAttributes;
                text: string;
                value: import("../../../types").TValue | import("../../../types").TValue[];
            }): void;
            onToggleVisible(value: boolean): void;
            onMounted(instance: InstanceType<typeof import("../../index.ts").BDropDownComponent>): void;
            afterShow(): void;
            onClick({ event, item }: {
                event: MouseEvent;
                item: import("../../index.ts").ICollectionItemAttributes;
            }): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>, {}, {
            cssClass: string;
        }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            value: {
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            text: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            items: {
                type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                default: unknown[];
            };
            selected: {
                type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                default: unknown;
            };
        }>> & Readonly<{}>, {
            items: any[];
            selected: any;
        }, {}, {
            BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["items"]>;
                default: import("../../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["selected"]>;
                default: Boolean | import("../../index.ts").IListBoxItemAttributes | import("../../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../../collection-abstract/list-box.types").IEventItemsSelected<import("../../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["placement"]>;
                default: import("../../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["triggerActivate"]>;
                default: import("../../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: import("vue").PropType<import("../../index.ts").IDropDownAttributes["teleportTo"]>;
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
            onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
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
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                    default: boolean | undefined;
                };
                placement: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                    default: import("../../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                    default: import("../../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("mounted" | "update:text" | "update:value" | "update:selected")[], "mounted" | "update:text" | "update:value" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["required"]>;
                    default: boolean | undefined;
                };
                placement: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["placement"]>;
                    default: import("../../../types").TPlacemant | undefined;
                };
                triggerActivate: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["triggerActivate"]>;
                    default: import("../../../types").TTriggerActivate | undefined;
                };
                owner: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["owner"]>;
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                offsetTop: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["offsetTop"]>;
                    default: number | undefined;
                };
                autoFocus: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoFocus"]>;
                    default: boolean | undefined;
                };
                autoClose: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["autoClose"]>;
                    default: boolean | undefined;
                };
                teleportTo: {
                    type: import("vue").PropType<import("../../index.ts").IDropDownComponentAttributes["teleportTo"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                    default: string | undefined;
                };
                maxRows: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                classes(): import("../../../types").TClasses;
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
                onDrop({ event, value }: {
                    event: DragEvent;
                    value: import("../../../types").TValue;
                }): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                items: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                    default: unknown;
                };
                multiple: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                    default: boolean | undefined;
                };
                separator: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                    default: string | undefined;
                };
                singleSelection: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                    default: boolean | undefined;
                };
                noSelect: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                    default: boolean | undefined;
                };
                onPropItemSelected: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                    default: import("../../index.ts").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
                    default: import("../../collection-abstract/list-box.types").IEventItemsSelected<unknown> | undefined;
                };
            }>, {}, {
                cssClass: string;
                stateSelected: import("../../index.ts").ICollectionItemAttributes[];
                stateItems: import("../../index.ts").ICollectionItemAttributes[];
                currentIndex: number;
                isFocused: boolean;
            }, {}, {
                watcherHandlerItems(value: import("../../index.ts").ICollectionItemAttributes[]): void;
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
                getItemByValue(value: import("../../../types").TValue): import("../../index.ts").ICollectionItemAttributes | undefined;
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
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>, {}, {
                cssClass: string;
            }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                value: {
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                text: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                    default: string | number | undefined;
                };
                disabled: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                    default: boolean | undefined;
                };
                focused: {
                    type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                    default: any;
                };
            }>> & Readonly<{
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            }>, {
                value: any;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                items: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                    default: unknown;
                };
            }>> & Readonly<{}>, {
                items: any[];
                selected: any;
            }, {}, {
                BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["items"]>;
                    default: unknown[];
                };
                selected: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["selected"]>;
                    default: unknown;
                };
                multiple: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["multiple"]>;
                    default: boolean | undefined;
                };
                separator: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["separator"]>;
                    default: string | undefined;
                };
                singleSelection: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["singleSelection"]>;
                    default: boolean | undefined;
                };
                noSelect: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["noSelect"]>;
                    default: boolean | undefined;
                };
                onPropItemSelected: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemSelected"]>;
                    default: import("../../index.ts").IEventSelected | undefined;
                };
                onPropItemsSelected: {
                    type: import("vue").PropType<import("../../collection-abstract/list-box.types").IListBoxAbstractAttributes<any>["onPropItemsSelected"]>;
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
                onPropItemSelected: import("../../index.ts").IEventSelected | undefined;
                onPropItemsSelected: import("../../collection-abstract/list-box.types").IEventItemsSelected<any> | undefined;
            }, {}, {}, {}, string, () => {
                updateSelected: (value: import("../../../types").TValue, selected: boolean, forward?: boolean) => boolean;
            }, true, {}, any>, ("click" | "refresh" | "move-item")[], "click" | "refresh" | "move-item", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                filterText: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                    default: string | undefined;
                };
                maxRows: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: import("vue").PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                        default: unknown;
                    };
                }>, {}, {
                    cssClass: string;
                }, {}, {}, import("../../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    value: {
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    text: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>> & Readonly<{
                    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                }>, {
                    value: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    items: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["items"]>;
                        default: unknown[];
                    };
                    selected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionAttributes<any>["selected"]>;
                        default: unknown;
                    };
                }>> & Readonly<{}>, {
                    items: any[];
                    selected: any;
                }, {}, {
                    BComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {}, {
                    attributes(): import("../../../types").TAttributes;
                    classText(): string;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    component: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                        default: string;
                    };
                    text: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                        default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                        default: any;
                    };
                    selected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                    readonly: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                        default: boolean | undefined;
                    };
                    required: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                        default: boolean | undefined;
                    };
                    meta: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                        default: any;
                    };
                    toggleable: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                        default: import("../../index.ts").IEventItemClick | undefined;
                    };
                    onPropSelected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
                        default: import("../../index.ts").IEventSelected | undefined;
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
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    text: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                        default: string | number | undefined;
                    };
                    disabled: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                        default: boolean | undefined;
                    };
                    focused: {
                        type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IControlValueAttributes["value"]>;
                        default: any;
                    };
                }>> & Readonly<{
                    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                }>, {
                    value: any;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend")[], "click" | "selected" | "drop" | "dragstart" | "dragenter" | "dragleave" | "dragend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    component: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["component"]>;
                        default: string;
                    };
                    text: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["text"]>;
                        default: string | number | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }> | import("vue").Component | (() => Promise<import("vue").Component>) | (() => import("vue").VNode) | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["icon"]>;
                        default: any;
                    };
                    selected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                    readonly: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["readonly"]>;
                        default: boolean | undefined;
                    };
                    required: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["required"]>;
                        default: boolean | undefined;
                    };
                    meta: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["meta"]>;
                        default: any;
                    };
                    toggleable: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["toggleable"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["draggable"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropClick"]>;
                        default: import("../../index.ts").IEventItemClick | undefined;
                    };
                    onPropSelected: {
                        type: import("vue").PropType<import("../../index.ts").ICollectionItemAttributes["onPropSelected"]>;
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
                    selected: boolean | undefined;
                    readonly: boolean | undefined;
                    required: boolean | undefined;
                    toggleable: boolean | undefined;
                    draggable: boolean | undefined;
                    onPropSelected: import("../../index.ts").IEventSelected | undefined;
                }, {}, {
                    BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        alt: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                            default: string | number | undefined;
                        };
                    }>, {}, {}, {
                        sizeStyle(): Record<string, string>;
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../../index.ts").IComponentAttributes["id"];
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
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                            default: string | undefined;
                        };
                        icon: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                            default: any;
                        };
                        size: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                            default: string | number | import("../../../types").ISize | undefined;
                        };
                        width: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                            default: string | number | undefined;
                        };
                        height: {
                            type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IListBoxItemAttributes["selected"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{}>, {
                    wordWrap: boolean | undefined;
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
                BIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    alt: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../../types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                        default: string | number | undefined;
                    };
                }>, {}, {}, {
                    sizeStyle(): Record<string, string>;
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../../index.ts").IComponentAttributes["id"];
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
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                        default: string | undefined;
                    };
                    icon: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                        default: any;
                    };
                    size: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                        default: string | number | import("../../../types").ISize | undefined;
                    };
                    width: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                        default: string | number | undefined;
                    };
                    height: {
                        type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
        BButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            href: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                default: import("../../button/types").TTarget | undefined;
            };
            to: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                default: import("../../../types").TComponentVariantType | undefined;
            };
            form: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                default: import("../../button/types").TFormType | undefined;
            };
            loading: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            sizeControl: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../../index.ts").IComponentAttributes["id"];
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
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["text"]>;
                default: string | number | undefined;
            };
            disabled: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["disabled"]>;
                default: boolean | undefined;
            };
            focused: {
                type: import("vue").PropType<import("../../index.ts").IControlAttributes["focused"]>;
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
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["href"]>;
                default: string | undefined;
            };
            icon: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["icon"]>;
                default: any;
            };
            outlined: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["outlined"]>;
                default: boolean | undefined;
            };
            plain: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["plain"]>;
                default: boolean | undefined;
            };
            simple: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["simple"]>;
                default: boolean | undefined;
            };
            target: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["target"]>;
                default: import("../../button/types").TTarget | undefined;
            };
            to: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["to"]>;
                default: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            };
            type: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["type"]>;
                default: import("../../../types").TComponentVariantType | undefined;
            };
            form: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["form"]>;
                default: import("../../button/types").TFormType | undefined;
            };
            loading: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../../types").ILoading | undefined;
            };
            sizeControl: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: import("vue").PropType<import("../../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: import("vue").PropType<import("../../index.ts").IButtonEvents["onPropClick"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
                    default: string | number | undefined;
                };
            }>, {}, {}, {
                sizeStyle(): Record<string, string>;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["alt"]>;
                    default: string | undefined;
                };
                icon: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["icon"]>;
                    default: any;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["size"]>;
                    default: string | number | import("../../../types").ISize | undefined;
                };
                width: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["width"]>;
                    default: string | number | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").IIconAttributes["height"]>;
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
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["borderSize"]>;
                    default: number | undefined;
                };
                size: {
                    type: import("vue").PropType<import("../../index.ts").ISpinnerAttributes["size"]>;
                    default: import("../../../types").TSizeControl;
                };
            }>> & Readonly<{}>, {
                size: import("../../../types").TSizeControl;
                borderSize: number | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            BSkeleton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                width: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../../index.ts").IComponentAttributes["id"];
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
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: import("vue").PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["width"]>;
                    default: string | undefined;
                };
                height: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["height"]>;
                    default: string | undefined;
                };
                type: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["type"]>;
                    default: import("../../index.ts").TSkeletonType | undefined;
                };
                animation: {
                    type: import("vue").PropType<import("../../index.ts").ISkeletonAttributes["animation"]>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
