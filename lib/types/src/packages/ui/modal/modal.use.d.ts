import { type Component } from 'vue';
import type { IUseModal } from './types';
export declare function useModal({ component, props, slots }: {
    component?: Component;
    props?: Record<string, any>;
    slots?: Record<string, any>;
}): IUseModal;
