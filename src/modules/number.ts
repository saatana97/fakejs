/**
 * 生成范围内随机整数，包含最小值和最大值，参数不固定顺序
 * @param min 最小值
 * @param max 最大值
 * @returns 范围内随机整数
 */
const fn = (min: number, max: number): number => {
    return Math.round(Math.random() * Math.abs(max - min) + Math.min(min, max));
};
export default fn;
