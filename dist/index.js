"use strict";var d=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var c=d(function(G,p){
var g=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(e,i,u,m,v,f,q){var t,a,s,o,r,n;if(e<=0)return NaN;for(s=m,o=q,n=0;n<e&&v[o]!==0;n++)s+=u,o+=f;if(n===e)return NaN;if(a=i[s],g(a))return a;for(t=a,n+=1,n;n<e;n++)if(s+=u,o+=f,!v[o]){if(r=i[s],g(r))return r;r<a||r===a&&b(r)?a=r:(r>t||r===t&&E(r))&&(t=r)}return(t+a)/2}p.exports=O
});var l=d(function(H,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),P=c();function h(e,i,u,m,v){var f=y(e,u),q=y(e,v);return P(e,i,u,f,m,v,q)}j.exports=h
});var Z=d(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=l(),z=c();w(k,"ndarray",z);R.exports=k
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=Z(),x,_=B(A(__dirname,"./native.js"));C(_)?x=D:x=_;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
