import { type App } from 'vue';
export interface IConfig {
    locale?: string;
    messages?: Record<string, any>;
    datetimeFormats?: Record<string, any>;
    dateFormat?: string;
    [key: string]: any;
}
export declare const defaultConfig: IConfig;
export declare const componentsConfig: {
    [x: string]: any;
    locale?: string | undefined;
    messages?: Record<string, any> | undefined;
    datetimeFormats?: Record<string, any> | undefined;
    dateFormat?: string | undefined;
};
export declare function installConfig(app: App, config?: Partial<IConfig>): void;
