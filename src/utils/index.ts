export const bufferToImage = (buffer: Buffer): string => {
    let arrayBufferView = new Uint8Array(buffer);
    let blob = new Blob([arrayBufferView], { type: "image/jpeg" });
    let urlCreator = window.URL;
    return urlCreator.createObjectURL(blob);
}