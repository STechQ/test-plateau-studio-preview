import { IComponent } from "../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { IQJSon } from "../../../common/shrimp/interfaces/ComponentInterfaces/IQJson";
import { IContainerServices, IContainerServicesWrapper } from "../../../common/shrimp/interfaces/quick/IContainerServices";
import { IExternalQJsonRetriever } from "../../../common/shrimp/interfaces/quick/IExternalQJsonRetriever";
import { IRegionalDefinition } from "../../../common/shrimp/interfaces/quick/ISettingsYaml";
import { CompGroupType, IWebSDK, IWebSDKSettings } from "../../../common/shrimp/interfaces/quick/IWebSDK";
import { IWebSDKSetingsBus } from "../../../common/shrimp/interfaces/quick/IWebSDKSettingsBus";
import { IDomElement } from "../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { IRenderer } from "../../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import Vue from "vue";
import { StoreManagerHookCb } from "./implementation/StoreManager";
import { UXManagerImpl } from "./implementation/UXManagerImpl";
import { IPlateauIAM } from "../../../common/shrimp/interfaces/quick/IPlateauIAM";
export declare class WebSDK implements IWebSDK {
    static servicesWrapper: IContainerServicesWrapper;
    static plugins: Array<any>;
    config: IRendererConfig;
    private qshell;
    private rendererManager;
    private windowHistoryManager;
    private qJsonRetriever;
    private network?;
    private settingsWrapper;
    private storeManager;
    private cookieManager;
    private ux;
    private platformType;
    private platformManagerImp;
    private region;
    private hostTriggererImp;
    private pageManager;
    private languageExtensions;
    private websdkContext;
    private moduleManager;
    constructor(settings: IWebSDKSettings, services?: IContainerServices);
    UpdateSettings(allSettings: IWebSDKSetingsBus): void;
    static getPlateauIAM(): IPlateauIAM;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    addPlugin(plugin: any): void;
    migrateLegacySettings(settings: IWebSDKSettings): void;
    open(id: string, url: string, args: Record<string, any>): string;
    trigger(eventName: string, parameters: Record<string, any>, pageID?: string): any;
    close(id: string): void;
    show(id: string): void;
    hide(): void;
    reset(): void;
    subscribeStoreData(name: string, cb: StoreManagerHookCb): void;
    unSubscribeStoreData(name: string, cb: StoreManagerHookCb): void;
    private UpdateServices;
    private UpdateWebSDKSettings;
    private initContainerServices;
    LoadModuleCompLists(modulePaths: Record<string, string>): Promise<any>;
    init(): void;
    LoadPipeline(): Promise<void>;
    LoadAlert(): Promise<void>;
    LoadLoading(): Promise<IQJSon | undefined>;
    LoadGlobalLocalization(): Promise<IQJSon | undefined>;
    CreateRenderer({ mountPoint, config }: {
        mountPoint: IDomElement;
        config?: IRendererConfig;
    }): IRenderer;
    GetDomContainer(renderer: IRenderer): IDomElement;
    GetParentInstance(renderer: IRenderer): Vue;
    Clear(renderer: IRenderer): void;
    setComponentOverrider(cb: (compName: string) => IComponent | null): any;
    GetComponentList(compGroupNameArray: Array<CompGroupType>): Record<CompGroupType, any>;
    /**
     * Set domain prefix of qJson retriever in nemo
     * @param prefix Domain prefix of retriever
     */
    setQJsonUrlPrefix(prefix?: string): void;
    setServiceUrlPrefix(prefix?: string): void;
    setServiceDefaultHeader(header?: string): void;
    setSelectedServiceUrl(url?: string): void;
    setProxySettingsYamlContent(content?: object): void;
    setBackEndInfHeaders(backendInf: any): void;
    setRegionalDefinition(regionalSettings: Array<IRegionalDefinition> | undefined): void;
    setGlobalLR(regionalSettings: Array<IRegionalDefinition> | undefined): void;
    setEnvironment(env: any): void;
    setYamlLogType(logType: string): void;
    setPageTitle(title: string): void;
    setFavicon(favicon: string): void;
    getUXManager(): UXManagerImpl;
}
declare class WebSDKBuilder {
    build(fetchLibrary: Function, settings: IWebSDKSettings, options: any, containerServicesInstance: IContainerServices): {
        webSDKInstance: WebSDK;
        loadProm: Promise<void>;
    };
}
export declare let webSDKBuilder: WebSDKBuilder;
export {};
//# sourceMappingURL=WebSDK.d.ts.map