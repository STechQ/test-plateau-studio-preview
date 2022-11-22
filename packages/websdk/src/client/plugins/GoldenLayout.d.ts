import GoldenLayout from "golden-layout";
declare const libraryComponents: {
    GoldenLayout: import("vue/types/vue").ExtendedVue<import("vue").default, {
        config: {
            settings: {
                showPopoutIcon: boolean;
                selectionEnabled: boolean;
            };
            dimensions: {};
            content: {
                type: string;
                id: string;
                content: {
                    type: string;
                    componentName: string;
                    title: string;
                    componentState: {
                        id: string;
                        text: string;
                        class: string;
                    };
                }[];
            }[];
        };
        getGoldenLayout: () => GoldenLayout;
        getContentItems: () => any[];
        getComponentInCreation: () => import("../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection;
        componentCb: () => import("../../common/shrimp/interfaces/ComponentInterfaces/IComponentCollection").IComponentCollection;
        StateChangedForDesign: boolean;
        closedPanes: never[];
        containerWidth: number;
        containerHeight: number;
        childWindows: never[];
    }, {
        getClosedPanes(): never[];
        getConfig(): any;
        setConfig(val: GoldenLayout.Config): void;
        findContentItem(paneName: string): any;
        changeTitle(childName: string, newTitle: string): void;
        removePane(paneName: string): void;
        addItem({ childName, config }: {
            childName?: string | undefined;
            config?: GoldenLayout.ContentItem | GoldenLayout.ItemConfigType | undefined;
        }): any;
        goldenLayoutInit(stateChangedForDesign: boolean): void;
        removeItem(deletedChildNames: string[]): void;
        customChildAppender({ childName, createdComps }: {
            childName: string;
            createdComps: import("../../common/shrimp/interfaces/RenderingInterfaces/IDomElement").IDomElement[];
        }): void;
        appendDomElements(container: any, componentConfig: any): void;
        onStackClose(stack: any): void;
        resizeObserver(): void;
        closeChildWindows(): void;
    }, unknown, {
        _renderingProps: {
            context: () => import("../../common/shrimp/context").ContextManager;
            isEditMode: boolean;
        };
        width: string;
        height: string;
        glConfig: any;
        childNames: unknown[];
        dimensions: any;
    }>;
};
export { libraryComponents };
//# sourceMappingURL=GoldenLayout.d.ts.map