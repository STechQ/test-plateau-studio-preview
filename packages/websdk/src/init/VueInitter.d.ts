import "@mdi/font/css/materialdesignicons.css";
import { IDomElement } from "../../../../common/shrimp/interfaces/RenderingInterfaces/IDomElement";
import Vue from 'vue';
import "vuetify/dist/vuetify.min.css";
export declare class VueInitter {
    static postProcess(renderer: any): void;
    static GenerateRootInstance({ mountPoint }: {
        mountPoint: IDomElement;
    }): Vue;
}
//# sourceMappingURL=VueInitter.d.ts.map