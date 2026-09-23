import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Properties = [
  //hey create object for each property  id,title,city,price
  { id: 1, title: "Property 1", city: "City 1", price: 100000 },
  { id: 2, title: "Property 2", city: "City 2", price: 200000 },
  { id: 3, title: "Property 3", city: "City 3", price: 300000 },
  { id: 4, title: "Property 4", city: "City 4", price: 400000 },
];
export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Text>honey singh</Text>
        <TextInput
          placeholder="Enter text here"
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginTop: 12,
            borderRadius: 8,
          }}
        />
        <TouchableOpacity onPress={() => alert("Search button pressed")}>
          <Text
            style={{
              color: "#fff",
              backgroundColor: "#007bff",
              padding: 10,
              marginTop: 12,
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <FlatList
          data={Properties}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 16,
                marginBottom: 12,
                borderRadius: 10,
                backgroundColor: "#F8FAFC",
                borderWidth: 1,
                borderColor: "#E2E8F0",
              }}
            >
              <Text
                style={{ fontWeight: "700", color: "#1E293B", fontSize: 16 }}
              >
                {item.title}
              </Text>
              <Text style={{ marginTop: 6, color: "#64748B", fontSize: 14 }}>
                {item.city}
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  fontWeight: "700",
                  color: "#0F766E",
                  fontSize: 15,
                }}
              >
                {item.price}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
