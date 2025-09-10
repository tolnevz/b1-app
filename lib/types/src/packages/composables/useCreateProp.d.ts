import { type PropType } from 'vue';
/**
 * Interface representing the options for a prop.
 *
 * @template T - The type of the object containing the prop.
 * @template K - The key of the prop in the object.
 */
interface IPropOptions<T, K extends keyof T> {
    /**
     * The type of the prop.
     */
    type: {
        new (...args: any[]): T[K];
    } | {
        (): T[K];
    } | Array<{
        new (...args: any[]): T[K];
    } | {
        (): T[K];
    }>;
    /**
     * The default value of the prop.
     */
    defaultValue: T[K];
}
/**
 * Creates a prop definition for a Vue component.
 *
 * @template T - The type of the object containing the prop.
 * @template K - The key of the prop in the object.
 * @param {IPropOptions<T, K>} options - The options for the prop.
 * @returns {object} The prop definition.
 */
export default function <T, K extends keyof T>({ type, defaultValue }: IPropOptions<T, K>): {
    type: PropType<T[K]>;
    default: T[K];
};
export {};
