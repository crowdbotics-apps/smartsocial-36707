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
      <View style={styles.View_13_246}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/248e9069-cbf4-4d71-8ab8-ac0054ce2a47"
          }}
          style={styles.ImageBackground_13_247}
        />
        <View style={styles.View_13_251}>
          <Text style={styles.Text_13_251}>Y tế - sức khỏe </Text>
        </View>
        <View style={styles.View_13_252}>
          <Text style={styles.Text_13_252}>Hệ thống bệnh viện gần đây </Text>
        </View>
        <View style={styles.View_13_253}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a73e6eb-763f-4f99-8c5e-57944bf99d28"
            }}
            style={styles.ImageBackground_13_254}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a719d583-5a5f-4154-8c8f-6dcf35f3429e"
            }}
            style={styles.TouchableOpacity_13_258}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("13_43"))
            }
          />
        </View>
        <View style={styles.View_13_289}>
          <TouchableOpacity
            style={styles.TouchableOpacity_13_290}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("13_527"))
            }
          >
            <View style={styles.View_I13_290_1_2103}>
              <Text style={styles.Text_I13_290_1_2103}>Phòng khám</Text>
            </View>
            <View style={styles.View_I13_290_1_2104}>
              <View style={styles.View_I13_290_1_2105} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/608fb352-732e-4cf3-bc74-8c607624d454"
                }}
                style={styles.ImageBackground_I13_290_1_2106}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_13_291}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("13_1121"))
            }
          >
            <View style={styles.View_I13_291_1_2124}>
              <View style={styles.View_I13_291_1_2125}>
                <View style={styles.View_I13_291_1_2126}>
                  <Text style={styles.Text_I13_291_1_2126}>y tá tại nhà</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I13_291_1_2127}>
              <View style={styles.View_I13_291_1_2128} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9e6d380-5a10-44f0-aee6-10b985092be3"
                }}
                style={styles.ImageBackground_I13_291_1_2129}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_13_292}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("13_1039"))
            }
          >
            <View style={styles.View_I13_292_1_2134}>
              <Text style={styles.Text_I13_292_1_2134}>Nhà thuốc </Text>
            </View>
            <View style={styles.View_I13_292_1_2135}>
              <View style={styles.View_I13_292_1_2136} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/967aa827-d257-4682-b750-478f5d1f4aee"
                }}
                style={styles.ImageBackground_I13_292_1_2137}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_13_293}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("13_935"))
            }
          >
            <View style={styles.View_I13_293_1_2139}>
              <Text style={styles.Text_I13_293_1_2139}>Theo dõi sức khỏe</Text>
            </View>
            <View style={styles.View_I13_293_1_2140}>
              <View style={styles.View_I13_293_1_2141} />
              <View style={styles.View_I13_293_1_2142}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6dca981-55b9-4303-92c3-43470118b023"
                  }}
                  style={styles.ImageBackground_I13_293_1_2143}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c192ac55-db06-4f21-a323-9fd965da4c6d"
          }}
          style={styles.ImageBackground_13_294}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c3c43fd-0777-4b37-b45b-392aea6b9d61"
          }}
          style={styles.ImageBackground_13_295}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11cef841-3518-4cb2-9d5c-912647a6e915"
          }}
          style={styles.ImageBackground_13_296}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d5bb3a-4f52-45ac-8d15-8f129b0b68ab"
          }}
          style={styles.ImageBackground_13_297}
        />
        <View style={styles.View_13_298}>
          <Text style={styles.Text_13_298}>
            10 việc nên tránh để có sức khỏe tốt
          </Text>
        </View>
        <View style={styles.View_13_299}>
          <Text style={styles.Text_13_299}>vaccine covid mới </Text>
        </View>
        <View style={styles.View_13_300}>
          <Text style={styles.Text_13_300}>
            Hậu covid nên tập luyện thế nào{" "}
          </Text>
        </View>
        <View style={styles.View_13_301}>
          <View style={styles.View_13_302}>
            <Text style={styles.Text_13_302}>Tin tức </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b883bd9c-7244-4afa-8ad1-53e30fa08e73"
            }}
            style={styles.ImageBackground_13_303}
          />
        </View>
      </View>
      <View style={styles.View_13_259}>
        <View style={styles.View_13_260} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9710da50-8680-4c6f-aae4-6bdf27cef55d"
          }}
          style={styles.ImageBackground_13_261}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db8ea79a-7963-4c0c-a918-9bee1cef1ec8"
          }}
          style={styles.ImageBackground_13_267}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c357dcd6-220e-44a2-a278-49ae0152ca6e"
          }}
          style={styles.ImageBackground_13_271}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0ddadf8-0281-49fb-ba22-5c14b0288ce7"
          }}
          style={styles.ImageBackground_13_274}
        />
        <View style={styles.View_13_277}>
          <Text style={styles.Text_13_277}>Smart social</Text>
        </View>
        <View style={styles.View_13_278}>
          <Text style={styles.Text_13_278}>Bảng tin</Text>
        </View>
        <View style={styles.View_13_279}>
          <Text style={styles.Text_13_279}>Căn hộ</Text>
        </View>
        <View style={styles.View_13_280}>
          <Text style={styles.Text_13_280}>Cá nhân</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f04d9251-724a-4229-ac63-3707a1dbe294"
          }}
          style={styles.ImageBackground_13_281}
        />
        <View style={styles.View_13_282}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db6d4982-5491-4dbc-aa50-bb80ff752d50"
            }}
            style={styles.ImageBackground_13_283}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_13_246: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_13_247: {
    width: wp("100%"),
    height: hp("105%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_251: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_13_251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_252: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_13_252: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_253: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_13_254: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("0%")
  },
  TouchableOpacity_13_258: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_13_289: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_13_290: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_290_1_2103: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I13_290_1_2103: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I13_290_1_2104: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I13_290_1_2105: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I13_290_1_2106: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_13_291: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_291_1_2124: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I13_291_1_2125: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I13_291_1_2126: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I13_291_1_2126: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I13_291_1_2127: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I13_291_1_2128: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I13_291_1_2129: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_13_292: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_292_1_2134: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I13_292_1_2134: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I13_292_1_2135: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I13_292_1_2136: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I13_292_1_2137: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_13_293: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_293_1_2139: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I13_293_1_2139: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I13_293_1_2140: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I13_293_1_2141: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I13_293_1_2142: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I13_293_1_2143: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_294: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68%"),
    resizeMode: "cover"
  },
  ImageBackground_13_295: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("41%"),
    resizeMode: "cover"
  },
  ImageBackground_13_296: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("41%"),
    resizeMode: "cover"
  },
  ImageBackground_13_297: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("41%"),
    resizeMode: "cover"
  },
  View_13_298: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_13_298: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_299: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_13_299: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_300: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_13_300: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_301: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_302: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_302: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_303: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_13_259: {
    width: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_260: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_261: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("4%")
  },
  ImageBackground_13_267: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("4%")
  },
  ImageBackground_13_271: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("4%")
  },
  ImageBackground_13_274: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%")
  },
  View_13_277: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_277: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_278: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_278: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_279: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_279: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_280: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_280: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  ImageBackground_13_281: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_13_282: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_283: {
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
