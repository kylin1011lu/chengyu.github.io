System.register("chunks:///_virtual/AnswerBlock.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,n,i,o,c,l,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,l=e.Label,s=e.Component}],execute:function(){var a,u,p,f,y;o._RF.push({},"925a4cqMwFHBZJgpVlviuq+","AnswerBlock",void 0);var d=c.ccclass,w=c.property;e("AnswerBlock",(a=d("AnswerBlock"),u=w(l),a((y=r((f=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return r=e.call.apply(e,[this].concat(o))||this,n(r,"text",y,i(r)),r.displayIndex=-1,r.answerIndex=-1,r}return t(r,e),r}(s)).prototype,"text",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/ArrayUtil.ts",["cc","./MathUtil.ts"],(function(n){"use strict";var t,r;return{setters:[function(n){t=n.cclegacy},function(n){r=n.MathUtil}],execute:function(){t._RF.push({},"7e776ZcK7NBmJvOeUlGD2UE","ArrayUtil",void 0);n("ArrayUtil",function(){function n(){}return n.equal=function(n,t){if(null==n||null==t)return n==t;if(n.length!=t.length)return!1;for(var r=!0,e=0;e<n.length;e++)if(n[e]!=t[e]){r=!1;break}return r},n.random=function(n){return n.length<=0?null:1===n.length?n[0]:n[r.random(0,n.length-1)]},n.randomAll=function(n){if(n.length<=0)return n;for(var t=n.length-1;t>0;t--){var e=r.random(0,t),u=[n[t],n[e]];n[e]=u[0],n[t]=u[1]}return n},n}());t._RF.pop()}}}));

System.register("chunks:///_virtual/AudioMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var i,u,e,t,n,c,r;return{setters:[function(o){i=o.createClass},function(o){u=o.cclegacy,e=o.AudioClip,t=o.resources,n=o.Node,c=o.director,r=o.AudioSource}],execute:function(){u._RF.push({},"83279C8N39BSKM6oR4LMMu5","AudioMgr",void 0),o("AudioMgr",function(){function o(){this._audioSource=void 0;var o=new n;o.name="__audioMgr__",c.getScene().addChild(o),c.addPersistRootNode(o),this._audioSource=o.addComponent(r)}var u=o.prototype;return u.playOneShot=function(o,i){var u=this;void 0===i&&(i=1),o instanceof e?this._audioSource.playOneShot(o,i):t.load(o,(function(o,e){o?console.log(o):u._audioSource.playOneShot(e,i)}))},u.play=function(o,i){var u=this;void 0===i&&(i=1),o instanceof e?(this._audioSource.clip=o,this._audioSource.play(),this.audioSource.volume=i):t.load(o,(function(o,e){o?console.log(o):(u._audioSource.clip=e,u._audioSource.play(),u.audioSource.volume=i)}))},u.stop=function(){this._audioSource.stop()},u.pause=function(){this._audioSource.pause()},u.resume=function(){this._audioSource.play()},i(o,[{key:"audioSource",get:function(){return this._audioSource}}],[{key:"inst",get:function(){return null==this._inst&&(this._inst=new o),this._inst}}]),o}())._inst=void 0,u._RF.pop()}}}));

System.register("chunks:///_virtual/CreateScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,r,t,i,l,o,a,s,c;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){l=e.cclegacy,o=e._decorator,a=e.EditBox,s=e.Node,c=e.Component}],execute:function(){var u,p,f,h,d,g,v,y,C;l._RF.push({},"fa574eEwpxImbtBlb8AnEJH","CreateScene",void 0);var b=o.ccclass,w=o.property;e("CreateScene",(u=b("CreateScene"),p=w(a),f=w(s),h=w(s),u((v=n((g=function(e){function n(){for(var n,r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=e.call.apply(e,[this].concat(l))||this,t(n,"level",v,i(n)),t(n,"displayContainer",y,i(n)),t(n,"answerContainer",C,i(n)),n}r(n,e);var l=n.prototype;return l.start=function(){},l.update=function(e){},l.onClick=function(){if(""!=this.level.string){for(var e=Number(this.level.string),n=0,r=[],t=0;t<this.displayContainer.children.length;t++){var i=this.displayContainer.children[t].getComponent(a).string;null==i||""==i?r.push(""):r.push(i),"_"===i&&n++}for(var l=[],o=0;o<this.answerContainer.children.length;o++){var s=this.answerContainer.children[o].getComponent(a).string;null!=s&&""!=s&&l.push(s)}if(n==l.length){var c={level:e,display:r,answer:l};console.log(JSON.stringify(c))}else console.error("答案对不上")}else console.error("没有关卡id")},n}(c)).prototype,"level",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=n(g.prototype,"displayContainer",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(g.prototype,"answerContainer",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=g))||d));l._RF.pop()}}}));

System.register("chunks:///_virtual/Define.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"31ff2Woa/ZMP6+KQsdOe8MT","Define",void 0);e("getPlayerTitle",(function(e){return e>=100?"状元":e>=90?"榜眼":e>=80?"探花":e>=60?"进士":e>=40?"贡士":e>=20?"举人":e>=10?"秀才":"布衣"})),e("ONE_LEVEL_NUM",10),e("ONE_LEVEL_DATA_NUM",17),e("MAX_LEVEL_NUM",170);t._RF.pop()}}}));

System.register("chunks:///_virtual/DisplayBlock.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,r,s,o,l,p,a,u,c,h,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized,s=t.createClass},function(t){o=t.cclegacy,l=t._decorator,p=t.Sprite,a=t.Label,u=t.SpriteFrame,c=t.tween,h=t.Vec3,f=t.Component}],execute:function(){var g,y,m,d,_,w,b,k,S,D,I,x,C,R,v;t("BlockType",void 0),o._RF.push({},"6ed7455SYhLf4IkDpGB+cSd","DisplayBlock",void 0);var z,B=l.ccclass,F=l.property;!function(t){t[t.None=0]="None",t[t.Display=1]="Display",t[t.Input=2]="Input"}(z||(z=t("BlockType",{})));t("DisplayBlock",(g=B("DisplayBlock"),y=F(p),m=F(a),d=F(u),_=F(u),w=F(u),b=F(u),g((D=e((S=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s))||this,n(e,"img",D,r(e)),n(e,"text",I,r(e)),n(e,"noramlSpf",x,r(e)),n(e,"checkedSpf",C,r(e)),n(e,"wrongSpf",R,r(e)),n(e,"rightSpf",v,r(e)),e.type=z.None,e.row=-1,e.col=-1,e.answerDisplayIndex=-1,e._inputIndex=-1,e._isChecked=!1,e._isRight=!1,e._answer="",e._input="",e._isCompleted=!1,e}i(e,t);var o=e.prototype;return o.playRight=function(t){this._isCompleted=!0,this.img.spriteFrame=this.rightSpf,c(this.img.node).delay(.03*t).to(.2,{scale:new h(1.2,1.2,1.2)}).to(.2,{scale:new h(1,1,1)}).start()},o.playWrong=function(){this.img.spriteFrame=this.wrongSpf,c(this.img.node).to(.2,{scale:new h(1.2,1.2,1.2)}).to(.2,{scale:new h(1,1,1)}).start()},s(e,[{key:"input",get:function(){return this._input},set:function(t){this._input=t,this.text.string=t,this.type==z.Input?(this.isRight=t===this._answer,this.text.string=t):this.type==z.Display&&(this.isRight=!0)}},{key:"answer",get:function(){return this._answer},set:function(t){this._answer=t}},{key:"inputIndex",get:function(){return this._inputIndex},set:function(t){this._inputIndex=t,this.img.spriteFrame=this.noramlSpf}},{key:"isChecked",get:function(){return this._isChecked},set:function(t){this.type==z.Input&&(this._isChecked=t,this._isCompleted||(this.img.spriteFrame=t?this.checkedSpf:this.noramlSpf))}},{key:"isRight",get:function(){return this._isRight},set:function(t){this._isRight=t}}]),e}(f)).prototype,"img",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"text",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(S.prototype,"noramlSpf",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(S.prototype,"checkedSpf",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(S.prototype,"wrongSpf",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(S.prototype,"rightSpf",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=S))||k));o._RF.pop()}}}));

System.register("chunks:///_virtual/EndUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,l,o,a,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){l=e.cclegacy,o=e._decorator,a=e.Label,c=e.director,u=e.Component}],execute:function(){var s,p,f,d,h,v,y;l._RF.push({},"ca00fL5m8NARKpotdZXTfW9","EndUI",void 0);var m=o.ccclass,b=o.property;e("EndUI",(s=m("EndUI"),p=b(a),f=b(a),s((v=t((h=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return t=e.call.apply(e,[this].concat(l))||this,i(t,"playerTitle",v,r(t)),i(t,"level",y,r(t)),t._param=null,t}n(t,e);var l=t.prototype;return l.init=function(e){this._param=e,this.level.string="第"+e.level+"关未通过，继续加油哦～"},l.onClickHome=function(){this.node.active=!1,c.loadScene("start")},l.onClickLive=function(){var e=this;this.node.active=!1,this.scheduleOnce((function(){e._param.shareCB()}),.5)},t}(u)).prototype,"playerTitle",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(h.prototype,"level",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=h))||d));l._RF.pop()}}}));

System.register("chunks:///_virtual/FinalUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,r,l,o,a,c,u,s,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){l=t.cclegacy,o=t._decorator,a=t.RichText,c=t.Node,u=t.Label,s=t.log,p=t.Component}],execute:function(){var b,f,v,h,y,g,m,d,w,z,_;l._RF.push({},"7c3f9+z7BpCOZ2CwPS4fL98","FinalUI",void 0);var C=o.ccclass,F=o.property;t("FinalUI",(b=C("FinalUI"),f=F(a),v=F(c),h=F(c),y=F(u),b((d=e((m=function(t){function e(){for(var e,i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return e=t.call.apply(t,[this].concat(l))||this,n(e,"level",d,r(e)),n(e,"buttons1",w,r(e)),n(e,"buttons2",z,r(e)),n(e,"playerTitle",_,r(e)),e._param=null,e}i(e,t);var l=e.prototype;return l.start=function(){},l.init=function(t){this._param=t,this.buttons1.active=100!=t.level,this.buttons2.active=100==t.level,this.level.string="<b><color=#2A2725>英雄勇闯</color><color=#C1203B>"+t.level+"</color><color=#2A2725>关!</color></b>"},l.onClick=function(t,e){switch(s(t,e),e){case"next":this.node.active=!1,this._param.nextCB()}},e}(p)).prototype,"level",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(m.prototype,"buttons1",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(m.prototype,"buttons2",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=e(m.prototype,"playerTitle",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=m))||g));l._RF.pop()}}}));

System.register("chunks:///_virtual/GameScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ArrayUtil.ts","./AnswerBlock.ts","./DisplayBlock.ts","./NextUI.ts","./EndUI.ts","./FinalUI.ts","./LevelData.ts","./Define.ts","./ShareUI.ts"],(function(e){"use strict";var t,i,n,r,a,l,s,o,u,h,c,d,p,f,v,_,g,y,b,I,w,L,m,T,C,N,x;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,l=e._decorator,s=e.Node,o=e.EditBox,u=e.JsonAsset,h=e.Label,c=e.director,d=e.instantiate,p=e.NodeEventType,f=e.log,v=e.Vec3,_=e.error,g=e.Component},function(e){y=e.ArrayUtil},function(e){b=e.AnswerBlock},function(e){I=e.DisplayBlock,w=e.BlockType},function(e){L=e.NextUI},function(e){m=e.EndUI},function(e){T=e.FinalUI},function(e){C=e.LevelData},function(e){N=e.ONE_LEVEL_NUM},function(e){x=e.ShareUI}],execute:function(){var D,k,U,S,E,A,z,M,B,R,H,P,G,O,W,F,J,j,V,Z,q,K,Q,X,Y,$,ee,te,ie,ne,re,ae;a._RF.push({},"3ad1bjyGyhBPo0HFJjrTGZz","GameScene",void 0);var le=l.ccclass,se=l.property;e("GameScene",(D=le("GameScene"),k=se(s),U=se(L),S=se(T),E=se(m),A=se(x),z=se(o),M=se(s),B=se(u),R=se(s),H=se(s),P=se(s),G=se(s),O=se(h),W=se(h),D((j=t((J=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,n(t,"isDebug",j,r(t)),n(t,"gameNode",V,r(t)),n(t,"nextUI",Z,r(t)),n(t,"finalUI",q,r(t)),n(t,"endUI",K,r(t)),n(t,"shareUI",Q,r(t)),n(t,"setLevel",X,r(t)),n(t,"overNode",Y,r(t)),n(t,"levelJson",$,r(t)),n(t,"displayModel",ee,r(t)),n(t,"answerModel",te,r(t)),n(t,"displayContainer",ie,r(t)),n(t,"answerContainer",ne,r(t)),n(t,"hardLevel",re,r(t)),n(t,"level",ae,r(t)),t._inputNodes=[],t._allNodes=[],t._answerNodes=[],t._curInputIndex=-1,t._data=null,t._errCnt=0,t._curHardLevel=1,t._curLevel=1,t._debugLevel=1,t._startTime=0,t._endTime=0,t._isEnd=!1,t}i(t,e);var a=t.prototype;return a.start=function(){this.init(),c.preloadScene("start")},a.init=function(){C.instance.init(this.levelJson.json),this.isDebug?(this._debugLevel=1,this.loadWithLevel(this._debugLevel)):(this._curHardLevel=1,this._curLevel=1,this.loadLevel())},a.initLevelData=function(){this._errCnt=0,this._curInputIndex=-1},a.initLayout=function(e){this.initLevelData(),this._data=e,this.reloadLevel(),this.reloadDisplay(),this.reloadAnswer()},a.getTotalLevel=function(){return(this._curHardLevel-1)*N+this._curLevel},a.reloadLevel=function(){this.hardLevel.string="难度等级："+this._curHardLevel,this.level.string="第"+this.getTotalLevel()+"关"},a.initAllNodes=function(){for(var e=0;e<9;e++){this._allNodes[e]=[];for(var t=0;t<9;t++)this._allNodes[e][t]=null}},a.reloadDisplay=function(){this.displayContainer.removeAllChildren();var e=-1,t=this._data;this._inputNodes=[],this.initAllNodes();for(var i=0;i<t.display.length;i++){var n=this.getRowCol(i),r=n[0],a=n[1];if(""!=t.display[i]){var l=d(this.displayModel);this._allNodes[r][a]=l,this.setDisplayPosition(l,r,a),l.active=!0,l.parent=this.displayContainer;var s=l.getComponent(I);l.attr({TS:s}),s.row=r,s.col=a,"_"===t.display[i]?(e++,s.type=w.Input,s.inputIndex=e,s.answer=t.answer[e],s.input="",l.on(p.TOUCH_END,this.onDisplayTouchEnd,this),this._inputNodes[e]=l,-1==this._curInputIndex&&(this._curInputIndex=e,s.isChecked=!0)):(s.type=w.Display,s.answer=t.display[i],s.input=t.display[i])}}},a.onDisplayTouchEnd=function(e){var t=e.target,i=t.TS;if(null!=i.inputIndex&&-1!=i.inputIndex&&i.type!=w.Display){-1!=this._curInputIndex&&(this._inputNodes[this._curInputIndex].TS.isChecked=!1),this._curInputIndex=t.TS.inputIndex;var n=this._inputNodes[this._curInputIndex].TS;n.isChecked=!0,""!=n.input&&(n.input="",this._answerNodes[n.answerDisplayIndex].active=!0,n.answerDisplayIndex=-1)}},a.reloadAnswer=function(){var e=this._data;this.answerContainer.removeAllChildren();for(var t=[],i=0;i<e.answer.length;i++)t.push(i);t=this.randomAnswer(t);var n=this.getRandomTouch(e.answer.length);this._answerNodes=[];for(var r=0;r<n.length;r++){var a=Number(n[r]),l=d(this.answerModel),o=this.getAnswerRowCol(a),u=o[0],h=o[1];f("======",u,h,e.answer[t[r]]),this.setAnswerPosition(l,u,h),l.active=!0,l.parent=this.answerContainer;var c=l.getComponent(b);l.attr({TS:c}),c.answerIndex=t[r],c.displayIndex=r,this._answerNodes[r]=l,l.on(s.EventType.TOUCH_END,this.onAnswerTouchEnd.bind(this),this),c.text.string=e.answer[t[r]]}},a.getRandomTouch=function(e){for(var t=[],i=0;i<7;i++)t.push(i);if(e>Math.floor(3.5))for(var n=7;n<14;n++)t.push(n);return(t=y.randomAll(t)).slice(0,e)},a.randomAnswer=function(e){return y.randomAll(e)},a.onAnswerTouchEnd=function(e){if(-1!=this._curInputIndex&&!this._isEnd){var t=e.target,i=t.TS;if(null!=i&&-1!=i.answerIndex){var n=this._inputNodes[this._curInputIndex],r=this._data.answer[i.answerIndex];n.TS.input=r,n.TS.answerDisplayIndex=i.displayIndex,n.TS.isChecked=!1,t.active=!1;var a=this.getNextInputIndex();a>=0&&a<this._inputNodes.length?(this._inputNodes[a].TS.isChecked=!0,this._curInputIndex=a):this._curInputIndex=-1,n.TS.isRight?this.checkWordRight(n.TS.row,n.TS.col):(n.TS.playWrong(),this._errCnt++),this.checkIsCompleted()}}},a.checkIsCompleted=function(){for(var e=this,t=!0,i=0;i<this._inputNodes.length;i++)if(!this._inputNodes[i].TS.isRight){t=!1;break}t?(this._isEnd=!0,this._endTime=Math.floor((new Date).getTime()/1e3),this.scheduleOnce((function(){e._curLevel==N?(e.finalUI.node.active=!0,e.finalUI.init({level:e.getTotalLevel(),nextCB:function(){e._curHardLevel+=1,e._curLevel=1,e.loadLevel()}})):(e.nextUI.node.active=!0,e.nextUI.refreshUI(e._endTime-e._startTime,e.getTotalLevel()),e.nextUI.onNextCB=function(){e._curLevel+=1,e.loadLevel()})}),.5)):this._errCnt>0&&(this._isEnd=!0,this._endTime=Math.floor((new Date).getTime()/1e3),this.scheduleOnce((function(){e.endUI.node.active=!0,e.endUI.init({level:e.getTotalLevel(),shareCB:function(){e.shareUI.node.active=!0,e.shareUI.init({level:e.getTotalLevel(),nextCB:function(){e.reloadCurLevel()}})}})}),.5))},a.getNextInputIndex=function(){if(this._inputNodes.length<=0)return-1;for(var e=0;e<this._inputNodes.length;e++){var t=(this._curInputIndex+1+e)%this._inputNodes.length;if(""==this._inputNodes[t].TS.input)return t}return-1},a.checkWordRight=function(e,t){if(!(e<0||e>=9||t<0||t>=9)){var i=this._allNodes[e][t];if(null!=i){for(var n,r=[],a=[i],l=t+1;l<t+4&&!(l<0||l>=9);l++){var s=this._allNodes[e][l];if(null==s)break;var o=s.getComponent(I);if(o.type==w.Display)a.push(s);else{if(!o.isRight){a=[i];break}a.push(s)}}for(var u=t-1;u>t-4&&!(u<0||u>=9);u--){var h=this._allNodes[e][u];if(null==h)break;var c=h.getComponent(I);if(c.type==w.Display)a.unshift(h);else{if(!c.isRight){a=[i];break}a.unshift(h)}}4==a.length&&(r=[].concat(a)),a=[i];for(var d=e+1;d<e+4&&!(d<0||d>=9);d++){var f=this._allNodes[d][t];if(null==f)break;var v=f.getComponent(I);if(v.type==w.Display)a.push(f);else{if(!v.isRight){a=[i];break}a.push(f)}}for(var _=e-1;_>e-4&&!(_<0||_>=9);_--){var g=this._allNodes[_][t];if(null==g)break;var y=g.getComponent(I);if(y.type==w.Display)a.unshift(g);else{if(!y.isRight){a=[i];break}a.unshift(g)}}if(4==a.length)r=(n=r).concat.apply(n,a);if(r.length>0)for(var b=0;b<r.length;b++)r[b].off(p.TOUCH_END,this.onDisplayTouchEnd,this),r[b].TS.playRight(b)}}},a.getRowCol=function(e){return[Math.floor(e/9),Math.floor(e%9)]},a.getAnswerRowCol=function(e){return[Math.floor(e/7),Math.floor(e%7)]},a.setAnswerPosition=function(e,t,i){if(!(t<0||t>=7||i<0||i>=7)){var n=7+101*i+47,r=-21-104*t-47;e.setPosition(new v(n,r,0))}},a.setDisplayPosition=function(e,t,i){if(!(t<0||t>=9||i<0||i>=9)){var n=20+74*i+34,r=-20-74*t-34;e.setPosition(new v(n,r,0))}},a.onClick=function(e,t){switch(t){case"back":this.onClickBack();break;case"set":this.onClickSet(t);break;case"restart":this.onClickBack();break;case"pre":case"next":this.onClickSet(t)}},a.onClickSet=function(e){var t=1;"set"==e?t=Number(this.setLevel.string):"pre"==e?t=this._debugLevel-1:"next"==e&&(t=this._debugLevel+1),t<1?t=1:t>170&&(t=170),this.loadWithLevel(t)},a.loadWithLevel=function(e){this._isEnd=!1,this._startTime=Math.floor((new Date).getTime()/1e3);var t=C.instance.getLevelDataByLevel(e);this._debugLevel=e,null!=t?(this.initLayout(t),this.level.string="第"+this._debugLevel+"关"):_("调试关卡不存在",this._debugLevel)},a.loadLevel=function(){this._isEnd=!1,this._startTime=Math.floor((new Date).getTime()/1e3);var e=C.instance.getLevelDataByHardLevel(this._curHardLevel);if(null==e)return this.overNode.active=!0,void _("关卡不存在",this._curHardLevel,this._curLevel);this.initLayout(e)},a.reloadCurLevel=function(){this._isEnd=!1,this._startTime=Math.floor((new Date).getTime()/1e3),this.initLayout(this._data)},a.onClickBack=function(){c.loadScene("start")},t}(g)).prototype,"isDebug",[se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),V=t(J.prototype,"gameNode",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(J.prototype,"nextUI",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(J.prototype,"finalUI",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(J.prototype,"endUI",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(J.prototype,"shareUI",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(J.prototype,"setLevel",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(J.prototype,"overNode",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(J.prototype,"levelJson",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(J.prototype,"displayModel",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(J.prototype,"answerModel",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=t(J.prototype,"displayContainer",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=t(J.prototype,"answerContainer",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=t(J.prototype,"hardLevel",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ae=t(J.prototype,"level",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=J))||F));a._RF.pop()}}}));

System.register("chunks:///_virtual/LevelData.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Define.ts","./MathUtil.ts"],(function(e){"use strict";var t,l,n,a,i;return{setters:[function(e){t=e.createClass},function(e){l=e.cclegacy,n=e.log},function(e){a=e.ONE_LEVEL_DATA_NUM},function(e){i=e.MathUtil}],execute:function(){l._RF.push({},"31cf12uYlFO+5KTVA7n28Dy","LevelData",void 0),e("LevelData",function(){function e(){this._levelDatas=[],this._gotLevelForHardLevel={}}var l=e.prototype;return l.init=function(e){this._levelDatas=e,this._gotLevelForHardLevel={}},l.getLevelDataByHardLevel=function(e){if(e>10||e<=0)return null;var t=(e-1)*a+1,l=e*a,r=this._gotLevelForHardLevel[e];null==r&&(r=[]);for(var s=[],v=0;v<this._levelDatas.length;v++){var u=this._levelDatas[v];if(u.level>=t&&u.level<=l){if(r.indexOf(u.level)>-1){n("难度等级"+e+",已经选过"+u.level);continue}s.push(u)}}if(0==s.length)return n("关卡数据清零"),this._gotLevelForHardLevel[e]=null,this.getLevelDataByHardLevel(e);var o=i.random(0,s.length-1);return r.push(s[o].level),this._gotLevelForHardLevel[e]=r,n("难度等级"+e+",选择"+s[o].level),s[o]},l.getLevelDataByLevel=function(e){for(var t=0;t<this._levelDatas.length;t++){var l=this._levelDatas[t];if(l.level==e)return l}return null},t(e,null,[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance}}]),e}())._instance=void 0,l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AudioMgr.ts","./LevelData.ts","./sharer.mjs_cjs=&original=.js","./AnswerBlock.ts","./CreateScene.ts","./Define.ts","./DisplayBlock.ts","./EndUI.ts","./FinalUI.ts","./GameScene.ts","./Monster.ts","./NextUI.ts","./Player.ts","./ShareUI.ts","./StartScene.ts","./StoreUtil.ts","./ArrayUtil.ts","./MathUtil.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MathUtil.ts",["cc"],(function(t){"use strict";var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"8798a85qsBABrCl5qYGfnzF","MathUtil",void 0);t("MathUtil",function(){function t(){}return t.random=function(t,n){if(t>=n)return n;var r=Math.random()*(n-t+1);return t+Math.floor(r)},t.randomInt=function(t,n){return Math.floor(Math.random()*(n-t))+t},t}());n._RF.pop()}}}));

System.register("chunks:///_virtual/Monster.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){"use strict";var t,e,s,o,i,n,c,p,u;return{setters:[function(r){t=r.applyDecoratedDescriptor,e=r.inheritsLoose,s=r.initializerDefineProperty,o=r.assertThisInitialized,i=r.createClass},function(r){n=r.cclegacy,c=r._decorator,p=r.ProgressBar,u=r.Component}],execute:function(){var a,l,h,f,g;n._RF.push({},"b8171/lY/9MEYUkhS4vTBKm","Monster",void 0);var _=c.ccclass,y=c.property;r("Monster",(a=_("Monster"),l=y(p),a((g=t((f=function(r){function t(){for(var t,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return t=r.call.apply(r,[this].concat(i))||this,s(t,"hpProgress",g,o(t)),t._totalHp=1,t._curHp=1,t}return e(t,r),t.prototype.hurt=function(r){void 0===r&&(r=1);var t=this._curHp-r;t<0&&(t=0),this._curHp=t,this.hpProgress.progress=this._curHp/this._totalHp},i(t,[{key:"hp",get:function(){return this._curHp},set:function(r){this._totalHp=r,this._curHp=r,this.hpProgress.progress=1}}]),t}(u)).prototype,"hpProgress",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=f))||h));n._RF.pop()}}}));

System.register("chunks:///_virtual/NextUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,r,n,i,l,c,a,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){i=t.cclegacy,l=t._decorator,c=t.Button,a=t.RichText,u=t.Component}],execute:function(){var s,p,f,h,b,v,x,g,y,m,C;i._RF.push({},"e2217Zqg4NG6IW0qNE/ES43","NextUI",void 0);var N=l.ccclass,d=l.property;t("NextUI",(s=N("NextUI"),p=d(c),f=d(a),h=d(a),b=d(a),s((g=e((x=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))||this).onNextCB=null,r(e,"nextBtn",g,n(e)),r(e,"time",y,n(e)),r(e,"level",m,n(e)),r(e,"hit",C,n(e)),e}o(e,t);var i=e.prototype;return i.onLoad=function(){},i.onClickNext=function(){this.node.active=!1,this.onNextCB&&this.onNextCB()},i.refreshUI=function(t,e){var o="";o=t>60?Math.floor(t/60)+"分"+t%60+"秒":t%60+"秒",this.time.string="<b><color=#2A2725>用时:</color><color=#C1203C>"+o+"</color></b>",this.level.string="<b><color=#2A2725>完成第</color><color=#C1203B>"+e+"</color><color=#2A2725>关</color></b>";var r=0;r=t<1?99.99:t<2?99:t<3?98:Math.max(50,100-t),this.hit.string="<b><color=#2A2725>击败</color><color=#C1203C>"+r+"%</color><color=#2A2725>玩家</color></b>"},i.start=function(){},i.update=function(t){},e}(u)).prototype,"nextBtn",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(x.prototype,"time",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(x.prototype,"level",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=e(x.prototype,"hit",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));i._RF.pop()}}}));

System.register("chunks:///_virtual/Player.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,r,a,o,s,l,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,o=t._decorator,s=t.dragonBones,l=t.tween,c=t.Vec3,u=t.Component}],execute:function(){var h,p,y,d,f;a._RF.push({},"57384zVgclLopKTyjH5zShZ","Player",void 0);var m=o.ccclass,_=o.property;t("Player",(h=m("Player"),p=_(s.ArmatureDisplay),h((f=e((d=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a))||this,i(e,"armature",f,r(e)),e._totalLen=0,e._cnt=0,e}n(e,t);var a=e.prototype;return a.playIdle=function(){null!=this.armature&&(this.armature.addEventListener(s.EventObject.COMPLETE,null,this),this.armature.playAnimation("idle",0))},a.playSad=function(){var t=this;null!=this.armature&&(this.armature.addEventListener(s.EventObject.COMPLETE,(function(){t.playIdle()}),this),this.armature.playAnimation("sad",1))},a.moveLeft=function(){this._totalLen<=0||this._cnt<=0||l(this.node).by(.2,{position:new c(-this._totalLen/this._cnt,0,0)}).start()},a.moveRight=function(){this._totalLen<=0||this._cnt<=0||l(this.node).by(.2,{position:new c(this._totalLen/this._cnt,0,0)}).start()},a.init=function(t,e){this._totalLen=t,this._cnt=e},e}(u)).prototype,"armature",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=d))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/ShareUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,r,e,o;return{setters:[function(t){n=t.inheritsLoose},function(t){r=t.cclegacy,e=t._decorator,o=t.Component}],execute:function(){var a;r._RF.push({},"de31dqrznFFBpsyvZSvBNw4","ShareUI",void 0);var c=e.ccclass;e.property,t("ShareUI",c("ShareUI")(a=function(t){function r(){for(var n,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this)._param=null,n}n(r,t);var e=r.prototype;return e.init=function(t){this._param=t},e.onContinueClick=function(){this.node.active=!1,this._param.nextCB()},r}(o))||a);r._RF.pop()}}}));

System.register("chunks:///_virtual/StartScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts"],(function(e){"use strict";var t,n,r,o,i,a,c,l,s,u,d,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Node,l=e.director,s=e.assetManager,u=e.AudioClip,d=e.Component},function(e){p=e.AudioMgr}],execute:function(){var f,S,h,g,y;i._RF.push({},"bdf85lhmQVNCoqelW1BTLrV","StartScene",void 0);var b=a.ccclass,k=a.property;e("StartScene",(f=b("StartScene"),S=k(c),f((y=t((g=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,r(t,"startNode",y,o(t)),t}n(t,e);var i=t.prototype;return i.start=function(){l.preloadScene("game"),s.loadBundle("resources",(function(e,t){null==e&&t.load("audio/bg",u,(function(e,t){null==e&&p.inst.play(t)}))}))},i.onDestroy=function(){},i.onClick=function(e,t){switch(t){case"start":this.onClickStart();break;case"share":this.onClickShare();break;case"debug":l.loadScene("debug")}},i.onClickStart=function(){l.loadScene("game")},i.onClickShare=function(){},t}(d)).prototype,"startNode",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=g))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/StoreUtil.ts",["cc"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.cclegacy,n=t.sys}],execute:function(){e._RF.push({},"58249ngb4lMpaRNa6CmTf+4","StoreUtil",void 0);t("StoreUtil",function(){function t(){}return t.store=function(t){n.localStorage.setItem("level",t.toString())},t.getLevel=function(){var t=1,e=n.localStorage.getItem("level");return null!=e&&(t=Math.max(Number(e),1)),t},t}());e._RF.pop()}}}));
