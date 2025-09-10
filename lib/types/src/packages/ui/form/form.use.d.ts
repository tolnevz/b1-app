import { type Ref } from 'vue';
import type { IFormModel, IUseForm, TValidationRules, IUseValidate } from './types';
/**
 * Check empty field
 * @param val
 * @returns {boolean}
 */
export declare function isEmpty(val: any): boolean;
/** Use validation for form model
 * @param {IFormModel} model - The form model
 * @param {TValidationRules} [rules] - Validation rules for the form model
 * @return {IUseValidate} - Validation methods
 */
export declare function useValidate(model?: IFormModel | Ref<IFormModel>, rules?: TValidationRules): IUseValidate;
/**
 * Return the form of the field
 * @param {IFormModel} model
 * @param {TValidationRules} rules
 */
export declare function useForm(model?: IFormModel, rules?: TValidationRules): IUseForm;
