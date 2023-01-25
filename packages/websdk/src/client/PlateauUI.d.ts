declare type PlateauUIOptions = {
    corsEnabled: boolean;
};
export declare let load: () => void;
export declare let open: (url: string, args: Record<string, any>) => string;
export declare let trigger: (eventName: string, parameters: any, pageID: string) => any;
export declare let close: (id: string) => void;
export declare let show: (id: string) => void;
export declare let hide: () => void;
export declare let reset: () => void;
export declare let setOptions: (options: PlateauUIOptions) => void;
export declare let setContainerServices: (containerServices: Object) => void;
export {};
//# sourceMappingURL=PlateauUI.d.ts.map