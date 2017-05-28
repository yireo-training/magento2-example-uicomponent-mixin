define(function () {
    'use strict';

    var mixin = {
        getTemplate: function () {
            var template = this._super();
            console.log('Yireo_ExampleUiComponentMixin: ' + template);
            return template;
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});