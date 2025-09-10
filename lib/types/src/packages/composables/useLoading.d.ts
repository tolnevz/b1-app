import { type Ref } from 'vue';
import { type ILoading } from './../types';
/**
 * Create a property to display download
 * @param loading
 * @returns {ILoading}
 */
export declare function useLoading(loading: boolean | ILoading | undefined | Ref<boolean | ILoading | undefined>): ILoading;
/**
 * Check if the download is in progress
 * @param loading
 * @returns {boolean}
 */
export declare function isLoading(loading: boolean | ILoading | undefined | Ref<boolean | ILoading | undefined>): boolean;
/**
 * Check if the download is a spinner
 * @param loading
 * @returns {boolean}
 */
export declare function isSpinner(loading: boolean | ILoading | undefined | Ref<boolean | ILoading | undefined>): boolean;
/**
 * Check if the download is a skeleton
 * @param loading
 * @returns {boolean}
 */
export declare function isSkeleton(loading: boolean | ILoading | undefined | Ref<boolean | ILoading | undefined>): boolean;
