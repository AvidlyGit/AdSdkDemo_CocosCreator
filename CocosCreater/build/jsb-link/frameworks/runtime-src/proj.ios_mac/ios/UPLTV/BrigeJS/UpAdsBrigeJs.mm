//
//  AvidlyAdsBrigeJs.m
//  MyJsGame-mobile
//
//  Created by samliu on 2018/3/5.
//

#import "UpAdsBrigeJs.h"
#import "cocos2d.h"
#include "scripting/js-bindings/manual/ScriptingCore.h"
#import <UPSDK/UPSDKJsProxy.h>
#import <UIKit/UIKit.h>
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

@implementation UpAdsBrigeJs

static NSString* vokeName;

+ (void)initSdkByJs:(NSInteger)zone {
    //NSLog(@"===> js initSdkByJs..., zone: %d", zone);
    [UPSDKJsProxy initSDKByZoneForJs:zone];
}

+ (void)initSdkByJs:(NSInteger)zone withCallback:(NSString*)callback {
    //NSLog(@"===> js initSdkByJs..., zone: %d, withCallback:%@", zone, callback);
    [UPSDKJsProxy initSDKByZoneForJs:zone];
    
    std::string funcName = [callback UTF8String];
    std::string param001 = [@"true" UTF8String];
//    std::string jsCallStr = cocos2d::StringUtils::format("%s(\"%s\");",funcName.c_str(), param001.c_str());
//    NSLog(@"jsCallStr = %s", jsCallStr.c_str());
//    ScriptingCore::getInstance()->evalString(jsCallStr.c_str());
    
    [UpAdsBrigeJs vokeMethod: callback arg1: @"true" arg2:nil];
}

+ (void)setVokeMethod:(NSString*)method {
    if (method) {
        //vokeName = ((std::string)[[method copy] UTF8String]).c_str();
        vokeName = [method copy];
        //NSLog(@"===> js setVokeMethod: %@", vokeName);
    }
}

+ (void)initAbtConfigJsonByJs:(NSString*)gameid complete:(BOOL)complete paid:(NSString*) pay channel:(NSString*)name gender:(NSString*)gender age:(NSString*) age tags:(NSString*)tag {
    NSMutableDictionary * dic = [[NSMutableDictionary alloc] init];
    [dic setObject:gameid forKey:@"game_id"];
    [dic setObject:[NSNumber numberWithBool:complete] forKey:@"complete"];
    [dic setObject:pay forKey:@"paid"];
    [dic setObject:name?name:@"" forKey:@"channel_name"];
    [dic setObject:gender forKey:@"gender"];
    [dic setObject:age forKey:@"age"];
    if (tag) {
        [dic setObject:tag forKey:@"tag"];
    }
    
    //NSLog(@"===> js initAbtConfigJsonByJs: %@", dic);
    [UPSDKJsProxy initAbtConfigJsonForJs:dic];
}

+ (NSString*)getIosAbtConfigByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js getIosAbtConfigByJs: %@", cpPlaceId);
    NSString *r = [UPSDKJsProxy getIosAbtConfigForJs:cpPlaceId];
    //NSLog(@"===> js getIosAbtConfigByJs r: %@", r);
    return r;
}

+ (void)showRewardDebugActivityByJs {
    //NSLog(@"===> js showRewardDebugActivityByJs");
    [UPSDKJsProxy showRewardDebugActivityForJs];
}

+ (void)setRewardVideoLoadCallbackByJs {
    //NSLog(@"===> js setRewardVideoLoadCallbackByJs");
    [UPSDKJsProxy setRewardVideoLoadCallbackForJs];
}

+ (BOOL)isIosRewardReadyByJs {
    //NSLog(@"===> js isIosRewardReadyByJs");
    return [UPSDKJsProxy isRewardReadyForJs];
}

+ (void)showIosRewardVideoByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js showIosRewardVideoByJs");
    [UPSDKJsProxy showRewardVideoForJs:cpPlaceId];
}

+ (void)isInterstitialReadyAsynByJs:(NSString*)cpPlaceId callback:(NSString*)call {
    //NSLog(@"===> js isInterstitialReadyAsynByJs:%@ callback:%@", cpPlaceId, call);
    if (cpPlaceId && call) {
        dispatch_async(dispatch_get_main_queue(), ^{
            BOOL r = [UPSDKJsProxy isInterstitialReadyForJs:cpPlaceId];
            [UpAdsBrigeJs vokeMethod: call arg1: cpPlaceId arg2:r?@"true":@"false"];
        });
    }
}

+ (BOOL)isInterstitialReadyByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js isInterstitialReadyByJs:%@", cpPlaceId);
    return [UPSDKJsProxy isInterstitialReadyForJs:cpPlaceId];
}

+ (void)showInterstitialByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js showInterstitialByJs:%@", cpPlaceId);
    [UPSDKJsProxy showInterstitialForJs:cpPlaceId];
}

+ (void)setInterstitialCallbackByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js setInterstitialCallbackByJs:%@", cpPlaceId);
    [UPSDKJsProxy setInterstitialCallbackForJs:cpPlaceId];
}

+ (void)showInterstitialDebugActivityByJs {
    //NSLog(@"===> js showInterstitialDebugActivityByJs");
    [UPSDKJsProxy showInterstitialDebugActivityForJs];
}


+ (void)removeBannerByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js removeBannerByJs:%@", cpPlaceId);
    [UPSDKJsProxy removeBannerForJs:cpPlaceId];
}

+ (void)showTopBannerByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js showTopBannerByJs:%@", cpPlaceId);
    [UPSDKJsProxy showTopBannerForJs:cpPlaceId];
}

+ (void)showBottomBannerByJs:(NSString*)cpPlaceId {
    //NSLog(@"===> js showBottomBannerByJs:%@", cpPlaceId);
    [UPSDKJsProxy showBottomBannerForJs:cpPlaceId];
}

+ (void)hideTopBannerByJs {
    //NSLog(@"===> js hideTopBannerByJs");
    [UPSDKJsProxy hideTopBannerForJs];
}

+ (void)hideBottomBannerByJs {
    //NSLog(@"===> js hideBottomBannerByJs");
    [UPSDKJsProxy hideBottomBannerForJs];
}

+ (void)setTopBannerPadingForIphonexByJs:(NSString*)padding {
    //NSLog(@"===> js hideBottomBannerByJs:%@", padding);
    if (padding) {
        int p = [padding intValue];
        NSLog(@"===> js hideBottomBannerByJs:%d", p);
        if (p < -100 || p > 1000) {
            p = 0;
        }
        [UPSDKJsProxy setTopBannerPadingForIphonexForJs:p];
    }
    
}

+ (void)showIconX:(NSNumber *)xNumber y:(NSNumber *)yNumber width:(NSNumber *)widthNumber height:(NSNumber *)heightNumber rotationAngle:(NSNumber *)rotationAngleNumber placementId:(NSString *)placementId {
    
    double x = xNumber.doubleValue;
    double y = yNumber.doubleValue;
    double width = widthNumber.doubleValue;
    double height = heightNumber.doubleValue;
    double rotationAngle = rotationAngleNumber.doubleValue;
    [UPSDKJsProxy showIconX:x y:y width:width height:height rotationAngle:rotationAngle placementId:placementId];
}

+ (void)removeIcon:(NSString *)placementId {
    [UPSDKJsProxy removeIcon:placementId];
}

+ (void)loadIosAdsByManualByJs {
    [UPSDKJsProxy loadIosAdsByManualForJs];
}

+ (void)exitIosAppByJs {
    //
    [UPSDKJsProxy exitIosAppForJs];
}

+ (void)printJsLog:(NSString*)msg {
    NSLog(@"[printJsLog]%@", msg);
}


+ (void)isEuropeanUnionUserByJs:(NSString*)funcion callId:(NSString*) callId {
    [UPSDKJsProxy isEuropeanUnionUserForJs:^(BOOL isEuropeanUnion) {
        NSString* value = isEuropeanUnion ? @"true" : @"false";
        [UpAdsBrigeJs vokeMethod:funcion arg1:callId arg2:value];
    }];
}

+ (void)notifyAccessPrivacyInfoStatusByJs:(NSString*)funcion callId:(NSString*) callId {
    [UPSDKJsProxy notifyAccessPrivacyInfoStatusForJs:^(BOOL isAccepted) {
        NSString* value = isAccepted ? @"1" : @"2";
        [UpAdsBrigeJs vokeMethod:funcion arg1:callId arg2:value];
    }];
}

+ (int)getAccessPrivacyInfoStatusByJs {
    return [UPSDKJsProxy getAccessPrivacyInfoStatusForJs];
}

+ (void)updateAccessPrivacyInfoStatusByJs:(NSString*)value {
    //NSLog(@"[printJsLog] updateAccessPrivacyInfoStatusByJs %@", value);
    [UPSDKJsProxy updateAccessPrivacyInfoStatusForJs:value ? [value integerValue] : 0];
}

+ (void)reportIvokePluginMethodReceiveByJs:(NSString *)msg {
    [UPSDKJsProxy reportIvokePluginMethodReceiveForJs:msg];
}

+ (void)reportRDRewardCloseByJs:(NSString *)msg {
    [UPSDKJsProxy reportRDRewardCloseForJs:msg];
}

+ (void)reportRDRewardClickByJs:(NSString *)msg {
    [UPSDKJsProxy reportRDRewardClickForJs:msg];
}

+ (void)reportRDRewardGivenByJs:(NSString *)msg {
    [UPSDKJsProxy reportRDRewardGivenForJs:msg];
}

+ (void)reportRDShowDidByJs:(NSString *)msg {
    [UPSDKJsProxy reportRDShowDidForJs:msg];
}

+ (void)reportRDRewardCancelByJs:(NSString *)msg {
    [UPSDKJsProxy reportRDRewardCancelForJs:msg];
}

+ (void)reportILCloseByJs:(NSString *)cpid msg:(NSString *)msg {
    [UPSDKJsProxy reportILCloseForJs:cpid msg:msg];
}

+ (void)reportILClickByJs:(NSString *)cpid msg:(NSString *)msg {
    [UPSDKJsProxy reportILClickForJs:cpid msg:msg];
}

+ (void)reportILShowDidByJs:(NSString *)cpid msg:(NSString *)msg {
    [UPSDKJsProxy reportILShowDidForJs:cpid msg:msg];
}

+ (BOOL)isReportOnlineEnableByJs {
    return [UPSDKJsProxy isReportOnlineEnableForJs];
}

+ (void)vokeMethod:(NSString*) name arg1:(NSString*) param1 arg2:(NSString*)param2 {
    if (name == nil) {
        return;
    }
    std::string jsCallStr;
    std::string funcName = [name UTF8String];
    if (param1 == nil && param2 == nil) {
        jsCallStr = cocos2d::StringUtils::format("%s();",funcName.c_str());
    }
    else if (param1 != nil) {
        std::string param001 = [param1 UTF8String];
        if (param2) {
            std::string param002 = [param2 UTF8String];
            jsCallStr = cocos2d::StringUtils::format("%s(\"%s\",\"%s\");",funcName.c_str(), param001.c_str(), param002.c_str());
        }
        else {
            jsCallStr = cocos2d::StringUtils::format("%s(\"%s\");",funcName.c_str(), param001.c_str());
        }
    }
    else {
        return;
    }
    
    if (jsCallStr.c_str()) {
        //NSLog(@"===> js jsCallStr = %s", jsCallStr.c_str());
//        ScriptingCore::getInstance()->evalString(jsCallStr.c_str());
        se::ScriptEngine::getInstance()->evalString(jsCallStr.c_str());
    }
}
//"cc.bridgeInterface.vokeMethod(\"callname:banner_didshow,cpadsid:sample_banner,message:bannerAdDidShow at placeId:sample_banner\");"

extern "C" UIViewController* UnityGetGLViewController() {
    return [[[UIApplication sharedApplication] keyWindow] rootViewController];
}

extern "C" void UnitySendMessage(const char* objName, const char* funName, const char* param) {
   
    //[AvidlySDKLuaProxy cocosSendMessageForLua:funNameString withParam:paramString];
    if (vokeName) {
        //NSString * funNameString = funName ? [NSString stringWithUTF8String:funName] : nil;
        NSString * paramString = param ? [NSString stringWithUTF8String:param] : nil;
        [UpAdsBrigeJs vokeMethod: vokeName arg1: paramString arg2: nil];
    }
}

@end
