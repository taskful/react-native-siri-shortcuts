Pod::Spec.new do |s|
  s.name          = "RNSiriShortcuts"
  s.version       = "0.1.3"
  s.source_files  = "RNSiriShortcuts.h", "RNSiriShortcuts.m"
  s.author          = { "Taskful, Inc." => "michael@taskful.com" }
  s.ios.deployment_target = '8.0'
  s.license       = "MIT"
  s.summary       = "NSUserActivity for React Native"
  s.homepage      = "https://github.com/taskful/react-native-siri-shortcuts"
  s.source        = { :git => "https://github.com/taskful/react-native-siri-shortcuts.git" }

  s.dependency 'React'
end
