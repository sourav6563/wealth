import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";

export default function HomeScreen() {
  // if(isSignedIn)

  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)" as any} />;
  }
  return <Redirect href={"/sign-in" as any} />;
}
