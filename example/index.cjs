const R = require("../dist/fakejs.umd.cjs");
console.info(R);
console.info("nickname", R.nickname());
console.info("word", R.word({ length: 1000, number: true, repeatable: false }));
console.info("sex", R.sex(R.enums.SexMode.OBJECT));
console.info("phone", R.phone(), R.phone("1"), R.phone("132"));
