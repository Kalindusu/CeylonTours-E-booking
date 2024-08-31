import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Components/Header";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { Image } from "react-native";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalButton,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const route=useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Ceylon Tours",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, [navigation]);

  const customButton = (onConfirm) => {
    return (
      <Pressable onPress={onConfirm} style={styles.customButtonContainer}>
        <Text style={styles.customButtonText}>Submit</Text>
      </Pressable>
    );
  };

  const incrementRooms = () => {
    setRooms((prevRooms) => prevRooms + 1);
  };

  const decrementRooms = () => {
    setRooms((prevRooms) => (prevRooms > 1 ? prevRooms - 1 : 1));
  };

  const incrementAdults = () => {
    setAdults((prevAdults) => prevAdults + 1);
  };

  const decrementAdults = () => {
    setAdults((prevAdults) => (prevAdults > 1 ? prevAdults - 1 : 1));
  };

  const incrementChildren = () => {
    setChildren((prevChildren) => prevChildren + 1);
  };

  const decrementChildren = () => {
    setChildren((prevChildren) => (prevChildren > 0 ? prevChildren - 1 : 0));
  };
  console.log(route.params);
  const searchPlaces = (place) => {
    if(!route.params || !selectedDates){
      Alert.alert(
        'Invalid Details',
        'Please enter all the details',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
          {text: "OK", onPress: () => console.log('OK Pressed')},
        ],
        {concelable:false}
      );
  }
  if(route.params && selectedDates){
    navigation.navigate('Places',{
      rooms:rooms,
      adults:adults,
      children:children,
      selectedDates:selectedDates,
      place:place
    })
  }
}

  return (
    <>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View style={styles.innerContainer}>
            {/* Destination */}
            <Pressable onPress={()=>navigation.navigate('Search')} style={styles.destinationContainer}>
              <Feather name="search" size={24} color="black" />
              <TextInput
                placeholder={route?.params ? route.params.input:'Enter your Destination'}
                placeholderTextColor={"black"}
                style={styles.textInput}
              />
            </Pressable>
            {/* selected dates */}
            <Pressable style={styles.dateContainer}>
              <AntDesign name="calendar" size={24} color="black" />
              <DatePicker
                style={styles.datePicker}
                customStyles={{
                  placeholderText: styles.placeholderText,
                  headerStyle: styles.datePickerHeader,
                  contentText: styles.datePickerContent,
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates({ startDate, endDate })
                }
                allowFontScaling={false}
                placeholder={"Select your Date"}
                mode={"range"}
              />
            </Pressable>

            {/* Room and guest */}
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.dateContainer}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor={"red"}
                placeholder={`${rooms} room  ${adults} adults  ${children} children`}
              />
            </Pressable>
            {/* search button */}
            <Pressable onPress={() => searchPlaces(route.params.input)}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More Spend Less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginBottom: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genuis
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                You are ate genius level one in our loyalty program
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth:2,
                borderRadius: 10,
                padding: 20,
                marginBottom: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
               
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
               borderColor: "#E0E0E0",
               borderWidth:2,
                borderRadius: 10,
                padding: 20,
                marginBottom: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
               
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                10% Discounts
              </Text>
              <Text style={{  fontSize: 15, fontWeight: "500" }}>
              Enjoy Discount at participating at properties worldwide

              </Text>
            </Pressable>
          </ScrollView>
          <Pressable style={{marginTop:30,justifyContent:'center',alignItems:'center',marginBottom:20 }}>
            <Image style={{width:200,height:50,resizeMode:'cover'}} source={require('../assets/logo.png')}/>

          </Pressable>
        </ScrollView>

      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                backgroundColor: "#003580",
                marginBottom: 20,
                color: "white",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Rooms and Guests" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 15,
              }}
            >
              <Pressable
                onPress={decrementRooms}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "900",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {rooms}
              </Text>
              <Pressable
                onPress={incrementRooms}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 15,
              }}
            >
              <Pressable
                onPress={decrementAdults}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "900",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {adults}
              </Text>
              <Pressable
                onPress={incrementAdults}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 22,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Pressable
                onPress={decrementChildren}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "900",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {children}
              </Text>
              <Pressable
                onPress={incrementChildren}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    margin: 20,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6,
  },
  destinationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
  },
  textInput: {
    flex: 1,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
  },
  datePicker: {
    width: 300,
    height: 45,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "transparent",
  },
  placeholderText: {
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  datePickerHeader: {
    backgroundColor: "#003580",
  },
  datePickerContent: {
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
    padding: 10,
    paddingLeft: 20,
    color: "black",
    fontWeight: "bold",
  },
  customButtonContainer: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  customButtonText: {
    fontSize: 20,
    color: "blue",
  },
});
