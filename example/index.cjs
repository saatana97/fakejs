const R = require("../dist/fakejs.umd.cjs");
console.info("nickname", R.nickname());
console.info("word", R.word({ length: 1000, number: true, repeatable: false }));
console.info("image", R.image());
