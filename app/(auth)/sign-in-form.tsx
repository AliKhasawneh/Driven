import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useState } from "react";
import { onSignInPress } from "@/app/(auth)/utils/OnSignInPress";
import { useSignIn } from "@clerk/clerk-expo";

const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
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
