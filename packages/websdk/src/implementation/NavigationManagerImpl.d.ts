import { IRendererConfig } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IRendererConfig";
import { INavigationManager } from "../../../../common/qshell";
import { IUrlOptions } from "../../../../common/shrimp/interfaces/quick/IUrl";
export declare class NavigationManagerImpl implements INavigationManager {
    contextName: string;
    go: (undefined | (({ url }: {
        url: any;
    }) => any));
    constructor({ contextName, config }: {
        contextName: string;
        config?: IRendererConfig;
    });
    createFunctions(config: IRendererConfig): void;
    getUrl(options: any): string;
    backOverride(): void;
    redirectFunc({ url }: {
        url: string;
    }): void;
    redirect({ url, options }: {
        url: string;
        options?: IUrlOptions;
    }): void;
}
//# sourceMappingURL=NavigationManagerImpl.d.ts.map