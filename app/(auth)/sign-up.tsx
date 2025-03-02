import {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { images } from "@/constants";
import SignUpForm from "@/app/(auth)/sign-up-form";

const SignUp = () => {
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
