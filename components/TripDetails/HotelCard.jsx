import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

export default function HotelCard({ item }) {
  const [photoRef, setPhotoRef] = useState();

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.name);
    // console.log(result?.results[0]?.photos[0]?.photo_reference);
    setPhotoRef(result);
    console.log(item.name);
  };

  return (
    <View
      style={{
        marginRight: 20,
        width: 180,
      }}
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: 180,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          padding: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          {item.name}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            ⭐️ {item.rating}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            💰 {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
}
