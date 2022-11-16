import { surnname } from "./nickname";
class Random {
    /**
     * 返回范围内随机整数，包含最小值和最大值，参数不固定顺序
     * @param min 最小值
     * @param max 最大值
     * @returns 范围内随机整数
     */
    static number(min: number, max: number): number {
        return Math.round(
            Math.random() * Math.abs(max - min) + Math.min(min, max)
        );
    }
    /**
     * 返回数组的随机下标
     * @param arr 数组
     * @returns 随机下标，空数组或不是数组返回-1
     */
    static index(arr: unknown[]): number {
        return arr instanceof Array && arr.length
            ? this.number(0, arr.length - 1)
            : -1;
    }
    /**
     * 返回数组的随机元素
     * @param arr 数组
     * @returns 随机元素
     */
    static item<T>(arr: T[]): T {
        return arr?.[this.index(arr)];
    }
    /**
     * 返回随机中文
     */
    static chinese(): string {
        let str = "\\u" + new Number(this.number(19968, 40869)).toString(16);
        str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) {
            return String.fromCharCode(
                parseInt(escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16)
            );
        });
        str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
            return String.fromCharCode(
                parseInt(
                    escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"),
                    16
                )
            );
        });
        str = str.replace(/(&#)(\d{1,6});/gi, function ($0) {
            return String.fromCharCode(
                parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))
            );
        });

        return str;
    }
    /**
     * 返回随机姓名
     * @returns 随机姓名
     */
    static nickname() {
        let res = this.item(surnname);
        for (let i = 0; i < this.number(1, 2); i++) {
            res += this.chinese();
        }
        return res;
    }
    /**
     * 返回指定长度随机字符串
     * @param config 可选设置
     * @returns 随机字符串
     */
    static word(config?: {
        length: number;
        number: boolean;
        lower: boolean;
        power: boolean;
        repeatable: boolean;
        ext: string[];
    }): string {
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
            const word = this.item(arr);
            if (
                config.repeatable ||
                arr.length < config.length ||
                !res.includes(word)
            ) {
                res += word;
            }
        }
        return res;
    }
}
Random.word();
export { Random as default };
