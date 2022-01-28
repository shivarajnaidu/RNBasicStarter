import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Platform,
  KeyboardAvoidingView
} from 'react-native';

import { Input, Button, Item } from 'native-base';
import { Fonts, Images, Layout, Gutters, Common, Colors } from '../../Theme';

import styles from './LoginStyle';
import { isLoggedIn, login } from '../../Services/auth';
import { saveToken } from '../../Services/token';
import { authSubject } from '../../Services/auth/auth-interceptor';
import Snackbar from 'react-native-snackbar';
import AppStatusbar from '../../Components/AppStatusbar/AppStatusbar'

const Login = ({ navigation }) => {
  const { control, handleSubmit, formState } = useForm({ mode: "onChange" });
  useEffect(() => {
    (async () => {
      const isUserAuthenticated = await isLoggedIn();
      if (isUserAuthenticated) {
        navigation.navigate('Home');
        return;
      }
    })();
  }, [navigation]);
  const onSubmit = async (data) => {
    try {
      const res = await login(data.userName, data.password);
      await saveToken(res.data.token);
      authSubject.next(true);
      navigation.navigate('Home');
    } catch (error) {
      Snackbar.show({
        text: error.response?.data?.message ?? 'Failed to Login',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
      // console.error(error);
    }
  };
  return (
    <>
      {/* <StatusBar translucent backgroundColor={Colors.primary} barStyle="light-content" /> */}
      <AppStatusbar backgroundColor={Colors.primary} barStyle="light-content" />
      <SafeAreaView style={Common.bgWhite}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollContentContainer}>
            <View style={[styles.contentWrapper, Layout.justifyContentEnd]}>
              <View
                style={[styles.logoLayoutContainer, Layout.justifyContentAround]}>
                {/* Logo */}
                <View
                  style={[
                    Layout.row,
                    Layout.justifyContentCenter,
                    Gutters.mt30,
                    Common.bgWhite,
                    { marginTop: 200 }
                  ]}>
                  <Image
                    source={Images.logoSmall}
                    style={[styles.logo, Gutters.mt30]}
                  />
                </View>
              </View>

              {/* Login Form Container */}
              <View
                style={[
                  styles.formContainer,
                  Common.bgPrimary,
                  Gutters.p30,
                  Gutters.mt30,
                ]}>
                <View style={Gutters.mv15}>
                  <View>
                    <Text style={[Fonts.h1, Fonts.textWhite]}>Login Now</Text>
                  </View>
                  <View>
                    <Text style={[Fonts.textWhite, Fonts.regularSize]}>
                      Please login to continue
                    </Text>
                  </View>
                </View>

                {/* Form Controls */}
                <View style={Gutters.mt10}>
                  <Item style={styles.textInputItem}>
                    <Controller
                      control={control}
                      render={({ onChange, onBlur, value }) => (
                        <Input
                          onBlur={onBlur}
                          placeholderTextColor={Colors.white}
                          style={[styles.textInput]}
                          placeholder="Email or phone"
                          onChangeText={(v) => onChange(v)}
                          value={value}
                        />
                      )}
                      name="userName"
                      rules={{ required: true }}
                      defaultValue=""
                    />
                  </Item>
                </View>

                <View style={Gutters.mt10}>
                  <Item style={styles.textInputItem}>
                    <Controller
                      control={control}
                      render={({ onChange, onBlur, value }) => (
                        <Input
                          onBlur={onBlur}
                          placeholderTextColor={Colors.white}
                          style={styles.textInput}
                          placeholder="Password"
                          secureTextEntry={true}
                          onChangeText={(v) => onChange(v)}
                          value={value}
                        />
                      )}
                      name="password"
                      rules={{ required: true }}
                      defaultValue=""
                    />
                  </Item>
                </View>
                <View style={Gutters.pt5}>
                  <Text
                    onPress={() => {
                      // openURL('https://example.co.in/forgot-password');
                      navigation.navigate('ForgotPass');
                    }}
                    style={[
                      Fonts.textRight,
                      Fonts.textWhite,
                      Fonts.smallerSize,
                      Fonts.textUnderline,
                    ]}>
                    Forgot Password?
                  </Text>
                </View>

                {/* Submit Button */}

                <View style>
                  <Button
                    disabled={!formState.isValid}
                    block
                    style={[Common.btnWhite, Gutters.mt20]}
                    onPress={handleSubmit(onSubmit)}>
                    <Text
                      style={[
                        Fonts.textPrimary,
                        Fonts.regularSize,
                        { opacity: formState.isValid ? 1.0 : 0.4 },
                      ]}>
                      Login
                    </Text>
                  </Button>
                </View>
                {/* {
                  Platform.OS === 'android' ? */}
                <View style={(Gutters.mt10, Gutters.mb10)}>
                  <Text style={[Fonts.textWhite, Fonts.smallerSize]}>
                    Don't have an Account?{' '}
                    <Text
                      style={Fonts.textUnderline}
                      onPress={() => {
                        navigation.navigate('Signup');
                      }}>
                      Register now
                    </Text>
                  </Text>
                </View>
                {/* :
                     null
               } */}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Login;
