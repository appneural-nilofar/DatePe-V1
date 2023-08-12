import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRoute } from '../NavigationRoutes';
import { StackNav } from '../NavigationKeys';
import AuthStack from './AuthStack';
import S1 from '../../../screens/S1';
import S2 from '../../../screens/S2';
import S3 from '../../../screens/S3';
import S4 from '../../../screens/S4';
import S5 from '../../../screens/S5';
import S6 from '../../../screens/S6';
import S7 from '../../../screens/S7';
import S8 from '../../../screens/S8';
import S9 from '../../../screens/S9';
import S10 from '../../../screens/S10';
import S11 from '../../../screens/S11';
import S12 from '../../../screens/S12';
import S13 from '../../../screens/S13';
import S14 from '../../../screens/S14';
import S15 from '../../../screens/S15';
import S16 from '../../../screens/S17';
import S17 from '../../../screens/S17';
import S18 from '../../../screens/S18';
import S19 from '../../../screens/S19';
import S20 from '../../../screens/S20';
import S21 from '../../../screens/S21';
import S22 from '../../../screens/S22';
import S23 from '../../../screens/S23';
import S24 from '../../../screens/S24';
import S25 from '../../../screens/S25';
import S26 from '../../../screens/S26';
import S27 from '../../../screens/S27';
import S28 from '../../../screens/S28';
import S29 from '../../../screens/S29';
import S30 from '../../../screens/S30';
import S31 from '../../../screens/S31';
import S32 from '../../../screens/S32';
import S33 from '../../../screens/S33';
import S34 from '../../../screens/S34';
import S35 from '../../../screens/S35';
import S36 from '../../../screens/S36';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}
    >
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen name="s1" component={S1} />

      <Stack.Screen name="s2" component={S2} />

      <Stack.Screen name="s3" component={S3} />

      <Stack.Screen name="s4" component={S4} />

      <Stack.Screen name="s5" component={S5} />

      <Stack.Screen name="s6" component={S6} />

      <Stack.Screen name="s7" component={S7} />

      <Stack.Screen name="s8" component={S8} />

      <Stack.Screen name="s9" component={S9} />

      <Stack.Screen name="s10" component={S10} />

      <Stack.Screen name="s11" component={S11} />

      <Stack.Screen name="s12" component={S12} />

      <Stack.Screen name="s13" component={S13} />

      <Stack.Screen name="s14" component={S14} />

      <Stack.Screen name="s15" component={S15} />

      <Stack.Screen name="s16" component={S16} />

      <Stack.Screen name="s17" component={S17} />

      <Stack.Screen name="s18" component={S18} />

      <Stack.Screen name="s19" component={S19} />

      <Stack.Screen name="s20" component={S20} />

      <Stack.Screen name="s21" component={S21} />

      <Stack.Screen name="s22" component={S22} />

      <Stack.Screen name="s23" component={S23} />

      <Stack.Screen name="s24" component={S24} />

      <Stack.Screen name="s25" component={S25} />

      <Stack.Screen name="s26" component={S26} />

      <Stack.Screen name="s27" component={S27} />

      <Stack.Screen name="s28" component={S28} />

      <Stack.Screen name="s29" component={S29} />

      <Stack.Screen name="s30" component={S30} />

      <Stack.Screen name="s31" component={S31} />

      <Stack.Screen name="s32" component={S32} />

      <Stack.Screen name="s33" component={S33} />

      <Stack.Screen name="s34" component={S34} />

      <Stack.Screen name="s35" component={S35} />

      <Stack.Screen name="s36" component={S36} />

      {/* <Stack.Screen
        name={StackNav.WelcomeScreen}
        component={StackRoute.WelcomeScreen}
      /> */}
      {/* <Stack.Screen
        name={StackNav.onBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen name={StackNav.Auth} component={AuthStack} />
      <Stack.Screen name={StackNav.TabBar} component={StackRoute.TabBar} />
      <Stack.Screen
        name={StackNav.SetUpProfile}
        component={StackRoute.SetUpProfile}
      />
      <Stack.Screen
        name={StackNav.AddAddress}
        component={StackRoute.AddAddress}
      />
      <Stack.Screen
        name={StackNav.AddNewCard}
        component={StackRoute.AddNewCard}
      />
      <Stack.Screen name={StackNav.Address} component={StackRoute.Address} />
      <Stack.Screen
        name={StackNav.HelpCenter}
        component={StackRoute.HelpCenter}
      />
      <Stack.Screen name={StackNav.Language} component={StackRoute.Language} />
      <Stack.Screen
        name={StackNav.NotificationSetting}
        component={StackRoute.NotificationSetting}
      />
      <Stack.Screen name={StackNav.Payment} component={StackRoute.Payment} />
      <Stack.Screen
        name={StackNav.PrivacyPolicy}
        component={StackRoute.PrivacyPolicy}
      />
      <Stack.Screen name={StackNav.Security} component={StackRoute.Security} />
      <Stack.Screen
        name={StackNav.CreateNewPassword}
        component={StackRoute.CreateNewPassword}
      />
      <Stack.Screen name={StackNav.SetPin} component={StackRoute.SetPin} />
      <Stack.Screen
        name={StackNav.InviteFriends}
        component={StackRoute.InviteFriends}
      />
      <Stack.Screen
        name={StackNav.CustomerService}
        component={StackRoute.CustomerService}
      />
      <Stack.Screen
        name={StackNav.Notification}
        component={StackRoute.Notification}
      />
      <Stack.Screen name={StackNav.Search} component={StackRoute.Search} />
      <Stack.Screen
        name={StackNav.ReviewSummary}
        component={StackRoute.ReviewSummary}
      />
      <Stack.Screen
        name={StackNav.CallingScreen}
        component={StackRoute.CallingScreen}
      />
      <Stack.Screen name={StackNav.NewMatch} component={StackRoute.NewMatch} />
      <Stack.Screen
        name={StackNav.CommonMatch}
        component={StackRoute.CommonMatch}
      />
      <Stack.Screen name={StackNav.Settings} component={StackRoute.Settings} />
      <Stack.Screen
        name={StackNav.PersonalInfo}
        component={StackRoute.PersonalInfo}
      />
      <Stack.Screen
        name={StackNav.DiscoverySettings}
        component={StackRoute.DiscoverySettings}
      />
      <Stack.Screen name={StackNav.Review} component={StackRoute.Review} />
      <Stack.Screen name={StackNav.Premium} component={StackRoute.Premium} />
      <Stack.Screen
        name={StackNav.YourProfile}
        component={StackRoute.YourProfile}
      />
      <Stack.Screen
        name={StackNav.EditProfile}
        component={StackRoute.EditProfile}
      />
      <Stack.Screen
        name={StackNav.NearPeople}
        component={StackRoute.NearPeople}
      />
      <Stack.Screen name={StackNav.Location} component={StackRoute.Location} /> */}
    </Stack.Navigator>
  );
}
