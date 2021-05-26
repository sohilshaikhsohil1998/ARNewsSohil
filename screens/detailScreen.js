import React, { useState, Component } from "react";
import { connect } from "react-redux";
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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Music from "react-native-vector-icons/MaterialCommunityIcons";
import Video from "react-native-vector-icons/Foundation";
import Eye from "react-native-vector-icons/AntDesign";
import Like from "react-native-vector-icons/AntDesign";
import LikeFill from "react-native-vector-icons/AntDesign";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

class detailScreen extends Component {
  incrementA = () => {
    this.props.dispatch({ type: "INCREMENTA" });
  };

  incrementV = () => {
    this.props.dispatch({ type: "INCREMENTV" });
  };

  incrementR = () => {
    this.props.dispatch({ type: "INCREMENTR" });
  };

  render() {
    const offset = Platform.OS === "android" ? -200 : 0;
    const { navigation } = this.props;
    // const { type } = this.props.route.params;

    return (
      <ScrollView style={{ height: height / 1.1 }}>
        {this.props.route.params.type == "video" && (
          <View>
            <Text style={{ fontSize: 30 }}>In Detail News 1</Text>

            <Text>
              1914 translation by H. Rackham "But I must explain to you how all
              this mistaken idea of denouncing pleasure and praising pain was
              born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure, but because
              those who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?" Section 1.10.33 of "de Finibus
              Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </Text>

            <Video
              style={{ justifyContent: "center", alignSelf: "center" }}
              name="play-video"
              size={100}
              color="black"
            />

            {this.props.countV == 0 && (
              <Like
                style={{ justifyContent: "center", alignSelf: "center" }}
                name="like2"
                size={100}
                color="black"
                onPress={() => this.incrementV()}
              />
            )}

            {this.props.countV != 0 && (
              <LikeFill
                style={{ justifyContent: "center", alignSelf: "center" }}
                name="like1"
                size={100}
                color="red"
                onPress={() => this.incrementV()}
              />
            )}

            <Text style={{ fontSize: 30, alignSelf: "center" }}>
              {this.props.countV}
            </Text>
          </View>
        )}

        {this.props.route.params.type == "read" && (
          <View>
            <Text style={{ fontSize: 30 }}>In Detail News 1</Text>

            <Text>
              1914 translation by H. Rackham "But I must explain to you how all
              this mistaken idea of denouncing pleasure and praising pain was
              born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure, but because
              those who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?" Section 1.10.33 of "de Finibus
              Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </Text>

            <Eye
              style={{ justifyContent: "center", alignSelf: "center" }}
              name="eye"
              size={100}
              color="black"
            />

            {this.props.countR == 0 && (
              <Like
                style={{ justifyContent: "center", alignSelf: "center" }}
                name="like2"
                size={100}
                color="black"
                onPress={() => this.incrementR()}
              />
            )}

            {this.props.countR != 0 && (
              <LikeFill
                style={{ justifyContent: "center", alignSelf: "center" }}
                name="like1"
                size={100}
                color="red"
                onPress={() => this.incrementR()}
              />
            )}

            <Text style={{ fontSize: 30, alignSelf: "center" }}>
              {this.props.countR}
            </Text>
          </View>
        )}

        {this.props.route.params.type == "music" && (
          <View>
            <Text style={{ fontSize: 30 }}>In Detail News 1</Text>

            <Text>
              1914 translation by H. Rackham "But I must explain to you how all
              this mistaken idea of denouncing pleasure and praising pain was
              born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure, but because
              those who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?" Section 1.10.33 of "de Finibus
              Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor
              repellendus. Temporibus autem quibusdam et aut officiis debitis
              aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
              maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </Text>

            <Music
              style={{ justifyContent: "center", alignSelf: "center" }}
              name="music-box-outline"
              size={100}
              color="black"
            />

            {this.props.countA == 0 && (
              <Like
                style={{ justifyContent: "center", alignSelf: "center" }}
                name="like2"
                size={100}
                color="black"
                onPress={() => this.incrementA()}
              />
            )}

            {this.props.countA != 0 && (
              <LikeFill
                style={{ justifyContent: "center", alignSelf: "center" }}
                name="like1"
                size={100}
                color="red"
                onPress={() => this.incrementA()}
              />
            )}

            <Text style={{ fontSize: 30, alignSelf: "center" }}>
              {this.props.countA}
            </Text>
          </View>
        )}
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

export default connect(mapStateToProps)(detailScreen);
