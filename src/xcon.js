
export default !function(){var a,b,c,d,e,f,g,h,i;a=function(){function a(a){var b=typeof a;return void 0===a&&(b="undefined"),"object"===b&&(b=a instanceof Array?"array":"object",b=null!==a?b:"null"),b}return a}(),b=function(a){function b(b){var c,d=a(b),e=100;switch(d){case"number":case"boolean":case"function":b=b.toString();break;case"object":case"array":case"null":try{b=JSON.stringify(b)}catch(f){console.out("*circular data structure detected:",{color:"red",test:!0}),console.log(b)}break;case"string":b='"'+b+'"';break;case"undefined":b="undefined"}return b.length>e&&(b=b.substring(0,e)+"..."+("string"===d?'"':""),c=!0),{type:d,text:b,truncated:!!c}}return b}(a),c=function(){function a(){var b=["blue","darkgray","black","darkorange","chocolate","brown","darkmagenta","darkgoldenrod","darkslateblue","dimgray","indigo","maroon","midnightblue","navy","purple","royalblue","sienna","saddlebrown","slateblue","slategray","teal","steelblue"],c=Math.floor(Math.random()*b.length),d=b[c];return d!==a.last?(a.last=d,d):void a()}return a.last=null,a}(),d=function(a,b){function c(b,c){c=c||{};var d,e,f,g,h=b;return c.test||(e=a(b),f=e.type+":\n",h=e.text||"",g=e.truncated,f=c.error?"error:\n":f,f=c.fnName?c.fnName+"("+c.fnArgs+") returns "+f:f),f=f||"",d=f+h,[d,g?!0:!1]}function d(a,d){var e,f,g,h="%c",i=d.color||b(),j=d.background||"#fff",k=d.fnName?"bold":"normal",l=[];a=a instanceof Array?a:[a];for(e in a)g=c(a[e],d),h+=g[0],h+=e<a.length-1?"\n":"",g[1]&&l.push(a[e]);return f="color:"+i+";background:"+j+";font-weight:"+k,[h,f,l]}return d}(b,c),e=function(a){function b(c,d){if(c instanceof Function)return d instanceof Function?(c=c.toString().replace(/\s/gm,""),d=d.toString().replace(/\s/gm,""),c===d):!1;if(null===c||void 0===c||null===d||void 0===d)return c===d;if(c===d||c.valueOf()===d.valueOf())return!0;if(c instanceof Date||d instanceof Date||!(c instanceof Object)||!(d instanceof Object)||a(c)!==a(d))return!1;var e=Object.keys(c),f=Object.keys(d),g=f.every(function(a){return-1!==e.indexOf(a)})&&e.every(function(a){return b(c[a],d[a])});return g}return b}(a),f=function(a){function b(b){return this.contains=!1,this.thisFor=function(c,d){d=d||b;var e,f,g=a(d),h="object"===g?Object.keys(d):null,i="object"===g?Object.keys(d).length:d.length;for(e=0;i>e;e++){if(f=h?h[e]:e,d[f]===c){this.contains=!0;break}("object"===a(d[f])||"array"===a(d[f]))&&this.thisFor(c,d[f])}return this.contains},this}function c(a,c){return new b(a).thisFor(c)}return c}(a),g=function(a,b,c,d){var e,f="rgba(44, 226, 44, 0.4)",g="rgba(226, 44, 44, 0.4)";return e=function(a,b,c){c=c||{},this.opposite=!!c.not,this.thing=b,this.context=a},e.prototype.thing=null,e.prototype.context=null,e.prototype.passed=!1,e.prototype.opposite=!1,e.prototype.message=function(){var a=[this.passed?"PASSED:":"FAILED:","expected",b(this.thing),c(this.thing).text];this.opposite&&a.push("not"),a=a.concat(Array.prototype.slice.call(arguments)),this.context.out(a.join(" "),{color:"#000",background:this.passed?f:g,test:!0})},e.prototype.setResult=function(a){a=this.opposite^a,this.passed=!!a},e.prototype.toEqual=function(d){var e=a(this.thing,d);this.setResult(e),this.message("to equal",b(d),c(d).text),b(this.thing)!==b(d)||"object"!=typeof this.thing||this.passed||this.context.diff(this.thing,d)},e.prototype.toContain=function(a){var e=d(this.thing,a);this.setResult(e),this.message("to contain",b(a),c(a).text)},e.prototype.toBeCloseTo=function(a,b){var c=this.thing<a+b||this.thing>a-b;this.setResult(c),this.message("to be close to",a,"by a margin of",b)},e.prototype.toBeTruthy=function(){this.setResult(!!this.thing),this.message("to be truthy")},e.prototype.toBeDefined=function(){var a=void 0!==this.thing;this.setResult(a),this.message("to be defined")},e.prototype.toBeNull=function(){var a=null===this.thing;this.setResult(a),this.message("to be null")},e}(e,a,b,f),h=function(a,b,c){function d(d,e){function f(a){var b,c,d;if(null===a||"object"!=typeof a)return a;if(a instanceof Date)return b=new Date,b.setTime(a.getTime()),b;if(a instanceof Array){for(b=[],d=0;d<a.length;d++)b[d]=f(a[d]);return b}if(a instanceof Object){b={};for(c in a)a.hasOwnProperty(c)&&(b[c]=f(a[c]));return b}throw new Error("Unable to provide object diff; infinite recursion detected.")}function g(a,b){var c=f(a);return c[b]}function h(d,e){var f,i,j=b(d),k="object"===j?Object.keys(d):null,n="object"===j?Object.keys(d).length:d.length;for(f=0;n>f;f++)i="array"===j?f:k[f],l.push(i),d.hasOwnProperty(i)&&!a(d[i],e[i])&&(b(d[i])!==b(e[i])||"object"!==b(d[i])&&"array"!==b(d[i])?m+="\n"+l.join(".")+" : "+c(g(d,l.slice(-1))).text:h(d[i],e[i])),l=l.slice(0,-1);return m}if(b(d)!==b(e))return!1;var i,j,k,l=[],m="",n=!1;try{i=h(d,e)}catch(o){n=!0,i=!0}l=[],m="";try{j=h(e,d)}catch(o){n=!0,j=!0}return n&&(k="object(s) too complex to diff. Try testing smaller object(s) or one(s) with fewer circular data references."),{firstObjectDiff:i,secondObjectDiff:j,errorMessage:k}}return d}(e,a,b),i=function(a,b,c,d,e){function f(){return this.out=this.out||function(){var b,c,d,e,f=arguments[arguments.length-1]||{};c=!(f.color||f.background||f.log||f.error||f.test||f.fnName||f.fnArgs),f=c?{}:f,e=c?Array.prototype.slice.call(arguments):Array.prototype.slice.call(arguments,0,-1),b=a(e,f),this.log(b[0],b[1]);for(d in b[2])this.log(b[2][d])},this.run=this.run||function(a,b,c){if("function"!=typeof a)return this.out(arguments[0],arguments[1]),arguments[0];c=c||this,b=b||[];var d,e={fnName:a.name||"anonymous function",fnArgs:b.toString()};try{return d=a.apply(c,b),e.color="darkgreen",this.out(d,e),d}catch(f){e.color="red",e.error=!0,this.out(f.message,e)}},this.expect=this.expect||function(a){var c=new b(this,a);return c.not=new b(this,a,{not:!0}),c},this.diff=this.diff||function(a,b){if("object"!=typeof a||"object"!=typeof b)return void this.out("both arguments must be objects or arrays",{test:!0,color:"red"});if(d(a,b))return void this.out("both arguments are equal",{test:!0,color:"darkgreen"});var f=c(a,b);f.errorMessage?(this.out(f.errorMessage,{test:!0,color:"black",background:"lightgray"}),f.firstObjectDiff&&this.log(a),f.secondObjectDiff&&this.log(b)):(this.out("first "+e(a)+" has unique data:"+f.firstObjectDiff,{test:!0,color:"black",background:"lightblue"}),this.out("second "+e(b)+" has unique data:"+f.secondObjectDiff,{test:!0,color:"black",background:"khaki"}))},this}return f.call(console)}(d,g,h,e,a)}();