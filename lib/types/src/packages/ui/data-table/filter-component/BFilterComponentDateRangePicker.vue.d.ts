import { type PropType } from 'vue';
import { BDateRangePicker } from '../../date-range-picker';
import { ESizeControl } from '../../../types';
import type { IFilterComponentAttributes } from './types';
declare const _default: import("vue").DefineComponent<{}, {}, {
    stateValue1: null;
    stateValue2: null;
}, {}, {
    onRange({ text1, text2, value1, value2 }: {
        text1: string;
        text2: string;
        value1: number;
        value2: number;
    }): void;
    onChange({ text1, text2 }: {
        text1: string;
        text2: string;
    }): void;
    onMounted(cmp: InstanceType<typeof BDateRangePicker>): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {} | {
    [x: string]: any;
}, {}, {
    BDateRangePicker: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        date1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["date1"]>;
            default: Date | undefined;
        };
        date2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["date2"]>;
            default: Date | undefined;
        };
        text1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["text1"]>;
            default: string | undefined;
        };
        text2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["text2"]>;
            default: string | undefined;
        };
        value1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["value1"]>;
            default: number | undefined;
        };
        value2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["value2"]>;
            default: number | undefined;
        };
        format: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["format"]>;
            default(): string | undefined;
        };
        text: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["text"]>;
            default: string | number | undefined;
        };
        value: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["value"]>;
            default: any;
        };
        minDate: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["minDate"]>;
            default: string | number | Date | undefined;
        };
        maxDate: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["maxDate"]>;
            default: string | number | Date | undefined;
        };
        visibility: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        simple: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["simple"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["placement"]>;
            default: import("../../../types").TPlacemant | undefined;
        };
        required: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["required"]>;
            default: boolean | undefined;
        };
        editable: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["editable"]>;
            default: boolean | undefined;
        };
        placeholder1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["placeholder1"]>;
            default: string | undefined;
        };
        placeholder2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["placeholder2"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["icon"]>;
            default: any;
        };
    }>, {}, {
        cssClass: string;
        stateText1: string;
        stateValue1: number | undefined;
        stateText2: string;
        stateValue2: number | undefined;
        showDialog: boolean;
        cmpInput1: InstanceType<typeof import("../../index.ts").BInput> | null;
        cmpInput2: InstanceType<typeof import("../../index.ts").BInput> | null;
        cmpDialog: InstanceType<typeof import("../../date-range/BDateRange.vue").default> | null;
        cmpDialogBox: InstanceType<typeof import("../../index.ts").BDropDownComponent> | null;
        isFocused: boolean;
        iconProps: import("../../index.ts").IIconAttributes | null;
        inputIndex: number;
    }, {
        classes(): import("../../../types").TClasses;
    }, {
        toggleDropDown(): void;
        onClickToggleDropDown(): void;
        onInputClick1(): void;
        onInputClick2(): void;
        onBaseInputFocus(): void;
        onInputFocus1(): void;
        onInputFocus2(): void;
        onFocusOut(): void;
        openDropDown(): void;
        hideDropDown(): void;
        onInputKeyDown(event: KeyboardEvent): void;
        onInputClear(): void;
        onInputClickClear(): void;
        onMountedInput1(input: InstanceType<typeof import("../../index.ts").BInput>): void;
        onMountedInput2(input: InstanceType<typeof import("../../index.ts").BInput>): void;
        onMountedDate(date: InstanceType<typeof import("../../date-range/BDateRange.vue").default>): void;
        onMountedDialogBox(cmp: InstanceType<typeof import("../../index.ts").BDropDownComponent>): void;
        onDateChange({ text1, value1, date1, text2, value2, date2 }: {
            text1: string;
            value1: number;
            date1: Date;
            text2: string;
            value2: number;
            date2: Date;
        }): void;
        reset(): void;
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "click" | "change" | "range" | "count" | "update:date1" | "update:date2" | "update:text1" | "update:text2" | "update:value1" | "update:value2")[], "error" | "click" | "change" | "range" | "count" | "update:date1" | "update:date2" | "update:text1" | "update:text2" | "update:value1" | "update:value2", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        date1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["date1"]>;
            default: Date | undefined;
        };
        date2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["date2"]>;
            default: Date | undefined;
        };
        text1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["text1"]>;
            default: string | undefined;
        };
        text2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["text2"]>;
            default: string | undefined;
        };
        value1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["value1"]>;
            default: number | undefined;
        };
        value2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["value2"]>;
            default: number | undefined;
        };
        format: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["format"]>;
            default(): string | undefined;
        };
        text: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["text"]>;
            default: string | number | undefined;
        };
        value: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["value"]>;
            default: any;
        };
        minDate: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["minDate"]>;
            default: string | number | Date | undefined;
        };
        maxDate: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["maxDate"]>;
            default: string | number | Date | undefined;
        };
        visibility: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["sizeControl"]>;
            default: import("../../../types").TSizeControl | undefined;
        };
        simple: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["simple"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["placement"]>;
            default: import("../../../types").TPlacemant | undefined;
        };
        required: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["required"]>;
            default: boolean | undefined;
        };
        editable: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["editable"]>;
            default: boolean | undefined;
        };
        placeholder1: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["placeholder1"]>;
            default: string | undefined;
        };
        placeholder2: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["placeholder2"]>;
            default: string | undefined;
        };
        icon: {
            type: PropType<import("../../date-range-picker").IDateRangePickerAttributes["icon"]>;
            default: any;
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
        icon: any;
        simple: boolean | undefined;
        sizeControl: import("../../../types").TSizeControl | undefined;
        visibility: boolean | undefined;
        readonly: boolean | undefined;
        required: boolean | undefined;
        placement: import("../../../types").TPlacemant | undefined;
        clearButton: boolean | undefined;
        clearWithText: boolean | undefined;
        showStateIcon: boolean | undefined;
        editable: boolean | undefined;
        format: string | undefined;
        minDate: string | number | Date | undefined;
        maxDate: string | number | Date | undefined;
        date1: Date | undefined;
        date2: Date | undefined;
        text1: string | undefined;
        text2: string | undefined;
        value1: number | undefined;
        value2: number | undefined;
        placeholder1: string | undefined;
        placeholder2: string | undefined;
    }, {}, {
        BDateRange: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            date1: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["date1"]>;
                default: Date | undefined;
            };
            date2: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["date2"]>;
                default: Date | undefined;
            };
            text1: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["text1"]>;
                default: string | undefined;
            };
            text2: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["text2"]>;
                default: string | undefined;
            };
            value1: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["value1"]>;
                default: number | undefined;
            };
            value2: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["value2"]>;
                default: number | undefined;
            };
            format: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["format"]>;
                default(): string | undefined;
            };
            text: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["text"]>;
                default: string | number | undefined;
            };
            value: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["value"]>;
                default: any;
            };
            minDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["minDate"]>;
                default: string | number | Date | undefined;
            };
            maxDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["maxDate"]>;
                default: string | number | Date | undefined;
            };
            firstDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["firstDate"]>;
                default: boolean | undefined;
            };
            secondDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["secondDate"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateDate1: import("../../date/types").IUseDate | null;
            stateDate2: import("../../date/types").IUseDate | null;
            stateMinDate: number;
            stateMaxDate: number;
            selectionDate2: number;
            selected: import("../../date/types").IUseDate[];
            calendar1: InstanceType<typeof import("../../date/BDate.vue").default> | null;
            calendar2: InstanceType<typeof import("../../date/BDate.vue").default> | null;
            invalid: boolean;
        }, {
            classes(): import("../../../types").TClasses;
        }, {
            validateDate(value: import("../../date/types").TDate): boolean;
            handleDateChange(value: import("../../date/types").TDate, old: import("../../date/types").TDate | null, stateKey: "stateDate1" | "stateDate2"): void;
            emitChange(date1: import("../../date/types").IUseDate | null, date2: import("../../date/types").IUseDate | null): void;
            updateCalendares(): void;
            getCountDays(): number;
            isBeginSelected(): boolean;
            addSelected(date: import("../../date/types").IUseDate): void;
            getSelectedIndex(unixTime: number): number;
            handleToggleSelected(date: Date, calendar: InstanceType<typeof import("../../date/BDate.vue").default> | null, otherCalendar: InstanceType<typeof import("../../date/BDate.vue").default> | null): void;
            reset(): void;
            onPeriodChange1({ month, year }: {
                month: number;
                year: number;
            }): void;
            onPeriodChange2({ month, year }: {
                month: number;
                year: number;
            }): void;
            onMountedDate1(instance: InstanceType<typeof import("../../date/BDate.vue").default>): void;
            onMountedDate2(instance: InstanceType<typeof import("../../date/BDate.vue").default>): void;
            additionalClass(item: import("../../date/types").ICellDay): string;
            onMouseEnterDay(item: import("../../date/types").ICellDay): void;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "click" | "change" | "range" | "count" | "update:date1" | "update:date2" | "update:text1" | "update:text2" | "update:value1" | "update:value2")[], "error" | "click" | "change" | "range" | "count" | "update:date1" | "update:date2" | "update:text1" | "update:text2" | "update:value1" | "update:value2", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            date1: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["date1"]>;
                default: Date | undefined;
            };
            date2: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["date2"]>;
                default: Date | undefined;
            };
            text1: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["text1"]>;
                default: string | undefined;
            };
            text2: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["text2"]>;
                default: string | undefined;
            };
            value1: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["value1"]>;
                default: number | undefined;
            };
            value2: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["value2"]>;
                default: number | undefined;
            };
            format: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["format"]>;
                default(): string | undefined;
            };
            text: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["text"]>;
                default: string | number | undefined;
            };
            value: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["value"]>;
                default: any;
            };
            minDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["minDate"]>;
                default: string | number | Date | undefined;
            };
            maxDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["maxDate"]>;
                default: string | number | Date | undefined;
            };
            firstDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["firstDate"]>;
                default: boolean | undefined;
            };
            secondDate: {
                type: PropType<import("../../date-range/types").IDateRangeAttributes["secondDate"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    default: import("../../index.ts").IEventSelected | undefined;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    default: import("../../index.ts").IEventSelected | undefined;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                        default: string | undefined;
                    };
                    maxRows: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                        default: number | undefined;
                    };
                    autoWidth: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                        default: boolean | undefined;
                    };
                    wordWrap: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                        default: string | undefined;
                    };
                    maxRows: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                        default: number | undefined;
                    };
                    autoWidth: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                        default: boolean | undefined;
                    };
                    wordWrap: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                        default: boolean | undefined;
                    };
                    draggable: {
                        type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        selected: boolean | undefined;
                        readonly: boolean | undefined;
                        required: boolean | undefined;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            BDate: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                date: {
                    type: PropType<import("../../date/types").IDateAttributes["date"]>;
                    default: Date | undefined;
                };
                format: {
                    type: PropType<import("../../date/types").IDateAttributes["format"]>;
                    default(): string | undefined;
                };
                text: {
                    type: PropType<import("../../date/types").IDateAttributes["text"]>;
                    default: string | number | undefined;
                };
                value: {
                    type: PropType<import("../../date/types").IDateAttributes["value"]>;
                    default: any;
                };
                minDate: {
                    type: PropType<import("../../date/types").IDateAttributes["minDate"]>;
                    default: string | number | Date | undefined;
                };
                maxDate: {
                    type: PropType<import("../../date/types").IDateAttributes["maxDate"]>;
                    default: string | number | Date | undefined;
                };
                multiple: {
                    type: PropType<import("../../date/types").IDateAttributes["multiple"]>;
                    default: boolean | undefined;
                };
                maxSelections: {
                    type: PropType<import("../../date/types").IDateAttributes["maxSelections"]>;
                    default: number | undefined;
                };
                pop: {
                    type: PropType<import("../../date/types").IDateAttributes["pop"]>;
                    default: boolean | undefined;
                };
                separator: {
                    type: PropType<import("../../date/types").IDateAttributes["separator"]>;
                    default: string | undefined;
                };
                currentMonth: {
                    type: PropType<import("../../date/types").IDateAttributes["currentMonth"]>;
                    default: number | undefined;
                };
                currentYear: {
                    type: PropType<import("../../date/types").IDateAttributes["currentYear"]>;
                    default: number | undefined;
                };
                toggle: {
                    type: PropType<import("../../date/types").IDateAttributes["toggle"]>;
                    default: boolean | undefined;
                };
                additionalClass: {
                    type: PropType<(item: import("../../date/types").ICellDay) => string | string[]>;
                    default: () => "";
                };
                arrowKeys: {
                    type: PropType<import("../../date/types").IDateAttributes["arrowKeys"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
                today: number;
                selected: import("../../date/types").IUseDate[];
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
                days(): import("../../date/types").ICellDay[][];
                weekDayNames(): string[];
                monthName(): string;
                months(): import("../../../types").ISimpleItem[];
                years(): import("../../../types").ISimpleItem[];
            }, {
                updateCurrentMonth(value?: number): void;
                updateCurrentYear(value?: number): void;
                removeSelected(unixTime: number): boolean;
                toggleSelected(value: import("../../date/types").TDate): void;
                validateDate(value: import("../../date/types").TDate): boolean;
                addSelected(value: import("../../date/types").TDate, updateCalendar?: boolean): boolean;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("error" | "update:text" | "click" | "update:value" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day")[], "error" | "update:text" | "click" | "update:value" | "change" | "update:date" | "month-changed" | "year-changed" | "period-changed" | "toggle-selected" | "mouse-enter-day" | "mouse-leave-day", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                date: {
                    type: PropType<import("../../date/types").IDateAttributes["date"]>;
                    default: Date | undefined;
                };
                format: {
                    type: PropType<import("../../date/types").IDateAttributes["format"]>;
                    default(): string | undefined;
                };
                text: {
                    type: PropType<import("../../date/types").IDateAttributes["text"]>;
                    default: string | number | undefined;
                };
                value: {
                    type: PropType<import("../../date/types").IDateAttributes["value"]>;
                    default: any;
                };
                minDate: {
                    type: PropType<import("../../date/types").IDateAttributes["minDate"]>;
                    default: string | number | Date | undefined;
                };
                maxDate: {
                    type: PropType<import("../../date/types").IDateAttributes["maxDate"]>;
                    default: string | number | Date | undefined;
                };
                multiple: {
                    type: PropType<import("../../date/types").IDateAttributes["multiple"]>;
                    default: boolean | undefined;
                };
                maxSelections: {
                    type: PropType<import("../../date/types").IDateAttributes["maxSelections"]>;
                    default: number | undefined;
                };
                pop: {
                    type: PropType<import("../../date/types").IDateAttributes["pop"]>;
                    default: boolean | undefined;
                };
                separator: {
                    type: PropType<import("../../date/types").IDateAttributes["separator"]>;
                    default: string | undefined;
                };
                currentMonth: {
                    type: PropType<import("../../date/types").IDateAttributes["currentMonth"]>;
                    default: number | undefined;
                };
                currentYear: {
                    type: PropType<import("../../date/types").IDateAttributes["currentYear"]>;
                    default: number | undefined;
                };
                toggle: {
                    type: PropType<import("../../date/types").IDateAttributes["toggle"]>;
                    default: boolean | undefined;
                };
                additionalClass: {
                    type: PropType<(item: import("../../date/types").ICellDay) => string | string[]>;
                    default: () => "";
                };
                arrowKeys: {
                    type: PropType<import("../../date/types").IDateAttributes["arrowKeys"]>;
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
                additionalClass: (item: import("../../date/types").ICellDay) => string | string[];
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        default: import("../../index.ts").IEventSelected | undefined;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        default: import("../../index.ts").IEventSelected | undefined;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                            default: string | undefined;
                        };
                        maxRows: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                            default: number | undefined;
                        };
                        autoWidth: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                            default: boolean | undefined;
                        };
                        wordWrap: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                            default: boolean | undefined;
                        };
                        draggable: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                            default: string | undefined;
                        };
                        maxRows: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                            default: number | undefined;
                        };
                        autoWidth: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                            default: boolean | undefined;
                        };
                        wordWrap: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                            default: boolean | undefined;
                        };
                        draggable: {
                            type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                    default: undefined;
                                };
                                component: {
                                    type: any;
                                };
                                visible: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                    default: boolean | undefined;
                                };
                                hidden: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                    default: undefined;
                                };
                                component: {
                                    type: any;
                                };
                                visible: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                    default: boolean | undefined;
                                };
                                hidden: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            selected: boolean | undefined;
                            readonly: boolean | undefined;
                            required: boolean | undefined;
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
                                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                    default: undefined;
                                };
                                component: {
                                    type: any;
                                };
                                visible: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                    default: boolean | undefined;
                                };
                                hidden: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                    default: undefined;
                                };
                                component: {
                                    type: any;
                                };
                                visible: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                    default: boolean | undefined;
                                };
                                hidden: {
                                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            BDivider: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                vertical: {
                    type: PropType<import("../../index.ts").IDividerAttributes["vertical"]>;
                    default: boolean | undefined;
                };
                type: {
                    type: PropType<import("../../index.ts").IDividerAttributes["type"]>;
                    default: import("../../../types").TTypeBorder | undefined;
                };
                text: {
                    type: PropType<import("../../index.ts").IDividerAttributes["text"]>;
                    default: string | undefined;
                };
                textAlign: {
                    type: PropType<import("../../index.ts").IDividerAttributes["textAlign"]>;
                    default: import("../../../types").TAlign | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../../types").TClasses;
                direction(): import("../../../types").EDirection;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IDividerAttributes["vertical"]>;
                    default: boolean | undefined;
                };
                type: {
                    type: PropType<import("../../index.ts").IDividerAttributes["type"]>;
                    default: import("../../../types").TTypeBorder | undefined;
                };
                text: {
                    type: PropType<import("../../index.ts").IDividerAttributes["text"]>;
                    default: string | undefined;
                };
                textAlign: {
                    type: PropType<import("../../index.ts").IDividerAttributes["textAlign"]>;
                    default: import("../../../types").TAlign | undefined;
                };
            }>> & Readonly<{}>, {
                type: import("../../../types").TTypeBorder | undefined;
                text: string | undefined;
                vertical: boolean | undefined;
                textAlign: import("../../../types").TAlign | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
        IconMiddle: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BFilterOperation: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        operation: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["operation"]>;
            default: any;
        };
        equal: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["equal"]>;
            default: boolean | undefined;
        };
        notEqual: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notEqual"]>;
            default: boolean | undefined;
        };
        less: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["less"]>;
            default: boolean | undefined;
        };
        lessOrEqual: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["lessOrEqual"]>;
            default: boolean | undefined;
        };
        greater: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["greater"]>;
            default: boolean | undefined;
        };
        greaterOrEqual: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["greaterOrEqual"]>;
            default: boolean | undefined;
        };
        contains: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["contains"]>;
            default: boolean | undefined;
        };
        notContains: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notContains"]>;
            default: boolean | undefined;
        };
        startsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["startsWith"]>;
            default: boolean | undefined;
        };
        notStartsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notStartsWith"]>;
            default: boolean | undefined;
        };
        endsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["endsWith"]>;
            default: boolean | undefined;
        };
        notEndsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notEndsWith"]>;
            default: boolean | undefined;
        };
        in: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["in"]>;
            default: boolean | undefined;
        };
        notIn: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notIn"]>;
            default: boolean | undefined;
        };
        between: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["between"]>;
            default: boolean | undefined;
        };
        notBetween: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notBetween"]>;
            default: boolean | undefined;
        };
        isNull: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["isNull"]>;
            default: boolean | undefined;
        };
        isNotNull: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["isNotNull"]>;
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        operation: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["operation"]>;
            default: any;
        };
        equal: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["equal"]>;
            default: boolean | undefined;
        };
        notEqual: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notEqual"]>;
            default: boolean | undefined;
        };
        less: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["less"]>;
            default: boolean | undefined;
        };
        lessOrEqual: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["lessOrEqual"]>;
            default: boolean | undefined;
        };
        greater: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["greater"]>;
            default: boolean | undefined;
        };
        greaterOrEqual: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["greaterOrEqual"]>;
            default: boolean | undefined;
        };
        contains: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["contains"]>;
            default: boolean | undefined;
        };
        notContains: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notContains"]>;
            default: boolean | undefined;
        };
        startsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["startsWith"]>;
            default: boolean | undefined;
        };
        notStartsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notStartsWith"]>;
            default: boolean | undefined;
        };
        endsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["endsWith"]>;
            default: boolean | undefined;
        };
        notEndsWith: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notEndsWith"]>;
            default: boolean | undefined;
        };
        in: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["in"]>;
            default: boolean | undefined;
        };
        notIn: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notIn"]>;
            default: boolean | undefined;
        };
        between: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["between"]>;
            default: boolean | undefined;
        };
        notBetween: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["notBetween"]>;
            default: boolean | undefined;
        };
        isNull: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["isNull"]>;
            default: boolean | undefined;
        };
        isNotNull: {
            type: PropType<import("../filter-operation/types").IFilterOperationAttributes["isNotNull"]>;
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
                default: import("../../index.ts").IEventSelected | undefined;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                default: import("../../index.ts").IEventSelected | undefined;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                    default: string | undefined;
                };
                maxRows: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IListBoxAttributes["filterText"]>;
                    default: string | undefined;
                };
                maxRows: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["maxRows"]>;
                    default: number | undefined;
                };
                autoWidth: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["autoWidth"]>;
                    default: boolean | undefined;
                };
                wordWrap: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["wordWrap"]>;
                    default: boolean | undefined;
                };
                draggable: {
                    type: PropType<import("../../index.ts").IListBoxAttributes["draggable"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    selected: boolean | undefined;
                    readonly: boolean | undefined;
                    required: boolean | undefined;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                            type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                        type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
                    type: PropType<import("../../index.ts").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../../index.ts").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../../index.ts").IComponentAttributes["hidden"]>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
