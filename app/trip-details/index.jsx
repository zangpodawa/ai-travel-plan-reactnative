import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();

  const { trip } = useLocalSearchParams();

  const [tripDetails, setTripDetails] = useState([]);

  const formatData = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.log("Error parsing JSON:", error);
      return null;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(JSON.parse(trip));
  }, []);

  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(tripDetails?.tripData)?.locationInfo?.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            width: "100%",
            height: 330,
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "outfit-bold",
            }}
          >
            {tripDetails?.tripPlan?.trip.destination}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              {" "}
              {moment(formatData(tripDetails.tripData)?.startDate).format(
                "DD MM YYYY"
              )}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              {" - "}
              {moment(formatData(tripDetails.tripData)?.endDate).format(
                "DD MM YYYY"
              )}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 17,
              color: Colors.GRAY,
            }}
          >
            👫 {formatData(tripDetails.tripData)?.traveller.title}
          </Text>

          {/* Flight Info  */}
          <FlightInfo flightData={tripDetails?.tripPlan?.trip?.flight} />

          {/* Hotel List  */}
          <HotelList hotelList={tripDetails?.tripPlan?.trip?.hotels} />

          {/* Trip Day Planner Info */}
          <PlannedTrip details={tripDetails?.tripPlan?.trip?.daily_plan} />
        </View>
      </ScrollView>
    )
  );
}
