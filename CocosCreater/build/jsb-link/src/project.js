__require = function t(i, e, n) {
function o(l, c) {
if (!e[l]) {
if (!i[l]) {
var a = l.split("/");
a = a[a.length - 1];
if (!i[a]) {
var d = "function" == typeof __require && __require;
if (!c && d) return d(a, !0);
if (s) return s(a, !0);
throw new Error("Cannot find module '" + l + "'");
}
}
var r = e[l] = {
exports: {}
};
i[l][0].call(r.exports, function(t) {
return o(i[l][1][t] || t);
}, r, r.exports, t, i, e, n);
}
return e[l].exports;
}
for (var s = "function" == typeof __require && __require, l = 0; l < n.length; l++) o(n[l]);
return o;
}({
HelloWorld: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "65f27BHYARK9phdPxnBAA99", "HelloWorld");
var n = t("UPLTV").upltv;
cc.bridgeInterface = t("UPLTV").bridgeInterface;
cc.Class({
extends: cc.Component,
properties: {
initSdk: cc.Button,
initSDKByCall: cc.Button,
initABTest: cc.Button,
getABConfig: cc.Button,
rdDebugUI: cc.Button,
rdLoadCall: cc.Button,
rdIsReady: cc.Button,
rdShow: cc.Button,
rewardPlaceId: "rewardID",
ILDebugUI: cc.Button,
ILLoadCall: cc.Button,
ILIsReady: cc.Button,
ILShow: cc.Button,
ilPlaceId: "sample_inter",
showTopBanner: cc.Button,
showBottomBanner: cc.Button,
hideAllBanner: cc.Button,
removeAllBanner: cc.Button,
bannerPlaceId: "sample_banner",
IconIdShow: cc.Button,
IconIdRemove: cc.Button,
iconPlaceId: "testIcon",
label: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.initSDKFunc();
this.abTestFunc();
this.rewardViedoFunc();
this.ilViewFunc();
this.bannerViewFunc();
this.iconViewFunc();
},
initSDKFunc: function() {
var t = this;
this.initSdk.node.on("click", function(i) {
n.intSdk(0);
t.label.string = "广告初始化成功";
});
this.initSDKByCall.node.on("click", function(i) {
t.label.string = "广告初始化";
n.intSdk(0, function(i) {
cc.log("===> js intSdk result:, %s", i);
t.label.string = "js intSdk result:" + i;
});
});
},
abTestFunc: function() {
var t = this;
this.initABTest.node.on("click", function(i) {
n.initAbtConfigJson("u89731", !0, 0, "Facebook", "M", -1, [ "This is the first element.", "The second one.", "The last one." ]);
t.label.string = "ABTest初始化成功";
});
this.getABConfig.node.on("click", function(i) {
var e = n.getAbtConfig("pass");
cc.log("===> js getAbtConfig rr 3333: %s", e);
t.label.string = "js getAbtConfig ：" + e;
});
},
rewardViedoFunc: function() {
var t = this;
this.rdDebugUI.node.on("click", function(t) {
n.showRewardDebugUI();
});
this.rdLoadCall.node.on("click", function(i) {
n.setRewardVideoLoadCallback(function(i, e) {
cc.log("===> js RewardVideo LoadCallback Success at: %s", i);
t.label.string = "js RewardVideo LoadCallback Success at:" + i;
}, function(i, e) {
cc.log("===> js RewardVideo LoadCallback Fail at: %s", i);
t.label.string = "js RewardVideo LoadCallback Fail at:" + i;
});
});
this.rdIsReady.node.on("click", function(i) {
var e = n.isRewardReady();
cc.log("===> js isRewardReady r: %s", e.toString());
t.label.string = "js isRewardReady: " + e.toString();
});
this.rdShow.node.on("click", function(i) {
n.setRewardVideoShowCallback(function(i, e) {
var o = "unkown";
i == n.AdEventType.VIDEO_EVENT_DID_SHOW ? o = "Did_Show" : i == n.AdEventType.VIDEO_EVENT_DID_CLICK ? o = "Did_Click" : i == n.AdEventType.VIDEO_EVENT_DID_CLOSE ? o = "Did_Close" : i == n.AdEventType.VIDEO_EVENT_DID_GIVEN_REWARD ? o = "Did_Given_Reward" : i == n.AdEventType.VIDEO_EVENT_DID_ABANDON_REWARD && (o = "Did_Abandon_Reward");
cc.log("===> js RewardVideo Show Callback, event: %s, at: %s", o, e);
t.label.string = "js RewardVideo Show Callback: " + e;
});
var e = n.isRewardReady();
cc.log("===> js isRewardReady r: %s", e);
t.label.sting = "js isRewardReady r:" + e;
if (1 == e) {
cc.log("===> js showRewardVideo call");
t.label.string = "js showRewardVideo 成功";
n.showRewardVideo(t.rewardPlaceId);
}
});
},
ilViewFunc: function() {
var t = this;
this.ILDebugUI.node.on("click", function(t) {
n.showInterstitialDebugUI();
});
this.ILLoadCall.node.on("click", function(i) {
n.setInterstitialLoadCallback(t.ilPlaceId, function(i, e) {
cc.log("===> js il load callback success: %s at placementid:%s", e, i);
t.label.string = "js il load callback success: " + i;
}, function(i, e) {
cc.log("===> js il load callback fail: %s at placementid:%s", e, i);
t.label.string = "js il load callback fail: " + i;
});
});
this.ILIsReady.node.on("click", function(i) {
n.isInterstitialReadyAsyn(t.ilPlaceId, function(i) {
cc.log("===> js il ad isreadyasyn: %s at placementid:%s", i, t.ilPlaceId);
t.label.string = "js il ad isreadyasyn: " + t.ilPlaceId;
});
});
this.ILShow.node.on("click", function(i) {
n.setInterstitialShowCallback(t.ilPlaceId, function(i, e) {
var o = "unkown";
i == n.AdEventType.INTERSTITIAL_EVENT_DID_SHOW ? o = "Did_Show" : i == n.AdEventType.INTERSTITIAL_EVENT_DID_CLICK ? o = "Did_Click" : i == n.AdEventType.INTERSTITIAL_EVENT_DID_CLOSE && (o = "Did_Close");
cc.log("===> js il ad event: %s, at placementid: %s", o, e);
t.label.string = "gagah gjahga aghajfgha gjahfgjha jkgahg agjkahga js il ad event: " + e;
});
var e = n.isInterstitialReady(t.ilPlaceId);
cc.log("===> js il ad isready: %s at placementid:%s", e, t.ilPlaceId);
t.label.string = "js il ad isready: " + t.ilPlaceId;
if (1 == e) {
n.showInterstitialAd(t.ilPlaceId);
t.label.string = "插屏展示成功";
}
});
},
bannerViewFunc: function() {
var t = this;
this.showTopBanner.node.on("click", function(i) {
n.setBannerShowCallback(t.bannerPlaceId, function(i, e) {
var o = "unkown";
i == n.AdEventType.BANNER_EVENT_DID_SHOW ? o = "Did_Show" : i == n.AdEventType.BANNER_EVENT_DID_CLICK ? o = "Did_Click" : i == n.AdEventType.BANNER_EVENT_DID_REMOVED && (o = "Did_Removed");
cc.log("=====> banner event: %s, at : %s", o, e);
t.label.string = "banner event: " + e;
});
n.showBannerAdAtTop(t.bannerPlaceId);
t.label.string = "顶部Banner展示";
});
this.showBottomBanner.node.on("click", function(i) {
n.setBannerShowCallback(t.bannerPlaceId, function(i, e) {
var o = "unkown";
i == n.AdEventType.BANNER_EVENT_DID_SHOW ? o = "Did_Show" : i == n.AdEventType.BANNER_EVENT_DID_CLICK ? o = "Did_Click" : i == n.AdEventType.BANNER_EVENT_DID_REMOVED && (o = "Did_Removed");
cc.log("=====> banner event: %s, at : %s", o, e);
t.label.string = "banner event: " + e;
});
n.showBannerAdAtBottom(t.bannerPlaceId);
t.label.string = "底部Banner展示";
});
this.hideAllBanner.node.on("click", function(i) {
n.hideBannerAdAtTop();
n.hideBannerAdAtBottom();
t.label.string = "隐藏展示";
});
this.removeAllBanner.node.on("click", function(i) {
n.removeBannerAdAt(t.bannerPlaceId);
t.label.string = "移除展示";
});
},
iconViewFunc: function() {
var t = this;
this.IconIdShow.node.on("click", function(i) {
n.setIconCallback(t.iconPlaceId, function(i, e) {
var o = "unknown";
i == n.AdEventType.ICON_EVENT_DID_LOAD ? o = "Did_loadSuccessful" : i == n.AdEventType.ICON_EVENT_DID_LOADFAIL ? o = "Did_loadFailed" : i == n.AdEventType.ICON_EVENT_DID_SHOW ? o = "Did_Show" : n.AdEventType.ICON_EVENT_DID_CLICK;
cc.log("====> IconAd event:%s,at :%s", o, e);
t.label.string = "IconAd event: " + e;
});
n.showIconAd(100, 100, 200, 200, 10, t.iconPlaceId);
t.label.string = "Icon 展示";
});
this.IconIdRemove.node.on("click", function(i) {
n.removeIconAd(t.iconPlaceId);
t.label.string = "Icon 移除";
});
},
update: function(t) {}
});
cc._RF.pop();
}, {
UPLTV: "UPLTV"
} ],
UPLTVAndroid: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "8ae4aDJMkhBmIODG6mKqatW", "UPLTVAndroid");
var n = "com/up/ads/cocosjs/JsProxy", o = !1, s = s || {
setShowLog: function(t) {
void 0 != t && null != t && (o = t);
},
printJsLog: function(t) {
o && void 0 != t && null != t && jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "cocos2dx-js", t);
},
initAndroidSDK: function(t, i, e) {
jsb.reflection.callStaticMethod(n, "initSDKByZone", "(ILjava/lang/String;)V", t, e);
jsb.reflection.callStaticMethod(n, "setInvokeDelegate", "(Ljava/lang/String;)V", i);
},
initAndroidAbtConfigJson: function(t, i, e, o, s, l, c) {
jsb.reflection.callStaticMethod(n, "initAbtConfigJsonForJs", "(Ljava/lang/String;ZILjava/lang/String;Ljava/lang/String;ILjava/lang/String;)V", t, i, e, o, s, l, c);
},
getAndroidAbtConfig: function(t) {
return jsb.reflection.callStaticMethod(n, "getAbtConfig", "(Ljava/lang/String;)Ljava/lang/String;", t);
},
showAndroidRewardDebugUI: function() {
jsb.reflection.callStaticMethod(n, "showRewardDebugActivity", "()V");
},
setAndroidRewardVideoLoadCallback: function() {
jsb.reflection.callStaticMethod(n, "setRewardVideoLoadCallback", "()V");
},
isAndroidRewardReady: function() {
return jsb.reflection.callStaticMethod(n, "isRewardReady", "()Z");
},
showAndroidRewardVideo: function(t) {
null == t && (t = "reward_video");
jsb.reflection.callStaticMethod(n, "showRewardVideo", "(Ljava/lang/String;)V", t);
},
setAndroidInterstitialLoadCallback: function(t) {
jsb.reflection.callStaticMethod(n, "setInterstitialCallbackAt", "(Ljava/lang/String;)V", t);
},
isAndroidInterstitialReadyAsyn: function(t, i) {
jsb.reflection.callStaticMethod(n, "isInterstitialReadyForJs", "(Ljava/lang/String;Ljava/lang/String;)V", t, i);
},
isAndroidInterstitialReady: function(t) {
return jsb.reflection.callStaticMethod(n, "isInterstitialReady", "(Ljava/lang/String;)Z", t);
},
showAndroidInterstitialAd: function(t) {
jsb.reflection.callStaticMethod(n, "showInterstitialForJs", "(Ljava/lang/String;)V", t);
},
showAndroidInterstitialDebugUI: function() {
jsb.reflection.callStaticMethod(n, "showInterstitialDebugActivityForJs", "()V");
},
removeAndroidBannerAdAt: function(t) {
jsb.reflection.callStaticMethod(n, "removeBanner", "(Ljava/lang/String;)V", t);
},
showAndroidBannerAdAtTop: function(t) {
jsb.reflection.callStaticMethod(n, "showTopBanner", "(Ljava/lang/String;)V", t);
},
showAndroidBannerAdAtBottom: function(t) {
jsb.reflection.callStaticMethod(n, "showBottomBanner", "(Ljava/lang/String;)V", t);
},
hideAndroidBannerAdAtTop: function() {
jsb.reflection.callStaticMethod(n, "hideTopBanner", "()V");
},
hideAndroidBannerAdAtBottom: function() {
jsb.reflection.callStaticMethod(n, "hideBottomBanner", "()V");
},
loadAndroidAdsByManual: function() {
jsb.reflection.callStaticMethod(n, "loadAnroidAdsByManual", "()V");
},
exitAndroidApp: function() {
jsb.reflection.callStaticMethod(n, "exitAndroidApp", "()V");
},
setAndroidManifestPackageName: function(t) {
jsb.reflection.callStaticMethod(n, "setManifestPackageName", "(Ljava/lang/String;)V", t);
},
onAndroidBackPressed: function() {
jsb.reflection.callStaticMethod(n, "onBackPressed", "()V");
},
setAndroidCustomerId: function(t) {
jsb.reflection.callStaticMethod(n, "setCustomerIdForJs", "(Ljava/lang/String;)V", t);
},
updateAndroidAccessPrivacyInfoStatus: function(t) {
jsb.reflection.callStaticMethod(n, "updateAccessPrivacyInfoStatus", "(I)V", t);
},
getAndroidAccessPrivacyInfoStatus: function() {
return jsb.reflection.callStaticMethod(n, "getAccessPrivacyInfoStatus", "()I");
},
notifyAndroidAccessPrivacyInfoStatus: function(t, i) {
jsb.reflection.callStaticMethod(n, "notifyAccessPrivacyInfoStatus", "(Ljava/lang/String;I)V", t, i);
},
isAndroidEuropeanUnionUser: function(t, i) {
jsb.reflection.callStaticMethod(n, "isEuropeanUnionUser", "(Ljava/lang/String;I)V", t, i);
},
reportIvokePluginMethodReceive: function(t) {
jsb.reflection.callStaticMethod(n, "reportIvokePluginMethodReceive", "(Ljava/lang/String;)V", t);
},
reportRDRewardClose: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardClose", "(Ljava/lang/String;)V", t);
},
reportRDRewardClick: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardClick", "(Ljava/lang/String;)V", t);
},
reportRDRewardGiven: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardGiven", "(Ljava/lang/String;)V", t);
},
reportRDShowDid: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDShowDid", "(Ljava/lang/String;)V", t);
},
reportRDRewardCancel: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardCancel", "(Ljava/lang/String;)V", t);
},
reportILClose: function(t, i) {
jsb.reflection.callStaticMethod(n, "reportILClose", "(Ljava/lang/String;Ljava/lang/String;)V", void 0 == i ? "" : i, t);
},
reportILClick: function(t, i) {
jsb.reflection.callStaticMethod(n, "reportILClick", "(Ljava/lang/String;Ljava/lang/String;)V", void 0 == i ? "" : i, t);
},
reportILShowDid: function(t, i) {
jsb.reflection.callStaticMethod(n, "reportILShowDid", "(Ljava/lang/String;Ljava/lang/String;)V", void 0 == i ? "" : i, t);
},
isOnlineDebugReportEnable: function() {
return jsb.reflection.callStaticMethod(n, "isReportOnlineEnable", "()Z");
}
};
i.exports = s;
cc._RF.pop();
}, {} ],
UPLTVIos: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "65bbaI2Vx5PO4k9Msc0YwHQ", "UPLTVIos");
var n = "UpAdsBrigeJs", o = !1, s = s || {
setShowLog: function(t) {
void 0 != t && null != t && (o = t);
},
printJsLog: function(t) {
o && void 0 != t && null != t && jsb.reflection.callStaticMethod(n, "printJsLog:", t);
},
initIosSDK: function(t, i, e) {
void 0 != e && null != e ? jsb.reflection.callStaticMethod(n, "initSdkByJs:withCallback:", t, e) : jsb.reflection.callStaticMethod(n, "initSdkByJs:", t);
jsb.reflection.callStaticMethod(n, "setVokeMethod:", i);
},
initIosAbtConfigJson: function(t, i, e, o, s, l, c) {
jsb.reflection.callStaticMethod(n, "initAbtConfigJsonByJs:complete:paid:channel:gender:age:tags:", t, i, e, o, s, l, c);
},
getIosAbtConfig: function(t) {
return jsb.reflection.callStaticMethod(n, "getIosAbtConfigByJs:", t);
},
showIosRewardDebugUI: function() {
jsb.reflection.callStaticMethod(n, "showRewardDebugActivityByJs");
},
setIosRewardVideoLoadCallback: function() {
jsb.reflection.callStaticMethod(n, "setRewardVideoLoadCallbackByJs");
},
isIosRewardReady: function() {
return jsb.reflection.callStaticMethod(n, "isIosRewardReadyByJs");
},
showIosRewardVideo: function(t) {
jsb.reflection.callStaticMethod(n, "showIosRewardVideoByJs:", t);
},
isIosInterstitialReadyAsyn: function(t, i) {
jsb.reflection.callStaticMethod(n, "isInterstitialReadyAsynByJs:callback:", t, i);
},
isIosInterstitialReady: function(t) {
return jsb.reflection.callStaticMethod(n, "isInterstitialReadyByJs:", t);
},
showIosInterstitialAd: function(t) {
jsb.reflection.callStaticMethod(n, "showInterstitialByJs:", t);
},
setIosInterstitialLoadCallback: function(t) {
jsb.reflection.callStaticMethod(n, "setInterstitialCallbackByJs:", t);
},
showIosInterstitialDebugUI: function() {
jsb.reflection.callStaticMethod(n, "showInterstitialDebugActivityByJs");
},
removeIosBannerAdAt: function(t) {
jsb.reflection.callStaticMethod(n, "removeBannerByJs:", t);
},
showIosBannerAdAtTop: function(t) {
jsb.reflection.callStaticMethod(n, "showTopBannerByJs:", t);
},
showIosBannerAdAtBottom: function(t) {
jsb.reflection.callStaticMethod(n, "showBottomBannerByJs:", t);
},
hideIosBannerAdAtTop: function() {
jsb.reflection.callStaticMethod(n, "hideTopBannerByJs");
},
hideIosBannerAdAtBottom: function() {
jsb.reflection.callStaticMethod(n, "hideBottomBannerByJs");
},
setIosTopBannerPading: function(t) {
var i = "0";
"number" == typeof t ? i = String(t) : "string" == typeof t && (i = t);
jsb.reflection.callStaticMethod(n, "setTopBannerPadingForIphonexByJs:", i);
},
showIosIconAdAt: function(t, i, e, o, s, l) {
jsb.reflection.callStaticMethod(n, "showIconX:y:width:height:rotationAngle:placementId:", t, i, e, o, s, l);
},
removeIosIconAdAt: function(t) {
jsb.reflection.callStaticMethod(n, "removeIcon:", t);
},
loadIosAdsByManual: function() {
jsb.reflection.callStaticMethod(n, "loadIosAdsByManualByJs");
},
exitIosApp: function() {
jsb.reflection.callStaticMethod(n, "exitIosAppByJs");
},
updateIosAccessPrivacyInfoStatus: function(t) {
jsb.reflection.callStaticMethod(n, "updateAccessPrivacyInfoStatusByJs:", t);
},
getIosAccessPrivacyInfoStatus: function() {
return jsb.reflection.callStaticMethod(n, "getAccessPrivacyInfoStatusByJs");
},
notifyIosAccessPrivacyInfoStatus: function(t, i) {
jsb.reflection.callStaticMethod(n, "notifyAccessPrivacyInfoStatusByJs:callId:", t, i);
},
isIosEuropeanUnionUser: function(t, i) {
jsb.reflection.callStaticMethod(n, "isEuropeanUnionUserByJs:callId:", t, i);
},
reportIvokePluginMethodReceive: function(t) {
jsb.reflection.callStaticMethod(n, "reportIvokePluginMethodReceiveByJs:", t);
},
reportRDRewardClose: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardCloseByJs:", t);
},
reportRDRewardClick: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardClickByJs:", t);
},
reportRDRewardGiven: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardGivenByJs:", t);
},
reportRDShowDid: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDShowDidByJs:", t);
},
reportRDRewardCancel: function(t) {
jsb.reflection.callStaticMethod(n, "reportRDRewardCancelByJs:", t);
},
reportILClose: function(t, i) {
jsb.reflection.callStaticMethod(n, "reportILCloseByJs:msg:", void 0 == i ? "" : i, t);
},
reportILClick: function(t, i) {
jsb.reflection.callStaticMethod(n, "reportILClickByJs:msg:", void 0 == i ? "" : i, t);
},
reportILShowDid: function(t, i) {
jsb.reflection.callStaticMethod(n, "reportILShowDidByJs:msg:", void 0 == i ? "" : i, t);
},
isOnlineDebugReportEnable: function() {
return jsb.reflection.callStaticMethod(n, "isReportOnlineEnableByJs");
}
};
i.exports = s;
cc._RF.pop();
}, {} ],
UPLTV: [ function(t, i, e) {
"use strict";
cc._RF.push(i, "b35dfmv1qtIaK8auM0v89p0", "UPLTV");
var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = t("UPLTVIos"), s = t("UPLTVAndroid"), l = function(t) {
0;
}, c = function(t, i, e) {
void 0 != f && (void 0 != e ? f.onlineDebugReport(t, i, e) : f.onlineDebugReport(t, i));
}, a = {
handleVokeParams: function(t) {
if (void 0 != t && null != t && "string" == typeof t) {
var i = t.indexOf(":"), e = null;
if (!(i <= 0)) {
var n = (e = t.substr(i + 1)).indexOf(","), o = e.substring(0, n), s = null, r = null;
if ((i = (e = e.substr(n + 1)).indexOf(":")) > 0 && (n = (e = e.substr(i + 1)).indexOf(",")) > 0) {
s = e.substring(0, n);
null != (e = e.substr(n + 1)) && (i = e.indexOf(":")) > 0 && (r = e.substr(i + 1));
}
0;
var u = void 0 != f && f.isOnlineDebugReportEnable();
u && c(a.Function_Receive_Callback, "CocosJs Receive message, callname:" + o + ", cpadid:" + s);
if (a.Function_Reward_DidLoadFail == o) if (null != d.rewardLoadFailCall && "function" == typeof d.rewardLoadFailCall) {
d.rewardLoadFailCall(s, r);
d.resetRewardLoadCallback();
} else l(); else if (a.Function_Reward_DidLoadSuccess == o) if (null != d.rewardLoadSuccessCall && "function" == typeof d.rewardLoadSuccessCall) {
d.rewardLoadSuccessCall(s, r);
d.resetRewardLoadCallback();
} else l(); else if (a.Function_Reward_DidOpen == o) {
if (null != (p = d.rewardShowCall) && "function" == typeof p) {
p(f.AdEventType.VIDEO_EVENT_DID_SHOW, s);
u && c(o, "CocosJs did run callback on video shown event.");
} else u && c(o, "CocosJs not run callback on video shown event.");
} else if (a.Function_Reward_DidClick == o) {
if (null != (p = d.rewardShowCall) && "function" == typeof p) {
p(f.AdEventType.VIDEO_EVENT_DID_CLICK, s);
u && c(o, "CocosJs did run callback on video clicked event.");
} else u && c(o, "CocosJs not run callback on video clicked event.");
} else if (a.Function_Reward_DidClose == o) {
if (null != (p = d.rewardShowCall) && "function" == typeof p) {
p(f.AdEventType.VIDEO_EVENT_DID_CLOSE, s);
u && c(o, "CocosJs did run callback on video closed event.");
} else u && c(o, "CocosJs not run callback on video closed event.");
} else if (a.Function_Reward_DidGivien == o) {
if (null != (p = d.rewardShowCall) && "function" == typeof p) {
p(f.AdEventType.VIDEO_EVENT_DID_GIVEN_REWARD, s);
u && c(o, "CocosJs did run callback on video reward given event.");
} else u && c(o, "CocosJs not run callback on video reward given event.");
} else if (a.Function_Reward_DidAbandon == o) {
if (null != (p = d.rewardShowCall) && "function" == typeof p) {
p(f.AdEventType.VIDEO_EVENT_DID_ABANDON_REWARD, s);
u && c(o, "CocosJs did run callback on video reward cancel event.");
} else u && c(o, "CocosJs not run callback on video reward cancel event.");
} else if (a.Function_Interstitial_DidLoadFail == o) {
var v = s + "_Interstitial";
if (null != (h = d.get(v))) {
null != (p = h.interstitialLoadFailCall) && "function" == typeof p && p(s, r);
d.remove(v);
l();
}
} else if (a.Function_Interstitial_DidLoadSuccess == o) {
v = s + "_Interstitial";
if (null != (h = d.get(v))) {
null != (p = h.interstitialLoadSuccessCall) && "function" == typeof p ? p(s, r) : l();
d.remove(v);
} else l();
} else if (a.Function_Interstitial_Didshow == o) {
var I = !1;
if (null != (h = d.get(s))) {
if (null != (p = h.interstitialShowCall) && "function" == typeof p) {
p(f.AdEventType.INTERSTITIAL_EVENT_DID_SHOW, s);
if (u) {
I = !0;
c(o, "CocosJs did run callback on il ad shown event at " + s, s);
}
}
}
u && 0 == I && c(o, "CocosJs not run callback on il ad shown event at " + s, s);
} else if (a.Function_Interstitial_Didclose == o) {
I = !1;
if (null != (h = d.get(s))) {
if (null != (p = h.interstitialShowCall) && "function" == typeof p) {
p(f.AdEventType.INTERSTITIAL_EVENT_DID_CLOSE, s);
if (u) {
I = !0;
c(o, "CocosJs did run callback on il ad closed event at " + s, s);
}
}
}
u && 0 == I && c(o, "CocosJs not run callback on il ad closed event at " + s, s);
} else if (a.Function_Interstitial_Didclick == o) {
I = !1;
if (null != (h = d.get(s))) {
if (null != (p = h.interstitialShowCall) && "function" == typeof p) {
p(f.AdEventType.INTERSTITIAL_EVENT_DID_CLICK, s);
if (u) {
I = !0;
c(o, "CocosJs did run callback on il ad clicked event at " + s, s);
}
}
}
u && 0 == I && c(o, "CocosJs not run callback on il ad clicked event at " + s, s);
} else if (a.Function_Banner_DidRemove == o) {
if (null != (h = d.get(s))) {
null != (p = h.bannerEventCall) && "function" == typeof p && p(f.AdEventType.BANNER_EVENT_DID_REMOVED, s);
}
d.remove(s);
} else if (a.Function_Banner_DidClick == o) {
if (null != (h = d.get(s))) {
null != (p = h.bannerEventCall) && "function" == typeof p && p(f.AdEventType.BANNER_EVENT_DID_CLICK, s);
}
} else if (a.Function_Banner_DidShow == o) {
if (null != (h = d.get(s))) {
null != (p = h.bannerEventCall) && "function" == typeof p && p(f.AdEventType.BANNER_EVENT_DID_SHOW, s);
}
} else if (a.Function_Icon_DidLoad == o) {
if (null != (h = d.get(s))) {
null != (p = h.iconEventCall) && "function" == typeof p && p(f.AdEventType.ICON_EVENT_DID_LOAD, s);
}
} else if (a.Function_Icon_DidLoadFail == o) {
if (null != (h = d.get(s))) {
null != (p = h.iconEventCall) && "function" == typeof p && p(f.AdEventType.ICON_EVENT_DID_LOADFAIL, s);
}
} else if (a.Function_Icon_DidShow == o) {
if (null != (h = d.get(s))) {
null != (p = h.iconEventCall) && "function" == typeof p && p(f.AdEventType.ICON_EVENT_DID_SHOW, s);
}
} else if (a.Function_Icon_DidClick == o) {
var h;
if (null != (h = d.get(s))) {
var p;
null != (p = h.iconEventCall) && "function" == typeof p && p(f.AdEventType.ICON_EVENT_DID_CLICK, s);
}
} else cc.sys.os === cc.sys.OS_ANDROID && (a.Function_ExitAd_DidShow == o ? null != d.backPressedCall && "function" == typeof d.backPressedCall ? d.backPressedCall(f.AdEventType.EXITAD_EVENT_DID_SHOW, r) : l() : a.Function_ExitAd_DidClick == o ? null != d.backPressedCall && "function" == typeof d.backPressedCall ? d.backPressedCall(f.AdEventType.EXITAD_EVENT_DID_CLICK, r) : l() : a.Function_ExitAd_DidClickMore == o ? null != d.backPressedCall && "function" == typeof d.backPressedCall ? d.backPressedCall(f.AdEventType.EXITAD_EVENT_DID_CLICKMORE, r) : l() : a.Function_ExitAd_DidExit == o ? null != d.backPressedCall && "function" == typeof d.backPressedCall ? d.backPressedCall(f.AdEventType.EXITAD_EVENT_DID_EXIT, r) : l() : a.Function_ExitAd_DidCancel == o && (null != d.backPressedCall && "function" == typeof d.backPressedCall ? d.backPressedCall(f.AdEventType.EXITAD_EVENT_DID_CANCEL, r) : l()));
}
}
},
Function_Receive_Callback: "receive_callback",
Function_Reward_DidOpen: "reward_didopen",
Function_Reward_DidClick: "reward_didclick",
Function_Reward_DidClose: "reward_didclose",
Function_Reward_DidGivien: "reward_didgiven",
Function_Reward_DidAbandon: "reward_didabandon",
Function_Interstitial_Didshow: "interstitial_didshow",
Function_Interstitial_Didclose: "interstitial_didclose",
Function_Interstitial_Didclick: "interstitial_didclick",
Function_Banner_DidShow: "banner_didshow",
Function_Banner_DidClick: "banner_didclick",
Function_Banner_DidRemove: "banner_didremove",
Function_Reward_DidLoadFail: "reward_didloadfail",
Function_Reward_DidLoadSuccess: "reward_didloadsuccess",
Function_Interstitial_DidLoadFail: "interstitial_didloadfail",
Function_Interstitial_DidLoadSuccess: "interstitial_didloadsuccess",
Function_ExitAd_DidShow: "exitad_didshow",
Function_ExitAd_DidClick: "exitad_didclick",
Function_ExitAd_DidClickMore: "exitad_didclickmore",
Function_ExitAd_DidExit: "exitad_onexit",
Function_ExitAd_DidCancel: "exitad_oncancel",
Function_Icon_DidLoad: "icon_didload",
Function_Icon_DidLoadFail: "icon_didloadfail",
Function_Icon_DidShow: "icon_didshow",
Function_Icon_DidClick: "icon_didclick"
}, d = {
map: new Object(),
length: 0,
rewardLoadFailCall: null,
rewardLoadSuccessCall: null,
rewardShowCall: null,
backPressedCall: null,
resetRewardLoadCallback: function() {
this.rewardLoadFailCall = null;
this.rewardLoadSuccessCall = null;
},
size: function() {
return this.length;
},
put: function(t, i) {
this.map["_" + t] || ++this.length;
this.map["_" + t] = i;
},
remove: function(t) {
if (this.map["_" + t]) {
--this.length;
return delete this.map["_" + t];
}
return !1;
},
exist: function(t) {
return !!this.map["_" + t];
},
get: function(t) {
return this.map["_" + t] ? this.map["_" + t] : null;
},
print: function() {
var t = "";
for (var i in this.map) t += "/n" + i + "  Value:" + this.map[i];
l();
return t;
},
test: function() {
this.put("1", function() {});
this.put("2", function(t) {
cc.log("===> js map function call at 2, v type: %s", "undefined" == typeof t ? "undefined" : n(t));
});
this.put("4", function() {});
l(this.exist("1"));
l(this.exist("3"));
var t = this.get("2");
t && t("========================");
this.print();
this.remove("1");
this.remove("3");
l(this.size());
}
}, r = function() {
cc.sys.os === cc.sys.OS_IOS && null != f ? void 0 != f.upltvbridge && null != f.upltvbridge || (f.upltvbridge = o) : cc.sys.os === cc.sys.OS_ANDROID && null != f && (void 0 != f.upltvbridge && null != f.upltvbridge || (f.upltvbridge = s));
}, u = {
initSdkSuccessed: !1,
initVokeCall: null,
initSdkCallback: function(t) {
"true" != t && 1 != t || (this.initSdkSuccessed = !0);
cc.log("===> js initSdkCallback..., %s", t);
void 0 != this.initVokeCall && null != this.initVokeCall && "function" == typeof this.initVokeCall && this.initVokeCall(this.initSdkSuccessed);
void 0 != this.initVokeCall && (this.initVokeCall = null);
},
vokeMethod: function(t) {
a.handleVokeParams(t);
},
vokeILReadyMethod: function(t, i) {
this.handleILReadyMethod(t, i);
},
handleILReadyMethod: function(t, i) {
var e = "ILReady_" + t, n = d.get(e);
if (null != n) {
d.remove(e);
if ("function" == typeof n) {
var o = !1;
"true" != i && 1 != i || (o = !0);
n(o);
}
}
}
}, f = f || {
upltvbridge: null,
intSdk: function(t, i) {
if (1 != cc.bridgeInterface.initSdkSuccessed) {
l();
if (void 0 != i && null != i && "function" == typeof i) {
l();
cc.bridgeInterface.initVokeCall = i;
}
var e = "cc.bridgeInterface.vokeMethod", n = "cc.bridgeInterface.initSdkCallback";
r();
if (cc.sys.os === cc.sys.OS_IOS) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
this.upltvbridge.setShowLog(!1);
this.upltvbridge.initIosSDK(t, e, n);
}
} else if (cc.sys.os === cc.sys.OS_ANDROID && void 0 != this.upltvbridge && null != this.upltvbridge) {
this.upltvbridge.setShowLog(!1);
this.upltvbridge.initAndroidSDK(t, e, n);
}
} else l();
},
initAbtConfigJson: function(t, i, e, n, o, s, l) {
var c = null;
if (void 0 != l && null != l && l instanceof Array) {
var a = l.length;
c = '{"array":[';
for (var d = 0; d < a; d++) {
c += '"' + l[d];
c += d < a - 1 ? '",' : '"]}';
}
}
void 0 == i && (i = !1);
void 0 == e && (e = 0);
void 0 == n && (n = "");
void 0 == o && (o = "");
void 0 == s && (s = -1);
cc.sys.os === cc.sys.OS_IOS ? void 0 != this.upltvbridge && null != this.upltvbridge && this.upltvbridge.initIosAbtConfigJson(t, i, e, n, o, s, c) : cc.sys.os === cc.sys.OS_ANDROID && void 0 != this.upltvbridge && null != this.upltvbridge && this.upltvbridge.initAndroidAbtConfigJson(t, i, e, n, o, s, c);
},
getAbtConfig: function(t) {
if (void 0 != t && null != t && "string" == typeof t) if (cc.sys.os === cc.sys.OS_IOS) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
return "" == (i = this.upltvbridge.getIosAbtConfig(t)) ? null : i;
}
} else if (cc.sys.os === cc.sys.OS_ANDROID && void 0 != this.upltvbridge && null != this.upltvbridge) {
var i;
return "" == (i = this.upltvbridge.getAndroidAbtConfig(t)) ? null : i;
}
return null;
},
showRewardDebugUI: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.showIosRewardDebugUI() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.showAndroidRewardDebugUI());
},
setRewardVideoLoadCallback: function(t, i) {
if (void 0 != t && null != t && "function" == typeof t) if (void 0 != i && null != i && "function" == typeof i) {
d.rewardLoadFailCall = void 0 == i ? null : i;
d.rewardLoadSuccessCall = void 0 == t ? null : t;
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.setIosRewardVideoLoadCallback() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.setAndroidRewardVideoLoadCallback());
} else l(); else l();
},
setRewardVideoShowCallback: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t || "function" != typeof t) {
l();
return;
}
d.rewardShowCall = t;
}
},
isRewardReady: function() {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (cc.sys.os === cc.sys.OS_IOS) return this.upltvbridge.isIosRewardReady();
if (cc.sys.os === cc.sys.OS_ANDROID) return this.upltvbridge.isAndroidRewardReady();
}
return !1;
},
showRewardVideo: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
void 0 == t && (t = null);
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.showIosRewardVideo(t) : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.showAndroidRewardVideo(t);
}
},
isInterstitialReadyAsyn: function(t, i) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
if (i == t || null == i) {
l();
return;
}
if ("function" != typeof i) {
l();
return;
}
var e = "ILReady_" + t;
d.put(e, i);
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.isIosInterstitialReadyAsyn(t, "cc.bridgeInterface.vokeILReadyMethod") : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.isAndroidInterstitialReadyAsyn(t, "cc.bridgeInterface.vokeILReadyMethod");
}
},
isInterstitialReady: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
if (cc.sys.os === cc.sys.OS_IOS) return this.upltvbridge.isIosInterstitialReady(t);
if (cc.sys.os === cc.sys.OS_ANDROID) return this.upltvbridge.isAndroidInterstitialReady(t);
}
return !1;
},
showInterstitialAd: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.showIosInterstitialAd(t) : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.showAndroidInterstitialAd(t);
}
},
setInterstitialLoadCallback: function(t, i, e) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
if (void 0 == i || null == i || "function" != typeof i) {
l();
return;
}
if (void 0 == e || null == e || "function" != typeof e) {
l();
return;
}
var n = t + "_Interstitial", o = d.get(n) || {};
o.interstitialLoadSuccessCall = i;
o.interstitialLoadFailCall = e;
d.put(n, o);
l(d.size());
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.setIosInterstitialLoadCallback(t) : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.setAndroidInterstitialLoadCallback(t);
}
},
setInterstitialShowCallback: function(t, i) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
if (void 0 == i || null == i || "function" != typeof i) {
l();
return;
}
var e = t, n = d.get(e) || {};
n.interstitialShowCall = i;
d.put(e, n);
}
},
showInterstitialDebugUI: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.showIosInterstitialDebugUI() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.showAndroidInterstitialDebugUI());
},
removeBannerAdAt: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.removeIosBannerAdAt(t) : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.removeAndroidBannerAdAt(t);
}
},
showBannerAdAtTop: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.showIosBannerAdAtTop(t) : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.showAndroidBannerAdAtTop(t);
}
},
showBannerAdAtBottom: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.showIosBannerAdAtBottom(t) : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.showAndroidBannerAdAtBottom(t);
}
},
hideBannerAdAtTop: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.hideIosBannerAdAtTop() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.hideAndroidBannerAdAtTop());
},
hideBannerAdAtBottom: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.hideIosBannerAdAtBottom() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.hideAndroidBannerAdAtBottom());
},
setTopBannerPadingForIphoneX: function(t) {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.setIosTopBannerPading(t) : (cc.sys.os, 
cc.sys.OS_ANDROID));
},
setBannerShowCallback: function(t, i) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
if (void 0 == i || null == i || "function" != typeof i) {
l();
return;
}
var e = d.get(t) || {};
e.bannerEventCall = i;
d.put(t, e);
}
},
setIconCallback: function(t, i) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
if (void 0 == i || null == i || "function" != typeof i) {
l();
return;
}
var e = d.get(t) || {};
e.iconEventCall = i;
d.put(t, e);
}
},
showIconAd: function(t, i, e, n, o, s) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == s || null == s) {
l();
return;
}
cc.sys.os === cc.sys.OS_IOS && this.upltvbridge.showIosIconAdAt(t, i, e, n, o, s);
}
},
removeIconAd: function(t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
if (void 0 == t || null == t) {
l();
return;
}
cc.sys.os === cc.sys.OS_IOS && this.upltvbridge.removeIosIconAdAt(t);
}
},
loadAdsByManual: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.loadIosAdsByManual() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.loadAndroidAdsByManual());
},
exitApp: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_IOS ? this.upltvbridge.exitIosApp() : cc.sys.os === cc.sys.OS_ANDROID && this.upltvbridge.exitAndroidApp());
},
setManifestPackageName: function(t) {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_ANDROID ? this.upltvbridge.setAndroidManifestPackageName(t) : (cc.sys.os, 
cc.sys.OS_ANDROID));
},
onBackPressed: function() {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_ANDROID ? this.upltvbridge.onAndroidBackPressed() : (cc.sys.os, 
cc.sys.OS_IOS));
},
setCustomerId: function(t) {
r();
if (void 0 != this.upltvbridge && null != this.upltvbridge) if (cc.sys.os === cc.sys.OS_ANDROID) {
if (void 0 == t || null == t) {
l();
return;
}
this.upltvbridge.setAndroidCustomerId(t);
} else cc.sys.os, cc.sys.OS_IOS;
},
setBackPressedCallback: function(t) {
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_ANDROID ? d.backPressedCall = void 0 == t ? null : t : (cc.sys.os, 
cc.sys.OS_IOS));
},
updateAccessPrivacyInfoStatus: function(t) {
r();
void 0 != t && null != t && (t == f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusUnkown || t == f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusAccepted || t == f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusDefined) ? void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_ANDROID ? this.upltvbridge.updateAndroidAccessPrivacyInfoStatus(t) : cc.sys.os === cc.sys.OS_IOS && this.upltvbridge.updateIosAccessPrivacyInfoStatus(t)) : l();
},
getAccessPrivacyInfoStatus: function() {
r();
var t = 0;
void 0 != this.upltvbridge && null != this.upltvbridge && (cc.sys.os === cc.sys.OS_ANDROID ? t = this.upltvbridge.getAndroidAccessPrivacyInfoStatus() : cc.sys.os === cc.sys.OS_IOS && (t = this.upltvbridge.getIosAccessPrivacyInfoStatus()));
return 1 == t ? f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusAccepted : 2 == t ? f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusDefined : f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusUnkown;
},
notifyAccessPrivacyInfoStatus: function(t) {
r();
if (void 0 != t && null != t) if ("function" == typeof t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
f.GDPRPermissionEnum.functionId = f.GDPRPermissionEnum.functionId + 1;
var i = f.GDPRPermissionEnum.functionId, e = "" + i;
d.put(e, t);
var n = "upltv.GDPRPermissionEnum.javaCall";
cc.sys.os === cc.sys.OS_ANDROID ? this.upltvbridge.notifyAndroidAccessPrivacyInfoStatus(n, i) : cc.sys.os === cc.sys.OS_IOS && this.upltvbridge.notifyIosAccessPrivacyInfoStatus(n, e);
}
} else l(); else l();
},
isEuropeanUnionUser: function(t) {
r();
if (void 0 != t && null != t) if ("function" == typeof t) {
if (void 0 != this.upltvbridge && null != this.upltvbridge) {
f.GDPRPermissionEnum.functionId = f.GDPRPermissionEnum.functionId + 1;
var i = f.GDPRPermissionEnum.functionId, e = "" + i;
d.put(e, t);
var n = "upltv.GDPRPermissionEnum.javaCall";
cc.sys.os === cc.sys.OS_ANDROID ? this.upltvbridge.isAndroidEuropeanUnionUser(n, i) : cc.sys.os === cc.sys.OS_IOS && this.upltvbridge.isIosEuropeanUnionUser(n, e);
}
} else l(); else l();
},
isOnlineDebugReportEnable: function() {
return (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) && this.upltvbridge.isOnlineDebugReportEnable();
},
onlineDebugReport: function(t, i, e) {
cc.sys.os !== cc.sys.OS_ANDROID && cc.sys.os !== cc.sys.OS_IOS || (a.Function_Receive_Callback == t ? this.upltvbridge.reportIvokePluginMethodReceive(i) : a.Function_Reward_DidOpen == t ? this.upltvbridge.reportRDShowDid(i) : a.Function_Reward_DidClick == t ? this.upltvbridge.reportRDRewardClick(i) : a.Function_Reward_DidClose == t ? this.upltvbridge.reportRDRewardClose(i) : a.Function_Reward_DidGivien == t ? this.upltvbridge.reportRDRewardGiven(i) : a.Function_Reward_DidAbandon == t ? this.upltvbridge.reportRDRewardCancel(i) : a.Function_Interstitial_Didshow == t ? this.upltvbridge.reportILShowDid(i, e) : a.Function_Interstitial_Didclick == t ? this.upltvbridge.reportILClick(i, e) : a.Function_Interstitial_Didclose == t && this.upltvbridge.reportILClose(i, e));
}
};
f.GDPRPermissionEnum = {
functionId: 0,
javaCall: function(t, i) {
var e = "" + t, n = d.get(e);
if (null != n) {
null != n && "function" == typeof n && n(i);
d.remove(e);
}
}
};
f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusUnkown = 0;
f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusAccepted = 1;
f.GDPRPermissionEnum.UPAccessPrivacyInfoStatusDefined = 2;
f.AdEventType = {};
f.AdEventType.VIDEO_EVENT_DID_SHOW = 0;
f.AdEventType.VIDEO_EVENT_DID_CLICK = 1;
f.AdEventType.VIDEO_EVENT_DID_CLOSE = 2;
f.AdEventType.VIDEO_EVENT_DID_GIVEN_REWARD = 3;
f.AdEventType.VIDEO_EVENT_DID_ABANDON_REWARD = 4;
f.AdEventType.INTERSTITIAL_EVENT_DID_SHOW = 5;
f.AdEventType.INTERSTITIAL_EVENT_DID_CLICK = 6;
f.AdEventType.INTERSTITIAL_EVENT_DID_CLOSE = 7;
f.AdEventType.BANNER_EVENT_DID_SHOW = 8;
f.AdEventType.BANNER_EVENT_DID_CLICK = 9;
f.AdEventType.BANNER_EVENT_DID_REMOVED = 10;
f.AdEventType.EXITAD_EVENT_DID_SHOW = 11;
f.AdEventType.EXITAD_EVENT_DID_CLICK = 12;
f.AdEventType.EXITAD_EVENT_DID_CLICKMORE = 13;
f.AdEventType.EXITAD_EVENT_DID_EXIT = 14;
f.AdEventType.EXITAD_EVENT_DID_CANCEL = 15;
f.AdEventType.ICON_EVENT_DID_LOAD = 16;
f.AdEventType.ICON_EVENT_DID_LOADFAIL = 17;
f.AdEventType.ICON_EVENT_DID_SHOW = 18;
f.AdEventType.ICON_EVENT_DID_CLICK = 19;
i.exports.upltv = f;
i.exports.bridgeInterface = u;
cc._RF.pop();
}, {
UPLTVAndroid: "UPLTVAndroid",
UPLTVIos: "UPLTVIos"
} ]
}, {}, [ "HelloWorld", "UPLTV", "UPLTVAndroid", "UPLTVIos" ]);