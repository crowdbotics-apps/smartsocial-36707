import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_13_1040} />
      <View style={styles.View_13_1041}>
        <View style={styles.View_13_1042}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57d087fd-9a93-46fc-a4e1-08fbb02ede43"
            }}
            style={styles.ImageBackground_13_1043}
          />
          <View style={styles.View_13_1044}>
            <View style={styles.View_13_1045}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9b7334d-1a10-4189-8cee-a3233d3ddd00"
                }}
                style={styles.ImageBackground_13_1046}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/913c5a9c-80c9-4863-99c2-74b20937a4ec"
                }}
                style={styles.ImageBackground_13_1049}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6700444b-718f-4325-9e87-eff736839eee"
                }}
                style={styles.ImageBackground_13_1050}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f06072e-5c7c-41a2-8a9e-e26cca7468e7"
              }}
              style={styles.ImageBackground_13_1051}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2545250d-ca9e-443e-b4be-32e62ba33554"
              }}
              style={styles.ImageBackground_13_1052}
            />
            <View style={styles.View_13_1053}>
              <Text style={styles.Text_13_1053}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_13_1054}>
        <Text style={styles.Text_13_1054}>Nhà thuốc </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/689e9716-d179-4bbb-9b38-46b0277d841d"
        }}
        style={styles.ImageBackground_13_1055}
      />
      <View style={styles.View_13_1059}>
        <Text style={styles.Text_13_1059}>Xe </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1412e2fc-2bee-480e-999e-1b59ce17e0c0"
        }}
        style={styles.TouchableOpacity_13_1060}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("13_245"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7896fc10-577e-49c6-96b3-760462726e6a"
        }}
        style={styles.ImageBackground_13_1061}
      />
      <View style={styles.View_13_1062}>
        <Text style={styles.Text_13_1062}>Nhà thuốc gần đây</Text>
      </View>
      <View style={styles.View_13_1063}>
        <Text style={styles.Text_13_1063}>Gợi ý </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20cc4301-4d94-4b99-9632-b46f6c041dd2"
        }}
        style={styles.ImageBackground_13_1064}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f9d6a9c-d332-4185-9539-f7cab7af401f"
        }}
        style={styles.ImageBackground_13_1065}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc994446-24ef-4690-b42b-218a7fb616c6"
        }}
        style={styles.ImageBackground_13_1066}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/082b61cd-69c5-4667-8062-1fa9ea90793c"
        }}
        style={styles.ImageBackground_13_1067}
      />
      <View style={styles.View_13_1068} />
      <View style={styles.View_13_1069} />
      <View style={styles.View_13_1070} />
      <View style={styles.View_13_1071} />
      <View style={styles.View_13_1072}>
        <Text style={styles.Text_13_1072}>Nhà Thuốc Phamarcity</Text>
      </View>
      <View style={styles.View_13_1073}>
        <Text style={styles.Text_13_1073}>Nhà Thuốc Phamarcity</Text>
      </View>
      <View style={styles.View_13_1074}>
        <Text style={styles.Text_13_1074}>Nhà Thuốc Phamarcity</Text>
      </View>
      <View style={styles.View_13_1075}>
        <Text style={styles.Text_13_1075}>Nhà Thuốc Phamarcity</Text>
      </View>
      <View style={styles.View_13_1076}>
        <Text style={styles.Text_13_1076}>123 Phạm Hùng, Mễ Trì, HN </Text>
      </View>
      <View style={styles.View_13_1077}>
        <Text style={styles.Text_13_1077}>123 Phạm Hùng, Mễ Trì, HN </Text>
      </View>
      <View style={styles.View_13_1078}>
        <Text style={styles.Text_13_1078}>123 Phạm Hùng, Mễ Trì, HN </Text>
      </View>
      <View style={styles.View_13_1079}>
        <Text style={styles.Text_13_1079}>123 Phạm Hùng, Mễ Trì, HN </Text>
      </View>
      <View style={styles.View_13_1080}>
        <Text style={styles.Text_13_1080}>039 4022 826</Text>
      </View>
      <View style={styles.View_13_1081}>
        <Text style={styles.Text_13_1081}>039 4022 826</Text>
      </View>
      <View style={styles.View_13_1082}>
        <Text style={styles.Text_13_1082}>039 4022 826</Text>
      </View>
      <View style={styles.View_13_1083}>
        <Text style={styles.Text_13_1083}>039 4022 826</Text>
      </View>
      <View style={styles.View_13_1084}>
        <View style={styles.View_13_1085}>
          <Text style={styles.Text_13_1085}>Tìm kiếm </Text>
        </View>
        <View style={styles.View_13_1086} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98594672-42f7-4efa-a4d2-a0aef1d4cb83"
          }}
          style={styles.ImageBackground_13_1087}
        />
      </View>
      <View style={styles.View_13_1090}>
        <Text style={styles.Text_13_1090}>AMEPHONELPLACEWEBSITEMAIL</Text>
      </View>
      <View style={styles.View_13_1091}>
        <View style={styles.View_13_1092} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/446d23dc-e9c4-4ee2-b9c7-73d487f7b658"
          }}
          style={styles.ImageBackground_13_1093}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9940db34-b434-456e-a93c-de0b6ff5069e"
          }}
          style={styles.ImageBackground_13_1099}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ee511c0-312f-46da-a3c4-a7313f07699c"
          }}
          style={styles.ImageBackground_13_1103}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc1a4ab6-fc86-40f1-95b1-503828e90e9c"
          }}
          style={styles.ImageBackground_13_1106}
        />
        <View style={styles.View_13_1109}>
          <Text style={styles.Text_13_1109}>Smart social</Text>
        </View>
        <View style={styles.View_13_1110}>
          <Text style={styles.Text_13_1110}>Bảng tin</Text>
        </View>
        <View style={styles.View_13_1111}>
          <Text style={styles.Text_13_1111}>Căn hộ</Text>
        </View>
        <View style={styles.View_13_1112}>
          <Text style={styles.Text_13_1112}>Cá nhân</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35a92a61-e69f-4440-9aba-8f1f38fe1e1a"
          }}
          style={styles.ImageBackground_13_1113}
        />
        <View style={styles.View_13_1114}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/932d8582-21e8-44e2-a9a9-52715eedc757"
            }}
            style={styles.ImageBackground_13_1115}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_13_1040: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_13_1041: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_1042: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_1043: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_1044: {
    width: wp("91%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_13_1045: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_13_1046: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_1049: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_13_1050: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_13_1051: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_13_1052: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_13_1053: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_1053: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1054: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_1054: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_1055: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_13_1059: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_13_1059: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_1060: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_13_1061: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  View_13_1062: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_13_1062: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1063: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_13_1063: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_1064: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%"),
    resizeMode: "cover"
  },
  ImageBackground_13_1065: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("59%"),
    resizeMode: "cover"
  },
  ImageBackground_13_1066: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("70%"),
    resizeMode: "cover"
  },
  ImageBackground_13_1067: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("80%"),
    resizeMode: "cover"
  },
  View_13_1068: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("48%"),
    backgroundColor: "rgba(231, 231, 231, 1)"
  },
  View_13_1069: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("59%"),
    backgroundColor: "rgba(231, 231, 231, 1)"
  },
  View_13_1070: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("70%"),
    backgroundColor: "rgba(231, 231, 231, 1)"
  },
  View_13_1071: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("80%"),
    backgroundColor: "rgba(231, 231, 231, 1)"
  },
  View_13_1072: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_13_1072: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1073: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_13_1073: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1074: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_13_1074: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1075: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_13_1075: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1076: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_13_1076: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1077: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_13_1077: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1078: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_13_1078: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1079: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_13_1079: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1080: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_13_1080: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1081: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_13_1081: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1082: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_13_1082: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1083: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_13_1083: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1084: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%")
  },
  View_13_1085: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_13_1085: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1086: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 159, 217, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1
  },
  ImageBackground_13_1087: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_13_1090: {
    width: wp("92%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    justifyContent: "flex-start"
  },
  Text_13_1090: {
    color: "rgba(0, 23, 70, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_1091: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96%")
  },
  View_13_1092: {
    width: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_1093: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_13_1099: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_13_1103: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_13_1106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_13_1109: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_1109: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_1110: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_1110: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_1111: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_1111: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_1112: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_1112: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  ImageBackground_13_1113: {
    width: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_13_1114: {
    width: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_1115: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
