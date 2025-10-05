import { Image, StyleSheet, Text, View } from "react-native";

export default function Card(item) {
  return (
    <View style={styles.cadre}>
      <Image source={{ uri: item.imgUrl }} style={styles.img} />
      <View>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articlePrice}>{item.price}$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cadre: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin: 4,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    shadowColor: "black",
    backgroundColor: "#fafafa",
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  articleTitle: {
    fontSize: 25,
  },
  articlePrice: {
    fontSize: 20,
  },
});
