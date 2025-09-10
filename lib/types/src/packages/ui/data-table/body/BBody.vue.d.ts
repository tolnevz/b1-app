import { type PropType } from 'vue';
import type { IBodyAttributes, IBodySelectedByKeyValue, IBodyCellAttributes } from './types';
import type { IBodyRow } from '../body-row/types';
import type { IDataTableValue } from '../types.d';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<IBodyAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[];
    };
    rows: {
        type: PropType<IBodyAttributes["rows"]>;
        default: IBodyRow[];
    };
    selected: {
        type: PropType<IBodyAttributes["selected"]>;
        default: IDataTableValue[] | IBodyRow[] | IBodySelectedByKeyValue | undefined;
    };
    highlighted: {
        type: PropType<IBodyAttributes["highlighted"]>;
        default: IDataTableValue[] | IBodySelectedByKeyValue | undefined;
    };
    options: {
        type: PropType<IBodyAttributes["options"]>;
        default: import("./types").IBodyOptions | undefined;
    };
    showSelection: {
        type: PropType<IBodyAttributes["showSelection"]>;
        default: boolean | undefined;
    };
}>, {}, {
    selectedRows: IBodyRow[];
    stateRows: IBodyRow[];
}, {
    multiSelect(): boolean;
    cells(): IBodyCellAttributes[][];
}, {
    /**
     * The Selected converts any format to the IDatatableValvalue [] array (for example [{id: '1'}, {id: '2'}])
     * This is necessary for the correct selection of rows in the table.
     * @param {IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[] | undefined} selected
     * @returns {IDataTableValue[]}
     */
    normalizeSelected(selected: IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[] | undefined): IDataTableValue[];
    /**
     * Select rows based on the selected value
     * @param {IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[]} selected
     * This method resets the current selection and selects rows based on the provided selected value.
     * It compares each row's data against the selected value, which can be in various formats
     * (e.g., an object with a key-value pair, an array of objects, or an array of IBodyRow).
     * It updates the `selectedRows` array and emits the `update:selected` and `selected-rows` events.
     * @returns {void}
     */
    selectRowsBySelected(selected: IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[]): void;
    selectRowsByHighlight(highlighted: IBodySelectedByKeyValue | IDataTableValue[]): void;
    /**
     * Get row by uuid
     * @param {string} uuid
     */
    getRowByUuid(uuid: string): {
        uuid: string;
        selected?: boolean | undefined;
        highlighted?: boolean | undefined;
        data: IDataTableValue[];
    } | undefined;
    /**
     * Remove selected row
     * @param {string} uuid
     */
    removeSelectedRow(uuid: string): void;
    toggleSelected(row: IBodyRow): void;
    updateSelected(uuid: string, selected: boolean): void;
    selectAll(value: boolean): void;
    /**
     * Removes the `data` property from the row object
     * @param {object} row
     * @returns {object} New object without `data` property
     */
    omitData(row: Record<string, any>): {
        [x: string]: any;
    };
    onRowClick(event: MouseEvent, row: IBodyRow, index: number): void;
    onRowDblClick(event: MouseEvent, row: IBodyRow, index: number): void;
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:selected" | "cell-click" | "cell-dblclick" | "selected-rows" | "row-click" | "row-dblclick")[], "update:selected" | "cell-click" | "cell-dblclick" | "selected-rows" | "row-click" | "row-dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<IBodyAttributes["columns"]>;
        default: import("../index.ts").IColumnAttributes[];
    };
    rows: {
        type: PropType<IBodyAttributes["rows"]>;
        default: IBodyRow[];
    };
    selected: {
        type: PropType<IBodyAttributes["selected"]>;
        default: IDataTableValue[] | IBodyRow[] | IBodySelectedByKeyValue | undefined;
    };
    highlighted: {
        type: PropType<IBodyAttributes["highlighted"]>;
        default: IDataTableValue[] | IBodySelectedByKeyValue | undefined;
    };
    options: {
        type: PropType<IBodyAttributes["options"]>;
        default: import("./types").IBodyOptions | undefined;
    };
    showSelection: {
        type: PropType<IBodyAttributes["showSelection"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    "onSelected-rows"?: ((...args: any[]) => any) | undefined;
    "onRow-click"?: ((...args: any[]) => any) | undefined;
    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
}>, {
    selected: IDataTableValue[] | IBodyRow[] | IBodySelectedByKeyValue | undefined;
    columns: import("../index.ts").IColumnAttributes[];
    highlighted: IDataTableValue[] | IBodySelectedByKeyValue | undefined;
    showSelection: boolean | undefined;
    rows: IBodyRow[];
    options: import("./types").IBodyOptions | undefined;
}, {}, {
    BBodyRow: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        cells: {
            type: PropType<import("../index.ts").IBodyRowAttributes["cells"]>;
            default: import("../body-cell/types").IBodyCellAttributes[] | undefined;
        };
        uuid: {
            type: PropType<import("../index.ts").IBodyRowAttributes["uuid"]>;
            required: true;
        };
        selected: {
            type: PropType<import("../index.ts").IBodyRowAttributes["selected"]>;
            default: boolean;
        };
        evenRow: {
            type: PropType<import("../index.ts").IBodyRowAttributes["evenRow"]>;
            default: boolean | undefined;
        };
        showSelection: {
            type: PropType<import("../index.ts").IBodyRowAttributes["showSelection"]>;
            default: boolean | undefined;
        };
        highlighted: {
            type: PropType<import("../index.ts").IBodyRowAttributes["highlighted"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        classes(): import("../../../types/types").TClasses;
        stateSelected(): boolean | undefined;
    }, {
        onClick(event: MouseEvent): void;
        onDblClick(event: MouseEvent): void;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "dblclick" | "cell-click" | "cell-dblclick")[], "click" | "dblclick" | "cell-click" | "cell-dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        cells: {
            type: PropType<import("../index.ts").IBodyRowAttributes["cells"]>;
            default: import("../body-cell/types").IBodyCellAttributes[] | undefined;
        };
        uuid: {
            type: PropType<import("../index.ts").IBodyRowAttributes["uuid"]>;
            required: true;
        };
        selected: {
            type: PropType<import("../index.ts").IBodyRowAttributes["selected"]>;
            default: boolean;
        };
        evenRow: {
            type: PropType<import("../index.ts").IBodyRowAttributes["evenRow"]>;
            default: boolean | undefined;
        };
        showSelection: {
            type: PropType<import("../index.ts").IBodyRowAttributes["showSelection"]>;
            default: boolean | undefined;
        };
        highlighted: {
            type: PropType<import("../index.ts").IBodyRowAttributes["highlighted"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onDblclick?: ((...args: any[]) => any) | undefined;
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    }>, {
        selected: boolean | undefined;
        highlighted: boolean | undefined;
        showSelection: boolean | undefined;
        evenRow: boolean | undefined;
        cells: import("../body-cell/types").IBodyCellAttributes[] | undefined;
    }, {}, {
        BBodyCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("../body-cell/types").IBodyCellAttributes["field"]>;
                default: string;
            };
            value: {
                type: PropType<import("../body-cell/types").IBodyCellAttributes["value"]>;
                default: any;
            };
            selection: {
                type: PropType<import("../body-cell/types").IBodyCellAttributes["selection"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../../types/types").TClasses;
            isEmpty(): boolean;
            valueComponent(): any;
            hasLoading(): boolean;
            hasSkeleton(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "dblclick")[], "click" | "dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("../body-cell/types").IBodyCellAttributes["field"]>;
                default: string;
            };
            value: {
                type: PropType<import("../body-cell/types").IBodyCellAttributes["value"]>;
                default: any;
            };
            selection: {
                type: PropType<import("../body-cell/types").IBodyCellAttributes["selection"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onDblclick?: ((...args: any[]) => any) | undefined;
        }>, {
            value: any;
            field: string;
            selection: boolean | undefined;
        }, {}, {
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
        BCheckBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            indeterminate: {
                type: PropType<import("../../index.ts").ICheckBoxAttributes["indeterminate"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").ICheckBoxAttributes["sizeControl"]>;
                default: import("../../../types/types").TSizeControl | undefined;
            };
            marked: {
                type: PropType<import("../../index.ts").ICheckBoxAttributes["marked"]>;
                default: boolean | undefined;
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
                default: import("../../../types/types").TState | undefined;
            };
        }>, {}, {
            stateText: string | number | undefined;
            stateState: import("../../../types/types").TState;
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
                default: import("../../../types/types").TState | undefined;
            };
        }>> & Readonly<{}>, {
            readonly: boolean | undefined;
            required: boolean | undefined;
            invalid: boolean | undefined;
            state: import("../../../types/types").TState | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            indeterminate: {
                type: PropType<import("../../index.ts").ICheckBoxAttributes["indeterminate"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../../index.ts").ICheckBoxAttributes["sizeControl"]>;
                default: import("../../../types/types").TSizeControl | undefined;
            };
            marked: {
                type: PropType<import("../../index.ts").ICheckBoxAttributes["marked"]>;
                default: boolean | undefined;
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
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, () => {
    updateSelected: (uuid: string, selected: boolean) => void;
}, true, {}, any>;
export default _default;
