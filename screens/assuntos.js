//telas dos assuntos = equilvale a tela incial = olha na aba assets no FICADICA+...

import { Component } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
import * as Font from "expo-font";
import { color } from "react-native-reanimated";

//aqui eu  vou carregar as fontes
let fonts = {
  "AltersanTrial-Light": require("../assets/AltersanTrial-Light.ttf"),
  "AltersanTrial-ExtraBold": require("../assets/AltersanTrial-ExtraBold.ttf"),
};

let assuntos = ["Esportes", "Música", "Cinema", "Notícias"];

var array = [0, 1, 2, 3, 4];
var cor;
var colorNumber = Math.round(Math.random() * (array.length - 1));

if (colorNumber == 0) {
  cor = "orange";
} else if (colorNumber == 1) {
  cor = "blue";
} else if (colorNumber == 2) {
  cor = "red";
} else if (colorNumber == 3) {
  cor = "purple";
} else if (colorNumber == 4) {
  cor = "green";
}
console.log(cor);

export default class Assuntos extends Component {
  constructor() {
    super();
    this.state = {
      isFontLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync(fonts);
    this.setState({
      isFontLoaded: true,
    });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.isFontLoaded) {
      SplashScreen.hideAsync();
      return (
        // titulo
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image
              source={require("../assets/ICONE.png")}
              style={styles.image}
            ></Image>
            <Text style={styles.text}>FICADICA</Text> {/*nome temporário*/}
          </View>
          {/* -------------------------------------------------------------- 
          {/* barra de pesquisa */}
          <View style={styles.searchContainer}>
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.searchButton}>
              <Image
                source={require("../assets/lupa.png")}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>

          {/* corpo do app -------------------------------------------------------------- */}
          <View style={styles.list}>
            {assuntos.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("stackNavigator");
                  }}
                  style={styles.buttonList}
                >
                  <Text style={styles.buttonTextList}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B39F24",
  },
  image: {
    width: 50,
    height: 50,

    // border: "solid black",

    // backgroundColor: "yellow",
  },
  text: {
    // border: "solid black",
    fontSize: 30,
    marginTop: 10,
    fontFamily: "AltersanTrial-ExtraBold",
  },
  titleContainer: {
    backgroundColor: "#40EFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },

  searchContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    border: "solid black",
    width: 250,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    textAlign: "center",
    fontFamily: "AltersanTrial-Light",
  },
  searchButton: {
    border: "solid black ",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
  },
  searchIcon: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  list: {
    // backgroundColor: "white",
    // border: "solid white",
    margin: 20,
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonList: {
    backgroundColor: "white",
    width: 200,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 5,
    borderColor: cor,
  },
  buttonTextList: {
    fontFamily: "AltersanTrial-ExtraBold",
    fontSize: 25,
  },
});
