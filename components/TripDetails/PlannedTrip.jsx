import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function PlannedTrip({ details }) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🏕️ Plan Details
      </Text>

      {/* {Object.entries(details)
        .reverse()
        .map(([day, details]) => (
          <View>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                marginTop: 20,
              }}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
            {details.schedule.map((place, index) => (
              <View
                style={{
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 15,
                  borderColor: Colors.GRAY,
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("./../../assets/images/Login.jpg")}
                  style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 15,
                  }}
                />
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "outfit-bold",
                      fontSize: 20,
                    }}
                  >
                    {place?.activity}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "outfit",
                      fontSize: 17,
                      color: Colors.GRAY,
                    }}
                  >
                    {place?.notes}
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontFamily: "outfit",
                          fontSize: 17,
                          marginTop: 5,
                        }}
                      >
                        Time {place?.time}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.PRIMARY,
                        padding: 8,
                        borderRadius: 7,
                      }}
                    >
                      <Ionicons name="navigate" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))} */}
    </View>
  );
}
