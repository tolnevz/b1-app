/**
 * Waiting for the appearance of Ref and calls Callback with this element.
 * @param getRef - Ref returning function (for example, () => this. $ refs.refroot)
 * @param callback - a function that needs to be called from refrising
 * @param interval - check interval (MS)
 * @param maxAttempts - The maximum number of attempts (by default 100)
 */
export default function useWaitForRef<T>(getRef: () => T | undefined, callback: (el: T) => void, interval?: number, maxAttempts?: number): void;
