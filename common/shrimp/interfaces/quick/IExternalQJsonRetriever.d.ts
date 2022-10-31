import { INamedCompModel } from "./INamedCompModel";
export interface IExternalQJsonRetriever {
    getQjson: (qjsonPath: string) => Promise<string | undefined | false>;
    getNamedCompModel(compPath: string): Promise<INamedCompModel | undefined>;
    qjsonHandling?: {
        value: string;
        type: "prefix";
    };
}
//# sourceMappingURL=IExternalQJsonRetriever.d.ts.map