#angular 1 sigunture

##use example
   <div on-load="onLoad()" s-width="600" s-height="500" s-color="red" s-line-width="6" ng-signature="signature" signature-data="signatureData"  ></div>
   Props:      sColor:'@',
               sWidth:'@',
               sHeight:'@',
               sWidth:'@',
               sBackgroundColor:'@',
               sLineWidth:'@'
               ngSignature : '=',  //signature object ,has function:reset(),getDefaultData().
               signatureData:'=',  //signature text data, like  ："data:image/png;base64,iVBORw0KGgo......"
   Event:onLoad