import { IWebSDKSettingsWrapper } from "../../../../common/shrimp/interfaces/quick/IWebSDK";
import { IDoryRenderer, IRenderer } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IQJSon } from "../../../../common/shrimp/interfaces/ComponentInterfaces/IQJson";
import { IDomElement } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
export declare type Page = {
    id: string;
    path: string;
    placeholder: any;
};
export declare type SingleTab = {
    renderer: IDoryRenderer;
    doryRoot: HTMLDivElement;
    doryRootParent: HTMLDivElement;
};
export declare type RendererCreatorCb = (options: {
    mountPoint: IDomElement;
    config?: IRendererConfig;
}) => IRenderer;
export declare class PageManager {
    private placeholder;
    private wrapper;
    private createRendererCb;
    private pages;
    private settingsWrapper;
    private singleTab?;
    private pipelineQJson?;
    private alertQJson?;
    private loadingQJson?;
    private globalLocalizationQJson?;
    private initiated;
    private multiTabs?;
    constructor(createRendererCb: RendererCreatorCb, settingsWrapper: IWebSDKSettingsWrapper);
    reset(): void;
    private preparePath;
    open(id: string, url: string, args: Record<string, any>): string;
    close(id: string): void;
    closeAll(): void;
    show(id: string): void;
    hide(): void;
    setPipelineQJson(qjson: IQJSon): void;
    setAlertQJson(qjson: IQJSon): void;
    setGlobalLocalizationQJson(qJson: IQJSon): void;
    trigger(eventName: string, parameters?: Record<string, any>, pageID?: string): any;
    private getRenderer;
    private createRenderer;
    private render;
    private createSingleRenderer;
    private changePageVisibility;
    private getPlaceHolderElement;
    private init;
}
//# sourceMappingURL=PageManager.d.ts.map