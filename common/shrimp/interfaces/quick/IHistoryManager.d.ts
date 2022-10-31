import { INavigationDemand, INavigationDemandType } from "./INavigationDemand";
export interface IHistoryManager {
    checkIfHistoryExist(options: INavigationDemand): boolean;
    hasHistory(pageId: string, navigationDemandType?: INavigationDemandType): INavigationDemand | null;
    searchTargetHistoryManager({ pageId }: {
        pageId: string;
    }): {
        ownerHistoryManager: IHistoryManager;
        pageId: string;
    } | null;
    getNavDemand(pageId: string): INavigationDemand | null;
    Back(options: INavigationDemand): void;
    Forward(options: INavigationDemand): void;
}
//# sourceMappingURL=IHistoryManager.d.ts.map