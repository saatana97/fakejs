import number from "./number";

/**
 * 生成随机中文
 * @returns 随机中文
 */
const fn = (): string => {
    let str = "\\u" + new Number(number(19968, 40869)).toString(16);
    str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) {
        return String.fromCharCode(
            parseInt(escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16)
        );
    });
    str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
        return String.fromCharCode(
            parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16)
        );
    });
    str = str.replace(/(&#)(\d{1,6});/gi, function ($0) {
        return String.fromCharCode(
            parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2"))
        );
    });

    return str;
};
export default fn;
