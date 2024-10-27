import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import axios from "axios";

const PopularDestinationScreen = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu địa điểm
    axios
      .get("https://671ba9d92c842d92c380d3a1.mockapi.io/location")
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locations: ", error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Popular Destinations</Text>
        <FlatList
          data={location}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.destinationItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.destinationImage}
              />
              <Text style={styles.destinationText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  destinationItem: {
    marginBottom: 20,
    alignItems: "center",
  },
  destinationImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  destinationText: {
    marginTop: 10,
    fontSize: 18,
    color: "#333",
  },
});

export default PopularDestinationScreen;
