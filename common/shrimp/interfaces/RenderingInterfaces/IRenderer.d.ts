import { IComponentCollection } from "../ComponentInterfaces/IComponentCollection";
import { ILRID } from "../ComponentInterfaces/ILocalResource";
import { IQJSon } from "../ComponentInterfaces/IQJson";
import { Hook } from "../../helpers/hook";
import { IDictionary } from "../IDictionary";
import { INavigationDemand } from "../quick/INavigationDemand";
import { ISiteSettings } from "../quick/ISiteSettings";
import { PartialDisplayHookCb, DisplayHookCb, IDory } from "./IDory";
import { IPageCompletedCb, IPageRenderStartedCb } from "./ILifeCycleCb";
import { IContextItem } from "../../context";
export interface IRendererChild {
    Render({ qjson, props, events, compParentInst, storeItems, pageId, pageName }: {
        qjson: IQJSon;
        props?: Record<string, any>;
        events?: Record<string, Function>;
        compParentInst: any;
        storeItems?: Record<string, any>;
        pageId?: string;
        pageName?: string;
        noHistory?: boolean;
    }): Promise<void>;
    SetCallbackDisplay(callBackFunc: PartialDisplayHookCb): void;
}
export interface IRenderer {
    PageCompletedHook: Hook<IPageCompletedCb>;
    PageRenderStartedHook: Hook<IPageRenderStartedCb>;
    readonly BeforeRenderStartHook: Hook<() => void>;
    DisplayHook: Hook<DisplayHookCb>;
    settingsQJsons: ISettingsQJsonContext;
    Render({ pjsonPath, compParentInst, storeItems, pageId, pageName, pjsonContent }: {
        pjsonPath?: string;
        compParentInst?: any;
        storeItems?: IDictionary<any>;
        pageId?: string;
        pageName?: string;
        pjsonContent?: any;
    }): void;
    Back(): void;
    Forward(): void;
    Clear(): void;
    SetDisplayCallBack(callBackFunc: DisplayHookCb): void;
    SetPartialDisplayCallBack(callBackFunc: PartialDisplayHookCb): void;
    SetLRType(LRType: string): void;
    SetGlobalLRDict(GlobalLRDict: ILRID): void;
    SetSiteSettings(siteSettings: ISiteSettings): void;
    GetNavigationDemand(pageId?: string): INavigationDemand | null;
    GoHistory(navigationDemand: INavigationDemand): void;
    CreateChildRenderer(compUIDPrefix?: string): IRendererChild;
    CheckComponent({ compName }: {
        compName: string;
    }): Promise<any> | undefined;
    GetComponentCollection(): Record<string, IComponentCollection> | null;
    Trigger(eventName: string, parameters?: Record<string, any>): any;
    SetEditMode(state: boolean): void;
    Hibernate(): void;
}
export interface ISettingsQJsonContext extends IContextItem {
    PipelineChangeHook: Hook<() => void>;
    AlertChangeHook: Hook<() => void>;
    SetPipelineQjson(qjson: IQJSon): Promise<void>;
    GetPipelineQjson(): IQJSon | undefined;
    TriggerPipeline(methodName: string, methodArgs: Record<string, any>): void;
    RerenderPipelineQjson(): Promise<void> | undefined;
    SetAlertQjson(qjson: IQJSon): void;
    GetAlertQjson(): IQJSon | undefined;
    GetLoadingQjson(): IQJSon | undefined;
    SetLoadingQjson(qjson: IQJSon): void;
    SetGlobalLocalizationQjson(qJson: IQJSon): void;
}
export interface IDoryRenderer extends IRenderer {
    readonly DoryInst: IDory;
}
//# sourceMappingURL=IRenderer.d.ts.map