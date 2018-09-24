#import "RCTBridgeModule.h"
#import <Foundation/Foundation.h>

@interface RNSiriShortcuts : NSObject <RCTBridgeModule>

@property NSUserActivity *lastRNSiriShortcuts;
@property NSMutableArray* lastUserActivities;

@end
