#import "RCTBridgeModule.h"
#import <Foundation/Foundation.h>

@interface RNSiriShortcuts : NSObject <RCTBridgeModule>

@property NSUserActivity *lastUserActivity;
@property NSMutableArray* lastUserActivities;

@end
