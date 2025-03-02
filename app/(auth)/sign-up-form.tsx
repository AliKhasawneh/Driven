import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useState } from "react";
import { onSignInPress } from "@/app/(auth)/utils/OnSignInPress";
import { onSignUpPress } from "@/app/(auth)/utils/OnSignUpPress";

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <View className="p-5 ">
      <InputField
        label="Name"
        placeholder="Enter your name"
        icon={icons.person}
        value={form.name}
        onChangeText={(value) => setForm({ ...form, name: value })}
      />
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
      <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6" />
      <OAuth />
      <Link
        href={"/sign-in"}
        className={"text-lg text-center text-general-200 mt-10"}
      >
        <Text>Already a driven member?</Text>
        <Text className={"text-primary-500"}> Log In</Text>
      </Link>
    </View>
  );
};

export default SignUpForm;
