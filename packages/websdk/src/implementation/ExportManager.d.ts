export declare class ExportManager {
    fileName: string;
    items: Array<object>;
    headers: Array<object>;
    sheetName?: string;
    constructor({ fileName, items, headers, sheetName }: {
        fileName: string;
        items: Array<object>;
        headers: Array<object>;
        sheetName?: string;
    });
    private getItemValue;
    exportToXlsx(): void;
    fitToColumn(items: Object): any;
}
//# sourceMappingURL=ExportManager.d.ts.map