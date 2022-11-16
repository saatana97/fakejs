import index from "./index";
/**
 * 生成数组的随机元素
 * @param arr 数组
 * @returns 随机元素
 */
const fn = <T>(arr: T[]): T => {
    return arr?.[index(arr)];
};
export default fn;
