var Au=0,Hc=1,Ru=2;var ns=1,Cu=2,Xs=3,In=0,Le=1,ni=2,vi=0,yi=1,Mi=2,kc=3,Gc=4,Pu=5;var ss=100,Iu=101,Lu=102,Du=103,Nu=104,Uu=200,Fu=201,Bu=202,Ou=203,Vc=204,Wc=205,zu=206,Hu=207,ku=208,Gu=209,Vu=210,Wu=211,Xu=212,qu=213,Yu=214,ta=0,ea=1,ia=2,Ls=3,na=4,sa=5,ra=6,oa=7,Na=0,Zu=1,$u=2,Oi=0,Qr=1,jr=2,to=3,eo=4,io=5,no=6,rs=7;var Xc=300,Ln=301,os=302,Ua=303,Fa=304,so=306,ui=1e3,hi=1001,aa=1002,Ie=1003,Ju=1004;var ro=1005;var We=1006,Ba=1007;var Dn=1008;var si=1009,qc=1010,Yc=1011,qs=1012,Oa=1013,zi=1014,bi=1015,qe=1016,za=1017,Ha=1018,Ys=1020,Zc=35902,$c=35899,Jc=1021,Kc=1022,Si=1023,Xi=1026,Nn=1027,Zs=1028,ka=1029,Un=1030,Ga=1031;var Va=1033,oo=33776,ao=33777,lo=33778,co=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,$a=37492,Ja=37496,Ka=37488,Qa=37489,ho=37490,ja=37491,tl=37808,el=37809,il=37810,nl=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,fl=37820,dl=37821,pl=36492,ml=36494,gl=36495,xl=36283,_l=36284,uo=36285,vl=36286;var Mr=2300,la=2301,Qo=2302,Rc=2303,Cc=2400,Pc=2401,Ic=2402;var Ku=3200;var $s=0,Qu=1,cn="",Ge="srgb",br="srgb-linear",Sr="linear",ue="srgb";var jo=7680;var ju=519,tf=512,ef=513,nf=514,yl=515,sf=516,rf=517,Ml=518,of=519,af=35044,fo=35048;var Qc="300 es",Di=2e3,Ds=2001;function fp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lf(){let n=Er("canvas");return n.style.display="block",n}var $h={},Ns=null;function jc(...n){let t="THREE."+n.shift();Ns?Ns("log",t,...n):console.log(t,...n)}function cf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function kt(...n){n=cf(n);let t="THREE."+n.shift();if(Ns)Ns("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Wt(...n){n=cf(n);let t="THREE."+n.shift();if(Ns)Ns("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Kn(...n){let t=n.join(" ");t in $h||($h[t]=!0,kt(...n))}function hf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var uf={[ta]:ea,[ia]:ra,[na]:oa,[Ls]:sa,[ea]:ta,[ra]:ia,[oa]:na,[sa]:Ls},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=1234567,xr=Math.PI/180,Us=180/Math.PI;function as(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function th(n,t){return(n%t+t)%t}function pp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function mp(n,t,e){return n!==t?(e-n)/(t-n):0}function _r(n,t,e){return(1-e)*n+e*t}function gp(n,t,e,i){return _r(n,t,1-Math.exp(-e*i))}function xp(n,t=1){return t-Math.abs(th(n,t*2)-t)}function _p(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function vp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function yp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Mp(n,t){return n+Math.random()*(t-n)}function bp(n){return n*(.5-Math.random())}function Sp(n){n!==void 0&&(Jh=n);let t=Jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ep(n){return n*xr}function wp(n){return n*Us}function Tp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ap(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Rp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cp(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $i={DEG2RAD:xr,RAD2DEG:Us,generateUUID:as,clamp:te,euclideanModulo:th,mapLinear:pp,inverseLerp:mp,lerp:_r,damp:gp,pingpong:xp,smoothstep:_p,smootherstep:vp,randInt:yp,randFloat:Mp,randFloatSpread:bp,seededRandom:Sp,degToRad:Ep,radToDeg:wp,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:ei,denormalize:Ps},oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var nt=oh,Be=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);m=Math.sin(m*M)/E,a=Math.sin(a*M)/E,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var P=ah,sc=new P,Kh=new Be,lh=class lh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],M=s[1],E=s[4],y=s[7],w=s[2],S=s[5],R=s[8];return r[0]=o*x+a*M+l*w,r[3]=o*g+a*E+l*S,r[6]=o*m+a*y+l*R,r[1]=c*x+h*M+d*w,r[4]=c*g+h*E+d*S,r[7]=c*m+h*y+d*R,r[2]=u*x+f*M+p*w,r[5]=u*g+f*E+p*S,r[8]=u*m+f*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Kn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(t,e)),this}rotate(t){return Kn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return Kn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var Zt=lh,rc=new Zt,Qh=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pp(){let n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=on(s.r),s.g=on(s.g),s.b=on(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Kn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Kn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:t,whitePoint:i,transfer:Sr,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var ee=Pp();function on(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gs,ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gs===void 0&&(gs=Er("canvas")),gs.width=t.width,gs.height=t.height;let s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=gs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=on(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(on(e[i]/255)*255):e[i]=on(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,Fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oc(s[o].image)):r.push(oc(s[o]))}else r=oc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ca.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Lp=0,ac=new P,ii=class n extends qi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=hi,s=hi,r=We,o=Dn,a=Si,l=si,c=n.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=as(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Xc;ii.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,w=(m+1)/2,S=(h+u)/4,R=(d+x)/4,v=(p+g)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=R/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var Ae=ch,ha=class extends qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ii(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends ha{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},wr=class extends ii{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ua=class extends ii{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Da=class Da{constructor(t,e,i,s,r,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,x,g)}set(t,e,i,s,r,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),o=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Np)}lookAt(t,e,i){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),vn.crossVectors(i,li),vn.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),vn.crossVectors(i,li)),vn.normalize(),Ro.crossVectors(li,vn),s[0]=vn.x,s[4]=Ro.x,s[8]=li.x,s[1]=vn.y,s[5]=Ro.y,s[9]=li.y,s[2]=vn.z,s[6]=Ro.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],M=i[3],E=i[7],y=i[11],w=i[15],S=s[0],R=s[4],v=s[8],T=s[12],C=s[1],N=s[5],F=s[9],z=s[13],L=s[2],O=s[6],X=s[10],q=s[14],rt=s[3],Y=s[7],j=s[11],it=s[15];return r[0]=o*S+a*C+l*L+c*rt,r[4]=o*R+a*N+l*O+c*Y,r[8]=o*v+a*F+l*X+c*j,r[12]=o*T+a*z+l*q+c*it,r[1]=h*S+d*C+u*L+f*rt,r[5]=h*R+d*N+u*O+f*Y,r[9]=h*v+d*F+u*X+f*j,r[13]=h*T+d*z+u*q+f*it,r[2]=p*S+x*C+g*L+m*rt,r[6]=p*R+x*N+g*O+m*Y,r[10]=p*v+x*F+g*X+m*j,r[14]=p*T+x*z+g*q+m*it,r[3]=M*S+E*C+y*L+w*rt,r[7]=M*R+E*N+y*O+w*Y,r[11]=M*v+E*F+y*X+w*j,r[15]=M*T+E*z+y*q+w*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=l*f-c*u,E=a*f-c*d,y=a*u-l*d,w=o*f-c*h,S=o*u-l*h,R=o*d-a*h;return e*(x*M-g*E+m*y)-i*(p*M-g*w+m*S)+s*(p*E-x*w+m*R)-r*(p*y-x*S+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*a-i*o,E=e*l-s*o,y=e*c-r*o,w=i*l-s*a,S=i*c-r*a,R=s*c-r*l,v=h*x-d*p,T=h*g-u*p,C=h*m-f*p,N=d*g-u*x,F=d*m-f*x,z=u*m-f*g,L=M*z-E*F+y*N+w*C-S*T+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(a*z-l*F+c*N)*O,t[1]=(s*F-i*z-r*N)*O,t[2]=(x*R-g*S+m*w)*O,t[3]=(u*S-d*R-f*w)*O,t[4]=(l*C-o*z-c*T)*O,t[5]=(e*z-s*C+r*T)*O,t[6]=(g*y-p*R-m*E)*O,t[7]=(h*R-u*y+f*E)*O,t[8]=(o*F-a*C+c*v)*O,t[9]=(i*C-e*F-r*v)*O,t[10]=(p*S-x*y+m*M)*O,t[11]=(d*y-h*S-f*M)*O,t[12]=(a*T-o*N-l*v)*O,t[13]=(e*N-i*T+s*v)*O,t[14]=(x*E-p*w-g*M)*O,t[15]=(h*w-d*E+u*M)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,g=o*d,m=a*d,M=l*c,E=l*h,y=l*d,w=i.x,S=i.y,R=i.z;return s[0]=(1-(x+m))*w,s[1]=(f+y)*w,s[2]=(p-E)*w,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(u+m))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(p+E)*R,s[9]=(g-M)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,h=1/a,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Di,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Di)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ds)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Di,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Di)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ds)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Da.prototype.isMatrix4=!0;var re=Da,xs=new P,Ci=new re,Dp=new P(0,0,0),Np=new P(1,1,1),vn=new P,Ro=new P,li=new P,tu=new re,eu=new Be,Xe=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xe.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Up=0,iu=new P,_s=new Be,tn=new re,Co=new P,hr=new P,Fp=new P,Bp=new Be,nu=new P(1,0,0),su=new P(0,1,0),ru=new P(0,0,1),ou={type:"added"},Op={type:"removed"},vs={type:"childadded",child:null},lc={type:"childremoved",child:null},Oe=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new Xe,i=new Be,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Zt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(ru,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Co.copy(t):Co.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(hr,Co,this.up):tn.lookAt(Co,hr,this.up),this.quaternion.setFromRotationMatrix(tn),s&&(tn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(tn),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),vs.child=t,this.dispatchEvent(vs),vs.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Op),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new P(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Me=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},zp={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Po={h:0,s:0,l:0};function cc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=th(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=cc(o,r,t+1/3),this.g=cc(o,r,t),this.b=cc(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ee.workingToColorSpace($e.copy(this),t),Math.round(te($e.r*255,0,255))*65536+Math.round(te($e.g*255,0,255))*256+Math.round(te($e.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace($e.copy(this),e);let i=$e.r,s=$e.g,r=$e.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ge){ee.workingToColorSpace($e.copy(this),t);let e=$e.r,i=$e.g,s=$e.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(Po);let i=_r(yn.h,Po.h,e),s=_r(yn.s,Po.s,e),r=_r(yn.l,Po.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new ht;ht.NAMES=ff;var Ar=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ht(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qn=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new P,en=new P,hc=new P,nn=new P,ys=new P,Ms=new P,au=new P,uc=new P,fc=new P,dc=new P,pc=new Ae,mc=new Ae,gc=new Ae,En=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pi.subVectors(t,e),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Pi.subVectors(s,e),en.subVectors(i,e),hc.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(en),l=Pi.dot(hc),c=en.dot(en),h=en.dot(hc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,i),gc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(t,e,i,s){return Pi.subVectors(i,e),en.subVectors(t,e),Pi.cross(en).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Pi.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,i),Ms.subVectors(r,i),uc.subVectors(t,i);let l=ys.dot(uc),c=Ms.dot(uc);if(l<=0&&c<=0)return e.copy(i);fc.subVectors(t,s);let h=ys.dot(fc),d=Ms.dot(fc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ys,o);dc.subVectors(t,r);let f=ys.dot(dc),p=Ms.dot(dc);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ms,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return au.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(au,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Lo.subVectors(this.max,ur),bs.subVectors(t.a,ur),Ss.subVectors(t.b,ur),Es.subVectors(t.c,ur),Mn.subVectors(Ss,bs),bn.subVectors(Es,Ss),qn.subVectors(bs,Es);let e=[0,-Mn.z,Mn.y,0,-bn.z,bn.y,0,-qn.z,qn.y,Mn.z,0,-Mn.x,bn.z,0,-bn.x,qn.z,0,-qn.x,-Mn.y,Mn.x,0,-bn.y,bn.x,0,-qn.y,qn.x,0];return!xc(e,bs,Ss,Es,Lo)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,bs,Ss,Es,Lo))?!1:(Do.crossVectors(Mn,bn),e=[Do.x,Do.y,Do.z],xc(e,bs,Ss,Es,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},sn=[new P,new P,new P,new P,new P,new P,new P,new P],Ii=new P,Io=new Yi,bs=new P,Ss=new P,Es=new P,Mn=new P,bn=new P,qn=new P,ur=new P,Lo=new P,Do=new P,Yn=new P;function xc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Yn.fromArray(n,r);let a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),h=i.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ne=new P,No=new nt,Hp=0,be=class extends qi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=ei(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),i=ei(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),i=ei(i,this.array),s=ei(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ei(e,this.array),i=ei(i,this.array),s=ei(s,this.array),r=ei(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Cr=class extends be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends be{constructor(t,e,i){super(new Float32Array(t),e,i)}},kp=new Yi,fr=new P,_c=new P,an=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):kp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(_c)),this.expandByPoint(fr.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gp=0,xi=new re,vc=new Oe,ws=new P,ci=new Yi,dr=new Yi,ke=new P,_e=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fp(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return vc.lookAt(t),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(ci.min,dr.min),ci.expandByPoint(ke),ke.addVectors(ci.max,dr.max),ci.expandByPoint(ke)):(ci.expandByPoint(dr.min),ci.expandByPoint(dr.max))}ci.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),ke.add(ws)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new be(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new P,l[v]=new P;let c=new P,h=new P,d=new P,u=new nt,f=new nt,p=new nt,x=new P,g=new P;function m(v,T,C){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[v].add(x),a[T].add(x),a[C].add(x),l[v].add(g),l[T].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,T=M.length;v<T;++v){let C=M[v],N=C.start,F=C.count;for(let z=N,L=N+F;z<L;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let E=new P,y=new P,w=new P,S=new P;function R(v){w.fromBufferAttribute(s,v),S.copy(w);let T=a[v];E.copy(T),E.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(S,T);let N=y.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,N)}for(let v=0,T=M.length;v<T;++v){let C=M[v],N=C.start,F=C.count;for(let z=N,L=N+F;z<L;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new be(u,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yc=new P,Vp=new P,Wp=new Zt,Li=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=yc.subVectors(i,e).cross(Vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(yc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xp=0,Ni=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=as(),this.name="",this.type="Material",this.blending=yi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Li().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var rn=new P,Mc=new P,Uo=new P,Fo=new P,Pr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mc.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Fo.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Uo),a=Fo.dot(this.direction),l=-Fo.dot(Uo),c=Fo.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mc).addScaledVector(Uo,u),f}intersectSphere(t,e){if(t.radius<0)return null;rn.subVectors(t.center,this.origin);let i=rn.dot(this.direction),s=rn.dot(rn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=i.x-o.x,M=i.y-o.y,E=i.z-o.z,y=Math.abs(l),w=Math.abs(c),S=Math.abs(h),R,v,T,C,N,F,z,L,O,X,q,rt;if(y>=w&&y>=S?(T=l,F=d,O=p,rt=m,l>=0?(R=c,v=h,C=u,N=f,z=x,L=g,X=M,q=E):(R=h,v=c,C=f,N=u,z=g,L=x,X=E,q=M)):w>=S?(T=c,F=u,O=x,rt=M,c>=0?(R=h,v=l,C=f,N=d,z=g,L=p,X=E,q=m):(R=l,v=h,C=d,N=f,z=p,L=g,X=m,q=E)):(T=h,F=f,O=g,rt=E,h>=0?(R=l,v=c,C=d,N=u,z=p,L=x,X=m,q=M):(R=c,v=l,C=u,N=d,z=x,L=p,X=M,q=m)),T===0)return null;let Y=R/T,j=v/T,it=1/T,Dt=C-Y*F,Tt=N-j*F,fe=z-Y*O,ie=L-j*O,le=X-Y*rt,J=q-j*rt,tt=le*ie-J*fe,vt=Dt*J-Tt*le,Vt=fe*Tt-ie*Dt;if(s){if(tt<0||vt<0||Vt<0)return null}else if((tt<0||vt<0||Vt<0)&&(tt>0||vt>0||Vt>0))return null;let St=tt+vt+Vt;if(St===0)return null;let Xt=it*(tt*F+vt*O+Vt*rt);return(St>0?Xt<0:Xt>0)?null:this.at(Xt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lu=new re,Zn=new Pr,Bo=new an,cu=new P,Oo=new P,zo=new P,Ho=new P,bc=new P,ko=new P,hu=new P,Go=new P,Ot=class extends Oe{constructor(t=new _e,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(bc.fromBufferAttribute(d,t),o?ko.addScaledVector(bc,h):ko.addScaledVector(bc.sub(e),h))}e.add(ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Bo.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Bo,cu)===null||Zn.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(lu),!(i.boundingBox!==null&&Zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,w=E;y<w;y+=3){let S=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);s=Vo(this,m,t,i,c,h,d,S,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=Vo(this,o,t,i,c,h,d,M,E,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,w=E;y<w;y+=3){let S=y,R=y+1,v=y+2;s=Vo(this,m,t,i,c,h,d,S,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,E=g+1,y=g+2;s=Vo(this,o,t,i,c,h,d,M,E,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function qp(n,t,e,i,s,r,o,a){let l;if(t.side===Le?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===In,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:n}}function Vo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Oo),n.getVertexPosition(l,zo),n.getVertexPosition(c,Ho);let h=qp(n,t,e,i,Oo,zo,Ho,hu);if(h){let d=new P;En.getBarycoord(hu,Oo,zo,Ho,d),s&&(h.uv=En.getInterpolatedAttribute(s,a,l,c,d,new nt)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,l,c,d,new nt)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};En.getNormal(Oo,zo,Ho,u.normal),h.face=u,h.barycoord=d}return h}var jn=class extends ii{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ie,h=Ie,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends be{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new re,uu=new re,Wo=[],fu=new Yi,Yp=new re,pr=new Ot,mr=new an,fi=class extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ts),fu.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ts),mr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(i),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),uu.multiplyMatrices(i,Ts),pr.matrixWorld=uu,pr.raycast(t,Wo);for(let o=0,a=Wo.length;o<a;o++){let l=Wo[o];l.instanceId=r,l.object=this,e.push(l)}Wo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(s*this.count),s,this.count,Zs,bi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$n=new an,Zp=new nt(.5,.5),Xo=new P,zs=class{constructor(t=new Li,e=new Li,i=new Li,s=new Li,r=new Li,o=new Li){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,m-p,w-M).normalize(),s[1].setComponents(c+o,f+h,m+p,w+M).normalize(),s[2].setComponents(c+a,f+d,m+x,w+E).normalize(),s[3].setComponents(c-a,f-d,m-x,w-E).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,m-g,w-y).normalize();else if(s[4].setComponents(c-l,f-u,m-g,w-y).normalize(),e===Di)s[5].setComponents(c+l,f+u,m+g,w+y).normalize();else if(e===Ds)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=Zp.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fa=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},du=new re,Lc=new Pr,qo=new an,Yo=new P,ts=class extends Oe{constructor(t=new _e,e=new fa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;du.copy(s).invert(),Lc.copy(t.ray).applyMatrix4(du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);Yo.fromBufferAttribute(d,g),pu(Yo,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Yo.fromBufferAttribute(d,p),pu(Yo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pu(n,t,e,i,s,r,o){let a=Lc.distanceSqToPoint(n);if(a<e){let l=new P;Lc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ir=class extends ii{constructor(t=[],e=Ln,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},es=class extends ii{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wn=class extends ii{constructor(t,e,i=zi,s,r,o,a=Ie,l=Ie,c,h=Xi,d=1){if(h!==Xi&&h!==Nn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},da=class extends wn{constructor(t,e=zi,i=Ln,s,r,o=Ie,a=Ie,l,c=Xi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lr=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gt=class n extends _e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function p(x,g,m,M,E,y,w,S,R,v,T){let C=y/R,N=w/v,F=y/2,z=w/2,L=S/2,O=R+1,X=v+1,q=0,rt=0,Y=new P;for(let j=0;j<X;j++){let it=j*N-z;for(let Dt=0;Dt<O;Dt++){let Tt=Dt*C-F;Y[x]=Tt*M,Y[g]=it*E,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Dt/R),d.push(1-j/v),q+=1}}for(let j=0;j<v;j++)for(let it=0;it<R;it++){let Dt=u+it+O*j,Tt=u+it+O*(j+1),fe=u+(it+1)+O*(j+1),ie=u+(it+1)+O*j;l.push(Dt,Tt,ie),l.push(Tt,fe,ie),rt+=6}a.addGroup(f,rt,T),f+=rt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ui=class n extends _e{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=i*2+r,x=s+1,g=new P,m=new P;for(let M=0;M<=p;M++){let E=0,y=0,w=0,S=0;if(M<=i){let T=M/i,C=T*Math.PI/2;y=-h-t*Math.cos(C),w=t*Math.sin(C),S=-t*Math.cos(C),E=T*d}else if(M<=i+r){let T=(M-i)/r;y=-h+T*e,w=t,S=0,E=d+T*u}else{let T=(M-i-r)/i,C=T*Math.PI/2;y=h+t*Math.sin(C),w=t*Math.cos(C),S=t*Math.sin(C),E=d+u+T*d}let R=Math.max(0,Math.min(1,E/f)),v=0;M===0?v=.5/s:M===p&&(v=-.5/s);for(let T=0;T<=s;T++){let C=T/s,N=C*Math.PI*2,F=Math.sin(N),z=Math.cos(N);m.x=-w*z,m.y=y,m.z=w*F,a.push(m.x,m.y,m.z),g.set(-w*z,S,w*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+v,R)}if(M>0){let T=(M-1)*x;for(let C=0;C<s;C++){let N=T+C,F=T+C+1,z=M*x+C,L=M*x+C+1;o.push(N,F,z),o.push(F,L,z)}}}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Pt=class n extends _e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=i/2,m=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function M(){let y=new P,w=new P,S=0,R=(e-t)/i;for(let v=0;v<=r;v++){let T=[],C=v/r,N=C*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,L=z*l+a,O=Math.sin(L),X=Math.cos(L);w.x=N*O,w.y=-C*i+g,w.z=N*X,d.push(w.x,w.y,w.z),y.set(O,R,X).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-C),T.push(p++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let C=x[T][v],N=x[T+1][v],F=x[T+1][v+1],z=x[T][v+1];(t>0||T!==0)&&(h.push(C,N,z),S+=3),(e>0||T!==r-1)&&(h.push(N,F,z),S+=3)}c.addGroup(m,S,0),m+=S}function E(y){let w=p,S=new nt,R=new P,v=0,T=y===!0?t:e,C=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let N=p;for(let F=0;F<=s;F++){let L=F/s*l+a,O=Math.cos(L),X=Math.sin(L);R.x=T*X,R.y=g*C,R.z=T*O,d.push(R.x,R.y,R.z),u.push(0,C,0),S.x=O*.5+.5,S.y=X*.5*C+.5,f.push(S.x,S.y),p++}for(let F=0;F<s;F++){let z=w+F,L=N+F;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Je=class n extends Pt{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new re;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hs=class extends di{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pa=class extends Hs{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var mu=new P,gu=new P,Sc=new eh,Ec=new eh,wc=new eh,ks=class extends di{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(gu.subVectors(s[0],s[1]).add(s[0]),c=gu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Sc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),Ec.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),wc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ec.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),wc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Sc.calc(l),Ec.calc(l),wc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xu(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function $p(n,t){let e=1-n;return e*e*t}function Jp(n,t){return 2*(1-n)*n*t}function Kp(n,t){return n*n*t}function vr(n,t,e,i){return $p(n,t)+Jp(n,e)+Kp(n,i)}function Qp(n,t){let e=1-n;return e*e*e*t}function jp(n,t){let e=1-n;return 3*e*e*n*t}function tm(n,t){return 3*(1-n)*n*n*t}function em(n,t){return n*n*n*t}function yr(n,t,e,i,s){return Qp(n,t)+jp(n,e)+tm(n,i)+em(n,s)}var Dr=class extends di{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends di{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends di{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends di{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends di{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends di{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y),vr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(xu(a,l.x,c.x,h.x,d.x),xu(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},xa=Object.freeze({__proto__:null,ArcCurve:pa,CatmullRomCurve3:ks,CubicBezierCurve:Dr,CubicBezierCurve3:ma,EllipseCurve:Hs,LineCurve:Nr,LineCurve3:ga,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:Fr,SplineCurve:Br}),_a=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new xa[s.type]().fromJSON(s))}return this}},Or=class extends _a{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Nr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ur(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Dr(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Br(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Hs(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fi=class extends Or{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Or().fromJSON(s))}return this}};function im(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=df(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=am(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=n[u],p=n[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return zr(r,o,e,a,l,c,0),o}function df(n,t,e,i,s){let r;if(s===_m(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=_u(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=_u(o/i|0,n[o],n[o+1],r);return r&&Gs(r,r.next)&&(kr(r),r=r.next),r}function is(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Gs(e,e.next)||Re(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&fm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?sm(n,i,s,r):nm(n)){t.push(l.i,n.i,c.i),kr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=rm(is(n),t),zr(n,t,e,i,s,r,2)):o===2&&om(n,t,e,i,s,r):zr(is(n),t,e,i,s,r,1);break}}}function nm(n){let t=n.prev,e=n,i=n.next;if(Re(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&gr(s,a,r,l,o,c,p.x,p.y)&&Re(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function sm(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Re(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),g=Math.max(h,d,u),m=Dc(f,p,t,e,i),M=Dc(x,g,t,e,i),E=n.prevZ,y=n.nextZ;for(;E&&E.z>=m&&y&&y.z<=M;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=g&&E!==s&&E!==o&&gr(a,h,l,d,c,u,E.x,E.y)&&Re(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&gr(a,h,l,d,c,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=g&&E!==s&&E!==o&&gr(a,h,l,d,c,u,E.x,E.y)&&Re(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&gr(a,h,l,d,c,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Gs(i,s)&&mf(i,e,e.next,s)&&Hr(i,s)&&Hr(s,i)&&(t.push(i.i,e.i,s.i),kr(e),kr(e.next),e=n=s),e=e.next}while(e!==n);return is(e)}function om(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mm(o,a)){let l=gf(o,a);o=is(o,o.next),l=is(l,l.next),zr(o,t,e,i,s,r,0),zr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function am(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=df(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(pm(c))}s.sort(lm);for(let r=0;r<s.length;r++)e=cm(s[r],e);return e}function lm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function cm(n,t){let e=hm(n,t);if(!e)return t;let i=gf(e,n);return is(i,i.next),is(e,e.next)}function hm(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Gs(n,e))return e;do{if(Gs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&pf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Hr(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&um(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function um(n,t){return Re(n.prev,n,t.prev)<0&&Re(t.next,n,n.next)<0}function fm(n,t,e,i){let s=n;do s.z===0&&(s.z=Dc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dm(s)}function dm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Dc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function pm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function pf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function gr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&pf(n,t,e,i,s,r,o,a)}function mm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!gm(n,t)&&(Hr(n,t)&&Hr(t,n)&&xm(n,t)&&(Re(n.prev,n,t.prev)||Re(n,t.prev,t))||Gs(n,t)&&Re(n.prev,n,n.next)>0&&Re(t.prev,t,t.next)>0)}function Re(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Gs(n,t){return n.x===t.x&&n.y===t.y}function mf(n,t,e,i){let s=$o(Re(n,t,e)),r=$o(Re(n,t,i)),o=$o(Re(e,i,n)),a=$o(Re(e,i,t));return!!(s!==r&&o!==a||s===0&&Zo(n,e,t)||r===0&&Zo(n,i,t)||o===0&&Zo(e,n,i)||a===0&&Zo(e,t,i))}function Zo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $o(n){return n>0?1:n<0?-1:0}function gm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Hr(n,t){return Re(n.prev,n,n.next)<0?Re(n,t,n.next)>=0&&Re(n,n.prev,t)>=0:Re(n,t,n.prev)<0||Re(n,n.next,t)<0}function xm(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function gf(n,t){let e=Nc(n.i,n.x,n.y),i=Nc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function _u(n,t,e,i){let s=Nc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _m(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Uc=class{static triangulate(t,e,i=2){return im(t,e,i)}},Jn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];vu(t),yu(i,t);let o=t.length;e.forEach(vu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,yu(i,e[l]);let a=Uc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function yu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Zi=class n extends _e{constructor(t=new Fi([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:vm,E,y=!1,w,S,R,v;if(m){E=m.getSpacedPoints(h),y=!0,u=!1;let et=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,et),S=new P,R=new P,v=new P}u||(g=0,f=0,p=0,x=0);let T=a.extractPoints(c),C=T.shape,N=T.holes;if(!Jn.isClockWise(C)){C=C.reverse();for(let et=0,ot=N.length;et<ot;et++){let at=N[et];Jn.isClockWise(at)&&(N[et]=at.reverse())}}function z(et){let at=10000000000000001e-36,lt=et[0];for(let ft=1;ft<=et.length;ft++){let zt=ft%et.length,Bt=et[zt],qt=Bt.x-lt.x,$t=Bt.y-lt.y,I=qt*qt+$t*$t,de=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(lt.x),Math.abs(lt.y)),ne=at*de*de;if(I<=ne){et.splice(zt,1),ft--;continue}lt=Bt}}z(C),N.forEach(z);let L=N.length,O=C;for(let et=0;et<L;et++){let ot=N[et];C=C.concat(ot)}function X(et,ot,at){return ot||Wt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ot,at)}let q=C.length;function rt(et,ot,at){let lt,ft,zt,Bt=et.x-ot.x,qt=et.y-ot.y,$t=at.x-et.x,I=at.y-et.y,de=Bt*Bt+qt*qt,ne=Bt*I-qt*$t;if(Math.abs(ne)>Number.EPSILON){let A=Math.sqrt(de),_=Math.sqrt($t*$t+I*I),B=ot.x-qt/A,V=ot.y+Bt/A,Z=at.x-I/_,ct=at.y+$t/_,ut=((Z-B)*I-(ct-V)*$t)/(Bt*I-qt*$t);lt=B+Bt*ut-et.x,ft=V+qt*ut-et.y;let $=lt*lt+ft*ft;if($<=2)return new nt(lt,ft);zt=Math.sqrt($/2)}else{let A=!1;Bt>Number.EPSILON?$t>Number.EPSILON&&(A=!0):Bt<-Number.EPSILON?$t<-Number.EPSILON&&(A=!0):Math.sign(qt)===Math.sign(I)&&(A=!0),A?(lt=-qt,ft=Bt,zt=Math.sqrt(de)):(lt=Bt,ft=qt,zt=Math.sqrt(de/2))}return new nt(lt/zt,ft/zt)}let Y=[];for(let et=0,ot=O.length,at=ot-1,lt=et+1;et<ot;et++,at++,lt++)at===ot&&(at=0),lt===ot&&(lt=0),Y[et]=rt(O[et],O[at],O[lt]);let j=[],it,Dt=Y.concat();for(let et=0,ot=L;et<ot;et++){let at=N[et];it=[];for(let lt=0,ft=at.length,zt=ft-1,Bt=lt+1;lt<ft;lt++,zt++,Bt++)zt===ft&&(zt=0),Bt===ft&&(Bt=0),it[lt]=rt(at[lt],at[zt],at[Bt]);j.push(it),Dt=Dt.concat(it)}let Tt;if(g===0)Tt=Jn.triangulateShape(O,N);else{let et=[],ot=[];for(let at=0;at<g;at++){let lt=at/g,ft=f*Math.cos(lt*Math.PI/2),zt=p*Math.sin(lt*Math.PI/2)+x;for(let Bt=0,qt=O.length;Bt<qt;Bt++){let $t=X(O[Bt],Y[Bt],zt);vt($t.x,$t.y,-ft),lt===0&&et.push($t)}for(let Bt=0,qt=L;Bt<qt;Bt++){let $t=N[Bt];it=j[Bt];let I=[];for(let de=0,ne=$t.length;de<ne;de++){let A=X($t[de],it[de],zt);vt(A.x,A.y,-ft),lt===0&&I.push(A)}lt===0&&ot.push(I)}}Tt=Jn.triangulateShape(et,ot)}let fe=Tt.length,ie=p+x;for(let et=0;et<q;et++){let ot=u?X(C[et],Dt[et],ie):C[et];y?(R.copy(w.normals[0]).multiplyScalar(ot.x),S.copy(w.binormals[0]).multiplyScalar(ot.y),v.copy(E[0]).add(R).add(S),vt(v.x,v.y,v.z)):vt(ot.x,ot.y,0)}for(let et=1;et<=h;et++)for(let ot=0;ot<q;ot++){let at=u?X(C[ot],Dt[ot],ie):C[ot];y?(R.copy(w.normals[et]).multiplyScalar(at.x),S.copy(w.binormals[et]).multiplyScalar(at.y),v.copy(E[et]).add(R).add(S),vt(v.x,v.y,v.z)):vt(at.x,at.y,d/h*et)}for(let et=g-1;et>=0;et--){let ot=et/g,at=f*Math.cos(ot*Math.PI/2),lt=p*Math.sin(ot*Math.PI/2)+x;for(let ft=0,zt=O.length;ft<zt;ft++){let Bt=X(O[ft],Y[ft],lt);vt(Bt.x,Bt.y,d+at)}for(let ft=0,zt=N.length;ft<zt;ft++){let Bt=N[ft];it=j[ft];for(let qt=0,$t=Bt.length;qt<$t;qt++){let I=X(Bt[qt],it[qt],lt);y?vt(I.x,I.y+E[h-1].y,E[h-1].x+at):vt(I.x,I.y,d+at)}}}le(),J();function le(){let et=s.length/3;if(u){let ot=0,at=q*ot;for(let lt=0;lt<fe;lt++){let ft=Tt[lt];Vt(ft[2]+at,ft[1]+at,ft[0]+at)}ot=h+g*2,at=q*ot;for(let lt=0;lt<fe;lt++){let ft=Tt[lt];Vt(ft[0]+at,ft[1]+at,ft[2]+at)}}else{for(let ot=0;ot<fe;ot++){let at=Tt[ot];Vt(at[2],at[1],at[0])}for(let ot=0;ot<fe;ot++){let at=Tt[ot];Vt(at[0]+q*h,at[1]+q*h,at[2]+q*h)}}i.addGroup(et,s.length/3-et,0)}function J(){let et=s.length/3,ot=0;tt(O,ot),ot+=O.length;for(let at=0,lt=N.length;at<lt;at++){let ft=N[at];tt(ft,ot),ot+=ft.length}i.addGroup(et,s.length/3-et,1)}function tt(et,ot){let at=et.length;for(;--at>=0;){let lt=at,ft=at-1;ft<0&&(ft=et.length-1);for(let zt=0,Bt=h+g*2;zt<Bt;zt++){let qt=q*zt,$t=q*(zt+1),I=ot+lt+qt,de=ot+ft+qt,ne=ot+ft+$t,A=ot+lt+$t;St(I,de,ne,A)}}}function vt(et,ot,at){l.push(et),l.push(ot),l.push(at)}function Vt(et,ot,at){Xt(et),Xt(ot),Xt(at);let lt=s.length/3,ft=M.generateTopUV(i,s,lt-3,lt-2,lt-1);ge(ft[0]),ge(ft[1]),ge(ft[2])}function St(et,ot,at,lt){Xt(et),Xt(ot),Xt(lt),Xt(ot),Xt(at),Xt(lt);let ft=s.length/3,zt=M.generateSideWallUV(i,s,ft-6,ft-3,ft-2,ft-1);ge(zt[0]),ge(zt[1]),ge(zt[3]),ge(zt[1]),ge(zt[2]),ge(zt[3])}function Xt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function ge(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ym(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xa[s.type]().fromJSON(s)),new n(i,t.options)}},vm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-d),new nt(u,1-p),new nt(x,1-m)]:[new nt(a,1-l),new nt(h,1-d),new nt(f,1-p),new nt(g,1-m)]}};function ym(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ln=class n extends _e{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=te(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new P,u=new nt,f=new P,p=new P,x=new P,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=e;M++){let E=i+M*h*s,y=Math.sin(E),w=Math.cos(E);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*y,d.y=t[S].y,d.z=t[S].x*w,o.push(d.x,d.y,d.z),u.x=M/e,u.y=S/(t.length-1),a.push(u.x,u.y);let R=l[3*S+0]*y,v=l[3*S+1],T=l[3*S+0]*w;c.push(R,v,T)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let y=E+M*t.length,w=y,S=y+t.length,R=y+t.length+1,v=y+1;r.push(w,S,v),r.push(R,v,S)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Bi=class n extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let E=0;E<c;E++){let y=E*d-r;p.push(y,-M,0),x.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let E=M+c*m,y=M+c*(m+1),w=M+1+c*(m+1),S=M+1+c*m;f.push(E,y,S),f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var At=class n extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let M=[],E=m/i,y=o+E*a,w=t*Math.cos(y),S=Math.sqrt(t*t-w*w),R=0;m===0&&o===0?R=.5/e:m===i&&l===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){let T=v/e,C=s+T*r;d.x=-S*Math.cos(C),d.y=w,d.z=S*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+R,1-E),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let E=h[m][M+1],y=h[m][M],w=h[m+1][M],S=h[m+1][M+1];(m!==0||o>0)&&f.push(E,y,S),(m!==i-1||l<Math.PI)&&f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ce=class n extends _e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,M=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,y=(s+1)*x+g;l.push(m,M,y),l.push(M,E,y)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Gr=class n extends _e{constructor(t=new Fr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new nt,h=new P,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function x(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),M(),m()}function g(E){h=t.getPointAt(E/e,h);let y=o.normals[E],w=o.binormals[E];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,v=Math.sin(R),T=-Math.cos(R);l.x=T*y.x+v*w.x,l.y=T*y.y+v*w.y,l.z=T*y.z+v*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=e;E++)for(let y=1;y<=s;y++){let w=(s+1)*(E-1)+(y-1),S=(s+1)*E+(y-1),R=(s+1)*E+y,v=(s+1)*(E-1)+y;p.push(w,S,v),p.push(S,R,v)}}function M(){for(let E=0;E<=e;E++)for(let y=0;y<=s;y++)c.x=E/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new xa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ls(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Mu(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Mu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ke(n){let t={};for(let e=0;e<n.length;e++){let i=ls(n[e]);for(let s in i)t[s]=i[s]}return t}function Mu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ih(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var hn={clone:ls,merge:Ke},bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,he=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new re().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vs=class extends he{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tn=class extends Ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vr=class extends Ni{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Wr=class extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$s,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},va=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Tc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var An=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ma=class extends An{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pc:r=t,a=2*e-i;break;case Ic:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:o=t,l=2*i-e;break;case Ic:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,E=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+M*o[c+w]+E*o[l+w]+y*o[d+w];return r}},ba=class extends An{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Sa=class extends An{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends An{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(s-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,M=d[m],E=d[m+1],y=t*u+p*2,w=h[y],S=h[y+1],R=wm(i,e,M,w,s);r[p]=xf(R,x,E,S,g)}return r}};function xf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Em(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function wm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=xf(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Em(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var pi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Tc(t.settings)&&(i.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break;case Rc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Tc(this.settings)&&(bu(this.settings.inTangents,t),bu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&dp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=la;var Rn=class extends pi{constructor(t,e,i){super(t,e,i)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=Mr;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};wa.prototype.ValueTypeName="color";var Ta=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};Ta.prototype.ValueTypeName="number";var Aa=class extends An{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Be.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xr=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends pi{constructor(t,e,i){super(t,e,i)}};Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=Mr;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends pi{constructor(t,e,i,s){super(t,e,i,s)}};Ra.prototype.ValueTypeName="vector";var Ca=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_f=new Ca,Pa=class{constructor(t){this.manager=t!==void 0?t:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},qr=class extends Ws{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ac=new re,Su=new P,Eu=new P,Yr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ac,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jo=new P,Ko=new Be,Wi=new P,Zr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jo,Ko,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Jo,Ko,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Ko,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sn=new P,wu=new nt,Tu=new nt,Ve=class extends Zr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Tu),e.subVectors(Tu,wu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fc=class extends Yr{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0}},$r=class extends Ws{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Pn=class extends Zr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bc=class extends Yr{constructor(){super(new Pn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Cs=1,Ia=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let l=new Ve(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},La=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Kr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Tm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tm(){this._document.hidden===!1&&this.reset()}var nh="\\[\\]\\.:\\/",Am=new RegExp("["+nh+"]","g"),sh="[^"+nh+"]",Rm="[^"+nh.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",sh),Pm=/(WCOD+)?/.source.replace("WCOD",Rm),Im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),Lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Dm=new RegExp("^"+Cm+Pm+Im+Lm+"$"),Nm=["material","materials","bones","map"],Oc=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Am,"")}static parseTrackName(t){let e=Dm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Nm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Oc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var py=new Float32Array(1);var hh=class hh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};hh.prototype.isMatrix2=!0;var zc=hh;function rh(n,t,e,i){let s=Um(i);switch(e){case Jc:return n*t;case Zs:return n*t/s.components*s.byteLength;case ka:return n*t/s.components*s.byteLength;case Un:return n*t*2/s.components*s.byteLength;case Ga:return n*t*2/s.components*s.byteLength;case Kc:return n*t*3/s.components*s.byteLength;case Si:return n*t*4/s.components*s.byteLength;case Va:return n*t*4/s.components*s.byteLength;case oo:case ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(n,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(t,8)/2;case Za:case $a:case Ka:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ja:case ho:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xl:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*8;case uo:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Um(n){switch(n){case si:case qc:return{byteLength:1,components:1};case qs:case Yc:case qe:return{byteLength:2,components:1};case za:case Ha:return{byteLength:2,components:4};case zi:case Oa:case bi:return{byteLength:4,components:1};case Zc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hf(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gm(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f0=`#define PI 3.141592653589793
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
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
#endif`,k0=`uniform sampler2D dfgLUT;
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
}`,G0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,hx=`#define NORMAL
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
}`,ux=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,px=`#define STANDARD
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
}`,mx=`#define TOON
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
}`,gx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Vm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:Zm,aomap_fragment:$m,aomap_pars_fragment:Jm,batching_pars_vertex:Km,batching_vertex:Qm,begin_vertex:jm,beginnormal_vertex:t0,bsdfs:e0,iridescence_fragment:i0,bumpmap_pars_fragment:n0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:a0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:f0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:x0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:y0,envmap_fragment:M0,envmap_common_pars_fragment:b0,envmap_pars_fragment:S0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:U0,envmap_vertex:w0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:I0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:F0,lights_toon_pars_fragment:B0,lights_phong_fragment:O0,lights_phong_pars_fragment:z0,lights_physical_fragment:H0,lights_physical_pars_fragment:k0,lights_fragment_begin:G0,lights_fragment_maps:V0,lights_fragment_end:W0,lightprobes_pars_fragment:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:$0,map_fragment:J0,map_pars_fragment:K0,map_particle_fragment:Q0,map_particle_pars_fragment:j0,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ig,morphcolor_vertex:ng,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:xg,packing:_g,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:bg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Lg,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:Ug,tonemapping_pars_fragment:Fg,transmission_fragment:Bg,transmission_pars_fragment:Og,uv_pars_fragment:zg,uv_pars_vertex:Hg,uv_vertex:kg,worldpos_vertex:Gg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Zg,depth_vert:$g,depth_frag:Jg,distance_vert:Kg,distance_frag:Qg,equirect_vert:jg,equirect_frag:tx,linedashed_vert:ex,linedashed_frag:ix,meshbasic_vert:nx,meshbasic_frag:sx,meshlambert_vert:rx,meshlambert_frag:ox,meshmatcap_vert:ax,meshmatcap_frag:lx,meshnormal_vert:cx,meshnormal_frag:hx,meshphong_vert:ux,meshphong_frag:fx,meshphysical_vert:dx,meshphysical_frag:px,meshtoon_vert:mx,meshtoon_frag:gx,points_vert:xx,points_frag:_x,shadow_vert:vx,shadow_frag:yx,sprite_vert:Mx,sprite_frag:bx},_t={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ki={basic:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ke([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ke([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ht(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ke([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ke([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ke([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ke([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Ke([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Ke([_t.lights,_t.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Ki.physical={uniforms:Ke([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var bl={r:0,b:0,g:0},Sx=new re,kf=new Zt;kf.set(-1,0,0,0,1,0,0,0,1);function Ex(n,t,e,i,s,r){let o=new ht(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let y=M.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(M){let E=!1,y=f(M);y===null?g(o,a):y&&y.isColor&&(g(y,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===so)?(c===void 0&&(c=new Ot(new Gt(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:ls(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kf),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ue,(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ot(new Bi(2,2),new he({name:"BackgroundMaterial",uniforms:ls(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(bl,ih(n)),e.buffers.color.setClear(bl.r,bl.g,bl.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:x,dispose:m}}function wx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(N,F,z,L,O){let X=!1,q=d(N,L,z,F);r!==q&&(r=q,c(r.object)),X=f(N,L,z,O),X&&p(N,L,z,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(N,F,z,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,F,z,L){let O=L.wireframe===!0,X=i[F.id];X===void 0&&(X={},i[F.id]=X);let q=N.isInstancedMesh===!0?N.id:0,rt=X[q];rt===void 0&&(rt={},X[q]=rt);let Y=rt[z.id];Y===void 0&&(Y={},rt[z.id]=Y);let j=Y[O];return j===void 0&&(j=u(l()),Y[O]=j),j}function u(N){let F=[],z=[],L=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,F,z,L){let O=r.attributes,X=F.attributes,q=0,rt=z.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let it=O[Y],Dt=X[Y];if(Dt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Dt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Dt=N.instanceColor)),it===void 0||it.attribute!==Dt||Dt&&it.data!==Dt.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(N,F,z,L){let O={},X=F.attributes,q=0,rt=z.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let it=X[Y];it===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));let Dt={};Dt.attribute=it,it&&it.data&&(Dt.data=it.data),O[Y]=Dt,q++}r.attributes=O,r.attributesNum=q,r.index=L}function x(){let N=r.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function g(N){m(N,0)}function m(N,F){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),O[N]!==F&&(n.vertexAttribDivisor(N,F),O[N]=F)}function M(){let N=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==N[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function E(N,F,z,L,O,X,q){q===!0?n.vertexAttribIPointer(N,F,z,O,X):n.vertexAttribPointer(N,F,z,L,O,X)}function y(N,F,z,L){x();let O=L.attributes,X=z.getAttributes(),q=F.defaultAttributeValues;for(let rt in X){let Y=X[rt];if(Y.location>=0){let j=O[rt];if(j===void 0&&(rt==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),rt==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let it=j.normalized,Dt=j.itemSize,Tt=t.get(j);if(Tt===void 0)continue;let fe=Tt.buffer,ie=Tt.type,le=Tt.bytesPerElement,J=ie===n.INT||ie===n.UNSIGNED_INT||j.gpuType===Oa;if(j.isInterleavedBufferAttribute){let tt=j.data,vt=tt.stride,Vt=j.offset;if(tt.isInstancedInterleavedBuffer){for(let St=0;St<Y.locationSize;St++)m(Y.location+St,tt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let St=0;St<Y.locationSize;St++)g(Y.location+St);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let St=0;St<Y.locationSize;St++)E(Y.location+St,Dt/Y.locationSize,ie,it,vt*le,(Vt+Dt/Y.locationSize*St)*le,J)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt,j.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<Y.locationSize;tt++)g(Y.location+tt);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let tt=0;tt<Y.locationSize;tt++)E(Y.location+tt,Dt/Y.locationSize,ie,it,Dt*le,Dt/Y.locationSize*tt*le,J)}}else if(q!==void 0){let it=q[rt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(Y.location,it);break;case 3:n.vertexAttrib3fv(Y.location,it);break;case 4:n.vertexAttrib4fv(Y.location,it);break;default:n.vertexAttrib1fv(Y.location,it)}}}}M()}function w(){T();for(let N in i){let F=i[N];for(let z in F){let L=F[z];for(let O in L){let X=L[O];for(let q in X)h(X[q].object),delete X[q];delete L[O]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let z in F){let L=F[z];for(let O in L){let X=L[O];for(let q in X)h(X[q].object),delete X[q];delete L[O]}}delete i[N.id]}function R(N){for(let F in i){let z=i[F];for(let L in z){let O=z[L];if(O[N.id]===void 0)continue;let X=O[N.id];for(let q in X)h(X[q].object),delete X[q];delete O[N.id]}}}function v(N){for(let F in i){let z=i[F],L=N.isInstancedMesh===!0?N.id:0,O=z[L];if(O!==void 0){for(let X in O){let q=O[X];for(let rt in q)h(q[rt].object),delete q[rt];delete O[X]}delete z[L],Object.keys(z).length===0&&delete i[F]}}}function T(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Tx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ax(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Si&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==si&&R!==bi&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:S}}function Rx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Li,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:i,E=M*4,y=m.clippingState||null;l.value=y,y=h(p,u,E,f);for(let w=0;w!==E;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=f;E!==x;++E,y+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ks=4,Cx=6,Px=20,Ix=256,po=new Pn,vf=new ht,uh=null,fh=0,dh=0,ph=!1,Lx=new P,cs=new P,js=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Lx}=r;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=ph,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ln||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:qe,format:Si,colorSpace:br,depthBuffer:!1},s=yf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dx(r)),this._blurMaterial=Ux(r,t,e),this._ggxMaterial=Nx(r,t,e)}return s}_compileMaterial(t){let e=new Ot(new _e,t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,i,s,r){let l=new Ve(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vf),d.toneMapping=Oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Gt,new _i({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(vf),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let w=this._cubeSize;Js(s,y*w,E>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ln||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,po)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-Ks?i-p+Ks:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Js(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,po),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Js(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,po)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ks?s-this._lodMax+Ks:0),u=4*(this._cubeSize-h);Js(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,po)}};function Dx(n){let t=[],e=[],i=n,s=n-Ks+1+Cx;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,E=m>2?0:-1,y=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];p.set(y,f*u*m);for(let w=0;w<u;w++){let S=h[w*2]*2-1,R=h[w*2+1]*2-1;m===0?cs.set(1,R,S):m===1?cs.set(-S,1,-R):m===2?cs.set(-S,R,1):m===3?cs.set(-1,R,-S):m===4?cs.set(-S,-1,R):cs.set(S,R,-1),cs.toArray(x,(m*u+w)*f)}}let g=new _e;g.setAttribute("position",new be(p,f)),g.setAttribute("outputDirection",new be(x,f)),e.push(new Ot(g,null)),i>Ks&&i--}return{lodMeshes:e,sizeLods:t}}function yf(n,t,e){let i=new Ue(n,t,e);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Nx(n,t,e){return new he({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ux(n,t,e){return new he({name:"SphericalGaussianBlur",defines:{SAMPLES:Px,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Mf(){return new he({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function bf(){return new he({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var El=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new he({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:vi});r.uniforms.tEquirect.value=e;let o=new Ot(s,r),a=e.minFilter;return e.minFilter===Dn&&(e.minFilter=We),new Ia(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Fx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ua||f===Fa)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new El(p.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ua||f===Fa,x=f===Ln||f===os;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new js(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new js(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ua?u.mapping=Ln:f===Fa&&(u.mapping=os),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Bx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Kn("WebGLRenderer: "+i+" extension not supported."),s}}}function Ox(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let E=0,y=M.length;E<y;E+=3){let w=M[E+0],S=M[E+1],R=M[E+2];u.push(w,S,S,R,R,w)}}else{let M=p.array;x=p.version;for(let E=0,y=M.length/3-1;E<y;E+=3){let w=E+0,S=E+1,R=E+2;u.push(w,S,S,R,R,w)}}let g=new(p.count>=65535?Cr:Rr)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function zx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Hx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kx(n,t,e){let i=new WeakMap,s=new Ae;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let y=a.attributes.position.count*E,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*w*4*d),R=new wr(S,y,w,d);R.type=bi,R.needsUpdate=!0;let v=E*4;for(let C=0;C<d;C++){let N=g[C],F=m[C],z=M[C],L=y*w*4*C;for(let O=0;O<N.count;O++){let X=O*v;f===!0&&(s.fromBufferAttribute(N,O),S[L+X+0]=s.x,S[L+X+1]=s.y,S[L+X+2]=s.z,S[L+X+3]=0),p===!0&&(s.fromBufferAttribute(F,O),S[L+X+4]=s.x,S[L+X+5]=s.y,S[L+X+6]=s.z,S[L+X+7]=0),x===!0&&(s.fromBufferAttribute(z,O),S[L+X+8]=s.x,S[L+X+9]=s.y,S[L+X+10]=s.z,S[L+X+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new nt(y,w)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Gx(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Vx={[Qr]:"LINEAR_TONE_MAPPING",[jr]:"REINHARD_TONE_MAPPING",[to]:"CINEON_TONE_MAPPING",[eo]:"ACES_FILMIC_TONE_MAPPING",[no]:"AGX_TONE_MAPPING",[rs]:"NEUTRAL_TONE_MAPPING",[io]:"CUSTOM_TONE_MAPPING"};function Wx(n,t,e,i,s,r){let o=new Ue(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _e;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new Vs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ot(c,h),u=new Pn(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],E=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),l!==null&&l.setSize(y,w);for(let S=0;S<M.length;S++){let R=M[S];R.setSize&&R.setSize(y,w)}},this.setEffects=function(y){M=y,E=M.length>0&&M[0].isRenderPass===!0;let w=o.width,S=o.height;M.length>0&&a===null&&(a=new Ue(w,S,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(w,S,{type:qe,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let v=M[R];v.setSize&&v.setSize(w,S)}},this.begin=function(y,w){if(x||y.toneMapping===Oi&&M.length===0)return!1;if(m=w,w!==null){let S=w.width,R=w.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return E===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Oi,!0},this.hasRenderPass=function(){return E},this.end=function(y,w){y.toneMapping=g,x=!0;let S=o,R=a;for(let v=0;v<M.length;v++){let T=M[v];T.enabled!==!1&&(T.render(y,R,S,w),T.needsSwap!==!1&&(S=R,R=R===a?l:a))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},ee.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let v=Vx[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gf=new ii,xh=new wn(1,1),Vf=new wr,Wf=new ua,Xf=new Ir,Sf=[],Ef=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function tr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Sf[s];if(r===void 0&&(r=new Float32Array(s),Sf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Al(n,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function Yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function Zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function $x(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;Af.set(i),n.uniformMatrix2fv(this.addr,!1,Af),He(e,i)}}function Jx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),He(e,i)}}function Kx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;wf.set(i),n.uniformMatrix4fv(this.addr,!1,wf),He(e,i)}}function Qx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function e_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function i_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function s_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function o_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xh.compareFunction=e.isReversedDepthBuffer()?Ml:yl,r=xh):r=Gf,e.setTexture2D(t||r,s)}function a_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wf,s)}function l_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xf,s)}function c_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vf,s)}function h_(n){switch(n){case 5126:return Xx;case 35664:return qx;case 35665:return Yx;case 35666:return Zx;case 35674:return $x;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return jx;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return i_;case 36294:return n_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function u_(n,t){n.uniform1fv(this.addr,t)}function f_(n,t){let e=tr(t,this.size,2);n.uniform2fv(this.addr,e)}function d_(n,t){let e=tr(t,this.size,3);n.uniform3fv(this.addr,e)}function p_(n,t){let e=tr(t,this.size,4);n.uniform4fv(this.addr,e)}function m_(n,t){let e=tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g_(n,t){let e=tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function x_(n,t){let e=tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function __(n,t){n.uniform1iv(this.addr,t)}function v_(n,t){n.uniform2iv(this.addr,t)}function y_(n,t){n.uniform3iv(this.addr,t)}function M_(n,t){n.uniform4iv(this.addr,t)}function b_(n,t){n.uniform1uiv(this.addr,t)}function S_(n,t){n.uniform2uiv(this.addr,t)}function E_(n,t){n.uniform3uiv(this.addr,t)}function w_(n,t){n.uniform4uiv(this.addr,t)}function T_(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=xh:o=Gf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function A_(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wf,r[o])}function R_(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xf,r[o])}function C_(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vf,r[o])}function P_(n){switch(n){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return x_;case 5124:case 35670:return __;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return b_;case 36294:return S_;case 36295:return E_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}var _h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}},vh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Rf(n,t){n.seq.push(t),n.map[t.id]=t}function I_(n,t,e){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),o=mh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rf(e,c===void 0?new _h(a,n,t):new vh(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new yh(a),Rf(e,d)),e=d}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);I_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Cf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var L_=37297,D_=0;function N_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Pf=new Zt;function U_(n){ee._getMatrix(Pf,ee.workingColorSpace,n);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Sr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function If(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+N_(n.getShaderSource(t),a)}else return r}function F_(n,t){let e=U_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var B_={[Qr]:"Linear",[jr]:"Reinhard",[to]:"Cineon",[eo]:"ACESFilmic",[no]:"AgX",[rs]:"Neutral",[io]:"Custom"};function O_(n,t){let e=B_[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new P;function z_(){ee.getLuminanceCoefficients(Sl);let n=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function k_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function G_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function go(n){return n!==""}function Lf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(n){return n.replace(V_,X_)}var W_=new Map;function X_(n,t){let e=jt[t];if(e===void 0){let i=W_.get(t);if(i!==void 0)e=jt[i],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mh(e)}var q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(n){return n.replace(q_,Y_)}function Y_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Z_={[ns]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function $_(n){return Z_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J_={[Ln]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function K_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":J_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Q_={[os]:"ENVMAP_MODE_REFRACTION"};function j_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tv={[Na]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[$u]:"ENVMAP_BLENDING_ADD"};function ev(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tv[n.combine]||"ENVMAP_BLENDING_NONE"}function iv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function nv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$_(e),c=K_(e),h=j_(e),d=ev(e),u=iv(e),f=H_(e),p=k_(r),x=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(go).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(go).join(`
`),m.length>0&&(m+=`
`)):(g=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),m=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?O_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,F_("linearToOutputTexel",e.outputColorSpace),z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=Mh(o),o=Lf(o,e),o=Df(o,e),a=Mh(a),a=Lf(a,e),a=Df(a,e),o=Nf(o),a=Nf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=M+g+o,y=M+m+a,w=Cf(s,s.VERTEX_SHADER,E),S=Cf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(S)||"",O=F.trim(),X=z.trim(),q=L.trim(),rt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,S);else{let j=If(s,w,"vertex"),it=If(s,S,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+j+`
`+it)}else O!==""?kt("WebGLProgram: Program Info Log:",O):(X===""||q==="")&&(Y=!1);Y&&(N.diagnostics={runnable:rt,programLog:O,vertexShader:{log:X,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(w),s.deleteShader(S),v=new Qs(s,x),T=G_(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,L_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var sv=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sh(t),e.set(t,i)),i}},Sh=class{constructor(t){this.id=sv++,this.code=t,this.usedTimes=0}};function rv(n){return n===Un||n===ho||n===uo}function ov(n,t,e,i,s,r){let o=new Tr,a=new bh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,C,N,F,z){let L=N.fog,O=F.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,rt=t.get(v.envMap||X,q),Y=rt&&rt.mapping===so?rt.image.height:null,j=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&kt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let it=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Dt=it!==void 0?it.length:0,Tt=0;O.morphAttributes.position!==void 0&&(Tt=1),O.morphAttributes.normal!==void 0&&(Tt=2),O.morphAttributes.color!==void 0&&(Tt=3);let fe,ie,le,J;if(j){let Se=Ki[j];fe=Se.vertexShader,ie=Se.fragmentShader}else{fe=v.vertexShader,ie=v.fragmentShader;let Se=a.getVertexShaderStage(v),pe=a.getFragmentShaderStage(v);a.update(v,Se,pe),le=Se.id,J=pe.id}let tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Xt=!!v.map,ge=!!v.matcap,et=!!rt,ot=!!v.aoMap,at=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,zt=!!v.displacementMap,Bt=!!v.emissiveMap,qt=!!v.metalnessMap,$t=!!v.roughnessMap,I=v.anisotropy>0,de=v.clearcoat>0,ne=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,V=v.transmission>0,Z=I&&!!v.anisotropyMap,ct=de&&!!v.clearcoatMap,ut=de&&!!v.clearcoatNormalMap,$=de&&!!v.clearcoatRoughnessMap,Q=_&&!!v.iridescenceMap,dt=_&&!!v.iridescenceThicknessMap,Nt=B&&!!v.sheenColorMap,xt=B&&!!v.sheenRoughnessMap,pt=!!v.specularMap,Ut=!!v.specularColorMap,Ht=!!v.specularIntensityMap,Kt=V&&!!v.transmissionMap,U=V&&!!v.thicknessMap,mt=!!v.gradientMap,K=!!v.alphaMap,gt=v.alphaTest>0,bt=!!v.alphaHash,st=!!v.extensions,Ft=Oi;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let It={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:fe,fragmentShader:ie,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:ge,envMap:et,envMapMode:et&&rt.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:at,bumpMap:lt,normalMap:ft,displacementMap:zt,emissiveMap:Bt,normalMapObjectSpace:ft&&v.normalMapType===Qu,normalMapTangentSpace:ft&&v.normalMapType===$s,packedNormalMap:ft&&v.normalMapType===$s&&rv(v.normalMap.format),metalnessMap:qt,roughnessMap:$t,anisotropy:I,anisotropyMap:Z,clearcoat:de,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:$,dispersion:ne,retroreflection:A,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:dt,sheen:B,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:pt,specularColorMap:Ut,specularIntensityMap:Ht,transmission:V,transmissionMap:Kt,thicknessMap:U,gradientMap:mt,opaque:v.transparent===!1&&v.blending===yi&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:gt,alphaHash:bt,combine:v.combine,mapUv:Xt&&p(v.map.channel),aoMapUv:ot&&p(v.aoMap.channel),lightMapUv:at&&p(v.lightMap.channel),bumpMapUv:lt&&p(v.bumpMap.channel),normalMapUv:ft&&p(v.normalMap.channel),displacementMapUv:zt&&p(v.displacementMap.channel),emissiveMapUv:Bt&&p(v.emissiveMap.channel),metalnessMapUv:qt&&p(v.metalnessMap.channel),roughnessMapUv:$t&&p(v.roughnessMap.channel),anisotropyMapUv:Z&&p(v.anisotropyMap.channel),clearcoatMapUv:ct&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&p(v.sheenRoughnessMap.channel),specularMapUv:pt&&p(v.specularMap.channel),specularColorMapUv:Ut&&p(v.specularColorMap.channel),specularIntensityMapUv:Ht&&p(v.specularIntensityMap.channel),transmissionMapUv:Kt&&p(v.transmissionMap.channel),thicknessMapUv:U&&p(v.thicknessMap.channel),alphaMapUv:K&&p(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||I),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Xt||K),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Tt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ni,flipSided:v.side===Le,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let T=f[v.type],C;if(T){let N=Ki[T];C=hn.clone(N.uniforms)}else C=v.uniforms;return C}function y(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new nv(n,T,v,s),c.push(C),h.set(T,C)),C}function w(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:R}}function av(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ff(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},n[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let E=a(u,f,p,x,g,m);p.transmission>0?i.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(u,f,p,x,g,m){let M=a(u,f,p,x,g,m);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||lv),i.length>1&&i.sort(f||Ff),s.length>1&&s.sort(f||Ff)}function d(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function cv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Bf,n.set(i,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ht};break;case"SpotLight":e={position:new P,direction:new P,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function uv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fv=0;function dv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function pv(n){let t=new hv,e=uv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new re,o=new re;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,E=0,y=0,w=0,S=0,R=0,v=0,T=0,C=0;c.sort(dv);for(let F=0,z=c.length;F<z;F++){let L=c[F],O=L.color,X=L.intensity,q=L.distance,rt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Un?rt=L.shadow.map.texture:rt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*X,d+=O.g*X,u+=O.b*X;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],X);C++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=it,i.sunShadowMap[p]=rt;let Dt=j.getViewportCount();for(let Tt=0;Tt<Dt;Tt++)i.sunShadowMatrix[x+Tt]=j.getMatrix(Tt),i.sunShadowCascade[x+Tt]=j._cascadeData[Tt];x+=Dt,p++}i.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[g]=it,i.directionalShadowMap[g]=rt,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=Y,g++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(X),Y.distance=q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[M]=Y;let j=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,j.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[M]=j.matrix,L.castShadow){let it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[M]=it,i.spotShadowMap[M]=rt,R++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(O).multiplyScalar(X),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=Y,E++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let j=L.shadow,it=e.get(L);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[m]=it,i.pointShadowMap[m]=rt,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(X),Y.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[y]=Y,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==w||N.numPointShadows!==S||N.numSpotShadows!==R||N.numSpotMaps!==v||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=E,i.point.length=m,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=M,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=w,N.numPointShadows=S,N.numSpotShadows=R,N.numSpotMaps=v,N.numLightProbes=C,i.version=fv++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let y=c[M];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Of(n){let t=new pv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function mv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Of(n),t.set(s,[a])):r>=o.length?(a=new Of(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
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
}`,_v=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],zf=new re,mo=new P,gh=new P;function yv(n,t,e){let i=new zs,s=new nt,r=new nt,o=new Ae,a=new va,l=new ya,c={},h=e.maxTextureSize,d={[In]:Le,[Le]:In,[ni]:ni},u=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:gv,fragmentShader:xv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new _e;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ot(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let m=this.type;this.render=function(S,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Cu&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let T=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=m!==this.type;z&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=S.length;L<O;L++){let X=S[L],q=X.shadow;if(q===void 0){kt("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let rt=q.getFrameExtents();s.multiply(rt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,q.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Xs){if(X.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ue(s.x,s.y,{format:Un,type:qe,minFilter:We,magFilter:We,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new wn(s.x,s.y,bi),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=Xi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ie,q.map.depthTexture.magFilter=Ie}else X.isPointLight?(q.map=new El(s.x),q.map.depthTexture=new da(s.x,zi)):(q.map=new Ue(s.x,s.y),q.map.depthTexture=new wn(s.x,s.y,zi)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=Xi,this.type===ns?(q.map.depthTexture.compareFunction=Y?Ml:yl,q.map.depthTexture.minFilter=We,q.map.depthTexture.magFilter=We):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ie,q.map.depthTexture.magFilter=Ie);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let j=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,v);for(let it=0;it<j;it++){let Dt=q.getCamera(it);if(X.isPointLight){let Tt=q.camera,fe=q.matrix,ie=X.distance||Tt.far;ie!==Tt.far&&(Tt.far=ie,Tt.updateProjectionMatrix()),mo.setFromMatrixPosition(X.matrixWorld),Tt.position.copy(mo),gh.copy(Tt.position),gh.add(_v[it]),Tt.up.copy(vv[it]),Tt.lookAt(gh),Tt.updateMatrixWorld(),fe.makeTranslation(-mo.x,-mo.y,-mo.z),zf.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(zf,Tt.coordinateSystem,Tt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,it),n.clear();else{it===0&&(n.setRenderTarget(q.map),n.clear());let Tt=q.getViewport(it);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),F.viewport(o)}i=q.getFrustum(it),y(R,v,Dt,X,this.type)}q.isPointLightShadow!==!0&&this.type===Xs&&M(q,v),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,C,N)};function M(S,R){let v=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ue(s.x,s.y,{format:Un,type:qe}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,v,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,v,f,x,null)}function E(S,R,v,T){let C=null,N=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)C=N;else if(C=v.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=C.uuid,z=R.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let O=L[z];O===void 0&&(O=C.clone(),L[z]=O,R.addEventListener("dispose",w)),C=O}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Xs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=v}return C}function y(S,R,v,T,C){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Xs)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let z=t.update(S),L=S.material;if(Array.isArray(L)){let O=z.groups;for(let X=0,q=O.length;X<q;X++){let rt=O[X],Y=L[rt.materialIndex];if(Y&&Y.visible){let j=E(S,Y,T,C);S.onBeforeShadow(n,S,R,v,z,j,rt),n.renderBufferDirect(v,null,z,j,S,rt),S.onAfterShadow(n,S,R,v,z,j,rt)}}}else if(L.visible){let O=E(S,L,T,C);S.onBeforeShadow(n,S,R,v,z,O,null),n.renderBufferDirect(v,null,z,O,S,null),S.onAfterShadow(n,S,R,v,z,O,null)}}let F=S.children;for(let z=0,L=F.length;z<L;z++)y(F[z],R,v,T,C)}function w(S){S.target.removeEventListener("dispose",w);for(let v in c){let T=c[v],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Mv(n,t){function e(){let U=!1,mt=new Ae,K=null,gt=new Ae(0,0,0,0);return{setMask:function(bt){K!==bt&&!U&&(n.colorMask(bt,bt,bt,bt),K=bt)},setLocked:function(bt){U=bt},setClear:function(bt,st,Ft,It,Se){Se===!0&&(bt*=It,st*=It,Ft*=It),mt.set(bt,st,Ft,It),gt.equals(mt)===!1&&(n.clearColor(bt,st,Ft,It),gt.copy(mt))},reset:function(){U=!1,K=null,gt.set(-1,0,0,0)}}}function i(){let U=!1,mt=!1,K=null,gt=null,bt=null;return{setReversed:function(st){if(mt!==st){let Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=st;let It=bt;bt=null,this.setClear(It)}},getReversed:function(){return mt},setTest:function(st){st?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(st){K!==st&&!U&&(n.depthMask(st),K=st)},setFunc:function(st){if(mt&&(st=uf[st]),gt!==st){switch(st){case ta:n.depthFunc(n.NEVER);break;case ea:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case na:n.depthFunc(n.EQUAL);break;case sa:n.depthFunc(n.GEQUAL);break;case ra:n.depthFunc(n.GREATER);break;case oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=st}},setLocked:function(st){U=st},setClear:function(st){bt!==st&&(bt=st,mt&&(st=1-st),n.clearDepth(st))},reset:function(){U=!1,K=null,gt=null,bt=null,mt=!1}}}function s(){let U=!1,mt=null,K=null,gt=null,bt=null,st=null,Ft=null,It=null,Se=null;return{setTest:function(pe){U||(pe?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!U&&(n.stencilMask(pe),mt=pe)},setFunc:function(pe,Ri,Gi){(K!==pe||gt!==Ri||bt!==Gi)&&(n.stencilFunc(pe,Ri,Gi),K=pe,gt=Ri,bt=Gi)},setOp:function(pe,Ri,Gi){(st!==pe||Ft!==Ri||It!==Gi)&&(n.stencilOp(pe,Ri,Gi),st=pe,Ft=Ri,It=Gi)},setLocked:function(pe){U=pe},setClear:function(pe){Se!==pe&&(n.clearStencil(pe),Se=pe)},reset:function(){U=!1,mt=null,K=null,gt=null,bt=null,st=null,Ft=null,It=null,Se=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,E=null,y=null,w=null,S=null,R=null,v=new ht(0,0,0),T=0,C=!1,N=null,F=null,z=null,L=null,O=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,rt=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=rt>=2);let j=null,it={},Dt=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),fe=new Ae().fromArray(Dt),ie=new Ae().fromArray(Tt);function le(U,mt,K,gt){let bt=new Uint8Array(4),st=n.createTexture();n.bindTexture(U,st),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<K;Ft++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(mt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return st}let J={};J[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(n.DEPTH_TEST),o.setFunc(Ls),lt(!1),ft(Hc),tt(n.CULL_FACE),ot(vi);function tt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function vt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Vt(U,mt){return u[U]!==mt?(n.bindFramebuffer(U,mt),u[U]=mt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=mt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function St(U,mt){let K=p,gt=!1;if(U){K=f.get(mt),K===void 0&&(K=[],f.set(mt,K));let bt=U.textures;if(K.length!==bt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let st=0,Ft=bt.length;st<Ft;st++)K[st]=n.COLOR_ATTACHMENT0+st;K.length=bt.length,gt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,gt=!0);gt&&n.drawBuffers(K)}function Xt(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let ge={[ss]:n.FUNC_ADD,[Iu]:n.FUNC_SUBTRACT,[Lu]:n.FUNC_REVERSE_SUBTRACT};ge[Du]=n.MIN,ge[Nu]=n.MAX;let et={[Uu]:n.ZERO,[Fu]:n.ONE,[Bu]:n.SRC_COLOR,[Vc]:n.SRC_ALPHA,[Vu]:n.SRC_ALPHA_SATURATE,[ku]:n.DST_COLOR,[zu]:n.DST_ALPHA,[Ou]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[Gu]:n.ONE_MINUS_DST_COLOR,[Hu]:n.ONE_MINUS_DST_ALPHA,[Wu]:n.CONSTANT_COLOR,[Xu]:n.ONE_MINUS_CONSTANT_COLOR,[qu]:n.CONSTANT_ALPHA,[Yu]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(U,mt,K,gt,bt,st,Ft,It,Se,pe){if(U===vi){g===!0&&(vt(n.BLEND),g=!1);return}if(g===!1&&(tt(n.BLEND),g=!0),U!==Pu){if(U!==m||pe!==C){if((M!==ss||w!==ss)&&(n.blendEquation(n.FUNC_ADD),M=ss,w=ss),pe)switch(U){case yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mi:n.blendFunc(n.ONE,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",U);break}else switch(U){case yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",U);break}E=null,y=null,S=null,R=null,v.set(0,0,0),T=0,m=U,C=pe}return}bt=bt||mt,st=st||K,Ft=Ft||gt,(mt!==M||bt!==w)&&(n.blendEquationSeparate(ge[mt],ge[bt]),M=mt,w=bt),(K!==E||gt!==y||st!==S||Ft!==R)&&(n.blendFuncSeparate(et[K],et[gt],et[st],et[Ft]),E=K,y=gt,S=st,R=Ft),(It.equals(v)===!1||Se!==T)&&(n.blendColor(It.r,It.g,It.b,Se),v.copy(It),T=Se),m=U,C=!1}function at(U,mt){U.side===ni?vt(n.CULL_FACE):tt(n.CULL_FACE);let K=U.side===Le;mt&&(K=!K),lt(K),U.blending===yi&&U.transparent===!1?ot(vi):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let gt=U.stencilWrite;a.setTest(gt),gt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function ft(U){U!==Au?(tt(n.CULL_FACE),U!==F&&(U===Hc?n.cullFace(n.BACK):U===Ru?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),F=U}function zt(U){U!==z&&(q&&n.lineWidth(U),z=U)}function Bt(U,mt,K){U?(tt(n.POLYGON_OFFSET_FILL),(L!==mt||O!==K)&&(L=mt,O=K,o.getReversed()&&(mt=-mt),n.polygonOffset(mt,K))):vt(n.POLYGON_OFFSET_FILL)}function qt(U){U?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function $t(U){U===void 0&&(U=n.TEXTURE0+X-1),j!==U&&(n.activeTexture(U),j=U)}function I(U,mt,K){K===void 0&&(j===null?K=n.TEXTURE0+X-1:K=j);let gt=it[K];gt===void 0&&(gt={type:void 0,texture:void 0},it[K]=gt),(gt.type!==U||gt.texture!==mt)&&(j!==K&&(n.activeTexture(K),j=K),n.bindTexture(U,mt||J[U]),gt.type=U,gt.texture=mt)}function de(){let U=it[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{n.compressedTexImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function _(){try{n.texSubImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function B(){try{n.texSubImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function ct(){try{n.texStorage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function ut(){try{n.texStorage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function $(){try{n.texImage2D(...arguments)}catch(U){Wt("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){Wt("WebGLState:",U)}}function dt(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Nt(U,mt){d[U]!==mt&&(n.pixelStorei(U,mt),d[U]=mt)}function xt(U){fe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function pt(U){ie.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function Ut(U,mt){let K=c.get(mt);K===void 0&&(K=new WeakMap,c.set(mt,K));let gt=K.get(U);gt===void 0&&(gt=n.getUniformBlockIndex(mt,U.name),K.set(U,gt))}function Ht(U,mt){let gt=c.get(mt).get(U);l.get(mt)!==gt&&(n.uniformBlockBinding(mt,gt,U.__bindingPointIndex),l.set(mt,gt))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,it={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,E=null,y=null,w=null,S=null,R=null,v=new ht(0,0,0),T=0,C=!1,N=null,F=null,z=null,L=null,O=null,fe.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:vt,bindFramebuffer:Vt,drawBuffers:St,useProgram:Xt,setBlending:ot,setMaterial:at,setFlipSided:lt,setCullFace:ft,setLineWidth:zt,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:$t,bindTexture:I,unbindTexture:de,compressedTexImage2D:ne,compressedTexImage3D:A,texImage2D:$,texImage3D:Q,pixelStorei:Nt,getParameter:dt,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:ct,texStorage3D:ut,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:xt,viewport:pt,reset:Kt}}function bv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return p?new OffscreenCanvas(A,_):Er("canvas")}function g(A,_,B){let V=1,Z=ne(A);if((Z.width>B||Z.height>B)&&(V=B/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(V*Z.width),ut=Math.floor(V*Z.height);u===void 0&&(u=x(ct,ut));let $=_?x(ct,ut):u;return $.width=ct,$.height=ut,$.getContext("2d").drawImage(A,0,0,ct,ut),kt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ct+"x"+ut+")."),$}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,_,B,V,Z,ct=!1){if(A!==null){if(n[A]!==void 0)return n[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8),B===n.UNSIGNED_SHORT&&ut&&($=ut.R16_EXT),B===n.SHORT&&ut&&($=ut.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),_===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8),B===n.UNSIGNED_SHORT&&ut&&($=ut.RG16_EXT),B===n.SHORT&&ut&&($=ut.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&ut&&($=ut.RGB16_EXT),B===n.SHORT&&ut&&($=ut.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){let Q=ct?Sr:ee.getTransfer(Z);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Q===ue?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ut&&($=ut.RGBA16_EXT),B===n.SHORT&&ut&&($=ut.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function w(A,_){let B;return A?_===null||_===zi||_===Ys?B=n.DEPTH24_STENCIL8:_===bi?B=n.DEPTH32F_STENCIL8:_===qs&&(B=n.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===Ys?B=n.DEPTH_COMPONENT24:_===bi?B=n.DEPTH_COMPONENT32F:_===qs&&(B=n.DEPTH_COMPONENT16),B}function S(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ie&&A.minFilter!==We?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(A){let _=A.target;_.removeEventListener("dispose",v),N(_)}function T(A){let _=i.get(A);if(_.__webglInit===void 0)return;let B=A.source,V=f.get(B);if(V){let Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(A),Object.keys(V).length===0&&f.delete(B)}i.remove(A)}function C(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let B=A.source,V=f.get(B);delete V[_.__cacheKey],o.memory.textures--}function N(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)n.deleteFramebuffer(_.__webglFramebuffer[V]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=A.textures;for(let V=0,Z=B.length;V<Z;V++){let ct=i.get(B[V]);ct.__webglTexture&&(n.deleteTexture(ct.__webglTexture),o.memory.textures--),i.remove(B[V])}i.remove(A)}let F=0;function z(){F=0}function L(){return F}function O(A){F=A}function X(){let A=F;return A>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function q(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function rt(A,_){let B=i.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let V=A.image;if(V===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function Y(A,_){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){vt(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function j(A,_){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){vt(B,A,_);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function it(A,_){let B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Vt(B,A,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let Dt={[ui]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[aa]:n.MIRRORED_REPEAT},Tt={[Ie]:n.NEAREST,[Ju]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},fe={[tf]:n.NEVER,[of]:n.ALWAYS,[ef]:n.LESS,[yl]:n.LEQUAL,[nf]:n.EQUAL,[Ml]:n.GEQUAL,[sf]:n.GREATER,[rf]:n.NOTEQUAL};function ie(A,_){if(_.type===bi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===We||_.magFilter===Ba||_.magFilter===ro||_.magFilter===Dn||_.minFilter===We||_.minFilter===Ba||_.minFilter===ro||_.minFilter===Dn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Dt[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Dt[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Dt[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Tt[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Tt[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ie||_.minFilter!==ro&&_.minFilter!==Dn||_.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function le(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let V=_.source,Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));let ct=q(_);if(ct!==A.__cacheKey){Z[ct]===void 0&&(Z[ct]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[ct].usedTimes++;let ut=Z[A.__cacheKey];ut!==void 0&&(Z[A.__cacheKey].usedTimes--,ut.usedTimes===0&&C(_)),A.__cacheKey=ct,A.__webglTexture=Z[ct].texture}return B}function J(A,_,B){return Math.floor(Math.floor(A/B)/_)}function tt(A,_,B,V){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,V,_.data);else{ct.sort((Nt,xt)=>Nt.start-xt.start);let ut=0;for(let Nt=1;Nt<ct.length;Nt++){let xt=ct[ut],pt=ct[Nt],Ut=xt.start+xt.count,Ht=J(pt.start,_.width,4),Kt=J(xt.start,_.width,4);pt.start<=Ut+1&&Ht===Kt&&J(pt.start+pt.count-1,_.width,4)===Ht?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++ut,ct[ut]=pt)}ct.length=ut+1;let $=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Nt=0,xt=ct.length;Nt<xt;Nt++){let pt=ct[Nt],Ut=Math.floor(pt.start/4),Ht=Math.ceil(pt.count/4),Kt=Ut%_.width,U=Math.floor(Ut/_.width),mt=Ht,K=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Kt,U,mt,K,B,V,_.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,$),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function vt(A,_,B){let V=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=n.TEXTURE_3D);let Z=le(A,_),ct=_.source;e.bindTexture(V,A.__webglTexture,n.TEXTURE0+B);let ut=i.get(ct);if(ct.version!==ut.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=ee.getPrimaries(ee.workingColorSpace),gt=_.colorSpace===cn?null:ee.getPrimaries(_.colorSpace),bt=_.colorSpace===cn||K===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=g(_.image,!1,s.maxTextureSize);Q=de(_,Q);let dt=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type),xt=y(_.internalFormat,dt,Nt,_.normalized,_.colorSpace,_.isVideoTexture);ie(V,_);let pt,Ut=_.mipmaps,Ht=_.isVideoTexture!==!0,Kt=ut.__version===void 0||Z===!0,U=ct.dataReady,mt=S(_,Q);if(_.isDepthTexture)xt=w(_.format===Nn,_.type),Kt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,dt,Nt,null));else if(_.isDataTexture)if(Ut.length>0){Ht&&Kt&&e.texStorage2D(n.TEXTURE_2D,mt,xt,Ut[0].width,Ut[0].height);for(let K=0,gt=Ut.length;K<gt;K++)pt=Ut[K],Ht?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,pt.width,pt.height,dt,Nt,pt.data):e.texImage2D(n.TEXTURE_2D,K,xt,pt.width,pt.height,0,dt,Nt,pt.data);_.generateMipmaps=!1}else Ht?(Kt&&e.texStorage2D(n.TEXTURE_2D,mt,xt,Q.width,Q.height),U&&tt(_,Q,dt,Nt)):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,dt,Nt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ht&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,xt,Ut[0].width,Ut[0].height,Q.depth);for(let K=0,gt=Ut.length;K<gt;K++)if(pt=Ut[K],_.format!==Si)if(dt!==null)if(Ht){if(U)if(_.layerUpdates.size>0){let bt=rh(pt.width,pt.height,_.format,_.type);for(let st of _.layerUpdates){let Ft=pt.data.subarray(st*bt/pt.data.BYTES_PER_ELEMENT,(st+1)*bt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,st,pt.width,pt.height,1,dt,Ft)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,xt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,Q.depth,dt,Nt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,xt,pt.width,pt.height,Q.depth,0,dt,Nt,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ht&&Kt&&e.texStorage2D(n.TEXTURE_2D,mt,xt,Ut[0].width,Ut[0].height);for(let K=0,gt=Ut.length;K<gt;K++)pt=Ut[K],_.format!==Si?dt!==null?Ht?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,xt,pt.width,pt.height,0,pt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,pt.width,pt.height,dt,Nt,pt.data):e.texImage2D(n.TEXTURE_2D,K,xt,pt.width,pt.height,0,dt,Nt,pt.data)}else if(_.isDataArrayTexture)if(Ht){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,xt,Q.width,Q.height,Q.depth),U)if(_.layerUpdates.size>0){let K=rh(Q.width,Q.height,_.format,_.type);for(let gt of _.layerUpdates){let bt=Q.data.subarray(gt*K/Q.data.BYTES_PER_ELEMENT,(gt+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,Q.width,Q.height,1,dt,Nt,bt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Nt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,dt,Nt,Q.data);else if(_.isData3DTexture)Ht?(Kt&&e.texStorage3D(n.TEXTURE_3D,mt,xt,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Nt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,dt,Nt,Q.data);else if(_.isFramebufferTexture){if(Kt)if(Ht)e.texStorage2D(n.TEXTURE_2D,mt,xt,Q.width,Q.height);else{let K=Q.width,gt=Q.height;for(let bt=0;bt<mt;bt++)e.texImage2D(n.TEXTURE_2D,bt,xt,K,gt,0,dt,Nt,null),K>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),d.add(_),K.onpaint=gt=>{let bt=gt.changedElements;for(let st of d)bt.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let bt=n.RGBA,st=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,bt,st,Ft,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ht&&Kt){let K=ne(Ut[0]);e.texStorage2D(n.TEXTURE_2D,mt,xt,K.width,K.height)}for(let K=0,gt=Ut.length;K<gt;K++)pt=Ut[K],Ht?U&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,dt,Nt,pt):e.texImage2D(n.TEXTURE_2D,K,xt,dt,Nt,pt);_.generateMipmaps=!1}else if(Ht){if(Kt){let K=ne(Q);e.texStorage2D(n.TEXTURE_2D,mt,xt,K.width,K.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Nt,Q)}else e.texImage2D(n.TEXTURE_2D,0,xt,dt,Nt,Q);m(_)&&M(V),ut.__version=ct.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Vt(A,_,B){if(_.image.length!==6)return;let V=le(A,_),Z=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);let ct=i.get(Z);if(Z.version!==ct.__version||V===!0){e.activeTexture(n.TEXTURE0+B);let ut=ee.getPrimaries(ee.workingColorSpace),$=_.colorSpace===cn?null:ee.getPrimaries(_.colorSpace),Q=_.colorSpace===cn||ut===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Nt=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!dt&&!Nt?xt[st]=g(_.image[st],!0,s.maxCubemapSize):xt[st]=Nt?_.image[st].image:_.image[st],xt[st]=de(_,xt[st]);let pt=xt[0],Ut=r.convert(_.format,_.colorSpace),Ht=r.convert(_.type),Kt=y(_.internalFormat,Ut,Ht,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,mt=ct.__version===void 0||V===!0,K=Z.dataReady,gt=S(_,pt);ie(n.TEXTURE_CUBE_MAP,_);let bt;if(dt){U&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Kt,pt.width,pt.height);for(let st=0;st<6;st++){bt=xt[st].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){let It=bt[Ft];_.format!==Si?Ut!==null?U?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Kt,It.width,It.height,0,It.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,Ht,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Kt,It.width,It.height,0,Ut,Ht,It.data)}}}else{if(bt=_.mipmaps,U&&mt){bt.length>0&&gt++;let st=ne(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Kt,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Ut,Ht,xt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,xt[st].width,xt[st].height,0,Ut,Ht,xt[st].data);for(let Ft=0;Ft<bt.length;Ft++){let Se=bt[Ft].image[st].image;U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Se.width,Se.height,Ut,Ht,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Kt,Se.width,Se.height,0,Ut,Ht,Se.data)}}else{U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,Ht,xt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,Ut,Ht,xt[st]);for(let Ft=0;Ft<bt.length;Ft++){let It=bt[Ft];U?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ut,Ht,It.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Kt,Ut,Ht,It.image[st])}}}m(_)&&M(n.TEXTURE_CUBE_MAP),ct.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function St(A,_,B,V,Z,ct){let ut=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Q=y(B.internalFormat,ut,$,B.normalized,B.colorSpace),dt=i.get(_),Nt=i.get(B);if(Nt.__renderTarget=_,!dt.__hasExternalTextures){let xt=Math.max(1,_.width>>ct),pt=Math.max(1,_.height>>ct);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,ct,Q,xt,pt,_.depth,0,ut,$,null):e.texImage2D(Z,ct,Q,xt,pt,0,ut,$,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),$t(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,Nt.__webglTexture,0,qt(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,Nt.__webglTexture,ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(A,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ct=w(_.stencilBuffer,Z),ut=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$t(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt(_),ct,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt(_),ct,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ct,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,A)}else{let V=_.textures;for(let Z=0;Z<V.length;Z++){let ct=V[Z],ut=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),Q=y(ct.internalFormat,ut,$,ct.normalized,ct.colorSpace);$t(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt(_),Q,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt(_),Q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(A,_,B){let V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(n.TEXTURE_CUBE_MAP,_.depthTexture);let dt=r.convert(_.depthTexture.format),Nt=r.convert(_.depthTexture.type),xt;_.depthTexture.format===Xi?xt=n.DEPTH_COMPONENT24:_.depthTexture.format===Nn&&(xt=n.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,_.width,_.height,0,dt,Nt,null)}}else rt(_.depthTexture,0);let ct=Z.__webglTexture,ut=qt(_),$=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Q=_.depthTexture.format===Nn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xi)$t(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,ct,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,ct,0);else if(_.depthTexture.format===Nn)$t(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,ct,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(A){let _=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)ge(_.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?ge(_.__webglFramebuffer[0],A,0):ge(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=n.createRenderbuffer(),Xt(_.__webglDepthbuffer[V],A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ct)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Xt(_.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ct),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ct)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(A,_,B){let V=i.get(A);_!==void 0&&St(V.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&et(A)}function at(A){let _=A.texture,B=i.get(A),V=i.get(_);A.addEventListener("dispose",v);let Z=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=_.version,o.memory.textures++),ct){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=n.createFramebuffer()}else B.__webglFramebuffer[$]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)B.__webglFramebuffer[$]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ut)for(let $=0,Q=Z.length;$<Q;$++){let dt=i.get(Z[$]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&$t(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let Q=Z[$];B.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let dt=r.convert(Q.format,Q.colorSpace),Nt=r.convert(Q.type),xt=y(Q.internalFormat,dt,Nt,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),pt=qt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,xt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,B.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ct){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ie(n.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)St(B.__webglFramebuffer[$][Q],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else St(B.__webglFramebuffer[$],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let $=0,Q=Z.length;$<Q;$++){let dt=Z[$],Nt=i.get(dt),xt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Nt.__webglTexture),ie(xt,dt),St(B.__webglFramebuffer,A,dt,n.COLOR_ATTACHMENT0+$,xt,0),m(dt)&&M(xt)}e.unbindTexture()}else{let $=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,V.__webglTexture),ie($,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)St(B.__webglFramebuffer[Q],A,_,n.COLOR_ATTACHMENT0,$,Q);else St(B.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,$,0);m(_)&&M($),e.unbindTexture()}A.depthBuffer&&et(A)}function lt(A){let _=A.textures;for(let B=0,V=_.length;B<V;B++){let Z=_[B];if(m(Z)){let ct=E(A),ut=i.get(Z).__webglTexture;e.bindTexture(ct,ut),M(ct),e.unbindTexture()}}}let ft=[],zt=[];function Bt(A){if(A.samples>0){if($t(A)===!1){let _=A.textures,B=A.width,V=A.height,Z=n.COLOR_BUFFER_BIT,ct=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(A),$=_.length>1;if($)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=A.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Nt=i.get(_[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,B,V,0,0,B,V,Z,n.NEAREST),l===!0&&(ft.length=0,zt.length=0,ft.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ft.push(ct),zt.push(ct),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let Nt=i.get(_[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function qt(A){return Math.min(s.maxSamples,A.samples)}function $t(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function de(A,_){let B=A.colorSpace,V=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==br&&B!==cn&&(ee.getTransfer(B)===ue?(V!==Si||Z!==si)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",B)),_}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=rt,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=ot,this.setupRenderTarget=at,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=St,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Sv(n,t){function e(i,s=cn){let r,o=ee.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qc)return n.BYTE;if(i===Yc)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Oa)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===qe)return n.HALF_FLOAT;if(i===Jc)return n.ALPHA;if(i===Kc)return n.RGB;if(i===Si)return n.RGBA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Nn)return n.DEPTH_STENCIL;if(i===Zs)return n.RED;if(i===ka)return n.RED_INTEGER;if(i===Un)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Va)return n.RGBA_INTEGER;if(i===oo||i===ao||i===lo||i===co)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===$a||i===Ja||i===Ka||i===Qa||i===ho||i===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===$a)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ja)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ka)return r.COMPRESSED_R11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ho)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tl||i===el||i===il||i===nl||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===el)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===ml||i===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===pl)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===_l||i===uo||i===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new he({vertexShader:Ev,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends qi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Eh,m={},M=e.getContextAttributes(),E=null,y=null,w=[],S=[],R=new nt,v=null,T=null,C=new Ve;C.viewport=new Ae;let N=new Ve;N.viewport=new Ae;let F=[C,N],z=new La,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=w[J];return tt===void 0&&(tt=new Bs,w[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=w[J];return tt===void 0&&(tt=new Bs,w[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=w[J];return tt===void 0&&(tt=new Bs,w[J]=tt),tt.getHandSpace()};function X(J){let tt=S.indexOf(J.inputSource);if(tt===-1)return;let vt=w[tt];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||o),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",rt);for(let J=0;J<w.length;J++){let tt=S[J];tt!==null&&(S[J]=null,w[J].disconnect(tt))}L=null,O=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,y=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",rt),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Vt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Nn:Xi,Vt=M.stencil?Ys:zi);let Xt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ue(u.textureWidth,u.textureHeight,{format:Si,type:si,depthTexture:new wn(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ue(f.framebufferWidth,f.framebufferHeight,{format:Si,type:si,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(J){for(let tt=0;tt<J.removed.length;tt++){let vt=J.removed[tt],Vt=S.indexOf(vt);Vt>=0&&(S[Vt]=null,w[Vt].disconnect(vt))}for(let tt=0;tt<J.added.length;tt++){let vt=J.added[tt],Vt=S.indexOf(vt);if(Vt===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=S.length){S.push(vt),Vt=Xt;break}else if(S[Xt]===null){S[Xt]=vt,Vt=Xt;break}if(Vt===-1)break}let St=w[Vt];St&&St.connect(vt)}}let Y=new P,j=new P;function it(J,tt,vt){Y.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Vt=Y.distanceTo(j),St=tt.projectionMatrix.elements,Xt=vt.projectionMatrix.elements,ge=St[14]/(St[10]-1),et=St[14]/(St[10]+1),ot=(St[9]+1)/St[5],at=(St[9]-1)/St[5],lt=(St[8]-1)/St[0],ft=(Xt[8]+1)/Xt[0],zt=ge*lt,Bt=ge*ft,qt=Vt/(-lt+ft),$t=qt*-lt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($t),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),St[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let I=ge+qt,de=et+qt,ne=zt-$t,A=Bt+(Vt-$t),_=ot*et/de*I,B=at*et/de*I;J.projectionMatrix.makePerspective(ne,A,_,B,I,de),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Dt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,vt=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),z.near=N.near=C.near=tt,z.far=N.far=C.far=vt,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Vt=J.parent,St=z.cameras;Dt(z,Vt);for(let Xt=0;Xt<St.length;Xt++)Dt(St[Xt],Vt);St.length===2?it(z,C,N):z.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Tt(J,z,Vt)};function Tt(J,tt,vt){vt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Us*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let fe=null;function ie(J,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Vt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Vt=!0);for(let et=0;et<vt.length;et++){let ot=vt[et],at=null;if(f!==null)at=f.getViewport(ot);else{let ft=d.getViewSubImage(u,ot);at=ft.viewport,et===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let lt=F[et];lt===void 0&&(lt=new Ve,lt.layers.enable(et),lt.viewport=new Ae,F[et]=lt),lt.matrix.fromArray(ot.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ot.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(at.x,at.y,at.width,at.height),et===0&&(z.matrix.copy(lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Vt===!0&&z.cameras.push(lt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let et=d.getDepthInformation(vt[0]);et&&et.isValid&&et.texture&&g.init(et,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let et=0;et<vt.length;et++){let ot=vt[et].camera;if(ot){let at=m[ot];at||(at=new Lr,m[ot]=at);let lt=d.getCameraImage(ot);at.sourceTexture=lt}}}}for(let vt=0;vt<w.length;vt++){let Vt=S[vt],St=w[vt];Vt!==null&&St!==void 0&&St.update(Vt,tt,c||o)}fe&&fe(J,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),p=null}let le=new Hf;le.setAnimationLoop(ie),this.setAnimationLoop=function(J){fe=J},this.dispose=function(){}}},Tv=new re,qf=new Zt;qf.set(-1,0,0,0,1,0,0,0,1);function Av(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ih(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Le&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Le&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),E=M.envMap,y=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Le&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let S=w.program;i.uniformBlockBinding(y,S)}function c(y,w){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",M));let R=w.program;i.updateUBOMapping(y,R);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let w=d();y.__bindingPointIndex=w;let S=n.createBuffer(),R=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let w=s[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,T=S.length;v<T;v++){let C=S[v];if(Array.isArray(C))for(let N=0,F=C.length;N<F;N++)f(C[N],v,N,R);else f(C,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,w,S,R){if(x(y,w,S,R)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let F=T[N],z=m(F);p(F,y.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function p(y,w,S){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,S)}function x(y,w,S,R){let v=y.value,T=w+"_"+S;if(R[T]===void 0)return typeof v=="number"||typeof v=="boolean"?R[T]=v:ArrayBuffer.isView(v)?R[T]=v.slice():R[T]=v.clone(),!0;{let C=R[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(y){let w=y.uniforms,S=0,R=16;for(let T=0,C=w.length;T<C;T++){let N=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,z=N.length;F<z;F++){let L=N[F],O=Array.isArray(L.value)?L.value:[L.value];for(let X=0,q=O.length;X<q;X++){let rt=O[X],Y=m(rt),j=S%R,it=j%Y.boundary,Dt=j+it;S+=it,Dt!==0&&R-Dt<Y.storage&&(S+=R-Dt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Y.storage}}}let v=S%R;return v>0&&(S+=R-v),y.__size=S,y.__cache={},this}function m(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Pv(){return Ji===null&&(Ji=new jn(Cv,16,16,Un,qe),Ji.name="DFG_LUT",Ji.minFilter=We,Ji.magFilter=We,Ji.wrapS=hi,Ji.wrapT=hi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var wl=class{constructor(t={}){let{canvas:e=lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=si}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,g=new Set([Va,Ga,ka]),m=new Set([si,zi,qs,Ys,za,Ha]),M=new Uint32Array(4),E=new Int32Array(4),y=new P,w=null,S=null,R=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,F=null,z=null,L=null,O=null;this._outputColorSpace=Ge;let X=0,q=0,rt=null,Y=-1,j=null,it=new Ae,Dt=new Ae,Tt=null,fe=new ht(0),ie=0,le=e.width,J=e.height,tt=1,vt=null,Vt=null,St=new Ae(0,0,le,J),Xt=new Ae(0,0,le,J),ge=!1,et=new zs,ot=!1,at=!1,lt=new re,ft=new P,zt=new Ae,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function $t(){return rt===null?tt:1}let I=i;function de(b,D){return e.getContext(b,D)}let ne,A,_,B,V,Z,ct,ut,$,Q,dt,Nt,xt,pt,Ut,Ht,Kt,U,mt,K,gt,bt,st;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Ri,!1),I===null){let D="webgl2";if(I=de(D,b),I===null)throw de(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(b){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ri,!1),Wt("WebGLRenderer: "+b.message),b}function Ft(){ne=new Bx(I),ne.init(),gt=new Sv(I,ne),A=new Ax(I,ne,t,gt),_=new Mv(I,ne),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),z=I.createFramebuffer(),L=I.createFramebuffer(),O=I.createFramebuffer(),B=new Hx(I),V=new av,Z=new bv(I,ne,_,V,A,gt,B),ct=new Fx(C),ut=new Gm(I),bt=new wx(I,ut),$=new Ox(I,ut,B,bt),Q=new Gx(I,$,ut,bt,B),U=new kx(I,A,Z),Ut=new Rx(V),dt=new ov(C,ct,ne,A,bt,Ut),Nt=new Av(C,V),xt=new cv,pt=new mv(ne),Kt=new Ex(C,ct,_,Q,p,l),Ht=new yv(C,Q,A),st=new Rv(I,B,A,_),mt=new Tx(I,ne,B),K=new zx(I,ne,B),B.programs=dt.programs,C.capabilities=A,C.extensions=ne,C.properties=V,C.renderLists=xt,C.shadowMap=Ht,C.state=_,C.info=B}x!==si&&(T=new Wx(x,e.width,e.height,a,s,r));let It=new wh(C,I);this.xr=It,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(le,J,!1))},this.getSize=function(b){return b.set(le,J)},this.setSize=function(b,D,W=!0){if(It.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,J=D,e.width=Math.floor(b*tt),e.height=Math.floor(D*tt),W===!0&&(e.style.width=b+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(le*tt,J*tt).floor()},this.setDrawingBufferSize=function(b,D,W){le=b,J=D,tt=W,e.width=Math.floor(b*W),e.height=Math.floor(D*W),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(x===si){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(it)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,D,W,H){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,D,W,H),_.viewport(it.copy(St).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,D,W,H){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,D,W,H),_.scissor(Dt.copy(Xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){_.setScissorTest(ge=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){Vt=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,W=!0){let H=0;if(b){let k=!1;if(rt!==null){let Mt=rt.texture.format;k=g.has(Mt)}if(k){let Mt=rt.texture.type,wt=m.has(Mt),yt=Kt.getClearColor(),Rt=Kt.getClearAlpha(),Lt=yt.r,Qt=yt.g,se=yt.b;wt?(M[0]=Lt,M[1]=Qt,M[2]=se,M[3]=Rt,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Lt,E[1]=Qt,E[2]=se,E[3]=Rt,I.clearBufferiv(I.COLOR,0,E))}else H|=I.COLOR_BUFFER_BIT}D&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ri,!1),Kt.dispose(),xt.dispose(),pt.dispose(),V.dispose(),ct.dispose(),Q.dispose(),bt.dispose(),st.dispose(),dt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Hh),It.removeEventListener("sessionend",kh),Xn.stop()};function Se(b){b.preventDefault(),jc("WebGLRenderer: Context Lost."),N=!0}function pe(){jc("WebGLRenderer: Context Restored."),N=!1;let b=B.autoReset,D=Ht.enabled,W=Ht.autoUpdate,H=Ht.needsUpdate,k=Ht.type;Ft(),B.autoReset=b,Ht.enabled=D,Ht.autoUpdate=W,Ht.needsUpdate=H,Ht.type=k}function Ri(b){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gi(b){let D=b.target;D.removeEventListener("dispose",Gi),rp(D)}function rp(b){op(b),V.remove(b)}function op(b){let D=V.get(b).programs;D!==void 0&&(D.forEach(function(W){dt.releaseProgram(W)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,W,H,k,Mt){D===null&&(D=Bt);let wt=k.isMesh&&k.matrixWorld.determinantAffine()<0,yt=cp(b,D,W,H,k);_.setMaterial(H,wt);let Rt=W.index,Lt=1;if(H.wireframe===!0){if(Rt=$.getWireframeAttribute(W),Rt===void 0)return;Lt=2}let Qt=W.drawRange,se=W.attributes.position,Ct=Qt.start*Lt,me=(Qt.start+Qt.count)*Lt;Mt!==null&&(Ct=Math.max(Ct,Mt.start*Lt),me=Math.min(me,(Mt.start+Mt.count)*Lt)),Rt!==null?(Ct=Math.max(Ct,0),me=Math.min(me,Rt.count)):se!=null&&(Ct=Math.max(Ct,0),me=Math.min(me,se.count));let De=me-Ct;if(De<0||De===1/0)return;bt.setup(k,H,yt,W,Rt);let we,ye=mt;if(Rt!==null&&(we=ut.get(Rt),ye=K,ye.setIndex(we)),k.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*$t()),ye.setMode(I.LINES)):ye.setMode(I.TRIANGLES);else if(k.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),_.setLineWidth(Ye*$t()),k.isLineSegments?ye.setMode(I.LINES):k.isLineLoop?ye.setMode(I.LINE_LOOP):ye.setMode(I.LINE_STRIP)}else k.isPoints?ye.setMode(I.POINTS):k.isSprite&&ye.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ye=k._multiDrawStarts,Et=k._multiDrawCounts,ti=k._multiDrawCount,ce=Rt?ut.get(Rt).bytesPerElement:1,gi=V.get(H).currentProgram.getUniforms();for(let Vi=0;Vi<ti;Vi++)gi.setValue(I,"_gl_DrawID",Vi),ye.render(Ye[Vi]/ce,Et[Vi])}else if(k.isInstancedMesh)ye.renderInstances(Ct,De,k.count);else if(W.isInstancedBufferGeometry){let Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,Ye);ye.renderInstances(Ct,De,Et)}else ye.render(Ct,De)};function zh(b,D,W,H){F!==null&&b.isNodeMaterial&&F.setObject(H,b),ot===!0&&Ut.setState(b,W,!1),b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Ao(b,D,H),b.side=In,b.needsUpdate=!0,Ao(b,D,H),b.side=ni):Ao(b,D,H)}this.compile=function(b,D,W=null){W===null&&(W=b),F!==null&&F.renderStart(b,D,W),S=pt.get(W),S.init(D),v.push(S),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),at=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,at),ot===!0&&Ut.setGlobalState(this.clippingPlanes,D),F!==null&&Ht.render(S.state.shadowsArray,W,D);let H=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Mt=k.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){let yt=Mt[wt];zh(yt,W,D,k),H.add(yt)}else zh(Mt,W,D,k),H.add(Mt)}),S=v.pop(),F!==null&&F.renderEnd(),H},this.compileAsync=function(b,D,W=null){let H=this.compile(b,D,W);return new Promise(k=>{function Mt(){if(H.forEach(function(wt){let Rt=V.get(wt).currentProgram;(Rt===void 0||Rt.isReady())&&H.delete(wt)}),H.size===0){k(b);return}setTimeout(Mt,10)}ne.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ic=null;function ap(b){ic&&ic(b)}function Hh(){Xn.stop()}function kh(){Xn.start()}let Xn=new Hf;Xn.setAnimationLoop(ap),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(b){ic=b,It.setAnimationLoop(b),b===null?Xn.stop():Xn.start()},It.addEventListener("sessionstart",Hh),It.addEventListener("sessionend",kh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(b,D);let W=It.enabled===!0&&It.isPresenting===!0,H=T!==null&&(rt===null||W)&&T.begin(C,rt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(D),D=It.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,D,rt),S=pt.get(b,v.length),S.init(D),S.state.textureUnits=Z.getTextureUnits(),v.push(S),lt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),et.setFromProjectionMatrix(lt,Di,D.reversedDepth),at=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,at),w=xt.get(b,R.length),w.init(),R.push(w),It.enabled===!0&&It.isPresenting===!0){let wt=C.xr.getDepthSensingMesh();wt!==null&&nc(wt,D,-1/0,C.sortObjects)}nc(b,D,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&w.sort(vt,Vt),qt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,qt&&Kt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ut.beginShadows();let k=S.state.shadowsArray;if(Ht.render(k,b,D),ot===!0&&Ut.endShadows(),(H&&T.hasRenderPass())===!1){let wt=w.opaque,yt=w.transmissive;if(S.setupLights(),D.isArrayCamera){let Rt=D.cameras;if(yt.length>0)for(let Lt=0,Qt=Rt.length;Lt<Qt;Lt++){let se=Rt[Lt];Vh(wt,yt,b,se)}qt&&Kt.render(b);for(let Lt=0,Qt=Rt.length;Lt<Qt;Lt++){let se=Rt[Lt];Gh(w,b,se,se.viewport)}}else yt.length>0&&Vh(wt,yt,b,D),qt&&Kt.render(b),Gh(w,b,D)}rt!==null&&q===0&&(Z.updateMultisampleRenderTarget(rt),Z.updateRenderTargetMipmap(rt)),H&&T.end(C),b.isScene===!0&&b.onAfterRender(C,b,D),bt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(S=v[v.length-1],Z.setTextureUnits(S.state.textureUnits),ot===!0&&Ut.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,F!==null&&F.renderEnd()};function nc(b,D,W,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(et)){H&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);let wt=Q.update(b),yt=b.material;yt.visible&&w.push(b,wt,yt,W,zt.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(et))){let wt=Q.update(b),yt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),zt.copy(wt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(yt)){let Rt=wt.groups;for(let Lt=0,Qt=Rt.length;Lt<Qt;Lt++){let se=Rt[Lt],Ct=yt[se.materialIndex];Ct&&Ct.visible&&w.push(b,wt,Ct,W,zt.z,se,D)}}else yt.visible&&w.push(b,wt,yt,W,zt.z,null,D)}}let Mt=b.children;for(let wt=0,yt=Mt.length;wt<yt;wt++)nc(Mt[wt],D,W,H)}function Gh(b,D,W,H){let{opaque:k,transmissive:Mt,transparent:wt}=b;S.setupLightsView(W),ot===!0&&Ut.setGlobalState(C.clippingPlanes,W),H&&_.viewport(it.copy(H)),k.length>0&&To(k,D,W),Mt.length>0&&To(Mt,D,W),wt.length>0&&To(wt,D,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Vh(b,D,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let Ct=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new Ue(1,1,{generateMipmaps:!0,type:Ct?qe:si,minFilter:Dn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let Mt=S.state.transmissionRenderTarget[H.id],wt=H.viewport||it;Mt.setSize(wt.z*C.transmissionResolutionScale,wt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),Rt=C.getActiveCubeFace(),Lt=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(fe),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),qt&&Kt.render(W);let Qt=C.toneMapping;C.toneMapping=Oi;let se=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),ot===!0&&Ut.setGlobalState(C.clippingPlanes,H),To(b,W,H),Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let me=0,De=D.length;me<De;me++){let we=D[me],{object:ye,geometry:Ye,material:Et,group:ti}=we;if(Et.side===ni&&ye.layers.test(H.layers)){let ce=Et.side;Et.side=Le,Et.needsUpdate=!0,Wh(ye,W,H,Ye,Et,ti),Et.side=ce,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt))}C.setRenderTarget(yt,Rt,Lt),C.setClearColor(fe,ie),se!==void 0&&(H.viewport=se),C.toneMapping=Qt}function To(b,D,W){let H=D.isScene===!0?D.overrideMaterial:null;for(let k=0,Mt=b.length;k<Mt;k++){let wt=b[k],{object:yt,geometry:Rt,group:Lt}=wt,Qt=wt.material;Qt.allowOverride===!0&&H!==null&&(Qt=H),yt.layers.test(W.layers)&&Wh(yt,D,W,Rt,Qt,Lt)}}function Wh(b,D,W,H,k,Mt){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(C,D,W,H,k,Mt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(C,D,W,H,b,Mt),k.transparent===!0&&k.side===ni&&k.forceSinglePass===!1?(k.side=Le,k.needsUpdate=!0,C.renderBufferDirect(W,D,H,k,b,Mt),k.side=In,k.needsUpdate=!0,C.renderBufferDirect(W,D,H,k,b,Mt),k.side=ni):C.renderBufferDirect(W,D,H,k,b,Mt),b.onAfterRender(C,D,W,H,k,Mt)}function Ao(b,D,W){D.isScene!==!0&&(D=Bt);let H=V.get(b),k=S.state.lights,Mt=S.state.shadowsArray,wt=k.state.version,yt=dt.getParameters(b,k.state,Mt,D,W,S.state.lightProbeGridArray),Rt=dt.getProgramCacheKey(yt),Lt=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let Qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=ct.get(b.envMap||H.environment,Qt),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",Gi),Lt=new Map,H.programs=Lt);let se=Lt.get(Rt);if(se!==void 0){if(H.currentProgram===se&&H.lightsStateVersion===wt)return qh(b,yt),se}else yt.uniforms=dt.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,W,yt),b.onBeforeCompile(yt,C),se=dt.acquireProgram(yt,Rt),Lt.set(Rt,se),H.uniforms=yt.uniforms;let Ct=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Ut.uniform),qh(b,yt),H.needsLights=up(b),H.lightsStateVersion=wt,H.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.sunLights.value=k.state.sun,Ct.sunLightShadows.value=k.state.sunShadow,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.sunShadowMatrix.value=k.state.sunShadowMatrix,Ct.sunShadowCascade.value=k.state.sunShadowCascade,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=se,H.uniformsList=null,se}function Xh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Qs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function qh(b,D){let W=V.get(b);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function lp(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let W=0,H=b.length;W<H;W++){let k=b[W];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function cp(b,D,W,H,k){D.isScene!==!0&&(D=Bt),Z.resetTextureUnits();let Mt=D.fog,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,yt=rt===null?C.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ee.workingColorSpace,Rt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Lt=ct.get(H.envMap||wt,Rt),Qt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,se=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!W.morphAttributes.position,me=!!W.morphAttributes.normal,De=!!W.morphAttributes.color,we=Oi;H.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(we=C.toneMapping);let ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=ye!==void 0?ye.length:0,Et=V.get(H),ti=S.state.lights;if(ot===!0&&(at===!0||b!==j)){let Ee=b===j&&H.id===Y;Ut.setState(H,b,Ee)}let ce=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ti.state.version||Et.outputColorSpace!==yt||k.isBatchedMesh&&Et.batching===!1||!k.isBatchedMesh&&Et.batching===!0||k.isBatchedMesh&&Et.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Et.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Et.instancing===!1||!k.isInstancedMesh&&Et.instancing===!0||k.isSkinnedMesh&&Et.skinning===!1||!k.isSkinnedMesh&&Et.skinning===!0||k.isInstancedMesh&&Et.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Et.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Et.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Et.instancingMorph===!1&&k.morphTexture!==null||Et.envMap!==Lt||H.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ut.numPlanes||Et.numIntersection!==Ut.numIntersection)||Et.vertexAlphas!==Qt||Et.vertexTangents!==se||Et.morphTargets!==Ct||Et.morphNormals!==me||Et.morphColors!==De||Et.toneMapping!==we||Et.morphTargetsCount!==Ye||!!Et.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Et.__version=H.version);let gi=Et.currentProgram;ce===!0&&(gi=Ao(H,D,k),F&&H.isNodeMaterial&&F.onUpdateProgram(H,gi,Et));let Vi=!1,gn=!1,ps=!1,xe=gi.getUniforms(),Pe=Et.uniforms;if(_.useProgram(gi.program)&&(Vi=!0,gn=!0,ps=!0),H.id!==Y&&(Y=H.id,gn=!0),Et.needsLights){let Ee=lp(S.state.lightProbeGridArray,k);Et.lightProbeGrid!==Ee&&(Et.lightProbeGrid=Ee,gn=!0)}if(Vi||j!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(I,"projectionMatrix",b.projectionMatrix),xe.setValue(I,"viewMatrix",b.matrixWorldInverse);let _n=xe.map.cameraPosition;_n!==void 0&&_n.setValue(I,ft.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,gn=!0,ps=!0)}if(Et.needsLights&&(ti.state.sunShadowMap.length>0&&xe.setValue(I,"sunShadowMap",ti.state.sunShadowMap,Z),ti.state.directionalShadowMap.length>0&&xe.setValue(I,"directionalShadowMap",ti.state.directionalShadowMap,Z),ti.state.spotShadowMap.length>0&&xe.setValue(I,"spotShadowMap",ti.state.spotShadowMap,Z),ti.state.pointShadowMap.length>0&&xe.setValue(I,"pointShadowMap",ti.state.pointShadowMap,Z)),k.isSkinnedMesh){xe.setOptional(I,k,"bindMatrix"),xe.setOptional(I,k,"bindMatrixInverse");let Ee=k.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),xe.setValue(I,"boneTexture",Ee.boneTexture,Z))}k.isBatchedMesh&&(xe.setOptional(I,k,"batchingTexture"),xe.setValue(I,"batchingTexture",k._matricesTexture,Z),xe.setOptional(I,k,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",k._indirectTexture,Z),xe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",k._colorsTexture,Z));let xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&U.update(k,W,gi),(gn||Et.receiveShadow!==k.receiveShadow)&&(Et.receiveShadow=k.receiveShadow,xe.setValue(I,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Pe.envMapIntensity.value=D.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=Pv()),gn){if(xe.setValue(I,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&hp(Pe,ps),Mt&&H.fog===!0&&Nt.refreshFogUniforms(Pe,Mt),Nt.refreshMaterialUniforms(Pe,H,tt,J,S.state.transmissionRenderTarget[b.id]),Et.needsLights&&Et.lightProbeGrid){let Ee=Et.lightProbeGrid;Pe.probesSH.value=Ee.texture,Pe.probesMin.value.copy(Ee.boundingBox.min),Pe.probesMax.value.copy(Ee.boundingBox.max),Pe.probesResolution.value.copy(Ee.resolution)}Qs.upload(I,Xh(Et),Pe,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qs.upload(I,Xh(Et),Pe,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(I,"center",k.center),xe.setValue(I,"modelViewMatrix",k.modelViewMatrix),xe.setValue(I,"normalMatrix",k.normalMatrix),xe.setValue(I,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let Ee=H.uniformsGroups;for(let _n=0,ms=Ee.length;_n<ms;_n++){let Zh=Ee[_n];st.update(Zh,gi),st.bind(Zh,gi)}}return gi}function hp(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function up(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(b,D,W){let H=V.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=D,V.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let W=V.get(b);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,W=0){rt=b,X=D,q=W;let H=null,k=!1,Mt=!1;if(b){let yt=V.get(b);if(yt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,yt.__webglFramebuffer),it.copy(b.viewport),Dt.copy(b.scissor),Tt=b.scissorTest,_.viewport(it),_.scissor(Dt),_.setScissorTest(Tt),Y=-1;return}else if(yt.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(yt.__hasExternalTextures)Z.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qt=b.depthTexture;if(yt.__boundDepthTexture!==Qt){if(Qt!==null&&V.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Lt=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?H=Lt[D][W]:H=Lt[D],k=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?H=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?H=Lt[W]:H=Lt,it.copy(b.viewport),Dt.copy(b.scissor),Tt=b.scissorTest}else it.copy(St).multiplyScalar(tt).floor(),Dt.copy(Xt).multiplyScalar(tt).floor(),Tt=ge;if(W!==0&&(H=z),_.bindFramebuffer(I.FRAMEBUFFER,H)&&_.drawBuffers(b,H),_.viewport(it),_.scissor(Dt),_.setScissorTest(Tt),k){let yt=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,W)}else if(Mt){let yt=D;for(let Rt=0;Rt<b.textures.length;Rt++){let Lt=V.get(b.textures[Rt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,W,yt)}}else if(b!==null&&W!==0){let yt=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,W)}Y=-1};function Yh(b){let D=V.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,W,H,k,Mt,wt,yt=0){if(!(b&&b.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){_.bindFramebuffer(I.FRAMEBUFFER,Rt);try{let Lt=b.textures[yt],Qt=Lt.format,se=Lt.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt);let Ct=Yh(Lt);if(Ct.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&W>=0&&W<=b.height-k&&I.readPixels(D,W,H,k,gt.convert(Qt),gt.convert(se),Mt)}finally{let Lt=rt!==null?V.get(rt).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,D,W,H,k,Mt,wt,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt)if(D>=0&&D<=b.width-H&&W>=0&&W<=b.height-k){_.bindFramebuffer(I.FRAMEBUFFER,Rt);let Lt=b.textures[yt],Qt=Lt.format,se=Lt.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt);let Ct=Yh(Lt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,me),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(D,W,H,k,gt.convert(Qt),gt.convert(se),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let De=rt!==null?V.get(rt).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,De);let we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hf(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(me),I.deleteSync(we),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,W=0){let H=Math.pow(2,-W),k=Math.floor(b.image.width*H),Mt=Math.floor(b.image.height*H),wt=D!==null?D.x:0,yt=D!==null?D.y:0;Z.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,wt,yt,k,Mt),_.unbindTexture()},this.copyTextureToTexture=function(b,D,W=null,H=null,k=0,Mt=0){let wt,yt,Rt,Lt,Qt,se,Ct,me,De,we=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(W!==null)wt=W.max.x-W.min.x,yt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Qt=W.min.y,se=W.isBox3?W.min.z:0;else{let Pe=Math.pow(2,-k);wt=Math.floor(we.width*Pe),yt=Math.floor(we.height*Pe),b.isDataArrayTexture?Rt=we.depth:b.isData3DTexture?Rt=Math.floor(we.depth*Pe):Rt=1,Lt=0,Qt=0,se=0}H!==null?(Ct=H.x,me=H.y,De=H.z):(Ct=0,me=0,De=0);let ye=gt.convert(D.format),Ye=gt.convert(D.type),Et;D.isData3DTexture?(Z.setTexture3D(D,0),Et=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),Et=I.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),Et=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let ti=_.getParameter(I.UNPACK_ROW_LENGTH),ce=_.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=_.getParameter(I.UNPACK_SKIP_PIXELS),Vi=_.getParameter(I.UNPACK_SKIP_ROWS),gn=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),_.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),_.pixelStorei(I.UNPACK_SKIP_IMAGES,se);let ps=b.isDataArrayTexture||b.isData3DTexture,xe=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Pe=V.get(b),xn=V.get(D),Ee=V.get(Pe.__renderTarget),_n=V.get(xn.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,Ee.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let ms=0;ms<Rt;ms++)ps&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(b).__webglTexture,k,se+ms),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(D).__webglTexture,Mt,De+ms)),I.blitFramebuffer(Lt,Qt,wt,yt,Ct,me,wt,yt,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||V.has(b)){let Pe=V.get(b),xn=V.get(D);_.bindFramebuffer(I.READ_FRAMEBUFFER,L),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let Ee=0;Ee<Rt;Ee++)ps?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,k,se+Ee):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,k),xe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,Mt,De+Ee):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,Mt),k!==0?I.blitFramebuffer(Lt,Qt,wt,yt,Ct,me,wt,yt,I.COLOR_BUFFER_BIT,I.NEAREST):xe?I.copyTexSubImage3D(Et,Mt,Ct,me,De+Ee,Lt,Qt,wt,yt):I.copyTexSubImage2D(Et,Mt,Ct,me,Lt,Qt,wt,yt);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Et,Mt,Ct,me,De,wt,yt,Rt,ye,Ye,we.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,Mt,Ct,me,De,wt,yt,Rt,ye,we.data):I.texSubImage3D(Et,Mt,Ct,me,De,wt,yt,Rt,ye,Ye,we):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,Ct,me,wt,yt,ye,Ye,we.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,Ct,me,we.width,we.height,ye,we.data):I.texSubImage2D(I.TEXTURE_2D,Mt,Ct,me,wt,yt,ye,Ye,we);_.pixelStorei(I.UNPACK_ROW_LENGTH,ti),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),_.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),_.pixelStorei(I.UNPACK_SKIP_ROWS,Vi),_.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),Mt===0&&D.generateMipmaps&&I.generateMipmap(Et),_.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){X=0,q=0,rt=null,_.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Rl=class extends Qn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Gt;t.deleteAttribute("uv");let e=new Tn({side:Le}),i=new Tn,s=new $r(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ot(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new fi(t,i,6),a=new Oe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ot(t,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ot(t,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ot(t,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ot(t,er(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ot(t,er(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ot(t,er(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function er(n){return new Wr({color:0,emissive:16777215,emissiveIntensity:n})}var Ei={uBendY:{value:.0026},uBendX:{value:0}},un=`
uniform float uBendY;
uniform float uBendX;
`,fn=`
{
  float bendZ = min( mvPosition.z, 0.0 );
  mvPosition.y -= uBendY * bendZ * bendZ;
  mvPosition.x += uBendX * bendZ * bendZ;
}
`;function xo(n,t){n.onBeforeCompile=i=>{i.uniforms.uBendY=Ei.uBendY,i.uniforms.uBendX=Ei.uBendX,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
`+un).replace("#include <project_vertex>",`#include <project_vertex>
`+fn+`
gl_Position = projectionMatrix * mvPosition;`),t&&t(i)};let e="bend-"+(t&&t.key?t.key:"plain");return n.customProgramCacheKey=()=>e,n}var Iv=(()=>{let n=new jn(new Uint8Array([105,190,255]),3,1,Zs);return n.minFilter=Ie,n.magFilter=Ie,n.generateMipmaps=!1,n.needsUpdate=!0,n})(),Cl={uRimColor:{value:new ht("#ffd6f0")},uRimStrength:{value:.35}};function Yf(n){n.uniforms.uRimColor=Cl.uRimColor,n.uniforms.uRimStrength=Cl.uRimStrength,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRimColor;
uniform float uRimStrength;`).replace("#include <opaque_fragment>",`{
        float rimDot = 1.0 - clamp( dot( normal, normalize( vViewPosition ) ), 0.0, 1.0 );
        outgoingLight += uRimColor * pow( rimDot, 3.0 ) * uRimStrength;
      }
      #include <opaque_fragment>`)}Yf.key="rim";function Fe(n,t={}){let{rim:e=!1,bend:i=!0,...s}=t,r=new Vr({color:n,gradientMap:Iv,...s});return i?xo(r,e?Yf:void 0):r}function Qe(n,t={}){let e=new Tn({color:n,roughness:.32,metalness:0,...t});return xo(e)}function Qi(n,t={}){return xo(new _i({color:n,...t}))}var Lv={uOutline:{value:.03}};function Zf(n){n.uniforms.uOutline=Lv.uOutline,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uOutline;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize( normal ) * uOutline;`)}Zf.key="outline";var _o=xo(new _i({color:1904408,side:Le}),Zf);function Jf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=$f(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=$f(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function $f(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new be(o,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Kf(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,E=a.length;M<E;M++){let y=a[M],w=n.attributes[y];l[y]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let S=n.morphAttributes[y];S&&(c[y]||(c[y]=[]),S.forEach((R,v)=>{let T=new R.array.constructor(R.count*R.itemSize);c[y][v]=new R.constructor(T,R.itemSize,R.normalized)}))}let f=t*.5,p=Math.log10(1/t),x=Math.pow(10,p),g=f*x;for(let M=0;M<r;M++){let E=i?i.getX(M):M,y="";for(let w=0,S=a.length;w<S;w++){let R=a[w],v=n.getAttribute(R),T=v.itemSize;for(let C=0;C<T;C++)y+=`${Math.trunc(v[d[C]](E)*x+g)},`}if(y in e)h.push(e[y]);else{for(let w=0,S=a.length;w<S;w++){let R=a[w],v=n.getAttribute(R),T=n.morphAttributes[R],C=v.itemSize,N=l[R],F=c[R];for(let z=0;z<C;z++){let L=d[z],O=u[z];if(N[O](o,v[L](E)),T)for(let X=0,q=T.length;X<q;X++)F[X][O](o,T[X][L](E))}}e[y]=o,h.push(o),o++}}let m=n.clone();for(let M in n.attributes){let E=l[M];if(m.setAttribute(M,new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)),M in c)for(let y=0;y<c[M].length;y++){let w=c[M][y];m.morphAttributes[M][y]=new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)}}return m.setIndex(h),m}var Qf=new re,jf=new Be,td=new Xe,ed=new P,id=new P;function ri(n,t={}){let{x:e=0,y:i=0,z:s=0,rx:r=0,ry:o=0,rz:a=0,s:l=1}=t,c=t.sx??l,h=t.sy??l,d=t.sz??l;return td.set(r,o,a),jf.setFromEuler(td),ed.set(e,i,s),id.set(c,h,d),Qf.compose(ed,jf,id),n.applyMatrix4(Qf),n}function Fn(n,t){let e=n.index?n.toNonIndexed():n,i=t instanceof ht?t:new ht(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=i.r,r[o*3+1]=i.g,r[o*3+2]=i.b;e.setAttribute("color",new be(r,3)),e.attributes.uv||e.setAttribute("uv",new be(new Float32Array(s*2),2));for(let o of Object.keys(e.attributes))["position","normal","uv","color"].includes(o)||e.deleteAttribute(o);return e.clearGroups(),e}function G(n,t,e){return Fn(ri(n,e),t)}function Jt(n){let t=Jf(n,!1);return t.computeBoundingSphere(),t.computeBoundingBox(),t}function nd(n){n.deleteAttribute("normal"),n.deleteAttribute("uv");let t=Kf(n,1e-4);t.computeVertexNormals();let e=t.attributes.position.count;return t.setAttribute("uv",new be(new Float32Array(e*2),2)),t}function Dv(n=1){let t=new Fi;return t.moveTo(0,-.44*n),t.bezierCurveTo(-.1*n,-.33*n,-.52*n,-.08*n,-.52*n,.15*n),t.bezierCurveTo(-.52*n,.37*n,-.36*n,.49*n,-.21*n,.49*n),t.bezierCurveTo(-.09*n,.49*n,0,.41*n,0,.3*n),t.bezierCurveTo(0,.41*n,.09*n,.49*n,.21*n,.49*n),t.bezierCurveTo(.36*n,.49*n,.52*n,.37*n,.52*n,.15*n),t.bezierCurveTo(.52*n,-.08*n,.1*n,-.33*n,0,-.44*n),t}function wi(n=1,t=.16,e=1){let i=new Zi(Dv(n),{depth:t*n,bevelEnabled:!0,bevelThickness:.13*n,bevelSize:.09*n,bevelSegments:e>1?5:3,curveSegments:e>1?18:9});return i.center(),nd(i)}function Nv(n=.5,t=.23,e=5){let i=new Fi;for(let s=0;s<e*2;s++){let r=s%2===0?n:t,o=s/(e*2)*Math.PI*2+Math.PI/2,a=Math.cos(o)*r,l=Math.sin(o)*r;s===0?i.moveTo(a,l):i.lineTo(a,l)}return i.closePath(),i}function hs(n=1){let t=new Zi(Nv(.5*n,.24*n),{depth:.12*n,bevelEnabled:!0,bevelThickness:.08*n,bevelSize:.06*n,bevelSegments:3});return t.center(),nd(t)}function Th(n=.5){let t=[];for(let i=0;i<=18;i++){let s=i/18,r=-Math.PI/2+s*Math.PI,o=Math.cos(r)*n*(1+.1*Math.sin(s*Math.PI)*(s>.5?1:.55)),a=Math.sin(r)*n*.9;a-=Math.exp(-Math.pow((s-1)/.13,2))*.16*n,a+=Math.exp(-Math.pow(s/.1,2))*.07*n,t.push(new nt(Math.max(1e-4,o),a))}return new ln(t,20)}function sd(){let n=[[.2,-.04],[.195,.04],[.17,.13],[.125,.21],[.075,.27],[.03,.305],[1e-4,.315]].map(([e,i])=>new nt(e,i)),t=new ln(n,28);return t.scale(1,1,.72),t}function Ah(n=1){let t=n>1?24:12,e=n>1?16:9,i=new At(.5,t,e);ri(i,{sx:.66,sy:.5,sz:.3,rz:-.22,x:-.37});let s=new At(.5,t,e);ri(s,{sx:.66,sy:.5,sz:.3,rz:.22,x:.37});let r=new At(.5,t*.75,e);return ri(r,{sx:.32,sy:.32,sz:.3,z:.02}),[i,s,r]}function ir(n,t={}){let e=Ah().map(s=>Fn(s,n)),i=Jt(e);return ri(i,t)}function ji(n=1,t=16777215){let e=n*9301+49297,i=()=>(e=(e*9301+49297)%233280,e/233280),s=[],r=5+Math.floor(i()*3);for(let o=0;o<r;o++){let a=o/(r-1)-.5,l=.75+i()*.55-Math.abs(a)*.6;s.push(G(new At(1,11,8),t,{x:a*3.2+(i()-.5)*.4,y:i()*.45+(.5-Math.abs(a))*.5,z:(i()-.5)*.9,s:l,sy:l*.82}))}return s.push(G(new At(1,11,6),t,{sx:2.1,sy:.45,sz:.9,y:-.15})),Jt(s)}function Rh(n,t,e,i,s,r=0){let o=[],a=n/s;for(let l=0;l<s;l++)o.push(G(new Pt(t,t,a,10,1,!0),l%2?e:i,{y:r+a*(l+.5)}));return o}function Pl(n,t,e,i,s,r={}){let o=[];for(let a=0;a<s;a++){let l=new Pt(n,t,e,3,1,!1,a/s*Math.PI*2,Math.PI*2/s);o.push(G(l,i[a%i.length],r))}return o}function rd(){let n=Rh(2.9,.085,"#ff5f9e","#ffffff",10),t=new Ce(.32,.085,8,18,Math.PI);return n.push(G(t,"#ff5f9e",{x:.32,y:2.9})),n.push(G(new Pt(.1,.16,.18,12),"#ffffff",{x:.64,y:2.8})),n.push(G(new Pt(.17,.2,.12,12),"#ffffff",{y:.06})),Jt(n)}var od=()=>new At(.2,12,10).translate(.64,2.6,0);function ad(){let n=Rh(1.7,.13,"#ffe3f0","#ffffff",3),t=[[0,2.25,0,.95],[.6,1.95,.2,.62],[-.55,2.02,-.15,.66],[.1,2.85,.1,.62],[-.15,1.85,.5,.5]];for(let[e,i,s,r]of t)n.push(G(new At(1,12,8),"#ffffff",{x:e,y:i,z:s,s:r}));return Jt(n)}function ld(){let n=[G(new Pt(.07,.07,2.3,8),"#ffffff",{y:1.15})],t=[[.85,.18,"#ff6fae"],[.66,.2,"#ffffff"],[.47,.22,"#ff6fae"],[.29,.24,"#ffffff"],[.12,.26,"#ff6fae"]];for(let[e,i,s]of t)n.push(G(new Pt(e,e,i,22),s,{y:2.9,rx:Math.PI/2}));return n.push(ir("#7fd6ff",{s:.5,y:2.12,z:.1})),Jt(n)}function cd(n,t,e){let i=[];i.push(G(new Gt(2.6,2,2.4),n,{y:1})),i.push(G(new Je(2.15,1.55,4),t,{y:2.77,ry:Math.PI/4})),i.push(G(new Gt(.34,.8,.34),"#ffffff",{x:-.6,y:3.1,z:-.4})),i.push(G(new Gt(.42,.14,.42),t,{x:-.6,y:3.52,z:-.4})),i.push(G(new Gt(.1,1.05,.66),e,{x:1.31,y:.53})),i.push(G(new At(.05,8,6),"#ffd23f",{x:1.38,y:.55,z:.18}));for(let s of[-.78,.78])i.push(G(new Gt(.08,.62,.62),"#ffffff",{x:1.31,y:1.3,z:s})),i.push(G(new Gt(.1,.48,.48),"#bfe8ff",{x:1.32,y:1.3,z:s})),i.push(G(new Gt(.12,.14,.7),"#ffb3d1",{x:1.34,y:.92,z:s}));return i.push(G(wi(.42),"#ff4f97",{x:1.34,y:1.35,ry:Math.PI/2})),Jt(i)}function hd(){let n=[G(new Pt(.2,.26,.6,12),"#fff4ea",{y:.3})];n.push(G(new At(.62,16,8,0,Math.PI*2,0,Math.PI/2),"#ff5577",{y:.55,sy:.75}));let t=[[.3,.8,.2],[-.25,.85,.25],[.05,1,-.1],[-.3,.75,-.3],[.32,.72,-.28],[0,.78,.45]];for(let[e,i,s]of t)n.push(G(new At(.09,8,6),"#ffffff",{x:e,y:i,z:s}));return Jt(n)}function ud(){let n=[],t=[[0,.45,0,.6],[.5,.35,.1,.45],[-.5,.38,-.05,.48],[.1,.7,.05,.42]];for(let[i,s,r,o]of t)n.push(G(new At(1,10,7),"#9fe8b4",{x:i,y:s,z:r,s:o}));return[[.3,.9,.3],[-.4,.75,.35],[.6,.6,.4],[-.1,1.05,-.1],[0,.55,.55]].forEach(([i,s,r],o)=>n.push(G(new At(.1,8,6),o%2?"#ff8fc0":"#fff38a",{x:i,y:s,z:r}))),Jt(n)}function fd(){let n=[G(wi(1,.3),"#ffffff",{})];return n.push(G(new Pt(.012,.012,1.8,4),"#ffffff",{y:-1.35})),Jt(n)}function dd(){let n=[G(new Pt(.08,.11,2.8,8),"#58c47a",{y:1.4})];for(let t of[-1,1])n.push(G(new At(.4,10,6),"#6fd690",{x:t*.28,y:.9+(t>0?.4:0),sx:.85,sy:.14,sz:.4,rz:t*.5}));n.push(G(new Pt(.2,.24,.12,12),"#ffffff",{y:.06}));for(let t=0;t<5;t++){let e=t/5*Math.PI*2;n.push(G(new At(.3,10,8),"#ff7a9c",{x:Math.cos(e)*.2,y:3,z:Math.sin(e)*.2,sx:.55,sy:1.05,sz:.55,rx:Math.sin(e)*.35,rz:-Math.cos(e)*.35}))}return Jt(n)}var pd=()=>new At(.19,12,10).translate(0,3.12,0);function md(){let n=[G(new Pt(.16,.26,1.8,8),"#9a6a4a",{y:.9})],t=[[0,2.45,0,1.15],[.8,2.1,.2,.8],[-.75,2.15,-.1,.85],[.1,3.1,.15,.8],[.2,2.2,.8,.7],[-.2,2.3,-.8,.7]];for(let[i,s,r,o]of t)n.push(G(new At(1,12,8),"#7ed98e",{x:i,y:s,z:r,s:o}));let e=[[.9,2.5,.6],[-.9,2.4,.5],[.3,3.3,.8],[1.2,2,-.3],[-.5,2,1.05],[-1.2,2.3,-.5],[.5,1.8,-.9],[0,3.6,-.4]];for(let[i,s,r]of e)n.push(G(new At(.17,10,8),"#ff3b4f",{x:i,y:s,z:r}));return Jt(n)}function gd(){let n=[];for(let r=0;r<=14;r++){let o=r/14,a=-1+o*2,l=Math.sin(Math.min(1,o*1.25)*Math.PI*.5)*(1-Math.pow(Math.max(0,o-.82)/.18,2)*.35)*.95;n.push(new nt(Math.max(.001,l),a))}n.push(new nt(.3,1.03),new nt(.001,1.04));let t=new ln(n,18),e=[G(t,"#ff4262",{y:1})],i=3,s=()=>(i=i*16807%2147483647)/2147483647;for(let r=0;r<26;r++){let o=.18+s()*.62,a=s()*Math.PI*2,l=-1+o*2,c=Math.sin(Math.min(1,o*1.25)*Math.PI*.5)*.95;e.push(G(new At(.06,6,4),"#ffe27a",{x:Math.cos(a)*c,y:1+l,z:Math.sin(a)*c,sy:1.6}))}for(let r=0;r<6;r++){let o=r/6*Math.PI*2;e.push(G(new At(.4,8,6),"#4fc26b",{x:Math.cos(o)*.35,y:2.02,z:Math.sin(o)*.35,sx:1,sy:.12,sz:.4,ry:-o}))}return e.push(G(new Pt(.06,.09,.4,6),"#3f9a55",{y:2.2})),Jt(e)}function xd(){let n=[],t=["#ff4f7e","#ffd23f","#ff9ec8","#ffffff","#ff7a4f"];return[[0,0],[.45,.2],[-.4,.25],[.2,-.4],[-.3,-.35],[.6,-.3]].forEach(([i,s],r)=>{let o=.7+r%3*.15;n.push(G(new Pt(.03,.03,o,5),"#4fae5f",{x:i,y:o/2,z:s})),n.push(G(new At(.16,8,6,0,Math.PI*2,0,Math.PI*.62),t[r%t.length],{x:i,y:o+.1,z:s,rx:Math.PI,sy:1.3})),n.push(G(new At(.2,6,4),"#5cc46c",{x:i+.08,y:.25,z:s,sx:.25,sy:1,sz:.6,rz:-.3}))}),Jt(n)}function _d(){let n=[[.001,0],[.55,.02],[.7,.12],[.85,.45],[.95,.85],[1,1.1],[.93,1.12],[.86,.9],[.001,.9]].map(([e,i])=>new nt(e,i)),t=[G(new ln(n,24),"#ffb3d1",{y:.12})];return t.push(G(new Ce(.97,.05,6,24),"#ffffff",{y:1.2,rx:Math.PI/2})),t.push(G(new Pt(1.3,1.15,.12,24),"#ffffff",{y:.06})),t.push(G(new Ce(.3,.08,8,12,Math.PI*1.2),"#ffb3d1",{x:1,y:.72,rz:-Math.PI*.6})),t.push(G(wi(.45,.12),"#ff4f97",{y:.68,z:.92,s:1})),t.push(G(new Pt(.86,.86,.02,24),"#c98a5a",{y:1})),Jt(t)}function vd(){let n=[];for(let i=0;i<5;i++)for(let s=0;s<5;s++)n.push(G(new Gt(.5,.03,.5),(i+s)%2?"#ff5d73":"#ffffff",{x:(i-2)*.5,y:.02,z:(s-2)*.5}));return n.push(G(new Gt(.8,.5,.55),"#d9a066",{x:.3,y:.28,z:-.2})),n.push(G(new Ce(.3,.04,6,12,Math.PI),"#b8804a",{x:.3,y:.53,z:-.2})),n.push(G(new At(.16,10,8),"#ff3b4f",{x:-.5,y:.17,z:.4})),n.push(G(new At(.16,10,8),"#ff3b4f",{x:-.25,y:.17,z:.62})),Jt(n)}function yd(){let n=[G(new Pt(.06,.1,3,8),"#ffffff",{y:1.5})];return n.push(G(new Ce(.28,.035,6,20),"#ffd9f0",{y:3.2})),n.push(G(new At(.25,10,8),"#ffffff",{y:.12,sy:.5})),Jt(n)}var Md=()=>ri(hs(.5),{y:3.2});function bd(){return ji(8,"#ffffff")}function Sd(){let n=[];return n.push(G(new Je(2.2,2.6,8),"#c9b6e8",{y:-1.3,rx:Math.PI})),n.push(G(new Pt(2.25,2.3,.5,12),"#8fe0a8",{y:.2})),n.push(G(new Pt(.08,.1,.9,6),"#ffffff",{x:.8,y:.9,z:.3})),n.push(G(new At(.55,10,8),"#ffc2e9",{x:.8,y:1.55,z:.3})),n.push(G(new Gt(.9,.7,.8),"#ffffff",{x:-.6,y:.8,z:-.3})),n.push(G(new Je(.75,.6,4),"#ff8fc4",{x:-.6,y:1.45,z:-.3,ry:Math.PI/4})),n.push(G(new Gt(.22,.34,.05),"#bfe8ff",{x:-.6,y:.8,z:.13})),Jt(n)}function Ed(n,t){let e=[];for(let s=0;s<10;s++){let r=new At(1.6,3,12,s/10*Math.PI*2,Math.PI*2/10);e.push(G(r,s%2?n:t,{y:3.2,sy:1.15}))}e.push(G(new Pt(.45,.7,.5,10,1,!0),n,{y:1.35})),e.push(G(new Gt(.7,.55,.7),"#c98a5a",{y:.28}));for(let[s,r]of[[.3,.3],[-.3,.3],[.3,-.3],[-.3,-.3]])e.push(G(new Pt(.015,.015,.9,3),"#8a6a4a",{x:s,y:.95,z:r}));return Jt(e)}function wd(){let n=["#ff8fa3","#ffc38a","#fff08a","#a8f0b0","#8fd3ff","#c8a8ff"],t=[];n.forEach((e,i)=>{t.push(G(new Ce(8.9-i*.28,.15,6,40,Math.PI),e,{sz:.6}))});for(let e of[-7.5,7.5])t.push(ri(ji(e>0?6:7,"#ffffff"),{x:e,y:.3,s:.75}));return Jt(t)}function Td(){let n=Rh(3,.08,"#6a4cc4","#ffd23f",6);return n.push(G(new Pt(.5,.5,.06,12),"#6a4cc4",{y:3.05})),n.push(G(new Pt(.2,.24,.12,12),"#ffd23f",{y:.06})),Jt(n)}var Ad=()=>new At(.34,12,10).scale(1,1.25,1).translate(0,3.5,0),Rd=()=>new At(.09,8,6);function Cd(n,t){let e=[];return e.push(...Pl(1.8,1.8,1.6,[n,t],12,{y:.8})),e.push(...Pl(.05,2.2,1.8,[n,t],12,{y:2.5})),e.push(G(new Pt(.03,.03,.8,4),"#ffffff",{y:3.75})),e.push(G(new Je(.22,.4,3),"#ffd23f",{x:.18,y:3.95,rz:-Math.PI/2})),e.push(G(new Gt(.9,1.1,.08),"#3a2a6a",{x:0,y:.55,z:1.78})),Jt(e)}function Pd(){let t=[];for(let o of[-1.1,1.1])for(let a of[-1,1]){let l=Math.hypot(4.2,10.2);t.push(G(new Pt(.18,.22,l,8),"#ffffff",{x:a*2.1,y:5.1,z:o,rz:a*Math.atan2(4.2,10.2)}))}t.push(G(new Pt(.35,.35,2.6,12),"#ffd23f",{y:10.2,rx:Math.PI/2})),t.push(G(new Gt(6,.3,3),"#6a4cc4",{y:.15}));let e=[];e.push(G(new Ce(8.5,.18,8,64),"#ff6fae",{})),e.push(G(new Ce(8.5*.55,.12,6,40),"#ffffff",{}));for(let o=0;o<16;o++){let a=o/16*Math.PI*2;e.push(G(new Pt(.06,.06,8.5,4),"#ffffff",{x:Math.cos(a)*8.5/2,y:Math.sin(a)*8.5/2,rz:a-Math.PI/2}))}e.push(G(new Pt(.6,.6,.5,16),"#ff6fae",{rx:Math.PI/2}));let i=[];i.push(G(new Pt(.55,.45,.7,10),"#ffffff",{y:-.75})),i.push(G(new Je(.62,.4,10),"#ffffff",{y:-.2})),i.push(G(new Pt(.03,.03,.5,4),"#ffffff",{y:.1}));let s=[];for(let o=0;o<32;o++){let a=o/32*Math.PI*2;s.push(ri(new At(.16,6,4),{x:Math.cos(a)*(8.5+.25),y:Math.sin(a)*(8.5+.25),z:.2}))}let r=Jt(s.map(o=>Fn(o,"#ffffff")));return{stand:Jt(t),wheel:Jt(e),cabin:Jt(i),lights:r,radius:8.5,hub:10.2}}function Id(){let n=[];n.push(G(new Pt(3.6,3.8,.5,24),"#ffd23f",{y:.25})),n.push(G(new Pt(3.4,3.4,.08,24),"#ffffff",{y:.54})),n.push(G(new Pt(.4,.4,3.4,12),"#ff9ec8",{y:2.2}));let t=[];t.push(...Pl(.08,4.2,1.8,["#ff6fae","#ffffff"],16,{y:4.8})),t.push(...Pl(4.2,4.2,.5,["#ffd23f","#ff6fae"],16,{y:3.65})),t.push(G(new At(.35,10,8),"#ffd23f",{y:5.85}));for(let i=0;i<6;i++){let s=i/6*Math.PI*2;t.push(G(new Pt(.05,.05,3.2,5),"#ffd23f",{x:Math.cos(s)*2.6,y:2.1,z:Math.sin(s)*2.6}))}let e=[G(wi(.9,.3),"#ffffff",{}),G(ir("#ffffff",{s:.35,y:.45}),"#ffffff",{})];return{base:Jt(n),top:Jt(t),rider:Jt(e)}}function oi(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}function Ld(n,t,e,i){n.beginPath(),n.moveTo(t,e+i*.42),n.bezierCurveTo(t-i*.1,e+i*.33,t-i*.52,e+i*.08,t-i*.52,e-i*.15),n.bezierCurveTo(t-i*.52,e-i*.37,t-i*.36,e-i*.49,t-i*.21,e-i*.49),n.bezierCurveTo(t-i*.09,e-i*.49,t,e-i*.41,t,e-i*.3),n.bezierCurveTo(t,e-i*.41,t+i*.09,e-i*.49,t+i*.21,e-i*.49),n.bezierCurveTo(t+i*.36,e-i*.49,t+i*.52,e-i*.37,t+i*.52,e-i*.15),n.bezierCurveTo(t+i*.52,e+i*.08,t+i*.1,e+i*.33,t,e+i*.42),n.closePath()}function vo(n,t,e,i,s,r=5,o=-Math.PI/2){n.beginPath();for(let a=0;a<r*2;a++){let l=a%2===0?i:s,c=o+a/(r*2)*Math.PI*2,h=t+Math.cos(c)*l,d=e+Math.sin(c)*l;a===0?n.moveTo(h,d):n.lineTo(h,d)}n.closePath()}function Ti(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function ai(n,{repeat:t=!1,aniso:e=1,srgb:i=!0}={}){let s=new es(n);return i&&(s.colorSpace=Ge),t&&(s.wrapS=s.wrapT=ui),s.anisotropy=e,s}function Dd(n){let[i,s]=oi(512,512);s.fillStyle="#ffb0d2",s.fillRect(0,0,512,512);let r=f=>(f+3.7)/7.4*512;[[-3.15,-1.05],[-1.05,1.05],[1.05,3.15]].forEach(([f,p],x)=>{let g=r(f),m=r(p);for(let M=0;M<4;M++){let E=M*512/4;s.fillStyle=(M+x)%2===0?"#ffa3c9":"#ffbfdc",Ti(s,g+7,E+7,m-g-14,512/4-14,16),s.fill()}}),s.fillStyle="rgba(255,255,255,0.55)";let a=[[-2.1,.15],[0,.4],[2.1,.65],[-2.1,.9],[0,.9-.75],[2.1,.15+.25]];for(let[f,p]of a)Ld(s,r(f),p*512,26),s.fill();s.fillStyle="#ffffff";for(let f of[-1.05,1.05])for(let p=0;p<512;p+=512/2)Ti(s,r(f)-7,p+40,14,512/2-80,7),s.fill();let l=r(-3.15),c=r(3.15);s.fillStyle="#fffafc",s.fillRect(0,0,l,512),s.fillRect(c,0,512-c,512);let h=8;for(let f=0;f<h;f++){let p=(f+.5)/h*512;s.beginPath(),s.arc(l,p,512/h/2,-Math.PI/2,Math.PI/2),s.fill(),s.beginPath(),s.arc(c,p,512/h/2,Math.PI/2,Math.PI*1.5),s.fill()}let d=["#ff6fae","#7fd6ff","#ffd23f","#8ee6b8"];for(let f=0;f<26;f++){let x=(f%2===0?0:1)===0?6+f*37%Math.max(1,l-20):c+18+f*29%Math.max(1,512-c-26),g=f*97%512;s.save(),s.translate(x,g),s.rotate(f*1.3),s.fillStyle=d[f%d.length],Ti(s,-7,-2.5,14,5,2.5),s.fill(),s.restore()}let u=ai(i,{aniso:n});return u.wrapT=ui,u}function Nd(n){let[e,i]=oi(256,256);i.fillStyle="#b8f0cc",i.fillRect(0,0,256,256);let s=7,r=()=>(s=s*16807%2147483647,s/2147483647);for(let a=0;a<220;a++)i.fillStyle=r()>.5?"rgba(120, 214, 160, 0.45)":"rgba(215, 255, 228, 0.6)",i.beginPath(),i.ellipse(r()*256,r()*256,2+r()*4,1+r()*2,r()*3,0,Math.PI*2),i.fill();let o=["#ffffff","#ff9cc9","#ffe27a","#c9b3ff"];for(let a=0;a<16;a++){let l=r()*256,c=r()*256,h=o[a%o.length];i.fillStyle=h;for(let d=0;d<5;d++){let u=d/5*Math.PI*2;i.beginPath(),i.arc(l+Math.cos(u)*4,c+Math.sin(u)*4,3.4,0,Math.PI*2),i.fill()}i.fillStyle=h==="#ffe27a"?"#ff8fbf":"#ffd23f",i.beginPath(),i.arc(l,c,2.6,0,Math.PI*2),i.fill()}return ai(e,{repeat:!0,aniso:n})}function Il(n="#ff5f9e",t="#ffffff"){let[i,s]=oi(64,64);s.fillStyle=t,s.fillRect(0,0,64,64),s.fillStyle=n;for(let r=-2;r<4;r++)s.beginPath(),s.moveTo(r*32,0),s.lineTo(r*32+16,0),s.lineTo(r*32+16+64,64),s.lineTo(r*32+64,64),s.closePath(),s.fill();return ai(i,{repeat:!0})}function Ud(n){let[i,s]=oi(256,64);s.clearRect(0,0,256,64),s.fillStyle="#ffffff",Ti(s,0,20,256,7,3),s.fill(),Ti(s,0,44,256,7,3),s.fill();for(let o=0;o<8;o++){let a=o*32+8;s.beginPath(),s.moveTo(a,64),s.lineTo(a,12),s.quadraticCurveTo(a+8,0,a+16,12),s.lineTo(a+16,64),s.closePath(),s.fill()}s.fillStyle="rgba(255, 170, 205, 0.55)";for(let o=0;o<8;o++)s.fillRect(o*32+8,54,16,10);return ai(i,{repeat:!0,aniso:n})}function yo(n,t,e,i,s,r){for(let o of[-n,0,n])for(let a of[-t,0,t]){let l=e+o,c=i+a;l+s<0||l-s>n||c+s<0||c-s>t||r(l,c)}}function Ll(n){return()=>(n=n*16807%2147483647,n/2147483647)}var Ch=(n,t)=>(n+3.7)/7.4*t;function Fd(n){let[i,s]=oi(512,512),r=f=>Ch(f,512);s.fillStyle="#fff3e4",s.fillRect(0,0,512,512);let o=r(-3.15),a=r(3.15);s.fillStyle="rgba(255, 86, 110, 0.32)";for(let f=o;f<a;f+=64)s.fillRect(f,0,32,512);for(let f=0;f<512;f+=64)s.fillRect(o,f,a-o,32);let l=(f,p)=>{s.fillStyle="#ff3d5a",s.beginPath(),s.moveTo(f,p+20),s.bezierCurveTo(f-22,p+2,f-16,p-16,f,p-12),s.bezierCurveTo(f+16,p-16,f+22,p+2,f,p+20),s.fill(),s.fillStyle="#ffe27a";for(let[x,g]of[[-6,-4],[5,-3],[0,5],[-4,10],[5,9]])s.fillRect(f+x,p+g,2.5,3.5);s.fillStyle="#3fae5a";for(let x=0;x<5;x++){let g=-Math.PI/2+(x-2)*.55;s.beginPath(),s.ellipse(f+Math.cos(g)*7,p-13+Math.sin(g)*3,6,2.5,g,0,Math.PI*2),s.fill()}};l(r(-2.1),110),l(r(0),360),l(r(2.1),230),s.fillStyle="#ffffff";for(let f of[-1.05,1.05])for(let p=0;p<512;p+=512/2)Ti(s,r(f)-7,p+40,14,512/2-80,7),s.fill();let c=r(-3.15),h=r(3.15);s.fillRect(0,0,c,512),s.fillRect(h,0,512-h,512);let d=10;for(let f=0;f<d;f++){let p=(f+.5)/d*512;s.fillStyle="#ffffff",s.beginPath(),s.arc(c,p,512/d/2,-Math.PI/2,Math.PI/2),s.fill(),s.beginPath(),s.arc(h,p,512/d/2,Math.PI/2,Math.PI*1.5),s.fill(),s.fillStyle="rgba(255, 150, 180, 0.55)";for(let x of[c*.45,h+(512-h)*.55])s.beginPath(),s.arc(x,p,5,0,Math.PI*2),s.fill()}let u=ai(i,{aniso:n});return u.wrapT=ui,u}function Bd(n){let[i,s]=oi(512,512),r=u=>Ch(u,512);s.fillStyle="#ffffff",s.fillRect(0,0,512,512),["#ff9aae","#ffc896","#fff08e","#aef2bd","#9fd6ff","#cdb3ff"].forEach((u,f)=>{let p=r(-3.15+f*1.05),x=r(-3.15+(f+1)*1.05);s.fillStyle=u,s.fillRect(p,0,x-p+1,512),s.fillStyle="rgba(255,255,255,0.28)",s.fillRect(p+(x-p)*.3,0,(x-p)*.18,512)});let a=Ll(11);s.fillStyle="rgba(255,255,255,0.85)";for(let u=0;u<16;u++){let f=r(-3+a()*6),p=a()*512;vo(s,f,p,7+a()*5,2,4,0),s.fill()}s.fillStyle="#ffffff";for(let u of[-1.05,1.05])for(let f=0;f<512;f+=512/2)Ti(s,r(u)-6,f+50,12,512/2-100,6),s.fill();let l=r(-3.15),c=r(3.15);s.fillRect(0,0,l,512),s.fillRect(c,0,512-c,512);let h=6;for(let u=0;u<h;u++){let f=(u+.5)/h*512;s.beginPath(),s.arc(l,f,512/h/2+4,-Math.PI/2,Math.PI/2),s.fill(),s.beginPath(),s.arc(c,f,512/h/2+4,Math.PI/2,Math.PI*1.5),s.fill()}let d=ai(i,{aniso:n});return d.wrapT=ui,d}function Od(n){let[i,s]=oi(512,512),r=h=>Ch(h,512);s.fillStyle="#9a80ee",s.fillRect(0,0,512,512),[[-3.15,-1.05],[-1.05,1.05],[1.05,3.15]].forEach(([h,d],u)=>{let f=r(h),p=r(d);for(let x=0;x<4;x++){let g=x*512/4;s.fillStyle=(x+u)%2===0?"#8a6ee6":"#aa92f6",Ti(s,f+7,g+7,p-f-14,512/4-14,16),s.fill(),s.fillStyle="#ffd84a",vo(s,(f+p)/2,g+512/8,16,7),s.fill()}});for(let h of[-1.05,1.05])for(let d=8;d<512;d+=32)s.fillStyle="#fff0a0",s.beginPath(),s.arc(r(h),d,7,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.beginPath(),s.arc(r(h)-2,d-2,2.5,0,Math.PI*2),s.fill();let a=r(-3.15),l=r(3.15);for(let[h,d]of[[0,a],[l,512]]){s.fillStyle="#ffffff",s.fillRect(h,0,d-h,512),s.save(),s.beginPath(),s.rect(h,0,d-h,512),s.clip(),s.fillStyle="#ff4f7e";for(let u=-64;u<576;u+=32)s.beginPath(),s.moveTo(h,u),s.lineTo(d,u+20),s.lineTo(d,u+36),s.lineTo(h,u+16),s.fill();s.restore(),s.fillStyle="#ffd23f",s.fillRect(h===0?d-6:h,0,6,512)}let c=ai(i,{aniso:n});return c.wrapT=ui,c}function zd(n){let[e,i]=oi(256,256);i.fillStyle="#a4e89c",i.fillRect(0,0,256,256);let s=Ll(23);for(let o=0;o<200;o++){i.fillStyle=s()>.5?"rgba(96, 196, 110, 0.45)":"rgba(210, 255, 200, 0.55)";let a=s()*256,l=s()*256,c=2+s()*4,h=1+s()*2,d=s()*3;yo(256,256,a,l,6,(u,f)=>{i.beginPath(),i.ellipse(u,f,c,h,d,0,Math.PI*2),i.fill()})}let r=["#ff5c7a","#ffffff","#ffd23f","#ff9ec8","#c9a0ff","#ff8a4f"];for(let o=0;o<34;o++){let a=s()*256,l=s()*256,c=r[o%r.length],h=3.2+s()*1.8;yo(256,256,a,l,10,(d,u)=>{i.fillStyle=c;for(let f=0;f<5;f++){let p=f/5*Math.PI*2;i.beginPath(),i.arc(d+Math.cos(p)*h,u+Math.sin(p)*h,h*.85,0,Math.PI*2),i.fill()}i.fillStyle=c==="#ffd23f"?"#ff7a4f":"#ffe066",i.beginPath(),i.arc(d,u,h*.7,0,Math.PI*2),i.fill()})}return ai(e,{repeat:!0,aniso:n})}function Hd(n){let[e,i]=oi(256,256);i.fillStyle="#efe2ff",i.fillRect(0,0,256,256);let s=Ll(5),r=(o,a,l,c)=>{yo(256,256,o,a,l,(h,d)=>{let u=i.createRadialGradient(h,d-l*.25,0,h,d,l);u.addColorStop(0,c),u.addColorStop(.65,c),u.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=u,i.beginPath(),i.arc(h,d,l,0,Math.PI*2),i.fill()})};for(let o=0;o<26;o++)r(s()*256,s()*256,22+s()*26,o%3===0?"rgba(255, 214, 236, 0.9)":"rgba(226, 214, 255, 0.85)");for(let o=0;o<40;o++)r(s()*256,s()*256,14+s()*22,"rgba(255, 255, 255, 0.95)");return ai(e,{repeat:!0,aniso:n})}function kd(n){let[e,i]=oi(256,256);i.fillStyle="#7fd8bd",i.fillRect(0,0,256,256);let s=Ll(41),r=["#ff6fae","#ffd23f","#8fd3ff","#ffffff","#c9a0ff"];for(let o=0;o<70;o++){let a=s()*256,l=s()*256,c=r[o%r.length],h=s()*3;yo(256,256,a,l,8,(d,u)=>{i.save(),i.translate(d,u),i.rotate(h),i.fillStyle=c,Ti(i,-5,-2,10,4,2),i.fill(),i.restore()})}for(let o=0;o<10;o++){let a=s()*256,l=s()*256;yo(256,256,a,l,10,(c,h)=>{i.fillStyle="#fff3a0",vo(i,c,h,8,3.5),i.fill()})}return ai(e,{repeat:!0,aniso:n})}function Gd(n){let t=64*n.length,[e,i]=oi(t,64),s=t/n.length;for(let r=-n.length;r<n.length*2;r++)i.fillStyle=n[(r%n.length+n.length)%n.length],i.beginPath(),i.moveTo(r*s,0),i.lineTo(r*s+s,0),i.lineTo(r*s+s+64,64),i.lineTo(r*s+64,64),i.closePath(),i.fill();return ai(e,{repeat:!0})}function Vd(){let[n,t]=oi(4,4);return t.clearRect(0,0,4,4),ai(n,{repeat:!0})}function Wd(){let[t,e]=oi(128,128),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return i.addColorStop(0,"rgba(90, 30, 70, 0.55)"),i.addColorStop(.55,"rgba(90, 30, 70, 0.28)"),i.addColorStop(1,"rgba(90, 30, 70, 0)"),e.fillStyle=i,e.fillRect(0,0,128,128),ai(t,{})}function Xd(){let[t,e]=oi(512,512),i=a=>[a%4*128+128/2,Math.floor(a/4)*128+128/2],s=(a,l,c,h=1)=>{let d=e.createRadialGradient(a,l,0,a,l,c);d.addColorStop(0,`rgba(255,255,255,${h})`),d.addColorStop(.3,`rgba(255,255,255,${h*.45})`),d.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=d,e.fillRect(a-c,l-c,c*2,c*2)};e.fillStyle="#fff";{let[a,l]=i(0);s(a,l,60)}{let[a,l]=i(1);s(a,l,58,.5),e.fillStyle="#fff",vo(e,a,l,44,19),e.fill()}{let[a,l]=i(2);e.fillStyle="#fff",Ld(e,a,l+4,96),e.fill()}{let[a,l]=i(3);s(a,l,40,.8),e.fillStyle="#fff",vo(e,a,l,58,7,4,0),e.fill()}{let[a,l]=i(4);e.fillStyle="#fff",Ti(e,a-34,l-18,68,36,8),e.fill()}{let[a,l]=i(5);e.strokeStyle="#fff",e.lineWidth=6,e.beginPath(),e.arc(a,l,50,0,Math.PI*2),e.stroke()}{let[a,l]=i(6);e.fillStyle="#fff",e.beginPath(),e.moveTo(a,l+48),e.bezierCurveTo(a-46,l+10,a-30,l-40,a-6,l-44),e.lineTo(a,l-34),e.lineTo(a+6,l-44),e.bezierCurveTo(a+30,l-40,a+46,l+10,a,l+48),e.fill()}{let[a,l]=i(7);for(let c=0;c<6;c++){let h=c/6*Math.PI*2;s(a+Math.cos(h)*16,l+Math.sin(h)*16,40,.55)}s(a,l,50,.7)}let r=(a,l)=>{let[c,h]=i(a);e.fillStyle="#fff";let d=l?1:.35;for(let u of[-1,1])e.beginPath(),e.ellipse(c+u*22*d,h-12,26*d,22,u*-.5,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(c+u*16*d,h+16,17*d,15,u*.5,0,Math.PI*2),e.fill();e.fillStyle="rgba(80, 40, 70, 0.9)",Ti(e,c-4,h-26,8,52,4),e.fill()};r(8,!0),r(12,!1);{let[a,l]=i(9),c=e.createLinearGradient(a,l-60,a,l+60);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.7,"rgba(255,255,255,0.8)"),c.addColorStop(1,"rgba(255,255,255,1)"),e.fillStyle=c,Ti(e,a-7,l-60,14,120,7),e.fill()}{let[a,l]=i(10);s(a,l,56,.4),e.fillStyle="#fff",e.beginPath(),e.moveTo(a,l-40),e.lineTo(a+28,l),e.lineTo(a,l+40),e.lineTo(a-28,l),e.closePath(),e.fill()}{let[a,l]=i(11);for(let c=-2;c<=2;c++)s(a+c*16,l+Math.abs(c)*4,34-Math.abs(c)*4,.45)}return ai(t,{})}var us={magnet:{name:"Heart Magnet",time:10,color:"#ff4f97"},rush:{name:"Rainbow Rush",time:6.5,color:"#ff9f3d"},shield:{name:"Bubble Shield",time:30,color:"#4fb8ff"},double:{name:"Golden Apple x2",time:12,color:"#f5b400"},dash:{name:"Sugar Dash",time:2.6,color:"#ff7a3d"}},qd=50,Yd=3,Ph=4.5,Bn=[{id:"classic",name:"Classic Kitty",price:0,bow:15208749,overalls:3105750,shirt:16765503,acc:null},{id:"sakura",name:"Sakura Dream",price:150,bow:16740277,overalls:16751819,shirt:16777215,acc:"flower"},{id:"sailor",name:"Ocean Sailor",price:300,bow:2780660,overalls:2044272,shirt:16777215,acc:"sailor"},{id:"mint",name:"Mint Candy",price:450,bow:16761370,overalls:4181924,shirt:16773542,acc:null},{id:"star",name:"Starlight",price:700,bow:10316799,overalls:3483002,shirt:16769126,acc:"star"},{id:"princess",name:"Princess Kitty",price:1e3,bow:16727435,overalls:16759004,shirt:16777215,acc:"crown"},{id:"rainbow",name:"Rainbow Magic",price:1500,bow:"rainbow",overalls:16777215,shirt:12576511,acc:"star"}],ki=[{id:"candy",name:"Candy Town"},{id:"garden",name:"Strawberry Garden"},{id:"clouds",name:"Cloud Kingdom"},{id:"carnival",name:"Starlight Carnival"}],On=600,Ih=80,Dl=[{name:"Strawberry Morning",top:"#63bcff",horizon:"#ffd3ea",bottom:"#ffe6f2",fog:"#ffd8ec",light:"#fff3e6",lightI:1.55,hemiSky:"#fff6fb",hemiGround:"#ffc6e0",hemiI:1.1,sunColor:"#fff0d8",sunDisc:1,stars:0,lamps:.05,rainbow:.6,rim:.22,bloom:.55,hills:1},{name:"Golden Picnic",top:"#6f8cf0",horizon:"#ffcf9a",bottom:"#ffe0bf",fog:"#ffd6b0",light:"#ffe2b8",lightI:1.6,hemiSky:"#fff0dc",hemiGround:"#e8c0ff",hemiI:1.1,sunColor:"#ffc27a",sunDisc:1.2,stars:0,lamps:.35,rainbow:.35,rim:.35,bloom:.6,hills:1},{name:"Cotton Candy Sky",top:"#8e9cff",horizon:"#ffc4e6",bottom:"#fff0fa",fog:"#ffd6ee",light:"#fff0fa",lightI:1.55,hemiSky:"#f6eaff",hemiGround:"#ffd2e8",hemiI:1.2,sunColor:"#fff2fb",sunDisc:.9,stars:.25,lamps:.45,rainbow:.85,rim:.3,bloom:.62,hills:0},{name:"Starry Night",top:"#0d0a33",horizon:"#4f3590",bottom:"#2c2063",fog:"#3a2a75",light:"#b3c0ff",lightI:1.05,hemiSky:"#9189ff",hemiGround:"#46357a",hemiI:1.1,sunColor:"#e9ecff",sunDisc:.6,stars:1,lamps:1,rainbow:0,rim:.6,bloom:.68,hills:1}];var Ai=280,Nl=22,zn=0,Hn=1,Mo=2,nr=3;function Fl(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ul(n,t){let e={uMapB:{value:t},uZoneZ:{value:-1e6}},i=n.onBeforeCompile,s=n.customProgramCacheKey();return n.onBeforeCompile=(r,o)=>{i.call(n,r,o),r.uniforms.uMapB=e.uMapB,r.uniforms.uZoneZ=e.uZoneZ,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying float vZoneZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZoneZ = ( modelMatrix * vec4( transformed, 1.0 ) ).z;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uMapB;
uniform float uZoneZ;
varying float vZoneZ;`).replace("#include <map_fragment>",`#ifdef USE_MAP
          vec4 sampledDiffuseColor = vZoneZ < uZoneZ ? texture2D( uMapB, vMapUv ) : texture2D( map, vMapUv );
          diffuseColor *= sampledDiffuseColor;
        #endif`)},n.customProgramCacheKey=()=>s+"-zone",n.userData.zone=e,n}var Lh=class{constructor(t,e,i,s,r,o,a=null){this.world=t,this.meshes=e,this.count=i,this.spacing=s,this.span=i*s,this.place=r,this.biomes=a,this.rand=Fl(o),this.items=[];for(let l=0;l<i;l++)this.items.push({s:0,x:0,y:0,ry:0,rz:0,sc:1,sy:1,bob:0,phase:0,hidden:!1});this.m=new re,this.q=new Be,this.e=new Xe,this.v=new P,this.sv=new P;for(let l of e)l.frustumCulled=!1}reset(t){this.items.forEach((e,i)=>{e.s=t-22+i*this.spacing+this.rand()*this.spacing*.8,this.respawn(e,i)})}respawn(t,e){if(this.place(t,this.rand,e),t.hidden=!!this.biomes&&!this.biomes.includes(this.world.biomeAt(t.s)),!!t.color)for(let i of this.meshes)i.setColorAt(e,t.color),i.instanceColor.needsUpdate=!0}update(t,e){let{m:i,q:s,e:r,v:o,sv:a}=this,l=!1;for(let c=0;c<this.count;c++){let h=this.items[c],d=t-h.s;d>24&&(h.s+=this.span,this.respawn(h,c),d=t-h.s),h.hidden?a.set(0,0,0):(l=!0,a.set(h.sc,h.sc*h.sy,h.sc)),r.set(0,h.ry,h.rz),s.setFromEuler(r),o.set(h.x,h.y+(h.bob?Math.sin(e*1.4+h.phase)*h.bob:0),d),i.compose(o,s,a);for(let u of this.meshes)u.setMatrixAt(c,i)}for(let c of this.meshes)c.visible=l,l&&(c.instanceMatrix.needsUpdate=!0)}},Bl=class{constructor(t,e,i,s,r,o,a,l){this.world=t,this.count=i,this.spacing=s,this.span=i*s,this.place=r,this.animate=o,this.biomes=l,this.rand=Fl(a),this.items=[];for(let c=0;c<i;c++){let h=e();h.visible=!1,t.scene.add(h),this.items.push({obj:h,s:0,x:0,ry:0,sc:1,hidden:!0})}}reset(t){this.items.forEach((e,i)=>{e.s=t-22+i*this.spacing+this.rand()*this.spacing*.5,this.respawn(e)})}respawn(t){this.place(t,this.rand),t.hidden=!this.biomes.includes(this.world.biomeAt(t.s))}update(t,e){for(let i of this.items){let s=t-i.s;s>40&&(i.s+=this.span,this.respawn(i),s=t-i.s),i.obj.visible=!i.hidden&&s>-230,i.obj.visible&&(i.obj.position.set(i.x,0,s),i.obj.rotation.y=i.ry,i.obj.scale.setScalar(i.sc),this.animate(i.obj,e))}}},Ol=class{constructor(t,e){this.scene=t,this.renderer=e,this.origin=0;let i=Math.min(8,e.capabilities.getMaxAnisotropy());this.pal={},this.glowMats=[],this.buildLights(),this.buildSky(),this.buildBackground(),this.buildGround(i),this.buildProps(),this.zonePair=-1,this.setPalette(0)}zoneIndexAt(t){return Math.max(0,Math.floor((t-this.origin)/On))}biomeAt(t){return this.zoneIndexAt(t)%ki.length}paletteAt(t){let e=this.zoneIndexAt(t),s=(t-this.origin-e*On-(On-Ih))/Ih;return s=Math.min(1,Math.max(0,s)),e+s*s*(3-2*s)}buildLights(){this.hemi=new qr(16777215,16761053,1.2),this.scene.add(this.hemi),this.sun=new Jr(16777215,1.7),this.sun.position.set(7,18,11),this.sun.target.position.set(0,0,-12),this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.fog=new Ar(16767212,42,140)}setShadows(t){let e=this.sun;if(e.castShadow=t>0,!t)return;e.shadow.mapSize.set(t,t);let i=e.shadow.camera;i.left=-16,i.right=16,i.top=26,i.bottom=-26,i.near=2,i.far=70,i.updateProjectionMatrix(),e.shadow.bias=-8e-4,e.shadow.normalBias=.04,e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null)}buildSky(){this.skyUniforms={uTop:{value:new ht},uHorizon:{value:new ht},uBottom:{value:new ht},uSunColor:{value:new ht},uSunDir:{value:new P(-.35,.22,-.9).normalize()},uSunDisc:{value:1},uTime:{value:0}};let t=new Ot(new At(900,32,20),new he({uniforms:this.skyUniforms,vertexShader:`
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
          }`,side:Le,depthWrite:!1,depthTest:!1,fog:!1}));t.renderOrder=-10,t.frustumCulled=!1,this.sky=t,this.scene.add(t);let e=520,i=new Float32Array(e*3),s=new Float32Array(e),r=Fl(99);for(let a=0;a<e;a++){let l=r()*Math.PI*2,c=.08+r()*.92,h=Math.sqrt(1-c*c);i[a*3]=Math.cos(l)*h*800,i[a*3+1]=c*800,i[a*3+2]=Math.sin(l)*h*800,s[a]=r()*10}let o=new _e;o.setAttribute("position",new be(i,3)),o.setAttribute("aTw",new be(s,1)),this.starUniforms={uAlpha:{value:0},uTime:{value:0},uPx:{value:1}},this.stars=new ts(o,new he({uniforms:this.starUniforms,vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:Mi,fog:!1})),this.stars.renderOrder=-9,this.stars.frustumCulled=!1,this.scene.add(this.stars)}buildBackground(){let t=this.bg=new Me;this.scene.add(t),this.rainbowUniforms={uAlpha:{value:.6}};let e=new Ot(new Ce(300,26,6,80,Math.PI),new he({uniforms:this.rainbowUniforms,vertexShader:`
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
          }`,transparent:!0,depthWrite:!1,fog:!1}));e.scale.set(1,.9,.05),e.position.set(40,-150,-560),e.renderOrder=-8,this.rainbow=e,t.add(e);let i=Fe(16777215,{fog:!1,bend:!1}),s=new At(1,28,14,0,Math.PI*2,0,Math.PI/2),r=[[-250,-420,110,52,"#a9ecc4"],[-95,-470,115,44,"#ffc2de"],[70,-450,100,54,"#c9b8ff"],[220,-430,115,48,"#a9ecc4"],[360,-380,100,40,"#ffd3b0"],[-380,-360,100,42,"#ffd3b0"],[-170,-390,70,34,"#ffe3a3"],[140,-380,75,36,"#ffc2de"]];this.hills=new fi(s,i,r.length),this.hillColors=[],r.forEach(([x,g,m,M,E],y)=>{let w=new re().compose(new P(x,-22,g),new Be,new P(m,M,m*.8));this.hills.setMatrixAt(y,w),this.hillColors.push(new ht(E)),this.hills.setColorAt(y,this.hillColors[y])}),this.hills.frustumCulled=!1,t.add(this.hills);let o=[],a="#ffc4df",l="#ff6fae",c="#fff7fb",h="#ffd23f";o.push(G(new Gt(36,26,14),c,{y:13}));for(let x=-2;x<=2;x++)o.push(G(new Gt(4.2,3.2,14.4),c,{x:x*8,y:27.4}));let d=[[-22,44,6],[22,44,6],[-10,56,5],[10,56,5],[0,70,6.5]];for(let[x,g,m]of d)o.push(G(new Pt(m,m*1.05,g,18),a,{x,y:g/2,z:-2})),o.push(G(new Je(m*1.35,m*3.2,18),l,{x,y:g+m*1.6,z:-2})),o.push(G(new At(m*.3,10,8),h,{x,y:g+m*3.25,z:-2})),o.push(G(new Gt(m*.6,m*1.1,.4),"#8fd3ff",{x,y:g*.72,z:m-2}));o.push(G(wi(9,.3),l,{y:16,z:7.3})),o.push(G(new Gt(8,11,.6),"#ffe0ef",{y:5.5,z:7.1})),this.castle=new Ot(Jt(o),Fe(16777215,{vertexColors:!0,fog:!1,bend:!1})),this.castle.position.set(-62,-14,-480),this.castle.rotation.y=.18,t.add(this.castle);let u=[ji(1),ji(2),ji(5)],f=Fe(16777215,{vertexColors:!0,fog:!1,bend:!1,emissive:16770802,emissiveIntensity:.25});this.skyClouds=[];let p=Fl(7);for(let x=0;x<14;x++){let g=new Ot(u[x%3],f),m=7+p()*9;g.scale.set(m,m*.8,m*.7),g.position.set(-420+p()*840,45+p()*90,-250-p()*280),g.userData.speed=1.5+p()*2.5,t.add(g),this.skyClouds.push(g)}this.cloudMat=f}buildGround(t){this.sets=[];let e=(u,f,p,x)=>{for(let m of u)m.wrapS=m.wrapS===hi&&f===1?hi:ui,m.wrapT=ui,m.repeat.set(f,p);let g={textures:u,scroll:x,mats:[]};return this.sets.push(g),g};this.groundSet=e([Nd(t),zd(t),Hd(t),kd(t)],20,Ai/12,(u,f)=>u.offset.y=f/12%1);let i=new Bi(240,Ai,1,140);i.rotateX(-Math.PI/2),i.translate(0,-.02,Nl-Ai/2);let s=Ul(Fe(16777215,{map:this.groundSet.textures[0]}),this.groundSet.textures[1]);this.groundSet.mats.push(s),this.grass=new Ot(i,s),this.grass.frustumCulled=!1,this.grass.receiveShadow=!0,this.scene.add(this.grass),this.roadSet=e([Dd(t),Fd(t),Bd(t),Od(t)],1,Ai/8,(u,f)=>u.offset.y=f/8%1);let r=new Bi(7.4,Ai,1,160);r.rotateX(-Math.PI/2),r.translate(0,0,Nl-Ai/2);let o=Ul(Fe(16777215,{map:this.roadSet.textures[0]}),this.roadSet.textures[1]);this.roadSet.mats.push(o),this.road=new Ot(r,o),this.road.frustumCulled=!1,this.road.receiveShadow=!0,this.scene.add(this.road),this.curbSet=e([Il("#ff5f9e","#ffffff"),Il("#ff5d73","#fff4e6"),Gd(["#ff9aae","#ffc896","#fff08e","#aef2bd","#9fd6ff","#cdb3ff"]),Il("#ffd23f","#7d5fd8")],2,Ai/1.2,(u,f)=>u.offset.y=-(f/1.2)%1);let a=new Pt(.17,.17,Ai,12,160,!0);a.rotateX(Math.PI/2);let l=Ul(Fe(16777215,{map:this.curbSet.textures[0]}),this.curbSet.textures[1]);this.curbSet.mats.push(l);for(let u of[-1,1]){let f=new Ot(a,l);f.position.set(u*3.78,.13,Nl-Ai/2),f.frustumCulled=!1,f.receiveShadow=!0,this.scene.add(f)}let c=Ud(t);this.fenceSet=e([c,c,Vd(),c],Ai/4,1,(u,f)=>u.offset.x=f/4%1);let h=new Bi(Ai,.85,140,1);h.rotateY(Math.PI/2);let d=Ul(Fe(16777215,{map:c,alphaTest:.5,side:ni}),c);this.fenceSet.mats.push(d);for(let u of[-1,1]){let f=new Ot(h,d);f.position.set(u*5.6,.42,Nl-Ai/2),f.frustumCulled=!1,this.scene.add(f)}}buildProps(){let t=this.scrollers=[],e=(u,f,p,x=!1,g=!1)=>{let m=new fi(u,f,p);return x&&m.setColorAt(0,new ht(1,1,1)),m.castShadow=g,this.scene.add(m),m},i=(u={})=>Fe(16777215,{vertexColors:!0,...u}),s=u=>{let f=Qi(new ht(u));return f.userData.base=new ht(u),this.glowMats.push(f),f},r=(u,f,p,x,g,m)=>t.push(new Lh(this,u,f,p,x,g,m)),o=(u,f,p)=>{let x=p%2===0?-1:1;u.x=x*4.35,u.y=0,u.ry=x<0?0:Math.PI,u.sc=1},a=(u,f)=>(p,x)=>{let g=x()<.5?-1:1;p.x=g*(u+x()*f),p.y=0,p.ry=x()*6.28};r([e(rd(),i(),22,!1,!0),e(od(),s("#fff2c8"),22)],22,7,o,11,[zn]),r([e(dd(),i(),22,!1,!0),e(pd(),s("#ffe0ec"),22)],22,7,o,12,[Hn]),r([e(yd(),i(),22,!1,!0),e(Md(),s("#fff0a0"),22)],22,7,o,13,[Mo]);let l=["#ffb3d6","#ffe28a","#aee4ff","#d6b8ff"].map(u=>new ht(u));r([e(Td(),i(),22,!1,!0),e(Ad(),s("#ffffff"),22,!0)],22,7,(u,f,p)=>{o(u,f,p),u.color=l[p%l.length]},14,[nr]);let c=["#ffb3d6","#d9c2ff","#b8f0d9","#ffd6b8","#bfe3ff","#ffc2e9"].map(u=>new ht(u));r([e(ad(),i(),26,!0,!0)],26,7.5,(u,f)=>{a(7,14)(u,f),u.sc=.9+f()*.7,u.color=c[Math.floor(f()*c.length)]},21,[zn]),r([e(ld(),i(),10,!1,!0)],10,19,(u,f)=>{let p=f()<.5?-1:1;u.x=p*(6.4+f()*1.2),u.y=0,u.ry=(f()-.5)*.6,u.sc=.85+f()*.35},31,[zn]),[["#fff8f0","#ff5a6e","#ff8fb1"],["#fff2fa","#ff8fc4","#8fd3ff"],["#f3fbff","#7fb8ff","#ffd23f"]].forEach((u,f)=>{r([e(cd(...u),i(),4)],4,44,(p,x)=>{let g=x()<.5?-1:1;p.x=g*(12+x()*9),p.y=0,p.ry=(g<0?0:Math.PI)+(x()-.5)*.5,p.sc=.9+x()*.3},41+f*17,f===0?[zn,Hn]:[zn])}),r([e(hd(),i(),14)],14,11,(u,f)=>{a(6.2,10)(u,f),u.sc=.7+f()*.8},51,[zn]),r([e(ud(),i(),18)],18,8.5,(u,f)=>{a(5.9,12)(u,f),u.sc=.8+f()*.8},61,[zn,Hn]);let h=["#ff4f7e","#ff8fc4","#ff6fb5","#b58cff","#ffd23f"].map(u=>new ht(u));r([e(fd(),Qe(16777215,{vertexColors:!0,roughness:.2,envMapIntensity:.6}),12,!0)],12,15,(u,f)=>{let p=f()<.5?-1:1;u.x=p*(6+f()*12),u.y=3.5+f()*3,u.ry=(f()-.5)*1.2,u.sc=.6+f()*.35,u.bob=.35,u.phase=f()*6,u.color=h[Math.floor(f()*h.length)]},71,[zn,nr]),r([e(md(),i(),22,!1,!0)],22,8.5,(u,f)=>{a(7.5,13)(u,f),u.sc=.85+f()*.5},81,[Hn]),r([e(gd(),i(),10,!1,!0)],10,17,(u,f)=>{let p=f()<.5?-1:1;u.x=p*(6.6+f()*4),u.y=0,u.ry=f()*6.28,u.rz=p*.12,u.sc=.8+f()*.5},82,[Hn]),r([e(xd(),i(),24)],24,6,(u,f)=>{a(5.9,3.5)(u,f),u.sc=.9+f()*.5},83,[Hn]),r([e(_d(),i(),6,!1,!0)],6,30,(u,f)=>{a(8,8)(u,f),u.sc=1.1+f()*.5},84,[Hn]),r([e(vd(),i(),6)],6,28,(u,f)=>{a(9,9)(u,f),u.sc=1.2+f()*.4},85,[Hn]),r([e(bd(),i({emissive:16773368,emissiveIntensity:.25}),40)],40,4.3,(u,f,p)=>{let x=p%2===0?-1:1;u.x=x*(5.4+f()*1.2),u.y=-.2+f()*.3,u.ry=f()*6.28,u.sc=.55+f()*.35,u.sy=.8},91,[Mo]),r([e(Sd(),i(),10,!1,!0)],10,20,(u,f)=>{let p=f()<.5?-1:1;u.x=p*(11+f()*16),u.y=3+f()*6,u.ry=f()*6.28,u.sc=.8+f()*.6,u.bob=.6,u.phase=f()*6},92,[Mo]),[["#ff8fc4","#ffffff"],["#8fd3ff","#fff08a"]].forEach(([u,f],p)=>{r([e(Ed(u,f),i(),6)],6,36,(x,g)=>{let m=g()<.5?-1:1;x.x=m*(9+g()*22),x.y=7+g()*11,x.ry=g()*6.28,x.sc=1+g()*.6,x.bob=.9,x.phase=g()*6},93+p,[Mo])}),r([e(wd(),i({emissive:16777215,emissiveIntensity:.15}),4)],4,52,u=>{u.x=0,u.y=0,u.ry=0,u.sc=1.25},95,[Mo]);let d=["#ffd6f0","#fff2a0","#a8e8ff","#ffb0d0","#ffffff"].map(u=>new ht(u).multiplyScalar(2.6));this.stringBulbs=e(Rd(),Qi(16777215),300,!0),r([this.stringBulbs],300,.58,(u,f,p)=>{let x=p%2===0?-1:1;u.x=x*4.05,u.y=.36,u.ry=0,u.sc=1,u.color=d[(p>>1)%d.length]},101,[nr]),[["#ff6fae","#ffffff"],["#8f73e6","#ffd23f"]].forEach(([u,f],p)=>{r([e(Cd(u,f),i(),5,!1,!0)],5,38,(x,g)=>{let m=g()<.5?-1:1;x.x=m*(10+g()*10),x.y=0,x.ry=m<0?Math.PI/2:-Math.PI/2,x.sc=1+g()*.4},102+p,[nr])}),r([e(ji(4),i({emissive:16773366,emissiveIntensity:.3}),10)],10,22,(u,f)=>{let p=f()<.5?-1:1;u.x=p*(16+f()*16),u.y=9+f()*7,u.ry=f()*.6,u.sc=1.2+f()*1.4,u.bob=.5,u.phase=f()*6},111,null),this.buildLandmarks()}buildLandmarks(){let t=this.landmarks=[],e=Fe(16777215,{vertexColors:!0}),i=Pd(),s=["#ff8fc4","#ffd23f","#8fd3ff","#b58cff","#7fe0c0","#ff9a6a","#ffffff","#ff6fae"].map(l=>new ht(l)),r=Qi(new ht(2.6,2.2,1.6));this.glowMats.push(Object.assign(r,{userData:{base:new ht(1.1,.95,.75),always:1.5}})),t.push(new Bl(this,()=>{let l=new Me,c=new Ot(i.stand,e);c.castShadow=!0,l.add(c);let h=new Me;h.position.y=i.hub,h.add(new Ot(i.wheel,e)),h.add(new Ot(i.lights,r)),l.add(h);let d=new fi(i.cabin,e,8);return s.forEach((u,f)=>d.setColorAt(f,u)),d.frustumCulled=!1,l.add(d),l.userData={wheel:h,cabins:d,m:new re,p:new P,q:new Be,s:new P(1,1,1)},l},2,170,(l,c)=>{let h=c()<.5?-1:1;l.x=h*(22+c()*8),l.ry=h*.35,l.sc=1},(l,c)=>{let h=l.userData,d=c*.22;h.wheel.rotation.z=d;for(let u=0;u<8;u++){let f=d+u/8*Math.PI*2;h.p.set(Math.cos(f)*i.radius,i.hub+Math.sin(f)*i.radius,.1),h.m.compose(h.p,h.q,h.s),h.cabins.setMatrixAt(u,h.m)}h.cabins.instanceMatrix.needsUpdate=!0},121,[nr]));let o=Id(),a=["#ff8fc4","#8fd3ff","#ffd23f","#b58cff","#7fe0c0","#ffffff"].map(l=>new ht(l));t.push(new Bl(this,()=>{let l=new Me,c=new Ot(o.base,e);c.castShadow=!0,l.add(c);let h=new Me;h.add(new Ot(o.top,e));let d=new fi(o.rider,e,6);return a.forEach((u,f)=>d.setColorAt(f,u)),d.frustumCulled=!1,h.add(d),l.add(h),l.userData={rotor:h,riders:d,m:new re,p:new P,q:new Be,e:new Xe,s:new P(1,1,1)},l},2,120,(l,c)=>{let h=c()<.5?-1:1;l.x=h*(13+c()*6),l.ry=0,l.sc=1},(l,c)=>{let h=l.userData;h.rotor.rotation.y=c*.6;for(let d=0;d<6;d++){let u=d/6*Math.PI*2+Math.PI/6;h.p.set(Math.cos(u)*2.6,1.6+Math.sin(c*2.2+d*1.7)*.45,Math.sin(u)*2.6),h.e.set(0,-u,0),h.q.setFromEuler(h.e),h.m.compose(h.p,h.q,h.s),h.riders.setMatrixAt(d,h.m)}h.riders.instanceMatrix.needsUpdate=!0},122,[nr]))}reset(t,e=t){this.origin=e,this.zonePair=-1;for(let i of this.scrollers)i.reset(t);for(let i of this.landmarks)i.reset(t)}setPalette(t){let e=Dl.length,i=(Math.floor(t)%e+e)%e,s=(i+1)%e,r=t-Math.floor(t),o=Dl[i],a=Dl[s],l=this._pc||(this._pc={}),c=g=>{var E,y,w;let m=l[E=o.name+g]||(l[E]=new ht(o[g])),M=l[y=a.name+g]||(l[y]=new ht(a[g]));return((w=this.pal)[g]||(w[g]=new ht)).copy(m).lerp(M,r)},h=g=>this.pal[g]=o[g]+(a[g]-o[g])*r;this.skyUniforms.uTop.value.copy(c("top")),this.skyUniforms.uHorizon.value.copy(c("horizon")),this.skyUniforms.uBottom.value.copy(c("bottom")),this.skyUniforms.uSunColor.value.copy(c("sunColor")),this.skyUniforms.uSunDisc.value=h("sunDisc"),this.scene.fog.color.copy(c("fog")),this.sun.color.copy(c("light")),this.sun.intensity=h("lightI"),this.hemi.color.copy(c("hemiSky")),this.hemi.groundColor.copy(c("hemiGround")),this.hemi.intensity=h("hemiI"),this.starUniforms.uAlpha.value=h("stars"),this.rainbowUniforms.uAlpha.value=h("rainbow"),Cl.uRimStrength.value=h("rim");let d=h("lamps");for(let g of this.glowMats){let m=g.userData.always??.9+d*1.8;g.color.copy(g.userData.base).multiplyScalar(m)}h("bloom");let u=h("hills");this.hills.position.y=-(1-u)*75;let f=this.pal.horizon,p=this._tmp||(this._tmp=new ht);this.hillColors.forEach((g,m)=>{p.copy(g).lerp(f,.35),this.hills.setColorAt(m,p)}),this.hills.instanceColor.needsUpdate=!0;let x=h("stars");this.castle.material.color.setRGB(1-x*.45,1-x*.5,1-x*.3),this.cloudMat.emissiveIntensity=.25*(1-x*.8)}update(t,e,i,s){let r=e-26,o=this.zoneIndexAt(r),a=this.origin+(o+1)*On,l=o%ki.length,c=(o+1)%ki.length;for(let h of this.sets){for(let d of h.textures)h.scroll(d,e);for(let d of h.mats)d.map=h.textures[l],d.userData.zone.uMapB.value=h.textures[c],d.userData.zone.uZoneZ.value=e-a}this.zoneNow=this.zoneIndexAt(e),this.biomeNow=this.zoneNow%ki.length;for(let h of this.scrollers)h.update(e,s);for(let h of this.landmarks)h.update(e,s);this.sky.position.copy(i.position),this.stars.position.copy(i.position),this.stars.rotation.y=s*.01,this.starUniforms.uTime.value=s,this.bg.position.set(i.position.x*.9,0,i.position.z);for(let h of this.skyClouds)h.position.x+=h.userData.speed*t,h.position.x>460&&(h.position.x-=920);Ei.uBendX.value=Math.sin(e*.0045)*.0011}};var bo=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i));function Bv(){return new he({uniforms:{uTime:{value:0},uAlpha:{value:1},...Ei},vertexShader:`
      ${un}
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        ${fn}
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
      }`,transparent:!0,depthWrite:!1,blending:Mi})}var zl=class{constructor(){this.root=new Me,this.body=new Me,this.root.add(this.body),this.mats={white:Fe(16777215,{rim:!0}),black:Qi(1839127),shine:Qi(16777215),nose:Fe(16761887),bow:Qe(15208749,{roughness:.6,envMapIntensity:.3}),shirt:Fe(16765503,{rim:!0}),overalls:Fe(3105750,{rim:!0}),gold:Qe(16763196,{roughness:.25,metalness:.6,emissive:7031296,emissiveIntensity:.4}),acc:Qe(16748480,{roughness:.35}),accGlow:Qe(16769126,{emissive:16758528,emissiveIntensity:1.3,roughness:.3})},this.pose={legL:0,legR:0,armLx:0,armRx:0,armLz:-.35,armRz:.35,tiltX:0,rotX:0,lift:0,headZ:0,headX:0,spin:0},this.mode="idle",this.time=0,this.phase=0,this.squash=0,this.squashV=0,this.blinkT=2,this.waveT=2.5,this.rainbowBow=!1,this.build()}add(t,e,i,s=!1){let r=new Ot(e,i);if(t.add(r),s){let o=new Ot(e,_o);r.add(o)}return r}build(){let t=this.mats;this.body.position.y=.03;let e=this.head=new Me;e.position.set(0,1.07,0),this.body.add(e);let i=new At(.5,48,32);i.scale(1.2,.9,1),this.add(e,i,t.white,!0);let s=sd();for(let S of[-1,1]){let R=this.add(e,s,t.white,!0);R.position.set(S*.33,.25,.03),R.rotation.z=-S*.52}let r=new At(.5,20,14);r.scale(.1,.142,.06);let o=new At(.017,8,6);this.eyes=[],this.xEyes=new Me,e.add(this.xEyes);let a=new Gt(.13,.026,.02);for(let S of[-1,1]){let R=this.add(e,r,t.black);R.position.set(S*.205,-.02,-.458),R.rotation.y=S*.38;let v=new Ot(o,t.shine);v.position.set(.016,.03,-.027),R.add(v),this.eyes.push(R);for(let T of[.8,-.8]){let C=new Ot(a,t.black);C.position.set(S*.205,-.02,-.47),C.rotation.set(0,S*.38,T),this.xEyes.add(C)}}this.xEyes.visible=!1;let l=new At(.5,16,12);l.scale(.13,.085,.07),this.add(e,l,t.nose).position.set(0,-.125,-.475);let h=new Pt(.012,.012,.34,6);h.rotateZ(Math.PI/2);for(let S of[-1,1])for(let R=0;R<3;R++){let v=this.add(e,h,t.black);v.position.set(S*.66,-.035-R*.075,-.24+R*.02),v.rotation.z=S*(.16-R*.16),v.rotation.y=S*.18}this.bow=new Me,this.bow.position.set(-.31,.33,-.07),this.bow.rotation.set(-.12,.25,.42),this.bow.scale.setScalar(.5),e.add(this.bow);for(let S of Ah(2))this.add(this.bow,S,t.bow,!0);this.acc=new Me,e.add(this.acc);let d=this.add(this.body,new Ui(.24,.16,8,22),t.shirt,!0);d.position.y=.47;let u=new Ui(.258,.06,8,22);u.scale(1,1,.96);let f=this.add(this.body,u,t.overalls,!0);f.position.y=.34;let p=new At(.035,10,8);for(let S of[-1,1])this.add(this.body,p,t.shirt).position.set(S*.09,.5,-.235);let x=new Ui(.078,.14,6,14),g=new Pt(.105,.094,.13,16);this.arms=[];for(let S of[-1,1]){let R=new Me;R.position.set(S*.24,.6,0),this.body.add(R);let v=this.add(R,x,t.white,!0);v.position.y=-.15;let T=this.add(R,g,t.shirt,!0);T.position.y=-.035,this.arms.push(R)}let m=new Ui(.1,.07,6,14);this.legs=[];for(let S of[-1,1]){let R=new Me;R.position.set(S*.12,.2,0),this.body.add(R);let v=this.add(R,m,t.white,!0);v.position.y=-.1,this.legs.push(R)}let M=new Ui(.055,.13,4,10),E=this.add(this.body,M,t.white,!0);E.position.set(0,.26,.25),E.rotation.x=.95,this.tail=E,this.shadow=new Ot(new Bi(1.35,1.1),null),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=1,this.root.add(this.shadow),this.cloud=new Ot(ji(3,16777215),Fe(16777215,{vertexColors:!0,emissive:16762598,emissiveIntensity:.35})),this.cloud.scale.set(.42,.34,.5),this.cloud.position.y=-.12,this.cloud.visible=!1,this.root.add(this.cloud),this.cloudAmt=0,this.bubbleMat=Bv(),this.bubble=new Ot(new At(1,32,20),this.bubbleMat),this.bubble.position.y=.78,this.bubble.visible=!1,this.root.add(this.bubble),this.bubbleAmt=0,this.halo=new Ot(new Ce(.75,.05,8,40),Qi(new ht(2.2,.55,1.2),{transparent:!0,opacity:.9})),this.halo.rotation.x=Math.PI/2,this.halo.visible=!1,this.root.add(this.halo),this.dizzy=new Me,this.dizzy.position.y=1.75;let y=hs(.22),w=Qe(16767050,{emissive:16754688,emissiveIntensity:.9});for(let S=0;S<3;S++){let R=new Ot(y,w);this.dizzy.add(R)}this.dizzy.visible=!1,this.root.add(this.dizzy)}setShadowMaterial(t){this.shadow.material=t}setOutfit(t){let e=this.mats;for(this.rainbowBow=t.bow==="rainbow",this.rainbowBow||e.bow.color.set(t.bow),e.overalls.color.set(t.overalls),e.shirt.color.set(t.shirt);this.acc.children.length;)this.acc.remove(this.acc.children[0]);t.acc&&this.acc.add(this.accessory(t.acc)),t.acc==="flower"&&e.acc.color.set(16753615),t.acc==="crown"&&e.acc.color.set(16732055)}accessory(t){let e=this.accCache||(this.accCache={});if(e[t])return e[t];let i=this.mats,s=new Me;if(t==="flower"){let r=new At(.075,12,10);for(let a=0;a<5;a++){let l=a/5*Math.PI*2,c=this.add(s,r,i.acc,!0);c.position.set(Math.cos(l)*.075,Math.sin(l)*.075,0),c.scale.set(1,1,.55)}let o=this.add(s,new At(.05,10,8),i.nose);o.position.z=-.02,s.position.set(.36,.28,-.2),s.rotation.y=.5}else if(t==="sailor"){let r=Fe(16777215),o=this.add(s,new Pt(.2,.23,.13,24),r,!0);o.position.y=.06;let a=this.add(s,new Pt(.235,.235,.05,24),Fe(2044272));a.position.y=.02;let l=this.add(s,new Ce(.23,.035,8,24),r,!0);l.rotation.x=Math.PI/2,s.position.set(.12,.43,.02),s.rotation.z=-.22}else if(t==="star"){let r=this.add(s,hs(.34),i.accGlow,!0);r.position.set(.34,.3,-.12),r.rotation.set(0,.4,-.2)}else if(t==="crown"){let r=this.add(s,new Pt(.19,.2,.1,24,1,!0),i.gold,!0);r.position.y=.05;let o=new Je(.05,.14,8),a=new At(.03,8,6);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;this.add(s,o,i.gold).position.set(Math.cos(c)*.19,.16,Math.sin(c)*.19),this.add(s,a,i.acc).position.set(Math.cos(c)*.2,.05,Math.sin(c)*.2)}s.position.set(.1,.44,0),s.rotation.z=-.18}return s.traverse(r=>{r.isMesh&&r.material!==_o&&(r.castShadow=!0)}),e[t]=s,s}kick(t){this.squashV+=t}update(t,e){this.time+=t;let i=this.time,s=this.pose,r=e.mode,o={legL:0,legR:0,armLx:0,armRx:0,armLz:-.32,armRz:.32,tiltX:0,rotX:0,lift:0,headZ:0,headX:0,spin:0},a=16,l=0;if(r==="run"){let E=2.3+e.speed*.075;this.phase+=t*E*Math.PI*2;let y=Math.sin(this.phase);o.legL=y*.95,o.legR=-y*.95,o.armLx=-y*.9,o.armRx=y*.9,o.armLz=-.28,o.armRz=.28,o.tiltX=-.1,o.headZ=Math.sin(this.phase)*.05,o.headX=.04,l=Math.abs(Math.cos(this.phase))*.085,a=30}else if(r==="jump")o.legL=-.75,o.legR=.35,o.armLz=-2.3,o.armRz=2.3,o.armLx=-.2,o.armRx=-.2,o.tiltX=.05,o.headX=-.08,a=14;else if(r==="slide")o.rotX=-1.28,o.lift=.3,o.armLx=-2.9,o.armRx=-2.9,o.armLz=-.2,o.armRz=.2,o.legL=.35+Math.sin(i*30)*.1,o.legR=.35-Math.sin(i*30)*.1,o.headX=.35,a=22;else if(r==="fly")o.rotX=-.35,o.armLz=-1.35+Math.sin(i*7)*.12,o.armRz=1.35-Math.sin(i*7)*.12,o.legL=.55,o.legR=.35,o.headX=-.15,l=Math.sin(i*4)*.08,a=8;else if(r==="crash")o.tiltX=.3,o.lift=-.08,o.legL=1.4,o.legR=1.2,o.armLz=-1.15+Math.sin(i*6)*.1,o.armRz=1.15-Math.sin(i*6)*.1,o.armLx=-.35,o.armRx=-.35,o.headZ=Math.sin(i*4.5)*.14,o.headX=-.12,a=10;else if(r==="happy")o.armLz=-2.5+Math.sin(i*14)*.25,o.armRz=2.5-Math.sin(i*14)*.25,l=Math.abs(Math.sin(i*7))*.35,o.headZ=Math.sin(i*7)*.1,a=18;else{this.waveT-=t;let E=this.waveT<1.4&&this.waveT>0;this.waveT<0&&(this.waveT=3.5+Math.random()*2),o.armRz=E?2.55+Math.sin(i*13)*.35:.32+Math.sin(i*2)*.04,o.armLz=-.32-Math.sin(i*2)*.04,o.headZ=Math.sin(i*1.3)*.07+(E?-.06:0),l=Math.sin(i*2.2)*.015+.015,a=10}for(let E in o)s[E]=bo(s[E],o[E],a,t);let c=190,h=13;this.squashV+=(-c*this.squash-h*this.squashV)*t,this.squash+=this.squashV*t;let d=$i.clamp(this.squash,-.4,.4);this.legs[0].rotation.x=s.legL,this.legs[1].rotation.x=s.legR,this.arms[0].rotation.set(s.armLx,0,s.armLz),this.arms[1].rotation.set(s.armRx,0,s.armRz),this.head.rotation.set(s.headX,0,s.headZ),this.body.rotation.x=s.rotX+s.tiltX,this.body.position.y=.03+s.lift+l,this.body.scale.set(1-d*.45,1+d,1-d*.45),this.tail.rotation.z=Math.sin(i*6)*.35,this.root.rotation.z=bo(this.root.rotation.z,-(e.vx||0)*.028,12,t);let u=(e.facing||0)+(e.vx||0)*-.018;this.root.rotation.y=bo(this.root.rotation.y,u,7,t),this.bow.rotation.z=.42+Math.sin(i*9)*.04+d*.5,this.rainbowBow&&this.mats.bow.color.setHSL(i*.25%1,.9,.58),this.blinkT-=t;let f=1;this.blinkT<.12&&(f=.12),this.blinkT<0&&(this.blinkT=2+Math.random()*3);let p=r==="crash";for(let E of this.eyes)E.scale.y=f,E.visible=!p;this.xEyes.visible=p;let x=Math.max(0,e.height||0);this.shadow.position.y=-x+.03;let g=1/(1+x*.4);this.shadow.scale.set(g,g,g),this.shadow.visible=this.useBlob!==!1&&!e.flying,this.cloudAmt=bo(this.cloudAmt,e.flying?1:0,6,t),this.cloud.visible=this.cloudAmt>.02;let m=this.cloudAmt;this.cloud.scale.set(.42*m,.34*m,.5*m),this.cloud.rotation.y=Math.sin(i*2)*.1,this.bubbleAmt=bo(this.bubbleAmt,e.shield?1:0,10,t),this.bubble.visible=this.bubbleAmt>.02,this.bubbleMat.uniforms.uTime.value=i,this.bubbleMat.uniforms.uAlpha.value=this.bubbleAmt;let M=1+Math.sin(i*6)*.03;if(this.bubble.scale.set(M*this.bubbleAmt,(2-M)*this.bubbleAmt,M*this.bubbleAmt),this.halo.visible=!!e.magnet,e.magnet){this.halo.position.y=-x+.08;let E=1+Math.sin(i*8)*.08;this.halo.scale.set(E,E,E)}this.dizzy.visible=p,p&&(this.dizzy.children.forEach((E,y)=>{let w=i*4+y/3*Math.PI*2;E.position.set(Math.cos(w)*.5,Math.sin(i*6+y)*.06,Math.sin(w)*.5),E.rotation.set(0,w*2,0)}),this.dizzy.position.set(0,1.72,.32))}};var dn=2.1,rr=7,sr=5,$d=.45;function Ov(){let n=[];for(let t of[-.86,.86]){for(let e=0;e<4;e++)n.push(G(new Pt(.095,.095,.21,12),e%2?"#ff5f9e":"#ffffff",{x:t,y:.105+e*.21}));n.push(G(new At(.14,12,10),"#ff5f9e",{x:t,y:.9}))}for(let t=0;t<8;t++)n.push(G(new Pt(.11,.11,.215,12),t%2?"#ff5f9e":"#ffffff",{x:-.7525+t*.215,y:.64,rz:Math.PI/2}));return n.push(G(new Pt(.075,.075,1.72,10),"#8fd3ff",{y:.3,rz:Math.PI/2})),n.push(ir("#e8112d",{s:.42,y:.66,z:.12})),Jt(n)}function zv(){let n=[];for(let e of[-.92,.92]){for(let i=0;i<8;i++)n.push(G(new Pt(.1,.1,.31,12),i%2?"#6fdcc0":"#ffffff",{x:e,y:.155+i*.31}));n.push(G(new At(.16,12,10),"#ffd23f",{x:e,y:2.56}))}n.push(G(new Gt(1.94,.78,.1),"#ffffff",{y:1.56})),n.push(G(new Gt(1.8,.64,.14),"#ff6fae",{y:1.56})),n.push(G(wi(.46,.2),"#ffffff",{y:1.57,z:.12})),n.push(G(new Pt(.05,.05,1.84,8),"#ffffff",{y:2.42,rz:Math.PI/2}));let t=["#ffd23f","#8fd3ff","#ffffff","#b58cff","#ffd23f","#8fd3ff"];for(let e=0;e<6;e++){let i=-.75+e*.3;n.push(G(new Je(.14,.3,3),t[e],{x:i,y:1.08,rx:Math.PI,ry:Math.PI/6}))}return Jt(n)}function Hv(){let n=[];return n.push(G(new Gt(1.8,1.35,1.6),"#ff9ec8",{y:.675})),n.push(G(new Gt(.3,1.37,1.62),"#ffffff",{y:.675})),n.push(G(new Gt(1.82,1.37,.3),"#ffffff",{y:.675})),n.push(G(new Gt(1.35,1,1.25),"#8fe3c9",{y:1.85,ry:.15})),n.push(G(new Gt(.26,1.02,1.27),"#ffd23f",{y:1.85,ry:.15})),n.push(G(new Gt(1.37,1.02,.26),"#ffd23f",{y:1.85,ry:.15})),n.push(ir("#ff4f97",{s:.75,y:2.5,ry:.15})),Jt(n)}function kv(){let n=[],t=[[.92,.9,0,"#fff4f8"],[.7,.75,.9,"#ffb3d1"],[.48,.62,1.65,"#fff4f8"]];for(let[e,i,s,r]of t){n.push(G(new Pt(e,e,i,28),r,{y:s+i/2})),n.push(G(new Ce(e,.07,8,28),r==="#fff4f8"?"#ff8fc0":"#ffffff",{y:s+i,rx:Math.PI/2}));let o=Math.round(e*9);for(let a=0;a<o;a++){let l=a/o*Math.PI*2;n.push(G(new At(.1,8,6),"#ffffff",{x:Math.cos(l)*e,y:s+.08,z:Math.sin(l)*e}))}}for(let[e,i]of[[0,0],[.22,.2],[-.24,.12],[.05,-.25]])n.push(G(new At(.14,12,10),"#ff3355",{x:e,y:2.38,z:i,sy:1.2})),n.push(G(new Je(.07,.08,6),"#4fc26b",{x:e,y:2.56,z:i}));return Jt(n)}function Gv(){let n=[];for(let s=0;s<14;s++){let r=s/14*Math.PI*2;n.push(G(new Gt(.34,1,.1),s%2?"#c9a8ff":"#b08cff",{x:Math.cos(r)*.72,y:.5,z:Math.sin(r)*.72,ry:-r+Math.PI/2,rx:0}))}n.push(G(new Pt(.72,.62,1,20),"#b08cff",{y:.5}));let e=[[.82,1.15],[.66,1.5],[.48,1.8],[.3,2.05]];for(let[s,r]of e)n.push(G(new Ce(s,.22,10,26),"#ffa8cf",{y:r,rx:Math.PI/2}));n.push(G(new At(.28,14,10),"#ffa8cf",{y:2.2})),n.push(G(new At(.2,14,10),"#ff2a4d",{y:2.52})),n.push(G(new Pt(.02,.02,.28,5),"#6b3b2a",{y:2.78,rz:.4}));let i=["#ffd23f","#8fd3ff","#ffffff","#6fdcc0"];for(let s=0;s<18;s++){let r=s*2.4,o=.5+s%3*.12;n.push(G(new Ui(.025,.08,2,4),i[s%4],{x:Math.cos(r)*o,y:1.3+s%4*.18,z:Math.sin(r)*o,rz:r,rx:r*.7}))}return Jt(n)}function Nh(n,t){let e=[],i=rr-.3,s=-rr/2;e.push(G(new Gt(1.9,1.72,i),n,{y:1.12,z:s})),e.push(G(new Gt(1.98,.14,i+.06),"#ffffff",{y:2.03,z:s})),e.push(G(new Gt(1.94,.2,i+.02),t,{y:.66,z:s})),e.push(G(new Gt(1.7,.2,i-.3),"#ffe6f1",{y:.2,z:s}));for(let r of[-.965,.965]){for(let o=0;o<3;o++)e.push(G(new Gt(.06,.62,1.2),"#ffffff",{x:r,y:1.42,z:-1.2-o*2.2})),e.push(G(new Gt(.08,.5,1.06),"#aee4ff",{x:r,y:1.42,z:-1.2-o*2.2}));for(let o of[-.9,-2,-4.7,-5.8])e.push(G(new Pt(.26,.26,.14,16),"#5a3d6b",{x:r*.93,y:.26,z:o,rz:Math.PI/2})),e.push(G(new Pt(.1,.1,.16,10),"#ffd23f",{x:r*.93,y:.26,z:o,rz:Math.PI/2}))}e.push(G(new Gt(1.4,.66,.06),"#ffffff",{y:1.5,z:-.12})),e.push(G(new Gt(1.26,.52,.08),"#aee4ff",{y:1.5,z:-.1})),e.push(G(wi(.42,.18),"#ff3d7f",{y:.95,z:-.08}));for(let r of[-.62,.62])e.push(G(new At(.13,12,10),new ht(3.2,2.9,1.6),{x:r,y:.95,z:-.12}));return Jt(e)}function Vv(){let n=[],t=new Fi;t.moveTo(0,0),t.lineTo(sr,0),t.lineTo(0,dn),t.closePath();let e=new Zi(t,{depth:1.86,bevelEnabled:!1});ri(e,{ry:-Math.PI/2,x:.93}),n.push(Fn(e,"#ffb0d2"));let i=Math.atan2(dn,sr),s=Math.hypot(dn,sr);for(let r=0;r<5;r++){let o=(r+.5)/5,a=dn*(1-o)+.02,l=sr*o;n.push(G(new Gt(1.7,.04,.3),"#ffffff",{y:a,z:l,rx:i}))}for(let r of[-.93,.93])n.push(G(new Gt(.1,.12,s),"#ffffff",{x:r,y:dn/2+.06,z:sr/2,rx:i}));return Jt(n)}function Wv(){let n=[G(new At(.82,28,20),"#ff8fc0",{})],t=[[0,0,0],[1.1,.3,0],[.5,1.2,.4],[2.1,.7,1.1],[.9,2.3,.2],[1.6,1.6,2.2]];for(let[i,s,r]of t)n.push(G(new Ce(.815,.035,6,48),"#ff6fae",{rx:i,ry:s,rz:r}));let e=new ks([new P(.3,-.6,.6),new P(.6,-.8,1),new P(.2,-.82,1.5),new P(.6,-.82,2)]);return n.push(G(new Gr(e,20,.04,6,!1),"#ff6fae",{})),Jt(n)}function Xv(){let n=[];return n.push(G(new At(1,28,14,0,Math.PI*2,0,Math.PI/2),"#ff5fa8",{sx:.95,sy:.36,sz:.85})),n.push(G(new At(1,24,10,0,Math.PI*2,0,Math.PI/2),"#ff9fcc",{sx:.7,sy:.3,sz:.62,y:.08})),n.push(G(new At(.12,8,6),"#ffffff",{x:-.35,y:.33,z:-.18,sy:.5})),n.push(G(new At(.08,8,6),"#ffffff",{x:-.12,y:.37,z:-.3,sy:.5})),n.push(G(new Ce(.93,.07,6,32),"#ffffff",{y:.03,rx:Math.PI/2,sz:.9})),Jt(n)}function qv(){let n=(s,r,o)=>{let a=new Fi;return a.moveTo(-s/2+o,-r/2),a.lineTo(s/2-o,-r/2),a.quadraticCurveTo(s/2,-r/2,s/2,-r/2+o),a.lineTo(s/2,r/2-o),a.quadraticCurveTo(s/2,r/2,s/2-o,r/2),a.lineTo(-s/2+o,r/2),a.quadraticCurveTo(-s/2,r/2,-s/2,r/2-o),a.lineTo(-s/2,-r/2+o),a.quadraticCurveTo(-s/2,-r/2,-s/2+o,-r/2),a},t=(s,r,o,a,l,c)=>{let h=new Zi(n(s,r,o),{depth:a,bevelEnabled:!1,curveSegments:5});return ri(h,{rx:-Math.PI/2,y:l}),Fn(h,c)},e=[t(1.8,2.5,.35,.03,0,"#ff6fb8"),t(1.5,2.2,.25,.03,.02,"#6a2468")],i=new Fi;i.moveTo(-.7,0),i.lineTo(0,-.55),i.lineTo(.7,0),i.lineTo(.7,.28),i.lineTo(0,-.27),i.lineTo(-.7,.28),i.closePath();for(let s=0;s<3;s++){let r=new Zi(i,{depth:.05,bevelEnabled:!1});ri(r,{rx:-Math.PI/2,y:.05,z:.75-s*.7}),e.push(Fn(r,s===1?"#ffe46a":"#ff8fd0"))}return Jt(e)}function Yv(){let n=[G(Th(.42),"#ff2a3d",{})];return n.push(G(new Pt(.025,.03,.2,6),"#7a4a2a",{y:.38,rz:-.2})),n.push(G(new At(.5,12,8),"#48c46c",{x:.1,y:.42,sx:.28,sy:.05,sz:.14,rz:.4,ry:.4})),Jt(n)}function Zv(){let n=[G(new Ce(.3,.11,10,24,Math.PI),"#ff3d6e",{rz:Math.PI})];for(let t of[-.3,.3])n.push(G(new Pt(.11,.11,.24,14),"#ff3d6e",{x:t,y:.12})),n.push(G(new Pt(.112,.112,.14,14),"#f4f4ff",{x:t,y:.3}));return ri(Jt(n),{y:.05})}function $v(){return new he({uniforms:{uTime:{value:0},...Ei},vertexShader:`
      ${un}
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        ${fn}
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
      }`,transparent:!0,depthWrite:!1,blending:yi})}var Jd={jelly:{hw:.9,minY:0,maxY:.36,hd:.8},boost:{hw:.85,minY:0,maxY:.1,hd:1.2},barrier:{hw:.95,minY:0,maxY:.85,hd:.22},gate:{hw:.95,minY:.98,maxY:2.5,hd:.2},block:{hw:.9,minY:0,maxY:2.6,hd:.8},yarn:{hw:.78,minY:0,maxY:1.6,hd:.75}},Gl=class{constructor(t,e){this.scene=t,this.game=e,this.group=new Me,t.add(this.group);let i=(r={})=>Fe(16777215,{vertexColors:!0,...r}),s=(r={})=>Qe(16777215,{vertexColors:!0,...r});this.models={barrier:{geo:Ov(),mat:i()},gate:{geo:zv(),mat:i()},gift:{geo:Hv(),mat:i()},cake:{geo:kv(),mat:i()},cupcake:{geo:Gv(),mat:i()},carPink:{geo:Nh("#ff8fc0","#ffffff"),mat:i()},carMint:{geo:Nh("#6fd6b8","#ff8fc0"),mat:i()},carLilac:{geo:Nh("#b39cff","#ffd23f"),mat:i()},ramp:{geo:Vv(),mat:i()},yarn:{geo:Wv(),mat:i()},jelly:{geo:Xv(),mat:s({roughness:.18,envMapIntensity:.8,emissive:16723846,emissiveIntensity:.28})},boost:{geo:qv(),mat:this.boostMat=new _i({vertexColors:!0,color:new ht(1,1,1)})}},this.pools={},this.obstacles=[],this.heartGeo=wi(.62,.16),this.heartMesh=new fi(this.heartGeo,Qe(14688366,{emissive:9375554,emissiveIntensity:.3,roughness:.34,envMapIntensity:.4}),220),this.heartMesh.frustumCulled=!1,this.heartMesh.castShadow=!0,this.heartMesh.count=0,this.group.add(this.heartMesh),this.appleMesh=new fi(Yv(),Qe(16777215,{vertexColors:!0,roughness:.38,envMapIntensity:.35,emissive:3803152,emissiveIntensity:.2}),24),this.appleMesh.frustumCulled=!1,this.appleMesh.castShadow=!0,this.appleMesh.count=0,this.group.add(this.appleMesh),this.items=[],this.bubbleMat=$v(),this.bubbleGeo=new At(.62,28,18),this.icons={magnet:{geo:Zv(),mat:Qe(16777215,{vertexColors:!0,envMapIntensity:.6,emissive:5574946,emissiveIntensity:.4})},rush:{geo:hs(.85),mat:Qe(16767050,{envMapIntensity:.6,emissive:16752640,emissiveIntensity:.55})},shield:{geo:wi(.6,.2),mat:Qe(7329535,{envMapIntensity:.6,emissive:1740031,emissiveIntensity:.55})},double:{geo:Th(.36),mat:Qe(16763196,{metalness:.4,roughness:.3,envMapIntensity:.7,emissive:12614144,emissiveIntensity:.45})}},this.powers=[],this.powerPool=[],this._m=new re,this._q=new Be,this._e=new Xe,this._v=new P,this._s=new P,this.reset(0)}getMesh(t){var s;let i=((s=this.pools)[t]||(s[t]=[])).pop();if(!i){let r=this.models[t];i=new Ot(r.geo,r.mat),i.frustumCulled=!1,i.castShadow=!0,i.receiveShadow=!0,this.group.add(i)}return i.visible=!0,i.rotation.set(0,0,0),i.scale.set(1,1,1),i}release(t){var e,i;for(let s of t.meshes)s.visible=!1,((e=this.pools)[i=s.userData.kind]||(e[i]=[])).push(s);t.meshes.length=0}reset(t,e=t){this.origin=e;for(let i of this.obstacles)this.release(i);this.obstacles=[],this.items=[];for(let i of this.powers)i.group.visible=!1,this.powerPool.push(i);this.powers=[],this.nextS=t+48,this.lastPowerS=t,this.rushing=!1,this.tutorial=null}clearNear(t,e,i){for(let s of this.obstacles)s.dead||s.remove||s.trigger||s.sb<t-6||s.sa>t+e||(s.remove=!0,i&&i(s))}laneX(t){return t*2.1}addObstacle(t,e,i,s={}){let r={type:t,lane:e,x:this.laneX(e),meshes:[],dead:!1,ignoreUntil:0,...s},o=(a,l=0)=>{let c=this.getMesh(a);return c.userData.kind=a,c.userData.zOff=l,r.meshes.push(c),c};if(t==="barrier"||t==="gate"||t==="yarn"||t==="jelly"||t==="boost"){let a=Jd[t];Object.assign(r,{hw:a.hw,minY:a.minY,maxY:a.maxY,sa:i-a.hd,sb:i+a.hd,s:i}),o(t),t==="yarn"&&(r.move=s.move??9),(t==="jelly"||t==="boost")&&(r.trigger=!0)}else if(t==="block"){let a=Jd.block;Object.assign(r,{hw:a.hw,minY:a.minY,maxY:a.maxY,sa:i-a.hd,sb:i+a.hd,s:i});let l=["gift","cake","cupcake"],c=o(s.kind||l[Math.floor(Math.random()*l.length)]);c.rotation.y=(Math.random()-.5)*.4}else if(t==="train"){let a=s.cars||2,l=a*rr;Object.assign(r,{hw:.95,platform:!0,top:dn,sa:i,sb:i+l,s:i});let c=["carPink","carMint","carLilac"],h=Math.floor(Math.random()*3);for(let d=0;d<a;d++)o(c[(h+d)%3],d*rr)}else t==="ramp"&&(Object.assign(r,{hw:.95,platform:!0,ramp:!0,top:dn,sa:i-sr,sb:i,s:i}),o("ramp"));return this.obstacles.push(r),r}addItem(t,e,i,s=.9){this.items.push({kind:t,x:this.laneX(e),s:i,y:s,alive:!0,magnet:!1,phase:Math.random()*6})}addLine(t,e,i,s=2.2,r=.9){for(let o=0;o<i;o++)this.addItem("heart",t,e+o*s,r)}addArc(t,e,i,s=!1){let r=2*15.2/50,o=Math.max(i,17)*r,a=9,l=2.4;for(let c=0;c<a;c++){let h=c/(a-1),d=(h-.5)*o;if(Math.abs(d)<l)continue;let u=h*r,f=.9+15.2*u-.5*50*u*u;this.addItem(s&&c===a-3?"apple":"heart",t,e+d,f)}}addPower(t,e,i,s=1.1){let r=this.powerPool.pop();if(!r){let a=new Me,l=new Ot(this.bubbleGeo,this.bubbleMat);l.renderOrder=3;let c=new Ot;a.add(c),a.add(l),this.group.add(a),r={group:a,icon:c}}let o=this.icons[t];r.icon.geometry=o.geo,r.icon.material=o.mat,r.group.visible=!0,Object.assign(r,{kind:t,x:this.laneX(e),s:i,y:s,alive:!0}),this.powers.push(r)}pickPower(){let t=Math.random();return t<.3?"magnet":t<.55?"rush":t<.78?"shield":"double"}laneClear(t,e,i){for(let s of this.obstacles)if(s.lane===t&&s.sb>e&&s.sa<i)return!1;return!0}spawnPattern(t,e,i){let s=e-this.origin,r=[-1,0,1],o=m=>{for(let M=m.length-1;M>0;M--){let E=Math.floor(Math.random()*(M+1));[m[M],m[E]]=[m[E],m[M]]}return m},a=m=>m[Math.floor(Math.random()*m.length)],l=Math.min(1,s/2600),c=o([...r]),h=null;t-this.lastPowerS>260+Math.random()*180&&(h=c[2]);let d=[["single",3-l*1.5],["double",1+l*2],["wallJump",.8],["wallSlide",s>150?.8:0],["mixed",s>400?1+l:0],["train",s>200?1.4+l:0],["doubleTrain",s>700?.8+l:0],["yarn",s>500?.9+l*.6:0],["zigzag",s>900?.8+l:0],["breather",.6],["jelly",s>120?.9:0],["dash",s>250?.7:0]],u=d.reduce((m,M)=>m+M[1],0),f=Math.random()*u,p="single";for(let[m,M]of d)if((f-=M)<=0){p=m;break}let x=1,g=s>150?["barrier","gate","block"]:["barrier","block"];switch(p){case"single":{let m=a(g);this.addObstacle(m,c[0],t),m==="barrier"?this.addArc(c[0],t,i,Math.random()<.3):this.addLine(c[1],t-6,6);break}case"double":{this.addObstacle(a(g),c[0],t),this.addObstacle(a(g),c[1],t),h===null&&this.addLine(c[2],t-7,6);break}case"wallJump":{for(let m of r)this.addObstacle("barrier",m,t);this.addArc(c[0],t,i,Math.random()<.5),h=null;break}case"wallSlide":{for(let m of r)this.addObstacle("gate",m,t);this.addLine(c[0],t-3,4,2,.55),h=null;break}case"mixed":{let m=Math.random()<.5?"barrier":"gate";this.addObstacle("block",c[0],t),this.addObstacle(m,c[1],t),this.addObstacle(Math.random()<.35?"block":m==="barrier"?"gate":"barrier",c[2],t),m==="barrier"&&this.addArc(c[1],t,i),h=null;break}case"train":{let m=1+Math.floor(Math.random()*3),M=Math.random()<.75,E=c[0];M&&this.addObstacle("ramp",E,t),this.addObstacle("train",E,t,{cars:m}),x=m*rr,M?this.addLine(E,t+1,Math.floor(x/2.2),2.2,dn+.9):this.addLine(c[1],t-4,7),Math.random()<.5&&x>7&&this.addObstacle(Math.random()<.5?"barrier":"gate",c[2],t+x/2);break}case"doubleTrain":{let m=2+Math.floor(Math.random()*2);x=m*rr,this.addObstacle("ramp",c[0],t),this.addObstacle("train",c[0],t,{cars:m}),this.addObstacle("train",c[1],t+2,{cars:m}),this.addLine(c[0],t+1,Math.floor(x/2.2),2.2,dn+.9),Math.random()<.6&&this.addObstacle(Math.random()<.5?"barrier":"gate",c[2],t+x*.4),h=null;break}case"yarn":{let m=c.find(E=>this.laneClear(E,t-26,t+2));if(m===void 0){this.addObstacle("block",c[0],t),this.addLine(c[1],t-6,6);break}let M=c.filter(E=>E!==m);this.addObstacle("yarn",m,t,{move:8+l*5}),this.addLine(M[0],t-8,6),Math.random()<.5&&this.addObstacle("barrier",M[1],t+6),h=null;break}case"zigzag":{let m=Math.random()<.5?[-1,0,1]:[1,0,-1],M=Math.max(10,i*.55);m.forEach((E,y)=>this.addObstacle("block",E,t+y*M)),m.forEach((E,y)=>{let w=r.filter(S=>S!==E);this.addItem("heart",w[y%2],t+y*M)}),x=M*2,h=null;break}case"jelly":{let m=c[0];this.addObstacle("jelly",m,t);let M=23,E=2*M/50,y=i*E,w=11;for(let S=1;S<w;S++){let R=S/w,v=R*E;this.addItem(S===5?"apple":"heart",m,t+R*y,.9+M*v-.5*50*v*v)}this.addObstacle("block",m,t+y*.5),this.addObstacle(Math.random()<.5?"block":"barrier",c[1],t+y*.5),this.addLine(c[2],t+y*.2,4),x=y+4,h=null;break}case"dash":{let m=c[0];this.addObstacle("boost",m,t);let M=Math.max(9,i*.42);for(let E=1;E<=3;E++)this.addObstacle(E===2?"block":"barrier",m,t+8+E*M);for(let E=0;E<3;E++)this.addItem("heart",m,t+8+(E+.38)*M),this.addItem("heart",m,t+8+(E+.62)*M);this.addLine(c[1],t+10,5),x=8+3*M,h=null;break}case"breather":{let m=c[0];for(let M=0;M<10;M++)M%4===3&&(m=Math.max(-1,Math.min(1,m+(Math.random()<.5?-1:1)))),this.addItem(M===5&&Math.random()<.5?"apple":"heart",m,t+M*2.2);x=22;break}}return h!==null&&(this.addPower(this.pickPower(),h,t),this.lastPowerS=t),x}spawnTutorial(t){this.tutorial=[{s:t+55,type:"barrier",hint:"jump"},{s:t+100,type:"gate",hint:"slide"},{s:t+145,type:"block",hint:"side"}];for(let e of this.tutorial)this.addObstacle(e.type,0,e.s);this.addLine(0,t+20,8),this.addArc(0,t+55,16),this.addLine(-1,t+125,6),this.addLine(1,t+150,6),this.nextS=t+185}beginRush(t,e=0){this.rushing=!0,this.rushLane=e,this.nextS=t+45,this.obstacles=this.obstacles.filter(i=>i.sa>t+45?(this.release(i),!1):!0),this.items=this.items.filter(i=>i.s<t+45)}endRush(t){this.rushing=!1,this.items=this.items.filter(e=>!(e.y>4&&e.s>t)),this.nextS=t+60}update(t,e,i,s){for(;this.nextS<e+150;)if(this.rushing){this.addLine(this.rushLane,this.nextS,6,2.4,5.4),this.nextS+=14.4;let u=Math.random()<.5?-1:1;this.rushLane=Math.max(-1,Math.min(1,this.rushLane+(this.rushLane===0?u:-this.rushLane)))}else{let u=this.spawnPattern(this.nextS,e,i),f=Math.max(i*.72,26-Math.min(1,(e-this.origin)/3e3)*12);this.nextS+=u+f}for(let u=this.obstacles.length-1;u>=0;u--){let f=this.obstacles[u];if(f.rolling=!!f.move&&f.s-e<40,f.rolling&&(f.s-=f.move*t,f.sa-=f.move*t,f.sb-=f.move*t),e-f.sb>14||f.remove){this.release(f),this.obstacles.splice(u,1);continue}for(let p of f.meshes){let x=f.type==="ramp"||f.type==="train"?f.sa:f.s;if(p.position.set(f.x,0,e-x-(p.userData.zOff||0)),f.type==="ramp"&&(p.position.z=e-f.sb),f.type==="jelly"&&f.squash>0){f.squash=Math.max(0,f.squash-t*2.5);let g=Math.sin(f.squash*20)*f.squash;p.scale.set(1+g*.3,1-g*.9,1+g*.3)}f.type==="yarn"&&(p.position.y=.82,f.rolling&&(p.rotation.x+=(i+f.move)/.82*t)),f.dead&&(p.scale.multiplyScalar(Math.max(0,1-t*10)),p.scale.x<.05&&(f.remove=!0))}}this.boostMat.color.setScalar(.95+Math.sin(s*9)*.25);let{_m:r,_q:o,_e:a,_v:l,_s:c}=this,h=0,d=0;for(let u=this.items.length-1;u>=0;u--){let f=this.items[u],p=e-f.s;if(!f.alive||p>14){this.items.splice(u,1);continue}if(p<-160)continue;let x=Math.sin(s*3+f.phase)*.12;if(a.set(0,s*2.6+f.phase,0),o.setFromEuler(a),l.set(f.x,f.y+x,p),f.kind==="heart"&&h<220){let g=1+Math.sin(s*6+f.phase)*.06;c.set(g,g,g),r.compose(l,o,c),this.heartMesh.setMatrixAt(h++,r)}else f.kind==="apple"&&d<24&&(c.set(1.15,1.15,1.15),r.compose(l,o,c),this.appleMesh.setMatrixAt(d++,r))}this.heartMesh.count=h,this.appleMesh.count=d,this.heartMesh.instanceMatrix.needsUpdate=!0,this.appleMesh.instanceMatrix.needsUpdate=!0,this.bubbleMat.uniforms.uTime.value=s;for(let u=this.powers.length-1;u>=0;u--){let f=this.powers[u],p=e-f.s;if(!f.alive||p>14){f.group.visible=!1,this.powerPool.push(f),this.powers.splice(u,1);continue}f.group.position.set(f.x,f.y+Math.sin(s*2.5+f.s)*.15,p),f.icon.rotation.set(0,s*2.2,Math.sin(s*3)*.15)}}collide(t){let e=0,i=null,s=!1,r=t.x-.32,o=t.x+.32,a=Math.min(t.prevDist,t.dist)-.3,l=t.dist+.3,c=[],h=[];for(let p of this.obstacles)if(!(p.dead||t.time<p.ignoreUntil)&&!(p.sb<a||p.sa>l)&&!(o<p.x-p.hw||r>p.x+p.hw)){if(p.trigger){!p.used&&Math.min(t.y,t.y0??t.y)<=p.maxY+.2&&h.push(p);continue}c.push(p)}if(!c.length)return{ground:e,hit:i,side:s,triggers:h};let d=(p,x)=>p.ramp?p.top*$i.clamp((x-p.sa)/(p.sb-p.sa),0,1):p.top,u=Math.max(t.y,t.y0??t.y),f=p=>{if(i)return;i=p;let x=!(t.prevX+.32<p.x-p.hw||t.prevX-.32>p.x+p.hw),g=p.rolling?p.move*t.dt:0;s=!(p.sb+g<t.prevDist-.3||p.sa+g>t.prevDist+.3)&&!x};for(let p of c)if(p.ramp)if(u>=d(p,t.prevDist)-$d){let x=d(p,t.dist);e=Math.max(e,x),u=Math.max(u,x)}else f(p);for(let p of c)p.ramp||(p.platform?u>=p.top-$d?e=Math.max(e,p.top):f(p):t.y<p.maxY&&t.y+t.h>p.minY&&f(p));return{ground:e,hit:i,side:s,triggers:h}}collect(t,e,i,s,r){let o=t.y+(t.sliding?.35:.75),a=Math.min(t.prevDist,t.dist)-.95,l=t.dist+.95;for(let c of this.items){if(!c.alive)continue;let h=c.s-t.dist;if(e&&h<16&&h>-1&&(c.magnet=!0),c.magnet){let d=Math.min(1,i*11);c.x+=(t.x-c.x)*d,c.y+=(o-c.y)*d,c.s+=(t.dist-c.s)*d*.9}c.s>a&&c.s<l&&Math.abs(c.x-t.x)<.95&&Math.abs(c.y-o)<1.05&&(c.alive=!1,s(c))}for(let c of this.powers)c.alive&&c.s>a-.15&&c.s<l+.15&&Math.abs(c.x-t.x)<1.1&&Math.abs(c.y-o)<1.4&&(c.alive=!1,r(c))}nextInLane(t,e){let i=null;for(let s of this.obstacles)s.lane!==t||s.sa<e||(!i||s.sa<i.sa)&&(i=s);return i}};var ve={GLOW:0,STAR:1,HEART:2,SPARKLE:3,CONFETTI:4,RING:5,PETAL:6,PUFF:7,BUTTERFLY:8,STREAK:9,GEM:10,WISP:11},Jv=n=>`
${un}
uniform float uScale;
uniform float uTime;
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
  ${n?fn:""}
  gl_Position = projectionMatrix * mvPosition;
  float depth = max(-mvPosition.z, 0.2);
  // never bigger than a fraction of the screen, and fade out instead of
  // ballooning when a sprite flies past the camera
  gl_PointSize = min(aSize * uScale / depth, uScale * 0.16);
  vColor = aColor;
  vAlpha = aAlpha * smoothstep(1.4, 3.6, depth);
  vSprite = aSprite;
  // butterflies flap between two frames
  if (aSprite > 7.5 && aSprite < 8.5 && sin(uTime * 22.0 + position.x * 3.1 + position.y * 5.3) < 0.0) vSprite = 12.0;
  vRot = aRot;
}`,Kv=`
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
  vec2 uv = vec2((col + p.x) / 4.0, 1.0 - (row + p.y) / 4.0);
  vec4 t = texture2D(uAtlas, uv);
  float a = t.a * vAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor * t.rgb, a);
}`,So=class{constructor(t,e,i,s=!0){this.max=t,this.count=0;let r=new _e;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.sprite=new Float32Array(t),this.rot=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size0=new Float32Array(t),this.size1=new Float32Array(t),this.spin=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.world=new Uint8Array(t),this.a0=new Float32Array(t),this.twinkle=new Float32Array(t);let o=(a,l)=>{let c=new be(a,l);return c.setUsage(fo),c};r.setAttribute("position",o(this.pos,3)),r.setAttribute("aColor",o(this.col,3)),r.setAttribute("aSize",o(this.size,1)),r.setAttribute("aAlpha",o(this.alpha,1)),r.setAttribute("aSprite",o(this.sprite,1)),r.setAttribute("aRot",o(this.rot,1)),r.setDrawRange(0,0),this.geo=r,this.uniforms={uAtlas:{value:e},uScale:{value:500},uTime:{value:0},...Ei},this.mat=new he({uniforms:this.uniforms,vertexShader:Jv(s),fragmentShader:Kv,transparent:!0,depthWrite:!1,blending:i}),this.points=new ts(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5}emit(t){let e=this.count;e>=this.max?e=Math.floor(Math.random()*this.max):this.count++;let i=t.color||[1,1,1];this.pos[e*3]=t.x,this.pos[e*3+1]=t.y,this.pos[e*3+2]=t.z,this.vel[e*3]=t.vx||0,this.vel[e*3+1]=t.vy||0,this.vel[e*3+2]=t.vz||0,this.col[e*3]=i[0],this.col[e*3+1]=i[1],this.col[e*3+2]=i[2],this.life[e]=0,this.maxLife[e]=t.life||1,this.size0[e]=t.size??.3,this.size1[e]=t.sizeEnd??this.size0[e],this.size[e]=this.size0[e],this.sprite[e]=t.sprite||0,this.rot[e]=t.rot??Math.random()*6.28,this.spin[e]=t.spin||0,this.grav[e]=t.gravity||0,this.drag[e]=t.drag||0,this.world[e]=t.world===!1?0:1,this.a0[e]=t.alpha??1,this.alpha[e]=this.a0[e],this.twinkle[e]=t.twinkle||0}kill(t){let e=--this.count;if(t===e)return;let i=s=>{s[t*3]=s[e*3],s[t*3+1]=s[e*3+1],s[t*3+2]=s[e*3+2]};i(this.pos),i(this.vel),i(this.col);for(let s of[this.size,this.alpha,this.sprite,this.rot,this.life,this.maxLife,this.size0,this.size1,this.spin,this.grav,this.drag,this.world,this.a0,this.twinkle])s[t]=s[e]}update(t,e,i){this.uniforms.uTime.value=i;for(let o=0;o<this.count;o++){this.life[o]+=t;let a=this.maxLife[o];if(this.life[o]>=a){this.kill(o),o--;continue}let l=this.life[o]/a,c=Math.max(0,1-this.drag[o]*t);this.vel[o*3]*=c,this.vel[o*3+1]=this.vel[o*3+1]*c-this.grav[o]*t,this.vel[o*3+2]*=c,this.pos[o*3]+=this.vel[o*3]*t,this.pos[o*3+1]+=this.vel[o*3+1]*t,this.pos[o*3+2]+=this.vel[o*3+2]*t+(this.world[o]?e:0),this.rot[o]+=this.spin[o]*t,this.size[o]=this.size0[o]+(this.size1[o]-this.size0[o])*l;let h=this.a0[o]*Math.min(1,l*8)*(l>.6?1-(l-.6)/.4:1);this.twinkle[o]&&(h*=.55+.45*Math.sin(i*this.twinkle[o]+o)),this.alpha[o]=h}let s=this.count;this.geo.setDrawRange(0,s);let r=this.geo.attributes;for(let o of["position","aColor","aSize","aAlpha","aSprite","aRot"]){let a=r[o];a.clearUpdateRanges(),a.addUpdateRange(0,Math.max(1,s)*a.itemSize),a.needsUpdate=!0}}},Wl=class{constructor(t,e){this.add=new So(900,e,Mi),this.norm=new So(700,e,yi),this.norm.points.renderOrder=4,this.sky=new So(700,e,Mi,!1),this.sky.points.renderOrder=-7,t.add(this.norm.points),t.add(this.add.points),t.add(this.sky.points),this.rockets=[],this.scale=1,this.time=0}setScale(t){this.add.uniforms.uScale.value=t,this.norm.uniforms.uScale.value=t,this.sky.uniforms.uScale.value=t}update(t,e){this.time+=t,this.updateRockets(t),this.add.update(t,e,this.time),this.norm.update(t,e,this.time),this.sky.update(t,0,this.time)}firework(t,e,i,s,r=.9,o){this.rockets.push({x:t,y:e,z:i,vy:26+Math.random()*6,t:r,color:s,onBurst:o,trail:0})}updateRockets(t){for(let e=this.rockets.length-1;e>=0;e--){let i=this.rockets[e];i.t-=t,i.vy*=1-t*.9,i.y+=i.vy*t,i.trail-=t,i.trail<=0&&(i.trail=.016,this.sky.emit({x:i.x,y:i.y,z:i.z,vy:-1,color:[1.5,1.2,.9],size:1.6,sizeEnd:.4,sprite:ve.STREAK,rot:0,life:.45,world:!1})),i.t<=0&&(this.burstSky(i.x,i.y,i.z,i.color),i.onBurst&&i.onBurst(),this.rockets.splice(e,1))}}burstSky(t,e,i,s){let o=s.map(a=>Math.min(2,a*.6+.8));for(let a=0;a<90;a++){let l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),h=16+Math.random()*4;this.sky.emit({x:t,y:e,z:i,vx:Math.sin(c)*Math.cos(l)*h,vy:Math.cos(c)*h,vz:Math.sin(c)*Math.sin(l)*h*.5,color:a%4===0?o:s,size:2.8,sizeEnd:.5,sprite:a%3?ve.GLOW:ve.SPARKLE,life:1.6+Math.random()*.8,gravity:3,drag:1.1,world:!1,twinkle:a%5===0?14:0})}this.sky.emit({x:t,y:e,z:i,color:s,size:4,sizeEnd:26,sprite:ve.RING,life:.55,world:!1,rot:0}),this.sky.emit({x:t,y:e,z:i,color:[2,2,2],size:14,sizeEnd:3,sprite:ve.GLOW,life:.35,world:!1})}burst(t,e,i,{count:s=14,color:r=[1,.5,.8],speed:o=4,size:a=.35,sprite:l=ve.SPARKLE,life:c=.7,additive:h=!0,gravity:d=0,spread:u=1,up:f=0}={}){let p=h?this.add:this.norm;for(let x=0;x<s;x++){let g=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1),M=o*(.4+Math.random()*.6);p.emit({x:t,y:e,z:i,vx:Math.sin(m)*Math.cos(g)*M*u,vy:Math.cos(m)*M+f,vz:Math.sin(m)*Math.sin(g)*M*u,color:Array.isArray(r[0])?r[x%r.length]:r,size:a*(.6+Math.random()*.8),sizeEnd:a*.2,sprite:Array.isArray(l)?l[x%l.length]:l,life:c*(.6+Math.random()*.6),spin:(Math.random()-.5)*8,drag:3,gravity:d})}}ring(t,e,i,s=[1,.6,.85],r=2.2,o=.45){this.add.emit({x:t,y:e,z:i,color:s,size:.3,sizeEnd:r,sprite:ve.RING,life:o,rot:0,alpha:.8})}heartPop(t,e,i,s){let r=[1.5,.5,.9],o=[1.6,1.2,.35];this.burst(t,e,i,{count:6,color:s?[o,[1.3,1.3,1.3]]:[r,[1.3,1.2,1.3]],speed:2.6,size:.22,sprite:ve.SPARKLE,life:.4})}bigPop(t,e,i,s){this.burst(t,e,i,{count:18,color:s,speed:5,size:.36,sprite:[ve.SPARKLE,ve.STAR],life:.8}),this.burst(t,e,i,{count:6,color:s.map(r=>r.map(o=>Math.min(1,o*.8))),speed:3.5,size:.3,sprite:ve.HEART,life:.9,additive:!1,gravity:3}),this.ring(t,e,i,s[0],1.9,.45)}dust(t,e,i,s=6,r=[1,.86,.93]){for(let o=0;o<s;o++)this.norm.emit({x:t+(Math.random()-.5)*.6,y:e+.08,z:i+(Math.random()-.2)*.4,vx:(Math.random()-.5)*2.2,vy:.6+Math.random()*1.2,vz:1+Math.random()*2,color:r,size:.45,sizeEnd:.9,sprite:ve.PUFF,life:.45+Math.random()*.2,drag:3,alpha:.75})}trailSparkle(t,e,i,s){this.add.emit({x:t+(Math.random()-.5)*.5,y:e+Math.random()*.3,z:i+.2,vx:(Math.random()-.5)*.5,vy:Math.random()*.8,vz:0,color:s,size:.18+Math.random()*.12,sizeEnd:.02,sprite:ve.SPARKLE,life:.55,spin:3})}crash(t,e,i){this.burst(t,e,i,{count:18,color:[[1.6,1.4,.4],[1.5,1.5,1.5]],speed:6,size:.5,sprite:ve.STAR,life:.9}),this.dust(t,e,i,12,[1,.9,.95])}poof(t,e,i){for(let s=0;s<9;s++)this.norm.emit({x:t+(Math.random()-.5)*1.4,y:e+Math.random()*1.6,z:i+(Math.random()-.5)*.8,vx:(Math.random()-.5)*3,vy:Math.random()*2,vz:(Math.random()-.5)*3,color:[1,.92,.97],size:.5,sizeEnd:1,sprite:ve.PUFF,life:.45,drag:2.5,alpha:.7});this.burst(t,e+.8,i,{count:10,color:[[1.5,1.2,1.5],[1.6,1.4,.6]],speed:5,size:.32,sprite:[ve.SPARKLE,ve.STAR],life:.55})}confetti(t,e=70){let i=[[1,.35,.6],[1,.85,.3],[.45,.85,1],[.55,.95,.7],[.8,.6,1],[1,1,1]],s=new P;t.getWorldDirection(s);for(let r=0;r<e;r++){let o=4+Math.random()*3,a=t.position.x+s.x*o+(Math.random()-.5)*5,l=t.position.y+s.y*o+2.5+Math.random()*2,c=t.position.z+s.z*o+(Math.random()-.5)*2;this.norm.emit({x:a,y:l,z:c,vx:(Math.random()-.5)*2,vy:-Math.random()*1.5,vz:Math.random()-.5,color:i[r%i.length],size:.22,sprite:r%3===0?ve.HEART:ve.CONFETTI,life:2.2+Math.random(),spin:(Math.random()-.5)*10,gravity:2.2,drag:1.2,world:!1})}}};var Xl=class{constructor(t,e=48){this.n=e,this.pts=[];for(let l=0;l<e;l++)this.pts.push(new P(0,0,l*.5));let i=new Float32Array(e*2*3),s=new Float32Array(e*2*2),r=[];for(let l=0;l<e;l++)if(s[l*4]=l/(e-1),s[l*4+1]=0,s[l*4+2]=l/(e-1),s[l*4+3]=1,l<e-1){let c=l*2,h=c+1,d=c+2,u=c+3;r.push(c,d,h,h,d,u)}let o=new _e;this.posAttr=new be(i,3),this.posAttr.setUsage(fo),o.setAttribute("position",this.posAttr),o.setAttribute("uv",new be(s,2)),o.setIndex(r),this.uniforms={uAlpha:{value:0},uTime:{value:0},...Ei};let a=new he({uniforms:this.uniforms,vertexShader:`
        ${un}
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          ${fn}
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
        }`,transparent:!0,depthWrite:!1,blending:yi,side:ni});this.mesh=new Ot(o,a),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,t.add(this.mesh),this.alpha=0,this.width=.95}reset(t,e){for(let i=0;i<this.n;i++)this.pts[i].set(t,e,i*.5)}update(t,e,i,s,r){if(this.alpha+=((s?1:0)-this.alpha)*Math.min(1,t*(s?5:2.5)),this.uniforms.uAlpha.value=this.alpha,this.uniforms.uTime.value=r,this.mesh.visible=this.alpha>.01,!this.mesh.visible)return;for(let l=this.n-1;l>0;l--)this.pts[l].copy(this.pts[l-1]),this.pts[l].z+=i;this.pts[0].copy(e);for(let l=1;l<this.n;l++){let c=this.pts[l],h=this.pts[l-1];c.z<h.z+.05&&(c.z=h.z+.05)}let o=this.posAttr.array,a=this.width/2;for(let l=0;l<this.n;l++){let c=this.pts[l];o[l*6]=c.x-a,o[l*6+1]=c.y,o[l*6+2]=c.z,o[l*6+3]=c.x+a,o[l*6+4]=c.y,o[l*6+5]=c.z}this.posAttr.needsUpdate=!0}};var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Qv=new Pn(-1,1,1,-1,0,1),Fh=class extends _e{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}},jv=new Fh,Gn=class{constructor(t){this._mesh=new Ot(jv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Qv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ar=class extends mi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof he?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hn.clone(t.uniforms),this.material=new he({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Gn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Eo=class extends mi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ql=class extends mi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Yl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ar(or),this.copyPass.material.blending=vi,this.timer=new Kr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Eo!==void 0&&(o instanceof Eo?i=!0:o instanceof ql&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zl=class extends mi{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ht}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Kd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var lr=class n extends mi{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new ht(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ue(r,o,{type:qe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ue(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Kd;this.highPassUniforms=hn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new he({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hn.clone(or.uniforms),this.blendMaterial=new he({uniforms:this.copyUniforms,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,premultipliedAlpha:!0,blending:Mi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ht,this._oldClearAlpha=1,this._basic=new _i,this._fsQuad=new Gn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new he({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new he({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};lr.BlurDirectionX=new nt(1,0);lr.BlurDirectionY=new nt(0,1);var wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var $l=class extends mi{constructor(){super(),this.isOutputPass=!0,this.uniforms=hn.clone(wo.uniforms),this.material=new Vs({name:wo.name,uniforms:this.uniforms,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this._fsQuad=new Gn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===to?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===no?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===io&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ty={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.35},uVignetteColor:{value:new ht("#7a1f5c")},uSpeed:{value:0},uAberr:{value:0},uFlash:{value:0},uFlashColor:{value:new ht(1,1,1)},uAspect:{value:1}},vertexShader:`
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
    }`},Jl=class{constructor(t,e,i){this.renderer=t,this.scene=e,this.camera=i,this.composer=new Yl(t),this.renderPass=new Zl(e,i),this.composer.addPass(this.renderPass),this.bloom=new lr(new nt(256,256),.5,.5,1);let s=this.bloom.materialHighPassFilter;s.fragmentShader=s.fragmentShader.replace("float v = luminance( texel.xyz );","float v = max( texel.r, max( texel.g, texel.b ) );"),s.needsUpdate=!0,this.bloom.highPassUniforms.smoothWidth.value=.35,this.composer.addPass(this.bloom),this.final=new ar(ty),this.composer.addPass(this.final),this.composer.addPass(new $l),this.u=this.final.uniforms,this.bloomScale=1;let r=this.bloom.setSize.bind(this.bloom);this.bloom.setSize=(o,a)=>r(Math.max(64,Math.round(o*this.bloomScale)),Math.max(64,Math.round(a*this.bloomScale)))}setQuality(t){this.level=t,this.bloom.enabled=t!=="low",this.bloomScale=t==="high"?1:.5}setSize(t,e,i){this.renderer.setPixelRatio(i),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.u.uAspect.value=t/e}render(t){this.u.uTime.value+=t,this.composer.render(t)}};var ae=n=>440*Math.pow(2,(n-69)/12),ey=[[53,57,60],[55,59,62],[52,55,59],[57,60,64],[50,53,57],[55,59,62],[48,52,55],[48,52,55]],iy=[41,43,40,45,38,43,36,36],ny=[[[0,76,2],[2,79,2],[4,81,4],[8,79,2],[10,76,2],[12,72,4]],[[0,74,2],[2,76,2],[4,79,3],[7,76,1],[8,74,4],[12,71,4]],[[0,71,2],[2,74,2],[4,76,4],[8,79,2],[10,76,2],[12,74,2],[14,76,2]],[[0,72,6],[6,69,2],[8,72,2],[10,74,2],[12,76,4]],[[0,77,2],[2,76,2],[4,74,2],[6,72,2],[8,74,4],[12,69,4]],[[0,71,2],[2,74,2],[4,79,4],[8,77,2],[10,76,2],[12,74,4]],[[0,76,2],[2,79,2],[4,84,4],[8,83,2],[10,81,2],[12,79,4]],[[0,76,4],[4,72,4],[8,79,6]]],pn=[{name:"candy",bpm:128,shift:0},{name:"garden",bpm:124,shift:2},{name:"clouds",bpm:112,shift:5},{name:"carnival",bpm:138,shift:-2}],Kl=class{constructor(){this.ctx=null,this.sfxOn=!0,this.musicOn=!0,this.mode="title",this.step=0,this.nextTime=0,this.bpm=128,this.style=0,this.nextStyle=0,this.combo=0,this.lastHeart=0,this.timer=null}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.9;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicOn?.32:0,this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=this.sfxOn?.7:0,this.sfxBus.connect(this.master),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(1.6),this.verbGain=e.createGain(),this.verbGain.gain.value=.28,this.verb.connect(this.verbGain).connect(this.master),this.noiseBuf=this.makeNoise(),this.nextTime=e.currentTime+.1,this.timer=setInterval(()=>this.schedule(),30)}this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.ctx&&this.ctx.state!=="running"&&(this.ctx.resume().catch(()=>{}),this.nextTime=Math.max(this.nextTime,this.ctx.currentTime+.05))}setSfx(t){this.sfxOn=t,this.sfxBus&&(this.sfxBus.gain.value=t?.7:0)}setMusic(t){this.musicOn=t,this.musicBus&&this.musicBus.gain.setTargetAtTime(t?.32:0,this.ctx.currentTime,.05)}setMode(t){this.mode=t}setWorld(t){this.nextStyle=(t%pn.length+pn.length)%pn.length}impulse(t){let e=this.ctx,i=Math.floor(e.sampleRate*t),s=e.createBuffer(2,i,e.sampleRate);for(let r=0;r<2;r++){let o=s.getChannelData(r);for(let a=0;a<i;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/i,3)}return s}makeNoise(){let t=this.ctx,e=t.createBuffer(1,t.sampleRate,t.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return e}tone(t,e,i,{type:s="sine",gain:r=.2,attack:o=.005,bus:a,verb:l=0,slideTo:c,filter:h}={}){let d=this.ctx,u=d.createOscillator();u.type=s,u.frequency.setValueAtTime(e,t),c&&u.frequency.exponentialRampToValueAtTime(c,t+i);let f=d.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(r,t+o),f.gain.exponentialRampToValueAtTime(1e-4,t+i);let p=u;if(h){let x=d.createBiquadFilter();x.type="lowpass",x.frequency.value=h,u.connect(x),p=x}if(p.connect(f),f.connect(a||this.sfxBus),l){let x=d.createGain();x.gain.value=l,f.connect(x).connect(this.verb)}u.start(t),u.stop(t+i+.05)}noise(t,e,{gain:i=.2,type:s="bandpass",freq:r=1e3,freqTo:o,q:a=1,bus:l}={}){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf;let d=c.createBiquadFilter();d.type=s,d.frequency.setValueAtTime(r,t),o&&d.frequency.exponentialRampToValueAtTime(o,t+e),d.Q.value=a;let u=c.createGain();u.gain.setValueAtTime(i,t),u.gain.exponentialRampToValueAtTime(1e-4,t+e),h.connect(d).connect(u).connect(l||this.sfxBus),h.start(t,Math.random()*.5),h.stop(t+e+.02)}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let t=60/this.bpm/4;for(;this.nextTime<this.ctx.currentTime+.14;)this.step%16===0&&this.nextStyle!==this.style&&(this.style=this.nextStyle,this.bpm=pn[this.style].bpm,t=60/this.bpm/4),this.mode!=="off"&&this.musicOn&&this.playStep(this.step,this.nextTime),this.step=(this.step+1)%128,this.nextTime+=t}playStep(t,e){let i=Math.floor(t/16),s=t%16,r=this.mode==="game",o=this.musicBus,a=pn[this.style],l=a.shift,c=ey[i].map(f=>f+l),h=iy[i]+l,d=60/this.bpm/4,u=ny[i].filter(f=>f[0]===s);a.name==="garden"?this.garden(e,s,i,u,c,h,r,o,d):a.name==="clouds"?this.clouds(e,s,i,u,c,h,r,o,d):a.name==="carnival"?this.carnival(e,s,i,u,c,h,r,o,d):this.candy(e,s,i,u,c,h,r,o,d)}kick(t,e,i=.5){this.tone(t,150,.16,{type:"sine",gain:i,bus:e,slideTo:45})}candy(t,e,i,s,r,o,a,l,c){let h=pn[0].shift;for(let[,d,u]of s)this.tone(t,ae(d+h),u*c+.25,{type:"triangle",gain:.16,bus:l,verb:.5}),this.tone(t,ae(d+h+12),.18,{type:"sine",gain:.05,bus:l,verb:.4});if(e%4===2)for(let d of r)this.tone(t,ae(d+12),.14,{type:"square",gain:a?.035:.022,bus:l,filter:1800});if((e%4===0||a&&e%4===3&&e!==15)&&this.tone(t,ae(o+(e===8?7:0)),.22,{type:"triangle",gain:a?.28:.16,bus:l}),!a){e===0&&this.tone(t,ae(r[0]+24),.8,{type:"sine",gain:.03,bus:l,verb:.6});return}(e===0||e===8||e===10)&&this.kick(t,l),(e===4||e===12)&&this.noise(t,.16,{gain:.22,type:"bandpass",freq:1800,q:.8,bus:l}),e%2===0&&this.noise(t,.04,{gain:e%4===2?.09:.05,type:"highpass",freq:7e3,bus:l}),e===14&&i%2===1&&this.tone(t,ae(88),.12,{type:"sine",gain:.05,bus:l,verb:.6})}garden(t,e,i,s,r,o,a,l,c){let h=pn[1].shift;for(let[,d]of s)this.tone(t,ae(d+h),.42,{type:"sine",gain:.2,bus:l,verb:.3}),this.tone(t,ae(d+h+24),.07,{type:"sine",gain:.035,bus:l}),this.tone(t+c*3,ae(d+h+12),.25,{type:"sine",gain:.045,bus:l,verb:.5});if(e%4===2)for(let d of r)this.tone(t,ae(d+12),.12,{type:"triangle",gain:a?.05:.035,bus:l});(e%4===0||a&&(e===6||e===14))&&this.tone(t,ae(o+(e===6||e===14?12:0)),.2,{type:"triangle",gain:a?.26:.15,bus:l}),a&&((e===0||e===8)&&this.kick(t,l,.45),(e===4||e===12)&&(this.noise(t,.1,{gain:.18,type:"bandpass",freq:1500,q:1.2,bus:l}),this.noise(t+.012,.1,{gain:.12,type:"bandpass",freq:1100,q:1.2,bus:l})),this.noise(t,.05,{gain:e%2===1?.055:.03,type:"highpass",freq:6e3,bus:l}))}clouds(t,e,i,s,r,o,a,l,c){let h=pn[2].shift;for(let[,d,u]of s)this.tone(t,ae(d+h),u*c+.6,{type:"sine",gain:.13,bus:l,verb:.9}),this.tone(t,ae(d+h+12),.5,{type:"triangle",gain:.025,bus:l,verb:.9});if(e===0)for(let d of r)this.tone(t,ae(d),c*17,{type:"sine",gain:.035,attack:.3,bus:l,verb:.5});e%2===0&&this.tone(t,ae(r[e/2%3]+24),.16,{type:"sine",gain:.022,bus:l,verb:.8}),(e===0||e===8)&&this.tone(t,ae(o),.55,{type:"sine",gain:a?.26:.16,bus:l}),a&&((e===0||e===8)&&this.kick(t,l,.32),(e===4||e===12)&&this.noise(t,.3,{gain:.07,type:"bandpass",freq:3e3,q:.6,bus:l}),e%4===2&&this.noise(t,.05,{gain:.04,type:"highpass",freq:8e3,bus:l}),e===14&&i%2===1&&this.tone(t,ae(r[2]+36),.4,{type:"sine",gain:.03,bus:l,verb:1}))}carnival(t,e,i,s,r,o,a,l,c){let h=pn[3].shift;for(let[,d,u]of s){let f=Math.min(u*c,.3)+.08;this.tone(t,ae(d+h),f,{type:"square",gain:.075,bus:l,filter:2400,verb:.25}),this.tone(t,ae(d+h+12),f,{type:"triangle",gain:.1,bus:l,verb:.25})}if(e%4===0&&this.tone(t,ae(o+(e%8===4?7:0)),.18,{type:"triangle",gain:a?.3:.18,bus:l}),e%4===2)for(let d of r)this.tone(t,ae(d+12),.1,{type:"square",gain:a?.032:.02,bus:l,filter:1600});a&&((e===0||e===8)&&this.kick(t,l,.45),(e===4||e===12)&&this.noise(t,.14,{gain:.2,type:"bandpass",freq:2200,q:.7,bus:l}),e%2===0&&this.noise(t,.07,{gain:e%4===2?.08:.045,type:"highpass",freq:8500,bus:l}),e===14&&this.tone(t,ae(r[1]+36),.15,{type:"sine",gain:.04,bus:l,verb:.5}))}now(){return this.ctx?this.ctx.currentTime:0}ok(){return this.ctx&&this.ctx.state==="running"&&this.sfxOn}heart(t){if(!this.ok())return;let e=this.now();e-this.lastHeart<.5?this.combo=Math.min(this.combo+1,14):this.combo=0,this.lastHeart=e;let s=79+[0,2,4,7,9,12,14,16,19,21,24,26,28,31,33][this.combo];this.tone(e,ae(s),.12,{type:"sine",gain:.16,verb:.3}),this.tone(e+.045,ae(s+7),.16,{type:"sine",gain:.12,verb:.35}),t&&this.tone(e+.09,ae(s+12),.14,{type:"triangle",gain:.08,verb:.4})}apple(){if(!this.ok())return;let t=this.now();[84,88,91,96].forEach((e,i)=>this.tone(t+i*.05,ae(e),.3,{type:"triangle",gain:.13,verb:.5}))}jump(){if(!this.ok())return;let t=this.now();this.tone(t,330,.16,{type:"sine",gain:.22,slideTo:760}),this.tone(t,660,.1,{type:"triangle",gain:.05,slideTo:1300})}land(){this.ok()&&this.tone(this.now(),180,.08,{type:"sine",gain:.18,slideTo:90})}slide(){this.ok()&&this.noise(this.now(),.28,{gain:.2,type:"bandpass",freq:1500,freqTo:350,q:1.2})}lane(){if(!this.ok())return;let t=this.now();this.noise(t,.11,{gain:.1,type:"bandpass",freq:900,freqTo:2400,q:1.5}),this.tone(t,520,.07,{type:"sine",gain:.05,slideTo:700})}bump(){if(!this.ok())return;let t=this.now();this.tone(t,220,.14,{type:"square",gain:.07,slideTo:110,filter:900}),this.noise(t,.1,{gain:.15,type:"lowpass",freq:600})}power(){if(!this.ok())return;let t=this.now();[72,76,79,84,88,91,96].forEach((e,i)=>this.tone(t+i*.045,ae(e),.28,{type:"triangle",gain:.12,verb:.6})),this.noise(t,.5,{gain:.06,type:"highpass",freq:5e3,freqTo:12e3})}shieldPop(){if(!this.ok())return;let t=this.now();this.tone(t,1400,.25,{type:"sine",gain:.14,slideTo:300,verb:.5}),this.noise(t,.2,{gain:.14,type:"highpass",freq:3e3})}crash(){if(!this.ok())return;let t=this.now();this.noise(t,.25,{gain:.35,type:"lowpass",freq:800,freqTo:200}),this.tone(t,200,.2,{type:"sine",gain:.35,slideTo:60}),[67,66,65,64].forEach((e,i)=>this.tone(t+.25+i*.2,ae(e),.22,{type:"triangle",gain:.12,slideTo:ae(e-.6)}))}click(){this.ok()&&this.tone(this.now(),700,.06,{type:"sine",gain:.14,slideTo:1100})}whoosh(){this.ok()&&this.noise(this.now(),.6,{gain:.2,type:"bandpass",freq:400,freqTo:3e3,q:.8})}fanfare(){if(!this.ok())return;let t=this.now(),e=[[72,0],[76,.1],[79,.2],[84,.3],[79,.45],[84,.55]];for(let[i,s]of e)this.tone(t+s,ae(i),.3,{type:"square",gain:.06,filter:3e3,verb:.4}),this.tone(t+s,ae(i),.3,{type:"triangle",gain:.1,verb:.4})}fireworkLaunch(){this.ok()&&this.tone(this.now(),500,.8,{type:"sine",gain:.025,slideTo:1500})}fireworkPop(){if(!this.ok())return;let t=this.now();this.noise(t,.35,{gain:.22,type:"lowpass",freq:900,freqTo:120});for(let e=0;e<5;e++)this.noise(t+.12+Math.random()*.35,.05,{gain:.05,type:"highpass",freq:5e3})}milestone(){if(!this.ok())return;let t=this.now();[79,84,88,91,96].forEach((e,i)=>this.tone(t+i*.07,ae(e),.32,{type:"square",gain:.045,filter:3200,verb:.5}))}boing(){if(!this.ok())return;let t=this.now();this.tone(t,160,.45,{type:"sine",gain:.3,slideTo:620}),this.tone(t+.02,320,.3,{type:"triangle",gain:.08,slideTo:1240})}dash(){if(!this.ok())return;let t=this.now();this.noise(t,.5,{gain:.22,type:"bandpass",freq:300,freqTo:4e3,q:.9}),[60,67,72,79].forEach((e,i)=>this.tone(t+i*.05,ae(e+12),.2,{type:"square",gain:.05,filter:2400}))}smash(){if(!this.ok())return;let t=this.now();this.noise(t,.2,{gain:.28,type:"bandpass",freq:1400,freqTo:300,q:.7}),this.tone(t,900,.18,{type:"triangle",gain:.1,slideTo:1800,verb:.4})}mission(){if(!this.ok())return;let t=this.now();[76,79,84,88,91,96].forEach((e,i)=>this.tone(t+i*.06,ae(e),.4,{type:"triangle",gain:.12,verb:.6}))}revive(){if(!this.ok())return;let t=this.now();[60,64,67,72,76,79,84].forEach((e,i)=>this.tone(t+i*.05,ae(e),.35,{type:"sine",gain:.14,verb:.7})),this.noise(t,.8,{gain:.06,type:"highpass",freq:4e3,freqTo:12e3})}buy(){if(!this.ok())return;let t=this.now();[79,84,88,91].forEach((e,i)=>this.tone(t+i*.06,ae(e),.35,{type:"triangle",gain:.12,verb:.6}))}};var Ql=class{constructor(t,e){this.onAction=e,this.active=null,this.enabled=!1;let i=()=>Math.max(22,Math.min(window.innerWidth,window.innerHeight)*.06),s=a=>{this.enabled&&(this.active={id:a.pointerId,x:a.clientX,y:a.clientY,t:performance.now()},a.pointerType!=="mouse"&&a.preventDefault())},r=a=>{let l=this.active;if(!l||l.id!==a.pointerId)return;let c=a.clientX-l.x,h=a.clientY-l.y,d=i();if(Math.abs(c)<d&&Math.abs(h)<d)return;let u;Math.abs(c)>Math.abs(h)?u=c>0?"right":"left":u=h>0?"down":"up",u!==l.last&&this.onAction(u),l.last=u,l.x=a.clientX,l.y=a.clientY,a.preventDefault()},o=a=>{this.active&&this.active.id===a.pointerId&&(this.active=null)};t.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",o),t.addEventListener("touchmove",a=>a.preventDefault(),{passive:!1}),document.addEventListener("gesturestart",a=>a.preventDefault()),document.addEventListener("dblclick",a=>a.preventDefault()),window.addEventListener("keydown",a=>{let c={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"up",KeyW:"up",Space:"up",ArrowDown:"down",KeyS:"down",Escape:"pause",KeyP:"pause"}[a.code];c&&(a.target&&a.target.tagName==="BUTTON"&&a.code==="Space"||!this.enabled&&c!=="pause"||(a.preventDefault(),a.repeat||this.onAction(c)))})}};var Yt=n=>document.getElementById(n),sy=n=>`<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M12 21s-8-4.9-10-9.8C.6 7.6 3 4 6.6 4c2.2 0 3.8 1.2 5.4 3 1.6-1.8 3.2-3 5.4-3C21 4 23.4 7.6 22 11.2 20 16.1 12 21 12 21z" fill="${n}" stroke="#fff" stroke-width="1.6"/></svg>`,ry='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',oy={magnet:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4v8a3 3 0 0 0 6 0V3h4v8a7 7 0 0 1-14 0z" fill="#ff3d6e"/><path d="M5 3h4v3H5zM15 3h4v3h-4z" fill="#fff"/></svg>',rush:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z" fill="#ffc21a"/></svg>',shield:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-4.9-10-9.8C.6 7.6 3 4 6.6 4c2.2 0 3.8 1.2 5.4 3 1.6-1.8 3.2-3 5.4-3C21 4 23.4 7.6 22 11.2 20 16.1 12 21 12 21z" fill="#4fb8ff"/></svg>',dash:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 2L4 13.5h6.2L8.8 22 20 9.8h-6.4z" fill="#ff7a3d"/></svg>',double:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7c-2-2-7-2-8 3-1 4 2 11 5 11 1.3 0 2-.6 3-.6s1.7.6 3 .6c3 0 6-7 5-11-1-5-6-5-8-3z" fill="#f5b400"/><path d="M12 7c0-2 1-4 3-5" stroke="#7a4a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>'},jl=class{constructor(t){this.game=t,this.screens=["loading","title","hud","pause","over","wardrobe","help","revive","missions"].reduce((e,i)=>(e[i]=Yt(i),e),{}),this.els={score:Yt("h-score"),hearts:Yt("h-hearts"),powers:Yt("h-powerups"),tBest:Yt("t-best"),tHearts:Yt("t-hearts"),oScore:Yt("o-score"),oBest:Yt("o-best"),oHearts:Yt("o-hearts"),oNew:Yt("o-new"),oTitle:Yt("o-title"),wName:Yt("w-name"),wStatus:Yt("w-status"),wAction:Yt("w-action"),wHearts:Yt("w-hearts"),wDots:Yt("w-dots"),toast:Yt("toast"),popups:Yt("popups"),tut:Yt("tutorial"),tutText:Yt("tut-text"),tutArrow:Yt("tut-arrow"),soundBtns:[Yt("btn-sound"),Yt("btn-sound2")],musicBtns:[Yt("btn-music"),Yt("btn-music2")],mood:Yt("mood"),banner:Yt("banner"),bannerText:Yt("banner-text"),combo:Yt("h-combo"),flyers:Yt("flyers"),mult:Yt("h-mult"),tLevel:Yt("t-level"),tMult:Yt("t-mult"),tDots:Yt("t-mdots"),mpop:Yt("mission-pop"),mpopText:Yt("mpop-text"),mpopReward:Yt("mpop-reward"),pMissions:Yt("p-missions"),oMissions:Yt("o-missions"),mList:Yt("m-list"),mLevel:Yt("m-level"),mSub:Yt("m-sub"),rvCost:Yt("rv-cost"),rvBank:Yt("rv-bank"),rvTimer:Yt("rv-timer")},this.mpopQueue=[],this.flyCount=0,this.last={score:-1,hearts:-1},this.powerEls={},this.toastTimer=0,this.bind()}bind(){let t=this.game,e=(i,s)=>{let r=Yt(i);r&&r.addEventListener("click",o=>{o.preventDefault(),t.state!=="paused"&&t.audio.unlock(),s()})};e("btn-play",()=>t.startRun()),e("btn-again",()=>t.startRun()),e("btn-wardrobe",()=>t.openWardrobe()),e("btn-wardrobe2",()=>t.openWardrobe()),e("btn-help",()=>t.showHelp(!0)),e("help-close",()=>t.showHelp(!1)),e("btn-pause",()=>t.pause()),e("btn-resume",()=>t.resume()),e("btn-home1",()=>t.goHome()),e("btn-home2",()=>t.goHome()),e("w-prev",()=>t.wardrobeStep(-1)),e("w-next",()=>t.wardrobeStep(1)),e("w-action",()=>t.wardrobeAction()),e("w-back",()=>t.closeWardrobe()),e("btn-missions",()=>t.openMissions()),e("m-close",()=>t.startRun());for(let i of["missions","help"])Yt(i).addEventListener("click",s=>{s.target===s.currentTarget&&(i==="missions"?t.closeMissions():t.showHelp(!1))});e("btn-revive",()=>t.revive()),e("btn-norevive",()=>t.declineRevive());for(let i of["btn-sound","btn-sound2"])e(i,()=>t.toggleSfx());for(let i of["btn-music","btn-music2"])e(i,()=>t.toggleMusic())}show(...t){for(let[e,i]of Object.entries(this.screens))i&&(i.hidden=!t.includes(e))}setSound(t,e){for(let i of this.els.soundBtns)i&&(i.classList.toggle("off",!t),i.setAttribute("aria-pressed",String(t)),i.setAttribute("aria-label",t?"Sound effects on":"Sound effects off"));for(let i of this.els.musicBtns)i&&(i.classList.toggle("off",!e),i.setAttribute("aria-pressed",String(e)),i.setAttribute("aria-label",e?"Music on":"Music off"))}titleStats(t,e){this.els.tBest.textContent=t.toLocaleString(),this.els.tHearts.textContent=e.toLocaleString()}hud(t,e){if(t!==this.last.score&&(this.els.score.textContent=t.toLocaleString(),this.last.score=t),e!==this.last.hearts){if(this.els.hearts.textContent=e.toLocaleString(),this.last.hearts>=0&&e>this.last.hearts){let i=this.els.hearts.parentElement;i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}this.last.hearts=e}}resetHud(){this.last={score:-1,hearts:-1},this.combo(0),this.els.powers.innerHTML="",this.powerEls={},this.hud(0,0)}powers(t){for(let e of Object.keys(us)){let i=t[e],s=this.powerEls[e];i>0?(s||(s=document.createElement("div"),s.className="power",s.style.setProperty("--c",us[e].color),s.innerHTML=oy[e],s.title=us[e].name,this.els.powers.appendChild(s),this.powerEls[e]=s),s.style.setProperty("--f",i.toFixed(3))):s&&(s.remove(),delete this.powerEls[e])}}toast(t,e="#ff5fa2",i=1600){let s=this.els.toast;s.textContent=t,s.style.setProperty("--c",e),s.hidden=!1,s.classList.remove("in"),s.offsetWidth,s.classList.add("in"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{s.hidden=!0},i)}mood(t){let e=this.els.mood;e.textContent=t,e.hidden=!1,e.classList.remove("in"),e.offsetWidth,e.classList.add("in"),clearTimeout(this.moodTimer),this.moodTimer=setTimeout(()=>e.hidden=!0,2600)}banner(t){let e=this.els.banner;this.els.bannerText.textContent=t,e.hidden=!1,e.classList.remove("in"),e.offsetWidth,e.classList.add("in"),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>e.hidden=!0,3300)}combo(t){let e=this.els.combo;if(t<5){e.hidden=!0;return}e.hidden=!1,e.textContent=`x${t} combo`,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}flyHeart(t,e,i){if(this.flyCount>14)return;let r=this.els.hearts.parentElement.querySelector(".ico").getBoundingClientRect(),o=document.createElement("div");o.className="flyer",o.innerHTML=sy(i?"#f5b400":"#ff4f97"),o.style.transform=`translate(${t}px, ${e}px) scale(1.25)`,this.els.flyers.appendChild(o),this.flyCount++,requestAnimationFrame(()=>requestAnimationFrame(()=>{o.style.transform=`translate(${r.left+r.width/2}px, ${r.top+r.height/2}px) scale(0.55)`,o.style.opacity="0.85"})),setTimeout(()=>{o.remove(),this.flyCount--},600)}popup(t,e,i,s="#ff5fa2"){let r=document.createElement("div");r.className="popup",r.textContent=t,r.style.left=`${e}px`,r.style.top=`${i}px`,r.style.setProperty("--c",s),this.els.popups.appendChild(r),setTimeout(()=>r.remove(),900)}tutorial(t){let e=this.els.tut;if(!t){e.hidden=!0,this.tutKind=null;return}if(this.tutKind===t)return;this.tutKind=t;let i={jump:"Swipe up to jump!",slide:"Swipe down to slide!",side:"Swipe left or right!"}[t];this.els.tutText.textContent=i,e.dataset.kind=t,e.hidden=!1}level(t,e){this.els.tLevel.textContent=String(t),this.els.tMult.textContent=`x${t}`,[...this.els.tDots.children].forEach((s,r)=>s.classList.toggle("on",r<e));let i=this.els.mult;i.hidden=t<2,i.textContent!==`x${t}`&&(i.textContent=`x${t}`,i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"))}missions(t,e,i=[]){t.innerHTML="",e.forEach((s,r)=>{let o=document.createElement("div");o.className="mission"+(s.done?" done":"")+(i.includes(s.id)?" fresh":"");let a=document.createElement("span");a.className="m-check",s.done?a.innerHTML=ry:a.textContent=String(r+1);let l=document.createElement("span");l.className="m-body";let c=document.createElement("span");c.className="m-text",c.textContent=s.text;let h=document.createElement("span");h.className="m-bar";let d=document.createElement("i");d.style.setProperty("--f",Math.min(1,s.progress/s.target).toFixed(3)),h.appendChild(d),l.append(c,h);let u=document.createElement("span");u.className="m-num";let f=s.unit?` ${s.unit}`:"";u.textContent=s.done?"Done!":`${s.progress.toLocaleString()}/${s.target.toLocaleString()}${f}`,o.append(a,l,u),t.appendChild(o)})}missionsPanel(t,e,i){this.els.mLevel.textContent=String(t),this.els.mSub.innerHTML=e?`You're at the top level: <b>score x${t}</b>! Missions still give hearts.`:`Finish all three to reach Level ${t+1} and <b>score x${t+1}</b>!`,this.missions(this.els.mList,i)}missionDone(t,e){this.mpopQueue.push([t,e]),this.mpopQueue.length===1&&this.nextMissionPop()}nextMissionPop(){let t=this.mpopQueue[0],e=this.els.mpop;if(!t){e.hidden=!0;return}this.els.mpopText.textContent=t[0],this.els.mpopReward.textContent=`+${t[1]}`,e.hidden=!1,e.classList.remove("in"),e.offsetWidth,e.classList.add("in"),clearTimeout(this.mpopTimer),this.mpopTimer=setTimeout(()=>{this.mpopQueue.shift(),this.nextMissionPop()},3e3)}clearMissionPops(){this.mpopQueue.length=0,clearTimeout(this.mpopTimer),this.els.mpop.hidden=!0}revive(t,e,i){this.els.rvCost.textContent=t.toLocaleString(),this.els.rvBank.textContent=e.toLocaleString();let s=this.els.rvTimer;s.classList.remove("run"),s.offsetWidth,s.style.setProperty("--t",`${i}s`),s.classList.add("run")}gameOver({score:t,best:e,hearts:i,isNew:s,title:r}){this.els.oScore.textContent=t.toLocaleString(),this.els.oBest.textContent=e.toLocaleString(),this.els.oHearts.textContent=`+${i.toLocaleString()}`,this.els.oNew.hidden=!s,this.els.oTitle.textContent=r}wardrobe(t,{owned:e,wearing:i,canBuy:s,bank:r,index:o,total:a}){this.els.wName.textContent=t.name,this.els.wHearts.textContent=r.toLocaleString();let l=this.els.wAction;l.disabled=!1,l.classList.remove("locked"),i?(this.els.wStatus.textContent="Wearing now",l.textContent="Play"):e?(this.els.wStatus.textContent="In your closet",l.textContent="Wear"):(this.els.wStatus.textContent=s?`Costs ${t.price.toLocaleString()} hearts`:`Needs ${t.price.toLocaleString()} hearts \xB7 you have ${r.toLocaleString()}`,l.textContent=`Buy \xB7 ${t.price.toLocaleString()}`,s||(l.classList.add("locked"),l.disabled=!0));let c=this.els.wDots;if(c.children.length!==a){c.innerHTML="";for(let h=0;h<a;h++)c.appendChild(document.createElement("i"))}[...c.children].forEach((h,d)=>h.classList.toggle("on",d===o))}};var jd="hk-dream-dash-v1",Qd=()=>({best:0,hearts:0,owned:["classic"],outfit:"classic",sfx:!0,music:!0,runs:0,quality:null});function tp(){try{let n=localStorage.getItem(jd);if(n){let t={...Qd(),...JSON.parse(n)};return(!Array.isArray(t.owned)||!t.owned.includes("classic"))&&(t.owned=["classic",...Array.isArray(t.owned)?t.owned:[]]),t}}catch{}return Qd()}function mn(n){try{localStorage.setItem(jd,JSON.stringify(n))}catch{}}var tc=30,Bh=(n,t)=>Math.max(t,Math.round(n/t)*t),Vn=(n,t,e=t+"s")=>`${n.toLocaleString()} ${n===1?t:e}`,ds={hearts:{run:!0,group:"hearts",text:n=>`Collect ${Vn(n,"heart")} in one run`,target:n=>Bh(40+25*(n-1),5)},meters:{run:!0,group:"dist",text:n=>`Run ${n.toLocaleString()} m in one run`,target:n=>Bh(400+220*(n-1),50)},score:{run:!0,group:"dist",text:n=>`Score ${n.toLocaleString()} in one run`,target:n=>Bh(1500*n*(1+.3*(n-1)),500)},world:{run:!0,group:"dist",text:n=>`Reach ${ki[Math.round(n/On)%ki.length].name} in one run`,target:n=>Math.min(3,1+Math.floor((n-1)/3))*On,unit:"m"},jumps:{run:!0,group:"moves",text:n=>`Jump ${Vn(n,"time")} in one run`,target:n=>Math.min(80,12+4*(n-1))},slides:{run:!0,group:"moves",text:n=>`Slide ${Vn(n,"time")} in one run`,target:n=>Math.min(50,6+3*(n-1))},combo:{run:!0,group:"combo",text:n=>`Reach a x${n} heart combo`,target:n=>Math.min(60,10+5*(n-1))},jelly:{group:"jelly",text:n=>`Bounce on ${Vn(n,"jelly trampoline")}`,target:n=>Math.min(40,3+2*(n-1))},smash:{group:"smash",text:n=>`Smash ${Vn(n,"thing")} with Sugar Dash`,target:n=>Math.min(60,3+3*(n-1))},powers:{group:"powers",text:n=>`Grab ${Vn(n,"power-up")}`,target:n=>Math.min(40,3+2*(n-1))},apples:{group:"apples",text:n=>`Collect ${Vn(n,"red apple")}`,target:n=>Math.min(60,4+3*(n-1))},trains:{group:"trains",text:n=>`Run along ${Vn(n,"cake train")}`,target:n=>Math.min(40,3+2*(n-1))}},ay=n=>20+10*Math.min(n,20);function ep(n,t=[]){let e=Object.keys(ds).filter(r=>!t.includes(r)),i=[],s=new Set;for(;i.length<3&&e.length;){let r=e.splice(Math.floor(Math.random()*e.length),1)[0];s.has(ds[r].group)||(s.add(ds[r].group),i.push({id:r,target:ds[r].target(n),progress:0,done:!1}))}return i}var ec=class{constructor(t,e){this.save=t,this.hooks=e,t.level>=1||(t.level=1),t.level=Math.min(tc,Math.floor(t.level)),this.valid(t.missions)||(t.missions=ep(t.level))}valid(t){return Array.isArray(t)&&t.length===3&&t.every(e=>e&&ds[e.id]&&e.target>0&&e.progress>=0)}get level(){return this.save.level}get mult(){return this.save.level}startRun(){for(let t of this.save.missions)!t.done&&ds[t.id].run&&(t.progress=0)}set(t,e){for(let i of this.save.missions)i.id!==t||i.done||e<=i.progress||(i.progress=Math.floor(e),this.check(i))}add(t,e=1){for(let i of this.save.missions)i.id!==t||i.done||(i.progress+=e,this.check(i))}check(t){if(t.progress<t.target)return;t.progress=t.target,t.done=!0;let e=ay(this.save.level);if(this.save.hearts+=e,this.hooks.done(this.describe(t),e),this.save.missions.every(i=>i.done)){let i=this.save.missions.map(s=>s.id);this.save.level<tc&&this.save.level++,this.save.missions=ep(this.save.level,i),this.hooks.levelUp(this.save.level)}}describe(t){let e=ds[t.id];return{...t,text:e.text(t.target),run:!!e.run,unit:e.unit||""}}list(){return this.save.missions.map(t=>this.describe(t))}doneCount(){return this.save.missions.filter(t=>t.done).length}};var cr=new URLSearchParams(location.search),je=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),np=n=>n<=0?0:n>=1?1:n*n*(3-2*n),Wn=$i.clamp,Oh=class{constructor(){this.save=tp(),this.missions=new ec(this.save,{done:(i,s)=>this.onMissionDone(i,s),levelUp:i=>this.onLevelUp(i)}),this.container=document.getElementById("game");let t=new wl({antialias:!1,powerPreference:"high-performance",stencil:!1});t.toneMapping=rs,t.toneMappingExposure=1,t.setClearColor(16767468),t.shadowMap.enabled=!0,t.shadowMap.type=ns,this.container.appendChild(t.domElement),this.renderer=t,this.scene=new Qn;let e=new js(t);this.scene.environment=e.fromScene(new Rl,.04).texture,this.scene.environmentIntensity=.55,e.dispose(),this.camera=new Ve(60,1,.1,1600),this.camera.position.set(0,1.5,4.4),this.fx=new Jl(t,this.scene,this.camera),this.world=new Ol(this.scene,t),this.kitty=new zl,this.kitty.setShadowMaterial(Qi(16777215,{map:Wd(),transparent:!0,depthWrite:!1})),this.kitty.root.rotation.y=Math.PI,this.kitty.root.traverse(i=>{i.isMesh&&i.material!==_o&&i!==this.kitty.shadow&&i!==this.kitty.bubble&&i!==this.kitty.halo&&(i.castShadow=!0)}),this.scene.add(this.kitty.root),this.track=new Gl(this.scene,this),this.particles=new Wl(this.scene,Xd()),this.trail=new Xl(this.scene),this.audio=new Kl,this.audio.setSfx(this.save.sfx),this.audio.setMusic(this.save.music),this.ui=new jl(this),this.ui.setSound(this.save.sfx,this.save.music),this.input=new Ql(this.container,i=>this.onAction(i)),this.forcedQuality=["low","medium","high"].includes(cr.get("quality"))?cr.get("quality"):null,this.quality=this.forcedQuality||this.guessQuality(),this.fx.setQuality(this.quality),this.perf={t:0,frames:0,slow:0},this.time=0,this.dist=0,this.runStart=0,this.speed=0,this.shake=0,this.flash=0,this.flashColor=new ht(1,1,1),this.camBlend=0,this.fov=60,this.baseFov=60,this.player=this.freshPlayer(),this.powers={magnet:0,rush:0,shield:0,double:0,dash:0},this.god=cr.has("god"),this.startOffset=Number(cr.get("start"))||0,this.ambientT=0,this.sparkT=0,this.kitty.setOutfit(this.outfitById(this.save.outfit)),this.world.reset(this.dist),this.world.setPalette(0),this.state="title",this.facing=Math.PI,this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",()=>setTimeout(this.resize,200)),window.visualViewport&&window.visualViewport.addEventListener("resize",this.resize),this.resize(),document.addEventListener("visibilitychange",()=>this.onVisibility()),this.ui.titleStats(this.save.best,this.save.hearts),this.ui.level(this.missions.level,this.missions.doneCount()),this.ui.show("title"),this.lastT=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop),cr.has("debug")&&(this.debugEl=document.getElementById("debug")),cr.get("shot")==="icon"&&this.setupIconShot(),window.__game=this}setupIconShot(){this.iconShot=!0,this.ui.show();for(let r of this.scene.children)r!==this.kitty.root&&!r.isLight&&(r.visible=!1);let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=e.createRadialGradient(128,110,10,128,128,180);i.addColorStop(0,"#ffe3f0"),i.addColorStop(1,"#ff7eb6"),e.fillStyle=i,e.fillRect(0,0,256,256);let s=new es(t);s.colorSpace=Ge,this.scene.background=s,this.fx.u.uVignette.value=0}guessQuality(){let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":t<=4?"medium":"high"}outfitById(t){return Bn.find(e=>e.id===t)||Bn[0]}freshPlayer(){return{lane:0,prevLane:0,x:0,prevX:0,vx:0,y:0,vy:0,ground:0,grounded:!0,sliding:!1,slideT:0,fastFall:!1,slideQueued:!1,flying:!1,invincible:0,coyote:0,jumpBuf:0,blockedBy:null}}pixelRatio(){let t=window.devicePixelRatio||1,e={high:2,medium:1.5,low:1}[this.quality];return Math.min(t,e)}resize(){let t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight);this.pr=this.pixelRatio(),this.fx.setQuality(this.quality),this.fx.setSize(t,e,this.pr),this.camera.aspect=t/e;let i=$i.degToRad(66),s=$i.radToDeg(2*Math.atan(Math.tan(i/2)/this.camera.aspect));this.baseFov=Wn(s,48,74),this.camBack=Wn((1-this.camera.aspect)*2.2,0,1.4),this.sideways=this.camera.aspect>1.15,this.camera.updateProjectionMatrix(),this.world.starUniforms.uPx.value=this.pr;let r={high:2048,medium:1024,low:0}[this.quality];r!==this.shadowSize&&(this.shadowSize=r,this.world.setShadows(r),this.kitty.useBlob=!r)}startRun(){this.state==="playing"||this.state==="countdown"||(this.audio.unlock(),this.audio.setMode("game"),this.audio.setWorld(0),this.audio.whoosh(),this.kitty.setOutfit(this.outfitById(this.save.outfit)),this.ui.show("hud"),this.ui.resetHud(),this.runStart=this.dist-this.startOffset,this.track.reset(this.dist,this.runStart),this.world.origin!==this.runStart&&this.world.reset(this.dist,this.runStart),this.tutorialRun=this.save.runs<2&&!this.startOffset,this.tutorialRun&&this.track.spawnTutorial(this.dist),this.player=this.freshPlayer(),this.powers={magnet:0,rush:0,shield:0,double:0,dash:0},this.score=0,this.runHearts=0,this.speed=0,this.introT=0,this.facing=0,this.kitty.mode="run",this.kitty.kick(2),this.input.enabled=!0,this.state="playing",this.lastZone=this.world.zoneIndexAt(this.dist),this.lastMilestone=Math.floor(this.startOffset/500),this.combo=0,this.fwT=2,this.revives=0,this.runStats={hearts:0,jumps:0,slides:0},this.onTrain=!1,this.missions.startRun(),this.ui.clearMissionPops(),this.ui.level(this.missions.level,this.missions.doneCount()),this.trail.reset(0,.6),this.requestWakeLock())}addScore(t){this.score+=t*this.missions.mult}die(t){let e=this.player;if(this.lastDeath=t&&{type:t.type,lane:t.lane,kittyLane:e.lane,x:+e.x.toFixed(2),y:+e.y.toFixed(2),sliding:e.sliding,grounded:e.grounded,dist:+this.dist.toFixed(1),sa:+t.sa.toFixed(1),sb:+t.sb.toFixed(1),near:this.track.obstacles.filter(i=>i.sb>this.dist-2&&i.sa<this.dist+30).map(i=>`${i.type}@${i.lane}:${(i.sa-this.dist).toFixed(1)}`).join(" ")},this.state="dying",this.dyingT=0,t&&(this.dist=Math.min(this.dist,t.sa-.3-.05)),this.speed=0,this.bounceV=5,this.kitty.mode="crash",this.kitty.kick(-3),this.facing=Math.PI,this.input.enabled=!1,this.player.sliding=!1,this.player.flying=!1,this.audio.crash(),this.audio.setMode("off"),this.shake=.7,this.flash=.55,this.flashColor.setRGB(1,.85,.92),this.particles.crash(this.player.x,this.player.y+1,.2),this.ui.tutorial(null),navigator.vibrate)try{navigator.vibrate([60,40,120])}catch{}}gameOver(){let t=Math.floor(this.score),e=t>this.save.best;this.save.best=Math.max(this.save.best,t),this.save.hearts+=this.runHearts,this.save.runs+=1,mn(this.save);let i=["Oops!","Ouchie!","Bonk!","So close!"];this.ui.gameOver({score:t,best:this.save.best,hearts:this.runHearts,isNew:e,title:e?"Amazing!":i[Math.floor(Math.random()*i.length)]}),this.ui.missions(this.ui.els.oMissions,this.missions.list()),this.ui.level(this.missions.level,this.missions.doneCount()),this.ui.show("over"),this.state="over",this.audio.setMode("title"),e&&(this.audio.fanfare(),this.particles.confetti(this.camera,90),this.fireworks(6)),this.releaseWakeLock()}goHome(){(this.state==="playing"||this.state==="paused"||this.state==="countdown")&&(this.save.hearts+=this.runHearts||0,this.save.best=Math.max(this.save.best,Math.floor(this.score||0)),this.save.runs+=1,mn(this.save),this.audio.resume()),this.state="title",this.input.enabled=!1,this.track.reset(this.dist),this.player=this.freshPlayer(),this.powers={magnet:0,rush:0,shield:0,double:0,dash:0},this.kitty.mode="idle",this.facing=Math.PI,this.kitty.setOutfit(this.outfitById(this.save.outfit)),this.ui.titleStats(this.save.best,this.save.hearts),this.ui.level(this.missions.level,this.missions.doneCount()),this.ui.clearMissionPops(),this.ui.tutorial(null),this.ui.show("title"),this.audio.setMode("title"),this.audio.setWorld(0),this.world.reset(this.dist),this.world.setPalette(0),this.releaseWakeLock()}pause(){this.state!=="playing"&&this.state!=="countdown"||(this.state="paused",this.input.enabled=!1,this.ui.missions(this.ui.els.pMissions,this.missions.list()),this.ui.show("hud","pause"),this.audio.suspend(),this.releaseWakeLock())}resume(){this.state==="paused"&&(this.ui.show("hud"),this.audio.resume(),this.state="countdown",this.countT=1.5,this.lastCount=0,this.requestWakeLock())}openMissions(){this.state==="title"&&(this.audio.click(),this.ui.missionsPanel(this.missions.level,this.missions.level>=tc,this.missions.list()),this.ui.show("title","missions"))}closeMissions(){this.audio.click(),this.ui.show("title")}onMissionDone(t,e){mn(this.save),this.ui.missionDone(t.text,e),this.ui.level(this.missions.level,this.missions.doneCount()),this.audio.mission();let i=this.player;this.particles.burst(i.x,i.y+1.2,0,{count:22,color:[[.5,1.6,.9],[1.6,1.6,1.6],[1.7,.6,1.2]],speed:4.5,size:.3,sprite:ve.STAR,life:.8})}onLevelUp(t){mn(this.save),this.ui.level(t,0),setTimeout(()=>{this.state==="playing"&&(this.ui.toast(`Level ${t}!`,"#e8112d",1800),this.audio.fanfare(),this.fireworks(4),this.particles.confetti(this.camera,70))},900)}reviveCost(){return qd*2**this.revives}afterCrash(){let t=this.reviveCost(),e=this.save.hearts+this.runHearts;this.revives<Yd&&e>=t?(this.state="revive",this.reviveUntil=performance.now()+Ph*1e3,this.ui.revive(t,e,Ph),this.ui.show("hud","revive"),this.audio.click()):this.gameOver()}declineRevive(){this.state==="revive"&&(this.audio.click(),this.gameOver())}revive(){if(this.state!=="revive")return;let t=this.reviveCost(),e=Math.min(this.runHearts,t);this.runHearts-=e,this.save.hearts=Math.max(0,this.save.hearts-(t-e)),this.revives++,mn(this.save),this.track.clearNear(this.dist,42,r=>this.particles.poof(r.x,0,Wn(this.dist-r.s,-30,-1)));let i=this.player.lane,s=this.player=this.freshPlayer();s.lane=s.prevLane=i,s.x=s.prevX=i*2.1,s.invincible=3,this.speed=0,this.introT=0,this.combo=0,this.ui.combo(0),this.kitty.mode="run",this.kitty.kick(3),this.facing=0,this.audio.revive(),this.audio.setMode("game"),this.flash=.6,this.flashColor.set("#ffd1ea"),this.particles.bigPop(s.x,1,0,[[1.8,.6,1.2],[1.6,1.6,1.6],[1.6,1.3,.4]]),this.particles.ring(s.x,.5,0,[1.5,.7,1.2],2.2,.5),this.ui.show("hud"),this.ui.hud(Math.floor(this.score),this.runHearts),this.state="countdown",this.countT=1.5,this.lastCount=0}showHelp(t){t?this.ui.show("title","help"):this.ui.show("title")}toggleSfx(){this.save.sfx=!this.save.sfx,this.audio.setSfx(this.save.sfx),this.ui.setSound(this.save.sfx,this.save.music),mn(this.save),this.audio.click()}toggleMusic(){this.save.music=!this.save.music,this.audio.setMusic(this.save.music),this.ui.setSound(this.save.sfx,this.save.music),mn(this.save),this.audio.click()}openWardrobe(){this.audio.click(),this.state="wardrobe",this.wIndex=Math.max(0,Bn.findIndex(t=>t.id===this.save.outfit)),this.player=this.freshPlayer(),this.kitty.mode="idle",this.facing=Math.PI,this.track.reset(this.dist),this.ui.show("wardrobe"),this.refreshWardrobe()}refreshWardrobe(){let t=Bn[this.wIndex];this.kitty.setOutfit(t);let e=this.save.owned.includes(t.id);this.ui.wardrobe(t,{owned:e,wearing:this.save.outfit===t.id,canBuy:this.save.hearts>=t.price,bank:this.save.hearts,index:this.wIndex,total:Bn.length})}wardrobeStep(t){let e=Bn.length;this.wIndex=(this.wIndex+t+e)%e,this.audio.click(),this.kitty.kick(1.6),this.particles.burst(0,1,0,{count:12,color:[[1.5,.6,1.1],[1.4,1.4,1.4]],speed:3,size:.28,life:.6}),this.refreshWardrobe()}wardrobeAction(){let t=Bn[this.wIndex],e=this.save.owned.includes(t.id);if(e&&this.save.outfit===t.id){this.startRun();return}if(e)this.audio.click();else{if(this.save.hearts<t.price)return;this.save.hearts-=t.price,this.save.owned.push(t.id),this.audio.buy(),this.particles.bigPop(0,1,0,[[1.6,.5,1],[1.6,1.3,.4],[.6,1.2,1.6]]),this.ui.toast("New outfit!","#ff5fa2")}this.save.outfit=t.id,mn(this.save),this.kitty.mode="happy",this.happyT=1.2,this.refreshWardrobe()}closeWardrobe(){this.audio.click(),this.goHome()}onAction(t){if(t==="pause"){this.state==="playing"?this.pause():this.state==="paused"&&this.resume();return}if(this.state!=="playing")return;let e=this.player;if(t==="left"||t==="right"){let i=Wn(e.lane+(t==="left"?-1:1),-1,1);if(e.blockedBy&&i===e.blockedBy.lane&&this.alongside(e.blockedBy)){this.audio.bump();return}i!==e.lane&&(e.prevLane=e.lane,e.lane=i,this.audio.lane())}else if(t==="up"){if(e.flying)return;e.grounded||e.coyote>0?this.doJump():e.jumpBuf=.2}else if(t==="down"){if(e.flying)return;e.grounded?this.startSlide():(e.fastFall=!0,e.vy=Math.min(e.vy,-14),e.slideQueued=!0)}}doJump(){let t=this.player;this.missions.set("jumps",++this.runStats.jumps),t.vy=15.2,t.grounded=!1,t.coyote=0,t.sliding=!1,t.slideQueued=!1,this.kitty.kick(2.4),this.audio.jump(),this.particles.dust(t.x,t.y,.2,5)}startSlide(){let t=this.player;this.missions.set("slides",++this.runStats.slides),t.sliding=!0,t.slideT=.65,this.kitty.kick(-1.6),this.audio.slide(),this.particles.dust(t.x,t.y,.1,7)}activate(t,e,i,s){let r=us[t];this.powers[t]=r.time,this.ui.toast(r.name+"!",r.color),this.audio.power(),this.flash=.35,this.flashColor.set(r.color);let o=new ht(r.color);if(this.particles.bigPop(e,i,s,[[o.r*1.6,o.g*1.6,o.b*1.6],[1.5,1.5,1.5],[1.6,.6,1.1]]),t==="dash"&&(this.audio.dash(),this.kitty.kick(2),this.trail.reset(this.player.x,this.player.y+.4)),t==="rush"){let a=this.player;a.flying=!0,a.sliding=!1,a.vy=0,this.track.beginRush(this.dist,a.lane),this.trail.reset(a.x,a.y+.4),this.audio.whoosh()}}powerEnded(t){if(t==="rush"){let e=this.player;e.flying=!1,e.vy=0,e.invincible=2.2,this.track.endRush(this.dist)}}bumpAway(t){let e=this.player,i=Math.sign(e.prevX-t.x)||Math.sign(e.x-t.x)||1;e.prevLane=e.lane,e.lane=Wn(t.lane+i,-1,1),e.lane===t.lane&&(e.lane=Wn(t.lane-i,-1,1)),t.ignoreUntil=this.time+.45,e.blockedBy=t}alongside(t){let e=this.dist;return!t.remove&&t.sa<e+.3+.3&&t.sb>e-.3-.3}onTrigger(t){let e=this.player;t.used=!0;let i=this.dist-t.s;t.type==="jelly"?(e.vy=23,e.grounded=!1,e.sliding=!1,e.fastFall=!1,e.slideQueued=!1,e.coyote=0,t.squash=1,this.missions.add("jelly"),this.kitty.kick(3.4),this.audio.boing(),this.particles.burst(t.x,.5,i,{count:12,color:[[1.7,.55,1.1],[1.5,1.5,1.5]],speed:4.5,size:.28,life:.55,up:2}),this.particles.dust(t.x,.2,i,6,[1,.72,.88]),this.shake=Math.max(this.shake,.12)):t.type==="boost"&&this.activate("dash",e.x,.6,0)}smash(t){t.dead=!0;let e=this.dist-t.s;this.particles.poof(t.x,0,Math.max(e,-1)),this.particles.burst(t.x,1,Math.max(e,-1),{count:16,color:[[1.8,1,.4],[1.8,.6,1.2]],speed:7,size:.4,sprite:1,life:.7}),this.audio.smash(),this.addScore(25),this.missions.add("smash"),this.shake=Math.max(this.shake,.18)}onHit(t,e){let i=this.player;if(this.powers.dash>0){this.smash(t);return}if(e){if(this.bumpAway(t),i.invincible>0||this.god)return;this.shake=Math.max(this.shake,.25),this.audio.bump(),this.particles.dust(i.x,i.y+.5,0,6);return}if(i.invincible>0||this.god){t.ignoreUntil=1/0;return}if(this.powers.shield>0){this.powers.shield=0,t.dead=!0,i.invincible=1.2,this.audio.shieldPop(),this.shake=.35,this.flash=.3,this.flashColor.set("#8fd3ff"),this.particles.poof(t.x,0,0),this.ui.toast("Shield saved you!","#4fb8ff",1200);return}this.die(t)}onItem(t){let e=this.powers.double>0?2:1,i=this.dist-t.s;this.combo=this.time-(this.lastPickT||-9)<.8?(this.combo||0)+1:1,this.lastPickT=this.time,this.ui.combo(this.combo),this.missions.set("combo",this.combo);let s=1+Math.floor(this.combo/10)*.5,r=(this._fly||(this._fly=new P)).set(t.x,t.y,i).project(this.camera);this.ui.flyHeart((r.x*.5+.5)*window.innerWidth,(-r.y*.5+.5)*window.innerHeight,e>1),t.kind==="heart"?(this.runHearts+=e,this.runStats.hearts+=e,this.addScore(10*e*s),this.audio.heart(e>1),this.particles.heartPop(t.x,t.y,i,e>1)):(this.runHearts+=5*e,this.runStats.hearts+=5*e,this.addScore(50*e),this.missions.add("apples"),this.audio.apple(),this.particles.bigPop(t.x,t.y,i,[[1.7,.35,.45],[1.6,1.3,.4],[1.5,1.5,1.5]]),this.popupAt(`+${5*e}`,t.x,t.y+.6,i,"#ff3d5e")),this.missions.set("hearts",this.runStats.hearts)}popupAt(t,e,i,s,r){let o=new P(e,i,s).project(this.camera),a=(o.x*.5+.5)*window.innerWidth,l=(-o.y*.5+.5)*window.innerHeight;this.ui.popup(t,a,l,r)}updatePlaying(t){let e=this.player,i=this.powers;this.introT+=t;for(let M in i)i[M]>0&&(i[M]-=t,i[M]<=0&&(i[M]=0,this.powerEnded(M)));let s=i.rush>0,r=this.dist-this.runStart,o=s?1.45:i.dash>0?1.35:1,a=this.freeze?0:Math.min(31,15+r*.0046)*o,l=np(this.introT/.8);this.speed=je(this.speed,a*l,s?2.5:5,t);let c=this.dist;this.dist+=this.speed*t,this.addScore(this.speed*t),this.missions.set("meters",this.dist-this.runStart),this.missions.set("world",this.dist-this.runStart),this.missions.set("score",this.score),e.prevX=e.x;let h=e.lane*2.1;e.x=je(e.x,h,20,t),Math.abs(h-e.x)<.004&&(e.x=h),e.vx=(e.x-e.prevX)/Math.max(t,1e-4);let d=e.y;e.flying?(e.y=je(e.y,5.2,3.2,t),e.vy=0,e.grounded=!1):(e.vy-=50*t*(e.fastFall?2.3:1),e.y+=e.vy*t),e.sliding&&(e.slideT-=t,e.slideT<=0&&(e.sliding=!1)),e.invincible>0&&(e.invincible-=t);let u=e.sliding?.6:1.45,f=this.track.collide({x:e.x,prevX:e.prevX,y:e.y,y0:d,h:u,dist:this.dist,prevDist:c,time:this.time,dt:t});if(e.ground=f.ground,e.flying||(e.y<=f.ground?(e.grounded||this.onLand(e.vy),e.y=f.ground,e.vy=0,e.grounded=!0,e.fastFall=!1,e.coyote=.1,e.slideQueued&&(e.slideQueued=!1,this.startSlide()),e.jumpBuf>0&&(e.jumpBuf=0,this.doJump())):e.y>f.ground+.03&&(e.grounded=!1,e.coyote-=t)),e.jumpBuf=Math.max(0,e.jumpBuf-t),e.grounded&&!e.flying){let M=e.ground>1.9;M&&!this.onTrain&&this.missions.add("trains"),this.onTrain=M}if(f.triggers&&f.triggers.length&&!e.flying)for(let M of f.triggers)this.onTrigger(M);if(f.hit&&!e.flying&&this.onHit(f.hit,f.side),this.state!=="playing")return;this.track.collect({x:e.x,y:e.y,dist:this.dist,prevDist:c,sliding:e.sliding},i.magnet>0,t,M=>this.onItem(M),M=>{this.missions.add("powers"),this.activate(M.kind,M.x,M.y,this.dist-M.s)});let p="run";if(e.flying?p="fly":e.sliding?p="slide":e.grounded||(p="jump"),this.kitty.mode=p,this.tutorialRun&&this.track.tutorial){let M=null;for(let E of this.track.tutorial){let y=E.s-this.dist;y>0&&y<30&&(M=E.hint)}this.ui.tutorial(M)}this.world.setPalette(this.world.paletteAt(this.dist));let x=this.world.zoneIndexAt(this.dist);x!==this.lastZone&&(this.lastZone=x,this.enterWorld(x%ki.length));let g=Math.floor(r/500);if(g>this.lastMilestone&&(this.lastMilestone=g,this.milestone(g*500)),this.world.biomeNow===3&&(this.fwT-=t,this.fwT<=0&&(this.fwT=1.3+Math.random()*2.2,this.fireworks(1))),this.combo&&this.time-this.lastPickT>.9&&(this.combo=0,this.ui.combo(0)),this.sparkT-=t,this.sparkT<=0){this.sparkT=s?.02:.07;let M=s?[[1.6,.5,.8],[1.6,1.3,.4],[.5,1.4,.8],[.5,.9,1.6],[1.1,.6,1.6]][Math.floor(Math.random()*5)]:i.double>0?[1.6,1.25,.4]:[1.4,.7,1.1];this.particles.trailSparkle(e.x,e.y+(e.flying?.1:.05),.3,M)}if(i.magnet>0&&Math.random()<t*20){let M=Math.random()*Math.PI*2;this.particles.add.emit({x:e.x+Math.cos(M)*.9,y:e.y+.7,z:Math.sin(M)*.9,vx:-Math.cos(M)*1.5,vz:-Math.sin(M)*1.5,color:[1.6,.5,1],size:.22,sizeEnd:.05,sprite:ve.SPARKLE,life:.5,world:!1})}this.ui.hud(Math.floor(this.score),this.runHearts);let m={};for(let M in i)m[M]=i[M]>0&&M!=="shield"?i[M]/us[M].time:i[M]>0?1:0;this.ui.powers(m)}enterWorld(t){this.ui.banner(ki[t].name),this.audio.setWorld(t),this.audio.milestone(),this.particles.confetti(this.camera,50),t===3&&this.fireworks(4)}fireworks(t=1){let e=this.camera.position,i=[[1.9,.6,1.2],[1.9,1.5,.5],[.6,1.4,1.9],[1.3,.8,1.9],[.7,1.8,1],[1.9,1.9,1.9]];for(let s=0;s<t;s++){let r=i[Math.floor(Math.random()*i.length)],o=.8+Math.random()*.5+s*.25;setTimeout(()=>this.audio.fireworkLaunch(),s*250),this.particles.firework(e.x+(Math.random()-.5)*64,4,-75-Math.random()*25,r,o,()=>this.audio.fireworkPop())}}milestone(t){this.ui.toast(`${t.toLocaleString()} m!`,"#8f73e6",1400),this.audio.milestone(),this.fireworks(5)}onLand(t){let e=this.player,i=Math.min(1,-t/16);this.kitty.kick(-2.6*i-.4),i>.3&&(this.audio.land(),this.particles.dust(e.x,e.y,.1,6))}updateCamera(t){let e=this.player,i=this.time,s=this.camera,r=this.state==="playing"||this.state==="dying"||this.state==="over"||this.state==="paused"||this.state==="countdown"||this.state==="revive";this.camBlend=je(this.camBlend,r?1:0,r?2.6:3,t);let o=np(this.camBlend),a=this.state==="wardrobe",l=this._camV||(this._camV=[new P,new P,new P,new P]),c=a?l[0].set(Math.sin(i*.5)*.25,1,2.7+this.camBack*.55):l[0].set(Math.sin(i*.35)*.35,1.05,3.3+this.camBack*.6),h=l[1].set(0,a?.62:.6,0);if(this.sideways){let R=a?1.05:1.6;c.x+=R,h.x+=R}let d=this.state==="dying"||this.state==="over"||this.state==="revive",u=4.8+this.camBack*.4+(this.powers.rush>0?.8:0),f=l[2].set(e.x*.85,4.4+e.y*.62,u),p=l[3].set(e.x*.75,.2+e.y*.62,-6),x=!this.sideways&&this.state==="over"?1:0;this.cardLift=d?je(this.cardLift||0,x,4,t):0,d&&(f.set(e.x*.9,2.3+e.ground+this.cardLift*.35,4+this.camBack*.4+this.cardLift*.5),p.set(e.x,.25+e.ground-this.cardLift*1.6,0),this.sideways&&(f.x+=1.6,p.x+=1.6,f.y-=.6,p.y+=.45));let g=c.lerp(f,o),m=h.lerp(p,o);this.camPos||(this.camPos=g.clone(),this.camLook=m.clone());let M=r?9:5;this.camPos.x=je(this.camPos.x,g.x,M,t),this.camPos.y=je(this.camPos.y,g.y,M*.8,t),this.camPos.z=je(this.camPos.z,g.z,M,t),this.camLook.x=je(this.camLook.x,m.x,M,t),this.camLook.y=je(this.camLook.y,m.y,M*.8,t),this.camLook.z=je(this.camLook.z,m.z,M,t),this.shake=Math.max(0,this.shake-t*1.6);let E=this.shake*this.shake;s.position.set(this.camPos.x+(Math.random()-.5)*E*.8,this.camPos.y+(Math.random()-.5)*E*.8,this.camPos.z),s.lookAt(this.camLook.x,this.camLook.y,this.camLook.z);let y=r?Wn((this.speed-15)*.35,0,8):0,w=this.baseFov+y+(this.powers.rush>0?9:this.powers.dash>0?7:0)-(a?6:0);this.fov=je(this.fov,w,3,t),Math.abs(s.fov-this.fov)>.01&&(s.fov=this.fov,s.updateProjectionMatrix());let S=this.renderer.domElement.height;this.particles.setScale(S/(2*Math.tan($i.degToRad(s.fov)/2)))}ambient(t){if(this.ambientT-=t,this.ambientT>0)return;this.ambientT=.12;let e=this.world.biomeNow||0,i=this.camera.position.x,s=this.particles,r=()=>-5-Math.random()*38;if(e===3){let o=Math.random()<.5?-1:1;s.add.emit({x:i+o*(4.5+Math.random()*8),y:.5+Math.random()*3,z:r(),vx:(Math.random()-.5)*.6,vy:(Math.random()-.3)*.5,vz:(Math.random()-.5)*.6,color:Math.random()<.5?[1.4,1.6,.6]:[1.6,.7,1.3],size:.3,sizeEnd:.2,sprite:ve.GLOW,life:3,twinkle:6})}else if(e===2)s.add.emit({x:i+(Math.random()-.5)*20,y:1+Math.random()*7,z:r(),vx:0,vy:.2,vz:0,color:[[1.5,1.2,1.6],[1.1,1.4,1.7],[1.7,1.5,1]][Math.floor(Math.random()*3)],size:.35,sizeEnd:.1,sprite:ve.GEM,life:2.5,twinkle:8,spin:1}),Math.random()<.35&&s.norm.emit({x:i+(Math.random()-.5)*26,y:-.2+Math.random()*1.2,z:r(),vx:.4,vy:0,vz:0,color:[1,.97,1],size:2.4,sizeEnd:3.2,sprite:ve.WISP,life:4,alpha:.55,rot:0});else if(e===1&&Math.random()<.6){let o=Math.random()<.5?-1:1;s.norm.emit({x:i+o*(3.5+Math.random()*7),y:.8+Math.random()*2.5,z:r(),vx:(Math.random()-.5)*1.6,vy:(Math.random()-.2)*.6,vz:(Math.random()-.5)*1.6,color:[[1,.55,.75],[1,.9,.35],[.75,.6,1],[.55,.85,1]][Math.floor(Math.random()*4)],size:.42,sprite:ve.BUTTERFLY,life:4.5,rot:(Math.random()-.5)*.6})}if(e!==2){let o=Math.random()<.25;s.norm.emit({x:i+(Math.random()-.5)*22,y:4+Math.random()*6,z:r(),vx:.6+Math.random()*.6,vy:-.7-Math.random()*.5,vz:(Math.random()-.5)*.4,color:o?[1,.45,.72]:[1,.78,.88],size:o?.3:.26,sprite:o?ve.HEART:ve.PETAL,life:5,spin:(Math.random()-.5)*3,alpha:.9})}}loop(t){requestAnimationFrame(this.loop);let e=(t-this.lastT)/1e3;this.lastT=t,e>0||(e=1/60),e=Math.min(e,.05),this.state!=="paused"&&(this.time+=e,this.update(e),this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.fx.render(e),this.drawCalls=this.renderer.info.render.calls,this.watchPerf(e))}update(t){let e=this.state,i=this.dist;if(e==="playing")this.updatePlaying(t);else if(e==="countdown"){this.countT-=t;let c=Math.ceil(this.countT/.5);c!==this.lastCount&&c>0&&(this.lastCount=c,this.ui.toast(String(c),"#ff5fa2",450),this.audio.click()),this.countT<=0&&(this.state="playing",this.input.enabled=!0)}else if(e==="dying"){this.dyingT+=t,this.bounceV=je(this.bounceV,0,5,t),this.dist-=this.bounceV*t;let c=this.player;c.vy-=50*t,c.y=Math.max(c.ground,c.y+c.vy*t),this.dyingT>1.35&&this.afterCrash()}else e==="revive"?performance.now()>this.reviveUntil&&this.gameOver():e==="wardrobe"&&this.happyT>0&&(this.happyT-=t,this.happyT<=0&&(this.kitty.mode="idle"));let s=this.dist-i,r=this.player;this.world.update(t,this.dist,this.camera,this.time),e!=="playing"&&e!=="dying"?this.track.update(0,this.dist,0,this.time):this.track.update(t,this.dist,this.speed,this.time),this.kitty.root.position.set(r.x,r.y,0),this.kitty.update(t,{mode:this.kitty.mode,speed:this.speed,vx:e==="playing"?r.vx:0,height:r.flying?3:r.y-r.ground,flying:r.flying,shield:this.powers.shield>0&&(e==="playing"||e==="countdown"),magnet:this.powers.magnet>0&&e==="playing",facing:this.facing}),this.kitty.body.visible=!(r.invincible>0&&e==="playing"&&Math.floor(this.time*16)%2===0);let o=this._head||(this._head=new P);o.set(r.x,r.y+(r.flying?-.05:.4),.2),this.trail.update(t,o,s,(this.powers.rush>0||this.powers.dash>0)&&e==="playing",this.time),this.particles.update(t,s),this.ambient(t),this.updateCamera(t);let a=(this.powers.rush>0||this.powers.dash>0)&&e==="playing",l=this.fx.u;if(l.uSpeed.value=je(l.uSpeed.value,a?1:e==="playing"?Wn((this.speed-25)/12,0,.45):0,4,t),l.uAberr.value=je(l.uAberr.value,a?.1:0,4,t)+this.shake*.3,this.flash=Math.max(0,this.flash-t*2.2),l.uFlash.value=this.flash*this.flash,l.uFlashColor.value.copy(this.flashColor),this.fx.bloom.strength=je(this.fx.bloom.strength,(this.world.pal.bloom||.5)+(a?.3:0),3,t),this.iconShot){let c=this.camera;this.kitty.waveT=99,this.kitty.blinkT=99,c.position.set(0,1.16,3.05),c.lookAt(0,1.1,0),c.fov=33,c.updateProjectionMatrix(),this.fx.bloom.strength=.2}this.debugEl&&(this.fpsAcc=(this.fpsAcc||0)*.95+1/t*.05,this.debugEl.textContent=`${this.fpsAcc.toFixed(0)} fps \xB7 ${this.quality} \xB7 pr ${this.pr} \xB7 calls ${this.drawCalls}`)}watchPerf(t){if(this.forcedQuality||this.state!=="playing")return;let e=this.perf;if(e.t+=t,e.frames++,e.t<3)return;let i=e.frames/e.t;e.t=0,e.frames=0,e.slow=i<26?e.slow+1:0,e.slow>=2&&this.quality!=="low"&&(this.quality=this.quality==="high"?"medium":"low",this.resize(),e.slow=0)}onVisibility(){document.hidden?((this.state==="playing"||this.state==="countdown")&&this.pause(),this.audio.suspend()):this.state!=="paused"&&(this.audio.resume(),this.lastT=performance.now())}async requestWakeLock(){try{navigator.wakeLock&&!this.wakeLock&&(this.wakeLock=await navigator.wakeLock.request("screen"),this.wakeLock.addEventListener("release",()=>this.wakeLock=null))}catch{this.wakeLock=null}}releaseWakeLock(){try{this.wakeLock&&this.wakeLock.release()}catch{}this.wakeLock=null}};function sp(){let n=document.getElementById("loading");try{if(!document.createElement("canvas").getContext("webgl2"))throw new Error("no-webgl2");new Oh}catch(t){if(console.error(t),n){n.hidden=!1;let e=n.querySelector(".loading-text");e&&(e.textContent=t&&t.message==="no-webgl2"?"This browser can\u2019t show 3D graphics. Try the latest Safari or Chrome.":"Something went wrong while loading. Please refresh the page.")}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",sp):sp();
