import item from "./item";
import { SexMode } from "../utils/enums";
/**
 * 生成随机性别
 * @param mode 模式：0中文，1数值，2对象
 * @param ext 扩展性别
 * @returns 随机性别
 */
const fn = <
    T extends string | number | { label: string; value: string | number }
>(
    mode: SexMode = SexMode.LABEL,
    ext?: T[]
): T => {
    const arr = [
        ["男", "女"],
        [1, 0],
        [
            {
                label: "男",
                value: 1,
            },
            {
                label: "女",
                value: 0,
            },
        ],
    ];
    return item([...(arr[mode % arr.length] as T[]), ...(ext || [])]);
};
export default fn;
