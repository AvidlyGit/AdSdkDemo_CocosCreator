//
//  AvidlyAdsBrigeJs.h
//  MyJsGame-mobile
//
//  Created by samliu on 2018/3/5.
//

#import <Foundation/Foundation.h>

@interface UpAdsBrigeJs : NSObject

+ (void)initSdkByJs:(NSInteger)zone;

+ (void)initSdkByJs:(NSInteger)zone withCallback:(NSString*)callback;

+ (void)setVokeMethod:(NSString*)method;

+ (void)initAbtConfigJsonByJs:(NSString*)gameid complete:(BOOL)complete paid:(NSString*) pay channel:(NSString*)name gender:(NSString*)gender age:(NSString*) age tags:(NSString*)tag;

+ (NSString*)getIosAbtConfigByJs:(NSString*)cpPlaceId;

+ (void)showRewardDebugActivityByJs;

+ (void)setRewardVideoLoadCallbackByJs;

+ (BOOL)isIosRewardReadyByJs;

+ (void)showIosRewardVideoByJs:(NSString*)cpPlaceId;

+ (void)isInterstitialReadyAsynByJs:(NSString*)cpPlaceId callback:(NSString*)call;

+ (BOOL)isInterstitialReadyByJs:(NSString*)cpPlaceId;

+ (void)showInterstitialByJs:(NSString*)cpPlaceId;

+ (void)setInterstitialCallbackByJs:(NSString*)cpPlaceId;

+ (void)showInterstitialDebugActivityByJs;

+ (void)removeBannerByJs:(NSString*)cpPlaceId;

+ (void)showTopBannerByJs:(NSString*)cpPlaceId;

+ (void)showBottomBannerByJs:(NSString*)cpPlaceId;

+ (void)hideTopBannerByJs;

+ (void)hideBottomBannerByJs;

+ (void)setTopBannerPadingForIphonexByJs:(NSString*)padding;

+ (void)showIconX:(NSNumber *)xNumber y:(NSNumber *)yNumber width:(NSNumber *)widthNumber height:(NSNumber *)heightNumber rotationAngle:(NSNumber *)rotationAngleNumber placementId:(NSString *)placementId;

+ (void)removeIcon:(NSString *)placementId;

+ (void)loadIosAdsByManualByJs;

+ (void)exitIosAppByJs;

+ (void)printJsLog:(NSString*)msg;

+ (void)isEuropeanUnionUserByJs:(NSString*)funcion callId:(NSString*) callId;

+ (void)notifyAccessPrivacyInfoStatusByJs:(NSString*)funcion callId:(NSString*) callId;

+ (int)getAccessPrivacyInfoStatusByJs;

+ (void)updateAccessPrivacyInfoStatusByJs:(NSString*)value;

+ (void)reportIvokePluginMethodReceiveByJs:(NSString *)msg;

+ (void)reportRDRewardCloseByJs:(NSString *)msg;

+ (void)reportRDRewardClickByJs:(NSString *)msg;

+ (void)reportRDRewardGivenByJs:(NSString *)msg;

+ (void)reportRDShowDidByJs:(NSString *)msg;

+ (void)reportRDRewardCancelByJs:(NSString *)msg;

+ (void)reportILCloseByJs:(NSString *)cpid msg:(NSString *)msg;

+ (void)reportILClickByJs:(NSString *)cpid msg:(NSString *)msg;

+ (void)reportILShowDidByJs:(NSString *)cpid msg:(NSString *)msg;

+ (BOOL)isReportOnlineEnableByJs;

@end
