/**
 * Универсальная функция для создания атрибутов с дефолтными значениями
 * @param {T} defaultAttributes - Дефолтные атрибуты
 * @param {Partial<T>} customAttributes - Пользовательские атрибуты для переопределения дефолтных значений
 * @returns {T}
 */
export declare function useDefaultAttributes<T>(defaultAttributes: T, customAttributes?: Partial<T>): T;
