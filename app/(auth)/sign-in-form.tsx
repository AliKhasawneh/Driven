import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useState } from "react";
import { onSignInPress } from "@/app/(auth)/utils/OnSignInPress";

const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <View className="p-5 ">
      <InputField
        label="Email"
        placeholder="Enter your email"
        icon={icons.email}
        value={form.email}
        onChangeText={(value) => setForm({ ...form, email: value })}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        icon={icons.lock}
        secureTextEntry={true}
        value={form.password}
        onChangeText={(value) => setForm({ ...form, password: value })}
      />
      <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6" />
      <OAuth />
      <Link
        href={"/sign-up"}
        className={"text-lg text-center text-general-200 mt-10"}
      >
        <Text>Not a driven member yet?</Text>
        <Text className={"text-primary-500"}> Sign Up</Text>
      </Link>
    </View>
  );
};

export default SignInForm;
