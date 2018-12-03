//
//  AvidlySDKLuaProxy.h
//  AvidlyAdsSDK
//
//  Created by samliu on 2018/3/6.
//  Copyright © 2018年 samliu. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface UPSDKJsProxy : NSObject

+ (void)initSDKByZoneForJs:(NSInteger)zone;

+ (void)initAbtConfigJsonForJs:(NSDictionary*)dic;

+ (NSString*)getIosAbtConfigForJs:(NSString*)cpPlaceId;

+ (void)showRewardDebugActivityForJs;

+ (void)setRewardVideoLoadCallbackForJs;

+ (BOOL)isRewardReadyForJs;

+ (void)showRewardVideoForJs:(NSString*)cpPlaceId;

//+ (void)isInterstitialReadyAsynForJs:(NSString*)cpPlaceId callback:(NSString*)call;

+ (BOOL)isInterstitialReadyForJs:(NSString*)cpPlaceId;

+ (void)showInterstitialForJs:(NSString*)cpPlaceId;

+ (void)setInterstitialCallbackForJs:(NSString*)cpPlaceId;

+ (void)showInterstitialDebugActivityForJs;

+ (void)removeBannerForJs:(NSString*)cpPlaceId;

+ (void)showTopBannerForJs:(NSString*)cpPlaceId;

+ (void)showBottomBannerForJs:(NSString*)cpPlaceId;

+ (void)hideTopBannerForJs;

+ (void)hideBottomBannerForJs;

+ (void)setTopBannerPadingForIphonexForJs:(NSInteger)padding;

+ (void)showIconX:(double)x y:(double)y width:(double)width height:(double)height rotationAngle:(double)rotationAngle placementId:(NSString *)placementId;

+ (void)removeIcon:(NSString *)placementId;

+ (void)loadIosAdsByManualForJs;

+ (void)exitIosAppForJs;

+ (void)isEuropeanUnionUserForJs:(void (^)(BOOL isEuropeanUnion))completionBlock;

+ (void)notifyAccessPrivacyInfoStatusForJs:(void (^)(BOOL isAccepted))completionBlock;

+ (int)getAccessPrivacyInfoStatusForJs;

+ (void)updateAccessPrivacyInfoStatusForJs:(NSInteger)value;

+ (void)reportIvokePluginMethodReceiveForJs:(NSString *)msg;

+ (void)reportRDRewardCloseForJs:(NSString *)msg;

+ (void)reportRDRewardClickForJs:(NSString *)msg;

+ (void)reportRDRewardGivenForJs:(NSString *)msg;

+ (void)reportRDShowDidForJs:(NSString *)msg;

+ (void)reportRDRewardCancelForJs:(NSString *)msg;

+ (void)reportILCloseForJs:(NSString *)cpid msg:(NSString *)msg;

+ (void)reportILClickForJs:(NSString *)cpid msg:(NSString *)msg;

+ (void)reportILShowDidForJs:(NSString *)cpid msg:(NSString *)msg;

+ (BOOL)isReportOnlineEnableForJs;

@end
