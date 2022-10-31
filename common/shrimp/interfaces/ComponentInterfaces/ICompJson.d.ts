import { IDictionary } from "../IDictionary";
import { ScriptLang } from "../Scripting/scriptLang";
export interface IEditorJson {
    eID: string;
}
export interface IEventJson {
    /**
     * event parameters. ex: QS -> x,y,z | TS -> x:string,y:any,z:{a:number}
     */
    P?: string;
    /**
     * event handler
     */
    H: string;
    /**
     * Handler File. TS 2.0
     */
    HF?: string;
    /**
     * event is immediate
     */
    I?: boolean;
    /**
     * event is custom
     */
    C?: boolean;
    /**
     * event is property event
     */
    PE?: boolean;
    /**
     * event postrender trigger order
     */
    TO?: number;
    /**
     * External visible. Accessible from external QJson, or Page
     */
    EV?: boolean;
    /**
     * Handler language. Should default to QS
     */
    HL?: ScriptLang;
    /**
     * Source Map for debug purposses
     */
    SM?: string;
}
export interface IPropJson {
    [key: string]: IPropertyJson | undefined;
    ID: IDefinedPropertyJson;
    Render?: IDefinedPropertyJson;
    DiscardSettings?: IDefinedPropertyJson;
    class?: IDefinedPropertyJson;
}
export declare enum PType {
    class = "class",
    text = "text",
    prop = "prop",
    attr = "attr"
}
export interface IDefinedPropertyJson extends IPropertyJson {
    H: string;
}
export interface IPropertyJson {
    H: string | object;
    T: PTyped;
    DE?: boolean;
    /**
     * Handler File. TS 2.0
     */
    HF?: string;
}
export declare type PTyped = PType | "class" | "text" | "prop" | "attr";
/**
 * C type of component
 */
export declare enum CType {
    /**
     * Normal child type
     */
    child = "child",
    /**
     * Slot type
     */
    slot = "slot",
    /**
     * Callback typed child creator function -> scopedSlotCreatorFunc
     */
    scopedSlot = "scopedSlot"
}
export interface IOptJson {
    cType?: CTyped;
    dynProps?: boolean;
    /**
     * Component language. Should default to QS
     */
    CL?: ScriptLang;
    forceUpdateAfterPropertySetting?: boolean;
    compDomClasses?: string;
    layout?: ILayoutJson;
}
export declare type CTyped = CType | "child" | "slot" | "scopedSlot";
export interface IChildJson {
    cType: CTyped;
    c: Array<ICompJson>;
}
export interface IDirectiveJson {
    H: string;
    L: string;
    P?: string;
    HL?: ScriptLang;
}
export interface ICompJson {
    T: string;
    CP?: string;
    P: IPropJson;
    E: IDictionary<IEventJson>;
    C: IDictionary<IChildJson>;
    D?: Record<string, Record<string, IDirectiveJson>>;
    O?: IOptJson;
    _Editor: IEditorJson;
}
export interface ILayoutJson {
    dOpt: IDictionary<Array<string>>;
    class: string;
}
//# sourceMappingURL=ICompJson.d.ts.map