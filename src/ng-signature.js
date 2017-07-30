/**
 * Created by Code1912 on 2017/7/30.
 */
(function (angular) {
    angular.module('app').directive('ngSignature',function ($timeout) {
        return {
            restrict: 'A',
            replace: true,
            scope : {
                ngSignature : '=',
                onLoad:'&',
                signatureData:'=',
                sColor:'@',
                sWidth:'@',
                sHeight:'@',
                sWidth:'@',
                sBackgroundColor:'@',
                sLineWidth:'@'
            },
            link : function(scope, element, attrs) {
                var $sigdiv = $(element).jSignature(getSetting(scope));
                $sigdiv.jSignature("reset") ;

                $sigdiv.bind('change',function (e) {
                    $timeout(function () {
                        scope.signatureData=$sigdiv.jSignature('getData', 'default');
                    })

                });

                if(scope.signatureData ){
                    $sigdiv.jSignature("setData",  scope.signatureData)
                }

                scope.ngSignature = {
                    reset:function () {
                        $sigdiv.jSignature("reset")
                    },
                    getDefaultData:function () {
                      return   $sigdiv.jSignature('getData', 'default')
                    }
                };
                if(scope.onLoad){
                    $timeout(scope.onLoad)
                }
            }
        };
    });

    function getSetting(scope) {
        var propMap={
            'sWidth':'width',
            'sHeight':'height',
            'sColor':'color',
            'sBackgroundColor':'background-color',
            'sLineWidth':'lineWidth'};
        var setting = {};

         for(var key in propMap){
             if(scope[key]){
                 setting[propMap[key]]=scope[key];
             }
         }
        return  setting;
    }
})(window.angular);