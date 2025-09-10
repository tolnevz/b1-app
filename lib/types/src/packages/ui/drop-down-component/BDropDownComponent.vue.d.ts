import { type PropType, type ComponentPublicInstance } from 'vue';
import type { IDropDownComponentAttributes, TPositionComponent } from './types';
import type { TClasses } from '../../types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    hidden: {
        type: PropType<IDropDownComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
    required: {
        type: PropType<IDropDownComponentAttributes["required"]>;
        default: boolean | undefined;
    };
    placement: {
        type: PropType<IDropDownComponentAttributes["placement"]>;
        default: import("../../types").TPlacemant | undefined;
    };
    triggerActivate: {
        type: PropType<IDropDownComponentAttributes["triggerActivate"]>;
        default: import("../../types").TTriggerActivate | undefined;
    };
    owner: {
        type: PropType<IDropDownComponentAttributes["owner"]>;
        default: HTMLElement | ComponentPublicInstance | undefined;
    };
    visible: {
        type: PropType<IDropDownComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    offsetTop: {
        type: PropType<IDropDownComponentAttributes["offsetTop"]>;
        default: number | undefined;
    };
    autoFocus: {
        type: PropType<IDropDownComponentAttributes["autoFocus"]>;
        default: boolean | undefined;
    };
    autoClose: {
        type: PropType<IDropDownComponentAttributes["autoClose"]>;
        default: boolean | undefined;
    };
    teleportTo: {
        type: PropType<IDropDownComponentAttributes["teleportTo"]>;
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
    /**
     * Register an element as part of the component
     * @param {HTMLElement} element
     */
    registerElement(element: HTMLElement | HTMLElement[]): void;
    /**
     * Delete an element from registered
     * @param {HTMLElement} element
     */
    unregisterElement(element: HTMLElement): void;
    /**
     * Check if the element is part of the component
     * @param {Node} target
     * @returns {boolean}
     */
    isPartOfComponent(target: Node): boolean;
    /**
     * Check if the element is outside the component
     * @param {Node} target
     * @returns {boolean}
     */
    isOutsideComponent(target: Node): boolean;
    /**
     * Handle document click
     * @param {MouseEvent} event
     */
    handleDocumentClick(event: MouseEvent): void;
    /**
     * Handle key down
     * @param {KeyboardEvent} event
     */
    handleKeyDown(event: KeyboardEvent): void;
    handleFocusOut(event: FocusEvent): void;
    /**
     * !TODO - It is necessary to modify logic
     * Handle context menu
     * @param {MouseEvent} event
     */
    /**
     * Calculate position of the drop-down
     * @param {MouseEvent} event
     */
    calculatePosition(event?: MouseEvent): {
        top: string;
        left: string;
    } | undefined;
    calculateTopStart(ownerRect: DOMRect, forward?: boolean): TPositionComponent;
    calculateTopEnd(ownerRect: DOMRect, forward?: boolean): TPositionComponent;
    calculateBottomStart(ownerRect: DOMRect, forward?: boolean): TPositionComponent;
    calculateBottomEnd(ownerRect: DOMRect, forward?: boolean): TPositionComponent;
    /**
     * Update list box width
     */
    updateComponentPosition(): void;
    /**
     * !TODO - It is necessary to modify logic
     */
    calculateInner(ownerRect: DOMRect, event?: MouseEvent): {
        top: number;
        left: number;
    };
    /**
     * Update list box rect
     */
    onUpdateComponentRect(): void;
    /**
     * Event mounted component
     * @param {ComponentPublicInstance} cmpComponent
     * @param {boolean} register - Register element
     */
    onMountedComponent(cmpComponent: ComponentPublicInstance, register?: boolean): void;
    /**
     * Show drop-down. Method reference to the parent component
     * @borrows BCollection.show
     */
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
        type: PropType<IDropDownComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
    required: {
        type: PropType<IDropDownComponentAttributes["required"]>;
        default: boolean | undefined;
    };
    placement: {
        type: PropType<IDropDownComponentAttributes["placement"]>;
        default: import("../../types").TPlacemant | undefined;
    };
    triggerActivate: {
        type: PropType<IDropDownComponentAttributes["triggerActivate"]>;
        default: import("../../types").TTriggerActivate | undefined;
    };
    owner: {
        type: PropType<IDropDownComponentAttributes["owner"]>;
        default: HTMLElement | ComponentPublicInstance | undefined;
    };
    visible: {
        type: PropType<IDropDownComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    offsetTop: {
        type: PropType<IDropDownComponentAttributes["offsetTop"]>;
        default: number | undefined;
    };
    autoFocus: {
        type: PropType<IDropDownComponentAttributes["autoFocus"]>;
        default: boolean | undefined;
    };
    autoClose: {
        type: PropType<IDropDownComponentAttributes["autoClose"]>;
        default: boolean | undefined;
    };
    teleportTo: {
        type: PropType<IDropDownComponentAttributes["teleportTo"]>;
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
export default _default;
