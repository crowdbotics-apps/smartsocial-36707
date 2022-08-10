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
      <View style={styles.View_13_411} />
      <View style={styles.View_13_412}>
        <View style={styles.View_13_413}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56ac3d1f-531b-4d38-9372-378905607814"
            }}
            style={styles.ImageBackground_13_414}
          />
          <View style={styles.View_13_415}>
            <View style={styles.View_13_416}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca033885-c12b-4759-b888-196792e432b4"
                }}
                style={styles.ImageBackground_13_417}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89ace297-9ee2-43d8-ac39-0e46dd387c7b"
                }}
                style={styles.ImageBackground_13_420}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba8a0faf-cd1d-49b1-876d-f6c5c4762500"
                }}
                style={styles.ImageBackground_13_421}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f080e61-4973-45b6-a8c9-09fa8115356c"
              }}
              style={styles.ImageBackground_13_422}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/260aec8e-64ba-4fc2-b612-cf208a415543"
              }}
              style={styles.ImageBackground_13_423}
            />
            <View style={styles.View_13_424}>
              <Text style={styles.Text_13_424}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_13_425}>
        <Text style={styles.Text_13_425}>kiểm tra sức khỏe tại nhà</Text>
      </View>
      <View style={styles.View_13_426}>
        <View style={styles.View_13_427} />
        <View style={styles.View_13_428}>
          <Text style={styles.Text_13_428}>ĐĂNG KÝ</Text>
        </View>
      </View>
      <View style={styles.View_13_429}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db2dc35d-223c-48b8-8172-d674bc432cf3"
          }}
          style={styles.ImageBackground_13_430}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b5ef5fc-51b7-403b-b719-37892fd59384"
          }}
          style={styles.TouchableOpacity_13_434}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("13_679"))
          }
        />
      </View>
      <View style={styles.View_13_435}>
        <View style={styles.View_13_436} />
        <View style={styles.View_13_437} />
        <View style={styles.View_13_438}>
          <Text style={styles.Text_13_438}>
            Mô tả tình trạng sức khỏe / yêu cầu khám
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6846672d-27dc-45b7-aeb6-a7aad4bd27fd"
          }}
          style={styles.ImageBackground_13_439}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4958f8c8-b12c-4f82-b2a1-075bc2f688cb"
          }}
          style={styles.ImageBackground_13_440}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ec3c3f7-4db9-4111-ba8d-f396584eace4"
          }}
          style={styles.ImageBackground_13_441}
        />
      </View>
      <View style={styles.View_13_472}>
        <Text style={styles.Text_13_472}>Chọn bác sĩ / y tá</Text>
      </View>
      <View style={styles.View_13_473}>
        <Text style={styles.Text_13_473}>Bác sĩ A chuyên khoa abc</Text>
      </View>
      <View style={styles.View_13_474}>
        <Text style={styles.Text_13_474}>Bác sĩ A chuyên khoa abc</Text>
      </View>
      <View style={styles.View_13_475}>
        <Text style={styles.Text_13_475}>Bác sĩ A chuyên khoa abc</Text>
      </View>
      <View style={styles.View_13_476}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4e4367f-fb24-4b9d-b947-bb308a47c3d5"
          }}
          style={styles.ImageBackground_13_477}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/babbf92c-af3c-4263-a42d-ae9e015ed89f"
          }}
          style={styles.ImageBackground_13_478}
        />
      </View>
      <View style={styles.View_13_481}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbf12c05-3068-4fa2-b80a-5911e2318a00"
          }}
          style={styles.ImageBackground_13_482}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b95f687-af5d-43bb-98f4-fe1b9cbc8534"
          }}
          style={styles.ImageBackground_13_483}
        />
      </View>
      <View style={styles.View_13_486}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4c16018-e336-40cf-b379-d0937e976f7f"
          }}
          style={styles.ImageBackground_13_487}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/506c97af-bd3a-4a85-b6e6-be642fd13ec4"
          }}
          style={styles.ImageBackground_13_488}
        />
      </View>
      <View style={styles.View_13_491}>
        <Text style={styles.Text_13_491}>Điền thông tin đăng ký</Text>
      </View>
      <View style={styles.View_13_492}>
        <View style={styles.View_13_493} />
        <View style={styles.View_13_494}>
          <View style={styles.View_13_495} />
        </View>
        <View style={styles.View_13_496}>
          <View style={styles.View_13_497} />
        </View>
        <View style={styles.View_13_498}>
          <View style={styles.View_13_499} />
        </View>
        <View style={styles.View_13_500}>
          <View style={styles.View_13_501} />
        </View>
        <View style={styles.View_13_502}>
          <View style={styles.View_13_503} />
        </View>
        <View style={styles.View_13_504}>
          <View style={styles.View_13_505} />
        </View>
        <View style={styles.View_13_506}>
          <View style={styles.View_13_507}>
            <Text style={styles.Text_13_507}>Họ và tên </Text>
          </View>
          <View style={styles.View_13_508}>
            <Text style={styles.Text_13_508}>*</Text>
          </View>
        </View>
        <View style={styles.View_13_509}>
          <View style={styles.View_13_510}>
            <Text style={styles.Text_13_510}>Ngày/ tháng /năm sinh</Text>
          </View>
          <View style={styles.View_13_511}>
            <Text style={styles.Text_13_511}>*</Text>
          </View>
        </View>
        <View style={styles.View_13_512}>
          <View style={styles.View_13_513}>
            <Text style={styles.Text_13_513}>
              Giờ/ngày/tháng/năm đăng ký khám
            </Text>
          </View>
          <View style={styles.View_13_514}>
            <Text style={styles.Text_13_514}>*</Text>
          </View>
        </View>
        <View style={styles.View_13_515}>
          <View style={styles.View_13_516}>
            <Text style={styles.Text_13_516}>Địa chỉ</Text>
          </View>
        </View>
        <View style={styles.View_13_517}>
          <Text style={styles.Text_13_517}>Số điện thoại</Text>
        </View>
        <View style={styles.View_13_518}>
          <Text style={styles.Text_13_518}>*</Text>
        </View>
        <View style={styles.View_13_519}>
          <Text style={styles.Text_13_519}>*</Text>
        </View>
        <View style={styles.View_13_520}>
          <Text style={styles.Text_13_520}>Email</Text>
        </View>
        <View style={styles.View_13_521}>
          <View style={styles.View_13_522}>
            <Text style={styles.Text_13_522}>Giới tính </Text>
          </View>
          <View style={styles.View_13_523}>
            <Text style={styles.Text_13_523}>Nam </Text>
          </View>
          <View style={styles.View_13_524}>
            <Text style={styles.Text_13_524}>Nữ </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cac89e60-8311-47ae-98c4-12fd039264c4"
            }}
            style={styles.ImageBackground_13_525}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99e29e32-af8a-4c46-8cda-5cfdefb1c520"
            }}
            style={styles.ImageBackground_13_526}
          />
        </View>
      </View>
      <View style={styles.View_13_442}>
        <View style={styles.View_13_443} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97e64b93-8756-4ed0-955b-c97fd25cb388"
          }}
          style={styles.ImageBackground_13_444}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0606b1e9-3c86-42e1-aa94-2282902e3a1c"
          }}
          style={styles.ImageBackground_13_450}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9285a438-fc77-4cb3-87d7-e9b26ac7102c"
          }}
          style={styles.ImageBackground_13_454}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e21da4d5-d932-44e0-bfad-b96af8b57124"
          }}
          style={styles.ImageBackground_13_457}
        />
        <View style={styles.View_13_460}>
          <Text style={styles.Text_13_460}>Smart social</Text>
        </View>
        <View style={styles.View_13_461}>
          <Text style={styles.Text_13_461}>Bảng tin</Text>
        </View>
        <View style={styles.View_13_462}>
          <Text style={styles.Text_13_462}>Căn hộ</Text>
        </View>
        <View style={styles.View_13_463}>
          <Text style={styles.Text_13_463}>Cá nhân</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82efb6c3-b892-41ef-883e-b02e9e04f88f"
          }}
          style={styles.ImageBackground_13_464}
        />
        <View style={styles.View_13_465}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e96be563-efd0-45c4-a783-c83ea0662df6"
            }}
            style={styles.ImageBackground_13_466}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("150%") },
  View_13_411: {
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
  View_13_412: {
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
  View_13_413: {
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
  ImageBackground_13_414: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_415: {
    width: wp("91%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_13_416: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_13_417: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_420: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_13_421: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_13_422: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_13_423: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_13_424: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_424: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_425: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_13_425: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_426: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("128%")
  },
  View_13_427: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 159, 217, 1)"
  },
  View_13_428: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_13_428: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_429: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  ImageBackground_13_430: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  TouchableOpacity_13_434: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_435: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("74%")
  },
  View_13_436: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 159, 217, 1)"
  },
  View_13_437: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_13_438: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_13_438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_439: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  ImageBackground_13_440: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%")
  },
  ImageBackground_13_441: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%")
  },
  View_13_472: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_13_472: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_473: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_13_473: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_474: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_13_474: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_475: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_13_475: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_476: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("99%")
  },
  ImageBackground_13_477: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_478: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_13_481: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("99%")
  },
  ImageBackground_13_482: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_483: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_13_486: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("99%")
  },
  ImageBackground_13_487: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_488: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_13_491: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_13_491: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_492: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("17%")
  },
  View_13_493: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 159, 217, 1)",
    borderWidth: 0.5
  },
  View_13_494: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_13_495: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_13_496: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%")
  },
  View_13_497: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_13_498: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%")
  },
  View_13_499: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_13_500: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%")
  },
  View_13_501: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_13_502: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("33%")
  },
  View_13_503: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_13_504: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("41%")
  },
  View_13_505: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_13_506: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%")
  },
  View_13_507: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_507: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_508: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_508: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_509: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_13_510: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_510: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_511: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_511: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_512: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%")
  },
  View_13_513: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_13_513: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_514: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_514: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_515: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("27%")
  },
  View_13_516: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_516: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_517: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_13_517: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_518: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_13_518: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_519: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_13_519: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_520: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_13_520: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_521: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("48%")
  },
  View_13_522: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_522: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_523: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_523: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_524: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_524: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_13_525: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_13_526: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%")
  },
  View_13_442: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135%")
  },
  View_13_443: {
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
  ImageBackground_13_444: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_13_450: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_13_454: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_13_457: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_13_460: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_460: {
    color: "rgba(51, 159, 217, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_461: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_461: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_462: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_462: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  View_13_463: {
    width: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_13_463: {
    color: "rgba(43, 87, 131, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.22,
    textTransform: "none"
  },
  ImageBackground_13_464: {
    width: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_13_465: {
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
  ImageBackground_13_466: {
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
