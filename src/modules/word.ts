import item from "./item";

/**
 * 生成指定长度随机字符串
 * @param config 可选设置
 * @returns 随机字符串
 */
const fn = (config?: {
    length?: number;
    number?: boolean;
    lower?: boolean;
    power?: boolean;
    repeatable?: boolean;
    ext?: string[];
}): string => {
    config = Object.assign(
        {
            length: 1,
            number: false,
            lower: true,
            power: true,
            repeatable: true,
            ext: [],
        },
        config
    );
    let res = "";
    const arr = [
        ...(config.number ? "0123456789".split("") : []),
        ...(config.lower ? "qwertyuiopasdfghjklzxcvbnm".split("") : []),
        ...(config.power ? "QWERTYUIOPASDFGHJKLZXCVBNM".split("") : []),
        ...(config.ext || []),
    ];
    while (res.length === config.length) {
        const word = item(arr);
        if (
            config.repeatable ||
            arr.length < config.length ||
            !res.includes(word)
        ) {
            res += word;
        }
    }
    return res;
};
export default fn;
