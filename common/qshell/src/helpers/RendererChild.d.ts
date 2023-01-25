import { IQJSon } from "../../../shrimp/interfaces/ComponentInterfaces/IQJson";
import { PartialDisplayHookCb } from "../../../shrimp/interfaces/RenderingInterfaces/IDory";
import { IRendererChild } from "../../../shrimp/interfaces/RenderingInterfaces/IRenderer";
import { Renderer } from "./Renderer";
export declare class RendererChild implements IRendererChild {
    private doryJr;
    constructor(renderer: Renderer, compUIDPrefix?: string);
    SetCallbackDisplay(callBackFunc: PartialDisplayHookCb): void;
    Render(options: {
        qjson: IQJSon;
        props?: Record<string, any>;
        events?: Record<string, Function>;
        compParentInst: any;
        storeItems?: Record<string, any>;
        pageId?: string;
        pageName?: string;
    }): Promise<void>;
}
//# sourceMappingURL=RendererChild.d.ts.map