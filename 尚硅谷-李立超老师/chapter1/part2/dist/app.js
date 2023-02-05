System.register(["./modules"], function (exports_1, context_1) {
    "use strict";
    var modules_1, a, b;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (modules_1_1) {
                modules_1 = modules_1_1;
            }
        ],
        execute: function () {
            console.log('星爷');
            a = '周星星同学';
            b = 17;
            console.log(modules_1.hi);
        }
    };
});
