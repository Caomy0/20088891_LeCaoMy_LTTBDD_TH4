import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  const categories = [
    { name: "Electronics", icon: require("../assets/dt.jpg") },
    { name: "Fashion", icon: require("../assets/giay.jpg") },
    { name: "Beauty", icon: require("../assets/son.jpg") },
    { name: "Fresh Food", icon: require("../assets/bo.png") },
  ];

  const recommended = [
    {
      name: "Shoes",
      price: "$299",
      rating: 4.5,
      image: require("../assets/giaycodien.jpg"),
    },
    {
      name: "Tablet",
      price: "$499",
      rating: 4.2,
      image: require("../assets/tablet.png"),
    },
    {
      name: "Pear",
      price: "$2",
      rating: 4.8,
      image: require("../assets/pear.jpg"),
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <MaterialIcons name="star" size={16} color="#FFD700" key={i} />
      );
    }

    if (halfStar) {
      stars.push(
        <MaterialIcons name="star-half" size={16} color="#FFD700" key="half" />
      );
    }

    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>All Deals</Text>
        <View style={styles.headerIcons}>
          <Icon name="cart-outline" size={24} style={styles.icon} />
          <Image
            source={require("../assets/profileicon.png")}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for product"
          style={styles.searchInput}
        />
        <Icon name="filter-outline" size={24} style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContentContainer} // Use contentContainerStyle for layout
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Image source={category.icon} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Featured Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>Shoes</Text>
        <Text style={styles.featuredDiscount}>50% off</Text>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy now</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/giaydep.png")}
          style={styles.featuredImage}
        />
      </View>

      {/* Recommended Section */}
      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommended}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              {renderStars(item.rating)}
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  filterIcon: {
    marginLeft: 10,
  },
  categoriesContentContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Space items evenly
    paddingHorizontal: 20, // Add padding on left and right
    alignItems: "center", // Center align items vertically
  },
  category: {
    alignItems: "center",
    width: 80,
  },
  categoryImage: {
    width: 60, // Adjust size as needed
    height: 60,
    borderRadius: 30, // Make the image circular
    marginBottom: 5,
    borderWidth: 1, // Optional: Add a border for better styling
    borderColor: "#ddd",
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  featuredSection: {
    marginTop: 30,
    height: 200,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    position: "relative",
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  featuredDiscount: {
    fontSize: 14,
    color: "#E53935",
    marginVertical: 5,
  },
  buyNowButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buyNowText: {
    color: "#fff",
    fontSize: 14,
  },
  featuredImage: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 150,
    height: 150,
  },
  recommendedSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    fontSize: 14,
    color: "#E53935",
  },
  productCard: {
    width: 120,
    marginRight: 15,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
    color: "#888",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
