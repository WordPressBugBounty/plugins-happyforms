!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=g(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),c=v(c,f=g(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),c=m(c,f=v(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function i(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function a(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return i(c(a(n=r(n)),8*n.length))}function u(n,t){return function(n,t){var r,e=a(n),o=[],u=[];for(o[15]=u[15]=void 0,16<e.length&&(e=c(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],u[r]=1549556828^e[r];return t=c(o.concat(a(t)),512+8*t.length),i(c(u.concat(t),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Cleave=t():e.Cleave=t()}(this,function(){return e=[function(e,t,r){!function(t){"use strict";function i(e,t){var r=this,n=!1;if("string"==typeof e?(r.element=document.querySelector(e),n=1<document.querySelectorAll(e).length):void 0!==e.length&&0<e.length?(r.element=e[0],n=1<e.length):r.element=e,!r.element)throw new Error("[cleave.js] Please check the element");if(n)try{console.warn("[cleave.js] Multiple input fields matched, cleave.js will only take the first one.")}catch(a){}t.initValue=r.element.value,r.properties=i.DefaultProperties.assign({},t),r.init()}i.prototype={init:function(){var e=this,t=e.properties;return t.numeral||t.phone||t.creditCard||t.time||t.date||0!==t.blocksLength||t.prefix?(t.maxLength=i.Util.getMaxLength(t.blocks),e.isAndroid=i.Util.isAndroid(),e.lastInputValue="",e.isBackward="",e.onChangeListener=e.onChange.bind(e),e.onKeyDownListener=e.onKeyDown.bind(e),e.onFocusListener=e.onFocus.bind(e),e.onCutListener=e.onCut.bind(e),e.onCopyListener=e.onCopy.bind(e),e.initSwapHiddenInput(),e.element.addEventListener("input",e.onChangeListener),e.element.addEventListener("keydown",e.onKeyDownListener),e.element.addEventListener("focus",e.onFocusListener),e.element.addEventListener("cut",e.onCutListener),e.element.addEventListener("copy",e.onCopyListener),e.initPhoneFormatter(),e.initDateFormatter(),e.initTimeFormatter(),e.initNumeralFormatter(),void((t.initValue||t.prefix&&!t.noImmediatePrefix)&&e.onInput(t.initValue))):void e.onInput(t.initValue)},initSwapHiddenInput:function(){var r,e=this;e.properties.swapHiddenInput&&(r=e.element.cloneNode(!0),e.element.parentNode.insertBefore(r,e.element),e.elementSwapHidden=e.element,e.elementSwapHidden.type="hidden",e.element=r,e.element.id="")},initNumeralFormatter:function(){var t=this.properties;t.numeral&&(t.numeralFormatter=new i.NumeralFormatter(t.numeralDecimalMark,t.numeralIntegerScale,t.numeralDecimalScale,t.numeralThousandsGroupStyle,t.numeralPositiveOnly,t.stripLeadingZeroes,t.prefix,t.signBeforePrefix,t.tailPrefix,t.delimiter))},initTimeFormatter:function(){var t=this.properties;t.time&&(t.timeFormatter=new i.TimeFormatter(t.timePattern,t.timeFormat),t.blocks=t.timeFormatter.getBlocks(),t.blocksLength=t.blocks.length,t.maxLength=i.Util.getMaxLength(t.blocks))},initDateFormatter:function(){var t=this.properties;t.date&&(t.dateFormatter=new i.DateFormatter(t.datePattern,t.dateMin,t.dateMax),t.blocks=t.dateFormatter.getBlocks(),t.blocksLength=t.blocks.length,t.maxLength=i.Util.getMaxLength(t.blocks))},initPhoneFormatter:function(){var t=this.properties;if(t.phone)try{t.phoneFormatter=new i.PhoneFormatter(new t.root.Cleave.AsYouTypeFormatter(t.phoneRegionCode),t.delimiter)}catch(r){throw new Error("[cleave.js] Please include phone-type-formatter.{country}.js lib")}},onKeyDown:function(e){var t=this,e=e.which||e.keyCode;t.lastInputValue=t.element.value,t.isBackward=8===e},onChange:function(e){var t=this,r=t.properties,n=i.Util,e=(t.isBackward=t.isBackward||"deleteContentBackward"===e.inputType,n.getPostDelimiter(t.lastInputValue,r.delimiter,r.delimiters));t.isBackward&&e?r.postDelimiterBackspace=e:r.postDelimiterBackspace=!1,this.onInput(this.element.value)},onFocus:function(){var e=this,t=e.properties;e.lastInputValue=e.element.value,t.prefix&&t.noImmediatePrefix&&!e.element.value&&this.onInput(t.prefix),i.Util.fixPrefixCursor(e.element,t.prefix,t.delimiter,t.delimiters)},onCut:function(e){i.Util.checkFullSelection(this.element.value)&&(this.copyClipboardData(e),this.onInput(""))},onCopy:function(e){i.Util.checkFullSelection(this.element.value)&&this.copyClipboardData(e)},copyClipboardData:function(e){var r=this.properties,n=i.Util,a=this.element.value,n=r.copyDelimiter?a:n.stripDelimiters(a,r.delimiter,r.delimiters);try{(e.clipboardData?e:window).clipboardData.setData("Text",n),e.preventDefault()}catch(l){}},onInput:function(e){var t=this,r=t.properties,n=i.Util,a=n.getPostDelimiter(e,r.delimiter,r.delimiters);r.numeral||!r.postDelimiterBackspace||a||(e=n.headStr(e,e.length-r.postDelimiterBackspace.length)),r.phone?!r.prefix||r.noImmediatePrefix&&!e.length?r.result=r.phoneFormatter.format(e):r.result=r.prefix+r.phoneFormatter.format(e).slice(r.prefix.length):r.numeral?r.prefix&&r.noImmediatePrefix&&0===e.length?r.result="":r.result=r.numeralFormatter.format(e):(r.date&&(e=r.dateFormatter.getValidatedDate(e)),r.time&&(e=r.timeFormatter.getValidatedTime(e)),e=n.stripDelimiters(e,r.delimiter,r.delimiters),e=n.getPrefixStrippedValue(e,r.prefix,r.prefixLength,r.result,r.delimiter,r.delimiters,r.noImmediatePrefix,r.tailPrefix,r.signBeforePrefix),e=r.numericOnly?n.strip(e,/[^\d]/g):e,e=r.uppercase?e.toUpperCase():e,e=r.lowercase?e.toLowerCase():e,r.prefix&&(r.tailPrefix?e+=r.prefix:e=r.prefix+e,0===r.blocksLength)?r.result=e:(r.creditCard&&t.updateCreditCardPropsByValue(e),e=n.headStr(e,r.maxLength),r.result=n.getFormattedValue(e,r.blocks,r.blocksLength,r.delimiter,r.delimiters,r.delimiterLazyShow))),t.updateValueState()},updateCreditCardPropsByValue:function(e){var n=this.properties,a=i.Util;a.headStr(n.result,4)!==a.headStr(e,4)&&(e=i.CreditCardDetector.getInfo(e,n.creditCardStrictMode),n.blocks=e.blocks,n.blocksLength=n.blocks.length,n.maxLength=a.getMaxLength(n.blocks),n.creditCardType!==e.type)&&(n.creditCardType=e.type,n.onCreditCardTypeChanged.call(this,n.creditCardType))},updateValueState:function(){var n,a,o,e=this,t=i.Util,r=e.properties;e.element&&(n=e.element.selectionEnd,a=e.element.value,o=r.result,n=t.getNextCursorPosition(n,a,o,r.delimiter,r.delimiters),e.isAndroid?window.setTimeout(function(){e.element.value=o,t.setSelection(e.element,n,r.document,!1),e.callOnValueChanged()},1):(e.element.value=o,r.swapHiddenInput&&(e.elementSwapHidden.value=e.getRawValue()),t.setSelection(e.element,n,r.document,!1),e.callOnValueChanged()))},callOnValueChanged:function(){var e=this,t=e.properties;t.onValueChanged.call(e,{target:{name:e.element.name,value:t.result,rawValue:e.getRawValue()}})},setPhoneRegionCode:function(e){var t=this;t.properties.phoneRegionCode=e,t.initPhoneFormatter(),t.onChange()},setRawValue:function(e){var t=this,r=t.properties;e=null!=e?e.toString():"",r.numeral&&(e=e.replace(".",r.numeralDecimalMark)),r.postDelimiterBackspace=!1,t.element.value=e,t.onInput(e)},getRawValue:function(){var t=this.properties,r=i.Util,n=this.element.value;return t.rawValueTrimPrefix&&(n=r.getPrefixStrippedValue(n,t.prefix,t.prefixLength,t.result,t.delimiter,t.delimiters,t.noImmediatePrefix,t.tailPrefix,t.signBeforePrefix)),t.numeral?t.numeralFormatter.getRawValue(n):r.stripDelimiters(n,t.delimiter,t.delimiters)},getISOFormatDate:function(){var t=this.properties;return t.date?t.dateFormatter.getISOFormatDate():""},getISOFormatTime:function(){var t=this.properties;return t.time?t.timeFormatter.getISOFormatTime():""},getFormattedValue:function(){return this.element.value},destroy:function(){var e=this;e.element.removeEventListener("input",e.onChangeListener),e.element.removeEventListener("keydown",e.onKeyDownListener),e.element.removeEventListener("focus",e.onFocusListener),e.element.removeEventListener("cut",e.onCutListener),e.element.removeEventListener("copy",e.onCopyListener)},toString:function(){return"[Cleave Object]"}},i.NumeralFormatter=r(1),i.DateFormatter=r(2),i.TimeFormatter=r(3),i.PhoneFormatter=r(4),i.CreditCardDetector=r(5),i.Util=r(6),i.DefaultProperties=r(7),("object"==typeof t&&t?t:window).Cleave=i,e.exports=i}.call(t,function(){return this}())},function(e,t){"use strict";function r(e,t,i,n,a,o,l,s,c,u){var d=this;d.numeralDecimalMark=e||".",d.numeralIntegerScale=0<t?t:0,d.numeralDecimalScale=0<=i?i:2,d.numeralThousandsGroupStyle=n||r.groupStyle.thousand,d.numeralPositiveOnly=!!a,d.stripLeadingZeroes=!1!==o,d.prefix=l||""===l?l:"",d.signBeforePrefix=!!s,d.tailPrefix=!!c,d.delimiter=u||""===u?u:",",d.delimiterRE=u?new RegExp("\\"+u,"g"):""}r.groupStyle={thousand:"thousand",lakh:"lakh",wan:"wan",none:"none"},r.prototype={getRawValue:function(e){return e.replace(this.delimiterRE,"").replace(this.numeralDecimalMark,".")},format:function(e){var i,n,a,o=this,l="";switch(e=e.replace(/[A-Za-z]/g,"").replace(o.numeralDecimalMark,"M").replace(/[^\dM-]/g,"").replace(/^\-/,"N").replace(/\-/g,"").replace("N",o.numeralPositiveOnly?"":"-").replace("M",o.numeralDecimalMark),i="-"===(e=o.stripLeadingZeroes?e.replace(/^(-)?0+(?=\d)/,"$1"):e).slice(0,1)?"-":"",n=void 0!==o.prefix?o.signBeforePrefix?i+o.prefix:o.prefix+i:i,0<=(a=e).indexOf(o.numeralDecimalMark)&&(a=(e=e.split(o.numeralDecimalMark))[0],l=o.numeralDecimalMark+e[1].slice(0,o.numeralDecimalScale)),"-"==i&&(a=a.slice(1)),0<o.numeralIntegerScale&&(a=a.slice(0,o.numeralIntegerScale)),o.numeralThousandsGroupStyle){case r.groupStyle.lakh:a=a.replace(/(\d)(?=(\d\d)+\d$)/g,"$1"+o.delimiter);break;case r.groupStyle.wan:a=a.replace(/(\d)(?=(\d{4})+$)/g,"$1"+o.delimiter);break;case r.groupStyle.thousand:a=a.replace(/(\d)(?=(\d{3})+$)/g,"$1"+o.delimiter)}return o.tailPrefix?i+a.toString()+(0<o.numeralDecimalScale?l.toString():"")+o.prefix:n+a.toString()+(0<o.numeralDecimalScale?l.toString():"")}},e.exports=r},function(e,t){"use strict";function r(e,t,r){var i=this;i.date=[],i.blocks=[],i.datePattern=e,i.dateMin=t.split("-").reverse().map(function(e){return parseInt(e,10)}),2===i.dateMin.length&&i.dateMin.unshift(0),i.dateMax=r.split("-").reverse().map(function(e){return parseInt(e,10)}),2===i.dateMax.length&&i.dateMax.unshift(0),i.initBlocks()}r.prototype={initBlocks:function(){var e=this;e.datePattern.forEach(function(t){"Y"===t?e.blocks.push(4):e.blocks.push(2)})},getISOFormatDate:function(){var e=this,t=e.date;return t[2]?t[2]+"-"+e.addLeadingZero(t[1])+"-"+e.addLeadingZero(t[0]):""},getBlocks:function(){return this.blocks},getValidatedDate:function(e){var t=this,r="";return e=e.replace(/[^\d]/g,""),t.blocks.forEach(function(i,n){if(0<e.length){var a=e.slice(0,i),o=a.slice(0,1),i=e.slice(i);switch(t.datePattern[n]){case"d":"00"===a?a="01":3<parseInt(o,10)?a="0"+o:31<parseInt(a,10)&&(a="31");break;case"m":"00"===a?a="01":1<parseInt(o,10)?a="0"+o:12<parseInt(a,10)&&(a="12")}r+=a,e=i}}),this.getFixedDateString(r)},getFixedDateString:function(e){var t,r,i,n=this,a=n.datePattern,o=[],l=0,s=0,c=0,u=0,d=0,m=0,p=!1;return 4===e.length&&"y"!==a[0].toLowerCase()&&"y"!==a[1].toLowerCase()&&(d=2-(u="d"===a[0]?0:2),t=parseInt(e.slice(u,u+2),10),r=parseInt(e.slice(d,d+2),10),o=this.getFixedDate(t,r,0)),8===e.length&&(a.forEach(function(e,t){switch(e){case"d":l=t;break;case"m":s=t;break;default:c=t}}),m=2*c,u=l<=c?2*l:2*l+2,d=s<=c?2*s:2*s+2,t=parseInt(e.slice(u,u+2),10),r=parseInt(e.slice(d,d+2),10),i=parseInt(e.slice(m,m+4),10),p=4===e.slice(m,m+4).length,o=this.getFixedDate(t,r,i)),4!==e.length||"y"!==a[0]&&"y"!==a[1]||(m=2-(d="m"===a[0]?0:2),r=parseInt(e.slice(d,d+2),10),i=parseInt(e.slice(m,m+2),10),p=2===e.slice(m,m+2).length,o=[0,r,i]),6!==e.length||"Y"!==a[0]&&"Y"!==a[1]||(m=2-.5*(d="m"===a[0]?0:4),r=parseInt(e.slice(d,d+2),10),i=parseInt(e.slice(m,m+4),10),p=4===e.slice(m,m+4).length,o=[0,r,i]),o=n.getRangeFixedDate(o),0===(n.date=o).length?e:a.reduce(function(e,t){switch(t){case"d":return e+(0===o[0]?"":n.addLeadingZero(o[0]));case"m":return e+(0===o[1]?"":n.addLeadingZero(o[1]));case"y":return e+(p?n.addLeadingZeroForYear(o[2],!1):"");case"Y":return e+(p?n.addLeadingZeroForYear(o[2],!0):"")}},"")},getRangeFixedDate:function(e){var t=this,r=t.datePattern,i=t.dateMin||[],t=t.dateMax||[];return!e.length||i.length<3&&t.length<3||r.find(function(e){return"y"===e.toLowerCase()})&&0===e[2]?e:t.length&&(t[2]<e[2]||t[2]===e[2]&&(t[1]<e[1]||t[1]===e[1]&&t[0]<e[0]))?t:i.length&&(i[2]>e[2]||i[2]===e[2]&&(i[1]>e[1]||i[1]===e[1]&&i[0]>e[0]))?i:e},getFixedDate:function(e,t,r){return e=Math.min(e,31),t=Math.min(t,12),r=parseInt(r||0,10),[e=t<7&&t%2==0||8<t&&t%2==1?Math.min(e,2===t?this.isLeapYear(r)?29:28:30):e,t,r]},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},addLeadingZero:function(e){return(e<10?"0":"")+e},addLeadingZeroForYear:function(e,t){return t?(e<10?"000":e<100?"00":e<1e3?"0":"")+e:(e<10?"0":"")+e}},e.exports=r},function(e,t){"use strict";function r(e,t){var r=this;r.time=[],r.blocks=[],r.timePattern=e,r.timeFormat=t,r.initBlocks()}r.prototype={initBlocks:function(){var e=this;e.timePattern.forEach(function(){e.blocks.push(2)})},getISOFormatTime:function(){var e=this,t=e.time;return t[2]?e.addLeadingZero(t[0])+":"+e.addLeadingZero(t[1])+":"+e.addLeadingZero(t[2]):""},getBlocks:function(){return this.blocks},getTimeFormatOptions:function(){return"12"===String(this.timeFormat)?{maxHourFirstDigit:1,maxHours:12,maxMinutesFirstDigit:5,maxMinutes:60}:{maxHourFirstDigit:2,maxHours:23,maxMinutesFirstDigit:5,maxMinutes:60}},getValidatedTime:function(e){var t=this,r="",i=(e=e.replace(/[^\d]/g,""),t.getTimeFormatOptions());return t.blocks.forEach(function(n,a){if(0<e.length){var o=e.slice(0,n),l=o.slice(0,1),n=e.slice(n);switch(t.timePattern[a]){case"h":parseInt(l,10)>i.maxHourFirstDigit?o="0"+l:parseInt(o,10)>i.maxHours&&(o=i.maxHours+"");break;case"m":case"s":parseInt(l,10)>i.maxMinutesFirstDigit?o="0"+l:parseInt(o,10)>i.maxMinutes&&(o=i.maxMinutes+"")}r+=o,e=n}}),this.getFixedTimeString(r)},getFixedTimeString:function(e){var r,i,u,n=this,a=n.timePattern,o=[],l=0,s=0,c=0,d=0,m=0;return 6===e.length&&(a.forEach(function(e,t){switch(e){case"s":l=2*t;break;case"m":s=2*t;break;case"h":c=2*t}}),m=c,d=s,u=l,u=parseInt(e.slice(u,u+2),10),r=parseInt(e.slice(d,d+2),10),i=parseInt(e.slice(m,m+2),10),o=this.getFixedTime(i,r,u)),4===e.length&&n.timePattern.indexOf("s")<0&&(a.forEach(function(e,t){switch(e){case"m":s=2*t;break;case"h":c=2*t}}),m=c,d=s,u=0,r=parseInt(e.slice(d,d+2),10),i=parseInt(e.slice(m,m+2),10),o=this.getFixedTime(i,r,u)),0===(n.time=o).length?e:a.reduce(function(e,t){switch(t){case"s":return e+n.addLeadingZero(o[2]);case"m":return e+n.addLeadingZero(o[1]);case"h":return e+n.addLeadingZero(o[0])}},"")},getFixedTime:function(e,t,r){return r=Math.min(parseInt(r||0,10),60),t=Math.min(t,60),[e=Math.min(e,60),t,r]},addLeadingZero:function(e){return(e<10?"0":"")+e}},e.exports=r},function(e,t){"use strict";function r(e,t){var r=this;r.delimiter=t||""===t?t:" ",r.delimiterRE=t?new RegExp("\\"+t,"g"):"",r.formatter=e}r.prototype={setFormatter:function(e){this.formatter=e},format:function(e){var t=this;t.formatter.clear();for(var r,i="",n=!1,a=0,o=(e=(e=(e=e.replace(/[^\d+]/g,"")).replace(/^\+/,"B").replace(/\+/g,"").replace("B","+")).replace(t.delimiterRE,"")).length;a<o;a++)r=t.formatter.inputDigit(e.charAt(a)),/[\s()-]/g.test(r)?(i=r,n=!0):n||(i=r);return(i=i.replace(/[()]/g,"")).replace(/[\s-]/g,t.delimiter)}},e.exports=r},function(e,t){"use strict";var r={blocks:{uatp:[4,5,6],amex:[4,6,5],diners:[4,6,4],discover:[4,4,4,4],mastercard:[4,4,4,4],dankort:[4,4,4,4],instapayment:[4,4,4,4],jcb15:[4,6,5],jcb:[4,4,4,4],maestro:[4,4,4,4],visa:[4,4,4,4],mir:[4,4,4,4],unionPay:[4,4,4,4],general:[4,4,4,4]},re:{uatp:/^(?!1800)1\d{0,14}/,amex:/^3[47]\d{0,13}/,discover:/^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,diners:/^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,mastercard:/^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,dankort:/^(5019|4175|4571)\d{0,12}/,instapayment:/^63[7-9]\d{0,13}/,jcb15:/^(?:2131|1800)\d{0,11}/,jcb:/^(?:35\d{0,2})\d{0,12}/,maestro:/^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,mir:/^220[0-4]\d{0,12}/,visa:/^4\d{0,15}/,unionPay:/^(62|81)\d{0,14}/},getStrictBlocks:function(e){var t=e.reduce(function(e,t){return e+t},0);return e.concat(19-t)},getInfo:function(e,t){var a,o,i=r.blocks,n=r.re;for(a in t=!!t,n)if(n[a].test(e))return o=i[a],{type:a,blocks:t?this.getStrictBlocks(o):o};return{type:"unknown",blocks:t?this.getStrictBlocks(i.general):i.general}}};e.exports=r},function(e,t){"use strict";e.exports={noop:function(){},strip:function(e,t){return e.replace(t,"")},getPostDelimiter:function(e,t,r){var i;return 0===r.length?e.slice(-t.length)===t?t:"":(i="",r.forEach(function(t){e.slice(-t.length)===t&&(i=t)}),i)},getDelimiterREByDelimiter:function(e){return new RegExp(e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),"g")},getNextCursorPosition:function(e,t,r,i,n){return t.length===e?r.length:e+this.getPositionOffset(e,t,r,i,n)},getPositionOffset:function(e,t,r,i,n){t=this.stripDelimiters(t.slice(0,e),i,n),r=this.stripDelimiters(r.slice(0,e),i,n),e=t.length-r.length;return 0!=e?e/Math.abs(e):0},stripDelimiters:function(e,t,r){var i=this;return 0===r.length?(t=t?i.getDelimiterREByDelimiter(t):"",e.replace(t,"")):(r.forEach(function(t){t.split("").forEach(function(t){e=e.replace(i.getDelimiterREByDelimiter(t),"")})}),e)},headStr:function(e,t){return e.slice(0,t)},getMaxLength:function(e){return e.reduce(function(e,t){return e+t},0)},getPrefixStrippedValue:function(e,t,r,i,n,a,o,l,s){var c;return 0===r?e:e===t&&""!==e?"":s&&"-"==e.slice(0,1)?(c="-"==i.slice(0,1)?i.slice(1):i,"-"+this.getPrefixStrippedValue(e.slice(1),t,r,c,n,a,o,l,s)):i.slice(0,r)!==t&&!l||i.slice(-r)!==t&&l?o&&!i&&e?e:"":(c=this.stripDelimiters(i,n,a),e.slice(0,r)===t||l?e.slice(-r)!==t&&l?c.slice(0,-r-1):l?e.slice(0,-r):e.slice(r):c.slice(r))},getFirstDiffIndex:function(e,t){for(var r=0;e.charAt(r)===t.charAt(r);)if(""===e.charAt(r++))return-1;return r},getFormattedValue:function(e,t,r,i,n,a){var o="",l=0<n.length,s="";return 0===r?e:(t.forEach(function(t,c){var u,d;0<e.length&&(u=e.slice(0,t),d=e.slice(t),s=l?n[a?c-1:c]||s:i,a?(0<c&&(o+=s),o+=u):(o+=u,u.length===t&&c<r-1&&(o+=s)),e=d)}),o)},fixPrefixCursor:function(e,t,r,i){var n,o;e&&(n=e.value,r=r||i[0]||" ",!e.setSelectionRange||!t||t.length+r.length<=n.length||(o=2*n.length,setTimeout(function(){e.setSelectionRange(o,o)},1)))},checkFullSelection:function(e){try{return(window.getSelection()||document.getSelection()||{}).toString().length===e.length}catch(r){}return!1},setSelection:function(e,t,r){if(e===this.getActiveElement(r)&&!(e&&e.value.length<=t))if(e.createTextRange){r=e.createTextRange();r.move("character",t),r.select()}else try{e.setSelectionRange(t,t)}catch(n){console.warn("The input element type does not support selection")}},getActiveElement:function(e){e=e.activeElement;return e&&e.shadowRoot?this.getActiveElement(e.shadowRoot):e},isAndroid:function(){return navigator&&/android/i.test(navigator.userAgent)},isAndroidBackspaceKeydown:function(e,t){return!!(this.isAndroid()&&e&&t)&&t===e.slice(0,-1)}}},function(e,t){!function(t){"use strict";e.exports={assign:function(e,r){return(e=e||{}).creditCard=!!(r=r||{}).creditCard,e.creditCardStrictMode=!!r.creditCardStrictMode,e.creditCardType="",e.onCreditCardTypeChanged=r.onCreditCardTypeChanged||function(){},e.phone=!!r.phone,e.phoneRegionCode=r.phoneRegionCode||"AU",e.phoneFormatter={},e.time=!!r.time,e.timePattern=r.timePattern||["h","m","s"],e.timeFormat=r.timeFormat||"24",e.timeFormatter={},e.date=!!r.date,e.datePattern=r.datePattern||["d","m","Y"],e.dateMin=r.dateMin||"",e.dateMax=r.dateMax||"",e.dateFormatter={},e.numeral=!!r.numeral,e.numeralIntegerScale=0<r.numeralIntegerScale?r.numeralIntegerScale:0,e.numeralDecimalScale=0<=r.numeralDecimalScale?r.numeralDecimalScale:2,e.numeralDecimalMark=r.numeralDecimalMark||".",e.numeralThousandsGroupStyle=r.numeralThousandsGroupStyle||"thousand",e.numeralPositiveOnly=!!r.numeralPositiveOnly,e.stripLeadingZeroes=!1!==r.stripLeadingZeroes,e.signBeforePrefix=!!r.signBeforePrefix,e.tailPrefix=!!r.tailPrefix,e.swapHiddenInput=!!r.swapHiddenInput,e.numericOnly=e.creditCard||e.date||!!r.numericOnly,e.uppercase=!!r.uppercase,e.lowercase=!!r.lowercase,e.prefix=!e.creditCard&&!e.date&&r.prefix||"",e.noImmediatePrefix=!!r.noImmediatePrefix,e.prefixLength=e.prefix.length,e.rawValueTrimPrefix=!!r.rawValueTrimPrefix,e.copyDelimiter=!!r.copyDelimiter,e.initValue=void 0!==r.initValue&&null!==r.initValue?r.initValue.toString():"",e.delimiter=r.delimiter||""===r.delimiter?r.delimiter:r.date?"/":r.time?":":r.numeral?",":(r.phone," "),e.delimiterLength=e.delimiter.length,e.delimiterLazyShow=!!r.delimiterLazyShow,e.delimiters=r.delimiters||[],e.blocks=r.blocks||[],e.blocksLength=e.blocks.length,e.root="object"==typeof t&&t?t:window,e.document=r.document||e.root.document,e.maxLength=0,e.backspace=!1,e.result="",e.onValueChanged=r.onValueChanged||function(){},e}}}.call(t,function(){return this}())}],r={},t.m=e,t.c=r,t.p="",t(0);function t(i){var n;return(r[i]||(n=r[i]={exports:{},id:i,loaded:!1},e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n)).exports}var e,r}),function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.multi_line_text={init:function(options){this.$form=options.form,this.type=this.$el.data("happyforms-type"),this.$input=$("textarea",this.$el),this.$counter=$(".happyforms-part__char-counter span.counter",this.$el),this.$input.on("blur",this.onBlur.bind(this)),this.$input.on("keyup",this.triggerChange.bind(this)),this.$input.on("change",this.triggerChange.bind(this)),this.$el.on("keyup",this.refreshCounter.bind(this)),this.refreshCounter(),$(".happyforms-part__char-counter").show()},getValueLength:function(){var mode=this.$input.attr("data-length-mode"),value=this.$input.val(),length=value.length;return length="word"===mode?(mode=value.match(/\w+/g))?mode.length:0:length},refreshCounter:function(){var length;parseInt(this.$input.attr("data-length"),10)<1||(length=this.getValueLength(),this.$counter.text(length))},onFocus:function(){this.$el.addClass("focus")},onBlur:function(){this.$el.removeClass("focus")},isFilled:function(){return""!==this.$input.val()},serialize:function(){return HappyForms.parts.base.serialize.apply(this,arguments)}}}(jQuery),function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.email={init:function(){this.type=this.$el.data("happyforms-type"),this.$input=$("input",this.$el),this.$visualInput=$("input[type=email]",this.$el),this.$input.on("keyup",this.triggerChange.bind(this)),this.$input.on("change",this.triggerChange.bind(this)),this.$input.on("focus",this.onInputFocus.bind(this)),this.$visualInput.on("blur",this.onBlur.bind(this))}}}(jQuery),function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.radio={init:function(){this.type=this.$el.data("happyforms-type"),this.$input=$("input",this.$el),this.$visualInput=$("input[type=email]",this.$el),this.$input.on("keyup",this.triggerChange.bind(this)),this.$input.on("change",this.triggerChange.bind(this)),this.$input.on("change",this.onRadioChange.bind(this)),this.$input.on("focus",this.onFocus.bind(this))},onRadioChange:function(e){var $otherRadio=$(".happyforms-part-option--other input[type=radio]",this.$el),$otherInput=$otherRadio.parent().nextAll("input"),$generalInput=$("input[type=text]",this.$el);$generalInput.prop("required",!1),$otherRadio.length&&$otherRadio.is(":checked")?($(e.target)[0]===$otherRadio[0]&&$otherInput.addClass("hf-show").trigger("focus"),""===this.$el.data("happyforms-required")&&$otherInput.prop("required",!0)):$generalInput.removeClass("hf-show")},onFocus:function(e){e=$(e.target);"text"===e.attr("type")&&e.prevAll("input[type=radio]").prop("checked",!0)},serialize:function(){var self=this;return this.$input.map(function(i,input){var input=$(input),$customInput=0;if("text"!==input.attr("type")){"text"===$(self.$input[i+1]).attr("type")&&($customInput=$(self.$input[i+1]));i={name:input.attr("name"),value:input.val()};if($customInput.length&&($customInput=$customInput.val(),i.value=[input.val(),$customInput],i.value=JSON.stringify(i.value)),input.is(":checked"))return i}}).toArray()}}}(jQuery),function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.checkbox={init:function(){this.type=this.$el.data("happyforms-type"),this.$input=$("input",this.$el),this.$input.on("change",this.triggerChange.bind(this)),this.$input.on("change",this.onCheckboxChange.bind(this)),this.$input.on("focus",this.onFocus.bind(this))},onCheckboxChange:function(e){var $otherCheckbox=$(".happyforms-part-option--other input[type=checkbox]",this.$el),$otherInput=$otherCheckbox.parent().nextAll("input"),$generalInput=$("input[type=text]",this.$el);$generalInput.prop("required",!1),$otherCheckbox.length&&$otherCheckbox.is(":checked")?($(e.target)[0]===$otherCheckbox[0]&&$otherInput.addClass("hf-show").trigger("focus"),""===this.$el.data("happyforms-required")&&$otherInput.prop("required",!0)):$generalInput.removeClass("hf-show")},serialize:function(){var self=this;return this.$input.map(function(i,input){var input=$(input),$customInput=0;if("text"!==input.attr("type")){"text"===$(self.$input[i+1]).attr("type")&&($customInput=$(self.$input[i+1]));i={name:input.attr("name"),value:input.val()};if($customInput.length&&($customInput=$customInput.val(),i.value=[input.val(),$customInput],i.value=JSON.stringify(i.value)),input.is(":checked"))return i}}).toArray()},onFocus:function(e){e=$(e.target);"text"===e.attr("type")&&e.prevAll("input[type=checkbox]").prop("checked",!0)}}}(jQuery),function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.select={init:function(options){this.type=this.$el.data("happyforms-type"),this.$input=$("[data-serialize]",this.$el),this.$input.on("change",this.triggerChange.bind(this)),this.$input.on("blur",this.onBlur.bind(this))},onBlur:function(){var $otherinput=$(".happyforms-part-option--other input[type=text]",this.$el);"999"===this.$input.val()?($otherinput.addClass("hf-show"),$otherinput.focus()):$otherinput.removeClass("hf-show")},serialize:function(){var self=this;return this.$input.map(function(i,select){var select=$(select,self.$el),$customInput=0,value=(999==select.val()&&($customInput=$(" .happyforms-part-option--other input[type=text]",self.$el)),select.val()),value=(null==value&&(value=""),{name:select.attr("name"),value:value});return $customInput.length&&($customInput=$customInput.val(),value.value=[select.val(),$customInput],value.value=JSON.stringify(value.value)),value}).toArray()}}}(jQuery),function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.number={init:function(){this.type=this.$el.data("happyforms-type"),this.allowedKeys=["0","1","2","3","4","5","6","7","8","9","Meta","Delete","ArrowLeft","ArrowRight"];var self,decimalMark,delimiterMark,masked=this.$el.attr("data-mask");this.$input=$("input",this.$el),this.cleaveInstances=[],this.$input.on("keyup",this.onKeyUp.bind(this)),this.$input.on("change",this.triggerChange.bind(this)),this.$input.on("focus",this.onInputFocus.bind(this)),this.$input.on("blur",this.onBlur.bind(this)),this.numeralDecimalMark=this.$el.attr("data-decimal-mark")||"",this.delimiter=this.$el.attr("data-thousands-delimiter")||"",masked&&(decimalMark=(self=this).numeralDecimalMark,delimiterMark=this.delimiter,this.$input.each(function(){var $input=$(this),$input=new Cleave($input,{numeral:!0,numeralDecimalMark:decimalMark,delimiter:delimiterMark});self.cleaveInstances.push($input)})),this.onBlur()},onKeyUp:function(e){var value=$(e.target).val(),regex=new RegExp("[^0-9"+this.numeralDecimalMark+this.delimiter+"-]","g"),value=value.replace(regex,"");$(e.target).val(value),this.triggerChange()},reinit:function(){$.each(this.cleaveInstances,function(i,instance){var input=instance.element,rawValue=instance.getRawValue();instance.destroy(),input.value=rawValue}),this.init()}}}(jQuery),HappyForms.Antispam={getHash:function(data){var hash=[];return data.forEach(function(entry){hash.push(entry.value)}),hash=hash.join("").replace(/[^\w\d]/gm,""),hash=md5(hash)},getPlatformInfo:function(){var key,value,info={user_agent:navigator.userAgent,app_version:navigator.appVersion,language:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage,languages_length:navigator.languages.length,webdriver:navigator.webdriver?1:0,concurrency:navigator.hardwareConcurrency,outer_width:window.outerWidth,outer_height:window.outerHeight,connectionRtt:navigator.connection?navigator.connection.rtt:-1},platformInfo={};for([key,value]of Object.entries(info))platformInfo[`platform_info[${key}]`]=value;return platformInfo}},function($){HappyForms.parts=HappyForms.parts||{},HappyForms.parts.base={init:function(){this.type=this.$el.data("happyforms-type"),this.$input=$("input, textarea, select",this.$el),this.$input.on("keyup change",this.triggerChange.bind(this)),this.$input.on("blur",this.onBlur.bind(this)),this.$input.on("focus",this.onInputFocus.bind(this)),this.onBlur()},getType:function(){return this.type},onInputFocus:function(){this.$el.addClass("focus")},onBlur:function(){this.$el.is(".happyforms-part--label-as_placeholder")&&(this.isFilled()?this.$el.addClass("happyforms-part--filled"):this.$el.removeClass("happyforms-part--filled")),this.$el.removeClass("focus")},triggerChange:function(data){this.$el.trigger("happyforms-change",data)},isRequired:function(){return this.$el.is(":visible")&&this.$el.is("[data-happyforms-required]")},isFilled:function(){return 0<this.$input.filter(function(){var $input=$(this);return $input.is("[type=checkbox]")||$input.is("[type=radio]")?$input.is(":checked"):""!==$input.val()}).length},confirmationMatches:function(){var matches=!1,$input=this.$input,$input=($input=this.$visualInput?this.$visualInput:$input).map(function(){return $(this).val()}).toArray();return matches=2===$input.length?$input[0]===$input[1]:matches},requiresConfirmation:function(){return this.$el.is("[data-happyforms-require-confirmation]")},serialize:function(){return this.$input.map(function(i,input){var input=$(input),keyValue={name:input.attr("name"),value:input.val()};if(!input.is("[type=checkbox]")&&!input.is("[type=radio]")||input.is(":checked"))return keyValue}).toArray()},isValid:function(){var valid=!0;this.$el.data("happyforms-type");return valid=this.$input&&(this.isRequired()&&(valid=valid&&this.isFilled()),this.isRequired())&&this.requiresConfirmation()?valid&&this.confirmationMatches():valid},destroy:function(){this.$el.data("HappyFormPart",!1)}},HappyForms.wrapPart=function($part,$form){var type=$part.data("happyforms-type"),partMethods=HappyForms.parts.base;HappyForms.parts[type]&&(partMethods=$.extend({},HappyForms.parts.base,HappyForms.parts[type])),$part.happyFormPart(partMethods,{form:$form})},HappyForms.Form=function(el){this.el=el,this.$el=$(this.el),this.$form=$("form",this.$el),this.$parts=$("[data-happyforms-type]",this.$form),this.$submits=$('[type="submit"], a.submit',this.$form),this.$submit=$('[type="submit"]',this.$form),this.$submitLinks=$("a.submit",this.$form),this.$step=$('[name="happyforms_step"]',this.$form),this.init()},HappyForms.Form.prototype={init:function(){var $form=this.$form;$("[data-happyforms-type]",this.$form).each(function(){var $part=$(this);$part.data("happyforms-type");HappyForms.wrapPart($part,$form)}),$('[name="client_referer"]',this.$form).val(window.location.href),this.$el.trigger("happyforms-change"),this.$el.trigger("happyforms-init"),this.$form.off("submit"),this.$submit.off("click"),this.$submitLinks.off("click"),this.$form.on("submit",this.submit.bind(this)),this.$submit.on("click",this.buttonSubmit.bind(this)),this.$submitLinks.on("click",this.linkSubmit.bind(this)),this.$el.on("happyforms-scrolltop",this.onScrollTop.bind(this))},detach:function(){this.$el.off("happyforms-change"),this.$el.off("happyforms-scrolltop"),$("[data-happyforms-type]",this.$form).remove()},serialize:function(submitEl){for(var action=$("[name=action]",this.$form).val(),clientReferer=$('[name="client_referer"]',this.$form).val(),form_id=$("[name=happyforms_form_id]",this.$form).val(),formData=($("[name=_wp_http_referer]",this.$form).val(),[{name:"action",value:action},{name:"happyforms_client_referer",value:clientReferer},{name:"happyforms_form_id",value:form_id},{name:"happyforms_step",value:this.$step.val()},{name:"happyforms_random_seed",value:$("[name=happyforms_random_seed]",this.$form).val()}]),honeypotNames=["single_line_text","multi_line_text","number"],h=0;h<honeypotNames.length;h++){var inputName=form_id+"-"+honeypotNames[h],$input=$("[name="+inputName+"]");if($input.length){formData.push({name:inputName,value:$input.val()});break}}var key,value,action=$("[data-happyforms-type]",this.$form).map(function(i,part){return $(part).happyFormPart("serialize")}).toArray().filter(function(entry){return null!==entry.name&&void 0!==entry.name}),clientReferer=formData.concat(action),params=new URLSearchParams,action=(clientReferer.forEach(function(entry){params.append(entry.name,entry.value)}),HappyForms.Antispam.getHash(clientReferer)),clientReferer=(params.append("hash",action),HappyForms.Antispam.getPlatformInfo());for([key,value]of Object.entries(clientReferer))params.append(key,value);return params=params.toString()},buttonSubmit:function(e){e.target.hasAttribute("data-step")&&this.$step.val(e.target.getAttribute("data-step"))},linkSubmit:function(e){e.preventDefault(),e.stopImmediatePropagation(),e.target.hasAttribute("data-step")&&this.$step.val(e.target.getAttribute("data-step")),this.$form.trigger("submit")},submit:function(e){e.preventDefault(),this.$form.addClass("happyforms-form--submitting"),this.$submits.attr("disabled","disabled"),$.ajax({type:"post",data:this.serialize(e.target)}).done(this.onSubmitComplete.bind(this))},onSubmitComplete:function(response){if(this.$form.trigger("happyforms.submitted",response),!response.data)return!1;var elTopOffset,$notices;response.data.html&&(response=$(response.data.html),$("[data-happyforms-type]",this.$form).each(function(){$(this).trigger("happyforms.detach")}),this.detach(),this.$el.replaceWith(response),this.$el=response,this.$el.happyForm(),(response=$("form",this.$el)).attr("data-happyforms-scroll-disabled")||(this.$el.get(0).getBoundingClientRect().top<0&&(elTopOffset=this.$el.offset().top,$notices=$(".happyforms-message-notices",this.$el),response.is(".happyforms-form--notices-below")&&$notices.length&&(elTopOffset=$notices.offset().top),($notices=response.attr("data-happyforms-scroll-offset"))&&(elTopOffset+=$notices=parseInt($notices,10)),this.$el.trigger("happyforms-scrolltop",elTopOffset)),!$(".happyforms-message-notice.error",response).length&&this.$el.hasClass("happyforms-form--hide-on-submit")&&$(".happyforms-part",response).hide()))},onScrollTop:function(e,offset){e.isDefaultPrevented()||$("html, body").animate({scrollTop:offset+"px"},500)}},HappyForms.Part=function(el){this.el=el,this.$el=$(this.el)},$.fn.happyFormPart=function(method){if("object"==typeof method){var part=new HappyForms.Part(this);$.extend(part,method),$(this).data("HappyFormPart",part),part.init.apply(part,Array.prototype.slice.call(arguments,1))}else{part=$(this).data("HappyFormPart");if(part&&part[method])return part[method].apply(part,Array.prototype.slice.call(arguments,1))}},$.fn.happyForm=function(method){this.each(function(){if(method){var instance=$.data(this,"HappyForm");if(instance&&instance[method])return instance[method].apply(instance,Array.prototype.slice.call(arguments,1))}else $.data(this,"HappyForm",new HappyForms.Form(this,arguments))})},$(function(){$(".happyforms-form").happyForm()})}(jQuery);