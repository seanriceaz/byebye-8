//Gyro.js
//Copyright (c) 2011 Tom Gallacher <http://www.tomg.co>
/*
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(function(a,b){"function"===typeof define&&define.amd?define(b):"object"===typeof exports?module.exports=b():a.gyro=b()})(this,function(){var a={x:null,y:null,z:null,alpha:null,beta:null,gamma:null},b={x:0,y:0,z:0,alpha:0,beta:0,gamma:0},g=null,e=[],h={frequency:500,calibrate:function(){for(var f in a)b[f]="number"===typeof a[f]?a[f]:0},getOrientation:function(){return a},startTracking:function(b){g=setInterval(function(){b(a)},h.frequency)},stopTracking:function(){clearInterval(g)},hasFeature:function(a){for(var b in e)if(a==
e[b])return!0;return!1},getFeatures:function(){return e}};window&&window.addEventListener&&function(){function f(d){e.push("MozOrientation");d.target.removeEventListener("MozOrientation",f,!0);d.target.addEventListener("MozOrientation",function(c){a.x=c.x-b.x;a.y=c.y-b.y;a.z=c.z-b.z},!0)}function g(d){e.push("devicemotion");d.target.removeEventListener("devicemotion",g,!0);d.target.addEventListener("devicemotion",function(c){a.x=c.accelerationIncludingGravity.x-b.x;a.y=c.accelerationIncludingGravity.y-
b.y;a.z=c.accelerationIncludingGravity.z-b.z},!0)}function h(d){e.push("deviceorientation");d.target.removeEventListener("deviceorientation",h,!0);d.target.addEventListener("deviceorientation",function(c){a.alpha=c.alpha-b.alpha;a.beta=c.beta-b.beta;a.gamma=c.gamma-b.gamma},!0)}window.addEventListener("MozOrientation",f,!0);window.addEventListener("devicemotion",g,!0);window.addEventListener("deviceorientation",h,!0)}();return h});
