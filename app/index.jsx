import Card from "@/components/Card";
import { FlatList, StyleSheet, View } from "react-native";

function App() {
  const articles = [
    {
      id: 1,
      title: "Appartement cosy",
      price: 120,
      imgUrl: "https://picsum.photos/400/200?random=1",
      description: "description 1.",
    },
    {
      id: 2,
      title: "Studio moderne",
      price: 90,
      imgUrl: "https://picsum.photos/400/200?random=2",
      description: "description 2.",
    },
    {
      id: 3,
      title: "Loft lumineux",
      price: 150,
      imgUrl: "https://picsum.photos/400/200?random=3",
      description: "description 3.",
    },
    {
      id: 4,
      title: "Chambre avec vue",
      price: 110,
      imgUrl: "https://picsum.photos/400/200?random=4",
      description: "description 4.",
    },
    {
      id: 5,
      title: "Villa avec piscine",
      price: 280,
      imgUrl: "https://picsum.photos/400/200?random=5",
      description: "Magnifique villa avec piscine privée et jardin.",
    },
    {
      id: 6,
      title: "Penthouse de luxe",
      price: 350,
      imgUrl: "https://picsum.photos/400/200?random=6",
      description: "Penthouse avec terrasse panoramique en centre-ville.",
    },
    {
      id: 7,
      title: "Maison de campagne",
      price: 75,
      imgUrl: "https://picsum.photos/400/200?random=7",
      description: "Maison charmante au cœur de la nature.",
    },
    {
      id: 8,
      title: "Duplex moderne",
      price: 180,
      imgUrl: "https://picsum.photos/400/200?random=8",
      description: "Duplex spacieux avec balcon et parking.",
    },
    {
      id: 9,
      title: "Chalet montagnard",
      price: 200,
      imgUrl: "https://picsum.photos/400/200?random=9",
      description: "Chalet authentique avec vue sur les montagnes.",
    },
    {
      id: 10,
      title: "Appartement de standing",
      price: 160,
      imgUrl: "https://picsum.photos/400/200?random=10",
      description: "Appartement haut de gamme en plein centre.",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList data={articles} renderItem={({ item }) => <Card {...item} />} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    margin: 15,
  },
});
