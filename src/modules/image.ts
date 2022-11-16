import { number } from "..";

/**
 * 生成指定尺寸随机颜色图片
 * @param width 图片宽度
 * @param height 图片年高度
 * @param color 指定图片颜色
 * @returns 图片数据
 */
const fn = (
    width: number = 100,
    height: number = 100,
    color?: number
): string => {
    if (!global.document) {
        throw new Error("目前仅支持在浏览器环境中生成图片");
    }
    const cvs = document.createElement("canvas");
    cvs.width = width;
    cvs.height = height;
    const ctx = cvs.getContext("2d");
    if (typeof color === "undefined") {
        color = number(0, 0xfff);
    }
    if (ctx) {
        ctx.fillStyle = color + "";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 0xfff - color + "";
        const text = `${width} × ${height}`;
        const fontSize = Math.min((width / text.length) * 0.5, height * 0.8);
        ctx.font = fontSize + "px";
        ctx.fillText(
            text,
            (width - fontSize * text.length) / 2,
            (height - fontSize) / 2
        );
    }
    return cvs.toDataURL();
};
export default fn;
