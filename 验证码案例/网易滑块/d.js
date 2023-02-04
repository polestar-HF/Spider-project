// function get_d(b) {
//     void 0 === b && (b = V);
//     var f = $a();
//     gd(Cc, a[5])(function (e) {
//         var g = ba(!0);
//         c[0];
//         c[0];
//         c[0];
//         e = ja(lb, a[675], void 0)(f.concat(e, g));
//         C.h(wc, e, b)
//     })
// }
window = global
var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
// var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_console_log = function () {}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMImplementation = v_saf(function DOMImplementation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Option = v_saf(function Option(){;})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Response = v_saf(function Response(){;})
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this.getRandomValues = function(){
    v_console_log('  [*] Crypto -> getRandomValues[func]')
    var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});}
  this.randomUUID = function(){
    v_console_log('  [*] Crypto -> randomUUID[func]')
    function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
    function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
    return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')}})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
AudioParam = v_saf(function AudioParam(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
AudioBuffer = v_saf(function AudioBuffer(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
NetworkInformation = v_saf(function NetworkInformation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(NetworkInformation, EventTarget)
LayoutShift = v_saf(function LayoutShift(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(LayoutShift, PerformanceEntry)
PageTransitionEvent = v_saf(function PageTransitionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PageTransitionEvent, Event)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
BaseAudioContext = v_saf(function BaseAudioContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BaseAudioContext, EventTarget)
AudioNode = v_saf(function AudioNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AudioNode, EventTarget)
OfflineAudioCompletionEvent = v_saf(function OfflineAudioCompletionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OfflineAudioCompletionEvent, Event)
MessageEvent = v_saf(function MessageEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessageEvent, Event)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
DocumentFragment = v_saf(function DocumentFragment(){;}); _inherits(DocumentFragment, Node)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
AudioScheduledSourceNode = v_saf(function AudioScheduledSourceNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AudioScheduledSourceNode, AudioNode)
DynamicsCompressorNode = v_saf(function DynamicsCompressorNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(DynamicsCompressorNode, AudioNode)
OfflineAudioContext = v_saf(function OfflineAudioContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OfflineAudioContext, BaseAudioContext)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
OscillatorNode = v_saf(function OscillatorNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OscillatorNode, AudioScheduledSourceNode)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLOptionElement = v_saf(function HTMLOptionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionElement, HTMLElement)
HTMLFormElement = v_saf(function HTMLFormElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLFormElement, HTMLElement)
HTMLSelectElement = v_saf(function HTMLSelectElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSelectElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLIFrameElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLButtonElement = v_saf(function HTMLButtonElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLButtonElement, HTMLElement)
HTMLSpanElement = v_saf(function HTMLSpanElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSpanElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLTableElement = v_saf(function HTMLTableElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
HTMLUListElement = v_saf(function HTMLUListElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUListElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLIElement, HTMLElement)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  dispatchEvent: {value: v_saf(function dispatchEvent(){v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 28);return 28 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 3);return 3 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36" }},
  appVersion: {get(){ v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36");return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36" }},
  vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  connection: {get(){ v_console_log("  [*] Navigator -> connection[get]", {});return {} }},
  maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  doNotTrack: {get(){ v_console_log("  [*] Navigator -> doNotTrack[get]", {});return {} }},
  productSub: {get(){ v_console_log("  [*] Navigator -> productSub[get]", "20030107");return "20030107" }},
  appCodeName: {get(){ v_console_log("  [*] Navigator -> appCodeName[get]", "Mozilla");return "Mozilla" }},
  appName: {get(){ v_console_log("  [*] Navigator -> appName[get]", "Netscape");return "Netscape" }},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 8);return 8 }},
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); }},
  cssFloat: {get(){ v_console_log("  [*] CSSStyleDeclaration -> cssFloat[get]", "left");return "left" }},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMImplementation.prototype, {
  hasFeature: {value: v_saf(function hasFeature(){v_console_log("  [*] DOMImplementation -> hasFeature[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMImplementation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Option.prototype, {
  selected: {get(){ v_console_log("  [*] Option -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] Option -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"Option",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  name: {get(){ v_console_log("  [*] PerformanceEntry -> name[get]", "self");return "self" }},
  startTime: {get(){ v_console_log("  [*] PerformanceEntry -> startTime[get]", 9656.100000143051);return 9656.100000143051 }},
  duration: {get(){ v_console_log("  [*] PerformanceEntry -> duration[get]", 57);return 57 }},
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
  width: {get(){ v_console_log("  [*] Image -> width[get]", 60);return 60 }},
  height: {get(){ v_console_log("  [*] Image -> height[get]", 158);return 158 }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  type: {get(){ v_console_log("  [*] Event -> type[get]", "mousemove");return "mousemove" }},
  initEvent: {value: v_saf(function initEvent(){v_console_log("  [*] Event -> initEvent[func]", [].slice.call(arguments));})},
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Response.prototype, {
  status: {get(){ v_console_log("  [*] Response -> status[get]", 200);return 200 }},
  ok: {get(){ v_console_log("  [*] Response -> ok[get]", true);return true }},
  json: {value: v_saf(function json(){v_console_log("  [*] Response -> json[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Response",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Crypto.prototype, {
  [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  navigationStart: {get(){ v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1651944003782);return 1651944003782 }},
  unloadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", 1651944003933);return 1651944003933 }},
  unloadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", 1651944003950);return 1651944003950 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceTiming -> redirectStart[get]", 0);return 0 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", 0);return 0 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceTiming -> fetchStart[get]", 1651944003795);return 1651944003795 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", 1651944003800);return 1651944003800 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", 1651944003800);return 1651944003800 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceTiming -> connectStart[get]", 1651944003800);return 1651944003800 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> connectEnd[get]", 1651944003865);return 1651944003865 }},
  secureConnectionStart: {get(){ v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", 1651944003832);return 1651944003832 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceTiming -> requestStart[get]", 1651944003865);return 1651944003865 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceTiming -> responseStart[get]", 1651944003901);return 1651944003901 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceTiming -> responseEnd[get]", 1651944003903);return 1651944003903 }},
  domLoading: {get(){ v_console_log("  [*] PerformanceTiming -> domLoading[get]", 1651944003963);return 1651944003963 }},
  domInteractive: {get(){ v_console_log("  [*] PerformanceTiming -> domInteractive[get]", 1651944005444);return 1651944005444 }},
  domContentLoadedEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", 1651944005444);return 1651944005444 }},
  domContentLoadedEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", 1651944005472);return 1651944005472 }},
  domComplete: {get(){ v_console_log("  [*] PerformanceTiming -> domComplete[get]", 1651944013438);return 1651944013438 }},
  loadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", 1651944013438);return 1651944013438 }},
  loadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  rect: {value: v_saf(function rect(){v_console_log("  [*] CanvasRenderingContext2D -> rect[func]", [].slice.call(arguments));})},
  isPointInPath: {value: v_saf(function isPointInPath(){v_console_log("  [*] CanvasRenderingContext2D -> isPointInPath[func]", [].slice.call(arguments));})},
  textBaseline: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); }},
  fillStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); }},
  fillRect: {value: v_saf(function fillRect(){v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments));})},
  font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
  fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
  globalCompositeOperation: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> globalCompositeOperation[set]", [].slice.call(arguments)); }},
  beginPath: {value: v_saf(function beginPath(){v_console_log("  [*] CanvasRenderingContext2D -> beginPath[func]", [].slice.call(arguments));})},
  arc: {value: v_saf(function arc(){v_console_log("  [*] CanvasRenderingContext2D -> arc[func]", [].slice.call(arguments));})},
  closePath: {value: v_saf(function closePath(){v_console_log("  [*] CanvasRenderingContext2D -> closePath[func]", [].slice.call(arguments));})},
  fill: {value: v_saf(function fill(){v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioParam.prototype, {
  value: {set(){ v_console_log("  [*] AudioParam -> value[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"AudioParam",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioBuffer.prototype, {
  getChannelData: {value: v_saf(function getChannelData(){v_console_log("  [*] AudioBuffer -> getChannelData[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioBuffer",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  cloneNode: {value: v_saf(function cloneNode(){v_console_log("  [*] Node -> cloneNode[func]", [].slice.call(arguments));})},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "HTML");return "HTML" }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
  textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "加载中...");return "加载中..." },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "加载中..." }},
  parentElement: {get(){ v_console_log("  [*] Node -> parentElement[get]", {});return {} }},
  contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 1080);return 1080 }},
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1920);return 1920 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
  availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1920);return 1920 }},
  availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1040);return 1040 }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onload: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[get]", {});return {} }},
  onerror: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments));return {} }},
  onprogress: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onprogress[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] Performance -> getEntries[func]", [].slice.call(arguments));})},
  getEntriesByName: {value: v_saf(function getEntriesByName(){v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments));})},
  getEntriesByType: {value: v_saf(function getEntriesByType(){v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments));if (arguments[0]=='resource'){return v_new(PerformanceResourceTiming)}})},
  timing: {get(){ v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));return v_new(PerformanceTiming) }},
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  responseEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 3237.9000000953674);return 3237.9000000953674 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupStart[get]", 2948.300000190735);return 2948.300000190735 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupEnd[get]", 2948.300000190735);return 2948.300000190735 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectEnd[get]", 2948.300000190735);return 2948.300000190735 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectStart[get]", 2948.300000190735);return 2948.300000190735 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseStart[get]", 3236.9000000953674);return 3236.9000000953674 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> requestStart[get]", 2954.100000143051);return 2954.100000143051 }},
  initiatorType: {get(){ v_console_log("  [*] PerformanceResourceTiming -> initiatorType[get]", "fetch");return "fetch" }},
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ScreenOrientation.prototype, {
  angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
  type: {get(){ v_console_log("  [*] ScreenOrientation -> type[get]", "landscape-primary");return "landscape-primary" }},
  [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NetworkInformation.prototype, {
  effectiveType: {get(){ v_console_log("  [*] NetworkInformation -> effectiveType[get]", "4g");return "4g" }},
  rtt: {get(){ v_console_log("  [*] NetworkInformation -> rtt[get]", 50);return 50 }},
  [Symbol.toStringTag]: {value:"NetworkInformation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(LayoutShift.prototype, {
  hadRecentInput: {get(){ v_console_log("  [*] LayoutShift -> hadRecentInput[get]", false);return false }},
  value: {get(){ v_console_log("  [*] LayoutShift -> value[get]", 0.0003362191054315555);return 0.0003362191054315555 }},
  [Symbol.toStringTag]: {value:"LayoutShift",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PageTransitionEvent.prototype, {
  persisted: {get(){ v_console_log("  [*] PageTransitionEvent -> persisted[get]", false);return false }},
  [Symbol.toStringTag]: {value:"PageTransitionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BaseAudioContext.prototype, {
  createOscillator: {value: v_saf(function createOscillator(){v_console_log("  [*] BaseAudioContext -> createOscillator[func]", [].slice.call(arguments));})},
  createDynamicsCompressor: {value: v_saf(function createDynamicsCompressor(){v_console_log("  [*] BaseAudioContext -> createDynamicsCompressor[func]", [].slice.call(arguments));})},
  destination: {get(){ v_console_log("  [*] BaseAudioContext -> destination[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"BaseAudioContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioNode.prototype, {
  connect: {value: v_saf(function connect(){v_console_log("  [*] AudioNode -> connect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
  renderedBuffer: {get(){ v_console_log("  [*] OfflineAudioCompletionEvent -> renderedBuffer[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"OfflineAudioCompletionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageEvent.prototype, {
  origin: {get(){ v_console_log("  [*] MessageEvent -> origin[get]", "https://webpage.qidian.qq.com");return "https://webpage.qidian.qq.com" }},
  data: {get(){ v_console_log("  [*] MessageEvent -> data[get]", "{\"kfuin\":2852175932,\"visitorId\":\"900451944010493\",\"isMobile\":0,\"act\":\"SM_INVITE_CONF\",\"referUrl\":\"https://dun.163.com/trial/jigsaw\",\"ua\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36\",\"ldpUrl\":\"https://dun.163.com/trial/jigsaw\",\"ldpTitle\":\"滑动拼图验证码_拼图验证_图形验证_在线体验_网易易盾\",\"wpaId\":113,\"QD_PM\":\"ONLINE_STATUS\",\"data\":{\"c_info\":[],\"u_info\":[],\"data\":null,\"time\":1651944012,\"v_info\":{\"avatar\":null,\"nickname\":null,\"open_id\":null,\"app_id\":null,\"app_type\":null},\"aid\":null,\"theme\":0,\"number\":0,\"receptionName\":null},\"inviteRule\":{\"kfuin\":2852175932,\"key\":\"\",\"autoInvited\":{\"active\":0,\"init\":1,\"repeat\":{\"active\":0},\"condition\":{\"stayPeriod\":null}},\"invitedStyle\":{\"type\":1,\"btns\":[{\"type\":\"im\",\"text\":\"立即咨询\"}],\"theme\":2,\"avatar\":\"https://p.qpic.cn/qidian_pic/2852199000/2016111155766607eff884a46185afeb425550d2/0\",\"xc\":\"\",\"title\":\"客服在线，欢迎咨询\",\"content\":\"您好，当前有客服在线，点击即可咨询\"}}}");return "{\"kfuin\":2852175932,\"visitorId\":\"900451944010493\",\"isMobile\":0,\"act\":\"SM_INVITE_CONF\",\"referUrl\":\"https://dun.163.com/trial/jigsaw\",\"ua\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36\",\"ldpUrl\":\"https://dun.163.com/trial/jigsaw\",\"ldpTitle\":\"滑动拼图验证码_拼图验证_图形验证_在线体验_网易易盾\",\"wpaId\":113,\"QD_PM\":\"ONLINE_STATUS\",\"data\":{\"c_info\":[],\"u_info\":[],\"data\":null,\"time\":1651944012,\"v_info\":{\"avatar\":null,\"nickname\":null,\"open_id\":null,\"app_id\":null,\"app_type\":null},\"aid\":null,\"theme\":0,\"number\":0,\"receptionName\":null},\"inviteRule\":{\"kfuin\":2852175932,\"key\":\"\",\"autoInvited\":{\"active\":0,\"init\":1,\"repeat\":{\"active\":0},\"condition\":{\"stayPeriod\":null}},\"invitedStyle\":{\"type\":1,\"btns\":[{\"type\":\"im\",\"text\":\"立即咨询\"}],\"theme\":2,\"avatar\":\"https://p.qpic.cn/qidian_pic/2852199000/2016111155766607eff884a46185afeb425550d2/0\",\"xc\":\"\",\"title\":\"客服在线，欢迎咨询\",\"content\":\"您好，当前有客服在线，点击即可咨询\"}}}" }},
  [Symbol.toStringTag]: {value:"MessageEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://dun.163.com/trial/jigsaw");return "https://dun.163.com/trial/jigsaw" }},
  URL: {get(){ v_console_log("  [*] Document -> URL[get]", "https://dun.163.com/trial/jigsaw");return "https://dun.163.com/trial/jigsaw" }},
  title: {get(){ v_console_log("  [*] Document -> title[get]", "滑动拼图验证码_拼图验证_图形验证_在线体验_网易易盾");return "滑动拼图验证码_拼图验证_图形验证_在线体验_网易易盾" }},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
  compatMode: {get(){ v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");return "CSS1Compat" }},
  createDocumentFragment: {value: v_saf(function createDocumentFragment(){v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));})},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  createComment: {value: v_saf(function createComment(){v_console_log("  [*] Document -> createComment[func]", [].slice.call(arguments));})},
  implementation: {get(){ v_console_log("  [*] Document -> implementation[get]", {});return {} }},
  body: {get(){ v_console_log("  [*] Document -> body[get]", {});return {} }},
  head: {get(){ v_console_log("  [*] Document -> head[get]", {});return {} }},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  createEvent: {value: v_saf(function createEvent(){v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));})},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  domain: {get(){ v_console_log("  [*] Document -> domain[get]", "dun.163.com");return "dun.163.com" }},
  scripts: {get(){ v_console_log("  [*] Document -> scripts[get]", {});return {} }},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments)); }},
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "yidun yidun--light yidun--float yidun--size-small yidun--loading");return "yidun yidun--light yidun--float yidun--size-small yidun--loading" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "yidun yidun--light yidun--float yidun--size-small yidun--loading" }},
  outerHTML: {get(){ v_console_log("  [*] Element -> outerHTML[get]", "<nav></nav>");return "<nav></nav>" }},
  getElementsByClassName: {value: v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})},
  id: {set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return "<nav></nav>" }},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  webkitMatchesSelector: {value: v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 500);return 500 }},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this._tagName);return this._tagName }},
  children: {get(){ v_console_log("  [*] Element -> children[get]", {});return {} }},
  querySelector: {value: v_saf(function querySelector(){v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments));})},
  clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1914);return 1914 }},
  clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 416);return 416 }},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  open: {value: v_saf(function open(){v_console_log("  [*] XMLHttpRequest -> open[func]", [].slice.call(arguments));})},
  withCredentials: {set(){ v_console_log("  [*] XMLHttpRequest -> withCredentials[set]", [].slice.call(arguments)); }},
  onreadystatechange: {get(){ v_console_log("  [*] XMLHttpRequest -> onreadystatechange[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequest -> onreadystatechange[set]", [].slice.call(arguments));return {} }},
  send: {value: v_saf(function send(){v_console_log("  [*] XMLHttpRequest -> send[func]", [].slice.call(arguments));})},
  readyState: {get(){ v_console_log("  [*] XMLHttpRequest -> readyState[get]", 4);return 4 }},
  status: {get(){ v_console_log("  [*] XMLHttpRequest -> status[get]", 200);return 200 }},
  responseText: {get(){ v_console_log("  [*] XMLHttpRequest -> responseText[get]", "{\"code\":8112,\"message\":\"user is not exist\",\"total\":0}");return "{\"code\":8112,\"message\":\"user is not exist\",\"total\":0}" }},
  setRequestHeader: {value: v_saf(function setRequestHeader(){v_console_log("  [*] XMLHttpRequest -> setRequestHeader[func]", [].slice.call(arguments));})},
  getAllResponseHeaders: {value: v_saf(function getAllResponseHeaders(){v_console_log("  [*] XMLHttpRequest -> getAllResponseHeaders[func]", [].slice.call(arguments));})},
  responseXML: {get(){ v_console_log("  [*] XMLHttpRequest -> responseXML[get]", {});return {} }},
  statusText: {get(){ v_console_log("  [*] XMLHttpRequest -> statusText[get]", "OK");return "OK" }},
  abort: {value: v_saf(function abort(){v_console_log("  [*] XMLHttpRequest -> abort[func]", [].slice.call(arguments));})},
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DocumentFragment.prototype, {
  getElementById: {value: v_saf(function getElementById(){v_console_log("  [*] DocumentFragment -> getElementById[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DocumentFragment",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  clientX: {get(){ v_console_log("  [*] MouseEvent -> clientX[get]", 1328);return 1328 }},
  clientY: {get(){ v_console_log("  [*] MouseEvent -> clientY[get]", 19);return 19 }},
  pageX: {get(){ v_console_log("  [*] MouseEvent -> pageX[get]", 1345);return 1345 }},
  pageY: {get(){ v_console_log("  [*] MouseEvent -> pageY[get]", 505);return 505 }},
  relatedTarget: {get(){ v_console_log("  [*] MouseEvent -> relatedTarget[get]", {});return {} }},
  button: {get(){ v_console_log("  [*] MouseEvent -> button[get]", -1);return -1 }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AudioScheduledSourceNode.prototype, {
  start: {value: v_saf(function start(){v_console_log("  [*] AudioScheduledSourceNode -> start[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"AudioScheduledSourceNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DynamicsCompressorNode.prototype, {
  threshold: {get(){ v_console_log("  [*] DynamicsCompressorNode -> threshold[get]", {});return {} }},
  knee: {get(){ v_console_log("  [*] DynamicsCompressorNode -> knee[get]", {});return {} }},
  ratio: {get(){ v_console_log("  [*] DynamicsCompressorNode -> ratio[get]", {});return {} }},
  reduction: {get(){ v_console_log("  [*] DynamicsCompressorNode -> reduction[get]", 0);return 0 }},
  attack: {get(){ v_console_log("  [*] DynamicsCompressorNode -> attack[get]", {});return {} }},
  release: {get(){ v_console_log("  [*] DynamicsCompressorNode -> release[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"DynamicsCompressorNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(OfflineAudioContext.prototype, {
  oncomplete: {set(){ v_console_log("  [*] OfflineAudioContext -> oncomplete[set]", [].slice.call(arguments)); }},
  startRendering: {value: v_saf(function startRendering(){v_console_log("  [*] OfflineAudioContext -> startRendering[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"OfflineAudioContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this._style);return this._style }},
  onload: {get(){ v_console_log("  [*] HTMLElement -> onload[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return {} }},
  onerror: {set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));return {} }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 1878);return 1878 }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 1914);return 1914 }},
  offsetTop: {get(){ v_console_log("  [*] HTMLElement -> offsetTop[get]", 1306);return 1306 }},
  onclick: {set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments));return 1306 }},
  title: {set(){ v_console_log("  [*] HTMLElement -> title[set]", [].slice.call(arguments));return 1306 }},
  tabIndex: {set(){ v_console_log("  [*] HTMLElement -> tabIndex[set]", [].slice.call(arguments));return 1306 }},
  onabort: {set(){ v_console_log("  [*] HTMLElement -> onabort[set]", [].slice.call(arguments));return 1306 }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(OscillatorNode.prototype, {
  type: {set(){ v_console_log("  [*] OscillatorNode -> type[set]", [].slice.call(arguments)); }},
  frequency: {get(){ v_console_log("  [*] OscillatorNode -> frequency[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"OscillatorNode",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  async: {set(){ v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments)); }},
  src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "https://bqq.gtimg.com/qidian/src/wpa/dist/4.1.0/pk1.js");return "https://bqq.gtimg.com/qidian/src/wpa/dist/4.1.0/pk1.js" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "https://bqq.gtimg.com/qidian/src/wpa/dist/4.1.0/pk1.js" }},
  type: {set(){ v_console_log("  [*] HTMLScriptElement -> type[set]", [].slice.call(arguments));return "https://bqq.gtimg.com/qidian/src/wpa/dist/4.1.0/pk1.js" }},
  charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));return "https://bqq.gtimg.com/qidian/src/wpa/dist/4.1.0/pk1.js" }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "t");return "t" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "t" }},
  checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", true);return true },set(){ v_console_log("  [*] HTMLInputElement -> checked[set]", [].slice.call(arguments));return true }},
  type: {set(){ v_console_log("  [*] HTMLInputElement -> type[set]", [].slice.call(arguments));return true }},
  name: {set(){ v_console_log("  [*] HTMLInputElement -> name[set]", [].slice.call(arguments));return true }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLOptionElement.prototype, {
  selected: {get(){ v_console_log("  [*] HTMLOptionElement -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] HTMLOptionElement -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"HTMLOptionElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLFormElement.prototype, {
  enctype: {get(){ v_console_log("  [*] HTMLFormElement -> enctype[get]", "application/x-www-form-urlencoded");return "application/x-www-form-urlencoded" }},
  [Symbol.toStringTag]: {value:"HTMLFormElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSelectElement.prototype, {
  disabled: {set(){ v_console_log("  [*] HTMLSelectElement -> disabled[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLSelectElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  href: {set(){ v_console_log("  [*] HTMLAnchorElement -> href[set]", [].slice.call(arguments)); }},
  protocol: {get(){ v_console_log("  [*] HTMLAnchorElement -> protocol[get]", "https:");return "https:" }},
  hostname: {get(){ v_console_log("  [*] HTMLAnchorElement -> hostname[get]", "necaptcha.nosdn.127.net");return "necaptcha.nosdn.127.net" }},
  port: {get(){ v_console_log("  [*] HTMLAnchorElement -> port[get]", "");return "" }},
  search: {get(){ v_console_log("  [*] HTMLAnchorElement -> search[get]", "");return "" }},
  hash: {get(){ v_console_log("  [*] HTMLAnchorElement -> hash[get]", "");return "" }},
  pathname: {get(){ v_console_log("  [*] HTMLAnchorElement -> pathname[get]", "/616f674245984e50a13a308fb4d5904f.png");return "/616f674245984e50a13a308fb4d5904f.png" }},
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
  width: {get(){ v_console_log("  [*] HTMLImageElement -> width[get]", 60);return 60 }},
  height: {get(){ v_console_log("  [*] HTMLImageElement -> height[get]", 158);return 158 }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
  width: {set(){ v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments)); }},
  height: {set(){ v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments)); }},
  toDataURL: {value: v_saf(function toDataURL(){v_console_log("  [*] HTMLCanvasElement -> toDataURL[func]", [].slice.call(arguments));return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"})},
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLMediaElement -> src[set]", [].slice.call(arguments)); }},
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLIFrameElement.prototype, {
  contentWindow: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});return {} }},
  width: {set(){ v_console_log("  [*] HTMLIFrameElement -> width[set]", [].slice.call(arguments));return {} }},
  height: {set(){ v_console_log("  [*] HTMLIFrameElement -> height[set]", [].slice.call(arguments));return {} }},
  src: {set(){ v_console_log("  [*] HTMLIFrameElement -> src[set]", [].slice.call(arguments));return {} }},
  frameBorder: {set(){ v_console_log("  [*] HTMLIFrameElement -> frameBorder[set]", [].slice.call(arguments));return {} }},
  [Symbol.toStringTag]: {value:"HTMLIFrameElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
  type: {set(){ v_console_log("  [*] HTMLStyleElement -> type[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLButtonElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLButtonElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSpanElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLSpanElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUListElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUListElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLIElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ return a[b] || __globalThis__[b] },
  set(a,b,c){ __globalThis__[b] = a[b] = c },
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window["0"] = v_new(Window)
window["2"] = v_new(Window)
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
window.hm = v_new(HTMLScriptElement)
window.s = v_new(HTMLScriptElement)
function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLScriptElement":["script"],"HTMLInputElement":["input"],"HTMLOptionElement":["option"],"HTMLFormElement":["form"],"HTMLSelectElement":["select"],"HTMLAnchorElement":["a"],"HTMLImageElement":["img"],"HTMLCanvasElement":["canvas"],"HTMLMediaElement":[],"HTMLIFrameElement":["iframe"],"HTMLStyleElement":["style"]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = new v_saf(function HTMLUnknownElement(){}) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret._style = v_new(CSSStyleDeclaration) }
  ret._tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie[1]){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie[1].trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.host)){
        r = ''
      }else{
        r = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.host + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.host     = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.hostname = this.host;
      this.origin   = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
function v_init_event_target(){
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); return null}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("__snaker__id=P07O0HR9msXJrSsK; _qddac=3-3-1.1nmm6f.8u475z.l2w4cl7u; Hm_lvt_4671c5d502135636b837050ec6d716ce=1651909446; __root_domain_v=.163.com; _qddaz=QD.176651909693982; _9755xjdesxxd_=32; IELStencentSig=171651914705668; Register-Referer=https://dun.163.com/trial/jigsaw; _qdda=3-1.1nmm6f; _qddab=3-8u475z.l2w4cl7u; gdxidpyhxdE=06led%2F3tOkGWHOBenVxWm7cb0clqcoWevDj4WE1C72wcQuP%2BgzdPsICt8SI2zjxqPd%2BVpOCvZUZKYDQX47WAVpMHtBEbS%2BUM%5C%2BqHBINL7vzcvWxEoK8ft4%2BPIyMOxXf%5C0%2Byrg4NZJtXtKhWYR3jTPwaBipYMpf6klkQSBHOoqi5qo06i%3A1651944850242; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1651944005; YD20160637306799%3AWM_NI=XFz1okhV2VXHaEgU9OU6zztnsQHBd%2F2kTwhtyZ7DdKM2YMS%2FnsvoTsJBVRHlvg2CEwI8G69IDmSW4aBQauInesJzlhRMO3cc5ZAwOCvLgSxAVJ%2BmN%2BvdgTa3FNP5Hop1UUc%3D; YD20160637306799%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eea7c5338aa89ebad95faf8a8ea7d85e929b8fadc45f8abaf9d2d9428aae9ba8ee2af0fea7c3b92a9c9ab6d2ee61ac8afeb7db44a39ba9b6bc4597eab69bf766b18f88a3e725f2b59c98eb80bb86f9a5e7418fee97aed225aeadba90d7798a9e9ab3cb68b6b9fea4c87d8be889d7bc4388b39db8b76b828faf96cc66a7ad869bef64929381d4e269f7868f98ce49b694a9b4fb4b9696e58ecd21b6bca9b5e4398692a0d6cb65b4ef9bb6e237e2a3; YD20160637306799%3AWM_TID=4iXD439ff%2FlBBAERAUKBAcP%2B0IdYrESt")
v_hook_href(window.location, 'location', "https://dun.163.com/trial/jigsaw")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
function v_getele(name, func){
  if(name == ".j-thead" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".m-search" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".j-search_input" && func == "querySelector"){ return v_new(HTMLInputElement) }
  if(name == ".j-search_btn" && func == "querySelector"){ return v_new(HTMLButtonElement) }
  if(name == ".j-search_close" && func == "querySelector"){ return v_new(HTMLButtonElement) }
  if(name == ".m-tnav" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".j-back_top" && func == "querySelector"){ return v_new(HTMLAnchorElement) }
  if(name == ".g-hd" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".g-sd2" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".layout-quick" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".j-pop" && func == "querySelector"){ return v_new(HTMLButtonElement) }
  if(name == "#J-compare-button" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#J-compare-close" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#J-compare-dialog" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun_panel" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun_control" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun_top__audio" && func == "querySelector"){ return v_new(HTMLButtonElement) }
  if(name == ".yidun_feedback" && func == "querySelector"){ return v_new(HTMLAnchorElement) }
  if(name == ".yidun_loadtext" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == ".yidun_tips__text" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == ".yidun_tips__answer" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun_slide_indicator" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun_jigsaw" && func == "querySelector"){ return v_new(HTMLImageElement) }
  if(name == ".yidun_slider" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == ".yidun_bg-img" && func == "querySelector"){ return v_new(HTMLImageElement) }
  if(name == "fp_Sun May 08 2022 01:20:07 GMT+0800 (中国标准时间)" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "LBFnode" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "webqq-client" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "webqq-online" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "_QIDIAN_WEB_IM_IFRAME_2852175932" && func == "getElementById"){ return v_new(HTMLIFrameElement) }
  return null
}
function v_geteles(name, func){
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "*" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement),v_new(HTMLTableElement),v_new(HTMLAnchorElement),v_new(HTMLInputElement)] }
  if(name == "a" && func == "getElementsByTagName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "input" && func == "getElementsByTagName"){ return [v_new(HTMLInputElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement)] }
  if(name == "e" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "sizcache016015530377987797" && func == "getElementsByName"){ return [] }
  if(name == "[selected]" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == ":checked" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == ":enabled" && func == "querySelectorAll"){ return [v_new(HTMLInputElement)] }
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == ".j-drop_handle" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == ".j-drop_target" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == ".J_reg_phone + .J_reg" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement)] }
  if(name == "j-loop-news" && func == "getElementsByClassName"){ return [v_new(HTMLUListElement)] }
  if(name == "j-loop-next" && func == "getElementsByClassName"){ return [v_new(HTMLButtonElement)] }
  if(name == "[data-hubble-event]" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement)] }
  if(name == ".j-captcha" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == ".tcapt-tabs__tab" && func == "querySelectorAll"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == ".tcapt-type__item" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == ".j-custom" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "td" && func == "getElementsByTagName"){ return [] }
  if(name == "IFRAME" && func == "getElementsByTagName"){ return [v_new(HTMLIFrameElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  return null
}
v_new_toggle = undefined;

function ba() {
    var g = "MPjtU7rDmCRQIec9".split("");
    this.G = function (c) {
        if (null == c || void 0 == c)
            return c;
        if (0 != c.length % 2)
            throw Error("1100");
        for (var b = [], a = 0; a < c.length; a++) {
            0 == a % 2 && b.push("%");
            for (var p = g, h = 0; h < p.length; h++)
                if (c.charAt(a) == p[h]) {
                    b.push(h.toString(16));
                    break
                }
        }
        return decodeURIComponent(b.join(""))
    }
}

var p = (new ba).G
    , n = (new ba).G
    , k = (new ba).G
    , h = (new ba).G
    , g = (new ba).G;
var x = [p("DUr7DmDUUjrPDtr7rIrCrcr7"), n("jttMtrtC"), k("7979"), g("rer9Drr7"), n("r9DjrCr7rcDUrPDUrCr9rc"), g("rer9DUrCr9rc"), p("DMrmrPrcDUr9rerRDt"), k("7979Dtr7rIr7rcrCD7re79D7rcDDDjrPDMDMr7rU"), g("rerPDUrtrm"), n("rtrmrPDjrDrCrcrD"), g("D7rcr7DtrtrPDMr7"), p("Djr7DtDMr9rcDtr77tDUrPDjDU"), h("UIU77P77UPUI"), n("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrIr9DDjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), k("UUrPDUr7"), h("rUr7rtr9rUr7777jUCUtr9reDMr9rcr7rcDU"), n("rPDtDCrcrt"), k("DMr7Djrrr9DjrerPrcrtr7"), k("rjr9r9rIr7rPrc"), n("rCrcrIrCrcr7"), g("Dtr7DjrCrr"), h("7rU7UcUUU97j"), g("UtUP7U79UtUPUc7rUP7t"), p("Djr7rUD7rtDUrCr9rc"), n("r7rerCDU"), n("rDr7DUUtr9rcDUr7DmDU"), g("D7rcrCrrr9Djretjrr"), p("DDr7rjrDrIjMrPrIDMrmrPjMrjrCDUDttR")]
    ,
    c = [n(""), k("DMrPDjr7rcDU"), k("DtDUrPrtrQ"), k("DMrID7rDrCrcDt"), k("rDr7DUUCDUr7re"), p("rDr7DUUcrUUCrcrrr9"), g("rCU97t"), g("UerCrtDjr9Dtr9rrDUjMUCrcDUr7Djrcr7DUjMU7DmDMrIr9Djr7Dj"), k("rer9D7Dtr7D7DM"), h("rDr7DU7tD7DMDMr9DjDUr7rUU7DmDUr7rcDtrCr9rcDt"), g("tUtMrjt7tCrjtPtM"), h("79rjrPDUDUr7DjDC"), g("rPDMDMr7rcrUUtrmrCrIrU"), h("r7Drr7rcr9rUrU"), k("DDr7rjrDrIjMrerPDmjMDrr7DjDUr7DmjMD7rcrCrrr9DjrejMDrr7rtDUr9DjDttR"), p("jj"), g("rCrcrcr7Dj7Ur7DmDU"), p("jU"), g("j7"), p("jr"), p("rPrUDtrjr9Dm"), h("jD"), k("jm"), k("jC"), g("DjrDrjjmtjt7t7jItjt7t7jItMjC"), k("rDr7DU7trmrPrUr7Dj7MDjr7rtrCDtrCr9rcUrr9DjrerPDU"), g("DUr7DmDUUtr9rcDUr7rcDU"), n("jQ"), k("jI"), p("rCU9Dt"), n("DDrCrcrUDrrPrcr7"), p("Drr7DjDtrCr9rc"), h("rtrIrCrtrQ"), k("jc"), g("79rjrID7Dj"), g("j9"), p("tPtmDMDUjMUPDjrCrPrI"), g("tM"), g("tP"), p("tj"), k("rDr7DUUtrmrPrcrcr7rIUUrPDUrP"), k("tt"), h("rDr7DUUtr9rcDUr7DmDUUPDUDUDjrCrjD7DUr7Dt"), k("tU"), h("79rrr9rtD7Dt"), h("DtDUr9DM"), n("t7"), h("rIr7rrDU"), h("tr"), n("tD"), g("rUr9rerPrCrc"), k("tm"), h("tC"), n("tR"), k("tQ"), h("te"), h("rer9D7Dtr7rUr9DDrc"), h("r9rjrRr7rtDU"), p("t9"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrer7rUrCD7rejMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), n("7979rrDmrUDjrCDrr7Dj79D7rcDDDjrPDMDMr7rU"), n("UP"), k("Uj"), k("rcDtDUr9r9rIjcrcr7DUr7rPDtr7jcrtr9rej9rCrcrrr9jcrRDt"), h("UeUP7m797rU77j7UU77m79UP7U7U7jUCUj7t"), g("Ut"), h("UU"), n("U7"), n("Ur"), p("UD"), g("Um"), p("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrer7rUrCD7rejMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), n("UC"), k("rjrID7Dj"), h("UR"), n("UQ"), p("rPDMDMUerCrcr9Dj7rr7DjDtrCr9rc"), h("UI"), n("Ue"), p("Uc"), g("U9"), g("7M"), p("7P"), g("7j"), h("UtDDrejMrrrRr9DjrUrjrPrcrQjMrDrIDCDMrmDtjMDrr7DmDUjMDPD7rCDRjIjM9MC9Cmm79MC9CmR79MC9CPQr9MC9Cmmt"), k("7t"), h("Dtr7rIr7rcrCD7re"), g("7U"), h("77"), n("rUrcDt79rCDtDM"), n("7r"), k("7D"), p("7m"), n("7C"), n("UIU97D79UCUc7U"), g("7R"), n("7Q"), n("rrr7DUrtrm7tDUrPDjDU"), p("rDr7DUU7rIr7rer7rcDUDtUjDC7UrPrDUcrPrer7"), n("7e"), g("rtr9rcrcr7rtDU"), p("7c"), k("rtrj"), p("rP"), g("UtU9UIU97j79Uj77UrUrU77j79UjUC7U"), h("rj"), p("7979DDr7rjrUDjrCDrr7Dj79DtrtDjrCDMDU79rrrc"), n("rt"), g("Djrer9rtDmjc7jr7rPrI7MrIrPDCr7DjjMUDtjjMUtr9rcDUDjr9rIjctP"), h("rU"), n("7trtDjrCDMDUrCrcrDjcUUrCrtDUrCr9rcrPDjDC"), g("r7"), h("rjr7rDrCrc7MrPDUrm"), p("rtr9D7rtrmrRDt"), k("rr"), p("rD"), h("rm"), k("tPtMtPtM"), h("rC"), n("rR"), h("rQ"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrIr9DDjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), p("rI"), h("re"), g("DDr7rjrDrIjMDrr7DjDtrCr9rctR"), n("rc"), h("r9"), p("DM"), g("rUr9Ucr9DU7UDjrPrtrQ"), n("DP"), h("rtrmrPDjrDrCrcrDDUrCrer7rtrmrPrcrDr7"), k("Dtr7DU7UrCrer7r9D7DU"), h("Dj"), k("tPtMtMt7"), g("rDr7DU7UrCrer7DRr9rcr7U9rrrrDtr7DU"), h("rtrmrPrcrDr7rU7Ur9D7rtrmr7Dt"), n("Dt"), h("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrIr9DDjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), p("DU"), k("tPtMtMtt"), g("D7"), g("Dr"), k("tPtMtMtP"), h("DD"), h("Dm"), h("7UrmrCDtjMrjDjr9DDDtr7DjjDDtjMrCreDMrIr7rer7rcDUrPDUrCr9rcjMr9rrjMU9rjrRr7rtDUjcrtDjr7rPDUr7jMrCDtjMrPjMDtrmrCrejMrPrcrUjMrUr9r7DtrcjDDUjMDtD7DMDMr9DjDUjMjDrcD7rIrIjDjMrPDtjMDUrmr7jMrrrCDjDtDUjMrPDjrDD7rer7rcDUjc"), p("rUDjrPDDUPDjDjrPDCDt"), h("DC"), n("DUr97tDUDjrCrcrD"), n("DR"), k("Dc"), k("tPtMtMtC"), k("rrr9rcDU"), k("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrIr9DDjMrCrcDUjMDMDjr7rtrCDtrCr9rctR"), h("DtD7rrrrrCDmr7Dt"), n("7MU97t7U"), p("7trmr7rIrIjc77UCUmr7rIDMr7Dj"), h("Dtr7DU7jr7DPD7r7DtDUUmr7rPrUr7Dj"), h("DUr9UUrPDUrP777jUI"), h("7trPrrrPDjrC"), p("7Ur9D7rtrmU7Drr7rcDU"), g("rIrPrcrDD7rPrDr7"), g("rUr9DDrc"), g("rCrcDtr7DjDUUjr7rrr9Djr7"), k("rUrCDr"), h("rPrtrtr7rIr7DjrPDUrCr9rc"), n("rPrtrtr7rIr7DjrPDUrCr9rcUCrcrtrID7rUrCrcrDUDDjrPDrrCDUDC"), g("UCrcDUr7Djrcr7DUjMU7DmDMrIr9Djr7Dj"), k("UeUP7m79Ut77UjU779UeUP7M797UU77m7U777jU7797tUC7RU7"), g("DUr7DmDUj9rRrPDrrPDtrtDjrCDMDU"), k("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrmrCrDrmjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rctR"), n("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrmrCrDrmjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), k("DDr7rjrUDjrCDrr7Dj"), h("UeU97R79U77m7U79DUr7DmDUD7Djr779rrrCrIDUr7Dj79rPrcrCDtr9DUDjr9DMrCrt"), k("7DU7UjUDUI79rUr7rjD7rD79Djr7rcrUr7Djr7Dj79rCrcrrr9"), n("rtrmrPDjrDrCrcrDrtrmrPrcrDr7"), g("DDr7rjrDrIjMDtrmrPrUrCrcrDjMrIrPrcrDD7rPrDr7jMDrr7DjDtrCr9rctR"), p("Djr7Dt"), n("7jr7rPrI7MrIrPDCr7Dj"), p("rtrmDjr9rer7"), k("7jr7rDU7DmDM"), g("rtrmrPDjrDrCrcrD7UrCrer7"), h("rtDjr7rPDUr7U7rIr7rer7rcDU"), n("DMDjr9rUD7rtDUUcD7rerjr7Dj"), g("DMrPDjr7rcDUUcr9rUr7"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrer7rUrCD7rejMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rctR"), p("DDr7rjrDrIjMrerPDmjMDrrPDjDCrCrcrDjMDrr7rtDUr9DjDttR"), g("rtrPrcDrrPDtjMDDrCrcrUrCrcrDtR"), g("DjrDrjjmtjt7t7jItMjItjt7t7jC"), k("Utr9rcDUr7rcDUjeDUDCDMr7"), g("UUU77M7UUm797UU77t7U"), h("r7DmDUr7DjrcrPrI"), g("r7DrrPrI"), g("D7rcrQrcr9DDrcjMr7DjDjr9Dj"), p("UIrCrcD7Dm"), p("rUrCDtrtrmrPDjrDrCrcrDDUrCrer7rtrmrPrcrDr7"), p("79DtrtDjr9rIrI"), n("7PD7rCrtrQ7UrCrer7Utrmr7rtrQU9rjrRr7rtDUjc7PD7rCrtrQ7UrCrer7Utrmr7rtrQjctP"), g("7jr7DPD7r7DtDUjMDUrCrer7rUjMr9D7DU"), k("Djr7rer9Drr7UCDUr7re"), n("rPDUDUrPrtrm7trmrPrUr7Dj"), h("DDr7rjrDrIjMDjr7rcrUr7Djr7DjtR"), g("DtDUrPDjDU7jr7rcrUr7DjrCrcrD"), n("rDr7DU7UrCrer7"), n("rtrPrIrI7tr7rIr7rcrCD7re"), p("Djr7DtDMr9rcDtr77Ur7DmDU"), k("DjrPrcrDr7UerCrc"), k("rCrcrCDU7DrPDUrtrmrerPrc"), n("Djr7DPD7r7DtDUjMrPDMrCjMr7DjDjr9Dj"), h("tPjctMtP"), g("DDr7rjrDrIjMrUr7DMDUrmjMrjrCDUDttR"), p("rcr9rUr7rRDt"), g("DDr7rjrDrIjMrerPDmjMrtD7rjr7jMrerPDMjMDUr7DmDUD7Djr7jMDtrCDRr7tR"), k("DUrCDUrIr7"), k("j9Drttj9rU"), g("7979DDrerRDtr9rcDM79"), g("rUr7DrrCrtr77MrCDmr7rI7jrPDUrCr9"), g("DMr9rCrcDUr7DjD7DM"), k("DjrPrcrUr9re"), k("Dtr7DUUPDUDUDjrCrjD7DUr7"), p("79Dtr7rIr7rcrCD7re"), g("rer7rer9DjDC7tDUr9DjrPrDr7"), k("rrDM79"), g("rPrIDMrmrP"), p("DDr7rjrDrIjMDrr7rcrUr9DjtR"), k("7979DDr7rjrUDjrCDrr7Dj79r7DrrPrID7rPDUr7"), k("reD7rIDUrCDMrIDC"), p("rPDUDUDjrCrjD7DUr7jMDrr7rttjjMrPDUDUDj7rr7DjDUr7DmDrrPDjDCrCrcrDjMDrr7rttjjMDrrPDjDCrCrc7Ur7DmUtr9r9DjrUrCrcrPDUr7D7rcrCrrr9DjrejMDrr7rttjjMD7rcrCrrr9DjreU9rrrrDtr7DUDrr9rCrUjMrerPrCrcjmjCDQDrrPDjDCrCrc7Ur7DmUtr9r9DjrUrCrcrPDUr7terPDUDUDj7rr7DjDUr7DmjQD7rcrCrrr9DjreU9rrrrDtr7DUrDrI797Mr9DtrCDUrCr9rcteDrr7rttUjmrPDUDUDj7rr7DjDUr7DmjItMjItPjCDe"), h("j7rt"), h("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrmrCrDrmjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rctR"), g("DMDjr7rtrCDtrCr9rcjMrer7rUrCD7reDMjMrrrIr9rPDUDrrPDjDCrCrcrDjMDrr7rttjjMDrrPDjDCrCrc7Ur7DmUtr9r9DjrUrCrcrPDUr7Drr9rCrUjMrerPrCrcjmjCjMDQrDrI79UrDjrPrDUtr9rIr9DjteDrr7rttUjmDrrPDjDCrCrc7Ur7DmUtr9r9DjrUrCrcrPDUr7jItMjItPjCDe"), g("jDjI"), k("DDrCrcrUr9DDDtjMDMrmr9rcr7"), h("rPDMDMUcrPrer7"), p("rtDMD7UtrIrPDtDt"), k("Dtr7DUUtD7DtDUr9re7UDjrPrtrQUCrU"), g("DMrPDjDtr7"), k("rCDM79rCDtDM"), g("tDjIrUjItUjItrjIt7jItDjIttjItr"), p("rQr7DCrUr9DDrc"), p("r9rcrIr9rPrU"), p("Djr7rer9Drr7U7Drr7rcDUUIrCDtDUr7rcr7Dj"), n("rrr9Djre"), h("UeDtDmrerItjjcUUU9UeUUr9rtD7rer7rcDU"), p("j9DUr9r9rIjcrerCrcjcrRDt"), p("tjjctDjct779r7tjtmtCtPtMtmtU"), k("DDr7rjrQrCDUU9rrrrrIrCrcr7UPD7rUrCr9Utr9rcDUr7DmDU"), g("tQr7DmDMrCDjr7Dtte7UD7r7jIjMtPtCjMURrPrcjMtjtMtttmjMtMtttRtPtUtRtMtDjMUDUe7UtQDMrPDUrmtej9tQ"), g("DDr7rjrDrIjMrPrcDUrCrPrIrCrPDtrCrcrDtR"), p("rIr7Drr7rIrtrmrPrcrDr7"), p("DDr7rjrDrIjMD7rcrerPDtrQr7rUjMDrr7rcrUr9DjtR"), k("rPrUrUU7Drr7rcDUUIrCDtDUr7rcr7Dj"), k("UmUC"), p("U9rjrRr7rtDUjcrQr7DCDtjMrtrPrIrIr7rUjMr9rcjMrcr9rcjer9rjrRr7rtDU"), h("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrIr9DDjMrCrcDUjMDMDjr7rtrCDtrCr9rctR"), n("tPtPDMDUjMUPDjrCrPrI")]
    ,
    b = [g("rtrIr9Dtr77MrPDUrm"), h("Djr7rIr7rPDtr7"), p("7Dr7rjUDUI7jr7rcrUr7DjrCrcrDUtr9rcDUr7DmDU"), h("rrr9rtD7Dt"), k("rCDMr9rU"), h("79r9DjrCr7rcDUrPDUrCr9rc"), h("777MUUUP7UU779Ur77UcUt797UUCUeUCUcUD"), n("rcD7rerjr7Dj"), h("rcrPDrrCrDrPDUrCr9rc"), k("rPrIDMrmrPrjr7DUrCrt"), n("reDtDMr9rCrcDUr7DjD7DM"), h("79rer9DUrCr9rc"), h("rDr7DUU9DDrc7MDjr9DMr7DjDUDCUUr7DtrtDjrCDMDUr9Dj"), p("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrmrCrDrmjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), g("7979DDr7rjrUDjrCDrr7Dj79D7rcDDDjrPDMDMr7rU"), g("r7tjtmtCtPtMtmtU"), n("rPDUDUDj7rr7DjDUr7Dm"), p("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrIr9DDjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), n("rtr9r9rQrCr7"), n("j7tjtj"), p("jCjc"), k("DDr7rjrDrIjMrerPDmjMDjr7rcrUr7DjjMrjD7rrrrr7DjjMDtrCDRr7tR"), k("DMrCrQr7"), g("rCDM"), p("rUrcDt"), h("j7tjtr"), n("DtrtDjrCDMDU"), n("UerPrt"), n("DjrDrjjmtMjItjt7t7jItjt7t7jC"), h("rUDjrCDrr7Dj"), p("UUU77M7UUm79UjUC7U7t"), n("rrr9rcDU7trCDRr7"), h("rrrCrIrI7tDUDCrIr7"), h("7MUUUrjc7MrUrrUtDUDjrI"), g("rCrcDUr7DjDrrPrI"), p("UPUI7MUmUP79UjUC7U7t"), n("DtDUrPDUD7Dt"), n("UCrcDUr7DjDrrPrI"), p("rtrmrPDjDtr7DU"), p("DDr7rjrDrIjMrerPDmjMDrr7DjDUr7DmjMrPDUDUDjrCrjDttR"), h("DDr7rjrDrIjMDjr7rUjMrjrCDUDttR"), h("UerPDm"), n("7DU7UjUQUC7U79U77m7U79DUr7DmDUD7Djr779rrrCrIDUr7Dj79rPrcrCDtr9DUDjr9DMrCrt"), g("UeUP7m79Ur7jUPUDUeU7Uc7U7977UcUCUrU97jUe797rU7Ut7UU97j7t"), g("rUr7DrrCrtr7rer9DUrCr9rc"), k("Dtr7rcrUjMrUr7DrrCrtr7jMrUrPDUrPjMrrrPrCrIr7rU"), g("777MUUUP7UU779U97M7UUCU9Uc7t"), k("rerPrt"), k("7jr7rPrI7MrIrPDCr7Djjc7jr7rPrI7MrIrPDCr7DjjmDUrejCjMUPrtDUrCDrr77mjMUtr9rcDUDjr9rIjMjmtttjjerjrCDUjC"), h("DmDmDmDmDmDmDmDmDmDmDmDmtUDmDmDmDCDmDmDmDmDmDmDmDmDmDmDmDmDmDmDm"), g("DUr9DM"), k("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrer7rUrCD7rejMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), h("UeUP7m797UU77m7U777jU7797tUC7RU7"), p("UPrtDjr97MUUUrjc7MUUUr"), n("UeUP7m797rUCU77D7MU97j7U79UUUCUe7t"), p("jMDUrmrCDtjMrCDtjMrcD7rIrIjMr9DjjMrcr9DUjMrUr7rrrCrcr7rU"), k("UeUP7m797rU77j7UU77m7977UcUCUrU97jUe797rU7Ut7UU97j7t"), k("797tr7rIr7rcrCD7re79UCUUU7797jr7rtr9DjrUr7Dj"), p("rRrPDrrPjcrIrPrcrDjc7tDCDtDUr7rejcr7DmrCDU"), g("rerPDm"), p("DUr9D7rtrmDtDUrPDjDU"), g("rmrPDjrUDDrPDjr7Utr9rcrtD7DjDjr7rcrtDC"), g("rQrcr7r7"), p("rPDrrPrCrI7DrCrUDUrm"), g("rUr9rtD7rer7rcDUUer9rUr7"), k("jIjM"), k("UeUP7m797UU77m7U777jU779UeUP7m79UPUcUC7tU97U7jU97M7C79U77m7U"), p("Djrer9rtDmjc7jr7rPrI7MrIrPDCr7DjjMUDtjjMUtr9rcDUDjr9rI"), k("rDr7DU7Ur9rQr7rc"), h("rtr9reDMrIr7DUr7"), g("rPDrrPrCrIUmr7rCrDrmDU"), g("79DMrmrPrcDUr9re"), k("rPD7DUr9"), h("r9DMr7DjrP"), h("UP7j7jUP7C"), g("DDr7rjrDrI"), h("7jU7UU79UjUC7U7t"), k("DMr9rCrcDUr7DjrUr9DDrc"), k("DMDjr7rtrCDtrCr9rc"), g("DtrtDjr7r7rc"), k("cmQrm7crCDQrcUQRmr"), h("rjr9rUDC"), g("7U7jUCUPUcUDUIU7797t7U7jUC7M"), p("UeUP7m797jU7UcUUU77jUj77UrUrU77j797tUC7RU7"), p("rtrIrCr7rcDU7DrCrUDUrm"), h("r9rcDUr9D7rtrmDtDUrPDjDU"), h("rrD7rcrtDUrCr9rc"), g("rtr9rcDUr7DmDUjcrmrPDtrmUtr9rUr7"), g("Djr7rPrUDC7tDUrPDUr7"), p("rererererererererererIrIrC"), k("r9rcrtr9reDMrIr7DUr7"), p("7rU77j7UU77m797tUmUPUUU77j"), p("jjDUrmrCDtjjjMrCDtjMrcD7rIrIjMr9DjjMrcr9DUjMrUr7rrrCrcr7rU"), p("rjDjr9DDDtr7DjUIrPrcrDD7rPrDr7"), n("rIr7Drr7rI"), k("777UUrjetm"), k("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrmrCrDrmjMrCrcDUjMDMDjr7rtrCDtrCr9rctR"), p("7979DtD7DMDMr9DjDUUtrPDMDUrtrmrP7979"), p("UPrcrUDjr9rCrU"), k("rCrcrcr7Dj7DrCrUDUrm"), p("tjtMtM"), h("jMjejM"), k("UrrPrCrIr7rUjMDUr9jMrIr9rPrUjM"), n("777MUUUP7UU7797UUCUeU779U9UrUr7tU77U"), p("DMr9DtrCDUrCr9rc"), n("Dtr7rcrUjMrUr7DrrCrtr7rUrPDUrPjMrrrPrCrIr7rUtRjM"), p("rtrPrcrcr9DUjMrDr9DUjMDrrPrID7r7"), g("rcr9"), n("7Qr9rjrRr7rtDUjMUPDjDjrPDC7e"), p("DDr7rjrDrIjMrerPDmjMDrrCr7DDDMr9DjDUjMrUrCreDttR"), h("7DrCrcrUr9DDDt"), h("UjUI77U779UjUC7U7t"), p("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrer7rUrCD7rejMrCrcDUjMDMDjr7rtrCDtrCr9rctR"), k("rmr7rPrU"), k("Djr7rtDU"), n("rmrPDtU9DDrc7MDjr9DMr7DjDUDC"), k("Djr7rUD7rtr7jMrtrPrIrIr7rUjMr9rcjMrcD7rIrIjMr9DjjMD7rcrUr7rrrCrcr7rU"), n("UPUIUCUP7tU7UU797MU9UCUc7U797tUC7RU7797jUPUcUDU7"), k("UPrUr9rUrjjc7tDUDjr7rPre"), h("DDr7rjrDrIjMrDDjr7r7rcjMrjrCDUDttR"), h("UjrPDUDUr7DjDCUerPrcrPrDr7Dj"), g("rtrPrIrI7MrmrPrcDUr9re"), k("rrrIr9r9Dj"), g("7979rUDjrCDrr7Dj79D7rcDDDjrPDMDMr7rU"), h("rjr7DUrP"), g("r9rc"), g("7jU7UcUUU77jU77j"), n("DtDjrt"), g("UUr7DrrPrI7r7j7mUtDUDjrIjcUUr7DrrPrI7r7j7mUtDUDjrIjctP"), k("rDrIr9rjrPrIUtr9reDMr9DtrCDUr7U9DMr7DjrPDUrCr9rc"), n("rPrUrUUjr7rmrPDrrCr9Dj"), g("jrrcrjDtDMtQ"), h("DtDMrPDDrc"), k("UmUCUDUm79UCUc7U"), p("DjrPrcrDr7UerPDm"), n("rjrPDUDUr7DjDCUCrcDUr7DjDrrPrI"), n("UtUP7U797DU7UjUDUI"), n("jmrrD7rcrtDUrCr9rcjmjCDQDjr7DUD7DjrcjMtPtjtttQDejCjmjCtQ"), h("tjtMtMtttMtPtMtD"), n("DtDUDjrCrcrDrCrrDC"), h("rtr9reDMrPDUUer9rUr7"), n("7DrCrcrUr9DDDtjM7Mrmr9rcr7"), p("rCDt7MDjr9DUr9DUDCDMr7U9rr"), n("r7DmDUr7rcDtrCr9rcDttR"), p("9MC9RDR79MC9CMQr9MC9mem9cjCRQec9Qmm9cjCImj9MC9mmQj9MC9CRCDcjmICRc9Qmm9cjCeRUc9Qmm99MC9m9mPcjCrQr"), n("jMrCDtjMrcr9DUjMrPjMrrD7rcrtDUrCr9rc"), h("UcU77DrPDUrtrmrerPrcU7DjDjr9Dj"), n("tMtMtMtMtMtMtMtM"), p("Djr7rer9Drr7UtrmrCrIrU"), p("DDr7rjrDrIjMrPrIrCrPDtr7rUjMrIrCrcr7jMDDrCrUDUrmjMDjrPrcrDr7tR"), k("DDr7rjrDrIjMrerPDmjMDUr7DmDUD7Djr7jMDtrCDRr7tR"), k("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrIr9DDjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), g("Dtr7rcrUjMrjr7rmrPDrrCr9DjrUrPDUrPjMrrrPrCrIr7rUtRjM"), g("D7Dtr77MDjr9rDDjrPre"), k("rUr9reUPD7DUr9rerPDUrCr9rc"), h("rmr9DtDUrcrPrer7"), h("7mUUr9rerPrCrc7jr7DPD7r7DtDU"), n("7DrPDUrtrmrerPrc"), n("Djr7DPD7r7DtDU7tDUrPDjDU"), k("DMrmrPrcDUr9rejcrCrcrRr7rtDUURDt"), g("rtrIr7rPDj7UrCrer7r9D7DU"), k("U77j7jU97j"), g("DUr9D7rtrmr7rcrU"), n("DtDUrPDUr7"), h("DDr7rjrDrIjMrerPDmjMrPrcrCDtr9DUDjr9DMDCtR"), n("7trmr9rtrQDDrPDrr7UrrIrPDtrmjc7trmr9rtrQDDrPDrr7UrrIrPDtrm"), h("rmr7rCrDrmDU"), n("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrer7rUrCD7rejMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), n("U77m7U79DUr7DmDUD7Djr779rrrCrIDUr7Dj79rPrcrCDtr9DUDjr9DMrCrt"), p("j9Drtjj9rtr9rIrIr7rtDU"), k("UPrDUtr9rcDUDjr9rIjcUPrDUtr9rcDUDjr9rI"), g("DUr9D7rtrmrer9Drr7"), g("rUr7rtr9rUr7777jUC"), g("rtrIrCr7rcDUUmr7rCrDrmDU"), n("UrrCDjr7rrr9Dm"), p("rCrcDMD7DU"), g("tPtjtt"), h("7979DDr7rjrUDjrCDrr7Dj79DtrtDjrCDMDU79rrD7rcrt"), p("7DUe7MrIrPDCr7DjjcU9Ut7m"), p("tDtjDMDm"), n("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrIr9DDjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rctR"), p("DMDjr9DMr7DjDUDCUCDtU7rcD7rer7DjrPrjrIr7"), k("r9rcDjr7rPrUDCDtDUrPDUr7rtrmrPrcrDr7"), n("DtrPrrrPDjrC"), p("rjr7rmrPDrrCr9DjjMrPDMrCjMDjr7DtDMr9rcDtr7jMDDDjr9rcrD"), k("rUr9rtD7rer7rcDU"), k("rUrcDt79rtrCDUDC"), h("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrmrCrDrmjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), n("rUr7DrrCrtr7r9DjrCr7rcDUrPDUrCr9rc"), h("rjrPDUDUr7DjDC"), p("jetCtCtCtCDMDm"), n("D7Dtr7DjUIrPrcrDD7rPrDr7"), n("rjD7DtrCrcr7DtDtUQr7DCjMrCDtjMrCrIrIr7rDrPrI"), h("DMr9rCrcDUr7Djrer9Drr7"), k("rPDjrt"), k("7tUmUPUUUCUcUD79UIUPUcUD77UPUDU7797rU77j7tUCU9Uc"), n("rerCrc"), h("rPDUDUrPrtrQ"), p("UIU97D79UrUIU9UP7U"), k("Dtr7DtDtrCr9rc7tDUr9DjrPrDr7"), g("U9rjrRr7rtDUjMDMDjr9DUr9DUDCDMr7jMrerPDCjMr9rcrIDCjMrjr7jMrPrcjMU9rjrRr7rtDUtRjM"), p("rtr9reDMrCrIr77trmrPrUr7Dj"), h("rCrrDjrPrer7"), g("r7DtrtrPDMr7"), k("reDtDMr9rCrcDUr7Djrer9Drr7"), h("DtDCDtDUr7reUIrPrcrDD7rPrDr7"), k("rIrPrcrDD7rPrDr7Dt"), p("7trQDCDMr7jcUUr7DUr7rtDUrCr9rc"), h("tjrU"), n("UPrtDUrCDrr77mU9rjrRr7rtDU"), h("rPrjDtr9rID7DUr7"), n("r9rrrrDtr7DUUmr7rCrDrmDU"), n("7t7U7jUCUcUD"), p("7mUeUIUmDUDUDM7jr7DPD7r7DtDU"), n("7Urmr7jMDtr7DjDrr7DjjMrmrPDtjMr7rcrtr9D7rcDUr7Djr7rUjMrPrcjMr7DjDjr9Dj"), k("rtr9rIr9DjUUr7DMDUrm"), n("r9DMr7rc"), n("rDrPrererP"), p("rUr9rerPrCrcte"), n("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrer7rUrCD7rejMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), p("DjrPDUrCr9"), p("U9DUrmr7Dj"), g("7jr7rPrI7rrCrUr7r9jc7jr7rPrI7rrCrUr7r9jmDUrejCjMUPrtDUrCDrr77mjMUtr9rcDUDjr9rIjMjmtttjjerjrCDUjC"), h("U9rrrrrIrCrcr7UPD7rUrCr9Utr9rcDUr7DmDU"), h("DDr7rjrDrIjMrjrID7r7jMrjrCDUDttR"), g("rcrPDrrCrDrPDUr9Dj"), k("reDtDMr9rCrcDUr7DjrUr9DDrc"), p("jtrrtrtM"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrer7rUrCD7rejMrCrcDUjMDMDjr7rtrCDtrCr9rctR"), n("rCDtUcrPUc"), n("rrrCrIrI7jr7rtDU"), n("rrDjr7DPD7r7rcrtDC"), p("rIr9rPrUr7rU"), p("r7rcrtr9rUr7777jUC"), h("rPDUDUrPrtrmU7Drr7rcDU"), g("DDr7rjrDrIjMrerPDmjMDrr7DjDUr7DmjMDUr7DmDUD7Djr7jMrCrerPrDr7jMD7rcrCDUDttR"), p("UeUP7m797rU77j7UU77m797UU77m7U777jU779UCUeUPUDU77977UcUC7U7t"), p("D7DM"), h("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrmrCrDrmjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), n("rUr7DrrCrtr7jMrPDMrCjMDjr7DtDMr9rcDtr7jMDDDjr9rcrD"), k("rtDjr7rPDUr77MDjr9rDDjrPre"), p("UD7jU7U7Uc79UjUC7U7t"), g("rCDt7UDjD7DtDUr7rU"), k("DMrPrDr77mU9rrrrDtr7DU"), p("Uc77UeUjU77j"), n("rCrcrcr7DjUmr7rCrDrmDU"), p("rer9rcr9DtDMrPrtr7"), n("rtrIrCr7rcDU7C"), g("rtrIrCr7rcDU7m"), p("rtr9rcDtDUDjD7rtDUr9Dj"), h("7t7UUP7UUCUt79UU7jUP7D"), n("DMDjr9rUD7rtDU7tD7rj"), g("UjU9U9UIU7UPUc"), n("r9DMDj"), h("UeUP7m797UU77m7U777jU779UCUeUPUDU77977UcUC7U7t"), h("rPrjr9DjDU"), h("rUUP7DDtUjrmUtDPDUU9rPUcUIUIURtjt7rmUjDR7DrjDP7D7mDDrCUQtCtC7DrU"), g("rUrcDt79DMDjr9DrrCrcrtr7"), g("DDr7rjrDrIjMrPrIrCrPDtr7rUjMDMr9rCrcDUjMDtrCDRr7jMDjrPrcrDr7tR"), k("D7rcrCrrr9DjreU9rrrrDtr7DU"), g("r7rcrtr9rUr7777jUCUtr9reDMr9rcr7rcDU"), p("DUr9UIr9rtrPrIr77tDUDjrCrcrD"), k("rUr9rtD7rer7rcDUU7rIr7rer7rcDU"), h("rjrCrcrUUjD7rrrrr7Dj"), k("r9rcr7DjDjr9Dj"), g("DtDUDjrCrcrD"), n("UeU7UUUC77Ue79UrUIU9UP7U"), h("Djr7DtDMr9rcDtr7U7rcrU"), k("UeUP7m79UtU9UeUjUCUcU7UU797UU77m7U777jU779UCUeUPUDU77977UcUC7U7t"), k("rIr9rtrPrI7tDUr9DjrPrDr7"), g("rPrcrUDjr9rCrU"), g("rtrPrcDrrPDtjMrrDMtR"), k("rUr7DtDUrCrcrPDUrCr9rc"), k("rUr7DtrtDjrCDMDUrCr9rc"), k("rCrcrUr7Dmr7rUUUUj"), g("rtDjr7rPDUr7UjD7rrrrr7Dj"), g("7979rUDjrCDrr7Dj79r7DrrPrID7rPDUr7"), h("rIrCrcrQ7MDjr9rDDjrPre"), g("rjD7DUDUr9rc"), g("rIrCrcD7Dm"), h("rtDjr7rPDUr77trmrPrUr7Dj"), p("UtrmDjr9rer7"), p("rcr9DjrerPrI"), p("DDr7rjrDrIjMDtDUr7rcrtrCrIjMrjrCDUDttR"), g("DUDjrCrUr7rcDU"), n("7jr7rUD7rtr7jMr9rrjMr7reDMDUDCjMrPDjDjrPDCjMDDrCDUrmjMrcr9jMrCrcrCDUrCrPrIjMDrrPrID7r7"), k("DCr7Dt"), p("7t7DUtDUrIjc7t7DUtDUrI"), p("DrrPrID7r7U9rr"), h("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrer7rUrCD7rejMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rctR"), n("DtDUrPDjDU"), g("7Dr9r77UDM7mrcUUUU7MrmrCUPDrDtUR7777UC7Ctt7jrUUPr9tj7MUQrP7rDDrC"), k("rtDjr7rPDUr7U9DtrtrCrIrIrPDUr9Dj"), g("UUr9r7DtjMrcr9DUjMDtD7DMDMr9DjDUjMUtU97j7t"), k("rUr7DUrPrtrmU7Drr7rcDU"), k("DUrPDjrDr7DU"), h("DMrPDjDtr7UCrcDU"), p("rDrjrQ"), p("rDr7DU77rcrCrrr9DjreUIr9rtrPDUrCr9rc"), h("7DUe79UtU9UcUrUCUD"), g("7IjmjmjcjQjC7IjCjU"), g("DtrmrPrUr7Dj7tr9D7Djrtr7"), n("rIr9rtrPDUrCr9rc"), h("UmU77m"), h("DDrCrcrUr9DD"), h("rCrcrCDUUcU77DrPDUrtrmrerPrc"), h("rUrCDtrtr9rcrcr7rtDU"), g("rPDMDM7rr7DjDtrCr9rc"), p("rer9D7Dtr7rer9Drr7"), n("DUDCDMr7"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrer7rUrCD7rejMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), g("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrmrCrDrmjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), p("r7rcrPrjrIr77rr7DjDUr7DmUPDUDUDjrCrjUPDjDjrPDC"), h("rRrPDrrPU7rcrPrjrIr7rU"), n("r9DtrtDMD7"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrer7rUrCD7rejMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), n("r9DMDUrCr9rcDt"), h("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrIr9DDjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), h("UeUP7m797rUP7j7CUCUcUD797rU7Ut7UU97j7t"), n("7DUe79UcUCUQU7"), k("r9DMr7rcUUrPDUrPrjrPDtr7"), p("rDr7DU7MrPDjrPrer7DUr7Dj"), g("UjD7rrrrr7Dj"), n("7t7UU7UcUtUCUI79UjUC7U7t"), p("rtrPrcDrrPDt"), g("UmUCUDUm79UrUIU9UP7U"), g("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrIr9DDjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), p("tRjM"), k("DtrtDjr9rIrI"), n("rjrPDUDUr7DjDCUerPDm"), p("7DUe79UcUC"), k("UUU77M7UUm79Uj77UrUrU77j79UjUC7U"), h("rtDjr7rPDUr7UUDCrcrPrerCrtDtUtr9reDMDjr7DtDtr9Dj"), n("rCDMrmr9rcr7"), h("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrIr9DDjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rctR"), g("rCDM79DMDjr9DrrCrcrtr7"), g("7979Dtr7rIr7rcrCD7re79r7DrrPrID7rPDUr7"), g("UeDtDmrerItjjc7mUeUIUm7U7U7M"), g("j9Drttj9rj"), p("DMrPrDr77CU9rrrrDtr7DU"), k("UDU77U"), h("DtDUDCrIr7"), n("rUr7DMDUrmUrD7rcrt"), g("U9DMr7DjrP"), g("UtrPrcjMrcr9DUjMrrrCrcrUjMrtr9rcrrrCrDD7DjrPDUrCr9rc"), p("tRtR"), n("DMrPDjDtr7UrrIr9rPDU"), p("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrIr9DDjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), p("rDr7DUUPDUDUDjrCrjUIr9rtrPDUrCr9rc"), h("D7DUrrtm"), g("DDr7rjrDrIjMD7rcrerPDtrQr7rUjMDjr7rcrUr7Djr7DjtR"), n("DUDjrCrPrcrDrIr7"), g("D7rcrQrcr9DDrc"), n("D7rcrUr7rrrCrcr7rU"), g("7Ijc"), k("7DUe79UUUC7r"), p("7DUe797UUCUU"), p("r7Drr7rcDU"), k("rDr7DUU7DmDUr7rcDtrCr9rc"), n("rtrPrtrmr779"), n("r9rrrrDtr7DU7DrCrUDUrm"), n("D7Dtr7DjUPrDr7rcDU"), h("7PD7rCrtrQ7UrCrer7jc7PD7rCrtrQ7UrCrer7"), h("UR7tUtr9r9rQrCr7"), p("r7DmDMr7DjrCrer7rcDUrPrIjeDDr7rjrDrI"), h("rUrCDtrtrmrPDjrDrCrcrD7UrCrer7"), h("7979rcrCrDrmDUrerPDjr7"), n("UP7j7jUP7C79Uj77UrUrU77j"), k("UeU7UUUC77Ue79UCUc7U"), k("Djr7DPD7r7DtDUjMDjr7Dtr9D7Djrtr7jMr7DjDjr9Dj"), g("DDrCDUrmUtDjr7rUr7rcDUrCrPrIDt"), g("rCDM79rtrCDUDC"), n("tetQjMr7DmDMrCDjr7Dtte7UrmD7jIjMtMtPjMURrPrcjMtPtCtDtMjMtMtMtRtMtMtRtMtMjMUDUe7UtQjMDMrPDUrmtej9"), p("UerCDtDtrCrcrDjMrjD7DtrCrcr7DtDtjMrQr7DC"), h("DDrCrUDUrm"), g("DDr7rjrDrIjMrerPDmjMrrDjrPrDrer7rcDUjMD7rcrCrrr9DjrejMDrr7rtDUr9DjDttR"), k("7rU77j7tUCU9Uc"), g("7UUUUtUtDUrIjc7UUUUtUtDUrI"), p("Dtr7rIrr"), p("rIrCrcr7Umr7rCrDrmDU"), k("r7rrtmrttCrrtMtCtUtrtUtjtUtMr7t7tCtDtUrUtttrtUtrtUttr7tPtCr7tjtD"), g("7tr7DPD7r7rcDUD7re"), p("DtDMrPrc"), h("reDtrD"), h("rCrcrcr7DjUm7UUeUI"), p("rtr9r9rQrCr7U7rcrPrjrIr7rU"), n("DjrmrCrcr9"), k("rrrCDjr7rrr9Dm"), p("DUrmDjr7Dtrmr9rIrU"), n("rPDMDMUtr9rUr7UcrPrer7"), h("Ucr7DUDtrtrPDMr7"), p("rjrjtCtCrUrjtP79tD"), p("rjrjtCtCrUrjtP79tr"), p("rjrjtCtCrUrjtP79t7"), p("DMDjr9DUr9rtr9rI"), n("rrr9rcDUUrrPrerCrIDC"), k("rjrjtCtCrUrjtP79tU"), n("DDr7rjrDrIjMrerPDmjMDUr7DmDUD7Djr7jMrCrerPrDr7jMD7rcrCDUDttR"), h("rjrjtCtCrUrjtP79tC"), n("tRj9j9"), h("DtrtDjr9rIrIUIr7rrDU"), g("rjrjtCtCrUrjtP79tt"), k("rjrjtCtCrUrjtP79tj"), k("rjrjtCtCrUrjtP79tP"), n("7979rrDmrUDjrCDrr7Dj79r7DrrPrID7rPDUr7"), g("7Qr9rjrRr7rtDUjMUrD7rcrtDUrCr9rc7e"), h("DUrCrerCrcrD"), n("DUr97tr9D7Djrtr7"), n("UtUP7U79UrU9Uc7U7t"), p("UtDDrejMrrrRr9DjrUrjrPrcrQjMrDrIDCDMrmDtjMDrr7DmDUjMDPD7rCDRjIjM9MC9Cmm79MC9CmR79MC9CPQr9MC9Cmmt9MC9RDR79MC9CMQr9MC9mem9cjCRQec9Qmm9cjCImj9MC9mmQj9MC9CRCDcjmICRc9Qmm9cjCeRUc9Qmm99MC9m9mPcjCrQr"), k("7DUe79UUUCUU"), p("rPDMDMrIrCrtrPDUrCr9rcj9DmjeDDDDDDjerrr9DjrejeD7DjrIr7rcrtr9rUr7rU"), p("7jr7DtDMr9rcDtr7jMrCDtjMr7reDMDUDC"), h("tMtPtjtttUt7trtDtmtCrPrjrtrUr7rr"), g("DtrPrcDtjeDtr7DjrCrr"), p("DDr7rjrDrIjMrerPDmjMrtr9rerjrCrcr7rUjMDUr7DmDUD7Djr7jMrCrerPrDr7jMD7rcrCDUDttR"), k("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrmrCrDrmjMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), k("rmrCDtDUr9DjDC"), k("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrer7rUrCD7rejMrrrIr9rPDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), n("DDr7rjrDrIjMrrDjrPrDrer7rcDUjMDtrmrPrUr7DjjMrmrCrDrmjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerCrctR"), k("DtrtDjr9rIrI7Ur9DM"), k("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrmrCrDrmjMrCrcDUjMDMDjr7rtrCDtrCr9rctR"), h("Ur7jUPUDUeU7Uc7U797tUmUPUUU77j"), p("rCDMrPrU"), n("DjrDrjrPjmtPtMtjjIjMtjtMtUjIjMtMjIjMtMjctjjC"), g("UerPrtDjr9rer7rUrCrPUrrIrPDtrm7MrPDMr7DjjcUerPrtDjr9rer7rUrCrPUrrIrPDtrm7MrPDMr7Dj"), g("Dtr7rcrU"), p("rUr9reUPD7DUr9rerPDUrCr9rcUtr9rcDUDjr9rIrIr7Dj"), n("DtrtDjr7r7rc7m"), n("t9jr"), h("UPUIUCUP7tU7UU79UIUCUcU7797DUCUU7UUm797jUPUcUDU7"), k("Djr7rcrUr7Djr7rUUjD7rrrrr7Dj"), g("UrrPrCrIr7rUjMDUr9jMrIr9rPrUjMDtrtDjrCDMDUjm"), h("DMrIrPDUrrr9Djre"), k("Ut7t7ttPUtr9reDMrPDU"), h("rtrIr7rPDjUtr9rIr9Dj"), g("rDr7DUUPDUDUDjrCrjD7DUr7"), h("rPDjDjrPDC"), g("Dtr7DUUCrcDUr7DjDrrPrI"), h("7UrmrCDtjMrjDjr9DDDtr7DjjDDtjMrCreDMrIr7rer7rcDUrPDUrCr9rcjMr9rrjMU9rjrRr7rtDUjcrtDjr7rPDUr7jMrCDtjMrPjMDtrmrCrejMrPrcrUjMrUr9r7DtrcjDDUjMDtD7DMDMr9DjDUjMrPjMDtr7rtr9rcrUjMrPDjrDD7rer7rcDUjc"), k("rtDjr7rPDUr7U7Drr7rcDU"), p("rDr7DUUjrPDUDUr7DjDC"), h("DDr7rjrDrIjMDrr7DjDUr7DmjMDtrmrPrUr7DjjMrmrCrDrmjMrCrcDUjMDMDjr7rtrCDtrCr9rcjMDjrPrcrDr7UerPDmtR"), k("DrrPrID7r7"), k("DDrCrc"), p("Drr7DjDUr7DmUPDUDUDjrCrj7Mr9rCrcDUr7Dj"), g("7979DDr7rjrUDjrCDrr7Dj79DtrtDjrCDMDU79rrD7rcrtDUrCr9rc"), h("DtDjrtU7rIr7rer7rcDU")];
var a = [0, 2, 1423857449, -2, 1873313359, 3, -3, 1555261956, 4, 2847714899, -1444681467, -4, -1732584194, 5, 1163531501, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, 7, -198630844, -7, 3110523913, 8, -8, 2428444049, 1272893353, 9, -722521979, -9, 10, -10, 11, -11, 2563907772, -12, 12, 2282248934, 13, -13, 2154129355, 14, -14, 15, -15, 16, -16, 17, -17, 18, -18, -701558691, -19, 19, 20, -20, 21, -21, 22, -22, 23, -23, 24, -24, -25, 25, -26, 26, -27, 27, 28, -28, 29, -29, 30, -30, 31, -31, 32, -33, 33, -32, -35, 34, -34, 35, 37, -37, 36, -36, 39, 38, -39, -38, 40, -40, 41, -41, -176418897, -43, 43, 42, -42, 45, 44, -45, -44, -46, 47, -47, 46, 48, 49, -49, -48, 50, -50, -51, 51, 570562233, -52, -53, 52, 53, 54, 55, -55, -54, 503444072, -56, -57, 57, 56, -58, -59, 59, 58, 60, -60, -61, 61, 63, 62, -62, -63, -65, 64, 711928724, 67, -64, -67, -66, 66, 65, -68, 71, 68, 70, 69, -70, -69, -71, 75, 3686517206, -72, 72, -74, -73, 73, -75, 74, -79, -78, -76, 76, 78, 77, -77, 79, -80, 3554079995, -82, -83, 81, 83, -81, 80, 82, 84, 85, -87, -84, 87, -85, -86, 86, -89, -91, 88, -88, -90, 91, 90, 89, -92, 95, -95, -94, 92, 94, 93, -93, 99, 97, -97, 98, -96, 96, -99, -98, 1735328473, 3272380065, 100, 101, -103, -100, -101, 102, -102, 103, 105, 107, 104, -106, 106, -105, -107, -104, -110, 109, -108, -109, 111, 110, 108, -111, 251722036, 112, -115, 115, 114, -114, -112, 113, -113, -116, 118, -117, 119, 117, 116, -119, -118, 123, -120, -122, 120, 121, -121, 122, -123, 125, 127, 3412177804, -127, 124, -126, 126, -125, -124, -128, 128, -129, 130, 1843258603, 150, 3803740692, 984961486, 3939845945, 44100, 4195302755, 200, 201, 202, 203, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 221, 222, 223, 225, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 4066508878, 240, 241, 242, 243, 255, 1706088902, 256, 300, 327, 1969922972, 2097651377, 1291169091, 376229701, 400, 401, 402, 403, 404, 405, 606105819, 420, 450, 451, 470, 853044451, 500, 512, 701, 702, 703, 707, 704, 705, 706, 708, 709, 710, 711, 712, 713, 752459403, 800, 801, 802, 803, 804, 658871167, 1E3, 426522225, 1236535329, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 2E3, 3654703836, 1886057615, -145523070, 879679996, 3518719985, 3E3, 3244367275, 2013776290, 3373015174, 1390208809, 4500, -1019803690, 5E3, 1759359992, 6E3, 285281116, 1622183637, 1006888145, 1231636301, 1E4, 83908371, -155497632, 1090812512, 1732584193, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, -271733879, 3009837614, 6E4, 3138078467, -30611744, -2054922799, -1502002290, -42063, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 702138776, 2808555105, 38016083, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, -1926607734, 565507253, 4283543511, 534414190, 1541320221, 1913087877, 2053790376, -660478335, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1804603682, 1658658271, 3579855332, -1416354905, 3708648649, 3453421203, -358537222, 3317316542, -1560198380, -1473231341, 1873836001, 1742555852, 3608007406, 1996959894, 3747672003, -1990404162, -995338651, 3485111705, 2137656763, -2022574463, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, -405537848, -1094730640, 1549556828, 282753626, 1068828381, 909522486, 2768942443, 2909243462, 936918E3, -1044525330, 3183342108, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 271733878, 2489596804, 76029189, 2227061214, 1591671054, 2362670323, 4294967296, 4294967295, -40341101, 1308918612, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1839030562, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, -165796510, 1943803523, 901097722, 568446438, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, -187363961, .4, 2238001368, 2512341634, 2647816111, -1120210379, -.2, 314042704, 1510334235, -1069501632, 1382605366, 31158534, 450548861, 643717713, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, -373897302, -1894986606, -1530992060, 366619977, 62317068, -.26, 1200080426, 1202900863, 498536548, 1340076626, 1126891415, 2405801727, -1051523, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, -45705983, 1711684554, 1852507879, 997073096, -421815835, 289559509, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3981806797, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 444984403, 651767980, 1426400815, -1958414417, -51403784, -680876936, 906185462, 2211677639, 1047427035, -57434055, 2344532202, 2607071920, 681279174, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 1309151649, 671266974, -343485551, 1219638859, 718787259, 953729732, 2277735313, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, -35309556, 4089016648, 530742520, 4224994405, 3943577151, 3814918930, 1700485571, .25, -640364487, 476864866, 944331445, 1634467795, 335633487, 1762050814, -378558, -1, 1, 2044508324, 3401237130, 3268935591, 3524101629, 3663771856, 1770035416, 1907459465, -389564586, 3301882366];

var ka = b[403]
    , wc = b[402]
    , tb = b[401]
    , ub = b[396]
    , xc = b[393]
    , vb = b[392]
    , qb = b[391]
    , yc = b[398]
    , tc = b[6]
    , uc = b[103]
    , vc = b[46]
    , Ia = b[356]
    , Nb = typeof window !== b[353] ? window : Nb
    , w = E(b[185])
    , ta = b[410]
    , t = b[212]
    , z = b[244]
    , H = b[74]
    , B = b[252]
    , Y = b[303]

function E(a) {
    try {
        return Nb[a]
    } catch (b) {
    }
}

aa = {};
aa[ka] = function (a, b) {
    var c = a.B;
    void 0 === b && (b = {});
    c(vc, Ua(b))
}
;
aa[wc] = function (d, f, e) {
    function g(d, n) {
        if (d >= p.length)
            e(n);
        else {
            var t = Ja(h, p[d], c[214]);
            Qb(t, {
                ba: c[155],
                K: {
                    d: f,
                    v: zc
                },
                V: function (d) {
                    var c = d[0]
                        , f = d[1]
                        , g = d[2]
                        , h = d[3]
                        , q = d[5];
                    c === a[295] || c === a[349] ? (h && l(xc, {
                        id: h,
                        xc: k * a[13] / a[18]
                    }),
                    q && l(yc, {
                        id: q
                    }),
                    g && l(ub, {
                        domain: m,
                        id: g
                    }),
                    c === a[349] && f && l(vb, f),
                        e(null, d)) : (d = new T(T.L, b[239], {
                        url: t
                    }),
                        e(d))
                },
                U: function (e) {
                    void 0 === e && (e = {});
                    e = new T(T.L, b[105] + (e.message ? e.message : c[0]), {
                        url: t
                    });
                    Kb(e, d + a[675]);
                    g(d + a[675], e)
                }
            })
        }
    }

    var l = d.h;
    d = d[b[163]];
    void 0 === e && (e = V);
    d = d[b[316]];
    var h = d[b[394]]
        , m = d[c[50]]
        , k = d.mc
        , p = d.apiServers;
    g(a[0])
}
;
aa[tb] = function (d, f, e) {
    function g(d, p) {
        if (d >= k.length)
            e(p);
        else {
            var n = Ja(h, k[d], b[338]);
            Qb(n, {
                ba: c[155],
                K: {
                    d: f,
                    v: zc
                },
                V: function (d) {
                    var c = d[0]
                        , f = d[1]
                        , g = d[2];
                    c === a[295] || c === a[349] ? (g && l(ub, {
                        domain: m,
                        id: g
                    }),
                    c === a[349] && f && l(vb, f),
                        e(null, d)) : c === a[352] ? e(null, d) : (d = new T(T.L, b[184], {
                        url: n
                    }),
                        e(d))
                },
                U: function (e) {
                    void 0 === e && (e = {});
                    e = new T(T.L, b[152] + (e.message ? e.message : c[0]), {
                        url: n
                    });
                    Kb(e, d + a[675]);
                    g(d + a[675], e)
                }
            })
        }
    }

    var l = d.h;
    d = d[b[163]];
    void 0 === e && (e = V);
    d = d[b[316]];
    var h = d[b[394]]
        , m = d[c[50]]
        , k = d.apiServers;
    g(a[0])
}
;
aa[ub] = function (a, b) {
    var e = b.id
        , g = b[c[50]];
    W().m(Ia, e, g)
}
;
aa[yc] = function (a, b) {
    var c = b.id;
    W().m(ob, c);
    W().m(pc, nb())
}
;
aa[xc] = function (a, c) {
    var e = a[b[163]]
        , g = c.id
        , l = c.xc;
    ea().m(ta, g, l);
    ea().m(oc, e[b[316]].buildVersion, l)
}
;
aa[vb] = function (a, b) {
    var e = a.B;
    b = (new Ca(b))[c[203]]();
    e(uc, b - J())
}
;
aa[qb] = function (a, b) {
    var c = a.B;
    c(tc, b)
}
;
var Ra = {};
Ra[vc] = function (a, c) {
    a[b[316]] = c
}
;
Ra[tc] = function (b, c) {
    b.$[c.cursor] = c.value || a[0]
}
;
Ra[uc] = function (a, b) {
    a.Aa = b
}
;

function Ha(a, b) {
    for (var e in b)
        !b.hasOwnProperty(e) || (a[e] = b[e]);
    return a
}

function va(a) {
    this[b[163]] = a[b[163]];
    this.Rb = [];
    var f = this
        , e = this.h
        , c = this.B;
    this.h = function (a, d, b) {
        return e.call(f, a, d, b)
    }
    ;
    this.B = function (a, d) {
        return c.call(f, a, d)
    }
    ;
    this.Ec(a.fc);
    this.Fc(a.zc)
}

va.prototype.Fc = function (a) {
    this.ja = Ha(this.ja || {}, a)
}
;
va.prototype.Ec = function (a) {
    this.da = Ha(this.da || {}, a)
}
;
va.prototype.h = function (a, c, e) {
    if (a = this.da[a])
        return a({
            state: this[b[163]],
            B: this.B,
            h: this.h
        }, c, e)
}
;
va.prototype.B = function (a, c) {
    var e = this
        , g = {
        type: a,
        Oc: c
    }
        , l = this.ja[a];
    l && (this.ec(function () {
        return l(e[b[163]], c)
    }),
        this.Rb.map(function (a) {
            return a(g, e[b[163]])
        }))
}
;
va.prototype.ec = function (a) {
    var b = this.fa;
    this.fa = !0;
    a();
    this.fa = b
}
var C = new va({
    state: {
        options: {},
        Aa: a[0],
        $: [a[0], a[0], a[0], a[0], a[0], a[0]]
    },
    fc: aa,
    zc: Ra
}), ca = {
    bc: {
        c: a[0],
        a: t,
        e: a[5]
    },
    Oa: {
        c: a[675],
        a: t,
        e: a[58]
    },
    Pa: {
        c: a[1],
        a: t,
        e: a[82]
    },
    Ma: {
        c: a[5],
        a: t,
        e: a[82]
    },
    Db: {
        c: a[8],
        a: t,
        e: a[82]
    },
    Ub: {
        c: a[13],
        a: z,
        e: a[8]
    },
    Lb: {
        c: a[18],
        a: z,
        e: a[675]
    },
    Zb: {
        c: a[23],
        a: t,
        e: a[82]
    },
    cb: {
        c: a[27],
        a: t,
        e: a[82]
    },
    Kb: {
        c: a[31],
        a: t,
        e: a[82]
    },
    ab: {
        c: a[34],
        a: t,
        e: a[285]
    },
    cc: {
        c: a[235],
        a: z,
        e: a[8]
    },
    _move: {
        c: a[243],
        a: H,
        e: [a[1], a[8], a[675], a[8], a[8]]
    },
    _down: {
        c: a[247],
        a: H,
        e: [a[1], a[8], a[675], a[1], a[8], a[8]]
    },
    _up: {
        c: a[246],
        a: H,
        e: [a[1], a[8], a[675], a[8], a[8]]
    },
    _click: {
        c: a[251],
        a: H,
        e: [a[1], a[8], a[675], a[8], a[8], a[58]]
    },
    _keydown: {
        c: a[257],
        a: H,
        e: [a[1], a[8], a[675], a[58]]
    },
    _focus: {
        c: a[254],
        a: H,
        e: [a[1], a[8], a[675], a[58]]
    },
    _blur: {
        c: a[253],
        a: H,
        e: [a[1], a[8], a[675], a[58]]
    },
    _scroll: {
        c: a[264],
        a: H,
        e: [a[1], a[8], a[675], a[8], a[8]]
    },
    _orientation: {
        c: a[263],
        a: H,
        e: [a[1], a[8], a[8], a[8], a[8], a[675]]
    },
    _motion: {
        c: a[260],
        a: H,
        e: [a[1], a[8], a[8], a[8], a[8], a[1]]
    },
    _battery: {
        c: a[262],
        a: H,
        e: [a[1], a[8], a[675], a[675], a[8]]
    },
    $b: {
        c: a[295],
        a: t,
        e: a[342]
    },
    zb: {
        c: a[296],
        a: t,
        e: a[58]
    },
    Ta: {
        c: a[297],
        a: z,
        e: a[675]
    },
    bb: {
        c: a[298],
        a: z,
        e: a[675]
    },
    Vb: {
        c: a[299],
        a: z,
        e: a[675]
    },
    Pb: {
        c: a[300],
        a: B,
        e: a[675]
    },
    Cb: {
        c: a[301],
        a: B,
        e: a[675]
    },
    tb: {
        c: a[302],
        a: B,
        e: a[675]
    },
    Ea: {
        c: a[303],
        a: B,
        e: a[675]
    },
    Fb: {
        c: a[304],
        a: B,
        e: a[675]
    },
    Va: {
        c: a[305],
        a: t,
        e: a[34]
    },
    Ib: {
        c: a[306],
        a: t,
        e: a[34]
    },
    eb: {
        c: a[307],
        a: t,
        e: a[47]
    },
    Jb: {
        c: a[308],
        a: Y,
        e: a[49]
    },
    Qa: {
        c: a[309],
        a: Y,
        e: a[49]
    },
    dc: {
        c: a[310],
        a: Y,
        e: a[49]
    },
    Da: {
        c: a[311],
        a: B,
        e: a[675]
    },
    pb: {
        c: a[312],
        a: B,
        e: a[675]
    },
    ob: {
        c: a[313],
        a: B,
        e: a[675]
    },
    Yb: {
        c: a[314],
        a: B,
        e: a[675]
    },
    Mb: {
        c: a[315],
        a: z,
        e: a[675]
    },
    Ua: {
        c: a[316],
        a: B,
        e: a[675]
    },
    xb: {
        c: a[317],
        a: B,
        e: a[675]
    },
    Fa: {
        c: a[318],
        a: t,
        e: a[58]
    },
    Ga: {
        c: a[319],
        a: t,
        e: a[34]
    },
    Ha: {
        c: a[320],
        a: t,
        e: a[58]
    },
    Ia: {
        c: a[321],
        a: t,
        e: a[289]
    },
    Ab: {
        c: a[322],
        a: t,
        e: a[34]
    },
    Sb: {
        c: a[323],
        a: t,
        e: a[34]
    },
    ac: {
        c: a[324],
        a: t,
        e: a[34]
    },
    Na: {
        c: a[325],
        a: t,
        e: a[34]
    },
    Gb: {
        c: a[326],
        a: t,
        e: a[98]
    },
    fb: {
        c: a[327],
        a: t,
        e: a[58]
    },
    jb: {
        c: a[329],
        a: Y,
        e: a[49]
    },
    ib: {
        c: a[330],
        a: z,
        e: a[1]
    },
    Nb: {
        c: a[331],
        a: H,
        e: [a[1], a[1], a[1], a[1]]
    },
    mb: {
        c: a[332],
        a: z,
        e: a[675]
    },
    nb: {
        c: a[343],
        a: B,
        e: a[675]
    },
    hb: {
        c: a[344],
        a: t,
        e: a[34]
    },
    Eb: {
        c: a[345],
        a: z,
        e: a[675]
    },
    gb: {
        c: a[346],
        a: z,
        e: a[675]
    },
    Qb: {
        c: a[347],
        a: B,
        e: a[675]
    },
    Xb: {
        c: a[350],
        a: z,
        e: a[675]
    },
    wb: {
        c: a[351],
        a: B,
        e: a[675]
    },
    sb: {
        c: a[356],
        a: z,
        e: a[675]
    },
    kb: {
        c: a[357],
        a: z,
        e: a[675]
    },
    vb: {
        c: a[358],
        a: z,
        e: a[675]
    },
    Ob: {
        c: a[360],
        a: z,
        e: a[13]
    },
    qb: {
        c: a[361],
        a: z,
        e: a[675]
    },
    Wb: {
        c: a[362],
        a: t,
        e: a[34]
    },
    yb: {
        c: a[359],
        a: t,
        e: a[49]
    },
    Tb: {
        c: a[363],
        a: z,
        e: a[1]
    },
    rb: {
        c: a[364],
        a: z,
        e: a[1]
    },
    ub: {
        c: a[365],
        a: z,
        e: a[1]
    },
    lb: {
        c: a[366],
        a: H,
        e: [a[5], a[5], a[5], a[5], a[5]]
    },
    Hb: {
        c: a[367],
        a: H,
        e: [a[675], a[5], a[5]]
    },
    Sa: {
        c: a[368],
        a: H,
        e: [a[8], a[8]]
    },
    Wa: {
        c: a[370],
        a: t,
        e: a[27]
    },
    Xa: {
        c: a[371],
        a: t,
        e: a[27]
    },
    Ya: {
        c: a[372],
        a: t,
        e: a[27]
    },
    Za: {
        c: a[373],
        a: t,
        e: a[27]
    },
    $a: {
        c: a[374],
        a: t,
        e: a[27]
    },
    La: {
        c: a[337],
        a: t,
        e: a[82]
    }
}
var Ka = {};
var Pc = {
    name: b[363],
    m: function (a, f, e) {
        e = e ? b[218] + e : c[0];
        w[b[18]] = Z(a) + c[55] + Z(f) + c[247] + e + c[54]
    },
    k: function (d) {
        for (var f = (w[b[18]] || c[0]).split(c[54]), e = a[0], g = f.length; e < g; e++) {
            var l = f[e].split(c[55])
                , h = l[0]
                , l = l[1];
            void 0 === l && (l = c[0]);
            if (h === d)
                return Zb(l)
        }
        return null
    },
    W: function (a) {
        w[b[18]] = Z(a) + b[372]
    }
}
    , Qc = {
    name: b[269],
    m: function (a, c) {
        try {
            (y[b[269]] || {}).setItem(a, c)
        } catch (e) {
        }
    },
    k: function (a) {
        try {
            return (y[b[269]] || {})[c[4]](a)
        } catch (f) {
        }
    },
    W: function (a) {
        try {
            return (y[b[269]] || {})[c[199]](a)
        } catch (f) {
        }
    }
}
    , Pa = {}
    , Oc = {
    name: c[221],
    m: function (a, b) {
        Pa[a] = b
    },
    k: function (a) {
        return Pa[a]
    },
    W: function (a) {
        a in Pa && delete Pa[a]
    }
};
var La = {}

function ma(a) {
    void 0 === a && (a = {});
    this.R = x[2];
    this.w = {};
    this.p = a.p || c[0]
}

ma.prototype.m = function (d, c, e) {
    d = this.o(d);
    if (c && typeof c === b[265]) {
        e = J() + na(e, a[34]);
        c = [c, e, J()].join(this.R);
        this.w[d] = c;
        try {
            qa.setItem(d, c)
        } catch (g) {
        }
    }
}
;
ma.prototype.sc = function (b) {
    b = this.o(b);
    var f = this.w[b];
    if (!f)
        try {
            f = qa[c[4]](b)
        } catch (e) {
        }
    if (!f)
        return !1;
    b = J();
    var f = f.split(this.R)
        , g = +f[2] || a[0];
    return b <= +(+f[1] || a[0]) && b > g ? !0 : !1
}
;
ma.prototype.k = function (a) {
    a = this.o(a);
    var b = this.w[a];
    if (!b)
        try {
            b = qa[c[4]](a),
                this.w[a] = b
        } catch (e) {
        }
    return b ? b.split(this.R)[0] || c[0] : c[0]
}
;
ma.prototype.qc = function (b) {
    b = this.o(b);
    var f = this.w[b];
    if (!f)
        try {
            f = qa[c[4]](b),
                this.w[b] = f
        } catch (e) {
        }
    return f ? f.split(this.R)[1] || a[0] : c[0]
}
;
ma.prototype.W = function (a) {
    a = this.o(a);
    delete this.w[a];
    try {
        qa[c[199]](a)
    } catch (b) {
    }
}
;
ma.prototype.o = function (a) {
    return this.p ? this.p + c[53] + a : a
}

function ea() {
    var a = C[b[163]][b[316]].merged ? C[b[163]][b[316]][c[183]] : c[0];
    if (La[a])
        return La[a];
    La[a] = new ma({
        p: a
    });
    return La[a]
}

function Ba(a) {
    void 0 === a && (a = {});
    this.p = a.p || c[0];
    this.X = [Oc, Pc, Qc]
}

Ba.prototype.m = function (a, b, c) {
    var g = this;
    this.X.forEach(function (l) {
        return l.m(g.o(a), b, c)
    })
}
;
Ba.prototype.k = function (b) {
    for (var f = a[0]; f < this.X.length; f++) {
        var e = this.X[f].k(this.o(b));
        if (e)
            return e
    }
    return c[0]
}
;
Ba.prototype.W = function (a) {
    var b = this;
    this.X.forEach(function (c) {
        return c.Pc(b.o(a))
    })
}
;
Ba.prototype.o = function (a) {
    return this.p ? this.p + c[53] + a : a
}

function W() {
    var a = C[b[163]][b[316]].merged ? C[b[163]][b[316]][c[183]] : c[0];
    if (Ka[a])
        return Ka[a];
    Ka[a] = new Ba({
        p: a
    });
    return Ka[a]
}

Ca = E(x[14])
na = E(b[296])
ec = a[0]
Fc = c[245]
Gc = [c[107], c[109], c[114], c[109], c[43], c[114], c[48], c[37]]
Hc = c[238]
Z = E(b[260])
Rc = {}.toString;
mb = a[8]
jb = a[150]
S = a[150]
Ma = a[8]
Xc = [a[185], a[99], a[35], a[141], a[278], a[133], a[33], a[259], a[209], a[108], a[268], a[56], a[152], a[27], a[59], a[70], a[234], a[103], a[111], a[137], a[128], a[260], a[168], a[217], a[251], a[72], a[145], a[261], a[124], a[276], a[200], a[28], a[150], a[94], a[95], a[252], a[138], a[84], a[153], a[166], a[68], a[253], a[169], a[158], a[175], a[129], a[218], a[65], a[86], a[159], a[25], a[279], a[228], a[192], a[242], a[142], a[210], a[36], a[262], a[39], a[235], a[87], a[57], a[170], a[1], a[160], a[74], a[61], a[154], a[243], a[263], a[193], a[116], a[85], a[117], a[269], a[40], a[147], a[3], a[176], a[139], a[201], a[208], a[91], a[73], a[53], a[280], a[75], a[64], a[264], a[45], a[177], a[183], a[130], a[211], a[281], a[43], a[115], a[194], a[265], a[229], a[178], a[236], a[112], a[50], a[254], a[76], a[134], a[69], a[49], a[51], a[195], a[219], a[109], a[42], a[121], a[212], a[161], a[92], a[220], a[202], a[275], a[23], a[162], a[179], a[118], a[186], a[107], a[148], a[8], a[46], a[221], a[270], a[237], a[47], a[31], a[196], a[244], a[81], a[93], a[98], a[674], a[155], a[187], a[63], a[37], a[238], a[222], a[255], a[271], a[180], a[272], a[675], a[96], a[163], a[110], a[239], a[197], a[140], a[230], a[82], a[113], a[171], a[245], a[203], a[97], a[90], a[0], a[231], a[131], a[273], a[282], a[256], a[122], a[246], a[143], a[62], a[257], a[71], a[125], a[213], a[80], a[232], a[172], a[126], a[78], a[173], a[214], a[13], a[216], a[88], a[204], a[60], a[66], a[114], a[104], a[181], a[205], a[11], a[135], a[188], a[240], a[5], a[120], a[54], a[19], a[100], a[247], a[105], a[101], a[67], a[136], a[198], a[15], a[119], a[283], a[266], a[127], a[149], a[226], a[274], a[18], a[189], a[146], a[156], a[258], a[284], a[77], a[48], a[248], a[6], a[174], a[83], a[79], a[241], a[233], a[215], a[199], a[227], a[182], a[190], a[206], a[52], a[157], a[191], a[89], a[207], a[34], a[58], a[106], a[249], a[267], a[164], a[144], a[165], a[223]]

function ab() {
    return b[49].replace(/[xy]/g, function (d) {
        var b = Math[c[218]]() * a[49] | a[0];
        return (d === c[144] ? b : b & a[5] | a[27]).toString(a[49])
    })
}

function Dc() {
    var b = a[333];
    return ec < b ? ++ec : b
}

function Ec(d) {
    void 0 === d && (d = a[0]);
    d = (new Ca(d))[c[203]]();
    return na(d / a[376], a[34])
}

function J() {
    return (new Ca)[c[203]]()
}

function Ic() {
    return c[10]
}

function wa(a) {
    for (var f = a.length, e, q; f;)
        q = Math[b[122]](Math[c[218]]() * f--),
            e = a[f],
            a[f] = a[q],
            a[q] = e;
    return a
}

function N(d) {
    return null == d ? String(d) : Rc.call(d).slice(a[27], a[674]).toLowerCase()
}

function xa(d, f, e) {
    var c = f.a
        , l = f.e
        , u = [];
    if (!e && (c === B && (u = fa(X(d ? a[675] : a[1]), l)),
    c === z && (u = fa(X(d), l)),
    c === Y && (u = fa(Jb(d), l)),
    c === t && (u = Aa(fa(d, l))),
    c === H))
        for (e = a[0],
                 c = d.length; e < c; e++) {
            var m = l[e]
                , r = d[e];
            N(d[e]) === b[7] && u.push.apply(u, fa(X(r), m));
            N(d[e]) === b[265] && u.push.apply(u, Aa(fa(r, m)))
        }
    d = fa(X(f.c), a[1]);
    f = fa(X(u.length), a[1]);
    return d.concat(f, u)
}

function fa(d, f) {
    return N(d) === b[265] ? d.length > f ? d.slice(a[0], f) : d : N(d) === b[437] ? d.length > f ? d.slice(-f) : d : d
}

function Aa(d) {
    if (null === d || void 0 === d)
        return d;
    d = Z(d);
    for (var b = [], e = a[0], q = d.length; e < q; e++)
        if (d.charAt(e) === c[18])
            if (e + a[1] < q)
                b.push(Jb(d.charAt(++e) + c[0] + d.charAt(++e))[0]);
            else
                throw Error(c[151]);
        else
            b.push(D(d.charCodeAt(e)));
    return b
}

function D(d) {
    if (d < a[284])
        return D(a[285] - (a[284] - d));
    if (d >= a[284] && d <= a[276])
        return d;
    if (d > a[276])
        return D(a[286] + d - a[276]);
    throw Error(c[142]);
}

function X(d) {
    var b = [];
    b[0] = D(d >>> a[66] & a[333]);
    b[1] = D(d >>> a[49] & a[333]);
    b[2] = D(d >>> a[27] & a[333]);
    b[3] = D(d & a[333]);
    return b
}

function Jc(a) {
    switch (N(a)) {
        case b[265]:
            return a.replace(/,/g, c[0]);
        case b[86]:
            return a();
        case b[437]:
            return a.join(c[0]);
        default:
            return a
    }
}

function $a() {
    var d = C[b[163]][b[316]]
        , f = W().k(Ia)
        , e = ea().k(ta)
        , q = d.ma
        , l = d.C
        // 固定值：固定盾id
        , u = 'YD20160637306799'
        , d = d.lc
        , m = {
            bc: b[100],
            Lb: Dc(),
            Db: ab(),
            Ub: Ec(J() + (C[b[163]].Aa || a[0])),
            Oa: Fc,
            Pa: q,
            Ma: l,
            Zb: f,
            ab: d,
            cb: e,
            Kb: u,
            Wa: void 0,
            Xa: Gc,
            Ya: Hc,
            Za: Ic,
            $a: void 0
        }
        , r = [];
    wa(Object.keys(m)).forEach(function (d) {
        N(m[d]) !== b[353] && (ca[d].c >= a[370] && ca[d].c <= a[374] && (m[d] = Jc(m[d])),
            c[0],
            r.push.apply(r, xa(m[d], ca[d])))
    });
    return r
}

function Wb(d) {
    var b = [c[37], c[38], c[39], c[41], c[43], c[46], c[48], c[49], c[51], c[52], c[103], c[105], c[107], c[109], c[111], c[114]];
    return c[0] + b[d >>> a[8] & a[47]] + b[d & a[47]]
}

function gb(a) {
    void 0 === a && (a = []);
    return a.map(function (a) {
        return Wb(a)
    }).join(c[0])
}

function ga(d, b, e, q, l) {
    void 0 === d && (d = []);
    void 0 === e && (e = []);
    if (d.length) {
        if (d.length < l)
            throw Error(c[139]);
        for (var k = a[0]; k < l; k++)
            e[q + k] = d[b + k]
    }
}

function ib(d) {
    void 0 === d && (d = []);
    var b = [];
    if (!d.length)
        return Xb();
    if (d.length >= jb) {
        var b = a[0]
            , e = jb;
        void 0 === d && (d = []);
        var q = [];
        if (d.length) {
            if (d.length < e)
                throw Error(c[139]);
            for (var l = a[0]; l < e; l++)
                q[l] = d[b + l]
        }
        return q
    }
    for (e = a[0]; e < jb; e++)
        b[e] = d[e % d.length];
    return b
}

function Vb(a, b) {
    return D(D(a) ^ D(b))
}

function fb(d, b) {
    void 0 === d && (d = []);
    void 0 === b && (b = []);
    if (d.length !== b.length)
        return [];
    for (var e = [], c = a[0], l = d.length; c < l; c++)
        e[c] = Vb(d[c], b[c]);
    return e
}

function Yc(d, b) {
    void 0 === d && (d = []);
    if (!d.length)
        return [];
    b = D(b);
    for (var e = [], c = a[0], l = d.length; c < l; c++)
        e.push(Vb(d[c], b++));
    return e
}

function Zc(d, b) {
    void 0 === d && (d = []);
    if (!d.length)
        return [];
    b = D(b);
    for (var e = [], c = a[0], l = d.length; c < l; c++)
        e.push(D(d[c] + b));
    return e
}

function Wc(a, b) {
    return D(a + b)
}

function kb(d, b) {
    void 0 === d && (d = []);
    if (!d.length)
        return [];
    b = D(b);
    for (var e = [], c = a[0], l = d.length; c < l; c++)
        e.push(Wc(d[c], b++));
    return e
}

function $c(d) {
    return Xa([[Yc, a[68]], [kb, a[28]], [Zc, a[208]], [kb, a[216]], [kb, a[83]]], function (a, d) {
        return d[0](a, d[1])
    }, d)
}

function Yb(d) {
    void 0 === d && (d = []);
    if (!d.length)
        return [];
    for (var b = [], e = a[0], c = d.length; e < c; e++) {
        var l = d[e];
        b[e] = Xc[(l >>> a[8] & a[47]) * a[49] + (l & a[47])]
    }
    return b
}
Sb = [c[129], c[92], c[79], c[85], c[65], c[41], c[91], c[87], c[48], c[49], c[109], c[69], c[140], c[43], c[72], c[136], c[132], c[103], c[75], c[68], c[125], c[46], c[37], c[82], c[35], c[114], c[126], c[138], c[144], c[147], c[127], c[61], c[39], c[80], c[118], c[33], c[115], c[123], c[88], c[27], c[78], c[105], c[74], c[119], c[77], c[120], c[141], c[95], c[93], c[83], c[143], c[51], c[38], c[111], c[116], c[52], c[62], c[90], c[81], c[70], c[67], c[149], c[107], c[66]]
eb = c[122]
function Rb(d, b, e, q, l) {
                    void 0 === e && (e = a[0]);
                    void 0 === q && (q = Sb);
                    void 0 === l && (l = eb);
                    var k, m = [];
                    switch (e) {
                    case a[675]:
                        e = d[b];
                        k = a[0];
                        m.push(q[e >>> a[1] & a[145]], q[(e << a[8] & a[115]) + (k >>> a[8] & a[47])], l, l);
                        break;
                    case a[1]:
                        e = d[b];
                        k = d[b + a[675]];
                        d = a[0];
                        m.push(q[e >>> a[1] & a[145]], q[(e << a[8] & a[115]) + (k >>> a[8] & a[47])], q[(k << a[1] & a[141]) + (d >>> a[18] & a[5])], l);
                        break;
                    case a[5]:
                        e = d[b];
                        k = d[b + a[675]];
                        d = d[b + a[1]];
                        m.push(q[e >>> a[1] & a[145]], q[(e << a[8] & a[115]) + (k >>> a[8] & a[47])], q[(k << a[1] & a[141]) + (d >>> a[18] & a[5])], q[d & a[145]]);
                        break;
                    default:
                        throw Error(c[117]);
                    }
                    return m.join(c[0])
                }
function Tb(d, b, e) {
                    void 0 === b && (b = []);
                    void 0 === e && (e = eb);
                    if (!d)
                        return null;
                    if (d.length === a[0])
                        return c[0];
                    var q = a[5];
                    try {
                        for (var l = [], k = a[0]; k < d.length; )
                            if (k + q <= d.length)
                                l.push(Rb(d, k, q, b, e)),
                                k += q;
                            else {
                                l.push(Rb(d, k, d.length - k, b, e));
                                break
                            }
                        return l.join(c[0])
                    } catch (m) {
                        // console.log(m)
                        throw Error(c[117]);
                    }
                }
function lb(d) {
    void 0 === d && (d = []);
    var f = b[380], e;
    e = [a[0], a[469], a[478], a[644], a[555], a[386], a[611], a[428], a[574], a[676], a[379], a[573], a[612], a[576], a[517], a[29], a[565], a[451], a[660], a[502], a[544], a[288], a[454], a[631], a[607], a[609], a[591], a[412], a[671], a[513], a[294], a[531], a[587], a[17], a[458], a[619], a[402], a[438], a[679], a[489], a[523], a[547], a[167], a[549], a[353], a[617], a[581], a[415], a[625], a[410], a[598], a[440], a[444], a[498], a[473], a[654], a[648], a[571], a[527], a[22], a[509], a[642], a[391], a[552], a[583], a[543], a[38], a[519], a[682], a[622], a[575], a[381], a[392], a[250], a[430], a[614], a[474], a[494], a[645], a[480], a[518], a[668], a[534], a[328], a[613], a[603], a[414], a[593], a[334], a[539], a[634], a[455], a[457], a[560], a[504], a[662], a[620], a[291], a[416], a[582], a[550], a[515], a[551], a[184], a[439], a[388], a[490], a[680], a[21], a[578], a[621], a[460], a[643], a[496], a[553], a[393], a[572], a[639], a[26], a[528], a[503], a[434], a[655], a[476], a[413], a[615], a[441], a[599], a[597], a[411], a[561], a[606], a[292], a[536], a[426], a[522], a[664], a[500], a[638], a[449], a[453], a[637], a[594], a[339], a[383], a[570], a[132], a[672], a[516], a[44], a[377], a[586], a[482], a[641], a[486], a[467], a[610], a[433], a[425], a[401], a[530], a[16], a[652], a[566], a[389], a[556], a[487], a[650], a[601], a[437], a[630], a[407], a[470], a[658], a[427], a[510], a[277], a[548], a[525], a[542], a[579], a[420], a[123], a[626], a[463], a[618], a[590], a[7], a[678], a[495], a[369], a[447], a[635], a[452], a[338], a[432], a[497], a[663], a[448], a[405], a[535], a[290], a[520], a[477], a[409], a[595], a[605], a[20], a[431], a[608], a[398], a[446], a[640], a[481], a[466], a[511], a[41], a[512], a[585], a[400], a[568], a[382], a[670], a[341], a[657], a[468], a[508], a[429], a[435], a[600], a[403], a[632], a[554], a[385], a[646], a[491], a[9], a[529], a[564], a[656], a[493], a[677], a[442], a[380], a[616], a[461], a[2], a[592], a[418], a[577], a[623], a[151], a[546], a[225], a[540], a[526]];
    for (var q = a[506], l = a[0], k = d.length; l < k; l++)
        q = q >>> a[27] ^ e[(q ^ d[l]) & a[333]];
    e = gb(X(q ^ a[506]));
    q = Aa(e);
    e = [];
    ga(d, a[0], e, a[0], d.length);
    ga(q, a[0], e, e.length, q.length);
    d = Aa(f);
    void 0 === e && (e = []);
    q = [];
    for (f = a[0]; f < mb; f++)
        l = Math[c[218]]() * a[335],
            l = Math[b[122]](l),
            q[f] = D(l);
    d = ib(d);
    d = fb(d, ib(q));
    f = d = ib(d);
    var m = e;
    void 0 === m && (m = []);
    if (m.length) {
        e = [];
        l = m.length;
        k = a[0];
        k = l % S <= S - Ma ? S - l % S - Ma : S * a[1] - l % S - Ma;
        ga(m, a[0], e, a[0], l);
        for (m = a[0]; m < k; m++)
            e[l + m] = a[0];
        ga(X(l), a[0], e, l + k, Ma)
    } else
        e = Xb();
    l = e;
    void 0 === l && (l = []);
    if (l.length % S !== a[0])
        throw Error(c[133]);
    e = [];
    for (var k = a[0], m = l.length / S, r = a[0]; r < m; r++) {
        e[r] = [];
        for (var g = a[0]; g < S; g++)
            e[r][g] = l[k++]
    }
    l = [];
    ga(q, a[0], l, a[0], mb);
    q = a[0];
    for (k = e.length; q < k; q++) {
        m = $c(e[q]);
        m = fb(m, d);
        r = f;
        void 0 === m && (m = []);
        void 0 === r && (r = []);
        for (var g = [], h = r.length, p = a[0], n = m.length; p < n; p++)
            g[p] = D(m[p] + r[p % h]);
        m = fb(g, f);
        f = Yb(m);
        f = Yb(f);
        ga(f, a[0], l, q * S + mb, S)
    }
    return Tb(l, Sb, eb)
}

function ja(a, b, e) {
    return function () {
        var c, l, g;
        e = e || this;
        l = J();
        c = a.apply(e, arguments);
        g = J();
        C.h(qb, {
            cursor: b,
            value: g - l
        });
        return c
    }
}

function Xa(d, f) {
    if (null == d)
        throw new TypeError(b[116]);
    if (typeof f !== b[86])
        throw new TypeError(f + b[145]);
    var e = d.length >>> a[0], c = a[0], l;
    if (arguments.length === a[5])
        l = arguments[2];
    else {
        for (; c < e && !(c in d);)
            c++;
        if (c >= e)
            throw new TypeError(b[285]);
        l = d[c++]
    }
    for (; c < e; c++)
        c in d && (l = f(l, d[c], c, d));
    return l
}

function get_e() {
    Va = [
        {
            "a": "STRING",
            "pc": "$b"
        },
        {
            "a": "STRING",
            "pc": "zb"
        },
        {
            "a": "NUMBER",
            "pc": "Ta"
        },
        {
            "a": "NUMBER",
            "pc": "bb"
        },
        {
            "a": "NUMBER",
            "pc": "Vb"
        },
        {
            "a": "BOOLEAN",
            "pc": "Pb"
        },
        {
            "a": "BOOLEAN",
            "pc": "Cb"
        },
        {
            "a": "BOOLEAN",
            "pc": "tb"
        },
        {
            "a": "BOOLEAN",
            "pc": "Ea"
        },
        {
            "a": "BOOLEAN",
            "pc": "Fb"
        },
        {
            "a": "STRING",
            "pc": "Va"
        },
        {
            "a": "STRING",
            "pc": "Ib"
        },
        {
            "a": "STRING",
            "pc": "eb"
        },
        {
            "u": true,
            "a": "HEX",
            "pc": "Jb"
        },
        {
            "a": "HEX",
            "u": true,
            "T": "CAT_CANVAS",
            "pc": "Qa"
        },
        {
            "a": "BOOLEAN",
            "u": true,
            "pc": "Da"
        },
        {
            "a": "BOOLEAN",
            "pc": "pb"
        },
        {
            "a": "BOOLEAN",
            "pc": "ob"
        },
        {
            "a": "BOOLEAN",
            "pc": "Yb"
        },
        {
            "a": "NUMBER",
            "pc": "Mb"
        },
        {
            "a": "BOOLEAN",
            "pc": "Ua"
        },
        {
            "a": "BOOLEAN",
            "pc": "xb"
        },
        {
            "a": "STRING",
            "pc": "Fa"
        },
        {
            "a": "STRING",
            "pc": "Ga"
        },
        {
            "a": "STRING",
            "pc": "Ha"
        },
        {
            "a": "STRING",
            "pc": "Ia"
        },
        {
            "a": "STRING",
            "pc": "Ab"
        },
        {
            "a": "STRING",
            "pc": "Sb"
        },
        {
            "a": "STRING",
            "pc": "ac"
        },
        {
            "a": "STRING",
            "pc": "Na"
        },
        {
            "a": "STRING",
            "pc": "Gb"
        },
        {
            "a": "STRING",
            "pc": "fb"
        },
        {
            "a": "NUMBER",
            "pc": "mb"
        },
        {
            "a": "ARRAY",
            "pc": "Nb"
        },
        {
            "a": "STRING",
            "Ja": true,
            "u": true,
            "pc": "La"
        }
    ]
    var e = []
    Va.forEach(function (d) {
        function q() {
            function a(b, q) {
                c[0];
                e.push(xa(b, ca[d.pc], !!q));
                // Eb++;
                // f()
            }

            try {
                // d.Ka(a)
                a(d.f)
            } catch (l) {
                a([], Error(b[106]))
            }
        }

        // d.u ? ya(q, a[0]) : q()
        q()
    })
    var Wa = Xa(wa(e), function (a, d) {
        a.push.apply(a, d);
        return a
    }, [])
    return Wa
}
Sa = /./
y = E(b[304])
function Oa(b) {
                    return w[c[98]](b) && w[c[98]](b).length || a[0]
                }
var Db = {
        nb: {
            f: function () {
                return !!Sa.Cc
            },
            a: B
        },
        hb: {
            f: function () {
                var a;
                try {
                    null[0]()
                } catch (f) {
                    a = f
                }
                return a && typeof a[c[2]] === b[265] ? [x[6], b[386], c[211], c[113], c[86]].filter(function (b) {
                    return ~a[c[2]].indexOf(b)
                })[0] || c[0] : c[0]
            },
            a: t
        },
        Eb: {
            f: function () {
                for (var d = [b[185], b[225], b[302], b[417], c[0], c[0], b[79], c[1], b[50], b[378], {
                    q: b[346],
                    n: function () {
                        try {
                            return y[b[346]](c[209]) === a[479] && y[b[229]](y[b[346]](c[252]))
                        } catch (d) {
                            return !1
                        }
                    }
                }, {
                    q: b[296],
                    n: function () {
                        try {
                            return y[b[296]](b[176]) === a[267] && y[b[229]](y[b[346]](c[252]))
                        } catch (d) {
                            return !1
                        }
                    }
                }, {
                    q: b[172],
                    n: function () {
                        try {
                            return y[b[172]](b[19]) === c[15]
                        } catch (a) {
                            return !1
                        }
                    }
                }, {
                    q: x[15],
                    n: function () {
                        try {
                            return y[x[15]](b[25]) === c[19]
                        } catch (a) {
                            return !1
                        }
                    }
                }, {
                    q: b[233],
                    n: function () {
                        try {
                            return y[b[233]](c[15]) === b[19]
                        } catch (a) {
                            return !1
                        }
                    }
                }, {
                    q: b[260],
                    n: function () {
                        try {
                            return y[b[260]](c[19]) === b[25]
                        } catch (a) {
                            return !1
                        }
                    }
                }, {
                    q: b[203],
                    n: function () {
                        try {
                            return y[b[203]](c[19]) === b[25]
                        } catch (a) {
                            return !1
                        }
                    }
                }, {
                    q: x[10],
                    n: function () {
                        try {
                            return y[x[10]](b[25]) === c[19]
                        } catch (a) {
                            return !1
                        }
                    }
                }, {
                    q: c[192],
                    n: function () {
                        try {
                            return y[c[192]](b[137]) === a[267]
                        } catch (d) {
                            return !1
                        }
                    }
                }, b[304]], f = a[0], e = d.length; f < e; f++) {
                    if (d[f].n)
                        if (d[f].n())
                            continue;
                        else
                            return f + a[675];
                    if (d[f] && !y[d[f]])
                        return f + a[675]
                }
                return a[0]
            },
            a: z
        },
        gb: {
            f: function () {
                var d;
                if (!(d = ja(hd, a[13], void 0)()))
                    a: {
                        for (var f in w)
                            if (w[f]) {
                                try {
                                    if (w[f][b[359]] && f[x[8]] && f[x[8]](/\$[a-z]dc_/)) {
                                        d = a[295];
                                        break a
                                    }
                                } catch (e) {
                                }
                                d = a[0];
                                break a
                            }
                        d = void 0
                    }
                if (!d)
                    try {
                        d = y[c[191]] && ~y[c[191]].toString().indexOf(b[381]) && a[296]
                    } catch (g) {
                        d = a[0]
                    }
                return d
            },
            a: z
        },
        Xb: {
            f: function () {
                return y[c[207]][c[31]] || y[b[305]][c[31]] || a[0]
            },
            a: z
        },
        wb: {
            f: function () {
                for (var d = !1, f = w[c[98]](b[26]), e = a[0], g = f.length; e < g; e++) {
                    var l = f[e][b[127]];
                    if (l && ~l.indexOf(c[244])) {
                        d = !0;
                        break
                    }
                }
                return d
            },
            a: B
        }
    },
    Bc = {
        sb: {
            f: function () {
                return Oa(b[202])
            },
            a: z
        },
        kb: {
            f: function () {
                return Oa(c[242])
            },
            a: z
        },
        vb: {
            f: function () {
                return Oa(b[175])
            },
            a: z
        },
        Ob: {
            f: function () {
                return Oa(b[26])
            },
            a: z
        },
        qb: {
            f: function () {
                return y.history.length || a[0]
            },
            a: z
        },
        Wb: {
            f: function () {
                return w[c[213]] || c[0]
            },
            a: t
        },
        yb: {
            f: function () {
                return w.Nc || c[0]
            },
            a: t
        },
        Tb: {
            f: function () {
                return (w[b[262]][c[26]] || w[b[262]][c[16]]).length || a[0]
            },
            a: z
        },
        rb: {
            f: function () {
                return w[b[262]][b[384]].length || a[0]
            },
            a: z
        },
        ub: {
            f: function () {
                return C[b[163]].$[0]
            },
            a: z
        },
        lb: {
            f: function () {
                return C[b[163]].$.slice(a[675])
            },
            a: H
        },
        Hb: {
            f: function () {
                var d = y[x[17]];
                if (d) {
                    var f = d[b[406]];
                    return [d[b[8]].type, f[x[11]] - f[b[158]], f[b[267]] - f[c[97]]]
                }
                return [a[0], a[0], a[0]]
            },
            a: H
        },
        Sa: {
            f: function () {
                return [y[b[99]] || w[b[262]][b[84]] || w[b[81]][b[84]], y[b[245]] || w[b[262]][b[173]] || w[b[81]][b[173]]]
            },
            a: H
        },
        Qb: {
            f: function () {
                return db() ? a[675] : a[1]
            },
            a: z
        },
        cc: {
            f: function () {
                return C[b[163]][b[316]].Ic
            },
            a: z
        }
    }

function baa(a) {
    var b = a ? Db : Ha(Db, Bc)
        , e = [];
    try {
        wa(Object.keys(b)).forEach(function (a) {
            var d = b[a].f();
            c[0];
            e.push.apply(e, xa(d, ca[a]))
        })
    } catch (q) {
    }
    return e
}

function get_d() {
    var f = $a();
    var e = get_e()
    var g = baa(!0);
    e = ja(lb, a[675], void 0)(f.concat(e, g));
    return e
}

get_d()