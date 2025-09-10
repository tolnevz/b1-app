import { type PropType } from 'vue';
import type { IFormAttributes, IFormModel, IUseForm, IValidationErrors, TValidationRules, TValidationRuleOn } from './types.d';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modified: {
        type: PropType<IFormAttributes["modified"]>;
        default: boolean | undefined;
    };
    model: {
        type: PropType<IFormAttributes["model"]>;
        default: IFormModel;
    };
    errors: {
        type: PropType<IFormAttributes["errors"]>;
        default: IFormModel | undefined;
    };
    rules: {
        type: PropType<IFormAttributes["rules"]>;
        default: TValidationRules | undefined;
    };
    disableEnterSubmit: {
        type: PropType<IFormAttributes["disableEnterSubmit"]>;
        default: boolean | undefined;
    };
    submitHidden: {
        type: PropType<IFormAttributes["submitHidden"]>;
        default: boolean | undefined;
    };
    complete: {
        type: PropType<IFormAttributes["complete"]>;
        default: boolean | undefined;
    };
    invalidate: {
        type: PropType<IFormAttributes["invalidate"]>;
        default: boolean | undefined;
    };
    autoValidate: {
        type: PropType<IFormAttributes["autoValidate"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateErrors: IFormModel;
    originalModel: IFormModel;
    form: IUseForm;
    stateModified: boolean;
    stateDisabled: boolean;
    stateSubmit: boolean;
}, {}, {
    /**
     * Initializes the form model and resets the state.
     * This method should be called when the form is first created or when the model changes.
     * @param model - The model to initialize the form with.
     */
    initModel(model: IFormModel): void;
    /**
     * Sets the original model to the current state model.
     * This is used to track changes in the form.
     * @param model - The model to set as the original model.
     */
    setOriginalModel(model: IFormModel): void;
    /**
     * Updates the document title based on the modified state of the form.
     * If the form is modified, it prepends an asterisk to the title.
     */
    updateTitle(): void;
    /**
     * Handles form submission.
     * Validates the form and emits the submit event with the model and errors.
     */
    submit(): void;
    /**
     * Prevents form submission on Enter key press for input fields
     * except for textarea elements.
     */
    onFormKeyDown(event: KeyboardEvent): void;
    /**
     * Handles changes in the model.
     * @param name - The name of the model field.
     * @param value - The new value for the model field.
     */
    updateModelField(name: string, value: any): void;
    /**
     * Validates the entire form.
     * If the form is valid, resets the errors; otherwise, sets the errors.
     * @returns True if the form is valid, false otherwise.
     */
    validate(): boolean;
    /**
     * Validates a specific field in the form.
     * @param name - The name of the field to validate.
     * @param events - The event type that triggered the validation (default is 'change').
     * @returns True if the field is valid, false otherwise.
     */
    validateField(name: string, events?: TValidationRuleOn): boolean;
    /**
     * Retrieves the current validation errors.
     * @returns The current validation errors.
     */
    getErrors(): IValidationErrors;
    /**
     * Completes the form submission process.
     * Resets the state and emits the complete event with the model.
     */
    formComplete(): void;
    /**
     * Invalidates the form with the provided validation errors.
     * Resets the state and emits the invalidate event with the errors.
     * @param errors - The validation errors to set.
     */
    formInvalidate(errors: IValidationErrors): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("./../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("./../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("./../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>, {}, {
    stateVisible: boolean;
}, {
    getId(): import("./../component").IComponentAttributes["id"];
    classes(): string[];
    isHidden(): boolean;
    isVisibility(): boolean;
}, {
    beforeShow(): boolean;
    show(): boolean;
    beforeHide(): boolean;
    hide(forward?: boolean): boolean;
    afterShow(): void;
    afterHide(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created")[], "update:visible" | "hide" | "show" | "mounted" | "toggleVisible" | "created", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: PropType<import("./../component").IComponentAttributes["id"]>;
        default: undefined;
    };
    component: {
        type: any;
    };
    visible: {
        type: PropType<import("./../component").IComponentAttributes["visible"]>;
        default: boolean | undefined;
    };
    hidden: {
        type: PropType<import("./../component").IComponentAttributes["hidden"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onMounted?: ((...args: any[]) => any) | undefined;
    onToggleVisible?: ((...args: any[]) => any) | undefined;
    onCreated?: ((...args: any[]) => any) | undefined;
}>, {
    id: string | undefined;
    component: any;
    visible: boolean | undefined;
    hidden: boolean | undefined;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, ("disabled" | "submit" | "modified" | "errors" | "update:model" | "update:modified" | "update:errors" | "update:complete" | "update:invalidate" | "update:disabled" | "update:submitting" | "submitting" | "formComplete" | "formInvalidate")[], "disabled" | "submit" | "modified" | "errors" | "update:model" | "update:modified" | "update:errors" | "update:complete" | "update:invalidate" | "update:disabled" | "update:submitting" | "submitting" | "formComplete" | "formInvalidate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modified: {
        type: PropType<IFormAttributes["modified"]>;
        default: boolean | undefined;
    };
    model: {
        type: PropType<IFormAttributes["model"]>;
        default: IFormModel;
    };
    errors: {
        type: PropType<IFormAttributes["errors"]>;
        default: IFormModel | undefined;
    };
    rules: {
        type: PropType<IFormAttributes["rules"]>;
        default: TValidationRules | undefined;
    };
    disableEnterSubmit: {
        type: PropType<IFormAttributes["disableEnterSubmit"]>;
        default: boolean | undefined;
    };
    submitHidden: {
        type: PropType<IFormAttributes["submitHidden"]>;
        default: boolean | undefined;
    };
    complete: {
        type: PropType<IFormAttributes["complete"]>;
        default: boolean | undefined;
    };
    invalidate: {
        type: PropType<IFormAttributes["invalidate"]>;
        default: boolean | undefined;
    };
    autoValidate: {
        type: PropType<IFormAttributes["autoValidate"]>;
        default: boolean | undefined;
    };
}>> & Readonly<{
    onSubmit?: ((...args: any[]) => any) | undefined;
    onDisabled?: ((...args: any[]) => any) | undefined;
    onModified?: ((...args: any[]) => any) | undefined;
    onErrors?: ((...args: any[]) => any) | undefined;
    "onUpdate:model"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modified"?: ((...args: any[]) => any) | undefined;
    "onUpdate:errors"?: ((...args: any[]) => any) | undefined;
    "onUpdate:complete"?: ((...args: any[]) => any) | undefined;
    "onUpdate:invalidate"?: ((...args: any[]) => any) | undefined;
    "onUpdate:disabled"?: ((...args: any[]) => any) | undefined;
    "onUpdate:submitting"?: ((...args: any[]) => any) | undefined;
    onSubmitting?: ((...args: any[]) => any) | undefined;
    onFormComplete?: ((...args: any[]) => any) | undefined;
    onFormInvalidate?: ((...args: any[]) => any) | undefined;
}>, {
    modified: boolean | undefined;
    model: IFormModel;
    disableEnterSubmit: boolean | undefined;
    errors: IFormModel | undefined;
    rules: TValidationRules | undefined;
    submitHidden: boolean | undefined;
    complete: boolean | undefined;
    invalidate: boolean | undefined;
    autoValidate: boolean | undefined;
}, {}, {}, {}, string, () => {
    modified: import("vue").ComputedRef<boolean>;
    disabled: import("vue").ComputedRef<boolean>;
    submit: import("vue").ComputedRef<boolean>;
}, true, {}, any>;
export default _default;
