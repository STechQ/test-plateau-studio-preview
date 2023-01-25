import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    show: boolean;
    loadedRatio: number;
    numPages: number;
    turn: number;
    showToolbar: boolean;
}, {
    createPdf(): void;
    getType(): any;
    onFrameScrollBottom(): void;
    handleScroll({ target: { scrollTop, clientHeight, scrollHeight } }: {
        target: {
            scrollTop: any;
            clientHeight: any;
            scrollHeight: any;
        };
    }): void;
}, unknown, {
    src: any;
    height: string;
    width: string;
    page: number;
    scale: string;
    showToolBar: boolean;
    loadingContent: string;
}>;
export default _default;
//# sourceMappingURL=QDocumentViewer.vue.d.ts.map