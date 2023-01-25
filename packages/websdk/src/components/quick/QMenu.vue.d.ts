import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    mini: boolean;
    resultList: ObjectConstructor[];
    innerClass: string;
    containes: boolean;
}, {
    setTheme(): "primaryTheme" | "secondaryTheme" | "successTheme" | "errorTheme" | "warningTheme" | "white--text";
    isIconPathAvaliable(imagePath: any): boolean;
    isImagePathAvaliable(imagePath: any): boolean;
    setPrependIcon(imagePath: any): any;
    childrenSetActiveDefaultAsFalse(list: any): void;
    menuItemsLoop(list: any, clickedItem: any): void;
    isCurrentGroupContainsClickedItem(item: any, clickedItem: any): void;
    clickRow(item: Object, index: Number): void;
    calculatePadding(index: number, item: any): Number;
    updateMini(): void;
    onClickGroup(): void;
}, unknown, {
    activeColor: string;
    width: string;
    miniVariantWidth: string;
    menuData: any;
    collapseOnItemSelect: boolean;
    hideMenuTitle: boolean;
    fixed: boolean;
    color: string;
    autoCollapse: boolean;
    title: string;
    showOnlyIcon: boolean;
}>;
export default _default;
//# sourceMappingURL=QMenu.vue.d.ts.map