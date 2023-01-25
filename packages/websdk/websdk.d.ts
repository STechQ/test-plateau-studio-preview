import { IRenderer } from "../../common/shrimp/interfaces/RenderingInterfaces/IRenderer";
import { IContainerServices } from "../../common/shrimp/interfaces/quick/IContainerServices";
import { IDomElement } from "../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import { LivePreviewManager } from "./src/managers/LivePreviewManager";
declare type PlateauUIOptions = {
    corsEnabled?: boolean;
    filePathsForSettings?: {
        settingsFilePath?: string;
        componentListFilePath?: string;
        containerServicesFilePath?: string;
    };
    fileContentsForSettings?: {
        settingsFileContent?: any;
        componentListFileContent?: any;
        containerServicesFileContent?: IContainerServices;
    };
};
declare class PlateauUI {
    private container;
    private renderer;
    mountPoint: HTMLElement;
    constructor(container: WebsdkContainer, renderer: IRenderer, mountPoint: IDomElement);
    open(qjsonPath?: string, args?: Record<string, any>): void;
    show(): void;
    hide(): void;
    close(): void;
    trigger({ eventName, parameters }: {
        eventName: string;
        parameters: Record<string, any>;
    }): any;
}
declare class WebsdkContainer {
    private webSDKInstance?;
    private webSDKSettings?;
    private webSDKConfiguration?;
    mountPoint?: IDomElement;
    private PlateauIAM;
    private PlateauUIOptions;
    lpManager?: LivePreviewManager;
    constructor();
    init({ PlateauUIOptions }: {
        PlateauUIOptions?: PlateauUIOptions;
    }): Promise<void>;
    createRenderer({ mountPoint }: {
        mountPoint: HTMLElement;
    }): PlateauUI;
    open({ renderer, qjsonPath, args }: {
        renderer: IRenderer;
        qjsonPath?: string;
        args?: Record<string, any>;
    }): Promise<void>;
    private setSDKConfig;
    private setSettingsQJsons;
    private LoadJS;
    private LoadQjson;
    private configureLivePreview;
}
declare function init(PlateauUIOptions?: PlateauUIOptions): Promise<void>;
declare function createRenderer({ mountPoint }: {
    mountPoint: IDomElement;
}): PlateauUI;
export { init, createRenderer };
//# sourceMappingURL=websdk.d.ts.map