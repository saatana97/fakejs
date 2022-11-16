import number from "./number";

/**
 * 生成数组的随机下标
 * @param arr 数组
 * @returns 随机下标，空数组或不是数组返回-1
 */
const fn = (arr: unknown[]): number => {
    return arr instanceof Array && arr.length ? number(0, arr.length - 1) : -1;
};
export default fn;
