import { number } from "..";

/**
 * 生成指定尺寸随机颜色图片，目前仅支持浏览器环境
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
    const cvs = document.createElement("canvas");
    cvs.width = width;
    cvs.height = height;
    const ctx = cvs.getContext("2d");
    if (typeof color === "undefined") {
        color = number(0, 0xffffff);
    }
    if (ctx) {
        ctx.fillStyle = "#" + new Number(color).toString(16);
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#" + new Number(0xffffff - color).toString(16);
        const text = `${width} × ${height}`;
        const fontSize = Math.min((width / text.length) * 1.5, height * 0.8);
        ctx.textAlign = "center";
        ctx.font = fontSize + "px 黑体";
        ctx.fillText(text, width / 2, height / 2);
    }
    return cvs.toDataURL();
};
export default fn;
