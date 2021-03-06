import * as React from "react";
import { Stack, Heading, Text, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { dataPT } from "../../../Books/DataBooks/dataPT";
import { WebDivider } from "../../../common/StarDivider/WebDivider";
import { DimensionsHeight } from "../../../common/Dimensions/Dimensions";
import MapMainContent from "../../../common/Maps/MapMainContent";
import MapThemes from "../../../common/Maps/MapThemes";
import MapHeroes from "../../../common/Maps/MapHeroes";
import TimeWrapper from "../../../common/Time/TimeWrapper";
import isWEB from "../../../common/Resolutions/isWEB";
import {
  whiteColor,
  grayTitleColor,
  grayTitleDarkColor,
  violetColor,
} from "../../../common/Colors/colors";

export default function StackContainer() {
  return (
    <ScrollView style={styles.scroll}>
      <Stack p="4" space={3} padding={6}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {dataPT.map((item, id) => (
              <Text key={`card-${id + 1}`}>{item.titlePT}</Text>
            ))}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: violetColor,
            }}
            _dark={{
              color: violetColor,
            }}
            fontWeight="500"
            ml="-1"
            mt="-1"
          >
            {dataPT.map((item, author) => (
              <React.Fragment key={author}>
                <Text
                  fontSize="xs"
                  _light={{
                    color: grayTitleColor,
                  }}
                  _dark={{
                    color: grayTitleDarkColor,
                  }}
                >
                  {item.authorTextPT} {""}
                </Text>
                {item.authorPT}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <MapMainContent isMainContentPT={true} />
        <Stack alignItems="flex-end">
          <Text
            fontSize="xs"
            _light={{
              color: violetColor,
            }}
            _dark={{
              color: violetColor,
            }}
            fontWeight="500"
            mr="1"
            mt="-1"
          >
            {dataPT.map((item, date) => (
              <React.Fragment key={date}>
                <Text
                  fontSize="xs"
                  _light={{
                    color: grayTitleColor,
                  }}
                  _dark={{
                    color: grayTitleDarkColor,
                  }}
                >
                  {item.dateTitlePT}
                </Text>
                {item.datePT}
              </React.Fragment>
            ))}
          </Text>
        </Stack>
        <WebDivider />
        <MapThemes isThemesPT={true} />
        <MapHeroes isHeroesPT={true} />
        {isWEB() && DimensionsHeight > 700 ? (
          <TimeWrapper isMarginExist={false} />
        ) : (
          <TimeWrapper isMarginExist={true} />
        )}
      </Stack>
    </ScrollView>
  );
}

const marginTB = 90;

const styles = StyleSheet.create({
  scroll: {
    marginTop: -1,
    marginBottom: DimensionsHeight / marginTB,
    padding: 0,
    backgroundColor: whiteColor,
  },
});
