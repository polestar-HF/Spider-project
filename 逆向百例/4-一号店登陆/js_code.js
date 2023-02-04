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
// var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
BarProp = v_saf(function BarProp(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MutationObserver = v_saf(function MutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
RTCIceCandidate = v_saf(function RTCIceCandidate(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
XMLHttpRequest = v_saf(function XMLHttpRequest(){;})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TextMetrics = v_saf(function TextMetrics(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebKitMutationObserver = v_saf(function WebKitMutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
RTCSessionDescription = v_saf(function RTCSessionDescription(){;})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this.getRandomValues = function(){
    v_console_log('  [*] Crypto -> getRandomValues[func]')
    var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});}
  this.randomUUID = function(){
    v_console_log('  [*] Crypto -> randomUUID[func]')
    function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
    function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
    return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')}})
Option = v_saf(function Option(){;})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
RTCPeerConnection = v_saf(function RTCPeerConnection(){;}); _inherits(RTCPeerConnection, EventTarget)
RTCPeerConnectionIceEvent = v_saf(function RTCPeerConnectionIceEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(RTCPeerConnectionIceEvent, Event)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
webkitRTCPeerConnection = v_saf(function webkitRTCPeerConnection(){;}); _inherits(webkitRTCPeerConnection, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
BatteryManager = v_saf(function BatteryManager(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BatteryManager, EventTarget)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
KeyboardEvent = v_saf(function KeyboardEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(KeyboardEvent, UIEvent)
FocusEvent = v_saf(function FocusEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(FocusEvent, UIEvent)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLButtonElement = v_saf(function HTMLButtonElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLButtonElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLTextAreaElement = v_saf(function HTMLTextAreaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTextAreaElement, HTMLElement)
HTMLOptionElement = v_saf(function HTMLOptionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionElement, HTMLElement)
HTMLFormElement = v_saf(function HTMLFormElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLFormElement, HTMLElement)
HTMLSelectElement = v_saf(function HTMLSelectElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSelectElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
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
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLParagraphElement = v_saf(function HTMLParagraphElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLParagraphElement, HTMLElement)
HTMLSpanElement = v_saf(function HTMLSpanElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSpanElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMetaElement, HTMLElement)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLIElement, HTMLElement)
HTMLTableCellElement = v_saf(function HTMLTableCellElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableCellElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  appCodeName: {get(){ v_console_log("  [*] Navigator -> appCodeName[get]", "Mozilla");return "Mozilla" }},
  appName: {get(){ v_console_log("  [*] Navigator -> appName[get]", "Netscape");return "Netscape" }},
  appVersion: {get(){ v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36");return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36" }},
  hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 8);return 8 }},
  maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
  product: {get(){ v_console_log("  [*] Navigator -> product[get]", "Gecko");return "Gecko" }},
  productSub: {get(){ v_console_log("  [*] Navigator -> productSub[get]", "20030107");return "20030107" }},
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36" }},
  vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
  vendorSub: {get(){ v_console_log("  [*] Navigator -> vendorSub[get]", "");return "" }},
  doNotTrack: {get(){ v_console_log("  [*] Navigator -> doNotTrack[get]", {});return {} }},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  mimeTypes: {get(){ v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);return this._mimeTypes || [] }},
  getBattery: {value: v_saf(function getBattery(){v_console_log("  [*] Navigator -> getBattery[func]", [].slice.call(arguments));})},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BarProp.prototype, {
  visible: {get(){ v_console_log("  [*] BarProp -> visible[get]", true);return true }},
  [Symbol.toStringTag]: {value:"BarProp",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  type: {get(){ v_console_log("  [*] Event -> type[get]", "blur");return "blur" }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 28307.899999976158);return 28307.899999976158 }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 2);return 2 }},
  currentTarget: {get(){ v_console_log("  [*] Event -> currentTarget[get]", {});return {} }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", false);return false }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", false);return false }},
  srcElement: {get(){ v_console_log("  [*] Event -> srcElement[get]", {});return {} }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCIceCandidate.prototype, {
  candidate: {get(){ v_console_log("  [*] RTCIceCandidate -> candidate[get]", "candidate:1019731727 1 udp 2113937151 a6a83776-1b37-4d7c-a6be-43e778d07e1c.local 58285 typ host generation 0 ufrag f/zZ network-cost 999");return "candidate:1019731727 1 udp 2113937151 a6a83776-1b37-4d7c-a6be-43e778d07e1c.local 58285 typ host generation 0 ufrag f/zZ network-cost 999" }},
  [Symbol.toStringTag]: {value:"RTCIceCandidate",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  open: {value: v_saf(function open(){v_console_log("  [*] XMLHttpRequest -> open[func]", [].slice.call(arguments));})},
  send: {value: v_saf(function send(){v_console_log("  [*] XMLHttpRequest -> send[func]", [].slice.call(arguments));})},
  setRequestHeader: {value: v_saf(function setRequestHeader(){v_console_log("  [*] XMLHttpRequest -> setRequestHeader[func]", [].slice.call(arguments));})},
  onreadystatechange: {set(){ v_console_log("  [*] XMLHttpRequest -> onreadystatechange[set]", [].slice.call(arguments)); }},
  readyState: {get(){ v_console_log("  [*] XMLHttpRequest -> readyState[get]", 4);return 4 }},
  timeout: {set(){ v_console_log("  [*] XMLHttpRequest -> timeout[set]", [].slice.call(arguments));return 4 }},
  status: {get(){ v_console_log("  [*] XMLHttpRequest -> status[get]", 200);return 200 }},
  responseText: {get(){ v_console_log("  [*] XMLHttpRequest -> responseText[get]", "{\"errorCode\":7}");return "{\"errorCode\":7}" }},
  statusText: {get(){ v_console_log("  [*] XMLHttpRequest -> statusText[get]", "");return "" }},
  getAllResponseHeaders: {value: v_saf(function getAllResponseHeaders(){v_console_log("  [*] XMLHttpRequest -> getAllResponseHeaders[func]", [].slice.call(arguments));})},
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  __uniqueStateKey: {"value":true,"writable":true,"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
  textBaseline: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); }},
  fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
  measureText: {value: v_saf(function measureText(){v_console_log("  [*] CanvasRenderingContext2D -> measureText[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TextMetrics.prototype, {
  width: {get(){ v_console_log("  [*] TextMetrics -> width[get]", 150);return 150 }},
  [Symbol.toStringTag]: {value:"TextMetrics",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 2);return 2 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebKitMutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"WebKitMutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCSessionDescription.prototype, {
  sdp: {get(){ v_console_log("  [*] RTCSessionDescription -> sdp[get]", "v=0\r\no=- 2616385838200353305 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:f/zZ\r\na=ice-pwd:FR84euh4TFVy8e6pSBRDlZUx\r\na=ice-options:trickle\r\na=fingerprint:sha-256 DE:EA:4B:69:AF:FB:CA:78:D9:C6:5A:B1:BA:8F:04:BA:0C:0E:B9:7F:DA:CA:FA:8B:C6:02:23:FE:05:7D:CF:C5\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n");return "v=0\r\no=- 2616385838200353305 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:f/zZ\r\na=ice-pwd:FR84euh4TFVy8e6pSBRDlZUx\r\na=ice-options:trickle\r\na=fingerprint:sha-256 DE:EA:4B:69:AF:FB:CA:78:D9:C6:5A:B1:BA:8F:04:BA:0C:0E:B9:7F:DA:CA:FA:8B:C6:02:23:FE:05:7D:CF:C5\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }},
  type: {get(){ v_console_log("  [*] RTCSessionDescription -> type[get]", "offer");return "offer" }},
  [Symbol.toStringTag]: {value:"RTCSessionDescription",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  length: {get(){ v_console_log("  [*] MimeTypeArray -> length[get]", 2);return 2 }},
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(History.prototype, {
  length: {get(){ v_console_log("  [*] History -> length[get]", 2);return 2 }},
  [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); }},
  cssFloat: {get(){ v_console_log("  [*] CSSStyleDeclaration -> cssFloat[get]", "left");return "left" }},
  getPropertyValue: {value: v_saf(function getPropertyValue(){v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Crypto.prototype, {
  [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Option.prototype, {
  selected: {get(){ v_console_log("  [*] Option -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] Option -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"Option",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "INPUT");return "INPUT" }},
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  compareDocumentPosition: {value: v_saf(function compareDocumentPosition(){v_console_log("  [*] Node -> compareDocumentPosition[func]", [].slice.call(arguments));})},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  cloneNode: {value: v_saf(function cloneNode(){v_console_log("  [*] Node -> cloneNode[func]", [].slice.call(arguments));})},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
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
  availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1040);return 1040 }},
  availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1920);return 1920 }},
  pixelDepth: {get(){ v_console_log("  [*] Screen -> pixelDepth[get]", 24);return 24 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  availLeft: {get(){ v_console_log("  [*] Screen -> availLeft[get]", 0);return 0 }},
  availTop: {get(){ v_console_log("  [*] Screen -> availTop[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCPeerConnection.prototype, {
  onicecandidate: {set(){ v_console_log("  [*] RTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
  createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] RTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
  createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] RTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
  setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] RTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"RTCPeerConnection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCPeerConnectionIceEvent.prototype, {
  candidate: {get(){ v_console_log("  [*] RTCPeerConnectionIceEvent -> candidate[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"RTCPeerConnectionIceEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  which: {get(){ v_console_log("  [*] UIEvent -> which[get]", 0);return 0 }},
  view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitRTCPeerConnection.prototype, {
  onicecandidate: {set(){ v_console_log("  [*] webkitRTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
  createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] webkitRTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
  createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] webkitRTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
  setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] webkitRTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"webkitRTCPeerConnection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  ontimeout: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments)); }},
  onerror: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BatteryManager.prototype, {
  charging: {get(){ v_console_log("  [*] BatteryManager -> charging[get]", true);return true }},
  level: {get(){ v_console_log("  [*] BatteryManager -> level[get]", 0.99);return 0.99 }},
  chargingTime: {get(){ v_console_log("  [*] BatteryManager -> chargingTime[get]", null);return null }},
  dischargingTime: {get(){ v_console_log("  [*] BatteryManager -> dischargingTime[get]", null);return null }},
  [Symbol.toStringTag]: {value:"BatteryManager",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "loading");return "loading" }},
  body: {get(){ v_console_log("  [*] Document -> body[get]", {});return {} }},
  forms: {get(){ v_console_log("  [*] Document -> forms[get]", {});return {} }},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "");return "" }},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  createComment: {value: v_saf(function createComment(){v_console_log("  [*] Document -> createComment[func]", [].slice.call(arguments));})},
  createDocumentFragment: {value: v_saf(function createDocumentFragment(){v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));})},
  compatMode: {get(){ v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");return "CSS1Compat" }},
  activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
  onfocus: {get(){ v_console_log("  [*] Document -> onfocus[get]", {});return {} }},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  id: {get(){ v_console_log("  [*] Element -> id[get]", "login_button");return "login_button" },set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return "login_button" }},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this._tagName);return this._tagName }},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "ipt ipt_username");return "ipt ipt_username" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "ipt ipt_username" }},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));return "ipt ipt_username" }},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  matches: {value: v_saf(function matches(){v_console_log("  [*] Element -> matches[func]", [].slice.call(arguments));})},
  outerHTML: {get(){ v_console_log("  [*] Element -> outerHTML[get]", "<nav></nav>");return "<nav></nav>" }},
  attributes: {get(){ v_console_log("  [*] Element -> attributes[get]", {});return {} }},
  getElementsByClassName: {value: v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})},
  removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  clientX: {get(){ v_console_log("  [*] MouseEvent -> clientX[get]", 1200);return 1200 }},
  clientY: {get(){ v_console_log("  [*] MouseEvent -> clientY[get]", 198);return 198 }},
  button: {get(){ v_console_log("  [*] MouseEvent -> button[get]", 0);return 0 }},
  movementX: {get(){ v_console_log("  [*] MouseEvent -> movementX[get]", 1);return 1 }},
  movementY: {get(){ v_console_log("  [*] MouseEvent -> movementY[get]", -1);return -1 }},
  pageX: {get(){ v_console_log("  [*] MouseEvent -> pageX[get]", 1200);return 1200 }},
  pageY: {get(){ v_console_log("  [*] MouseEvent -> pageY[get]", 398);return 398 }},
  offsetX: {get(){ v_console_log("  [*] MouseEvent -> offsetX[get]", 124);return 124 }},
  offsetY: {get(){ v_console_log("  [*] MouseEvent -> offsetY[get]", 29);return 29 }},
  toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
  screenY: {get(){ v_console_log("  [*] MouseEvent -> screenY[get]", 269);return 269 }},
  screenX: {get(){ v_console_log("  [*] MouseEvent -> screenX[get]", 1200);return 1200 }},
  fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
  buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
  shiftKey: {get(){ v_console_log("  [*] MouseEvent -> shiftKey[get]", false);return false }},
  relatedTarget: {get(){ v_console_log("  [*] MouseEvent -> relatedTarget[get]", {});return {} }},
  metaKey: {get(){ v_console_log("  [*] MouseEvent -> metaKey[get]", false);return false }},
  ctrlKey: {get(){ v_console_log("  [*] MouseEvent -> ctrlKey[get]", false);return false }},
  altKey: {get(){ v_console_log("  [*] MouseEvent -> altKey[get]", false);return false }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(KeyboardEvent.prototype, {
  key: {get(){ v_console_log("  [*] KeyboardEvent -> key[get]", "3");return "3" }},
  ctrlKey: {get(){ v_console_log("  [*] KeyboardEvent -> ctrlKey[get]", false);return false }},
  metaKey: {get(){ v_console_log("  [*] KeyboardEvent -> metaKey[get]", false);return false }},
  altKey: {get(){ v_console_log("  [*] KeyboardEvent -> altKey[get]", false);return false }},
  shiftKey: {get(){ v_console_log("  [*] KeyboardEvent -> shiftKey[get]", false);return false }},
  keyCode: {get(){ v_console_log("  [*] KeyboardEvent -> keyCode[get]", 51);return 51 }},
  charCode: {get(){ v_console_log("  [*] KeyboardEvent -> charCode[get]", 0);return 0 }},
  DOM_KEY_LOCATION_STANDARD: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  DOM_KEY_LOCATION_LEFT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOM_KEY_LOCATION_RIGHT: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOM_KEY_LOCATION_NUMPAD: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"KeyboardEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(FocusEvent.prototype, {
  relatedTarget: {get(){ v_console_log("  [*] FocusEvent -> relatedTarget[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"FocusEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  onerror: {set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments)); }},
  onload: {set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments)); }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 0);return 0 }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 0);return 0 }},
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this._style);return this._style }},
  focus: {value: v_saf(function focus(){v_console_log("  [*] HTMLElement -> focus[func]", [].slice.call(arguments));})},
  onfocus: {get(){ v_console_log("  [*] HTMLElement -> onfocus[get]", {});return {} }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  href: {set(){ v_console_log("  [*] HTMLAnchorElement -> href[set]", [].slice.call(arguments)); }},
  host: {get(){ v_console_log("  [*] HTMLAnchorElement -> host[get]", "passport.yhd.com");return "passport.yhd.com" }},
  protocol: {get(){ v_console_log("  [*] HTMLAnchorElement -> protocol[get]", "https:");return "https:" }},
  hostname: {get(){ v_console_log("  [*] HTMLAnchorElement -> hostname[get]", "passport.yhd.com");return "passport.yhd.com" }},
  port: {get(){ v_console_log("  [*] HTMLAnchorElement -> port[get]", "");return "" }},
  pathname: {get(){ v_console_log("  [*] HTMLAnchorElement -> pathname[get]", "/publicPassport/login.do");return "/publicPassport/login.do" }},
  search: {get(){ v_console_log("  [*] HTMLAnchorElement -> search[get]", "");return "" }},
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
  toDataURL: {value: v_saf(function toDataURL(){v_console_log("  [*] HTMLCanvasElement -> toDataURL[func]", [].slice.call(arguments));return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"})},
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  name: {get(){ v_console_log("  [*] HTMLInputElement -> name[get]", "credentials.password");return "credentials.password" }},
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "12345678");return "12345678" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "12345678" }},
  type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "text");return "text" },set(){ v_console_log("  [*] HTMLInputElement -> type[set]", [].slice.call(arguments));return "text" }},
  checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", true);return true },set(){ v_console_log("  [*] HTMLInputElement -> checked[set]", [].slice.call(arguments));return true }},
  disabled: {get(){ v_console_log("  [*] HTMLInputElement -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLButtonElement.prototype, {
  name: {get(){ v_console_log("  [*] HTMLButtonElement -> name[get]", "");return "" }},
  disabled: {get(){ v_console_log("  [*] HTMLButtonElement -> disabled[get]", true);return true },set(){ v_console_log("  [*] HTMLButtonElement -> disabled[set]", [].slice.call(arguments));return true }},
  [Symbol.toStringTag]: {value:"HTMLButtonElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments)); }},
  async: {set(){ v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments)); }},
  src: {set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTextAreaElement.prototype, {
  defaultValue: {get(){ v_console_log("  [*] HTMLTextAreaElement -> defaultValue[get]", "x");return "x" }},
  [Symbol.toStringTag]: {value:"HTMLTextAreaElement",writable:false,enumerable:false,configurable:true},
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
Object.defineProperties(HTMLBodyElement.prototype, {
  onfocus: {get(){ v_console_log("  [*] HTMLBodyElement -> onfocus[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  href: {set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments)); }},
  rel: {set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments)); }},
  type: {set(){ v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
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
Object.defineProperties(Performance.prototype, {
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
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
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLParagraphElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLParagraphElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSpanElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLSpanElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMetaElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLMetaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLIElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableCellElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableCellElement",writable:false,enumerable:false,configurable:true},
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
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.locationbar = v_new(BarProp)
window.menubar = v_new(BarProp)
window.personalbar = v_new(BarProp)
window.scrollbars = v_new(BarProp)
window.statusbar = v_new(BarProp)
window.toolbar = v_new(BarProp)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLAnchorElement":["a"],"HTMLCanvasElement":["canvas"],"HTMLInputElement":["input"],"HTMLButtonElement":["button"],"HTMLScriptElement":["script"],"HTMLTextAreaElement":["textarea"],"HTMLOptionElement":["option"],"HTMLFormElement":["form"],"HTMLSelectElement":["select"],"HTMLBodyElement":["body"],"HTMLLinkElement":["link"],"HTMLImageElement":["img"],"HTMLMediaElement":[]}
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

init_cookie("msessionid=7HXGY4X266S45WJR5E75927UT66EV2KJFHHY; rURL=http%3A%2F%2Fwww.yhd.com; _c_id=3jmfwhjvpxujxpz2zu61652881440390tpxn; _s_id=i9tkt5h1rdvcxxbvlqd1652881440391tt2i; jab-requestId=31c68a559b344ac1b608c7cc25929b84")
v_hook_href(window.location, 'location', "https://passport.yhd.com/passport/login_input.do")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
function v_getele(name, func){
  if(name == "un" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "check_agreement" && func == "getElementById"){ return v_new(HTMLAnchorElement) }
  if(name == "vcd_div" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "error_tips" && func == "getElementById"){ return v_new(HTMLParagraphElement) }
  if(name == "vcd" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "img" && func == "getElementById"){ return v_new(HTMLImageElement) }
  if(name == "login_button" && func == "getElementById"){ return v_new(HTMLButtonElement) }
  if(name == "pwd" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "validateSig" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "login_source" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "isAutoLogin" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "code_right" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  return null
}
function v_geteles(name, func){
  if(name == "script" && func == "querySelectorAll"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [] }
  if(name == "meta" && func == "querySelectorAll"){ return [v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  if(name == "[selected]" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == "[id~=sizzle1652884476302-]" && func == "querySelectorAll"){ return [v_new(HTMLSelectElement)] }
  if(name == ":checked" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == "a#sizzle1652884476302+*" && func == "querySelectorAll"){ return [v_new(HTMLSelectElement)] }
  if(name == ":enabled" && func == "querySelectorAll"){ return [v_new(HTMLInputElement)] }
  if(name == "a" && func == "getElementsByTagName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "input" && func == "getElementsByTagName"){ return [v_new(HTMLInputElement)] }
  if(name == ".regist_header_right " && func == "querySelectorAll"){ return [v_new(HTMLDivElement)] }
  if(name == "help_wrap" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "ipt_username" && func == "getElementsByClassName"){ return [v_new(HTMLInputElement)] }
  if(name == "login_form" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "ipt_password" && func == "getElementsByClassName"){ return [v_new(HTMLInputElement)] }
  if(name == "ipt_code" && func == "getElementsByClassName"){ return [v_new(HTMLInputElement)] }
  if(name == "joint_landing_wrap" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "li" && func == "getElementsByTagName"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == "#pwd,#vcd,#login_button" && func == "querySelectorAll"){ return [v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLButtonElement)] }
  if(name == "two_dimension_code" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == ".login_switch .static_pc" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement)] }
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "td" && func == "getElementsByTagName"){ return [v_new(HTMLTableCellElement),v_new(HTMLTableCellElement)] }
  if(name == "[_input]" && func == "querySelectorAll"){ return [v_new(HTMLInputElement),v_new(HTMLInputElement)] }
  if(name == "[_submit]" && func == "querySelectorAll"){ return [v_new(HTMLButtonElement)] }
  if(name == "service_agreement" && func == "getElementsByClassName"){ return [v_new(HTMLParagraphElement)] }
  return null
}
v_new_toggle = undefined;
var Token;
!function (t) {

  window["Murmur"] = function (t, h, i, s) {
    function r() {}

    r["prototype"] = {
      "x64Add": function (t, h) {
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        h = [h[0] >>> 16, 65535 & h[0], h[1] >>> 16, 65535 & h[1]];
        var i = [0, 0, 0, 0];
        i[3] += t[3] + h[3];
        i[2] += i[3] >>> 16;
        i[3] &= 65535;
        i[2] += t[2] + h[2];
        i[1] += i[2] >>> 16;
        i[2] &= 65535;
        i[1] += t[1] + h[1];
        i[0] += i[1] >>> 16;
        i[1] &= 65535;
        i[0] += t[0] + h[0];
        i[0] &= 65535;
        return [i[0] << 16 | i[1], i[2] << 16 | i[3]];
      },
      "x64Multiply": function (t, h) {
        t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        h = [h[0] >>> 16, 65535 & h[0], h[1] >>> 16, 65535 & h[1]];
        var i = [0, 0, 0, 0];
        i[3] += t[3] * h[3];
        i[2] += i[3] >>> 16;
        i[3] &= 65535;
        i[2] += t[2] * h[3];
        i[1] += i[2] >>> 16;
        i[2] &= 65535;
        i[2] += t[3] * h[2];
        i[1] += i[2] >>> 16;
        i[2] &= 65535;
        i[1] += t[1] * h[3];
        i[0] += i[1] >>> 16;
        i[1] &= 65535;
        i[1] += t[2] * h[2];
        i[0] += i[1] >>> 16;
        i[1] &= 65535;
        i[1] += t[3] * h[1];
        i[0] += i[1] >>> 16;
        i[1] &= 65535;
        i[0] += t[0] * h[3] + t[1] * h[2] + t[2] * h[1] + t[3] * h[0];
        i[0] &= 65535;
        return [i[0] << 16 | i[1], i[2] << 16 | i[3]];
      },
      "x64Rotl": function (t, h) {
        return 32 == (h %= 64) ? [t[1], t[0]] : h < 32 ? [t[0] << h | t[1] >>> 32 - h, t[1] << h | t[0] >>> 32 - h] : (h -= 32, [t[1] << h | t[0] >>> 32 - h, t[0] << h | t[1] >>> 32 - h]);
      },
      "x64LeftShift": function (t, h) {
        return 0 == (h %= 64) ? t : h < 32 ? [t[0] << h | t[1] >>> 32 - h, t[1] << h] : [t[1] << h - 32, 0];
      },
      "x64Xor": function (t, h) {
        return [t[0] ^ h[0], t[1] ^ h[1]];
      },
      "x64Fmix": function (t) {
        t = this["x64Xor"](t, [0, t[0] >>> 1]);
        t = this["x64Multiply"](t, [4283543511, 3981806797]);
        t = this["x64Xor"](t, [0, t[0] >>> 1]);
        t = this["x64Multiply"](t, [3301882366, 444984403]);
        return t = this["x64Xor"](t, [0, t[0] >>> 1]);
      },
      "x64hash128": function (t, h) {
        t = t || "";
        h = h || 0;

        for (var i = t["length"] % 16, s = t["length"] - i, r = [0, h], o = [0, h], e = [0, 0], x = [0, 0], c = [2277735313, 289559509], a = [1291169091, 658871167], d = 0; d < s; d += 16) {
          e = [255 & t["charCodeAt"](d + 4) | (255 & t["charCodeAt"](d + 5)) << 8 | (255 & t["charCodeAt"](d + 6)) << 16 | (255 & t["charCodeAt"](d + 7)) << 24, 255 & t["charCodeAt"](d) | (255 & t["charCodeAt"](d + 1)) << 8 | (255 & t["charCodeAt"](d + 2)) << 16 | (255 & t["charCodeAt"](d + 3)) << 24];
          x = [255 & t["charCodeAt"](d + 12) | (255 & t["charCodeAt"](d + 13)) << 8 | (255 & t["charCodeAt"](d + 14)) << 16 | (255 & t["charCodeAt"](d + 15)) << 24, 255 & t["charCodeAt"](d + 8) | (255 & t["charCodeAt"](d + 9)) << 8 | (255 & t["charCodeAt"](d + 10)) << 16 | (255 & t["charCodeAt"](d + 11)) << 24];
          e = this["x64Multiply"](e, c);
          e = this["x64Rotl"](e, 31);
          e = this["x64Multiply"](e, a);
          r = this["x64Xor"](r, e);
          r = this["x64Rotl"](r, 27);
          r = this["x64Add"](r, o);
          r = this["x64Add"](this["x64Multiply"](r, [0, 5]), [0, 1390208809]);
          x = this["x64Multiply"](x, a);
          x = this["x64Rotl"](x, 33);
          x = this["x64Multiply"](x, c);
          o = this["x64Xor"](o, x);
          o = this["x64Rotl"](o, 31);
          o = this["x64Add"](o, r);
          o = this["x64Add"](this["x64Multiply"](o, [0, 5]), [0, 944331445]);
        }

        e = [0, 0];
        x = [0, 0];

        switch (i) {
          case 15:
            x = this["x64Xor"](x, this["x64LeftShift"]([0, t["charCodeAt"](d + 14)], 48));

          case 14:
            x = this["x64Xor"](x, this["x64LeftShift"]([0, t["charCodeAt"](d + 13)], 40));

          case 13:
            x = this["x64Xor"](x, this["x64LeftShift"]([0, t["charCodeAt"](d + 12)], 32));

          case 12:
            x = this["x64Xor"](x, this["x64LeftShift"]([0, t["charCodeAt"](d + 11)], 24));

          case 11:
            x = this["x64Xor"](x, this["x64LeftShift"]([0, t["charCodeAt"](d + 10)], 16));

          case 10:
            x = this["x64Xor"](x, this["x64LeftShift"]([0, t["charCodeAt"](d + 9)], 8));

          case 9:
            x = this["x64Xor"](x, [0, t["charCodeAt"](d + 8)]);
            x = this["x64Multiply"](x, a);
            x = this["x64Rotl"](x, 33);
            x = this["x64Multiply"](x, c);
            o = this["x64Xor"](o, x);

          case 8:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 7)], 56));

          case 7:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 6)], 48));

          case 6:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 5)], 40));

          case 5:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 4)], 32));

          case 4:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 3)], 24));

          case 3:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 2)], 16));

          case 2:
            e = this["x64Xor"](e, this["x64LeftShift"]([0, t["charCodeAt"](d + 1)], 8));

          case 1:
            e = this["x64Xor"](e, [0, t["charCodeAt"](d)]);
            e = this["x64Multiply"](e, c);
            e = this["x64Rotl"](e, 31);
            e = this["x64Multiply"](e, a);
            r = this["x64Xor"](r, e);
        }

        r = this["x64Xor"](r, [0, t["length"]]);
        o = this["x64Xor"](o, [0, t["length"]]);
        r = this["x64Add"](r, o);
        o = this["x64Add"](o, r);
        r = this["x64Fmix"](r);
        o = this["x64Fmix"](o);
        r = this["x64Add"](r, o);
        o = this["x64Add"](o, r);
        return ("00000000" + (r[0] >>> 0)["toString"](16))["slice"](-8) + ("00000000" + (r[1] >>> 0)["toString"](16))["slice"](-8) + ("00000000" + (o[0] >>> 0)["toString"](16))["slice"](-8) + ("00000000" + (o[1] >>> 0)["toString"](16))["slice"](-8);
      },
      "hash": function (t) {
        return this["x64hash128"](t, 31);
      }
    };
    return new r();
  }(window, document, navigator, setTimeout);
}();
!function () {
  (function () {
    function d(f, g, h) {
      function k(p, q) {
        if (!g[p]) {
          if (!f[p]) {
            var v = "1|4|2|0|3"["split"]('|');
            var w = 0;
            var y = typeof require == "function" && require;
            if (!q && y) return y(p, true);
            if (l) return l(p, true);
            var x = new Error("Cannot find module '" + p + "'");
            x["code"] = "MODULE_NOT_FOUND";
            throw x;
          }

          var z = g[p] = {
            'exports': {}
          };
          f[p][0]["call"](z["exports"], function (A) {
            var B = f[p][1][A];
            return k(B ? B : A);
          }, z, z["exports"], d, f, g, h);
        }

        return g[p]["exports"];
      }

      var l = typeof require == "function" && require;

      for (var m = 0; m < h["length"]; m++) {
        k(h[m]);
      }

      return k;
    }

    return d;
  })()({
    1: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        'use strict';

        var w = c(7);
        var x = w["ism"]();
        var y = g;
        var z = h;
        var B = [];
        var C = [];
        var D = 0;
        var E = [];
        var F = {};
        var G = '';
        var H = new n()["getTime"]();
        var I = {};
        var J = {};
        var K = '';
        var L = 0;
        var M = [];

        function N() {}

        o["prototype"]["indexOf"] = o["prototype"]["indexOf"] || function (au) {
          for (var av = 0; av < this["length"]; av++) {
            if (this[av] === au) {
              return av;
            }
          }

          return -1;
        };

        var O = ["click", "mousemove", "keydown", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchend", "touchcancel", "focus", "blur", "mousedown"];
        var P = ["resize", "orientationchange", "mousewheel", "DOMMouseScroll", "scroll"];
        var Q = ["click", "mousedown", "mousemove", "keydown", "touchstart", "touchmove"];
        var R = O["concat"](P);
        var S = 0;
        var T = false;
        var U = 0;
        var V = 0;
        var W = 0;
        var X = [1000, -1000];
        var Y = [1000, -1000];
        var Z = 0;
        var a0 = 0;
        var a1 = false;
        var a2 = [1000, -1000];
        var a3 = [1000, -1000];
        var a4 = [1000, -1000];

        if (g["DeviceOrientationEvent"]) {
          T = true;
          g["addEventListener"]("deviceorientation", function (au) {
            try {
              var av = "1|4|0|3|2"["split"]('|');
              var aw = 0;
              S++;

              if (au["beta"] == null || au["gamma"] == null) {
                U++;
                return;
              }

              if (au["absolute"]) {
                V++;
              } else {
                W++;
              }

              X = a5(au["beta"], X);
              Y = a5(au["gamma"], Y);
            } catch (ax) {}
          }, true);
        }

        if (g["DeviceMotionEvent"]) {
          a1 = true;
          g["addEventListener"]("devicemotion", function (au) {
            var av = "5|7|4|2|1|6|8|0|3"["split"]('|');
            var aw = 0;
            Z++;
            var aA = au["accelerationIncludingGravity"];
            var az = aA['x'];
            var ay = aA['y'];
            var ax = aA['z'];

            if (az == null || ay == null || ax == null) {
              a0++;
              return;
            }

            a2 = a5(az, a2);
            a3 = a5(az, a3);
            a4 = a5(az, a4);
          }, true);
        }

        function a5(au, av) {
          av[0] = s["min"](au, av[0]);
          av[1] = s["max"](au, av[1]);
          return av;
        }

        function a6(au) {
          var av = R["indexOf"](au);
          return av;
        }

        function a7() {
          return u(new n()["getTime"]() - H);
        }

        function a8(au) {
          if (event["touches"] && event["touches"]["length"] > 0) {
            var av = event["touches"][0];
            return u(av["pageX"]) + ',' + u(av["pageY"]);
          } else {
            return '';
          }
        }

        function a9(au) {
          if (au["offsetX"] != undefined && au["offsetY"] != undefined) {
            return u(au["offsetX"]) + ',' + u(au["offsetY"]);
          }

          return '';
        }

        function aa(au) {
          var av = '';

          try {
            if (au["pageX"] != undefined && au["pageY"] != undefined) {
              av = u(au["pageX"]) + ',' + u(au["pageY"]);
            } else if (au["clientX"] != undefined && au["clientX"] != undefined) {
              var aw = z["documentElement"];
              var ax = z["body"];
              var ay = event["clientX"] + (aw && aw["scrollLeft"] || ax && ax["scrollLeft"] || 0) - (aw && aw["clientLeft"] || ax && ax["clientLeft"] || 0);
              var az = event["clientY"] + (aw && aw["scrollTop"] || ax && ax["scrollTop"] || 0) - (aw && aw["clientTop"] || ax && ax["clientTop"] || 0);
              av = u(ay)["toString"]() + '-' + u(az)["toString"]();
            }
          } catch (aA) {
            av = "-1,-1";
          }

          return av;
        }

        function ab(au, av) {
          var aw = "0|2|4|3|1"["split"]('|');
          var ax = 0;
          var ay = {
            'mutWK': function (aC, aD) {
              return aC != aD;
            },
            'jNgCd': "focus",
            'GtsSO': "blur",
            'qJTmg': "mousewheel",
            'WOuRc': "DOMMouseScroll",
            'QGVSO': "scroll",
            'SpJHo': "resize",
            'pHoxB': "orientationchange",
            'OrqZS': function (aC, aD) {
              return aC + aD;
            },
            'GvXKN': "keydown",
            'nnoMa': "touch",
            'aOJRK': function (aC, aD) {
              return aC(aD);
            },
            'DDjyr': function (aC, aD) {
              return aC(aD);
            },
            'ctMrP': function (aC, aD) {
              return aC + aD;
            },
            'vOkjV': function (aC, aD) {
              return aC(aD);
            }
          };

          function az(aC) {
            var aD = '';
            var aE = aC["type"];

            if (["focus", "blur", "mousewheel", "DOMMouseScroll", "scroll"]["indexOf"](aE) != -1) {
              aD = '';
            } else if (["resize", "orientationchange"]["indexOf"](aE) != -1) {
              aD = (g["innerWidth"] || 0) + ',' + (g["innerHeight"] || 0);
            } else if (aE == "keydown") {
              var aF = aC["keyCode"] ? aC["keyCode"] + '' : '';
              aD = ['8', '9', '46', '13']["indexOf"](aF) != -1 ? aF : '';
            } else if (aE["indexOf"]("touch") != -1) {
              aD = a8(aC) + '|' + a9(aC);
            } else {
              aD = aa(aC) + '|' + a9(aC);
            }

            return aD;
          }

          var aB = a7();
          var aA = az(au);
          return {
            'et': au["type"],
            'to': aB,
            'ed': aA,
            'id': av,
            'it': au["isTrusted"]
          };
        }

        function ac(au, av, aw, ax, ay, az) {
          var aA = "1|0|3|5|4|2|6"["split"]('|');
          var aB = 0;
          var aD = F[aw] ? true : false;
          var aC = G == ax;
          var aF = av["indexOf"](au["type"]) != -1;

          if (!aD || !aC || !aF) {
            return false;
          }

          var aG = F[aw]["eti"];
          var aE = u((aG - H) / az) === u((ay - H) / az);
          return aE;
        }

        var ad = [];

        function ae(au) {
          var av = au["target"] || au["srcElement"];
          var aw = false;

          for (var ax = 0; ax < ad["length"]; ax++) {
            if (av == ad[ax]) {
              aw = true;
            }
          }

          return aw;
        }

        function af(au, av) {
          var aw = ["mousemove", "mousedown", "mouseenter", "touchmove", "touchstart"];

          if (!K && au["type"] == "mousemove") {
            K = av;
          }

          if (K && av != K && aw["indexOf"](au["type"]) != -1) {
            M["push"](K + ':' + L);
            K = av;
            L = 0;
          }

          if (au["type"] == "mousemove") {
            L++;
          }
        }

        function ag() {
          var au = [];
          au = au["concat"](M);

          if (L > 0 && K) {
            au["push"](K + ':' + L);
          }

          return au;
        }

        function ah(au, av, aw) {
          w["ael"](au, av, function (ay) {
            var az = "3|7|12|5|1|4|10|13|0|9|8|6|11|2"["split"]('|');
            var aA = 0;
            var aC = ay || g["event"];
            var aE = new n()["getTime"]();
            var aN = aw + '_' + aC["type"];
            var aD = ae(aC);

            if (au == h && aD) {
              return;
            }

            af(aC, aw);

            if (aC["type"] == "mousemove") {
              var aF = "4|1|3|2|0"["split"]('|');
              var aG = 0;
              var aM = I[aw] || 0;
              I[aw] = aM + 1;
              var aL = s["abs"](aC["movementX"]);
              var aK = s["abs"](aC["movementY"]);

              if (aL != undefined && aK != undefined) {
                var aH = J[aw] || "0-0";
                var aI = u(aH["split"]('-')[0]);
                var aJ = u(aH["split"]('-')[1]);

                if (aL + aK > aI + aJ) {
                  J[aw] = aL + '-' + aJ;
                }
              }
            }

            if (x && aC["type"] == "mousemove" || E["length"] > 1000) {
              D++;
              return;
            }

            var aB = E["length"] < 30 ? 10 : E["length"] < 50 ? 100 : 1000;

            if (ac(aC, ["mousemove", "touchmove"], aN, aw, aE, aB) || ac(aC, ["resize", "scroll", "mousewheel", "DOMMouseScroll"], aN, aw, aE, 2000)) {
              D++;
              return;
            }

            G = aw;
            F[aN] = {
              'eti': aE,
              'et': aC["type"]
            };
            E["push"](ab(aC, aw));

            if (N) {
              N(aC);
            }
          });
        }

        function ai() {
          var au = [];

          for (var av = 0; av < B["length"]; av++) {
            var aw = B[av];
            var ax = aw["value"] || '';
            au["push"](av + ':' + ax["length"]);
          }

          return au;
        }

        function aj() {
          function au(aA) {
            return aA == undefined ? '' : u(aA);
          }

          var av = [];

          for (var aw = 0; aw < B["length"]; aw++) {
            var ax = B[aw];
            av["push"](aw + ':' + au(ax["offsetWidth"]) + '-' + au(ax["offsetHeight"]));
          }

          for (var aw = 0; aw < C["length"]; aw++) {
            var ay = C[aw];
            var az = 5 + aw;
            av["push"](az + ':' + au(ay["offsetWidth"]) + '-' + au(ay["offsetHeight"]));
          }

          return av;
        }

        function ak(au) {
          var av = 800;

          if (B["length"] != 0) {
            av = 800;
          } else if (C["length"] != 0) {
            av = 500;
          } else if (ad["length"] == 0) {
            av = 200;
          }

          var aw = E["slice"](0, av);
          var ax = 0;
          var ay = [];

          for (var az = 0; az < aw["length"]; az++) {
            var aA = az == 0 ? 0 : aw[az - 1]['to'];
            var aB = aw[az];
            var aC = a6(aB['et']);
            var aD = aB['to'] - aA;

            if (aD < 0) {
              ax++;
              continue;
            }

            var aE = aB['ed'];
            var aF = aB['id'];
            var aG = aB['it'];
            var aH = [];

            if (aG == false) {
              aH["push"]('f-');
            } else if (aG == undefined) {
              aH["push"]('-');
            } else {
              aH["push"]('');
            }

            aH["push"](aC["toString"](36));
            aH["push"](aF);
            aH["push"](aD["toString"](36));

            if (aE && aE["indexOf"]('|') != -1) {
              var aI = "12|2|6|13|5|1|0|11|9|7|3|4|10|8"["split"]('|');
              var aJ = 0;
              var aP = [];
              var aM = aE["split"]('|')[0];
              var aO = aE["split"]('|')[1];
              var aQ = '';
              var aN = '';
              var aL = '';
              var aK = '';

              if (aM["indexOf"](',') != -1) {
                aQ = u(aM["split"](',')[0])["toString"](36);
                aN = u(aM["split"](',')[1])["toString"](36);
              }

              if (aO["indexOf"](',') != -1) {
                aL = u(aO["split"](',')[0])["toString"](36);
                aK = u(aO["split"](',')[1])["toString"](36);
              }

              aP["push"](aQ);
              aP["push"](aN);
              aP["push"](aL);
              aP["push"](aK);
              aH["push"]('-' + aP["join"](','));
            } else {
              if (aE) {
                aH["push"]('-' + aE);
              }
            }

            ay["push"](aH["join"](''));
          }

          if (au) {
            ay = [];
          }

          var aR = new n()["getTime"]();
          var aS = ["doei:", T ? '1' : '0', S, W, V, U, u(X[0]), u(X[1]), u(Y[0]), u(Y[1])]["join"](',');
          var aT = ["dmei:", a1 ? '1' : '0', Z, a0, u(a2[0]), u(a2[1]), u(a3[0]), u(a3[1]), u(a4[0]), u(a4[1])]["join"](',');
          var aU = B["length"];
          var aV = C["length"];
          var aW = E["length"];
          var aX = ay["length"];
          var aY = [];

          for (var aZ in I) {
            aY["push"](aZ + ':' + I[aZ]);
          }

          var b0 = [];

          for (var aZ in J) {
            b0["push"](aZ + ':' + J[aZ]);
          }

          var b1 = ["emc:"]["concat"](aY)["join"](',');
          var b2 = ["emmm:"]["concat"](b0)["join"](',');
          var b3 = ag();
          b3 = au ? [] : b3;
          var b4 = ["emcf:"]["concat"](b3)["join"](',');
          var b5 = ["ivli:"]["concat"](ai())["join"](',');
          var b6 = ["iivl:"]["concat"](ap)["join"](',');
          var b7 = ["ivcvj:"]["concat"](aq)["join"](',');
          var b8 = ["scvje:"]["concat"](ar)["join"](',');
          var b9 = ["ewhi:"]["concat"](aj())["join"](',');
          ay["push"](aS);
          ay["push"](aT);
          ay["push"](b1);
          ay["push"](b2);
          ay["push"](b4);
          ay["push"](b5);
          ay["push"](b6);
          ay["push"](b7);
          ay["push"](b8);
          ay["push"](b9);
          var ba = [H, aR, aU, aV, aW, aX, 0, D, ax, 0, w["ivw"]() ? '1' : '0']["join"](',');
          ay["push"](ba);
          var bb = w["sph"](ay["join"](''), '4');
          ay["push"](bb);
          return ay["join"](';');
        }

        function al(au) {
          return au;
        }

        function am(au, av) {
          var aw = "5|6|3|2|1|4|0"["split"]('|');
          var ax = 0;
          var aA = {
            'ymvUo': function (aB, aC) {
              return aB < aC;
            },
            'WLUNl': function (aB, aC) {
              return aB == aC;
            }
          };

          if (!h["addEventListener"]) {
            return;
          }

          var az = m["getOwnPropertyDescriptor"](HTMLInputElement["prototype"], "value");

          if (!az || !az["set"]) {
            return;
          }

          var ay = az["set"];

          az["set"] = function (aB) {
            for (var aC = 0; aC < au["length"]; aC++) {
              if (au[aC] == this) {
                av(au[aC], aC, au[aC]["value"], aB);
              }
            }

            ay["apply"](this, arguments);
          };

          m["defineProperty"](HTMLInputElement["prototype"], "value", az);
        }

        function an(au, av) {
          for (var aw = 0; aw < au["length"]; aw++) {
            var ax = au[aw];
            var ay = ax["click"];

            au[aw]["click"] = function (az) {
              return function () {
                av(au[az], az);
                ay["apply"](this, arguments);
              };
            }(aw);
          }
        }

        function ao(au) {
          var av = [];
          w["each"](au, function (aw, ax) {
            av["push"](ax);
          });
          return av;
        }

        var ap = [];
        var aq = [];
        var ar = [];

        function as() {
          var au = "1|6|0|3|2|4|5"["split"]('|');
          var av = 0;
          var aw = {
            'dHfUx': function (ax, ay) {
              return ax(ay);
            },
            'CLVyH': function (ax, ay) {
              return ax + ay;
            }
          };
          B = ao(h["querySelectorAll"]("[_input]"));
          C = ao(h["querySelectorAll"]("[_submit]"));
          ad = ad["concat"](B);
          ad = ad["concat"](C);

          if (B["length"] > 0) {
            w["each"](B, function (ax, ay) {
              ah(ay, al(O), ax + '');
            });
            ap = ai();
            !x && am(B, function (ax, ay, az, aA) {
              var aB = ay;
              aq["push"](aB + ':' + az["length"] + ':' + aA["length"]);
            });
          }

          if (C["length"] > 0) {
            w["each"](C, function (ax, ay) {
              ah(ay, al(O), 5 + ax + '');
            });
            an(C, function (ax, ay) {
              ar["push"](5 + ay);
            });
          }
        }

        try {
          as();
          w["d_r"](function () {
            if (ad["length"] == 0) {
              as();
            }
          });
          ah(h, al(Q), 'd');
          ah(y, al(P), 'w');
        } catch (au) {}

        function at(av) {
          N = av;
        }

        return {
          'l': at,
          'get': ak
        };
      });
    }, {
      '7': 7
    }],
    2: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        var w = g;
        var x = c(6);
        var y = c(7);
        var z = c(4);
        var A = c(1);
        var B = '';
        var C = 0;
        var D = 0;
        var E = '';
        var F = '';
        var G = '';
        var I = "//nocaptcha.jd.com";
        var J = "_c_id";
        var K = "_s_id";
        var L = false;
        var M = '';
        var N = '';
        N += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        N += "abcdefghijklmnopqrstuvwxyz";
        N += "0123456789";
        N += '+/';
        var O = p["fromCharCode"];

        function P(ap) {
          var aq = "4|5|1|2|6|3|0"["split"]('|');
          var ar = 0;
          var au = ap["length"];
          var av = [];

          for (var as = 0; as < au; as++) {
            av[as >>> 2] |= (ap["charCodeAt"](as) & 255) << 24 - as % 4 * 8;
          }

          var at = [];

          for (var as = 0; as < au; as += 3) {
            var aw = "3|4|2|0|1"["split"]('|');
            var ax = 0;
            var aB = av[as >>> 2] >>> 24 - as % 4 * 8 & 255;
            var aC = av[as + 1 >>> 2] >>> 24 - (as + 1) % 4 * 8 & 255;
            var aA = av[as + 2 >>> 2] >>> 24 - (as + 2) % 4 * 8 & 255;
            var ay = aB << 16 | aC << 8 | aA;

            for (var az = 0; az < 4 && as + az * 0.75 < au; az++) {
              at["push"](N["charAt"](ay >>> 6 * (3 - az) & 63));
            }
          }

          for (var as = 0; as < at["length"] % 4; as++) {
            at["push"]('=');
          }

          return at["join"]('');
        }

        function Q(ap) {
          function ar(az, aA) {
            return O(az >> aA & 63 | 128);
          }

          function as(az) {
            if (az >= 55296 && az <= 57343) {
              throw Error("not a scalar value");
            }
          }

          function at(az) {
            var aA = "1|0|2|3|4"["split"]('|');
            var aB = 0;
            var aD = [];
            var aC = 0;
            var aE = az["length"];

            while (aC < aE) {
              var aF = az["charCodeAt"](aC++);
              aD["push"](aF);
            }

            return aD;
          }

          function au(az) {
            var aA = "4|0|1|2|3"["split"]('|');
            var aB = 0;

            if ((az & 4294967168) == 0) {
              return O(az);
            }

            var aC = '';

            if ((az & 4294965248) == 0) {
              aC = O(az >> 6 & 31 | 192);
            } else if ((az & 4294901760) == 0) {
              as(az);
              aC = O(az >> 12 & 15 | 224);
              aC += ar(az, 6);
            } else if ((az & 4292870144) == 0) {
              aC = O(az >> 18 & 7 | 240);
              aC += ar(az, 12);
              aC += ar(az, 6);
            }

            aC += O(az & 63 | 128);
            return aC;
          }

          var av = at(ap);
          var aw = -1;
          var ax = '';

          while (++aw < av["length"]) {
            var ay = av[aw];
            ax += au(ay);
          }

          return ax;
        }

        function R(ap) {
          function ar(av) {
            var aw = (av & 15) << 4;
            var ax = (av & 240) >>> 4;
            return aw | ax;
          }

          var as = Q(ap);
          var at = '';

          for (var au = 0; au < as["length"]; au++) {
            at += O(ar(as["charCodeAt"](au)));
          }

          return P(at);
        }

        function S(ap, aq) {
          if (!ap) {
            return '';
          }

          var at = Q(ap);
          var au = '';

          for (var aw = 0; aw < at["length"]; aw++) {
            au += O(at["charCodeAt"](aw) ^ aq["charCodeAt"](aw % aq["length"]));
          }

          return P(au);
        }

        var T = y["ouw"](function () {
          var ap = y["grs"](32);
          var aq = ap + y["sph"](ap, 4);
          return aq;
        }, function () {
          return y["grs"](36);
        });

        var U = function () {
          var ap = g["XMLHttpRequest"] ? new t() : null;

          if (ap && "withCredentials" in ap) {
            return '1';
          } else if (typeof XDomainRequest != "undefined") {
            return '2';
          } else {
            return '0';
          }
        }();

        function V(ap) {
          return S(ap, B || "MD78QfVqcAGMDam2");
        }

        function W(ap) {
          return R(ap);
        }

        function X() {
          return U != '0';
        }

        var Z = '';
        var a0 = "0";
        var a1 = '';
        var a2 = T();
        var a3 = '';
        var a4 = new n()["getTime"]();
        var a5 = {};
        var a6 = 10000;

        function a7() {
          a6--;
        }

        function a8() {
          var ap = [a4, a2, G, a5["mini"]["data"]];
          var aq = ap["join"]('|');
          return y["sph"](aq, 8);
        }

        function a9() {
          var ap = "8|6|9|3|2|0|4|5|10|1|7"["split"]('|');
          var aq = 0;
          a5 = z["gedd"]();

          function ax(az) {
            var aA = p["fromCharCode"](116);
            var aB = p["fromCharCode"](95);
            var aC = aA + aB;
            var aD = aC["split"]('')["reverse"]()["join"]('');
            w[aD] = az;
          }

          a3 = a8["call"](this);
          var au = "abc";
          var at = "ist" + au + "edd" + au + "eddsg" + au + 'cs' + au + 'c' + au + "dsn" + au + 'is' + au + "jic";
          var ar = [a4 + '', a5["mini"]["data"], a5["mini"]['sg'], a2, G, a3, a0, a6 + ''];
          var av = {};
          var aw = at["split"](au);

          for (var ay = 0; ay < aw["length"]; ay++) {
            av[aw[ay]] = ar[ay];
          }

          var as = F + '~' + V["call"](this, x(av))["toString"]();
          ax["call"](this, as);
        }

        function aa() {
          try {
            a9["call"](this);
          } catch (ap) {
            console.log(ap)
            a1 = 'bg';
            a0 = "3";
            ae(ap, 'bg');
          }
        }

        function ab(ap, aq) {
          var ar = {};

          for (var as = 0; as < ap["length"]; as++) {
            ar[ap[as]] = aq[as];
          }

          return ar;
        }

        function ac() {
          var ap = ai(F, '1');

          if (F && ap) {
            return;
          }

          var aq = I + "/public/api/monitorCollector";
          var ar = ["bizId", 's', "slct", "edd", "cors", "ict", 'ct', "cid"];
          var as = [E, F, C, a5["all"], U, D + '', new n()["getTime"]() + '', G];
          var at = ab(ar, as);
          var au = W(x(at));

          if (X()) {
            y["s_b_c"](aq, {
              'content': au,
              's': F
            }, {
              'onSuccess': function (av) {
                if (av && av['td']) {
                  M = av['td'];
                }

                F && aj(F, M, 300000);
              }
            });
          } else {
            y["s_j_p"](aq, {
              'content': au,
              's': F
            });
          }
        }

        function ad() {
          if (F && M == '') {
            M = ai(F);
          }

          return M;
        }

        function ae(ap, aq) {
          var ar = "2|3|5|1|0|4"["split"]('|');
          var as = 0;
          var av = I + "/public/api/jsError";
          var aw = ["bizId", 's', 'c', "where", 'jv', 'is'];
          var ax = [E, F, G, aq, Z, a0];
          var au = ab(aw, ax);
          var at = W(x(au));

          if (X()) {
            y["s_b_c"](av, {
              'content': at,
              'jserror': y["p_e"](ap)
            });
          } else {
            y["s_j_p"](av, {
              'content': at,
              'jserror': y["p_e"](ap)
            }, {
              'withoutCallback': true
            });
          }
        }

        function af() {}

        function ag(ap) {
          ap = ap + '';

          if (ap["length"] >= 13) {
            return ap["substring"](0, 13);
          } else {
            while (ap["length"] != 13) {
              ap = '0' + ap;
            }
          }

          return ap;
        }

        function ah() {
          var ap = y["grs"](19) + ag(new n()["getTime"]());
          return ap + y["sph"](ap, 4);
        }

        function ai(ap) {
          return y["g_c"](ap);
        }

        function aj(ap, aq, ar) {
          y["p_c"](ap, aq, ar);
        }

        function ak(ap, aq, ar) {
          function at() {
            var aA = "4|3|0|2|1"["split"]('|');
            var aB = 0;
            a0 = "1";
            aa();
            af();
            aq();
            ac();
          }

          function au(aA) {
            var aB = "5|0|4|3|2|1"["split"]('|');
            var aC = 0;
            a0 = "2";
            aa();
            af();
            ar("i e");
            ae(aA, 'i');
            ac();
          }

          try {
            var av = "6|11|8|2|14|16|9|17|1|3|0|10|7|5|12|4|15|13"["split"]('|');
            var aw = 0;
            var ax = new n()["getTime"]();
            aq = y['np'](aq);
            ar = y['np'](ar);
            Z = ap['jv'];
            E = ap["bizId"];
            var az = ai(J);
            var ay = ai(K);
            G = ap['c'] || az || ah();
            F = ap['s'] || ay || ah();
            L = ap["dataComp"] || false;

            if (!az) {
              aj(J, G, 3153600000000);
            }

            if (!ay) {
              aj(K, F, -1);
            }

            B = ap['k'];
            I = ap["apiServer"];
            C = ap["scriptLoadConsumeTime"] || C;
            D = new n()["getTime"]() - ax;
            a7();
            at();
          } catch (aA) {
            au(aA);
          }
        }

        function al() {
          var ap = '';

          try {
            ap = A["get"](L);
          } catch (aq) {
            a1 = "gbd";
            a0 = "3";
            ae(aq, "gbd");
          }

          return ap;
        }

        var am = 0;

        function an() {
          var ap = "12|0|7|13|8|5|9|2|6|1|10|11|3|4"["split"]('|');
          var aq = 0;
          var at = new n()["getTime"]();
          var ar = '';

          try {
            ar = P(x(z["gaedd"]()));
          } catch (av) {
            a1 = "gad";
            a0 = "3";
            ae(av, "gad");
          }

          var au = [];
          au["push"](a1);
          au["push"](at);
          au["push"](a0);
          au["push"](Z);
          au["push"](ar);
          au["push"](++am);
          au["push"](ad());
          var as = y["sph"](au["join"]('~'), 4);
          au["push"](as);
          return au["join"]('~');
        }

        var ao = [ak, function () {
          return '';
        }, function () {
          var ap = al();
          var aq = an();
          return (g["_t"] || '') + '|' + aq + '|' + ap;
        }];
        return ao;
      });
    }, {
      '1': 1,
      '4': 4,
      '6': 6,
      '7': 7
    }],
    3: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g();
      })(function () {
        var g = "3|4|2|0|6|5|1"["split"]('|');
        var h = 0;
        var l = {
          'VkqYk': function (s, t) {
            return s == t;
          },
          'ObxpJ': function (s, t) {
            return s == t;
          }
        };
        'use strict';

        var k = [{
          'id': "gfgkebiommjpiaomalcbfefimhhanlfd",
          'res': ["static/touch-emulator.js"]
        }];
        var j = [];
        var r = navigator["userAgent"]["toLowerCase"]();

        if (r["indexOf"]("edg") > 0) {
          k = [{
            'id': "ljdjkkjiognkghfjndoddoplekppngge",
            'res': ["static/touch-emulator.js"]
          }];

          for (var m = 0; m < k["length"]; m++) {
            var n = "1|4|3|0|2"["split"]('|');
            var o = 0;
            var p = "chrome-extension://" + k[m]['id'] + '/' + k[m]["res"];
            var q = new XMLHttpRequest();

            q["onreadystatechange"] = function () {
              if (this["readyState"] == 4 && this["status"] == 200) {
                j["push"](k[m]['id']);
              }
            };

            q["open"]("GET", p, false);

            try {
              q["send"]();
            } catch (s) {}
          }
        } else if (r["indexOf"]("chrome") > 0 && r["indexOf"]("edg") == -1) {
          for (var m = 0; m < k["length"]; m++) {
            var p = "chrome-extension://" + k[m]['id'] + '/' + k[m]["res"];
            var q = new XMLHttpRequest();

            q["onreadystatechange"] = function () {
              if (this["readyState"] == 4 && this["status"] == 200) {
                j["push"](k[m]['id']);
              }
            };

            q["open"]("GET", p, false);

            try {
              q["send"]();
            } catch (t) {}
          }
        } else if (r["indexOf"]("firefox") > 0) {
          if (document["getElementsByClassName"]("jjb-login")["length"] > 0 || document["getElementsByClassName"]("jjbPriceChart")["length"] > 0) {
            j["push"]("42f0bbb4-0214-49d1-a01a-bdead05c5540");
          }
        }

        return j;
      });
    }, {}],
    4: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {

        var w = c(7);
        var x = c(6);
        var y = c(3);

        function z(a1) {
          return a1 ? w["murmur"](a1) : '';
        }

        function A(a1) {
          return a1 + '';
        }

        var B = [];
        var C = '';
        var D = 0;
        var E = {};

        function F() {
          var a1 = "0|5|4|2|1|3"["split"]('|');
          var a2 = 0;
          var a3 = "motnahp"["split"]('')["reverse"]()["join"]('');
          var a5 = "motnahPllac"["split"]('')["reverse"]()["join"]('');
          var a4 = i["userAgent"] || '';

          if (a4["toLowerCase"]()["indexOf"](a3) != -1) {
            return true;
          }

          if (a3 in g || '_' + a3 in g || a5 in g) {
            return true;
          }

          return false;
        }

        function G() {
          var a1 = /Chrome/i["test"](i["userAgent"]);
          var a2 = !!g["chrome"];
          var a3 = [];
          var a4 = [];

          if (g["chrome"]) {
            for (var a5 in g["chrome"]) {
              a3["push"](a5);
            }
          }

          var a6 = [];
          var a7 = [];
          var a8 = ["plugins", "mimeTypes", "webdriver", "languages"];

          function a9(ad) {
            if (!ad) {
              return '';
            }

            var ae = ["configurable", "enumerable"];

            for (var af = 0; af < ae["length"]; af++) {
              if (!(ae[af] in ad)) {
                return "false";
              }
            }

            return "true";
          }

          for (var aa = 0; aa < a8["length"]; aa++) {
            var ab = null;

            if (m["getOwnPropertyDescriptor"]) {
              ab = m["getOwnPropertyDescriptor"](i, a8[aa]);
            }

            a6["push"](ab ? "true" : "false");
            a7["push"](a9(ab));
          }

          var ac = g["console"] && "debug" in g["console"];
          return {
            'haprode': a6,
            'leprode': a7,
            'chinua': a1 + '',
            'chinwi': a2 + '',
            'princh': a3,
            'princhru': a4,
            'deinco': ac + '',
            'plle': i["plugins"]["length"] + '',
            'laep': i["languages"] === '' ? "true" : "false"
          };
        }

        function H() {
          return h["referrer"] + '';
        }

        function I() {
          var a1 = "4|1|0|2|3"["split"]('|');
          var a2 = 0;
          var a6 = {};
          var a4 = ["outerWidth", "outerHeight", "innerWidth", "innerHeight", "devicePixelRatio", "orientation"];
          var a3 = ["ouwi", "ouhe", "inwi", "inhe", "depira", 'or'];

          for (var a5 = 0; a5 < a4["length"]; a5++) {
            a6[a3[a5]] = g[a4[a5]] + '';
          }

          return a6;
        }

        function J() {
          var a1 = "0|4|3|2|1"["split"]('|');
          var a2 = 0;
          var a3 = {};
          var a6 = ["left", "right", "availLeft", "availTop", "availWidth", "availHeight", "width", "height", "colorDepth", "deviceXDPI", "logicalXDPI", "systemXDPI"];
          var a5 = ['le', 'ri', "avle", "avto", "avwi", "avhe", 'wi', 'he', "code", "dexd", "loxd", "syxd"];

          for (var a4 = 0; a4 < a6["length"]; a4++) {
            a3[a5[a4]] = g["screen"][a6[a4]] + '';
          }

          return a3;
        }

        function K() {
          var a1 = h["createElement"]("canvas");
          return !!(a1["getContext"] && a1["getContext"]('2d'));
        }

        function L() {
          var a1 = [];

          if (i["plugins"]) {
            for (var a2 = 0; a2 < i["plugins"]["length"]; a2++) {
              a1["push"](i["plugins"][a2]["name"]);
            }
          }

          return a1;
        }

        function M() {
          var a1 = [];

          if (m["getOwnPropertyDescriptor"] && m["getOwnPropertyDescriptor"](g, "ActiveXObject") || "ActiveXObject" in g) {
            var a2 = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];

            for (var a3 = 0; a3 < a2["length"]; a3++) {
              try {
                var a4 = a2[a3];
                new g["ActiveXObject"](a4);
                a1["push"](a4);
              } catch (a5) {}
            }
          }

          return a1;
        }

        function N() {
          function a1(a2) {
            try {
              return a2 in g;
            } catch (a3) {
              return true;
            }
          }

          return {
            'sest': a1("sessionStorage"),
            'lost': a1("localStorage"),
            'indb': a1("indexedDB"),
            'ontost': a1("ontouchstart")
          };
        }

        function O() {
          return {
            'lang': A(i["language"]),
            'langs': i["languages"] ? i["languages"]["join"](',') : '',
            'brla': A(i["browserLanguage"]),
            'syla': A(i["systemLanguage"]),
            'cpcl': A(i["cpuClass"]),
            'oscp': A(i["oscpu"]),
            'apna': A(i["appName"]),
            'apve': A(i["appVersion"]),
            'apmive': A(i["appMinorVersion"]),
            'mityle': A(i["mimeTypes"]["length"]),
            'buid': A(i["buildID"]),
            'cken': A(i["cookieEnabled"]),
            'deme': A(i["deviceMemory"]),
            'matopo': A(i["maxTouchPoints"] || i["msMaxTouchPoints"]),
            'donotr': A(i["doNotTrack"]),
            'haco': A(i["hardwareConcurrency"]),
            'plat': A(i["platform"]),
            'prod': A(i["product"]),
            'prsu': A(i["productSub"]),
            'vend': A(i["vendor"]),
            'vesu': A(i["vendorSub"])
          };
        }

        function P() {
          var a1 = "7|30|14|16|1|28|15|9|31|8|21|17|38|27|26|40|10|39|25|22|34|35|13|6|11|2|12|18|3|0|19|37|33|32|5|4|20|29|36|23|24"["split"]('|');
          var a2 = 0;

          if (!K()) {
            return '';
          }

          var a5 = [];
          var a3 = h["createElement"]("canvas");
          a3["width"] = 2000;
          a3["height"] = 200;
          a3["style"]["display"] = "inline";
          var a4 = a3["getContext"]('2d');
          // Bugs canvas
          a4["rect"](0, 0, 10, 10);
          a4["rect"](2, 2, 6, 6);
          a5["push"]("winding:" + (a4["isPointInPath"](5, 5, "evenodd") === false ? "yes" : 'no'));
          a4["textBaseline"] = "alphabetic";
          a4["fillStyle"] = "#f60";
          a4["fillRect"](125, 1, 62, 20);
          a4["fillStyle"] = "#069";
          a4["font"] = "11pt no-real-font-123";
          a4["fillText"]("Cwm fjordbank glyphs vext quiz, ð", 2, 15);
          a4["fillStyle"] = "rgba(102, 204, 0, 0.2)";
          a4["font"] = "18pt Arial";
          a4["fillText"]("Cwm fjordbank glyphs vext quiz, ð", 4, 45);
          a4["globalCompositeOperation"] = "multiply";
          a4["fillStyle"] = "rgb(255,0,255)";
          a4["beginPath"]();
          a4["arc"](50, 50, 50, 0, s['PI'] * 2, true);
          a4["closePath"]();
          a4["fill"]();
          a4["fillStyle"] = "rgb(0,255,255)";
          a4["beginPath"]();
          a4["arc"](100, 50, 50, 0, s['PI'] * 2, true);
          a4["closePath"]();
          a4["fill"]();
          a4["fillStyle"] = "rgb(255,255,0)";
          a4["beginPath"]();
          a4["arc"](75, 100, 50, 0, s['PI'] * 2, true);
          a4["closePath"]();
          a4["fill"]();
          a4["fillStyle"] = "rgb(255,0,255)";
          a4["arc"](75, 75, 75, 0, s['PI'] * 2, true);
          a4["arc"](75, 75, 25, 0, s['PI'] * 2, true);
          a4["fill"]("evenodd");

          if (a3["toDataURL"]) {
            a5["push"](a3["toDataURL"]());
          }

          return a5["join"]('~');
        }

        function Q() {
          var a2 = new n()["getTime"]();

          function a3() {
            return i["mediaDevices"] && i["mediaDevices"]["enumerateDevices"];
          }

          if (a3()) {
            i["mediaDevices"]["enumerateDevices"]()["then"](function (a4) {
              a4["forEach"](function (a5) {
                B["push"](a5["kind"] + ": " + a5["label"] + " id = " + a5["deviceId"]);
              });

              if (B["length"] > 0) {
                C = z(B["join"]('~'));
                w["s_l_i"]("_dev_ha", C);
              }

              D = new n()["getTime"]() - a2;
            });
          }
        }

        function R() {
         // 环境检测 Navigator --> 未补齐
         // return i["getBattery"] && i["getBattery"]()["then"](function (a2) {
         //    function a4() {
         //      E['ic'] = a2["charging"] ? '1' : '0';
         //    }
         //
         //    function a5() {
         //      E['le'] = A(a2["level"] * 100);
         //    }
         //
         //    function a6() {
         //      var a9 = a2["chargingTime"];
         //      E['ct'] = a9 == Infinity ? 'i' : A(a9);
         //    }
         //
         //    function a7() {
         //      var a9 = a2["dischargingTime"];
         //      E['dt'] = a9 == Infinity ? 'i' : A(a9);
         //    }
         //
         //    a8();
         //    a2["addEventListener"]("chargingchange", function () {
         //      a4();
         //    });
         //    a2["addEventListener"]("levelchange", function () {
         //      a5();
         //    });
         //    a2["addEventListener"]("chargingtimechange", function () {
         //      a6();
         //    });
         //    a2["addEventListener"]("dischargingtimechange", function () {
         //      a7();
         //    });
         //
         //    function a8() {
         //      a4();
         //      a5();
         //      a6();
         //      a7();
         //    }
         //  });
        }

        var S = w["ism"]();

        function T() {
          var a1 = w["g_l_i"]("_c_f2");

          if (!a1) {
            var a1 = z(P());
            a1 = a1 + w["sph"](a1, 4);

            if (a1) {
              w["s_l_i"]("_c_f2", a1);
            }
          }

          return a1;
        }

        function U(a1, a2) {
          var a3 = [];

          for (var a4 in a1) {
            if (a4 != a2) {
              a3["push"](a4 + ':' + a1[a4]);
            }
          }

          return a3;
        }

        function V() {
          return S ? '' : C || w["g_l_i"]("_dev_ha") || '';
        }

        function W() {
          !S && Q();
          R();
        }

        function X(a1, a2) {
          return a1 ? a1["substring"](s["max"](0, a1["length"] - a2), a1["length"]) : '';
        }

        function Y() {
          var a1 = ["script", "link", "meta", "input", "button", "div"];
          var a2 = [];

          for (var a3 = 0; a3 < a1["length"]; a3++) {
            var a4 = h["querySelectorAll"](a1[a3]);
            a2["push"](a4["length"]);
          }

          return a2["join"](',');
        }

        function Z() {
          var a1 = new n()["getTime"]();
          var a2 = w["ivw"]();
          var a3 = F();
          var a4 = T();
          var a5 = new n()["getTime"]() - a1;
          var a6 = L();
          var a7 = M();
          var a8 = J();
          var a9 = I();
          var aa = O();
          var ab = N();
          var ac = G();
          var ad = H();
          var ae = V();
          var af = A(new n()["getTimezoneOffset"]());
          var ag = g["location"]["href"] + '';
          ag = ag["substring"](0, s["min"](64, ag["length"]));
          var ah = g["location"]["host"];
          var ai = g["location"]["pathname"];
          var aj = g["location"]["protocol"];
          var ak = Y();
          var al = {
            'isviwe': A(a2),
            'isviph': A(a3),
            'cafp': a4,
            'repl': a6,
            'iepl': a7,
            'wiin': a9,
            'scin': a8,
            'nain': aa,
            'cain': ab,
            'deha': ae,
            'tiof': A(af),
            'hile': A(history["length"]),
            'hechde': ac,
            'dore': X(ad, 50),
            'ism': A(S),
            'href': ag,
            'pi': ak,
            'cbl': y
          };
          var am = [];
          am["push"](a2);
          am["push"](a3);
          am["push"](a4);
          am["push"](a6["join"]('~'));
          am["push"](a7["join"]('~'));
          am["push"](g["devicePixelRatio"]);
          am["push"](U(a8)["join"]('~'));
          am["push"](U(aa)["join"]('~'));
          am["push"](U(ab));
          am["push"](ae);
          am["push"](af);
          var an = z(am["join"]('#'));
          var ao = w["sph"](an, 4);
          al['f'] = an + ao;
          var ap = {
            'isviwe': A(a2),
            'isviph': A(a3),
            'dore': X(ad, 5),
            'f': an + ao,
            'ism': A(S),
            'hst': ah,
            'pn': ai["substring"](0, 30),
            'pt': aj,
            'pi': ak
          };
          var aq = new n()["getTime"]() - a1;
          var ar = {
            "all": {}
          };
          ar["all"]["data"] = x(al);
          ar["all"]["perf"] = {
            'cacoti': A(a5),
            'tocosu': A(aq),
            'decoti': A(D)
          };
          ar["all"]['sg'] = w["sph"](ar["all"]["data"], 4);
          ar["mini"] = {};
          ar["mini"]["data"] = x(ap);
          ar["mini"]['sg'] = w["sph"](ar["mini"]["data"], 4);
          return ar;
        }

        function a0() {
          var a1 = w["ivw"]();
          return {
            'viwe': a1 ? '1' : '0',
            'bain': E
          };
        }

        W();
        return {
          'gedd': Z,
          'gaedd': a0
        };
      });
    }, {
      '3': 3,
      '6': 6,
      '7': 7
    }],
    5: [function (c, d, e) {
      !function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        function w() {
          return g["JCaptcha"];
        }

        function x(z, A, B, C, D) {
          var E = z + "/public/api/jsError2?bizId=" + A + "&where=" + l(C) + "&jserror=" + l(D ? D : '') + "&jv=" + B + "&t=" + new n()["getTime"]();
          var F = new q();
          F["src"] = E;
          g["_tmp"] = F;
        }

        function y(z, A, B) {
          try {
            z["apiServer"] = z["apiServer"] || "//nocaptcha.jd.com";
            z["staticServer"] = z["staticServer"] || "//js-nocaptcha.jd.com";
            z["bizId"] = z["bizId"] || z["biz_id"];
            z['jv'] = "20201218";
            this["config"] = z;
            var C = c(7);
            this["uts"] = C;
            this['c'] = c(2);
            var D = this['c'][0];
            var E = this;
            D(z, A, B);

            if (z["initCaptcha"]) {
              var F = z["staticServer"] + "/statics/slidecaptcha/v1/slide.min.js?v=" + this["config"]['jv'];
              C["loadScript"](F, function (H) {
                if (!H) {
                  var I = w();
                  E["jcaptcha"] = new I(z);
                } else {
                  x(z["apiServer"], z["bizId"], z['jv'], "load slide", "load slide.js fail");
                }
              });
            }
          } catch (H) {
            // 调试时输出错误
            // console.log(H)
            var G = this["uts"] ? this["uts"]["p_e"](H) : H["toString"]();
            x(z["apiServer"], z["bizId"], z['jv'], "jab new", G);
          }
        }

        y["prototype"]["getToken"] = y["prototype"]["getData"] = function () {
          try {
            var z = this['c'];
            return z[2]() || 'er';
          } catch (B) {
            var A = this["uts"] ? this["uts"]["p_e"](B) : B["toString"]();
            x(this["config"]["apiServer"], this["config"]["bizId"], this["config"]['jv'], "g t e", A);
            return 'er';
          }
        };

        y["prototype"]["showCaptcha"] = function (z, A) {
          var B = this;
          var C = z["onValidateSuccess"];
          z["requestId"] = z["requestId"] || A;

          function D(E) {
            var F = {
              'token': B["getToken"](),
              'requestId': z["requestId"],
              'captcha_data': B["jcaptcha"]["getJson"]()
            };
            var G = c(6);
            C(G(F));
          }

          z["onValidateSuccess"] = D;

          if (!this["jcaptcha"]) {
            j(function () {
              var E = '';

              if (B["jcaptcha"]) {
                E = "slide.js has loaded after 1s";
                B["jcaptcha"] && B["jcaptcha"]["show"](z);
              } else {
                E = "slide.js not loaded yet after 1s";
              }

              x(B["config"]["apiServer"], B["config"]["bizId"], B["config"]['jv'], "sh ca", E);
            }, 1000);
            x(B["config"]["apiServer"], B["config"]["bizId"], B["config"]['jv'], "sh ca", "slide.js not loaded yet");
          } else {
            this["jcaptcha"]["show"](z);
          }
        };

        Token = y;
      }(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
    }, {
      '2': 2,
      '6': 6,
      '7': 7
    }],
    6: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g(window, document, navigator, setTimeout);
      })(function (g, h, i, j) {
        'use strict';

        var l = {
          '': "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          "\"": "\\\"",
          "\\": "\\\\"
        };
        var m = '';
        var n = '';

        function o(r) {
          var s = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
          s["lastIndex"] = 0;
          return s["test"](r) ? "\"" + r["replace"](s, function (t) {
            var u = l[t];
            return typeof u === "string" ? u : "\\u" + ("0000" + t["charCodeAt"](0)["toString"](16))["slice"](-4);
          }) + "\"" : "\"" + r + "\"";
        }

        function p(r, s) {
          var t;
          var u;
          var w;
          var x;
          var y = m;
          var z;
          var A = s[r];

          switch (typeof A) {
            case "string":
              return o(A);

            case "number":
              return isFinite(A) ? String(A) : "null";

            case "boolean":
            case "null":
              return String(A);

            case "object":
              if (!A) {
                return "null";
              }

              m += n;
              z = [];

              if (Object["prototype"]["toString"]["apply"](A) === "[object Array]") {
                x = A["length"];

                for (t = 0; t < x; t += 1) {
                  z[t] = p(t, A) || "null";
                }

                w = z["length"] === 0 ? '[]' : m ? "[\n" + m + z["join"](",\n" + m) + "\n" + y + ']' : '[' + z["join"](',') + ']';
                m = y;
                return w;
              } else {
                for (u in A) {
                  if (Object["prototype"]["hasOwnProperty"]["call"](A, u)) {
                    w = p(u, A);

                    if (w) {
                      z["push"](o(u) + (m ? ": " : ':') + w);
                    }
                  }
                }

                w = z["length"] === 0 ? '{}' : m ? "{\n" + m + z["join"](",\n" + m) + "\n" + y + '}' : '{' + z["join"](',') + '}';
                m = y;
                return w;
              }

          }
        }

        function q(r) {
          if (JSON) {
            var s = JSON["stringify"](r);
            return s;
          }

          return p('', {
            '': r
          });
        }

        return q;
      });
    }, {}],
    7: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        var w = {};
        var y = c(6);
        var z = "1234567890abcdefghijklmnopqrstuvwxyz";

        function A() {
          return u(s["random"]() * 10000) + new n()["valueOf"]();
        }

        w["ivw"] = function () {
          return "$cdc_asdjflasutopfhvcZLmcfl_" in h || !!i["webdriver"] || false;
        };

        w['np'] = function (B) {
          return B || function () {};
        };

        w["p_j"] = function (B) {
          return eval('(' + B + ')');
        };

        w["p_c"] = function (B, C, D, E) {
          var F = "3|0|4|2|1"["split"]('|');
          var G = 0;
          var H = B + '=' + C;
          D = D == undefined ? -1 : D;

          if (D > 0) {
            H += ";expires=" + new n(new n()["getTime"]() + D)["toUTCString"]();
          } else if (D == 0) {
            H += ";expires=0";
          }

          H += ";path=" + (E || '/');
          h["cookie"] = H;
        };

        w["g_c"] = function (B) {
          var C = new r("(?:(?:^|.*;\\s*)" + B + "\\s*\\=\\s*([^;]*).*$)|^.*$");
          var D = h["cookie"]["replace"](C, '$1');
          return D;
        };

        w["str"] = function (B) {
          return B + '';
        };

        w["ism"] = function () {
          var B = new r("Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile", 'i');
          var C = B["test"](i["userAgent"]) || "ontouchstart" in g || "orientation" in g;
          return C;
        };

        w["i_l_s"] = function () {
          try {
            if (!g["localStorage"]) {
              return false;
            }

            g["localStorage"]["setItem"]("__test", '1');
            return true;
          } catch (B) {
            return false;
          }
        }();

        w["s_l_i"] = function (B, C) {
          w["i_l_s"] && g["localStorage"]["setItem"](B, C);
        };

        w["g_l_i"] = function (B) {
          return w["i_l_s"] ? g["localStorage"]["getItem"](B) : '';
        };

        w["murmur"] = function (B) {
          if (!B) {
            return '';
          }

          if (g["Murmur"]) {
            return g["Murmur"]["x64hash128"](B, 31);
          } else {
            return w["sph"](B, 32);
          }
        };

        w["s_b_c"] = function (B, C, D) {
          var E = "12|4|14|15|0|6|5|8|2|10|19|9|7|18|3|13|11|1|16|17"["split"]('|');
          var F = 0;
          var P = {
            'VilHh': function (T, U) {
              return T(U);
            },
            'hsyzy': function (T, U) {
              return T(U);
            }
          };
          var D = D || {};
          var Q = D["method"] || "post";
          var R = D["timeout"] || 5000;
          var G = w['np'](D["onSuccess"]);
          var K = w['np'](D["onError"]);
          var M = false;
          var I = g["XMLHttpRequest"] ? new t() : null;

          if (I && "withCredentials" in I) {
            I["open"](Q, B, true);
          } else if (typeof XDomainRequest != "undefined") {
            M = true;
            I = new XDomainRequest();
            I["open"](Q, B);
          }

          I["timeout"] = R;
          var N = false;

          function L(T) {
            !N && K(T);
            N = true;
          }

          I["onerror"] = I["ontimeout"] = function () {
            L("timeout");
          };

          var B = B + "?random=" + A();

          if (M) {
            I["onload"] = function () {
              var T = I["responseText"] ? w["p_j"](I["responseText"]) : {};
              G(T);
            };
          } else {
            if (I["setRequestHeader"]) {
              I["setRequestHeader"]("Content-Type", "text/plain; charset=utf-8");
            }

            I["onreadystatechange"] = function () {
              if (I["readyState"] == 4) {
                if (I["status"] == 200) {
                  var T = I["responseText"] ? w["p_j"](I["responseText"]) : {};
                  G(T);
                } else {
                  L("response fail with status: " + I["status"]);
                }
              }
            };
          }

          var O = [];

          for (var H in C) {
            O["push"](H + '=' + l(C[H]));
          }

          var S = O["join"]('&');
          I["send"](S);
        };

        w["p_j"] = function (B) {
          return eval('(' + B + ')');
        };

        w["s_j_p"] = function (B, C, D) {
          var D = D || {};
          var F = D["timeout"];
          var G = w['np'](D["onSuccess"]);
          var H = w['np'](D["onError"]);
          var I = D["charset"] || "UTF-8";
          var J = D["async"] || true;
          var K = h["getElementsByTagName"]("head")[0];
          var L = h["createElement"]("script");
          L["charset"] = I;
          L["async"] = J;
          var M = "jsonp_" + A();
          var N = [];

          for (var O in C) {
            N["push"](O + '=' + l(C[O]));
          }

          if (!D["withoutCallback"]) {
            N["push"]("callback=" + M);
          }

          N["push"]("random=" + A());
          L["src"] = B + '?' + N["join"]('&');

          L["onerror"] = function () {
            P();
            H && H("onerror");
          };

          if (F) {
            L["timer"] = j(function () {
              P();
              H && H("timeout");
            }, F);
          }

          g[M] = function (Q) {
            P();
            G && G(Q);
          };

          function P() {
            L["timer"] && k(L["timer"]);
            L["onerror"] = null;
            K["removeChild"](L);
            g[M] = null;
          }

          K["appendChild"](L);
        };

        w["p_e"] = function (B) {
          var C = B;
          var D = [];

          if (C instanceof Error) {
            if (C["number"] !== undefined) {
              D["push"]("Number: " + C["number"]);
            }

            if (C["description"] !== undefined) {
              D["push"]("Description: " + C["description"]);
            }

            if (C["name"] !== undefined) {
              D["push"](C["name"] + ": " + (C["message"] === undefined ? '' : C["message"]));
            }

            if (C["lineNumber"] !== undefined) {
              D["push"]("lineNumber: " + C["lineNumber"]);
            }

            if (C["stack"] !== undefined) {
              D["push"]("stack: " + C["stack"]["replace"](/\n/g, '')["replace"](/\r/g, ''));
            }
          } else {
            D["push"](C);
          }

          return y(D);
        };

        w["ouw"] = function (B, C, D) {
          return function () {
            var E = B["apply"](D || this, arguments);
            B = C;
            return E;
          };
        };

        w["sph"] = function (B, C, D) {
          if (B === '') return '';
          var F = u(B["length"] / C);
          var G = [];

          for (var H = 0; H < C; H++) {
            var I = 0;
            var J = H * F;
            var K = H == C - 1 ? F + B["length"] % C : F;

            for (var L = 0; L < K; L++) {
              var M = J + L;

              if (M < B["length"]) {
                I = I + B["charCodeAt"](M);
              }
            }

            I = I * (D || 31);
            G["push"](z["charAt"](I % z["length"]));
          }

          return G["join"]('');
        };

        w["grs"] = function (B) {
          var C = z["split"]('');
          var D = [];

          for (var E = 0; E < B; E++) {
            var F = u(C["length"] * s["random"]());
            D["push"](C[F]);
          }

          return D["join"]('');
        };

        w["ael"] = function (B, C, D) {
          for (var E in C) {
            if (C["hasOwnProperty"](E)) {
              B["addEventListener"] ? B["addEventListener"](C[E], D, false) : B["attachEvent"]('on' + C[E], D, false);
            }
          }
        };

        w["each"] = function (B, C) {
          if (B && B["length"] > 0) {
            for (var D = 0; D < B["length"]; D++) {
              C(D, B[D]);
            }
          }
        };

        w["d_r"] = function (B) {
          if (h["addEventListener"]) {
            h["addEventListener"]("DOMContentLoaded", function () {
              B && B();
            }, false);
          } else {
            var D = h["onreadystatechange"];

            h["onreadystatechange"] = function () {
              if (h["readyState"] == "complete") {
                B && B();
              }

              D && D["apply"](this);
            };
          }
        };

        w["loadScript"] = function (B, C) {
          var E = h["getElementsByTagName"]("head")[0];
          var F = h["createElement"]("script");
          F["charset"] = "UTF-8";
          F["async"] = true;

          F["onerror"] = function () {
            C(true);
          };

          var G = false;

          F["onload"] = F["onreadystatechange"] = function () {
            if (!G && (!F["readyState"] || "loaded" === F["readyState"] || "complete" === F["readyState"])) {
              G = true;
              j(function () {
                C(false);
              }, 0);
            }
          };

          F["src"] = B;
          E["appendChild"](F);
        };

        return w;
      });
    }, {
      '6': 6
    }]
  }, {}, [5]);
}();
window.job = new Token( {
        bizId: 'PASSPORT_LOGIN',
        initCaptcha: true
    })
console.log(window.job.getData())