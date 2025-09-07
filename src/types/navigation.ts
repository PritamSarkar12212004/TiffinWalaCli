import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  // Auth Navigation
  LoginScreen: undefined;
  Varifypage: undefined;

  // Main Navigation
  DashboardScreen: undefined;
  ProfileScreen: {
    userInfo: {
      userinfo: any;
      location: any;
    };
  };
  PersonalInfo: {
    profileInfo: any;
    location: any;
  };
  ProfileEdit: {
    profileInfo: any;
    location: any;
  };
  LocationScree: {
    location: any;
  };
  ShowmMainProductScreen: {
    item: any;
  };
  SearchScreen: {
    distance: any;
  };
  NearMap: undefined;
  FeviroteProductScreen: {
    profileInfo: any;
  };
  About: {
    profileInfo: any;
  };
  TermsCondition: {
    profileInfo: any;
  };
  RewardedAdd: undefined;

  // Profile Setup Navigation
  CreateProfile: {
    location: any;
    phone: string;
  };
  ProfileLocation: undefined;

  // Splash Navigation
  Splash1: undefined;
  Splash2: undefined;
  Splash3: undefined;

  // Error Screen
  ErrorScreen: undefined;
  LocationWarning: undefined;

  // Additional routes that might be used
  AuthNavigations: undefined;
  Mainnavigation: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
