import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  // Add default values to avoid undefined errors
  const { name, rating, startDate, endDate, rooms, adults, children } =
    route.params || {};
    const dispatch=useDispatch();
    const confirmBooking = () => {
      dispatch(savedPlaces(route.params));
      navigation.navigate("Home");

      
    }

  return (
    <View>
      <Pressable style={{ backgroundColor: "white", margin: 10 }}>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {name || "N/A"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{rating || "N/A"}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#17B169",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              Travel sustainable
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {startDate ? new Date(startDate).toDateString() : "N/A"}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {endDate ? new Date(endDate).toDateString() : "N/A"}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.rooms || "N/A"} rooms {route.params.adults || "N/A"}{" "}
            adults {route.params.children || "N/A"} children
          </Text>
        </View>
        <Pressable
        onPress={confirmBooking}
          style={{
            backgroundColor: "#003580",
            width: 120,
            padding: 5,
            marginHorizontal: 12,
            marginBottom: 20,
            borderRadius:4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white",fontSize:15,fontWeight:"bold" }}>Book Now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
