import { IComponent } from "../ComponentInterfaces/IComponent";
import { IDomElement } from "../RenderingInterfaces/IDomElement";
import { IRenderer } from "../RenderingInterfaces/IRenderer";
import { IRendererConfig } from "../RenderingInterfaces/IRendererConfig";
import { IContainerServices } from "./IContainerServices";
import { IExternalQJsonRetriever } from "./IExternalQJsonRetriever";
import { IPlateauIAM } from "./IPlateauIAM";
import { IRegionalDefinition } from "./ISettingsYaml";
import { IUXManager } from "./IUXManager";
import { IWebSDKSetingsBus } from "./IWebSDKSettingsBus";
export interface IWebSDKSettingsWrapper {
    settings: IWebSDKSettings;
}
export interface IBackendInf {
    containerName?: any;
    isKibanaLogEnabled?: any;
    iam?: {
        active: boolean;
        options?: any;
    };
    Backend?: any;
    PredefinedBackendHeaders?: any;
    HeaderExceptionList?: any;
    Header?: any;
}
export interface IWebSDKSettings {
    qjsonURLPrefix?: string;
    serviceURL?: string;
    defaultServiceHeader?: string;
    selectedServiceUrl?: string;
    settingsProxyYaml?: object;
    qjsonDirectPath?: boolean;
    disableBackManagement?: boolean;
    backendInf?: IBackendInf;
    regionalDefinition?: Array<IRegionalDefinition>;
    cssPath?: Array<string> | Record<string, Array<string>>;
    pipelineqjson?: string;
    alertqjson?: string;
    loadingqjson?: string;
    singleTab?: any;
    rootqjson?: string;
    rootLangCode?: string;
    domainModuleList?: Record<string, string>;
    environment?: unknown;
    yamlLogType?: string;
    componentListURL?: string;
    disableRoute?: boolean;
    title?: string;
    favicon?: string;
    minEngineLogLevel?: string;
}
export interface IWebSDKCtor {
    new (settings: IWebSDKSettings, services?: IContainerServices): IWebSDK;
}
export declare enum CompGroupType {
    Vuetify = "Vuetify",
    DevExpress = "DevExpress",
    Sprinkle = "Sprinkle",
    Chart = "Chart",
    Local = "Local",
    GoldenLayout = "GoldenLayout"
}
export interface IWebSDK {
    CreateRenderer({ mountPoint, config }: {
        mountPoint: IDomElement;
        config?: IRendererConfig;
    }): IRenderer;
    GetParentInstance(renderer: IRenderer): any;
    GetDomContainer(renderer: IRenderer): IDomElement;
    Clear(renderer: IRenderer): void;
    setComponentOverrider(demandComponentCb: (compName: string) => IComponent | null): void;
    GetComponentList(compGroupNameArray: Array<CompGroupType>): Record<CompGroupType, any>;
    setQJsonUrlPrefix(prefix: string): void;
    setServiceUrlPrefix(prefix: string): void;
    setServiceDefaultHeader(header: string): void;
    setSelectedServiceUrl(url: string): void;
    setProxySettingsYamlContent(content: object): void;
    LoadModuleCompLists(modulePaths: Record<string, string>): Promise<any>;
    setRegionalDefinition(regionalSettings: Array<IRegionalDefinition> | undefined): void;
    setBackEndInfHeaders(backendInf: any): void;
    SetExternalQJsonRetriever(externalQJsonRetriever: IExternalQJsonRetriever): void;
    open(id: string, url: string, args: Record<string, any>): string;
    close(id: string): void;
    show(id: string): void;
    hide(): void;
    reset(): void;
    trigger(eventName: string, parameters: any, pageID?: string): any;
    addPlugin(plugin: any): void;
    getPlateauIAM(): IPlateauIAM;
    UpdateSettings(allSettings: IWebSDKSetingsBus): void;
    migrateLegacySettings(settings: IWebSDKSettings): void;
    getUXManager(): IUXManager;
    setEnvironment(env: unknown): void;
    setYamlLogType(logType: string): void;
}
//# sourceMappingURL=IWebSDK.d.ts.map