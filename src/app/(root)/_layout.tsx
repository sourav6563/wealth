import { Redirect, Slot } from "expo-router";
import { useAuth } from "@clerk/expo";

const RootGroupLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href={"/sign-in" as any} />;
  }
  return <Slot />;
};

export default RootGroupLayout;
