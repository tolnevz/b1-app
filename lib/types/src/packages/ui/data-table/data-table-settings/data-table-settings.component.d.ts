import { type Ref } from 'vue';
import type { IDataTableSettingsAttributes } from './types';
export declare function useDefaultDataTableSettingsAttributes(customAttributes?: Partial<IDataTableSettingsAttributes>): IDataTableSettingsAttributes;
export declare const defaultAttributes: IDataTableSettingsAttributes;
interface IDataTableSettingsInstance {
    show: () => void;
    hide: () => void;
    toggle: () => void;
    visible: Ref<boolean>;
    isVisible: () => boolean;
}
export declare function useDataTableSettings(): IDataTableSettingsInstance;
export {};
