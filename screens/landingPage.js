import React, { useState, Component } from "react";
import {
  Picker,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  alert,
  Alert,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
import Like from "react-native-vector-icons/AntDesign";
import LikeFill from "react-native-vector-icons/AntDesign";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

class landingPage extends Component {
  render() {
    const offset = Platform.OS === "android" ? -200 : 0;
    const { navigation } = this.props;

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <TouchableOpacity
          style={{
            height: height / 1.6,
            width: width / 1.1,
            alignSelf: "center",
            marginBottom: "10%",
          }}
          onPress={() =>
            this.props.navigation.navigate("detailScreen", { type: "music" })
          }
        >
          <View
            style={{
              height: height / 1.6,
              width: width / 1.1,
              alignSelf: "center",
              borderColor: "#7a6fbe",
              borderWidth: 2,
              marginLeft: "10%",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              This News contains Music (only Audio)
            </Text>

            <Image
              source={require("../images/NEWS2.jpg")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain",
              }}
            />
            <Text>
              "We are encouraged that mRNA-1273 was highly effective at
              preventing COVID-19 in adolescents. It is particularly exciting to
              see that the Moderna COVID-19 vaccine can prevent SARS-CoV-2
              infection," Moderna CEO Stephane Bancel said in the announcement,
              reported The Hill.
            </Text>
          </View>

          {this.props.countA == 0 && (
            <Like
              style={{ justifyContent: "center", alignSelf: "center" }}
              name="like2"
              size={50}
              color="black"
            />
          )}

          {this.props.countA != 0 && (
            <LikeFill
              style={{ justifyContent: "center", alignSelf: "center" }}
              name="like1"
              size={50}
              color="red"
            />
          )}
          <Text style={{ fontSize: 30, alignSelf: "center" }}>
            {this.props.countA}
          </Text>
          <View
            style={{
              height: height / 15.6,
              width: width / 1.1,
              alignSelf: "center",
              borderColor: "#7a6fbe",
              borderWidth: 2,
              marginLeft: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="share" size={30} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: height / 1.6,
            width: width / 1.1,
            alignSelf: "center",
            marginBottom: "10%",
          }}
          onPress={() =>
            this.props.navigation.navigate("detailScreen", { type: "video" })
          }
        >
          <View
            style={{
              height: height / 1.6,
              width: width / 1.1,
              alignSelf: "center",
              borderColor: "#7a6fbe",
              borderWidth: 2,
              marginLeft: "20%",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              This News contains Video
            </Text>
            <Image
              source={require("../images/NEWS4.jpg")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain",
              }}
            />
            <Text>
              In 24 hours ending 9 am on Tuesday, the state reported 15,284
              fresh cases of coronavirus, 20,917 recoveries and 106 deaths, a
              health department bulletin said.
            </Text>
          </View>
          {this.props.countV == 0 && (
            <Like
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "20%",
              }}
              name="like2"
              size={50}
              color="black"
            />
          )}

          {this.props.countV != 0 && (
            <LikeFill
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "20%",
              }}
              name="like1"
              size={50}
              color="red"
            />
          )}

          <Text
            style={{ fontSize: 30, alignSelf: "center", marginLeft: "20%" }}
          >
            {this.props.countV}
          </Text>
          <View
            style={{
              height: height / 15.6,
              width: width / 1.1,
              alignSelf: "center",
              borderColor: "#7a6fbe",
              borderWidth: 2,
              marginLeft: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="share" size={30} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: height / 1.6,
            width: width / 1.1,
            alignSelf: "center",
            marginBottom: "10%",
          }}
          onPress={() =>
            this.props.navigation.navigate("detailScreen", { type: "read" })
          }
        >
          <View
            style={{
              height: height / 1.6,
              width: width / 1.1,
              alignSelf: "center",
              borderColor: "#7a6fbe",
              borderWidth: 2,
              marginLeft: "30%",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              This News Does not have Video or Audio (Just Read)
            </Text>
            <Image
              source={require("../images/NEWS.jpg")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain",
              }}
            />
            <Text>
              Amid a steady decline in coronavirus cases in the national
              capital, the number of calls on the Delhi government's dedicated
              COVID-19 helpline, 1031, enquiring about the availability of beds
              in hospitals has gone down from 405 on May 1 to 125 on May 23,
              according to official data.
            </Text>
          </View>
          {this.props.countR == 0 && (
            <Like
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "20%",
              }}
              name="like2"
              size={50}
              color="black"
            />
          )}

          {this.props.countR != 0 && (
            <LikeFill
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "20%",
              }}
              name="like1"
              size={50}
              color="red"
            />
          )}
          <Text
            style={{ fontSize: 30, alignSelf: "center", marginLeft: "20%" }}
          >
            {this.props.countR}
          </Text>
          <View
            style={{
              height: height / 15.6,
              width: width / 1.1,
              alignSelf: "center",
              borderColor: "#7a6fbe",
              borderWidth: 2,
              marginLeft: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="share" size={30} color="black" />
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: height / 20.6,
            width: width / 5.5,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              height: height / 20.6,
              width: width / 1.1,
              alignSelf: "center",
              marginLeft: "50%",
            }}
          ></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({
  countA: state.countA,
  countV: state.countV,
  countR: state.countR,
});

export default connect(mapStateToProps)(landingPage);
