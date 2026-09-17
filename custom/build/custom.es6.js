import{css as Ie,html as ut}from"@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";import{PolarisFlexTheme as Te}from"@haxtheweb/polaris-theme/lib/polaris-flex-theme.js";import"@haxtheweb/haxcms-elements/lib/ui-components/blocks/site-children-block.js";import{DDDSuper as j}from"@haxtheweb/d-d-d/d-d-d.js";import{I18NMixin as O}from"@haxtheweb/i18n-manager/lib/I18NMixin.js";let Pt=class extends Te{static get styles(){return[super.styles,Ie`
        :host {
          display: block;
        }
        aside {
          float: left;
          width: 240px;
        }
        aside section h4 {
          font-size: 16px;
          margin: var(--ddd-spacing-0) var(--ddd-spacing-0) var(--ddd-spacing-6) var(--ddd-spacing-0);
          text-transform: uppercase;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
        }

        aside section {
          background-color: #fff;
          border-radius: 3px;
          margin-bottom: var(--ddd-spacing-10);
          padding: 0px var(--ddd-spacing-10) var(--ddd-spacing-10) 0px;
        }

        site-children-block {
          --site-children-block-border-bottom: lightblue 1px solid;
          --site-children-block-li-padding: 8px 0;
          --site-children-block-link-hover-color: rgb(0, 95, 169);
          --site-children-block-active-border-left: rgb(0, 95, 169) 3px solid;
          --site-children-block-link-active-color: rgb(0, 30, 68);
          font-family: "Roboto Condensed", sans-serif;
          font-size: 16px;
        }
      `]}renderHeaderSlot(){return ut``}renderSideBar(){return ut`
    <aside
          role="complementary"
          aria-label="Primary Sidebar"
          itemtype="http://schema.org/WPSideBar"
          part="page-primary-sidebar"
        >
          <section>
            <site-children-block
              part="page-children-block"
              dynamic-methodology="ancestor"
            ></site-children-block>
          </section>
        </aside>
    `}renderFooterContactInformation(){return ut``}renderFooterSecondarySlot(){return ut``}renderFooterPrimarySlot(){return ut``}static get tag(){return"custom-haxkuis-theme"}constructor(){super()}};customElements.define(Pt.tag,Pt);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=globalThis,$t=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),Rt=new WeakMap;let Bt=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($t&&t===void 0){const a=e!==void 0&&e.length===1;a&&(t=Rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&Rt.set(e,t))}return t}toString(){return this.cssText}};const Ce=h=>new Bt(typeof h=="string"?h:h+"",void 0,At),q=(h,...t)=>{const e=h.length===1?h[0]:t.reduce((a,i,s)=>a+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+h[s+1],h[0]);return new Bt(e,h,At)},Ee=(h,t)=>{if($t)h.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const a=document.createElement("style"),i=_t.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=e.cssText,h.appendChild(a)}},jt=$t?h=>h:h=>h instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return Ce(e)})(h):h;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ze,defineProperty:qe,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:Ke,getOwnPropertySymbols:Le,getPrototypeOf:Fe}=Object,Q=globalThis,Ot=Q.trustedTypes,De=Ot?Ot.emptyScript:"",Ne=Q.reactiveElementPolyfillSupport,ct=(h,t)=>h,Mt={toAttribute(h,t){switch(t){case Boolean:h=h?De:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h)}return h},fromAttribute(h,t){let e=h;switch(t){case Boolean:e=h!==null;break;case Number:e=h===null?null:Number(h);break;case Object:case Array:try{e=JSON.parse(h)}catch{e=null}}return e}},Qt=(h,t)=>!ze(h,t),Gt={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:Qt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q.litPropertyMetadata??(Q.litPropertyMetadata=new WeakMap);let et=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(t,a,e);i!==void 0&&qe(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){const{get:i,set:s}=Ue(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){const d=i?.call(this);s?.call(this,r),this.requestUpdate(t,d,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gt}static _$Ei(){if(this.hasOwnProperty(ct("elementProperties")))return;const t=Fe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ct("properties"))){const e=this.properties,a=[...Ke(e),...Le(e)];for(const i of a)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[a,i]of e)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[e,a]of this.elementProperties){const i=this._$Eu(e,a);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const i of a)e.unshift(jt(i))}else t!==void 0&&e.push(jt(t));return e}static _$Eu(t,e){const a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){const a=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,a);if(i!==void 0&&a.reflect===!0){const s=(a.converter?.toAttribute!==void 0?a.converter:Mt).toAttribute(e,a.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const a=this.constructor,i=a._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=a.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Mt;this._$Em=i;const d=r.fromAttribute(e,s.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,e,a,i=!1,s){if(t!==void 0){const r=this.constructor;if(i===!1&&(s=this[t]),a??(a=r.getPropertyOptions(t)),!((a.hasChanged??Qt)(s,e)||a.useDefault&&a.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,a))))return;this.C(t,e,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:i,wrapped:s},r){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,s]of a){const{wrapped:r}=s,d=this[i];r!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,s,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(e)):this._$EM()}catch(a){throw t=!1,this._$EM(),a}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[ct("elementProperties")]=new Map,et[ct("finalized")]=new Map,Ne?.({ReactiveElement:et}),(Q.reactiveElementVersions??(Q.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis,Jt=h=>h,yt=ht.trustedTypes,Ht=yt?yt.createPolicy("lit-html",{createHTML:h=>h}):void 0,Wt="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+G,Pe=`<${Vt}>`,W=document,pt=()=>W.createComment(""),mt=h=>h===null||typeof h!="object"&&typeof h!="function",It=Array.isArray,Re=h=>It(h)||typeof h?.[Symbol.iterator]=="function",Tt=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yt=/-->/g,Xt=/>/g,V=RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zt=/'/g,te=/"/g,ee=/^(?:script|style|textarea|title)$/i,Be=h=>(t,...e)=>({_$litType$:h,strings:t,values:e}),o=Be(1),at=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),ae=new WeakMap,Y=W.createTreeWalker(W,129);function ie(h,t){if(!It(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(t):t}const je=(h,t)=>{const e=h.length-1,a=[];let i,s=t===2?"<svg>":t===3?"<math>":"",r=gt;for(let d=0;d<e;d++){const l=h[d];let p,c,m=-1,A=0;for(;A<l.length&&(r.lastIndex=A,c=r.exec(l),c!==null);)A=r.lastIndex,r===gt?c[1]==="!--"?r=Yt:c[1]!==void 0?r=Xt:c[2]!==void 0?(ee.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=V):c[3]!==void 0&&(r=V):r===V?c[0]===">"?(r=i??gt,m=-1):c[1]===void 0?m=-2:(m=r.lastIndex-c[2].length,p=c[1],r=c[3]===void 0?V:c[3]==='"'?te:Zt):r===te||r===Zt?r=V:r===Yt||r===Xt?r=gt:(r=V,i=void 0);const T=r===V&&h[d+1].startsWith("/>")?" ":"";s+=r===gt?l+Pe:m>=0?(a.push(p),l.slice(0,m)+Wt+l.slice(m)+G+T):l+G+(m===-2?d:T)}return[ie(h,s+(h[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class ft{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let s=0,r=0;const d=t.length-1,l=this.parts,[p,c]=je(t,e);if(this.el=ft.createElement(p,a),Y.currentNode=this.el.content,e===2||e===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=Y.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const m of i.getAttributeNames())if(m.endsWith(Wt)){const A=c[r++],T=i.getAttribute(m).split(G),k=/([.?@])?(.*)/.exec(A);l.push({type:1,index:s,name:k[2],strings:T,ctor:k[1]==="."?Qe:k[1]==="?"?Ge:k[1]==="@"?Je:xt}),i.removeAttribute(m)}else m.startsWith(G)&&(l.push({type:6,index:s}),i.removeAttribute(m));if(ee.test(i.tagName)){const m=i.textContent.split(G),A=m.length-1;if(A>0){i.textContent=yt?yt.emptyScript:"";for(let T=0;T<A;T++)i.append(m[T],pt()),Y.nextNode(),l.push({type:2,index:++s});i.append(m[A],pt())}}}else if(i.nodeType===8)if(i.data===Vt)l.push({type:2,index:s});else{let m=-1;for(;(m=i.data.indexOf(G,m+1))!==-1;)l.push({type:7,index:s}),m+=G.length-1}s++}}static createElement(t,e){const a=W.createElement("template");return a.innerHTML=t,a}}function it(h,t,e=h,a){if(t===at)return t;let i=a!==void 0?e._$Co?.[a]:e._$Cl;const s=mt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(h),i._$AT(h,e,a)),a!==void 0?(e._$Co??(e._$Co=[]))[a]=i:e._$Cl=i),i!==void 0&&(t=it(h,i._$AS(h,t.values),i,a)),t}class Oe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,i=(t?.creationScope??W).importNode(e,!0);Y.currentNode=i;let s=Y.nextNode(),r=0,d=0,l=a[0];for(;l!==void 0;){if(r===l.index){let p;l.type===2?p=new Ct(s,s.nextSibling,this,t):l.type===1?p=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(p=new He(s,this,t)),this._$AV.push(p),l=a[++d]}r!==l?.index&&(s=Y.nextNode(),r++)}return Y.currentNode=W,i}p(t){let e=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}let Ct=class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=it(this,t,e),mt(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==at&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,i=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=ft.createElement(ie(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{const s=new Oe(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=ae.get(t.strings);return e===void 0&&ae.set(t.strings,e=new ft(t)),e}k(t){It(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const s of t)i===e.length?e.push(a=new oe(this.O(pt()),this.O(pt()),this,this.options)):a=e[i],a._$AI(s),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const a=Jt(t).nextSibling;Jt(t).remove(),t=a}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class xt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,i,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=f}_$AI(t,e=this,a,i){const s=this.strings;let r=!1;if(s===void 0)t=it(this,t,e,0),r=!mt(t)||t!==this._$AH&&t!==at,r&&(this._$AH=t);else{const d=t;let l,p;for(t=s[0],l=0;l<s.length-1;l++)p=it(this,d[a+l],e,l),p===at&&(p=this._$AH[l]),r||(r=!mt(p)||p!==this._$AH[l]),p===f?t=f:t!==f&&(t+=(p??"")+s[l+1]),this._$AH[l]=p}r&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Qe extends xt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Ge extends xt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Je extends xt{constructor(t,e,a,i,s){super(t,e,a,i,s),this.type=5}_$AI(t,e=this){if((t=it(this,t,e,0)??f)===at)return;const a=this._$AH,i=t===f&&a!==f||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,s=t!==f&&(a===f||i);i&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class He{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){it(this,t)}}const We=ht.litHtmlPolyfillSupport;We?.(ft,Ct),(ht.litHtmlVersions??(ht.litHtmlVersions=[])).push("3.3.3");const Ve=(h,t,e)=>{const a=e?.renderBefore??t;let i=a._$litPart$;if(i===void 0){const s=e?.renderBefore??null;a._$litPart$=i=new Ct(t.insertBefore(pt(),s),s,void 0,e??{})}return i._$AI(h),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis;class F extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ve(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return at}}F._$litElement$=!0,F.finalized=!0,bt.litElementHydrateSupport?.({LitElement:F});const Ye=bt.litElementPolyfillSupport;Ye?.({LitElement:F}),(bt.litElementVersions??(bt.litElementVersions=[])).push("4.2.2");var Et={};(function h(t,e,a,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!t.OffscreenCanvas)return!1;try{var u=new OffscreenCanvas(1,1),n=u.getContext("2d");n.fillRect(0,0,1,1);var g=u.transferToImageBitmap();n.createPattern(g,"no-repeat")}catch{return!1}return!0})();function l(){}function p(u){var n=e.exports.Promise,g=n!==void 0?n:t.Promise;return typeof g=="function"?new g(u):(u(l,l),null)}var c=(function(u,n){return{transform:function(g){if(u)return g;if(n.has(g))return n.get(g);var v=new OffscreenCanvas(g.width,g.height),_=v.getContext("2d");return _.drawImage(g,0,0),n.set(g,v),v},clear:function(){n.clear()}}})(d,new Map),m=(function(){var u=Math.floor(16.666666666666668),n,g,v={},_=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(n=function(y){var w=Math.random();return v[w]=requestAnimationFrame(function b(S){_===S||_+u-1<S?(_=S,delete v[w],y()):v[w]=requestAnimationFrame(b)}),w},g=function(y){v[y]&&cancelAnimationFrame(v[y])}):(n=function(y){return setTimeout(y,u)},g=function(y){return clearTimeout(y)}),{frame:n,cancel:g}})(),A=(function(){var u,n,g={};function v(_){function y(w,b){_.postMessage({options:w||{},callback:b})}_.init=function(b){var S=b.transferControlToOffscreen();_.postMessage({canvas:S},[S])},_.fire=function(b,S,M){if(n)return y(b,null),n;var E=Math.random().toString(36).slice(2);return n=p(function(I){function z(U){U.data.callback===E&&(delete g[E],_.removeEventListener("message",z),n=null,c.clear(),M(),I())}_.addEventListener("message",z),y(b,E),g[E]=z.bind(null,{data:{callback:E}})}),n},_.reset=function(){_.postMessage({reset:!0});for(var b in g)g[b](),delete g[b]}}return function(){if(u)return u;if(!a&&s){var _=["var CONFETTI, SIZE = {}, module = {};","("+h.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{u=new Worker(URL.createObjectURL(new Blob([_])))}catch(y){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",y),null}v(u)}return u}})(),T={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function k(u,n){return n?n(u):u}function C(u){return u!=null}function x(u,n,g){return k(u&&C(u[n])?u[n]:T[n],g)}function R(u){return u<0?0:Math.floor(u)}function kt(u,n){return Math.floor(Math.random()*(n-u))+u}function tt(u){return parseInt(u,16)}function lt(u){return u.map(ne)}function ne(u){var n=String(u).replace(/[^0-9a-f]/gi,"");return n.length<6&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),{r:tt(n.substring(0,2)),g:tt(n.substring(2,4)),b:tt(n.substring(4,6))}}function le(u){var n=x(u,"origin",Object);return n.x=x(n,"x",Number),n.y=x(n,"y",Number),n}function ue(u){u.width=document.documentElement.clientWidth,u.height=document.documentElement.clientHeight}function ce(u){var n=u.getBoundingClientRect();u.width=n.width,u.height=n.height}function he(u){var n=document.createElement("canvas");return n.style.position="fixed",n.style.top="0px",n.style.left="0px",n.style.pointerEvents="none",n.style.zIndex=u,n}function pe(u,n,g,v,_,y,w,b,S){u.save(),u.translate(n,g),u.rotate(y),u.scale(v,_),u.arc(0,0,1,w,b,S),u.restore()}function me(u){var n=u.angle*(Math.PI/180),g=u.spread*(Math.PI/180);return{x:u.x,y:u.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:u.startVelocity*.5+Math.random()*u.startVelocity,angle2D:-n+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:u.color,shape:u.shape,tick:0,totalTicks:u.ticks,decay:u.decay,drift:u.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:u.gravity*3,ovalScalar:.6,scalar:u.scalar,flat:u.flat}}function ge(u,n){n.x+=Math.cos(n.angle2D)*n.velocity+n.drift,n.y+=Math.sin(n.angle2D)*n.velocity+n.gravity,n.velocity*=n.decay,n.flat?(n.wobble=0,n.wobbleX=n.x+10*n.scalar,n.wobbleY=n.y+10*n.scalar,n.tiltSin=0,n.tiltCos=0,n.random=1):(n.wobble+=n.wobbleSpeed,n.wobbleX=n.x+10*n.scalar*Math.cos(n.wobble),n.wobbleY=n.y+10*n.scalar*Math.sin(n.wobble),n.tiltAngle+=.1,n.tiltSin=Math.sin(n.tiltAngle),n.tiltCos=Math.cos(n.tiltAngle),n.random=Math.random()+2);var g=n.tick++/n.totalTicks,v=n.x+n.random*n.tiltCos,_=n.y+n.random*n.tiltSin,y=n.wobbleX+n.random*n.tiltCos,w=n.wobbleY+n.random*n.tiltSin;if(u.fillStyle="rgba("+n.color.r+", "+n.color.g+", "+n.color.b+", "+(1-g)+")",u.beginPath(),r&&n.shape.type==="path"&&typeof n.shape.path=="string"&&Array.isArray(n.shape.matrix))u.fill(ve(n.shape.path,n.shape.matrix,n.x,n.y,Math.abs(y-v)*.1,Math.abs(w-_)*.1,Math.PI/10*n.wobble));else if(n.shape.type==="bitmap"){var b=Math.PI/10*n.wobble,S=Math.abs(y-v)*.1,M=Math.abs(w-_)*.1,E=n.shape.bitmap.width*n.scalar,I=n.shape.bitmap.height*n.scalar,z=new DOMMatrix([Math.cos(b)*S,Math.sin(b)*S,-Math.sin(b)*M,Math.cos(b)*M,n.x,n.y]);z.multiplySelf(new DOMMatrix(n.shape.matrix));var U=u.createPattern(c.transform(n.shape.bitmap),"no-repeat");U.setTransform(z),u.globalAlpha=1-g,u.fillStyle=U,u.fillRect(n.x-E/2,n.y-I/2,E,I),u.globalAlpha=1}else if(n.shape==="circle")u.ellipse?u.ellipse(n.x,n.y,Math.abs(y-v)*n.ovalScalar,Math.abs(w-_)*n.ovalScalar,Math.PI/10*n.wobble,0,2*Math.PI):pe(u,n.x,n.y,Math.abs(y-v)*n.ovalScalar,Math.abs(w-_)*n.ovalScalar,Math.PI/10*n.wobble,0,2*Math.PI);else if(n.shape==="star")for(var $=Math.PI/2*3,L=4*n.scalar,D=8*n.scalar,N=n.x,B=n.y,H=5,P=Math.PI/H;H--;)N=n.x+Math.cos($)*D,B=n.y+Math.sin($)*D,u.lineTo(N,B),$+=P,N=n.x+Math.cos($)*L,B=n.y+Math.sin($)*L,u.lineTo(N,B),$+=P;else u.moveTo(Math.floor(n.x),Math.floor(n.y)),u.lineTo(Math.floor(n.wobbleX),Math.floor(_)),u.lineTo(Math.floor(y),Math.floor(w)),u.lineTo(Math.floor(v),Math.floor(n.wobbleY));return u.closePath(),u.fill(),n.tick<n.totalTicks}function be(u,n,g,v,_){var y=n.slice(),w=u.getContext("2d"),b,S,M=p(function(E){function I(){b=S=null,w.clearRect(0,0,v.width,v.height),c.clear(),_(),E()}function z(){a&&!(v.width===i.width&&v.height===i.height)&&(v.width=u.width=i.width,v.height=u.height=i.height),!v.width&&!v.height&&(g(u),v.width=u.width,v.height=u.height),w.clearRect(0,0,v.width,v.height),y=y.filter(function(U){return ge(w,U)}),y.length?b=m.frame(z):I()}b=m.frame(z),S=I});return{addFettis:function(E){return y=y.concat(E),M},canvas:u,promise:M,reset:function(){b&&m.cancel(b),S&&S()}}}function Ut(u,n){var g=!u,v=!!x(n||{},"resize"),_=!1,y=x(n,"disableForReducedMotion",Boolean),w=s&&!!x(n||{},"useWorker"),b=w?A():null,S=g?ue:ce,M=u&&b?!!u.__confetti_initialized:!1,E=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,I;function z($,L,D){for(var N=x($,"particleCount",R),B=x($,"angle",Number),H=x($,"spread",Number),P=x($,"startVelocity",Number),_e=x($,"decay",Number),ye=x($,"gravity",Number),xe=x($,"drift",Number),Lt=x($,"colors",lt),we=x($,"ticks",Number),Ft=x($,"shapes"),Se=x($,"scalar"),$e=!!x($,"flat"),Dt=le($),Nt=N,St=[],Ae=u.width*Dt.x,Me=u.height*Dt.y;Nt--;)St.push(me({x:Ae,y:Me,angle:B,spread:H,startVelocity:P,color:Lt[Nt%Lt.length],shape:Ft[kt(0,Ft.length)],ticks:we,decay:_e,gravity:ye,drift:xe,scalar:Se,flat:$e}));return I?I.addFettis(St):(I=be(u,St,S,L,D),I.promise)}function U($){var L=y||x($,"disableForReducedMotion",Boolean),D=x($,"zIndex",Number);if(L&&E)return p(function(P){P()});g&&I?u=I.canvas:g&&!u&&(u=he(D),document.body.appendChild(u)),v&&!M&&S(u);var N={width:u.width,height:u.height};b&&!M&&b.init(u),M=!0,b&&(u.__confetti_initialized=!0);function B(){if(b){var P={getBoundingClientRect:function(){if(!g)return u.getBoundingClientRect()}};S(P),b.postMessage({resize:{width:P.width,height:P.height}});return}N.width=N.height=null}function H(){I=null,v&&(_=!1,t.removeEventListener("resize",B)),g&&u&&(document.body.contains(u)&&document.body.removeChild(u),u=null,M=!1)}return v&&!_&&(_=!0,t.addEventListener("resize",B,!1)),b?b.fire($,N,H):z($,N,H)}return U.reset=function(){b&&b.reset(),I&&I.reset()},U}var wt;function Kt(){return wt||(wt=Ut(null,{useWorker:!0,resize:!0})),wt}function ve(u,n,g,v,_,y,w){var b=new Path2D(u),S=new Path2D;S.addPath(b,new DOMMatrix(n));var M=new Path2D;return M.addPath(S,new DOMMatrix([Math.cos(w)*_,Math.sin(w)*_,-Math.sin(w)*y,Math.cos(w)*y,g,v])),M}function fe(u){if(!r)throw new Error("path confetti are not supported in this browser");var n,g;typeof u=="string"?n=u:(n=u.path,g=u.matrix);var v=new Path2D(n),_=document.createElement("canvas"),y=_.getContext("2d");if(!g){for(var w=1e3,b=w,S=w,M=0,E=0,I,z,U=0;U<w;U+=2)for(var $=0;$<w;$+=2)y.isPointInPath(v,U,$,"nonzero")&&(b=Math.min(b,U),S=Math.min(S,$),M=Math.max(M,U),E=Math.max(E,$));I=M-b,z=E-S;var L=10,D=Math.min(L/I,L/z);g=[D,0,0,D,-Math.round(I/2+b)*D,-Math.round(z/2+S)*D]}return{type:"path",path:n,matrix:g}}function ke(u){var n,g=1,v="#000000",_='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof u=="string"?n=u:(n=u.text,g="scalar"in u?u.scalar:g,_="fontFamily"in u?u.fontFamily:_,v="color"in u?u.color:v);var y=10*g,w=""+y+"px "+_,b=new OffscreenCanvas(y,y),S=b.getContext("2d");S.font=w;var M=S.measureText(n),E=Math.ceil(M.actualBoundingBoxRight+M.actualBoundingBoxLeft),I=Math.ceil(M.actualBoundingBoxAscent+M.actualBoundingBoxDescent),z=2,U=M.actualBoundingBoxLeft+z,$=M.actualBoundingBoxAscent+z;E+=z+z,I+=z+z,b=new OffscreenCanvas(E,I),S=b.getContext("2d"),S.font=w,S.fillStyle=v,S.fillText(n,U,$);var L=1/g;return{type:"bitmap",bitmap:b.transferToImageBitmap(),matrix:[L,0,0,L,-E*L/2,-I*L/2]}}e.exports=function(){return Kt().apply(this,arguments)},e.exports.reset=function(){Kt().reset()},e.exports.create=Ut,e.exports.shapeFromPath=fe,e.exports.shapeFromText=ke})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Et,!1);var Xe=Et.exports;Et.exports.create;class zt extends O(j(F)){static get tag(){return"timer-kuis"}static get properties(){return{...super.properties,duration:{type:Number,attribute:"duration",reflect:!0},remaining:{type:Number,attribute:"remaining",reflect:!0},autostart:{type:Boolean,attribute:"autostart",reflect:!0},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},_remaining:{state:!0},_running:{state:!0},hideControls:{type:Boolean,attribute:"hide-controls",reflect:!0}}}constructor(){super(),this.duration=300,this.autostart=!1,this.hideControls=!1,this._remaining=this.duration,this._running=!1,this._intervalId=null,this.t={...this.t,title:"Waktu Kuis",start:"Mulai",pause:"Jeda",reset:"Ulang",done:"Waktu habis"}}connectedCallback(){super.connectedCallback(),this.remaining!=null&&!isNaN(this.remaining)&&this.remaining>0?this._remaining=this.remaining:this._remaining=this.duration;const t=this._loadStartTime();if(t>0){const e=Math.floor((Date.now()-t)/1e3),a=Math.max(0,this.duration-e);a>0&&a<this._remaining&&(this._remaining=a)}this._onVisChange=this._onVisChange.bind(this),globalThis.addEventListener("visibilitychange",this._onVisChange),this.autostart&&this._remaining>0&&this.start()}disconnectedCallback(){globalThis.removeEventListener("visibilitychange",this._onVisChange),this._clearInterval(),super.disconnectedCallback()}_onVisChange(){if(document.hidden)this._running&&this.pause();else{const t=this._loadStartTime();if(t>0){const e=Math.floor((Date.now()-t)/1e3);this._remaining=Math.max(0,this.duration-e)}this.autostart&&this._remaining>0&&!this._running&&this.start(),this._remaining<=0&&!this._running&&(this._remaining=0,this._running=!1,this._clearInterval(),this._clearStartTime(),this._onExpire())}}_startKey(){return`timer_kuis_start_${this.kdMateri||"default"}_${this.studentId||"default"}`}_saveStartTime(t){try{globalThis.localStorage.setItem(this._startKey(),String(t))}catch{}}_loadStartTime(){try{const t=parseInt(globalThis.localStorage.getItem(this._startKey())||"0",10);return isNaN(t)?0:t}catch{return 0}}_clearStartTime(){try{globalThis.localStorage.removeItem(this._startKey())}catch{}}updated(t){t.has("remaining")&&this.remaining!=null&&!isNaN(this.remaining)&&(this._remaining=this.remaining,this._running&&(this._clearInterval(),this._running=!1,this.start())),t.has("duration")&&!this._running&&this.remaining==null&&(this._remaining=this.duration)}start(){this._running||(this._remaining<=0&&(this._remaining=this.duration),this._running=!0,this._clearInterval(),this._saveStartTime(Date.now()-(this.duration-this._remaining)*1e3),this._intervalId=setInterval(()=>this._tick(),1e3))}pause(){this._running=!1,this._clearInterval();const t=this._loadStartTime();if(t>0){const e=Math.floor((Date.now()-t)/1e3);this._remaining=Math.max(0,this.duration-e)}}reset(){this._clearInterval(),this._running=!1,this._remaining=this.duration,this._clearStartTime()}_clearInterval(){this._intervalId&&(clearInterval(this._intervalId),this._intervalId=null)}_tick(){const t=this._loadStartTime();if(t>0){const e=Math.floor((Date.now()-t)/1e3);this._remaining=Math.max(0,this.duration-e)}else this._remaining>0&&(this._remaining-=1);this._remaining<=0&&(this._remaining=0,this._running=!1,this._clearInterval(),this._clearStartTime(),this._onExpire())}_onExpire(){this.dispatchEvent(new CustomEvent("timer-kuis-expired",{detail:{duration:this.duration},bubbles:!0,composed:!0}))}_format(t){const e=Math.floor(t/60),a=t%60;return`${String(e).padStart(2,"0")}:${String(a).padStart(2,"0")}`}static get styles(){return[super.styles,q`
        :host { display: block; }
        .timer-card {
          display: inline-flex; align-items: center; gap: var(--ddd-spacing-4);
          background: var(--ddd-theme-surface);
          border: 1px solid var(--ddd-border-sm);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          font-family: var(--ddd-font-primary);
        }
        .meta { display: flex; flex-direction: column; }
        .title { font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); }
        .time {
          font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-primary); font-variant-numeric: tabular-nums;
          min-width: 90px; text-align: center;
        }
        .time.warn { color: var(--ddd-theme-error); }
        .controls { display: flex; gap: var(--ddd-spacing-2); }
        button {
          font-family: var(--ddd-font-primary); font-size: var(--ddd-font-size-s);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-border-sm);
          background: var(--ddd-theme-default-surface); color: var(--ddd-theme-primary);
          cursor: pointer;
        }
        button:hover { background: rgba(103,80,164,0.08); }
        button:disabled { opacity: 0.5; cursor: not-allowed; }
        .done { margin-top: var(--ddd-spacing-2); color: var(--ddd-theme-error); font-size: var(--ddd-font-size-s); }
      `,q`
        @media (prefers-color-scheme: dark) {
          :host {
            --ddd-theme-background: #0b1020;
            --ddd-theme-color: #e5e7eb;
            --ddd-theme-surface: #111827;
            --ddd-theme-default-surface: #111827;
            --ddd-theme-primary: #c4b5fd;
            --ddd-theme-secondary: #94a3b8;
            --ddd-theme-error: #fca5a5;
            --ddd-border-color: #2a3245;
            --ddd-border-sm: 1px solid #2a3245;
            background: #0b1020;
            color: #e5e7eb;
          }
          .title { color: #94a3b8; }
          .time { color: #c4b5fd; }
          .time.warn { color: #fca5a5; }
        }
      `]}render(){const t=this._remaining<=10,e=t?`${this.t.title}: ${this._format(this._remaining)} hampir habis`:this.t.title;return o`
      <div class="timer-card" role="timer" aria-live="polite" aria-label="${e}">
        <div class="meta">
          <span class="title">${this.t.title}</span>
          <span class="time ${t?"warn":""}">${this._format(this._remaining)}</span>
        </div>
        <div class="controls">
          ${this.hideControls?"":o`${this._running?o`<button @click="${this.pause}" aria-pressed="true" aria-label="Jeda timer">⏸️ ${this.t.pause}</button>`:o`<button @click="${this.start}" aria-pressed="false" aria-label="Mulai timer" ?disabled="${this._remaining<=0}">▶️ ${this.t.start}</button>`}
              <button @click="${this.reset}" aria-label="Atur ulang timer">↺ ${this.t.reset}</button>`}
        </div>
      </div>
      ${this._remaining<=0?o`<div class="done" role="alert">⏰ ${this.t.done}</div>`:""}
    `}static get haxProperties(){return{api:"1",canScale:!0,canPosition:!0,canEditSource:!1,type:"element",designSystem:{accent:!0,primary:!0,card:!0,text:!0,designTreatment:!1},gizmo:{title:"Timer Kuis",description:"Timer hitung mundur untuk kuis dengan auto-submit via event timer-kuis-expired",icon:"icons:timer",color:"purple",tags:["Education","Timer","Quiz"]},settings:{configure:[{property:"duration",title:"Durasi (detik)",inputMethod:"number",description:"Lama waktu pengerjaan kuis dalam detik",default:300},{property:"autostart",title:"Mulai Otomatis",inputMethod:"boolean",default:!1}]},saveOptions:{unsetAttributes:[]},demoSchema:[{tag:"timer-kuis",properties:{duration:300,autostart:!1},content:""},{tag:"timer-kuis",properties:{duration:60,autostart:!0},content:""}]}}}customElements.get(zt.tag)||globalThis.customElements.define(zt.tag,zt);class Ze{constructor(t){this._host=t,this._questionStartTime=null}getAnswerTime(){return this._host._questionStartTime?Date.now()-this._host._questionStartTime:0}resetQuestionTimer(){this._questionStartTime=Date.now()}isSuspiciousTiming(t,e=3e3){return t>0&&t<e}calculateScore(t,e=1){return t?e:0}getTimingData(){return{questionStartTime:this._questionStartTime,currentTime:Date.now()}}}class se{static renderMC(t,e){const{selected:a,selectedAnswers:i,answered:s,editable:r,feedbackText:d,feedbackPositive:l,hideAnswers:p}=e,c=e.isMulti,m=t.choices||[],A=t._correctMap?(e.correctAnswers||[]).map(T=>t._correctMap.indexOf(T)):e.correctAnswers||[];return o`
      <div class="choices-container">
        ${m.map((T,k)=>{const C=c?i.has(k):a===k,x=A.includes(k);let R="choice-row";C&&s&&!p?R+=x?" correct":" wrong":C&&(R+=" selected");const kt=s&&!r,tt=e.pilihanImages&&e.pilihanImages[k],lt=["A","B","C","D","E","F"];return o`
            <button
              class="${R} ${kt?"disabled":""}"
              ?disabled=${kt}
              @click=${()=>e.onSelect(k)}
              aria-label="Pilihan ${lt[k]||k+1}: ${T}"
            >${C&&s&&!p&&x?"\u2713 ":""}${lt[k]||k+1}. ${T}
            ${tt?o`<br /><img class="choice-image" src="${tt}" alt="Gambar pilihan ${lt[k]||k+1}" loading="lazy" />`:""}
            </button>
          `})}
      </div>
      ${p?"":d?o`<div class="feedback ${l?"correct":"wrong"}">${d}</div>`:""}
      ${c&&(!s||r)?o`<button class="btn-submit" @click=${e.onSubmit}>Kirim Jawaban (${i.size} dipilih)</button>`:""}
    `}static renderPGKompleks(t,e){const{selectedAnswers:a,answered:i,editable:s,feedbackText:r,feedbackPositive:d,hideAnswers:l}=e,p=a||new Set,c=i&&!s;return o`
      <div class="choices-container">
        ${t.choices.map((m,A)=>{const T=p.has(A),k=(t.correctAnswers||[]).includes(A);let C="choice-row multi-correct";return i&&!l?(k&&(C+=" correct"),T&&!k&&(C+=" wrong")):T&&(C+=" selected"),o`
            <button
              class="${C} ${c?"disabled":""}"
              ?disabled=${c}
              @click=${()=>e.onToggle(A)}
              aria-label="Pilihan ${huruf[A]||A+1}: ${m} ${T?"(dipilih)":""}"
            >${!l&&T&&i&&k?"\u2713 ":""}${huruf[A]||A+1}. ${m}
            </button>
          `})}
      </div>
      ${!i||s?o`<button class="btn-submit" @click=${e.onSubmit}>Kirim Jawaban</button>`:""}
      ${l?"":r?o`<div class="feedback ${d?"correct":"wrong"}">${r}</div>`:""}
    `}static renderPGK(t,e){const{pgkAnswers:a,answered:i,editable:s,feedbackText:r,feedbackPositive:d,hideAnswers:l}=e;return o`
      <div class="pgk-container">
        ${(t.statements||[]).map((p,c)=>{const m=a?a[c]:null;return o`
            <div class="pgk-statement">
              <div class="statement-text">${c+1}. ${p.text}</div>
              <div class="statement-options">
                <button class="pgk-btn ${m===!0?"selected":""}" 
                  @click=${()=>e.onPGK(c,!0)}
                  ?disabled=${i&&!s}>
                  ${i&&!l&&p.answer===!0?"\u2713 ":""}Benar
                </button>
                <button class="pgk-btn ${m===!1?"selected":""}" 
                  @click=${()=>e.onPGK(c,!1)}
                  ?disabled=${i&&!s}>
                  ${i&&!l&&p.answer===!1?"\u2713 ":""}Salah
                </button>
              </div>
            </div>
          `})}
      </div>
      ${!i||s?o`<button class="btn-submit" @click=${e.onSubmit}>Kirim Jawaban</button>`:""}
      ${l?"":r?o`<div class="feedback ${d?"correct":"wrong"}">${r}</div>`:""}
    `}static renderMatching(t,e){const{matchAnswers:a,answered:i,editable:s,feedbackText:r,feedbackPositive:d,hideAnswers:l}=e;return o`
      <div class="matching-container">
        <div class="matching-left">
          ${(t.leftItems||[]).map((p,c)=>o`
            <div class="match-item left">${p}</div>
          `)}
        </div>
        <div class="matching-right">
          ${(t.rightItems||[]).map((p,c)=>{const m=a?a[c]:null;return o`
              <div class="match-item right ${m!==null?"matched":""}" 
                @click=${()=>e.onMatchRight(c)}>
                <span class="match-label">${p}</span>
                ${l?"":m!==null?o`<span class="match-connector">← ${t.leftItems[m]}</span>`:""}
              </div>
            `})}
        </div>
      </div>
${!i||s?o`<button class="btn-submit" @click=${e.onSubmit}>Kirim Jawaban</button>`:""}
      ${l?"":r?o`<div class="feedback ${d?"correct":"wrong"}">${r}</div>`:""}
    `}static renderShortAnswer(t,e){const{shortAnswerText:a,answered:i,editable:s,feedbackText:r,feedbackPositive:d,hideAnswers:l}=e;return o`
      <div class="short-answer-container">
        <input type="text" 
          class="short-answer-input"
          .value=${a||""}
          @input=${p=>e.onInput(p.target.value)}
          placeholder="Ketik jawaban Anda..."
          ?disabled=${i&&!s}>
        ${!i||s?o`<button class="btn-submit" @click=${e.onSubmit}>Kirim Jawaban</button>`:""}
      </div>
      ${l?"":r?o`<div class="feedback ${d?"correct":"wrong"}">${r}</div>`:""}
    `}}class re{static calculatePercentage(t,e){return!e||e===0?0:Math.round(t/e*100)}static formatScore(t,e){const a=this.calculatePercentage(t,e);return`${t}/${e} (${a}%)`}static hasPassed(t,e,a=70){return this.calculatePercentage(t,e)>=a}calculateScore(t,e=1){return t?e:0}static prepareSubmission(t){const{studentId:e,kdMateri:a,kategori:i,judul:s,score:r,maxPoints:d,answerTimings:l}=t;return{student_id:e,kd_materi:a,kategori:i||"sumatif_lm",metadata_kuis:s,skor:r,skor_maks:d,persentase:this.calculatePercentage(r,d),timestamp:new Date().toISOString(),answer_timings:l||[]}}static getGrade(t){return t>=90?"A":t>=80?"B":t>=70?"C":t>=60?"D":"E"}static needsRemediation(t,e=70){return t<e}}const vt=[{q:"Apa kegunaan utama metode connectedCallback pada LitElement?",a:"Menginisialisasi nilai variabel dasar",b:"Mendeteksi elemen saat berhasil diinjeksikan ke struktur DOM",c:"Menghapus event listener global",k:"b"},{q:"Bagaimana cara mencegah timeout 6 menit pada Google Apps Script?",a:"Menggunakan penulisan masal berbasis batch I/O",b:"Menulis ke banyak sheet terpisah",c:"Memperbanyak rumus formula cell",k:"a"}];class Z extends O(j(F)){static get tag(){return"kuis-ledakan"}static get haxProperties(){return{api:"1",canScale:!0,canPosition:!1,canEditSource:!0,type:"element",designSystem:{accent:!0,primary:!0,card:!0,text:!0,designTreatment:!1},gizmo:{title:"Kuis Ledakan (Evaluasi Mandiri)",description:"Kuis interaktif evaluasi mandiri yang mengunci skor dan mengirim aktivitas ke dasbor Apps Script.",icon:"icons:question-answer",color:"cyan",tags:["Kuis","Evaluasi","Interaktif"],meta:{author:"andyinformatika23-hash"}},settings:{configure:[{property:"judul",title:"Judul Kuis",description:"Judul yang tampil di kartu kuis.",inputMethod:"textfield",required:!0},{property:"appsScriptUrl",title:"URL Web App Google Apps Script",description:"URL /exec Apps Script untuk mengirim hasil kuis (action=logActivity).",inputMethod:"textfield"},{property:"kdMateri",title:"Kode Topik / Pertemuan",description:"Kode materi yang tercatat pada log aktivitas.",inputMethod:"textfield"},{property:"kategori",title:"Kategori Kuis",description:"sumatif_lm \u2192 skor masuk rapor (db_asesmen); formatif \u2192 progres saja, tidak masuk rapor (db_aktivitas).",inputMethod:"select",options:{sumatif_lm:"Sumatif (Rapor LM)",formatif:"Formatif (Progres)"},default:"sumatif_lm"},{property:"mode",title:"Mode Tampilan",description:"Mode guru menampilkan tombol ulang; mode siswa fokus mengerjakan.",inputMethod:"select",options:{guru:"Guru - Pantauan",dosen:"Dosen - Bimbingan",siswa:"Siswa - Evaluasi Mandiri"}},{property:"questions",title:"Soal (JSON)",description:"Array soal AKM: PG {question, choices, correctIndex}, PG kompleks {correctAnswers:[0,2]}, PGK {type:'pgk', statements:[{text,answer}]}, menjodohkan {type:'matching', leftItems, rightItems, correctPairs}, isian {type:'shortAnswer', acceptedAnswers}, gambar soal {image}, pilihan bergambar {text,image}. Skor: PGK 1 poin per pernyataan benar, menjodohkan 1 poin per pasangan benar. Format lama {q,a,b,c,k} tetap didukung. Field opsional: {hint} \u2014 petunjuk yang muncul sebagai <details>.",inputMethod:"code-editor"},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai",inputMethod:"boolean"},{property:"hideAnswers",title:"Sembunyikan Jawaban",description:"Tidak menampilkan jawaban benar/salah setelah menjawab",inputMethod:"boolean"},{property:"hideScore",title:"Sembunyikan Nilai",description:"Menyembunyikan angka skor berjalan di layar soal dan lingkaran nilai akhir (pesan selesai tetap tampil)",inputMethod:"boolean"},{property:"hideConfetti",title:"Nonaktifkan Konfeti",description:"Tidak menampilkan efek konfeti saat jawaban benar",inputMethod:"boolean"},{property:"showQuestionNav",title:"Tampilkan Navigasi Nomor Soal",description:"Tampilkan tombol navigasi nomor soal di atas kuis. Setelah maju otomatis, navigasi mundur ke soal yang sudah dijawab dinonaktifkan.",inputMethod:"boolean",default:!0},{property:"allowBackwardNav",title:"Izinkan Navigasi Mundur",description:"true = siswa boleh melompat ke soal yang sudah dijawab. Default false (nav maju saja setelah submit).",inputMethod:"boolean",default:!1},{property:"practiceMode",title:"Mode Latihan",description:"Aktifkan untuk mode latihan: tidak ada auto-advance, tombol Berikutnya/Kembali tersedia, navigasi bebas.",inputMethod:"boolean",default:!1},{property:"questionDelay",title:"Jeda Soal (ms)",description:"Jeda dalam milidetik sebelum auto-advance ke soal berikutnya. Hanya berlaku mode kuis (bukan practice mode). Default 1800.",inputMethod:"number",default:1800},{property:"reviewAnswers",title:"Tinjau Jawaban di Akhir",description:"Tampilkan tombol 'Tinjau Jawaban' di layar hasil untuk mereview semua soal & jawaban yang diberikan.",inputMethod:"boolean",default:!0},{property:"timerDuration",title:"Durasi Timer (detik)",description:"0 = tanpa timer. >0 menampilkan <timer-kuis> & auto-submit saat habis.",inputMethod:"number",default:0},{property:"timerAutostart",title:"Timer Mulai Otomatis",inputMethod:"boolean",default:!0}],advanced:[],developer:[]},saveOptions:{wipeSlot:!1,unsetAttributes:["_screen","_currentIdx","_selected","_answered","_score","_advanceTimer","_editing","_tempQuestions","_editingIndex","_tempQuestionText","_tempQuestionImage","_tempQuestionType","_tempQuestionPoints","_tempChoice0","_tempChoice1","_tempChoice2","_tempChoice3","_tempChoiceImage0","_tempChoiceImage1","_tempChoiceImage2","_tempChoiceImage3","_tempCorrectIndex","_tempCorrectAnswers","_tempLeftItems","_tempRightItems","_tempCorrectPairs","_tempAcceptedAnswers","_tempAcceptedStatements","_tempStatements","_editorOrigin","_importText","_importStatus","_reviewMode","_userAnswers","_answeredSet","_sessionToken","_sessionExpired"]},demoSchema:[{tag:"kuis-ledakan",properties:{judul:"Evaluasi Kuis Interaktif",mode:"siswa",kdMateri:"Pertemuan 1"},content:""}]}}static get properties(){return{...super.properties,questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e.includes("[object Object]"))&&(e.startsWith("[")||e.startsWith("{")))try{const a=JSON.parse(e);return Array.isArray(a)?a:a&&typeof a=="object"&&Array.isArray(a.questions)?a.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},judul:{type:String,attribute:"judul",reflect:!0},appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},kategori:{type:String,attribute:"kategori",reflect:!0},mode:{type:String,attribute:"mode",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideScore:{type:Boolean,attribute:"hide-score",reflect:!0},editable:{type:Boolean,attribute:!0,reflect:!0},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},shuffleQuestions:{type:Boolean,attribute:"shuffle-questions",reflect:!0},lockAfterComplete:{type:Boolean,attribute:"lock-after-complete",reflect:!0},showQuestionNav:{type:Boolean,attribute:"show-question-nav",reflect:!0},allowBackwardNav:{type:Boolean,attribute:"allow-backward-nav",reflect:!0},practiceMode:{type:Boolean,attribute:"practice-mode",reflect:!0},questionDelay:{type:Number,attribute:"question-delay",reflect:!0},reviewAnswers:{type:Boolean,attribute:"review-answers",reflect:!0},_locked:{state:!0},_questionStartTime:{state:!0},_lockChecked:{state:!0},studentId:{type:String,attribute:"student-id",reflect:!0},studentName:{type:String,attribute:"student-name",reflect:!0},studentNis:{type:String,attribute:"student-nis",reflect:!0},studentAbsen:{type:String,attribute:"student-absen",reflect:!0},studentKelas:{type:String,attribute:"student-kelas",reflect:!0},timerDuration:{type:Number,attribute:"timer-duration",reflect:!0},timerMinutes:{type:Number,attribute:"timer-minutes",reflect:!0},timerSeconds:{type:Number,attribute:"timer-seconds",reflect:!0},timerAutostart:{type:Boolean,attribute:"timer-autostart",reflect:!0},hidePauseRestart:{type:Boolean,attribute:"hide-pause-restart",reflect:!0},_attemptStart:{state:!0},_sessionToken:{state:!0},_sessionExpired:{state:!0},_resumeRemaining:{state:!0},_screen:{state:!0},_currentIdx:{state:!0},_selected:{state:!0},_selectedAnswers:{state:!0},_matchAnswers:{state:!0},_shortAnswerText:{state:!0},_answered:{state:!0},_answeredSet:{state:!0},_userAnswers:{state:!0},_score:{state:!0},_maxPoints:{state:!0},_feedbackText:{state:!0},_feedbackPositive:{state:!0},_advanceTimer:{state:!0},_megaConfettiFrameId:{state:!0},_bankStatus:{state:!0},_shuffledQuestions:{state:!0},_autoSaveInterval:{state:!0},_editing:{state:!0},_tempQuestions:{state:!0},_editingIndex:{state:!0},_tempQuestionText:{state:!0},_tempQuestionImage:{state:!0},_tempQuestionType:{state:!0},_tempQuestionPoints:{state:!0},_tempChoice0:{state:!0},_tempChoice1:{state:!0},_tempChoice2:{state:!0},_tempChoice3:{state:!0},_tempChoice4:{state:!0},_tempChoiceImage0:{state:!0},_tempChoiceImage1:{state:!0},_tempChoiceImage2:{state:!0},_tempChoiceImage3:{state:!0},_tempChoiceImage4:{state:!0},_tempCorrectIndex:{state:!0},_tempCorrectAnswers:{state:!0},_tempLeftItems:{state:!0},_tempRightItems:{state:!0},_tempCorrectPairs:{state:!0},_tempAcceptedAnswers:{state:!0},_tempAcceptedStatements:{state:!0},_tempStatements:{state:!0},_editorOrigin:{state:!0},_importText:{state:!0},_importStatus:{state:!0},_reviewMode:{state:!0}}}constructor(){super(),this.t={...this.t,importTitle:"Impor Soal (JSON / .txt)",importFromText:"Impor dari Teks",importPlaceholder:'[{"question":"...","choices":["A","B"],"correctIndex":0}]'};let t=Xe;t&&typeof t!="function"&&typeof t.default=="function"&&(t=t.default),this._confettiFn=t,this.questions=vt,this.judul="Evaluasi Kuis Interaktif",this.appsScriptUrl="",this.kdMateri="Pertemuan 1",this.kategori="sumatif_lm",this.mode="siswa",this.hideConfetti=!1,this.hideAnswers=!1,this.hideScore=!1,this.shuffleChoices=!1,this.shuffleQuestions=!1,this.lockAfterComplete=!0,this.showQuestionNav=!0,this.allowBackwardNav=!1,this.practiceMode=!1,this.questionDelay=1800,this.reviewAnswers=!0,this.editable=!1,this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.timerDuration=0,this.timerAutostart=!0,this.timerMinutes=0,this.timerSeconds=0,this.hidePauseRestart=!0,this._screen="start",this._currentIdx=0,this._selected=-1,this._quizEngine=new Ze(this),this._questionRenderer=new se,this._scoreCalculator=new re,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._answered=!1,this._answeredSet=new Set,this._userAnswers=new Map,this._score=0,this._maxPoints=0,this._feedbackText="",this._feedbackPositive=!1,this._advanceTimer=null,this._megaConfettiFrameId=null,this._bankStatus="",this._bankLoaded=!1,this._confettiFired=!1,this._shuffledQuestions=[],this._locked=!1,this._lockChecked=!1,this._attemptStart=0,this._sessionToken=null,this._sessionExpired=!1,this._resumeRemaining=0,this._editing=!1,this._tempQuestions=[],this._editingIndex=-1,this._editorOrigin="result",this._importText="",this._importStatus="",this._reviewMode=!1,this._resetEditorForm(),this._autoSaveInterval=null,this._authHandler=this._authHandler.bind(this)}static get styles(){return[super.styles,q`
        :host { display: block; font-family: var(--ddd-font-navigation, system-ui, sans-serif); }
        .quiz-card {
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-6);
          max-width: 680px;
          margin: 0 auto;
          box-shadow: var(--ddd-boxShadow-sm);
        }
        .locked-box {
          text-align: center;
          border: 2px dashed var(--ddd-theme-primary);
        }
        .lock-icon { font-size: 40px; }
        .lock-msg { color: var(--ddd-theme-secondary); font-weight: 600; }
        .quiz-title { color: var(--ddd-theme-primary); font-size: var(--ddd-font-size-l); font-weight: 800; margin-top: 0; text-align: center; }
        .btn-start {
          display: block; width: 100%; padding: var(--ddd-spacing-4); background-color: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary);
          border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .btn-start:hover { background-color: var(--ddd-theme-accent); }
        .question-text { font-size: var(--ddd-font-size-4xs); font-weight: 700; color: var(--ddd-theme-on-surface); margin-bottom: var(--ddd-spacing-4); }
        .hint-box { margin-bottom: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-sm); padding: var(--ddd-spacing-3); background: var(--ddd-theme-polaris-surface-hover); }
        .hint-box summary { cursor: pointer; font-weight: 700; font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-primary); list-style: none; }
        .hint-box summary::before { content: "💡 "; }
        .hint-box div { margin-top: var(--ddd-spacing-2); font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-default-text); }
        .question-nav {
            display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: var(--ddd-spacing-4);
            padding: var(--ddd-spacing-3);
            background: var(--ddd-theme-polaris-surface-hover);
            border: var(--ddd-border-xs);
            border-radius: var(--ddd-radius-sm);
          }
          .question-nav .q-dot {
            min-width: 36px; min-height: 36px; padding: 0 8px;
            border: var(--ddd-border-sm); background: var(--ddd-theme-default-white);
            color: var(--ddd-theme-on-surface);
            border-radius: var(--ddd-radius-sm);
            font-weight: 700; font-size: var(--ddd-font-size-4xs);
            cursor: pointer; transition: background 0.15s, color 0.15s, border-color 0.15s;
            font-family: inherit;
          }
          .question-nav .q-dot:hover:not(.disabled) { border-color: var(--ddd-theme-primary); }
          .question-nav .q-dot.current {
            background: var(--ddd-theme-primary);
            color: var(--ddd-theme-on-primary);
            border-color: var(--ddd-theme-primary);
          }
          .question-nav .q-dot.answered:not(.current) {
            border-color: var(--ddd-theme-success);
            color: var(--ddd-theme-success);
          }
          .question-nav .q-dot.disabled {
            background: var(--ddd-theme-polaris-surface-hover);
            color: var(--ddd-theme-secondary);
            cursor: not-allowed; opacity: 0.55;
            border-color: var(--ddd-theme-polaris-border);
          }
          .question-nav .q-dot.unanswered {
            background: var(--ddd-theme-warning-light);
            border-color: var(--ddd-theme-warning);
            color: var(--ddd-theme-warning-text);
          }
        .question-image img { max-width: 100%; max-height: 260px; border-radius: 10px; margin-bottom: var(--ddd-spacing-4); border: var(--ddd-border-xs); }
        .choices-stack { display: flex; flex-direction: column; gap: 10px; }
        .choice-row {
          padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface-hover); border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-sm); cursor: pointer; font-size: var(--ddd-font-size-4xs); font-weight: 500;
          transition: all 0.2s; text-align: left;
        }
        .choice-row:hover:not(.disabled) { border-color: var(--ddd-theme-primary); background: var(--ddd-theme-polaris-surface-hover); }
        .choice-row.selected { border-color: var(--ddd-theme-primary); background: var(--ddd-theme-polaris-surface-hover); }
        .choice-row.correct { border-color: var(--ddd-theme-success); background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); font-weight: 700; }
        .choice-row.wrong { border-color: var(--ddd-theme-error); background: var(--ddd-theme-error-light); color: var(--ddd-theme-error-text); }
        .choice-image { max-height: 64px; vertical-align: middle; margin-top: 6px; border-radius: var(--ddd-radius-xs); }

        .result-box { text-align: center; padding: var(--ddd-spacing-4) 0; }
        .score-circle {
          width: 100px; height: 100px; border-radius: var(--ddd-radius-circle); background: var(--ddd-theme-polaris-surface-hover); color: var(--ddd-theme-primary);
          display: flex; align-items: center; justify-content: center; font-size: var(--ddd-font-size-xl); font-weight: 800; margin: 0 auto var(--ddd-spacing-4);
          border: var(--ddd-border-lg);
        }
        .err-chip {
          display: block; margin: var(--ddd-spacing-3) auto 0; max-width: 640px; background: var(--ddd-theme-error-light); border: var(--ddd-border-xs);
          color: var(--ddd-theme-error-text); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-2) var(--ddd-spacing-3); font-size: var(--ddd-font-size-4xs); font-weight: 600;
        }

        .pgk-table { width: 100%; border-collapse: collapse; margin: var(--ddd-spacing-3) 0; }
        .pgk-table th { text-align: left; padding: var(--ddd-spacing-3) var(--ddd-spacing-3); background: var(--ddd-theme-polaris-surface-hover); border-bottom: var(--ddd-border-sm); font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-secondary); }
        .pgk-table td { padding: var(--ddd-spacing-3) var(--ddd-spacing-3); border-bottom: 1px solid var(--ddd-theme-polaris-border); font-size: var(--ddd-font-size-4xs); }
        .pgk-table .pgk-cell { text-align: center; }
        .matching-container, .short-answer-container { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); margin: var(--ddd-spacing-3) 0; }
        .matching-row { display: flex; align-items: center; gap: var(--ddd-spacing-3); flex-wrap: wrap; }
        .matching-item { font-weight: 600; font-size: var(--ddd-font-size-4xs); min-width: 180px; }
        .matching-select {
          flex: 1; min-width: 180px; padding: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-4xs); font-family: inherit; background: var(--ddd-theme-default-white);
        }
        .short-answer-input {
          width: 100%; padding: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-4xs); font-family: inherit; box-sizing: border-box;
        }
        .short-answer-input:focus { outline: none; border-color: var(--ddd-theme-primary); box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring); }
        .btn-submit {
          display: block; padding: var(--ddd-spacing-3) var(--ddd-spacing-5); background-color: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary);
          border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; margin-top: var(--ddd-spacing-3);
        }
        .btn-submit:hover { background-color: var(--ddd-theme-accent); }
        .practice-nav .btn-back { flex: 1; padding: var(--ddd-spacing-3); background: var(--ddd-theme-polaris-surface); color: var(--ddd-theme-on-surface); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; }
        .practice-nav .btn-back:disabled { opacity: 0.4; cursor: not-allowed; }
        .practice-nav .btn-next { flex: 2; padding: var(--ddd-spacing-3); background: var(--ddd-theme-polaris-primary); color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; }
        .practice-nav .btn-next:disabled { opacity: 0.4; cursor: not-allowed; }
        .feedback-area {
          margin-top: var(--ddd-spacing-4); padding: var(--ddd-spacing-3) var(--ddd-spacing-3); border-radius: var(--ddd-radius-md); font-size: var(--ddd-font-size-4xs); font-weight: 600;
        }
        .feedback-area.positive { background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); border: var(--ddd-border-xs); }
        .feedback-area.negative { background: var(--ddd-theme-error-light); color: var(--ddd-theme-error-text); border: var(--ddd-border-xs); }

        .review-summary { display: flex; justify-content: center; gap: var(--ddd-spacing-5); margin: var(--ddd-spacing-4) 0; }
        .review-stat { text-align: center; }
        .review-stat-label { display: block; font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-secondary); font-weight: 600; }
        .review-stat-value { display: block; font-size: var(--ddd-font-size-3xs); font-weight: 800; }
        .review-stat-value.positive { color: var(--ddd-theme-success-text); }
        .review-stat-value.negative { color: var(--ddd-theme-error-text); }
        .review-questions { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); margin: var(--ddd-spacing-4) 0; }
        .review-question { border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-3); background: var(--ddd-theme-polaris-surface-hover); }
        .review-qnum { font-size: var(--ddd-font-size-4xs); font-weight: 800; color: var(--ddd-theme-primary); margin-bottom: var(--ddd-spacing-2); }
        .review-qtext { font-size: var(--ddd-font-size-4xs); font-weight: 700; color: var(--ddd-theme-on-surface); margin-bottom: var(--ddd-spacing-3); }
        .review-mc { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
        .review-mc li { padding: 4px 8px; border-radius: var(--ddd-radius-xs); font-size: var(--ddd-font-size-4xs); }
        .review-mc li.review-correct { background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); font-weight: 700; }
        .review-mc li.review-selected-wrong { background: var(--ddd-theme-error-light); color: var(--ddd-theme-error-text); font-weight: 700; }
        .review-short { margin: var(--ddd-spacing-2) 0; font-size: var(--ddd-font-size-4xs); }
        .review-label { font-weight: 700; color: var(--ddd-theme-secondary); }
        .review-value { color: var(--ddd-theme-on-surface); }
        .review-badge { display: inline-block; padding: 2px 10px; border-radius: var(--ddd-radius-xs); font-size: var(--ddd-font-size-4xs); font-weight: 700; margin-top: var(--ddd-spacing-2); }
        .review-badge.positive { background: var(--ddd-theme-success-light); color: var(--ddd-theme-success-text); }
        .review-badge.negative { background: var(--ddd-theme-error-light); color: var(--ddd-theme-error-text); }

        .btn-edit-soal {
          display: block; width: 100%; padding: var(--ddd-spacing-3); margin-top: var(--ddd-spacing-3); background-color: var(--ddd-theme-secondary);
          color: var(--ddd-theme-on-primary); border: none; border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-4xs); font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .btn-edit-soal:hover { filter: brightness(0.9); }
        .editor-screen { max-width: 760px; }
        .edit-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--ddd-spacing-3); }
        .edit-header .btn-edit-soal { width: auto; margin: 0; padding: var(--ddd-spacing-2) var(--ddd-spacing-4); }
        .editor-content { display: flex; flex-direction: column; gap: var(--ddd-spacing-4); }
        .add-question-form {
          border: var(--ddd-border-sm); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4);
          background: var(--ddd-theme-polaris-surface-hover);
        }
        .editor-select { padding: 6px 10px; border-radius: 6px; border: 1px solid var(--ddd-theme-polaris-border); font-size: 13px; font-family: inherit; }
        .editor-input { padding: 6px 10px; border-radius: 6px; border: 1px solid var(--ddd-theme-polaris-border); font-size: 13px; font-family: inherit; box-sizing: border-box; }
        .editor-textarea { width: 100%; padding: 8px; border-radius: 6px; border: 1px solid var(--ddd-theme-polaris-border); font-size: 12px; font-family: monospace; box-sizing: border-box; }
        .question-text-input, .edit-question-text-input {
          width: 100%; min-height: 70px; padding: var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-4xs); font-family: inherit; box-sizing: border-box; margin: 4px 0;
        }
        .questions-list { display: flex; flex-direction: column; gap: 10px; }
        .question-card {
          border: var(--ddd-border-xs); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-3);
          background: var(--ddd-theme-default-white);
        }
        .question-card .btn-edit-soal { width: auto; padding: 6px 12px; font-size: 12px; }
        .quiz-timer { display: flex; justify-content: center; margin-bottom: var(--ddd-spacing-4); }
        .import-box { border: var(--ddd-border-sm); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); background: var(--ddd-theme-polaris-surface-hover); margin-top: var(--ddd-spacing-4); }
        .import-box h4 { margin: 0 0 var(--ddd-spacing-3) 0; color: var(--ddd-theme-primary); font-size: var(--ddd-font-size-4xs); }
      `,q`
        /* ===== DARK MODE (DDD-token swap, gated on body.dark-mode) ===== */
        :host-context(body.dark-mode) :host {
          --dk-bg: #0b1020;
          --dk-card: #111827;
          --dk-soft: #1f2937;
          --dk-border: #2a3245;
          --dk-text: #e5e7eb;
          --dk-text-soft: #94a3b8;
          --dk-text-strong: #f8fafc;
          --ddd-theme-background: var(--dk-bg);
          --ddd-theme-color: var(--dk-text);
          --ddd-theme-surface: var(--dk-card);
          --ddd-theme-default-surface: var(--dk-card);
          --ddd-theme-default-text: var(--dk-text);
          --ddd-theme-default-white: #1f2937;
          --ddd-theme-on-surface: var(--dk-text);
          --ddd-theme-on-primary: #f8fafc;
          --ddd-theme-primary: #c4b5fd;
          --ddd-theme-accent: #818cf8;
          --ddd-theme-secondary: var(--dk-text-soft);
          --ddd-theme-polaris-surface: var(--dk-card);
          --ddd-theme-polaris-border: var(--dk-border);
          --ddd-theme-polaris-surface-hover: var(--dk-soft);
          --ddd-theme-polaris-primary: #4f46e5;
          --ddd-theme-success: #6ee7b7;
          --ddd-theme-success-light: #064e3b;
          --ddd-theme-success-text: #6ee7b7;
          --ddd-theme-success-dark: #047857;
          --ddd-theme-warning: #fcd34d;
          --ddd-theme-warning-light: #78350f;
          --ddd-theme-warning-text: #fde68a;
          --ddd-theme-error: #fca5a5;
          background: var(--dk-bg);
          color: var(--dk-text);
        }
        :host-context(body.dark-mode) .quiz-card,
        :host-context(body.dark-mode) .question-card,
        :host-context(body.dark-mode) .locked-box,
        :host-context(body.dark-mode) .result-box,
        :host-context(body.dark-mode) .editor-screen,
        :host-context(body.dark-mode) .editor-content,
        :host-context(body.dark-mode) .add-question-form,
        :host-context(body.dark-mode) .import-box {
          background: var(--dk-card);
          color: var(--dk-text);
          border-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .quiz-title,
        :host-context(body.dark-mode) .question-text,
        :host-context(body.dark-mode) .import-box h4 { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .lock-msg { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .btn-start { background-color: #4f46e5; color: #f8fafc; }
        :host-context(body.dark-mode) .btn-start:hover { background-color: #6366f1; }
        :host-context(body.dark-mode) .choice-row { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .choice-row.correct { border-color: #22c55e; background: #064e3b; color: #6ee7b7; }
        :host-context(body.dark-mode) .choice-row.wrong { border-color: #f87171; background: #7f1d1d; color: #fecaca; }
        :host-context(body.dark-mode) .choice-row.selected { border-color: #818cf8; background: #1e1b4b; color: #e0e7ff; }
        :host-context(body.dark-mode) .editor-select,
        :host-context(body.dark-mode) .editor-input,
        :host-context(body.dark-mode) .editor-textarea,
        :host-context(body.dark-mode) .short-answer-input,
        :host-context(body.dark-mode) .matching-select { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .pgk-table { color: var(--dk-text); }
        :host-context(body.dark-mode) .pgk-table th { background: var(--dk-soft); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .pgk-table td { border-bottom-color: var(--dk-border); }
        :host-context(body.dark-mode) .err-chip { background: #7f1d1d; color: #fecaca; border-color: #991b1b; }
        :host-context(body.dark-mode) .btn-submit { background: #4f46e5; color: #f8fafc; }
        :host-context(body.dark-mode) .btn-submit:hover { background: #6366f1; }
        :host-context(body.dark-mode) .btn-edit-soal { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .feedback-area { background: var(--dk-soft); color: var(--dk-text); }
        :host-context(body.dark-mode) .score-circle { background: linear-gradient(135deg, #312e81, #4338ca); color: #f8fafc; }
        :host-context(body.dark-mode) .hint-box { background: var(--dk-soft); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .question-nav { background: var(--dk-soft); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .question-nav .q-dot { background: var(--dk-card); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .question-nav .q-dot.unanswered {
          background: #78350f;
          border-color: #fcd34d;
          color: #fde68a;
        }
        :host-context(body.dark-mode) .review-question { background: var(--dk-soft); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .review-qtext { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .practice-nav .btn-back { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .practice-nav .btn-next { background: #4f46e5; color: #f8fafc; }
      `]}updated(t){if(super.updated(t),t.has("questions")&&!Array.isArray(this.questions)&&(this.questions=vt),t.has("timerMinutes")||t.has("timerSeconds")){const e=(this.timerMinutes||0)*60+(this.timerSeconds||0);this.timerDuration!==e&&(this.timerDuration=e)}else if(t.has("timerDuration")){const e=Math.floor((this.timerDuration||0)/60),a=(this.timerDuration||0)%60;this.timerMinutes!==e&&(this.timerMinutes=e),this.timerSeconds!==a&&(this.timerSeconds=a)}this._screen==="question"&&this._resumeRemaining>0&&(this._resumeRemaining=0)}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[Z.tag]&&(t.elementList[Z.tag]=Z.haxProperties)}globalThis.addEventListener("quiz-user-login",this._authHandler),globalThis.addEventListener("quiz-user-session-changed",this._authHandler),this._loadSession(),this._resumeAttemptIfAny(),this._handleKeyboard=this._handleKeyboard.bind(this),globalThis.addEventListener("keydown",this._handleKeyboard)}disconnectedCallback(){this._advanceTimer&&(clearTimeout(this._advanceTimer),this._advanceTimer=null),globalThis.removeEventListener("quiz-user-login",this._authHandler),globalThis.removeEventListener("quiz-user-session-changed",this._authHandler),globalThis.removeEventListener("keydown",this._handleKeyboard),this._cancelMegaConfetti(),super.disconnectedCallback()}_authHandler(t){const e=t&&t.detail||{};e.studentId&&(this.studentId=e.studentId),e.nama&&(this.studentName=e.nama),e.nis&&(this.studentNis=e.nis),e.absen&&(this.studentAbsen=e.absen),e.kelas&&(this.studentKelas=e.kelas)}_handleKeyboard(t){if(this._screen!=="question")return;const e=this._getActiveQuestions();if(!e||e.length===0)return;const a=t.target&&t.target.tagName;if(!(a==="INPUT"||a==="TEXTAREA"||a==="SELECT"))switch(t.key){case"ArrowLeft":t.preventDefault(),this._goToPrevQuestion();break;case"ArrowRight":t.preventDefault(),this._goToNextQuestion();break;case"Enter":!this._answered&&this._screen==="question"&&(t.preventDefault(),this._submitCurrentAnswer());break;default:const i=parseInt(t.key,10);!isNaN(i)&&i>=1&&i<=e.length&&(t.preventDefault(),this._goToQuestion(i-1));break}}_submitCurrentAnswer(){if(this._answered)return;const t=this._getActiveQuestions()[this._currentIdx];if(!t)return;const e=this._siapkanSoal(t);switch(e.type||"mc"){case"shortAnswer":this._submitShortAnswer();break;case"pgk":this._submitPGK();break;case"matching":this._submitMatching();break;case"mc":e.isMulti&&this._submitMultiAnswers();break}}_loadSession(){try{const t=JSON.parse(globalThis.localStorage.getItem("quiz_user_session"));if(!t||!t.studentId)return;if(t.expiresAt&&Date.now()>t.expiresAt){globalThis.localStorage.removeItem("quiz_user_session");return}this.studentId=t.studentId||"",this.studentName=t.nama||"",this.studentNis=t.nis||"",this.studentAbsen=t.absen||"",this.studentKelas=t.kelas||""}catch{}}_cancelMegaConfetti(){this._megaConfettiFrameId&&(globalThis.cancelAnimationFrame(this._megaConfettiFrameId),this._megaConfettiFrameId=null)}_onTimerExpired(){this._screen==="question"&&this._selesaiKuis()}forceFinish(){this._selesaiKuis()}async _muatBankSoal(){if(!(this._bankLoaded||!this.appsScriptUrl||this.hasAttribute("questions"))){this._bankLoaded=!0;try{const t=this.appsScriptUrl.includes("?")?"&":"?",e=await fetch(this.appsScriptUrl+t+"action=getBankSoal");if(!e.ok)return;const a=await e.text(),i=JSON.parse(a);if(i&&i.status==="ok"&&Array.isArray(i.soal)){const s=i.soal.filter(r=>r&&(r.soal||r.question)&&(Array.isArray(r.choices)?r.choices.length>=2:!0));s.length>0&&(this.questions=s.slice(0,10),this._bankStatus="Soal dimuat dari Bank Soal (AKM).",this.requestUpdate())}}catch{}}}_getChoiceText(t){return typeof t=="string"?t:t&&t.text||""}_getChoiceImage(t){return t&&typeof t=="object"&&t.image||""}_normalisasiSoal(t){if(!t)return null;if(t&&Array.isArray(t.choices)&&t.choices.length)return t;const e=[t.a,t.b,t.c,t.d,t.e,t.f].filter(i=>i!==""&&i!=null&&i!==void 0);if(!e.length)return t;const a=["a","b","c","d","e","f"];return{...t,question:t.question||t.q||"",choices:e,correctIndex:typeof t.correctIndex=="number"?t.correctIndex:a.indexOf(String(t.k).toLowerCase())}}_siapkanSoal(t){if(!t)return null;const e=this._normalisasiSoal(t);let a=[],i=[];Array.isArray(e.choices)&&e.choices.length&&(a=e.choices.map(l=>this._getChoiceText(l)),i=e.choices.map(l=>this._getChoiceImage(l))),a.length||(a=["Pilihan A","Pilihan B"]),i.length||(i=a.map(()=>""));let s=null,r=[];const d=["a","b","c","d","e","f"];if(Array.isArray(e.correctAnswers))r=e.correctAnswers;else if(typeof e.correctIndex=="number"&&e.correctIndex>=0&&e.correctIndex<a.length)r=[e.correctIndex];else if(e.correctIndex!=null&&!isNaN(parseInt(e.correctIndex,10))){const l=parseInt(e.correctIndex,10);l>=0&&l<a.length&&(r=[l])}else e.k!=null&&d.includes(String(e.k).toLowerCase())&&(r=[d.indexOf(String(e.k).toLowerCase())]);return r[0]!=null&&(s=a[r[0]]),s===null&&(s=a[0]),{type:e.type||"mc",teks:e.question||e.q||e.soal||"",image:e.image||"",pilihan:a,pilihanImages:i,kunci:s,correctAnswers:r,isMulti:r.length>1,statements:Array.isArray(e.statements)?e.statements:[],leftItems:Array.isArray(e.leftItems)?e.leftItems:[],rightItems:Array.isArray(e.rightItems)?e.rightItems:[],correctPairs:e.correctPairs||{},acceptedAnswers:Array.isArray(e.acceptedAnswers)?e.acceptedAnswers:[],hint:e.hint||"",originalIndex:e._originalIndex>=0?e._originalIndex:null}}_fireConfetti(){if(!(this.hideConfetti||typeof this._confettiFn!="function"))try{const t={ticks:220,gravity:.85,decay:.92,startVelocity:42,zIndex:9999};this._confettiFn({...t,particleCount:70,spread:85,scalar:1.05,origin:{x:.5,y:.62}}),this._confettiFn({...t,particleCount:45,angle:58,spread:65,scalar:1.1,origin:{x:.1,y:.7}}),this._confettiFn({...t,particleCount:45,angle:122,spread:65,scalar:1.1,origin:{x:.9,y:.7}})}catch(t){console.error("[kuis-ledakan] Konfeti gagal dieksekusi",t)}}_fireMegaConfetti(){if(!(this.hideConfetti||typeof this._confettiFn!="function"))try{this._cancelMegaConfetti();const t=Date.now()+900,e=()=>{this._confettiFn({particleCount:3,angle:60,spread:55,origin:{x:0,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),this._confettiFn({particleCount:3,angle:120,spread:55,origin:{x:1,y:.7},colors:["#ff0000","#00ff00","#0000ff","#ffff00"]}),Date.now()<t?this._megaConfettiFrameId=globalThis.requestAnimationFrame(e):this._megaConfettiFrameId=null};this._megaConfettiFrameId=globalThis.requestAnimationFrame(e)}catch(t){console.error("[kuis-ledakan] Mega konfeti gagal dieksekusi",t)}}_shuffleArray(t){const e=[...t];for(let a=e.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[e[a],e[i]]=[e[i],e[a]]}return e}get _inHaxEditor(){return!!(globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"&&globalThis.HaxStore.requestAvailability().editMode)}_maxPoinSoal(t){if(!t)return 1;if(t.type==="pgk"){const e=Array.isArray(t.statements)?t.statements.length:0;return t.points!=null?t.points:e||1}if(t.type==="matching"){const e=Array.isArray(t.leftItems)?t.leftItems.length:0;return t.points!=null?t.points:e||1}return t.points||1}_startQuiz(){this._screen="question",this._currentIdx=0,this._score=0,this._confettiFired=!1,this._answeredSet=new Set,this._userAnswers=new Map,this._reviewMode=!1,this._questionStartTime=Date.now();const t=Array.isArray(this._shuffledQuestions)&&this._shuffledQuestions.length>0;let e=Array.isArray(this.questions)?this.questions:vt;t?e=this._shuffledQuestions:(this.shuffleQuestions&&(e=this._shuffleArray(e)),Array.isArray(e)||(e=vt)),this._maxPoints=(this.questions||[]).reduce((a,i)=>a+this._maxPoinSoal(i),0)||1,t||(this._buatSessionToken(),this._saveSessionToken(),this.shuffleChoices?this._shuffledQuestions=e.map((a,i)=>{if(!Array.isArray(a.choices)||a.type==="pgk"||a.type==="matching")return{...a,_originalIndex:i};const s=a.choices.map((d,l)=>({text:d,origIndex:l})),r=this._shuffleArray(s);return{...a,choices:r.map(d=>d.text),_correctMap:r.map(d=>d.origIndex),_originalIndex:i}}):this._shuffledQuestions=e.map((a,i)=>({...a,_originalIndex:i}))),Array.isArray(this._shuffledQuestions)||(this._shuffledQuestions=[]),this._resetState(),this._autoSaveInterval=setInterval(()=>{this._screen==="question"&&this.lockAfterComplete&&this.studentId&&this.kdMateri&&this._saveAttempt()},15e3),this.lockAfterComplete&&this.studentId&&this.kdMateri&&(this._attemptStart=Date.now(),this._saveAttempt()),!t&&this.lockAfterComplete&&this.studentId&&this.kdMateri&&this.kategori!=="formatif"&&this._logActivity("timer_mulai",{kategori:this.kategori||"sumatif_lm",kdMateri:this.kdMateri,metadataKuis:this.judul,timestamp:new Date().toISOString(),durasiUlangan:this.timerDuration||this.duration||300})}_saveAttempt(){if(!(!this.lockAfterComplete||!this.studentId||!this.kdMateri))try{const t=Array.from(this._userAnswers.entries()).map(([e,a])=>[e,a]);localStorage.setItem(this._attemptKey(),JSON.stringify({start:this._attemptStart,duration:this.timerDuration,questions:this._shuffledQuestions,userAnswers:t,currentIdx:this._currentIdx,sessionToken:this._sessionToken}))}catch{}}_sessionTokenKey(){return`kuis-ledakan:session:${this.studentId}:${this.kdMateri}`}_buatSessionToken(){try{const t=new Uint8Array(16);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),this._sessionToken=`${Date.now()}-${e}`,this._sessionToken}catch{return this._sessionToken=`sess-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,this._sessionToken}}_saveSessionToken(){if(!(!this.studentId||!this.kdMateri||!this._sessionToken))try{localStorage.setItem(this._sessionTokenKey(),JSON.stringify({token:this._sessionToken,start:Date.now(),duration:this.timerDuration||this.duration||300}))}catch{}}_loadSessionToken(){if(!this.studentId||!this.kdMateri)return null;try{const t=JSON.parse(localStorage.getItem(this._sessionTokenKey())||"null");return!t||!t.token?null:Date.now()-t.start>t.duration*1e3+6e4?(localStorage.removeItem(this._sessionTokenKey()),null):(this._sessionToken=t.token,t.token)}catch{return null}}_clearSessionToken(){if(this._sessionToken=null,this.studentId&&this.kdMateri)try{localStorage.removeItem(this._sessionTokenKey())}catch{}}_cekSesiAktif(){const t=this._loadSessionToken();return t?(this._sessionExpired=!1,{active:!0,token:t}):(this._sessionExpired=!0,{active:!1,token:null})}_getActiveQuestions(){return this._shuffledQuestions.length>0?this._shuffledQuestions:this.questions}_resetState(){this._selected=-1,this._selectedAnswers=new Set,this._matchAnswers={},this._shortAnswerText="",this._answered=!1,this._feedbackText="",this._feedbackPositive=!1}_pilihJawaban(t,e){if(!this.editable&&(this._answered||this._userAnswers.has(this._currentIdx)))return;const a=this._getActiveQuestions(),i=this._normalisasiSoal(a[this._currentIdx]),s=this._siapkanSoal(i);let r=!1;if(s.isMulti){const m=new Set(this._selectedAnswers);m.has(t)?m.delete(t):m.add(t),this._selectedAnswers=m,this._selected=t,this.requestUpdate();return}const d=this._userAnswers.get(this._currentIdx);d&&d.points&&(this._score-=d.points),this._selected=t,this._answered=!0;const l=i._correctMap?s.correctAnswers.map(m=>i._correctMap.indexOf(m)):s.correctAnswers;if(r=l.includes(t),r)this._score+=i.points||1,this._fireConfetti(),this.hideAnswers||(this._feedbackText="Mantap, Benar!",this._feedbackPositive=!0);else if(!this.hideAnswers){const m=l.map(A=>s.pilihan[A]).join(", ");this._feedbackText=`Yah, Salah. Jawaban benar: ${m}`,this._feedbackPositive=!1}this._answeredSet.add(this._currentIdx);const p=this._quizEngine.getAnswerTime();this._quizEngine.isSuspiciousTiming(p)&&this._logActivity("suspicious_timing",{questionIndex:this._currentIdx,answerTimeMs:p,minThresholdMs:3e3});const c=this._scoreCalculator.calculateScore(r,i.points||1);this._userAnswers.set(this._currentIdx,{selected:t,isCorrect:r,points:r?i.points||1:0,score:c,answerTime:p,timestamp:new Date().toISOString()}),this._saveAttempt(),this._autoAdvance()}_toggleMultiAnswer(t){if(this._answered&&!this.editable)return;const e=new Set(this._selectedAnswers);e.has(t)?e.delete(t):e.add(t),this._selectedAnswers=e,this.requestUpdate()}_submitMultiAnswers(){if(this._selectedAnswers.size===0||!this.editable&&(this._answered||this._userAnswers.has(this._currentIdx)))return;const t=this._getActiveQuestions(),e=this._normalisasiSoal(t[this._currentIdx]),a=this._siapkanSoal(e),i=this._userAnswers.get(this._currentIdx);i&&i.points&&(this._score-=i.points),this._answered=!0;const s=new Set(a.correctAnswers),r=e._correctMap?new Set([...this._selectedAnswers].map(l=>e._correctMap[l])):this._selectedAnswers,d=s.size===r.size&&[...s].every(l=>r.has(l));if(d)this._score+=e.points||1,this._fireConfetti(),this.hideAnswers||(this._feedbackText="Mantap, Benar!",this._feedbackPositive=!0);else if(!this.hideAnswers){const l=[...s].map(p=>{const c=e._correctMap?e._correctMap.indexOf(p):p;return a.pilihan[c]}).join(", ");this._feedbackText=`Jawaban belum tepat. Kunci: ${l}`,this._feedbackPositive=!1}this._answeredSet.add(this._currentIdx),this._userAnswers.set(this._currentIdx,{selectedAnswers:new Set(this._selectedAnswers),isCorrect:d,points:d?e.points||1:0}),this._saveAttempt(),this._autoAdvance()}_setPGK(t,e){this._answered&&!this.editable||(this._matchAnswers={...this._matchAnswers,[t]:e})}_submitPGK(){if(!this.editable&&(this._answered||this._userAnswers.has(this._currentIdx)))return;const t=this._getActiveQuestions()[this._currentIdx],e=this._siapkanSoal(t).statements||[];if(Object.keys(this._matchAnswers).length<e.length){this._feedbackText="Pilih Benar atau Salah untuk semua pernyataan.",this._feedbackPositive=!1,this.requestUpdate();return}const a=this._userAnswers.get(this._currentIdx);a&&a.points&&(this._score-=a.points),this._answered=!0;const i=e.map(d=>d.answer);let s=0;for(let d=0;d<e.length;d++)this._matchAnswers[d]===i[d]&&s++;const r=e.length;if(s===r)this._score+=this._maxPoinSoal(t),this._fireConfetti(),this.hideAnswers||(this._feedbackText="Mantap, semua pernyataan benar!",this._feedbackPositive=!0);else if(this._score+=s,!this.hideAnswers){const d=e.map((l,p)=>`${p+1}: ${l.answer?"Benar":"Salah"}`).join(", ");this._feedbackText=`${s}/${r} pernyataan benar (+${s} poin). Kunci: ${d}`,this._feedbackPositive=s>0}this._answeredSet.add(this._currentIdx),this._userAnswers.set(this._currentIdx,{selected:{...this._matchAnswers},isCorrect:s===r,points:s,correctAnswers:e.map((d,l)=>d.answer)}),this._saveAttempt(),this._autoAdvance()}_submitMatching(){if(!this.editable&&(this._answered||this._userAnswers.has(this._currentIdx)))return;const t=this._getActiveQuestions()[this._currentIdx],e=this._siapkanSoal(t),a=e.leftItems||[];if(Object.keys(this._matchAnswers).length<a.length){this._feedbackText="Pilih pasangan untuk semua item kiri.",this._feedbackPositive=!1,this.requestUpdate();return}const i=this._userAnswers.get(this._currentIdx);i&&i.points&&(this._score-=i.points),this._answered=!0;let s=0;for(let l=0;l<a.length;l++)this._matchAnswers[l]===e.correctPairs[l]&&s++;const r=this._maxPoinSoal(t),d=Math.min(s,r);if(this._score+=d,!this.hideAnswers)if(s===a.length)this._feedbackText=`Mantap, Benar! (${s}/${a.length} pasangan, +${d} poin)`,this._feedbackPositive=!0;else if(s>0)this._feedbackText=`${s}/${a.length} pasangan benar (+${d} poin). Lanjutkan!`,this._feedbackPositive=!0;else{const l=Object.entries(e.correctPairs).map(([p,c])=>`${parseInt(p)+1}\u2192${String.fromCharCode(65+c)}`).join(", ");this._feedbackText=`Yah, Salah. Kunci: ${l}`,this._feedbackPositive=!1}!this.hideConfetti&&s===a.length&&this._fireConfetti(),this._answeredSet.add(this._currentIdx),this._userAnswers.set(this._currentIdx,{selected:{...this._matchAnswers},isCorrect:s===a.length,points:d,correctPairs:e.correctPairs}),this._saveAttempt(),this._autoAdvance()}_submitShortAnswer(){if(!this.editable&&(this._answered||this._userAnswers.has(this._currentIdx)))return;const t=this._shortAnswerText.trim().toLowerCase();if(!t){this._feedbackText="Ketik jawaban terlebih dahulu.",this._feedbackPositive=!1,this.requestUpdate();return}const e=this._getActiveQuestions()[this._currentIdx],a=this._siapkanSoal(e),i=this._userAnswers.get(this._currentIdx);i&&i.points&&(this._score-=i.points),this._answered=!0;const s=(a.acceptedAnswers||[]).map(r=>r.toLowerCase()).some(r=>t.includes(r));s?(this._score+=e.points||1,this._fireConfetti(),this.hideAnswers||(this._feedbackText="Mantap, Benar!",this._feedbackPositive=!0)):this.hideAnswers||(this._feedbackText=`Yah, Salah. Jawaban benar: ${(a.acceptedAnswers||[]).join(" / ")}`,this._feedbackPositive=!1),this._answeredSet.add(this._currentIdx),this._userAnswers.set(this._currentIdx,{text:this._shortAnswerText,isCorrect:s,points:s?e.points||1:0,correctAnswers:a.acceptedAnswers||[]}),this._saveAttempt(),this._autoAdvance()}_restoreAnswerState(t){const e=this._userAnswers.get(t);if(!e)return;const a=i=>i instanceof Set?i:Array.isArray(i)?new Set(i):i&&typeof i=="object"?new Set(Object.values(i)):new Set;if(e.selectedAnswers?(this._selectedAnswers=a(e.selectedAnswers),this._answered=!0):typeof e.selected=="number"?(this._selected=e.selected,this._answered=!0):e.text?(this._shortAnswerText=e.text,this._answered=!0):e.selected&&typeof e.selected=="object"&&(this._matchAnswers={...e.selected},this._answered=!0),this._answered&&(this._answeredSet.add(t),!this.hideAnswers)){const i=this._getActiveQuestions()[t],s=i?this._siapkanSoal(this._normalisasiSoal(i)):null;if(e.isCorrect)this._feedbackText=s&&s.type==="pgk"?"Mantap, semua pernyataan benar!":(s&&s.type,"Mantap, Benar!"),this._feedbackPositive=!0;else if(e.isCorrect===!1){if(s&&s.type==="shortAnswer"){const r=(s.acceptedAnswers||[]).join(" / ");this._feedbackText=r?"Yah, Salah. Jawaban benar: "+r:"Yah, Salah."}else if(s&&s.type==="pgk")this._feedbackText="Jawaban belum tepat. Periksa kembali pernyataan Anda.";else if(s&&s.type==="matching")this._feedbackText="Yah, Salah. Periksa kembali pasangan Anda.";else{const r=s?s.correctAnswers.map(function(d){return s.pilihan[d]}).join(", "):"";this._feedbackText=r?"Yah, Salah. Jawaban benar: "+r:"Yah, Salah."}this._feedbackPositive=!1}}}_resetForNavigation(){this._answered=!1,this._feedbackText="",this._feedbackPositive=!1}_canNavigateTo(t){const e=this._getActiveQuestions();return!(t<0||t>=e.length||this._screen==="result"||this.timerDuration>0&&this._resumeRemaining!==void 0&&this._resumeRemaining<=0&&t!==this._currentIdx||!this.practiceMode&&!this.allowBackwardNav&&this._answeredSet.has(t)&&t<this._currentIdx)}_goToQuestion(t){if(!this._canNavigateTo(t))return;const e=this._getActiveQuestions();t>=e.length||t!==this._currentIdx&&(this._advanceTimer&&(clearTimeout(this._advanceTimer),this._advanceTimer=null),this._currentIdx=t,this._questionStartTime=Date.now(),this._resetState(),this._restoreAnswerState(t),this.requestUpdate())}_goToPrevQuestion(){this._currentIdx>0&&this._goToQuestion(this._currentIdx-1)}_goToNextQuestion(){const t=this._getActiveQuestions();if(this._currentIdx<t.length-1){if(!this._answered&&this._currentIdx>=0){this._feedbackText="Silakan jawab soal ini terlebih dahulu.",this._feedbackPositive=!1,this.requestUpdate();return}this._currentIdx++,this._resetState(),this._restoreAnswerState(this._currentIdx),this.requestUpdate()}else this._currentIdx===t.length-1&&this._selesaiKuis()}_autoAdvance(){this.practiceMode||(this._advanceTimer&&clearTimeout(this._advanceTimer),this._advanceTimer=setTimeout(()=>{this._advanceTimer=null;const t=this._getActiveQuestions();this._currentIdx<t.length-1&&(this._currentIdx++,this._resetState(),this._restoreAnswerState(this._currentIdx),this.requestUpdate())},this.questionDelay||1800))}_buatIdLog(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_selesaiKuis(){if(this._screen==="result")return;this._advanceTimer&&(clearTimeout(this._advanceTimer),this._advanceTimer=null),this._autoSaveInterval&&(clearInterval(this._autoSaveInterval),this._autoSaveInterval=null),this._screen="result",this._maxPoints=(this.questions||[]).reduce((r,d)=>r+this._maxPoinSoal(d),0)||1;const t=re.calculatePercentage(this._score,this._maxPoints),e=Math.max(0,Math.min(100,t));!this._confettiFired&&!this.hideConfetti&&(this._confettiFired=!0,e>=80?this._fireMegaConfetti():this._fireConfetti());const a=this._buatIdLog(),i=Array.from(this._userAnswers.entries()).map(([r,d])=>({questionIndex:r,answerTime:d.answerTime||0,timestamp:d.timestamp})),s=this._bacaAuditSingkat();this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:{id_log:a,tipe:"quiz",payload:{score:e,jenisKuis:this.kategori,kdMateri:this.kdMateri,kategori:this.kategori,metadataKuis:this.judul,timestamp:new Date().toISOString(),answerTimings:i,sessionToken:this._sessionToken,audit_singkat:s}},bubbles:!0,composed:!0})),this.closest("dasbor-kuis")||this._kirimHasilLangsung(a,e),this.lockAfterComplete&&(this._locked=!0),this._clearSessionToken();try{localStorage.removeItem(this._attemptKey())}catch{}}_logActivity(t,e={}){try{if(["timer_mulai","suspicious_timing","tab_switch","window_blur","window_focus"].includes(t)){this._enqueueAudit(t,e);return}this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:{tipe:t,payload:{...e,studentId:this.studentId,kdMateri:this.kdMateri}},bubbles:!0,composed:!0}))}catch{}}_auditQueueKey(){return`kuisAuditQueue_${this.studentId}_${this.kdMateri}`}_bacaAuditQueue(){try{const t=localStorage.getItem(this._auditQueueKey());return t?JSON.parse(t):null}catch{return null}}_simpanAuditQueue(t){try{localStorage.setItem(this._auditQueueKey(),JSON.stringify(t))}catch{}}_enqueueAudit(t,e={}){if(!this.studentId||!this.kdMateri)return null;const a=Date.now();let i=this._bacaAuditQueue();return(!i||i.state==="done")&&(i={id_log:this._buatIdLogAudit(),studentId:this.studentId,kdMateri:this.kdMateri,snapshot:{mulai_detik:this._attemptStart||a,durasi_detik:0,total_restart:0,tab_switch:0},events:[],state:"draft",versi:1}),i.events=i.events||[],i.events.push({t,ts:a,d:e}),i.events.length>200&&i.events.splice(0,i.events.length-200),(t==="tab_switch"||t==="window_blur")&&(i.snapshot.tab_switch=(i.snapshot.tab_switch||0)+1),this._simpanAuditQueue(i),i}_buatIdLogAudit(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_bacaAuditSingkat(){const t=this._bacaAuditQueue();if(!t)return{total_restart:0,tab_switch:0,durasi_detik:this._attemptStart?Math.floor((Date.now()-this._attemptStart)/1e3):0};const e=t.snapshot&&t.snapshot.mulai_detik?t.snapshot.mulai_detik:this._attemptStart||Date.now(),a=Math.max(0,Math.floor((Date.now()-e)/1e3));return{total_restart:t.snapshot&&t.snapshot.total_restart||0,tab_switch:t.snapshot&&t.snapshot.tab_switch||0,durasi_detik:a}}_finalisasiAudit(){const t=this._bacaAuditQueue();t&&(t.snapshot=t.snapshot||{},t.snapshot.durasi_detik=this._bacaAuditSingkat().durasi_detik,t.state="ready",this._simpanAuditQueue(t))}_selesaiAudit(){const t=this._bacaAuditQueue();t&&(t.state="done",this._simpanAuditQueue(t))}async _kirimHasilLangsung(t,e){if(!this.appsScriptUrl||!this.studentId)return;const a=new Date().toISOString(),i={action:"logActivity",studentId:this.studentId,nama:this.studentName||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",type:"quiz",description:JSON.stringify({score:e,jenisKuis:this.kategori||"sumatif_lm",kdMateri:this.kdMateri||"",metadataKuis:this.judul,timestamp:a,audit_singkat:this._bacaAuditSingkat()}),timestamp:a,kdMateri:this.kdMateri||"",kategori:this.kategori||"sumatif_lm",id_log:t,sessionToken:this._sessionToken||"",audit_singkat:JSON.stringify(this._bacaAuditSingkat()||{})};try{const s=await(await fetch(`${this.appsScriptUrl}?${new URLSearchParams(i).toString()}`,{method:"GET",mode:"cors"})).text();let r=null;try{r=JSON.parse(s)}catch{}this._bankStatus=r&&r.status==="ok"?r.duplikat?"\u2705 Skor sudah tercatat sebelumnya (duplikat dilewati).":"\u2705 Skor & status kuis terkirim ke database V5.":r&&r.message?"\u26A0\uFE0F "+r.message:"\u26A0\uFE0F Backend merespons non-JSON \u2014 cek atribut apps-script-url.",this.requestUpdate()}catch{this._bankStatus="\u26A0\uFE0F Hasil tersimpan lokal; kirim ulang saat online.",this.requestUpdate()}}async _cekKunci(){if(!this.lockAfterComplete||!this.appsScriptUrl||!this.studentId||!this.kdMateri){this._lockChecked=!0;return}try{const t=`${this.appsScriptUrl}${this.appsScriptUrl.includes("?")?"&":"?"}action=getQuizLock&studentId=${encodeURIComponent(this.studentId)}&kdMateri=${encodeURIComponent(this.kdMateri)}`,e=await(await fetch(t,{method:"GET",mode:"cors"})).json();this._locked=!!(e&&e.locked)}catch{this._locked=!1}this._lockChecked=!0,this.requestUpdate()}async _bukaKunci(){if(!(!this.appsScriptUrl||!this.studentId||!this.kdMateri)){try{const t=`${this.appsScriptUrl}${this.appsScriptUrl.includes("?")?"&":"?"}action=resetQuizLock&studentId=${encodeURIComponent(this.studentId)}&kdMateri=${encodeURIComponent(this.kdMateri)}`;await fetch(t,{method:"GET",mode:"cors"})}catch{}this._locked=!1,this._autoSaveInterval&&(clearInterval(this._autoSaveInterval),this._autoSaveInterval=null),this._screen="start";try{localStorage.removeItem(this._attemptKey())}catch{}this.requestUpdate()}}async _onStartClick(){if(!this.studentId){this._redirectToLogin();return}if(await this._cekKunci(),this._locked){this.requestUpdate();return}this._cekSesiAktif().active&&!this._locked&&(this._bankStatus="\u26A0\uFE0F Sesi kuis masih aktif. Jika Anda me-refresh, sesi sebelumnya akan dilanjutkan.",this.requestUpdate()),await this._muatBankSoal(),this._startQuiz()}_redirectToLogin(){const t=document.querySelector("quiz-user-auth");t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),typeof t.focus=="function"&&t.focus()),this.dispatchEvent(new CustomEvent("kuis-need-login",{bubbles:!0,composed:!0,detail:{kdMateri:this.kdMateri}})),this.requestUpdate()}_attemptKey(){return`kuis-ledakan:attempt:${this.studentId}:${this.kdMateri}`}_resumeAttemptIfAny(){if(!this.lockAfterComplete||!this.studentId||!this.kdMateri)return;let t=null;try{t=JSON.parse(localStorage.getItem(this._attemptKey())||"null")}catch{}if(!t)return;if(!Array.isArray(t.questions)||t.questions.length===0){try{localStorage.removeItem(this._attemptKey())}catch{}return}const e=Math.floor((Date.now()-t.start)/1e3),a=(t.duration||0)-e;if(a<=0){try{localStorage.removeItem(this._attemptKey())}catch{}return}this._shuffledQuestions=t.questions,this._attemptStart=t.start,this._resumeRemaining=a,this._sessionToken=t.sessionToken||this._loadSessionToken(),typeof t.currentIdx=="number"&&(this._currentIdx=t.currentIdx),Array.isArray(t.userAnswers)&&(this._userAnswers=new Map(t.userAnswers),this._restoreAnswerState(this._currentIdx)),this._screen="question",this.requestUpdate()}render(){if(this._screen==="start")return this._locked&&this.mode!=="guru"?o`
          <div class="quiz-card locked-box">
            <div class="lock-icon">🔒</div>
            <h3 class="quiz-title">${this.judul}</h3>
            <p class="lock-msg">Kuis terkunci. Hubungi guru untuk mengulang.</p>
          </div>
        `:o`
        <div class="quiz-card">
          <h3 class="quiz-title">📝 ${this.judul}</h3>
          <p style="color: var(--ddd-theme-secondary); text-align: center; margin-bottom: var(--ddd-spacing-5);">Selesaikan seluruh pertanyaan kuis di bawah ini secara mandiri untuk mengunci status kelulusan nilai pada lembar kendali dasbor.</p>
          <button class="btn-start" @click=${this._onStartClick} aria-label="Mulai mengerjakan kuis">Mulai Pengerjaan Kuis</button>
          ${this.studentId?"":o`<p class="err-chip" style="background:var(--ddd-theme-warning-light,#fef3c7);border-color:var(--ddd-theme-warning,#fcd34d);color:var(--ddd-theme-warning-text,#92400e);margin-top:10px;">ℹ️ Harap login untuk mengerjakan kuis.</p>`}
          ${this._locked&&this.mode==="guru"?o`<button class="btn-edit-soal" @click=${this._bukaKunci} aria-label="Buka kunci kuis">🔓 Buka Kunci / Ulangi</button>`:""}
          ${this._inHaxEditor?o`<button class="btn-edit-soal" @click=${this._openEditor} aria-label="Edit soal kuis">✏️ Edit Soal</button>`:""}
        </div>
      `;if(this._screen==="editor")return this._renderEditorScreen();if(this._reviewMode&&this._screen==="question")return this._renderReviewScreen();if(this._screen==="question")return this._renderQuestionScreen();if(this._screen==="result"){const t=Math.round(this._score/this._maxPoints*100),e=Math.max(0,Math.min(100,t));return o`
        <div class="quiz-card result-box">
          <h3 class="quiz-title">🎊 Hasil Evaluasi Anda</h3>
          ${this.hideScore?"":o`<div class="score-circle" aria-label="Skor: ${e}%">${e}%</div>`}
          <p style="font-weight:700; color:var(--ddd-theme-default-text); margin-bottom:4px;">Kuis Selesai Dikerjakan!</p>
          <p style="color:var(--ddd-theme-secondary); font-size:14px; margin-top:0; margin-bottom: var(--ddd-spacing-4);">Skor Anda telah dikunci dan dikirim masuk ke antrean database tunggal V5.</p>
          ${this._bankStatus?o`<p class="err-chip">ℹ️ ${this._bankStatus}</p>`:""}
          <p class="err-chip" style="background:var(--ddd-theme-polaris-surface-hover);border-color:var(--ddd-theme-primary);color:var(--ddd-theme-primary);">ℹ️ Siswa: ${this.studentName||"-"} (NIS ${this.studentNis||"-"}, Kelas ${this.studentKelas||"-"})</p>
          ${this.mode==="guru"&&!this.hidePauseRestart?o`<button class="btn-start" style="background-color:var(--ddd-theme-secondary);" @click=${()=>{this._screen="start",this.requestUpdate()}}>Ulangi Kuis</button>`:o`<span class="err-chip">ℹ️ Kuis terkunci. Hubungi guru untuk mengulang.</span>`}
          ${this.reviewAnswers&&this._shuffledQuestions.length>0&&!this._reviewMode?o`<button class="btn-start" style="margin-top:var(--ddd-spacing-3);" @click=${this._startReviewMode}>Tinjau Jawaban</button>`:""}
        </div>
      `}}_startReviewMode(){this._reviewMode=!0,this._screen="question",this._currentIdx=0,this._resetState(),this.requestUpdate()}_renderReviewScreen(){const t=this._getActiveQuestions(),e=Math.round(this._score/this._maxPoints*100),a=Math.max(0,Math.min(100,e)),i=[...this._answeredSet].filter(d=>{const l=this._userAnswers.get(d);return l&&l.isCorrect}).length,s=[...this._answeredSet].filter(d=>{const l=this._userAnswers.get(d);return l&&!l.isCorrect}).length,r=t.length-this._answeredSet.size;return o`
      <div class="quiz-card result-box review-screen">
        <h3 class="quiz-title">🎊 Hasil Evaluasi Anda</h3>
        ${this.hideScore?"":o`<div class="score-circle" aria-label="Skor: ${a}%">${a}%</div>`}
        <div class="review-summary" role="region" aria-label="Ringkasan hasil evaluasi">
          <div class="review-stat"><span class="review-stat-label">Benar</span><span class="review-stat-value positive">${i}</span></div>
          <div class="review-stat"><span class="review-stat-label">Salah</span><span class="review-stat-value negative">${s}</span></div>
          <div class="review-stat"><span class="review-stat-label">Dilewati</span><span class="review-stat-value">${r}</span></div>
        </div>
        <div class="review-questions">
          ${t.map((d,l)=>this._renderReviewQuestion(l,d))}
        </div>
        <button class="btn-start" style="margin-top:var(--ddd-spacing-4);" @click=${()=>{this._reviewMode=!1,this._screen="result",this.requestUpdate()}}>Selesai</button>
      </div>
    `}_renderReviewQuestion(t,e){const a=this._normalisasiSoal(e),i=this._siapkanSoal(a);if(!i)return o``;const s=this._userAnswers.get(t)||{},r=i.type||"mc",d=["A","B","C","D","E","F"],l=a._correctMap?i.correctAnswers.map(p=>a._correctMap.indexOf(p)):i.correctAnswers;return o`
      <div class="review-question">
        <div class="review-qnum">Soal ${t+1}</div>
        <div class="review-qtext">${i.teks}</div>
        ${r==="mc"?o`<ul class="review-mc">${i.pilihan.map((p,c)=>{let m="";return this.hideAnswers||(l.includes(c)?m="review-correct":(!i.isMulti&&s.selected===c||i.isMulti&&s.selectedAnswers&&s.selectedAnswers.has(c))&&(m="review-selected-wrong")),o`<li class="${m}">${d[c]||c+1}. ${p}</li>`})}</ul>`:""}
        ${r==="shortAnswer"?o`<div class="review-short"><span class="review-label">Jawaban Anda:</span> <span class="review-value">${s.text||"(tidak menjawab)"}</span></div>`:""}
        ${this.hideAnswers?"":s.isCorrect?o`<span class="review-badge positive">✓ Benar (+${s.points||0})</span>`:o`<span class="review-badge negative">✗ Salah</span>`}
      </div>
    `}_renderQuestionScreen(){const t=this._getActiveQuestions(),e=this._normalisasiSoal(t[this._currentIdx]),a=this._siapkanSoal(e);if(!a)return o`<div class="quiz-card result-box">Soal tidak valid.</div>`;const i=a.type||"mc";return o`
      <div class="quiz-card">
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:bold; color:var(--ddd-theme-secondary); margin-bottom:10px;">
          <span>Soal ${this._currentIdx+1} dari ${t.length}</span>
          ${this.hideScore?"":o`<span>Skor Berjalan: ${this._score}</span>`}
        </div>
        ${this.showQuestionNav&&t.length>1?o`<nav class="question-nav" aria-label="Navigasi nomor soal">
              ${t.map((s,r)=>{const d=r===this._currentIdx,l=this._answeredSet.has(r),p=!l&&!d,c=!this.allowBackwardNav&&l&&r<this._currentIdx;return o`<button
                  type="button"
                  class="${`q-dot ${d?"current":""} ${l?"answered":""} ${p?"unanswered":""} ${c?"disabled":""}`}"
                  ?disabled=${c}
                  aria-label="Loncat ke soal nomor ${r+1}"
                  aria-current=${d?"true":"false"}
                  @click=${()=>this._goToQuestion(r)}
                >${r+1}</button>`})}
            </nav>`:""}
        ${this.timerDuration>0?o`<div class="quiz-timer">
              <timer-kuis
                duration="${this._resumeRemaining||this.timerDuration}"
                ?autostart="${this.timerAutostart}"
                ?hide-controls="${this.hidePauseRestart}"
                @timer-kuis-expired="${this._onTimerExpired}"
              ></timer-kuis>
            </div>`:""}
        <div class="question-text">${a.teks}</div>
        ${a.image?o`<div class="question-image"><img src="${a.image}" alt="Gambar soal" loading="lazy" /></div>`:""}
        ${a.hint?o`<details class="hint-box"><summary>💡 Petunjuk</summary><div>${a.hint}</div></details>`:""}
        ${i==="pgk"?this._renderPGK(a):""}
        ${i==="matching"?this._renderMatching(a):""}
        ${i==="shortAnswer"?this._renderShortAnswer(a):""}
        ${i==="mc"?this._renderMC(a,e):""}
        ${this._feedbackText?o`<div class="feedback-area ${this._feedbackPositive?"positive":"negative"}" aria-live="polite">${this._feedbackText}</div>`:""}
        ${this._currentIdx===t.length-1?o`<button type="button" class="btn-submit" style="margin-top:var(--ddd-spacing-4);"
              @click=${this._selesaiKuis}
              aria-label="Selesai dan lihat skor">Selesai — Lihat Skor</button>`:""}
        ${this.practiceMode?o`<div class="practice-nav" style="display:flex; gap:var(--ddd-spacing-3); margin-top:var(--ddd-spacing-4);">
              <button type="button" class="btn-back"
                ?disabled=${this._currentIdx===0}
                @click=${this._goToPrevQuestion}
                aria-label="Soal sebelumnya">← Kembali</button>
              <button type="button" class="btn-next"
                ?disabled=${this._currentIdx===t.length-1?!1:!this._answered}
                @click=${this._goToNextQuestion}
                aria-label="${this._currentIdx===t.length-1?"Selesai kuis":"Soal berikutnya"}">
                ${this._currentIdx===t.length-1?"Selesai \u2192":"Berikutnya \u2192"}
              </button>
            </div>`:""}
      </div>
    `}_renderMC(t,e){return se.renderMC(e,{selected:this._selected,selectedAnswers:this._selectedAnswers,answered:this._answered,correctAnswers:e._correctMap?t.correctAnswers.map(a=>e._correctMap.indexOf(a)):t.correctAnswers,isMulti:t.isMulti,pilihan:t.pilihan,pilihanImages:t.pilihanImages,onSelect:a=>t.isMulti?this._toggleMultiAnswer(a):this._pilihJawaban(a),onToggle:a=>this._toggleMultiAnswer(a),onSubmit:()=>this._submitMultiAnswers(),hideAnswers:this.hideAnswers,editable:this.editable})}_renderPGK(t){const e=t.statements||[];return o`
      <table class="pgk-table" aria-label="Soal pilihan ganda kompleks benar atau salah">
        <thead>
          <tr><th>Pernyataan</th><th>Benar</th><th>Salah</th></tr>
        </thead>
        <tbody>
          ${e.map((a,i)=>o`
              <tr>
                <td>${a.text}</td>
                <td class="pgk-cell">
                  <input type="radio" name="pgk-${this._currentIdx}-${i}" value="true"
                    ?disabled=${this._answered&&!this.editable} @change=${()=>this._setPGK(i,!0)}
                    aria-label="Pernyataan ${i+1}: Benar" />
                </td>
                <td class="pgk-cell">
                  <input type="radio" name="pgk-${this._currentIdx}-${i}" value="false"
                    ?disabled=${this._answered&&!this.editable} @change=${()=>this._setPGK(i,!1)}
                    aria-label="Pernyataan ${i+1}: Salah" />
                </td>
              </tr>
            `)}
        </tbody>
      </table>
      ${!this._answered||this.editable?o`<button class="btn-submit" ?disabled=${this._answered&&!this.editable} @click=${this._submitPGK}>Kirim Jawaban</button>`:""}
    `}_renderMatching(t){const e=t.leftItems||[],a=t.rightItems||[];return o`
      <div class="matching-container">
        ${e.map((i,s)=>o`
            <div class="matching-row">
              <span class="matching-item">${s+1}. ${i}</span>
              <span>→</span>
              <select name="matching-${s}" class="matching-select" ?disabled=${this._answered&&!this.editable}
                @change=${r=>{this._matchAnswers={...this._matchAnswers,[s]:parseInt(r.target.value,10)},this.requestUpdate()}}
                aria-label="Pasangkan item ${s+1}">
                <option value="-1">-- Pilih --</option>
                ${a.map((r,d)=>o`
                    <option value="${d}" ?selected=${this._matchAnswers[s]===d}>${String.fromCharCode(65+d)}. ${r}</option>
                  `)}
              </select>
            </div>
          `)}
      </div>
      ${!this._answered||this.editable?o`<button class="btn-submit" ?disabled=${this._answered&&!this.editable} @click=${this._submitMatching}>Kirim Jawaban</button>`:""}
    `}_renderShortAnswer(t){return o`
      <div class="short-answer-container">
        <input type="text" name="short-answer" class="short-answer-input" ?disabled=${this._answered&&!this.editable}
          placeholder="Ketik jawaban..." .value=${this._shortAnswerText}
          @input=${e=>this._shortAnswerText=e.target.value}
          aria-label="Ketik jawaban singkat" />
      </div>
      ${!this._answered||this.editable?o`<button class="btn-submit" ?disabled=${this._answered&&!this.editable} @click=${this._submitShortAnswer}>Kirim Jawaban</button>`:""}
    `}_handleImportFile(t){const e=t.target.files&&t.target.files[0];if(!e)return;const a=new globalThis.FileReader;a.onload=()=>{try{this._parseImported(String(a.result||""))}catch(i){this._importStatus="\u26A0\uFE0F Gagal membaca file: "+(i.message||i),this.requestUpdate()}},a.onerror=()=>{this._importStatus="\u26A0\uFE0F Gagal membaca file.",this.requestUpdate()},a.readAsText(e)}_importFromText(){this._parseImported(this._importText)}_parseImported(t){const e=(t||"").trim();if(!e){this._importStatus="\u26A0\uFE0F Input kosong.",this.requestUpdate();return}let a;try{a=JSON.parse(e)}catch(r){this._importStatus="\u26A0\uFE0F Format JSON tidak valid: "+(r.message||r),this.requestUpdate();return}let i;if(Array.isArray(a))i=a;else if(a&&typeof a=="object")if(Array.isArray(a.questions))i=a.questions;else if(Array.isArray(a.soal))i=a.soal;else if(Array.isArray(a.data))i=a.data;else{this._importStatus="\u26A0\uFE0F Objek tidak mengandung array questions/soal/data.",this.requestUpdate();return}else{this._importStatus="\u26A0\uFE0F Format tidak dikenali (harus array atau objek wrapper).",this.requestUpdate();return}const s=i.map(r=>this._normalisasiUntukEditor(r)).filter(Boolean);if(s.length===0){this._importStatus="\u26A0\uFE0F Tidak ada soal valid.",this.requestUpdate();return}this._tempQuestions=[...this._tempQuestions,...s],this._saveQuestionsLocal(),this._importStatus=`\u2705 ${s.length} soal diimpor.`,this._importText="",this.requestUpdate()}_normalisasiUntukEditor(t){if(!t||typeof t!="object")return null;const e=String(t.type||t.tipe||"mc").toLowerCase(),a=t.question||t.q||t.soal||"";if(!a||typeof a!="string")return null;const i={type:e,question:a.trim(),image:t.image||"",points:t.points||1};if(e==="mc"){let s=Array.isArray(t.choices)?t.choices:[],r=typeof t.correctIndex=="number"?t.correctIndex:-1,d=Array.isArray(t.correctAnswers)?t.correctAnswers:null;if(s.length<2){const l=this._normalisasiSoal(t);l&&Array.isArray(l.choices)&&l.choices.length>=2&&(s=l.choices,d?d=l.correctAnswers:r<0&&l.correctIndex>=0?r=l.correctIndex:r<0&&t.k!=null&&(r=["a","b","c","d","e","f"].indexOf(String(t.k).toLowerCase())))}if(s.length<2)return null;i.choices=s,d&&d.length>1?i.correctAnswers=d:r>=0?i.correctIndex=r:i.correctIndex=0}else if(e==="pgk"){const s=Array.isArray(t.statements)?t.statements:[];if(s.length<2)return null;i.statements=s}else if(e==="matching"){const s=Array.isArray(t.leftItems)?t.leftItems:[],r=Array.isArray(t.rightItems)?t.rightItems:[];if(s.length<2||r.length<2)return null;i.leftItems=s,i.rightItems=r,i.correctPairs=t.correctPairs&&typeof t.correctPairs=="object"?t.correctPairs:{}}else if(e==="shortAnswer"){const s=Array.isArray(t.acceptedAnswers)?t.acceptedAnswers:t.acceptedAnswers||t.answer||t.jawaban?[String(t.acceptedAnswers||t.answer||t.jawaban)]:[];i.acceptedAnswers=s}return i}_slug(t){return String(t||"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)||"default"}_storageKey(){return"kuis-ledakan:soal:"+(this.id||this.kdMateri||this._slug(this.judul)||"default")}_saveQuestionsLocal(){try{globalThis.localStorage.setItem(this._storageKey(),JSON.stringify(this._tempQuestions))}catch{}}_loadQuestionsLocal(){try{const t=globalThis.localStorage.getItem(this._storageKey());if(!t)return null;const e=JSON.parse(t);return Array.isArray(e)?e:null}catch{return null}}_openEditor(){this._editing||(this._editing=!0,this._editingIndex=-1,this._editorOrigin="start",this._tempQuestions=JSON.parse(JSON.stringify(this.questions||vt)),this._resetEditorForm(),this._screen="editor",this.requestUpdate())}_saveAll(){this._screen==="editor"&&(!Array.isArray(this._tempQuestions)||this._tempQuestions.length===0||(this.questions=JSON.parse(JSON.stringify(this._tempQuestions)),this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"start",this._editorOrigin="start",this._saveQuestionsLocal(),this.dispatchEvent(new CustomEvent("questions-changed",{bubbles:!0,composed:!0,detail:{questions:this.questions}})),this.requestUpdate()))}_cancelAll(){this._screen==="editor"&&(this._editing=!1,this._editingIndex=-1,this._screen=this._editorOrigin||"start",this._editorOrigin="start",this.requestUpdate())}_renderEditorScreen(){const t=this._tempQuestionType||"mc";return o`
      <div class="quiz-card editor-screen">
        <header class="edit-header">
          <h3 class="quiz-title" style="margin-bottom:8px;">✏️ Edit Soal</h3>
          <div style="display:flex;gap:8px;">
            <button class="btn-edit-soal" style="margin:0;" @click=${this._cancelAll}>Batal</button>
            <button class="btn-edit-soal" style="margin:0;background-color:var(--ddd-theme-success);" @click=${this._saveAll}>💾 Simpan</button>
          </div>
        </header>

        <div class="editor-content">
          <form class="add-question-form">
            <div style="display:flex;gap:8px;margin-bottom:8px;align-items:center;flex-wrap:wrap;">
              <select class="editor-select" .value=${t} @change=${e=>{this._tempQuestionType=e.target.value,this.requestUpdate()}}>
                <option value="mc">Pilihan Ganda</option>
                <option value="pgk">PG Kompleks (Benar/Salah)</option>
                <option value="matching">Menjodohkan</option>
                <option value="shortAnswer">Isian Singkat</option>
              </select>
              <input type="text" class="editor-input" style="flex:1;min-width:160px;"
                placeholder="URL gambar soal (opsional)" .value=${this._tempQuestionImage}
                @input=${e=>{this._tempQuestionImage=e.target.value}}>
              <label style="font-size:12px;color:var(--ddd-theme-secondary);white-space:nowrap;">Poin:</label>
              <input type="number" min="1" class="editor-input" style="width:60px;text-align:center;"
                .value=${this._tempQuestionPoints} @input=${e=>{this._tempQuestionPoints=parseInt(e.target.value,10)||1}}>
            </div>
            ${this._tempQuestionImage?o`<div style="text-align:center;margin:8px 0;"><img src=${this._tempQuestionImage} style="max-width:200px;border-radius:6px;border:1px solid var(--ddd-theme-polaris-border);" alt="Pratinjau gambar soal" /></div>`:""}

            <textarea class="question-text-input" .value=${this._tempQuestionText}
              @input=${e=>this._tempQuestionText=e.target.value}
              placeholder="Tuliskan pertanyaan soal..."></textarea>

            ${t==="mc"?this._renderEditorMC():""}
            ${t==="pgk"?this._renderEditorPGK():""}
            ${t==="matching"?this._renderEditorMatching():""}
            ${t==="shortAnswer"?this._renderEditorShortAnswer():""}

            <button type="button" class="btn-submit" @click=${this._addQuestion}>➕ Tambah Soal</button>
          </form>

          <div class="questions-list">
            ${this._tempQuestions.map((e,a)=>o`
              <div class="question-card">
                ${this._editingIndex===a?o`
                  <div class="edit-form">
                    <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
                      <select class="editor-select" .value=${this._tempQuestionType} @change=${i=>{this._tempQuestionType=i.target.value,this.requestUpdate()}}>
                        <option value="mc">Pilihan Ganda</option>
                        <option value="pgk">PG Kompleks</option>
                        <option value="matching">Menjodohkan</option>
                        <option value="shortAnswer">Isian Singkat</option>
                      </select>
                      <input type="text" class="editor-input" style="flex:1;min-width:160px;"
                        placeholder="URL gambar soal" .value=${this._tempQuestionImage}
                        @input=${i=>{this._tempQuestionImage=i.target.value}}>
                      <label style="font-size:12px;color:var(--ddd-theme-secondary);white-space:nowrap;">Poin:</label>
                      <input type="number" min="1" class="editor-input" style="width:60px;text-align:center;"
                        .value=${this._tempQuestionPoints} @input=${i=>{this._tempQuestionPoints=parseInt(i.target.value,10)||1}}>
                    </div>
                    <textarea class="edit-question-text-input" .value=${this._tempQuestionText}
                      @input=${i=>this._tempQuestionText=i.target.value}
                      placeholder="Tuliskan pertanyaan soal..."></textarea>
                    ${this._tempQuestionType==="mc"?this._renderEditorMC():""}
                    ${this._tempQuestionType==="pgk"?this._renderEditorPGK():""}
                    ${this._tempQuestionType==="matching"?this._renderEditorMatching():""}
                    ${this._tempQuestionType==="shortAnswer"?this._renderEditorShortAnswer():""}
                    <div style="display:flex;gap:8px;margin-top:8px;">
                      <button type="button" class="btn-submit" @click=${this._saveEditQuestion}>💾 Simpan Perubahan</button>
                      <button type="button" class="btn-submit" style="background:var(--ddd-theme-secondary);" @click=${this._cancelEditQuestion}>Batal</button>
                    </div>
                  </div>
                `:o`
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
                    <div>
                      <strong style="color:var(--ddd-theme-primary);">[${(e.type||"mc").toUpperCase()}]</strong> ${e.question}
                      ${e.image?o`<span style="font-size:11px;color:var(--ddd-theme-secondary);">[gambar]</span>`:""}
                      <span style="font-size:11px;color:var(--ddd-theme-success);font-weight:bold;">[${e.points||1} poin]</span>
                    </div>
                    <div style="display:flex;gap:6px;">
                      <button class="btn-edit-soal" style="margin:0;padding:4px 10px;" @click=${()=>this._startEditQuestion(a)}>✏️ Edit</button>
                      <button class="btn-edit-soal" style="margin:0;padding:4px 10px;background-color:var(--ddd-theme-error);" @click=${()=>this._deleteQuestion(a)}>🗑️</button>
                    </div>
                  </div>
                `}
              </div>
              `)}
            </div>
          </div>

          <div class="import-box">
            <h4>📥 ${this.t.importTitle}</h4>
            <textarea class="editor-textarea" placeholder="${this.t.importPlaceholder}"
              .value="${this._importText}" @input="${e=>{this._importText=e.target.value}}"></textarea>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;align-items:center;">
              <button class="btn-submit" @click="${this._importFromText}">📋 ${this.t.importFromText}</button>
              <input type="file" accept=".json,.txt,application/json" @change="${this._handleImportFile}" />
            </div>
            ${this._importStatus?o`<p class="err-chip">${this._importStatus}</p>`:""}
          </div>
        </div>
      </div>
    `}_renderEditorMC(){return this._tempCorrectAnswers.length>1,o`
      <div class="choices-container">
        ${[0,1,2,3,4].map(t=>o`
          <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px;">
            <input class="editor-input" style="flex:1;min-width:120px;" .value=${this[`_tempChoice${t}`]}
              @input=${e=>this[`_tempChoice${t}`]=e.target.value}
              placeholder="Pilihan ${t+1}" />
            <input type="url" placeholder="🖼️ URL gambar" class="editor-input" style="width:150px;"
              .value=${this[`_tempChoiceImage${t}`]||""}
              @input=${e=>this[`_tempChoiceImage${t}`]=e.target.value} />
            <label style="font-size:12px;display:flex;align-items:center;gap:4px;">
              <input type="checkbox" ?checked=${this._tempCorrectAnswers.includes(t)}
                @change=${e=>{e.target.checked?this._tempCorrectAnswers=[...this._tempCorrectAnswers,t]:this._tempCorrectAnswers=this._tempCorrectAnswers.filter(a=>a!==t),this._tempCorrectAnswers.length<=1&&(this._tempCorrectIndex=t.toString()),this.requestUpdate()}} />
              Benar
            </label>
            ${this[`_tempChoiceImage${t}`]?o`<img src=${this[`_tempChoiceImage${t}`]} style="max-height:32px;border-radius:3px;" alt="Pratinjau pilihan ${t+1}" />`:""}
          </div>
        `)}
      </div>
      ${this._tempCorrectAnswers.length<=1?o`<div style="font-size:11px;color:var(--ddd-theme-secondary);margin-top:4px;">Centang 1 jawaban benar. Centang lebih dari 1 untuk mode PG Kompleks.</div>`:o`<div style="font-size:11px;color:var(--ddd-theme-primary);margin-top:4px;font-weight:bold;">Mode PG Kompleks: ${this._tempCorrectAnswers.length} jawaban benar dipilih</div>`}
    `}_renderEditorPGK(){const t=Array.isArray(this._tempStatements)?this._tempStatements:[];return o`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Pernyataan (${t.length} pernyataan):</div>
      ${t.map((e,a)=>o`
        <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;flex-wrap:wrap;">
          <input class="editor-input" style="flex:1;min-width:200px;"
            .value=${e&&e.text||""}
            @input=${i=>{const s=[...this._tempStatements];s[a]={...s[a],text:i.target.value},this._tempStatements=s}}
            placeholder="Teks pernyataan ${a+1}" />
          <label style="font-size:12px;display:flex;align-items:center;gap:2px;">
            <input type="radio" name="pgk-st-${a}" ?checked=${e&&e.answer===!0}
              @change=${()=>{const i=[...this._tempStatements];i[a]={...i[a],answer:!0},this._tempStatements=i}} />
            Benar
          </label>
          <label style="font-size:12px;display:flex;align-items:center;gap:2px;">
            <input type="radio" name="pgk-st-${a}" ?checked=${e&&e.answer===!1}
              @change=${()=>{const i=[...this._tempStatements];i[a]={...i[a],answer:!1},this._tempStatements=i}} />
            Salah
          </label>
          <button type="button" style="font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid var(--ddd-theme-polaris-border);cursor:pointer;background:var(--ddd-theme-error-light);color:var(--ddd-theme-error);"
            @click=${()=>{this._tempStatements=this._tempStatements.filter((i,s)=>s!==a)}}>🗑️</button>
        </div>
      `)}
      <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid var(--ddd-theme-polaris-border);cursor:pointer;"
        @click=${()=>{this._tempStatements=[...this._tempStatements,{text:"",answer:!0}]}}>➕ Tambah Pernyataan</button>
    </div>`}_renderEditorMatching(){const t=Array.isArray(this._tempLeftItems)?this._tempLeftItems:[],e=Array.isArray(this._tempRightItems)?this._tempRightItems:[];return o`<div style="margin:8px 0;font-size:13px;">
      <div style="display:flex;gap:16px;flex-wrap:wrap;">
        <div style="flex:1;min-width:200px;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kiri:</div>
          ${t.map((a,i)=>o`
            <input class="editor-input" style="width:100%;margin:4px 0;"
              .value=${a} @input=${s=>{const r=[...this._tempLeftItems];r[i]=s.target.value,this._tempLeftItems=r}}
              placeholder="Item ${i+1}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid var(--ddd-theme-polaris-border);cursor:pointer;"
            @click=${()=>{this._tempLeftItems=[...this._tempLeftItems,""]}}>+ Tambah</button>
        </div>
        <div style="flex:1;min-width:200px;">
          <div style="font-weight:500;margin-bottom:4px;">Item Kanan:</div>
          ${e.map((a,i)=>o`
            <input class="editor-input" style="width:100%;margin:4px 0;"
              .value=${a} @input=${s=>{const r=[...this._tempRightItems];r[i]=s.target.value,this._tempRightItems=r}}
              placeholder="Item ${String.fromCharCode(65+i)}">
          `)}
          <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid var(--ddd-theme-polaris-border);cursor:pointer;"
            @click=${()=>{const a=[...this._tempRightItems,""];this._tempRightItems=a,this._tempCorrectPairs=this._syncCorrectPairs(this._tempCorrectPairs,t.length,a.length)}}>+ Tambah</button>
        </div>
      </div>
      <div style="margin-top:8px;">
        <div style="font-weight:500;margin-bottom:4px;">Pasangan (Item Kiri → Item Kanan):</div>
        ${t.map((a,i)=>{const s=this._tempCorrectPairs&&this._tempCorrectPairs[i]!=null?this._tempCorrectPairs[i]:i<e.length?i:0;return o`
            <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
              <span style="font-size:12px;font-weight:600;min-width:100px;">Item ${i+1} →</span>
              <select class="editor-input" style="flex:1;"
                @change=${r=>{this._tempCorrectPairs={...this._tempCorrectPairs,[i]:parseInt(r.target.value,10)}}}>
                ${e.map((r,d)=>o`
                  <option value="${d}" ?selected=${s===d}>${String.fromCharCode(65+d)}. ${r||`Item ${String.fromCharCode(65+d)}`}</option>
                `)}
              </select>
            </div>
          `})}
        <button type="button" style="font-size:11px;margin-top:4px;padding:2px 8px;border-radius:4px;border:1px solid var(--ddd-theme-polaris-border);cursor:pointer;"
          @click=${()=>{const a={};t.forEach((i,s)=>{a[s]=s<e.length?s:0}),this._tempCorrectPairs=a}}>🔄 Auto-map</button>
      </div>
    </div>`}_syncCorrectPairs(t,e,a){const i={};for(let s=0;s<e;s++){const r=t&&t[s];i[s]=typeof r=="number"&&r>=0&&r<a?r:0}return i}_renderEditorShortAnswer(){return o`<div style="margin:8px 0;font-size:13px;">
      <div style="font-weight:500;margin-bottom:4px;">Jawaban yang diterima (pisahkan koma):</div>
      <input class="editor-input" style="width:100%;"
        placeholder="contoh: biomassa, sekam padi, limbah pertanian"
        .value=${this._tempAcceptedAnswers} @input=${t=>{this._tempAcceptedAnswers=t.target.value}}>
    </div>`}_addQuestion(){if(!this._tempQuestionText.trim())return;const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};if(this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"){if(!this._tempChoice0.trim()||!this._tempChoice1.trim())return;e.choices=[0,1,2,3,4].map(a=>{const i=this[`_tempChoice${a}`]?.trim();if(!i)return null;const s=this[`_tempChoiceImage${a}`]?.trim();return s?{text:i,image:s}:i}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)}else t==="pgk"?e.statements=Array.isArray(this._tempStatements)?[...this._tempStatements]:[]:t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(a=>a.trim()).filter(Boolean));this._tempQuestions=[...this._tempQuestions,e],this._resetEditorForm(),this.requestUpdate()}_deleteQuestion(t){this._tempQuestions.length<=3||(this._tempQuestions=this._tempQuestions.filter((e,a)=>a!==t),this._editingIndex===t?(this._editingIndex=-1,this._resetEditorForm()):this._editingIndex>t&&this._editingIndex--,this.requestUpdate())}_resetEditorForm(){this._tempQuestionText="",this._tempChoice0="",this._tempChoice1="",this._tempChoice2="",this._tempChoice3="",this._tempChoice4="",this._tempChoiceImage0="",this._tempChoiceImage1="",this._tempChoiceImage2="",this._tempChoiceImage3="",this._tempChoiceImage4="",this._tempCorrectIndex="0",this._tempCorrectAnswers=[],this._tempQuestionImage="",this._tempQuestionType="mc",this._tempQuestionPoints=1,this._tempLeftItems=["",""],this._tempRightItems=["",""],this._tempCorrectPairs={},this._tempAcceptedAnswers="",this._tempAcceptedStatements="[]",this._tempStatements=[]}_startEditQuestion(t){if(t<0||t>=this._tempQuestions.length)return;this._editingIndex=t;const e=this._tempQuestions[t];this._tempQuestionText=e.question||"",this._tempQuestionImage=e.image||"",this._tempQuestionType=e.type||"mc",this._tempQuestionPoints=e.points||1;const a=e.choices||[];this._tempChoice0=this._getChoiceText(a[0])||"",this._tempChoice1=this._getChoiceText(a[1])||"",this._tempChoice2=this._getChoiceText(a[2])||"",this._tempChoice3=this._getChoiceText(a[3])||"",this._tempChoice4=this._getChoiceText(a[4])||"",this._tempChoiceImage0=this._getChoiceImage(a[0])||"",this._tempChoiceImage1=this._getChoiceImage(a[1])||"",this._tempChoiceImage2=this._getChoiceImage(a[2])||"",this._tempChoiceImage3=this._getChoiceImage(a[3])||"",this._tempChoiceImage4=this._getChoiceImage(a[4])||"",this._tempCorrectIndex=e.correctIndex!=null?e.correctIndex.toString():"0",this._tempCorrectAnswers=e.correctAnswers||[],this._tempLeftItems=e.leftItems||["",""],this._tempRightItems=e.rightItems||["",""],this._tempCorrectPairs=e.correctPairs||{},this._tempAcceptedAnswers=(e.acceptedAnswers||[]).join(", "),this._tempAcceptedStatements=JSON.stringify(e.statements||[]),this._tempStatements=e.statements?JSON.parse(JSON.stringify(e.statements)):[],this.requestUpdate()}_saveEditQuestion(){if(!this._tempQuestionText.trim()||this._editingIndex<0||this._editingIndex>=this._tempQuestions.length)return;const t=this._tempQuestionType||"mc",e={type:t,question:this._tempQuestionText.trim()};this._tempQuestionImage.trim()&&(e.image=this._tempQuestionImage.trim()),this._tempQuestionPoints>1&&(e.points=this._tempQuestionPoints),t==="mc"?(e.choices=[0,1,2,3,4].map(a=>{const i=this[`_tempChoice${a}`]?.trim();if(!i)return null;const s=this[`_tempChoiceImage${a}`]?.trim();return s?{text:i,image:s}:i}).filter(Boolean),this._tempCorrectAnswers.length>1?e.correctAnswers=[...this._tempCorrectAnswers]:e.correctIndex=parseInt(this._tempCorrectIndex,10)):t==="pgk"?e.statements=Array.isArray(this._tempStatements)?[...this._tempStatements]:[]:t==="matching"?(e.leftItems=[...this._tempLeftItems],e.rightItems=[...this._tempRightItems],e.correctPairs={...this._tempCorrectPairs}):t==="shortAnswer"&&(e.acceptedAnswers=this._tempAcceptedAnswers.split(",").map(a=>a.trim()).filter(Boolean)),this._tempQuestions=this._tempQuestions.map((a,i)=>i===this._editingIndex?e:a),this._editingIndex=-1,this._resetEditorForm(),this.requestUpdate()}_cancelEditQuestion(){this._editingIndex<0||(this._editingIndex=-1,this._resetEditorForm(),this.requestUpdate())}}customElements.get(Z.tag)||customElements.define(Z.tag,Z);var ta=Object.defineProperty,ea=(h,t,e)=>t in h?ta(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e,X=(h,t,e)=>ea(h,typeof t!="symbol"?t+"":t,e);const J=class K extends O(j(F)){static get tag(){return"sistem-kehadiran"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},studentId:{type:String,attribute:"student-id",reflect:!0},namaSiswa:{type:String,attribute:"nama-siswa",reflect:!0},mode:{type:String,attribute:"mode",reflect:!0},questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t))return t;const e=String(t).trim();if(!(!e||e.includes("[object Object]"))&&(e.startsWith("[")||e.startsWith("{")))try{const a=JSON.parse(e);return Array.isArray(a)?a:a&&typeof a=="object"&&Array.isArray(a.questions)?a.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},_tab:{state:!0},_toast:{state:!0},_logs:{state:!0},_serverHistory:{state:!0},_quizScreen:{state:!0},_quizIdx:{state:!0},_quizAnswered:{state:!0},_quizSel:{state:!0},_quizFb:{state:!0},_quizFbPos:{state:!0},_editIdx:{state:!0},_edit:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.kdMateri="Pertemuan 1",this.studentId="",this.namaSiswa="Siswa",this.mode="siswa",this.questions=this._load(K.QUESTIONS_KEY,null)||[...K.DEFAULT_QUESTIONS],this.thresholds={...K.DEFAULT_THRESHOLDS,...this._load(K.THRESHOLD_KEY,{})},this.grades={...K.DEFAULT_GRADES,...this._load(K.GRADES_KEY,{})},this._tab="kehadiran",this._toast="",this._toastT=null,this._logs=this._load(K.LOGS_KEY,[]),this._serverHistory=[],this._quizScreen="start",this._quizIdx=0,this._quizAnswered=!1,this._quizSel=-1,this._quizFb="",this._quizFbPos=!1,this._quizScore=0,this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._lastScroll=0,this._onScrollBound=this._onScroll.bind(this)}connectedCallback(){super.connectedCallback(),this._logs=this._load(K.LOGS_KEY,[]),globalThis.addEventListener("scroll",this._onScrollBound,{passive:!0}),this._muatRiwayatServer()}disconnectedCallback(){globalThis.removeEventListener("scroll",this._onScrollBound),this._toastT&&clearTimeout(this._toastT),super.disconnectedCallback()}updated(t){super.updated(t),(t.has("appsScriptUrl")||t.has("studentId")||t.has("kdMateri"))&&this._muatRiwayatServer()}_load(t,e){try{const a=localStorage.getItem(t);return a?JSON.parse(a):e}catch{return e}}_save(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}_rem(t){try{localStorage.removeItem(t)}catch{}}_show(t){this._toast=t,this._toastT&&clearTimeout(this._toastT),this._toastT=setTimeout(()=>{this._toast="",this.requestUpdate()},3200),this.requestUpdate()}get _connected(){return!!this.appsScriptUrl}_buatIdLog(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_log(t,e){const a={id:"log-"+Date.now()+"-"+Math.random(),timestamp:new Date().toISOString(),type:t,description:e};this._logs=[a,...this._logs],this._save(K.LOGS_KEY,this._logs);try{const i={reading:{catatan:e},download:{catatan:e},discussion:{catatan:e},quiz:{score:0}};if(t==="quiz"){const s=String(e||"").match(/Skor:\s*(\d+)%/);s&&(i.quiz.score=parseInt(s[1],10))}this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:{id_log:this._buatIdLog(),tipe:t,payload:{...i[t],timestamp:a.timestamp}},bubbles:!0,composed:!0}))}catch{}(this._tab==="kehadiran"||this._tab==="nilai")&&this.requestUpdate()}pemicuAksiManual(t,e){this._log(t,e),this._show(`Simulasi ${t} tercatat!`),this.requestUpdate()}_sim(t){const e={reading:["Membaca Modul 1","Membaca Modul 2","Mengeksplorasi Halaman"],download:["Mengunduh PDF Panduan.pdf","Mengunduh Source Code.zip"],discussion:["Mengirimkan pertanyaan di Forum","Membalas tanggapan di diskusi"]}[t];this._log(t,e[Math.floor(Math.random()*e.length)]),this._show(`Simulasi ${t} tercatat!`)}_clearLogs(){this._logs=[],this._rem(K.LOGS_KEY),this._show("Log direset!"),this.requestUpdate()}_onScroll(){const t=Date.now();globalThis.scrollY<300||t-this._lastScroll<6e4||(this._lastScroll=t,this._log("reading",`Membaca materi (Scroll ${Math.round(globalThis.scrollY)}px)`))}async _muatRiwayatServer(){if(!this.appsScriptUrl||!this.studentId)return;const t=new URLSearchParams({action:"getActivityHistory",studentId:this.studentId,kdMateri:this.kdMateri||"",days:28});try{const e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`)).text(),a=e.trim().charAt(0)==="{"?JSON.parse(e):{};Array.isArray(a&&a.history)?this._serverHistory=a.history:a&&Array.isArray(a.data)&&(this._serverHistory=a.data),a&&a.history!==void 0&&this.requestUpdate()}catch{}}_tglKey(t){const e=t||new Date,a=i=>String(i).padStart(2,"0");return`${e.getFullYear()}-${a(e.getMonth()+1)}-${a(e.getDate())}`}_weekly(){const t=new Date(Date.now()-6048e5),e=(this._logs||[]).filter(d=>d&&new Date(d.timestamp)>=t),a=this.thresholds,i={reading:e.filter(d=>d.type==="reading").length,quiz:e.filter(d=>d.type==="quiz").length,discussion:e.filter(d=>d.type==="discussion").length,total:e.length},s={reading:i.reading>=a.minReading,quiz:i.quiz>=a.minQuiz,discussion:i.discussion>=a.minDiscussion,total:i.total>=a.minWeeklyActivities},r=(s.reading?1:0)+(s.quiz?1:0)+(s.discussion?1:0)+(s.total?1:0);return{counts:i,goals:s,pct:Math.round(r/4*100),status:r>=3?"HADIR":"BELUM LENGKAP"}}_streak(){const t=this._logs||[];let e=0;for(let a=0;a<30;a++){const i=new Date;i.setDate(i.getDate()-a);const s=this._tglKey(i);if(t.some(r=>r&&this._tglKey(new Date(r.timestamp))===s))e++;else if(a>0)break}return e}_heatmap(){const t={};(this._logs||[]).forEach(a=>{if(!a||!a.timestamp)return;const i=this._tglKey(new Date(a.timestamp));t[i]=(t[i]||0)+1}),(this._serverHistory||[]).forEach(a=>{if(!a||!a.date)return;const i=String(a.date).slice(0,10);t[i]=(t[i]||0)+(parseInt(a.count,10)||0)});const e=[];for(let a=27;a>=0;a--){const i=new Date;i.setDate(i.getDate()-a),i.setHours(0,0,0,0);const s=this._tglKey(i);e.push({date:i,count:t[s]||0})}return e}_grade(){const t=this._weekly().pct,e=(this._logs||[]).filter(d=>d&&d.type==="quiz");let a=0;e.length&&(a=Math.max(...e.map(d=>{const l=String(d.description||"").match(/Skor:\s*(\d+)%/);return l?parseInt(l[1],10):0})));const i=this.grades,s=(t*i.attendanceWeight+a*i.quizWeight+i.uts*i.utsWeight+i.uas*i.uasWeight)/100;let r="E";return s>=85?r="A":s>=80?r="A-":s>=75?r="B+":s>=70?r="B":s>=65?r="B-":s>=60?r="C+":s>=55?r="C":s>=40&&(r="D"),{att:t,quiz:a,final:Math.round(s*10)/10,grade:r}}_mulaiQuiz(){this._quizScreen==="result"&&(this._quizScore=0),this._quizScreen="question",this._quizIdx=0,this._quizAnswered=!1,this._quizSel=-1,this._quizFb="",this.requestUpdate()}_pilihQuiz(t){if(this._quizAnswered)return;this._quizAnswered=!0,this._quizSel=t;const e=this.questions[this._quizIdx];e&&t===e.correctIndex?(this._quizScore++,this._quizFb="\u2705 Benar!",this._quizFbPos=!0):(this._quizFb=e?`\u274C Salah. Jawaban: ${e.choices[e.correctIndex]}`:"Soal tidak valid",this._quizFbPos=!1),this.requestUpdate(),setTimeout(()=>this._nextQuiz(),1200)}_nextQuiz(){if(this._quizIdx<this.questions.length-1)this._quizIdx++,this._quizAnswered=!1,this._quizSel=-1,this._quizFb="";else{const t=Math.round(this._quizScore/this.questions.length*100);this._quizScreen="result",this._log("quiz",`Menyelesaikan Kuis (Skor: ${t}%)`),this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:{id_log:this._buatIdLog(),tipe:"quiz",payload:{score:t,jenisKuis:"formatif",metadataKuis:"Dashboard Pembelajaran",timestamp:new Date().toISOString()}},bubbles:!0,composed:!0}))}this.requestUpdate()}_resetQuiz(){this._quizScreen="start",this._quizScore=0,this.requestUpdate()}_tambahSoal(){const t=this._edit;if(!t.q||!t.c0||!t.c1||!t.c2||!t.c3)return this._show("Semua field harus diisi!");this.questions=[...this.questions,{question:t.q,choices:[t.c0,t.c1,t.c2,t.c3],correctIndex:parseInt(t.correct,10)}],this._save(K.QUESTIONS_KEY,this.questions),this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._show("Soal ditambahkan!"),this.requestUpdate()}_editMulai(t){const e=this.questions[t];this._editIdx=t,this._edit={q:e.question,c0:e.choices[0],c1:e.choices[1],c2:e.choices[2],c3:e.choices[3],correct:String(e.correctIndex)},this.requestUpdate()}_simpanSoal(){const t=this._edit;if(!t.q)return this._show("Pertanyaan tidak boleh kosong!");this.questions=this.questions.map((e,a)=>a===this._editIdx?{question:t.q,choices:[t.c0,t.c1,t.c2,t.c3],correctIndex:parseInt(t.correct,10)}:e),this._save(K.QUESTIONS_KEY,this.questions),this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this._show("Soal diupdate!"),this.requestUpdate()}_hapusSoal(t){if(this.questions.length<=3)return this._show("Minimal 3 soal!");this.questions=this.questions.filter((e,a)=>a!==t),this._save(K.QUESTIONS_KEY,this.questions),this._editIdx===t&&(this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"}),this._show("Soal dihapus!"),this.requestUpdate()}_updThreshold(t,e){this.thresholds={...this.thresholds,[t]:parseInt(e,10)},this._save(K.THRESHOLD_KEY,this.thresholds),this.requestUpdate()}_updGrade(t,e){this.grades={...this.grades,[t]:parseInt(e,10)},this._save(K.GRADES_KEY,this.grades),this.requestUpdate()}static get styles(){return[super.styles,q`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-coalyGray);
          --sk-primary: var(--ddd-primary-13);
          --sk-primary-hover: var(--ddd-primary-10);
          --sk-success: var(--ddd-theme-default-success);
          --sk-success-light: var(--ddd-theme-default-successLight);
          --sk-error: var(--ddd-theme-default-error);
          --sk-error-light: var(--ddd-theme-default-errorLight);
          --sk-warning: var(--ddd-primary-10);
          --sk-info: var(--ddd-theme-default-link);
          --sk-muted: var(--ddd-theme-default-limestoneGray);
          --sk-soft-bg: var(--ddd-theme-default-shrineLight);
          --sk-card-bg: var(--ddd-theme-default-white);
          --sk-border: var(--ddd-theme-default-shrineLight);
          max-width: var(--ddd-layout-size-3);
          margin: 0 auto;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hd {
          background: linear-gradient(135deg, var(--ddd-primary-13), var(--ddd-primary-8) 55%, var(--ddd-primary-0));
          color: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-xl);
          padding: var(--ddd-spacing-5) var(--ddd-spacing-6);
          margin-bottom: var(--ddd-spacing-5);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
          box-shadow: var(--ddd-boxShadow-lg);
        }
        .hd h1 { font-size: var(--ddd-font-size-l); font-weight: var(--ddd-font-weight-black); letter-spacing: -0.02em; }
        .hd h1 span { font-size: var(--ddd-font-size-xl); }
        .hd p { font-size: var(--ddd-font-size-3xs); opacity: 0.9; margin-top: var(--ddd-spacing-1); }
        .hdr { display: flex; gap: var(--ddd-spacing-2); align-items: center; }
        .b { display: inline-block; padding: var(--ddd-spacing-0) var(--ddd-spacing-2); border-radius: 99px; font-size: var(--ddd-font-size-xxs); font-weight: var(--ddd-font-weight-black); }
        .b.g { background: var(--ddd-theme-default-successLight); color: var(--ddd-theme-default-success); }
        .b.o { background: var(--ddd-theme-default-shrineMaxLight); color: var(--ddd-primary-10); }
        .tb {
          display: flex;
          border-bottom: var(--ddd-border-sm);
          margin-bottom: var(--ddd-spacing-5);
          overflow-x: auto;
          background: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-lg) var(--ddd-radius-lg) 0 0;
          padding: var(--ddd-spacing-0) var(--ddd-spacing-2);
        }
        .tbb {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          background: none;
          border: none;
          border-bottom: var(--ddd-border-md);
          margin-bottom: calc(var(--ddd-spacing-0) * -1);
          cursor: pointer;
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-limestoneGray);
          white-space: nowrap;
          transition: all 0.2s;
        }
        .tbb:hover { color: var(--ddd-primary-13); background: var(--ddd-theme-default-shrineMaxLight); border-radius: var(--ddd-radius-s) var(--ddd-radius-s) 0 0; }
        .tbb.a { color: var(--ddd-primary-13); border-bottom-color: var(--ddd-primary-13); }
        .c {
          background: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          box-shadow: var(--ddd-boxShadow-sm);
          border: var(--ddd-border-xs);
        }
        .c h2 { color: var(--ddd-primary-13); font-size: var(--ddd-font-size-ms); margin-bottom: var(--ddd-spacing-3); display: flex; align-items: center; gap: var(--ddd-spacing-2); }
        .c h3 { color: var(--ddd-theme-default-slateGray); font-size: var(--ddd-font-size-3xs); margin-bottom: var(--ddd-spacing-2); }
        .bp { display: inline-block; padding: var(--ddd-spacing-3) var(--ddd-spacing-5); border: none; border-radius: var(--ddd-radius-s); font-size: var(--ddd-font-size-s); font-weight: var(--ddd-font-weight-bold); cursor: pointer; transition: all 0.2s; }
        .bp.p { background: var(--ddd-primary-13); color: var(--ddd-theme-default-white); box-shadow: 0 var(--ddd-spacing-1) var(--ddd-spacing-3) calc(var(--ddd-spacing-0) * -1) rgba(79, 70, 229, 0.4); }
        .bp.p:hover { background: var(--ddd-primary-8); transform: translateY(-1px); }
        .bp.s { background: transparent; color: var(--ddd-primary-13); border: var(--ddd-border-xs) solid var(--ddd-primary-13); }
        .bp.s:hover { background: var(--ddd-theme-default-shrineMaxLight); }
        .bp.fw { width: 100%; text-align: center; }
        .bs {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-sm);
          background: var(--ddd-theme-default-white);
          font-size: var(--ddd-font-size-3xs);
          cursor: pointer;
          transition: all 0.2s;
        }
        .bs:hover { background: var(--ddd-theme-default-shrineMaxLight); }
        .bs.dg { color: var(--ddd-theme-default-error); border-color: var(--ddd-theme-default-errorLight); }
        .bs.dg:hover { background: var(--ddd-theme-default-errorLight); }
        .qb { max-width: var(--ddd-layout-size-3); margin: 0 auto; }
        .qh { display: flex; justify-content: space-between; font-weight: var(--ddd-font-weight-bold); color: var(--ddd-primary-13); margin-bottom: var(--ddd-spacing-4); }
        .qq { font-size: var(--ddd-font-size-ms); font-weight: var(--ddd-font-weight-black); margin-bottom: var(--ddd-spacing-5); line-height: 1.5; color: var(--ddd-theme-default-coalyGray); }
        .qa { display: grid; grid-template-columns: 1fr 1fr; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-5); }
        .qab {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          background: var(--ddd-theme-default-white);
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-3xs);
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          font-family: var(--ddd-font-primary);
        }
        .qab:hover:not(:disabled) { border-color: var(--ddd-primary-13); background: var(--ddd-theme-default-shrineMaxLight); }
        .qab:disabled { cursor: not-allowed; opacity: 0.7; }
        .qab.cc { border-color: var(--ddd-primary-8); background: var(--ddd-theme-default-successLight); color: var(--ddd-theme-default-success); font-weight: var(--ddd-font-weight-bold); }
        .qab.cw { border-color: var(--ddd-theme-default-error); background: var(--ddd-theme-default-errorLight); color: var(--ddd-theme-default-error); }
        .qf { padding: var(--ddd-spacing-3); border-radius: var(--ddd-radius-s); text-align: center; font-weight: var(--ddd-font-weight-bold); }
        .qf.p { background: var(--ddd-theme-default-successLight); color: var(--ddd-theme-default-success); }
        .qf.n { background: var(--ddd-theme-default-errorLight); color: var(--ddd-theme-default-error); }
        .rc { text-align: center; }
        .rc .rp { font-size: var(--ddd-font-size-2xl); font-weight: var(--ddd-font-weight-black); color: var(--ddd-primary-13); margin: var(--ddd-spacing-4) 0; }
        .rc .rm { font-size: var(--ddd-font-size-ms); color: var(--ddd-primary-13); margin-bottom: var(--ddd-spacing-5); }
        .wa { animation: wa 0.3s ease; }
        @media (prefers-reduced-motion: reduce) { .wa { animation: none; } }
        @keyframes wa { from { opacity: 0; transform: translateY(var(--ddd-spacing-2)); } to { opacity: 1; transform: translateY(0); } }
        .smb { display: flex; align-items: center; gap: var(--ddd-spacing-2); margin-bottom: var(--ddd-spacing-3); flex-wrap: wrap; }
        .sl { font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); font-weight: var(--ddd-font-weight-bold); }
        .g2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: var(--ddd-spacing-5); margin-bottom: var(--ddd-spacing-5); }
        .gw { position: relative; width: var(--ddd-layout-size-s); height: var(--ddd-layout-size-s); margin: 0 auto; }
        .gv { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-black); color: var(--ddd-theme-default-coalyGray); }
        .cll { display: flex; flex-direction: column; gap: var(--ddd-spacing-3); }
        .cri { display: flex; align-items: center; justify-content: space-between; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); background: var(--ddd-theme-default-shrineMaxLight); border-radius: var(--ddd-radius-s); border: var(--ddd-border-xs) solid var(--ddd-theme-default-shrineLight); }
        .crl { display: flex; align-items: center; gap: var(--ddd-spacing-3); }
        .cric { font-size: var(--ddd-font-size-l); }
        .crn { font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-s); color: var(--ddd-theme-default-slateGray); }
        .crp { font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); }
        .sm2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-4); }
        .sm { background: var(--ddd-theme-default-shrineMaxLight); border-radius: var(--ddd-radius-s); padding: var(--ddd-spacing-3); text-align: center; border: var(--ddd-border-xs) solid var(--ddd-theme-default-shrineLight); }
        .sml { font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); }
        .smv { font-size: var(--ddd-font-size-l); font-weight: var(--ddd-font-weight-black); color: var(--ddd-primary-13); margin-top: var(--ddd-spacing-1); }
        .hmh { display: flex; justify-content: center; gap: var(--ddd-spacing-xxs); margin-bottom: var(--ddd-spacing-2); font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); font-weight: var(--ddd-font-weight-black); }
        .hmh span { width: var(--ddd-sizing-s-38); text-align: center; }
        .hmg { display: grid; grid-template-columns: repeat(7, 1fr); gap: var(--ddd-spacing-0); max-width: var(--ddd-layout-size-3); margin: 0 auto; }
        .hc { aspect-ratio: 1; border-radius: var(--ddd-radius-xs); display: flex; align-items: center; justify-content: center; font-size: var(--ddd-font-size-xxs); font-weight: var(--ddd-font-weight-black); cursor: default; color: var(--ddd-theme-default-slateLight); background: var(--ddd-theme-default-shrineLight); transition: transform 0.15s; }
        .hc:hover { transform: scale(1.2); }
        .hc.l1 { background: var(--ddd-theme-default-shrineLight); color: var(--ddd-primary-13); }
        .hc.l2 { background: var(--ddd-primary-13); color: var(--ddd-theme-default-white); }
        .hc.l3 { background: var(--ddd-primary-8); color: var(--ddd-theme-default-white); }
        .hc.l4 { background: var(--ddd-primary-0); color: var(--ddd-primary-13); }
        .hml { display: flex; justify-content: center; align-items: center; gap: var(--ddd-spacing-1); margin-top: var(--ddd-spacing-3); font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); }
        .lb { width: var(--ddd-sizing-s-30); height: var(--ddd-sizing-s-30); border-radius: var(--ddd-radius-xs); }
        .li { display: flex; gap: var(--ddd-spacing-2); align-items: flex-start; padding: var(--ddd-spacing-1) var(--ddd-spacing-2); border-radius: var(--ddd-radius-xs); font-size: var(--ddd-font-size-xxs); border-left: 3px solid var(--ddd-theme-default-slateLight); margin-bottom: var(--ddd-spacing-0); background: var(--ddd-theme-default-shrineLight); }
        .li.reading { border-left-color: var(--ddd-primary-13); }
        .li.quiz { border-left-color: var(--ddd-primary-8); }
        .li.download { border-left-color: var(--ddd-primary-0); }
        .li.discussion { border-left-color: var(--ddd-primary-10); }
        .lt { color: var(--ddd-theme-default-limestoneGray); min-width: var(--ddd-layout-size-s); }
        .ld { flex: 1; color: var(--ddd-theme-default-slateGray); }
        .gg { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: var(--ddd-spacing-3); margin-bottom: var(--ddd-spacing-5); }
        .gi { background: var(--ddd-theme-default-shrineMaxLight); border: var(--ddd-border-xs) solid var(--ddd-theme-default-shrineLight); border-radius: var(--ddd-radius-s); padding: var(--ddd-spacing-4); text-align: center; }
        .gi.hl { background: var(--ddd-theme-default-shrineMaxLight); border-color: var(--ddd-theme-default-shrineLight); }
        .gl { font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); text-transform: uppercase; letter-spacing: 0.5px; font-weight: var(--ddd-font-weight-black); }
        .gv { font-size: var(--ddd-font-size-l); font-weight: var(--ddd-font-weight-black); color: var(--ddd-theme-default-coalyGray); margin-top: var(--ddd-spacing-1); }
        .gv.br { color: var(--ddd-primary-13); }
        .gt { width: 100%; border-collapse: collapse; font-size: var(--ddd-font-size-s); }
        .gt th { background: var(--ddd-theme-default-shrineMaxLight); color: var(--ddd-primary-13); font-weight: var(--ddd-font-weight-black); padding: var(--ddd-spacing-2); text-align: left; }
        .gt td { padding: var(--ddd-spacing-2); border-bottom: var(--ddd-border-xs) solid var(--ddd-theme-default-shrineLight); color: var(--ddd-theme-default-slateGray); }
        .bld { font-weight: var(--ddd-font-weight-black); }
        .ef { background: var(--ddd-theme-default-shrineMaxLight); border: var(--ddd-border-xs) solid var(--ddd-theme-default-shrineLight); border-radius: var(--ddd-radius-s); padding: var(--ddd-spacing-4); margin-bottom: var(--ddd-spacing-4); }
        .et { width: 100%; min-height: var(--ddd-layout-size-s); padding: var(--ddd-spacing-2); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); font-family: inherit; resize: vertical; margin-bottom: var(--ddd-spacing-3); box-sizing: border-box; }
        .et:focus { outline: none; border-color: var(--ddd-primary-13); }
        .ecr { display: flex; gap: var(--ddd-spacing-2); align-items: center; margin-bottom: var(--ddd-spacing-2); }
        .ecr input { flex: 1; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); font-family: inherit; box-sizing: border-box; }
        .ecr input:focus { outline: none; border-color: var(--ddd-primary-13); }
        .rl { font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); display: flex; align-items: center; gap: var(--ddd-spacing-1); cursor: pointer; }
        .ea { display: flex; gap: var(--ddd-spacing-2); margin-top: var(--ddd-spacing-3); flex-wrap: wrap; }
        .qcrd { display: flex; justify-content: space-between; align-items: center; padding: var(--ddd-spacing-3) var(--ddd-spacing-4); background: var(--ddd-theme-default-shrineLight); border: var(--ddd-border-xs) solid var(--ddd-theme-default-shrineLight); border-radius: var(--ddd-radius-xs); margin-bottom: var(--ddd-spacing-1); }
        .qn { font-weight: var(--ddd-font-weight-black); color: var(--ddd-primary-13); min-width: var(--ddd-sizing-s-38); }
        .qa2 { display: flex; gap: var(--ddd-spacing-1); }
        .sg { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--ddd-spacing-3); }
        .si label { display: block; font-size: var(--ddd-font-size-xxs); color: var(--ddd-theme-default-limestoneGray); font-weight: var(--ddd-font-weight-bold); margin-bottom: var(--ddd-spacing-1); }
        .sin { width: 100%; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border: var(--ddd-border-xs); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); font-family: inherit; box-sizing: border-box; }
        .sin:focus { outline: none; border-color: var(--ddd-primary-13); }
        .ti { padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-sm); font-size: var(--ddd-font-size-s); margin: var(--ddd-spacing-3) 0; background: var(--ddd-theme-default-shrineMaxLight); border-left: 4px solid var(--ddd-primary-8); color: var(--ddd-theme-default-slateGray); }
        .ti.w { background: var(--ddd-theme-default-shrineMaxLight); border-left-color: var(--ddd-primary-10); color: var(--ddd-theme-default-slateGray); }
        .t {
          position: fixed;
          bottom: var(--ddd-spacing-6);
          right: var(--ddd-spacing-6);
          background: var(--ddd-theme-default-coalyGray);
          color: var(--ddd-theme-default-white);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-3xs);
          z-index: 9999;
          box-shadow: var(--ddd-boxShadow-sm);
        }
        .srcbtn { background: var(--ddd-theme-default-shrineLight); color: var(--ddd-theme-default-slateGray); }
        .srcbtn:hover { background: var(--ddd-theme-default-shrineMaxLight); }
        @media (max-width: 600px) {
          .qa, .hmg { grid-template-columns: 1fr 1fr; }
          .qa { grid-template-columns: 1fr; }
          .g2 { grid-template-columns: 1fr; }
          .gg { grid-template-columns: repeat(3, 1fr); }
          .sg { grid-template-columns: 1fr 1fr; }
        }
      `,q`
        /* ===== DARK MODE (gated on body.dark-mode) ===== */
        :host-context(body.dark-mode) :host {
          --dk-bg: var(--ddd-theme-pughBlue);
          --dk-card: var(--ddd-theme-default-slateGray);
          --dk-soft: var(--ddd-theme-default-coalyGray);
          --dk-softer: var(--ddd-theme-default-slateLight);
          --dk-border: var(--ddd-theme-default-limestoneGray);
          --dk-text: var(--ddd-theme-default-white85);
          --dk-text-soft: var(--ddd-theme-default-limestoneGray);
          --dk-text-strong: var(--ddd-theme-default-white);
          --ddd-theme-background: var(--dk-bg);
          --ddd-theme-color: var(--dk-text);
          --ddd-theme-surface: var(--dk-card);
          background: var(--dk-bg);
          color: var(--dk-text);
        }
        :host-context(body.dark-mode) .hd { background: linear-gradient(135deg, var(--ddd-primary-13) 0%, var(--ddd-primary-13) 55%, var(--ddd-primary-0) 100%); }
        :host-context(body.dark-mode) .b { background: var(--dk-soft); color: var(--dk-text); }
        :host-context(body.dark-mode) .b.g { background: var(--ddd-theme-default-success); color: var(--ddd-theme-default-white); }
        :host-context(body.dark-mode) .b.o { background: var(--ddd-primary-10); color: var(--ddd-theme-default-white); }
        :host-context(body.dark-mode) .tb { background: var(--dk-card); border-bottom-color: var(--dk-border); }
        :host-context(body.dark-mode) .tbb { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .tbb:hover { color: var(--dk-text-strong); background: var(--dk-soft); }
        :host-context(body.dark-mode) .tbb.a { color: var(--dk-text-strong); border-bottom-color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .c { background: var(--dk-card); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .c h2 { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .c h3 { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .bp.p { background: var(--ddd-primary-13); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .bp.p:hover { background: var(--ddd-primary-8); }
        :host-context(body.dark-mode) .bp.s { background: transparent; color: var(--dk-text-strong); border-color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .bp.s:hover { background: var(--dk-soft); }
        :host-context(body.dark-mode) .bs { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .bs:hover { background: var(--dk-soft); }
        :host-context(body.dark-mode) .bs.dg { color: var(--ddd-theme-default-error); border-color: var(--ddd-theme-default-errorLight); }
        :host-context(body.dark-mode) .bs.dg:hover { background: var(--ddd-theme-default-errorLight); }
        :host-context(body.dark-mode) .srcbtn { background: var(--dk-soft); color: var(--dk-text); }
        :host-context(body.dark-mode) .srcbtn:hover { background: var(--dk-soft); }
        :host-context(body.dark-mode) .qh,
        :host-context(body.dark-mode) .rc .rm { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .qq,
        :host-context(body.dark-mode) .gv,
        :host-context(body.dark-mode) .smv,
        :host-context(body.dark-mode) .qn { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .qab { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .qab:hover:not(:disabled) { border-color: var(--dk-text-strong); background: var(--dk-soft); }
        :host-context(body.dark-mode) .qab.cc { border-color: var(--ddd-theme-default-success); background: var(--ddd-theme-default-success); color: var(--ddd-theme-default-white); }
        :host-context(body.dark-mode) .qab.cw { border-color: var(--ddd-theme-default-error); background: var(--ddd-theme-default-error); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .qf.p { background: var(--ddd-theme-default-success); color: var(--ddd-theme-default-white); }
        :host-context(body.dark-mode) .qf.n { background: var(--ddd-theme-default-error); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .sl,
        :host-context(body.dark-mode) .crp,
        :host-context(body.dark-mode) .sml,
        :host-context(body.dark-mode) .hmh,
        :host-context(body.dark-mode) .hml { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .cri { background: var(--dk-softer); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .crn { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .sm { background: var(--dk-softer); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .hc { background: var(--dk-soft); color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .hc.l1 { background: var(--ddd-primary-13); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .hc.l2 { background: var(--ddd-primary-13); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .hc.l3 { background: var(--ddd-primary-0); color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .hc.l4 { background: var(--ddd-primary-8); color: var(--dk-soft); }
        :host-context(body.dark-mode) .li { background: var(--dk-soft); border-left-color: var(--dk-border); }
        :host-context(body.dark-mode) .li.reading { border-left-color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .lt { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .ld { color: var(--dk-text); }
        :host-context(body.dark-mode) .gi { background: var(--dk-softer); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .gi.hl { background: var(--dk-soft); }
        :host-context(body.dark-mode) .gl { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .gv.br { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .gt { background: var(--dk-card); color: var(--dk-text); }
        :host-context(body.dark-mode) .gt th { background: var(--dk-soft); color: var(--dk-text-strong); border-bottom-color: var(--dk-border); }
        :host-context(body.dark-mode) .gt td { border-bottom-color: var(--dk-border); }
        :host-context(body.dark-mode) .ef,
        :host-context(body.dark-mode) .qcrd { background: var(--dk-softer); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .et,
        :host-context(body.dark-mode) .ecr input,
        :host-context(body.dark-mode) .sin { background: var(--dk-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .rl { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .ti { background: var(--dk-soft); border-left-color: var(--ddd-primary-8); color: var(--dk-text); }
        :host-context(body.dark-mode) .ti.w { background: var(--dk-soft); border-left-color: var(--ddd-primary-10); color: var(--dk-text); }
        :host-context(body.dark-mode) .t { background: var(--dk-soft); color: var(--dk-text-strong); border-color: var(--ddd-primary-13); }
        /* Inline-style override: muted text in template */
        :host-context(body.dark-mode) p[style*="color:var(--ddd-theme-default-limestoneGray)"],
        :host-context(body.dark-mode) div[style*="color:var(--ddd-theme-default-limestoneGray)"] { color: var(--dk-text-soft) !important; }
      `]}render(){const t=[["kuis","\u{1F4DD} Kuis"],["kehadiran","\u{1F4CA} Kehadiran"],["nilai","\u{1F4D6} Nilai"],["soal","\u2699\uFE0F Soal"],["atur","\u{1F527} Atur"]];return o`
      <div class="hd">
        <div>
          <h1><span>📚</span> Ruang Pertemuan — <span style="font-weight:400;">${this.kdMateri||"Pertemuan"}</span></h1>
          <p>Evaluasi per Pertemuan — Kuis + Kehadiran + Nilai</p>
        </div>
        <div class="hdr">
          <span class="b ${this._connected?"g":"o"}">${this._connected?"Online":"Luring"}</span>
          <button class="bs srcbtn" aria-label="Sinkronkan ulang data"
            @click=${()=>{this._log("download","Menekan tombol sinkronisasi dashboard"),this._muatRiwayatServer()}}>
            🔌
          </button>
        </div>
      </div>

       <div class="tb" role="tablist" aria-label="Bagian ruang pertemuan">
        ${t.map(([e,a])=>o`
            <button class="tbb ${this._tab===e?"a":""}" role="tab"
              aria-selected=${this._tab===e} @click=${()=>this._tab=e}>${a}</button>
          `)}
      </div>

      ${this._toast?o`<div class="t">${this._toast}</div>`:""}

      ${this._tab==="kuis"?this._renderQuiz():""}
      ${this._tab==="kehadiran"?this._renderKehadiran():""}
      ${this._tab==="nilai"?this._renderNilai():""}
      ${this._tab==="soal"?this._renderSoal():""}
      ${this._tab==="atur"?this._renderAtur():""}
    `}_renderQuiz(){if(this._quizScreen==="start")return o`
        <div class="c qb">
          <h2>📝 Kuis Interaktif</h2>
          <p style="color:var(--ddd-theme-default-limestoneGray); margin-bottom:var(--ddd-spacing-4);">Selesaikan kuis secara mandiri. Skor terbaik masuk ke kalkulasi Nilai & sinkron ke antrean database V5.</p>
          <button class="bp p fw" @click=${this._mulaiQuiz}>Mulai Kuis (${this.questions.length} soal)</button>
        </div>
      `;if(this._quizScreen==="question"){const a=this.questions[this._quizIdx];return a?o`
        <div class="c qb">
          <div class="qh">
            <span>Soal ${this._quizIdx+1}/${this.questions.length}</span>
            <span>Skor: ${this._quizScore}</span>
          </div>
          <div class="qq">${a.question}</div>
          <div class="qa">
            ${a.choices.map((i,s)=>{let r="qab";return this._quizAnswered&&(s===a.correctIndex?r+=" cc":s===this._quizSel&&(r+=" cw")),o`
                <button class=${r} ?disabled=${this._quizAnswered}
                  @click=${()=>this._pilihQuiz(s)}>${i}</button>
              `})}
          </div>
          ${this._quizFb?o`<div class="qf ${this._quizFbPos?"p":"n"}">${this._quizFb}</div>`:""}
        </div>
      `:o`<div class="c">Soal tidak valid.</div>`}const t=Math.round(this._quizScore/this.questions.length*100);let e="Jangan Menyerah! Coba Lagi!";return t>=80?e="Luar Biasa! \u{1F389}":t>=50&&(e="Bagus! \u{1F4AA}"),o`
      <div class="c qb rc">
        <h2>🎊 Hasil Kuis</h2>
        <div class="rp">${t}%</div>
        <p class="rm">${e} — ${this._quizScore}/${this.questions.length} benar</p>
        <button class="bp p fw" @click=${this._resetQuiz}>Mulai Ulang</button>
      </div>
    `}_cri(t,e,a,i,s){return o`
      <div class="cri">
        <div class="crl">
          <span class="cric">${t}</span>
          <div>
            <div class="crn">${e}</div>
            <div class="crp">${a} dari ${i}</div>
          </div>
        </div>
        <span aria-label=${s?"Tercapai":"Belum tercapai"}>${s?"\u2705":"\u23F3"}</span>
      </div>
    `}_renderKehadiran(){const t=this._weekly(),e=this._streak(),a=this._heatmap(),i=this._logs||[],s=this.thresholds,r=64,d=2*Math.PI*r,l=d-t.pct/100*d,p=["Sen","Sel","Rab","Kam","Jum","Sab","Min"];return o`
      <div class="c">
        <h2>📊 Pelacakan Aktivitas</h2>
        <p style="font-size:var(--ddd-font-size-s); color:var(--ddd-theme-default-limestoneGray); margin-bottom:var(--ddd-spacing-1);">
          Total: <strong>${i.length}</strong> | Streak: <strong>🔥 ${e} hari</strong>
        </p>
        <div class="smb">
          <span class="sl">Simulasi:</span>
          <button class="bs" @click=${()=>this._sim("reading")}>📖</button>
          <button class="bs" @click=${()=>this._sim("download")}>📥</button>
          <button class="bs" @click=${()=>this._sim("discussion")}>💬</button>
          <button class="bs dg" @click=${this._clearLogs}>🗑️ Reset</button>
          <button class="bs" @click=${()=>this._log("reading","Membaca materi (tugas modul)")}>📖 Tandai Baca</button>
        </div>
      </div>

      <div class="g2">
        <div class="c">
          <h3>📅 Kehadiran Pekan Ini</h3>
          <div class="gw">
            <svg width="150" height="150" viewBox="0 0 150 150" style="transform:rotate(-90deg)" role="img" aria-label="Kehadiran pekan ini ${t.pct} persen">
              <circle fill="none" stroke="var(--ddd-theme-default-shrineLight)" stroke-width="12" cx="75" cy="75" r="${r}" />
              <circle fill="none" stroke="var(--ddd-primary-13)" stroke-width="12" stroke-linecap="round" cx="75" cy="75" r="${r}" stroke-dasharray="${d}" stroke-dashoffset="${l}" />
            </svg>
            <div class="gv">${t.pct}%</div>
          </div>
          <div style="text-align:center;">
            <span class="b ${t.pct>=75?"g":"o"}">${t.status}</span>
          </div>
          <div class="cll" style="margin-top:var(--ddd-spacing-4);">
            ${this._cri("\u{1F4D6}","Membaca Modul",t.counts.reading,s.minReading,t.goals.reading)}
            ${this._cri("\u{1F4DD}","Kuis Selesai",t.counts.quiz,s.minQuiz,t.goals.quiz)}
            ${this._cri("\u{1F4AC}","Forum & Diskusi",t.counts.discussion,s.minDiscussion,t.goals.discussion)}
            ${this._cri("\u{1F4C8}","Total Aktivitas",t.counts.total,s.minWeeklyActivities,t.goals.total)}
          </div>
        </div>

        <div class="c">
          <h3>🔥 Konsistensi Belajar</h3>
          <div class="sm2">
            <div class="sm"><div class="sml">Total</div><div class="smv">${i.length}</div></div>
            <div class="sm"><div class="sml">Streak</div><div class="smv">🔥 ${e} hari</div></div>
          </div>
          <div style="font-size:var(--ddd-font-size-xxs);font-weight:var(--ddd-font-weight-black);color:var(--ddd-theme-default-limestoneGray);text-align:center;margin:var(--ddd-spacing-4) 0 var(--ddd-spacing-2);">
            Peta Aktivitas 28 Hari
          </div>
          <div class="hmh">
            ${p.map(c=>o`<span>${c}</span>`)}
          </div>
          <div class="hmg">
            ${a.map(c=>{let m="";return c.count>0&&c.count<=2?m="l1":c.count>2&&c.count<=4?m="l2":c.count>4&&c.count<=7?m="l3":c.count>7&&(m="l4"),o`
                  <div class="hc ${m}" title="${c.date.toLocaleDateString("id-ID")}: ${c.count}">${c.count||""}</div>
                `})}
          </div>
          <div class="hml">
            <span>Sedikit</span>
            <div class="lb" style="background:var(--ddd-theme-default-shrineLight);"></div>
            <div class="lb" style="background:var(--ddd-theme-default-shrineMaxLight);"></div>
            <div class="lb" style="background:var(--ddd-primary-13);"></div>
            <div class="lb" style="background:var(--ddd-primary-8);"></div>
            <div class="lb" style="background:var(--ddd-primary-0);"></div>
            <span>Banyak</span>
          </div>
          <div style="margin-top:var(--ddd-spacing-4); max-height:var(--ddd-layout-size-xl); overflow-y:auto;">
            <div style="font-size:var(--ddd-font-size-xxs); font-weight:var(--ddd-font-weight-black); color:var(--ddd-theme-default-limestoneGray); margin-bottom:var(--ddd-spacing-2);">Log Terbaru:</div>
            ${i.length===0?o`<div class="ti" style="margin:0;">Belum ada aktivitas tercatat. Gunakan tombol simulasi di atas atau kerjakan kuis/materi.</div>`:i.slice(0,5).map(c=>o`
                    <div class="li ${c.type}">
                      <span class="lt">${new Date(c.timestamp).toLocaleString("id-ID")}</span>
                      <span class="ld">${c.description}</span>
                    </div>
                  `)}
          </div>
        </div>
      </div>
    `}_renderNilai(){const t=this._grade(),e=this.grades;return e.attendanceWeight+e.quizWeight+e.utsWeight+e.uasWeight,o`
      <div class="c">
        <h2>📖 Transparansi Nilai</h2>
        <div class="gg">
          <div class="gi"><div class="gl">Kehadiran</div><div class="gv">${t.att}%</div></div>
          <div class="gi"><div class="gl">Kuis</div><div class="gv">${t.quiz}%</div></div>
          <div class="gi"><div class="gl">UTS</div><div class="gv">${e.uts}%</div></div>
          <div class="gi"><div class="gl">UAS</div><div class="gv">${e.uas}%</div></div>
          <div class="gi hl"><div class="gl">Nilai Akhir</div><div class="gv br">${t.final}</div></div>
          <div class="gi hl"><div class="gl">Grade</div><div class="gv br" style="font-size:32px">${t.grade}</div></div>
        </div>
        <table class="gt">
          <thead><tr><th>Komponen</th><th>Bobot</th><th>Nilai</th></tr></thead>
          <tbody>
            <tr><td class="bld">Kehadiran</td><td>${e.attendanceWeight}%</td><td>${t.att}</td></tr>
            <tr><td class="bld">Kuis</td><td>${e.quizWeight}%</td><td>${t.quiz}</td></tr>
            <tr><td class="bld">UTS</td><td>${e.utsWeight}%</td><td>${e.uts}</td></tr>
            <tr><td class="bld">UAS</td><td>${e.uasWeight}%</td><td>${e.uas}</td></tr>
            <tr>
              <td class="bld" colspan="3">
                Final = (${t.att}×${e.attendanceWeight}% + ${t.quiz}×${e.quizWeight}% + ${e.uts}×${e.utsWeight}% + ${e.uas}×${e.uasWeight}%) ÷ 100 = <strong>${t.final}</strong> (${t.grade})
              </td>
            </tr>
          </tbody>
        </table>
        <div class="ti">🧮 Bobot & nilai UTS/UAS bisa diubah di tab <strong>Atur</strong> (opsi dosen).</div>
      </div>
    `}_renderSoal(){const t=this._edit;return o`
      <div class="c">
        <h2>⚙️ Edit Soal (${this.questions.length})</h2>
        <div class="ef">
          <h3>${this._editIdx>=0?"Edit #"+(this._editIdx+1):"Tambah Baru"}</h3>
          <textarea class="et" placeholder="Pertanyaan..." .value=${t.q||""}
            @input=${e=>this._edit={...this._edit,q:e.target.value}}></textarea>
          <div>
            ${[0,1,2,3].map(e=>o`
                <div class="ecr">
                  <input placeholder="Pilihan ${e+1}" .value=${t["c"+e]||""}
                    @input=${a=>this._edit={...this._edit,["c"+e]:a.target.value}}>
                  <label class="rl">
                    <input type="radio" name="ca" value="${e}"
                      ?checked=${String(t.correct)===String(e)}
                      @change=${a=>this._edit={...this._edit,correct:a.target.value}}> Benar
                  </label>
                </div>
              `)}
          </div>
          ${this._editIdx>=0?o`
                <div class="ea">
                  <button class="bp p" @click=${this._simpanSoal}>Simpan</button>
                  <button class="bp s" @click=${()=>{this._editIdx=-1,this._edit={q:"",c0:"",c1:"",c2:"",c3:"",correct:"0"},this.requestUpdate()}}>Batal</button>
                </div>
              `:o`<button class="bp p fw" @click=${this._tambahSoal}>Tambah Soal</button>`}
        </div>
        <div style="margin-top:20px;">
          <h3>Daftar Soal</h3>
          ${this.questions.map((e,a)=>o`
              <div class="qcrd">
                <div class="qn">#${a+1}</div>
                <div style="flex:1;">${e.question}</div>
                <div class="qa2">
                  <button class="bs" aria-label="Edit soal ${a+1}" @click=${()=>this._editMulai(a)}>✏️</button>
                  <button class="bs dg" aria-label="Hapus soal ${a+1}" ?disabled=${this.questions.length<=3} @click=${()=>this._hapusSoal(a)}>🗑️</button>
                </div>
              </div>
            `)}
        </div>
      </div>
    `}_renderAtur(){const t=this.thresholds,e=this.grades,a=e.attendanceWeight+e.quizWeight+e.utsWeight+e.uasWeight,i=[{l:"Total Aktivitas",k:"minWeeklyActivities",v:t.minWeeklyActivities},{l:"Membaca",k:"minReading",v:t.minReading},{l:"Kuis",k:"minQuiz",v:t.minQuiz},{l:"Diskusi",k:"minDiscussion",v:t.minDiscussion}],s=[{l:"Nilai UTS",k:"uts",v:e.uts},{l:"Nilai UAS",k:"uas",v:e.uas},{l:"Bobot Kehadiran (%)",k:"attendanceWeight",v:e.attendanceWeight},{l:"Bobot Kuis (%)",k:"quizWeight",v:e.quizWeight},{l:"Bobot UTS (%)",k:"utsWeight",v:e.utsWeight},{l:"Bobot UAS (%)",k:"uasWeight",v:e.uasWeight}];return o`
      <div class="c">
        <h2>🔧 Pengaturan</h2>
        <h3 style="margin-top:var(--ddd-spacing-4);">Threshold Kehadiran</h3>
        <div class="sg">
          ${i.map(r=>o`
              <div class="si">
                <label for="th-${r.k}">${r.l}</label>
                <input id="th-${r.k}" class="sin" type="number" .value=${r.v}
                  @change=${d=>this._updThreshold(r.k,d.target.value)}>
              </div>
            `)}
        </div>
        <h3 style="margin-top:var(--ddd-spacing-5);">Bobot Nilai</h3>
        <div class="sg">
          ${s.map(r=>o`
              <div class="si">
                <label for="gr-${r.k}">${r.l}</label>
                <input id="gr-${r.k}" class="sin" type="number" .value=${r.v}
                  @change=${d=>this._updGrade(r.k,d.target.value)}>
              </div>
            `)}
        </div>
        <div class="ti w">⚠️ Total bobot: ${a}% (sebaiknya 100%)</div>
      </div>
    `}};X(J,"LOGS_KEY","a3_attendance_activity_logs"),X(J,"THRESHOLD_KEY","a3_attendance_threshold_config"),X(J,"GRADES_KEY","a3_attendance_grades_config"),X(J,"QUESTIONS_KEY","quiz_custom_questions"),X(J,"DEFAULT_QUESTIONS",[{question:"Apa ibu kota Indonesia?",choices:["Bandung","Surabaya","Jakarta","Medan"],correctIndex:2},{question:"Berapa hasil dari 7 \xD7 8?",choices:["54","56","58","60"],correctIndex:1},{question:"Planet terdekat dengan Matahari?",choices:["Venus","Bumi","Mars","Merkurius"],correctIndex:3},{question:"Siapa presiden pertama Indonesia?",choices:["Soeharto","Soekarno","Habibie","Megawati"],correctIndex:1},{question:"Berapa jumlah provinsi di Indonesia?",choices:["32","34","36","38"],correctIndex:2}]),X(J,"DEFAULT_THRESHOLDS",{minWeeklyActivities:5,minReading:2,minQuiz:1,minDiscussion:1}),X(J,"DEFAULT_GRADES",{uts:85,uas:88,attendanceWeight:50,quizWeight:30,utsWeight:25,uasWeight:25});let de=J;customElements.define(de.tag,de);class st extends O(j(F)){static get tag(){return"ruang-diskusi"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},forumApiUrl:{type:String,attribute:"forum-api-url",reflect:!0},sheetName:{type:String,attribute:"sheet-name",reflect:!0},studentId:{type:String,attribute:"student-id",reflect:!0},studentName:{type:String,attribute:"student-name",reflect:!0},studentNis:{type:String,attribute:"student-nis",reflect:!0},studentAbsen:{type:String,attribute:"student-absen",reflect:!0},studentKelas:{type:String,attribute:"student-kelas",reflect:!0},forumTopic:{type:String,attribute:"forum-topic",reflect:!0},viewMode:{type:String,attribute:"view-mode",reflect:!0},anchorId:{type:String,attribute:"anchor-id",reflect:!0},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},_comments:{state:!0},_activeReplyId:{state:!0},_sortMode:{state:!0},_submitting:{state:!0},_loadingComments:{state:!0},_toastMsg:{state:!0}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Ruang Diskusi",description:"Halaman ruang diskusi bertingkat terpisah (adaptasi forum-component)",icon:"icons:forum",color:"purple",tags:["Education","Forum"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Activity)",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet / Pertemuan",inputMethod:"textfield",default:"Pertemuan"},{property:"forumTopic",title:"Topik Forum",inputMethod:"textfield",default:"Ruang Diskusi"},{property:"viewMode",title:"Mode Tampilan",inputMethod:"select",options:{student:"Siswa",lecturer:"Dosen"},default:"student"},{property:"hideDelete",title:"Sembunyikan Hapus",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.forumTopic="Ruang Diskusi",this.viewMode="student",this.anchorId="ruang-diskusi",this.hideDelete=!1,this._comments=[],this._activeReplyId=null,this._sortMode="best",this._submitting=!1,this._loadingComments=!1,this._toastMsg="",this.t={...this.t,forumTitle:"Ruang Diskusi",postComment:"Kirim Komentar",posting:"Mengirim...",reply:"Balas",deleteBtn:"Hapus",noComments:"Belum ada komentar. Mulai diskusi!",sortBest:"Terbaik",sortNewest:"Terbaru",sortOldest:"Terlama",placeholderComment:"Tulis komentar...",placeholderReply:"Tulis balasan...",confirmDelete:"Hapus komentar ini?",activityForum:"Aktivitas forum tercatat",justNow:"Baru saja",minutesAgo:"menit lalu",hoursAgo:"jam lalu",daysAgo:"hari lalu",loginHint:"Login dulu untuk ikut berdiskusi atas nama Anda."}}get kdMateri(){return this.sheetName||"Pertemuan"}_commentAuthorName(){const t=(this.studentName||"").trim();if(!t)return"Siswa";const e=(this.studentKelas||"").trim();return e?`${t} (${e})`:t}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[st.tag]&&(t.elementList[st.tag]=st.haxProperties)}this._authHandler=this._onUserLogin.bind(this),globalThis.addEventListener("quiz-user-login",this._authHandler),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._loadForumComments()}disconnectedCallback(){this._authHandler&&globalThis.removeEventListener("quiz-user-login",this._authHandler),globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),super.disconnectedCallback()}_onUserLogin(t){t.detail&&(t.detail.studentId&&(this.studentId=t.detail.studentId),t.detail.nama&&(this.studentName=t.detail.nama),t.detail.nis&&(this.studentNis=t.detail.nis),t.detail.absen&&(this.studentAbsen=t.detail.absen),t.detail.kelas&&(this.studentKelas=t.detail.kelas))}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||""):(this.studentId="",this.studentName="",this.studentKelas="")}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}async _loadForumComments(){const t=this.forumApiUrl||this.appsScriptUrl;if(t){this._loadingComments=!0;try{const e=new URLSearchParams({action:"getForumComments",kdMateri:this.kdMateri,sort:this._sortMode}),a=await(await fetch(`${t}?${e.toString()}`,{redirect:"follow"})).json();a.status==="ok"&&a.comments&&(this._comments=this._buildThread(a.comments))}catch(e){console.error("[ruang-diskusi] Gagal memuat forum:",e)}this._loadingComments=!1}}_buildThread(t){const e={},a=[];return t.forEach(i=>{e[i.id]={...i,replies:[]}}),t.forEach(i=>{i.parentId&&e[i.parentId]?e[i.parentId].replies.push(e[i.id]):e[i.id]&&a.push(e[i.id])}),a}_getSorted(){const t=[...this._comments];return this._sortMode==="newest"?t.sort((e,a)=>new Date(a.time)-new Date(e.time)):this._sortMode==="oldest"?t.sort((e,a)=>new Date(e.time)-new Date(a.time)):t.sort((e,a)=>(a.likes||0)-(e.likes||0)),t}_setSort(t){this._sortMode=t,this._comments=[...this._comments],this._loadForumComments()}async _submitMainComment(){if(this._submitting)return;const t=this.shadowRoot.querySelector("#main-input");if(!t)return;const e=t.value.trim();if(!e)return;this._submitting=!0;const a={action:"saveForumComment",id:Date.now(),parentId:null,user:this._commentAuthorName(),studentId:this.studentId||"",text:e,sheet:this.sheetName,kdMateri:this.kdMateri,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};try{const i=await this._kirimForum(a);i.status==="ok"&&i.data&&(this._comments=[...this._comments,{...i.data,replies:[]}]),t.value=""}catch(i){console.error("[ruang-diskusi] Kirim gagal:",i)}this._submitting=!1,this._sendActivity("discussion",`Forum: ${e.substring(0,50)}`)}async _submitReply(t){if(this._submitting)return;const e=this.shadowRoot.querySelector(`#reply-${t}`);if(!e)return;const a=e.value.trim();if(!a)return;this._submitting=!0;const i={action:"saveForumComment",id:Date.now(),parentId:t,user:this._commentAuthorName(),studentId:this.studentId||"",text:a,sheet:this.sheetName,kdMateri:this.kdMateri,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""};try{const s=await this._kirimForum(i);s.status==="ok"&&s.data&&(this._comments=this._comments.map(r=>r.id===t?{...r,replies:[...r.replies||[],{...s.data,replies:[]}]}:r)),this._activeReplyId=null}catch(s){console.error("[ruang-diskusi] Balas gagal:",s)}this._submitting=!1,this._sendActivity("discussion",`Reply: ${a.substring(0,50)}`)}async _kirimForum(t){const e=this.forumApiUrl||this.appsScriptUrl;return e?(await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(t)})).json():{status:"error",message:"URL API tidak diatur"}}async _deleteComment(t){if(!globalThis.confirm(this.t.confirmDelete))return;const e=this.forumApiUrl||this.appsScriptUrl;if(e)try{await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"deleteForumComment",id:t})});const a=new Set([t]);this._comments.forEach(i=>{i.id===t&&i.replies&&i.replies.forEach(s=>a.add(s.id))}),this._comments=this._comments.filter(i=>!a.has(i.id)).map(i=>({...i,replies:(i.replies||[]).filter(s=>!a.has(s.id))}))}catch(a){console.error("[ruang-diskusi] Hapus gagal:",a)}}_findAndUpdateComment(t,e,a){return t.map(i=>i.id===e?a(i):i.replies&&i.replies.length>0?{...i,replies:this._findAndUpdateComment(i.replies,e,a)}:i)}_handleLike(t){this._comments=this._findAndUpdateComment(this._comments,t,e=>{const a=!e.isLiked;return{...e,isLiked:a,likes:a?(e.likes||0)+1:(e.likes||0)-1}}),this._syncLike(t)}_syncLike(t){const e=this.forumApiUrl||this.appsScriptUrl;if(!e)return;const a=this._comments.find(i=>i.id===t);a&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"saveForumComment",id:t,actionType:"like",isLiked:a.isLiked})}).catch(()=>{})}_toggleReply(t){this._activeReplyId=this._activeReplyId===t?null:t}_sendActivity(t,e){const a=this._buatIdLog();this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:{id_log:a,tipe:t,payload:{deskripsi:e,topik:this.forumTopic,timestamp:new Date().toISOString()}},bubbles:!0,composed:!0}))}_buatIdLog(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_timeAgo(t){if(!t)return"";const e=Date.now()-new Date(t).getTime(),a=Math.floor(e/6e4);if(a<1)return this.t.justNow;if(a<60)return`${a} ${this.t.minutesAgo}`;const i=Math.floor(a/60);return i<24?`${i} ${this.t.hoursAgo}`:`${Math.floor(i/24)} ${this.t.daysAgo}`}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,q`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
        }
        .card {
          background: var(--ddd-theme-default-surface);
          border-radius: var(--ddd-radius-lg);
          box-shadow: var(--ddd-shadow-1);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        h3 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-text);
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }
        .meta {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-full);
          display: inline-block;
          margin-bottom: var(--ddd-spacing-3);
        }
        .input-container {
          display: flex;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-4);
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--ddd-radius-circle);
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-l);
          flex-shrink: 0;
        }
        .input-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
        }
        .input-box {
          width: 100%;
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-s);
          min-height: 60px;
          resize: vertical;
          background: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-text);
        }
        .input-box:focus {
          outline: none;
          border-color: var(--ddd-theme-primary);
          box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring);
        }
        .btn-submit {
          align-self: flex-end;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          cursor: pointer;
        }
        .btn-submit:hover:not(:disabled) {
          background: var(--ddd-theme-accent);
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .login-hint {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          margin-bottom: var(--ddd-spacing-3);
        }
        .sort-bar {
          display: flex;
          gap: var(--ddd-spacing-2);
          margin-bottom: var(--ddd-spacing-4);
        }
        .sort-btn {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-full);
          background: var(--ddd-theme-default-surface);
          font-size: var(--ddd-font-size-xs);
          cursor: pointer;
        }
        .sort-btn--active {
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
          border-color: var(--ddd-theme-primary);
        }
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-3);
        }
        .comment-card {
          background: var(--ddd-theme-polaris-surface);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-3);
        }
        .comment-header {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          margin-bottom: var(--ddd-spacing-1);
        }
        .comment-avatar {
          width: 32px;
          height: 32px;
          border-radius: var(--ddd-radius-circle);
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-s);
        }
        .comment-meta {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-1);
        }
        .comment-user {
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-s);
        }
        .comment-time {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
        }
        .comment-text {
          font-size: var(--ddd-font-size-s);
          line-height: var(--ddd-lh-150);
          margin-bottom: var(--ddd-spacing-2);
          white-space: pre-wrap;
        }
        .comment-actions {
          display: flex;
          gap: var(--ddd-spacing-2);
        }
        .action-btn {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
          border: none;
          background: var(--ddd-theme-polaris-surface-hover);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
        }
        .action-btn:hover {
          background: var(--ddd-theme-primary);
          color: var(--ddd-theme-on-primary);
        }
        .reply-form {
          margin-top: var(--ddd-spacing-3);
          padding-left: var(--ddd-spacing-6);
          border-left: 2px solid var(--ddd-theme-polaris-border);
        }
        .reply-input {
          width: 100%;
          padding: var(--ddd-spacing-2);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          font-family: var(--ddd-font-primary);
          margin-bottom: var(--ddd-spacing-2);
        }
        .replies-list {
          margin-top: var(--ddd-spacing-3);
          padding-left: var(--ddd-spacing-6);
          border-left: 2px solid var(--ddd-theme-polaris-border);
        }
        .toast {
          position: fixed;
          bottom: var(--ddd-spacing-6);
          left: 50%;
          transform: translateX(-50%);
          background: var(--ddd-theme-default-text);
          color: var(--ddd-theme-on-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-full);
          box-shadow: var(--ddd-shadow-2);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `,q`
        /* ===== DARK MODE (DDD-token swap, gated on body.dark-mode) ===== */
        :host-context(body.dark-mode) :host {
          --dk-bg: #0b1020;
          --dk-card: #111827;
          --dk-soft: #1f2937;
          --dk-border: #2a3245;
          --dk-text: #e5e7eb;
          --dk-text-soft: #94a3b8;
          --dk-text-strong: #f8fafc;
          --ddd-theme-background: var(--dk-bg);
          --ddd-theme-color: var(--dk-text);
          --ddd-theme-surface: var(--dk-card);
          --ddd-theme-default-surface: var(--dk-card);
          --ddd-theme-default-text: var(--dk-text);
          --ddd-theme-on-primary: #f8fafc;
          --ddd-theme-primary: #c4b5fd;
          --ddd-theme-accent: #818cf8;
          --ddd-theme-secondary: var(--dk-text-soft);
          --ddd-theme-polaris-surface: var(--dk-card);
          --ddd-theme-polaris-border: var(--dk-border);
          --ddd-theme-polaris-surface-hover: var(--dk-soft);
          background: var(--dk-bg);
          color: var(--dk-text);
        }
        :host-context(body.dark-mode) .forum-card,
        :host-context(body.dark-mode) .comment-item,
        :host-context(body.dark-mode) .reply-item,
        :host-context(body.dark-mode) .editor,
        :host-context(body.dark-mode) .sort-btn,
        :host-context(body.dark-mode) .like-btn {
          background: var(--dk-card);
          color: var(--dk-text);
          border-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .sort-btn:hover,
        :host-context(body.dark-mode) .like-btn:hover { background: var(--dk-soft); }
      `]}render(){const t=this._getSorted();return o`
      <section class="card" id="${this.anchorId}" aria-labelledby="forum-heading">
        <h3 id="forum-heading">💬 ${this.forumTopic}</h3>
        <div class="meta">KD Materi: ${this.kdMateri}</div>

        <div class="input-container">
          <div class="avatar" aria-hidden="true">👤</div>
          <div class="input-wrapper">
            <label class="sr-only" for="main-input">${this.t.placeholderComment}</label>
            <textarea
              id="main-input"
              class="input-box"
              rows="2"
              placeholder="${this.t.placeholderComment}"
              aria-label="${this.t.placeholderComment}"
            ></textarea>
            ${this.studentId?"":o`<div class="login-hint">⚠️ ${this.t.loginHint}</div>`}
            <button
              class="btn-submit"
              ?disabled="${this._submitting}"
              @click=${this._submitMainComment}
              aria-label="${this.t.postComment}"
            >
              ${this._submitting?this.t.posting:this.t.postComment}
            </button>
          </div>
        </div>

        <div class="sort-bar" role="tablist" aria-label="Sort comments">
          <button
            class="sort-btn ${this._sortMode==="best"?"sort-btn--active":""}"
            @click=${()=>this._setSort("best")}
            role="tab"
            aria-selected=${this._sortMode==="best"}
          >${this.t.sortBest}</button>
          <button
            class="sort-btn ${this._sortMode==="newest"?"sort-btn--active":""}"
            @click=${()=>this._setSort("newest")}
            role="tab"
            aria-selected=${this._sortMode==="newest"}
          >${this.t.sortNewest}</button>
          <button
            class="sort-btn ${this._sortMode==="oldest"?"sort-btn--active":""}"
            @click=${()=>this._setSort("oldest")}
            role="tab"
            aria-selected=${this._sortMode==="oldest"}
          >${this.t.sortOldest}</button>
        </div>

        <div class="comments-list">
          ${this._loadingComments?o`<div style="text-align:center;padding:var(--ddd-spacing-6);color:var(--ddd-theme-secondary);">Memuat komentar...</div>`:t.length===0?o`<div style="text-align:center;padding:var(--ddd-spacing-6);color:var(--ddd-theme-secondary);">${this.t.noComments}</div>`:t.map(e=>this._renderComment(e))}
        </div>
      </section>
      ${this._toastMsg?o`<div class="toast">${this._toastMsg}</div>`:""}
    `}_renderComment(t){const e=t.isLiked;return o`
      <div class="comment-card" style="margin-bottom:var(--ddd-spacing-3);">
        <div class="comment-header">
          <div class="comment-avatar">${(t.user||"?")[0].toUpperCase()}</div>
          <div class="comment-meta">
            <span class="comment-user">${t.user}${t.kelas?o` <small>(${t.kelas})</small>`:""}</span>
            <span class="comment-time">${this._timeAgo(t.time)}</span>
          </div>
        </div>
        <div class="comment-text">${t.text}</div>
        <div class="comment-actions">
          <button
            class="action-btn"
            @click=${()=>this._handleLike(t.id)}
            aria-label=${e?"Unlike":"Like"}
          >
            ${e?"\u2764\uFE0F":"\u{1F90D}"} ${t.likes||0}
          </button>
          <button class="action-btn" @click=${()=>this._toggleReply(t.id)}>${this.t.reply}</button>
          ${!this.hideDelete&&this.viewMode==="lecturer"?o`<button class="action-btn" @click=${()=>this._deleteComment(t.id)} style="color:var(--ddd-theme-error);">${this.t.deleteBtn}</button>`:""}
        </div>

        ${this._activeReplyId===t.id?o`
              <div class="reply-form">
                <textarea
                  id="reply-${t.id}"
                  class="reply-input"
                  rows="2"
                  placeholder="${this.t.placeholderReply}"
                  aria-label="${this.t.placeholderReply}"
                ></textarea>
                <button
                  class="btn-submit"
                  @click=${()=>this._submitReply(t.id)}
                  ?disabled=${this._submitting}
                >
                  ${this._submitting?"Mengirim...":"Kirim Balasan"}
                </button>
              </div>
            `:""}

        ${t.replies&&t.replies.length>0?o`
              <div class="replies-list">
                ${t.replies.map(a=>this._renderComment(a))}
              </div>
            `:""}
      </div>
    `}}globalThis.customElements.define(st.tag,st);class rt extends O(j(F)){static get tag(){return"kirim-tugas"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},forumApiUrl:{type:String,attribute:"forum-api-url",reflect:!0},sheetName:{type:String,attribute:"sheet-name",reflect:!0},studentId:{type:String,attribute:"student-id",reflect:!0},studentName:{type:String,attribute:"student-name",reflect:!0},studentNis:{type:String,attribute:"student-nis",reflect:!0},studentAbsen:{type:String,attribute:"student-absen",reflect:!0},studentKelas:{type:String,attribute:"student-kelas",reflect:!0},assignmentTitle:{type:String,attribute:"assignment-title",reflect:!0},assignmentInstruction:{type:String,attribute:"assignment-instruction",reflect:!0},hideDelete:{type:Boolean,attribute:"hide-delete",reflect:!0},_assignmentText:{state:!0},_assignmentLink:{state:!0},_assignmentSubmitted:{state:!0},_submitting:{state:!0},_toastMsg:{state:!0}}}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Kirim Tugas",description:"Halaman pengumpulan tugas mandiri terpisah (adaptasi assignment-component)",icon:"icons:assignment-turned-in",color:"blue",tags:["Education","Assignment"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL (Activity)",inputMethod:"textfield"},{property:"forumApiUrl",title:"Forum API URL (Tugas)",inputMethod:"textfield"},{property:"sheetName",title:"Nama Sheet / Pertemuan",inputMethod:"textfield",default:"Pertemuan"},{property:"assignmentTitle",title:"Judul Tugas",inputMethod:"textfield",default:"Tugas Mandiri"},{property:"assignmentInstruction",title:"Instruksi Tugas",inputMethod:"textfield",default:"Tuliskan refleksi atau jawaban tugas Anda."},{property:"hideDelete",title:"Sembunyikan Hapus",inputMethod:"boolean"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:[]}}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.sheetName="Pertemuan",this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.assignmentTitle="Tugas Mandiri",this.assignmentInstruction="Tuliskan refleksi atau jawaban tugas Anda.",this.hideDelete=!1,this._assignmentText="",this._assignmentLink="",this._assignmentSubmitted=!1,this._submitting=!1,this._toastMsg="",this.t={...this.t,submissionTitle:"Pengumpulan Tugas",submitBtn:"Kirim & Kunci Tugas",submitting:"Mengirim...",submitted:"Tugas Diserahkan & Tersimpan ke Google Sheets",pending:"Belum Menyerahkan",resetBtn:"Ubah",placeholderTask:"Tulis jawaban tugas Anda di sini...",placeholderLink:"Link Google Drive / Google Doc (opsional)",invalidLink:"Format link tidak valid. Gunakan URL Google Drive/Doc.",emptyTask:"Isi tugas atau link Google Drive terlebih dahulu!",activityAssignment:"Tugas dikumpulkan",backendError:"Gagal tersimpan ke sheet. Perbarui deployment Apps Script (New version).",loginHint:"Login dulu untuk memastikan tugas tercatat atas nama Anda."}}get kdMateri(){return this.sheetName||"Pertemuan"}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[rt.tag]&&(t.elementList[rt.tag]=rt.haxProperties)}this._loadFromStorage(),this._listenSession(),this._onLogoutBound=this._onLogout.bind(this),globalThis.addEventListener("quiz-user-logout",this._onLogoutBound)}disconnectedCallback(){globalThis.removeEventListener("quiz-user-session-changed",this._handleSessionChanged),globalThis.removeEventListener("quiz-user-logout",this._onLogoutBound),super.disconnectedCallback()}_onLogout(){this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas=""}_listenSession(){this._handleSessionChanged=this._handleSessionChanged.bind(this),globalThis.addEventListener("quiz-user-session-changed",this._handleSessionChanged),this._handleSessionChanged({detail:this._loadSession()})}_loadSession(){try{const t=JSON.parse(localStorage.getItem("quiz_user_session"));return t?.expiresAt&&Date.now()>t.expiresAt?(localStorage.removeItem("quiz_user_session"),null):t}catch{return null}}_handleSessionChanged(t){const e=t?.detail||this._loadSession();e?.studentId?(this.studentId=e.studentId,this.studentName=e.nama,this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||""):(this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="")}_storageKey(){return`hax_assignment_${this.kdMateri}`}_loadFromStorage(){try{const t=JSON.parse(localStorage.getItem(this._storageKey()));t&&(this._assignmentSubmitted=t.submitted===!0,this._assignmentText=t.text||"",this._assignmentLink=t.link||"")}catch{}}_saveToStorage(){try{localStorage.setItem(this._storageKey(),JSON.stringify({submitted:this._assignmentSubmitted,text:this._assignmentText,link:this._assignmentLink}))}catch{}}_isValidUrl(t){try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}async _submitAssignment(){if(this._submitting)return;const t=this._assignmentText.trim();if(!t&&!this._assignmentLink){globalThis.alert(this.t.emptyTask);return}if(this._assignmentLink&&!this._isValidUrl(this._assignmentLink)){globalThis.alert(this.t.invalidLink);return}this._submitting=!0;const e=this.forumApiUrl||this.appsScriptUrl;if(e&&this.studentId){const a=new URLSearchParams({action:"saveAssignment",studentId:this.studentId,name:this.studentName,sheet:this.sheetName,title:this.assignmentTitle,content:t,link:this._assignmentLink,kdMateri:this.kdMateri,nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||""});try{const i=await(await fetch(`${e}?${a.toString()}`,{redirect:"follow"})).json().catch(()=>null);if(i&&i.status==="error"){console.error("[kirim-tugas] Backend menolak:",i.message),this._submitting=!1,this._showToast(`\u26A0\uFE0F ${this.t.backendError}`);return}i&&i.status!=="ok"&&console.error("[kirim-tugas] Respons tak dikenal:",i)}catch(i){console.error("[kirim-tugas] Gagal mengirim tugas:",i),this._submitting=!1,this._showToast(`\u26A0\uFE0F ${this.t.backendError}`);return}}this._assignmentSubmitted=!0,this._submitting=!1,this._saveToStorage(),this._showToast(`\u2713 ${this.t.activityAssignment}`),this._dispatchActivity("assignment",`Tugas: ${this.assignmentTitle}`)}_resetAssignment(){this._assignmentSubmitted=!1,this._assignmentText="",this._assignmentLink="",this._saveToStorage()}_dispatchActivity(t,e){const a=this._buatIdLog();this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:{id_log:a,tipe:t,payload:{deskripsi:e,judul:this.assignmentTitle,timestamp:new Date().toISOString()}},bubbles:!0,composed:!0}))}_buatIdLog(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_showToast(t){this._toastMsg=t,setTimeout(()=>{this._toastMsg===t&&(this._toastMsg="")},3e3)}static get styles(){return[super.styles,q`
        :host {
          display: block;
          font-family: var(--ddd-font-primary);
          color: var(--ddd-theme-default-text);
        }
        .card {
          background: var(--ddd-theme-default-surface);
          border-radius: var(--ddd-radius-lg);
          box-shadow: var(--ddd-shadow-1);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
          border: 1px solid var(--ddd-theme-polaris-border);
        }
        h3 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-m);
          color: var(--ddd-theme-default-text);
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
        }
        .meta {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          background: var(--ddd-theme-polaris-surface-hover);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-full);
          display: inline-block;
          margin-bottom: var(--ddd-spacing-3);
        }
        .instruction {
          margin: 0 0 var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-s);
          color: var(--ddd-theme-secondary);
          line-height: var(--ddd-lh-150);
        }
        textarea,
        input[type="url"],
        input[type="text"] {
          width: 100%;
          min-height: var(--ddd-spacing-20);
          padding: var(--ddd-spacing-3);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          font-size: var(--ddd-font-size-s);
          box-sizing: border-box;
          resize: vertical;
          font-family: var(--ddd-font-primary);
          margin-bottom: var(--ddd-spacing-2);
          background: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-text);
        }
        textarea:focus,
        input:focus {
          outline: none;
          border-color: var(--ddd-theme-primary);
          box-shadow: 0 0 0 2px var(--ddd-theme-polaris-focus-ring);
        }
        textarea:disabled,
        input:disabled {
          background: var(--ddd-theme-polaris-surface);
          cursor: not-allowed;
          opacity: 0.7;
        }
        .btn-group {
          display: flex;
          gap: var(--ddd-spacing-2);
          flex-wrap: wrap;
          margin-top: var(--ddd-spacing-3);
        }
        .btn {
          border: none;
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-bold);
          font-family: var(--ddd-font-primary);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
          color: var(--ddd-theme-on-primary);
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .btn-success {
          background: var(--ddd-theme-success);
        }
        .btn-success:hover:not(:disabled) {
          background: var(--ddd-theme-success-dark);
        }
        .btn-danger {
          background: var(--ddd-theme-error);
        }
        .btn-danger:hover:not(:disabled) {
          background: var(--ddd-theme-error-dark);
        }
        .btn-sm {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }
        .badge-done {
          background: var(--ddd-theme-success-light);
          color: var(--ddd-theme-success-text);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-2);
        }
        .badge-pending {
          background: var(--ddd-theme-warning-light);
          color: var(--ddd-theme-warning-text);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: var(--ddd-font-size-xs);
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          margin-top: var(--ddd-spacing-2);
        }
        .login-hint {
          font-size: var(--ddd-font-size-xs);
          color: var(--ddd-theme-secondary);
          margin-bottom: var(--ddd-spacing-3);
        }
        .toast {
          position: fixed;
          bottom: var(--ddd-spacing-6);
          left: 50%;
          transform: translateX(-50%);
          background: var(--ddd-theme-default-text);
          color: var(--ddd-theme-on-primary);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-full);
          box-shadow: var(--ddd-shadow-2);
          font-size: var(--ddd-font-size-s);
          font-weight: var(--ddd-font-weight-medium);
          z-index: 1000;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `,q`
        /* ===== DARK MODE (DDD-token swap, gated on body.dark-mode) ===== */
        :host-context(body.dark-mode) :host {
          --dk-bg: #0b1020;
          --dk-card: #111827;
          --dk-soft: #1f2937;
          --dk-border: #2a3245;
          --dk-text: #e5e7eb;
          --dk-text-soft: #94a3b8;
          --dk-text-strong: #f8fafc;
          --ddd-theme-background: var(--dk-bg);
          --ddd-theme-color: var(--dk-text);
          --ddd-theme-surface: var(--dk-card);
          --ddd-theme-default-surface: var(--dk-card);
          --ddd-theme-default-text: var(--dk-text);
          --ddd-theme-on-primary: #f8fafc;
          --ddd-theme-primary: #c4b5fd;
          --ddd-theme-secondary: var(--dk-text-soft);
          --ddd-theme-polaris-surface: var(--dk-card);
          --ddd-theme-polaris-border: var(--dk-border);
          --ddd-theme-polaris-surface-hover: var(--dk-soft);
          --ddd-theme-success: #6ee7b7;
          --ddd-theme-success-light: #064e3b;
          --ddd-theme-success-text: #6ee7b7;
          --ddd-theme-success-dark: #047857;
          --ddd-theme-error: #fca5a5;
          --ddd-theme-error-dark: #7f1d1d;
          --ddd-theme-warning: #fcd34d;
          --ddd-theme-warning-light: #78350f;
          --ddd-theme-warning-text: #fde68a;
          background: var(--dk-bg);
          color: var(--dk-text);
        }
        :host-context(body.dark-mode) .upload-card,
        :host-context(body.dark-mode) .file-input,
        :host-context(body.dark-mode) .status-banner {
          background: var(--dk-card);
          color: var(--dk-text);
          border-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .file-input { background: var(--dk-soft); }
        :host-context(body.dark-mode) .btn-submit { background: #4f46e5; color: #f8fafc; }
        :host-context(body.dark-mode) .btn-submit:hover { background: #6366f1; }
        :host-context(body.dark-mode) .status-banner.success { background: #064e3b; color: #6ee7b7; border-color: #047857; }
        :host-context(body.dark-mode) .status-banner.error { background: #7f1d1d; color: #fecaca; border-color: #991b1b; }
      `]}render(){return o`
      <section class="card" aria-labelledby="assignment-heading">
        <h3 id="assignment-heading">📤 ${this.assignmentTitle}</h3>
        <div class="meta">Formatif | ${this.t.submissionTitle} | KD: ${this.kdMateri}</div>
        <p class="instruction">${this.assignmentInstruction}</p>
        ${this.studentId?"":o`<div class="login-hint">⚠️ ${this.t.loginHint}</div>`}
        <label class="sr-only" for="task-link">${this.t.placeholderLink}</label>
        <input
          id="task-link"
          type="url"
          placeholder="${this.t.placeholderLink}"
          .value="${this._assignmentLink}"
          @input=${t=>{this._assignmentLink=t.target.value}}
          ?disabled="${this._assignmentSubmitted}"
          aria-label="${this.t.placeholderLink}"
        />
        <label class="sr-only" for="task-text">${this.t.placeholderTask}</label>
        <textarea
          id="task-text"
          .value="${this._assignmentText}"
          @input=${t=>{this._assignmentText=t.target.value}}
          ?disabled="${this._assignmentSubmitted}"
          placeholder="${this.t.placeholderTask}"
          aria-label="${this.t.placeholderTask}"
        ></textarea>
        <div class="btn-group">
          ${this._assignmentSubmitted?o`
                <button class="btn btn-success btn-sm" disabled aria-label="${this.t.submitted}">✅ ${this.t.submitted}</button>
                ${this.hideDelete?"":o`<button class="btn btn-danger btn-sm" @click=${this._resetAssignment} aria-label="${this.t.resetBtn}">🔄 ${this.t.resetBtn}</button>`}
              `:o`
                <button
                  class="btn btn-success"
                  ?disabled="${this._submitting}"
                  @click=${this._submitAssignment}
                  aria-label="${this.t.submitBtn}"
                >
                  ${this._submitting?`\u23F3 ${this.t.submitting}`:this.t.submitBtn}
                </button>
              `}
        </div>
        <div
          class="${this._assignmentSubmitted?"badge-done":"badge-pending"}"
          role="status"
          aria-live="polite"
        >
          ${this._assignmentSubmitted?`\u2705 ${this.t.submitted}`:`\u26A0\uFE0F ${this.t.pending}`}
        </div>
      </section>
      ${this._toastMsg?o`<div class="toast">${this._toastMsg}</div>`:""}
    `}}globalThis.customElements.define(rt.tag,rt);class qt extends O(j(F)){static get tag(){return"timer-materi-kuis"}static get properties(){return{...super.properties,durasiMateri:{type:Number,attribute:"durasi-materi",reflect:!0},durasiKuis:{type:Number,attribute:"durasi-kuis",reflect:!0},autostartMateri:{type:Boolean,attribute:"autostart-materi",reflect:!0},kdMateri:{type:String,attribute:"kd-materi"},studentId:{type:String,attribute:"student-id"},_sisaMateri:{state:!0},_sisaKuis:{state:!0},_jalanMateri:{state:!0},_jalanKuis:{state:!0}}}constructor(){super(),this.durasiMateri=600,this.durasiKuis=300,this.autostartMateri=!1,this._sisaMateri=this.durasiMateri,this._sisaKuis=this.durasiKuis,this._jalanMateri=!1,this._jalanKuis=!1,this._ivMateri=null,this._ivKuis=null,this.t={...this.t,materi:"Waktu Materi",kuis:"Waktu Kuis",start:"Mulai",pause:"Jeda",reset:"Ulang",done:"Waktu habis"}}connectedCallback(){super.connectedCallback(),this._sisaMateri=this.durasiMateri,this._sisaKuis=this.durasiKuis,this.autostartMateri&&this.start("materi"),this._onVisChange=this._onVisChange.bind(this),globalThis.addEventListener("visibilitychange",this._onVisChange)}disconnectedCallback(){globalThis.removeEventListener("visibilitychange",this._onVisChange),this._clearInterval("materi"),this._clearInterval("kuis"),super.disconnectedCallback()}_onVisChange(){document.hidden?(this._jalanMateri&&this.pause("materi"),this._jalanKuis&&this.pause("kuis")):(this.autostartMateri&&this._sisaMateri>0&&!this._jalanMateri&&this.start("materi"),this._sisaMateri<=0&&!this._jalanMateri&&this.dispatchEvent(new CustomEvent("timer-materi-expired",{bubbles:!0,composed:!0})),this._sisaKuis<=0&&!this._jalanKuis&&this.dispatchEvent(new CustomEvent("timer-kuis-expired",{bubbles:!0,composed:!0})))}updated(t){t.has("durasiMateri")&&!this._jalanMateri&&(this._sisaMateri=this.durasiMateri),t.has("durasiKuis")&&!this._jalanKuis&&(this._sisaKuis=this.durasiKuis)}_meta(t){return t==="materi"?{dur:this.durasiMateri,sisa:"_sisaMateri",jalan:"_jalanMateri",iv:"_ivMateri",event:"timer-materi-expired",title:this.t.materi}:{dur:this.durasiKuis,sisa:"_sisaKuis",jalan:"_jalanKuis",iv:"_ivKuis",event:"timer-kuis-expired",title:this.t.kuis}}start(t){const e=this._meta(t);this[e.jalan]||(this[e.sisa]<=0&&(this[e.sisa]=e.dur),this[e.jalan]=!0,this._clearInterval(t),this._saveStartTime(t,Date.now()-(e.dur-this[e.sisa])*1e3),this[e.iv]=setInterval(()=>this._tick(t),1e3))}pause(t){const e=this._meta(t);this[e.jalan]=!1,this._clearInterval(t)}reset(t){const e=this._meta(t);this._clearInterval(t),this[e.jalan]=!1,this[e.sisa]=e.dur,this._clearStartTime(t)}_clearInterval(t){const e=t==="materi"?"_ivMateri":"_ivKuis";this[e]&&(clearInterval(this[e]),this[e]=null)}_startKey(t){return`timer_mk_start_${t}_${this.kdMateri||"default"}_${this.studentId||"default"}`}_saveStartTime(t,e){try{globalThis.localStorage.setItem(this._startKey(t),String(e))}catch{}}_loadStartTime(t){try{const e=parseInt(globalThis.localStorage.getItem(this._startKey(t))||"0",10);return isNaN(e)?0:e}catch{return 0}}_clearStartTime(t){try{globalThis.localStorage.removeItem(this._startKey(t))}catch{}}_tick(t){const e=this._meta(t),a=this._loadStartTime(t);if(a>0){const i=Math.floor((Date.now()-a)/1e3);this[e.sisa]=Math.max(0,e.dur-i)}else this[e.sisa]>0&&(this[e.sisa]-=1);this[e.sisa]<=0&&(this[e.sisa]=0,this[e.jalan]=!1,this._clearInterval(t),this._clearStartTime(t),this.dispatchEvent(new CustomEvent(e.event,{detail:{phase:t},bubbles:!0,composed:!0})))}_format(t){const e=Math.floor(t/60),a=t%60;return`${String(e).padStart(2,"0")}:${String(a).padStart(2,"0")}`}_renderTimer(t){const e=this._meta(t),a=this[e.sisa],i=this[e.jalan],s=a<=10,r=`${e.title}: ${this._format(a)} ${s?"hampir habis":""}`;return o`
      <div class="timer-card" role="timer" aria-live="polite" aria-label="${r}">
        <div class="meta">
          <span class="title">${e.title}</span>
          <span class="time ${s?"warn":""}">${this._format(a)}</span>
        </div>
        <div class="controls">
          ${i?o`<button @click="${this._onPause.bind(this,t)}" aria-label="Jeda ${e.title.toLowerCase()}">⏸️ ${this.t.pause}</button>`:o`<button @click="${this._onStart.bind(this,t)}" ?disabled="${a<=0}" aria-label="Mulai ${e.title.toLowerCase()}">▶️ ${this.t.start}</button>`}
          <button @click="${this._onReset.bind(this,t)}" aria-label="Atur ulang ${e.title.toLowerCase()}">↺ ${this.t.reset}</button>
        </div>
      </div>
      ${a<=0?o`<div class="done" role="alert">⏰ ${this.t.done}</div>`:""}
    `}_onStart(t){this.start(t)}_onPause(t){this.pause(t)}_onReset(t){this.reset(t)}static get styles(){return[super.styles,q`
        :host { display: block; }
        .grid {
          display: grid; gap: var(--ddd-spacing-5);
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          font-family: var(--ddd-font-primary);
        }
        .timer-card {
          display: inline-flex; align-items: center; gap: var(--ddd-spacing-4);
          background: var(--ddd-theme-surface);
          border: 1px solid var(--ddd-border-sm);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
        }
        .meta { display: flex; flex-direction: column; }
        .title { font-size: var(--ddd-font-size-s); color: var(--ddd-theme-secondary); }
        .time {
          font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-primary); font-variant-numeric: tabular-nums;
          min-width: 90px; text-align: center;
        }
        .time.warn { color: var(--ddd-theme-error); }
        .controls { display: flex; gap: var(--ddd-spacing-2); }
        button {
          font-family: var(--ddd-font-primary); font-size: var(--ddd-font-size-s);
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md); border: 1px solid var(--ddd-border-sm);
          background: var(--ddd-theme-default-surface); color: var(--ddd-theme-primary);
          cursor: pointer;
        }
        button:hover { background: rgba(103,80,164,0.08); }
        button:disabled { opacity: 0.5; cursor: not-allowed; }
        .done { margin-top: var(--ddd-spacing-2); color: var(--ddd-theme-error); font-size: var(--ddd-font-size-s); }
      `,q`
        @media (prefers-color-scheme: dark) {
          :host {
            --ddd-theme-background: #0b1020;
            --ddd-theme-color: #e5e7eb;
            --ddd-theme-surface: #111827;
            --ddd-theme-default-surface: #111827;
            --ddd-theme-primary: #c4b5fd;
            --ddd-theme-secondary: #94a3b8;
            --ddd-theme-error: #fca5a5;
            --ddd-border-color: #2a3245;
            background: #0b1020;
            color: #e5e7eb;
          }
          .title { color: #94a3b8; }
          .time { color: #c4b5fd; }
          .time.warn { color: #fca5a5; }
        }
      `]}render(){return o`
      <div class="grid">
        ${this._renderTimer("materi")}
        ${this._renderTimer("kuis")}
      </div>
    `}static get haxProperties(){return{api:"1",canScale:!0,canPosition:!0,canEditSource:!1,type:"element",designSystem:{accent:!0,primary:!0,card:!0,text:!0,designTreatment:!1},gizmo:{title:"Timer Materi & Kuis",description:"Dua timer terpisah untuk membaca materi dan mengerjakan kuis",icon:"icons:timer",color:"purple",tags:["Education","Timer","Quiz","Materi"]},settings:{configure:[{property:"durasiMateri",title:"Durasi Materi (detik)",inputMethod:"number",description:"Lama waktu membaca materi dalam detik",default:600},{property:"durasiKuis",title:"Durasi Kuis (detik)",inputMethod:"number",description:"Lama waktu mengerjakan kuis dalam detik",default:300},{property:"autostartMateri",title:"Mulai Timer Materi Otomatis",inputMethod:"boolean",default:!1}]},saveOptions:{unsetAttributes:[]},demoSchema:[{tag:"timer-materi-kuis",properties:{durasiMateri:600,durasiKuis:300,autostartMateri:!1},content:""},{tag:"timer-materi-kuis",properties:{durasiMateri:30,durasiKuis:15,autostartMateri:!0},content:""}]}}}customElements.get(qt.tag)||globalThis.customElements.define(qt.tag,qt);class dt extends O(j(F)){static get tag(){return"quiz-user-auth"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},autoLogin:{type:Boolean,attribute:"auto-login",reflect:!0},_screen:{state:!0},_nama:{state:!0},_email:{state:!0},_nis:{state:!0},_absen:{state:!0},_kelas:{state:!0},_studentId:{state:!0},_errorMsg:{state:!0},_successMsg:{state:!0},_loading:{state:!0},_verifyError:{state:!0},_verifyMsg:{state:!0}}}constructor(){super(),this.basePath=new URL(".",import.meta.url).href,this.appsScriptUrl="",this.autoLogin=!0,this._screen="check",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._studentId="",this._errorMsg="",this._successMsg="",this._loading=!1,this._verifyError=!1,this._verifyMsg="",this._sessionInterval=null}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const e=globalThis.HaxStore.requestAvailability();e&&!e.elementList[dt.tag]&&(e.elementList[dt.tag]=dt.haxProperties)}this.registerLocalization({context:this,localesPath:`${this.basePath}locales/`});const t=this._load("quiz_user_session");t&&t.studentId?(this._studentId=t.studentId,this._nama=t.nama,this._email=t.email||"",this._nis=t.nis||"",this._absen=t.absen||"",this._kelas=t.kelas||"",this._screen="logged-in",this.autoLogin&&this._dispatchLogin(),this._startSessionWatch(),!this._absen&&this._nis&&setTimeout(()=>this._verifySession(),300)):this._screen="login"}disconnectedCallback(){this._sessionInterval&&(clearInterval(this._sessionInterval),this._sessionInterval=null),super.disconnectedCallback()}_load(t){try{const e=JSON.parse(localStorage.getItem(t));return e&&e.expiresAt&&Date.now()>e.expiresAt?(this._clear(t),null):e}catch{return null}}_save(t,e){try{const a={...e,expiresAt:Date.now()+864e5};localStorage.setItem(t,JSON.stringify(a))}catch{}}_clear(t){try{localStorage.removeItem(t)}catch{}}async _api(t,e){const a=new AbortController,i=setTimeout(()=>a.abort(),6e4),s=new URLSearchParams(e);try{const r=await fetch(`${this.appsScriptUrl}?action=${t}&${s.toString()}`,{redirect:"follow",signal:a.signal});if(!r.ok)throw new Error(`Backend merespons HTTP ${r.status}.`);const d=await r.text();if(!d||d.trim().charAt(0)!=="{")throw new Error("Respon backend bukan JSON. Periksa URL /exec & deployment.");return JSON.parse(d)}catch(r){throw r&&r.name==="AbortError"?new Error("Waktu habis (timeout 60 detik) menghubungi server."):r}finally{clearTimeout(i)}}_ekstrakOk(t){const e=t&&(t.status==="ok"||t.status==="success"),a=t&&t.data||t||{};return{ok:!!e,studentId:a.student_id||a.studentId||"",nis:a.nis||"",nama:a.nama||"",email:a.email||"",absen:a.absen||"",kelas:a.kelas||"",message:t&&t.message||""}}async _verifySession(){if(this.appsScriptUrl){this._loading=!0,this._verifyError=!1,this._verifyMsg="";try{const t=await this._api("verify",{studentId:this._studentId}),e=this._ekstrakOk(t);e.ok?(this._nama=e.nama||this._nama,this._nis=e.nis||this._nis,this._absen=e.absen||this._absen,this._kelas=e.kelas||this._kelas,this._screen="logged-in",this._mutasiProfilKunci(),this._dispatchLogin()):(this._verifyError=!0,this._verifyMsg=e.message||"Sesi belum terverifikasi di server.")}catch{this._verifyError=!0,this._verifyMsg="Tidak dapat memverifikasi sesi (offline?). Sesi lokal tetap aktif."}this._loading=!1}}async _handleLogin(t){if(t.preventDefault(),this._errorMsg="",!this.appsScriptUrl){this._errorMsg="URL Apps Script belum dikonfigurasi.";return}this._loading=!0;try{const e=await this._api("login",{nis:this._nis.trim(),email:this._email.trim().toLowerCase()}),a=this._ekstrakOk(e);a.ok&&a.studentId?(this._studentId=a.studentId,this._nama=a.nama||this._nama,this._nis=a.nis||this._nis,this._absen=a.absen||this._absen,this._kelas=a.kelas||this._kelas,this._save("quiz_user_session",{studentId:this._studentId,nama:this._nama,email:this._email.trim().toLowerCase(),nis:this._nis,absen:this._absen,kelas:this._kelas}),this._mutasiProfilKunci(),this._screen="logged-in",this._dispatchLogin(),this._startSessionWatch()):this._errorMsg=a.message||"Login gagal"}catch(e){this._errorMsg=e.message||"Gagal menghubungi server"}this._loading=!1}async _handleRegister(t){if(t.preventDefault(),this._errorMsg="",this._successMsg="",!this.appsScriptUrl){this._errorMsg="URL Apps Script belum dikonfigurasi.";return}this._loading=!0;try{const e=await this._api("register",{nama:this._nama.trim(),email:this._email.trim().toLowerCase(),nis:this._nis.trim(),absen:this._absen.trim(),kelas:this._kelas.trim()}),a=this._ekstrakOk(e);a.ok?(this._successMsg="Pendaftaran berhasil! Silakan masuk.",this._screen="login"):this._errorMsg=a.message||"Gagal mendaftar"}catch(e){this._errorMsg=e.message||"Gagal menghubungi server."}this._loading=!1}_startSessionWatch(){this._sessionInterval&&clearInterval(this._sessionInterval),this._sessionInterval=setInterval(()=>{const t=this._load("quiz_user_session");(!t||!t.studentId)&&(this._clear("quiz_user_session"),this._studentId="",this._screen="login",globalThis.dispatchEvent(new CustomEvent("quiz-user-logout",{bubbles:!0,composed:!0})),this._dispatchSessionChanged())},6e4)}_handleLogout(){this._sessionInterval&&(clearInterval(this._sessionInterval),this._sessionInterval=null),this._clear("quiz_user_session"),this._clear("a3_v5_student_profile"),this._studentId="",this._nama="",this._email="",this._nis="",this._absen="",this._kelas="",this._screen="login",globalThis.dispatchEvent(new CustomEvent("quiz-user-logout",{bubbles:!0,composed:!0})),this._dispatchSessionChanged()}_mutasiProfilKunci(){try{localStorage.setItem("a3_v5_student_profile",JSON.stringify({student_id:this._studentId,nama:this._nama,kelas:this._kelas,nis:this._nis,absen:this._absen}))}catch{}}_dispatchLogin(){globalThis.dispatchEvent(new CustomEvent("quiz-user-login",{detail:{studentId:this._studentId,nama:this._nama,email:this._email,nis:this._nis,absen:this._absen,kelas:this._kelas},bubbles:!0,composed:!0})),this._dispatchSessionChanged()}_dispatchSessionChanged(){const t=this._load("quiz_user_session");globalThis.dispatchEvent(new CustomEvent("quiz-user-session-changed",{detail:t,bubbles:!0,composed:!0}))}static get styles(){return[super.styles,q`
        :host {
          display: block;
          margin-bottom: var(--ddd-spacing-4);
          font-family: var(--ddd-font-primary, 'DM Sans', system-ui, sans-serif);
        }

        /* ===== Chalkboard-inspired design tokens ===== */
        .auth-card {
          background: linear-gradient(155deg, var(--ddd-theme-polaris-surface), var(--ddd-theme-default-surface));
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: 12px;
          padding: var(--ddd-spacing-6, 32px);
          max-width: 420px;
          margin: 0 auto;
          box-shadow: 0 24px 48px -16px rgba(26, 35, 50, 0.45), inset 0 1px 0 rgba(240, 192, 64, 0.08);
          position: relative;
          overflow: hidden;
          animation: auth-card-in 0.45s ease-out;
        }
        .auth-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--ddd-theme-warning), transparent);
          opacity: 0.7;
        }
        h2 {
          color: var(--ddd-theme-default-text);
          font-family: var(--ddd-font-primary);
          font-size: var(--ddd-font-size-l, 26px);
          margin: 0 0 var(--ddd-spacing-2, 8px) 0;
          text-align: center;
          font-weight: 600;
        }
        h2 .auth-icon {
          display: inline-block;
          margin-right: 8px;
          color: var(--ddd-theme-warning);
          font-size: 1.25em;
          vertical-align: -0.12em;
        }
        .subtitle {
          color: var(--ddd-theme-secondary);
          font-size: var(--ddd-font-size-4xs, 14px);
          text-align: center;
          margin-bottom: var(--ddd-spacing-4, 20px);
          line-height: 1.6;
        }
        .field {
          margin-bottom: var(--ddd-spacing-3, 14px);
        }
        .field-row {
          display: flex;
          gap: var(--ddd-spacing-3, 12px);
        }
        .field-row .field {
          flex: 1;
        }
        .field label {
          display: block;
          font-size: var(--ddd-font-size-4xs, 13px);
          font-weight: 600;
          color: var(--ddd-theme-secondary, rgba(255,255,255,0.75));
          margin-bottom: 6px;
        }
        .field input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--ddd-theme-input-border);
          border-radius: 6px;
          font-size: 15px;
          font-family: var(--ddd-font-primary);
          box-sizing: border-box;
          background: rgba(255,255,255,0.06);
          color: var(--ddd-theme-default-text);
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .field input::placeholder {
          color: rgba(255,255,255,0.3);
        }
        .field input:focus {
          outline: none;
          border-color: var(--ddd-theme-warning);
          background: rgba(255,255,255,0.09);
          box-shadow: 0 0 0 3px rgba(240, 192, 64, 0.12);
        }
        .btn {
          width: 100%;
          padding: 14px 24px;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--ddd-font-primary);
          margin-top: var(--ddd-spacing-2, 8px);
          background: linear-gradient(120deg, var(--ddd-theme-warning), var(--ddd-theme-accent));
          color: var(--ddd-theme-on-primary);
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          box-shadow: 0 8px 20px -6px rgba(240, 192, 64, 0.4);
        }
        .btn:hover {
          filter: brightness(1.06);
          transform: translateY(-1px);
          box-shadow: 0 12px 24px -6px rgba(240, 192, 64, 0.5);
        }
        .btn:active {
          transform: translateY(0);
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .btn-link {
          background: none;
          border: none;
          color: var(--ddd-theme-warning);
          font-size: var(--ddd-font-size-4xs, 14px);
          text-decoration: none;
          margin-top: var(--ddd-spacing-3, 12px);
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: color 0.2s;
        }
        .btn-link:hover {
          color: #f5d060;
        }
        .msg {
          padding: 12px 16px;
          border-radius: 6px;
          font-size: 14px;
          margin-bottom: var(--ddd-spacing-3, 12px);
          line-height: 1.5;
        }
        .msg-error {
          background: rgba(239, 68, 68, 0.12);
          color: var(--ddd-theme-error);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-left: 3px solid var(--ddd-theme-error);
        }
        .msg-success {
          background: rgba(34, 197, 94, 0.12);
          color: var(--ddd-theme-success);
          border: 1px solid rgba(34, 197, 94, 0.25);
          border-left: 3px solid var(--ddd-theme-success);
        }
        .user-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--ddd-spacing-3, 12px);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: var(--ddd-spacing-4, 16px);
          max-width: 420px;
          margin: 0 auto;
          box-shadow: 0 8px 20px -8px rgba(26, 35, 50, 0.4);
          animation: auth-card-in 0.45s ease-out;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3, 12px);
          min-width: 0;
        }
        .avatar {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 50%;
          background: linear-gradient(120deg, var(--ddd-theme-warning), var(--ddd-theme-accent));
          color: var(--ddd-theme-on-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 4px 12px -2px rgba(240, 192, 64, 0.4);
        }
        .user-name {
          font-weight: 600;
          font-size: var(--ddd-font-size-4xs, 15px);
          color: var(--ddd-theme-default-text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .user-email {
          font-size: var(--ddd-font-size-4xs, 13px);
          color: var(--ddd-theme-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .user-meta {
          font-size: var(--ddd-font-size-4xs, 12px);
          color: var(--ddd-theme-secondary);
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .logout-btn {
          padding: 10px 16px;
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: var(--ddd-theme-error);
          background: transparent;
          border-radius: 6px;
          font-size: 13px;
          cursor: pointer;
          font-family: var(--ddd-font-primary);
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.12);
          color: #fca5a5;
        }
        .user-actions {
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2, 8px);
          align-items: flex-end;
        }
        .check-btn {
          padding: 10px 16px;
          border: 1px solid rgba(240, 192, 64, 0.4);
          color: var(--ddd-theme-warning);
          background: transparent;
          border-radius: 6px;
          font-size: 13px;
          cursor: pointer;
          font-family: var(--ddd-font-primary);
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .check-btn:hover {
          background: rgba(240, 192, 64, 0.12);
          color: #f5d060;
        }
        .verify-note {
          margin-top: 8px;
          font-size: var(--ddd-font-size-4xs, 12px);
          color: var(--ddd-theme-warning);
          line-height: 1.4;
        }
        .loading {
          text-align: center;
          padding: var(--ddd-spacing-8, 32px);
          color: var(--ddd-theme-warning);
          font-size: 15px;
        }
        .loading::before {
          content: '';
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-right: 8px;
          border: 2px solid rgba(240, 192, 64, 0.3);
          border-top-color: var(--ddd-theme-warning);
          border-radius: 50%;
          vertical-align: -2px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes auth-card-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `,q`
        /* ===== DARK MODE (token swap, gated on body.dark-mode) ===== */
        :host-context(body.dark-mode) :host {
          --ddd-theme-card: #111827;
          --ddd-theme-card-deep: #0b1020;
          --ddd-theme-card-border: rgba(132, 136, 248, 0.25);
          --ddd-theme-default-text: #e5e7eb;
          --ddd-theme-secondary: rgba(229, 231, 235, 0.65);
          --ddd-theme-on-primary: #0b1020;
          --ddd-theme-input-border: rgba(229, 231, 235, 0.15);
          --ddd-theme-primary: #c4b5fd;
          --ddd-theme-accent: #818cf8;
          --ddd-theme-warning: #fcd34d;
          --ddd-theme-warning-text: #fde68a;
          background: var(--dk-bg, #0b1020);
          color: var(--dk-text, #e5e7eb);
        }
        :host-context(body.dark-mode) .auth-card {
          background: linear-gradient(155deg, #1f2937, #111827);
          border-color: rgba(132, 136, 248, 0.25);
        }
        :host-context(body.dark-mode) .field input {
          background: rgba(255,255,255,0.05);
          border-color: rgba(229, 231, 235, 0.15);
          color: #e5e7eb;
        }
        :host-context(body.dark-mode) .field input::placeholder {
          color: rgba(229, 231, 235, 0.25);
        }
        :host-context(body.dark-mode) .field input:focus {
          border-color: #c4b5fd;
          background: rgba(255,255,255,0.08);
          box-shadow: 0 0 0 3px rgba(196, 181, 253, 0.15);
        }
        :host-context(body.dark-mode) .btn {
          background: linear-gradient(120deg, #c4b5fd, #818cf8);
          color: #0b1020;
          box-shadow: 0 8px 20px -6px rgba(129, 140, 248, 0.4);
        }
        :host-context(body.dark-mode) .btn:hover {
          filter: brightness(1.06);
          box-shadow: 0 12px 24px -6px rgba(129, 140, 248, 0.5);
        }
        :host-context(body.dark-mode) .btn-link {
          color: #c4b5fd;
        }
        :host-context(body.dark-mode) .btn-link:hover {
          color: #ddd6fe;
        }
        :host-context(body.dark-mode) .msg-error {
          background: rgba(239, 68, 68, 0.12);
          color: #fca5a5;
          border-left-color: #ef4444;
        }
        :host-context(body.dark-mode) .msg-success {
          background: rgba(34, 197, 94, 0.12);
          color: #86efac;
          border-left-color: #22c55e;
        }
        :host-context(body.dark-mode) .user-bar {
          background: rgba(255,255,255,0.05);
          border-color: rgba(229, 231, 235, 0.12);
        }
        :host-context(body.dark-mode) .user-name {
          color: #e5e7eb;
        }
        :host-context(body.dark-mode) .user-email,
        :host-context(body.dark-mode) .user-meta {
          color: rgba(229, 231, 235, 0.55);
        }
        :host-context(body.dark-mode) .avatar {
          background: linear-gradient(120deg, #c4b5fd, #818cf8);
          color: #0b1020;
        }
        :host-context(body.dark-mode) .logout-btn {
          border-color: rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }
        :host-context(body.dark-mode) .logout-btn:hover {
          background: rgba(239, 68, 68, 0.15);
          color: #fecaca;
        }
        :host-context(body.dark-mode) .check-btn {
          border-color: rgba(196, 181, 253, 0.4);
          color: #c4b5fd;
        }
        :host-context(body.dark-mode) .check-btn:hover {
          background: rgba(196, 181, 253, 0.12);
          color: #ddd6fe;
        }
        :host-context(body.dark-mode) .verify-note {
          color: #fcd34d;
        }
        :host-context(body.dark-mode) .loading {
          color: #c4b5fd;
        }
      `]}render(){if(this._loading&&this._screen==="check")return o`
        <div class="loading">
          <span class="spinner" aria-hidden="true"></span>
          <span>Memverifikasi sesi...</span>
        </div>
      `;if(this._screen==="logged-in"){const e=this._nama?this._nama.charAt(0).toUpperCase():"?";return o`
        <div class="user-bar">
          <div class="user-info">
            <div class="avatar" aria-hidden="true">${e}</div>
            <div class="user-details">
              <div class="user-name">${this._nama}</div>
              <div class="user-email">${this._email}</div>
              <div class="user-meta">NIS: ${this._nis} | Absen: ${this._absen} | Kelas: ${this._kelas}</div>
              ${this._verifyError?o`<div class="verify-note">${this._verifyMsg}</div>`:f}
            </div>
          </div>
          <div class="user-actions">
            <button class="check-btn" @click=${this._verifySession} ?disabled=${this._loading}>
              ${this._loading?"\u23F3":"Cek sesi"}
            </button>
            <button class="logout-btn" @click=${this._handleLogout}>Keluar</button>
          </div>
        </div>
      `}const t=this._screen==="register";return o`
      <div class="auth-card">
        <div class="auth-header">
          <h2>${t?"Daftar":"Masuk"}</h2>
          <p class="subtitle">
            ${t?"Buat akun untuk menyimpan hasil kuis & aktivitas":"Masuk dengan identitas yang sudah terdaftar"}
          </p>
        </div>

        ${this._errorMsg?o`<div class="msg msg-error">${this._errorMsg}</div>`:f}
        ${this._successMsg?o`<div class="msg msg-success">${this._successMsg}</div>`:f}

        ${t?o`
              <form @submit=${this._handleRegister}>
                <div class="field">
                  <label>NIS</label>
                  <input type="text" .value=${this._nis} @input=${e=>this._nis=e.target.value} placeholder="Contoh: 12345" required />
                </div>
                <div class="field">
                  <label>Nama Lengkap</label>
                  <input type="text" .value=${this._nama} @input=${e=>this._nama=e.target.value} placeholder="Contoh: Ahmad Wahyudi" required minlength="3" />
                </div>
                <div class="field">
                  <label>Email</label>
                  <input type="email" .value=${this._email} @input=${e=>this._email=e.target.value} placeholder="contoh@email.com" required />
                </div>
                <div class="field-row">
                  <div class="field">
                    <label>Nomor Absen</label>
                    <input type="text" .value=${this._absen} @input=${e=>this._absen=e.target.value} placeholder="1" required />
                  </div>
                  <div class="field">
                    <label>Kelas</label>
                    <input type="text" .value=${this._kelas} @input=${e=>this._kelas=e.target.value} placeholder="XI-1" required />
                  </div>
                </div>
                <button class="btn" type="submit" ?disabled=${this._loading}>
                  ${this._loading?"\u23F3 Mendaftar...":"Daftar"}
                </button>
              </form>
              <button class="btn-link" @click=${()=>{this._screen="login",this._errorMsg="",this._successMsg=""}}>
                Sudah punya akun? Masuk
              </button>
            `:o`
              <form @submit=${this._handleLogin}>
                <div class="field">
                  <label>NIS</label>
                  <input type="text" .value=${this._nis} @input=${e=>this._nis=e.target.value} placeholder="Contoh: 12345" required />
                </div>
                <div class="field">
                  <label>Email</label>
                  <input type="email" .value=${this._email} @input=${e=>this._email=e.target.value} placeholder="contoh@email.com" required />
                </div>
                <button class="btn" type="submit" ?disabled=${this._loading}>
                  ${this._loading?"\u23F3 Masuk...":"Masuk"}
                </button>
              </form>
              <button class="btn-link" @click=${()=>{this._screen="register",this._errorMsg="",this._successMsg=""}}>
                Belum punya akun? Daftar
              </button>
            `}
      </div>
    `}static get haxProperties(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Quiz User Auth",description:"Sistem login/registrasi siswa untuk dasbor-kuis",icon:"icons:account-circle",color:"purple",tags:["Education","Auth"]},settings:{configure:[{property:"appsScriptUrl",title:"Apps Script URL",inputMethod:"textfield",required:!0}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["_screen","_nama","_email","_nis","_absen","_kelas","_studentId","_errorMsg","_successMsg","_loading"]}}}}globalThis.customElements.define(dt.tag,dt);class ot extends O(j(F)){static get tag(){return"latihan-kuis"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},spreadsheetUrl:{type:String,attribute:"spreadsheet-url",reflect:!0},duration:{type:Number,attribute:"duration",reflect:!0},judulMateri:{type:String,attribute:"judul-materi",reflect:!0},teksMateri:{type:String,attribute:"teks-materi",reflect:!0},materiUrl:{type:String,attribute:"materi-url",reflect:!0},materiFile:{type:String,attribute:"materi-file",reflect:!0},coverImage:{type:String,attribute:"cover-image",reflect:!0},judulKuis:{type:String,attribute:"judul-kuis",reflect:!0},questions:{type:Array,attribute:"questions",reflect:!0},studentId:{type:String,attribute:"student-id",reflect:!0},studentName:{type:String,attribute:"student-name",reflect:!0},studentNis:{type:String,attribute:"student-nis",reflect:!0},studentAbsen:{type:String,attribute:"student-absen",reflect:!0},studentKelas:{type:String,attribute:"student-kelas",reflect:!0},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},pesanWaktuHabis:{type:String,attribute:"pesan-waktu-habis",reflect:!0},pesanNilaiTerkirim:{type:String,attribute:"pesan-nilai-terkirim",reflect:!0},labelMulai:{type:String,attribute:"label-mulai",reflect:!0},showSheetLink:{type:Boolean,attribute:"show-sheet-link",reflect:!0},soalFileUrl:{type:String,attribute:"soal-file-url",reflect:!0},allowRetake:{type:Boolean,attribute:"allow-retake",reflect:!0},maxRetake:{type:Number,attribute:"max-retake",reflect:!0},mode:{type:String,attribute:"mode",reflect:!0},hidePauseRestart:{type:Boolean,attribute:"hide-pause-restart",reflect:!0},shuffleQuestions:{type:Boolean,attribute:"shuffle-questions",reflect:!0},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},kategori:{type:String,attribute:"kategori",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideScore:{type:Boolean,attribute:"hide-score",reflect:!0},showQuestionNav:{type:Boolean,attribute:"show-question-nav",reflect:!0},allowBackwardNav:{type:Boolean,attribute:"allow-backward-nav",reflect:!0},practiceMode:{type:Boolean,attribute:"practice-mode",reflect:!0},ulanganMode:{type:Boolean,attribute:"ulangan-mode",reflect:!0},questionDelay:{type:Number,attribute:"question-delay",reflect:!0},reviewAnswers:{type:Boolean,attribute:"review-answers",reflect:!0},timerAutostart:{type:Boolean,attribute:"timer-autostart",reflect:!0},_mulai:{state:!0},_selesai:{state:!0},_skor:{state:!0},_habisWaktu:{state:!0},_pesan:{state:!0},_bestSkor:{state:!0},_pernahIkut:{state:!0},_attemptKe:{state:!0},_terkunci:{state:!0},_resumeRemaining:{state:!0},_soalFileUrlCache:{state:!0},_tabSwitchWarning:{state:!0},_userStarted:{state:!0},kkm:{type:Number,attribute:"kkm",reflect:!0},remidiMode:{type:Boolean,attribute:"remidi-mode",reflect:!0},remidiSoalUrl:{type:String,attribute:"remidi-soal-url",reflect:!0},nilaiAkhir:{state:!0},sudahRemidi:{state:!0},_needsRemidi:{state:!0},_skorAwal:{state:!0},_remidiSoal:{state:!0},_tabSwitchCount:{state:!0},_visibilityChangeCount:{state:!0},_windowBlurCount:{state:!0},_windowFocusCount:{state:!0},_fullscreenWarning:{state:!0},_waktuMulai:{state:!0},tabSwitchThreshold:{type:Number,attribute:"tab-switch-threshold",reflect:!0},_curangLogged:{state:!0},_warningCount:{state:!0},_forceChoiceDialog:{state:!0},_sessionLogged:{state:!0}}}constructor(){super(),this.appsScriptUrl="",this.spreadsheetUrl="",this.duration=300,this.judulMateri="Materi Pembelajaran",this.teksMateri="Baca materi di bawah ini dengan saksama sebelum mengerjakan kuis. Waktu pengerjaan kuis dibatasi oleh timer; saat waktu habis, kuis akan dikunci dan nilai otomatis terkirim.",this.materiUrl="",this.materiFile="",this.coverImage="",this.judulKuis="Evaluasi Kuis Interaktif",this.questions=void 0,this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this.kdMateri="",this.pesanWaktuHabis="\u23F0 Waktu habis! Kuis dikunci & dinilai otomatis.",this.pesanNilaiTerkirim="\u{1F389} Selamat! Nilai Anda sudah terkirim ke spreadsheet.",this.labelMulai="\u25B6\uFE0F Mulai",this.showSheetLink=!1,this.soalFileUrl="",this.allowRetake=!0,this.maxRetake=0,this.mode="siswa",this.hidePauseRestart=!0,this.shuffleQuestions=!1,this.shuffleChoices=!1,this.kategori="sumatif_lm",this.hideConfetti=!1,this.hideAnswers=!1,this.hideScore=!1,this.showQuestionNav=!0,this.allowBackwardNav=!1,this.practiceMode=!1,this.ulanganMode=!1,this.questionDelay=1800,this.reviewAnswers=!0,this.timerAutostart=!0,this._mulai=!1,this._selesai=!1,this._skor=null,this._habisWaktu=!1,this._pesan="",this._bestSkor=null,this._pernahIkut=!1,this._attemptKe=0,this._terkunci=!1,this._resumeRemaining=null,this._soalFileUrlCache="",this._tabSwitchWarning=!1,this._userStarted=!1,this.kkm=75,this.remidiMode=!1,this.remidiSoalUrl="",this.nilaiAkhir=null,this.sudahRemidi=!1,this._needsRemidi=!1,this._skorAwal=null,this._remidiSoal=[],this._tabSwitchCount=0,this._visibilityChangeCount=0,this._windowBlurCount=0,this._windowFocusCount=0,this._onWindowBlur=this._onWindowBlur.bind(this),this._onWindowFocus=this._onWindowFocus.bind(this),this._waktuMulai=null,this.tabSwitchThreshold=3,this._curangLogged=!1,this._warningCount=0,this._forceChoiceDialog=!1,this._sessionLogged="",this._sessionToken="",this._onAuthLogin=this._onAuthLogin.bind(this),this._onAuthLogout=this._onAuthLogout.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.t={...this.t,bacaMateri:"\u{1F517} Buka URL Materi",unduhMateri:"\u{1F4CE} Unduh File Materi"}}_antiCheatKey(){return`latihan_kuis_anticheat_${this.studentId}_${this.kdMateri}`}_saveAntiCheatState(){if(!(!this.studentId||!this.kdMateri))try{const t={windowBlurCount:this._windowBlurCount||0,windowFocusCount:this._windowFocusCount||0,tabSwitchCount:this._tabSwitchCount||0,visibilityChangeCount:this._visibilityChangeCount||0,timestamp:Date.now()};localStorage.setItem(this._antiCheatKey(),JSON.stringify(t))}catch{}}_restoreAntiCheatState(){if(!(!this.studentId||!this.kdMateri))try{const t=JSON.parse(localStorage.getItem(this._antiCheatKey()));t&&(this._windowBlurCount=t.windowBlurCount||0,this._windowFocusCount=t.windowFocusCount||0,this._tabSwitchCount=t.tabSwitchCount||0,this._visibilityChangeCount=t.visibilityChangeCount||0)}catch{}}_clearAntiCheatState(){if(!(!this.studentId||!this.kdMateri))try{localStorage.removeItem(this._antiCheatKey())}catch{}}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[ot.tag]&&(t.elementList[ot.tag]=ot.haxProperties)}globalThis.addEventListener("quiz-user-login",this._onAuthLogin),globalThis.addEventListener("quiz-user-logout",this._onAuthLogout),globalThis.addEventListener("visibilitychange",this._onVisibilityChange),globalThis.addEventListener("blur",this._onWindowBlur,!0),globalThis.addEventListener("focus",this._onWindowFocus,!0),globalThis.addEventListener("fullscreenchange",this._onFullscreenChange),globalThis.addEventListener("mozfullscreenchange",this._onFullscreenChange),globalThis.addEventListener("webkitfullscreenchange",this._onFullscreenChange),globalThis.addEventListener("MSFullscreenChange",this._onFullscreenChange),this._preventCopy=this._preventCopy.bind(this),this._preventPaste=this._preventPaste.bind(this),this._preventContext=this._preventContext.bind(this),this._preventSelect=this._preventSelect.bind(this),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._handleWarningKeydown=this._handleWarningKeydown.bind(this),document.addEventListener("keydown",this._handleWarningKeydown),this._loadSession(),this._muatStatusKuis()}disconnectedCallback(){globalThis.removeEventListener("quiz-user-login",this._onAuthLogin),globalThis.removeEventListener("quiz-user-logout",this._onAuthLogout),globalThis.removeEventListener("visibilitychange",this._onVisibilityChange),globalThis.removeEventListener("blur",this._onWindowBlur,!0),globalThis.removeEventListener("focus",this._onWindowFocus,!0),globalThis.removeEventListener("fullscreenchange",this._onFullscreenChange),globalThis.removeEventListener("mozfullscreenchange",this._onFullscreenChange),globalThis.removeEventListener("webkitfullscreenchange",this._onFullscreenChange),globalThis.removeEventListener("MSFullscreenChange",this._onFullscreenChange),document.removeEventListener("keydown",this._handleWarningKeydown),super.disconnectedCallback()}_onAuthLogin(t){const e=t&&t.detail||{};this.studentId=e.studentId||"",this.studentName=e.nama||"",this.studentNis=e.nis||"",this.studentAbsen=e.absen||"",this.studentKelas=e.kelas||"",this.appsScriptUrl&&this.studentId&&this.kdMateri&&(this._bestSkor=null,this._pernahIkut=!1,this._selesai=!1,this._habisWaktu=!1,this._skor=null,this._mulai=!1,this._terkunci=!1,this._resumeRemaining=null,this._loadAttemptCounter(),this._muatStatusKuis())}_onAuthLogout(){this._bestSkor=null,this._pernahIkut=!1,this._selesai=!1,this._habisWaktu=!1,this._skor=null,this._mulai=!1,this._terkunci=!1,this._resumeRemaining=null,this._attemptKe=0;try{localStorage.removeItem(`kuis-ledakan:attempt:${this.studentId}:${this.kdMateri}`),localStorage.removeItem(`kuis-ledakan:session:${this.studentId}:${this.kdMateri}`)}catch{}this.studentId="",this.studentName="",this.studentNis="",this.studentAbsen="",this.studentKelas="",this._clearAntiCheatState(),this._warningCount=0,this._forceChoiceDialog=!1,this._curangLogged=!1,this._sessionLogged="",this._sessionToken="";try{localStorage.removeItem("latihan_kuis_attempt_u1_bab1")}catch{}}_onVisibilityChange(){if(this._visibilityChangeCount=(this._visibilityChangeCount||0)+1,document.visibilityState==="hidden"&&this._mulai&&!this._selesai){const t=this._bacaSisaWaktu();if(t>0)try{const a=`latihan_kuis_remaining_${this.studentId}_${this.kdMateri}`;globalThis.localStorage.setItem(a,String(t))}catch{}this._tabSwitchCount=(this._tabSwitchCount||0)+1,this._windowBlurCount=(this._windowBlurCount||0)+1,this._tabSwitchWarning=!0,this._enqueueTabSwitch(),this.requestUpdate();const e=this.shadowRoot&&this.shadowRoot.querySelector("kuis-ledakan");if(e&&typeof e._saveAttempt=="function")try{e._saveAttempt()}catch{}this._saveAntiCheatState(),this._warningCount=(this._warningCount||0)+1,this._warningCount>=3&&!this._forceChoiceDialog&&(this._forceChoiceDialog=!0,this._logActivity("force_choice_dialog",{warningCount:this._warningCount,timestamp:new Date().toISOString(),studentId:this.studentId,kdMateri:this.kdMateri}),this.requestUpdate())}else if(document.visibilityState==="visible"&&this._mulai&&!this._selesai){try{const t=`latihan_kuis_remaining_${this.studentId}_${this.kdMateri}`,e=globalThis.localStorage.getItem(t);if(e){const a=parseInt(e,10);!isNaN(a)&&a>0&&(this._resumeRemaining=a,globalThis.localStorage.removeItem(t),this.requestUpdate())}}catch{}this._windowFocusCount=(this._windowFocusCount||0)+1,this._saveAntiCheatState()}}_onWindowBlur(){this._mulai&&!this._selesai&&document.hidden&&(this._tabSwitchWarning=!0,this.requestUpdate())}_onWindowFocus(){this._mulai&&!this._selesai&&this._windowBlurCount>0&&(this._tabSwitchWarning=!1,this.requestUpdate(),this._cekThresholdCurang())}_cekThresholdCurang(){const t=this.tabSwitchThreshold||3,e=this._tabSwitchCount||0;e>=t&&!this._curangLogged&&(this._curangLogged=!0,this._logActivity("curang_tab_switch",{count:e,timestamp:new Date().toISOString(),studentId:this.studentId,kdMateri:this.kdMateri,threshold:t}))}_lanjutkanKuis(){this._forceChoiceDialog=!1,this._warningCount=0,this.requestUpdate()}_kumpulkanSekarang(){this._forceChoiceDialog=!1,this.requestUpdate();const t=this.shadowRoot&&this.shadowRoot.querySelector("kuis-ledakan");t&&typeof t._selesaiKuis=="function"&&t._selesaiKuis()}_laporKeGuru(){this._forceChoiceDialog=!1,this._warningCount=0,this._logActivity("lapor_ke_guru",{warningCount:this._warningCount,timestamp:new Date().toISOString(),studentId:this.studentId,kdMateri:this.kdMateri,tabSwitchCount:this._tabSwitchCount||0}),this.requestUpdate()}_onFullscreenChange(){!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement&&this._mulai&&!this._selesai&&(this._fullscreenWarning=!0,this.requestUpdate(),this._logActivity("fullscreen_exit",{timestamp:new Date().toISOString(),waktuMulai:this._waktuMulai}))}_handleWarningKeydown(t){t.key==="Escape"&&this._tabSwitchWarning?(this._tabSwitchWarning=!1,this.requestUpdate()):t.key==="Escape"&&this._fullscreenWarning&&(this._fullscreenWarning=!1,this.requestUpdate())}_requestFullscreen(){try{const t=this.shadowRoot||this;t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.mozRequestFullScreen?t.mozRequestFullScreen().catch(()=>{}):t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}catch{}}_enableAntiCheat(){this.addEventListener("copy",this._preventCopy),this.addEventListener("paste",this._preventPaste),this.addEventListener("contextmenu",this._preventContext),this.addEventListener("selectstart",this._preventSelect)}_disableAntiCheat(){this.removeEventListener("copy",this._preventCopy),this.removeEventListener("paste",this._preventPaste),this.removeEventListener("contextmenu",this._preventContext),this.removeEventListener("selectstart",this._preventSelect)}_preventCopy(t){this._mulai&&!this._selesai&&(t.preventDefault(),t.stopPropagation(),this._logActivity("copy_paste_attempt",{eventType:"copy",timestamp:new Date().toISOString()}))}_preventPaste(t){this._mulai&&!this._selesai&&(t.preventDefault(),t.stopPropagation(),this._logActivity("copy_paste_attempt",{eventType:"paste",timestamp:new Date().toISOString()}))}_preventContext(t){this._mulai&&!this._selesai&&(t.preventDefault(),t.stopPropagation())}_preventSelect(t){this._mulai&&!this._selesai&&(t.preventDefault(),t.stopPropagation())}_logCurangan(t,e){if(!this.studentId||!this.kdMateri)return;const a=`latihan_kuis_curangan_${this.studentId}_${this.kdMateri}`;try{const i={type:t,detail:e,timestamp:Date.now(),userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",tabSwitchCount:this._tabSwitchCount||0,visibilityChangeCount:this._visibilityChangeCount||0,windowBlurCount:this._windowBlurCount||0,windowFocusCount:this._windowFocusCount||0,quizDuration:this.duration,studentId:this.studentId,kdMateri:this.kdMateri};globalThis.localStorage.setItem(a,JSON.stringify(i))}catch{}}_generateSessionToken(){try{const t=new Uint8Array(16);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`${Date.now()}-${e}`}catch{return`sess-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}}_logMulaiKuis(){if(!(!this.studentId||!this.kdMateri))try{const t=`latihan_kuis_mulai_${this.studentId}_${this.kdMateri}`;globalThis.localStorage.setItem(t,String(Date.now()))}catch{}}_logSelesaiKuis(){if(!(!this.studentId||!this.kdMateri))try{const t=`latihan_kuis_selesai_${this.studentId}_${this.kdMateri}`;globalThis.localStorage.setItem(t,String(Date.now()))}catch{}}_auditQueueKey(){return`kuisAuditQueue_${this.studentId}_${this.kdMateri}`}_bacaAuditQueue(){try{const t=JSON.parse(globalThis.localStorage.getItem(this._auditQueueKey())||"null");return t&&t.versi===1?t:null}catch{return null}}_simpanAuditQueue(t){try{globalThis.localStorage.setItem(this._auditQueueKey(),JSON.stringify(t))}catch{}}_enqueueAudit(t,e={}){if(!this.studentId||!this.kdMateri)return null;const a=Date.now();let i=this._bacaAuditQueue();return(!i||i.state==="done")&&(i={id_log:this._buatIdLogAudit(),studentId:this.studentId,kdMateri:this.kdMateri,snapshot:{mulai_detik:this._waktuMulai||a,durasi_detik:0,total_restart:0,tab_switch:0},events:[],state:"draft",versi:1}),i.events=i.events||[],i.events.push({t,ts:a,d:e}),i.events.length>200&&i.events.splice(0,i.events.length-200),t==="tab_switch"&&(i.snapshot.tab_switch=(i.snapshot.tab_switch||0)+1),t==="restart"&&(i.snapshot.total_restart=(i.snapshot.total_restart||0)+1,i.snapshot.mulai_detik=a),this._simpanAuditQueue(i),i}_enqueueTabSwitch(){this._enqueueAudit("tab_switch",{timestamp:new Date().toISOString()})}_buatIdLogAudit(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_bacaAuditSingkat(){const t=this._bacaAuditQueue();if(!t)return{total_restart:0,tab_switch:0,durasi_detik:0};const e=t.snapshot.durasi_detik||(t.snapshot.mulai_detik?Math.max(0,Math.floor((Date.now()-t.snapshot.mulai_detik)/1e3)):0);return{total_restart:t.snapshot.total_restart||0,tab_switch:t.snapshot.tab_switch||0,durasi_detik:e}}_finalisasiAudit(){const t=this._bacaAuditQueue();t&&(t.snapshot.mulai_detik&&(t.snapshot.durasi_detik=Math.max(0,Math.floor((Date.now()-t.snapshot.mulai_detik)/1e3))),t.state="ready",this._simpanAuditQueue(t))}_selesaiAudit(){const t=this._bacaAuditQueue();t&&(t.state="done",this._simpanAuditQueue(t))}_logActivity(t,e={}){if(["timer_mulai","tab_switch","curang_tab_switch","force_choice_dialog","fullscreen_exit","copy_paste_attempt","lapor_ke_guru","suspicious_timing"].includes(t)){this._enqueueAudit(t,e);return}const a={tipe:t,payload:{...e,studentId:this.studentId,kdMateri:this.kdMateri,audit_singkat:this._bacaAuditSingkat()}};try{this.dispatchEvent(new CustomEvent("dasbor-kuis-log",{detail:a,bubbles:!0,composed:!0}))}catch{}this.closest("dasbor-kuis")||this._sendLogDirect(t,a.payload),this._selesaiAudit()}async _sendLogDirect(t,e){if(!(!this.appsScriptUrl||!this.studentId))try{const a={action:"logActivity",studentId:this.studentId,type:t,description:JSON.stringify(e),timestamp:new Date().toISOString(),kdMateri:this.kdMateri||"",kategori:this.kategori||"sumatif_lm",id_log:e.id_log||`LOG-${Date.now()}-${Math.random().toString(36).slice(2,10).toUpperCase()}`},i=new URLSearchParams(a);await fetch(`${this.appsScriptUrl}?${i.toString()}`,{method:"GET",mode:"cors"})}catch{}}_loadSession(){try{const t=JSON.parse(globalThis.localStorage.getItem("quiz_user_session"));if(!t||!t.studentId)return;if(t.expiresAt&&Date.now()>t.expiresAt){globalThis.localStorage.removeItem("quiz_user_session");return}this.studentId=t.studentId||"",this.studentName=t.nama||"",this.studentNis=t.nis||"",this.studentAbsen=t.absen||"",this.studentKelas=t.kelas||""}catch{}this._loadAttemptCounter(),this._restoreRemidiState()}_attemptKey(){return`latihan_kuis_attempt_${this.studentId}_${this.kdMateri}`}_loadAttemptCounter(){if(!(!this.maxRetake||!this.studentId||!this.kdMateri))try{const t=globalThis.localStorage.getItem(this._attemptKey());this._attemptKe=parseInt(t,10)||0}catch{this._attemptKe=0}}_saveAttemptCounter(){if(!(!this.maxRetake||!this.studentId||!this.kdMateri))try{globalThis.localStorage.setItem(this._attemptKey(),String(this._attemptKe))}catch{}}_timerKey(){return`latihan_kuis_time_${this.studentId}_${this.kdMateri}`}_simpanWaktuMulai(){if(!(!this.studentId||!this.kdMateri))try{globalThis.localStorage.setItem(this._timerKey(),JSON.stringify({start:Date.now(),duration:this.duration}))}catch{}}_bacaSisaWaktu(){if(!this.studentId||!this.kdMateri)return 0;try{const t=JSON.parse(globalThis.localStorage.getItem(this._timerKey())||"null");if(!t)return 0;const e=t.duration-Math.floor((Date.now()-t.start)/1e3);return e>0?e:0}catch{return 0}}_hapusWaktuMulai(){try{globalThis.localStorage.removeItem(this._timerKey())}catch{}}_cobaResumeTimer(){const t=this._bacaSisaWaktu();(this.maxRetake===0||this._attemptKe<this.maxRetake+1)&&t!=null&&t>0&&(this._mulai=!0,this._resumeRemaining=t,this._restoreAntiCheatState())}_muatStatusKuis(){if(!this.appsScriptUrl||!this.studentId||!this.kdMateri){this._cobaResumeTimer();return}const t=`${this.appsScriptUrl}${this.appsScriptUrl.includes("?")?"&":"?"}action=getQuizLock&studentId=${encodeURIComponent(this.studentId)}&kdMateri=${encodeURIComponent(this.kdMateri)}`;return fetch(t,{method:"GET",mode:"cors"}).then(e=>e.json()).then(e=>{if(e&&(this._terkunci=!!e.locked,this._pernahIkut=typeof e.best=="number"&&e.best!=null,this._bestSkor=typeof e.best=="number"?e.best:null,this._terkunci)){this._terkunci=!0,this._selesai=!1,this._skor=this._bestSkor,this._hapusWaktuMulai(),this._mulai=!1,this._resumeRemaining=null;try{const a=this.shadowRoot&&this.shadowRoot.querySelector("timer-kuis");a&&typeof a.pause=="function"&&a.pause(),a&&typeof a.reset=="function"&&a.reset()}catch{}this.remidiMode&&typeof this._bestSkor=="number"&&this._bestSkor<this.kkm&&!this.sudahRemidi&&(this._needsRemidi=!0,this._skorAwal=this._bestSkor)}}).catch(()=>{}).finally(()=>{!this._userStarted&&!this._terkunci&&!this._selesai&&this._cobaResumeTimer(),this.requestUpdate()})}_ulangiKuis(){this._enqueueAudit("restart",{timestamp:new Date().toISOString()}),this._selesai=!1,this._terkunci=!1,this._kunci=!1,this._resumeRemaining=null,this._hapusWaktuMulai(),this._habisWaktu=!1,this._skor=null,this._muatStatusKuis(),this._mulaiLatihan()}updated(t){super.updated(t),t.has("soalFileUrl")&&this.soalFileUrl&&this.soalFileUrl!==this._soalFileUrlCache&&this._muatSoalDariFile(this.soalFileUrl)}async _muatSoalDariFile(t){this._soalFileUrlCache=t;try{const e=await fetch(t);if(!e.ok)throw new Error("HTTP "+e.status);const a=await e.json();if(!Array.isArray(a)||a.length===0)throw new Error("Bukan array JSON / kosong");this.questions=a,this._pesan=""}catch(e){this._soalFileUrlCache="",(!this.questions||this.questions.length===0)&&(this.questions=[]),this._pesan="Gagal memuat file soal: "+e.message}}_onWaktuHabis(){const t=this._bacaSisaWaktu();t>60&&this._logCurangan("time_manipulation",{sisaWaktu:t,tabSwitchCount:this._tabSwitchCount||0,visibilityChanges:this._visibilityChangeCount||0,message:"Timer expired but client still has significant time remaining (>60s). Possible causes: browser throttling (normal) or time manipulation (cheating).",timestamp:Date.now()}),this._logSelesaiKuis();const e=this.shadowRoot&&this.shadowRoot.querySelector("kuis-ledakan");e&&e._screen!=="result"&&typeof e._selesaiKuis=="function"&&e._selesaiKuis(),this._selesai=!0,this._habisWaktu=!0,this._resumeRemaining=null,this._hapusWaktuMulai(),this._disableAntiCheat(),this._kirimLogSession("waktu_habis")}_onKuisLog(t){if(t.detail&&t.detail.payload&&typeof t.detail.payload.score=="number"){const e=t.detail.payload.sessionToken,a=e||this._sessionToken;if(a&&this._sessionLogged===a)return;a&&(this._sessionLogged=a,e&&(this._sessionToken=e)),this._logSelesaiKuis(),this._skor=t.detail.payload.score,this._selesai=!0,this._resumeRemaining=null,this._hapusWaktuMulai(),this._disableAntiCheat();try{globalThis.localStorage.removeItem(this._attemptKey()),globalThis.localStorage.removeItem(this._timerKey()),globalThis.localStorage.removeItem(`kuis-ledakan:attempt:${this.studentId}:${this.kdMateri}`),globalThis.localStorage.removeItem(`kuis-ledakan:session:${this.studentId}:${this.kdMateri}`)}catch{}this.maxRetake&&!this._effectiveRemidiMode&&(this._attemptKe++,this._saveAttemptCounter()),!this.remidiMode&&this.remidiSoalUrl&&this._skor<this.kkm&&(this.remidiMode=!0),this._effectiveRemidiMode&&this._skor<this.kkm?(this._needsRemidi=!0,this._skorAwal=this._skor):(this._needsRemidi=!1,this.lockAfterComplete&&!this._effectiveRemidiMode&&(this._terkunci=!0)),this._saveRemidiState(),this._muatStatusKuis(),this._kirimLogSession("selesai"),this._finalisasiAudit();const i=t.detail&&t.detail.id_log?t.detail.id_log:"";this._logActivity("selesai",{id_log:i,score:this._skor,timestamp:new Date().toISOString(),kdMateri:this.kdMateri,studentId:this.studentId,tabSwitchCount:this._tabSwitchCount||0,windowBlurCount:this._windowBlurCount||0,windowFocusCount:this._windowFocusCount||0,durasiPengerjaan:this._waktuMulai?Math.floor((Date.now()-this._waktuMulai)/1e3):0,curang:this._curangLogged||!1,remidi:this.sudahRemidi||!1,percobaanKe:this._attemptKe||1,sessionToken:this._sessionToken||"",waktuSelesai:String(Date.now()),catatan:"selesai"+(this._curangLogged?" (curang)":"")+(this.sudahRemidi?" (sudah-remidi)":"")+(this._effectiveRemidiMode?" (remidi)":""),warningCount:this._warningCount||0,forceChoiceDialogTriggered:this._forceChoiceDialog||!1,curangTabSwitchTriggered:this._curangLogged||!1,tabSwitchThreshold:this.tabSwitchThreshold||3})}}async _mulaiLatihan(){if(!this.studentId){this.requestUpdate();return}await this._muatStatusKuis();const t=this._needsRemidi&&this._effectiveRemidiMode&&!this.sudahRemidi;if(this._terkunci&&!t&&this.mode!=="guru"){this._pesan="Kuis terkunci. Hubungi guru atau gunakan Remidi jika nilai < KKM.",this._mulai=!1,this._hapusWaktuMulai();const i=this.shadowRoot&&this.shadowRoot.querySelector("timer-kuis");if(i&&typeof i.pause=="function")try{i.pause()}catch{}this.requestUpdate();return}if(this._userStarted=!0,t||this.mode==="guru")this._terkunci=!1;else if(this._terkunci)return;this._mulai=!0,this._waktuMulai=Date.now(),this._simpanWaktuMulai(),this._logMulaiKuis(),this._sessionToken=this._generateSessionToken(),this._sessionLogged="",this._windowBlurCount=0,this._windowFocusCount=0,this._tabSwitchCount=0,this._visibilityChangeCount=0,this._clearAntiCheatState(),this._curangLogged=!1,this._warningCount=0,this._forceChoiceDialog=!1,this._enableAntiCheat(),this._latihanOnlyMode||this._logActivity("timer_mulai",{timestamp:new Date().toISOString(),durasiUlangan:this.duration||300,waktuMulai:this._waktuMulai,kategori:this.kategori||"sumatif_lm",kdMateri:this.kdMateri,percobaanKe:this._attemptKe?this._attemptKe+1:1}),this._requestFullscreen(),await this.updateComplete;const e=this.shadowRoot&&this.shadowRoot.querySelector("kuis-ledakan"),a=this.shadowRoot&&this.shadowRoot.querySelector("timer-kuis");e&&typeof e._onStartClick=="function"&&e._onStartClick(),a&&typeof a.start=="function"&&a.start()}async _kirimLogSession(t){if(!this.appsScriptUrl||!this.studentId)return;const e=String(Date.now()),a=this._waktuMulai?Math.floor((Date.now()-this._waktuMulai)/1e3):0,i=this._bacaSisaWaktu();let s=t;this._effectiveRemidiMode&&this._needsRemidi&&(s+=" (remidi)"),this.sudahRemidi&&(s+=" (sudah-remidi)"),this._curangLogged&&(s+=" (curang)"),this._warningCount>=3&&(s+=` (${this._warningCount}x tab switch)`),t==="waktu_habis"&&(s="waktu_habis (auto-submit)");const r={action:"updateQuizSession",studentId:this.studentId,nama:this.studentName||"",nis:this.studentNis||"",absen:this.studentAbsen||"",kelas:this.studentKelas||"",kdMateri:this.kdMateri||"",waktuMulai:this._waktuMulai?String(this._waktuMulai):"",waktuSelesai:e,durasiPengerjaan:a,durasiUlangan:this.duration||300,sisaWaktu:i,tabSwitchCount:this._tabSwitchCount||0,windowBlurCount:this._windowBlurCount||0,windowFocusCount:this._windowFocusCount||0,skor:this._skor!=null?this._skor:-1,catatan:s,sessionToken:this._sessionToken||"",percobaanKe:this._attemptKe||1,warningCount:this._warningCount||0,forceChoiceDialogTriggered:this._forceChoiceDialog||!1,curangTabSwitchTriggered:this._curangLogged||!1,tabSwitchThreshold:this.tabSwitchThreshold||3,id_log:`LOG-${Date.now()}-${Math.random().toString(36).slice(2,10).toUpperCase()}`,audit_singkat:JSON.stringify(this._bacaAuditSingkat())};try{const d=new URLSearchParams(r);await fetch(`${this.appsScriptUrl}?${d.toString()}`,{method:"GET",mode:"cors"}),this._clearAntiCheatState()}catch{const d=`latihan_kuis_session_${this.studentId}_${this.kdMateri}`;try{localStorage.setItem(d,JSON.stringify(r))}catch{}}}async _mulaiRemidi(){if(!this.remidiSoalUrl){this._pesan="Soal remidi belum disiapkan oleh guru.",this.requestUpdate();return}if(this._terkunci&&this.appsScriptUrl&&this.studentId&&this.kdMateri){try{const t=new URLSearchParams({action:"resetQuizLock",studentId:this.studentId,kdMateri:this.kdMateri});await fetch(`${this.appsScriptUrl}?${t.toString()}`,{method:"GET",mode:"cors"})}catch{}try{localStorage.removeItem(`kuis-ledakan:attempt:${this.studentId}:${this.kdMateri}`),localStorage.removeItem(`latihan_kuis_attempt_${this.studentId}_${this.kdMateri}`),localStorage.removeItem(`latihan_kuis_time_${this.studentId}_${this.kdMateri}`)}catch{}}try{const t=await fetch(this.remidiSoalUrl);if(!t.ok)throw new Error("HTTP "+t.status);if(this._remidiSoal=await t.json(),!Array.isArray(this._remidiSoal)||this._remidiSoal.length===0)throw new Error("Format soal remidi tidak valid");this._terkunci=!1,this._selesai=!1,this._skor=null,this._habisWaktu=!1,this._resumeRemaining=null,this._needsRemidi=!1,this.sudahRemidi=!0,this._pesan="",this.questions=this._remidiSoal,this._saveRemidiState();try{const e=this.shadowRoot&&this.shadowRoot.querySelector("kuis-ledakan");e&&(e._locked=!1,e._lockChecked=!1)}catch{}this.requestUpdate(),this._mulaiLatihan()}catch(t){this._pesan="Gagal memulai remidi: "+t.message,this.requestUpdate()}}async _resetKunciGuru(){if(!this.appsScriptUrl||!this.studentId||!this.kdMateri){this._pesan="Gagal buka kunci: appsScriptUrl/student/kdMateri belum lengkap.",this.requestUpdate();return}try{const t=new URLSearchParams({action:"resetQuizLock",studentId:this.studentId,kdMateri:this.kdMateri}),e=await(await fetch(`${this.appsScriptUrl}?${t.toString()}`,{method:"GET",mode:"cors"})).json();if(e&&e.status==="ok"){this._terkunci=!1,this._selesai=!1,this._skor=null,this._bestSkor=null,this._pernahIkut=!1;try{localStorage.removeItem(`latihan_kuis_attempt_${this.studentId}_${this.kdMateri}`),localStorage.removeItem(`latihan_kuis_time_${this.studentId}_${this.kdMateri}`)}catch{}this._pesan=`\u{1F513} Kunci LM1 dibuka \u2014 ${e.deleted||0} sesi dihapus. Siswa bisa ulang.`,this._muatStatusKuis()}else this._pesan="Gagal buka kunci: "+(e.message||"unknown")}catch(t){this._pesan="Gagal buka kunci: "+t.message}this.requestUpdate()}_hitungNilaiAkhir(){return this.nilaiAkhir=Math.round((this._skorAwal+this._skor)/2),this.nilaiAkhir}_remidiKey(){return`latihan_kuis_remidi_${this.studentId}_${this.kdMateri}`}_saveRemidiState(){if(!(!this.studentId||!this.kdMateri))try{const t={sudahRemidi:this.sudahRemidi,_needsRemidi:this._needsRemidi,_skorAwal:this._skorAwal,_remidiSoal:this._remidiSoal||[],timestamp:Date.now()};localStorage.setItem(this._remidiKey(),JSON.stringify(t))}catch{}}_restoreRemidiState(){if(!(!this.studentId||!this.kdMateri))try{const t=JSON.parse(localStorage.getItem(this._remidiKey()));t&&t.sudahRemidi&&(this.sudahRemidi=t.sudahRemidi,this._needsRemidi=t._needsRemidi,this._skorAwal=t._skorAwal,Array.isArray(t._remidiSoal)&&t._remidiSoal.length>0&&(this._remidiSoal=t._remidiSoal,this.sudahRemidi&&this._effectiveRemidiMode&&(this.questions=this._remidiSoal)))}catch{}}_clearRemidiState(){if(!(!this.studentId||!this.kdMateri))try{localStorage.removeItem(this._remidiKey())}catch{}}static get styles(){return[super.styles,q`
        :host { display: block; font-family: var(--ddd-font-primary, system-ui, sans-serif); }
        .wrap {
          max-width: 920px; margin: 0 auto; padding: var(--ddd-spacing-4);
          display: grid; gap: var(--ddd-spacing-6);
        }
        .materi-card {
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          background: linear-gradient(180deg, rgba(103,80,164,0.05), transparent);
        }
        .materi-card h2 { color: var(--ddd-theme-primary); margin: 0 0 var(--ddd-spacing-2) 0; }
        .materi-card p { color: var(--ddd-theme-secondary); line-height: 1.6; }
        .cover { width: 100%; max-height: 260px; object-fit: cover; border-radius: var(--ddd-radius-lg); margin-bottom: var(--ddd-spacing-4); }
        .materi-links { display: flex; flex-wrap: wrap; gap: var(--ddd-spacing-3); margin-top: var(--ddd-spacing-4); }
        .materi-links a {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4); border-radius: var(--ddd-radius-md);
          border: 1px solid var(--ddd-theme-polaris-border);
          color: var(--ddd-theme-primary); text-decoration: none; font-size: var(--ddd-font-size-m);
        }
        .materi-links a:hover { background: rgba(103,80,164,0.08); }
        .btn-mulai {
          width: 100%; padding: var(--ddd-spacing-4); font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-bold); border: none; border-radius: var(--ddd-radius-md);
          background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); cursor: pointer;
          font-family: var(--ddd-font-primary);
        }
        .btn-mulai:hover { background: var(--ddd-theme-accent); }
        .btn-logout {
          display: inline-block; margin-top: var(--ddd-spacing-5);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
          background: var(--ddd-theme-error); color: var(--ddd-theme-on-primary);
          border: none; border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold); font-size: var(--ddd-font-size-s);
          cursor: pointer; font-family: inherit;
        }
        .btn-logout:hover { filter: brightness(0.9); }
        .auth-hint { text-align: center; color: var(--ddd-theme-secondary); font-size: var(--ddd-font-size-m); margin: var(--ddd-spacing-3) 0 0; }
        .selesai-card {
          text-align: center; border: 1px solid var(--ddd-theme-success);
          border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-8);
          background: var(--ddd-theme-default-surface);
        }
        .selesai-card .waktu { font-size: var(--ddd-font-size-l); color: var(--ddd-theme-error); margin-bottom: var(--ddd-spacing-2); }
        .selesai-card .kirim { font-size: var(--ddd-font-size-xl); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-default-text); }
        .selesai-card .kirim.warn { color: var(--ddd-theme-error); }
        .selesai-card .skor { margin: var(--ddd-spacing-4) 0; font-size: var(--ddd-font-size-l); }
        /* Suspicious warning UI for detected time manipulation */
        .selesai-card.suspicious { border-color: var(--ddd-theme-warning); background: linear-gradient(180deg, rgba(245,158,11,0.08), transparent); }
        .suspicious-warning { background: var(--ddd-theme-warning-light); border: 1px solid var(--ddd-theme-warning); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-5); margin-bottom: var(--ddd-spacing-4); text-align: left; }
        .suspicious-icon { font-size: 2rem; margin-bottom: var(--ddd-spacing-2); }
        .suspicious-title { font-size: var(--ddd-font-size-m); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-warning-text); margin-bottom: var(--ddd-spacing-2); }
        .suspicious-text { font-size: var(--ddd-font-size-s); color: var(--ddd-theme-warning); line-height: 1.5; margin-bottom: var(--ddd-spacing-2); }
        .suspicious-note { font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-warning); font-style: italic; }
        .remidi-card { background: var(--ddd-theme-warning-light); border: 1px solid var(--ddd-theme-warning); border-radius: var(--ddd-radius-lg); padding: var(--ddd-spacing-5); margin-top: var(--ddd-spacing-4); }
        .remidi-card h3 { margin: 0 0 var(--ddd-spacing-2) 0; color: var(--ddd-theme-warning-text); }
        .remidi-card p { color: var(--ddd-theme-warning); margin-bottom: var(--ddd-spacing-3); }
        .remidi-notif { font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-accent); margin-top: var(--ddd-spacing-3); font-weight: 600; }
        .selesai-card a {
          display: inline-block; margin-top: var(--ddd-spacing-4); padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary); border-radius: var(--ddd-radius-md);
          text-decoration: none; font-weight: var(--ddd-font-weight-bold);
        }
        .err-chip {
          background: var(--ddd-theme-warning-light); border: 1px solid var(--ddd-theme-warning); color: var(--ddd-theme-warning-text);
          padding: var(--ddd-spacing-3); border-radius: var(--ddd-radius-md);
          margin-bottom: var(--ddd-spacing-4);
        }
        .skor-best {
          margin-top: var(--ddd-spacing-4); padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md); font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-success);
          background: var(--ddd-theme-success-light);
          display: inline-block;
        }
        .tab-warning-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999;
        }
        .tab-warning-card {
          background: var(--ddd-theme-default-white, #ffffff);
          color: var(--ddd-theme-default-text, #1e293b);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          max-width: 400px;
          text-align: center;
        }
        .tab-warning-icon { font-size: 48px; margin-bottom: var(--ddd-spacing-3); }
        .tab-warning-title { font-size: var(--ddd-font-size-l); font-weight: 800; color: var(--ddd-theme-primary); margin-bottom: var(--ddd-spacing-2); }
        .tab-warning-text { font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-on-surface, var(--ddd-theme-default-text, #1e293b)); margin-bottom: var(--ddd-spacing-4); }
        .tab-warning-close {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
          border: none; border-radius: var(--ddd-radius-sm);
          font-weight: 700; cursor: pointer;
        }
        .force-choice-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.85); z-index: 99999;
          display: flex; align-items: center; justify-content: center;
        }
        .force-choice-card {
          background: var(--ddd-theme-default-white, #ffffff);
          color: var(--ddd-theme-default-text, #1e293b);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-7);
          max-width: 480px; text-align: center;
          border: 3px solid var(--ddd-theme-warning);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .force-choice-icon { font-size: 56px; margin-bottom: var(--ddd-spacing-4); }
        .force-choice-title {
          font-size: var(--ddd-font-size-l); font-weight: 800;
          color: var(--ddd-theme-error); margin-bottom: var(--ddd-spacing-3);
        }
        .force-choice-text {
          font-size: var(--ddd-font-size-4xs); color: var(--ddd-theme-on-surface, var(--ddd-theme-default-text, #1e293b));
          line-height: 1.6; margin-bottom: var(--ddd-spacing-5);
        }
        .force-choice-actions {
          display: flex; flex-direction: column; gap: var(--ddd-spacing-3);
        }
        .force-choice-btn {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          border: none; border-radius: var(--ddd-radius-md);
          font-weight: 700; font-size: var(--ddd-font-size-4xs);
          cursor: pointer; font-family: inherit;
        }
        .force-choice-btn.primary {
          background: var(--ddd-theme-primary); color: var(--ddd-theme-on-primary);
        }
        .force-choice-btn.primary:hover { background: var(--ddd-theme-accent); }
        .force-choice-btn.secondary {
          background: var(--ddd-theme-warning); color: var(--ddd-theme-on-primary);
        }
        .force-choice-btn.secondary:hover { filter: brightness(0.9); }
        .force-choice-btn.report {
          background: var(--ddd-theme-error); color: var(--ddd-theme-on-primary);
        }
        .force-choice-btn.report:hover { filter: brightness(0.9); }
      `,q`
        /* ===== DARK MODE (DDD-token swap, gated on body.dark-mode) ===== */
        :host-context(body.dark-mode) :host {
          --dk-bg: #0b1020;
          --dk-card: #111827;
          --dk-soft: #1f2937;
          --dk-softer: #182032;
          --dk-border: #2a3245;
          --dk-text: #e5e7eb;
          --dk-text-soft: #94a3b8;
          --dk-text-strong: #f8fafc;
          --ddd-theme-background: var(--dk-bg);
          --ddd-theme-color: var(--dk-text);
          --ddd-theme-surface: var(--dk-card);
          --ddd-theme-default-surface: var(--dk-card);
          --ddd-theme-default-text: var(--dk-text);
          --ddd-theme-default-white: #1f2937;
          --ddd-theme-on-surface: var(--dk-text);
          --ddd-theme-on-primary: #f8fafc;
          --ddd-theme-primary: #c4b5fd;
          --ddd-theme-accent: #818cf8;
          --ddd-theme-secondary: var(--dk-text-soft);
          --ddd-theme-polaris-surface: var(--dk-card);
          --ddd-theme-polaris-border: var(--dk-border);
          --ddd-theme-polaris-surface-hover: var(--dk-soft);
          --ddd-theme-success: #6ee7b7;
          --ddd-theme-success-light: #064e3b;
          --ddd-theme-success-text: #6ee7b7;
          --ddd-theme-success-dark: #047857;
          --ddd-theme-warning: #fcd34d;
          --ddd-theme-warning-light: #78350f;
          --ddd-theme-warning-text: #fde68a;
          --ddd-theme-error: #fca5a5;
          --ddd-theme-error-dark: #7f1d1d;
          background: var(--dk-bg);
          color: var(--dk-text);
        }
        :host-context(body.dark-mode) .materi-card,
        :host-context(body.dark-mode) .selesai-card,
        :host-context(body.dark-mode) .skor-best {
          background: var(--dk-card);
          color: var(--dk-text);
          border-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .materi-card h2,
        :host-context(body.dark-mode) .materi-card p,
        :host-context(body.dark-mode) .selesai-card .kirim { color: var(--dk-text); }
        :host-context(body.dark-mode) .auth-hint,
        :host-context(body.dark-mode) .selesai-card .kirim.warn { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .err-chip { background: #7f1d1d; color: #fecaca; border-color: #991b1b; }
        :host-context(body.dark-mode) .btn-mulai { background: #4f46e5; color: #f8fafc; }
        :host-context(body.dark-mode) .btn-mulai:hover { background: #6366f1; }
        :host-context(body.dark-mode) .tab-warning-card { background: var(--dk-card); color: var(--dk-text); }
        :host-context(body.dark-mode) .tab-warning-title { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .tab-warning-text { color: var(--dk-text); }
        :host-context(body.dark-mode) .tab-warning-close { background: #4f46e5; color: #f8fafc; }
        :host-context(body.dark-mode) .force-choice-card { background: var(--dk-card); color: var(--dk-text); }
        :host-context(body.dark-mode) .force-choice-title { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .force-choice-text { color: var(--dk-text); }
        :host-context(body.dark-mode) .force-choice-btn.secondary { background: #b45309; color: #f8fafc; }
        :host-context(body.dark-mode) .selesai-card.suspicious { border-color: #b45309; background: linear-gradient(180deg, rgba(180,83,9,0.1), transparent); }
        :host-context(body.dark-mode) .suspicious-warning { background: #431407; border-color: #7c2d12; }
        :host-context(body.dark-mode) .suspicious-title { color: #fed7aa; }
        :host-context(body.dark-mode) .suspicious-text { color: #fdba74; }
        :host-context(body.dark-mode) .suspicious-note { color: #d97706; }
        :host-context(body.dark-mode) .remidi-card { background: #431407; border-color: #7c2d12; }
        :host-context(body.dark-mode) .remidi-card h3 { color: #fed7aa; }
        :host-context(body.dark-mode) .remidi-card p { color: #fdba74; }
      `]}get _effectiveRemidiMode(){return!!(this.remidiMode||this.remidiSoalUrl&&typeof this._bestSkor=="number"&&this._bestSkor<this.kkm&&!this.sudahRemidi)}get _latihanOnlyMode(){return!this.lockAfterComplete&&(this.duration===0||!this.duration)}render(){const t=this._effectiveRemidiMode&&!this.sudahRemidi&&typeof this._bestSkor=="number"&&this._bestSkor<this.kkm,e=(this._needsRemidi||t)&&this._effectiveRemidiMode&&!this.sudahRemidi;if(this._terkunci&&this.mode!=="guru")return e?o`
          <div class="wrap">
            <div class="selesai-card" role="alert">
              <div style="font-size:2.5rem">🔓</div>
              <p class="kirim">Kuis terkunci, tapi Anda bisa <b>remidi</b> karena nilai &lt; KKM.</p>
              ${this._bestSkor!=null?o`<div class="skor">Nilai terbaik: <strong>${this._bestSkor}%</strong> (KKM ${this.kkm}%)</div>`:f}
              <div class="remidi-card" style="margin-top:12px;">
                <h3>📝 Remidi Tersedia</h3>
                <p>Soal sama diacak via <code>shuffle-choices</code>. Klik untuk mulai remidi LM1.</p>
                <button class="btn-mulai" @click=${this._mulaiRemidi}>🔄 Mulai Remidi (Soal Sama Shuffle)</button>
              </div>
              <p style="font-size:12px; color:#64748B; margin-top:8px;">Atau hubungi guru untuk <b>Buka Kunci</b> penuh.</p>
            </div>
          </div>
        `:o`
        <div class="wrap">
          <div class="selesai-card" role="alert">
            <div style="font-size:2.5rem">🔒</div>
            <p class="kirim warn">Kuis terkunci. Hubungi guru untuk mengulang.</p>
            ${this._bestSkor!=null?o`<div class="skor">Nilai terbaik Anda: <strong>${this._bestSkor}%</strong></div>`:f}
            ${this.mode==="guru"?o`<button class="btn-mulai" @click=${this._resetKunciGuru}>🔓 Buka Kunci (Guru)</button>`:o`<p style="font-size:12px; color:#64748B;">Guru bisa buka via <b>Dasbor Guru → Atur → 🔓 Buka Kunci</b> atau tombol di atas (mode guru).</p>`}
          </div>
        </div>
      `;if(this._selesai){const a=this._bacaSisaWaktu()>60;return o`
        <div class="wrap">
          <div class="selesai-card ${a?"suspicious":""}" role="status">
            ${this._habisWaktu?o`<div class="waktu">${this.pesanWaktuHabis}</div>`:f}
            ${a?o`<div class="suspicious-warning" role="alert">
                  <div class="suspicious-icon">⚠️</div>
                  <div class="suspicious-title">Perhatian: Terdeteksi Aktivitas Mencurigakan</div>
                  <div class="suspicious-text">Sistem mendeteksi waktu pengerjaan tidak sesuai dengan durasi yang diberikan. Nilai Anda tetap tercatat, namun guru akan mendapat notifikasi untuk verifikasi.</div>
                  <div class="suspicious-note">Jika ini adalah kesalahan (misal: browser di-background), hubungi guru untuk klarifikasi.</div>
                </div>`:f}
            ${this.studentId?o`<div class="kirim">${this.pesanNilaiTerkirim}</div>`:o`<div class="kirim warn">⚠️ Nilai belum tersimpan karena belum login</div>`}
            ${this._skor!=null?o`<div class="skor">Skor Anda: <strong>${this._skor}%</strong></div>`:f}
            ${this.nilaiAkhir!=null?o`<div class="skor">Nilai Akhir: <strong>${this.nilaiAkhir}%</strong></div>`:f}
            ${this._needsRemidi&&!this.sudahRemidi&&this._effectiveRemidiMode?o`<div class="remidi-card">
                  <h3>📝 Remedi Diperlukan</h3>
                  <p>Nilai Anda belum mencapai KKM (${this.kkm}%). Silakan kerjakan remidi.</p>
                  <button class="btn-mulai" @click=${this._mulaiRemidi}>🔄 Mulai Remidi</button>
                  ${this._effectiveRemidiMode&&!this.sudahRemidi&&typeof this._bestSkor=="number"&&this._bestSkor<this.kkm?o`<p class="remidi-notif" role="status">🔔 Remidi otomatis aktif — nilai Anda di bawah KKM. Kerjakan soal remidi untuk tingkatkan nilai.</p>`:f}
                </div>`:f}
            ${this.allowRetake&&(this.maxRetake===0||this._attemptKe<this.maxRetake+1)?o`<button class="btn-mulai" @click=${this._ulangiKuis}>🔁 Ulangi Kuis</button>`:f}
            ${this.showSheetLink&&this.spreadsheetUrl?o`<a href="${this.spreadsheetUrl}" target="_blank" rel="noopener">📊 Buka Spreadsheet Nilai</a>`:f}
            ${this.studentId?o`<button class="btn-logout" @click=${this._onAuthLogout}>🚪 Keluar (Logout)</button>`:f}
          </div>
        </div>
      `}return o`
      <div class="wrap">
        <section class="materi-card">
          ${this.coverImage?o`<img class="cover" src="${this.coverImage}" alt="Cover materi" />`:f}
          <h2>📖 ${this.judulMateri}</h2>
          <p>${this.teksMateri}</p>
          <div class="materi-links">
            ${this.materiUrl?o`<a href="${this.materiUrl}" target="_blank" rel="noopener">${this.t.bacaMateri}</a>`:f}
            ${this.materiFile?o`<a href="${this.materiFile}" target="_blank" rel="noopener" download>${this.t.unduhMateri}</a>`:f}
          </div>
          ${this._pernahIkut&&this._bestSkor!=null?o`<p class="skor-best">⭐ Nilai terbaik Anda: <strong>${this._bestSkor}%</strong></p>`:f}
        </section>

        ${this._mulai?o`
              ${this._pesan?o`<p class="err-chip">${this._pesan}</p>`:f}
              <timer-kuis
                duration="${this.duration}"
                .remaining="${this._resumeRemaining}"
                ?hide-controls="${this.hidePauseRestart}"
                ?autostart="${this.timerAutostart}"
                @timer-kuis-expired="${this._onWaktuHabis}">
              </timer-kuis>
              ${this._tabSwitchWarning&&this._mulai&&!this._selesai&&!this._latihanOnlyMode?o`<div class="tab-warning-overlay" role="alertdialog" aria-labelledby="tab-warning-title" aria-describedby="tab-warning-text">
                    <div class="tab-warning-card">
                      <div class="tab-warning-icon" aria-hidden="true">⚠️</div>
                      <div class="tab-warning-title" id="tab-warning-title">Fokus pada kuis</div>
                      <div class="tab-warning-text" id="tab-warning-text">Anda membuka tab lain atau aplikasi lain. Gunakan waktu untuk menjawab soal. <strong>Timer tetap berjalan.</strong></div>
                      <button class="tab-warning-close" id="tab-warning-close-btn" @click=${()=>{this._tabSwitchWarning=!1,this.requestUpdate()}} autofocus>Saya Kembali</button>
                    </div>
                  </div>`:f}
              ${this._fullscreenWarning&&this._mulai&&!this._selesai?o`<div class="tab-warning-overlay" role="alert">
                    <div class="tab-warning-card">
                      <div class="tab-warning-icon">🖥️</div>
                      <div class="tab-warning-title">Keluar dari Fullscreen</div>
                      <div class="tab-warning-text">Anda keluar dari mode fullscreen. Mohon kembali ke fullscreen untuk melanjutkan kuis.</div>
                      <button class="tab-warning-close" @click=${()=>{this._fullscreenWarning=!1,this._requestFullscreen(),this.requestUpdate()}}>Kembali Fullscreen</button>
                    </div>
                  </div>`:f}
              ${this._forceChoiceDialog&&this._mulai&&!this._selesai?o`<div class="force-choice-overlay" role="alertdialog" aria-labelledby="force-choice-title" aria-describedby="force-choice-text">
                    <div class="force-choice-card">
                      <div class="force-choice-icon" aria-hidden="true">⚠️</div>
                      <div class="force-choice-title" id="force-choice-title">Peringatan: ${this._warningCount}x Keluar Tab</div>
                      <div class="force-choice-text" id="force-choice-text">
                        Anda telah keluar-masuk tab sebanyak <strong>${this._warningCount} kali</strong>. Ini terdeteksi sebagai pola mencurigakan.
                        <br><br>
                        Silakan putuskan: lanjutkan kerjakan kuis atau kumpulkan nilai Anda sekarang.
                      </div>
                      <div class="force-choice-actions">
                        <button class="force-choice-btn secondary" @click=${this._kumpulkanSekarang}>
                          📤 Kumpulkan Sekarang
                        </button>
                        <button class="force-choice-btn primary" @click=${this._lanjutkanKuis} autofocus>
                          ▶️ Lanjutkan Kerjakan Kuis
                        </button>
                        <button class="force-choice-btn report" @click=${this._laporKeGuru}>
                          🚩 Lapor ke Guru
                        </button>
                      </div>
                    </div>
                  </div>`:f}

              <kuis-ledakan
                @dasbor-kuis-log="${this._onKuisLog}"
                .appsScriptUrl="${this.appsScriptUrl}"
                .judul="${this.judulKuis}"
                .questions="${this.questions}"
                .studentId="${this.studentId}"
                .studentName="${this.studentName}"
                .studentNis="${this.studentNis}"
                .studentAbsen="${this.studentAbsen}"
                .studentKelas="${this.studentKelas}"
                .kdMateri="${this.kdMateri}"
                .lockAfterComplete="${this.ulanganMode||!this.allowRetake}"
                .mode="${this.mode}"
                .hidePauseRestart="${this.ulanganMode||this.hidePauseRestart}"
                .shuffleQuestions="${this.ulanganMode||this.shuffleQuestions}"
                .shuffleChoices="${this.ulanganMode||this.shuffleChoices}"
                .kategori="${this.kategori}"
                .hideConfetti="${this.ulanganMode||this.hideConfetti}"
                .hideAnswers="${this.ulanganMode||this.hideAnswers}"
                .hideScore="${this.ulanganMode||this.hideScore}"
                .showQuestionNav="${this.showQuestionNav}"
                .allowBackwardNav="${this.allowBackwardNav}"
                .practiceMode="${this.ulanganMode||this.practiceMode}"
                .questionDelay="${this.questionDelay}"
                .reviewAnswers="${this.reviewAnswers}"
                .editable="${this.ulanganMode}">
              </kuis-ledakan>
            `:this.studentId&&(this.maxRetake===0||this._attemptKe<this.maxRetake+1)?o`<button class="btn-mulai" @click="${this._mulaiLatihan}">${this.labelMulai}</button>`:document.querySelector("quiz-user-auth")?o`<p class="auth-hint">🔐 Silakan login lewat form di atas agar nilai tersimpan ke Spreadsheet.</p>`:o`
                      <quiz-user-auth .appsScriptUrl="${this.appsScriptUrl}"></quiz-user-auth>
                      <p class="auth-hint">🔐 Silakan login dulu agar nilai tersimpan ke Spreadsheet.</p>
                    `}
      </div>
    `}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Latihan Kuis Berwaktu",description:"Materi + kuis ledakan + timer; saat waktu habis, materi & kuis sembunyi dan tampil pesan nilai terkirim",icon:"icons:timer",color:"purple",tags:["Education","Quiz","Timer","Materi"]},settings:{configure:[{property:"appsScriptUrl",title:"URL Apps Script (kirim nilai)",inputMethod:"textfield",description:"Web App Google Apps Script untuk mengirim skor ke Spreadsheet"},{property:"spreadsheetUrl",title:"URL Spreadsheet Nilai (lihat)",inputMethod:"textfield",description:"Link Google Spreadsheet berisi rekap nilai siswa"},{property:"kdMateri",title:"Kode Materi (kd-materi)",inputMethod:"textfield",description:"Kode/topik kuis; diteruskan ke <kuis-ledakan> agar rekap per topik tersimpan."},{property:"allowRetake",title:"Boleh Diulang (retake)",inputMethod:"boolean",description:"false = ulangan (terkunci setelah 1x), true = latihan (boleh ulang). Attribute hadir = true; tidak ada attribute = false (default)."},{property:"maxRetake",title:"Batas Ulang (max-retake)",inputMethod:"number",description:"Total attempt = 1 asli + maxRetake. Counter disimpan di localStorage per siswa+materi."},{property:"mode",title:"Mode Tampilan",inputMethod:"select",description:"siswa (default) vs guru (lihat tombol buka kunci).",options:{siswa:"Siswa - Evaluasi Mandiri",guru:"Guru - Pantauan"}},{property:"hidePauseRestart",title:"Sembunyikan Tombol Timer",inputMethod:"boolean",description:"Menyembunyikan tombol jeda/mulai/ulang di timer dan tombol Ulangi di layar hasil. Default true."},{property:"timerAutostart",title:"Timer Mulai Otomatis",inputMethod:"boolean",description:"true = timer langsung berjalan saat kuis dimulai. Default true."},{property:"shuffleQuestions",title:"Acak Urutan Soal",inputMethod:"boolean",description:"Mengacak urutan soal setiap kali kuis dimulai."},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",inputMethod:"boolean",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai."},{property:"kategori",title:"Kategori Kuis",inputMethod:"select",description:"sumatif \u2192 skor masuk rapor (db_asesmen); formatif \u2192 progres saja, tidak masuk rapor (db_aktivitas).",options:{sumatif_lm:"Sumatif (Rapor LM)",formatif:"Formatif (Progres)"},default:"sumatif_lm"},{property:"tabSwitchThreshold",title:"Batas Tab Switch Curang",inputMethod:"number",description:"Jumlah tab switch yang dianggap mencurigakan (default: 3). Melewati batas ini akan log 'curang_tab_switch' ke spreadsheet.",default:3},{property:"hideConfetti",title:"Nonaktifkan Konfeti",inputMethod:"boolean",description:"Tidak menampilkan efek konfeti saat jawaban benar."},{property:"hideAnswers",title:"Sembunyikan Jawaban",inputMethod:"boolean",description:"Tidak menampilkan jawaban benar/salah setelah menjawab."},{property:"hideScore",title:"Sembunyikan Nilai",inputMethod:"boolean",description:"Menyembunyikan angka skor berjalan di layar soal dan lingkaran nilai akhir."},{property:"showQuestionNav",title:"Tampilkan Navigasi Nomor Soal",inputMethod:"boolean",description:"Tampilkan tombol navigasi nomor soal di kuis.",default:!0},{property:"allowBackwardNav",title:"Izinkan Navigasi Mundur",inputMethod:"boolean",description:"true = siswa boleh melompat ke soal yang sudah dijawab. Default false (nav maju saja).",default:!1},{property:"practiceMode",title:"Mode Latihan",inputMethod:"boolean",description:"Aktifkan untuk mode latihan: tidak ada auto-advance, tombol Berikutnya/Kembali tersedia.",default:!1},{property:"ulanganMode",title:"Mode Ulangan",inputMethod:"boolean",description:"Preset ulangan: sembunyikan jawaban/nilai/confetti, acak soal & pilihan, kunci sekali coba, siswa bisa bolak-balik & mengedit jawaban.",default:!1},{property:"questionDelay",title:"Jeda Soal (ms)",inputMethod:"number",description:"Jeda auto-advance antar soal (hanya berlaku mode kuis, bukan practice mode).",default:1800},{property:"reviewAnswers",title:"Tinjau Jawaban di Akhir",inputMethod:"boolean",description:"Tampilkan tombol 'Tinjau Jawaban' di layar hasil.",default:!0},{property:"duration",title:"Durasi Kuis (detik)",inputMethod:"number",description:"Lama waktu pengerjaan kuis sebelum dikunci otomatis",default:300},{property:"judulMateri",title:"Judul Materi",inputMethod:"textfield"},{property:"teksMateri",title:"Teks Materi",inputMethod:"textarea"},{property:"materiUrl",title:"URL Materi",inputMethod:"textfield"},{property:"materiFile",title:"File Materi",inputMethod:"haxupload"},{property:"coverImage",title:"Gambar Sampul Materi",inputMethod:"image"},{property:"judulKuis",title:"Judul Kuis",inputMethod:"textfield"},{property:"pesanWaktuHabis",title:"Pesan Waktu Habis",inputMethod:"textfield"},{property:"pesanNilaiTerkirim",title:"Pesan Nilai Terkirim",inputMethod:"textarea"},{property:"labelMulai",title:"Teks Tombol Mulai",inputMethod:"textfield",description:"Teks tombol untuk memulai latihan/kuis (default: '\u25B6\uFE0F Mulai')."},{property:"showSheetLink",title:"Tampilkan Link Spreadsheet",inputMethod:"boolean",description:"Hanya untuk view aman/guru. Default OFF."},{property:"questions",title:"Soal (JSON)",inputMethod:"code-editor",description:"Array soal AKM/PG. Format lama {q,a,b,c,k} didukung. Field opsional: {hint} \u2014 petunjuk muncul sebagai <details>."},{property:"soalFileUrl",title:"Upload File Soal (JSON)",inputMethod:"haxupload",description:"File .json soal; otomatis di-parse & menimpa soal inline."},{property:"kkm",title:"KKM (Kriteria Ketuntasan Minimal)",inputMethod:"number",description:"Nilai minimum untuk lulus. Default 75. Jika nilai < KKM, siswa harus remidi.",default:75},{property:"remidiMode",title:"Aktifkan Mode Remidi",inputMethod:"boolean",description:"Jika aktif, siswa dengan nilai < KKM bisa mengerjakan remidi dengan soal berbeda."},{property:"remidiSoalUrl",title:"Upload File Soal Remidi (JSON)",inputMethod:"haxupload",description:"File .json soal remidi; digunakan jika siswa tidak mencapai KKM."}]},saveOptions:{unsetAttributes:[]}}}}globalThis.customElements.define(ot.tag,ot);class nt extends O(j(F)){static get tag(){return"dasbor-kuis"}static get properties(){return{...super.properties,appsScriptUrl:{type:String,attribute:"apps-script-url",reflect:!0},forumApiUrl:{type:String,attribute:"forum-api-url",reflect:!0},kdMateri:{type:String,attribute:"kd-materi",reflect:!0},kategori:{type:String,attribute:"kategori",reflect:!0},mode:{type:String,attribute:"mode",reflect:!0},kelas:{type:String,attribute:"kelas",reflect:!0},tema:{type:String,attribute:"tema",reflect:!0},studentId:{type:String,attribute:"student-id",reflect:!0},namaSiswa:{type:String,attribute:"nama-siswa",reflect:!0},nis:{type:String,attribute:"nis",reflect:!0},absen:{type:String,attribute:"absen",reflect:!0},allowModeSwitch:{type:Boolean,attribute:"allow-mode-switch",reflect:!0},role:{type:String,attribute:"role",reflect:!0},judulKuis:{type:String,attribute:"judul-kuis",reflect:!0},questions:{type:Array,attribute:"questions",reflect:!0,converter:{fromAttribute(t){if(t==null||t==="")return;if(Array.isArray(t)||typeof t=="object")return t;const e=String(t).trim();if(!(!e||e.includes("[object Object]"))&&(e.startsWith("[")||e.startsWith("{")))try{const a=JSON.parse(e);return Array.isArray(a)?a:a&&typeof a=="object"&&Array.isArray(a.questions)?a.questions:void 0}catch{return}},toAttribute(t){if(!Array.isArray(t))return null;try{return JSON.stringify(t)}catch{return null}}}},shuffleChoices:{type:Boolean,attribute:"shuffle-choices",reflect:!0},hideAnswers:{type:Boolean,attribute:"hide-answers",reflect:!0},hideScore:{type:Boolean,attribute:"hide-score",reflect:!0},hideConfetti:{type:Boolean,attribute:"hide-confetti",reflect:!0},soalFileUrl:{type:String,attribute:"soal-file-url",reflect:!0},remidiMode:{type:Boolean,attribute:"remidi-mode",reflect:!0},remidiSoalUrl:{type:String,attribute:"remidi-soal-url",reflect:!0},kkm:{type:Number,attribute:"kkm",reflect:!0},_activeTab:{state:!0},_serverData:{state:!0},_isFlushing:{state:!0},_networkStatus:{state:!0},_loading:{state:!0},_serverError:{state:!0},_peringkatKelas:{state:!0},_detailSiswa:{state:!0},_editNilai:{state:!0},_note:{state:!0},_draftNilai:{state:!0},_soalText:{state:!0},_copasTSV:{state:!0},_simulabankSoalUrl:{state:!0},_bobotTugas:{state:!0},_bobotLM:{state:!0},_bobotSTS:{state:!0},_bobotSAS:{state:!0},_raporStatus:{state:!0},_soalFileUrlCache:{state:!0},_leaderSortKey:{state:!0},_leaderSortDir:{state:!0},_peringkatSortKey:{state:!0},_peringkatSortDir:{state:!0},_unlockSid:{state:!0},_unlockMateri:{state:!0},_unlockMsg:{state:!0}}}static get haxProperties(){return{api:"1",canScale:!1,canPosition:!1,canEditSource:!0,type:"element",designSystem:{accent:!0,primary:!0,card:!0,text:!0,designTreatment:!1},gizmo:{title:"Dasbor Guru \u2014 Evaluasi & Pantauan Kelas",description:"Dasbor Guru terpadu: Pantauan Kelas, Leaderboard, Peringkat, Ruang Pertemuan (Kuis & Nilai per Pertemuan), Input Nilai, Bank Soal, dan Diskusi. Mode Siswa menampilkan Rapor & Ruang Belajar.",icon:"icons:dashboard",color:"indigo",tags:["Dasbor","Evaluasi","Monitoring","Guru"],meta:{author:"andyinformatika23-hash"}},settings:{configure:[{property:"appsScriptUrl",title:"URL Web App Google Apps Script",description:"Tempelkan URL eksekusi (/exec) dari deploy web app Google Apps Script Anda.",inputMethod:"textfield",required:!0},{property:"kdMateri",title:"Kode Topik / Pertemuan",description:"Ganti sesi bimbingan secara dinamis, misal: Pertemuan 1, Pertemuan 2.",inputMethod:"textfield",required:!0},{property:"mode",title:"Mode Tampilan",description:"Guru: Pantauan Kelas + Leaderboard + Peringkat + Ruang Pertemuan (Kuis & Nilai per Pertemuan) + Input Nilai + Bank Soal + Diskusi + Pengaturan. Siswa: Rapor & Ruang Pertemuan (Evaluasi mandiri).",inputMethod:"select",options:{guru:"Guru - Dasbor Kelas Lengkap",siswa:"Siswa - Rapor & Ruang Belajar"}},{property:"allowModeSwitch",title:"Tampilkan Tombol Pindah Mode",description:"Secara default tombol Guru/Siswa disembunyikan agar siswa tidak bisa beralih ke tampilan guru (dan sebaliknya). Aktifkan hanya pada halaman administrasi.",inputMethod:"boolean"},{property:"kelas",title:"Kelas (Filter Guru)",description:"Filter pantauan guru per kelas, misal: XI-1. Kosongkan untuk semua kelas.",inputMethod:"textfield"},{property:"soalFileUrl",title:"File Soal JSON (per LM)",description:"URL file JSON soal (array). Jika diisi, soal dimuat dari file per kdMateri/LM \u2014 seperti latihan-kuis soal-file-url. Kosongkan untuk pakai questions inline atau Bank Soal sheet.",inputMethod:"haxupload",required:!1},{property:"remidiMode",title:"Aktifkan Mode Remidi",inputMethod:"boolean",description:"Jika aktif, siswa dengan nilai < KKM bisa mengerjakan remidi."},{property:"remidiSoalUrl",title:"URL Soal Remidi (JSON)",inputMethod:"haxupload",description:"File .json soal remidi; digunakan jika siswa tidak mencapai KKM."},{property:"kkm",title:"KKM (Kriteria Ketuntasan Minimal)",inputMethod:"number",description:"Nilai minimum untuk lulus. Default 75. Jika nilai < KKM, siswa harus remidi.",default:75},{property:"tema",title:"Tema Visual",description:"Tema tampilan: default (DDD polos) atau ceria (pastel bermain, kalender & kartu kursus seperti referensi).",inputMethod:"select",options:{"":"Default \u2014 DDD",ceria:"Ceria \u2014 Pastel Bermain (Image 1+2)"}},{property:"studentId",title:"Student ID (Mode Siswa)",description:"ID siswa untuk memuat hasil nilai (otomatis terisi dari event login autentikasi-kuis).",inputMethod:"textfield"},{property:"namaSiswa",title:"Nama Siswa (Mode Siswa)",description:"Nama siswa yang sedang login untuk identifikasi pada ruang diskusi dan log aktivitas.",inputMethod:"textfield"},{property:"nis",title:"NIS (Mode Siswa)",description:"Nomor Induk Siswa yang terdaftar pada sheet Users.",inputMethod:"textfield"},{property:"absen",title:"Nomor Absen (Mode Siswa)",description:"Nomor absen siswa pada kelas.",inputMethod:"textfield"},{property:"judulKuis",title:"Judul Kuis Evaluasi",description:"Judul kartu kuis pada tab Evaluasi (dapat diedit Guru).",inputMethod:"textfield"},{property:"questions",title:"Soal Bank (Json) - Edit Guru",description:"Array soal AKM: PG {question, choices, correctIndex}, PG kompleks {correctAnswers:[0,2]}, PGK {type:'pgk', statements:[{text,answer}]}, menjodohkan {type:'matching', leftItems, rightItems, correctPairs}, isian {type:'shortAnswer', acceptedAnswers}, gambar soal {image}, pilihan bergambar {text,image}. Kosongkan untuk memuat otomatis dari Bank Soal sheet.",inputMethod:"code-editor"},{property:"shuffleChoices",title:"Acak Pilihan Jawaban",description:"Mengacak urutan pilihan jawaban setiap kali kuis dimulai.",inputMethod:"boolean"},{property:"hideAnswers",title:"Sembunyikan Jawaban",description:"Tidak menampilkan jawaban benar/salah setelah menjawab (mode ujian).",inputMethod:"boolean"},{property:"hideScore",title:"Sembunyikan Nilai",description:"Menyembunyikan angka skor berjalan dan nilai akhir (pesan selesai tetap tampil).",inputMethod:"boolean"},{property:"hideConfetti",title:"Nonaktifkan Konfeti",description:"Tidak menampilkan efek konfeti saat jawaban benar.",inputMethod:"boolean"}]},saveOptions:{wipeSlot:!1,unsetAttributes:[]},demoSchema:[{tag:"dasbor-kuis",properties:{mode:"guru",kelas:"XI-1",kdMateri:"Pertemuan 1"},content:""},{tag:"dasbor-kuis",properties:{mode:"siswa",studentId:"STD-65108053",namaSiswa:"Andy Yulianto",kelas:"XI-1",kdMateri:"Pertemuan 1"},content:""}]}}constructor(){super(),this.appsScriptUrl="",this.forumApiUrl="",this.kdMateri="Pertemuan 1",this.mode="guru",this.kelas="",this.tema="",this.studentId="STD-65108053",this.namaSiswa="Andy Yulianto",this.nis="",this.absen="",this.allowModeSwitch=!1,this.judulKuis="Evaluasi Kuis Interaktif",this.questions=[],this.soalFileUrl="",this.remidiMode=!1,this.remidiSoalUrl="",this.kkm=75,this.shuffleChoices=!1,this.hideAnswers=!1,this.hideScore=!1,this.hideConfetti=!1,this._activeTab="pantauan",this._isFlushing=!1,this._syncRetryCount=0,this._networkStatus=globalThis.navigator?.onLine?"online":"offline",this._loading=!1,this._serverError="",this._peringkatKelas="",this._detailSiswa=null,this._editNilai=null,this._note="",this._copasTSV=null,this._simulabankSoalUrl="",this._bobotTugas=1,this._bobotLM=3,this._bobotSTS=2,this._bobotSAS=2,this._raporStatus="",this._soalFileUrlCache="",this._leaderSortKey="nilai",this._leaderSortDir="desc",this._peringkatSortKey="rata",this._peringkatSortDir="desc",this._unlockSid="",this._unlockMateri="LM1",this._unlockMsg="",this._serverData={roster:[],leaderboard:[],siswa:null,history:[],calendar:[]},this._onUserLoginBound=this._onUserLogin.bind(this),this._onUserLogoutBound=this._onUserLogout.bind(this),this._onLogEventBound=this._onLogEvent.bind(this),this._boundHandleOnline=this._handleNetworkChange.bind(this,"online"),this._boundHandleFocus=this._flushQueue.bind(this)}connectedCallback(){if(super.connectedCallback(),globalThis.HaxStore&&typeof globalThis.HaxStore.requestAvailability=="function"){const t=globalThis.HaxStore.requestAvailability();t&&!t.elementList[nt.tag]&&(t.elementList[nt.tag]=nt.haxProperties)}this._loadProfile(),this.fetchDataKomplit(),globalThis.addEventListener("quiz-user-login",this._onUserLoginBound),globalThis.addEventListener("quiz-user-logout",this._onUserLogoutBound),globalThis.addEventListener("dasbor-kuis-log",this._onLogEventBound),globalThis.addEventListener("online",this._boundHandleOnline),globalThis.addEventListener("focus",this._boundHandleFocus),this._flushQueue()}disconnectedCallback(){globalThis.removeEventListener("quiz-user-login",this._onUserLoginBound),globalThis.removeEventListener("quiz-user-logout",this._onUserLogoutBound),globalThis.removeEventListener("dasbor-kuis-log",this._onLogEventBound),globalThis.removeEventListener("online",this._boundHandleOnline),globalThis.removeEventListener("focus",this._boundHandleFocus),super.disconnectedCallback()}_handleNetworkChange(t){this._networkStatus=t,t==="online"&&(this._syncRetryCount=0,this._flushQueue())}updated(t){if(super.updated(t),this.mode==="dosen"){this.mode="guru";return}t.has("mode")&&(this._activeTab=this.mode==="siswa"?"pembelajaran":"pantauan",this.fetchDataKomplit()),(t.has("kelas")||t.has("studentId")||t.has("namaSiswa")||t.has("absen")||t.has("nis")||t.has("appsScriptUrl")||t.has("kdMateri")||t.has("forumApiUrl"))&&this.fetchDataKomplit(),t.has("soalFileUrl")&&this.soalFileUrl&&this.soalFileUrl!==this._soalFileUrlCache&&this._muatSoalDariFile(this.soalFileUrl),t.has("kdMateri")&&this.soalFileUrl&&(this.soalFileUrl.includes("{kdMateri}")||this.soalFileUrl.includes("{lm}"))&&this._muatSoalDariFile(this.soalFileUrl)}_resolveSoalUrl(t){if(!t)return t;const e=String(this.kdMateri||"").trim()||"LM1",a=(e.match(/(\d+)/)||[])[1]||"1";return t.replaceAll("{kdMateri}",e).replaceAll("{lm}",`LM${a}`).replaceAll("{LM}",`LM${a}`)}async _muatSoalDariFile(t){const e=this._resolveSoalUrl(t);this._soalFileUrlCache=t;try{const a=await fetch(e);if(!a.ok)throw new Error("HTTP "+a.status);const i=await a.json();if(!Array.isArray(i)||i.length===0)throw new Error("Bukan array JSON");this.questions=i,this._note=`\u2705 Soal dimuat dari file: ${i.length} soal (${e.split("/").pop()}) \u2014 ${this.kdMateri}`}catch(a){this._soalFileUrlCache="",this._note="\u26A0\uFE0F Gagal muat soal-file-url: "+a.message+` (${this._resolveSoalUrl(t)})`}this.requestUpdate()}_sortLeaderboard(t){this._leaderSortKey===t?this._leaderSortDir=this._leaderSortDir==="asc"?"desc":"asc":(this._leaderSortKey=t,this._leaderSortDir=t==="absen"||t==="nama"?"asc":"desc"),this.requestUpdate()}_sortPeringkat(t){this._peringkatSortKey===t?this._peringkatSortDir=this._peringkatSortDir==="asc"?"desc":"asc":(this._peringkatSortKey=t,this._peringkatSortDir=t==="absen"||t==="nama"?"asc":"desc"),this.requestUpdate()}_getSortedLeaderboardRows(t){const e=this._leaderSortKey||"nilai",a=this._leaderSortDir==="asc"?1:-1;return[...t].sort((i,s)=>{let r,d;if(e==="absen")r=this._num(i._absen),d=this._num(s._absen);else{if(e==="nama")return r=String(i._nama).toLowerCase(),d=String(s._nama).toLowerCase(),r.localeCompare(d)*a;if(e==="kelas")return r=String(i._kelas).toLowerCase(),d=String(s._kelas).toLowerCase(),r.localeCompare(d)*a;e==="nilai"?(r=this._num(i._nilai),d=this._num(s._nilai)):(r=this._num(i._nilai),d=this._num(s._nilai))}return r<d?-1*a:r>d?1*a:this._num(i._absen)-this._num(s._absen)}).map((i,s)=>({...i,_rank:s+1}))}_getSortedPeringkatRows(t){const e=this._peringkatSortKey||"rata",a=this._peringkatSortDir==="asc"?1:-1;return[...t].sort((i,s)=>{let r,d;if(e==="absen")r=this._num(i._absen),d=this._num(s._absen);else{if(e==="nama")return r=String(i._nama).toLowerCase(),d=String(s._nama).toLowerCase(),r.localeCompare(d)*a;if(e==="kelas")return r=String(i._kelas).toLowerCase(),d=String(s._kelas).toLowerCase(),r.localeCompare(d)*a;e==="rata"?(r=this._num(i._rata),d=this._num(s._rata)):e==="nilaiAkhir"?(r=this._num(i._nilaiAkhir),d=this._num(s._nilaiAkhir)):(r=this._num(i._rata),d=this._num(s._rata))}return r<d?-1*a:r>d?1*a:this._num(i._absen)-this._num(s._absen)})}_loadProfile(){try{const t=JSON.parse(localStorage.getItem("a3_v5_student_profile")||"null");t&&t.student_id&&(this.studentId=this.studentId||t.student_id,this.namaSiswa=this.namaSiswa||t.nama,this.kelas=this.kelas||t.kelas,this.nis=this.nis||t.nis||"",this.absen=this.absen||t.absen||"")}catch{}}_persistProfile(){try{localStorage.setItem("a3_v5_student_profile",JSON.stringify({student_id:this.studentId,nama:this.namaSiswa,kelas:this.kelas,nis:this.nis,absen:this.absen}))}catch{}}_onUserLogin(t){const e=t&&t.detail||{};e.studentId&&(this.studentId=e.studentId),e.nama&&(this.namaSiswa=e.nama),e.kelas&&(this.kelas=e.kelas),e.nis&&(this.nis=e.nis),e.absen&&(this.absen=e.absen),this._persistProfile(),this.fetchDataKomplit()}_onUserLogout(){this._serverData={roster:[],leaderboard:[],siswa:null,history:[]},this.studentId="",this.namaSiswa="",this.nis="",this.absen="",this.kelas="";try{localStorage.clear()}catch{}this.requestUpdate()}_onLogEvent(t){const e=t&&t.detail||{};e.tipe&&(!t.target||!this.shadowRoot||!this.shadowRoot.contains(t.target)||this.studentId&&this.logActivity(e.tipe,e.payload||{},e.id_log))}_generateLogId(){try{const t=new Uint8Array(8);globalThis.crypto.getRandomValues(t);let e="";return t.forEach(a=>e+=a.toString(16).padStart(2,"0")),`LOG-${Date.now()}-${e.toUpperCase()}`}catch{return`LOG-${Date.now()}-${Math.random().toString(36).substr(2,10).toUpperCase()}`}}_ambilIdLogStabil(t,e){const a=[this.studentId,this.kdMateri,t,JSON.stringify(e||{}),e&&e.timestamp||""].join("::");let i=5381;for(let p=0;p<a.length;p++)i=((i<<5)+i^a.charCodeAt(p))>>>0;const s="l"+i.toString(16);let r={};try{r=JSON.parse(localStorage.getItem("a3_v5_id_log_lock")||"{}")}catch{}if(r[s])return r[s];const d=this._generateLogId();r[s]=d;const l=Object.keys(r);l.length>200&&l.slice(0,l.length-150).forEach(p=>delete r[p]);try{localStorage.setItem("a3_v5_id_log_lock",JSON.stringify(r))}catch{}return d}_apiGet(t){const e=new URLSearchParams(t);return fetch(`${this.appsScriptUrl}?${e.toString()}`,{method:"GET",mode:"cors"}).then(a=>a.text()).then(a=>{if(!a||a.trim().charAt(0)!=="{")return{status:"error",message:`Respon backend bukan JSON (${a.slice(0,80)||"kosong"}). Cek URL /exec & akses deployment.`};try{return JSON.parse(a)}catch{return{status:"error",message:"JSON tidak dapat diurai."}}}).catch(a=>({status:"error",message:`Jaringan: ${a.message}`}))}_resolveRole(){return this.role?this.role:this.mode==="guru"||this.mode==="dosen"||this.mode==="lecturer"?"guru":"siswa"}_isGuru(){return this._resolveRole()==="guru"}_isSiswa(){return this._resolveRole()==="siswa"}_deteksiErrorBackend(...t){for(const e of t)if(e){if(typeof e.status=="string"&&e.status==="error"&&e.message)return`Error backend: ${e.message}`;if(Array.isArray(e.leaderboard)&&!Array.isArray(e.roster)&&e.riwayatKuis!==void 0)return"Backend lama (V3) terdeteksi: aksi getStudentRoster tidak dikenal. Deploy lib/codev5.gs lalu Deploy > New version."}return""}_bacaCacheLokal(){try{const t=localStorage.getItem("a3_v5_activity_logs_cache");if(!t)return null;const e=JSON.parse(t);if(e&&typeof e=="object")return e}catch{}return null}async fetchDataKomplit(){if(!this.appsScriptUrl){this._serverError="";return}this._loading=!0;try{if(this.mode==="guru"){const[t,e,a]=await Promise.all([this._apiGet({action:"getStudentRoster",kelas:""}),this._apiGet({action:"getLeaderboard",kelas:""}),this._apiGet({action:"getCalendar",kelas:this.kelas||"",kdMateri:this.kdMateri||""}).catch(()=>null)]),i=a&&(a.calendar||a.history)?a.calendar||a.history:[];this._serverError=this._deteksiErrorBackend(t,e);const s=this._bacaCacheLokal(),r=e&&(Array.isArray(e.leaderboard)?e.leaderboard:Array.isArray(e.data)?e.data:null),d=Array.isArray(t.roster)?t.roster:null,l=d?d.map(c=>this._normalizeRosterRow(c)).filter(c=>!this._canonKelas(this.kelas)||!this._canonKelas(c.kelas)||this._canonKelas(c.kelas)===this._canonKelas(this.kelas)):null,p=r&&r.map(c=>this._normalizeLeaderboardRow(c));this._serverError?s&&Array.isArray(s.roster)&&(this._serverData={roster:s.roster,leaderboard:s.leaderboard||[],siswa:s.siswa||null,history:s.history||[]},this._serverError+=" (menampilkan data cache lokal)."):p?(this._serverData={...this._serverData,roster:l||[],leaderboard:p},i&&i.length&&(this._serverData.calendar=i),localStorage.setItem("a3_v5_activity_logs_cache",JSON.stringify(this._serverData))):(this._serverError="getLeaderboard pada backend aktif belum mengembalikan data leaderboard (hanya daftar pertemuan/sheet). Deploy lib/codev5.gs lalu Deploy > New version.",this._serverData={...this._serverData,roster:l||[],leaderboard:s&&Array.isArray(s.leaderboard)?s.leaderboard:[]})}else{const t=this.studentId,[e,a,i]=await Promise.all([this._apiGet({action:"getScores",studentId:t}),this._apiGet({action:"getActivityHistory",studentId:t,kdMateri:this.kdMateri,days:28}),this._apiGet({action:"getCalendar",studentId:t,kelas:this.kelas||"",kdMateri:this.kdMateri||""}).catch(()=>null)]),s=i&&(i.calendar||i.history)?i.calendar||i.history:[];if(this._serverError=this._deteksiErrorBackend(e,a),this._serverError){const r=this._bacaCacheLokal();r&&r.siswa&&(this._serverData={roster:r.roster||[],leaderboard:r.leaderboard||[],siswa:r.siswa,history:r.history||[]},this._serverError+=" (menampilkan data cache lokal).")}else{const r=e&&e.data||null,d=r?this._normalizeSiswaData(r):null;this._serverData={...this._serverData,siswa:d,history:a&&a.history||[],calendar:s||[]},localStorage.setItem("a3_v5_activity_logs_cache",JSON.stringify(this._serverData))}}}catch(t){this._serverError=`Gagal memuat data: ${t.message}`;const e=this._bacaCacheLokal();e&&(Array.isArray(e.roster)||e.siswa)&&(this._serverData={roster:e.roster||[],leaderboard:e.leaderboard||[],siswa:e.siswa||null,history:e.history||[]},this._serverError+=" (menampilkan data cache lokal).")}finally{this._loading=!1,this.requestUpdate()}}logActivity(t,e={},a){const i=a||this._ambilIdLogStabil(t,e),s=e&&e.kdMateri||this.kdMateri||"",r=e&&e.kategori||this.kategori||"sumatif_lm",d={id_log:i,student_id:this.studentId,id_materi:s,kategori:r,tipe_aktivitas:t,payload_data:JSON.stringify(e),timestamp:new Date().toISOString()};let l=[];try{l=JSON.parse(localStorage.getItem("a3_v5_sync_queue")||"[]")}catch{}Array.isArray(l)||(l=[]),l.some(p=>p&&p.id_log===i)||(l.push(d),localStorage.setItem("a3_v5_sync_queue",JSON.stringify(l))),this._flushQueue(),this.dispatchEvent(new CustomEvent("dasbor-kuis-activity",{detail:d,bubbles:!0,composed:!0}))}async _flushQueue(){if(this._isFlushing||!this.appsScriptUrl||!navigator.onLine||globalThis.__a3V5FlushLock)return;let t=[];try{t=JSON.parse(localStorage.getItem("a3_v5_sync_queue")||"[]")}catch{}if(t.length===0)return;const e=t.filter(a=>a&&a.student_id);if(e.length!==t.length&&(t=e,localStorage.setItem("a3_v5_sync_queue",JSON.stringify(t))),t.length!==0){if(this._syncRetryCount>=5){console.warn("[Dashboard] Sinkronisasi dibekukan sementara akibat 5x eror beruntun.");return}this._isFlushing=!0,globalThis.__a3V5FlushLock=!0;try{const a=await Promise.all(t.map(d=>this._apiGet({action:"logActivity",studentId:d.student_id,nama:this.namaSiswa,nis:this.nis,absen:this.absen,kelas:this.kelas,type:d.tipe_aktivitas,description:d.payload_data,timestamp:d.timestamp,kdMateri:d.id_materi,kategori:d.kategori||"sumatif_lm",id_log:d.id_log}))),i=new Set(t.filter((d,l)=>a[l]&&a[l].status==="ok").map(d=>d.id_log));this._syncRetryCount=0;let s=[];try{s=JSON.parse(localStorage.getItem("a3_v5_sync_queue")||"[]")}catch{}Array.isArray(s)||(s=[]);const r=s.filter(d=>!i.has(d.id_log));localStorage.setItem("a3_v5_sync_queue",JSON.stringify(r)),r.length<s.length&&this.fetchDataKomplit()}catch(a){this._syncRetryCount++,console.error("[Dashboard] Gagal terhubung ke GAS backend (Jaringan Terputus):",a)}finally{if(this._isFlushing=!1,globalThis.__a3V5FlushLock=!1,this.requestUpdate(),JSON.parse(globalThis.localStorage.getItem("a3_v5_sync_queue")||"[]").length>0&&this._networkStatus==="online"){const a=this._syncRetryCount>0?Math.pow(2,this._syncRetryCount)*1e3:1e3;console.log(`[Dashboard] Mencoba sinkronisasi berikutnya dalam ${a/1e3} detik. (Gagal: ${this._syncRetryCount}x)`),setTimeout(()=>this._flushQueue(),a)}}}}_num(t){const e=parseInt(t);return isNaN(e)?0:e}_canonKelas(t){return String(t||"").trim().toLowerCase().replace(/[^a-z0-9]/g,"")}_rowValue(t,e){if(!t)return"";if(typeof t[e]<"u")return t[e];const a=Object.keys(t).find(i=>String(i).trim().toLowerCase()===String(e).toLowerCase());return a?t[a]:""}_normalizeRosterRow(t){if(!t||typeof t!="object")return t;const e={...t};return e.nilaiRapor!==void 0&&e.nilaiAkhir===void 0&&(e.nilaiAkhir=e.nilaiRapor),e.intervalCapaian!==void 0&&e.grade===void 0&&(e.grade=e.intervalCapaian),e.rerataLM!==void 0&&e.uh===void 0&&(e.uh=e.rerataLM),e.rerataLM!==void 0&&e.Rerata_LM===void 0&&(e.Rerata_LM=e.rerataLM),e.sas!==void 0&&e.uas===void 0&&(e.uas=e.sas),e.sts!==void 0&&e.uts===void 0&&(e.uts=e.sts),e}_normalizeLeaderboardRow(t){if(!t||typeof t!="object")return t;const e={...t},a=(i,s)=>{e[i]!==void 0&&e[s]===void 0&&(e[s]=e[i]),e[i.toLowerCase()]!==void 0&&e[s]===void 0&&(e[s]=e[i.toLowerCase()])};return a("Nilai_Rapor","Rata-rata Skor"),a("Nilai_Rapor","Nilai Akhir"),a("Interval_Capaian","Status Kuis Terakhir"),a("Interval_Capaian","Grade"),a("Rerata_LM","Rata-rata LM"),a("Rerata_LM","Rerata LM"),a("STS","Skor UTS"),a("STS","UTS"),a("SAS","Skor UAS"),a("SAS","UAS"),a("STS","Skor STS"),a("SAS","Skor SAS"),e.StudentID!==void 0&&e["Student ID"]===void 0&&(e["Student ID"]=e.StudentID),e}_normalizeSiswaData(t){if(!t||typeof t!="object")return t;const e={...t};return e.nilaiRapor!==void 0&&e.nilaiAkhir===void 0&&(e.nilaiAkhir=e.nilaiRapor),e.intervalCapaian!==void 0&&e.grade===void 0&&(e.grade=e.intervalCapaian),e.rerataLM!==void 0&&e.uh===void 0&&(e.uh=e.rerataLM),e.rerataLM!==void 0&&e.rerata_lm!==void 0&&e.uh===void 0&&(e.uh=e.rerata_lm),e.sts!==void 0&&(e.uts||(e.uts={highest:e.sts,average:e.sts}),e.uts&&typeof e.uts=="object"&&e.uts.highest===void 0&&(e.uts.highest=e.sts)),e.sas!==void 0&&(e.uas||(e.uas={highest:e.sas,average:e.sas}),e.uas&&typeof e.uas=="object"&&e.uas.highest===void 0&&(e.uas.highest=e.sas)),e.deskripsiCapaian&&!e.deskripsi_capaian&&(e.deskripsi_capaian=e.deskripsiCapaian),!e.ulanganHarian&&e.rerataLM!==void 0&&(e.ulanganHarian={average:e.rerataLM,highest:e.rerataLM}),e}static get styles(){return[super.styles,q`
        :host {
          display: block;
          background: linear-gradient(180deg, #eef2ff 0%, #f8fafc 40%, #f1f5f9 100%);
          color: #0f172a;
          padding: var(--ddd-spacing-6);
          min-height: 100vh;
          font-family: var(--ddd-font-primary);
        }
        .app-container {
          background: #ffffff;
          border-radius: var(--ddd-radius-xl);
          box-shadow: var(--ddd-boxShadow-lg);
          overflow: hidden;
          max-width: 1200px;
          margin: 0 auto;
          border: var(--ddd-border-xs);
        }

        /* Navbar */
        .navbar {
          background: var(--ddd-primary-13);
          color: #ffffff;
          padding: var(--ddd-spacing-5) var(--ddd-spacing-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--ddd-spacing-3);
          flex-wrap: wrap;
        }
        .navbar h1 {
          margin: var(--ddd-spacing-0);
          font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-black);
          letter-spacing: -0.02em;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
        }
        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: var(--ddd-radius-md);
          background: rgb(255 255 255 / 0.15);
          border: 1px solid rgb(255 255 255 / 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--ddd-font-size-xxs);
        }
        .navbar-right {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          flex-wrap: wrap;
        }
        .user-pill {
          background: rgb(255 255 255 / 0.14);
          border: 1px solid rgb(255 255 255 / 0.2);
          padding: 6px 14px;
          border-radius: var(--ddd-radius-rounded);
          font-size: 12px;
          font-weight: var(--ddd-font-weight-bold);
          backdrop-filter: blur(4px);
        }
        .mode-switch {
          display: flex;
          background: rgb(0 0 0 / 0.2);
          border-radius: var(--ddd-radius-rounded);
          padding: var(--ddd-spacing-1);
          gap: var(--ddd-spacing-1);
          border: 1px solid rgb(255 255 255 / 0.2);
        }
        .mode-btn {
          border: none;
          background: transparent;
          color: rgb(255 255 255 / 0.75);
          padding: 6px 14px;
          border-radius: var(--ddd-radius-rounded);
          font-size: 12px;
          font-weight: var(--ddd-font-weight-bold);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mode-btn.active {
          background: #ffffff;
          color: #4f46e5;
          box-shadow: var(--ddd-boxShadow-sm);
        }
        .mode-switch[hidden] { display: none; }

        /* Tab menu */
        .tabs {
          display: flex;
          background: #f8fafc;
          padding: var(--ddd-spacing-2);
          gap: var(--ddd-spacing-2);
          border-bottom: var(--ddd-border-xs);
          overflow-x: auto;
        }
        .tab-btn {
          flex: 1;
          min-width: max-content;
          padding: 10px 16px;
          cursor: pointer;
          background: none;
          border: none;
          font-weight: var(--ddd-font-weight-bold);
          font-size: 13px;
          color: #64748b;
          border-radius: var(--ddd-radius-md);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }
        .tab-btn:hover {
          background: #eef2ff;
          color: #4338ca;
        }
        .tab-btn.active {
          background: var(--ddd-primary-13);
          color: #ffffff;
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .main-content {
          padding: var(--ddd-spacing-6);
          min-height: 450px;
        }

        /* Stat cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-5);
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-lg);
          background: #ffffff;
          border: var(--ddd-border-xs);
          box-shadow: var(--ddd-boxShadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--ddd-boxShadow-md);
        }
        .stat-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--ddd-radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--ddd-font-size-xs);
          flex-shrink: 0;
        }
        .stat-icon.i-indigo { background: #eef2ff; }
        .stat-icon.i-emerald { background: #ecfdf5; }
        .stat-icon.i-amber { background: #fffbeb; }
        .stat-icon.i-rose { background: #fff1f2; }
        .stat-meta { min-width: 0; }
        .stat-value {
          font-size: var(--ddd-font-size-xs);
          font-weight: var(--ddd-font-weight-black);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .stat-label {
          font-size: 11px;
          font-weight: var(--ddd-font-weight-bold);
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Guru monitor cards */
        .grid-heatmap {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: var(--ddd-spacing-4);
        }
        .card-siswa {
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-lg);
          border: var(--ddd-border-xs);
          background: #ffffff;
          box-shadow: var(--ddd-boxShadow-sm);
          transition: all 0.2s ease;
        }
        .card-siswa:hover {
          transform: translateY(-3px);
          box-shadow: var(--ddd-boxShadow-lg);
          border-color: #c7d2fe;
        }
        .card-siswa.lvl-high { border-top: 4px solid #22c55e; }
        .card-siswa.lvl-mid { border-top: 4px solid #f59e0b; }
        .card-siswa.lvl-low { border-top: 4px solid #ef4444; }
        .student-head {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-3);
        }
        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--ddd-font-weight-black);
          font-size: 15px;
          flex-shrink: 0;
        }
        .student-name { font-weight: var(--ddd-font-weight-bold); font-size: 14px; }
        .student-sub { font-size: 11px; color: #94a3b8; }
        .badge-status {
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-1);
          padding: 3px 10px;
          font-size: 11px;
          font-weight: var(--ddd-font-weight-bold);
          border-radius: var(--ddd-radius-rounded);
          margin-top: var(--ddd-spacing-2);
        }
        .badge-good { background: #dcfce7; color: #166534; }
        .badge-warn { background: #fef3c7; color: #92400e; }
        .badge-bad { background: #fee2e2; color: #991b1b; }
        .metric-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--ddd-spacing-2);
          margin-top: var(--ddd-spacing-3);
          font-size: 11px;
          text-align: center;
          color: #475569;
        }
        .metric-mini div {
          background: #f8fafc;
          border-radius: var(--ddd-radius-sm);
          padding: 6px 4px;
          font-weight: var(--ddd-font-weight-bold);
        }
        .progress-track {
          background: #e2e8f0;
          width: 100%;
          height: 8px;
          border-radius: var(--ddd-radius-rounded);
          overflow: hidden;
          margin: 10px 0 4px;
        }
        .progress-bar {
          background: linear-gradient(90deg, #4f46e5, #8b5cf6);
          height: 100%;
          border-radius: var(--ddd-radius-rounded);
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .score-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: var(--ddd-font-weight-bold);
          color: #334155;
        }

        /* Podium */
        .podium-section {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: var(--ddd-spacing-4);
          margin: var(--ddd-spacing-6) 0;
          flex-wrap: wrap;
        }
        .podium-box {
          background: #ffffff;
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xl);
          padding: var(--ddd-spacing-5);
          text-align: center;
          width: 170px;
          box-shadow: var(--ddd-boxShadow-sm);
          transition: transform 0.2s ease;
        }
        .podium-box:hover { transform: translateY(-4px); }
        .podium-box.rank-1 {
          border-color: #fcd34d;
          background: linear-gradient(180deg, #fffbeb, #ffffff);
          height: 190px;
          box-shadow: var(--ddd-boxShadow-lg);
        }
        .podium-box.rank-2 { height: 160px; border-color: #cbd5e1; }
        .podium-box.rank-3 { height: 140px; border-color: #d8b4fe; }
        .podium-medal { font-size: 32px; }
        .podium-name { font-weight: var(--ddd-font-weight-black); font-size: 14px; margin-top: var(--ddd-spacing-2); }
        .podium-score {
          font-size: var(--ddd-font-size-xxs);
          font-weight: var(--ddd-font-weight-black);
          color: #4f46e5;
        }

        /* Tabel */
        .table-wrap {
          overflow-x: auto;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-lg);
          background: #ffffff;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        th {
          background: #f8fafc;
          padding: 12px 14px;
          color: #475569;
          font-weight: var(--ddd-font-weight-bold);
          border-bottom: var(--ddd-border-sm);
          white-space: nowrap;
        }
        td {
          padding: 12px 14px;
          border-bottom: var(--ddd-border-xs);
          color: #1e293b;
        }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: #f8fafc; }
        tr.highlight-row td { background: #f5f3ff !important; font-weight: var(--ddd-font-weight-bold); }
        .rank-chip {
          display: inline-flex;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          font-weight: var(--ddd-font-weight-black);
          font-size: 12px;
          background: #eef2ff;
          color: #4338ca;
        }
        .rank-chip.top { background: #fbbf24; color: #78350f; }
        .grade-chip {
          padding: 3px 10px;
          border-radius: var(--ddd-radius-rounded);
          font-weight: var(--ddd-font-weight-black);
          font-size: 12px;
        }
        .grade-A { background: #dcfce7; color: #166534; }
        .grade-B { background: #dbeafe; color: #1e40af; }
        .grade-C { background: #fef3c7; color: #92400e; }
        .grade-D, .grade-E { background: #fee2e2; color: #991b1b; }

        /* Hasil siswa */
        .hasil-hero {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
        }
        @media (max-width: 720px) {
          .hasil-hero { grid-template-columns: 1fr; }
        }
        .grade-ring-card {
          background: linear-gradient(160deg, #312e81, #6d28d9);
          border-radius: var(--ddd-radius-xl);
          padding: var(--ddd-spacing-5);
          color: #ffffff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--ddd-boxShadow-lg);
        }
        .grade-ring {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(#fbbf24 0deg, rgb(255 255 255 / 0.15) 0deg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--ddd-spacing-3);
        }
        .grade-ring-inner {
          width: 92px;
          height: 92px;
          border-radius: 50%;
          background: #312e81;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .ring-nilai { font-size: 26px; font-weight: var(--ddd-font-weight-black); line-height: 1; }
        .ring-label { font-size: 10px; opacity: 0.75; }
        .grade-big {
          font-size: var(--ddd-font-size-ms);
          font-weight: var(--ddd-font-weight-black);
          background: #fbbf24;
          color: #78350f;
          border-radius: var(--ddd-radius-lg);
          padding: 2px 16px;
        }
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--ddd-spacing-3);
        }
        .kpi-card {
          background: #ffffff;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-4);
          text-align: center;
          transition: all 0.2s ease;
        }
        .kpi-card:hover { transform: translateY(-2px); box-shadow: 0 8px 16px -8px rgb(15 23 42 / 0.2); }
        .kpi-value { font-size: 24px; font-weight: var(--ddd-font-weight-black); color: #4f46e5; }
        .kpi-value.ok { color: #16a34a; }
        .kpi-value.warn { color: #d97706; }
        .kpi-label { font-size: 11px; font-weight: var(--ddd-font-weight-bold); color: #64748b; margin-top: 4px; }
        .kpi-bar { height: 6px; border-radius: var(--ddd-radius-rounded); background: #e2e8f0; margin-top: var(--ddd-spacing-3); overflow: hidden; }
        .kpi-bar > div { height: 100%; border-radius: var(--ddd-radius-rounded); background: linear-gradient(90deg, #4f46e5, #8b5cf6); }

        /* Heatmap siswa */
        .heatmap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(26px, 1fr));
          gap: var(--ddd-spacing-2);
          margin-top: var(--ddd-spacing-4);
          max-width: 620px;
        }
        .box-heatmap {
          width: 26px;
          height: 26px;
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-xs);
          transition: all 0.15s ease-in-out;
          position: relative;
        }
        .box-heatmap:hover {
          transform: scale(1.25) translateY(-3px);
          box-shadow: var(--ddd-boxShadow-md);
          z-index: 10;
        }
        .lvl-0 { background: #f1f5f9; }
        .lvl-1 { background: #c7d2fe; border-color: #a5b4fc; }
        .lvl-2 { background: #818cf8; border-color: #6366f1; }
        .lvl-3 { background: #4f46e5; border-color: #4338ca; }
        .lvl-4 { background: #312e81; border-color: #1e1b4b; }

        .empty-state {
          border: 2px dashed #cbd5e1;
          border-radius: var(--ddd-radius-lg);
          padding: var(--ddd-spacing-6);
          text-align: center;
          color: #64748b;
          background: #f8fafc;
          font-size: 14px;
        }
        .empty-state code {
          background: #eef2ff;
          color: #4338ca;
          border-radius: var(--ddd-radius-sm);
          padding: 2px 8px;
          font-size: 12px;
          word-break: break-all;
        }
        .err-chip {
          display: block;
          margin: 10px auto 0;
          max-width: 640px;
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #991b1b;
          border-radius: var(--ddd-radius-md);
          padding: 8px 14px;
          font-size: 12px;
          font-weight: var(--ddd-font-weight-bold);
        }
        .retry-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          margin-top: var(--ddd-spacing-4);
          padding: 10px 18px;
          background: var(--ddd-primary-13);
          color: #ffffff;
          border: none;
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-bold);
          font-size: 13px;
          cursor: pointer;
          box-shadow: var(--ddd-boxShadow-sm);
          transition: all 0.2s ease;
        }
        .retry-btn:hover {
          transform: translateY(-1px);
          box-shadow: var(--ddd-boxShadow-md);
        }

        .toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-3);
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: var(--ddd-spacing-4);
        }
        .tb-filter { display: flex; flex-direction: column; gap: var(--ddd-spacing-1); }
        .tb-filter label { font-size: 12px; font-weight: var(--ddd-font-weight-bold); color: #475569; }
        .filter-select {
          border: 1px solid #cbd5e1;
          border-radius: var(--ddd-radius-sm);
          padding: 8px 10px;
          font-size: 13px;
          background: #fff;
          color: #1e293b;
        }
        .tb-action { display: flex; gap: var(--ddd-spacing-2); flex-wrap: wrap; }
        .note-chip {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          font-size: 12px;
          font-weight: var(--ddd-font-weight-bold);
          padding: 8px 12px;
          border-radius: var(--ddd-radius-sm);
          flex-basis: 100%;
        }
        .nilai-table-wrap {
          overflow-x: auto;
          background: #fff;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-md);
          margin-bottom: var(--ddd-spacing-4);
        }
        .nilai-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .nilai-table th {
          text-align: left;
          padding: 10px 12px;
          background: #f8fafc;
          color: #475569;
          font-size: 12px;
          font-weight: var(--ddd-font-weight-bold);
          border-bottom: var(--ddd-border-xs);
          white-space: nowrap;
        }
        .nilai-table td {
          padding: 8px 12px;
          border-bottom: var(--ddd-border-xs);
          vertical-align: middle;
        }
        .nilai-input {
          width: 84px;
          border: 1px solid #cbd5e1;
          border-radius: var(--ddd-radius-sm);
          padding: 6px 8px;
          font-size: 13px;
          background: #fff;
          color: #1e293b;
        }
        .soal-textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #cbd5e1;
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-3);
          font-family: "JetBrains Mono", Consolas, monospace;
          font-size: 12px;
          line-height: 1.5;
          background: #f8fafc;
          color: #0f172a;
          resize: vertical;
          margin-bottom: var(--ddd-spacing-4);
        }
        .card-panel {
          background: #fff;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-4);
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-4);
        }
        .set-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
          align-items: center;
          justify-content: space-between;
          padding-bottom: var(--ddd-spacing-4);
          border-bottom: var(--ddd-border-xs);
        }
        .set-row:last-of-type { border-bottom: 0; padding-bottom: 0; }
        .set-title { font-size: 13px; font-weight: var(--ddd-font-weight-bold); color: #1e293b; }
        .set-sub { font-size: 12px; color: #64748b; margin-top: 2px; max-width: 480px; }
        .set-input {
          border: 1px solid #cbd5e1;
          border-radius: var(--ddd-radius-sm);
          padding: 8px 10px;
          font-size: 13px;
          background: #fff;
          color: #1e293b;
          min-width: 280px;
          font-family: "JetBrains Mono", Consolas, monospace;
        }
        .switch-check {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-2);
          font-size: 13px;
          font-weight: var(--ddd-font-weight-bold);
          color: #334155;
          cursor: pointer;
          min-width: 280px;
        }
        .copas-panel {
          background: #f8fafc;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-4);
          margin-bottom: var(--ddd-spacing-4);
        }
        .copas-area {
          width: 100%;
          box-sizing: border-box;
          font-family: "Consolas", monospace;
          font-size: 12px;
          line-height: 1.5;
          border: 1px solid #cbd5e1;
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-3);
          background: #fff;
          color: #1e293b;
          white-space: pre;
        }
        .nama-btn {
          background: none;
          border: none;
          color: #4f46e5;
          font-weight: var(--ddd-font-weight-bold);
          font-size: 13px;
          cursor: pointer;
          padding: var(--ddd-spacing-0);
          text-align: left;
          text-decoration: underline dotted;
        }
        .nama-btn:hover { color: #312e81; }
        .detail-panel {
          border: 1px solid #c7d2fe;
          background: #eef2ff;
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-5);
          margin-bottom: var(--ddd-spacing-5);
        }
        .dEdit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--ddd-spacing-3);
          margin: var(--ddd-spacing-4) 0;
        }
        .dEdit-label { font-size: 12px; font-weight: var(--ddd-font-weight-bold); color: #475569; }
        .dEdit-input {
          border: 1px solid #cbd5e1;
          border-radius: var(--ddd-radius-sm);
          padding: 8px 10px;
          font-size: 13px;
          background: #fff;
          color: #1e293b;
          width: 100%;
          box-sizing: border-box;
        }
        .detail-stats {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-4);
          font-size: 12px;
          color: #334155;
          margin-bottom: var(--ddd-spacing-3);
        }
        .action-row { display: flex; gap: var(--ddd-spacing-2); flex-wrap: wrap; }
        .heatmap-head {
          display: flex;
          gap: var(--ddd-spacing-1);
          margin: 10px 0 4px;
          font-size: 10px;
          color: #94a3b8;
          font-weight: var(--ddd-font-weight-bold);
        }
        .heatmap-head span { width: 100%; text-align: center; }
        .heatmap-legend {
          display: flex;
          gap: var(--ddd-spacing-2);
          align-items: center;
          margin: 8px 0 12px;
          font-size: 11px;
          color: #94a3b8;
        }
        .legend-box {
          width: 13px;
          height: 13px;
          border-radius: var(--ddd-radius-xs);
          border: 2px solid transparent;
        }
        .legend-box.lvl-0 { background: #f1f5f9; }
        .legend-box.lvl-1 { background: #c7d2fe; border-color: #a5b4fc; }
        .legend-box.lvl-2 { background: #818cf8; border-color: #6366f1; }
        .legend-box.lvl-3 { background: #4f46e5; border-color: #4338ca; }
        .legend-box.lvl-4 { background: #312e81; border-color: #1e1b4b; }
        .li-log {
          display: flex;
          gap: var(--ddd-spacing-2);
          font-size: 12px;
          background: #f8fafc;
          border: var(--ddd-border-xs);
          border-radius: var(--ddd-radius-sm);
          padding: 7px 10px;
        }
        .lt-log {
          color: #64748b;
          font-weight: var(--ddd-font-weight-bold);
          white-space: nowrap;
          margin-top: var(--ddd-spacing-1);
        }
        .ld-log { color: #334155; }
        .status-footer {
          background: #f8fafc;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
          font-size: 12px;
          color: #64748b;
          border-top: var(--ddd-border-xs);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--ddd-spacing-3);
          flex-wrap: wrap;
        }
        .indicator { display: flex; align-items: center; gap: var(--ddd-spacing-2); }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          display: inline-block;
        }
        .dot.loading { background: #eab308; animation: pulse 1s infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .loading-banner {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          background: #eef2ff;
          border: 1px solid #c7d2fe;
          color: #4338ca;
          border-radius: var(--ddd-radius-md);
          padding: 12px 16px;
          font-weight: var(--ddd-font-weight-bold);
          font-size: 13px;
          margin-bottom: var(--ddd-spacing-4);
        }
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #c7d2fe;
          border-top-color: #4f46e5;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `,q`
        /* ============================================================
           DARK MODE OVERRIDES (additive, gated on body.dark-mode)
           Host-context reaches outside shadow DOM to read the class
           that the HAXcms shell sets in localStorage / prefers-color.
           ============================================================ */
        :host-context(body.dark-mode) :host {
          --dk-bg-app: #0b1020;
          --dk-bg-card: #111827;
          --dk-bg-soft: #1f2937;
          --dk-bg-softer: #182032;
          --dk-border: #2a3245;
          --dk-text: #e5e7eb;
          --dk-text-soft: #94a3b8;
          --dk-text-strong: #f8fafc;
          /* Override DDD base tokens used inside templates */
          --ddd-theme-background: var(--dk-bg-app);
          --ddd-theme-color: var(--dk-text);
          --ddd-theme-surface: var(--dk-bg-card);
          background: linear-gradient(180deg, #0b1020 0%, #0f172a 40%, #0b1020 100%);
          color: var(--dk-text);
        }
        :host-context(body.dark-mode) .app-container,
        :host-context(body.dark-mode) .stat-card,
        :host-context(body.dark-mode) .student-card,
        :host-context(body.dark-mode) .card-siswa,
        :host-context(body.dark-mode) .card-panel,
        :host-context(body.dark-mode) .nilai-table-wrap,
        :host-context(body.dark-mode) .podium-box,
        :host-context(body.dark-mode) .kpi-card,
        :host-context(body.dark-mode) .grade-ring-card,
        :host-context(body.dark-mode) .detail-panel,
        :host-context(body.dark-mode) .copas-panel,
        :host-context(body.dark-mode) .loading-banner {
          background: var(--dk-bg-card);
          color: var(--dk-text);
          border-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .navbar {
          background: var(--ddd-primary-13);
          color: #f8fafc;
        }
        :host-context(body.dark-mode) .stat-icon.i-indigo { background: #312e81; color: #c7d2fe; }
        :host-context(body.dark-mode) .stat-icon.i-emerald { background: #064e3b; color: #6ee7b7; }
        :host-context(body.dark-mode) .stat-icon.i-amber { background: #78350f; color: #fcd34d; }
        :host-context(body.dark-mode) .stat-icon.i-rose { background: #881337; color: #fda4af; }
        :host-context(body.dark-mode) .stat-value,
        :host-context(body.dark-mode) .ring-nilai,
        :host-context(body.dark-mode) .kpi-value,
        :host-context(body.dark-mode) .set-title,
        :host-context(body.dark-mode) .student-name,
        :host-context(body.dark-mode) .crn,
        :host-context(body.dark-mode) h1,
        :host-context(body.dark-mode) h2:not(.navbar *) {
          color: var(--dk-text-strong);
        }
        :host-context(body.dark-mode) .stat-label,
        :host-context(body.dark-mode) .student-sub,
        :host-context(body.dark-mode) .kpi-label,
        :host-context(body.dark-mode) .set-sub,
        :host-context(body.dark-mode) .dEdit-label,
        :host-context(body.dark-mode) .student-sub { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .badge-good { background: #064e3b; color: #6ee7b7; }
        :host-context(body.dark-mode) .badge-warn { background: #78350f; color: #fcd34d; }
        :host-context(body.dark-mode) .badge-bad { background: #7f1d1d; color: #fca5a5; }
        :host-context(body.dark-mode) .badge-status { background: var(--dk-bg-soft); color: var(--dk-text); border: 1px solid var(--dk-border); }
        :host-context(body.dark-mode) .grade-A { background: #064e3b; color: #6ee7b7; }
        :host-context(body.dark-mode) .grade-B { background: #1e3a8a; color: #93c5fd; }
        :host-context(body.dark-mode) .grade-C { background: #78350f; color: #fcd34d; }
        :host-context(body.dark-mode) .grade-D,
        :host-context(body.dark-mode) .grade-E { background: #7f1d1d; color: #fca5a5; }
        :host-context(body.dark-mode) .rank-chip { background: var(--dk-bg-soft); color: var(--dk-text); }
        :host-context(body.dark-mode) .rank-chip.top { background: #b45309; color: #fde68a; }
        :host-context(body.dark-mode) .podium-box.rank-1 { background: linear-gradient(180deg, #78350f 0%, #422006 100%); color: #fde68a; border-color: #b45309; }
        :host-context(body.dark-mode) .podium-box.rank-2 { background: var(--dk-bg-soft); color: var(--dk-text); border-color: #475569; }
        :host-context(body.dark-mode) .podium-box.rank-3 { background: var(--dk-bg-softer); color: var(--dk-text); border-color: #5b21b6; }
        :host-context(body.dark-mode) .podium-score { color: #fde68a; }
        :host-context(body.dark-mode) .podium-name { color: var(--dk-text-strong); }
        :host-context(body.dark-mode) .tab-row,
        :host-context(body.dark-mode) .tabs {
          background: var(--dk-bg-card);
          border-bottom-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .tab-btn { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .tab-btn:hover { color: var(--dk-text); }
        :host-context(body.dark-mode) .tab-btn.active { color: #c4b5fd; border-bottom-color: #818cf8; }
        :host-context(body.dark-mode) .mode-btn { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .mode-btn.active { background: rgba(255,255,255,0.18); color: #f8fafc; }
        :host-context(body.dark-mode) .nilai-table { background: var(--dk-bg-card); color: var(--dk-text); }
        :host-context(body.dark-mode) .nilai-table th { background: var(--dk-bg-soft); color: var(--dk-text-strong); border-bottom-color: var(--dk-border); }
        :host-context(body.dark-mode) .nilai-table td { border-bottom-color: var(--dk-border); color: var(--dk-text); }
        :host-context(body.dark-mode) .nilai-table tr:hover { background: var(--dk-bg-soft); }
        :host-context(body.dark-mode) .nilai-table tr.highlight-row { background: rgba(99,102,241,0.15); }
        :host-context(body.dark-mode) .filter-select,
        :host-context(body.dark-mode) .set-input,
        :host-context(body.dark-mode) .dEdit-input,
        :host-context(body.dark-mode) .nilai-input,
        :host-context(body.dark-mode) .soal-textarea,
        :host-context(body.dark-mode) .copas-area {
          background: var(--dk-bg-soft);
          color: var(--dk-text);
          border-color: var(--dk-border);
        }
        :host-context(body.dark-mode) .progress-track { background: var(--dk-bg-soft); }
        :host-context(body.dark-mode) .progress-bar { background: #818cf8; }
        :host-context(body.dark-mode) .kpi-bar { background: var(--dk-bg-soft); }
        :host-context(body.dark-mode) .lvl-0 { background: #1f2937; border-color: #2a3245; }
        :host-context(body.dark-mode) .lvl-1 { background: #312e81; border-color: #4338ca; }
        :host-context(body.dark-mode) .lvl-2 { background: #4338ca; border-color: #6366f1; }
        :host-context(body.dark-mode) .lvl-3 { background: #6366f1; border-color: #818cf8; }
        :host-context(body.dark-mode) .lvl-4 { background: #818cf8; border-color: #c7d2fe; }
        :host-context(body.dark-mode) .box-heatmap { border-color: var(--dk-border); }
        :host-context(body.dark-mode) .box-heatmap:hover { box-shadow: 0 0 0 2px #818cf8; }
        :host-context(body.dark-mode) .empty-state { background: var(--dk-bg-card); color: var(--dk-text-soft); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .empty-state code { background: var(--dk-bg-soft); color: #c4b5fd; }
        :host-context(body.dark-mode) .note-chip { background: var(--dk-bg-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .log-area { background: var(--dk-bg-soft); color: var(--dk-text); border-color: var(--dk-border); }
        :host-context(body.dark-mode) .log-area li { border-bottom-color: var(--dk-border); }
        :host-context(body.dark-mode) .metric-mini { background: var(--dk-bg-soft); color: var(--dk-text); }
        :host-context(body.dark-mode) .metric-mini div { color: var(--dk-text-soft); }
        :host-context(body.dark-mode) .btn-primary { background: var(--ddd-primary-13); color: #f8fafc; }
        :host-context(body.dark-mode) .btn-primary:hover { background: var(--ddd-primary-14); }
        :host-context(body.dark-mode) .retry-btn { background: var(--ddd-primary-13); color: #f8fafc; }
        :host-context(body.dark-mode) .retry-btn:hover { background: var(--ddd-primary-14); }
        :host-context(body.dark-mode) .err-chip { background: #7f1d1d; color: #fecaca; border-color: #991b1b; }
        :host-context(body.dark-mode) .error-banner { background: #7f1d1d; color: #fecaca; border-color: #991b1b; }
        :host-context(body.dark-mode) .loading-banner { background: #1e1b4b; border-color: #4338ca; color: #c7d2fe; }
        :host-context(body.dark-mode) .spinner { border-color: #4338ca; border-top-color: #818cf8; }
        :host-context(body.dark-mode) .ld-log { color: var(--dk-text-soft); }
        /* Inline-style overrides — !important needed to win over style="" */
        :host-context(body.dark-mode) p[style*="color:#64748b"],
        :host-context(body.dark-mode) p[style*="color:#1e293b"],
        :host-context(body.dark-mode) h2[style*="color:#1e293b"] { color: var(--dk-text-soft) !important; }
        :host-context(body.dark-mode) h2[style*="color:#1e293b"] { color: var(--dk-text-strong) !important; }
        :host-context(body.dark-mode) .retry-btn[style*="background:#475569"] { background: var(--dk-bg-soft) !important; color: var(--dk-text) !important; }
        :host-context(body.dark-mode) .retry-btn[style*="background:#4f46e5"] { background: #6366f1 !important; }
        :host-context(body.dark-mode) .retry-btn[style*="background:#059669"] { background: #047857 !important; }
      `,q`
        /* ============================================================
           TEMA CERIA — Pastel Bermain (Image 1+2) gated on [tema="ceria"]
           Palette: periwinkle #E6E9FF, peach #FFEDD5, lavender #EDE9FE,
           pills: anatomyBlue #3B82F6, green #10B981, pink #EC4899
           Radius 20-24px, shadow soft, card putih, tab pill
           ============================================================ */
        :host([tema="ceria"]) {
          background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #F5EFFF 100%);
          padding: var(--ddd-spacing-4);
        }
        :host([tema="ceria"]) .app-container {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(79,70,229,0.12), 0 2px 8px rgba(79,70,229,0.06);
          border: 1px solid #E0E7FF;
          overflow: hidden;
        }
        :host([tema="ceria"]) .navbar {
          background: #ffffff;
          color: #1e293b;
          border-bottom: 1px solid #E0E7FF;
          padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        }
        :host([tema="ceria"]) .navbar h1 { color: #312e81; font-size: 18px; }
        :host([tema="ceria"]) .logo-badge {
          background: linear-gradient(135deg, #818CF8, #C084FC);
          color: #fff; border: none; width: 36px; height: 36px; border-radius: 12px;
        }
        :host([tema="ceria"]) .user-pill {
          background: #EEF2FF; color: #4338ca; border: 1px solid #C7D2FE;
          backdrop-filter: none;
        }
        :host([tema="ceria"]) .mode-switch { background: #F1F5F9; border: 1px solid #E2E8F0; }
        :host([tema="ceria"]) .mode-btn { color: #64748b; }
        :host([tema="ceria"]) .mode-btn.active { background: #312E81; color: #fff; }
        :host([tema="ceria"]) .tabs {
          background: #F8FAFF; border-bottom: 1px solid #E0E7FF;
          padding: var(--ddd-spacing-3); gap: var(--ddd-spacing-2);
        }
        :host([tema="ceria"]) .tab-btn {
          background: #fff; border: 1px solid #E0E7FF; color: #64748b;
          border-radius: 999px; padding: 8px 16px; font-size: 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
        :host([tema="ceria"]) .tab-btn:hover { background: #EEF2FF; color: #4338ca; border-color: #C7D2FE; }
        :host([tema="ceria"]) .tab-btn.active {
          background: #312E81; color: #fff; border-color: #312E81;
          box-shadow: 0 4px 12px rgba(49,46,129,0.25);
        }
        :host([tema="ceria"]) .main-content { background: #F8FAFF; padding: var(--ddd-spacing-5); }
        :host([tema="ceria"]) .stats-grid { gap: var(--ddd-spacing-4); }
        :host([tema="ceria"]) .stat-card {
          background: #fff; border: 1px solid #E0E7FF; border-radius: 20px;
          box-shadow: 0 4px 16px rgba(79,70,229,0.06); padding: var(--ddd-spacing-5);
        }
        :host([tema="ceria"]) .stat-card:nth-child(1) .stat-icon { background: #DBEAFE; }
        :host([tema="ceria"]) .stat-card:nth-child(2) .stat-icon { background: #EDE9FE; }
        :host([tema="ceria"]) .stat-card:nth-child(3) .stat-icon { background: #FFEDD5; }
        :host([tema="ceria"]) .stat-card:nth-child(4) .stat-icon { background: #FCE7F3; }
        :host([tema="ceria"]) .card-siswa {
          background: #fff; border: 1px solid #E0E7FF; border-radius: 20px;
          box-shadow: 0 4px 16px rgba(79,70,229,0.05);
        }
        :host([tema="ceria"]) .card-siswa.lvl-high { border-top: 4px solid #10B981; }
        :host([tema="ceria"]) .card-siswa.lvl-mid { border-top: 4px solid #F59E0B; }
        :host([tema="ceria"]) .card-siswa.lvl-low { border-top: 4px solid #EF4444; }
        :host([tema="ceria"]) .podium-box { border-radius: 20px; border: 1px solid #E0E7FF; }
        :host([tema="ceria"]) .podium-box.rank-1 { background: linear-gradient(180deg, #FEF3C7, #fff); border-color: #FCD34D; }
        :host([tema="ceria"]) .table-wrap, :host([tema="ceria"]) .nilai-table-wrap { border-radius: 16px; border: 1px solid #E0E7FF; }
        :host([tema="ceria"]) .kpi-card {
          background: #fff; border: 1px solid #E0E7FF; border-radius: 16px;
          box-shadow: 0 2px 8px rgba(79,70,229,0.04);
        }
        :host([tema="ceria"]) .filter-select {
          background: #fff; border: 1px solid #C7D2FE; border-radius: 999px;
          padding: 6px 14px; font-size: 12px; color: #4338ca; font-weight: 600;
        }
        :host([tema="ceria"]) .retry-btn {
          border-radius: 999px; padding: 8px 16px; font-size: 12px;
        }
        :host([tema="ceria"]) .grade-ring-card {
          background: linear-gradient(135deg, #312E81, #7C3AED); border-radius: 20px;
        }
        :host([tema="ceria"]) .card-panel {
          background: #fff; border: 1px solid #E0E7FF; border-radius: 20px;
          box-shadow: 0 4px 16px rgba(79,70,229,0.05);
        }
        :host([tema="ceria"]) .detail-panel {
          background: #F5F3FF; border: 1px solid #DDD6FE; border-radius: 20px;
        }
        :host([tema="ceria"]) .empty-state {
          background: #fff; border: 2px dashed #C7D2FE; border-radius: 20px;
        }
        :host([tema="ceria"]) .status-footer {
          background: #EEF2FF; border-top: 1px solid #E0E7FF; color: #64748b;
        }
        /* Pills productivity ala Image 1 bottom */
        :host([tema="ceria"]) .badge-good { background: #D1FAE5; color: #065F46; border-radius: 999px; }
        :host([tema="ceria"]) .badge-warn { background: #FEF3C7; color: #92400E; border-radius: 999px; }
        :host([tema="ceria"]) .badge-bad { background: #FEE2E2; color: #991B1B; border-radius: 999px; }
        :host([tema="ceria"]) .grade-chip { border-radius: 999px; }
        :host([tema="ceria"]) .grade-A { background: #DBEAFE; color: #1E40AF; }
        :host([tema="ceria"]) .grade-B { background: #EDE9FE; color: #6D28D9; }
        :host([tema="ceria"]) .grade-C { background: #FFEDD5; color: #9A3412; }
      `]}render(){let t=0;try{t=JSON.parse(localStorage.getItem("a3_v5_sync_queue")||"[]").length}catch{t=0}const e=this._isGuru()?[{id:"pantauan",label:"\u{1F4CA} Pantauan Kelas"},{id:"leaderboard",label:"\u{1F3C6} Leaderboard"},{id:"peringkat",label:"\u{1F3C6} Peringkat Kelas"},{id:"kehadiran",label:"\u{1F4DA} Ruang Pertemuan"},{id:"nilai",label:"\u270F\uFE0F Input Nilai"},{id:"kuis",label:"\u{1F4DD} Evaluasi"},{id:"forum",label:"\u{1F4AC} Diskusi"},{id:"soal",label:"\u{1F5C2}\uFE0F Bank Soal"},{id:"atur",label:"\u2699\uFE0F Pengaturan"}]:[{id:"pembelajaran",label:"\u{1F4DA} Ruang Pertemuan"},{id:"hasil",label:"\u{1F4C8} Rapor Saya"},{id:"kuis",label:"\u{1F4DD} Evaluasi"},{id:"forum",label:"\u{1F4AC} Diskusi"}],a=this._isSiswa()?this.namaSiswa||"Siswa":"Guru / Wali Kelas";return o`
      <div class="app-container">
        <div class="navbar">
          <h1><span class="logo-badge">🎓</span> ${this._isSiswa()?"Dasbor Siswa \u2014 Ruang Belajar":"Dasbor Guru \u2014 Evaluasi & Pantauan Kelas"}</h1>
          <div class="navbar-right">
            <div
              class="mode-switch"
              role="group"
              aria-label="Mode tampilan"
              ?hidden=${!this.allowModeSwitch}
            >
              <button
                class="mode-btn ${this.mode==="guru"?"active":""}"
                @click=${()=>this.mode="guru"}
              >👨‍🏫 Guru</button>
              <button
                class="mode-btn ${this.mode==="siswa"?"active":""}"
                @click=${()=>this.mode="siswa"}
              >🎓 Siswa</button>
            </div>
            <div class="user-pill">👤 ${a} (${this.kelas||"Kelas"})</div>
          </div>
        </div>

        <div class="tabs" role="tablist">
          ${e.map(i=>o`
              <button
                class="tab-btn ${this._activeTab===i.id?"active":""}"
                role="tab"
                aria-selected=${this._activeTab===i.id}
                @click=${()=>this._activeTab=i.id}
              >${i.label}</button>
            `)}
        </div>

        <div class="main-content">
          ${this._loading&&(this.mode==="guru"?this._activeTab==="pantauan"||this._activeTab==="peringkat":this._activeTab==="pembelajaran"||this._activeTab==="hasil")?o`
                <div class="loading-banner">
                  <span class="spinner"></span>
                  Memuat data dari Google Apps Script…
                </div>
              `:""}
          ${this._renderContent()}
        </div>

        <div class="status-footer">
          <div class="indicator">
            <span class="dot ${this._isFlushing?"loading":""}"></span>
            <span>Konektivitas: ${this._isFlushing?"Menyinkronkan data masal...":"Terhubung"}</span>
          </div>
          <div>Antrean Transaksi Tertunda: ${t} data</div>
        </div>
      </div>
    `}_renderContent(){if(this.mode==="guru"){if(this._activeTab==="pantauan")return this._renderPantauanGuru();if(this._activeTab==="leaderboard")return this._renderLeaderboard();if(this._activeTab==="peringkat")return this._renderPeringkatBimbingan();if(this._activeTab==="kehadiran")return this._renderDashboardPembelajaran();if(this._activeTab==="nilai")return this._renderInputNilai();if(this._activeTab==="kuis")return this._renderKuisWadah();if(this._activeTab==="soal")return this._renderEditSoal();if(this._activeTab==="atur")return this._renderPengaturan();if(this._activeTab==="forum"){const t=this._isGuru();return o`
          <ruang-diskusi
            .forumApiUrl=${this.forumApiUrl||this.appsScriptUrl}
            .appsScriptUrl=${this.appsScriptUrl}
            .sheetName=${this.kdMateri}
            .studentId=${this.studentId}
            .studentName=${this.namaSiswa||"Guru"}
            .studentKelas=${this.kelas}
            .viewMode=${t?"lecturer":"student"}
            forum-topic="Diskusi Materi ${this.kdMateri}"
          ></ruang-diskusi>
          <kirim-tugas
            .forumApiUrl=${this.forumApiUrl||this.appsScriptUrl}
            .appsScriptUrl=${this.appsScriptUrl}
            .sheetName=${this.kdMateri}
            .studentId=${this.studentId}
            .studentName=${this.namaSiswa||"Guru"}
            .studentNis=${this.nis}
            .studentAbsen=${this.absen}
            .studentKelas=${this.kelas}
            assignment-title="Tugas Mandiri ${this.kdMateri}"
          ></kirim-tugas>
        `}}else{if(this._activeTab==="pembelajaran")return this._renderDashboardPembelajaran();if(this._activeTab==="hasil")return this._renderHasilSiswa();if(this._activeTab==="kuis")return this._renderKuisWadah();if(this._activeTab==="forum")return o`
          <ruang-diskusi
            .forumApiUrl=${this.forumApiUrl||this.appsScriptUrl}
            .appsScriptUrl=${this.appsScriptUrl}
            .sheetName=${this.kdMateri}
            .studentId=${this.studentId}
            .studentName=${this.namaSiswa||"Siswa"}
            .studentKelas=${this.kelas}
            .viewMode=${"student"}
            forum-topic="Diskusi Materi ${this.kdMateri}"
          ></ruang-diskusi>
          <kirim-tugas
            .forumApiUrl=${this.forumApiUrl||this.appsScriptUrl}
            .appsScriptUrl=${this.appsScriptUrl}
            .sheetName=${this.kdMateri}
            .studentId=${this.studentId}
            .studentName=${this.namaSiswa||"Siswa"}
            .studentNis=${this.nis}
            .studentAbsen=${this.absen}
            .studentKelas=${this.kelas}
            assignment-title="Tugas Mandiri ${this.kdMateri}"
          ></kirim-tugas>
        `}return""}_renderKuisWadah(){return o`
      <kuis-ledakan
        .mode=${this.mode}
        .appsScriptUrl=${this.appsScriptUrl}
        .kdMateri=${this.kdMateri}
        .studentId=${this.studentId}
        .studentName=${this.namaSiswa}
        .studentNis=${this.nis}
        .studentAbsen=${this.absen}
        .studentKelas=${this.kelas}
        .judul=${this.judulKuis}
        .questions=${this.questions&&this.questions.length>0?this.questions:void 0}
        .shuffleChoices=${this.shuffleChoices}
        .hideAnswers=${this.hideAnswers}
        .hideScore=${this.hideScore}
        .hideConfetti=${this.hideConfetti}
      ></kuis-ledakan>
    `}_renderDashboardPembelajaran(){const t=this.mode==="siswa"||this.allowModeSwitch;return o`
      <sistem-kehadiran
        .appsScriptUrl=${this.appsScriptUrl}
        .kdMateri=${this.kdMateri}
        .studentId=${this.studentId}
        .namaSiswa=${this.namaSiswa||"Siswa"}
        .mode=${this.mode}
      ></sistem-kehadiran>
      ${t?o`
        <div style="margin-top: var(--ddd-spacing-5);">
          <latihan-kuis
            .appsScriptUrl=${this.appsScriptUrl}
            .kdMateri=${this.kdMateri}
            .studentId=${this.studentId}
            .studentName=${this.namaSiswa}
            .studentNis=${this.nis}
            .studentAbsen=${this.absen}
            .studentKelas=${this.kelas}
            .questions=${this.questions&&this.questions.length>0?this.questions:void 0}
            .judulKuis=${this.judulKuis}
            .mode=${this.mode}
            .remidiMode=${this.remidiMode}
            .remidiSoalUrl=${this.remidiSoalUrl}
            .kkm=${this.kkm}
            kategori="sumatif_lm"
          ></latihan-kuis>
        </div>
      `:""}
    `}_renderInputNilai(){const t=this._serverData.roster||[];if(t.length===0)return o`
        <h2 style="margin-top:0; color:#1e293b;">✏️ Input Nilai Manual</h2>
        <div class="empty-state">
          Belum ada data siswa untuk diisi nilainya. Muat data melalui tab
          Pantauan Guru terlebih dahulu.
        </div>
      `;const e=this._draftNilai||{};return o`
      <h2 style="margin-top:0; color:#1e293b;">✏️ Input Nilai Manual</h2>
      <p style="color:#64748b; font-size:13px;">
        Isi Nilai Akhir, UTS, UAS, dan/atau <strong>Tugas/Formatit</strong> per siswa lalu klik
        <strong>☁️ Kirim</strong> untuk mencatatnya ke sheet <code>Nilai Manual</code>.
        Nilai Tugas/Formatit akan masuk kategori <code>formatif</code> di sheet <code>db_asesmen</code>.
      </p>
      <div class="nilai-table-wrap">
        <table class="nilai-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Siswa</th>
              <th>Kelas</th>
              <th>Nilai Akhir</th>
              <th>UTS</th>
              <th>UAS</th>
              <th>Tugas/Formatit</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${t.map((a,i)=>{const s=e[i]||{},r=s.nilaiAkhir!=null||s.uts!=null||s.uas!=null||s.tugas!=null,d=a.studentId||a._sid;return o`
                <tr>
                  <td>${a.absen||i+1}</td>
                  <td>
                    <strong>${a.nama||"-"}</strong>
                    <div class="student-sub">${a.nis||""}</div>
                  </td>
                  <td>${a.kelas||"-"}</td>
                  <td>
                    <input class="nilai-input" type="number" min="0" max="100" placeholder="-" .value=${s.nilaiAkhir??""}
                      @input=${l=>this._ubahNilai(i,"nilaiAkhir",l.target.value)} />
                  </td>
                  <td>
                    <input class="nilai-input" type="number" min="0" max="100" placeholder="-" .value=${s.uts??""}
                      @input=${l=>this._ubahNilai(i,"uts",l.target.value)} />
                  </td>
                  <td>
                    <input class="nilai-input" type="number" min="0" max="100" placeholder="-" .value=${s.uas??""}
                      @input=${l=>this._ubahNilai(i,"uas",l.target.value)} />
                  </td>
                  <td>
                    <input class="nilai-input" type="number" min="0" max="100" placeholder="-" .value=${s.tugas??""}
                      @input=${l=>this._ubahNilai(i,"tugas",l.target.value)} />
                  </td>
                  <td>
                    <button class="retry-btn" ?disabled=${!r||!d} @click=${()=>this._kirimNilaiSiswa(i)}>☁️ Kirim</button>
                  </td>
                </tr>
              `})}
          </tbody>
        </table>
      </div>
      ${this._note?o`<div class="note-chip">${this._note}</div>`:""}
    `}_ubahNilai(t,e,a){this._draftNilai||(this._draftNilai={}),this._draftNilai[t]={...this._draftNilai[t]||{},[e]:a},this.requestUpdate()}async _kirimNilaiSiswa(t){const e=(this._serverData.roster||[])[t],a=(this._draftNilai||{})[t]||{};if(!e)return;const i=e.studentId||e._sid;if(!i){this._note="\u26A0\uFE0F Student ID tidak ditemukan untuk siswa ini.",this.requestUpdate();return}const s=[["nilaiAkhir","nilaiAkhir"],["uts","uts"],["uas","uas"],["tugas","formatif"]].filter(([d])=>a[d]!=null&&String(a[d]).trim()!=="").map(([d,l])=>({kategori:l,skor:Math.max(0,Math.min(100,this._num(a[d])))}));if(!s.length){this._note="Isi minimal satu nilai (Nilai Akhir/UTS/UAS/Tugas) terlebih dahulu.",this.requestUpdate();return}if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur (tab Atur).",this.requestUpdate();return}this._note="\u2601\uFE0F Mengirim nilai ke backend\u2026",this.requestUpdate();const r=(await Promise.all(s.map(d=>this._apiGet({action:"setManualScore",studentId:i,kategori:d.kategori,skor:d.skor})))).filter(d=>d&&d.status&&d.status!=="ok");r.length?this._note="\u26A0\uFE0F Sebagian gagal: "+String(r[0]&&r[0].message||"cek konsol."):(this._simpanEditNilai(i,{nilaiAkhir:this._num(a.nilaiAkhir),uts:this._num(a.uts),uas:this._num(a.uas),tugas:this._num(a.tugas)}),this._note=`\u2705 ${s.map(d=>d.kategori).join(", ")} untuk ${e.nama||i} tercatat di sheet Nilai Manual.`),this.requestUpdate()}_renderEditSoal(){const t=Array.isArray(this.questions)?this.questions.length:0,e=this._soalText!=null?this._soalText:t?JSON.stringify(this.questions,null,2):"";return o`
      <h2 style="margin-top:0; color:#1e293b;">🗂️ Edit Soal & Bank Soal</h2>
      <div class="note-chip" style="margin-bottom:12px;">
        ${t?`${t} soal aktif di properti <code>questions</code> (terlihat di HAX editor).`:"Belum ada soal di properti <code>questions</code> \u2014 muat dari bank soal atau tempel JSON."}
      </div>
      <textarea class="soal-textarea" rows="14" placeholder='[{"question":"…","choices":["A","B","C","D"],"correctIndex":0}]'
        .value=${e} @input=${a=>this._soalText=a.target.value}></textarea>
      <div class="toolbar">
        <div class="tb-action">
          <button class="retry-btn"
            @click=${()=>{this._soalText=Array.isArray(this.questions)?JSON.stringify(this.questions,null,2):""}}>↩️ Muat Soal Aktif</button>
          <button class="retry-btn" @click=${()=>this._muatBankSoal()}>📥 Muat Bank Soal (Backend)</button>
          <button class="retry-btn" @click=${()=>this._terapkanSoal()}>✅ Gunakan Soal Ini</button>
        </div>
      </div>
      ${this._note?o`<div class="note-chip">${this._note}</div>`:""}
    `}_muatBankSoal(){if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur (tab Atur).",this.requestUpdate();return}this._note="\u{1F4E5} Mengambil bank soal dari backend\u2026",this.requestUpdate(),this._apiGet({action:"getBankSoal"}).then(t=>{const e=t&&Array.isArray(t.questions)?t.questions:t&&Array.isArray(t.soal)?t.soal:t&&Array.isArray(t.data)?t.data:null;e&&e.length?(this._soalText=JSON.stringify(e,null,2),this._note=`\u2705 ${e.length} soal dari sheet Bank Soal dimuat ke editor.`):this._note="\u2139\uFE0F Bank soal kosong \u2014 belum ada data di sheet Bank Soal.",this.requestUpdate()}).catch(()=>{this._note="\u26A0\uFE0F Gagal memuat bank soal dari backend.",this.requestUpdate()})}_terapkanSoal(){const t=(this._soalText||"").trim();if(!t){this._note="\u26A0\uFE0F Form kosong. Tempel JSON soal terlebih dahulu.",this.requestUpdate();return}try{let e=JSON.parse(t);if(e&&typeof e=="object"&&!Array.isArray(e))if(Array.isArray(e.questions))e=e.questions;else throw new Error("bukan array");if(!Array.isArray(e))throw new Error("bukan array");this.questions=e,this._note=`\u2705 ${e.length} soal diterapkan ke properti questions & tab Evaluasi Kuis.`}catch{this._note="\u26A0\uFE0F JSON tidak valid. Format: array soal (lihat deskripsi properti questions di HAX editor)."}this.requestUpdate()}_renderPengaturan(){return o`
      <h2 style="margin-top:0; color:#1e293b;">⚙️ Atur & Konfigurasi</h2>
      <div class="card-panel">
        <div class="set-row">
          <div>
            <div class="set-title">URL Backend (Apps Script)</div>
            <div class="set-sub">Endpoint semua aksi data (roster, nilai, kuis, forum, bank soal).</div>
          </div>
          <input class="set-input" .value=${this.appsScriptUrl||""} placeholder="https://script.google.com/macros/s/…/exec"
            @change=${t=>this.appsScriptUrl=t.target.value.trim()} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">URL Forum / Tugas</div>
            <div class="set-sub">Opsional; bila kosong memakai URL Backend.</div>
          </div>
          <input class="set-input" .value=${this.forumApiUrl||""} placeholder="Kosongkan untuk memakai backend"
            @change=${t=>this.forumApiUrl=t.target.value.trim()} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">KD / Materi (sheet tujuan)</div>
            <div class="set-sub">Nama pertemuan pencatatan kuis & aktivitas.</div>
          </div>
          <input class="set-input" .value=${this.kdMateri||""} placeholder="cth: Bab-1"
            @change=${t=>this.kdMateri=t.target.value.trim()} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Judul Kuis</div>
            <div class="set-sub">Tampil pada tab Evaluasi Kuis.</div>
          </div>
          <input class="set-input" .value=${this.judulKuis||""} placeholder="Evaluasi Kuis Interaktif"
            @change=${t=>this.judulKuis=t.target.value.trim()} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Kelas (Filter Guru)</div>
            <div class="set-sub">Kosongkan untuk semua kelas.</div>
          </div>
          <input class="set-input" .value=${this.kelas||""} placeholder="cth: XI-1"
            @change=${t=>this.kelas=t.target.value.trim()} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Pindah Mode di Toolbar</div>
            <div class="set-sub">Nonaktifkan pada halaman siswa agar mode terkunci.</div>
          </div>
          <label class="switch-check">
            <input type="checkbox" ?checked=${this.allowModeSwitch}
              @change=${t=>this.allowModeSwitch=t.target.checked} />
            Izinkan ganti mode Guru/Siswa
          </label>
        </div>
      </div>

      <!-- Generate Rapor Section -->
      <div class="card-panel" style="margin-top: var(--ddd-spacing-4);">
        <h3 style="margin-top:0; color:#1e293b;">📊 Generate Rapor</h3>
        <p style="color:#64748b; font-size:13px;">
          Generate laporan akumulasi nilai dari data di sheet <code>db_asesmen</code>.
          Data akan tertulis di sheet <code>Akumulasi_Nilai_Rapor</code>.
        </p>
        <div class="set-row">
          <button class="retry-btn" @click=${this._generateRapor} ?disabled=${!this.appsScriptUrl}>
            🔄 Generate Rapor Sekarang
          </button>
          ${this._raporStatus?o`<span style="margin-left:var(--ddd-spacing-3); color:#16a34a;">${this._raporStatus}</span>`:f}
        </div>
      </div>

      <!-- Bobot Nilai Section -->
      <div class="card-panel" style="margin-top: var(--ddd-spacing-4);">
        <h3 style="margin-top:0; color:#1e293b;">⚖️ Pengaturan Bobot Nilai</h3>
        <p style="color:#64748b; font-size:13px;">
          Keterampilan melekat di dalam Tujuan Pembelajaran (TP) — tidak dipisah.
          Nilai akhir LM sudah termasuk skor tulis + skor performa.
        </p>
        <p style="color:#64748b; font-size:13px;">
          <strong>Rumus:</strong> Nilai Rapor = (Σ LM × bobot_LM + STS × bobot_STS + SAS × bobot_SAS) / Σ bobot
        </p>
        <div class="set-row">
          <div>
            <div class="set-title">Bobot LM per TP (Sumatif)</div>
            <div class="set-sub">Bobot untuk setiap LM/UH (default: 3)</div>
          </div>
          <input class="nilai-input" type="number" min="0" max="10" .value=${this._bobotLM??3}
            @change=${t=>this._bobotLM=parseInt(t.target.value)||3} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Bobot Tugas/Formatif</div>
            <div class="set-sub">Bobot untuk nilai tugas dan formatif (default: 1)</div>
          </div>
          <input class="nilai-input" type="number" min="0" max="10" .value=${this._bobotTugas??1}
            @change=${t=>this._bobotTugas=parseInt(t.target.value)||1} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Bobot STS (UTS)</div>
            <div class="set-sub">Bobot untuk Sumatif Tengah Semester (default: 2). 0 = tidak masuk rapor.</div>
          </div>
          <input class="nilai-input" type="number" min="0" max="10" .value=${this._bobotSTS??2}
            @change=${t=>this._bobotSTS=parseInt(t.target.value)||0} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Bobot UAS (SAS)</div>
            <div class="set-sub">Bobot untuk Sumatif Akhir Semester (default: 2). 0 = tidak masuk rapor.</div>
          </div>
          <input class="nilai-input" type="number" min="0" max="10" .value=${this._bobotSAS??2}
            @change=${t=>this._bobotSAS=parseInt(t.target.value)||0} />
        </div>
        <div class="set-row" style="margin-top: var(--ddd-spacing-4);">
          <button class="retry-btn" @click=${this._simpanBobot} ?disabled=${!this.appsScriptUrl}>
            💾 Simpan Pengaturan Bobot
          </button>
          <button class="retry-btn" style="background:#475569;" @click=${this._muatBobot}>
            🔄 Muat Bobot Tersimpan
          </button>
        </div>
      </div>

      <!-- Buka Kunci Kuis (Guru) -->
      <div class="card-panel" style="margin-top: var(--ddd-spacing-4); border-left: 4px solid #f59e0b;">
        <h3 style="margin-top:0; color:#1e293b;">🔓 Buka Kunci Soal Terkunci (Guru)</h3>
        <p style="color:#64748b; font-size:13px;">Jika siswa terkunci di <code>LM1</code> dan tidak bisa remidi, buka via tombol di bawah atau via <code>latihan-kuis</code> (mode guru). Kuis remidi <b>tidak terkunci</b> otomatis jika <code>remidi-mode</code> aktif.</p>
        <div class="set-row">
          <div>
            <div class="set-title">Student ID</div>
            <div class="set-sub">Kosongkan = pakai Student ID aktif (${this.studentId||"-"})</div>
          </div>
          <input class="set-input" .value=${this._unlockSid||""} placeholder="STD-..."
            @input=${t=>this._unlockSid=t.target.value.trim()} />
        </div>
        <div class="set-row">
          <div>
            <div class="set-title">Kode Materi / LM</div>
            <div class="set-sub">Mis. LM1, LM2 — sama dengan <code>kd-materi</code></div>
          </div>
          <input class="set-input" .value=${this._unlockMateri||""} placeholder="LM1"
            @input=${t=>this._unlockMateri=t.target.value.trim()} />
        </div>
        <div class="set-row" style="margin-top: var(--ddd-spacing-3);">
          <button class="retry-btn" style="background:#f59e0b;" @click=${this._bukaKunciKuisGuru} ?disabled=${!this.appsScriptUrl}>🔓 Buka Kunci</button>
          ${this._unlockMsg?o`<span style="margin-left:12px; font-size:13px; color:${this._unlockMsg.startsWith("\u2705")?"#16a34a":"#dc2626"};">${this._unlockMsg}</span>`:f}
        </div>
        <p style="font-size:11px; color:#94a3b8; margin:8px 0 0;">Properties remidi: <code>remidi-mode</code> + <code>remidi-soal-url</code> (sama file + <code>shuffle-choices</code>) → saat <code>score &lt; kkm</code> tombol <code>Mulai Remidi</code> muncul dan <b>lewati kunci</b>.</p>
      </div>

      <div class="note-chip">
        Perubahan diterapkan langsung pada properti komponen — tersimpan bila halaman
        disimpan melalui editor HAX.
      </div>
    `}async _bukaKunciKuisGuru(){const t=(this._unlockSid||this.studentId||"").trim(),e=(this._unlockMateri||this.kdMateri||"LM1").trim();if(!t){this._unlockMsg="\u26A0\uFE0F Isi Student ID dulu.",this.requestUpdate();return}if(!this.appsScriptUrl){this._unlockMsg="\u26A0\uFE0F URL Apps Script belum diatur.",this.requestUpdate();return}this._unlockMsg="\u23F3 Membuka...",this.requestUpdate();try{const a=new URLSearchParams({action:"resetQuizLock",studentId:t,kdMateri:e}),i=await(await fetch(`${this.appsScriptUrl}?${a.toString()}`,{method:"GET",mode:"cors"})).json();if(i&&i.status==="ok"){this._unlockMsg=`\u2705 Kunci ${e} dibuka \u2014 ${i.deleted||0} sesi dihapus. Siswa bisa ulang/remidi.`;try{localStorage.removeItem(`latihan_kuis_attempt_${t}_${e}`),localStorage.removeItem(`latihan_kuis_time_${t}_${e}`)}catch{}}else this._unlockMsg="\u26A0\uFE0F Gagal: "+(i.message||"unknown")}catch(a){this._unlockMsg="\u26A0\uFE0F Error: "+a.message}this.requestUpdate()}async _generateRapor(){if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur (tab Atur).",this.requestUpdate();return}this._raporStatus="\u23F3 Membuat laporan...",this._note="",this.requestUpdate();try{const t=await this._apiGet({action:"generateReport"});t&&t.status==="ok"?(this._raporStatus=`\u2705 Rapor berhasil dibuat. ${t.students||0} siswa diproses.`,this._note="\u2705 Rapor berhasil di-generate. Lihat sheet Akumulasi_Nilai_Rapor."):(this._raporStatus="",this._note="\u26A0\uFE0F Gagal: "+(t&&t.message?t.message:"cek konsol."))}catch(t){this._raporStatus="",this._note="\u26A0\uFE0F Error: "+t.message}this.requestUpdate()}async _simpanBobot(){if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur (tab Atur).",this.requestUpdate();return}const t={tugas:this._bobotTugas??1,lm:this._bobotLM??3,sts:this._bobotSTS??2,sas:this._bobotSAS??2};this._note="\u23F3 Menyimpan bobot...",this.requestUpdate();try{const e=await this._apiGet({action:"saveBobot",...t});e&&e.status==="ok"?this._note="\u2705 Bobot tersimpan. Generate rapor untuk melihat hasil.":this._note="\u26A0\uFE0F Gagal: "+(e&&e.message?e.message:"cek konsol.")}catch(e){this._note="\u26A0\uFE0F Error: "+e.message}this.requestUpdate()}async _muatBobot(){if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur (tab Atur).",this.requestUpdate();return}this._note="\u23F3 Memuat bobot...",this.requestUpdate();try{const t=await this._apiGet({action:"getBobot"});t&&t.status==="ok"&&t.bobot?(this._bobotTugas=t.bobot.tugas??1,this._bobotLM=t.bobot.lm??3,this._bobotSTS=t.bobot.sts??2,this._bobotSAS=t.bobot.sas??2,this._note="\u2705 Bobot dimuat."):this._note="\u2139\uFE0F Belum ada bobot tersimpan, menggunakan default."}catch(t){this._note="\u26A0\uFE0F Error: "+t.message}this.requestUpdate()}_renderPantauanGuru(){const t=this._serverData.roster||[];if(t.length===0)return o`
        <h2 style="margin-top: 0; color: #1e293b;">Peta Pantauan & Rekapitulasi Kelas</h2>
        <div class="empty-state">
          ${this._loading?"Memuat data siswa\u2026":this.appsScriptUrl?o`
                  Belum ada data pantauan dari backend.<br />
                  URL aktif: <code>${this.appsScriptUrl}</code>
                  ${this._serverError?o`<span class="err-chip">⚠️ ${this._serverError}</span>`:o`<span class="err-chip">ℹ️ Pastikan sheet Users & Akumulasi Nilai Rapor terisi, dan backend sudah deploy lib/codev5.gs (Deploy > New version).</span>`}
                  <button class="retry-btn" @click=${()=>this.fetchDataKomplit()} ?disabled=${this._loading}>
                    🔄 Muat Ulang Data
                  </button>
                `:o`
                  URL Apps Script belum diatur. Isi properti <code>apps-script-url</code> (via HAX editor atau atribut HTML).
                `}
        </div>
      `;const e=t.filter(r=>this._num(r.kehadiran)>=60).length,a=t.filter(r=>this._num(r.nilaiAkhir)<75).length,i=t.length?Math.round(t.reduce((r,d)=>r+this._num(d.nilaiAkhir),0)/t.length):0,s=String(this.kelas||"").trim()?`Filter: ${this.kelas}`:"Semua kelas";return o`
      <h2 style="margin-top: 0; color: #1e293b;">Peta Pantauan & Rekapitulasi Kelas</h2>
      <div class="note-chip" style="margin-bottom:12px;">Menampilkan ${t.length} siswa — ${s}. Kosongkan filter Kelas di tab Atur untuk melihat semua.</div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon i-indigo">👥</div>
          <div class="stat-meta">
            <div class="stat-value">${t.length}</div>
            <div class="stat-label">Total Siswa Terpantau</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon i-emerald">📈</div>
          <div class="stat-meta">
            <div class="stat-value">${i}</div>
            <div class="stat-label">Rata-rata Nilai Kelas</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon i-amber">✅</div>
          <div class="stat-meta">
            <div class="stat-value">${e}</div>
            <div class="stat-label">Kehadiran ≥ 60%</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon i-rose">⚠️</div>
          <div class="stat-meta">
            <div class="stat-value">${a}</div>
            <div class="stat-label">Perlu Bimbingan (&lt; 75)</div>
          </div>
        </div>
      </div>

      <div class="grid-heatmap">
        ${t.map(r=>{const d=this._num(r.nilaiAkhir),l=d>=75?"lvl-high":d>=60?"lvl-mid":"lvl-low",p=d>=75?{cls:"badge-good",txt:`${r.emoji||"\u2705"} LULUS`}:d>=60?{cls:"badge-warn",txt:`${r.emoji||"\u26A0\uFE0F"} PROSES`}:{cls:"badge-bad",txt:`${r.emoji||"\u{1F4ED}"} REMEDI`},c=(r.nama||"?").trim().charAt(0).toUpperCase(),m=["#4f46e5","#0891b2","#059669","#d97706","#db2777","#7c3aed"][(r.absen||"0").toString().length%6];return o`
            <div class="card-siswa ${l}">
              <div class="student-head">
                <div class="avatar-circle" style="background:${m};">${c}</div>
                <div>
                  <div class="student-name">${r.absen?r.absen+". ":""}${r.nama||"-"}</div>
                  <div class="student-sub">${r.kelas||"-"} • ${r.nis||""}</div>
                </div>
              </div>
              <div class="metric-mini">
                <div>📖 ${this._num(r.totalActivities)} aktivitas</div>
                <div>🏅 ${r.grade||"N/A"}</div>
                <div>🎯 ${this._num(r.kehadiran)}% hadir</div>
              </div>
              <div class="progress-track">
                <div class="progress-bar" style="width:${Math.min(d,100)}%;"></div>
              </div>
              <div class="score-row">
                <span>Nilai Akhir</span>
                <span>${d}</span>
              </div>
              <span class="badge-status ${p.cls}">${p.txt}</span>
            </div>
          `})}
      </div>
    `}_materiCol(){const t=String(this.kdMateri||"").trim(),e=t.match(/^LM\s*0?(\d+)$/i);if(e)return`LM${e[1]}`;const a=t.match(/^Pertemuan\s*0?(\d+)$/i);return a?`LM${a[1]}`:/^STS$/i.test(t)?"STS":/^SAS$/i.test(t)?"SAS":""}_renderLeaderboard(){let t=this._serverData.leaderboard||[];if(t.length===0)return o`
        <h2 style="color:#1e293b;">🏆 Peringkat Nilai Bimbingan Kelas</h2>
        <div class="empty-state">
          Belum ada data leaderboard (sheet <strong>Rangkuman</strong> kosong).
          ${this._serverError?o`<span class="err-chip">⚠️ ${this._serverError}</span>`:""}
          ${this._serverError?o`<div>URL aktif: <code>${this.appsScriptUrl}</code></div>`:""}
          <div><button class="retry-btn" @click=${()=>this.fetchDataKomplit()} ?disabled=${this._loading}>🔄 Muat Ulang Data</button></div>
        </div>
      `;const e=this._canonKelas(this._peringkatKelas||this.kelas||"");e&&(t=t.filter(c=>this._canonKelas(this._rowValue(c,"Kelas"))===e));const a=this._materiCol(),i=new Map((this._serverData.roster||[]).map(c=>[String(c.studentId),c])),s=t.map((c,m)=>{const A=a?this._num(this._rowValue(c,a)):null,T=A!=null&&A>0?A:this._num(this._rowValue(c,"Nilai_Rapor")||this._rowValue(c,"Rata-rata Skor")),k=String(this._rowValue(c,"StudentID")||this._rowValue(c,"Student ID")||""),C=i.get(k)||(this._serverData.roster||[]).find(R=>String(R.nis)===String(this._rowValue(c,"NIS")))||null,x=String(this._rowValue(c,"Absen")||C?.absen||"").trim();return{...c,_rank:m+1,_nilai:T,_lmNilai:A,_nama:String(this._rowValue(c,"Nama")||C?.nama||"-"),_absen:x,_kelas:String(this._rowValue(c,"Kelas")||C?.kelas||""),_totalKuis:this._num(this._rowValue(c,"Total Kuis")||C?.totalKuis||0),_totalAktivitas:this._num(this._rowValue(c,"Total Aktivitas")||C?.totalActivities||0),_reading:this._num(this._rowValue(c,"Reading")),_quizAct:this._num(this._rowValue(c,"Quiz Activity")),_forum:this._num(this._rowValue(c,"Discussion")),_status:String(this._rowValue(c,"Status Kuis Terakhir")||C?.grade||"N/A"),_pertemuan:this._num(this._rowValue(c,"Jumlah Pertemuan"))}}).map((c,m)=>({...c,_rank:m+1})),r=this._leaderSortKey&&this._leaderSortKey!=="nilai"?this._getSortedLeaderboardRows(s):[...s].sort((c,m)=>(m._nilai||0)-(c._nilai||0)).map((c,m)=>({...c,_rank:m+1})),d=r[0]||{_nama:"-",_nilai:0},l=r[1]||{_nama:"-",_nilai:0},p=r[2]||{_nama:"-",_nilai:0};return o`
      <h2 style="color:#1e293b;">🏆 Peringkat Nilai Bimbingan Kelas ${a?o`<span style="background:#EEF2FF; color:#4338CA; border:1px solid #C7D2FE; border-radius:999px; padding:4px 10px; font-size:11px; margin-left:8px;">Filter: ${a}${e?` \u2022 Kelas ${this._peringkatKelas||this.kelas}`:""}</span>`:e?o`<span style="background:#EEF2FF; color:#4338CA; border:1px solid #C7D2FE; border-radius:999px; padding:4px 10px; font-size:11px; margin-left:8px;">Kelas ${this._peringkatKelas||this.kelas}</span>`:""}</h2>
      <div class="podium-section">
        <div class="podium-box rank-2">
          <div class="podium-medal">🥈</div>
          <div class="podium-name">${l._nama}</div>
          <div class="podium-score">${l._nilai}%</div>
          <div style="font-size:11px;color:#94a3b8;">${this._num(l._totalKuis)} kuis • ${this._num(l._totalAktivitas)} aktivitas</div>
        </div>
        <div class="podium-box rank-1">
          <div class="podium-medal">🥇</div>
          <div class="podium-name">${d._nama}</div>
          <div class="podium-score">${d._nilai}%</div>
          <div style="font-size:11px;color:#94a3b8;">${this._num(d._totalKuis)} kuis • ${this._num(d._totalAktivitas)} aktivitas</div>
        </div>
        <div class="podium-box rank-3">
          <div class="podium-medal">🥉</div>
          <div class="podium-name">${p._nama}</div>
          <div class="podium-score">${p._nilai}%</div>
          <div style="font-size:11px;color:#94a3b8;">${this._num(p._totalKuis)} kuis • ${this._num(p._totalAktivitas)} aktivitas</div>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th @click=${()=>this._sortLeaderboard("nama")} style="cursor:pointer; user-select:none;">Nama ${this._leaderSortKey==="nama"?this._leaderSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
              <th @click=${()=>this._sortLeaderboard("kelas")} style="cursor:pointer; user-select:none;">Kelas ${this._leaderSortKey==="kelas"?this._leaderSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
              <th @click=${()=>this._sortLeaderboard("absen")} style="cursor:pointer; user-select:none; background:${this._leaderSortKey==="absen"?"#EEF2FF":"transparent"};">Absen ${this._leaderSortKey==="absen"?this._leaderSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
              <th>Kuis</th>
              <th @click=${()=>this._sortLeaderboard("nilai")} style="cursor:pointer; user-select:none;">${a||"Rata-rata Skor"} ${this._leaderSortKey==="nilai"?this._leaderSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
              <th>Aktivitas</th>
              <th>📖</th>
              <th>📝</th>
              <th>💬</th>
              <th>Pertemuan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${r.map(c=>o`
                <tr class="${c._rank<=3?"highlight-row":""}">
                  <td><span class="rank-chip ${c._rank===1?"top":""}">${c._rank}</span></td>
                  <td><strong>${c._nama}</strong></td>
                  <td>${c._kelas}</td>
                  <td style="text-align:center; font-weight:700;">${c._absen||"-"}</td>
                  <td>${c._totalKuis}</td>
                  <td><strong>${c._nilai}%</strong></td>
                  <td>${c._totalAktivitas}</td>
                  <td>${c._reading}</td>
                  <td>${c._quizAct}</td>
                  <td>${c._forum}</td>
                  <td>${c._pertemuan}</td>
                  <td>
                    <span class="badge-status ${c._status==="LULUS"?"badge-good":c._status==="TIDAK LULUS"?"badge-bad":"badge-warn"}">${c._status}</span>
                  </td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}_opsiKelas(){const t=new Map,e=new Set,a=(i,s)=>{const r=String(i||"").trim();if(!r)return;const d=this._canonKelas(r);if(d&&(s&&e.add(d),!t.has(d))){let l=r.toUpperCase().replace(/\s+/g," ").replace(/\s*-\s*/g,"-").trim();l.includes(" ")&&!l.includes("-")&&(l=l.replace(/\s+/g,"-")),/^X\d+$/i.test(l)&&(l=l.replace(/^X/i,"X-")),t.set(d,l)}};return(this._serverData.roster||[]).forEach(i=>a(i.kelas,!0)),(this._serverData.leaderboard||[]).forEach(i=>{const s=this._rowValue(i,"Kelas"),r=this._canonKelas(s);r&&(e.size>0&&!e.has(r)||a(s,!1))}),this.kelas&&a(this.kelas,!0),this._peringkatKelas&&a(this._peringkatKelas,!0),[...t.values()].sort()}_bacaEditNilai(t){try{const e=JSON.parse(localStorage.getItem("a3_v5_peringkat_edit")||"{}");return e&&e[t]?e[t]:null}catch{return null}}_simpanEditNilai(t,e){try{const a=JSON.parse(localStorage.getItem("a3_v5_peringkat_edit")||"{}");a[t]={...e},localStorage.setItem("a3_v5_peringkat_edit",JSON.stringify(a))}catch{}}_hapusEditNilai(t){try{const e=JSON.parse(localStorage.getItem("a3_v5_peringkat_edit")||"{}");delete e[t],localStorage.setItem("a3_v5_peringkat_edit",JSON.stringify(e))}catch{}}_buildPeringkat(){let t=this._serverData.leaderboard||[];const e=this._serverData.roster||[];(!t||t.length===0)&&e.length>0&&(t=e.map(i=>({"Student ID":i.studentId||i._sid||"",Nama:i.nama||"",Kelas:i.kelas||"",Absen:i.absen||"",NIS:i.nis||"","Rata-rata Skor":i.nilaiAkhir??i.nilaiRapor??i.uh??0,Nilai_Rapor:i.nilaiAkhir??i.nilaiRapor??0,"Status Kuis Terakhir":i.grade||i.intervalCapaian||"N/A",Interval_Capaian:i.grade||i.intervalCapaian||"N/A","Skor UTS":i.uts??i.sts??0,"Skor UAS":i.uas??i.sas??0,"Total Kuis":i.totalKuis??0,"Total Aktivitas":i.totalActivities??0,"Jumlah Pertemuan":i.pertemuan??0})));const a={};return e.forEach(i=>{i.studentId&&(a[i.studentId]=i)}),t.map(i=>{const s=String(this._rowValue(i,"Student ID")||""),r=a[s]||e.find(p=>String(p.nis)===String(this._rowValue(i,"NIS")))||null,d=this._bacaEditNilai(s),l=(p,c)=>d&&d[p]!==""&&d[p]!==void 0?this._num(d[p]):this._num(c);return{_sid:s,_nama:String(this._rowValue(i,"Nama")||r&&r.nama||"-"),_kelas:String(this._rowValue(i,"Kelas")||r&&r.kelas||""),_absen:String(this._rowValue(i,"Absen")||r&&r.absen||""),_nis:String(this._rowValue(i,"NIS")||r&&r.nis||""),_totalKuis:this._num(this._rowValue(i,"Total Kuis")),_rata:this._num(this._rowValue(i,"Rata-rata Skor")),_tinggi:this._num(this._rowValue(i,"Skor Tertinggi")),_rendah:this._num(this._rowValue(i,"Skor Terendah")),_aktivitas:this._num(this._rowValue(i,"Total Aktivitas")),_reading:this._num(this._rowValue(i,"Reading")),_quizAct:this._num(this._rowValue(i,"Quiz Activity")),_assignment:this._num(this._rowValue(i,"Assignment")),_discussion:this._num(this._rowValue(i,"Discussion")),_download:this._num(this._rowValue(i,"Download")),_uts:l("uts",this._rowValue(i,"Skor UTS")),_uas:l("uas",this._rowValue(i,"Skor UAS")),_pertemuan:this._num(this._rowValue(i,"Jumlah Pertemuan")),_status:String(this._rowValue(i,"Status Kuis Terakhir")||"N/A"),_kehadiran:l("kehadiran",r&&r.kehadiran),_uh:l("uh",r&&r.uh),_sikap:l("sikap",r&&r.sikap),_keterampilan:l("keterampilan",r&&r.keterampilan),_nilaiAkhir:l("nilaiAkhir",r&&r.nilaiAkhir),_grade:(d&&d.grade&&String(d.grade)!==""||r&&r.grade)&&(d&&d.grade||r.grade)||"N/A"}}).sort((i,s)=>this._num(i._rata)<this._num(s._rata)?1:-1)}_filterPeringkat(t){const e=this._canonKelas(this._peringkatKelas||this.kelas||"");return e?t.filter(a=>this._canonKelas(a._kelas)===e):t}_ubahFilterKelas(t){this._peringkatKelas=t,this.requestUpdate()}_renderPeringkatBimbingan(){const t=this._filterPeringkat(this._buildPeringkat()),e=this._getSortedPeringkatRows(t),a=this._opsiKelas(),i=this._peringkatKelas||this.kelas||"",s=(this._serverData.leaderboard||[]).length>0;return o`
      <h2 style="margin-top:0; color:#1e293b;">🏆 Peringkat Nilai Bimbingan Kelas</h2>

      <div class="toolbar">
        <div class="tb-filter">
          <label for="filter-kelas">Filter Kelas</label>
          <select id="filter-kelas" class="filter-select" .value=${i}
            @change=${r=>this._ubahFilterKelas(r.target.value)}>
            <option value="">Semua Kelas</option>
            ${a.map(r=>o`<option value=${r}>${r}</option>`)}
          </select>
        </div>
        <div class="tb-action">
          <button class="retry-btn" @click=${()=>this._eksporNilai("xls")}>⬇️ XLS</button>
          <button class="retry-btn" @click=${()=>this._eksporNilai("csv")}>⬇️ CSV</button>
          <button class="retry-btn" @click=${()=>this._eksporNilai("copas")}>📋 Siap Copas</button>
        </div>
        ${this._note?o`<div class="note-chip">${this._note}</div>`:""}
      </div>

      ${this._copasTSV!==null?this._renderCopas():""}

      ${this._detailSiswa?this._renderDetailSiswa():""}

      ${this.appsScriptUrl?s?e.length===0?o`
                <div class="empty-state">
                  Tidak ada siswa pada kelas <strong>${i||"semua kelas"}</strong>.
                </div>
              `:o`
                <div class="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th @click=${()=>this._sortPeringkat("nama")} style="cursor:pointer;">Nama ${this._peringkatSortKey==="nama"?this._peringkatSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
                        <th @click=${()=>this._sortPeringkat("kelas")} style="cursor:pointer;">Kelas ${this._peringkatSortKey==="kelas"?this._peringkatSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
                        <th @click=${()=>this._sortPeringkat("absen")} style="cursor:pointer; background:${this._peringkatSortKey==="absen"?"#EEF2FF":"transparent"};">Absen ${this._peringkatSortKey==="absen"?this._peringkatSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
                        <th>Kuis</th>
                        <th @click=${()=>this._sortPeringkat("rata")} style="cursor:pointer;">Rata-rata ${this._peringkatSortKey==="rata"?this._peringkatSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
                        <th>Aktivitas</th>
                        <th>UTS</th>
                        <th>UAS</th>
                        <th @click=${()=>this._sortPeringkat("nilaiAkhir")} style="cursor:pointer;">Nilai Akhir ${this._peringkatSortKey==="nilaiAkhir"?this._peringkatSortDir==="asc"?"\u25B2":"\u25BC":"\u2195"}</th>
                        <th>Grade</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${e.map((r,d)=>o`
                          <tr>
                            <td><span class="rank-chip ${d===0?"top":""}">${d+1}</span></td>
                            <td>
                              <button class="nama-btn" @click=${()=>this._bukaDetail(r)}>
                                ${r._absen?r._absen+". ":""}${r._nama}
                              </button>
                            </td>
                            <td>${r._kelas}</td>
                            <td>${r._absen}</td>
                            <td>${r._totalKuis}</td>
                            <td><strong>${r._rata}%</strong></td>
                            <td>${r._aktivitas}</td>
                            <td>${r._uts}</td>
                            <td>${r._uas}</td>
                            <td><strong>${r._nilaiAkhir}</strong></td>
                            <td>
                              <span class="grade-chip grade-${r._grade.charAt(0)}">${r._grade}</span>
                            </td>
                            <td>
                              <span class="badge-status ${r._status==="LULUS"?"badge-good":r._status==="TIDAK LULUS"?"badge-bad":"badge-warn"}">${r._status}</span>
                            </td>
                          </tr>
                        `)}
                    </tbody>
                  </table>
                </div>
                <p style="font-size:11px; color:#94a3b8; margin-top:8px;">
                  💡 Klik nama siswa untuk lihat rincian & edit nilai. UTS/UAS dikirim ke
                  sheet <strong>Nilai Manual</strong> via <code>action=setManualScore</code>.
                </p>
              `:o`
              <div class="empty-state">
                Belum ada data Rangkuman dari backend untuk peringkat bimbingan.
                Pastikan sheet <strong>Rangkuman</strong> terisi atau jalankan
                <code>action=generateReport</code> pada backend.
                ${this._serverError?o`<span class="err-chip">⚠️ ${this._serverError}</span>`:""}
                <div>
                  <button class="retry-btn" @click=${()=>this.fetchDataKomplit()} ?disabled=${this._loading}>
                    🔄 Muat Ulang Data
                  </button>
                </div>
              </div>
            `:o`
            <div class="empty-state">
              URL Apps Script belum diatur. Isi properti <code>apps-script-url</code>
              (via HAX editor atau atribut HTML).
            </div>
          `}
    `}_renderCopas(){return o`
      <div class="copas-panel">
        <h4 style="margin:0 0 8px; color:#1e293b;">📋 Nilai siap copas (TSV — paste langsung ke Google Sheets / Excel)</h4>
        <textarea class="copas-area" readonly rows="10" .value=${this._copasTSV||""}></textarea>
        <div class="action-row">
          <button class="retry-btn" @click=${()=>this._salinKopas()}>📋 Salin ke Clipboard</button>
          <button class="retry-btn" style="background:#475569;" @click=${()=>this._copasTSV=null}>✖ Tutup</button>
        </div>
      </div>
    `}async _salinKopas(){try{await navigator.clipboard.writeText(this._copasTSV||""),this._note="\u2705 Nilai tersalin ke clipboard \u2014 siap paste ke Google Sheets/Excel."}catch{this._note="\u26A0\uFE0F Salin manual: pilih teks di kotak lalu tekan Ctrl+C."}this.requestUpdate()}_bukaDetail(t){this._detailSiswa=t,this._editNilai={kehadiran:t._kehadiran,uh:t._uh,uts:t._uts,uas:t._uas,sikap:t._sikap,keterampilan:t._keterampilan,nilaiAkhir:t._nilaiAkhir,grade:t._grade},this._note="",this.requestUpdate()}_renderDetailSiswa(){const t=this._detailSiswa;if(!t||!this._editNilai)return"";const e=this._editNilai,a=(i,s)=>o`
      <label class="dEdit-label" for="d-${i}">${s}</label>
      <input id="d-${i}" class="dEdit-input" type="number" .value=${e[i]??""}
        @input=${r=>this._editNilai={...this._editNilai,[i]:r.target.value}} />
    `;return o`
      <div class="detail-panel">
        <div class="student-head">
          <div class="avatar-circle" style="background:#4f46e5;">${(t._nama||"?").charAt(0).toUpperCase()}</div>
          <div style="flex:1;">
            <div class="student-name">${t._absen?t._absen+". ":""}${t._nama}</div>
            <div class="student-sub">${t._kelas||"-"} • NIS ${t._nis||"-"} • ${t._sid||"-"}</div>
          </div>
          <button class="retry-btn" style="background:#475569; margin:0;" @click=${()=>{this._detailSiswa=null,this._editNilai=null}}>
            ✖ Tutup
          </button>
        </div>
        <div class="dEdit-grid">
          ${a("kehadiran","Kehadiran")}
          ${a("uh","Rata-rata UH")}
          ${a("uts","Skor UTS")}
          ${a("uas","Skor UAS")}
          ${a("sikap","Sikap")}
          ${a("keterampilan","Keterampilan")}
          ${a("nilaiAkhir","Nilai Akhir")}
          <label class="dEdit-label" for="d-grade">Grade</label>
          <input id="d-grade" class="dEdit-input" type="text" .value=${e.grade||""}
            @input=${i=>this._editNilai={...this._editNilai,grade:i.target.value}} />
        </div>
        <div class="detail-stats">
          <span>📊 Rata-rata Skor: <strong>${t._rata}%</strong></span>
          <span>📚 Aktivitas: <strong>${t._aktivitas}</strong></span>
          <span>🧩 Pertemuan: <strong>${t._pertemuan}</strong></span>
        </div>
        <div class="action-row">
          <button class="retry-btn" @click=${this._simpanNilaiLokal}>💾 Simpan Edit (lokal)</button>
          <button class="retry-btn" style="background:#059669;" @click=${()=>this._kirimManualSkor()}>☁️ Kirim UTS/UAS</button>
          <button class="retry-btn" style="background:#4f46e5;" @click=${()=>this._kirimSemuaNilai()}>☁️ Kirim Semua Nilai</button>
          <button class="retry-btn" style="background:#475569;" @click=${()=>{this._hapusEditNilai(t._sid),this._note="\u21A9\uFE0F Edit nilai "+t._nama+" direset ke data backend.",this._detailSiswa=null,this._editNilai=null,this.requestUpdate()}}>
            ↩️ Reset Edit
          </button>
        </div>
      </div>
    `}_simpanNilaiLokal(){const t=this._detailSiswa;if(!t)return;const e=this._editNilai||{};this._simpanEditNilai(t._sid,{kehadiran:e.kehadiran,uh:e.uh,uts:e.uts,uas:e.uas,sikap:e.sikap,keterampilan:e.keterampilan,nilaiAkhir:e.nilaiAkhir,grade:e.grade}),this._note=`\u{1F4BE} Edit tersimpan lokal untuk ${t._nama}. Klik "\u2601\uFE0F Kirim Semua Nilai" untuk sinkronisasi ke sheet Nilai Manual.`,this.requestUpdate()}async _kirimSemuaNilai(){const t=this._detailSiswa,e=this._editNilai||{};if(!t||!t._sid){this._note="\u26A0\uFE0F Student ID tidak ditemukan.",this.requestUpdate();return}if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur.",this.requestUpdate();return}const a=[["kehadiran",e.kehadiran,"Kehadiran"],["uh",e.uh,"Rata-rata UH"],["uts",e.uts,"Skor UTS"],["uas",e.uas,"Skor UAS"],["sikap",e.sikap,"Sikap"],["keterampilan",e.keterampilan,"Keterampilan"],["nilaiAkhir",e.nilaiAkhir,"Nilai Akhir"]].filter(([,s])=>s!=null&&String(s).trim()!=="").map(([s,r,d])=>({kategori:s,label:d,skor:Math.max(0,Math.min(100,this._num(r)))}));if(!a.length){this._note="Isi minimal satu kolom nilai terlebih dahulu.",this.requestUpdate();return}this._note="\u2601\uFE0F Mengirim semua nilai ke backend\u2026",this.requestUpdate();const i=(await Promise.all(a.map(s=>this._apiGet({action:"setManualScore",studentId:t._sid,kategori:s.kategori,skor:s.skor})))).filter(s=>s&&s.status&&s.status!=="ok");i.length?this._note="\u26A0\uFE0F Sebagian gagal: "+String(i[0]&&i[0].message||"cek konsol."):(this._simpanEditNilai(t._sid,{kehadiran:e.kehadiran,uh:e.uh,uts:e.uts,uas:e.uas,sikap:e.sikap,keterampilan:e.keterampilan,nilaiAkhir:e.nilaiAkhir,grade:e.grade}),this._note=`\u2705 ${a.length} nilai (${a.map(s=>s.kategori).join(", ")}) untuk ${t._nama} tercatat di sheet Nilai Manual.`),this.requestUpdate()}async _kirimManualSkor(){const t=this._detailSiswa,e=this._editNilai||{};if(!t||!t._sid){this._note="\u26A0\uFE0F Student ID tidak ditemukan.",this.requestUpdate();return}if(!this.appsScriptUrl){this._note="\u26A0\uFE0F URL Apps Script belum diatur.",this.requestUpdate();return}const a=[];if(String(e.uts).trim()!==""&&a.push({kategori:"uts",skor:Math.max(0,Math.min(100,this._num(e.uts)))}),String(e.uas).trim()!==""&&a.push({kategori:"uas",skor:Math.max(0,Math.min(100,this._num(e.uas)))}),!a.length){this._note="Isi Skor UTS dan/atau UAS terlebih dahulu.",this.requestUpdate();return}this._note="\u2601\uFE0F Mengirim nilai manual ke backend\u2026",this.requestUpdate();const i=(await Promise.all(a.map(s=>this._apiGet({action:"setManualScore",studentId:t._sid,kategori:s.kategori,skor:s.skor})))).filter(s=>s&&s.status&&s.status!=="ok");this._note=i.length?"\u26A0\uFE0F Sebagian gagal: "+String(i[0]&&i[0].message||"cek konsol."):`\u2705 UTS ${this._num(e.uts)} & UAS ${this._num(e.uas)} untuk ${t._nama} tercatat di sheet Nilai Manual.`,i.length||this._simpanEditNilai(t._sid,{kehadiran:e.kehadiran,uh:e.uh,uts:e.uts,uas:e.uas,sikap:e.sikap,keterampilan:e.keterampilan,nilaiAkhir:e.nilaiAkhir,grade:e.grade}),this.requestUpdate()}_rowPeringkatKeCSV(t){const e=["#","Nama","Kelas","Absen","NIS","Student ID","Total Kuis","Rata-rata Skor (%)","Skor Tertinggi","Skor Terendah","Total Aktivitas","Reading","Quiz Activity","Discussion","Download","UTS","UAS","Nilai Akhir","Grade","Jumlah Pertemuan","Status Kuis Terakhir"],a=t.map((i,s)=>[String(s+1),i._nama,i._kelas,i._absen,i._nis,i._sid,i._totalKuis,i._rata,i._tinggi,i._rendah,i._aktivitas,i._reading,i._quizAct,i._discussion,i._download,i._uts,i._uas,i._nilaiAkhir,i._grade,i._pertemuan,i._status]);return{headers:e,grid:a}}_csvKerangka(t,e="	"){const{headers:a,grid:i}=this._rowPeringkatKeCSV(t),s=r=>{const d=String(r??"");return e==="	"?d.replace(/[\t\n\r]+/g," "):/[";\n\r]/.test(d)?'"'+d.replace(/"/g,'""')+'"':d};return[a,...i].map(r=>r.map(s).join(e)).join(`\r
`)}_eksporNilai(t){const e=this._filterPeringkat(this._buildPeringkat());if(!e.length){this._note="Belum ada baris untuk diekspor.",this.requestUpdate();return}const a="peringkat-bimbingan-"+String(this._peringkatKelas||this.kelas||"semua").replace(/[^a-zA-Z0-9-_]/g,"");if(t==="copas"){this._copasTSV=this._csvKerangka(e,"	"),this._note="Kotak TSV siap disalin \u2014 paste langsung ke Google Sheets / Excel.",this.requestUpdate();return}if(t==="csv"){const i="\uFEFF"+this._csvKerangka(e,",");this._downloadBlob(`${a}.csv`,i,"text/csv;charset=utf-8;")}else{const{headers:i,grid:s}=this._rowPeringkatKeCSV(e),r=i.map(p=>`<th>${this._hs(p)}</th>`).join(""),d=s.map(p=>`<tr>${p.map(c=>`<td>${this._hs(c)}</td>`).join("")}</tr>`).join(""),l=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="utf-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Peringkat</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table><thead><tr>${r}</tr></thead><tbody>${d}</tbody></table></body></html>`;this._downloadBlob(`${a}.xls`,l,"application/vnd.ms-excel;charset=utf-8;")}this._note=`\u2705 Ekspor ${t.toUpperCase()} selesai (${e.length} siswa).`,this.requestUpdate()}_downloadBlob(t,e,a){const i=new Blob([e],{type:a}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(s),1500)}_hs(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}_renderHasilSiswa(){const t=this._serverData.siswa;if(!t)return o`
        <h2 style="margin-top: 0; color: #1e293b;">🎯 Hasil & Nilai Evaluasi Anda</h2>
        <div class="empty-state">
          ${this._loading?"Memuat hasil nilai Anda\u2026":this.appsScriptUrl?o`
                  Belum ada hasil nilai untuk <strong>${this.namaSiswa||this.studentId||"siswa ini"}</strong>.
                  Kerjakan kuis, membaca modul, dan berpartisipasi di forum agar data muncul di Rangkuman kelas.
                  Pastikan <code>student-id</code> benar atau login melalui komponen autentikasi.<br />
                  URL aktif: <code>${this.appsScriptUrl}</code>
                  ${this._serverError?o`<span class="err-chip">⚠️ ${this._serverError}</span>`:""}
                  <button class="retry-btn" @click=${()=>this.fetchDataKomplit()} ?disabled=${this._loading}>
                    🔄 Muat Ulang Data
                  </button>
                `:o`
                  URL Apps Script belum diatur. Isi properti <code>apps-script-url</code> (via HAX editor atau atribut HTML).
                `}
        </div>
      `;const e=this._num(t.kehadiran),a=this._num(t.ulanganHarian&&(t.ulanganHarian.average||t.ulanganHarian.highest)||0),i=this._num(t.uts&&t.uts.highest||0),s=this._num(t.uas&&t.uas.highest||0),r=this._num(t.sikap),d=this._num(t.keterampilan),l=Math.round(parseFloat(t.nilaiAkhir)||0),p=String(t.grade||"-"),c=Math.max(0,Math.min(100,l))*3.6,m=Array.isArray(t.lm)?t.lm:Array.isArray(t.LM)?t.LM:[],A=m.length>0&&m.some(k=>this._num(k)>0),T=[{label:"Kehadiran",value:e,unit:"%"},{label:"Rata-rata UH",value:a,unit:""},{label:"Skor UTS",value:i,unit:""},{label:"Skor UAS",value:s,unit:""},{label:"Sikap",value:r,unit:""},{label:"Keterampilan",value:d,unit:""}];return o`
      <h2 style="margin-top: 0; color: #1e293b;">🎯 Hasil & Nilai Evaluasi Anda</h2>

      <div class="hasil-hero">
        <div class="grade-ring-card">
          <div class="grade-ring" style="background: conic-gradient(#fbbf24 ${c}deg, rgb(255 255 255 / 0.15) ${c}deg);">
            <div class="grade-ring-inner">
              <div class="ring-nilai">${l}</div>
              <div class="ring-label">Nilai Akhir</div>
            </div>
          </div>
          <div style="font-weight:700; margin-bottom:8px;">${t.nama||this.namaSiswa||"Siswa"}</div>
          <div class="grade-big">${p}</div>
          <div style="font-size:11px; opacity:0.8; margin-top:10px;">${this.studentId||""} • ${this.kelas||""}</div>
        </div>

        <div>
          <div class="kpi-grid">
            ${T.map(k=>o`
                <div class="kpi-card">
                  <div class="kpi-value ${k.value>=75?"ok":k.value>=60?"warn":""}">${k.value}${k.unit}</div>
                  <div class="kpi-label">${k.label}</div>
                  <div class="kpi-bar"><div style="width:${Math.min(k.value,100)}%;"></div></div>
                </div>
              `)}
          </div>
          ${A?o`
            <div class="card-siswa" style="padding: var(--ddd-spacing-4); margin-top: var(--ddd-spacing-4);">
              <h4 style="margin:0 0 8px; color:#1e293b;">📚 Nilai per LM (Tujuan Pembelajaran)</h4>
              <p style="margin:0 0 12px; font-size:11px; color:#94a3b8;">Tap LM untuk filter pertemuan • Data dari <code>Akumulasi_Nilai_Rapor</code> kolom LM1..LMn</p>
              <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(86px,1fr)); gap: var(--ddd-spacing-2);">
                ${m.map((k,C)=>{const x=this._num(k),R=String(this.kdMateri||"").trim().toLowerCase()===`lm${C+1}`.toLowerCase()||String(this.kdMateri||"").trim()===`Pertemuan ${C+1}`;return o`
                    <button @click=${()=>{this.kdMateri=`LM${C+1}`,this.requestUpdate()}}
                      style="border:1px solid ${R?"#4F46E5":"#E2E8F0"}; background:${x>=75?"#ECFDF5":x>=60?"#FFFBEB":x>0?"#FEF2F2":"#F8FAFC"}; border-radius:12px; padding:10px 6px; text-align:center; cursor:pointer;">
                      <div style="font-size:11px; font-weight:700; color:#475569;">LM${C+1}</div>
                      <div style="font-size:18px; font-weight:800; color:${x>=75?"#065F46":x>=60?"#92400E":x>0?"#991B1B":"#94A3B8"};">${x||"-"}</div>
                      <div style="font-size:10px; color:#94a3b8;">${x>=75?"Mencapai TP":x>=60?"Pengayaan":x>0?"Remedial":"Belum ada"}</div>
                    </button>
                  `})}
              </div>
              ${t.deskripsiCapaian?o`<div style="margin-top:12px; background:#F8FAFF; border:1px solid #E0E7FF; border-radius:12px; padding:12px; font-size:12px; color:#334155;">💬 ${t.deskripsiCapaian}</div>`:""}
            </div>
          `:""}
        </div>
      </div>

      <div class="card-siswa" style="padding: var(--ddd-spacing-5); margin-bottom: var(--ddd-spacing-5);">
        <h4 style="margin:0 0 4px; color:#1e293b;">📈 Konsistensi Aktivitas (28 Hari Terakhir)</h4>
        <p style="margin:0; font-size:12px; color:#94a3b8;">Data dari sheet aktivitas (<strong>${this.kdMateri||"semua pertemuan"}</strong>) + log lokal.</p>
        <div class="heatmap-head">
          ${["Sen","Sel","Rab","Kam","Jum","Sab","Min"].map(k=>o`<span>${k}</span>`)}
        </div>
        <div class="heatmap-grid">
          ${this._renderHeatmapSiswa()}
        </div>
        <div class="heatmap-legend">
          <span>Sedikit</span>
          ${["lvl-0","lvl-1","lvl-2","lvl-3","lvl-4"].map(k=>o`<span class="legend-box ${k}"></span>`)}
          <span>Banyak</span>
        </div>
        ${this._renderLogAktivitasTerbaru()}
      </div>
    `}_gabungRiwayat(){const t={},e=this._serverData.calendar||[];Array.isArray(e)&&e.length>0?e.forEach(a=>{a&&a.date&&(t[String(a.date).slice(0,10)]=this._num(a.count||(a.kuis||0)+(a.hadir||0)+(a.tugas||0)))}):(this._serverData.history||[]).forEach(a=>{a&&a.date&&(t[String(a.date).slice(0,10)]=this._num(a.count))});try{const a=JSON.parse(localStorage.getItem("a3_v5_activity_logs")||"[]");Array.isArray(a)&&a.forEach(i=>{if(i&&i.timestamp){const s=String(i.timestamp).slice(0,10);t[s]=(t[s]||0)+1}})}catch{}return t}_renderLogAktivitasTerbaru(){const t=[];(this._serverData.history||[]).forEach(a=>{const i=a&&a.date?String(a.date).slice(0,10):"";(a.items||[]).forEach(s=>{s&&s.deskripsi&&t.push({tanggal:i,tipe:s.tipe||"",deskripsi:s.deskripsi})})});try{const a=JSON.parse(localStorage.getItem("a3_v5_activity_logs")||"[]");Array.isArray(a)&&a.forEach(i=>{i&&i.timestamp&&t.push({tanggal:String(i.timestamp).slice(0,10),tipe:i.tipe_aktivitas||"",deskripsi:typeof i.description=="string"?i.description:""})})}catch{}const e=t.sort((a,i)=>a.tanggal<i.tanggal?1:-1).slice(0,5);return e.length?o`
      <div style="margin-top:14px;">
        <div style="font-size:12px; font-weight:700; color:#64748b; margin-bottom:6px;">Log Terbaru:</div>
        <div style="display:flex; flex-direction:column; gap:4px; max-height:150px; overflow-y:auto;">
          ${e.map(a=>o`
              <div class="li-log">
                <span class="lt-log">${a.tanggal}</span>
                <span class="ld-log">${a.tipe?"["+a.tipe+"] ":""}${a.deskripsi||"-"}</span>
              </div>
            `)}
        </div>
      </div>
    `:o`
        <div class="empty-state" style="margin-top:12px;">
          Belum ada catatan aktivitas. Tandai selesai membaca, kerjakan kuis, dan kirim
          diskusi untuk mengisi matriks ini.
        </div>
      `}_renderHeatmapSiswa(){const t=this._gabungRiwayat(),e=new Date,a=[];for(let i=27;i>=0;i--){const s=new Date(e);s.setDate(e.getDate()-i);const r=s.toISOString().split("T")[0],d=t[r]||0,l=d===0?"lvl-0":d<=2?"lvl-1":d<=4?"lvl-2":d<=6?"lvl-3":"lvl-4";a.push(o`<div class="box-heatmap ${l}" title="${r}: ${d} aktivitas">${d||""}</div>`)}return a}}globalThis.customElements.define(nt.tag,nt);
