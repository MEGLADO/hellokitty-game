var su=0,Mc=1,ru=2;var Gr=1,ou=2,Ls=3,Mn=0,Ce=1,ii=2,ui=0,fi=1,Ri=2,Sc=3,bc=4,au=5;var Wn=100,lu=101,cu=102,hu=103,uu=104,fu=200,du=201,pu=202,mu=203,Ec=204,Tc=205,gu=206,xu=207,_u=208,vu=209,yu=210,Mu=211,Su=212,bu=213,Eu=214,ko=0,Vo=1,Wo=2,_s=3,Xo=4,qo=5,Yo=6,Zo=7,Sa=0,Tu=1,wu=2,Ci=0,kr=1,Vr=2,Wr=3,Xr=4,qr=5,Yr=6,Xn=7;var wc=300,Sn=301,qn=302,ba=303,Ea=304,Zr=306,On=1e3,Ui=1001,Jo=1002,Re=1003,Au=1004;var Jr=1005;var Ge=1006,Ta=1007;var bn=1008;var ni=1009,Ac=1010,Rc=1011,Ds=1012,wa=1013,Pi=1014,di=1015,Ve=1016,Aa=1017,Ra=1018,Us=1020,Cc=35902,Pc=35899,Ic=1021,Lc=1022,pi=1023,Ni=1026,En=1027,Ns=1028,Ca=1029,Tn=1030,Pa=1031;var Ia=1033,$r=33776,Kr=33777,Qr=33778,jr=33779,La=35840,Da=35841,Ua=35842,Na=35843,Fa=36196,Ba=37492,Oa=37496,za=37488,Ha=37489,to=37490,Ga=37491,ka=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,$a=37816,Ka=37817,Qa=37818,ja=37819,tl=37820,el=37821,il=36492,nl=36494,sl=36495,rl=36283,ol=36284,eo=36285,al=36286;var hr=2300,$o=2301,Ho=2302,cc=2303,hc=2400,uc=2401,fc=2402;var Ru=3200;var Fs=0,Cu=1,Qi="",ze="srgb",ur="srgb-linear",fr="linear",le="srgb";var Go=7680;var Pu=519,Iu=512,Lu=513,Du=514,ll=515,Uu=516,Nu=517,cl=518,Fu=519,Bu=35044,io=35048;var Dc="300 es",Si=2e3,vs=2001;function cd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function hd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ou(){let n=dr("canvas");return n.style.display="block",n}var wh={},ys=null;function Uc(...n){let t="THREE."+n.shift();ys?ys("log",t,...n):console.log(t,...n)}function zu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ot(...n){n=zu(n);let t="THREE."+n.shift();if(ys)ys("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Ht(...n){n=zu(n);let t="THREE."+n.shift();if(ys)ys("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Bn(...n){let t=n.join(" ");t in wh||(wh[t]=!0,Ot(...n))}function Hu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Gu={[ko]:Vo,[Wo]:Yo,[Xo]:Zo,[_s]:qo,[Vo]:ko,[Yo]:Wo,[Zo]:Xo,[qo]:_s},Fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,or=Math.PI/180,Ms=180/Math.PI;function Yn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Nc(n,t){return(n%t+t)%t}function ud(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function fd(n,t,e){return n!==t?(e-n)/(t-n):0}function ar(n,t,e){return(1-e)*n+e*t}function dd(n,t,e,i){return ar(n,t,1-Math.exp(-e*i))}function pd(n,t=1){return t-Math.abs(Nc(n,t*2)-t)}function md(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function gd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function xd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function _d(n,t){return n+Math.random()*(t-n)}function vd(n){return n*(.5-Math.random())}function yd(n){n!==void 0&&(Ah=n);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Md(n){return n*or}function Sd(n){return n*Ms}function bd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ed(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Td(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wd(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),u=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*u,a*c);break;case"YXY":n.set(l*u,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*u,a*h,a*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zi={DEG2RAD:or,RAD2DEG:Ms,generateUUID:Yn,clamp:Kt,euclideanModulo:Nc,mapLinear:ud,inverseLerp:fd,lerp:ar,damp:dd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:xd,randFloat:_d,randFloatSpread:vd,seededRandom:yd,degToRad:Md,radToDeg:Sd,isPowerOfTwo:bd,ceilPowerOfTwo:Ed,floorPowerOfTwo:Td,setQuaternionFromProperEuler:wd,normalize:Qe,denormalize:gs},Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var st=Gc,ke=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],u=r[o+1],m=r[o+2],M=r[o+3];if(d!==M||l!==f||c!==u||h!==m){let g=l*f+c*u+h*m+d*M;g<0&&(f=-f,u=-u,m=-m,M=-M,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,l=l*p+f*a,c=c*p+u*a,h=h*p+m*a,d=d*p+M*a}else{l=l*p+f*a,c=c*p+u*a,h=h*p+m*a,d=d*p+M*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kc=class kc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;var P=kc,zl=new P,Rh=new ke,Vc=class Vc{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],m=i[8],M=s[0],g=s[3],p=s[6],y=s[1],b=s[4],_=s[7],T=s[2],E=s[5],R=s[8];return r[0]=o*M+a*y+l*T,r[3]=o*g+a*b+l*E,r[6]=o*p+a*_+l*R,r[1]=c*M+h*y+d*T,r[4]=c*g+h*b+d*E,r[7]=c*p+h*_+d*R,r[2]=f*M+u*y+m*T,r[5]=f*g+u*b+m*E,r[8]=f*p+u*_+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+i*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(a*i-s*o)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=u*M,t[7]=(i*l-c*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Bn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return Bn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return Bn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vc.prototype.isMatrix3=!0;var Wt=Vc,Hl=new Wt,Ch=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){let n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:t,whitePoint:i,transfer:fr,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),n}var Qt=Ad();function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var is,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=dr("canvas")),is.width=t.width,is.height=t.height;let s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rd=0,Ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Cd=0,kl=new P,je=class n extends Fi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ui,s=Ui,r=Ge,o=bn,a=pi,l=ni,c=n.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Yn(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case On:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case On:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=wc;je.DEFAULT_ANISOTROPY=1;var Wc=class Wc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(u+1)/2,T=(p+1)/2,E=(h+f)/4,R=(d+M)/4,v=(m+g)/4;return b>_&&b>T?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=R/i):_>T?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=v/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-M)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;var be=Wc,Qo=class extends Fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new je(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends Qo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},pr=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ma=class Ma{constructor(t,e,i,s,r,o,a,l,c,h,d,f,u,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,u,m,M,g)}set(t,e,i,s,r,o,a,l,c,h,d,f,u,m,M,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,M=c*d;e[0]=f+M*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,M=c*d;e[0]=f-M*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,M=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+M,e[1]=l*d,e[5]=M*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,M=a*c;e[0]=l*h,e[4]=M-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-M*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+M,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Id)}lookAt(t,e,i){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),ln.crossVectors(i,si),ln.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ln.crossVectors(i,si)),ln.normalize(),go.crossVectors(si,ln),s[0]=ln.x,s[4]=go.x,s[8]=si.x,s[1]=ln.y,s[5]=go.y,s[9]=si.y,s[2]=ln.z,s[6]=go.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],m=i[2],M=i[6],g=i[10],p=i[14],y=i[3],b=i[7],_=i[11],T=i[15],E=s[0],R=s[4],v=s[8],w=s[12],C=s[1],U=s[5],F=s[9],z=s[13],L=s[2],O=s[6],W=s[10],X=s[14],nt=s[3],q=s[7],Q=s[11],et=s[15];return r[0]=o*E+a*C+l*L+c*nt,r[4]=o*R+a*U+l*O+c*q,r[8]=o*v+a*F+l*W+c*Q,r[12]=o*w+a*z+l*X+c*et,r[1]=h*E+d*C+f*L+u*nt,r[5]=h*R+d*U+f*O+u*q,r[9]=h*v+d*F+f*W+u*Q,r[13]=h*w+d*z+f*X+u*et,r[2]=m*E+M*C+g*L+p*nt,r[6]=m*R+M*U+g*O+p*q,r[10]=m*v+M*F+g*W+p*Q,r[14]=m*w+M*z+g*X+p*et,r[3]=y*E+b*C+_*L+T*nt,r[7]=y*R+b*U+_*O+T*q,r[11]=y*v+b*F+_*W+T*Q,r[15]=y*w+b*z+_*X+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],M=t[7],g=t[11],p=t[15],y=l*u-c*f,b=a*u-c*d,_=a*f-l*d,T=o*u-c*h,E=o*f-l*h,R=o*d-a*h;return e*(M*y-g*b+p*_)-i*(m*y-g*T+p*E)+s*(m*b-M*T+p*R)-r*(m*_-M*E+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],M=t[13],g=t[14],p=t[15],y=e*a-i*o,b=e*l-s*o,_=e*c-r*o,T=i*l-s*a,E=i*c-r*a,R=s*c-r*l,v=h*M-d*m,w=h*g-f*m,C=h*p-u*m,U=d*g-f*M,F=d*p-u*M,z=f*p-u*g,L=y*z-b*F+_*U+T*C-E*w+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(a*z-l*F+c*U)*O,t[1]=(s*F-i*z-r*U)*O,t[2]=(M*R-g*E+p*T)*O,t[3]=(f*E-d*R-u*T)*O,t[4]=(l*C-o*z-c*w)*O,t[5]=(e*z-s*C+r*w)*O,t[6]=(g*_-m*R-p*b)*O,t[7]=(h*R-f*_+u*b)*O,t[8]=(o*F-a*C+c*v)*O,t[9]=(i*C-e*F-r*v)*O,t[10]=(m*E-M*_+p*y)*O,t[11]=(d*_-h*E-u*y)*O,t[12]=(a*w-o*U-l*v)*O,t[13]=(e*U-i*w+s*v)*O,t[14]=(M*b-m*T-g*y)*O,t[15]=(h*T-d*b+f*y)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,M=o*h,g=o*d,p=a*d,y=l*c,b=l*h,_=l*d,T=i.x,E=i.y,R=i.z;return s[0]=(1-(M+p))*T,s[1]=(u+_)*T,s[2]=(m-b)*T,s[3]=0,s[4]=(u-_)*E,s[5]=(1-(f+p))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(m+b)*R,s[9]=(g-y)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_i.copy(this);let c=1/o,h=1/a,d=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=d,_i.elements[9]*=d,_i.elements[10]*=d,e.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Si,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s),m,M;if(l)m=r/(o-r),M=o*r/(o-r);else if(a===Si)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===vs)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Si,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),u=-(i+s)/(i-s),m,M;if(l)m=1/(o-r),M=o/(o-r);else if(a===Si)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===vs)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ma.prototype.isMatrix4=!0;var ne=Ma,ns=new P,_i=new ne,Pd=new P(0,0,0),Id=new P(1,1,1),ln=new P,go=new P,si=new P,Ih=new ne,Lh=new ke,Ye=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ld=0,Dh=new P,ss=new ke,Wi=new ne,xo=new P,js=new P,Dd=new P,Ud=new ke,Uh=new P(1,0,0),Nh=new P(0,1,0),Fh=new P(0,0,1),Bh={type:"added"},Nd={type:"removed"},rs={type:"childadded",child:null},Vl={type:"childremoved",child:null},Ne=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Ye,i=new ke,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Wt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xo.copy(t):xo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(js,xo,this.up):Wi.lookAt(xo,js,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Wi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),rs.child=t,this.dispatchEvent(rs),rs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new P(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fd={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Wl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Nc(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wl(o,r,t+1/3),this.g=Wl(o,r,t),this.b=Wl(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=ku[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Qt.workingToColorSpace(qe.copy(this),t),Math.round(Kt(qe.r*255,0,255))*65536+Math.round(Kt(qe.g*255,0,255))*256+Math.round(Kt(qe.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=ze){Qt.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(_o);let i=ar(cn.h,_o.h,e),s=ar(cn.s,_o.s,e),r=ar(cn.l,_o.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new ft;ft.NAMES=ku;var gr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vi=new P,Xi=new P,Xl=new P,qi=new P,os=new P,as=new P,Oh=new P,ql=new P,Yl=new P,Zl=new P,Jl=new be,$l=new be,Kl=new be,dn=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vi.subVectors(t,e),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vi.subVectors(s,e),Xi.subVectors(i,e),Xl.subVectors(t,e);let o=vi.dot(vi),a=vi.dot(Xi),l=vi.dot(Xl),c=Xi.dot(Xi),h=Xi.dot(Xl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Jl.setScalar(0),$l.setScalar(0),Kl.setScalar(0),Jl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,i),Kl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(Kl,r.z),o}static isFrontFacing(t,e,i,s){return vi.subVectors(i,e),Xi.subVectors(t,e),vi.cross(Xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),vi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;os.subVectors(s,i),as.subVectors(r,i),ql.subVectors(t,i);let l=os.dot(ql),c=as.dot(ql);if(l<=0&&c<=0)return e.copy(i);Yl.subVectors(t,s);let h=os.dot(Yl),d=as.dot(Yl);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(os,o);Zl.subVectors(t,r);let u=os.dot(Zl),m=as.dot(Zl);if(m>=0&&u<=m)return e.copy(r);let M=u*c-l*m;if(M<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(as,a);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return Oh.subVectors(r,s),a=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(Oh,a);let p=1/(g+M+f);return o=M*p,a=f*p,e.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),yo.subVectors(this.max,tr),ls.subVectors(t.a,tr),cs.subVectors(t.b,tr),hs.subVectors(t.c,tr),hn.subVectors(cs,ls),un.subVectors(hs,cs),Ln.subVectors(ls,hs);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Ln.z,Ln.y,hn.z,0,-hn.x,un.z,0,-un.x,Ln.z,0,-Ln.x,-hn.y,hn.x,0,-un.y,un.x,0,-Ln.y,Ln.x,0];return!Ql(e,ls,cs,hs,yo)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,ls,cs,hs,yo))?!1:(Mo.crossVectors(hn,un),e=[Mo.x,Mo.y,Mo.z],Ql(e,ls,cs,hs,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yi=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,vo=new Bi,ls=new P,cs=new P,hs=new P,hn=new P,un=new P,Ln=new P,tr=new P,yo=new P,Mo=new P,Dn=new P;function Ql(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Dn.fromArray(n,r);let a=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ie=new P,So=new st,Bd=0,xe=class extends Fi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var _r=class extends xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ie=class extends xe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Od=new Bi,er=new P,jl=new P,$i=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Od.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(jl)),this.expandByPoint(er.copy(t.center).sub(jl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zd=0,hi=new ne,tc=new Ne,us=new P,ri=new Bi,ir=new Bi,Oe=new P,me=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?_r:xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,i){return hi.makeTranslation(t,e,i),this.applyMatrix4(hi),this}scale(t,e,i){return hi.makeScale(t,e,i),this.applyMatrix4(hi),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(ri.min,ir.min),ri.expandByPoint(Oe),Oe.addVectors(ri.max,ir.max),ri.expandByPoint(Oe)):(ri.expandByPoint(ir.min),ri.expandByPoint(ir.max))}ri.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Oe.add(us)),s=Math.max(s,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new xe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new P,l[v]=new P;let c=new P,h=new P,d=new P,f=new st,u=new st,m=new st,M=new P,g=new P;function p(v,w,C){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,C),f.fromBufferAttribute(r,v),u.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),h.sub(c),d.sub(c),u.sub(f),m.sub(f);let U=1/(u.x*m.y-m.x*u.y);isFinite(U)&&(M.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(U),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(U),a[v].add(M),a[w].add(M),a[C].add(M),l[v].add(g),l[w].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,w=y.length;v<w;++v){let C=y[v],U=C.start,F=C.count;for(let z=U,L=U+F;z<L;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new P,_=new P,T=new P,E=new P;function R(v){T.fromBufferAttribute(s,v),E.copy(T);let w=a[v];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);let U=_.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,U)}for(let v=0,w=y.length;v<w;++v){let C=y[v],U=C.start,F=C.count;for(let z=U,L=U+F;z<L;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),M=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?u=l[M]*a.data.stride+a.offset:u=l[M]*h;for(let p=0;p<h;p++)f[m++]=c[u++]}return new xe(f,h,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=new P,Hd=new P,Gd=new Wt,Mi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ec.subVectors(i,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(ec).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},kd=0,bi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=fi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zi=new P,ic=new P,bo=new P,Eo=new P,vr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ic.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Eo.copy(this.origin).sub(ic);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Eo.dot(this.direction),l=-Eo.dot(bo),c=Eo.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let M=1/h;d*=M,f*=M,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ic).addScaledVector(bo,f),u}intersectSphere(t,e){if(t.radius<0)return null;Zi.subVectors(t.center,this.origin);let i=Zi.dot(this.direction),s=Zi.dot(Zi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,M=e.y-o.y,g=e.z-o.z,p=i.x-o.x,y=i.y-o.y,b=i.z-o.z,_=Math.abs(l),T=Math.abs(c),E=Math.abs(h),R,v,w,C,U,F,z,L,O,W,X,nt;if(_>=T&&_>=E?(w=l,F=d,O=m,nt=p,l>=0?(R=c,v=h,C=f,U=u,z=M,L=g,W=y,X=b):(R=h,v=c,C=u,U=f,z=g,L=M,W=b,X=y)):T>=E?(w=c,F=f,O=M,nt=y,c>=0?(R=h,v=l,C=u,U=d,z=g,L=m,W=b,X=p):(R=l,v=h,C=d,U=u,z=m,L=g,W=p,X=b)):(w=h,F=u,O=g,nt=b,h>=0?(R=l,v=c,C=d,U=f,z=m,L=M,W=p,X=y):(R=c,v=l,C=f,U=d,z=M,L=m,W=y,X=p)),w===0)return null;let q=R/w,Q=v/w,et=1/w,It=C-q*F,wt=U-Q*F,ce=z-q*O,jt=L-Q*O,re=W-q*nt,J=X-Q*nt,j=re*jt-J*ce,vt=It*J-wt*re,zt=ce*wt-jt*It;if(s){if(j<0||vt<0||zt<0)return null}else if((j<0||vt<0||zt<0)&&(j>0||vt>0||zt>0))return null;let bt=j+vt+zt;if(bt===0)return null;let kt=et*(j*F+vt*O+zt*nt);return(bt>0?kt<0:kt>0)?null:this.at(kt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oi=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zh=new ne,Un=new vr,To=new $i,Hh=new P,wo=new P,Ao=new P,Ro=new P,nc=new P,Co=new P,Gh=new P,Po=new P,Gt=class extends Ne{constructor(t=new me,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(nc.fromBufferAttribute(d,t),o?Co.addScaledVector(nc,h):Co.addScaledVector(nc.sub(e),h))}e.add(Co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(To.containsPoint(Un.origin)===!1&&(Un.intersectSphere(To,Hh)===null||Un.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Un.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=f.length;m<M;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,u.start),b=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let _=y,T=b;_<T;_+=3){let E=a.getX(_),R=a.getX(_+1),v=a.getX(_+2);s=Io(this,p,t,i,c,h,d,E,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),M=Math.min(a.count,u.start+u.count);for(let g=m,p=M;g<p;g+=3){let y=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);s=Io(this,o,t,i,c,h,d,y,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,M=f.length;m<M;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,u.start),b=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let _=y,T=b;_<T;_+=3){let E=_,R=_+1,v=_+2;s=Io(this,p,t,i,c,h,d,E,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let g=m,p=M;g<p;g+=3){let y=g,b=g+1,_=g+2;s=Io(this,o,t,i,c,h,d,y,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Vd(n,t,e,i,s,r,o,a){let l;if(t.side===Ce?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Mn,a),l===null)return null;Po.copy(a),Po.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Po);return c<e.near||c>e.far?null:{distance:c,point:Po.clone(),object:n}}function Io(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,wo),n.getVertexPosition(l,Ao),n.getVertexPosition(c,Ro);let h=Vd(n,t,e,i,wo,Ao,Ro,Gh);if(h){let d=new P;dn.getBarycoord(Gh,wo,Ao,Ro,d),s&&(h.uv=dn.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(h.uv1=dn.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};dn.getNormal(wo,Ao,Ro,f.normal),h.face=f,h.barycoord=d}return h}var Hn=class extends je{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Re,h=Re,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Es=class extends xe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new ne,kh=new ne,Lo=[],Vh=new Bi,Wd=new ne,nr=new Gt,sr=new $i,Ei=class extends Gt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Wd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),Vh.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(Vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),sr.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(i),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),kh.multiplyMatrices(i,fs),nr.matrixWorld=kh,nr.raycast(t,Lo);for(let o=0,a=Lo.length;o<a;o++){let l=Lo[o];l.instanceId=r,l.object=this,e.push(l)}Lo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hn(new Float32Array(s*this.count),s,this.count,Ns,di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nn=new $i,Xd=new st(.5,.5),Do=new P,Ts=class{constructor(t=new Mi,e=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Si,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],M=r[9],g=r[10],p=r[11],y=r[12],b=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-o,u-h,p-m,T-y).normalize(),s[1].setComponents(c+o,u+h,p+m,T+y).normalize(),s[2].setComponents(c+a,u+d,p+M,T+b).normalize(),s[3].setComponents(c-a,u-d,p-M,T-b).normalize(),i)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,u-f,p-g,T-_).normalize();else if(s[4].setComponents(c-l,u-f,p-g,T-_).normalize(),e===Si)s[5].setComponents(c+l,u+f,p+g,T+_).normalize();else if(e===vs)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){Nn.center.set(0,0,0);let e=Xd.distanceTo(t.center);return Nn.radius=.7071067811865476+e,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Do.x=s.normal.x>0?t.max.x:t.min.x,Do.y=s.normal.y>0?t.max.y:t.min.y,Do.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ta=class extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wh=new ne,dc=new vr,Uo=new $i,No=new P,Gn=class extends Ne{constructor(t=new me,e=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;Wh.copy(s).invert(),dc.copy(t.ray).applyMatrix4(Wh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=f,M=u;m<M;m++){let g=c.getX(m);No.fromBufferAttribute(d,g),Xh(No,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let m=f,M=u;m<M;m++)No.fromBufferAttribute(d,m),Xh(No,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xh(n,t,e,i,s,r,o){let a=dc.distanceSqToPoint(n);if(a<e){let l=new P;dc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends je{constructor(t=[],e=Sn,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kn=class extends je{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pn=class extends je{constructor(t,e,i=Pi,s,r,o,a=Re,l=Re,c,h=Ni,d=1){if(h!==Ni&&h!==En)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends pn{constructor(t,e=Pi,i=Sn,s,r,o=Re,a=Re,l,c=Ni){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mr=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yt=class n extends me{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function m(M,g,p,y,b,_,T,E,R,v,w){let C=_/R,U=T/v,F=_/2,z=T/2,L=E/2,O=R+1,W=v+1,X=0,nt=0,q=new P;for(let Q=0;Q<W;Q++){let et=Q*U-z;for(let It=0;It<O;It++){let wt=It*C-F;q[M]=wt*y,q[g]=et*b,q[p]=L,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(It/R),d.push(1-Q/v),X+=1}}for(let Q=0;Q<v;Q++)for(let et=0;et<R;et++){let It=f+et+O*Q,wt=f+et+O*(Q+1),ce=f+(et+1)+O*(Q+1),jt=f+(et+1)+O*Q;l.push(It,wt,jt),l.push(wt,ce,jt),nt+=6}a.addGroup(u,nt,w),u+=nt,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ti=class n extends me{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,m=i*2+r,M=s+1,g=new P,p=new P;for(let y=0;y<=m;y++){let b=0,_=0,T=0,E=0;if(y<=i){let w=y/i,C=w*Math.PI/2;_=-h-t*Math.cos(C),T=t*Math.sin(C),E=-t*Math.cos(C),b=w*d}else if(y<=i+r){let w=(y-i)/r;_=-h+w*e,T=t,E=0,b=d+w*f}else{let w=(y-i-r)/i,C=w*Math.PI/2;_=h+t*Math.sin(C),T=t*Math.cos(C),E=t*Math.sin(C),b=d+f+w*d}let R=Math.max(0,Math.min(1,b/u)),v=0;y===0?v=.5/s:y===m&&(v=-.5/s);for(let w=0;w<=s;w++){let C=w/s,U=C*Math.PI*2,F=Math.sin(U),z=Math.cos(U);p.x=-T*z,p.y=_,p.z=T*F,a.push(p.x,p.y,p.z),g.set(-T*z,E,T*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+v,R)}if(y>0){let w=(y-1)*M;for(let C=0;C<s;C++){let U=w+C,F=w+C+1,z=y*M+C,L=y*M+C+1;o.push(U,F,z),o.push(F,L,z)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var se=class n extends me{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],m=0,M=[],g=i/2,p=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(u,2));function y(){let _=new P,T=new P,E=0,R=(e-t)/i;for(let v=0;v<=r;v++){let w=[],C=v/r,U=C*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,L=z*l+a,O=Math.sin(L),W=Math.cos(L);T.x=U*O,T.y=-C*i+g,T.z=U*W,d.push(T.x,T.y,T.z),_.set(O,R,W).normalize(),f.push(_.x,_.y,_.z),u.push(z,1-C),w.push(m++)}M.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let C=M[w][v],U=M[w+1][v],F=M[w+1][v+1],z=M[w][v+1];(t>0||w!==0)&&(h.push(C,U,z),E+=3),(e>0||w!==r-1)&&(h.push(U,F,z),E+=3)}c.addGroup(p,E,0),p+=E}function b(_){let T=m,E=new st,R=new P,v=0,w=_===!0?t:e,C=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),f.push(0,C,0),u.push(.5,.5),m++;let U=m;for(let F=0;F<=s;F++){let L=F/s*l+a,O=Math.cos(L),W=Math.sin(L);R.x=w*W,R.y=g*C,R.z=w*O,d.push(R.x,R.y,R.z),f.push(0,C,0),E.x=O*.5+.5,E.y=W*.5*C+.5,u.push(E.x,E.y),m++}for(let F=0;F<s;F++){let z=T+F,L=U+F;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class n extends se{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new ne;for(let u=0;u<=t;u++){let m=u/t;s[u]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Kt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Kt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ws=class extends oi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ia=class extends ws{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var qh=new P,Yh=new P,sc=new Fc,rc=new Fc,oc=new Fc,As=class extends oi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yh.subVectors(s[0],s[1]).add(s[0]),c=Yh);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),M=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),sc.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,M,g),rc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,M,g),oc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,M,g)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),rc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),oc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(sc.calc(l),rc.calc(l),oc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zh(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function qd(n,t){let e=1-n;return e*e*t}function Yd(n,t){return 2*(1-n)*n*t}function Zd(n,t){return n*n*t}function lr(n,t,e,i){return qd(n,t)+Yd(n,e)+Zd(n,i)}function Jd(n,t){let e=1-n;return e*e*e*t}function $d(n,t){let e=1-n;return 3*e*e*n*t}function Kd(n,t){return 3*(1-n)*n*n*t}function Qd(n,t){return n*n*n*t}function cr(n,t,e,i,s){return Jd(n,t)+$d(n,e)+Kd(n,i)+Qd(n,s)}var Sr=class extends oi{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends oi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends oi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends oi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends oi{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends oi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Zh(a,l.x,c.x,h.x,d.x),Zh(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},ra=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:As,CubicBezierCurve:Sr,CubicBezierCurve3:na,EllipseCurve:ws,LineCurve:br,LineCurve3:sa,QuadraticBezierCurve:Er,QuadraticBezierCurve3:Tr,SplineCurve:wr}),oa=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ra[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ra[s.type]().fromJSON(s))}return this}},Ar=class extends oa{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new br(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Er(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Sr(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new wr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new ws(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ki=class extends Ar{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ar().fromJSON(s))}return this}};function jd(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Vu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=sp(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,d=l;for(let f=e;f<s;f+=e){let u=n[f],m=n[f+1];u<a&&(a=u),m<l&&(l=m),u>h&&(h=u),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Rr(r,o,e,a,l,c,0),o}function Vu(n,t,e,i,s){let r;if(s===mp(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Jh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Jh(o/i|0,n[o],n[o+1],r);return r&&Rs(r,r.next)&&(Pr(r),r=r.next),r}function Vn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Rs(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&cp(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ep(n,i,s,r):tp(n)){t.push(l.i,n.i,c.i),Pr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=ip(Vn(n),t),Rr(n,t,e,i,s,r,2)):o===2&&np(n,t,e,i,s,r):Rr(Vn(n),t,e,i,s,r,1);break}}}function tp(n){let t=n.prev,e=n,i=n.next;if(Ee(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&rr(s,a,r,l,o,c,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ep(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),m=Math.min(h,d,f),M=Math.max(a,l,c),g=Math.max(h,d,f),p=pc(u,m,t,e,i),y=pc(M,g,t,e,i),b=n.prevZ,_=n.nextZ;for(;b&&b.z>=p&&_&&_.z<=y;){if(b.x>=u&&b.x<=M&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&rr(a,h,l,d,c,f,b.x,b.y)&&Ee(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=u&&_.x<=M&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&rr(a,h,l,d,c,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=u&&b.x<=M&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&rr(a,h,l,d,c,f,b.x,b.y)&&Ee(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=u&&_.x<=M&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&rr(a,h,l,d,c,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ip(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Rs(i,s)&&Xu(i,e,e.next,s)&&Cr(i,s)&&Cr(s,i)&&(t.push(i.i,e.i,s.i),Pr(e),Pr(e.next),e=n=s),e=e.next}while(e!==n);return Vn(e)}function np(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fp(o,a)){let l=qu(o,a);o=Vn(o,o.next),l=Vn(l,l.next),Rr(o,t,e,i,s,r,0),Rr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function sp(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Vu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(up(c))}s.sort(rp);for(let r=0;r<s.length;r++)e=op(s[r],e);return e}function rp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function op(n,t){let e=ap(n,t);if(!e)return t;let i=qu(e,n);return Vn(i,i.next),Vn(e,e.next)}function ap(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Rs(n,e))return e;do{if(Rs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Wu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Cr(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&lp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function lp(n,t){return Ee(n.prev,n,t.prev)<0&&Ee(t.next,n,n.next)<0}function cp(n,t,e,i){let s=n;do s.z===0&&(s.z=pc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,hp(s)}function hp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function pc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function up(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Wu(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function rr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Wu(n,t,e,i,s,r,o,a)}function fp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!dp(n,t)&&(Cr(n,t)&&Cr(t,n)&&pp(n,t)&&(Ee(n.prev,n,t.prev)||Ee(n,t.prev,t))||Rs(n,t)&&Ee(n.prev,n,n.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Rs(n,t){return n.x===t.x&&n.y===t.y}function Xu(n,t,e,i){let s=Bo(Ee(n,t,e)),r=Bo(Ee(n,t,i)),o=Bo(Ee(e,i,n)),a=Bo(Ee(e,i,t));return!!(s!==r&&o!==a||s===0&&Fo(n,e,t)||r===0&&Fo(n,i,t)||o===0&&Fo(e,n,i)||a===0&&Fo(e,t,i))}function Fo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Bo(n){return n>0?1:n<0?-1:0}function dp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Xu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Cr(n,t){return Ee(n.prev,n,n.next)<0?Ee(n,t,n.next)>=0&&Ee(n,n.prev,t)>=0:Ee(n,t,n.prev)<0||Ee(n,n.next,t)<0}function pp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function qu(n,t){let e=mc(n.i,n.x,n.y),i=mc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Jh(n,t,e,i){let s=mc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var gc=class{static triangulate(t,e,i=2){return jd(t,e,i)}},Fn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];$h(t),Kh(i,t);let o=t.length;e.forEach($h);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kh(i,e[l]);let a=gc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $h(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Kh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var mn=class n extends me{constructor(t=new Ki([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:u-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gp,b,_=!1,T,E,R,v;if(p){b=p.getSpacedPoints(h),_=!0,f=!1;let tt=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,tt),E=new P,R=new P,v=new P}f||(g=0,u=0,m=0,M=0);let w=a.extractPoints(c),C=w.shape,U=w.holes;if(!Fn.isClockWise(C)){C=C.reverse();for(let tt=0,rt=U.length;tt<rt;tt++){let ot=U[tt];Fn.isClockWise(ot)&&(U[tt]=ot.reverse())}}function z(tt){let ot=10000000000000001e-36,at=tt[0];for(let ut=1;ut<=tt.length;ut++){let Ft=ut%tt.length,Nt=tt[Ft],Vt=Nt.x-at.x,Xt=Nt.y-at.y,I=Vt*Vt+Xt*Xt,he=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(at.x),Math.abs(at.y)),te=ot*he*he;if(I<=te){tt.splice(Ft,1),ut--;continue}at=Nt}}z(C),U.forEach(z);let L=U.length,O=C;for(let tt=0;tt<L;tt++){let rt=U[tt];C=C.concat(rt)}function W(tt,rt,ot){return rt||Ht("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,ot)}let X=C.length;function nt(tt,rt,ot){let at,ut,Ft,Nt=tt.x-rt.x,Vt=tt.y-rt.y,Xt=ot.x-tt.x,I=ot.y-tt.y,he=Nt*Nt+Vt*Vt,te=Nt*I-Vt*Xt;if(Math.abs(te)>Number.EPSILON){let A=Math.sqrt(he),x=Math.sqrt(Xt*Xt+I*I),B=rt.x-Vt/A,k=rt.y+Nt/A,Y=ot.x-I/x,ct=ot.y+Xt/x,ht=((Y-B)*I-(ct-k)*Xt)/(Nt*I-Vt*Xt);at=B+Nt*ht-tt.x,ut=k+Vt*ht-tt.y;let Z=at*at+ut*ut;if(Z<=2)return new st(at,ut);Ft=Math.sqrt(Z/2)}else{let A=!1;Nt>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Nt<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Vt)===Math.sign(I)&&(A=!0),A?(at=-Vt,ut=Nt,Ft=Math.sqrt(he)):(at=Nt,ut=Vt,Ft=Math.sqrt(he/2))}return new st(at/Ft,ut/Ft)}let q=[];for(let tt=0,rt=O.length,ot=rt-1,at=tt+1;tt<rt;tt++,ot++,at++)ot===rt&&(ot=0),at===rt&&(at=0),q[tt]=nt(O[tt],O[ot],O[at]);let Q=[],et,It=q.concat();for(let tt=0,rt=L;tt<rt;tt++){let ot=U[tt];et=[];for(let at=0,ut=ot.length,Ft=ut-1,Nt=at+1;at<ut;at++,Ft++,Nt++)Ft===ut&&(Ft=0),Nt===ut&&(Nt=0),et[at]=nt(ot[at],ot[Ft],ot[Nt]);Q.push(et),It=It.concat(et)}let wt;if(g===0)wt=Fn.triangulateShape(O,U);else{let tt=[],rt=[];for(let ot=0;ot<g;ot++){let at=ot/g,ut=u*Math.cos(at*Math.PI/2),Ft=m*Math.sin(at*Math.PI/2)+M;for(let Nt=0,Vt=O.length;Nt<Vt;Nt++){let Xt=W(O[Nt],q[Nt],Ft);vt(Xt.x,Xt.y,-ut),at===0&&tt.push(Xt)}for(let Nt=0,Vt=L;Nt<Vt;Nt++){let Xt=U[Nt];et=Q[Nt];let I=[];for(let he=0,te=Xt.length;he<te;he++){let A=W(Xt[he],et[he],Ft);vt(A.x,A.y,-ut),at===0&&I.push(A)}at===0&&rt.push(I)}}wt=Fn.triangulateShape(tt,rt)}let ce=wt.length,jt=m+M;for(let tt=0;tt<X;tt++){let rt=f?W(C[tt],It[tt],jt):C[tt];_?(R.copy(T.normals[0]).multiplyScalar(rt.x),E.copy(T.binormals[0]).multiplyScalar(rt.y),v.copy(b[0]).add(R).add(E),vt(v.x,v.y,v.z)):vt(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<X;rt++){let ot=f?W(C[rt],It[rt],jt):C[rt];_?(R.copy(T.normals[tt]).multiplyScalar(ot.x),E.copy(T.binormals[tt]).multiplyScalar(ot.y),v.copy(b[tt]).add(R).add(E),vt(v.x,v.y,v.z)):vt(ot.x,ot.y,d/h*tt)}for(let tt=g-1;tt>=0;tt--){let rt=tt/g,ot=u*Math.cos(rt*Math.PI/2),at=m*Math.sin(rt*Math.PI/2)+M;for(let ut=0,Ft=O.length;ut<Ft;ut++){let Nt=W(O[ut],q[ut],at);vt(Nt.x,Nt.y,d+ot)}for(let ut=0,Ft=U.length;ut<Ft;ut++){let Nt=U[ut];et=Q[ut];for(let Vt=0,Xt=Nt.length;Vt<Xt;Vt++){let I=W(Nt[Vt],et[Vt],at);_?vt(I.x,I.y+b[h-1].y,b[h-1].x+ot):vt(I.x,I.y,d+ot)}}}re(),J();function re(){let tt=s.length/3;if(f){let rt=0,ot=X*rt;for(let at=0;at<ce;at++){let ut=wt[at];zt(ut[2]+ot,ut[1]+ot,ut[0]+ot)}rt=h+g*2,ot=X*rt;for(let at=0;at<ce;at++){let ut=wt[at];zt(ut[0]+ot,ut[1]+ot,ut[2]+ot)}}else{for(let rt=0;rt<ce;rt++){let ot=wt[rt];zt(ot[2],ot[1],ot[0])}for(let rt=0;rt<ce;rt++){let ot=wt[rt];zt(ot[0]+X*h,ot[1]+X*h,ot[2]+X*h)}}i.addGroup(tt,s.length/3-tt,0)}function J(){let tt=s.length/3,rt=0;j(O,rt),rt+=O.length;for(let ot=0,at=U.length;ot<at;ot++){let ut=U[ot];j(ut,rt),rt+=ut.length}i.addGroup(tt,s.length/3-tt,1)}function j(tt,rt){let ot=tt.length;for(;--ot>=0;){let at=ot,ut=ot-1;ut<0&&(ut=tt.length-1);for(let Ft=0,Nt=h+g*2;Ft<Nt;Ft++){let Vt=X*Ft,Xt=X*(Ft+1),I=rt+at+Vt,he=rt+ut+Vt,te=rt+ut+Xt,A=rt+at+Xt;bt(I,he,te,A)}}}function vt(tt,rt,ot){l.push(tt),l.push(rt),l.push(ot)}function zt(tt,rt,ot){kt(tt),kt(rt),kt(ot);let at=s.length/3,ut=y.generateTopUV(i,s,at-3,at-2,at-1);de(ut[0]),de(ut[1]),de(ut[2])}function bt(tt,rt,ot,at){kt(tt),kt(rt),kt(at),kt(rt),kt(ot),kt(at);let ut=s.length/3,Ft=y.generateSideWallUV(i,s,ut-6,ut-3,ut-2,ut-1);de(Ft[0]),de(Ft[1]),de(Ft[3]),de(Ft[1]),de(Ft[2]),de(Ft[3])}function kt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function de(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return xp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ra[s.type]().fromJSON(s)),new n(i,t.options)}},gp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],f=t[s*3],u=t[s*3+1],m=t[s*3+2],M=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-d),new st(f,1-m),new st(M,1-p)]:[new st(a,1-l),new st(h,1-d),new st(u,1-m),new st(g,1-p)]}};function xp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cs=class n extends me{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new P,f=new st,u=new P,m=new P,M=new P,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-g,u.z=p*0,M.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=M.x,u.y+=M.y,u.z+=M.z,u.normalize(),l.push(u.x,u.y,u.z),M.copy(m)}for(let y=0;y<=e;y++){let b=i+y*h*s,_=Math.sin(b),T=Math.cos(b);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*T,o.push(d.x,d.y,d.z),f.x=y/e,f.y=E/(t.length-1),a.push(f.x,f.y);let R=l[3*E+0]*_,v=l[3*E+1],w=l[3*E+0]*T;c.push(R,v,w)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){let _=b+y*t.length,T=_,E=_+t.length,R=_+t.length+1,v=_+1;r.push(T,E,v),r.push(R,v,E)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Ai=class n extends me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],M=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let b=0;b<c;b++){let _=b*d-r;m.push(_,-y,0),M.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let b=y+c*p,_=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;u.push(b,_,E),u.push(_,T,E)}this.setIndex(u),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zt=class n extends me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,f=new P,u=[],m=[],M=[],g=[];for(let p=0;p<=i;p++){let y=[],b=p/i,_=o+b*a,T=t*Math.cos(_),E=Math.sqrt(t*t-T*T),R=0;p===0&&o===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){let w=v/e,C=s+w*r;d.x=-E*Math.cos(C),d.y=T,d.z=E*Math.sin(C),m.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),g.push(w+R,1-b),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let b=h[p][y+1],_=h[p][y],T=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&u.push(b,_,E),(p!==i-1||l<Math.PI)&&u.push(_,T,E)}this.setIndex(u),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(M,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ei=class n extends me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new P,u=new P,m=new P;for(let M=0;M<=i;M++){let g=o+M/i*a;for(let p=0;p<=s;p++){let y=p/s*r;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=s;g++){let p=(s+1)*M+g-1,y=(s+1)*(M-1)+g-1,b=(s+1)*(M-1)+g,_=(s+1)*M+g;l.push(p,y,_),l.push(y,b,_)}this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ir=class n extends me{constructor(t=new Tr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new st,h=new P,d=[],f=[],u=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(u,2));function M(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),y(),p()}function g(b){h=t.getPointAt(b/e,h);let _=o.normals[b],T=o.binormals[b];for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,v=Math.sin(R),w=-Math.cos(R);l.x=w*_.x+v*T.x,l.y=w*_.y+v*T.y,l.z=w*_.z+v*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let _=1;_<=s;_++){let T=(s+1)*(b-1)+(_-1),E=(s+1)*b+(_-1),R=(s+1)*b+_,v=(s+1)*(b-1)+_;m.push(T,E,v),m.push(E,R,v)}}function y(){for(let b=0;b<=e;b++)for(let _=0;_<=s;_++)c.x=b/e,c.y=_/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new ra[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Qh(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Qh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=Zn(n[e]);for(let s in i)t[s]=i[s]}return t}function Qh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _p(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var ji={clone:Zn,merge:Ze},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zn(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(s.value);break;case"v2":this.uniforms[i].value=new st().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ne().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ps=class extends ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gn=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fs,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Lr=class extends bi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fs,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Dr=class extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fs,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Sa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},aa=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ds(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ac(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends xn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hc,endingEnd:hc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uc:r=t,a=2*e-i;break;case fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uc:o=t,l=2*i-e;break;case fc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(i-e)/(s-e),M=m*m,g=M*m,p=-f*g+2*f*M-f*m,y=(1+f)*g+(-1.5-2*f)*M+(-.5+f)*m+1,b=(-1-u)*g+(1.5+u)*M+.5*m,_=u*g-u*M;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+y*o[c+T]+b*o[l+T]+_*o[d+T];return r}},ha=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},ua=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends xn{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(s-e),M=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*M+o[l+g]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let M=o[c+m],g=o[l+m],p=u*f+m*2,y=d[p],b=d[p+1],_=t*f+m*2,T=h[_],E=h[_+1],R=Sp(i,e,y,T,s);r[m]=Yu(R,M,b,E,g)}return r}};function Yu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Mp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Sp(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Yu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Mp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ai=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ds(e,this.TimeBufferType),this.values=ds(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ds(t.times,Array),values:ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ac(t.settings)&&(i.settings={inTangents:ds(t.settings.inTangents,Array),outTangents:ds(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Ho:e=this.InterpolantFactoryMethodSmooth;break;case cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ac(this.settings)&&(jh(this.settings.inTangents,t),jh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&hd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let m=0;m!==i;++m){let M=e[d+m];if(M!==e[f+m]||M!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ac(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=$o;var _n=class extends ai{constructor(t,e,i){super(t,e,i)}};_n.prototype.ValueTypeName="bool";_n.prototype.ValueBufferType=Array;_n.prototype.DefaultInterpolation=hr;_n.prototype.InterpolantFactoryMethodLinear=void 0;_n.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends ai{constructor(t,e,i,s){super(t,e,i,s)}};da.prototype.ValueTypeName="color";var pa=class extends ai{constructor(t,e,i,s){super(t,e,i,s)}};pa.prototype.ValueTypeName="number";var ma=class extends xn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ur=class extends ai{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var vn=class extends ai{constructor(t,e,i){super(t,e,i)}};vn.prototype.ValueTypeName="string";vn.prototype.ValueBufferType=Array;vn.prototype.DefaultInterpolation=hr;vn.prototype.InterpolantFactoryMethodLinear=void 0;vn.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends ai{constructor(t,e,i,s){super(t,e,i,s)}};ga.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zu=new xa,_a=class{constructor(t){this.manager=t!==void 0?t:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Nr=class extends Is{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lc=new ne,tu=new P,eu=new P,Fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oo=new P,zo=new ke,Di=new P,Br=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oo,zo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,zo,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Oo,zo,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,zo,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fn=new P,iu=new st,nu=new st,He=class extends Br{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,iu,nu),e.subVectors(nu,iu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xc=class extends Fr{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},Or=class extends Is{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},yn=class extends Br{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends Fr{constructor(){super(new yn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zr=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ps=-90,ms=1,va=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new He(ps,ms,t,e);r.layers=this.layers,this.add(r);let o=new He(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new He(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new He(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new He(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ya=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Hr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=bp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function bp(){this._document.hidden===!1&&this.reset()}var Oc="\\[\\]\\.:\\/",Ep=new RegExp("["+Oc+"]","g"),zc="[^"+Oc+"]",Tp="[^"+Oc.replace("\\.","")+"]",wp=/((?:WC+[\/:])*)/.source.replace("WC",zc),Ap=/(WCOD+)?/.source.replace("WCOD",Tp),Rp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Cp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Pp=new RegExp("^"+wp+Ap+Rp+Cp+"$"),Ip=["material","materials","bones","map"],vc=class{constructor(t,e,i){let s=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ep,"")}static parseTrackName(t){let e=Pp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ip.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=vc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dv=new Float32Array(1);var Xc=class Xc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Xc.prototype.isMatrix2=!0;var yc=Xc;function Hc(n,t,e,i){let s=Lp(i);switch(e){case Ic:return n*t;case Ns:return n*t/s.components*s.byteLength;case Ca:return n*t/s.components*s.byteLength;case Tn:return n*t*2/s.components*s.byteLength;case Pa:return n*t*2/s.components*s.byteLength;case Lc:return n*t*3/s.components*s.byteLength;case pi:return n*t*4/s.components*s.byteLength;case Ia:return n*t*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:case Na:return Math.max(n,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(n,8)*Math.max(t,8)/2;case Fa:case Ba:case za:case Ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Oa:case to:case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case il:case nl:case sl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case eo:case al:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lp(n){switch(n){case ni:case Ac:return{byteLength:1,components:1};case Ds:case Rc:case Ve:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case Pi:case wa:case di:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],M=d[u];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++f,d[f]=M)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let M=d[u];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Om=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Hp,alphahash_pars_fragment:Gp,alphamap_fragment:kp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:Jp,begin_vertex:$p,beginnormal_vertex:Kp,bsdfs:Qp,iridescence_fragment:jp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:nm,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:_m,envmap_common_pars_fragment:vm,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:Sm,fog_vertex:bm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:wm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Um,lights_phong_fragment:Nm,lights_phong_pars_fragment:Fm,lights_physical_fragment:Bm,lights_physical_pars_fragment:Om,lights_fragment_begin:zm,lights_fragment_maps:Hm,lights_fragment_end:Gm,lightprobes_pars_fragment:km,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:$m,metalnessmap_fragment:Km,metalnessmap_pars_fragment:Qm,morphinstance_vertex:jm,morphcolor_vertex:t0,morphnormal_vertex:e0,morphtarget_pars_vertex:i0,morphtarget_vertex:n0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:x0,dithering_fragment:_0,dithering_pars_fragment:v0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:b0,shadowmap_vertex:E0,shadowmask_pars_fragment:T0,skinbase_vertex:w0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:L0,tonemapping_pars_fragment:D0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:O0,worldpos_vertex:z0,background_vert:H0,background_frag:G0,backgroundCube_vert:k0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distance_vert:Z0,distance_frag:J0,equirect_vert:$0,equirect_frag:K0,linedashed_vert:Q0,linedashed_frag:j0,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ig,meshlambert_frag:ng,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:xg,sprite_vert:_g,sprite_frag:vg},_t={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Gi={basic:{uniforms:Ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ze([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ze([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ft(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ze([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ze([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ze([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ze([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ze([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ze([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ze([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ze([_t.lights,_t.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Gi.physical={uniforms:Ze([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var hl={r:0,b:0,g:0},yg=new ne,_f=new Wt;_f.set(-1,0,0,0,1,0,0,0,1);function Mg(n,t,e,i,s,r){let o=new ft(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let _=y.backgroundBlurriness>0;b=t.get(b,_)}return b}function m(y){let b=!1,_=u(y);_===null?g(o,a):_&&_.isColor&&(g(_,1),b=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,b){let _=u(b);_&&(_.isCubeTexture||_.mapping===Zr)?(c===void 0&&(c=new Gt(new Yt(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:Zn(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_f),c.material.toneMapped=Qt.getTransfer(_.colorSpace)!==le,(h!==_||d!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Gt(new Ai(2,2),new ae({name:"BackgroundMaterial",uniforms:Zn(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(hl,Bc(n)),e.buffers.color.setClear(hl.r,hl.g,hl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:M,dispose:p}}function Sg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(U,F,z,L,O){let W=!1,X=d(U,L,z,F);r!==X&&(r=X,c(r.object)),W=u(U,L,z,O),W&&m(U,L,z,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(U,F,z,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function d(U,F,z,L){let O=L.wireframe===!0,W=i[F.id];W===void 0&&(W={},i[F.id]=W);let X=U.isInstancedMesh===!0?U.id:0,nt=W[X];nt===void 0&&(nt={},W[X]=nt);let q=nt[z.id];q===void 0&&(q={},nt[z.id]=q);let Q=q[O];return Q===void 0&&(Q=f(l()),q[O]=Q),Q}function f(U){let F=[],z=[],L=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:U,attributes:{},index:null}}function u(U,F,z,L){let O=r.attributes,W=F.attributes,X=0,nt=z.getAttributes();for(let q in nt)if(nt[q].location>=0){let et=O[q],It=W[q];if(It===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(It=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(It=U.instanceColor)),et===void 0||et.attribute!==It||It&&et.data!==It.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function m(U,F,z,L){let O={},W=F.attributes,X=0,nt=z.getAttributes();for(let q in nt)if(nt[q].location>=0){let et=W[q];et===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let It={};It.attribute=et,et&&et.data&&(It.data=et.data),O[q]=It,X++}r.attributes=O,r.attributesNum=X,r.index=L}function M(){let U=r.newAttributes;for(let F=0,z=U.length;F<z;F++)U[F]=0}function g(U){p(U,0)}function p(U,F){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),O[U]!==F&&(n.vertexAttribDivisor(U,F),O[U]=F)}function y(){let U=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==U[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function b(U,F,z,L,O,W,X){X===!0?n.vertexAttribIPointer(U,F,z,O,W):n.vertexAttribPointer(U,F,z,L,O,W)}function _(U,F,z,L){M();let O=L.attributes,W=z.getAttributes(),X=F.defaultAttributeValues;for(let nt in W){let q=W[nt];if(q.location>=0){let Q=O[nt];if(Q===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let et=Q.normalized,It=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;let ce=wt.buffer,jt=wt.type,re=wt.bytesPerElement,J=jt===n.INT||jt===n.UNSIGNED_INT||Q.gpuType===wa;if(Q.isInterleavedBufferAttribute){let j=Q.data,vt=j.stride,zt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let bt=0;bt<q.locationSize;bt++)p(q.location+bt,j.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let bt=0;bt<q.locationSize;bt++)g(q.location+bt);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let bt=0;bt<q.locationSize;bt++)b(q.location+bt,It/q.locationSize,jt,et,vt*re,(zt+It/q.locationSize*bt)*re,J)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,Q.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<q.locationSize;j++)g(q.location+j);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let j=0;j<q.locationSize;j++)b(q.location+j,It/q.locationSize,jt,et,It*re,It/q.locationSize*j*re,J)}}else if(X!==void 0){let et=X[nt];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(q.location,et);break;case 3:n.vertexAttrib3fv(q.location,et);break;case 4:n.vertexAttrib4fv(q.location,et);break;default:n.vertexAttrib1fv(q.location,et)}}}}y()}function T(){w();for(let U in i){let F=i[U];for(let z in F){let L=F[z];for(let O in L){let W=L[O];for(let X in W)h(W[X].object),delete W[X];delete L[O]}}delete i[U]}}function E(U){if(i[U.id]===void 0)return;let F=i[U.id];for(let z in F){let L=F[z];for(let O in L){let W=L[O];for(let X in W)h(W[X].object),delete W[X];delete L[O]}}delete i[U.id]}function R(U){for(let F in i){let z=i[F];for(let L in z){let O=z[L];if(O[U.id]===void 0)continue;let W=O[U.id];for(let X in W)h(W[X].object),delete W[X];delete O[U.id]}}}function v(U){for(let F in i){let z=i[F],L=U.isInstancedMesh===!0?U.id:0,O=z[L];if(O!==void 0){for(let W in O){let X=O[W];for(let nt in X)h(X[nt].object),delete X[nt];delete O[W]}delete z[L],Object.keys(z).length===0&&delete i[F]}}}function w(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function bg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Eg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==pi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===Ve&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&R!==di&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:T,samples:E}}function Tg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Mi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,b=y*4,_=p.clippingState||null;l.value=_,_=h(m,f,b,u);for(let T=0;T!==b;++T)_[T]=e[T];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,m){let M=d!==null?d.length:0,g=null;if(M!==0){if(g=l.value,m!==!0||g===null){let p=u+M*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=u;b!==M;++b,_+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Os=4,wg=6,Ag=20,Rg=256,no=new yn,Ju=new ft,qc=null,Yc=0,Zc=0,Jc=!1,Cg=new P,Jn=new P,Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Cg}=r;qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qc,Yc,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sn||t.mapping===qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Ve,format:pi,colorSpace:ur,depthBuffer:!1},s=$u(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Lg(r,t,e),this._ggxMaterial=Ig(r,t,e)}return s}_compileMaterial(t){let e=new Gt(new me,t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,i,s,r){let l=new He(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Ju),d.toneMapping=Ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Yt,new Oi({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,p=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,p=!0):(g.color.copy(Ju),p=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;Bs(s,_*T,b>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Sn||t.mapping===qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,no)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-Os?i-m+Os:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=m-e,Bs(r,g,p,3*M,2*M),s.setRenderTarget(r),s.render(a,no),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Bs(t,g,p,3*M,2*M),s.setRenderTarget(t),s.render(a,no)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Os?s-this._lodMax+Os:0),f=4*(this._cubeSize-h);Bs(e,d,f,3*h,2*h),o.setRenderTarget(e),o.render(l,no)}};function Pg(n){let t=[],e=[],i=n,s=n-Os+1+wg;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,m=new Float32Array(u*f*d),M=new Float32Array(u*f*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,b=p>2?0:-1,_=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];m.set(_,u*f*p);for(let T=0;T<f;T++){let E=h[T*2]*2-1,R=h[T*2+1]*2-1;p===0?Jn.set(1,R,E):p===1?Jn.set(-E,1,-R):p===2?Jn.set(-E,R,1):p===3?Jn.set(-1,R,-E):p===4?Jn.set(-E,-1,R):Jn.set(E,R,-1),Jn.toArray(M,(p*f+T)*u)}}let g=new me;g.setAttribute("position",new xe(m,u)),g.setAttribute("outputDirection",new xe(M,u)),e.push(new Gt(g,null)),i>Os&&i--}return{lodMeshes:e,sizeLods:t}}function $u(n,t,e){let i=new Le(n,t,e);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ig(n,t,e){return new ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Lg(n,t,e){return new ae({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ku(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Qu(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fl=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yt(5,5,5),r=new ae({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:ui});r.uniforms.tEquirect.value=e;let o=new Gt(s,r),a=e.minFilter;return e.minFilter===bn&&(e.minFilter=Ge),new va(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===ba||u===Ea)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let M=new fl(m.height);return M.fromEquirectangularTexture(n,f),t.set(f,M),f.addEventListener("dispose",c),a(M.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,m=u===ba||u===Ea,M=u===Sn||u===qn;if(m||M){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Hs(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new Hs(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,u){return u===ba?f.mapping=Sn:u===Ea&&(f.mapping=qn),f}function l(f){let u=0,m=6;for(let M=0;M<m;M++)f[M]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Ug(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Bn("WebGLRenderer: "+i+" extension not supported."),s}}}function Ng(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)t.update(f[u],n.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,m=d.attributes.position,M=0;if(m===void 0)return;if(u!==null){let y=u.array;M=u.version;for(let b=0,_=y.length;b<_;b+=3){let T=y[b+0],E=y[b+1],R=y[b+2];f.push(T,E,E,R,R,T)}}else{let y=m.array;M=m.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let T=b+0,E=b+1,R=b+2;f.push(T,E,E,R,R,T)}}let g=new(m.count>=65535?_r:xr)(f,1);g.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Fg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,u){u!==0&&(n.drawElementsInstanced(i,f,r,d*o,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let M=0;for(let g=0;g<u;g++)M+=f[g];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Og(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;u===!0&&(b=1),m===!0&&(b=2),M===!0&&(b=3);let _=a.attributes.position.count*b,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*T*4*d),R=new pr(E,_,T,d);R.type=di,R.needsUpdate=!0;let v=b*4;for(let C=0;C<d;C++){let U=g[C],F=p[C],z=y[C],L=_*T*4*C;for(let O=0;O<U.count;O++){let W=O*v;u===!0&&(s.fromBufferAttribute(U,O),E[L+W+0]=s.x,E[L+W+1]=s.y,E[L+W+2]=s.z,E[L+W+3]=0),m===!0&&(s.fromBufferAttribute(F,O),E[L+W+4]=s.x,E[L+W+5]=s.y,E[L+W+6]=s.z,E[L+W+7]=0),M===!0&&(s.fromBufferAttribute(z,O),E[L+W+8]=s.x,E[L+W+9]=s.y,E[L+W+10]=s.z,E[L+W+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new st(_,T)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let u=0;for(let M=0;M<c.length;M++)u+=c[M];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function zg(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Hg={[kr]:"LINEAR_TONE_MAPPING",[Vr]:"REINHARD_TONE_MAPPING",[Wr]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[Yr]:"AGX_TONE_MAPPING",[Xn]:"NEUTRAL_TONE_MAPPING",[qr]:"CUSTOM_TONE_MAPPING"};function Gg(n,t,e,i,s,r){let o=new Le(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new me;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let h=new Ps({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Gt(c,h),f=new yn(-1,1,1,-1,0,1),u=null,m=null,M=!1,g,p=null,y=[],b=!1;this.setSize=function(_,T){o.setSize(_,T),a!==null&&a.setSize(_,T),l!==null&&l.setSize(_,T);for(let E=0;E<y.length;E++){let R=y[E];R.setSize&&R.setSize(_,T)}},this.setEffects=function(_){y=_,b=y.length>0&&y[0].isRenderPass===!0;let T=o.width,E=o.height;y.length>0&&a===null&&(a=new Le(T,E,{type:Ve,depthBuffer:!1,stencilBuffer:!1}),l=new Le(T,E,{type:Ve,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let v=y[R];v.setSize&&v.setSize(T,E)}},this.begin=function(_,T){if(M||_.toneMapping===Ci&&y.length===0)return!1;if(p=T,T!==null){let E=T.width,R=T.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return b===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Ci,!0},this.hasRenderPass=function(){return b},this.end=function(_,T){_.toneMapping=g,M=!0;let E=o,R=a;for(let v=0;v<y.length;v++){let w=y[v];w.enabled!==!1&&(w.render(_,R,E,T),w.needsSwap!==!1&&(E=R,R=R===a?l:a))}if(u!==_.outputColorSpace||m!==_.toneMapping){u=_.outputColorSpace,m=_.toneMapping,h.defines={},Qt.getTransfer(u)===le&&(h.defines.SRGB_TRANSFER="");let v=Hg[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(d,f),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vf=new je,Qc=new pn(1,1),yf=new pr,Mf=new jo,Sf=new yr,ju=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function Gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ml(n,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function kg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function Xg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function qg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),Be(e,i)}}function Yg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;nf.set(i),n.uniformMatrix3fv(this.addr,!1,nf),Be(e,i)}}function Zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,i))return;ef.set(i),n.uniformMatrix4fv(this.addr,!1,ef),Be(e,i)}}function Jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Kg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function nx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=Qc):r=vf,e.setTexture2D(t||r,s)}function sx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Mf,s)}function rx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Sf,s)}function ox(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yf,s)}function ax(n){switch(n){case 5126:return kg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return tx;case 36295:return ex;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(n,t){n.uniform1fv(this.addr,t)}function cx(n,t){let e=Gs(t,this.size,2);n.uniform2fv(this.addr,e)}function hx(n,t){let e=Gs(t,this.size,3);n.uniform3fv(this.addr,e)}function ux(n,t){let e=Gs(t,this.size,4);n.uniform4fv(this.addr,e)}function fx(n,t){let e=Gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function dx(n,t){let e=Gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function px(n,t){let e=Gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mx(n,t){n.uniform1iv(this.addr,t)}function gx(n,t){n.uniform2iv(this.addr,t)}function xx(n,t){n.uniform3iv(this.addr,t)}function _x(n,t){n.uniform4iv(this.addr,t)}function vx(n,t){n.uniform1uiv(this.addr,t)}function yx(n,t){n.uniform2uiv(this.addr,t)}function Mx(n,t){n.uniform3uiv(this.addr,t)}function Sx(n,t){n.uniform4uiv(this.addr,t)}function bx(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Qc:o=vf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ex(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mf,r[o])}function Tx(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sf,r[o])}function wx(n,t,e){let i=this.cache,s=t.length,r=ml(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yf,r[o])}function Ax(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return yx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return wx}}var jc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}},th=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ax(e.type)}},eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},$c=/(\w+)(\])?(\[|\.)?/g;function rf(n,t){n.seq.push(t),n.map[t.id]=t}function Rx(n,t,e){let i=n.name,s=i.length;for($c.lastIndex=0;;){let r=$c.exec(i),o=$c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rf(e,c===void 0?new jc(a,n,t):new th(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new eh(a),rf(e,d)),e=d}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Rx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function of(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Cx=37297,Px=0;function Ix(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var af=new Wt;function Lx(n){Qt._getMatrix(af,Qt.workingColorSpace,n);let t=`mat3( ${af.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case fr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ix(n.getShaderSource(t),a)}else return r}function Dx(n,t){let e=Lx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ux={[kr]:"Linear",[Vr]:"Reinhard",[Wr]:"Cineon",[Xr]:"ACESFilmic",[Yr]:"AgX",[Xn]:"Neutral",[qr]:"Custom"};function Nx(n,t){let e=Ux[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new P;function Fx(){Qt.getLuminanceCoefficients(ul);let n=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function Ox(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ro(n){return n!==""}function cf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(n){return n.replace(Hx,kx)}var Gx=new Map;function kx(n,t){let e=$t[t];if(e===void 0){let i=Gx.get(t);if(i!==void 0)e=$t[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ih(e)}var Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(Vx,Wx)}function Wx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Xx={[Gr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function qx(n){return Xx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yx={[Sn]:"ENVMAP_TYPE_CUBE",[qn]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function Zx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Yx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jx={[qn]:"ENVMAP_MODE_REFRACTION"};function $x(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Jx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[Sa]:"ENVMAP_BLENDING_MULTIPLY",[Tu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function Qx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[n.combine]||"ENVMAP_BLENDING_NONE"}function jx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function t_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qx(e),c=Zx(e),h=$x(e),d=Qx(e),f=jx(e),u=Bx(e),m=Ox(r),M=s.createProgram(),g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(g=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=ih(o),o=cf(o,e),o=hf(o,e),a=ih(a),a=cf(a,e),a=hf(a,e),o=uf(o),a=uf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+g+o,_=y+p+a,T=of(s,s.VERTEX_SHADER,b),E=of(s,s.FRAGMENT_SHADER,_);s.attachShader(M,T),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(U){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(E)||"",O=F.trim(),W=z.trim(),X=L.trim(),nt=!0,q=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,E);else{let Q=lf(s,T,"vertex"),et=lf(s,E,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+O+`
`+Q+`
`+et)}else O!==""?Ot("WebGLProgram: Program Info Log:",O):(W===""||X==="")&&(q=!1);q&&(U.diagnostics={runnable:nt,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(E),v=new zs(s,M),w=zx(s,M)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,Cx)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var e_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new sh(t),e.set(t,i)),i}},sh=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function i_(n){return n===Tn||n===to||n===eo}function n_(n,t,e,i,s,r){let o=new mr,a=new nh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,w,C,U,F,z){let L=U.fog,O=F.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||W,X),q=nt&&nt.mapping===Zr?nt.image.height:null,Q=u[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=et!==void 0?et.length:0,wt=0;O.morphAttributes.position!==void 0&&(wt=1),O.morphAttributes.normal!==void 0&&(wt=2),O.morphAttributes.color!==void 0&&(wt=3);let ce,jt,re,J;if(Q){let ve=Gi[Q];ce=ve.vertexShader,jt=ve.fragmentShader}else{ce=v.vertexShader,jt=v.fragmentShader;let ve=a.getVertexShaderStage(v),ue=a.getFragmentShaderStage(v);a.update(v,ve,ue),re=ve.id,J=ue.id}let j=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),zt=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,kt=!!v.map,de=!!v.matcap,tt=!!nt,rt=!!v.aoMap,ot=!!v.lightMap,at=!!v.bumpMap&&v.wireframe===!1,ut=!!v.normalMap,Ft=!!v.displacementMap,Nt=!!v.emissiveMap,Vt=!!v.metalnessMap,Xt=!!v.roughnessMap,I=v.anisotropy>0,he=v.clearcoat>0,te=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,k=v.transmission>0,Y=I&&!!v.anisotropyMap,ct=he&&!!v.clearcoatMap,ht=he&&!!v.clearcoatNormalMap,Z=he&&!!v.clearcoatRoughnessMap,K=x&&!!v.iridescenceMap,dt=x&&!!v.iridescenceThicknessMap,Lt=B&&!!v.sheenColorMap,xt=B&&!!v.sheenRoughnessMap,pt=!!v.specularMap,Dt=!!v.specularColorMap,Bt=!!v.specularIntensityMap,qt=k&&!!v.transmissionMap,N=k&&!!v.thicknessMap,mt=!!v.gradientMap,$=!!v.alphaMap,gt=v.alphaTest>0,St=!!v.alphaHash,it=!!v.extensions,Ut=Ci;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Ct={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:jt,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:zt,instancingColor:zt&&F.instanceColor!==null,instancingMorph:zt&&F.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:de,envMap:tt,envMapMode:tt&&nt.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:ot,bumpMap:at,normalMap:ut,displacementMap:Ft,emissiveMap:Nt,normalMapObjectSpace:ut&&v.normalMapType===Cu,normalMapTangentSpace:ut&&v.normalMapType===Fs,packedNormalMap:ut&&v.normalMapType===Fs&&i_(v.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:I,anisotropyMap:Y,clearcoat:he,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:Z,dispersion:te,retroreflection:A,iridescence:x,iridescenceMap:K,iridescenceThicknessMap:dt,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:pt,specularColorMap:Dt,specularIntensityMap:Bt,transmission:k,transmissionMap:qt,thicknessMap:N,gradientMap:mt,opaque:v.transparent===!1&&v.blending===fi&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:gt,alphaHash:St,combine:v.combine,mapUv:kt&&m(v.map.channel),aoMapUv:rt&&m(v.aoMap.channel),lightMapUv:ot&&m(v.lightMap.channel),bumpMapUv:at&&m(v.bumpMap.channel),normalMapUv:ut&&m(v.normalMap.channel),displacementMapUv:Ft&&m(v.displacementMap.channel),emissiveMapUv:Nt&&m(v.emissiveMap.channel),metalnessMapUv:Vt&&m(v.metalnessMap.channel),roughnessMapUv:Xt&&m(v.roughnessMap.channel),anisotropyMapUv:Y&&m(v.anisotropyMap.channel),clearcoatMapUv:ct&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&m(v.sheenRoughnessMap.channel),specularMapUv:pt&&m(v.specularMap.channel),specularColorMapUv:Dt&&m(v.specularColorMap.channel),specularIntensityMapUv:Bt&&m(v.specularIntensityMap.channel),transmissionMapUv:qt&&m(v.transmissionMap.channel),thicknessMapUv:N&&m(v.thicknessMap.channel),alphaMapUv:$&&m(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||I),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(kt||$),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ut===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:wt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(p(w,v),y(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let w=u[v.type],C;if(w){let U=Gi[w];C=ji.clone(U.uniforms)}else C=v.uniforms;return C}function _(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new t_(n,w,v,s),c.push(C),h.set(w,C)),C}function T(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:R}}function s_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function r_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function df(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,M,g,p){let y=n[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:p},n[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=m,y.materialVariant=o(f),y.groupOrder=M,y.renderOrder=f.renderOrder,y.z=g,y.group=p),t++,y}function l(f,u,m,M,g,p,y){y.reversedDepth===!0&&(g=-g);let b=a(f,u,m,M,g,p);m.transmission>0?i.push(b):m.transparent===!0?s.push(b):e.push(b)}function c(f,u,m,M,g,p){let y=a(f,u,m,M,g,p);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,u){e.length>1&&e.sort(f||r_),i.length>1&&i.sort(u||df),s.length>1&&s.sort(u||df)}function d(){for(let f=t,u=n.length;f<u;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function o_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new pf,n.set(i,[o])):s>=r.length?(o=new pf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function a_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ft};break;case"SpotLight":e={position:new P,direction:new P,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function l_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var c_=0;function h_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function u_(n){let t=new a_,e=l_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new ne,o=new ne;function a(c){let h=0,d=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let u=0,m=0,M=0,g=0,p=0,y=0,b=0,_=0,T=0,E=0,R=0,v=0,w=0,C=0;c.sort(h_);for(let F=0,z=c.length;F<z;F++){let L=c[F],O=L.color,W=L.intensity,X=L.distance,nt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Tn?nt=L.shadow.map.texture:nt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*W,d+=O.g*W,f+=O.b*W;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],W);C++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=et,i.sunShadowMap[m]=nt;let It=Q.getViewportCount();for(let wt=0;wt<It;wt++)i.sunShadowMatrix[M+wt]=Q.getMatrix(wt),i.sunShadowCascade[M+wt]=Q._cascadeData[wt];M+=It,m++}i.sun[u]=q,u++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=q,g++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=X,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[y]=q;let Q=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,Q.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=Q.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[y]=et,i.spotShadowMap[y]=nt,R++}y++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=q,b++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Q=L.shadow,et=e.get(L);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=L.shadow.matrix,E++}i.point[p]=q,p++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(W),q.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[_]=q,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.sunLength!==u||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==b||U.hemiLength!==_||U.numSunShadows!==m||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==R||U.numSpotMaps!==v||U.numLightProbes!==C)&&(i.sun.length=u,i.directional.length=g,i.spot.length=y,i.rectArea.length=b,i.point.length=p,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,U.sunLength=u,U.directionalLength=g,U.pointLength=p,U.spotLength=y,U.rectAreaLength=b,U.hemiLength=_,U.numSunShadows=m,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=R,U.numSpotMaps=v,U.numLightProbes=C,i.version=c_++)}function l(c,h){let d=0,f=0,u=0,m=0,M=0,g=0,p=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let _=c[y];if(_.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(_.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){let T=i.point[u];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function mf(n){let t=new u_(n),e=[],i=[],s=[];function r(f){d.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function f_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mf(n),t.set(s,[a])):r>=o.length?(a=new mf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,m_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],g_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],gf=new ne,so=new P,Kc=new P;function x_(n,t,e){let i=new Ts,s=new st,r=new st,o=new be,a=new aa,l=new la,c={},h=e.maxTextureSize,d={[Mn]:Ce,[Ce]:Mn,[ii]:ii},f=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:d_,fragmentShader:p_}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new me;m.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Gt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(E,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===ou&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=p!==this.type;z&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=E.length;L<O;L++){let W=E[L],X=W.shadow;if(X===void 0){Ot("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ls){if(W.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Le(s.x,s.y,{format:Tn,type:Ve,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new pn(s.x,s.y,di),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Ni,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Re,X.map.depthTexture.magFilter=Re}else W.isPointLight?(X.map=new fl(s.x),X.map.depthTexture=new ea(s.x,Pi)):(X.map=new Le(s.x,s.y),X.map.depthTexture=new pn(s.x,s.y,Pi)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Ni,this.type===Gr?(X.map.depthTexture.compareFunction=q?cl:ll,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Re,X.map.depthTexture.magFilter=Re);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,v);for(let et=0;et<Q;et++){let It=X.getCamera(et);if(W.isPointLight){let wt=X.camera,ce=X.matrix,jt=W.distance||wt.far;jt!==wt.far&&(wt.far=jt,wt.updateProjectionMatrix()),so.setFromMatrixPosition(W.matrixWorld),wt.position.copy(so),Kc.copy(wt.position),Kc.add(m_[et]),wt.up.copy(g_[et]),wt.lookAt(Kc),wt.updateMatrixWorld(),ce.makeTranslation(-so.x,-so.y,-so.z),gf.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(gf,wt.coordinateSystem,wt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,et),n.clear();else{et===0&&(n.setRenderTarget(X.map),n.clear());let wt=X.getViewport(et);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),F.viewport(o)}i=X.getFrustum(et),_(R,v,It,W,this.type)}X.isPointLightShadow!==!0&&this.type===Ls&&y(X,v),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,C,U)};function y(E,R){let v=t.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Le(s.x,s.y,{format:Tn,type:Ve}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,v,f,M,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,v,u,M,null)}function b(E,R,v,w){let C=null,U=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)C=U;else if(C=v.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=C.uuid,z=R.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let O=L[z];O===void 0&&(O=C.clone(),L[z]=O,R.addEventListener("dispose",T)),C=O}if(C.visible=R.visible,C.wireframe=R.wireframe,w===Ls?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=v}return C}function _(E,R,v,w,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ls)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let z=t.update(E),L=E.material;if(Array.isArray(L)){let O=z.groups;for(let W=0,X=O.length;W<X;W++){let nt=O[W],q=L[nt.materialIndex];if(q&&q.visible){let Q=b(E,q,w,C);E.onBeforeShadow(n,E,R,v,z,Q,nt),n.renderBufferDirect(v,null,z,Q,E,nt),E.onAfterShadow(n,E,R,v,z,Q,nt)}}}else if(L.visible){let O=b(E,L,w,C);E.onBeforeShadow(n,E,R,v,z,O,null),n.renderBufferDirect(v,null,z,O,E,null),E.onAfterShadow(n,E,R,v,z,O,null)}}let F=E.children;for(let z=0,L=F.length;z<L;z++)_(F[z],R,v,w,C)}function T(E){E.target.removeEventListener("dispose",T);for(let v in c){let w=c[v],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function __(n,t){function e(){let N=!1,mt=new be,$=null,gt=new be(0,0,0,0);return{setMask:function(St){$!==St&&!N&&(n.colorMask(St,St,St,St),$=St)},setLocked:function(St){N=St},setClear:function(St,it,Ut,Ct,ve){ve===!0&&(St*=Ct,it*=Ct,Ut*=Ct),mt.set(St,it,Ut,Ct),gt.equals(mt)===!1&&(n.clearColor(St,it,Ut,Ct),gt.copy(mt))},reset:function(){N=!1,$=null,gt.set(-1,0,0,0)}}}function i(){let N=!1,mt=!1,$=null,gt=null,St=null;return{setReversed:function(it){if(mt!==it){let Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),mt=it;let Ct=St;St=null,this.setClear(Ct)}},getReversed:function(){return mt},setTest:function(it){it?j(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(it){$!==it&&!N&&(n.depthMask(it),$=it)},setFunc:function(it){if(mt&&(it=Gu[it]),gt!==it){switch(it){case ko:n.depthFunc(n.NEVER);break;case Vo:n.depthFunc(n.ALWAYS);break;case Wo:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case Zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=it}},setLocked:function(it){N=it},setClear:function(it){St!==it&&(St=it,mt&&(it=1-it),n.clearDepth(it))},reset:function(){N=!1,$=null,gt=null,St=null,mt=!1}}}function s(){let N=!1,mt=null,$=null,gt=null,St=null,it=null,Ut=null,Ct=null,ve=null;return{setTest:function(ue){N||(ue?j(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!N&&(n.stencilMask(ue),mt=ue)},setFunc:function(ue,xi,Ii){($!==ue||gt!==xi||St!==Ii)&&(n.stencilFunc(ue,xi,Ii),$=ue,gt=xi,St=Ii)},setOp:function(ue,xi,Ii){(it!==ue||Ut!==xi||Ct!==Ii)&&(n.stencilOp(ue,xi,Ii),it=ue,Ut=xi,Ct=Ii)},setLocked:function(ue){N=ue},setClear:function(ue){ve!==ue&&(n.clearStencil(ue),ve=ue)},reset:function(){N=!1,mt=null,$=null,gt=null,St=null,it=null,Ut=null,Ct=null,ve=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],M=null,g=!1,p=null,y=null,b=null,_=null,T=null,E=null,R=null,v=new ft(0,0,0),w=0,C=!1,U=null,F=null,z=null,L=null,O=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=nt>=2);let Q=null,et={},It=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),ce=new be().fromArray(It),jt=new be().fromArray(wt);function re(N,mt,$,gt){let St=new Uint8Array(4),it=n.createTexture();n.bindTexture(N,it),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<$;Ut++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(mt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return it}let J={};J[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(_s),at(!1),ut(Mc),j(n.CULL_FACE),rt(ui);function j(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function zt(N,mt){return f[N]!==mt?(n.bindFramebuffer(N,mt),f[N]=mt,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=mt),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function bt(N,mt){let $=m,gt=!1;if(N){$=u.get(mt),$===void 0&&($=[],u.set(mt,$));let St=N.textures;if($.length!==St.length||$[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Ut=St.length;it<Ut;it++)$[it]=n.COLOR_ATTACHMENT0+it;$.length=St.length,gt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,gt=!0);gt&&n.drawBuffers($)}function kt(N){return M!==N?(n.useProgram(N),M=N,!0):!1}let de={[Wn]:n.FUNC_ADD,[lu]:n.FUNC_SUBTRACT,[cu]:n.FUNC_REVERSE_SUBTRACT};de[hu]=n.MIN,de[uu]=n.MAX;let tt={[fu]:n.ZERO,[du]:n.ONE,[pu]:n.SRC_COLOR,[Ec]:n.SRC_ALPHA,[yu]:n.SRC_ALPHA_SATURATE,[_u]:n.DST_COLOR,[gu]:n.DST_ALPHA,[mu]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[vu]:n.ONE_MINUS_DST_COLOR,[xu]:n.ONE_MINUS_DST_ALPHA,[Mu]:n.CONSTANT_COLOR,[Su]:n.ONE_MINUS_CONSTANT_COLOR,[bu]:n.CONSTANT_ALPHA,[Eu]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(N,mt,$,gt,St,it,Ut,Ct,ve,ue){if(N===ui){g===!0&&(vt(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),N!==au){if(N!==p||ue!==C){if((y!==Wn||T!==Wn)&&(n.blendEquation(n.FUNC_ADD),y=Wn,T=Wn),ue)switch(N){case fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ri:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",N);break}else switch(N){case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",N);break}b=null,_=null,E=null,R=null,v.set(0,0,0),w=0,p=N,C=ue}return}St=St||mt,it=it||$,Ut=Ut||gt,(mt!==y||St!==T)&&(n.blendEquationSeparate(de[mt],de[St]),y=mt,T=St),($!==b||gt!==_||it!==E||Ut!==R)&&(n.blendFuncSeparate(tt[$],tt[gt],tt[it],tt[Ut]),b=$,_=gt,E=it,R=Ut),(Ct.equals(v)===!1||ve!==w)&&(n.blendColor(Ct.r,Ct.g,Ct.b,ve),v.copy(Ct),w=ve),p=N,C=!1}function ot(N,mt){N.side===ii?vt(n.CULL_FACE):j(n.CULL_FACE);let $=N.side===Ce;mt&&($=!$),at($),N.blending===fi&&N.transparent===!1?rt(ui):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let gt=N.stencilWrite;a.setTest(gt),gt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function ut(N){N!==su?(j(n.CULL_FACE),N!==F&&(N===Mc?n.cullFace(n.BACK):N===ru?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),F=N}function Ft(N){N!==z&&(X&&n.lineWidth(N),z=N)}function Nt(N,mt,$){N?(j(n.POLYGON_OFFSET_FILL),(L!==mt||O!==$)&&(L=mt,O=$,o.getReversed()&&(mt=-mt),n.polygonOffset(mt,$))):vt(n.POLYGON_OFFSET_FILL)}function Vt(N){N?j(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function Xt(N){N===void 0&&(N=n.TEXTURE0+W-1),Q!==N&&(n.activeTexture(N),Q=N)}function I(N,mt,$){$===void 0&&(Q===null?$=n.TEXTURE0+W-1:$=Q);let gt=et[$];gt===void 0&&(gt={type:void 0,texture:void 0},et[$]=gt),(gt.type!==N||gt.texture!==mt)&&(Q!==$&&(n.activeTexture($),Q=$),n.bindTexture(N,mt||J[N]),gt.type=N,gt.texture=mt)}function he(){let N=et[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{n.compressedTexImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function ct(){try{n.texStorage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function ht(){try{n.texStorage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function Z(){try{n.texImage2D(...arguments)}catch(N){Ht("WebGLState:",N)}}function K(){try{n.texImage3D(...arguments)}catch(N){Ht("WebGLState:",N)}}function dt(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Lt(N,mt){d[N]!==mt&&(n.pixelStorei(N,mt),d[N]=mt)}function xt(N){ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function pt(N){jt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),jt.copy(N))}function Dt(N,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let gt=$.get(N);gt===void 0&&(gt=n.getUniformBlockIndex(mt,N.name),$.set(N,gt))}function Bt(N,mt){let gt=c.get(mt).get(N);l.get(mt)!==gt&&(n.uniformBlockBinding(mt,gt,N.__bindingPointIndex),l.set(mt,gt))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,et={},f={},u=new WeakMap,m=[],M=null,g=!1,p=null,y=null,b=null,_=null,T=null,E=null,R=null,v=new ft(0,0,0),w=0,C=!1,U=null,F=null,z=null,L=null,O=null,ce.set(0,0,n.canvas.width,n.canvas.height),jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:vt,bindFramebuffer:zt,drawBuffers:bt,useProgram:kt,setBlending:rt,setMaterial:ot,setFlipSided:at,setCullFace:ut,setLineWidth:Ft,setPolygonOffset:Nt,setScissorTest:Vt,activeTexture:Xt,bindTexture:I,unbindTexture:he,compressedTexImage2D:te,compressedTexImage3D:A,texImage2D:Z,texImage3D:K,pixelStorei:Lt,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:xt,viewport:pt,reset:qt}}function v_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,d=new Set,f,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,x){return m?new OffscreenCanvas(A,x):dr("canvas")}function g(A,x,B){let k=1,Y=te(A);if((Y.width>B||Y.height>B)&&(k=B/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(k*Y.width),ht=Math.floor(k*Y.height);f===void 0&&(f=M(ct,ht));let Z=x?M(ct,ht):f;return Z.width=ct,Z.height=ht,Z.getContext("2d").drawImage(A,0,0,ct,ht),Ot("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ct+"x"+ht+")."),Z}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(A,x,B,k,Y,ct=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;k&&(ht=t.get("EXT_texture_norm16"),ht||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),B===n.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),B===n.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),B===n.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){let K=ct?fr:Qt.getTransfer(Y);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=K===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),B===n.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(A,x){let B;return A?x===null||x===Pi||x===Us?B=n.DEPTH24_STENCIL8:x===di?B=n.DEPTH32F_STENCIL8:x===Ds&&(B=n.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pi||x===Us?B=n.DEPTH_COMPONENT24:x===di?B=n.DEPTH_COMPONENT32F:x===Ds&&(B=n.DEPTH_COMPONENT16),B}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){let x=A.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(A){let x=A.target;x.removeEventListener("dispose",v),U(x)}function w(A){let x=i.get(A);if(x.__webglInit===void 0)return;let B=A.source,k=u.get(B);if(k){let Y=k[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(A),Object.keys(k).length===0&&u.delete(B)}i.remove(A)}function C(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let B=A.source,k=u.get(B);delete k[x.__cacheKey],o.memory.textures--}function U(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let Y=0;Y<x.__webglFramebuffer[k].length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[k][Y]);else n.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)n.deleteFramebuffer(x.__webglFramebuffer[k]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=A.textures;for(let k=0,Y=B.length;k<Y;k++){let ct=i.get(B[k]);ct.__webglTexture&&(n.deleteTexture(ct.__webglTexture),o.memory.textures--),i.remove(B[k])}i.remove(A)}let F=0;function z(){F=0}function L(){return F}function O(A){F=A}function W(){let A=F;return A>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function X(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function nt(A,x){let B=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let k=A.image;if(k===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function q(A,x){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){vt(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function Q(A,x){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){vt(B,A,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function et(A,x){let B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){zt(B,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}let It={[On]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},wt={[Re]:n.NEAREST,[Au]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Ge]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},ce={[Iu]:n.NEVER,[Fu]:n.ALWAYS,[Lu]:n.LESS,[ll]:n.LEQUAL,[Du]:n.EQUAL,[cl]:n.GEQUAL,[Uu]:n.GREATER,[Nu]:n.NOTEQUAL};function jt(A,x){if(x.type===di&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ge||x.magFilter===Ta||x.magFilter===Jr||x.magFilter===bn||x.minFilter===Ge||x.minFilter===Ta||x.minFilter===Jr||x.minFilter===bn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,It[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,It[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,It[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,wt[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,wt[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Re||x.minFilter!==Jr&&x.minFilter!==bn||x.type===di&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function re(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));let k=x.source,Y=u.get(k);Y===void 0&&(Y={},u.set(k,Y));let ct=X(x);if(ct!==A.__cacheKey){Y[ct]===void 0&&(Y[ct]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[ct].usedTimes++;let ht=Y[A.__cacheKey];ht!==void 0&&(Y[A.__cacheKey].usedTimes--,ht.usedTimes===0&&C(x)),A.__cacheKey=ct,A.__webglTexture=Y[ct].texture}return B}function J(A,x,B){return Math.floor(Math.floor(A/B)/x)}function j(A,x,B,k){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,k,x.data);else{ct.sort((Lt,xt)=>Lt.start-xt.start);let ht=0;for(let Lt=1;Lt<ct.length;Lt++){let xt=ct[ht],pt=ct[Lt],Dt=xt.start+xt.count,Bt=J(pt.start,x.width,4),qt=J(xt.start,x.width,4);pt.start<=Dt+1&&Bt===qt&&J(pt.start+pt.count-1,x.width,4)===Bt?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++ht,ct[ht]=pt)}ct.length=ht+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Lt=0,xt=ct.length;Lt<xt;Lt++){let pt=ct[Lt],Dt=Math.floor(pt.start/4),Bt=Math.ceil(pt.count/4),qt=Dt%x.width,N=Math.floor(Dt/x.width),mt=Bt,$=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,qt,N,mt,$,B,k,x.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function vt(A,x,B){let k=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=n.TEXTURE_3D);let Y=re(A,x),ct=x.source;e.bindTexture(k,A.__webglTexture,n.TEXTURE0+B);let ht=i.get(ct);if(ct.version!==ht.__version||Y===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let $=Qt.getPrimaries(Qt.workingColorSpace),gt=x.colorSpace===Qi?null:Qt.getPrimaries(x.colorSpace),St=x.colorSpace===Qi||$===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let K=g(x.image,!1,s.maxTextureSize);K=he(x,K);let dt=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),xt=_(x.internalFormat,dt,Lt,x.normalized,x.colorSpace,x.isVideoTexture);jt(k,x);let pt,Dt=x.mipmaps,Bt=x.isVideoTexture!==!0,qt=ht.__version===void 0||Y===!0,N=ct.dataReady,mt=E(x,K);if(x.isDepthTexture)xt=T(x.format===En,x.type),qt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,xt,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,xt,K.width,K.height,0,dt,Lt,null));else if(x.isDataTexture)if(Dt.length>0){Bt&&qt&&e.texStorage2D(n.TEXTURE_2D,mt,xt,Dt[0].width,Dt[0].height);for(let $=0,gt=Dt.length;$<gt;$++)pt=Dt[$],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,pt.width,pt.height,dt,Lt,pt.data):e.texImage2D(n.TEXTURE_2D,$,xt,pt.width,pt.height,0,dt,Lt,pt.data);x.generateMipmaps=!1}else Bt?(qt&&e.texStorage2D(n.TEXTURE_2D,mt,xt,K.width,K.height),N&&j(x,K,dt,Lt)):e.texImage2D(n.TEXTURE_2D,0,xt,K.width,K.height,0,dt,Lt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,xt,Dt[0].width,Dt[0].height,K.depth);for(let $=0,gt=Dt.length;$<gt;$++)if(pt=Dt[$],x.format!==pi)if(dt!==null)if(Bt){if(N)if(x.layerUpdates.size>0){let St=Hc(pt.width,pt.height,x.format,x.type);for(let it of x.layerUpdates){let Ut=pt.data.subarray(it*St/pt.data.BYTES_PER_ELEMENT,(it+1)*St/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,it,pt.width,pt.height,1,dt,Ut)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,K.depth,dt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,xt,pt.width,pt.height,K.depth,0,pt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,K.depth,dt,Lt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,xt,pt.width,pt.height,K.depth,0,dt,Lt,pt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Bt&&qt&&e.texStorage2D(n.TEXTURE_2D,mt,xt,Dt[0].width,Dt[0].height);for(let $=0,gt=Dt.length;$<gt;$++)pt=Dt[$],x.format!==pi?dt!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,xt,pt.width,pt.height,0,pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,pt.width,pt.height,dt,Lt,pt.data):e.texImage2D(n.TEXTURE_2D,$,xt,pt.width,pt.height,0,dt,Lt,pt.data)}else if(x.isDataArrayTexture)if(Bt){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,xt,K.width,K.height,K.depth),N)if(x.layerUpdates.size>0){let $=Hc(K.width,K.height,x.format,x.type);for(let gt of x.layerUpdates){let St=K.data.subarray(gt*$/K.data.BYTES_PER_ELEMENT,(gt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,K.width,K.height,1,dt,Lt,St)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,Lt,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,K.width,K.height,K.depth,0,dt,Lt,K.data);else if(x.isData3DTexture)Bt?(qt&&e.texStorage3D(n.TEXTURE_3D,mt,xt,K.width,K.height,K.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,Lt,K.data)):e.texImage3D(n.TEXTURE_3D,0,xt,K.width,K.height,K.depth,0,dt,Lt,K.data);else if(x.isFramebufferTexture){if(qt)if(Bt)e.texStorage2D(n.TEXTURE_2D,mt,xt,K.width,K.height);else{let $=K.width,gt=K.height;for(let St=0;St<mt;St++)e.texImage2D(n.TEXTURE_2D,St,xt,$,gt,0,dt,Lt,null),$>>=1,gt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(x),$.onpaint=gt=>{let St=gt.changedElements;for(let it of d)St.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let St=n.RGBA,it=n.RGBA,Ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,St,it,Ut,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&qt){let $=te(Dt[0]);e.texStorage2D(n.TEXTURE_2D,mt,xt,$.width,$.height)}for(let $=0,gt=Dt.length;$<gt;$++)pt=Dt[$],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,dt,Lt,pt):e.texImage2D(n.TEXTURE_2D,$,xt,dt,Lt,pt);x.generateMipmaps=!1}else if(Bt){if(qt){let $=te(K);e.texStorage2D(n.TEXTURE_2D,mt,xt,$.width,$.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Lt,K)}else e.texImage2D(n.TEXTURE_2D,0,xt,dt,Lt,K);p(x)&&y(k),ht.__version=ct.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function zt(A,x,B){if(x.image.length!==6)return;let k=re(A,x),Y=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);let ct=i.get(Y);if(Y.version!==ct.__version||k===!0){e.activeTexture(n.TEXTURE0+B);let ht=Qt.getPrimaries(Qt.workingColorSpace),Z=x.colorSpace===Qi?null:Qt.getPrimaries(x.colorSpace),K=x.colorSpace===Qi||ht===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,Lt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let it=0;it<6;it++)!dt&&!Lt?xt[it]=g(x.image[it],!0,s.maxCubemapSize):xt[it]=Lt?x.image[it].image:x.image[it],xt[it]=he(x,xt[it]);let pt=xt[0],Dt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type),qt=_(x.internalFormat,Dt,Bt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,mt=ct.__version===void 0||k===!0,$=Y.dataReady,gt=E(x,pt);jt(n.TEXTURE_CUBE_MAP,x);let St;if(dt){N&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,qt,pt.width,pt.height);for(let it=0;it<6;it++){St=xt[it].mipmaps;for(let Ut=0;Ut<St.length;Ut++){let Ct=St[Ut];x.format!==pi?Dt!==null?N?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,qt,Ct.width,Ct.height,0,Ct.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,Ct.width,Ct.height,Dt,Bt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,qt,Ct.width,Ct.height,0,Dt,Bt,Ct.data)}}}else{if(St=x.mipmaps,N&&mt){St.length>0&&gt++;let it=te(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){N?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt[it].width,xt[it].height,Dt,Bt,xt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,xt[it].width,xt[it].height,0,Dt,Bt,xt[it].data);for(let Ut=0;Ut<St.length;Ut++){let ve=St[Ut].image[it].image;N?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,ve.width,ve.height,Dt,Bt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,qt,ve.width,ve.height,0,Dt,Bt,ve.data)}}else{N?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Bt,xt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,Dt,Bt,xt[it]);for(let Ut=0;Ut<St.length;Ut++){let Ct=St[Ut];N?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Dt,Bt,Ct.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,qt,Dt,Bt,Ct.image[it])}}}p(x)&&y(n.TEXTURE_CUBE_MAP),ct.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function bt(A,x,B,k,Y,ct){let ht=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),K=_(B.internalFormat,ht,Z,B.normalized,B.colorSpace),dt=i.get(x),Lt=i.get(B);if(Lt.__renderTarget=x,!dt.__hasExternalTextures){let xt=Math.max(1,x.width>>ct),pt=Math.max(1,x.height>>ct);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,ct,K,xt,pt,x.depth,0,ht,Z,null):e.texImage2D(Y,ct,K,xt,pt,0,ht,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Y,Lt.__webglTexture,0,Vt(x)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Y,Lt.__webglTexture,ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(A,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let k=x.depthTexture,Y=k&&k.isDepthTexture?k.type:null,ct=T(x.stencilBuffer,Y),ht=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(x),ct,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(x),ct,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ct,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,A)}else{let k=x.textures;for(let Y=0;Y<k.length;Y++){let ct=k[Y],ht=r.convert(ct.format,ct.colorSpace),Z=r.convert(ct.type),K=_(ct.internalFormat,ht,Z,ct.normalized,ct.colorSpace);Xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(x),K,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(x),K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(A,x,B){let k=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),jt(n.TEXTURE_CUBE_MAP,x.depthTexture);let dt=r.convert(x.depthTexture.format),Lt=r.convert(x.depthTexture.type),xt;x.depthTexture.format===Ni?xt=n.DEPTH_COMPONENT24:x.depthTexture.format===En&&(xt=n.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,x.width,x.height,0,dt,Lt,null)}}else nt(x.depthTexture,0);let ct=Y.__webglTexture,ht=Vt(x),Z=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,K=x.depthTexture.format===En?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ni)Xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,ct,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,ct,0);else if(x.depthTexture.format===En)Xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,ct,0,ht):n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(A){let x=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=k}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)de(x.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?de(x.__webglFramebuffer[0],A,0):de(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=n.createRenderbuffer(),kt(x.__webglDepthbuffer[k],A,!1);else{let Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ct)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),kt(x.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ct)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,x,B){let k=i.get(A);x!==void 0&&bt(k.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&tt(A)}function ot(A){let x=A.texture,B=i.get(A),k=i.get(x);A.addEventListener("dispose",v);let Y=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ht=Y.length>1;if(ht||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=x.version,o.memory.textures++),ct){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[Z][K]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ht)for(let Z=0,K=Y.length;Z<K;Z++){let dt=i.get(Y[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Xt(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let K=Y[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let dt=r.convert(K.format,K.colorSpace),Lt=r.convert(K.type),xt=_(K.internalFormat,dt,Lt,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),pt=Vt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,xt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ct){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),jt(n.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)bt(B.__webglFramebuffer[Z][K],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else bt(B.__webglFramebuffer[Z],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(x)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Z=0,K=Y.length;Z<K;Z++){let dt=Y[Z],Lt=i.get(dt),xt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Lt.__webglTexture),jt(xt,dt),bt(B.__webglFramebuffer,A,dt,n.COLOR_ATTACHMENT0+Z,xt,0),p(dt)&&y(xt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,k.__webglTexture),jt(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)bt(B.__webglFramebuffer[K],A,x,n.COLOR_ATTACHMENT0,Z,K);else bt(B.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,Z,0);p(x)&&y(Z),e.unbindTexture()}A.depthBuffer&&tt(A)}function at(A){let x=A.textures;for(let B=0,k=x.length;B<k;B++){let Y=x[B];if(p(Y)){let ct=b(A),ht=i.get(Y).__webglTexture;e.bindTexture(ct,ht),y(ct),e.unbindTexture()}}}let ut=[],Ft=[];function Nt(A){if(A.samples>0){if(Xt(A)===!1){let x=A.textures,B=A.width,k=A.height,Y=n.COLOR_BUFFER_BIT,ct=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(A),Z=x.length>1;if(Z)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Lt=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,B,k,0,0,B,k,Y,n.NEAREST),l===!0&&(ut.length=0,Ft.length=0,ut.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Ft.push(ct),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Lt=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Vt(A){return Math.min(s.maxSamples,A.samples)}function Xt(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){let x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function he(A,x){let B=A.colorSpace,k=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ur&&B!==Qi&&(Qt.getTransfer(B)===le?(k!==pi||Y!==ni)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",B)),x}function te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function y_(n,t){function e(i,s=Qi){let r,o=Qt.getTransfer(s);if(i===ni)return n.UNSIGNED_BYTE;if(i===Aa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ac)return n.BYTE;if(i===Rc)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===wa)return n.INT;if(i===Pi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===Ve)return n.HALF_FLOAT;if(i===Ic)return n.ALPHA;if(i===Lc)return n.RGB;if(i===pi)return n.RGBA;if(i===Ni)return n.DEPTH_COMPONENT;if(i===En)return n.DEPTH_STENCIL;if(i===Ns)return n.RED;if(i===Ca)return n.RED_INTEGER;if(i===Tn)return n.RG;if(i===Pa)return n.RG_INTEGER;if(i===Ia)return n.RGBA_INTEGER;if(i===$r||i===Kr||i===Qr||i===jr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Da||i===Ua||i===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===Ba||i===Oa||i===za||i===Ha||i===to||i===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fa||i===Ba)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===za)return r.COMPRESSED_R11_EAC;if(i===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(i===to)return r.COMPRESSED_RG11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ka||i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===$a||i===Ka||i===Qa||i===ja||i===tl||i===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===il||i===nl||i===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===il)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===ol||i===eo||i===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ae({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends Fi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,M=typeof XRWebGLBinding<"u",g=new rh,p={},y=e.getContextAttributes(),b=null,_=null,T=[],E=[],R=new st,v=null,w=null,C=new He;C.viewport=new be;let U=new He;U.viewport=new be;let F=[C,U],z=new ya,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=T[J];return j===void 0&&(j=new bs,T[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=T[J];return j===void 0&&(j=new bs,T[J]=j),j.getGripSpace()},this.getHand=function(J){let j=T[J];return j===void 0&&(j=new bs,T[J]=j),j.getHandSpace()};function W(J){let j=E.indexOf(J.inputSource);if(j===-1)return;let vt=T[j];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||o),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let J=0;J<T.length;J++){let j=E[J];j!==null&&(E[J]=null,T[J].disconnect(j))}L=null,O=null,g.reset();for(let J in p)delete p[J];if(t.setRenderTarget(b),u=null,f=null,d=null,s=null,_=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,zt=null,bt=null;y.depth&&(bt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=y.stencil?En:Ni,zt=y.stencil?Us:Pi);let kt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Le(f.textureWidth,f.textureHeight,{format:pi,type:ni,depthTexture:new pn(f.textureWidth,f.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new Le(u.framebufferWidth,u.framebufferHeight,{format:pi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(J){for(let j=0;j<J.removed.length;j++){let vt=J.removed[j],zt=E.indexOf(vt);zt>=0&&(E[zt]=null,T[zt].disconnect(vt))}for(let j=0;j<J.added.length;j++){let vt=J.added[j],zt=E.indexOf(vt);if(zt===-1){for(let kt=0;kt<T.length;kt++)if(kt>=E.length){E.push(vt),zt=kt;break}else if(E[kt]===null){E[kt]=vt,zt=kt;break}if(zt===-1)break}let bt=T[zt];bt&&bt.connect(vt)}}let q=new P,Q=new P;function et(J,j,vt){q.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);let zt=q.distanceTo(Q),bt=j.projectionMatrix.elements,kt=vt.projectionMatrix.elements,de=bt[14]/(bt[10]-1),tt=bt[14]/(bt[10]+1),rt=(bt[9]+1)/bt[5],ot=(bt[9]-1)/bt[5],at=(bt[8]-1)/bt[0],ut=(kt[8]+1)/kt[0],Ft=de*at,Nt=de*ut,Vt=zt/(-at+ut),Xt=Vt*-at;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xt),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let I=de+Vt,he=tt+Vt,te=Ft-Xt,A=Nt+(zt-Xt),x=rt*tt/he*I,B=ot*tt/he*I;J.projectionMatrix.makePerspective(te,A,x,B,I,he),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function It(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let j=J.near,vt=J.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),z.near=U.near=C.near=j,z.far=U.far=C.far=vt,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;let zt=J.parent,bt=z.cameras;It(z,zt);for(let kt=0;kt<bt.length;kt++)It(bt[kt],zt);bt.length===2?et(z,C,U):z.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),wt(J,z,zt)};function wt(J,j,vt){vt===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return p[J]};let ce=null;function jt(J,j){if(h=j.getViewerPose(c||o),m=j,h!==null){let vt=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let zt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,zt=!0);for(let tt=0;tt<vt.length;tt++){let rt=vt[tt],ot=null;if(u!==null)ot=u.getViewport(rt);else{let ut=d.getViewSubImage(f,rt);ot=ut.viewport,tt===0&&(t.setRenderTargetTextures(_,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(_))}let at=F[tt];at===void 0&&(at=new He,at.layers.enable(tt),at.viewport=new be,F[tt]=at),at.matrix.fromArray(rt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(rt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ot.x,ot.y,ot.width,ot.height),tt===0&&(z.matrix.copy(at.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),zt===!0&&z.cameras.push(at)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let tt=d.getDepthInformation(vt[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let tt=0;tt<vt.length;tt++){let rt=vt[tt].camera;if(rt){let ot=p[rt];ot||(ot=new Mr,p[rt]=ot);let at=d.getCameraImage(rt);ot.sourceTexture=at}}}}for(let vt=0;vt<T.length;vt++){let zt=E[vt],bt=T[vt];zt!==null&&bt!==void 0&&bt.update(zt,j,c||o)}ce&&ce(J,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}let re=new xf;re.setAnimationLoop(jt),this.setAnimationLoop=function(J){ce=J},this.dispose=function(){}}},b_=new ne,bf=new Wt;bf.set(-1,0,0,0,1,0,0,0,1);function E_(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Bc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ce&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ce&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,_=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T_(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let E=T.program;i.uniformBlockBinding(_,E)}function c(_,T){let E=s[_.id];E===void 0&&(g(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",y));let R=T.program;i.updateUBOMapping(_,R);let v=t.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function h(_){let T=d();_.__bindingPointIndex=T;let E=n.createBuffer(),R=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let T=s[_.id],E=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,w=E.length;v<w;v++){let C=E[v];if(Array.isArray(C))for(let U=0,F=C.length;U<F;U++)u(C[U],v,U,R);else u(C,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,T,E,R){if(M(_,T,E,R)===!0){let v=_.__offset,w=_.value;if(Array.isArray(w)){let C=0;for(let U=0;U<w.length;U++){let F=w[U],z=p(F);m(F,_.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function m(_,T,E){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,E)}function M(_,T,E,R){let v=_.value,w=T+"_"+E;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{let C=R[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(_){let T=_.uniforms,E=0,R=16;for(let w=0,C=T.length;w<C;w++){let U=Array.isArray(T[w])?T[w]:[T[w]];for(let F=0,z=U.length;F<z;F++){let L=U[F],O=Array.isArray(L.value)?L.value:[L.value];for(let W=0,X=O.length;W<X;W++){let nt=O[W],q=p(nt),Q=E%R,et=Q%q.boundary,It=Q+et;E+=et,It!==0&&R-It<q.storage&&(E+=R-It),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=q.storage}}}let v=E%R;return v>0&&(E+=R-v),_.__size=E,_.__cache={},this}function p(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),T}function y(_){let T=_.target;T.removeEventListener("dispose",y);let E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}var w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function A_(){return Hi===null&&(Hi=new Hn(w_,16,16,Tn,Ve),Hi.name="DFG_LUT",Hi.minFilter=Ge,Hi.magFilter=Ge,Hi.wrapS=Ui,Hi.wrapT=Ui,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var dl=class{constructor(t={}){let{canvas:e=Ou(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ni}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let M=u,g=new Set([Ia,Pa,Ca]),p=new Set([ni,Pi,Ds,Us,Aa,Ra]),y=new Uint32Array(4),b=new Int32Array(4),_=new P,T=null,E=null,R=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,F=null,z=null,L=null,O=null;this._outputColorSpace=ze;let W=0,X=0,nt=null,q=-1,Q=null,et=new be,It=new be,wt=null,ce=new ft(0),jt=0,re=e.width,J=e.height,j=1,vt=null,zt=null,bt=new be(0,0,re,J),kt=new be(0,0,re,J),de=!1,tt=new Ts,rt=!1,ot=!1,at=new ne,ut=new P,Ft=new be,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Xt(){return nt===null?j:1}let I=i;function he(S,D){return e.getContext(S,D)}let te,A,x,B,k,Y,ct,ht,Z,K,dt,Lt,xt,pt,Dt,Bt,qt,N,mt,$,gt,St,it;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",xi,!1),I===null){let D="webgl2";if(I=he(D,S),I===null)throw he(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(S){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),Ht("WebGLRenderer: "+S.message),S}function Ut(){te=new Ug(I),te.init(),gt=new y_(I,te),A=new Eg(I,te,t,gt),x=new __(I,te),A.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),z=I.createFramebuffer(),L=I.createFramebuffer(),O=I.createFramebuffer(),B=new Bg(I),k=new s_,Y=new v_(I,te,x,k,A,gt,B),ct=new Dg(C),ht=new zp(I),St=new Sg(I,ht),Z=new Ng(I,ht,B,St),K=new zg(I,Z,ht,St,B),N=new Og(I,A,Y),Dt=new Tg(k),dt=new n_(C,ct,te,A,St,Dt),Lt=new E_(C,k),xt=new o_,pt=new f_(te),qt=new Mg(C,ct,x,K,m,l),Bt=new x_(C,K,A),it=new T_(I,B,A,x),mt=new bg(I,te,B),$=new Fg(I,te,B),B.programs=dt.programs,C.capabilities=A,C.extensions=te,C.properties=k,C.renderLists=xt,C.shadowMap=Bt,C.state=x,C.info=B}M!==ni&&(w=new Gg(M,e.width,e.height,a,s,r));let Ct=new oh(C,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(re,J,!1))},this.getSize=function(S){return S.set(re,J)},this.setSize=function(S,D,V=!0){if(Ct.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,J=D,e.width=Math.floor(S*j),e.height=Math.floor(D*j),V===!0&&(e.style.width=S+"px",e.style.height=D+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(re*j,J*j).floor()},this.setDrawingBufferSize=function(S,D,V){re=S,J=D,j=V,e.width=Math.floor(S*V),e.height=Math.floor(D*V),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===ni){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,D,V,H){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,D,V,H),x.viewport(et.copy(bt).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(kt)},this.setScissor=function(S,D,V,H){S.isVector4?kt.set(S.x,S.y,S.z,S.w):kt.set(S,D,V,H),x.scissor(It.copy(kt).multiplyScalar(j).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){x.setScissorTest(de=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){zt=S},this.getClearColor=function(S){return S.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,V=!0){let H=0;if(S){let G=!1;if(nt!==null){let Mt=nt.texture.format;G=g.has(Mt)}if(G){let Mt=nt.texture.type,Tt=p.has(Mt),yt=qt.getClearColor(),At=qt.getClearAlpha(),Pt=yt.r,Jt=yt.g,ee=yt.b;Tt?(y[0]=Pt,y[1]=Jt,y[2]=ee,y[3]=At,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=Pt,b[1]=Jt,b[2]=ee,b[3]=At,I.clearBufferiv(I.COLOR,0,b))}else H|=I.COLOR_BUFFER_BIT}D&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),qt.dispose(),xt.dispose(),pt.dispose(),k.dispose(),ct.dispose(),K.dispose(),St.dispose(),it.dispose(),dt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",xh),Ct.removeEventListener("sessionend",_h),In.stop()};function ve(S){S.preventDefault(),Uc("WebGLRenderer: Context Lost."),U=!0}function ue(){Uc("WebGLRenderer: Context Restored."),U=!1;let S=B.autoReset,D=Bt.enabled,V=Bt.autoUpdate,H=Bt.needsUpdate,G=Bt.type;Ut(),B.autoReset=S,Bt.enabled=D,Bt.autoUpdate=V,Bt.needsUpdate=H,Bt.type=G}function xi(S){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ii(S){let D=S.target;D.removeEventListener("dispose",Ii),id(D)}function id(S){nd(S),k.remove(S)}function nd(S){let D=k.get(S).programs;D!==void 0&&(D.forEach(function(V){dt.releaseProgram(V)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,V,H,G,Mt){D===null&&(D=Nt);let Tt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=od(S,D,V,H,G);x.setMaterial(H,Tt);let At=V.index,Pt=1;if(H.wireframe===!0){if(At=Z.getWireframeAttribute(V),At===void 0)return;Pt=2}let Jt=V.drawRange,ee=V.attributes.position,Rt=Jt.start*Pt,fe=(Jt.start+Jt.count)*Pt;Mt!==null&&(Rt=Math.max(Rt,Mt.start*Pt),fe=Math.min(fe,(Mt.start+Mt.count)*Pt)),At!==null?(Rt=Math.max(Rt,0),fe=Math.min(fe,At.count)):ee!=null&&(Rt=Math.max(Rt,0),fe=Math.min(fe,ee.count));let Pe=fe-Rt;if(Pe<0||Pe===1/0)return;St.setup(G,H,yt,V,At);let Me,ge=mt;if(At!==null&&(Me=ht.get(At),ge=$,ge.setIndex(Me)),G.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Xt()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(G.isLine){let We=H.linewidth;We===void 0&&(We=1),x.setLineWidth(We*Xt()),G.isLineSegments?ge.setMode(I.LINES):G.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else G.isPoints?ge.setMode(I.POINTS):G.isSprite&&ge.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ge.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let We=G._multiDrawStarts,Et=G._multiDrawCounts,Ke=G._multiDrawCount,oe=At?ht.get(At).bytesPerElement:1,ci=k.get(H).currentProgram.getUniforms();for(let Li=0;Li<Ke;Li++)ci.setValue(I,"_gl_DrawID",Li),ge.render(We[Li]/oe,Et[Li])}else if(G.isInstancedMesh)ge.renderInstances(Rt,Pe,G.count);else if(V.isInstancedBufferGeometry){let We=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,We);ge.renderInstances(Rt,Pe,Et)}else ge.render(Rt,Pe)};function gh(S,D,V,H){F!==null&&S.isNodeMaterial&&F.setObject(H,S),rt===!0&&Dt.setState(S,V,!1),S.transparent===!0&&S.side===ii&&S.forceSinglePass===!1?(S.side=Ce,S.needsUpdate=!0,mo(S,D,H),S.side=Mn,S.needsUpdate=!0,mo(S,D,H),S.side=ii):mo(S,D,H)}this.compile=function(S,D,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,D,V),E=pt.get(V),E.init(D),v.push(E),V.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,rt=Dt.init(this.clippingPlanes,ot),rt===!0&&Dt.setGlobalState(this.clippingPlanes,D),F!==null&&Bt.render(E.state.shadowsArray,V,D);let H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let yt=Mt[Tt];gh(yt,V,D,G),H.add(yt)}else gh(Mt,V,D,G),H.add(Mt)}),E=v.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(S,D,V=null){let H=this.compile(S,D,V);return new Promise(G=>{function Mt(){if(H.forEach(function(Tt){let At=k.get(Tt).currentProgram;(At===void 0||At.isReady())&&H.delete(Tt)}),H.size===0){G(S);return}setTimeout(Mt,10)}te.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Bl=null;function sd(S){Bl&&Bl(S)}function xh(){In.stop()}function _h(){In.start()}let In=new xf;In.setAnimationLoop(sd),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(S){Bl=S,Ct.setAnimationLoop(S),S===null?In.stop():In.start()},Ct.addEventListener("sessionstart",xh),Ct.addEventListener("sessionend",_h),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(S,D);let V=Ct.enabled===!0&&Ct.isPresenting===!0,H=w!==null&&(nt===null||V)&&w.begin(C,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(D),D=Ct.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,nt),E=pt.get(S,v.length),E.init(D),E.state.textureUnits=Y.getTextureUnits(),v.push(E),at.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),tt.setFromProjectionMatrix(at,Si,D.reversedDepth),ot=this.localClippingEnabled,rt=Dt.init(this.clippingPlanes,ot),T=xt.get(S,R.length),T.init(),R.push(T),Ct.enabled===!0&&Ct.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&Ol(Tt,D,-1/0,C.sortObjects)}Ol(S,D,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(vt,zt),Vt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Vt&&qt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Dt.beginShadows();let G=E.state.shadowsArray;if(Bt.render(G,S,D),rt===!0&&Dt.endShadows(),(H&&w.hasRenderPass())===!1){let Tt=T.opaque,yt=T.transmissive;if(E.setupLights(),D.isArrayCamera){let At=D.cameras;if(yt.length>0)for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let ee=At[Pt];yh(Tt,yt,S,ee)}Vt&&qt.render(S);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let ee=At[Pt];vh(T,S,ee,ee.viewport)}}else yt.length>0&&yh(Tt,yt,S,D),Vt&&qt.render(S),vh(T,S,D)}nt!==null&&X===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),H&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),St.resetDefaultState(),q=-1,Q=null,v.pop(),v.length>0?(E=v[v.length-1],Y.setTextureUnits(E.state.textureUnits),rt===!0&&Dt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,F!==null&&F.renderEnd()};function Ol(S,D,V,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(tt)){H&&Ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);let Tt=K.update(S),yt=S.material;yt.visible&&T.push(S,Tt,yt,V,Ft.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(tt))){let Tt=K.update(S),yt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ft.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ft.copy(Tt.boundingSphere.center)),Ft.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(yt)){let At=Tt.groups;for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let ee=At[Pt],Rt=yt[ee.materialIndex];Rt&&Rt.visible&&T.push(S,Tt,Rt,V,Ft.z,ee,D)}}else yt.visible&&T.push(S,Tt,yt,V,Ft.z,null,D)}}let Mt=S.children;for(let Tt=0,yt=Mt.length;Tt<yt;Tt++)Ol(Mt[Tt],D,V,H)}function vh(S,D,V,H){let{opaque:G,transmissive:Mt,transparent:Tt}=S;E.setupLightsView(V),rt===!0&&Dt.setGlobalState(C.clippingPlanes,V),H&&x.viewport(et.copy(H)),G.length>0&&po(G,D,V),Mt.length>0&&po(Mt,D,V),Tt.length>0&&po(Tt,D,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function yh(S,D,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Rt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Le(1,1,{generateMipmaps:!0,type:Rt?Ve:ni,minFilter:bn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let Mt=E.state.transmissionRenderTarget[H.id],Tt=H.viewport||et;Mt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),At=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(ce),jt=C.getClearAlpha(),jt<1&&C.setClearColor(16777215,.5),C.clear(),Vt&&qt.render(V);let Jt=C.toneMapping;C.toneMapping=Ci;let ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),rt===!0&&Dt.setGlobalState(C.clippingPlanes,H),po(S,V,H),Y.updateMultisampleRenderTarget(Mt),Y.updateRenderTargetMipmap(Mt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let fe=0,Pe=D.length;fe<Pe;fe++){let Me=D[fe],{object:ge,geometry:We,material:Et,group:Ke}=Me;if(Et.side===ii&&ge.layers.test(H.layers)){let oe=Et.side;Et.side=Ce,Et.needsUpdate=!0,Mh(ge,V,H,We,Et,Ke),Et.side=oe,Et.needsUpdate=!0,Rt=!0}}Rt===!0&&(Y.updateMultisampleRenderTarget(Mt),Y.updateRenderTargetMipmap(Mt))}C.setRenderTarget(yt,At,Pt),C.setClearColor(ce,jt),ee!==void 0&&(H.viewport=ee),C.toneMapping=Jt}function po(S,D,V){let H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,Mt=S.length;G<Mt;G++){let Tt=S[G],{object:yt,geometry:At,group:Pt}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&H!==null&&(Jt=H),yt.layers.test(V.layers)&&Mh(yt,D,V,At,Jt,Pt)}}function Mh(S,D,V,H,G,Mt){F!==null&&G.isNodeMaterial&&F.setObject(S,G),S.onBeforeRender(C,D,V,H,G,Mt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,D,V,H,S,Mt),G.transparent===!0&&G.side===ii&&G.forceSinglePass===!1?(G.side=Ce,G.needsUpdate=!0,C.renderBufferDirect(V,D,H,G,S,Mt),G.side=Mn,G.needsUpdate=!0,C.renderBufferDirect(V,D,H,G,S,Mt),G.side=ii):C.renderBufferDirect(V,D,H,G,S,Mt),S.onAfterRender(C,D,V,H,G,Mt)}function mo(S,D,V){D.isScene!==!0&&(D=Nt);let H=k.get(S),G=E.state.lights,Mt=E.state.shadowsArray,Tt=G.state.version,yt=dt.getParameters(S,G.state,Mt,D,V,E.state.lightProbeGridArray),At=dt.getProgramCacheKey(yt),Pt=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let Jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ct.get(S.envMap||H.environment,Jt),H.envMapRotation=H.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",Ii),Pt=new Map,H.programs=Pt);let ee=Pt.get(At);if(ee!==void 0){if(H.currentProgram===ee&&H.lightsStateVersion===Tt)return bh(S,yt),ee}else yt.uniforms=dt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,yt),S.onBeforeCompile(yt,C),ee=dt.acquireProgram(yt,At),Pt.set(At,ee),H.uniforms=yt.uniforms;let Rt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),bh(S,yt),H.needsLights=ld(S),H.lightsStateVersion=Tt,H.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=ee,H.uniformsList=null,ee}function Sh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=zs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function bh(S,D){let V=k.get(S);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function rd(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let V=0,H=S.length;V<H;V++){let G=S[V];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function od(S,D,V,H,G){D.isScene!==!0&&(D=Nt),Y.resetTextureUnits();let Mt=D.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,yt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qt.workingColorSpace,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Pt=ct.get(H.envMap||Tt,At),Jt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ee=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!V.morphAttributes.position,fe=!!V.morphAttributes.normal,Pe=!!V.morphAttributes.color,Me=Ci;H.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Me=C.toneMapping);let ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,We=ge!==void 0?ge.length:0,Et=k.get(H),Ke=E.state.lights;if(rt===!0&&(ot===!0||S!==Q)){let ye=S===Q&&H.id===q;Dt.setState(H,S,ye)}let oe=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ke.state.version||Et.outputColorSpace!==yt||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==Pt||H.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Dt.numPlanes||Et.numIntersection!==Dt.numIntersection)||Et.vertexAlphas!==Jt||Et.vertexTangents!==ee||Et.morphTargets!==Rt||Et.morphNormals!==fe||Et.morphColors!==Pe||Et.toneMapping!==Me||Et.morphTargetsCount!==We||!!Et.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Et.__version=H.version);let ci=Et.currentProgram;oe===!0&&(ci=mo(H,D,G),F&&H.isNodeMaterial&&F.onUpdateProgram(H,ci,Et));let Li=!1,rn=!1,ts=!1,pe=ci.getUniforms(),Ae=Et.uniforms;if(x.useProgram(ci.program)&&(Li=!0,rn=!0,ts=!0),H.id!==q&&(q=H.id,rn=!0),Et.needsLights){let ye=rd(E.state.lightProbeGridArray,G);Et.lightProbeGrid!==ye&&(Et.lightProbeGrid=ye,rn=!0)}if(Li||Q!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",S.projectionMatrix),pe.setValue(I,"viewMatrix",S.matrixWorldInverse);let an=pe.map.cameraPosition;an!==void 0&&an.setValue(I,ut.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,rn=!0,ts=!0)}if(Et.needsLights&&(Ke.state.sunShadowMap.length>0&&pe.setValue(I,"sunShadowMap",Ke.state.sunShadowMap,Y),Ke.state.directionalShadowMap.length>0&&pe.setValue(I,"directionalShadowMap",Ke.state.directionalShadowMap,Y),Ke.state.spotShadowMap.length>0&&pe.setValue(I,"spotShadowMap",Ke.state.spotShadowMap,Y),Ke.state.pointShadowMap.length>0&&pe.setValue(I,"pointShadowMap",Ke.state.pointShadowMap,Y)),G.isSkinnedMesh){pe.setOptional(I,G,"bindMatrix"),pe.setOptional(I,G,"bindMatrixInverse");let ye=G.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),pe.setValue(I,"boneTexture",ye.boneTexture,Y))}G.isBatchedMesh&&(pe.setOptional(I,G,"batchingTexture"),pe.setValue(I,"batchingTexture",G._matricesTexture,Y),pe.setOptional(I,G,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",G._indirectTexture,Y),pe.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",G._colorsTexture,Y));let on=V.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&N.update(G,V,ci),(rn||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,pe.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Ae.envMapIntensity.value=D.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=A_()),rn){if(pe.setValue(I,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&ad(Ae,ts),Mt&&H.fog===!0&&Lt.refreshFogUniforms(Ae,Mt),Lt.refreshMaterialUniforms(Ae,H,j,J,E.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.lightProbeGrid){let ye=Et.lightProbeGrid;Ae.probesSH.value=ye.texture,Ae.probesMin.value.copy(ye.boundingBox.min),Ae.probesMax.value.copy(ye.boundingBox.max),Ae.probesResolution.value.copy(ye.resolution)}zs.upload(I,Sh(Et),Ae,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zs.upload(I,Sh(Et),Ae,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(I,"center",G.center),pe.setValue(I,"modelViewMatrix",G.modelViewMatrix),pe.setValue(I,"normalMatrix",G.normalMatrix),pe.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let ye=H.uniformsGroups;for(let an=0,es=ye.length;an<es;an++){let Th=ye[an];it.update(Th,ci),it.bind(Th,ci)}}return ci}function ad(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,D,V){let H=k.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=D,k.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let V=k.get(S);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,V=0){nt=S,W=D,X=V;let H=null,G=!1,Mt=!1;if(S){let yt=k.get(S);if(yt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,yt.__webglFramebuffer),et.copy(S.viewport),It.copy(S.scissor),wt=S.scissorTest,x.viewport(et),x.scissor(It),x.setScissorTest(wt),q=-1;return}else if(yt.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(yt.__hasExternalTextures)Y.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Jt=S.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&k.has(Jt)&&(S.width!==Jt.image.width||S.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Mt=!0);let Pt=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?H=Pt[D][V]:H=Pt[D],G=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?H=k.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?H=Pt[V]:H=Pt,et.copy(S.viewport),It.copy(S.scissor),wt=S.scissorTest}else et.copy(bt).multiplyScalar(j).floor(),It.copy(kt).multiplyScalar(j).floor(),wt=de;if(V!==0&&(H=z),x.bindFramebuffer(I.FRAMEBUFFER,H)&&x.drawBuffers(S,H),x.viewport(et),x.scissor(It),x.setScissorTest(wt),G){let yt=k.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,V)}else if(Mt){let yt=D;for(let At=0;At<S.textures.length;At++){let Pt=k.get(S.textures[At]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+At,Pt.__webglTexture,V,yt)}}else if(S!==null&&V!==0){let yt=k.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,V)}q=-1};function Eh(S){let D=k.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=A.textureFormatReadable(S.format),D.__typeReadable=A.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,V,H,G,Mt,Tt,yt=0){if(!(S&&S.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){x.bindFramebuffer(I.FRAMEBUFFER,At);try{let Pt=S.textures[yt],Jt=Pt.format,ee=Pt.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt);let Rt=Eh(Pt);if(Rt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&V>=0&&V<=S.height-G&&I.readPixels(D,V,H,G,gt.convert(Jt),gt.convert(ee),Mt)}finally{let Pt=nt!==null?k.get(nt).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,D,V,H,G,Mt,Tt,yt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(D>=0&&D<=S.width-H&&V>=0&&V<=S.height-G){x.bindFramebuffer(I.FRAMEBUFFER,At);let Pt=S.textures[yt],Jt=Pt.format,ee=Pt.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt);let Rt=Eh(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(D,V,H,G,gt.convert(Jt),gt.convert(ee),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Pe=nt!==null?k.get(nt).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Pe);let Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Hu(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(fe),I.deleteSync(Me),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,V=0){let H=Math.pow(2,-V),G=Math.floor(S.image.width*H),Mt=Math.floor(S.image.height*H),Tt=D!==null?D.x:0,yt=D!==null?D.y:0;Y.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,Tt,yt,G,Mt),x.unbindTexture()},this.copyTextureToTexture=function(S,D,V=null,H=null,G=0,Mt=0){let Tt,yt,At,Pt,Jt,ee,Rt,fe,Pe,Me=S.isCompressedTexture?S.mipmaps[Mt]:S.image;if(V!==null)Tt=V.max.x-V.min.x,yt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Jt=V.min.y,ee=V.isBox3?V.min.z:0;else{let Ae=Math.pow(2,-G);Tt=Math.floor(Me.width*Ae),yt=Math.floor(Me.height*Ae),S.isDataArrayTexture?At=Me.depth:S.isData3DTexture?At=Math.floor(Me.depth*Ae):At=1,Pt=0,Jt=0,ee=0}H!==null?(Rt=H.x,fe=H.y,Pe=H.z):(Rt=0,fe=0,Pe=0);let ge=gt.convert(D.format),We=gt.convert(D.type),Et;D.isData3DTexture?(Y.setTexture3D(D,0),Et=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),Et=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),Et=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Ke=x.getParameter(I.UNPACK_ROW_LENGTH),oe=x.getParameter(I.UNPACK_IMAGE_HEIGHT),ci=x.getParameter(I.UNPACK_SKIP_PIXELS),Li=x.getParameter(I.UNPACK_SKIP_ROWS),rn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Me.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),x.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),x.pixelStorei(I.UNPACK_SKIP_IMAGES,ee);let ts=S.isDataArrayTexture||S.isData3DTexture,pe=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Ae=k.get(S),on=k.get(D),ye=k.get(Ae.__renderTarget),an=k.get(on.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,ye.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let es=0;es<At;es++)ts&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(S).__webglTexture,G,ee+es),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(D).__webglTexture,Mt,Pe+es)),I.blitFramebuffer(Pt,Jt,Tt,yt,Rt,fe,Tt,yt,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||k.has(S)){let Ae=k.get(S),on=k.get(D);x.bindFramebuffer(I.READ_FRAMEBUFFER,L),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let ye=0;ye<At;ye++)ts?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,G,ee+ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,G),pe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,Mt,Pe+ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,Mt),G!==0?I.blitFramebuffer(Pt,Jt,Tt,yt,Rt,fe,Tt,yt,I.COLOR_BUFFER_BIT,I.NEAREST):pe?I.copyTexSubImage3D(Et,Mt,Rt,fe,Pe+ye,Pt,Jt,Tt,yt):I.copyTexSubImage2D(Et,Mt,Rt,fe,Pt,Jt,Tt,yt);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Et,Mt,Rt,fe,Pe,Tt,yt,At,ge,We,Me.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,Mt,Rt,fe,Pe,Tt,yt,At,ge,Me.data):I.texSubImage3D(Et,Mt,Rt,fe,Pe,Tt,yt,At,ge,We,Me):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,Rt,fe,Tt,yt,ge,We,Me.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,Rt,fe,Me.width,Me.height,ge,Me.data):I.texSubImage2D(I.TEXTURE_2D,Mt,Rt,fe,Tt,yt,ge,We,Me);x.pixelStorei(I.UNPACK_ROW_LENGTH,Ke),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe),x.pixelStorei(I.UNPACK_SKIP_PIXELS,ci),x.pixelStorei(I.UNPACK_SKIP_ROWS,Li),x.pixelStorei(I.UNPACK_SKIP_IMAGES,rn),Mt===0&&D.generateMipmaps&&I.generateMipmap(Et),x.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){W=0,X=0,nt=null,x.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var gl=class extends zn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Yt;t.deleteAttribute("uv");let e=new gn({side:Ce}),i=new gn,s=new Or(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ei(t,i,6),a=new Ne;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Gt(t,ks(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Gt(t,ks(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Gt(t,ks(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Gt(t,ks(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Gt(t,ks(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new Gt(t,ks(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ks(n){return new Dr({color:0,emissive:16777215,emissiveIntensity:n})}var mi={uBendY:{value:.0026},uBendX:{value:0}},tn=`
uniform float uBendY;
uniform float uBendX;
`,en=`
{
  float bendZ = min( mvPosition.z, 0.0 );
  mvPosition.y -= uBendY * bendZ * bendZ;
  mvPosition.x += uBendX * bendZ * bendZ;
}
`;function oo(n,t){n.onBeforeCompile=i=>{i.uniforms.uBendY=mi.uBendY,i.uniforms.uBendX=mi.uBendX,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
`+tn).replace("#include <project_vertex>",`#include <project_vertex>
`+en+`
gl_Position = projectionMatrix * mvPosition;`),t&&t(i)};let e="bend-"+(t&&t.key?t.key:"plain");return n.customProgramCacheKey=()=>e,n}var R_=(()=>{let n=new Hn(new Uint8Array([105,190,255]),3,1,Ns);return n.minFilter=Re,n.magFilter=Re,n.generateMipmaps=!1,n.needsUpdate=!0,n})(),xl={uRimColor:{value:new ft("#ffd6f0")},uRimStrength:{value:.35}};function Ef(n){n.uniforms.uRimColor=xl.uRimColor,n.uniforms.uRimStrength=xl.uRimStrength,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRimColor;
uniform float uRimStrength;`).replace("#include <opaque_fragment>",`{
        float rimDot = 1.0 - clamp( dot( normal, normalize( vViewPosition ) ), 0.0, 1.0 );
        outgoingLight += uRimColor * pow( rimDot, 3.0 ) * uRimStrength;
      }
      #include <opaque_fragment>`)}Ef.key="rim";function De(n,t={}){let{rim:e=!1,bend:i=!0,...s}=t,r=new Lr({color:n,gradientMap:R_,...s});return i?oo(r,e?Ef:void 0):r}function Je(n,t={}){let e=new gn({color:n,roughness:.32,metalness:0,...t});return oo(e)}function wn(n,t={}){return oo(new Oi({color:n,...t}))}var C_={uOutline:{value:.03}};function Tf(n){n.uniforms.uOutline=C_.uOutline,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uOutline;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize( normal ) * uOutline;`)}Tf.key="outline";var wf=oo(new Oi({color:1904408,side:Ce}),Tf);function Rf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<n.length;++h){let d=n[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let f=0;f<n.length;++f){let u=n[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Af(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let M=0;M<o[h].length;++M)u.push(o[h][M][f]);let m=Af(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Af(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new xe(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<e;m++){let M=h.getComponent(f,m);a.setComponent(f+d,m,M)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Cf(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,b=a.length;y<b;y++){let _=a[y],T=n.attributes[_];l[_]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let E=n.morphAttributes[_];E&&(c[_]||(c[_]=[]),E.forEach((R,v)=>{let w=new R.array.constructor(R.count*R.itemSize);c[_][v]=new R.constructor(w,R.itemSize,R.normalized)}))}let u=t*.5,m=Math.log10(1/t),M=Math.pow(10,m),g=u*M;for(let y=0;y<r;y++){let b=i?i.getX(y):y,_="";for(let T=0,E=a.length;T<E;T++){let R=a[T],v=n.getAttribute(R),w=v.itemSize;for(let C=0;C<w;C++)_+=`${Math.trunc(v[d[C]](b)*M+g)},`}if(_ in e)h.push(e[_]);else{for(let T=0,E=a.length;T<E;T++){let R=a[T],v=n.getAttribute(R),w=n.morphAttributes[R],C=v.itemSize,U=l[R],F=c[R];for(let z=0;z<C;z++){let L=d[z],O=f[z];if(U[O](o,v[L](b)),w)for(let W=0,X=w.length;W<X;W++)F[W][O](o,w[W][L](b))}}e[_]=o,h.push(o),o++}}let p=n.clone();for(let y in n.attributes){let b=l[y];if(p.setAttribute(y,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),y in c)for(let _=0;_<c[y].length;_++){let T=c[y][_];p.morphAttributes[y][_]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(h),p}var Pf=new ne,If=new ke,Lf=new Ye,Df=new P,Uf=new P;function An(n,t={}){let{x:e=0,y:i=0,z:s=0,rx:r=0,ry:o=0,rz:a=0,s:l=1}=t,c=t.sx??l,h=t.sy??l,d=t.sz??l;return Lf.set(r,o,a),If.setFromEuler(Lf),Df.set(e,i,s),Uf.set(c,h,d),Pf.compose(Df,If,Uf),n.applyMatrix4(Pf),n}function _l(n,t){let e=n.index?n.toNonIndexed():n,i=t instanceof ft?t:new ft(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=i.r,r[o*3+1]=i.g,r[o*3+2]=i.b;e.setAttribute("color",new xe(r,3)),e.attributes.uv||e.setAttribute("uv",new xe(new Float32Array(s*2),2));for(let o of Object.keys(e.attributes))["position","normal","uv","color"].includes(o)||e.deleteAttribute(o);return e.clearGroups(),e}function lt(n,t,e){return _l(An(n,e),t)}function we(n){let t=Rf(n,!1);return t.computeBoundingSphere(),t.computeBoundingBox(),t}function Nf(n){n.deleteAttribute("normal"),n.deleteAttribute("uv");let t=Cf(n,1e-4);t.computeVertexNormals();let e=t.attributes.position.count;return t.setAttribute("uv",new xe(new Float32Array(e*2),2)),t}function P_(n=1){let t=new Ki;return t.moveTo(0,-.44*n),t.bezierCurveTo(-.1*n,-.33*n,-.52*n,-.08*n,-.52*n,.15*n),t.bezierCurveTo(-.52*n,.37*n,-.36*n,.49*n,-.21*n,.49*n),t.bezierCurveTo(-.09*n,.49*n,0,.41*n,0,.3*n),t.bezierCurveTo(0,.41*n,.09*n,.49*n,.21*n,.49*n),t.bezierCurveTo(.36*n,.49*n,.52*n,.37*n,.52*n,.15*n),t.bezierCurveTo(.52*n,-.08*n,.1*n,-.33*n,0,-.44*n),t}function nn(n=1,t=.16,e=1){let i=new mn(P_(n),{depth:t*n,bevelEnabled:!0,bevelThickness:.13*n,bevelSize:.09*n,bevelSegments:e>1?5:3,curveSegments:e>1?18:9});return i.center(),Nf(i)}function I_(n=.5,t=.23,e=5){let i=new Ki;for(let s=0;s<e*2;s++){let r=s%2===0?n:t,o=s/(e*2)*Math.PI*2+Math.PI/2,a=Math.cos(o)*r,l=Math.sin(o)*r;s===0?i.moveTo(a,l):i.lineTo(a,l)}return i.closePath(),i}function ao(n=1){let t=new mn(I_(.5*n,.24*n),{depth:.12*n,bevelEnabled:!0,bevelThickness:.08*n,bevelSize:.06*n,bevelSegments:3});return t.center(),Nf(t)}function ah(n=.5){let t=[];for(let i=0;i<=18;i++){let s=i/18,r=-Math.PI/2+s*Math.PI,o=Math.cos(r)*n*(1+.1*Math.sin(s*Math.PI)*(s>.5?1:.55)),a=Math.sin(r)*n*.9;a-=Math.exp(-Math.pow((s-1)/.13,2))*.16*n,a+=Math.exp(-Math.pow(s/.1,2))*.07*n,t.push(new st(Math.max(1e-4,o),a))}return new Cs(t,20)}function Ff(){let n=[[.2,-.04],[.195,.04],[.17,.13],[.125,.21],[.075,.27],[.03,.305],[1e-4,.315]].map(([e,i])=>new st(e,i)),t=new Cs(n,28);return t.scale(1,1,.72),t}function lh(n=1){let t=n>1?24:12,e=n>1?16:9,i=new Zt(.5,t,e);An(i,{sx:.66,sy:.5,sz:.3,rz:-.22,x:-.37});let s=new Zt(.5,t,e);An(s,{sx:.66,sy:.5,sz:.3,rz:.22,x:.37});let r=new Zt(.5,t*.75,e);return An(r,{sx:.32,sy:.32,sz:.3,z:.02}),[i,s,r]}function lo(n,t={}){let e=lh().map(s=>_l(s,n)),i=we(e);return An(i,t)}function $n(n=1,t=16777215){let e=n*9301+49297,i=()=>(e=(e*9301+49297)%233280,e/233280),s=[],r=5+Math.floor(i()*3);for(let o=0;o<r;o++){let a=o/(r-1)-.5,l=.75+i()*.55-Math.abs(a)*.6;s.push(lt(new Zt(1,11,8),t,{x:a*3.2+(i()-.5)*.4,y:i()*.45+(.5-Math.abs(a))*.5,z:(i()-.5)*.9,s:l,sy:l*.82}))}return s.push(lt(new Zt(1,11,6),t,{sx:2.1,sy:.45,sz:.9,y:-.15})),we(s)}function Ws(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}function Of(n,t,e,i){n.beginPath(),n.moveTo(t,e+i*.42),n.bezierCurveTo(t-i*.1,e+i*.33,t-i*.52,e+i*.08,t-i*.52,e-i*.15),n.bezierCurveTo(t-i*.52,e-i*.37,t-i*.36,e-i*.49,t-i*.21,e-i*.49),n.bezierCurveTo(t-i*.09,e-i*.49,t,e-i*.41,t,e-i*.3),n.bezierCurveTo(t,e-i*.41,t+i*.09,e-i*.49,t+i*.21,e-i*.49),n.bezierCurveTo(t+i*.36,e-i*.49,t+i*.52,e-i*.37,t+i*.52,e-i*.15),n.bezierCurveTo(t+i*.52,e+i*.08,t+i*.1,e+i*.33,t,e+i*.42),n.closePath()}function Bf(n,t,e,i,s,r=5,o=-Math.PI/2){n.beginPath();for(let a=0;a<r*2;a++){let l=a%2===0?i:s,c=o+a/(r*2)*Math.PI*2,h=t+Math.cos(c)*l,d=e+Math.sin(c)*l;a===0?n.moveTo(h,d):n.lineTo(h,d)}n.closePath()}function Vs(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Xs(n,{repeat:t=!1,aniso:e=1,srgb:i=!0}={}){let s=new kn(n);return i&&(s.colorSpace=ze),t&&(s.wrapS=s.wrapT=On),s.anisotropy=e,s}function zf(n){let[i,s]=Ws(512,512);s.fillStyle="#ffb0d2",s.fillRect(0,0,512,512);let r=u=>(u+3.7)/7.4*512;[[-3.15,-1.05],[-1.05,1.05],[1.05,3.15]].forEach(([u,m],M)=>{let g=r(u),p=r(m);for(let y=0;y<4;y++){let b=y*512/4;s.fillStyle=(y+M)%2===0?"#ffa3c9":"#ffbfdc",Vs(s,g+7,b+7,p-g-14,512/4-14,16),s.fill()}}),s.fillStyle="rgba(255,255,255,0.55)";let a=[[-2.1,.15],[0,.4],[2.1,.65],[-2.1,.9],[0,.9-.75],[2.1,.15+.25]];for(let[u,m]of a)Of(s,r(u),m*512,26),s.fill();s.fillStyle="#ffffff";for(let u of[-1.05,1.05])for(let m=0;m<512;m+=512/2)Vs(s,r(u)-7,m+40,14,512/2-80,7),s.fill();let l=r(-3.15),c=r(3.15);s.fillStyle="#fffafc",s.fillRect(0,0,l,512),s.fillRect(c,0,512-c,512);let h=8;for(let u=0;u<h;u++){let m=(u+.5)/h*512;s.beginPath(),s.arc(l,m,512/h/2,-Math.PI/2,Math.PI/2),s.fill(),s.beginPath(),s.arc(c,m,512/h/2,Math.PI/2,Math.PI*1.5),s.fill()}let d=["#ff6fae","#7fd6ff","#ffd23f","#8ee6b8"];for(let u=0;u<26;u++){let M=(u%2===0?0:1)===0?6+u*37%Math.max(1,l-20):c+18+u*29%Math.max(1,512-c-26),g=u*97%512;s.save(),s.translate(M,g),s.rotate(u*1.3),s.fillStyle=d[u%d.length],Vs(s,-7,-2.5,14,5,2.5),s.fill(),s.restore()}let f=Xs(i,{aniso:n});return f.wrapT=On,f}function Hf(n){let[e,i]=Ws(256,256);i.fillStyle="#b8f0cc",i.fillRect(0,0,256,256);let s=7,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<220;a++)i.fillStyle=r()>.5?"rgba(120, 214, 160, 0.45)":"rgba(215, 255, 228, 0.6)",i.beginPath(),i.ellipse(r()*256,r()*256,2+r()*4,1+r()*2,r()*3,0,Math.PI*2),i.fill();let o=["#ffffff","#ff9cc9","#ffe27a","#c9b3ff"];for(let a=0;a<16;a++){let l=r()*256,c=r()*256,h=o[a%o.length];i.fillStyle=h;for(let d=0;d<5;d++){let f=d/5*Math.PI*2;i.beginPath(),i.arc(l+Math.cos(f)*4,c+Math.sin(f)*4,3.4,0,Math.PI*2),i.fill()}i.fillStyle=h==="#ffe27a"?"#ff8fbf":"#ffd23f",i.beginPath(),i.arc(l,c,2.6,0,Math.PI*2),i.fill()}return Xs(e,{repeat:!0,aniso:n})}function Gf(n="#ff5f9e",t="#ffffff"){let[i,s]=Ws(64,64);s.fillStyle=t,s.fillRect(0,0,64,64),s.fillStyle=n;for(let r=-2;r<4;r++)s.beginPath(),s.moveTo(r*32,0),s.lineTo(r*32+16,0),s.lineTo(r*32+16+64,64),s.lineTo(r*32+64,64),s.closePath(),s.fill();return Xs(i,{repeat:!0})}function kf(n){let[i,s]=Ws(256,64);s.clearRect(0,0,256,64),s.fillStyle="#ffffff",Vs(s,0,20,256,7,3),s.fill(),Vs(s,0,44,256,7,3),s.fill();for(let o=0;o<8;o++){let a=o*32+8;s.beginPath(),s.moveTo(a,64),s.lineTo(a,12),s.quadraticCurveTo(a+8,0,a+16,12),s.lineTo(a+16,64),s.closePath(),s.fill()}s.fillStyle="rgba(255, 170, 205, 0.55)";for(let o=0;o<8;o++)s.fillRect(o*32+8,54,16,10);return Xs(i,{repeat:!0,aniso:n})}function Vf(){let[t,e]=Ws(128,128),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"rgba(90, 30, 70, 0.55)"),i.addColorStop(.55,"rgba(90, 30, 70, 0.28)"),i.addColorStop(1,"rgba(90, 30, 70, 0)"),e.fillStyle=i,e.fillRect(0,0,128,128),Xs(t,{})}function Wf(){let[t,e]=Ws(512,256),i=o=>[o%4*128+128/2,Math.floor(o/4)*128+128/2],s=(o,a,l,c=1)=>{let h=e.createRadialGradient(o,a,0,o,a,l);h.addColorStop(0,`rgba(255,255,255,${c})`),h.addColorStop(.3,`rgba(255,255,255,${c*.45})`),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.fillRect(o-l,a-l,l*2,l*2)};e.fillStyle="#fff";{let[o,a]=i(0);s(o,a,60)}{let[o,a]=i(1);s(o,a,58,.5),e.fillStyle="#fff",Bf(e,o,a,44,19),e.fill()}{let[o,a]=i(2);e.fillStyle="#fff",Of(e,o,a+4,96),e.fill()}{let[o,a]=i(3);s(o,a,40,.8),e.fillStyle="#fff",Bf(e,o,a,58,7,4,0),e.fill()}{let[o,a]=i(4);e.fillStyle="#fff",Vs(e,o-34,a-18,68,36,8),e.fill()}{let[o,a]=i(5);e.strokeStyle="#fff",e.lineWidth=9,e.beginPath(),e.arc(o,a,48,0,Math.PI*2),e.stroke(),s(o,a,60,.25)}{let[o,a]=i(6);e.fillStyle="#fff",e.beginPath(),e.moveTo(o,a+48),e.bezierCurveTo(o-46,a+10,o-30,a-40,o-6,a-44),e.lineTo(o,a-34),e.lineTo(o+6,a-44),e.bezierCurveTo(o+30,a-40,o+46,a+10,o,a+48),e.fill()}{let[o,a]=i(7);for(let l=0;l<6;l++){let c=l/6*Math.PI*2;s(o+Math.cos(c)*16,a+Math.sin(c)*16,40,.55)}s(o,a,50,.7)}return Xs(t,{})}var Kn={magnet:{name:"Heart Magnet",time:10,color:"#ff4f97"},rush:{name:"Rainbow Rush",time:6.5,color:"#ff9f3d"},shield:{name:"Bubble Shield",time:30,color:"#4fb8ff"},double:{name:"Golden Apple x2",time:12,color:"#f5b400"}},Rn=[{id:"classic",name:"Classic Kitty",price:0,bow:15208749,overalls:3105750,shirt:16765503,acc:null},{id:"sakura",name:"Sakura Dream",price:150,bow:16740277,overalls:16751819,shirt:16777215,acc:"flower"},{id:"sailor",name:"Ocean Sailor",price:300,bow:2780660,overalls:2044272,shirt:16777215,acc:"sailor"},{id:"mint",name:"Mint Candy",price:450,bow:16761370,overalls:4181924,shirt:16773542,acc:null},{id:"star",name:"Starlight",price:700,bow:10316799,overalls:3483002,shirt:16769126,acc:"star"},{id:"princess",name:"Princess Kitty",price:1e3,bow:16727435,overalls:16759004,shirt:16777215,acc:"crown"},{id:"rainbow",name:"Rainbow Magic",price:1500,bow:"rainbow",overalls:16777215,shirt:12576511,acc:"star"}],Qn=[{name:"Strawberry Morning",top:"#63bcff",horizon:"#ffd3ea",bottom:"#ffe6f2",fog:"#ffd8ec",light:"#fff3e6",lightI:1.55,hemiSky:"#fff6fb",hemiGround:"#ffc6e0",hemiI:1.1,sunColor:"#fff0d8",sunDisc:1,stars:0,lamps:.05,rainbow:.6,rim:.22,bloom:.55},{name:"Peach Sunset",top:"#6f63e8",horizon:"#ffae8a",bottom:"#ffc7ae",fog:"#ffbc9f",light:"#ffd0a6",lightI:1.5,hemiSky:"#ffe0d6",hemiGround:"#d8a2ff",hemiI:1.05,sunColor:"#ffb070",sunDisc:1.2,stars:.15,lamps:.75,rainbow:.25,rim:.4,bloom:.65},{name:"Starry Night",top:"#0d0a33",horizon:"#4f3590",bottom:"#2c2063",fog:"#3a2a75",light:"#b3c0ff",lightI:1.05,hemiSky:"#9189ff",hemiGround:"#46357a",hemiI:1.1,sunColor:"#e9ecff",sunDisc:.6,stars:1,lamps:1,rainbow:0,rim:.6,bloom:.68},{name:"Cotton Candy Dawn",top:"#94a0ff",horizon:"#ffc1e3",bottom:"#ffdcee",fog:"#ffcbe5",light:"#ffe6f2",lightI:1.5,hemiSky:"#f4e8ff",hemiGround:"#ffc2da",hemiI:1.08,sunColor:"#ffe3f1",sunDisc:.9,stars:.3,lamps:.45,rainbow:.45,rim:.32,bloom:.6}],vl=650,ch=170;var gi=280,yl=22;function hh(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Xf(n,t,e,i,s,r=0){let o=[],a=n/s;for(let l=0;l<s;l++)o.push(lt(new se(t,t,a,10,1,!0),l%2?e:i,{y:r+a*(l+.5)}));return o}function D_(){let n=Xf(2.9,.085,"#ff5f9e","#ffffff",10),t=new ei(.32,.085,8,18,Math.PI);return n.push(lt(t,"#ff5f9e",{x:.32,y:2.9})),n.push(lt(new se(.1,.16,.18,12),"#ffffff",{x:.64,y:2.8})),n.push(lt(new se(.17,.2,.12,12),"#ffffff",{y:.06})),we(n)}function U_(){let n=Xf(1.7,.13,"#ffe3f0","#ffffff",3),t=[[0,2.25,0,.95],[.6,1.95,.2,.62],[-.55,2.02,-.15,.66],[.1,2.85,.1,.62],[-.15,1.85,.5,.5]];for(let[e,i,s,r]of t)n.push(lt(new Zt(1,12,8),"#ffffff",{x:e,y:i,z:s,s:r}));return we(n)}function N_(){let n=[lt(new se(.07,.07,2.3,8),"#ffffff",{y:1.15})],t=[[.85,.18,"#ff6fae"],[.66,.2,"#ffffff"],[.47,.22,"#ff6fae"],[.29,.24,"#ffffff"],[.12,.26,"#ff6fae"]];for(let[e,i,s]of t)n.push(lt(new se(e,e,i,22),s,{y:2.9,rx:Math.PI/2}));return n.push(lo("#7fd6ff",{s:.5,y:2.12,z:.1})),we(n)}function F_(n,t,e){let i=[];i.push(lt(new Yt(2.6,2,2.4),n,{y:1})),i.push(lt(new wi(2.15,1.55,4),t,{y:2.77,ry:Math.PI/4})),i.push(lt(new Yt(.34,.8,.34),"#ffffff",{x:-.6,y:3.1,z:-.4})),i.push(lt(new Yt(.42,.14,.42),t,{x:-.6,y:3.52,z:-.4})),i.push(lt(new Yt(.1,1.05,.66),e,{x:1.31,y:.53})),i.push(lt(new Zt(.05,8,6),"#ffd23f",{x:1.38,y:.55,z:.18}));for(let s of[-.78,.78])i.push(lt(new Yt(.08,.62,.62),"#ffffff",{x:1.31,y:1.3,z:s})),i.push(lt(new Yt(.1,.48,.48),"#bfe8ff",{x:1.32,y:1.3,z:s})),i.push(lt(new Yt(.12,.14,.7),"#ffb3d1",{x:1.34,y:.92,z:s}));return i.push(lt(nn(.42),"#ff4f97",{x:1.34,y:1.35,ry:Math.PI/2})),we(i)}function B_(){let n=[lt(new se(.2,.26,.6,12),"#fff4ea",{y:.3})];n.push(lt(new Zt(.62,16,8,0,Math.PI*2,0,Math.PI/2),"#ff5577",{y:.55,sy:.75}));let t=[[.3,.8,.2],[-.25,.85,.25],[.05,1,-.1],[-.3,.75,-.3],[.32,.72,-.28],[0,.78,.45]];for(let[e,i,s]of t)n.push(lt(new Zt(.09,8,6),"#ffffff",{x:e,y:i,z:s}));return we(n)}function O_(){let n=[],t=[[0,.45,0,.6],[.5,.35,.1,.45],[-.5,.38,-.05,.48],[.1,.7,.05,.42]];for(let[i,s,r,o]of t)n.push(lt(new Zt(1,10,7),"#9fe8b4",{x:i,y:s,z:r,s:o}));return[[.3,.9,.3],[-.4,.75,.35],[.6,.6,.4],[-.1,1.05,-.1],[0,.55,.55]].forEach(([i,s,r],o)=>n.push(lt(new Zt(.1,8,6),o%2?"#ff8fc0":"#fff38a",{x:i,y:s,z:r}))),we(n)}function z_(){let n=[lt(nn(1,.3),"#ffffff",{})];return n.push(lt(new se(.012,.012,1.8,4),"#ffffff",{y:-1.35})),we(n)}var Vi=class{constructor(t,e,i,s,r){this.meshes=t,this.count=e,this.spacing=i,this.span=e*i,this.place=s,this.rand=hh(r),this.items=[];for(let o=0;o<e;o++)this.items.push({s:0,x:0,y:0,ry:0,sc:1,sy:1,bob:0,phase:0});this.m=new ne,this.q=new ke,this.e=new Ye,this.v=new P,this.sv=new P;for(let o of t)o.frustumCulled=!1}reset(t){this.items.forEach((e,i)=>{e.s=t-22+i*this.spacing+this.rand()*this.spacing*.8,this.respawn(e,i)})}respawn(t,e){if(this.place(t,this.rand,e),!!t.color)for(let i of this.meshes)i.setColorAt(e,t.color),i.instanceColor.needsUpdate=!0}update(t,e){let{m:i,q:s,e:r,v:o,sv:a}=this;for(let l=0;l<this.count;l++){let c=this.items[l],h=t-c.s;h>24&&(c.s+=this.span,this.respawn(c,l),h=t-c.s),r.set(0,c.ry,0),s.setFromEuler(r),o.set(c.x,c.y+(c.bob?Math.sin(e*1.4+c.phase)*c.bob:0),h),a.set(c.sc,c.sc*c.sy,c.sc),i.compose(o,s,a);for(let d of this.meshes)d.setMatrixAt(l,i)}for(let l of this.meshes)l.instanceMatrix.needsUpdate=!0}},Ml=class{constructor(t,e){this.scene=t,this.renderer=e;let i=Math.min(8,e.capabilities.getMaxAnisotropy());this.pal={},this.buildLights(),this.buildSky(),this.buildBackground(),this.buildGround(i),this.buildProps(),this.paletteIndex=-1,this.setPalette(0)}buildLights(){this.hemi=new Nr(16777215,16761053,1.2),this.scene.add(this.hemi),this.sun=new zr(16777215,1.7),this.sun.position.set(4,10,7),this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.fog=new gr(16767212,42,140)}buildSky(){this.skyUniforms={uTop:{value:new ft},uHorizon:{value:new ft},uBottom:{value:new ft},uSunColor:{value:new ft},uSunDir:{value:new P(-.35,.22,-.9).normalize()},uSunDisc:{value:1},uTime:{value:0}};let t=new Gt(new Zt(900,32,20),new ae({uniforms:this.skyUniforms,vertexShader:`
          varying vec3 vDir;
          void main() {
            vDir = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,fragmentShader:`
          uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir;
          uniform float uSunDisc, uTime;
          varying vec3 vDir;
          void main() {
            vec3 d = normalize(vDir);
            float h = d.y;
            vec3 col = mix(uHorizon, uTop, pow(smoothstep(-0.03, 0.62, h), 0.75));
            col = mix(uBottom, col, smoothstep(-0.3, -0.02, h));
            float sd = max(dot(d, normalize(uSunDir)), 0.0);
            col += uSunColor * (smoothstep(0.9985, 0.9992, sd) * 2.6 * uSunDisc + pow(sd, 24.0) * 0.3 * uSunDisc + pow(sd, 4.0) * 0.05);
            gl_FragColor = vec4(col, 1.0);
          }`,side:Ce,depthWrite:!1,depthTest:!1,fog:!1}));t.renderOrder=-10,t.frustumCulled=!1,this.sky=t,this.scene.add(t);let e=520,i=new Float32Array(e*3),s=new Float32Array(e),r=hh(99);for(let a=0;a<e;a++){let l=r()*Math.PI*2,c=.08+r()*.92,h=Math.sqrt(1-c*c);i[a*3]=Math.cos(l)*h*800,i[a*3+1]=c*800,i[a*3+2]=Math.sin(l)*h*800,s[a]=r()*10}let o=new me;o.setAttribute("position",new xe(i,3)),o.setAttribute("aTw",new xe(s,1)),this.starUniforms={uAlpha:{value:0},uTime:{value:0},uPx:{value:1}},this.stars=new Gn(o,new ae({uniforms:this.starUniforms,vertexShader:`
        attribute float aTw;
        uniform float uTime, uPx;
        varying float vA;
        void main() {
          vA = 0.55 + 0.45 * sin(uTime * (1.5 + fract(aTw) * 2.5) + aTw * 7.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (1.5 + fract(aTw * 3.7) * 2.8) * uPx;
        }`,fragmentShader:`
        uniform float uAlpha;
        varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * 1.6, a * vA * uAlpha);
        }`,transparent:!0,depthWrite:!1,blending:Ri,fog:!1})),this.stars.renderOrder=-9,this.stars.frustumCulled=!1,this.scene.add(this.stars)}buildBackground(){let t=this.bg=new Te;this.scene.add(t),this.rainbowUniforms={uAlpha:{value:.6}};let e=new Gt(new ei(300,26,6,80,Math.PI),new ae({uniforms:this.rainbowUniforms,vertexShader:`
          varying float vR;
          varying float vA;
          void main() {
            vR = (length(position.xy) - 274.0) / 52.0;
            vA = position.y / 300.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,fragmentShader:`
          uniform float uAlpha;
          varying float vR;
          varying float vA;
          void main() {
            float r = clamp(vR, 0.0, 1.0);
            vec3 c;
            if (r < 0.1667) c = vec3(0.72, 0.55, 1.0);
            else if (r < 0.3333) c = vec3(0.45, 0.72, 1.0);
            else if (r < 0.5) c = vec3(0.5, 0.95, 0.65);
            else if (r < 0.6667) c = vec3(1.0, 0.95, 0.5);
            else if (r < 0.8333) c = vec3(1.0, 0.7, 0.45);
            else c = vec3(1.0, 0.45, 0.6);
            float edge = smoothstep(0.0, 0.06, r) * smoothstep(1.0, 0.94, r);
            float foot = smoothstep(0.0, 0.25, vA);
            gl_FragColor = vec4(c, edge * foot * uAlpha);
          }`,transparent:!0,depthWrite:!1,fog:!1}));e.scale.set(1,.9,.05),e.position.set(40,-150,-560),e.renderOrder=-8,this.rainbow=e,t.add(e);let i=De(16777215,{fog:!1,bend:!1}),s=new Zt(1,28,14,0,Math.PI*2,0,Math.PI/2),r=[[-250,-420,110,52,"#a9ecc4"],[-95,-470,115,44,"#ffc2de"],[70,-450,100,54,"#c9b8ff"],[220,-430,115,48,"#a9ecc4"],[360,-380,100,40,"#ffd3b0"],[-380,-360,100,42,"#ffd3b0"],[-170,-390,70,34,"#ffe3a3"],[140,-380,75,36,"#ffc2de"]];this.hills=new Ei(s,i,r.length),this.hillColors=[],r.forEach(([M,g,p,y,b],_)=>{let T=new ne().compose(new P(M,-22,g),new ke,new P(p,y,p*.8));this.hills.setMatrixAt(_,T),this.hillColors.push(new ft(b)),this.hills.setColorAt(_,this.hillColors[_])}),this.hills.frustumCulled=!1,t.add(this.hills);let o=[],a="#ffc4df",l="#ff6fae",c="#fff7fb",h="#ffd23f";o.push(lt(new Yt(36,26,14),c,{y:13}));for(let M=-2;M<=2;M++)o.push(lt(new Yt(4.2,3.2,14.4),c,{x:M*8,y:27.4}));let d=[[-22,44,6],[22,44,6],[-10,56,5],[10,56,5],[0,70,6.5]];for(let[M,g,p]of d)o.push(lt(new se(p,p*1.05,g,18),a,{x:M,y:g/2,z:-2})),o.push(lt(new wi(p*1.35,p*3.2,18),l,{x:M,y:g+p*1.6,z:-2})),o.push(lt(new Zt(p*.3,10,8),h,{x:M,y:g+p*3.25,z:-2})),o.push(lt(new Yt(p*.6,p*1.1,.4),"#8fd3ff",{x:M,y:g*.72,z:p-2}));o.push(lt(nn(9,.3),l,{y:16,z:7.3})),o.push(lt(new Yt(8,11,.6),"#ffe0ef",{y:5.5,z:7.1})),this.castle=new Gt(we(o),De(16777215,{vertexColors:!0,fog:!1,bend:!1})),this.castle.position.set(-62,-14,-480),this.castle.rotation.y=.18,t.add(this.castle);let f=[$n(1),$n(2),$n(5)],u=De(16777215,{vertexColors:!0,fog:!1,bend:!1,emissive:16770802,emissiveIntensity:.25});this.skyClouds=[];let m=hh(7);for(let M=0;M<14;M++){let g=new Gt(f[M%3],u),p=7+m()*9;g.scale.set(p,p*.8,p*.7),g.position.set(-420+m()*840,45+m()*90,-250-m()*280),g.userData.speed=1.5+m()*2.5,t.add(g),this.skyClouds.push(g)}this.cloudMat=u,this.bgMats=[i,this.castle.material,u]}buildGround(t){this.grassTex=Hf(t),this.grassTex.repeat.set(20,gi/12);let e=new Ai(240,gi,1,140);e.rotateX(-Math.PI/2),e.translate(0,-.02,yl-gi/2),this.grass=new Gt(e,De(16777215,{map:this.grassTex})),this.grass.frustumCulled=!1,this.scene.add(this.grass),this.roadTex=zf(t),this.roadTex.repeat.set(1,gi/8);let i=new Ai(7.4,gi,1,160);i.rotateX(-Math.PI/2),i.translate(0,0,yl-gi/2),this.road=new Gt(i,De(16777215,{map:this.roadTex})),this.road.frustumCulled=!1,this.scene.add(this.road),this.curbTex=Gf(),this.curbTex.repeat.set(2,gi/1.2);let s=new se(.17,.17,gi,12,160,!0);s.rotateX(Math.PI/2);let r=De(16777215,{map:this.curbTex});this.curbs=[];for(let l of[-1,1]){let c=new Gt(s,r);c.position.set(l*3.78,.13,yl-gi/2),c.frustumCulled=!1,this.scene.add(c),this.curbs.push(c)}this.fenceTex=kf(t),this.fenceTex.repeat.set(gi/4,1);let o=new Ai(gi,.85,140,1);o.rotateY(Math.PI/2);let a=De(16777215,{map:this.fenceTex,alphaTest:.5,side:ii});for(let l of[-1,1]){let c=new Gt(o,a);c.position.set(l*5.6,.42,yl-gi/2),c.frustumCulled=!1,this.scene.add(c)}}buildProps(){let t=this.scrollers=[],e=(y,b,_,T=!1)=>{let E=new Ei(y,b,_);return T&&E.setColorAt(0,new ft(1,1,1)),this.scene.add(E),E},i=(y={})=>De(16777215,{vertexColors:!0,...y}),s=22,r=e(D_(),i(),s);this.bulbMat=wn(new ft(1,1,1));let o=new Zt(.2,12,10);o.translate(.64,2.6,0);let a=e(o,this.bulbMat,s);t.push(new Vi([r,a],s,7,(y,b,_)=>{let T=_%2===0?-1:1;y.x=T*4.35,y.y=0,y.ry=T<0?0:Math.PI,y.sc=1},11));let l=["#ffb3d6","#d9c2ff","#b8f0d9","#ffd6b8","#bfe3ff","#ffc2e9"].map(y=>new ft(y)),c=e(U_(),i(),26,!0);t.push(new Vi([c],26,7.5,(y,b)=>{let _=b()<.5?-1:1;y.x=_*(7+b()*14),y.y=0,y.ry=b()*6.28,y.sc=.9+b()*.7,y.color=l[Math.floor(b()*l.length)]},21));let h=e(N_(),i(),10);t.push(new Vi([h],10,19,(y,b)=>{let _=b()<.5?-1:1;y.x=_*(6.4+b()*1.2),y.y=0,y.ry=(b()-.5)*.6,y.sc=.85+b()*.35},31)),[["#fff8f0","#ff5a6e","#ff8fb1"],["#fff2fa","#ff8fc4","#8fd3ff"],["#f3fbff","#7fb8ff","#ffd23f"]].forEach((y,b)=>{let _=e(F_(...y),i(),4);t.push(new Vi([_],4,44,(T,E)=>{let R=E()<.5?-1:1;T.x=R*(12+E()*9),T.y=0,T.ry=(R<0?0:Math.PI)+(E()-.5)*.5,T.sc=.9+E()*.3},41+b*17))});let f=e(B_(),i(),14);t.push(new Vi([f],14,11,(y,b)=>{let _=b()<.5?-1:1;y.x=_*(6.2+b()*10),y.y=0,y.ry=b()*6.28,y.sc=.7+b()*.8},51));let u=e(O_(),i(),18);t.push(new Vi([u],18,8.5,(y,b)=>{let _=b()<.5?-1:1;y.x=_*(5.9+b()*12),y.y=0,y.ry=b()*6.28,y.sc=.8+b()*.8},61));let m=["#ff4f7e","#ff8fc4","#ff6fb5","#b58cff","#ffd23f"].map(y=>new ft(y)),M=e(z_(),Je(16777215,{vertexColors:!0,roughness:.2}),12,!0);t.push(new Vi([M],12,15,(y,b)=>{let _=b()<.5?-1:1;y.x=_*(6+b()*12),y.y=3.5+b()*3,y.ry=(b()-.5)*1.2,y.sc=.6+b()*.35,y.bob=.35,y.phase=b()*6,y.color=m[Math.floor(b()*m.length)]},71));let g=$n(4),p=e(g,De(16777215,{vertexColors:!0,emissive:16773366,emissiveIntensity:.3}),10);t.push(new Vi([p],10,22,(y,b)=>{let _=b()<.5?-1:1;y.x=_*(16+b()*16),y.y=9+b()*7,y.ry=b()*.6,y.sc=1.2+b()*1.4,y.bob=.5,y.phase=b()*6},81))}reset(t){for(let e of this.scrollers)e.reset(t)}paletteAt(t){let e=Math.floor(t/vl),i=t-e*vl,s=vl-ch,r=0;return i>s&&(r=(i-s)/ch),r=r*r*(3-2*r),e+r}setPalette(t){let e=Qn.length,i=(Math.floor(t)%e+e)%e,s=(i+1)%e,r=t-Math.floor(t),o=Qn[i],a=Qn[s],l=this._pc||(this._pc={}),c=m=>{var p,y,b;let M=l[p=o.name+m]||(l[p]=new ft(o[m])),g=l[y=a.name+m]||(l[y]=new ft(a[m]));return((b=this.pal)[m]||(b[m]=new ft)).copy(M).lerp(g,r)},h=m=>this.pal[m]=o[m]+(a[m]-o[m])*r;this.skyUniforms.uTop.value.copy(c("top")),this.skyUniforms.uHorizon.value.copy(c("horizon")),this.skyUniforms.uBottom.value.copy(c("bottom")),this.skyUniforms.uSunColor.value.copy(c("sunColor")),this.skyUniforms.uSunDisc.value=h("sunDisc"),this.scene.fog.color.copy(c("fog")),this.sun.color.copy(c("light")),this.sun.intensity=h("lightI"),this.hemi.color.copy(c("hemiSky")),this.hemi.groundColor.copy(c("hemiGround")),this.hemi.intensity=h("hemiI"),this.starUniforms.uAlpha.value=h("stars"),this.rainbowUniforms.uAlpha.value=h("rainbow"),xl.uRimStrength.value=h("rim");let d=h("lamps");this.bulbMat.color.setRGB(.95+d*1.75,.82+d*1.3,.62+d*.7),h("bloom");let f=this.pal.horizon;this.hillColors.forEach((m,M)=>{let g=this._tmp||(this._tmp=new ft);g.copy(m).lerp(f,.35),this.hills.setColorAt(M,g)}),this.hills.instanceColor.needsUpdate=!0;let u=h("stars");this.castle.material.color.setRGB(1-u*.45,1-u*.5,1-u*.3),this.cloudMat.emissiveIntensity=.25*(1-u*.8),this.name=r<.5?o.name:a.name}update(t,e,i,s){this.roadTex.offset.y=e/8%1,this.grassTex.offset.y=e/12%1,this.curbTex.offset.y=-(e/1.2)%1,this.fenceTex.offset.x=e/4%1;for(let r of this.scrollers)r.update(e,s);this.sky.position.copy(i.position),this.stars.position.copy(i.position),this.stars.rotation.y=s*.01,this.starUniforms.uTime.value=s,this.bg.position.set(i.position.x*.9,0,i.position.z);for(let r of this.skyClouds)r.position.x+=r.userData.speed*t,r.position.x>460&&(r.position.x-=920);mi.uBendX.value=Math.sin(e*.0045)*.0011}};var co=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i));function H_(){return new ae({uniforms:{uTime:{value:0},uAlpha:{value:1},...mi},vertexShader:`
      ${tn}
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        ${en}
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform float uTime;
      uniform float uAlpha;
      varying vec3 vN;
      varying vec3 vV;
      vec3 hue(float h) {
        return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
      }
      void main() {
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 2.2);
        vec3 col = mix(vec3(0.75, 0.9, 1.0), hue(f * 1.4 + uTime * 0.15 + vN.y * 0.3), 0.55);
        float glint = pow(max(dot(normalize(vN), normalize(vec3(-0.4, 0.6, 0.7))), 0.0), 40.0);
        gl_FragColor = vec4(col * (rim * 1.05 + 0.04) + glint * 1.2, (rim * 0.6 + 0.03 + glint * 0.8) * uAlpha);
      }`,transparent:!0,depthWrite:!1,blending:Ri})}var Sl=class{constructor(){this.root=new Te,this.body=new Te,this.root.add(this.body),this.mats={white:De(16777215,{rim:!0}),black:wn(1839127),shine:wn(16777215),nose:De(16761887),bow:Je(15208749,{roughness:.6,envMapIntensity:.3}),shirt:De(16765503,{rim:!0}),overalls:De(3105750,{rim:!0}),gold:Je(16763196,{roughness:.25,metalness:.6,emissive:7031296,emissiveIntensity:.4}),acc:Je(16748480,{roughness:.35}),accGlow:Je(16769126,{emissive:16758528,emissiveIntensity:1.3,roughness:.3})},this.pose={legL:0,legR:0,armLx:0,armRx:0,armLz:-.35,armRz:.35,tiltX:0,rotX:0,lift:0,headZ:0,headX:0,spin:0},this.mode="idle",this.time=0,this.phase=0,this.squash=0,this.squashV=0,this.blinkT=2,this.waveT=2.5,this.rainbowBow=!1,this.build()}add(t,e,i,s=!1){let r=new Gt(e,i);if(t.add(r),s){let o=new Gt(e,wf);r.add(o)}return r}build(){let t=this.mats;this.body.position.y=.03;let e=this.head=new Te;e.position.set(0,1.07,0),this.body.add(e);let i=new Zt(.5,48,32);i.scale(1.2,.9,1),this.add(e,i,t.white,!0);let s=Ff();for(let E of[-1,1]){let R=this.add(e,s,t.white,!0);R.position.set(E*.33,.25,.03),R.rotation.z=-E*.52}let r=new Zt(.5,20,14);r.scale(.1,.142,.06);let o=new Zt(.017,8,6);this.eyes=[],this.xEyes=new Te,e.add(this.xEyes);let a=new Yt(.13,.026,.02);for(let E of[-1,1]){let R=this.add(e,r,t.black);R.position.set(E*.205,-.02,-.458),R.rotation.y=E*.38;let v=new Gt(o,t.shine);v.position.set(.016,.03,-.027),R.add(v),this.eyes.push(R);for(let w of[.8,-.8]){let C=new Gt(a,t.black);C.position.set(E*.205,-.02,-.47),C.rotation.set(0,E*.38,w),this.xEyes.add(C)}}this.xEyes.visible=!1;let l=new Zt(.5,16,12);l.scale(.13,.085,.07),this.add(e,l,t.nose).position.set(0,-.125,-.475);let h=new se(.012,.012,.34,6);h.rotateZ(Math.PI/2);for(let E of[-1,1])for(let R=0;R<3;R++){let v=this.add(e,h,t.black);v.position.set(E*.66,-.035-R*.075,-.24+R*.02),v.rotation.z=E*(.16-R*.16),v.rotation.y=E*.18}this.bow=new Te,this.bow.position.set(-.31,.33,-.07),this.bow.rotation.set(-.12,.25,.42),this.bow.scale.setScalar(.5),e.add(this.bow);for(let E of lh(2))this.add(this.bow,E,t.bow,!0);this.acc=new Te,e.add(this.acc);let d=this.add(this.body,new Ti(.24,.16,8,22),t.shirt,!0);d.position.y=.47;let f=new Ti(.258,.06,8,22);f.scale(1,1,.96);let u=this.add(this.body,f,t.overalls,!0);u.position.y=.34;let m=new Zt(.035,10,8);for(let E of[-1,1])this.add(this.body,m,t.shirt).position.set(E*.09,.5,-.235);let M=new Ti(.078,.14,6,14),g=new se(.105,.094,.13,16);this.arms=[];for(let E of[-1,1]){let R=new Te;R.position.set(E*.24,.6,0),this.body.add(R);let v=this.add(R,M,t.white,!0);v.position.y=-.15;let w=this.add(R,g,t.shirt,!0);w.position.y=-.035,this.arms.push(R)}let p=new Ti(.1,.07,6,14);this.legs=[];for(let E of[-1,1]){let R=new Te;R.position.set(E*.12,.2,0),this.body.add(R);let v=this.add(R,p,t.white,!0);v.position.y=-.1,this.legs.push(R)}let y=new Ti(.055,.13,4,10),b=this.add(this.body,y,t.white,!0);b.position.set(0,.26,.25),b.rotation.x=.95,this.tail=b,this.shadow=new Gt(new Ai(1.35,1.1),null),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.root.add(this.shadow),this.cloud=new Gt($n(3,16777215),De(16777215,{vertexColors:!0,emissive:16762598,emissiveIntensity:.35})),this.cloud.scale.set(.42,.34,.5),this.cloud.position.y=-.12,this.cloud.visible=!1,this.root.add(this.cloud),this.cloudAmt=0,this.bubbleMat=H_(),this.bubble=new Gt(new Zt(1,32,20),this.bubbleMat),this.bubble.position.y=.78,this.bubble.visible=!1,this.root.add(this.bubble),this.bubbleAmt=0,this.halo=new Gt(new ei(.75,.05,8,40),wn(new ft(2.2,.55,1.2),{transparent:!0,opacity:.9})),this.halo.rotation.x=Math.PI/2,this.halo.visible=!1,this.root.add(this.halo),this.dizzy=new Te,this.dizzy.position.y=1.75;let _=ao(.22),T=Je(16767050,{emissive:16754688,emissiveIntensity:.9});for(let E=0;E<3;E++){let R=new Gt(_,T);this.dizzy.add(R)}this.dizzy.visible=!1,this.root.add(this.dizzy)}setShadowMaterial(t){this.shadow.material=t}setOutfit(t){let e=this.mats;for(this.rainbowBow=t.bow==="rainbow",this.rainbowBow||e.bow.color.set(t.bow),e.overalls.color.set(t.overalls),e.shirt.color.set(t.shirt);this.acc.children.length;)this.acc.remove(this.acc.children[0]);t.acc&&this.acc.add(this.accessory(t.acc)),t.acc==="flower"&&e.acc.color.set(16753615),t.acc==="crown"&&e.acc.color.set(16732055)}accessory(t){let e=this.accCache||(this.accCache={});if(e[t])return e[t];let i=this.mats,s=new Te;if(t==="flower"){let r=new Zt(.075,12,10);for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=this.add(s,r,i.acc,!0);c.position.set(Math.cos(l)*.075,Math.sin(l)*.075,0),c.scale.set(1,1,.55)}let o=this.add(s,new Zt(.05,10,8),i.nose);o.position.z=-.02,s.position.set(.36,.28,-.2),s.rotation.y=.5}else if(t==="sailor"){let r=De(16777215),o=this.add(s,new se(.2,.23,.13,24),r,!0);o.position.y=.06;let a=this.add(s,new se(.235,.235,.05,24),De(2044272));a.position.y=.02;let l=this.add(s,new ei(.23,.035,8,24),r,!0);l.rotation.x=Math.PI/2,s.position.set(.12,.43,.02),s.rotation.z=-.22}else if(t==="star"){let r=this.add(s,ao(.34),i.accGlow,!0);r.position.set(.34,.3,-.12),r.rotation.set(0,.4,-.2)}else if(t==="crown"){let r=this.add(s,new se(.19,.2,.1,24,1,!0),i.gold,!0);r.position.y=.05;let o=new wi(.05,.14,8),a=new Zt(.03,8,6);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;this.add(s,o,i.gold).position.set(Math.cos(c)*.19,.16,Math.sin(c)*.19),this.add(s,a,i.acc).position.set(Math.cos(c)*.2,.05,Math.sin(c)*.2)}s.position.set(.1,.44,0),s.rotation.z=-.18}return e[t]=s,s}kick(t){this.squashV+=t}update(t,e){this.time+=t;let i=this.time,s=this.pose,r=e.mode,o={legL:0,legR:0,armLx:0,armRx:0,armLz:-.32,armRz:.32,tiltX:0,rotX:0,lift:0,headZ:0,headX:0,spin:0},a=16,l=0;if(r==="run"){let b=2.3+e.speed*.075;this.phase+=t*b*Math.PI*2;let _=Math.sin(this.phase);o.legL=_*.95,o.legR=-_*.95,o.armLx=-_*.9,o.armRx=_*.9,o.armLz=-.28,o.armRz=.28,o.tiltX=-.1,o.headZ=Math.sin(this.phase)*.05,o.headX=.04,l=Math.abs(Math.cos(this.phase))*.085,a=30}else if(r==="jump")o.legL=-.75,o.legR=.35,o.armLz=-2.3,o.armRz=2.3,o.armLx=-.2,o.armRx=-.2,o.tiltX=.05,o.headX=-.08,a=14;else if(r==="slide")o.rotX=-1.28,o.lift=.3,o.armLx=-2.9,o.armRx=-2.9,o.armLz=-.2,o.armRz=.2,o.legL=.35+Math.sin(i*30)*.1,o.legR=.35-Math.sin(i*30)*.1,o.headX=.35,a=22;else if(r==="fly")o.rotX=-.35,o.armLz=-1.35+Math.sin(i*7)*.12,o.armRz=1.35-Math.sin(i*7)*.12,o.legL=.55,o.legR=.35,o.headX=-.15,l=Math.sin(i*4)*.08,a=8;else if(r==="crash")o.tiltX=.3,o.lift=-.08,o.legL=1.4,o.legR=1.2,o.armLz=-1.15+Math.sin(i*6)*.1,o.armRz=1.15-Math.sin(i*6)*.1,o.armLx=-.35,o.armRx=-.35,o.headZ=Math.sin(i*4.5)*.14,o.headX=-.12,a=10;else if(r==="happy")o.armLz=-2.5+Math.sin(i*14)*.25,o.armRz=2.5-Math.sin(i*14)*.25,l=Math.abs(Math.sin(i*7))*.35,o.headZ=Math.sin(i*7)*.1,a=18;else{this.waveT-=t;let b=this.waveT<1.4&&this.waveT>0;this.waveT<0&&(this.waveT=3.5+Math.random()*2),o.armRz=b?2.55+Math.sin(i*13)*.35:.32+Math.sin(i*2)*.04,o.armLz=-.32-Math.sin(i*2)*.04,o.headZ=Math.sin(i*1.3)*.07+(b?-.06:0),l=Math.sin(i*2.2)*.015+.015,a=10}for(let b in o)s[b]=co(s[b],o[b],a,t);let c=190,h=13;this.squashV+=(-c*this.squash-h*this.squashV)*t,this.squash+=this.squashV*t;let d=zi.clamp(this.squash,-.4,.4);this.legs[0].rotation.x=s.legL,this.legs[1].rotation.x=s.legR,this.arms[0].rotation.set(s.armLx,0,s.armLz),this.arms[1].rotation.set(s.armRx,0,s.armRz),this.head.rotation.set(s.headX,0,s.headZ),this.body.rotation.x=s.rotX+s.tiltX,this.body.position.y=.03+s.lift+l,this.body.scale.set(1-d*.45,1+d,1-d*.45),this.tail.rotation.z=Math.sin(i*6)*.35,this.root.rotation.z=co(this.root.rotation.z,-(e.vx||0)*.028,12,t);let f=(e.facing||0)+(e.vx||0)*-.018;this.root.rotation.y=co(this.root.rotation.y,f,7,t),this.bow.rotation.z=.42+Math.sin(i*9)*.04+d*.5,this.rainbowBow&&this.mats.bow.color.setHSL(i*.25%1,.9,.58),this.blinkT-=t;let u=1;this.blinkT<.12&&(u=.12),this.blinkT<0&&(this.blinkT=2+Math.random()*3);let m=r==="crash";for(let b of this.eyes)b.scale.y=u,b.visible=!m;this.xEyes.visible=m;let M=Math.max(0,e.height||0);this.shadow.position.y=-M+.03;let g=1/(1+M*.4);this.shadow.scale.set(g,g,g),this.shadow.visible=!e.flying,this.cloudAmt=co(this.cloudAmt,e.flying?1:0,6,t),this.cloud.visible=this.cloudAmt>.02;let p=this.cloudAmt;this.cloud.scale.set(.42*p,.34*p,.5*p),this.cloud.rotation.y=Math.sin(i*2)*.1,this.bubbleAmt=co(this.bubbleAmt,e.shield?1:0,10,t),this.bubble.visible=this.bubbleAmt>.02,this.bubbleMat.uniforms.uTime.value=i,this.bubbleMat.uniforms.uAlpha.value=this.bubbleAmt;let y=1+Math.sin(i*6)*.03;if(this.bubble.scale.set(y*this.bubbleAmt,(2-y)*this.bubbleAmt,y*this.bubbleAmt),this.halo.visible=!!e.magnet,e.magnet){this.halo.position.y=-M+.08;let b=1+Math.sin(i*8)*.08;this.halo.scale.set(b,b,b)}this.dizzy.visible=m,m&&(this.dizzy.children.forEach((b,_)=>{let T=i*4+_/3*Math.PI*2;b.position.set(Math.cos(T)*.5,Math.sin(i*6+_)*.06,Math.sin(T)*.5),b.rotation.set(0,T*2,0)}),this.dizzy.position.set(0,1.72,.32))}};var sn=2.1,Ys=7,qs=5,Yf=.45;function G_(){let n=[];for(let t of[-.86,.86]){for(let e=0;e<4;e++)n.push(lt(new se(.095,.095,.21,12),e%2?"#ff5f9e":"#ffffff",{x:t,y:.105+e*.21}));n.push(lt(new Zt(.14,12,10),"#ff5f9e",{x:t,y:.9}))}for(let t=0;t<8;t++)n.push(lt(new se(.11,.11,.215,12),t%2?"#ff5f9e":"#ffffff",{x:-.7525+t*.215,y:.64,rz:Math.PI/2}));return n.push(lt(new se(.075,.075,1.72,10),"#8fd3ff",{y:.3,rz:Math.PI/2})),n.push(lo("#e8112d",{s:.42,y:.66,z:.12})),we(n)}function k_(){let n=[];for(let e of[-.92,.92]){for(let i=0;i<8;i++)n.push(lt(new se(.1,.1,.31,12),i%2?"#6fdcc0":"#ffffff",{x:e,y:.155+i*.31}));n.push(lt(new Zt(.16,12,10),"#ffd23f",{x:e,y:2.56}))}n.push(lt(new Yt(1.94,.78,.1),"#ffffff",{y:1.56})),n.push(lt(new Yt(1.8,.64,.14),"#ff6fae",{y:1.56})),n.push(lt(nn(.46,.2),"#ffffff",{y:1.57,z:.12})),n.push(lt(new se(.05,.05,1.84,8),"#ffffff",{y:2.42,rz:Math.PI/2}));let t=["#ffd23f","#8fd3ff","#ffffff","#b58cff","#ffd23f","#8fd3ff"];for(let e=0;e<6;e++){let i=-.75+e*.3;n.push(lt(new wi(.14,.3,3),t[e],{x:i,y:1.08,rx:Math.PI,ry:Math.PI/6}))}return we(n)}function V_(){let n=[];return n.push(lt(new Yt(1.8,1.35,1.6),"#ff9ec8",{y:.675})),n.push(lt(new Yt(.3,1.37,1.62),"#ffffff",{y:.675})),n.push(lt(new Yt(1.82,1.37,.3),"#ffffff",{y:.675})),n.push(lt(new Yt(1.35,1,1.25),"#8fe3c9",{y:1.85,ry:.15})),n.push(lt(new Yt(.26,1.02,1.27),"#ffd23f",{y:1.85,ry:.15})),n.push(lt(new Yt(1.37,1.02,.26),"#ffd23f",{y:1.85,ry:.15})),n.push(lo("#ff4f97",{s:.75,y:2.5,ry:.15})),we(n)}function W_(){let n=[],t=[[.92,.9,0,"#fff4f8"],[.7,.75,.9,"#ffb3d1"],[.48,.62,1.65,"#fff4f8"]];for(let[e,i,s,r]of t){n.push(lt(new se(e,e,i,28),r,{y:s+i/2})),n.push(lt(new ei(e,.07,8,28),r==="#fff4f8"?"#ff8fc0":"#ffffff",{y:s+i,rx:Math.PI/2}));let o=Math.round(e*9);for(let a=0;a<o;a++){let l=a/o*Math.PI*2;n.push(lt(new Zt(.1,8,6),"#ffffff",{x:Math.cos(l)*e,y:s+.08,z:Math.sin(l)*e}))}}for(let[e,i]of[[0,0],[.22,.2],[-.24,.12],[.05,-.25]])n.push(lt(new Zt(.14,12,10),"#ff3355",{x:e,y:2.38,z:i,sy:1.2})),n.push(lt(new wi(.07,.08,6),"#4fc26b",{x:e,y:2.56,z:i}));return we(n)}function X_(){let n=[];for(let s=0;s<14;s++){let r=s/14*Math.PI*2;n.push(lt(new Yt(.34,1,.1),s%2?"#c9a8ff":"#b08cff",{x:Math.cos(r)*.72,y:.5,z:Math.sin(r)*.72,ry:-r+Math.PI/2,rx:0}))}n.push(lt(new se(.72,.62,1,20),"#b08cff",{y:.5}));let e=[[.82,1.15],[.66,1.5],[.48,1.8],[.3,2.05]];for(let[s,r]of e)n.push(lt(new ei(s,.22,10,26),"#ffa8cf",{y:r,rx:Math.PI/2}));n.push(lt(new Zt(.28,14,10),"#ffa8cf",{y:2.2})),n.push(lt(new Zt(.2,14,10),"#ff2a4d",{y:2.52})),n.push(lt(new se(.02,.02,.28,5),"#6b3b2a",{y:2.78,rz:.4}));let i=["#ffd23f","#8fd3ff","#ffffff","#6fdcc0"];for(let s=0;s<18;s++){let r=s*2.4,o=.5+s%3*.12;n.push(lt(new Ti(.025,.08,2,4),i[s%4],{x:Math.cos(r)*o,y:1.3+s%4*.18,z:Math.sin(r)*o,rz:r,rx:r*.7}))}return we(n)}function fh(n,t){let e=[],i=Ys-.3,s=-Ys/2;e.push(lt(new Yt(1.9,1.72,i),n,{y:1.12,z:s})),e.push(lt(new Yt(1.98,.14,i+.06),"#ffffff",{y:2.03,z:s})),e.push(lt(new Yt(1.94,.2,i+.02),t,{y:.66,z:s})),e.push(lt(new Yt(1.7,.2,i-.3),"#ffe6f1",{y:.2,z:s}));for(let r of[-.965,.965]){for(let o=0;o<3;o++)e.push(lt(new Yt(.06,.62,1.2),"#ffffff",{x:r,y:1.42,z:-1.2-o*2.2})),e.push(lt(new Yt(.08,.5,1.06),"#aee4ff",{x:r,y:1.42,z:-1.2-o*2.2}));for(let o of[-.9,-2,-4.7,-5.8])e.push(lt(new se(.26,.26,.14,16),"#5a3d6b",{x:r*.93,y:.26,z:o,rz:Math.PI/2})),e.push(lt(new se(.1,.1,.16,10),"#ffd23f",{x:r*.93,y:.26,z:o,rz:Math.PI/2}))}e.push(lt(new Yt(1.4,.66,.06),"#ffffff",{y:1.5,z:-.12})),e.push(lt(new Yt(1.26,.52,.08),"#aee4ff",{y:1.5,z:-.1})),e.push(lt(nn(.42,.18),"#ff3d7f",{y:.95,z:-.08}));for(let r of[-.62,.62])e.push(lt(new Zt(.13,12,10),new ft(3.2,2.9,1.6),{x:r,y:.95,z:-.12}));return we(e)}function q_(){let n=[],t=new Ki;t.moveTo(0,0),t.lineTo(qs,0),t.lineTo(0,sn),t.closePath();let e=new mn(t,{depth:1.86,bevelEnabled:!1});An(e,{ry:-Math.PI/2,x:.93}),n.push(_l(e,"#ffb0d2"));let i=Math.atan2(sn,qs),s=Math.hypot(sn,qs);for(let r=0;r<5;r++){let o=(r+.5)/5,a=sn*(1-o)+.02,l=qs*o;n.push(lt(new Yt(1.7,.04,.3),"#ffffff",{y:a,z:l,rx:i}))}for(let r of[-.93,.93])n.push(lt(new Yt(.1,.12,s),"#ffffff",{x:r,y:sn/2+.06,z:qs/2,rx:i}));return we(n)}function Y_(){let n=[lt(new Zt(.82,28,20),"#ff8fc0",{})],t=[[0,0,0],[1.1,.3,0],[.5,1.2,.4],[2.1,.7,1.1],[.9,2.3,.2],[1.6,1.6,2.2]];for(let[i,s,r]of t)n.push(lt(new ei(.815,.035,6,48),"#ff6fae",{rx:i,ry:s,rz:r}));let e=new As([new P(.3,-.6,.6),new P(.6,-.8,1),new P(.2,-.82,1.5),new P(.6,-.82,2)]);return n.push(lt(new Ir(e,20,.04,6,!1),"#ff6fae",{})),we(n)}function Z_(){let n=[lt(ah(.42),"#ff2a3d",{})];return n.push(lt(new se(.025,.03,.2,6),"#7a4a2a",{y:.38,rz:-.2})),n.push(lt(new Zt(.5,12,8),"#48c46c",{x:.1,y:.42,sx:.28,sy:.05,sz:.14,rz:.4,ry:.4})),we(n)}function J_(){let n=[lt(new ei(.3,.11,10,24,Math.PI),"#ff3d6e",{rz:Math.PI})];for(let t of[-.3,.3])n.push(lt(new se(.11,.11,.24,14),"#ff3d6e",{x:t,y:.12})),n.push(lt(new se(.112,.112,.14,14),"#f4f4ff",{x:t,y:.3}));return An(we(n),{y:.05})}function $_(){return new ae({uniforms:{uTime:{value:0},...mi},vertexShader:`
      ${tn}
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        ${en}
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform float uTime;
      varying vec3 vN;
      varying vec3 vV;
      vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
      void main() {
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 2.2);
        vec3 col = mix(vec3(1.0), hue(f * 1.3 + uTime * 0.2), 0.55);
        float glint = pow(max(dot(normalize(vN), normalize(vec3(-0.5, 0.6, 0.6))), 0.0), 30.0);
        float a = clamp(rim * 0.95 + glint + 0.05, 0.0, 1.0);
        gl_FragColor = vec4(col + glint * 0.6, a);
      }`,transparent:!0,depthWrite:!1,blending:fi})}var Zf={barrier:{hw:.95,minY:0,maxY:.85,hd:.22},gate:{hw:.95,minY:.98,maxY:2.5,hd:.2},block:{hw:.9,minY:0,maxY:2.6,hd:.8},yarn:{hw:.78,minY:0,maxY:1.6,hd:.75}},Tl=class{constructor(t,e){this.scene=t,this.game=e,this.group=new Te,t.add(this.group);let i=(r={})=>De(16777215,{vertexColors:!0,...r}),s=(r={})=>Je(16777215,{vertexColors:!0,...r});this.models={barrier:{geo:G_(),mat:i()},gate:{geo:k_(),mat:i()},gift:{geo:V_(),mat:i()},cake:{geo:W_(),mat:i()},cupcake:{geo:X_(),mat:i()},carPink:{geo:fh("#ff8fc0","#ffffff"),mat:i()},carMint:{geo:fh("#6fd6b8","#ff8fc0"),mat:i()},carLilac:{geo:fh("#b39cff","#ffd23f"),mat:i()},ramp:{geo:q_(),mat:i()},yarn:{geo:Y_(),mat:i()}},this.pools={},this.obstacles=[],this.heartGeo=nn(.62,.16),this.heartMesh=new Ei(this.heartGeo,Je(16732058,{emissive:16723846,emissiveIntensity:.5,roughness:.28,envMapIntensity:.7}),220),this.heartMesh.frustumCulled=!1,this.heartMesh.count=0,this.group.add(this.heartMesh),this.appleMesh=new Ei(Z_(),Je(16777215,{vertexColors:!0,roughness:.38,envMapIntensity:.35,emissive:3803152,emissiveIntensity:.2}),24),this.appleMesh.frustumCulled=!1,this.appleMesh.count=0,this.group.add(this.appleMesh),this.items=[],this.bubbleMat=$_(),this.bubbleGeo=new Zt(.62,28,18),this.icons={magnet:{geo:J_(),mat:Je(16777215,{vertexColors:!0,envMapIntensity:.6,emissive:5574946,emissiveIntensity:.4})},rush:{geo:ao(.85),mat:Je(16767050,{envMapIntensity:.6,emissive:16752640,emissiveIntensity:.55})},shield:{geo:nn(.6,.2),mat:Je(7329535,{envMapIntensity:.6,emissive:1740031,emissiveIntensity:.55})},double:{geo:ah(.36),mat:Je(16763196,{metalness:.4,roughness:.3,envMapIntensity:.7,emissive:12614144,emissiveIntensity:.45})}},this.powers=[],this.powerPool=[],this._m=new ne,this._q=new ke,this._e=new Ye,this._v=new P,this._s=new P,this.reset(0)}getMesh(t){var s;let i=((s=this.pools)[t]||(s[t]=[])).pop();if(!i){let r=this.models[t];i=new Gt(r.geo,r.mat),i.frustumCulled=!1,this.group.add(i)}return i.visible=!0,i.rotation.set(0,0,0),i.scale.set(1,1,1),i}release(t){var e,i;for(let s of t.meshes)s.visible=!1,((e=this.pools)[i=s.userData.kind]||(e[i]=[])).push(s);t.meshes.length=0}reset(t,e=t){this.origin=e;for(let i of this.obstacles)this.release(i);this.obstacles=[],this.items=[];for(let i of this.powers)i.group.visible=!1,this.powerPool.push(i);this.powers=[],this.nextS=t+48,this.lastPowerS=t,this.rushing=!1,this.tutorial=null}laneX(t){return t*2.1}addObstacle(t,e,i,s={}){let r={type:t,lane:e,x:this.laneX(e),meshes:[],dead:!1,ignoreUntil:0,...s},o=(a,l=0)=>{let c=this.getMesh(a);return c.userData.kind=a,c.userData.zOff=l,r.meshes.push(c),c};if(t==="barrier"||t==="gate"||t==="yarn"){let a=Zf[t];Object.assign(r,{hw:a.hw,minY:a.minY,maxY:a.maxY,sa:i-a.hd,sb:i+a.hd,s:i}),o(t),t==="yarn"&&(r.move=s.move??9)}else if(t==="block"){let a=Zf.block;Object.assign(r,{hw:a.hw,minY:a.minY,maxY:a.maxY,sa:i-a.hd,sb:i+a.hd,s:i});let l=["gift","cake","cupcake"],c=o(s.kind||l[Math.floor(Math.random()*l.length)]);c.rotation.y=(Math.random()-.5)*.4}else if(t==="train"){let a=s.cars||2,l=a*Ys;Object.assign(r,{hw:.95,platform:!0,top:sn,sa:i,sb:i+l,s:i});let c=["carPink","carMint","carLilac"],h=Math.floor(Math.random()*3);for(let d=0;d<a;d++)o(c[(h+d)%3],d*Ys)}else t==="ramp"&&(Object.assign(r,{hw:.95,platform:!0,ramp:!0,top:sn,sa:i-qs,sb:i,s:i}),o("ramp"));return this.obstacles.push(r),r}addItem(t,e,i,s=.9){this.items.push({kind:t,x:this.laneX(e),s:i,y:s,alive:!0,magnet:!1,phase:Math.random()*6})}addLine(t,e,i,s=2.2,r=.9){for(let o=0;o<i;o++)this.addItem("heart",t,e+o*s,r)}addArc(t,e,i,s=!1){let r=2*15.2/50,o=i*r,a=7;for(let l=0;l<a;l++){let c=l/(a-1),h=c*r,d=.9+15.2*h-.5*50*h*h,f=s&&l===3?"apple":"heart";this.addItem(f,t,e-o/2+c*o,d)}}addPower(t,e,i,s=1.1){let r=this.powerPool.pop();if(!r){let a=new Te,l=new Gt(this.bubbleGeo,this.bubbleMat);l.renderOrder=3;let c=new Gt;a.add(c),a.add(l),this.group.add(a),r={group:a,icon:c}}let o=this.icons[t];r.icon.geometry=o.geo,r.icon.material=o.mat,r.group.visible=!0,Object.assign(r,{kind:t,x:this.laneX(e),s:i,y:s,alive:!0}),this.powers.push(r)}pickPower(){let t=Math.random();return t<.3?"magnet":t<.55?"rush":t<.78?"shield":"double"}laneClear(t,e,i){for(let s of this.obstacles)if(s.lane===t&&s.sb>e&&s.sa<i)return!1;return!0}spawnPattern(t,e,i){let s=e-this.origin,r=[-1,0,1],o=p=>{for(let y=p.length-1;y>0;y--){let b=Math.floor(Math.random()*(y+1));[p[y],p[b]]=[p[b],p[y]]}return p},a=p=>p[Math.floor(Math.random()*p.length)],l=Math.min(1,s/2600),c=o([...r]),h=null;t-this.lastPowerS>260+Math.random()*180&&(h=c[2]);let d=[["single",3-l*1.5],["double",1+l*2],["wallJump",.8],["wallSlide",s>150?.8:0],["mixed",s>400?1+l:0],["train",s>200?1.4+l:0],["doubleTrain",s>700?.8+l:0],["yarn",s>500?.9+l*.6:0],["zigzag",s>900?.8+l:0],["breather",.6]],f=d.reduce((p,y)=>p+y[1],0),u=Math.random()*f,m="single";for(let[p,y]of d)if((u-=y)<=0){m=p;break}let M=1,g=s>150?["barrier","gate","block"]:["barrier","block"];switch(m){case"single":{let p=a(g);this.addObstacle(p,c[0],t),p==="barrier"?this.addArc(c[0],t,i,Math.random()<.3):this.addLine(c[1],t-6,6);break}case"double":{this.addObstacle(a(g),c[0],t),this.addObstacle(a(g),c[1],t),h===null&&this.addLine(c[2],t-7,6);break}case"wallJump":{for(let p of r)this.addObstacle("barrier",p,t);this.addArc(c[0],t,i,Math.random()<.5),h=null;break}case"wallSlide":{for(let p of r)this.addObstacle("gate",p,t);this.addLine(c[0],t-3,4,2,.55),h=null;break}case"mixed":{let p=Math.random()<.5?"barrier":"gate";this.addObstacle("block",c[0],t),this.addObstacle(p,c[1],t),this.addObstacle(Math.random()<.35?"block":p==="barrier"?"gate":"barrier",c[2],t),p==="barrier"&&this.addArc(c[1],t,i),h=null;break}case"train":{let p=1+Math.floor(Math.random()*3),y=Math.random()<.75,b=c[0];y&&this.addObstacle("ramp",b,t),this.addObstacle("train",b,t,{cars:p}),M=p*Ys,y?this.addLine(b,t+1,Math.floor(M/2.2),2.2,sn+.9):this.addLine(c[1],t-4,7),Math.random()<.5&&M>7&&this.addObstacle(Math.random()<.5?"barrier":"gate",c[2],t+M/2);break}case"doubleTrain":{let p=2+Math.floor(Math.random()*2);M=p*Ys,this.addObstacle("ramp",c[0],t),this.addObstacle("train",c[0],t,{cars:p}),this.addObstacle("train",c[1],t+2,{cars:p}),this.addLine(c[0],t+1,Math.floor(M/2.2),2.2,sn+.9),Math.random()<.6&&this.addObstacle(Math.random()<.5?"barrier":"gate",c[2],t+M*.4),h=null;break}case"yarn":{let p=c.find(b=>this.laneClear(b,t-26,t+2));if(p===void 0){this.addObstacle("block",c[0],t),this.addLine(c[1],t-6,6);break}let y=c.filter(b=>b!==p);this.addObstacle("yarn",p,t,{move:8+l*5}),this.addLine(y[0],t-8,6),Math.random()<.5&&this.addObstacle("barrier",y[1],t+6),h=null;break}case"zigzag":{let p=Math.random()<.5?[-1,0,1]:[1,0,-1],y=Math.max(10,i*.55);p.forEach((b,_)=>this.addObstacle("block",b,t+_*y)),p.forEach((b,_)=>{let T=r.filter(E=>E!==b);this.addItem("heart",T[_%2],t+_*y)}),M=y*2,h=null;break}case"breather":{let p=c[0];for(let y=0;y<10;y++)y%4===3&&(p=Math.max(-1,Math.min(1,p+(Math.random()<.5?-1:1)))),this.addItem(y===5&&Math.random()<.5?"apple":"heart",p,t+y*2.2);M=22;break}}return h!==null&&(this.addPower(this.pickPower(),h,t),this.lastPowerS=t),M}spawnTutorial(t){this.tutorial=[{s:t+55,type:"barrier",hint:"jump"},{s:t+100,type:"gate",hint:"slide"},{s:t+145,type:"block",hint:"side"}];for(let e of this.tutorial)this.addObstacle(e.type,0,e.s);this.addLine(0,t+20,8),this.addArc(0,t+55,16),this.addLine(-1,t+125,6),this.addLine(1,t+150,6),this.nextS=t+185}beginRush(t,e=0){this.rushing=!0,this.rushLane=e,this.nextS=t+45,this.obstacles=this.obstacles.filter(i=>i.sa>t+45?(this.release(i),!1):!0),this.items=this.items.filter(i=>i.s<t+45)}endRush(t){this.rushing=!1,this.items=this.items.filter(e=>!(e.y>4&&e.s>t)),this.nextS=t+60}update(t,e,i,s){for(;this.nextS<e+150;)if(this.rushing){this.addLine(this.rushLane,this.nextS,6,2.4,5.4),this.nextS+=14.4;let f=Math.random()<.5?-1:1;this.rushLane=Math.max(-1,Math.min(1,this.rushLane+(this.rushLane===0?f:-this.rushLane)))}else{let f=this.spawnPattern(this.nextS,e,i),u=Math.max(i*.72,26-Math.min(1,(e-this.origin)/3e3)*12);this.nextS+=f+u}for(let f=this.obstacles.length-1;f>=0;f--){let u=this.obstacles[f];if(u.rolling=!!u.move&&u.s-e<40,u.rolling&&(u.s-=u.move*t,u.sa-=u.move*t,u.sb-=u.move*t),e-u.sb>14||u.remove){this.release(u),this.obstacles.splice(f,1);continue}for(let m of u.meshes){let M=u.type==="ramp"||u.type==="train"?u.sa:u.s;m.position.set(u.x,0,e-M-(m.userData.zOff||0)),u.type==="ramp"&&(m.position.z=e-u.sb),u.type==="yarn"&&(m.position.y=.82,u.rolling&&(m.rotation.x+=(i+u.move)/.82*t)),u.dead&&(m.scale.multiplyScalar(Math.max(0,1-t*10)),m.scale.x<.05&&(u.remove=!0))}}let{_m:r,_q:o,_e:a,_v:l,_s:c}=this,h=0,d=0;for(let f=this.items.length-1;f>=0;f--){let u=this.items[f],m=e-u.s;if(!u.alive||m>14){this.items.splice(f,1);continue}if(m<-160)continue;let M=Math.sin(s*3+u.phase)*.12;if(a.set(0,s*2.6+u.phase,0),o.setFromEuler(a),l.set(u.x,u.y+M,m),u.kind==="heart"&&h<220){let g=1+Math.sin(s*6+u.phase)*.06;c.set(g,g,g),r.compose(l,o,c),this.heartMesh.setMatrixAt(h++,r)}else u.kind==="apple"&&d<24&&(c.set(1.15,1.15,1.15),r.compose(l,o,c),this.appleMesh.setMatrixAt(d++,r))}this.heartMesh.count=h,this.appleMesh.count=d,this.heartMesh.instanceMatrix.needsUpdate=!0,this.appleMesh.instanceMatrix.needsUpdate=!0,this.bubbleMat.uniforms.uTime.value=s;for(let f=this.powers.length-1;f>=0;f--){let u=this.powers[f],m=e-u.s;if(!u.alive||m>14){u.group.visible=!1,this.powerPool.push(u),this.powers.splice(f,1);continue}u.group.position.set(u.x,u.y+Math.sin(s*2.5+u.s)*.15,m),u.icon.rotation.set(0,s*2.2,Math.sin(s*3)*.15)}}collide(t){let e=0,i=null,s=!1,r=t.x-.32,o=t.x+.32,a=Math.min(t.prevDist,t.dist)-.3,l=t.dist+.3,c=[];for(let u of this.obstacles)u.dead||t.time<u.ignoreUntil||u.sb<a||u.sa>l||o<u.x-u.hw||r>u.x+u.hw||c.push(u);if(!c.length)return{ground:e,hit:i,side:s};let h=(u,m)=>u.ramp?u.top*zi.clamp((m-u.sa)/(u.sb-u.sa),0,1):u.top,d=Math.max(t.y,t.y0??t.y),f=u=>{if(i)return;i=u;let m=!(t.prevX+.32<u.x-u.hw||t.prevX-.32>u.x+u.hw),M=u.rolling?u.move*t.dt:0;s=!(u.sb+M<t.prevDist-.3||u.sa+M>t.prevDist+.3)&&!m};for(let u of c)if(u.ramp)if(d>=h(u,t.prevDist)-Yf){let m=h(u,t.dist);e=Math.max(e,m),d=Math.max(d,m)}else f(u);for(let u of c)u.ramp||(u.platform?d>=u.top-Yf?e=Math.max(e,u.top):f(u):t.y<u.maxY&&t.y+t.h>u.minY&&f(u));return{ground:e,hit:i,side:s}}collect(t,e,i,s,r){let o=t.y+(t.sliding?.35:.75),a=Math.min(t.prevDist,t.dist)-.95,l=t.dist+.95;for(let c of this.items){if(!c.alive)continue;let h=c.s-t.dist;if(e&&h<16&&h>-1&&(c.magnet=!0),c.magnet){let d=Math.min(1,i*11);c.x+=(t.x-c.x)*d,c.y+=(o-c.y)*d,c.s+=(t.dist-c.s)*d*.9}c.s>a&&c.s<l&&Math.abs(c.x-t.x)<.95&&Math.abs(c.y-o)<1.05&&(c.alive=!1,s(c))}for(let c of this.powers)c.alive&&c.s>a-.15&&c.s<l+.15&&Math.abs(c.x-t.x)<1.1&&Math.abs(c.y-o)<1.4&&(c.alive=!1,r(c))}nextInLane(t,e){let i=null;for(let s of this.obstacles)s.lane!==t||s.sa<e||(!i||s.sa<i.sa)&&(i=s);return i}};var Ue={GLOW:0,STAR:1,HEART:2,SPARKLE:3,CONFETTI:4,RING:5,PETAL:6,PUFF:7},K_=`
${tn}
uniform float uScale;
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
attribute float aSprite;
attribute float aRot;
varying vec3 vColor;
varying float vAlpha;
varying float vSprite;
varying float vRot;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  ${en}
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = aSize * uScale / max(-mvPosition.z, 0.2);
  vColor = aColor;
  vAlpha = aAlpha;
  vSprite = aSprite;
  vRot = aRot;
}`,Q_=`
uniform sampler2D uAtlas;
varying vec3 vColor;
varying float vAlpha;
varying float vSprite;
varying float vRot;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  p = mat2(c, -s, s, c) * p * 1.08;
  p += 0.5;
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) discard;
  float col = mod(vSprite, 4.0);
  float row = floor(vSprite / 4.0);
  vec2 uv = vec2((col + p.x) / 4.0, 1.0 - (row + p.y) / 2.0);
  vec4 t = texture2D(uAtlas, uv);
  float a = t.a * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * t.rgb, a);
}`,wl=class{constructor(t,e,i){this.max=t,this.count=0;let s=new me;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.sprite=new Float32Array(t),this.rot=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size0=new Float32Array(t),this.size1=new Float32Array(t),this.spin=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.world=new Uint8Array(t),this.a0=new Float32Array(t),this.twinkle=new Float32Array(t);let r=(o,a)=>{let l=new xe(o,a);return l.setUsage(io),l};s.setAttribute("position",r(this.pos,3)),s.setAttribute("aColor",r(this.col,3)),s.setAttribute("aSize",r(this.size,1)),s.setAttribute("aAlpha",r(this.alpha,1)),s.setAttribute("aSprite",r(this.sprite,1)),s.setAttribute("aRot",r(this.rot,1)),s.setDrawRange(0,0),this.geo=s,this.uniforms={uAtlas:{value:e},uScale:{value:500},...mi},this.mat=new ae({uniforms:this.uniforms,vertexShader:K_,fragmentShader:Q_,transparent:!0,depthWrite:!1,blending:i}),this.points=new Gn(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5}emit(t){let e=this.count;e>=this.max?e=Math.floor(Math.random()*this.max):this.count++;let i=t.color||[1,1,1];this.pos[e*3]=t.x,this.pos[e*3+1]=t.y,this.pos[e*3+2]=t.z,this.vel[e*3]=t.vx||0,this.vel[e*3+1]=t.vy||0,this.vel[e*3+2]=t.vz||0,this.col[e*3]=i[0],this.col[e*3+1]=i[1],this.col[e*3+2]=i[2],this.life[e]=0,this.maxLife[e]=t.life||1,this.size0[e]=t.size??.3,this.size1[e]=t.sizeEnd??this.size0[e],this.size[e]=this.size0[e],this.sprite[e]=t.sprite||0,this.rot[e]=t.rot??Math.random()*6.28,this.spin[e]=t.spin||0,this.grav[e]=t.gravity||0,this.drag[e]=t.drag||0,this.world[e]=t.world===!1?0:1,this.a0[e]=t.alpha??1,this.alpha[e]=this.a0[e],this.twinkle[e]=t.twinkle||0}kill(t){let e=--this.count;if(t===e)return;let i=s=>{s[t*3]=s[e*3],s[t*3+1]=s[e*3+1],s[t*3+2]=s[e*3+2]};i(this.pos),i(this.vel),i(this.col);for(let s of[this.size,this.alpha,this.sprite,this.rot,this.life,this.maxLife,this.size0,this.size1,this.spin,this.grav,this.drag,this.world,this.a0,this.twinkle])s[t]=s[e]}update(t,e,i){for(let o=0;o<this.count;o++){this.life[o]+=t;let a=this.maxLife[o];if(this.life[o]>=a){this.kill(o),o--;continue}let l=this.life[o]/a,c=Math.max(0,1-this.drag[o]*t);this.vel[o*3]*=c,this.vel[o*3+1]=this.vel[o*3+1]*c-this.grav[o]*t,this.vel[o*3+2]*=c,this.pos[o*3]+=this.vel[o*3]*t,this.pos[o*3+1]+=this.vel[o*3+1]*t,this.pos[o*3+2]+=this.vel[o*3+2]*t+(this.world[o]?e:0),this.rot[o]+=this.spin[o]*t,this.size[o]=this.size0[o]+(this.size1[o]-this.size0[o])*l;let h=this.a0[o]*Math.min(1,l*8)*(l>.6?1-(l-.6)/.4:1);this.twinkle[o]&&(h*=.55+.45*Math.sin(i*this.twinkle[o]+o)),this.alpha[o]=h}let s=this.count;this.geo.setDrawRange(0,s);let r=this.geo.attributes;for(let o of["position","aColor","aSize","aAlpha","aSprite","aRot"]){let a=r[o];a.clearUpdateRanges(),a.addUpdateRange(0,Math.max(1,s)*a.itemSize),a.needsUpdate=!0}}},Al=class{constructor(t,e){this.add=new wl(900,e,Ri),this.norm=new wl(700,e,fi),this.norm.points.renderOrder=4,t.add(this.norm.points),t.add(this.add.points),this.scale=1,this.time=0}setScale(t){this.add.uniforms.uScale.value=t,this.norm.uniforms.uScale.value=t}update(t,e){this.time+=t,this.add.update(t,e,this.time),this.norm.update(t,e,this.time)}burst(t,e,i,{count:s=14,color:r=[1,.5,.8],speed:o=4,size:a=.35,sprite:l=Ue.SPARKLE,life:c=.7,additive:h=!0,gravity:d=0,spread:f=1,up:u=0}={}){let m=h?this.add:this.norm;for(let M=0;M<s;M++){let g=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),y=o*(.4+Math.random()*.6);m.emit({x:t,y:e,z:i,vx:Math.sin(p)*Math.cos(g)*y*f,vy:Math.cos(p)*y+u,vz:Math.sin(p)*Math.sin(g)*y*f,color:Array.isArray(r[0])?r[M%r.length]:r,size:a*(.6+Math.random()*.8),sizeEnd:a*.2,sprite:Array.isArray(l)?l[M%l.length]:l,life:c*(.6+Math.random()*.6),spin:(Math.random()-.5)*8,drag:3,gravity:d})}}ring(t,e,i,s=[1,.6,.85],r=2.2,o=.45){this.add.emit({x:t,y:e,z:i,color:s,size:.3,sizeEnd:r,sprite:Ue.RING,life:o,rot:0})}heartPop(t,e,i,s){let r=[1.6,.45,.9],o=[1.7,1.25,.35];this.burst(t,e,i,{count:9,color:s?[o,[1.4,1.4,1.4]]:[r,[1.4,1.2,1.4]],speed:3.2,size:.32,sprite:Ue.SPARKLE,life:.5}),this.norm.emit({x:t,y:e,z:i,vy:1.8,color:s?[1,.82,.3]:[1,.42,.7],size:.45,sizeEnd:.1,sprite:Ue.HEART,life:.55,rot:0}),this.ring(t,e,i,s?[1.4,1.1,.4]:[1.2,.5,.9],1.4,.3)}bigPop(t,e,i,s){this.burst(t,e,i,{count:26,color:s,speed:6,size:.5,sprite:[Ue.SPARKLE,Ue.STAR,Ue.GLOW],life:.9}),this.burst(t,e,i,{count:10,color:s.map(r=>r.map(o=>Math.min(1,o*.7))),speed:4,size:.4,sprite:Ue.HEART,life:1,additive:!1,gravity:3}),this.ring(t,e,i,s[0],3.2,.5),this.ring(t,e,i,[1.5,1.5,1.5],2.2,.35)}dust(t,e,i,s=6,r=[1,.86,.93]){for(let o=0;o<s;o++)this.norm.emit({x:t+(Math.random()-.5)*.6,y:e+.08,z:i+(Math.random()-.2)*.4,vx:(Math.random()-.5)*2.2,vy:.6+Math.random()*1.2,vz:1+Math.random()*2,color:r,size:.45,sizeEnd:.9,sprite:Ue.PUFF,life:.45+Math.random()*.2,drag:3,alpha:.75})}trailSparkle(t,e,i,s){this.add.emit({x:t+(Math.random()-.5)*.5,y:e+Math.random()*.3,z:i+.2,vx:(Math.random()-.5)*.5,vy:Math.random()*.8,vz:0,color:s,size:.18+Math.random()*.12,sizeEnd:.02,sprite:Ue.SPARKLE,life:.55,spin:3})}crash(t,e,i){this.burst(t,e,i,{count:18,color:[[1.6,1.4,.4],[1.5,1.5,1.5]],speed:6,size:.5,sprite:Ue.STAR,life:.9}),this.dust(t,e,i,12,[1,.9,.95])}poof(t,e,i){for(let s=0;s<14;s++)this.norm.emit({x:t+(Math.random()-.5)*1.4,y:e+Math.random()*1.6,z:i+(Math.random()-.5)*.8,vx:(Math.random()-.5)*3,vy:Math.random()*2,vz:(Math.random()-.5)*3,color:[1,.92,.97],size:.8,sizeEnd:1.6,sprite:Ue.PUFF,life:.6,drag:2.5,alpha:.9});this.burst(t,e+.8,i,{count:12,color:[[1.4,1.2,1.5]],speed:5,size:.4,sprite:Ue.SPARKLE,life:.6})}confetti(t,e=70){let i=[[1,.35,.6],[1,.85,.3],[.45,.85,1],[.55,.95,.7],[.8,.6,1],[1,1,1]],s=new P;t.getWorldDirection(s);for(let r=0;r<e;r++){let o=4+Math.random()*3,a=t.position.x+s.x*o+(Math.random()-.5)*5,l=t.position.y+s.y*o+2.5+Math.random()*2,c=t.position.z+s.z*o+(Math.random()-.5)*2;this.norm.emit({x:a,y:l,z:c,vx:(Math.random()-.5)*2,vy:-Math.random()*1.5,vz:Math.random()-.5,color:i[r%i.length],size:.22,sprite:r%3===0?Ue.HEART:Ue.CONFETTI,life:2.2+Math.random(),spin:(Math.random()-.5)*10,gravity:2.2,drag:1.2,world:!1})}}};var Rl=class{constructor(t,e=48){this.n=e,this.pts=[];for(let l=0;l<e;l++)this.pts.push(new P(0,0,l*.5));let i=new Float32Array(e*2*3),s=new Float32Array(e*2*2),r=[];for(let l=0;l<e;l++)if(s[l*4]=l/(e-1),s[l*4+1]=0,s[l*4+2]=l/(e-1),s[l*4+3]=1,l<e-1){let c=l*2,h=c+1,d=c+2,f=c+3;r.push(c,d,h,h,d,f)}let o=new me;this.posAttr=new xe(i,3),this.posAttr.setUsage(io),o.setAttribute("position",this.posAttr),o.setAttribute("uv",new xe(s,2)),o.setIndex(r),this.uniforms={uAlpha:{value:0},uTime:{value:0},...mi};let a=new ae({uniforms:this.uniforms,vertexShader:`
        ${tn}
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          ${en}
          gl_Position = projectionMatrix * mvPosition;
        }`,fragmentShader:`
        uniform float uAlpha;
        uniform float uTime;
        varying vec2 vUv;
        vec3 band(float v) {
          vec3 c[6];
          c[0] = vec3(1.0, 0.35, 0.5);
          c[1] = vec3(1.0, 0.62, 0.3);
          c[2] = vec3(1.0, 0.93, 0.4);
          c[3] = vec3(0.45, 0.95, 0.6);
          c[4] = vec3(0.4, 0.75, 1.0);
          c[5] = vec3(0.72, 0.5, 1.0);
          float f = clamp(v, 0.0, 0.999) * 6.0;
          int i = int(floor(f));
          vec3 col = c[0];
          for (int k = 0; k < 6; k++) { if (k == i) col = c[k]; }
          return col;
        }
        void main() {
          float edge = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
          float fade = pow(1.0 - vUv.x, 2.0) * smoothstep(0.0, 0.05, vUv.x);
          float shimmer = 0.9 + 0.1 * sin(vUv.x * 40.0 - uTime * 18.0);
          vec3 col = band(vUv.y) * shimmer;
          gl_FragColor = vec4(col, edge * fade * uAlpha * 0.85);
        }`,transparent:!0,depthWrite:!1,blending:fi,side:ii});this.mesh=new Gt(o,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,t.add(this.mesh),this.alpha=0,this.width=.95}reset(t,e){for(let i=0;i<this.n;i++)this.pts[i].set(t,e,i*.5)}update(t,e,i,s,r){if(this.alpha+=((s?1:0)-this.alpha)*Math.min(1,t*(s?5:2.5)),this.uniforms.uAlpha.value=this.alpha,this.uniforms.uTime.value=r,this.mesh.visible=this.alpha>.01,!this.mesh.visible)return;for(let l=this.n-1;l>0;l--)this.pts[l].copy(this.pts[l-1]),this.pts[l].z+=i;this.pts[0].copy(e);for(let l=1;l<this.n;l++){let c=this.pts[l],h=this.pts[l-1];c.z<h.z+.05&&(c.z=h.z+.05)}let o=this.posAttr.array,a=this.width/2;for(let l=0;l<this.n;l++){let c=this.pts[l];o[l*6]=c.x-a,o[l*6+1]=c.y,o[l*6+2]=c.z,o[l*6+3]=c.x+a,o[l*6+4]=c.y,o[l*6+5]=c.z}this.posAttr.needsUpdate=!0}};var Zs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var li=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},j_=new yn(-1,1,1,-1,0,1),ph=class extends me{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},tv=new ph,Pn=class{constructor(t){this._mesh=new Gt(tv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,j_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Js=class extends li{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ji.clone(t.uniforms),this.material=new ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Pn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var uo=class extends li{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cl=class extends li{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Pl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new st);this._width=i.width,this._height=i.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ve}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Js(Zs),this.copyPass.material.blending=ui,this.timer=new Hr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uo!==void 0&&(o instanceof uo?i=!0:o instanceof Cl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Il=class extends li{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ft}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Jf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var $s=class n extends li{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,o,{type:Ve,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Le(r,o,{type:Ve,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Le(r,o,{type:Ve,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Jf;this.highPassUniforms=ji.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ji.clone(Zs.uniforms),this.blendMaterial=new ae({uniforms:this.copyUniforms,vertexShader:Zs.vertexShader,fragmentShader:Zs.fragmentShader,premultipliedAlpha:!0,blending:Ri,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ft,this._oldClearAlpha=1,this._basic=new Oi,this._fsQuad=new Pn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ae({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};$s.BlurDirectionX=new st(1,0);$s.BlurDirectionY=new st(0,1);var fo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ll=class extends li{constructor(){super(),this.isOutputPass=!0,this.uniforms=ji.clone(fo.uniforms),this.material=new Ps({name:fo.name,uniforms:this.uniforms,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader}),this._fsQuad=new Pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xn?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ev={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.35},uVignetteColor:{value:new ft("#7a1f5c")},uSpeed:{value:0},uAberr:{value:0},uFlash:{value:0},uFlashColor:{value:new ft(1,1,1)},uAspect:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uSpeed, uAberr, uFlash, uAspect;
    uniform vec3 uVignetteColor, uFlashColor;
    varying vec2 vUv;
    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    void main() {
      vec2 c = vUv - 0.5;
      vec3 col;
      if (uAberr > 0.001) {
        vec2 off = c * uAberr * 0.018;
        col.r = texture2D(tDiffuse, vUv + off).r;
        col.g = texture2D(tDiffuse, vUv).g;
        col.b = texture2D(tDiffuse, vUv - off).b;
      } else {
        col = texture2D(tDiffuse, vUv).rgb;
      }
      vec2 q = c * vec2(uAspect, 1.0);
      float r = length(q);
      if (uSpeed > 0.001) {
        float ang = atan(q.y, q.x);
        float bin = floor(ang * 38.0);
        float n = hash(bin * 1.7 + floor(uTime * 14.0));
        float streak = step(0.8, n) * smoothstep(0.3, 0.75, r);
        float along = fract(r * 2.5 - uTime * 4.0 + hash(bin) * 3.0);
        streak *= smoothstep(0.0, 0.25, along) * smoothstep(1.0, 0.55, along);
        col += vec3(1.0, 0.93, 1.0) * streak * uSpeed * 0.55;
      }
      float v = smoothstep(0.35, 1.05, r);
      col = mix(col, col * uVignetteColor * 1.4, v * uVignette);
      col = mix(col, uFlashColor, uFlash);
      gl_FragColor = vec4(col, 1.0);
    }`},Dl=class{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.composer=new Pl(t),this.renderPass=new Il(e,i),this.composer.addPass(this.renderPass),this.bloom=new $s(new st(256,256),.5,.5,1);let s=this.bloom.materialHighPassFilter;s.fragmentShader=s.fragmentShader.replace("float v = luminance( texel.xyz );","float v = max( texel.r, max( texel.g, texel.b ) );"),s.needsUpdate=!0,this.bloom.highPassUniforms.smoothWidth.value=.35,this.composer.addPass(this.bloom),this.final=new Js(ev),this.composer.addPass(this.final),this.composer.addPass(new Ll),this.u=this.final.uniforms,this.bloomScale=1;let r=this.bloom.setSize.bind(this.bloom);this.bloom.setSize=(o,a)=>r(Math.max(64,Math.round(o*this.bloomScale)),Math.max(64,Math.round(a*this.bloomScale)))}setQuality(t){this.level=t,this.bloom.enabled=t!=="low",this.bloomScale=t==="high"?1:.5}setSize(t,e,i){this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.u.uAspect.value=t/e}render(t){this.u.uTime.value+=t,this.composer.render(t)}};var $e=n=>440*Math.pow(2,(n-69)/12),iv=[[53,57,60],[55,59,62],[52,55,59],[57,60,64],[50,53,57],[55,59,62],[48,52,55],[48,52,55]],nv=[41,43,40,45,38,43,36,36],sv=[[[0,76,2],[2,79,2],[4,81,4],[8,79,2],[10,76,2],[12,72,4]],[[0,74,2],[2,76,2],[4,79,3],[7,76,1],[8,74,4],[12,71,4]],[[0,71,2],[2,74,2],[4,76,4],[8,79,2],[10,76,2],[12,74,2],[14,76,2]],[[0,72,6],[6,69,2],[8,72,2],[10,74,2],[12,76,4]],[[0,77,2],[2,76,2],[4,74,2],[6,72,2],[8,74,4],[12,69,4]],[[0,71,2],[2,74,2],[4,79,4],[8,77,2],[10,76,2],[12,74,4]],[[0,76,2],[2,79,2],[4,84,4],[8,83,2],[10,81,2],[12,79,4]],[[0,76,4],[4,72,4],[8,79,6]]],Ul=class{constructor(){this.ctx=null,this.sfxOn=!0,this.musicOn=!0,this.mode="title",this.step=0,this.nextTime=0,this.bpm=128,this.combo=0,this.lastHeart=0,this.timer=null}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?.32:0,this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxOn?.7:0,this.sfxBus.connect(this.master),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(1.6),this.verbGain=e.createGain(),this.verbGain.gain.value=.28,this.verb.connect(this.verbGain).connect(this.master),this.noiseBuf=this.makeNoise(),this.nextTime=e.currentTime+.1,this.timer=setInterval(()=>this.schedule(),30)}this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.ctx&&this.ctx.state!=="running"&&(this.ctx.resume().catch(()=>{}),this.nextTime=Math.max(this.nextTime,this.ctx.currentTime+.05))}setSfx(t){this.sfxOn=t,this.sfxBus&&(this.sfxBus.gain.value=t?.7:0)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.32:0,this.ctx.currentTime,.05)}setMode(t){this.mode=t}impulse(t){let e=this.ctx,i=Math.floor(e.sampleRate*t),s=e.createBuffer(2,i,e.sampleRate);for(let r=0;r<2;r++){let o=s.getChannelData(r);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/i,3)}return s}makeNoise(){let t=this.ctx,e=t.createBuffer(1,t.sampleRate,t.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return e}tone(t,e,i,{type:s="sine",gain:r=.2,attack:o=.005,bus:a,verb:l=0,slideTo:c,filter:h}={}){let d=this.ctx,f=d.createOscillator();f.type=s,f.frequency.setValueAtTime(e,t),c&&f.frequency.exponentialRampToValueAtTime(c,t+i);let u=d.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(r,t+o),u.gain.exponentialRampToValueAtTime(1e-4,t+i);let m=f;if(h){let M=d.createBiquadFilter();M.type="lowpass",M.frequency.value=h,f.connect(M),m=M}if(m.connect(u),u.connect(a||this.sfxBus),l){let M=d.createGain();M.gain.value=l,u.connect(M).connect(this.verb)}f.start(t),f.stop(t+i+.05)}noise(t,e,{gain:i=.2,type:s="bandpass",freq:r=1e3,freqTo:o,q:a=1,bus:l}={}){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let d=c.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),o&&d.frequency.exponentialRampToValueAtTime(o,t+e),d.Q.value=a;let f=c.createGain();f.gain.setValueAtTime(i,t),f.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(f).connect(l||this.sfxBus),h.start(t,Math.random()*.5),h.stop(t+e+.02)}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<this.ctx.currentTime+.14;)this.mode!=="off"&&this.musicOn&&this.playStep(this.step,this.nextTime),this.step=(this.step+1)%128,this.nextTime+=t}playStep(t,e){let i=Math.floor(t/16),s=t%16,r=this.mode==="game",o=this.musicBus,a=iv[i];for(let[l,c,h]of sv[i])if(l===s){let d=h*60/this.bpm/4+.25;this.tone(e,$e(c),d,{type:"triangle",gain:.16,bus:o,verb:.5}),this.tone(e,$e(c+12),.18,{type:"sine",gain:.05,bus:o,verb:.4})}if(s%4===2)for(let l of a)this.tone(e,$e(l+12),.14,{type:"square",gain:r?.035:.022,bus:o,filter:1800});if(s%4===0||r&&s%4===3&&s!==15){let l=nv[i]+(s===8?7:0);this.tone(e,$e(l),.22,{type:"triangle",gain:r?.28:.16,bus:o})}if(!r){s===0&&this.tone(e,$e(a[0]+24),.8,{type:"sine",gain:.03,bus:o,verb:.6});return}(s===0||s===8||s===10)&&this.tone(e,150,.16,{type:"sine",gain:.5,bus:o,slideTo:45}),(s===4||s===12)&&this.noise(e,.16,{gain:.22,type:"bandpass",freq:1800,q:.8,bus:o}),s%2===0&&this.noise(e,.04,{gain:s%4===2?.09:.05,type:"highpass",freq:7e3,bus:o}),s===14&&i%2===1&&this.tone(e,$e(88),.12,{type:"sine",gain:.05,bus:o,verb:.6})}now(){return this.ctx?this.ctx.currentTime:0}ok(){return this.ctx&&this.ctx.state==="running"&&this.sfxOn}heart(t){if(!this.ok())return;let e=this.now();e-this.lastHeart<.5?this.combo=Math.min(this.combo+1,14):this.combo=0,this.lastHeart=e;let s=79+[0,2,4,7,9,12,14,16,19,21,24,26,28,31,33][this.combo];this.tone(e,$e(s),.12,{type:"sine",gain:.16,verb:.3}),this.tone(e+.045,$e(s+7),.16,{type:"sine",gain:.12,verb:.35}),t&&this.tone(e+.09,$e(s+12),.14,{type:"triangle",gain:.08,verb:.4})}apple(){if(!this.ok())return;let t=this.now();[84,88,91,96].forEach((e,i)=>this.tone(t+i*.05,$e(e),.3,{type:"triangle",gain:.13,verb:.5}))}jump(){if(!this.ok())return;let t=this.now();this.tone(t,330,.16,{type:"sine",gain:.22,slideTo:760}),this.tone(t,660,.1,{type:"triangle",gain:.05,slideTo:1300})}land(){this.ok()&&this.tone(this.now(),180,.08,{type:"sine",gain:.18,slideTo:90})}slide(){this.ok()&&this.noise(this.now(),.28,{gain:.2,type:"bandpass",freq:1500,freqTo:350,q:1.2})}lane(){if(!this.ok())return;let t=this.now();this.noise(t,.11,{gain:.1,type:"bandpass",freq:900,freqTo:2400,q:1.5}),this.tone(t,520,.07,{type:"sine",gain:.05,slideTo:700})}bump(){if(!this.ok())return;let t=this.now();this.tone(t,220,.14,{type:"square",gain:.07,slideTo:110,filter:900}),this.noise(t,.1,{gain:.15,type:"lowpass",freq:600})}power(){if(!this.ok())return;let t=this.now();[72,76,79,84,88,91,96].forEach((e,i)=>this.tone(t+i*.045,$e(e),.28,{type:"triangle",gain:.12,verb:.6})),this.noise(t,.5,{gain:.06,type:"highpass",freq:5e3,freqTo:12e3})}shieldPop(){if(!this.ok())return;let t=this.now();this.tone(t,1400,.25,{type:"sine",gain:.14,slideTo:300,verb:.5}),this.noise(t,.2,{gain:.14,type:"highpass",freq:3e3})}crash(){if(!this.ok())return;let t=this.now();this.noise(t,.25,{gain:.35,type:"lowpass",freq:800,freqTo:200}),this.tone(t,200,.2,{type:"sine",gain:.35,slideTo:60}),[67,66,65,64].forEach((e,i)=>this.tone(t+.25+i*.2,$e(e),.22,{type:"triangle",gain:.12,slideTo:$e(e-.6)}))}click(){this.ok()&&this.tone(this.now(),700,.06,{type:"sine",gain:.14,slideTo:1100})}whoosh(){this.ok()&&this.noise(this.now(),.6,{gain:.2,type:"bandpass",freq:400,freqTo:3e3,q:.8})}fanfare(){if(!this.ok())return;let t=this.now(),e=[[72,0],[76,.1],[79,.2],[84,.3],[79,.45],[84,.55]];for(let[i,s]of e)this.tone(t+s,$e(i),.3,{type:"square",gain:.06,filter:3e3,verb:.4}),this.tone(t+s,$e(i),.3,{type:"triangle",gain:.1,verb:.4})}buy(){if(!this.ok())return;let t=this.now();[79,84,88,91].forEach((e,i)=>this.tone(t+i*.06,$e(e),.35,{type:"triangle",gain:.12,verb:.6}))}};var Nl=class{constructor(t,e){this.onAction=e,this.active=null,this.enabled=!1;let i=()=>Math.max(22,Math.min(window.innerWidth,window.innerHeight)*.06),s=a=>{this.enabled&&(this.active={id:a.pointerId,x:a.clientX,y:a.clientY,t:performance.now()},a.pointerType!=="mouse"&&a.preventDefault())},r=a=>{let l=this.active;if(!l||l.id!==a.pointerId)return;let c=a.clientX-l.x,h=a.clientY-l.y,d=i();if(Math.abs(c)<d&&Math.abs(h)<d)return;let f;Math.abs(c)>Math.abs(h)?f=c>0?"right":"left":f=h>0?"down":"up",f!==l.last&&this.onAction(f),l.last=f,l.x=a.clientX,l.y=a.clientY,a.preventDefault()},o=a=>{this.active&&this.active.id===a.pointerId&&(this.active=null)};t.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",o),t.addEventListener("touchmove",a=>a.preventDefault(),{passive:!1}),document.addEventListener("gesturestart",a=>a.preventDefault()),document.addEventListener("dblclick",a=>a.preventDefault()),window.addEventListener("keydown",a=>{let c={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",Space:"up",ArrowDown:"down",KeyS:"down",Escape:"pause",KeyP:"pause"}[a.code];c&&(a.target&&a.target.tagName==="BUTTON"&&a.code==="Space"||!this.enabled&&c!=="pause"||(a.preventDefault(),a.repeat||this.onAction(c)))})}};var _e=n=>document.getElementById(n),rv={magnet:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4v8a3 3 0 0 0 6 0V3h4v8a7 7 0 0 1-14 0z" fill="#ff3d6e"/><path d="M5 3h4v3H5zM15 3h4v3h-4z" fill="#fff"/></svg>',rush:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" fill="#ffc21a"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-4.9-10-9.8C.6 7.6 3 4 6.6 4c2.2 0 3.8 1.2 5.4 3 1.6-1.8 3.2-3 5.4-3C21 4 23.4 7.6 22 11.2 20 16.1 12 21 12 21z" fill="#4fb8ff"/></svg>',double:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7c-2-2-7-2-8 3-1 4 2 11 5 11 1.3 0 2-.6 3-.6s1.7.6 3 .6c3 0 6-7 5-11-1-5-6-5-8-3z" fill="#f5b400"/><path d="M12 7c0-2 1-4 3-5" stroke="#7a4a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>'},Fl=class{constructor(t){this.game=t,this.screens=["loading","title","hud","pause","over","wardrobe","help"].reduce((e,i)=>(e[i]=_e(i),e),{}),this.els={score:_e("h-score"),hearts:_e("h-hearts"),powers:_e("h-powerups"),tBest:_e("t-best"),tHearts:_e("t-hearts"),oScore:_e("o-score"),oBest:_e("o-best"),oHearts:_e("o-hearts"),oNew:_e("o-new"),oTitle:_e("o-title"),wName:_e("w-name"),wStatus:_e("w-status"),wAction:_e("w-action"),wHearts:_e("w-hearts"),wDots:_e("w-dots"),toast:_e("toast"),popups:_e("popups"),tut:_e("tutorial"),tutText:_e("tut-text"),tutArrow:_e("tut-arrow"),soundBtns:[_e("btn-sound"),_e("btn-sound2")],musicBtns:[_e("btn-music"),_e("btn-music2")],mood:_e("mood")},this.last={score:-1,hearts:-1},this.powerEls={},this.toastTimer=0,this.bind()}bind(){let t=this.game,e=(i,s)=>{let r=_e(i);r&&r.addEventListener("click",o=>{o.preventDefault(),t.state!=="paused"&&t.audio.unlock(),s()})};e("btn-play",()=>t.startRun()),e("btn-again",()=>t.startRun()),e("btn-wardrobe",()=>t.openWardrobe()),e("btn-wardrobe2",()=>t.openWardrobe()),e("btn-help",()=>t.showHelp(!0)),e("help-close",()=>t.showHelp(!1)),e("btn-pause",()=>t.pause()),e("btn-resume",()=>t.resume()),e("btn-home1",()=>t.goHome()),e("btn-home2",()=>t.goHome()),e("w-prev",()=>t.wardrobeStep(-1)),e("w-next",()=>t.wardrobeStep(1)),e("w-action",()=>t.wardrobeAction()),e("w-back",()=>t.closeWardrobe());for(let i of["btn-sound","btn-sound2"])e(i,()=>t.toggleSfx());for(let i of["btn-music","btn-music2"])e(i,()=>t.toggleMusic())}show(...t){for(let[e,i]of Object.entries(this.screens))i&&(i.hidden=!t.includes(e))}setSound(t,e){for(let i of this.els.soundBtns)i&&(i.classList.toggle("off",!t),i.setAttribute("aria-pressed",String(t)),i.setAttribute("aria-label",t?"Sound effects on":"Sound effects off"));for(let i of this.els.musicBtns)i&&(i.classList.toggle("off",!e),i.setAttribute("aria-pressed",String(e)),i.setAttribute("aria-label",e?"Music on":"Music off"))}titleStats(t,e){this.els.tBest.textContent=t.toLocaleString(),this.els.tHearts.textContent=e.toLocaleString()}hud(t,e){if(t!==this.last.score&&(this.els.score.textContent=t.toLocaleString(),this.last.score=t),e!==this.last.hearts){if(this.els.hearts.textContent=e.toLocaleString(),this.last.hearts>=0&&e>this.last.hearts){let i=this.els.hearts.parentElement;i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}this.last.hearts=e}}resetHud(){this.last={score:-1,hearts:-1},this.els.powers.innerHTML="",this.powerEls={},this.hud(0,0)}powers(t){for(let e of Object.keys(Kn)){let i=t[e],s=this.powerEls[e];i>0?(s||(s=document.createElement("div"),s.className="power",s.style.setProperty("--c",Kn[e].color),s.innerHTML=rv[e],s.title=Kn[e].name,this.els.powers.appendChild(s),this.powerEls[e]=s),s.style.setProperty("--f",i.toFixed(3))):s&&(s.remove(),delete this.powerEls[e])}}toast(t,e="#ff5fa2",i=1600){let s=this.els.toast;s.textContent=t,s.style.setProperty("--c",e),s.hidden=!1,s.classList.remove("in"),s.offsetWidth,s.classList.add("in"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{s.hidden=!0},i)}mood(t){let e=this.els.mood;e.textContent=t,e.hidden=!1,e.classList.remove("in"),e.offsetWidth,e.classList.add("in"),clearTimeout(this.moodTimer),this.moodTimer=setTimeout(()=>e.hidden=!0,2600)}popup(t,e,i,s="#ff5fa2"){let r=document.createElement("div");r.className="popup",r.textContent=t,r.style.left=`${e}px`,r.style.top=`${i}px`,r.style.setProperty("--c",s),this.els.popups.appendChild(r),setTimeout(()=>r.remove(),900)}tutorial(t){let e=this.els.tut;if(!t){e.hidden=!0,this.tutKind=null;return}if(this.tutKind===t)return;this.tutKind=t;let i={jump:"Swipe up to jump!",slide:"Swipe down to slide!",side:"Swipe left or right!"}[t];this.els.tutText.textContent=i,e.dataset.kind=t,e.hidden=!1}gameOver({score:t,best:e,hearts:i,isNew:s,title:r}){this.els.oScore.textContent=t.toLocaleString(),this.els.oBest.textContent=e.toLocaleString(),this.els.oHearts.textContent=`+${i.toLocaleString()}`,this.els.oNew.hidden=!s,this.els.oTitle.textContent=r}wardrobe(t,{owned:e,wearing:i,canBuy:s,bank:r,index:o,total:a}){this.els.wName.textContent=t.name,this.els.wHearts.textContent=r.toLocaleString();let l=this.els.wAction;l.disabled=!1,l.classList.remove("locked"),i?(this.els.wStatus.textContent="Wearing now",l.textContent="Play"):e?(this.els.wStatus.textContent="In your closet",l.textContent="Wear"):(this.els.wStatus.textContent=s?`Costs ${t.price.toLocaleString()} hearts`:`Needs ${t.price.toLocaleString()} hearts \xB7 you have ${r.toLocaleString()}`,l.textContent=`Buy \xB7 ${t.price.toLocaleString()}`,s||(l.classList.add("locked"),l.disabled=!0));let c=this.els.wDots;if(c.children.length!==a){c.innerHTML="";for(let h=0;h<a;h++)c.appendChild(document.createElement("i"))}[...c.children].forEach((h,d)=>h.classList.toggle("on",d===o))}};var Kf="hk-dream-dash-v1",$f=()=>({best:0,hearts:0,owned:["classic"],outfit:"classic",sfx:!0,music:!0,runs:0,quality:null});function Qf(){try{let n=localStorage.getItem(Kf);if(n){let t={...$f(),...JSON.parse(n)};return(!Array.isArray(t.owned)||!t.owned.includes("classic"))&&(t.owned=["classic",...Array.isArray(t.owned)?t.owned:[]]),t}}catch{}return $f()}function Ks(n){try{localStorage.setItem(Kf,JSON.stringify(n))}catch{}}var Qs=new URLSearchParams(location.search),ti=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),td=n=>n<=0?0:n>=1?1:n*n*(3-2*n),jn=zi.clamp;function fv(){let n=new Date().getHours();return n>=5&&n<7?3:n>=7&&n<17?0:n>=17&&n<19?1:2}var mh=class{constructor(){this.save=Qf(),this.container=document.getElementById("game");let t=new dl({antialias:!1,powerPreference:"high-performance",stencil:!1});t.toneMapping=Xn,t.toneMappingExposure=1,t.setClearColor(16767468),this.container.appendChild(t.domElement),this.renderer=t,this.scene=new zn;let e=new Hs(t);this.scene.environment=e.fromScene(new gl,.04).texture,this.scene.environmentIntensity=.55,e.dispose(),this.camera=new He(60,1,.1,1600),this.camera.position.set(0,1.5,4.4),this.fx=new Dl(t,this.scene,this.camera),this.world=new Ml(this.scene,t),this.kitty=new Sl,this.kitty.setShadowMaterial(wn(16777215,{map:Vf(),transparent:!0,depthWrite:!1})),this.kitty.root.rotation.y=Math.PI,this.scene.add(this.kitty.root),this.track=new Tl(this.scene,this),this.particles=new Al(this.scene,Wf()),this.trail=new Rl(this.scene),this.audio=new Ul,this.audio.setSfx(this.save.sfx),this.audio.setMusic(this.save.music),this.ui=new Fl(this),this.ui.setSound(this.save.sfx,this.save.music),this.input=new Nl(this.container,i=>this.onAction(i)),this.forcedQuality=["low","medium","high"].includes(Qs.get("quality"))?Qs.get("quality"):null,this.quality=this.forcedQuality||this.guessQuality(),this.fx.setQuality(this.quality),this.perf={t:0,frames:0,slow:0},this.time=0,this.dist=0,this.runStart=0,this.speed=0,this.shake=0,this.flash=0,this.flashColor=new ft(1,1,1),this.camBlend=0,this.fov=60,this.baseFov=60,this.titlePalette=fv(),this.player=this.freshPlayer(),this.powers={magnet:0,rush:0,shield:0,double:0},this.god=Qs.has("god"),this.startOffset=Number(Qs.get("start"))||0,this.ambientT=0,this.sparkT=0,this.kitty.setOutfit(this.outfitById(this.save.outfit)),this.world.reset(this.dist),this.world.setPalette(this.titlePalette),this.state="title",this.facing=Math.PI,this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",()=>setTimeout(this.resize,200)),window.visualViewport&&window.visualViewport.addEventListener("resize",this.resize),this.resize(),document.addEventListener("visibilitychange",()=>this.onVisibility()),this.ui.titleStats(this.save.best,this.save.hearts),this.ui.show("title"),this.lastT=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop),Qs.has("debug")&&(this.debugEl=document.getElementById("debug")),Qs.get("shot")==="icon"&&this.setupIconShot(),window.__game=this}setupIconShot(){this.iconShot=!0,this.ui.show();for(let r of this.scene.children)r!==this.kitty.root&&!r.isLight&&(r.visible=!1);let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=e.createRadialGradient(128,110,10,128,128,180);i.addColorStop(0,"#ffe3f0"),i.addColorStop(1,"#ff7eb6"),e.fillStyle=i,e.fillRect(0,0,256,256);let s=new kn(t);s.colorSpace=ze,this.scene.background=s,this.fx.u.uVignette.value=0}guessQuality(){let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":t<=4?"medium":"high"}outfitById(t){return Rn.find(e=>e.id===t)||Rn[0]}freshPlayer(){return{lane:0,prevLane:0,x:0,prevX:0,vx:0,y:0,vy:0,ground:0,grounded:!0,sliding:!1,slideT:0,fastFall:!1,slideQueued:!1,flying:!1,invincible:0,coyote:0,jumpBuf:0,blockedBy:null}}pixelRatio(){let t=window.devicePixelRatio||1,e={high:2,medium:1.5,low:1}[this.quality];return Math.min(t,e)}resize(){let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight);this.pr=this.pixelRatio(),this.fx.setQuality(this.quality),this.fx.setSize(t,e,this.pr),this.camera.aspect=t/e;let i=zi.degToRad(66),s=zi.radToDeg(2*Math.atan(Math.tan(i/2)/this.camera.aspect));this.baseFov=jn(s,48,74),this.camBack=jn((1-this.camera.aspect)*2.2,0,1.4),this.sideways=this.camera.aspect>1.15,this.camera.updateProjectionMatrix(),this.world.starUniforms.uPx.value=this.pr}startRun(){this.state==="playing"||this.state==="countdown"||(this.audio.unlock(),this.audio.setMode("game"),this.audio.whoosh(),this.kitty.setOutfit(this.outfitById(this.save.outfit)),this.ui.show("hud"),this.ui.resetHud(),this.runStart=this.dist-this.startOffset,this.track.reset(this.dist,this.runStart),this.tutorialRun=this.save.runs<2&&!this.startOffset,this.tutorialRun&&this.track.spawnTutorial(this.dist),this.player=this.freshPlayer(),this.powers={magnet:0,rush:0,shield:0,double:0},this.score=0,this.runHearts=0,this.speed=0,this.introT=0,this.facing=0,this.kitty.mode="run",this.kitty.kick(2),this.input.enabled=!0,this.state="playing",this.paletteStart=this.titlePalette,this.lastMood=Math.floor(this.paletteStart+.5),this.trail.reset(0,.6),this.requestWakeLock())}die(t){let e=this.player;if(this.lastDeath=t&&{type:t.type,lane:t.lane,kittyLane:e.lane,x:+e.x.toFixed(2),y:+e.y.toFixed(2),sliding:e.sliding,grounded:e.grounded,dist:+this.dist.toFixed(1),sa:+t.sa.toFixed(1),sb:+t.sb.toFixed(1),near:this.track.obstacles.filter(i=>i.sb>this.dist-2&&i.sa<this.dist+30).map(i=>`${i.type}@${i.lane}:${(i.sa-this.dist).toFixed(1)}`).join(" ")},this.state="dying",this.dyingT=0,t&&(this.dist=Math.min(this.dist,t.sa-.3-.05)),this.speed=0,this.bounceV=5,this.kitty.mode="crash",this.kitty.kick(-3),this.facing=Math.PI,this.input.enabled=!1,this.player.sliding=!1,this.player.flying=!1,this.audio.crash(),this.audio.setMode("off"),this.shake=.7,this.flash=.55,this.flashColor.setRGB(1,.85,.92),this.particles.crash(this.player.x,this.player.y+1,.2),this.ui.tutorial(null),navigator.vibrate)try{navigator.vibrate([60,40,120])}catch{}}gameOver(){let t=Math.floor(this.score),e=t>this.save.best;this.save.best=Math.max(this.save.best,t),this.save.hearts+=this.runHearts,this.save.runs+=1,Ks(this.save);let i=["Oops!","Ouchie!","Bonk!","So close!"];this.ui.gameOver({score:t,best:this.save.best,hearts:this.runHearts,isNew:e,title:e?"Amazing!":i[Math.floor(Math.random()*i.length)]}),this.ui.show("over"),this.state="over",this.audio.setMode("title"),e&&(this.audio.fanfare(),this.particles.confetti(this.camera,90)),this.releaseWakeLock()}goHome(){(this.state==="playing"||this.state==="paused"||this.state==="countdown")&&(this.save.hearts+=this.runHearts||0,this.save.best=Math.max(this.save.best,Math.floor(this.score||0)),this.save.runs+=1,Ks(this.save),this.audio.resume()),this.state="title",this.input.enabled=!1,this.track.reset(this.dist),this.player=this.freshPlayer(),this.powers={magnet:0,rush:0,shield:0,double:0},this.kitty.mode="idle",this.facing=Math.PI,this.kitty.setOutfit(this.outfitById(this.save.outfit)),this.ui.titleStats(this.save.best,this.save.hearts),this.ui.tutorial(null),this.ui.show("title"),this.audio.setMode("title"),this.world.setPalette(this.titlePalette),this.releaseWakeLock()}pause(){this.state!=="playing"&&this.state!=="countdown"||(this.state="paused",this.input.enabled=!1,this.ui.show("hud","pause"),this.audio.suspend(),this.releaseWakeLock())}resume(){this.state==="paused"&&(this.ui.show("hud"),this.audio.resume(),this.state="countdown",this.countT=1.5,this.lastCount=0,this.requestWakeLock())}showHelp(t){t?this.ui.show("title","help"):this.ui.show("title")}toggleSfx(){this.save.sfx=!this.save.sfx,this.audio.setSfx(this.save.sfx),this.ui.setSound(this.save.sfx,this.save.music),Ks(this.save),this.audio.click()}toggleMusic(){this.save.music=!this.save.music,this.audio.setMusic(this.save.music),this.ui.setSound(this.save.sfx,this.save.music),Ks(this.save),this.audio.click()}openWardrobe(){this.audio.click(),this.state="wardrobe",this.wIndex=Math.max(0,Rn.findIndex(t=>t.id===this.save.outfit)),this.player=this.freshPlayer(),this.kitty.mode="idle",this.facing=Math.PI,this.track.reset(this.dist),this.ui.show("wardrobe"),this.refreshWardrobe()}refreshWardrobe(){let t=Rn[this.wIndex];this.kitty.setOutfit(t);let e=this.save.owned.includes(t.id);this.ui.wardrobe(t,{owned:e,wearing:this.save.outfit===t.id,canBuy:this.save.hearts>=t.price,bank:this.save.hearts,index:this.wIndex,total:Rn.length})}wardrobeStep(t){let e=Rn.length;this.wIndex=(this.wIndex+t+e)%e,this.audio.click(),this.kitty.kick(1.6),this.particles.burst(0,1,0,{count:12,color:[[1.5,.6,1.1],[1.4,1.4,1.4]],speed:3,size:.28,life:.6}),this.refreshWardrobe()}wardrobeAction(){let t=Rn[this.wIndex],e=this.save.owned.includes(t.id);if(e&&this.save.outfit===t.id){this.startRun();return}if(e)this.audio.click();else{if(this.save.hearts<t.price)return;this.save.hearts-=t.price,this.save.owned.push(t.id),this.audio.buy(),this.particles.bigPop(0,1,0,[[1.6,.5,1],[1.6,1.3,.4],[.6,1.2,1.6]]),this.ui.toast("New outfit!","#ff5fa2")}this.save.outfit=t.id,Ks(this.save),this.kitty.mode="happy",this.happyT=1.2,this.refreshWardrobe()}closeWardrobe(){this.audio.click(),this.goHome()}onAction(t){if(t==="pause"){this.state==="playing"?this.pause():this.state==="paused"&&this.resume();return}if(this.state!=="playing")return;let e=this.player;if(t==="left"||t==="right"){let i=jn(e.lane+(t==="left"?-1:1),-1,1);if(e.blockedBy&&i===e.blockedBy.lane&&this.alongside(e.blockedBy)){this.audio.bump();return}i!==e.lane&&(e.prevLane=e.lane,e.lane=i,this.audio.lane())}else if(t==="up"){if(e.flying)return;e.grounded||e.coyote>0?this.doJump():e.jumpBuf=.2}else if(t==="down"){if(e.flying)return;e.grounded?this.startSlide():(e.fastFall=!0,e.vy=Math.min(e.vy,-14),e.slideQueued=!0)}}doJump(){let t=this.player;t.vy=15.2,t.grounded=!1,t.coyote=0,t.sliding=!1,t.slideQueued=!1,this.kitty.kick(2.4),this.audio.jump(),this.particles.dust(t.x,t.y,.2,5)}startSlide(){let t=this.player;t.sliding=!0,t.slideT=.65,this.kitty.kick(-1.6),this.audio.slide(),this.particles.dust(t.x,t.y,.1,7)}activate(t,e,i,s){let r=Kn[t];this.powers[t]=r.time,this.ui.toast(r.name+"!",r.color),this.audio.power(),this.flash=.35,this.flashColor.set(r.color);let o=new ft(r.color);if(this.particles.bigPop(e,i,s,[[o.r*1.6,o.g*1.6,o.b*1.6],[1.5,1.5,1.5],[1.6,.6,1.1]]),t==="rush"){let a=this.player;a.flying=!0,a.sliding=!1,a.vy=0,this.track.beginRush(this.dist,a.lane),this.trail.reset(a.x,a.y+.4),this.audio.whoosh()}}powerEnded(t){if(t==="rush"){let e=this.player;e.flying=!1,e.vy=0,e.invincible=2.2,this.track.endRush(this.dist)}}bumpAway(t){let e=this.player,i=Math.sign(e.prevX-t.x)||Math.sign(e.x-t.x)||1;e.prevLane=e.lane,e.lane=jn(t.lane+i,-1,1),e.lane===t.lane&&(e.lane=jn(t.lane-i,-1,1)),t.ignoreUntil=this.time+.45,e.blockedBy=t}alongside(t){let e=this.dist;return!t.remove&&t.sa<e+.3+.3&&t.sb>e-.3-.3}onHit(t,e){let i=this.player;if(e){if(this.bumpAway(t),i.invincible>0||this.god)return;this.shake=Math.max(this.shake,.25),this.audio.bump(),this.particles.dust(i.x,i.y+.5,0,6);return}if(i.invincible>0||this.god){t.ignoreUntil=1/0;return}if(this.powers.shield>0){this.powers.shield=0,t.dead=!0,i.invincible=1.2,this.audio.shieldPop(),this.shake=.35,this.flash=.3,this.flashColor.set("#8fd3ff"),this.particles.poof(t.x,0,0),this.ui.toast("Shield saved you!","#4fb8ff",1200);return}this.die(t)}onItem(t){let e=this.powers.double>0?2:1,i=this.dist-t.s;t.kind==="heart"?(this.runHearts+=e,this.score+=10*e,this.audio.heart(e>1),this.particles.heartPop(t.x,t.y,i,e>1)):(this.runHearts+=5*e,this.score+=50*e,this.audio.apple(),this.particles.bigPop(t.x,t.y,i,[[1.7,.35,.45],[1.6,1.3,.4],[1.5,1.5,1.5]]),this.popupAt(`+${5*e}`,t.x,t.y+.6,i,"#ff3d5e"))}popupAt(t,e,i,s,r){let o=new P(e,i,s).project(this.camera),a=(o.x*.5+.5)*window.innerWidth,l=(-o.y*.5+.5)*window.innerHeight;this.ui.popup(t,a,l,r)}updatePlaying(t){let e=this.player,i=this.powers;this.introT+=t;for(let p in i)i[p]>0&&(i[p]-=t,i[p]<=0&&(i[p]=0,this.powerEnded(p)));let s=i.rush>0,r=this.dist-this.runStart,o=this.freeze?0:Math.min(31,15+r*.0046)*(s?1.45:1),a=td(this.introT/.8);this.speed=ti(this.speed,o*a,s?2.5:5,t);let l=this.dist;this.dist+=this.speed*t,this.score+=this.speed*t,e.prevX=e.x;let c=e.lane*2.1;e.x=ti(e.x,c,20,t),Math.abs(c-e.x)<.004&&(e.x=c),e.vx=(e.x-e.prevX)/Math.max(t,1e-4);let h=e.y;e.flying?(e.y=ti(e.y,5.2,3.2,t),e.vy=0,e.grounded=!1):(e.vy-=50*t*(e.fastFall?2.3:1),e.y+=e.vy*t),e.sliding&&(e.slideT-=t,e.slideT<=0&&(e.sliding=!1)),e.invincible>0&&(e.invincible-=t);let d=e.sliding?.6:1.45,f=this.track.collide({x:e.x,prevX:e.prevX,y:e.y,y0:h,h:d,dist:this.dist,prevDist:l,time:this.time,dt:t});if(e.ground=f.ground,e.flying||(e.y<=f.ground?(e.grounded||this.onLand(e.vy),e.y=f.ground,e.vy=0,e.grounded=!0,e.fastFall=!1,e.coyote=.1,e.slideQueued&&(e.slideQueued=!1,this.startSlide()),e.jumpBuf>0&&(e.jumpBuf=0,this.doJump())):e.y>f.ground+.03&&(e.grounded=!1,e.coyote-=t)),e.jumpBuf=Math.max(0,e.jumpBuf-t),f.hit&&!e.flying&&this.onHit(f.hit,f.side),this.state!=="playing")return;this.track.collect({x:e.x,y:e.y,dist:this.dist,prevDist:l,sliding:e.sliding},i.magnet>0,t,p=>this.onItem(p),p=>this.activate(p.kind,p.x,p.y,this.dist-p.s));let u="run";if(e.flying?u="fly":e.sliding?u="slide":e.grounded||(u="jump"),this.kitty.mode=u,this.tutorialRun&&this.track.tutorial){let p=null;for(let y of this.track.tutorial){let b=y.s-this.dist;b>0&&b<30&&(p=y.hint)}this.ui.tutorial(p)}let m=this.paletteStart+this.world.paletteAt(r);this.world.setPalette(m);let M=Math.floor(m+.5);if(M!==this.lastMood&&(this.lastMood=M,this.ui.mood(Qn[M%Qn.length].name)),this.sparkT-=t,this.sparkT<=0){this.sparkT=s?.02:.07;let p=s?[[1.6,.5,.8],[1.6,1.3,.4],[.5,1.4,.8],[.5,.9,1.6],[1.1,.6,1.6]][Math.floor(Math.random()*5)]:i.double>0?[1.6,1.25,.4]:[1.4,.7,1.1];this.particles.trailSparkle(e.x,e.y+(e.flying?.1:.05),.3,p)}if(i.magnet>0&&Math.random()<t*20){let p=Math.random()*Math.PI*2;this.particles.add.emit({x:e.x+Math.cos(p)*.9,y:e.y+.7,z:Math.sin(p)*.9,vx:-Math.cos(p)*1.5,vz:-Math.sin(p)*1.5,color:[1.6,.5,1],size:.22,sizeEnd:.05,sprite:Ue.SPARKLE,life:.5,world:!1})}this.ui.hud(Math.floor(this.score),this.runHearts);let g={};for(let p in i)g[p]=i[p]>0&&p!=="shield"?i[p]/Kn[p].time:i[p]>0?1:0;this.ui.powers(g)}onLand(t){let e=this.player,i=Math.min(1,-t/16);this.kitty.kick(-2.6*i-.4),i>.3&&(this.audio.land(),this.particles.dust(e.x,e.y,.1,6))}updateCamera(t){let e=this.player,i=this.time,s=this.camera,r=this.state==="playing"||this.state==="dying"||this.state==="over"||this.state==="paused"||this.state==="countdown";this.camBlend=ti(this.camBlend,r?1:0,r?2.6:3,t);let o=td(this.camBlend),a=this.state==="wardrobe",l=this._camV||(this._camV=[new P,new P,new P,new P]),c=a?l[0].set(Math.sin(i*.5)*.25,1,2.7+this.camBack*.55):l[0].set(Math.sin(i*.35)*.35,1.05,3.3+this.camBack*.6),h=l[1].set(0,a?.62:.6,0);if(this.sideways){let E=a?1.05:1.6;c.x+=E,h.x+=E}let d=this.state==="dying"||this.state==="over",f=4.8+this.camBack*.4+(this.powers.rush>0?.8:0),u=l[2].set(e.x*.85,4.4+e.y*.62,f),m=l[3].set(e.x*.75,.2+e.y*.62,-6);d&&(u.set(e.x*.9,2.3+e.ground,4+this.camBack*.4),m.set(e.x,.25+e.ground,0),this.sideways&&(u.x+=1.6,m.x+=1.6,u.y-=.6,m.y+=.45));let M=c.lerp(u,o),g=h.lerp(m,o);this.camPos||(this.camPos=M.clone(),this.camLook=g.clone());let p=r?9:5;this.camPos.x=ti(this.camPos.x,M.x,p,t),this.camPos.y=ti(this.camPos.y,M.y,p*.8,t),this.camPos.z=ti(this.camPos.z,M.z,p,t),this.camLook.x=ti(this.camLook.x,g.x,p,t),this.camLook.y=ti(this.camLook.y,g.y,p*.8,t),this.camLook.z=ti(this.camLook.z,g.z,p,t),this.shake=Math.max(0,this.shake-t*1.6);let y=this.shake*this.shake;s.position.set(this.camPos.x+(Math.random()-.5)*y*.8,this.camPos.y+(Math.random()-.5)*y*.8,this.camPos.z),s.lookAt(this.camLook.x,this.camLook.y,this.camLook.z);let b=r?jn((this.speed-15)*.35,0,8):0,_=this.baseFov+b+(this.powers.rush>0?9:0)-(a?6:0);this.fov=ti(this.fov,_,3,t),Math.abs(s.fov-this.fov)>.01&&(s.fov=this.fov,s.updateProjectionMatrix());let T=this.renderer.domElement.height;this.particles.setScale(T/(2*Math.tan(zi.degToRad(s.fov)/2)))}ambient(t){if(this.ambientT-=t,this.ambientT>0)return;this.ambientT=.12;let e=this.world.pal.stars||0,i=this.camera.position.x;if(e>.5){let r=Math.random()<.5?-1:1;this.particles.add.emit({x:i+r*(4.5+Math.random()*8),y:.5+Math.random()*3,z:-5-Math.random()*40,vx:(Math.random()-.5)*.6,vy:(Math.random()-.3)*.5,vz:(Math.random()-.5)*.6,color:Math.random()<.5?[1.4,1.6,.6]:[1.6,.7,1.3],size:.3,sizeEnd:.2,sprite:Ue.GLOW,life:3,twinkle:6})}let s=Math.random()<.25;this.particles.norm.emit({x:i+(Math.random()-.5)*22,y:4+Math.random()*6,z:-4-Math.random()*38,vx:.6+Math.random()*.6,vy:-.7-Math.random()*.5,vz:(Math.random()-.5)*.4,color:s?[1,.45,.72]:[1,.78,.88],size:s?.3:.26,sprite:s?Ue.HEART:Ue.PETAL,life:5,spin:(Math.random()-.5)*3,alpha:.9})}loop(t){requestAnimationFrame(this.loop);let e=(t-this.lastT)/1e3;this.lastT=t,e>0||(e=1/60),e=Math.min(e,.05),this.state!=="paused"&&(this.time+=e,this.update(e),this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.fx.render(e),this.drawCalls=this.renderer.info.render.calls,this.watchPerf(e))}update(t){let e=this.state,i=this.dist;if(e==="playing")this.updatePlaying(t);else if(e==="countdown"){this.countT-=t;let c=Math.ceil(this.countT/.5);c!==this.lastCount&&c>0&&(this.lastCount=c,this.ui.toast(String(c),"#ff5fa2",450),this.audio.click()),this.countT<=0&&(this.state="playing",this.input.enabled=!0)}else if(e==="dying"){this.dyingT+=t,this.bounceV=ti(this.bounceV,0,5,t),this.dist-=this.bounceV*t;let c=this.player;c.vy-=50*t,c.y=Math.max(c.ground,c.y+c.vy*t),this.dyingT>1.35&&this.gameOver()}else e==="wardrobe"&&this.happyT>0&&(this.happyT-=t,this.happyT<=0&&(this.kitty.mode="idle"));let s=this.dist-i,r=this.player;this.world.update(t,this.dist,this.camera,this.time),e!=="playing"&&e!=="dying"?this.track.update(0,this.dist,0,this.time):this.track.update(t,this.dist,this.speed,this.time),this.kitty.root.position.set(r.x,r.y,0),this.kitty.update(t,{mode:this.kitty.mode,speed:this.speed,vx:e==="playing"?r.vx:0,height:r.flying?3:r.y-r.ground,flying:r.flying,shield:this.powers.shield>0&&(e==="playing"||e==="countdown"),magnet:this.powers.magnet>0&&e==="playing",facing:this.facing}),this.kitty.body.visible=!(r.invincible>0&&e==="playing"&&Math.floor(this.time*16)%2===0);let o=this._head||(this._head=new P);o.set(r.x,r.y+(r.flying?-.05:.4),.2),this.trail.update(t,o,s,this.powers.rush>0&&e==="playing",this.time),this.particles.update(t,s),this.ambient(t),this.updateCamera(t);let a=this.powers.rush>0&&e==="playing",l=this.fx.u;if(l.uSpeed.value=ti(l.uSpeed.value,a?1:e==="playing"?jn((this.speed-25)/12,0,.45):0,4,t),l.uAberr.value=ti(l.uAberr.value,a?.3:0,4,t)+this.shake*.6,this.flash=Math.max(0,this.flash-t*2.2),l.uFlash.value=this.flash*this.flash,l.uFlashColor.value.copy(this.flashColor),this.fx.bloom.strength=ti(this.fx.bloom.strength,(this.world.pal.bloom||.5)+(a?.3:0),3,t),this.iconShot){let c=this.camera;this.kitty.waveT=99,this.kitty.blinkT=99,c.position.set(0,1.16,3.05),c.lookAt(0,1.1,0),c.fov=33,c.updateProjectionMatrix(),this.fx.bloom.strength=.2}this.debugEl&&(this.fpsAcc=(this.fpsAcc||0)*.95+1/t*.05,this.debugEl.textContent=`${this.fpsAcc.toFixed(0)} fps \xB7 ${this.quality} \xB7 pr ${this.pr} \xB7 calls ${this.drawCalls}`)}watchPerf(t){if(this.forcedQuality||this.state!=="playing")return;let e=this.perf;if(e.t+=t,e.frames++,e.t<3)return;let i=e.frames/e.t;e.t=0,e.frames=0,e.slow=i<26?e.slow+1:0,e.slow>=2&&this.quality!=="low"&&(this.quality=this.quality==="high"?"medium":"low",this.resize(),e.slow=0)}onVisibility(){document.hidden?((this.state==="playing"||this.state==="countdown")&&this.pause(),this.audio.suspend()):this.state!=="paused"&&(this.audio.resume(),this.lastT=performance.now())}async requestWakeLock(){try{navigator.wakeLock&&!this.wakeLock&&(this.wakeLock=await navigator.wakeLock.request("screen"),this.wakeLock.addEventListener("release",()=>this.wakeLock=null))}catch{this.wakeLock=null}}releaseWakeLock(){try{this.wakeLock&&this.wakeLock.release()}catch{}this.wakeLock=null}};function ed(){let n=document.getElementById("loading");try{if(!document.createElement("canvas").getContext("webgl2"))throw new Error("no-webgl2");new mh}catch(t){if(console.error(t),n){n.hidden=!1;let e=n.querySelector(".loading-text");e&&(e.textContent=t&&t.message==="no-webgl2"?"This browser can\u2019t show 3D graphics. Try the latest Safari or Chrome.":"Something went wrong while loading. Please refresh the page.")}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ed):ed();
