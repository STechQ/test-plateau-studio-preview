import { IComponent } from "../../../../../common/shrimp/interfaces/ComponentInterfaces/IComponent";
import { CompGroupType } from "../../../../../common/shrimp/interfaces/quick/IWebSDK";
export interface ComponentTarget {
    compInstance: Function | any;
    CompType?: CompGroupType;
}
export declare class ComponentProvider {
    static fetchLibrary: (libraryName: string) => any;
    static getComponentList: (companyLibraryGroup: Array<CompGroupType>) => Record<CompGroupType, any>;
    static getComponentProps: (companyLibraryGroup: string, name: any) => any;
    static getComponentEvents: (companyLibraryGroup: string, name: any) => any;
    static getLibrary(companyLibraryGroup: string): any;
    static editorcompList: {
        Messaging: number;
        QTimer: number;
        QIdleTimer: number;
    };
    static getComponentConst: (name: any) => {
        compInstance: any;
        CompType: string;
    } | undefined;
    static checkComponents: (name: string) => Boolean;
    static overrideComp: (compName: string) => (IComponent | null) | undefined;
    static setOverrideComp(cb: (compName: string) => IComponent | null): void;
    static retrieveComponentLibraryName(name: any): string | undefined;
}
//# sourceMappingURL=ComponentProviderPlateauUI.d.ts.map