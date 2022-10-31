export interface ISettingsYaml {
    urlprefix?: string;
    csspath?: Array<string> | Record<string, Array<string>>;
    rootqjson?: string;
    alertqjson?: string;
    loadingqjson?: string;
    DomainModuleList?: Record<string, string>;
    RegionalDefinition?: IRegionalDefinition;
    qjsonDirectPath?: boolean;
    pipelineqjson?: string;
    backendInf?: {
        iam?: {
            active: boolean;
            options?: any;
        };
    };
    title?: string;
    favicon?: string;
}
export interface IRegionalDefinition {
    region: string;
    FormattingDefinition: IFormattingDefinition;
    length: any;
    filter: any;
    devExLocaleCDNAddress?: string;
}
export interface IFormattingDefinition {
    groupSeperator: IFormattingGroupSeperatorValue;
    radixPoint: IFormattingRadixPointValue;
    digits: IFormattingDigitValue;
    enforceDigitsOnBlur: IFormattingEnforceDigitsOnBlurValue;
    longDateFormat: IFormattingValue;
    shortDateFormat: IFormattingValue;
    longTimeFormat: IFormattingValue;
    shortTimeFormat: IFormattingValue;
    moneyFormat: IFormattingValue;
    serviceDateFormat: IFormattingValue;
    displayDateFormat: IFormattingValue;
}
export interface IFormattingValue {
    overwrite: boolean;
    value: string;
}
export interface IFormattingGroupSeperatorValue extends IFormattingValue {
}
export interface IFormattingRadixPointValue extends IFormattingValue {
}
export interface IFormattingDigitValue extends IFormattingValue {
}
export interface IFormattingEnforceDigitsOnBlurValue extends IFormattingValue {
}
//# sourceMappingURL=ISettingsYaml.d.ts.map