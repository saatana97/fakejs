import item from "./item";
import number from "./number";
/**
 * 生成随机手机号码
 * @param segment 指定号段
 * @returns 随机手机号码
 */
const fn = (segment?: string): string => {
    let res = segment || "1";
    if (!res || res.length < 3) {
        const data = [
            [3, 4, 5, 6, 7, 8, 9],
            [3, 4, 5, 6, 7, 8, 9],
            [],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [5, 6, 7],
            [0, 1, 2, 3, 5, 6, 7, 8, 9],
            [2, 5, 6, 7],
            [1, 2, 3, 4, 5, 6, 7, 8],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 3, 5, 6, 7, 8, 9],
        ];
        let secend = +res.charAt(1);
        if (!data[0].includes(secend)) {
            secend = item(data[0]);
        }
        if (res.length === 1) {
            res += secend;
        }
        res += item(data[secend]);
    }
    while (res.length < 11) {
        res += number(0, 9);
    }
    return res;
};
export default fn;
