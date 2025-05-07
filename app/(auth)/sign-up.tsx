import {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { icons, images } from "@/constants";
import SignUpForm from "@/app/(auth)/sign-up-form";
import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import { ReactNativeModal } from "react-native-modal";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import InputField from "@/components/InputField";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <Text
              className={
                "text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5"
              }
            >
              Create Your Account
            </Text>
          </View>
          <SignUpForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
