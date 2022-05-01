import * as React from 'react';
import routes from '../routing/routes';
import { Dimensions, ImageBackground, Image } from "react-native";
import {
    Box,
    Heading,
    Center,
    NativBaseProvider,
    View,
    Text,
    ScrollView,
    Button
} from "native-base";
import logoNativeBase from '../images/nativebaseLogoImage.png';
import { LinearGradient } from 'expo-linear-gradient';
import RightArrowIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { data } from './data';
import BooksList from '../common/BooksList/BooksList';
import BackgroundScreen from '../common/BackgroundScreen/BackgroundScreen';

const BooksChoice = (props) => {

    const DimensionsHeight = Dimensions.get('window').height
    const DimensionsWidth = Dimensions.get('window').width

    // const onClickGoToLogIn = () => props.navigation.navigate(routes.LogInPage)


    return (
        <BackgroundScreen 
            isScrollView={false}
        >
            <View
                width={DimensionsWidth}
                height={DimensionsHeight}
                flexDirection="column"
                alignItems="center"
                alignContent="center"
                marginTop={10}
            >
                {/* <View
                        width="300px"
                        height="300px"
                    >
                        <Image
                            source={logoNativeBase}
                            flex={1}
                            resizeMode="contain"
                        />
                    </View> */}
                <View
                    width={DimensionsWidth}
                    height={DimensionsHeight}
                >
                    <BooksList />
                </View>
            </View>
        </BackgroundScreen>
    );
};

export default BooksChoice;
