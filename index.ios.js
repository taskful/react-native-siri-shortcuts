import {
  NativeModules,
} from 'react-native';

const { RNSiriShortcuts } = NativeModules;

const SiriShortcuts = {
  createActivity: options => RNSiriShortcuts.createActivity(
    options.activityType,
    options.eligibleForSearch,
    options.eligibleForPublicIndexing,
    options.eligibleForHandoff,
    options.eligibleForPrediction,
    options.suggestedInvocationPhrase,
    options.title,
    options.webpageURL,
    options.userInfo,
    options.locationInfo,
    options.supportsNavigation || false,
    options.supportsPhoneCall || false,
    options.phoneNumber,
    options.description,
    options.thumbnailURL,
    options.identifier,
  ),
};

export default SiriShortcuts;
