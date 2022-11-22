import { Download } from "../../../shrimp/helpers/download";
import { IDownloadRequest } from "../../../shrimp/interfaces/NetworkInterfaces/IRequest";
export declare class DownloadManager {
    generalDownload: Download;
    RequestHandler(request: IDownloadRequest): void;
    extractFileNameFromHeader(headers: Object): string | null;
    download(data: any, fileName: String): any;
}
//# sourceMappingURL=DownloadManager.d.ts.map