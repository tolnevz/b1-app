import { type PropType } from 'vue';
import type { IDataTableAttributes, IDataTableValue } from './types';
import BBody from './body/BBody.vue';
import BHeader from './header/BHeader.vue';
import type { ISortColumn } from './common/sort.types';
import { type IPaginationAttributes, type IPaginationSummary } from '../pagination';
import type { IBodyRow } from './body-row/types';
import type { IColumnAttributes } from './column/types';
import type { IFilterComponentAttributes } from './filter-component/types.d';
import type { ISettingsItem } from './settings/types';
import type { IUseSort } from './common/sort.types';
import { type ISimpleItem, ESizeControl } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<IDataTableAttributes["value"]>;
        default: IDataTableValue[];
    };
    columns: {
        type: PropType<IDataTableAttributes["columns"]>;
        default: IColumnAttributes[];
    };
    height: {
        type: PropType<IDataTableAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<IDataTableAttributes["width"]>;
        default: string | number | undefined;
    };
    multiSelect: {
        type: PropType<IDataTableAttributes["multiSelect"]>;
        default: boolean | undefined;
    };
    multiSort: {
        type: PropType<IDataTableAttributes["multiSort"]>;
        default: boolean | undefined;
    };
    optionsBody: {
        type: PropType<IDataTableAttributes["optionsBody"]>;
        default: import("./index.ts").IBodyOptions | undefined;
    };
    pagination: {
        type: PropType<IDataTableAttributes["pagination"]>;
        default: import("./types").IDataTablePagination | undefined;
    };
    draggableColumn: {
        type: PropType<IDataTableAttributes["draggableColumn"]>;
        default: boolean | undefined;
    };
    resizableColumn: {
        type: PropType<IDataTableAttributes["resizableColumn"]>;
        default: boolean | undefined;
    };
    showFilters: {
        type: PropType<IDataTableAttributes["showFilters"]>;
        default: boolean | undefined;
    };
    loading: {
        type: PropType<IDataTableAttributes["loading"]>;
        default: boolean | import("../../types").ILoading | undefined;
    };
    showSelection: {
        type: PropType<IDataTableAttributes["showSelection"]>;
        default: boolean | undefined;
    };
    showFooter: {
        type: PropType<IDataTableAttributes["showFooter"]>;
        default: boolean | undefined;
    };
    footerValue: {
        type: PropType<IDataTableAttributes["footerValue"]>;
        default: IDataTableValue[] | undefined;
    };
    sort: {
        type: PropType<IDataTableAttributes["sort"]>;
        default: ISortColumn | ISortColumn[] | undefined;
    };
    selected: {
        type: PropType<IDataTableAttributes["selected"]>;
        default: any;
    };
    highlighted: {
        type: PropType<IDataTableAttributes["highlighted"]>;
        default: any;
    };
}>, {
    t: import("vue-i18n").VueI18nTranslation<{}, string, import("@intlify/core-base").RemoveIndexSignature<{
        [x: string]: import("vue-i18n").LocaleMessageValue<import("vue-i18n").VueMessageType>;
    }>, never, never, never>;
}, {
    rows: IBodyRow[];
    cssClass: string;
    stateSort: ISortColumn[];
    filters: IFilterComponentAttributes[];
    statePaginationSummary: IPaginationSummary;
    stateColumns: IColumnAttributes[];
    doResize: boolean;
    offsetTopOverlay: number;
    isMounted: boolean;
    cmpBody: InstanceType<typeof BBody> | null;
    cmpHeader: InstanceType<typeof BHeader> | null;
    isSortReady: boolean;
}, {
    classes(): (string | {
        [x: string]: boolean;
    })[];
    visibleColumns(): IDataTableAttributes["columns"];
    footerRows(): Record<string, any>[];
    totalRows(): number;
    empty(): boolean;
    paginationProps(): IPaginationAttributes;
    pageSizes(): ISimpleItem[];
}, {
    onMountedBody(cmp: InstanceType<typeof BBody>): void;
    onMountedHeader(cmp: InstanceType<typeof BHeader>): void;
    onChangePagination(summary: IPaginationSummary): void;
    onChangestatePaginationSummary(summary: IPaginationSummary): void;
    onChangePageSizes({ value }: {
        value: number;
    }): void;
    /**
     * Process the speakers if the property of sort appears
     */
    processSortColumns(): void;
    /**
     * Handle move column
     * @param {{ draggedColumn: IColumnAttributes, targetColumn: IColumnAttributes }} columns - The columns being moved
     * @param {IColumnAttributes} columns.draggedColumn - The column being dragged
     * @param {IColumnAttributes} columns.targetColumn - The target column
     */
    onMoveColumn({ draggedColumn, targetColumn }: {
        draggedColumn: IColumnAttributes;
        targetColumn: IColumnAttributes;
    }): void;
    /**
     * Handle resize column
     * @param {{ column: IColumnAttributes }} columns - The column being resized
     * @param {IColumnAttributes} columns.column - The column being resized
     */
    onResizeColumn({ column }: {
        column: IColumnAttributes;
    }): void;
    onStartResizeColumn({ column }: {
        column: IColumnAttributes;
    }): void;
    onEndResizeColumn({ column }: {
        column: IColumnAttributes;
    }): void;
    onSelectedRows(rows: IBodyRow[]): void;
    onChangeSort(value: ISortColumn[]): void;
    onChangeFilters(filters: IFilterComponentAttributes[]): void;
    emitChangeCombined(): void;
    updateOffsetTopOverlay(): void;
    onSelectAllRows({ value }: {
        value: boolean;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("../component").IComponentAttributes["id"];
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
        type: PropType<import("../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onMounted?: ((...args: any[]) => any) | undefined;
    onToggleVisible?: ((...args: any[]) => any) | undefined;
    onCreated?: ((...args: any[]) => any) | undefined;
}>, {
    id: string | undefined;
    component: any;
    visible: boolean | undefined;
    hidden: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:selected" | "cell-click" | "cell-dblclick" | "selected-rows" | "row-click" | "row-dblclick" | "change-sort" | "change-filter" | "change-filters" | "change-columns" | "change-pagination" | "change-page-size" | "change-combined" | "footer-cell-click" | "footer-cell-dblclick")[], "update:selected" | "cell-click" | "cell-dblclick" | "selected-rows" | "row-click" | "row-dblclick" | "change-sort" | "change-filter" | "change-filters" | "change-columns" | "change-pagination" | "change-page-size" | "change-combined" | "footer-cell-click" | "footer-cell-dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: PropType<IDataTableAttributes["value"]>;
        default: IDataTableValue[];
    };
    columns: {
        type: PropType<IDataTableAttributes["columns"]>;
        default: IColumnAttributes[];
    };
    height: {
        type: PropType<IDataTableAttributes["height"]>;
        default: string | number | undefined;
    };
    width: {
        type: PropType<IDataTableAttributes["width"]>;
        default: string | number | undefined;
    };
    multiSelect: {
        type: PropType<IDataTableAttributes["multiSelect"]>;
        default: boolean | undefined;
    };
    multiSort: {
        type: PropType<IDataTableAttributes["multiSort"]>;
        default: boolean | undefined;
    };
    optionsBody: {
        type: PropType<IDataTableAttributes["optionsBody"]>;
        default: import("./index.ts").IBodyOptions | undefined;
    };
    pagination: {
        type: PropType<IDataTableAttributes["pagination"]>;
        default: import("./types").IDataTablePagination | undefined;
    };
    draggableColumn: {
        type: PropType<IDataTableAttributes["draggableColumn"]>;
        default: boolean | undefined;
    };
    resizableColumn: {
        type: PropType<IDataTableAttributes["resizableColumn"]>;
        default: boolean | undefined;
    };
    showFilters: {
        type: PropType<IDataTableAttributes["showFilters"]>;
        default: boolean | undefined;
    };
    loading: {
        type: PropType<IDataTableAttributes["loading"]>;
        default: boolean | import("../../types").ILoading | undefined;
    };
    showSelection: {
        type: PropType<IDataTableAttributes["showSelection"]>;
        default: boolean | undefined;
    };
    showFooter: {
        type: PropType<IDataTableAttributes["showFooter"]>;
        default: boolean | undefined;
    };
    footerValue: {
        type: PropType<IDataTableAttributes["footerValue"]>;
        default: IDataTableValue[] | undefined;
    };
    sort: {
        type: PropType<IDataTableAttributes["sort"]>;
        default: ISortColumn | ISortColumn[] | undefined;
    };
    selected: {
        type: PropType<IDataTableAttributes["selected"]>;
        default: any;
    };
    highlighted: {
        type: PropType<IDataTableAttributes["highlighted"]>;
        default: any;
    };
}>> & Readonly<{
    "onUpdate:selected"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
    "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    "onSelected-rows"?: ((...args: any[]) => any) | undefined;
    "onRow-click"?: ((...args: any[]) => any) | undefined;
    "onRow-dblclick"?: ((...args: any[]) => any) | undefined;
    "onChange-sort"?: ((...args: any[]) => any) | undefined;
    "onChange-filter"?: ((...args: any[]) => any) | undefined;
    "onChange-filters"?: ((...args: any[]) => any) | undefined;
    "onChange-columns"?: ((...args: any[]) => any) | undefined;
    "onChange-pagination"?: ((...args: any[]) => any) | undefined;
    "onChange-page-size"?: ((...args: any[]) => any) | undefined;
    "onChange-combined"?: ((...args: any[]) => any) | undefined;
    "onFooter-cell-click"?: ((...args: any[]) => any) | undefined;
    "onFooter-cell-dblclick"?: ((...args: any[]) => any) | undefined;
}>, {
    sort: ISortColumn | ISortColumn[] | undefined;
    value: IDataTableValue[];
    width: string | number | undefined;
    height: string | number | undefined;
    loading: boolean | import("../../types").ILoading | undefined;
    selected: any;
    pagination: import("./types").IDataTablePagination | undefined;
    columns: IColumnAttributes[];
    showFilters: boolean | undefined;
    highlighted: any;
    multiSelect: boolean | undefined;
    multiSort: boolean | undefined;
    optionsBody: import("./index.ts").IBodyOptions | undefined;
    draggableColumn: boolean | undefined;
    resizableColumn: boolean | undefined;
    showSelection: boolean | undefined;
    showFooter: boolean | undefined;
    footerValue: IDataTableValue[] | undefined;
}, {}, {
    BBody: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        columns: {
            type: PropType<import("./index.ts").IBodyAttributes["columns"]>;
            default: IColumnAttributes[];
        };
        rows: {
            type: PropType<import("./index.ts").IBodyAttributes["rows"]>;
            default: IBodyRow[];
        };
        selected: {
            type: PropType<import("./index.ts").IBodyAttributes["selected"]>;
            default: IDataTableValue[] | IBodyRow[] | import("./body/types").IBodySelectedByKeyValue | undefined;
        };
        highlighted: {
            type: PropType<import("./index.ts").IBodyAttributes["highlighted"]>;
            default: IDataTableValue[] | import("./body/types").IBodySelectedByKeyValue | undefined;
        };
        options: {
            type: PropType<import("./index.ts").IBodyAttributes["options"]>;
            default: import("./index.ts").IBodyOptions | undefined;
        };
        showSelection: {
            type: PropType<import("./index.ts").IBodyAttributes["showSelection"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        selectedRows: IBodyRow[];
        stateRows: IBodyRow[];
    }, {
        multiSelect(): boolean;
        cells(): ISettingsItem[][];
    }, {
        normalizeSelected(selected: import("./body/types").IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[] | undefined): IDataTableValue[];
        selectRowsBySelected(selected: import("./body/types").IBodySelectedByKeyValue | IDataTableValue[] | IBodyRow[]): void;
        selectRowsByHighlight(highlighted: import("./body/types").IBodySelectedByKeyValue | IDataTableValue[]): void;
        getRowByUuid(uuid: string): {
            uuid: string;
            selected?: boolean | undefined;
            highlighted?: boolean | undefined;
            data: IDataTableValue[];
        } | undefined;
        removeSelectedRow(uuid: string): void;
        toggleSelected(row: IBodyRow): void;
        updateSelected(uuid: string, selected: boolean): void;
        selectAll(value: boolean): void;
        omitData(row: Record<string, any>): {
            [x: string]: any;
        };
        onRowClick(event: MouseEvent, row: IBodyRow, index: number): void;
        onRowDblClick(event: MouseEvent, row: IBodyRow, index: number): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
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
            type: PropType<import("./index.ts").IBodyAttributes["columns"]>;
            default: IColumnAttributes[];
        };
        rows: {
            type: PropType<import("./index.ts").IBodyAttributes["rows"]>;
            default: IBodyRow[];
        };
        selected: {
            type: PropType<import("./index.ts").IBodyAttributes["selected"]>;
            default: IDataTableValue[] | IBodyRow[] | import("./body/types").IBodySelectedByKeyValue | undefined;
        };
        highlighted: {
            type: PropType<import("./index.ts").IBodyAttributes["highlighted"]>;
            default: IDataTableValue[] | import("./body/types").IBodySelectedByKeyValue | undefined;
        };
        options: {
            type: PropType<import("./index.ts").IBodyAttributes["options"]>;
            default: import("./index.ts").IBodyOptions | undefined;
        };
        showSelection: {
            type: PropType<import("./index.ts").IBodyAttributes["showSelection"]>;
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
        selected: IDataTableValue[] | IBodyRow[] | import("./body/types").IBodySelectedByKeyValue | undefined;
        columns: IColumnAttributes[];
        highlighted: IDataTableValue[] | import("./body/types").IBodySelectedByKeyValue | undefined;
        showSelection: boolean | undefined;
        rows: IBodyRow[];
        options: import("./index.ts").IBodyOptions | undefined;
    }, {}, {
        BBodyRow: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            cells: {
                type: PropType<import("./index.ts").IBodyRowAttributes["cells"]>;
                default: import("./body-cell/types").IBodyCellAttributes[] | undefined;
            };
            uuid: {
                type: PropType<import("./index.ts").IBodyRowAttributes["uuid"]>;
                required: true;
            };
            selected: {
                type: PropType<import("./index.ts").IBodyRowAttributes["selected"]>;
                default: boolean;
            };
            evenRow: {
                type: PropType<import("./index.ts").IBodyRowAttributes["evenRow"]>;
                default: boolean | undefined;
            };
            showSelection: {
                type: PropType<import("./index.ts").IBodyRowAttributes["showSelection"]>;
                default: boolean | undefined;
            };
            highlighted: {
                type: PropType<import("./index.ts").IBodyRowAttributes["highlighted"]>;
                default: boolean | undefined;
            };
        }>, {}, {}, {
            classes(): import("../../types").TClasses;
            stateSelected(): boolean | undefined;
        }, {
            onClick(event: MouseEvent): void;
            onDblClick(event: MouseEvent): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("./index.ts").IBodyRowAttributes["cells"]>;
                default: import("./body-cell/types").IBodyCellAttributes[] | undefined;
            };
            uuid: {
                type: PropType<import("./index.ts").IBodyRowAttributes["uuid"]>;
                required: true;
            };
            selected: {
                type: PropType<import("./index.ts").IBodyRowAttributes["selected"]>;
                default: boolean;
            };
            evenRow: {
                type: PropType<import("./index.ts").IBodyRowAttributes["evenRow"]>;
                default: boolean | undefined;
            };
            showSelection: {
                type: PropType<import("./index.ts").IBodyRowAttributes["showSelection"]>;
                default: boolean | undefined;
            };
            highlighted: {
                type: PropType<import("./index.ts").IBodyRowAttributes["highlighted"]>;
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
            cells: import("./body-cell/types").IBodyCellAttributes[] | undefined;
        }, {}, {
            BBodyCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                field: {
                    type: PropType<import("./body-cell/types").IBodyCellAttributes["field"]>;
                    default: string;
                };
                value: {
                    type: PropType<import("./body-cell/types").IBodyCellAttributes["value"]>;
                    default: any;
                };
                selection: {
                    type: PropType<import("./body-cell/types").IBodyCellAttributes["selection"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../types").TClasses;
                isEmpty(): boolean;
                valueComponent(): any;
                hasLoading(): boolean;
                hasSkeleton(): boolean;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "dblclick")[], "click" | "dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                field: {
                    type: PropType<import("./body-cell/types").IBodyCellAttributes["field"]>;
                    default: string;
                };
                value: {
                    type: PropType<import("./body-cell/types").IBodyCellAttributes["value"]>;
                    default: any;
                };
                selection: {
                    type: PropType<import("./body-cell/types").IBodyCellAttributes["selection"]>;
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
                    classes(): import("../../types").TClasses;
                    styles(): {
                        width: string;
                        height: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
            BCheckBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                indeterminate: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["indeterminate"]>;
                    default: boolean | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                marked: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["marked"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
                stateValue: boolean;
                stateType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
                stateIndeterminate: boolean | undefined;
                refInput: HTMLInputElement | null;
            }, {
                classes(): import("../../types").TClasses;
                checked(): number;
                getName(): string;
            }, {
                onChange(event: Event): void;
                onFocus(event: FocusEvent): void;
                onBlur(event: FocusEvent): void;
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                readonly: {
                    type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                    default: boolean | undefined;
                };
                invalid: {
                    type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                    default: boolean | undefined;
                };
                state: {
                    type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                    default: import("../../types").TState | undefined;
                };
            }>, {}, {
                stateText: string | number | undefined;
                stateState: import("../../types").TState;
                stateInvalid: boolean;
                stateValue: any;
                stateDisabled: boolean;
                stateName: string;
            }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                readonly: {
                    type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                    default: boolean | undefined;
                };
                invalid: {
                    type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                    default: boolean | undefined;
                };
                state: {
                    type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                    default: import("../../types").TState | undefined;
                };
            }>> & Readonly<{}>, {
                readonly: boolean | undefined;
                required: boolean | undefined;
                invalid: boolean | undefined;
                state: import("../../types").TState | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                indeterminate: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["indeterminate"]>;
                    default: boolean | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                marked: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["marked"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                onFocus?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
                onChange?: ((...args: any[]) => any) | undefined;
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                "onUpdate:indeterminate"?: ((...args: any[]) => any) | undefined;
            }>, {
                sizeControl: import("../../types").TSizeControl | undefined;
                indeterminate: boolean | undefined;
                marked: boolean | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
    }, {}, string, () => {
        updateSelected: (uuid: string, selected: boolean) => void;
    }, true, {}, any>;
    BFooter: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        columns: {
            type: PropType<import("./footer/types").IFooterAttributes["columns"]>;
            default: IColumnAttributes[];
        };
        rows: {
            type: PropType<import("./footer/types").IFooterAttributes["rows"]>;
            default: Record<string, any>[];
        };
        showSelection: {
            type: PropType<import("./footer/types").IFooterAttributes["showSelection"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
        onMounted?: ((...args: any[]) => any) | undefined;
        onToggleVisible?: ((...args: any[]) => any) | undefined;
        onCreated?: ((...args: any[]) => any) | undefined;
    }>, {
        id: string | undefined;
        component: any;
        visible: boolean | undefined;
        hidden: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("cell-click" | "cell-dblclick")[], "cell-click" | "cell-dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: PropType<import("./footer/types").IFooterAttributes["columns"]>;
            default: IColumnAttributes[];
        };
        rows: {
            type: PropType<import("./footer/types").IFooterAttributes["rows"]>;
            default: Record<string, any>[];
        };
        showSelection: {
            type: PropType<import("./footer/types").IFooterAttributes["showSelection"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onCell-click"?: ((...args: any[]) => any) | undefined;
        "onCell-dblclick"?: ((...args: any[]) => any) | undefined;
    }>, {
        columns: IColumnAttributes[];
        showSelection: boolean | undefined;
        rows: Record<string, any>[];
    }, {}, {
        BFooterCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("./footer-cell/types").IFooterCellAttributes["field"]>;
                default: string;
            };
            value: {
                type: PropType<import("./footer-cell/types").IFooterCellAttributes["value"]>;
                default: any;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types").TClasses;
            valueComponent(): any;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("./footer-cell/types").IFooterCellAttributes["field"]>;
                default: string;
            };
            value: {
                type: PropType<import("./footer-cell/types").IFooterCellAttributes["value"]>;
                default: any;
            };
        }>> & Readonly<{}>, {
            value: any;
            field: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BRow: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        cells: {
            type: PropType<import("./index.ts").IBodyRowAttributes["cells"]>;
            default: import("./body-cell/types").IBodyCellAttributes[] | undefined;
        };
        uuid: {
            type: PropType<import("./index.ts").IBodyRowAttributes["uuid"]>;
            required: true;
        };
        selected: {
            type: PropType<import("./index.ts").IBodyRowAttributes["selected"]>;
            default: boolean;
        };
        evenRow: {
            type: PropType<import("./index.ts").IBodyRowAttributes["evenRow"]>;
            default: boolean | undefined;
        };
        showSelection: {
            type: PropType<import("./index.ts").IBodyRowAttributes["showSelection"]>;
            default: boolean | undefined;
        };
        highlighted: {
            type: PropType<import("./index.ts").IBodyRowAttributes["highlighted"]>;
            default: boolean | undefined;
        };
    }>, {}, {}, {
        classes(): import("../../types").TClasses;
        stateSelected(): boolean | undefined;
    }, {
        onClick(event: MouseEvent): void;
        onDblClick(event: MouseEvent): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
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
            type: PropType<import("./index.ts").IBodyRowAttributes["cells"]>;
            default: import("./body-cell/types").IBodyCellAttributes[] | undefined;
        };
        uuid: {
            type: PropType<import("./index.ts").IBodyRowAttributes["uuid"]>;
            required: true;
        };
        selected: {
            type: PropType<import("./index.ts").IBodyRowAttributes["selected"]>;
            default: boolean;
        };
        evenRow: {
            type: PropType<import("./index.ts").IBodyRowAttributes["evenRow"]>;
            default: boolean | undefined;
        };
        showSelection: {
            type: PropType<import("./index.ts").IBodyRowAttributes["showSelection"]>;
            default: boolean | undefined;
        };
        highlighted: {
            type: PropType<import("./index.ts").IBodyRowAttributes["highlighted"]>;
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
        cells: import("./body-cell/types").IBodyCellAttributes[] | undefined;
    }, {}, {
        BBodyCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("./body-cell/types").IBodyCellAttributes["field"]>;
                default: string;
            };
            value: {
                type: PropType<import("./body-cell/types").IBodyCellAttributes["value"]>;
                default: any;
            };
            selection: {
                type: PropType<import("./body-cell/types").IBodyCellAttributes["selection"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types").TClasses;
            isEmpty(): boolean;
            valueComponent(): any;
            hasLoading(): boolean;
            hasSkeleton(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "dblclick")[], "click" | "dblclick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("./body-cell/types").IBodyCellAttributes["field"]>;
                default: string;
            };
            value: {
                type: PropType<import("./body-cell/types").IBodyCellAttributes["value"]>;
                default: any;
            };
            selection: {
                type: PropType<import("./body-cell/types").IBodyCellAttributes["selection"]>;
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
                classes(): import("../../types").TClasses;
                styles(): {
                    width: string;
                    height: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
        BCheckBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            indeterminate: {
                type: PropType<import("../index.ts").ICheckBoxAttributes["indeterminate"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").ICheckBoxAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            marked: {
                type: PropType<import("../index.ts").ICheckBoxAttributes["marked"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateValue: boolean;
            stateType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            stateIndeterminate: boolean | undefined;
            refInput: HTMLInputElement | null;
        }, {
            classes(): import("../../types").TClasses;
            checked(): number;
            getName(): string;
        }, {
            onChange(event: Event): void;
            onFocus(event: FocusEvent): void;
            onBlur(event: FocusEvent): void;
            onClick(event: MouseEvent): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            readonly: {
                type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                default: boolean | undefined;
            };
            invalid: {
                type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                default: boolean | undefined;
            };
            state: {
                type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                default: import("../../types").TState | undefined;
            };
        }>, {}, {
            stateText: string | number | undefined;
            stateState: import("../../types").TState;
            stateInvalid: boolean;
            stateValue: any;
            stateDisabled: boolean;
            stateName: string;
        }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            readonly: {
                type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                default: boolean | undefined;
            };
            invalid: {
                type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                default: boolean | undefined;
            };
            state: {
                type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                default: import("../../types").TState | undefined;
            };
        }>> & Readonly<{}>, {
            readonly: boolean | undefined;
            required: boolean | undefined;
            invalid: boolean | undefined;
            state: import("../../types").TState | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            indeterminate: {
                type: PropType<import("../index.ts").ICheckBoxAttributes["indeterminate"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").ICheckBoxAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            marked: {
                type: PropType<import("../index.ts").ICheckBoxAttributes["marked"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            onFocus?: ((...args: any[]) => any) | undefined;
            onBlur?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
            "onUpdate:indeterminate"?: ((...args: any[]) => any) | undefined;
        }>, {
            sizeControl: import("../../types").TSizeControl | undefined;
            indeterminate: boolean | undefined;
            marked: boolean | undefined;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
    BHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        columns: {
            type: PropType<import("./header/types").IHeaderAttributes["columns"]>;
            default: IColumnAttributes[];
        };
        draggable: {
            type: PropType<import("./header/types").IHeaderAttributes["draggable"]>;
            default: boolean | undefined;
        };
        resizable: {
            type: PropType<import("./header/types").IHeaderAttributes["resizable"]>;
            default: boolean | undefined;
        };
        showFilters: {
            type: PropType<import("./header/types").IHeaderAttributes["showFilters"]>;
            default: boolean | undefined;
        };
        showSelectAll: {
            type: PropType<import("./header/types").IHeaderAttributes["showSelectAll"]>;
            default: boolean | undefined;
        };
        highlighted: {
            type: PropType<import("./header/types").IHeaderAttributes["highlighted"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        sortColumns: IColumnAttributes[];
    }, {
        multiSort(): boolean;
        hasFilters(): boolean;
    }, {
        initColumns(): void;
        getColumnByField(field: string): IColumnAttributes | undefined;
        updateSort(field: string, direction: import("./index.ts").TSortDirection): void;
        onDropColumn({ draggedField, targetField }: {
            draggedField: string;
            targetField: string;
        }): void;
        onResizeColumn({ field, width }: {
            field: string;
            width: number;
        }): void;
        onStartResizeColumn({ field }: {
            field: string;
        }): void;
        onEndResizeColumn({ field }: {
            field: string;
        }): void;
        onChangeSort({ field, direction }: {
            field: string;
            direction: import("./index.ts").TSortDirection;
        }): void;
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("change-sort" | "change-filter" | "change-filters" | "update:sort" | "move-column" | "resize-column" | "start-resize-column" | "end-resize-column" | "select-all")[], "change-sort" | "change-filter" | "change-filters" | "update:sort" | "move-column" | "resize-column" | "start-resize-column" | "end-resize-column" | "select-all", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: PropType<import("./header/types").IHeaderAttributes["columns"]>;
            default: IColumnAttributes[];
        };
        draggable: {
            type: PropType<import("./header/types").IHeaderAttributes["draggable"]>;
            default: boolean | undefined;
        };
        resizable: {
            type: PropType<import("./header/types").IHeaderAttributes["resizable"]>;
            default: boolean | undefined;
        };
        showFilters: {
            type: PropType<import("./header/types").IHeaderAttributes["showFilters"]>;
            default: boolean | undefined;
        };
        showSelectAll: {
            type: PropType<import("./header/types").IHeaderAttributes["showSelectAll"]>;
            default: boolean | undefined;
        };
        highlighted: {
            type: PropType<import("./header/types").IHeaderAttributes["highlighted"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onChange-sort"?: ((...args: any[]) => any) | undefined;
        "onChange-filter"?: ((...args: any[]) => any) | undefined;
        "onChange-filters"?: ((...args: any[]) => any) | undefined;
        "onUpdate:sort"?: ((...args: any[]) => any) | undefined;
        "onMove-column"?: ((...args: any[]) => any) | undefined;
        "onResize-column"?: ((...args: any[]) => any) | undefined;
        "onStart-resize-column"?: ((...args: any[]) => any) | undefined;
        "onEnd-resize-column"?: ((...args: any[]) => any) | undefined;
        "onSelect-all"?: ((...args: any[]) => any) | undefined;
    }>, {
        draggable: boolean | undefined;
        columns: IColumnAttributes[];
        resizable: boolean | undefined;
        showFilters: boolean | undefined;
        showSelectAll: boolean | undefined;
        highlighted: boolean | undefined;
    }, {}, {
        BHeaderCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["field"]>;
                default: string;
            };
            sort: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["sort"]>;
                default: boolean | IUseSort | undefined;
            };
            width: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["width"]>;
                default: number | undefined;
            };
            minWidth: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["minWidth"]>;
                default: number | undefined;
            };
            maxWidth: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["maxWidth"]>;
                default: number | undefined;
            };
            draggable: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["draggable"]>;
                default: boolean | undefined;
            };
            resizable: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["resizable"]>;
                default: boolean | undefined;
            };
            separator: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["separator"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateSort: IUseSort;
            isDragging: boolean;
            dragOverLeft: boolean;
            dragOverRight: boolean;
            isSizing: boolean;
            startX: number;
            stateWidth: number;
            initWidth: number;
        }, {
            classes(): (string | {
                [x: string]: boolean | undefined;
            })[];
            style(): {
                width?: string;
                maxWidth?: string;
                minWidth?: string;
            };
            content(): HTMLElement;
        }, {
            onSort(): void;
            onDragStart(event: DragEvent): void;
            onDragEnd(): void;
            onDragOver(event: DragEvent): void;
            onDrop(event: DragEvent): void;
            onDragEnter(event: DragEvent): void;
            onDragLeave(event: DragEvent): void;
            onMouseDownSeparator(event: MouseEvent): void;
            onMouseMove(event: MouseEvent): void;
            onMouseUpSeparator(): void;
            validateWidth(width: number): number;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("drop" | "resize" | "start-resize" | "end-resize" | "change-sort")[], "drop" | "resize" | "start-resize" | "end-resize" | "change-sort", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            field: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["field"]>;
                default: string;
            };
            sort: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["sort"]>;
                default: boolean | IUseSort | undefined;
            };
            width: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["width"]>;
                default: number | undefined;
            };
            minWidth: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["minWidth"]>;
                default: number | undefined;
            };
            maxWidth: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["maxWidth"]>;
                default: number | undefined;
            };
            draggable: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["draggable"]>;
                default: boolean | undefined;
            };
            resizable: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["resizable"]>;
                default: boolean | undefined;
            };
            separator: {
                type: PropType<import("./header-cell/types").IHeaderCellAttributes["separator"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            onDrop?: ((...args: any[]) => any) | undefined;
            onResize?: ((...args: any[]) => any) | undefined;
            "onStart-resize"?: ((...args: any[]) => any) | undefined;
            "onEnd-resize"?: ((...args: any[]) => any) | undefined;
            "onChange-sort"?: ((...args: any[]) => any) | undefined;
        }>, {
            sort: boolean | IUseSort | undefined;
            width: number | undefined;
            separator: boolean | undefined;
            draggable: boolean | undefined;
            resizable: boolean | undefined;
            field: string;
            minWidth: number | undefined;
            maxWidth: number | undefined;
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
                    default: import("../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                classes(): import("../../types").TClasses;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                    default: import("../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                    classes(): import("../../types").TClasses;
                    styles(): {
                        borderWidth: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                    classes(): import("../../types").TClasses;
                    styles(): {
                        width: string;
                        height: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
            BHeaderCellContent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                field: {
                    type: PropType<import("./header-cell/types").IHeaderCellAttributes["field"]>;
                    default: string;
                };
                sort: {
                    type: PropType<import("./header-cell/types").IHeaderCellAttributes["sort"]>;
                    default: boolean | IUseSort | undefined;
                };
            }>, {}, {
                iconSize: string;
            }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                field: {
                    type: PropType<import("./header-cell/types").IHeaderCellAttributes["field"]>;
                    default: string;
                };
                sort: {
                    type: PropType<import("./header-cell/types").IHeaderCellAttributes["sort"]>;
                    default: boolean | IUseSort | undefined;
                };
            }>> & Readonly<{}>, {
                sort: boolean | IUseSort | undefined;
                field: string;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
        BFilterCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            column: {
                type: PropType<import("./filter-cell/types").IFilterCellAttributes["column"]>;
                default: IColumnAttributes;
            };
            minWidth: {
                type: PropType<import("./filter-cell/types").IFilterCellAttributes["minWidth"]>;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("./filter-cell/types").IFilterCellAttributes["column"]>;
                default: IColumnAttributes;
            };
            minWidth: {
                type: PropType<import("./filter-cell/types").IFilterCellAttributes["minWidth"]>;
                default: number | undefined;
            };
        }>> & Readonly<{
            "onChange-filter"?: ((...args: any[]) => any) | undefined;
        }>, {
            column: IColumnAttributes;
            minWidth: number | undefined;
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
                    default: import("../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                classes(): import("../../types").TClasses;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                    default: import("../../types").TComponentVariantType | undefined;
                };
                form: {
                    type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                    default: import("../button/types").TFormType | undefined;
                };
                loading: {
                    type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                    default: boolean | import("../../types").ILoading | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                    classes(): import("../../types").TClasses;
                    styles(): {
                        borderWidth: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                    classes(): import("../../types").TClasses;
                    styles(): {
                        width: string;
                        height: string;
                    };
                }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    id: {
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
            BButtonClear: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                invisible: {
                    type: PropType<import("../index.ts").IButtonClearAttributes["invisible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {
                classes(): import("../../types").TClasses;
            }, {
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                effectiveSizeControl(): ESizeControl;
                effectiveDisabled(): boolean;
            }, {
                onClick(event: MouseEvent): void;
            }, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                sizeControl: import("../../types").TSizeControl | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    classes(): import("../../types").TClasses;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            borderWidth: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            width: string;
                            height: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value")[], "clear" | "update:text" | "update:value", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                invisible: {
                    type: PropType<import("../index.ts").IButtonClearAttributes["invisible"]>;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    classes(): import("../../types").TClasses;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            borderWidth: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            width: string;
                            height: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                cmpComponent: import("vue").ComponentPublicInstance | null;
                registeredElements: Set<HTMLElement>;
            }, {
                classes(): import("../../types").TClasses;
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
                onMountedComponent(cmpComponent: import("vue").ComponentPublicInstance, register?: boolean): void;
                afterShow(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                stateOperation: import("./filter-operation/types").IFilterOperationItem | undefined;
                stateOperations: string[];
                registeredElements: HTMLElement[];
            }, {
                operationText(): any;
                operationsProps(): Record<string, boolean>;
            }, {
                change(): void;
                onChangeOperation(item: import("./filter-operation/types").IFilterOperationItem): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
        BFilterRow: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            columns: {
                type: PropType<import("./filter-row/types").IFilterRowAttributes["columns"]>;
                default: IColumnAttributes[] | undefined;
            };
            showSelection: {
                type: PropType<import("./filter-row/types").IFilterRowAttributes["showSelection"]>;
                default: boolean | undefined;
            };
            showHighlighted: {
                type: PropType<import("./filter-row/types").IFilterRowAttributes["showHighlighted"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            filters: IFilterComponentAttributes[];
        }, {}, {
            updateFilters(data: IFilterComponentAttributes): void;
            areFiltersEqual(oldFilters: IFilterComponentAttributes[], filters: IFilterComponentAttributes[]): boolean;
            onChangeFilter(data: IFilterComponentAttributes): void;
        }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("./filter-row/types").IFilterRowAttributes["columns"]>;
                default: IColumnAttributes[] | undefined;
            };
            showSelection: {
                type: PropType<import("./filter-row/types").IFilterRowAttributes["showSelection"]>;
                default: boolean | undefined;
            };
            showHighlighted: {
                type: PropType<import("./filter-row/types").IFilterRowAttributes["showHighlighted"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onChange-filter"?: ((...args: any[]) => any) | undefined;
            "onChange-filters"?: ((...args: any[]) => any) | undefined;
        }>, {
            columns: IColumnAttributes[] | undefined;
            showSelection: boolean | undefined;
            showHighlighted: boolean | undefined;
        }, {}, {
            BFilterCell: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                column: {
                    type: PropType<import("./filter-cell/types").IFilterCellAttributes["column"]>;
                    default: IColumnAttributes;
                };
                minWidth: {
                    type: PropType<import("./filter-cell/types").IFilterCellAttributes["minWidth"]>;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                    type: PropType<import("./filter-cell/types").IFilterCellAttributes["column"]>;
                    default: IColumnAttributes;
                };
                minWidth: {
                    type: PropType<import("./filter-cell/types").IFilterCellAttributes["minWidth"]>;
                    default: number | undefined;
                };
            }>> & Readonly<{
                "onChange-filter"?: ((...args: any[]) => any) | undefined;
            }>, {
                column: IColumnAttributes;
                minWidth: number | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    classes(): import("../../types").TClasses;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            borderWidth: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            width: string;
                            height: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                BButtonClear: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    invisible: {
                        type: PropType<import("../index.ts").IButtonClearAttributes["invisible"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {}, {
                    classes(): import("../../types").TClasses;
                }, {
                    onClick(event: MouseEvent): void;
                }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                }>, {}, {
                    cssClass: string;
                }, {
                    effectiveSizeControl(): ESizeControl;
                    effectiveDisabled(): boolean;
                }, {
                    onClick(event: MouseEvent): void;
                }, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                }>> & Readonly<{
                    onClick?: ((...args: any[]) => any) | undefined;
                }>, {
                    sizeControl: import("../../types").TSizeControl | undefined;
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
                            default: import("../../types").TComponentVariantType | undefined;
                        };
                        form: {
                            type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                            default: import("../button/types").TFormType | undefined;
                        };
                        loading: {
                            type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                            default: boolean | import("../../types").ILoading | undefined;
                        };
                        sizeControl: {
                            type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                            default: import("../../types").TSizeControl | undefined;
                        };
                        asLabel: {
                            type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                            default: boolean | undefined;
                        };
                        onPropClick: {
                            type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                        classes(): import("../../types").TClasses;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                            default: import("../../types").TComponentVariantType | undefined;
                        };
                        form: {
                            type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                            default: import("../button/types").TFormType | undefined;
                        };
                        loading: {
                            type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                            default: boolean | import("../../types").ILoading | undefined;
                        };
                        sizeControl: {
                            type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                            default: import("../../types").TSizeControl | undefined;
                        };
                        asLabel: {
                            type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                            default: boolean | undefined;
                        };
                        onPropClick: {
                            type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../component").IComponentAttributes["id"];
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>> & Readonly<{
                            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                            onHide?: ((...args: any[]) => any) | undefined;
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
                            classes(): import("../../types").TClasses;
                            styles(): {
                                borderWidth: string;
                            };
                        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            id: {
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../component").IComponentAttributes["id"];
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>> & Readonly<{
                            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                            onHide?: ((...args: any[]) => any) | undefined;
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
                            classes(): import("../../types").TClasses;
                            styles(): {
                                width: string;
                                height: string;
                            };
                        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            id: {
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../component").IComponentAttributes["id"];
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>> & Readonly<{
                            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                            onHide?: ((...args: any[]) => any) | undefined;
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
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value")[], "clear" | "update:text" | "update:value", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                    invisible: {
                        type: PropType<import("../index.ts").IButtonClearAttributes["invisible"]>;
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
                            default: import("../../types").TComponentVariantType | undefined;
                        };
                        form: {
                            type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                            default: import("../button/types").TFormType | undefined;
                        };
                        loading: {
                            type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                            default: boolean | import("../../types").ILoading | undefined;
                        };
                        sizeControl: {
                            type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                            default: import("../../types").TSizeControl | undefined;
                        };
                        asLabel: {
                            type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                            default: boolean | undefined;
                        };
                        onPropClick: {
                            type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                        classes(): import("../../types").TClasses;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                            default: import("../../types").TComponentVariantType | undefined;
                        };
                        form: {
                            type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                            default: import("../button/types").TFormType | undefined;
                        };
                        loading: {
                            type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                            default: boolean | import("../../types").ILoading | undefined;
                        };
                        sizeControl: {
                            type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                            default: import("../../types").TSizeControl | undefined;
                        };
                        asLabel: {
                            type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                            default: boolean | undefined;
                        };
                        onPropClick: {
                            type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../component").IComponentAttributes["id"];
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>> & Readonly<{
                            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                            onHide?: ((...args: any[]) => any) | undefined;
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
                            classes(): import("../../types").TClasses;
                            styles(): {
                                borderWidth: string;
                            };
                        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            id: {
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../component").IComponentAttributes["id"];
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>> & Readonly<{
                            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                            onHide?: ((...args: any[]) => any) | undefined;
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
                            classes(): import("../../types").TClasses;
                            styles(): {
                                width: string;
                                height: string;
                            };
                        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                            id: {
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>, {}, {
                            stateVisible: boolean;
                        }, {
                            getId(): import("../component").IComponentAttributes["id"];
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
                                type: PropType<import("../component").IComponentAttributes["id"]>;
                                default: undefined;
                            };
                            component: {
                                type: any;
                            };
                            visible: {
                                type: PropType<import("../component").IComponentAttributes["visible"]>;
                                default: boolean | undefined;
                            };
                            hidden: {
                                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                                default: boolean | undefined;
                            };
                        }>> & Readonly<{
                            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                            onHide?: ((...args: any[]) => any) | undefined;
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
                }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
                        default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                    cmpComponent: import("vue").ComponentPublicInstance | null;
                    registeredElements: Set<HTMLElement>;
                }, {
                    classes(): import("../../types").TClasses;
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
                    onMountedComponent(cmpComponent: import("vue").ComponentPublicInstance, register?: boolean): void;
                    afterShow(): void;
                }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                    stateOperation: import("./filter-operation/types").IFilterOperationItem | undefined;
                    stateOperations: string[];
                    registeredElements: HTMLElement[];
                }, {
                    operationText(): any;
                    operationsProps(): Record<string, boolean>;
                }, {
                    change(): void;
                    onChangeOperation(item: import("./filter-operation/types").IFilterOperationItem): void;
                }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
        BHeaderSelection: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "selectAll"[], "selectAll", import("vue").PublicProps, Readonly<{}> & Readonly<{
            onSelectAll?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {
            BCheckBox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                indeterminate: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["indeterminate"]>;
                    default: boolean | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                marked: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["marked"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                cssClass: string;
                stateValue: boolean;
                stateType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
                stateIndeterminate: boolean | undefined;
                refInput: HTMLInputElement | null;
            }, {
                classes(): import("../../types").TClasses;
                checked(): number;
                getName(): string;
            }, {
                onChange(event: Event): void;
                onFocus(event: FocusEvent): void;
                onBlur(event: FocusEvent): void;
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                readonly: {
                    type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                    default: boolean | undefined;
                };
                invalid: {
                    type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                    default: boolean | undefined;
                };
                state: {
                    type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                    default: import("../../types").TState | undefined;
                };
            }>, {}, {
                stateText: string | number | undefined;
                stateState: import("../../types").TState;
                stateInvalid: boolean;
                stateValue: any;
                stateDisabled: boolean;
                stateName: string;
            }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                readonly: {
                    type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                    default: boolean | undefined;
                };
                required: {
                    type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                    default: boolean | undefined;
                };
                invalid: {
                    type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                    default: boolean | undefined;
                };
                state: {
                    type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                    default: import("../../types").TState | undefined;
                };
            }>> & Readonly<{}>, {
                readonly: boolean | undefined;
                required: boolean | undefined;
                invalid: boolean | undefined;
                state: import("../../types").TState | undefined;
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("focus" | "update:value" | "change" | "blur" | "update:indeterminate")[], "focus" | "update:value" | "change" | "blur" | "update:indeterminate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                indeterminate: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["indeterminate"]>;
                    default: boolean | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                marked: {
                    type: PropType<import("../index.ts").ICheckBoxAttributes["marked"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                onFocus?: ((...args: any[]) => any) | undefined;
                onBlur?: ((...args: any[]) => any) | undefined;
                onChange?: ((...args: any[]) => any) | undefined;
                "onUpdate:value"?: ((...args: any[]) => any) | undefined;
                "onUpdate:indeterminate"?: ((...args: any[]) => any) | undefined;
            }>, {
                sizeControl: import("../../types").TSizeControl | undefined;
                indeterminate: boolean | undefined;
                marked: boolean | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BPagination: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        currentPage: {
            type: PropType<IPaginationAttributes["currentPage"]>;
            default: number | undefined;
        };
        totalRows: {
            type: PropType<IPaginationAttributes["totalRows"]>;
            default: number | undefined;
        };
        pageSize: {
            type: PropType<IPaginationAttributes["pageSize"]>;
            default: number | undefined;
        };
        visiblePages: {
            type: PropType<IPaginationAttributes["visiblePages"]>;
            default: number | undefined;
        };
    }>, {}, {
        stateCurrentPage: number;
        stateTotalRows: number;
    }, {
        effectivePageSize(): number;
        effectiveVisiblePages(): number;
        totalPages(): number;
        pages(): (number | string)[];
        isFirstPage(): boolean;
        isLastPage(): boolean;
        isEmpty(): boolean;
    }, {
        pagination(page: number, visiblePages: number, pages: number): (number | string)[];
        generateLeftPagination(page: number, slotLeft: number): (number | string)[];
        generateRightPagination(page: number, slotRight: number, pages: number): (number | string)[];
        getSummary(): IPaginationSummary;
        change(): void;
        onChangePage(page: number | string): void;
        prevPage(): void;
        nextPage(): void;
        isCurrentPage(page: number | string): boolean;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
        onShow?: ((...args: any[]) => any) | undefined;
        onMounted?: ((...args: any[]) => any) | undefined;
        onToggleVisible?: ((...args: any[]) => any) | undefined;
        onCreated?: ((...args: any[]) => any) | undefined;
    }>, {
        id: string | undefined;
        component: any;
        visible: boolean | undefined;
        hidden: boolean | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("summary" | "change" | "update:currentPage")[], "summary" | "change" | "update:currentPage", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        currentPage: {
            type: PropType<IPaginationAttributes["currentPage"]>;
            default: number | undefined;
        };
        totalRows: {
            type: PropType<IPaginationAttributes["totalRows"]>;
            default: number | undefined;
        };
        pageSize: {
            type: PropType<IPaginationAttributes["pageSize"]>;
            default: number | undefined;
        };
        visiblePages: {
            type: PropType<IPaginationAttributes["visiblePages"]>;
            default: number | undefined;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onSummary?: ((...args: any[]) => any) | undefined;
        "onUpdate:currentPage"?: ((...args: any[]) => any) | undefined;
    }>, {
        currentPage: number | undefined;
        totalRows: number | undefined;
        visiblePages: number | undefined;
        pageSize: number | undefined;
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
                default: import("../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
            classes(): import("../../types").TClasses;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                default: import("../../types").TComponentVariantType | undefined;
            };
            form: {
                type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                default: import("../button/types").TFormType | undefined;
            };
            loading: {
                type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                default: boolean | import("../../types").ILoading | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            asLabel: {
                type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                default: boolean | undefined;
            };
            onPropClick: {
                type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                classes(): import("../../types").TClasses;
                styles(): {
                    borderWidth: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                classes(): import("../../types").TClasses;
                styles(): {
                    width: string;
                    height: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
    BEmpty: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        text: {
            type: PropType<import("../empty").IEmptyAttributes["text"]>;
            default: string | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): import("../../types").TClasses;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
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
            type: PropType<import("../empty").IEmptyAttributes["text"]>;
            default: string | undefined;
        };
    }>> & Readonly<{}>, {
        text: string | undefined;
    }, {}, {
        NoDataIcon: import("vue").Raw<import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BBodyLoading: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        loading: {
            type: PropType<import("./loading/types").IBodyLoadingAttributes["loading"]>;
            default: any;
        };
        offsetTopOverlay: {
            type: PropType<import("./loading/types").IBodyLoadingAttributes["offsetTopOverlay"]>;
            default: number | undefined;
        };
    }>, {}, {
        cssClass: string;
    }, {
        classes(): import("../../types").TClasses;
        styles(): Record<string, string>;
        hasLoading(): boolean;
        hasSpinner(): boolean;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
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
        loading: {
            type: PropType<import("./loading/types").IBodyLoadingAttributes["loading"]>;
            default: any;
        };
        offsetTopOverlay: {
            type: PropType<import("./loading/types").IBodyLoadingAttributes["offsetTopOverlay"]>;
            default: number | undefined;
        };
    }>> & Readonly<{}>, {
        loading: any;
        offsetTopOverlay: number | undefined;
    }, {}, {
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
            classes(): import("../../types").TClasses;
            styles(): {
                borderWidth: string;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        BOverlay: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            teleportTo: {
                type: PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
        }, {
            classes(): import("../../types").TClasses;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            id: {
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("../index.ts").IOverlayAttributes["teleportTo"]>;
                default: string | Boolean | HTMLElement | undefined;
            };
            transparent: {
                type: PropType<import("../index.ts").IOverlayAttributes["transparent"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IOverlayAttributes["visible"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{}>, {
            visible: boolean | undefined;
            teleportTo: string | Boolean | HTMLElement | undefined;
            transparent: boolean | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    BSelect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../select").ISelectAttributes["items"]>;
            default: import("../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../select").ISelectAttributes["selected"]>;
            default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../select").ISelectAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../select").ISelectAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../select").ISelectAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../select").ISelectAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filter: {
            type: PropType<import("../select").ISelectAttributes["filter"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../select").ISelectAttributes["placement"]>;
            default: import("../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../select").ISelectAttributes["triggerActivate"]>;
            default: import("../../types").TTriggerActivate | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../select").ISelectAttributes["onPropItemSelected"]>;
            default: import("../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../select").ISelectAttributes["onPropItemsSelected"]>;
            default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
        };
        placeholder: {
            type: PropType<import("../select").ISelectAttributes["placeholder"]>;
            default: string | undefined;
        };
        type: {
            type: PropType<import("../select").ISelectAttributes["type"]>;
            default: any;
        };
        maxlength: {
            type: PropType<import("../select").ISelectAttributes["maxlength"]>;
            default: number | undefined;
        };
        minlength: {
            type: PropType<import("../select").ISelectAttributes["minlength"]>;
            default: number | undefined;
        };
        visibility: {
            type: PropType<import("../select").ISelectAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<import("../select").ISelectAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: PropType<import("../select").ISelectAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: PropType<import("../select").ISelectAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: PropType<import("../select").ISelectAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../select").ISelectAttributes["sizeControl"]>;
            default: import("../../types").TSizeControl | undefined;
        };
        loading: {
            type: PropType<import("../select").ISelectAttributes["loading"]>;
            default: boolean | import("../../types").ILoading | undefined;
        };
        simple: {
            type: PropType<import("../select").ISelectAttributes["simple"]>;
            default: boolean | undefined;
        };
        editable: {
            type: PropType<import("../select").ISelectAttributes["editable"]>;
            default: boolean | undefined;
        };
        emptyText: {
            type: PropType<import("../select").ISelectAttributes["emptyText"]>;
            default: string | boolean | undefined;
        };
        showIcon: {
            type: PropType<import("../select").ISelectAttributes["showIcon"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        cssClass: string;
        showDialog: boolean;
        elementOwner: HTMLElement | undefined;
        cmpInput: InstanceType<typeof import("../index.ts").BInput> | null;
        cmpDialog: InstanceType<typeof import("../index.ts").BListBox> | null;
        filterText: string;
        isChangeText: boolean;
    }, {
        classes(): import("../../types").TClasses;
        effectiveItems(): import("../index.ts").ICollectionItemAttributes[];
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
        onSelectedItem(data: import("../index.ts").ICollectionItemAttributes): void;
        onSelectedItems({ selected, text, value }: {
            selected: import("../index.ts").ICollectionItemAttributes;
            text: string;
            value: import("../../types").TValue | import("../../types").TValue[];
        }): void;
        onInputClear(): void;
        onInputClickClear(): void;
        onMountedInput(input: InstanceType<typeof import("../index.ts").BInput>): void;
        onMountedDropDown(instance: InstanceType<typeof import("../index.ts").BDropDown>): void;
        reset(): void;
        onRemoveTag({ event, item }: {
            event: MouseEvent;
            item: import("../index.ts").ICollectionItemAttributes;
        }): void;
    }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        readonly: {
            type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
            default: boolean | undefined;
        };
        invalid: {
            type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
            default: boolean | undefined;
        };
        state: {
            type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
            default: import("../../types").TState | undefined;
        };
    }>, {}, {
        stateText: string | number | undefined;
        stateState: import("../../types").TState;
        stateInvalid: boolean;
        stateValue: any;
        stateDisabled: boolean;
        stateName: string;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>, {}, {
        stateVisible: boolean;
    }, {
        getId(): import("../component").IComponentAttributes["id"];
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
            type: PropType<import("../component").IComponentAttributes["id"]>;
            default: undefined;
        };
        component: {
            type: any;
        };
        visible: {
            type: PropType<import("../component").IComponentAttributes["visible"]>;
            default: boolean | undefined;
        };
        hidden: {
            type: PropType<import("../component").IComponentAttributes["hidden"]>;
            default: boolean | undefined;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        readonly: {
            type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
            default: boolean | undefined;
        };
        required: {
            type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
            default: boolean | undefined;
        };
        invalid: {
            type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
            default: boolean | undefined;
        };
        state: {
            type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
            default: import("../../types").TState | undefined;
        };
    }>> & Readonly<{}>, {
        readonly: boolean | undefined;
        required: boolean | undefined;
        invalid: boolean | undefined;
        state: import("../../types").TState | undefined;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected")[], "update:text" | "click" | "update:value" | "change" | "selected-item" | "selected-items" | "update:selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        items: {
            type: PropType<import("../select").ISelectAttributes["items"]>;
            default: import("../index.ts").IListBoxItemAttributes[];
        };
        selected: {
            type: PropType<import("../select").ISelectAttributes["selected"]>;
            default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
        };
        multiple: {
            type: PropType<import("../select").ISelectAttributes["multiple"]>;
            default: boolean | undefined;
        };
        maxRows: {
            type: PropType<import("../select").ISelectAttributes["maxRows"]>;
            default: number | undefined;
        };
        autoWidth: {
            type: PropType<import("../select").ISelectAttributes["autoWidth"]>;
            default: boolean | undefined;
        };
        wordWrap: {
            type: PropType<import("../select").ISelectAttributes["wordWrap"]>;
            default: boolean | undefined;
        };
        filter: {
            type: PropType<import("../select").ISelectAttributes["filter"]>;
            default: boolean | undefined;
        };
        placement: {
            type: PropType<import("../select").ISelectAttributes["placement"]>;
            default: import("../../types").TPlacemant | undefined;
        };
        triggerActivate: {
            type: PropType<import("../select").ISelectAttributes["triggerActivate"]>;
            default: import("../../types").TTriggerActivate | undefined;
        };
        onPropItemSelected: {
            type: PropType<import("../select").ISelectAttributes["onPropItemSelected"]>;
            default: import("../index.ts").IEventSelected | undefined;
        };
        onPropItemsSelected: {
            type: PropType<import("../select").ISelectAttributes["onPropItemsSelected"]>;
            default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
        };
        placeholder: {
            type: PropType<import("../select").ISelectAttributes["placeholder"]>;
            default: string | undefined;
        };
        type: {
            type: PropType<import("../select").ISelectAttributes["type"]>;
            default: any;
        };
        maxlength: {
            type: PropType<import("../select").ISelectAttributes["maxlength"]>;
            default: number | undefined;
        };
        minlength: {
            type: PropType<import("../select").ISelectAttributes["minlength"]>;
            default: number | undefined;
        };
        visibility: {
            type: PropType<import("../select").ISelectAttributes["visibility"]>;
            default: boolean | undefined;
        };
        readonly: {
            type: PropType<import("../select").ISelectAttributes["readonly"]>;
            default: boolean | undefined;
        };
        clearButton: {
            type: PropType<import("../select").ISelectAttributes["clearButton"]>;
            default: boolean | undefined;
        };
        clearWithText: {
            type: PropType<import("../select").ISelectAttributes["clearWithText"]>;
            default: boolean | undefined;
        };
        showStateIcon: {
            type: PropType<import("../select").ISelectAttributes["showStateIcon"]>;
            default: boolean | undefined;
        };
        sizeControl: {
            type: PropType<import("../select").ISelectAttributes["sizeControl"]>;
            default: import("../../types").TSizeControl | undefined;
        };
        loading: {
            type: PropType<import("../select").ISelectAttributes["loading"]>;
            default: boolean | import("../../types").ILoading | undefined;
        };
        simple: {
            type: PropType<import("../select").ISelectAttributes["simple"]>;
            default: boolean | undefined;
        };
        editable: {
            type: PropType<import("../select").ISelectAttributes["editable"]>;
            default: boolean | undefined;
        };
        emptyText: {
            type: PropType<import("../select").ISelectAttributes["emptyText"]>;
            default: string | boolean | undefined;
        };
        showIcon: {
            type: PropType<import("../select").ISelectAttributes["showIcon"]>;
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
        loading: boolean | import("../../types").ILoading | undefined;
        sizeControl: import("../../types").TSizeControl | undefined;
        visibility: boolean | undefined;
        items: import("../index.ts").IListBoxItemAttributes[];
        selected: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
        readonly: boolean | undefined;
        wordWrap: boolean | undefined;
        multiple: boolean | undefined;
        onPropItemSelected: import("../index.ts").IEventSelected | undefined;
        onPropItemsSelected: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
        placement: import("../../types").TPlacemant | undefined;
        triggerActivate: import("../../types").TTriggerActivate | undefined;
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
                type: PropType<import("../index.ts").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: PropType<import("../index.ts").IDropDownAttributes["items"]>;
                default: import("../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: PropType<import("../index.ts").IDropDownAttributes["selected"]>;
                default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: PropType<import("../index.ts").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: PropType<import("../index.ts").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../index.ts").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../index.ts").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: PropType<import("../index.ts").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../index.ts").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: PropType<import("../index.ts").IDropDownAttributes["placement"]>;
                default: import("../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../index.ts").IDropDownAttributes["triggerActivate"]>;
                default: import("../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../index.ts").IDropDownAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: PropType<import("../index.ts").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../index.ts").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../index.ts").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../index.ts").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../index.ts").IDropDownAttributes["teleportTo"]>;
                default: string | HTMLElement | undefined;
            };
        }>, {}, {
            cmpControl: InstanceType<typeof import("../index.ts").BDropDownComponent> | null;
            registeredElements: HTMLElement[];
        }, {
            classes(): import("../../types").TClasses;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("../index.ts").IDropDownAttributes["hidden"]>;
                default: boolean | undefined;
            };
            items: {
                type: PropType<import("../index.ts").IDropDownAttributes["items"]>;
                default: import("../index.ts").IListBoxItemAttributes[];
            };
            selected: {
                type: PropType<import("../index.ts").IDropDownAttributes["selected"]>;
                default: Boolean | import("../index.ts").IListBoxItemAttributes | import("../index.ts").IListBoxItemAttributes[] | undefined;
            };
            multiple: {
                type: PropType<import("../index.ts").IDropDownAttributes["multiple"]>;
                default: boolean | undefined;
            };
            maxRows: {
                type: PropType<import("../index.ts").IDropDownAttributes["maxRows"]>;
                default: number | undefined;
            };
            autoWidth: {
                type: PropType<import("../index.ts").IDropDownAttributes["autoWidth"]>;
                default: boolean | undefined;
            };
            wordWrap: {
                type: PropType<import("../index.ts").IDropDownAttributes["wordWrap"]>;
                default: boolean | undefined;
            };
            filterText: {
                type: PropType<import("../index.ts").IDropDownAttributes["filterText"]>;
                default: string | undefined;
            };
            singleSelection: {
                type: PropType<import("../index.ts").IDropDownAttributes["singleSelection"]>;
                default: boolean | undefined;
            };
            onPropItemSelected: {
                type: PropType<import("../index.ts").IDropDownAttributes["onPropItemSelected"]>;
                default: import("../index.ts").IEventSelected | undefined;
            };
            onPropItemsSelected: {
                type: PropType<import("../index.ts").IDropDownAttributes["onPropItemsSelected"]>;
                default: import("../collection-abstract/list-box.types").IEventItemsSelected<import("../index.ts").IListBoxItemAttributes> | undefined;
            };
            placement: {
                type: PropType<import("../index.ts").IDropDownAttributes["placement"]>;
                default: import("../../types").TPlacemant | undefined;
            };
            triggerActivate: {
                type: PropType<import("../index.ts").IDropDownAttributes["triggerActivate"]>;
                default: import("../../types").TTriggerActivate | undefined;
            };
            owner: {
                type: PropType<import("../index.ts").IDropDownAttributes["owner"]>;
                default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
            };
            contextMenu: {
                type: PropType<import("../index.ts").IDropDownAttributes["contextMenu"]>;
                default: boolean | undefined;
            };
            visible: {
                type: PropType<import("../index.ts").IDropDownAttributes["visible"]>;
                default: boolean | undefined;
            };
            offsetTop: {
                type: PropType<import("../index.ts").IDropDownAttributes["offsetTop"]>;
                default: number | undefined;
            };
            autoFocus: {
                type: PropType<import("../index.ts").IDropDownAttributes["autoFocus"]>;
                default: boolean | undefined;
            };
            autoClose: {
                type: PropType<import("../index.ts").IDropDownAttributes["autoClose"]>;
                default: boolean | undefined;
            };
            teleportTo: {
                type: PropType<import("../index.ts").IDropDownAttributes["teleportTo"]>;
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
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                cmpComponent: import("vue").ComponentPublicInstance | null;
                registeredElements: Set<HTMLElement>;
            }, {
                classes(): import("../../types").TClasses;
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
                onMountedComponent(cmpComponent: import("vue").ComponentPublicInstance, register?: boolean): void;
                afterShow(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                    default: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                owner: HTMLElement | import("vue").ComponentPublicInstance | undefined;
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
                classes(): import("../../types").TClasses;
                outItems(): import("../index.ts").ICollectionItemAttributes[];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
        BInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            placeholder: {
                type: PropType<import("../index.ts").IInputAttributes["placeholder"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../index.ts").IInputAttributes["type"]>;
                default: any;
            };
            pattern: {
                type: PropType<import("../index.ts").IInputAttributes["pattern"]>;
                default: string | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IInputAttributes["required"]>;
                default: boolean | undefined;
            };
            autocomplete: {
                type: PropType<import("../index.ts").IInputAttributes["autocomplete"]>;
                default: string | undefined;
            };
            maxlength: {
                type: PropType<import("../index.ts").IInputAttributes["maxlength"]>;
                default: number | undefined;
            };
            minlength: {
                type: PropType<import("../index.ts").IInputAttributes["minlength"]>;
                default: number | undefined;
            };
            visibility: {
                type: PropType<import("../index.ts").IInputAttributes["visibility"]>;
                default: boolean | undefined;
            };
            clearButton: {
                type: PropType<import("../index.ts").IInputAttributes["clearButton"]>;
                default: boolean | undefined;
            };
            clearWithText: {
                type: PropType<import("../index.ts").IInputAttributes["clearWithText"]>;
                default: boolean | undefined;
            };
            showStateIcon: {
                type: PropType<import("../index.ts").IInputAttributes["showStateIcon"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").IInputAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            loading: {
                type: PropType<import("../index.ts").IInputAttributes["loading"]>;
                default: boolean | import("../../types").ILoading | undefined;
            };
            simple: {
                type: PropType<import("../index.ts").IInputAttributes["simple"]>;
                default: boolean | undefined;
            };
            asSelect: {
                type: PropType<import("../index.ts").IInputAttributes["asSelect"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            cssClass: string;
            stateVisibility: boolean | undefined;
            stateLoading: import("../../types").ILoading;
            keysup: string[];
            keysdown: string[];
        }, {
            classes(): import("../../types").TClasses;
            effectiveType(): import("../index.ts").TInputType;
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
                type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                default: boolean | undefined;
            };
            invalid: {
                type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                default: boolean | undefined;
            };
            state: {
                type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                default: import("../../types").TState | undefined;
            };
        }>, {}, {
            stateText: string | number | undefined;
            stateState: import("../../types").TState;
            stateInvalid: boolean;
            stateValue: any;
            stateDisabled: boolean;
            stateName: string;
        }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            readonly: {
                type: PropType<import("../index.ts").IControlInputAttributes["readonly"]>;
                default: boolean | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IControlInputAttributes["required"]>;
                default: boolean | undefined;
            };
            invalid: {
                type: PropType<import("../index.ts").IControlInputAttributes["invalid"]>;
                default: boolean | undefined;
            };
            state: {
                type: PropType<import("../index.ts").IControlInputAttributes["state"]>;
                default: import("../../types").TState | undefined;
            };
        }>> & Readonly<{}>, {
            readonly: boolean | undefined;
            required: boolean | undefined;
            invalid: boolean | undefined;
            state: import("../../types").TState | undefined;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value" | "update:visibility" | "change" | "click-clear" | "click-body")[], "clear" | "update:text" | "update:value" | "update:visibility" | "change" | "click-clear" | "click-body", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            placeholder: {
                type: PropType<import("../index.ts").IInputAttributes["placeholder"]>;
                default: string | undefined;
            };
            type: {
                type: PropType<import("../index.ts").IInputAttributes["type"]>;
                default: any;
            };
            pattern: {
                type: PropType<import("../index.ts").IInputAttributes["pattern"]>;
                default: string | undefined;
            };
            required: {
                type: PropType<import("../index.ts").IInputAttributes["required"]>;
                default: boolean | undefined;
            };
            autocomplete: {
                type: PropType<import("../index.ts").IInputAttributes["autocomplete"]>;
                default: string | undefined;
            };
            maxlength: {
                type: PropType<import("../index.ts").IInputAttributes["maxlength"]>;
                default: number | undefined;
            };
            minlength: {
                type: PropType<import("../index.ts").IInputAttributes["minlength"]>;
                default: number | undefined;
            };
            visibility: {
                type: PropType<import("../index.ts").IInputAttributes["visibility"]>;
                default: boolean | undefined;
            };
            clearButton: {
                type: PropType<import("../index.ts").IInputAttributes["clearButton"]>;
                default: boolean | undefined;
            };
            clearWithText: {
                type: PropType<import("../index.ts").IInputAttributes["clearWithText"]>;
                default: boolean | undefined;
            };
            showStateIcon: {
                type: PropType<import("../index.ts").IInputAttributes["showStateIcon"]>;
                default: boolean | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").IInputAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
            loading: {
                type: PropType<import("../index.ts").IInputAttributes["loading"]>;
                default: boolean | import("../../types").ILoading | undefined;
            };
            simple: {
                type: PropType<import("../index.ts").IInputAttributes["simple"]>;
                default: boolean | undefined;
            };
            asSelect: {
                type: PropType<import("../index.ts").IInputAttributes["asSelect"]>;
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
            loading: boolean | import("../../types").ILoading | undefined;
            sizeControl: import("../../types").TSizeControl | undefined;
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
                    type: PropType<import("../index.ts").IButtonClearAttributes["invisible"]>;
                    default: boolean | undefined;
                };
            }>, {}, {}, {
                classes(): import("../../types").TClasses;
            }, {
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                effectiveSizeControl(): ESizeControl;
                effectiveDisabled(): boolean;
            }, {
                onClick(event: MouseEvent): void;
            }, import("../../types/types").TClassesMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                sizeControl: {
                    type: PropType<import("../index.ts").IButtonCollectionAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
            }>, {
                sizeControl: import("../../types").TSizeControl | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    classes(): import("../../types").TClasses;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            borderWidth: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            width: string;
                            height: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("clear" | "update:text" | "update:value")[], "clear" | "update:text" | "update:value", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                invisible: {
                    type: PropType<import("../index.ts").IButtonClearAttributes["invisible"]>;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    classes(): import("../../types").TClasses;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            borderWidth: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            width: string;
                            height: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                classes(): import("../../types").TClasses;
                styles(): {
                    borderWidth: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                classes(): import("../../types").TClasses;
                styles(): {
                    width: string;
                    height: string;
                };
            }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                id: {
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
        }, {}, string, () => {
            sizeControl: import("vue").ComputedRef<import("../../types").TSizeControl | undefined>;
            disabled: import("vue").ComputedRef<boolean>;
            visibility: import("vue").ComputedRef<boolean | undefined>;
            onVisibility: () => void;
        }, true, {}, any>;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
        BTags: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            items: {
                type: PropType<import("../index.ts").ITagsAttributes["items"]>;
                default: import("../tags/types").ITagItemAttributes[];
            };
            type: {
                type: PropType<import("../index.ts").ITagsAttributes["type"]>;
                default: import("../../types").TComponentVariantType | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").ITagsAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
        }>, {}, {
            stateItems: any[];
        }, {
            classes(): import("../../types").TClasses;
        }, {
            onClick(event: MouseEvent, item: import("../tags/types").ITagItemAttributes): void;
            onRemove(event: MouseEvent, item: import("../tags/types").ITagItemAttributes): void;
            onKeyDown(event: KeyboardEvent, item: import("../tags/types").ITagItemAttributes): void;
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>, {}, {
            stateVisible: boolean;
        }, {
            getId(): import("../component").IComponentAttributes["id"];
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
                type: PropType<import("../component").IComponentAttributes["id"]>;
                default: undefined;
            };
            component: {
                type: any;
            };
            visible: {
                type: PropType<import("../component").IComponentAttributes["visible"]>;
                default: boolean | undefined;
            };
            hidden: {
                type: PropType<import("../component").IComponentAttributes["hidden"]>;
                default: boolean | undefined;
            };
        }>> & Readonly<{
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
                type: PropType<import("../index.ts").ITagsAttributes["items"]>;
                default: import("../tags/types").ITagItemAttributes[];
            };
            type: {
                type: PropType<import("../index.ts").ITagsAttributes["type"]>;
                default: import("../../types").TComponentVariantType | undefined;
            };
            sizeControl: {
                type: PropType<import("../index.ts").ITagsAttributes["sizeControl"]>;
                default: import("../../types").TSizeControl | undefined;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            onClick?: ((...args: any[]) => any) | undefined;
            onRemove?: ((...args: any[]) => any) | undefined;
            "onUpdate:items"?: ((...args: any[]) => any) | undefined;
        }>, {
            type: import("../../types").TComponentVariantType | undefined;
            sizeControl: import("../../types").TSizeControl | undefined;
            items: import("../tags/types").ITagItemAttributes[];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            BTag: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                type: {
                    type: PropType<import("../index.ts").ITagAttributes["type"]>;
                    default: import("../../types").TComponentVariantType | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").ITagAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../index.ts").ITagAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                outlined: {
                    type: PropType<import("../index.ts").ITagAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: PropType<import("../index.ts").ITagAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: PropType<import("../index.ts").ITagAttributes["simple"]>;
                    default: boolean | undefined;
                };
                loading: {
                    type: PropType<import("../index.ts").ITagAttributes["loading"]>;
                    default: boolean | import("../../types").ILoading | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").ITagAttributes["onPropClick"]>;
                    default: import("../../types").IEventHandler | undefined;
                };
            }>, {}, {
                cssClass: string;
            }, {
                classes(): import("../../types").TClasses;
            }, {
                onClick(event: MouseEvent): void;
            }, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>, {}, {
                stateVisible: boolean;
            }, {
                getId(): import("../component").IComponentAttributes["id"];
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
                    type: PropType<import("../component").IComponentAttributes["id"]>;
                    default: undefined;
                };
                component: {
                    type: any;
                };
                visible: {
                    type: PropType<import("../component").IComponentAttributes["visible"]>;
                    default: boolean | undefined;
                };
                hidden: {
                    type: PropType<import("../component").IComponentAttributes["hidden"]>;
                    default: boolean | undefined;
                };
            }>> & Readonly<{
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                onHide?: ((...args: any[]) => any) | undefined;
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
            }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("click" | "remove")[], "click" | "remove", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: PropType<import("../index.ts").ITagAttributes["type"]>;
                    default: import("../../types").TComponentVariantType | undefined;
                };
                sizeControl: {
                    type: PropType<import("../index.ts").ITagAttributes["sizeControl"]>;
                    default: import("../../types").TSizeControl | undefined;
                };
                asLabel: {
                    type: PropType<import("../index.ts").ITagAttributes["asLabel"]>;
                    default: boolean | undefined;
                };
                outlined: {
                    type: PropType<import("../index.ts").ITagAttributes["outlined"]>;
                    default: boolean | undefined;
                };
                plain: {
                    type: PropType<import("../index.ts").ITagAttributes["plain"]>;
                    default: boolean | undefined;
                };
                simple: {
                    type: PropType<import("../index.ts").ITagAttributes["simple"]>;
                    default: boolean | undefined;
                };
                loading: {
                    type: PropType<import("../index.ts").ITagAttributes["loading"]>;
                    default: boolean | import("../../types").ILoading | undefined;
                };
                onPropClick: {
                    type: PropType<import("../index.ts").ITagAttributes["onPropClick"]>;
                    default: import("../../types").IEventHandler | undefined;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                onRemove?: ((...args: any[]) => any) | undefined;
            }>, {
                type: import("../../types").TComponentVariantType | undefined;
                outlined: boolean | undefined;
                plain: boolean | undefined;
                simple: boolean | undefined;
                loading: boolean | import("../../types").ILoading | undefined;
                sizeControl: import("../../types").TSizeControl | undefined;
                asLabel: boolean | undefined;
                onPropClick: import("../../types").IEventHandler | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                    classes(): import("../../types").TClasses;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
                        default: import("../../types").TComponentVariantType | undefined;
                    };
                    form: {
                        type: PropType<import("../index.ts").IButtonAttributes["form"]>;
                        default: import("../button/types").TFormType | undefined;
                    };
                    loading: {
                        type: PropType<import("../index.ts").IButtonAttributes["loading"]>;
                        default: boolean | import("../../types").ILoading | undefined;
                    };
                    sizeControl: {
                        type: PropType<import("../index.ts").IButtonAttributes["sizeControl"]>;
                        default: import("../../types").TSizeControl | undefined;
                    };
                    asLabel: {
                        type: PropType<import("../index.ts").IButtonAttributes["asLabel"]>;
                        default: boolean | undefined;
                    };
                    onPropClick: {
                        type: PropType<import("../index.ts").IButtonEvents["onPropClick"]>;
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            borderWidth: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        classes(): import("../../types").TClasses;
                        styles(): {
                            width: string;
                            height: string;
                        };
                    }, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
                        id: {
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>, {}, {
                        stateVisible: boolean;
                    }, {
                        getId(): import("../component").IComponentAttributes["id"];
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
                            type: PropType<import("../component").IComponentAttributes["id"]>;
                            default: undefined;
                        };
                        component: {
                            type: any;
                        };
                        visible: {
                            type: PropType<import("../component").IComponentAttributes["visible"]>;
                            default: boolean | undefined;
                        };
                        hidden: {
                            type: PropType<import("../component").IComponentAttributes["hidden"]>;
                            default: boolean | undefined;
                        };
                    }>> & Readonly<{
                        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                        onHide?: ((...args: any[]) => any) | undefined;
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>, {}, {
                    stateVisible: boolean;
                }, {
                    getId(): import("../component").IComponentAttributes["id"];
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
                        type: PropType<import("../component").IComponentAttributes["id"]>;
                        default: undefined;
                    };
                    component: {
                        type: any;
                    };
                    visible: {
                        type: PropType<import("../component").IComponentAttributes["visible"]>;
                        default: boolean | undefined;
                    };
                    hidden: {
                        type: PropType<import("../component").IComponentAttributes["hidden"]>;
                        default: boolean | undefined;
                    };
                }>> & Readonly<{
                    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
                    onHide?: ((...args: any[]) => any) | undefined;
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
