import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button, TouchableHighlight } from 'react-native'
import * as React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { RadialSlider } from 'react-native-radial-slider';
import { Slider } from '@miblanchard/react-native-slider';


const data = [
    {
        id: "123",
        title: "   Auto",
        icon: require('../assets/auto.png'),
        selected: false
    },
    {
        id: "125",
        title: "     Dry",
        icon: require('../assets/dry.png'),
        selected: false
    },
    {
        id: "326",
        title: "    Cool",
        icon: require('../assets/cool.png'),
    },
    {
        id: "529",
        title: "Program",
        icon: require('../assets/program.png'),
        selected: false
    },

];

const Navigation = () => {
    const [value, setvalue] = useState(0);
    const navigation = useNavigation();
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    const [speed, setSpeed] = useState(0);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openSmall: true,
        showCloseButton: false,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),

    });
    const [isPanelActive, setIsPanelActive] = useState(false);

    const openPanel = () => {
        setIsPanelActive(true);
    };


    const closePanel = () => {
        setIsPanelActive(false);
    };



    const handleOnpress = (item) => {
        const newItem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, selected: !val.selected }
            }
            else {
                return val;
            }
        })
        setSelect(newItem)
    }

    const [sliderValue, setSliderValue] = useState(1);
    const [select, setSelect] = useState(data)

    const [isActive, setIsActive] = useState(false);



    return (

        <View style={styles.info} >
            <View style={styles.info2}>
            </View>

            <View style={styles.txt}>
                <Text style={tw`font-bold text-gray-300 text-xl ml-3`}>A/C is {active ? "ON" : "OFF"}</Text>
                <Text style={tw` font-semibold text-gray-500 text-sm mt-2 ml-2`}>Tap to turn ON or click the  {"\n"}
                    to open setup
                </Text>

            </View>

            <TouchableOpacity style={styles.menu}
                onPress={openPanel}
            >
                <Text style={styles.text}>menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
                onPress={handleClick}
            >
                <Image source={require('../assets/off.png')} style={{ height: 35, width: 35, top: 18, left: 18 }} />
            </TouchableOpacity>

            <SwipeablePanel style={styles.swipe} {...panelProps} isActive={isPanelActive}>

                <View style={styles.circle}>
                    <Text style={styles.ac}>Currently outside temperature </Text>
                    <Image source={require('../assets/rain.png')} style={styles.rain} />
                    <Text style={styles.rainTemp}>8℃</Text>


                    <RadialSlider
                        variant={'radial-circle-slider'}
                        value={8}
                        min={0}
                        max={35}
                        onChange={setSpeed}
                        unit='°C'
                        isHideSubtitle="true"
                        lineSpace={24}
                        sliderWidth={20}
                        valueStyle={styles.temp}
                        unitStyle={styles.temp2}
                        thumbBorderWidth={14}
                        thumbBorderColor="white"
                        thumbColor="#669bbc"
                        trackColor="black"
                    />
                </View>

                <TouchableOpacity style={styles.speed2}>
                    <Text style={tw`text-white top-1 font-semibold`}>{sliderValue}</Text>
                </TouchableOpacity>

                <Text style={styles.speed}>Fan Speed</Text>

                <View style={styles.sliderWidth}>
                    <Slider
                        maximumValue={5}
                        minimumValue={1}
                        step={1}
                        valueLabelDisplay="on"
                        trackClickable
                        defaultValue={1}
                        minimumTrackTintColor='#014f86'
                        thumbStyle={styles.thumb}
                        trackStyle={styles.track}
                        value={sliderValue}
                        onValueChange={
                            (sliderValue) => setSliderValue(sliderValue)
                        }

                    />
                </View>

                <View style={{ top: 147, left: 35 }}>
                    <Text style={tw`text-xl font-semibold text-white bottom-1 left-36 bottom-6`}>Mode</Text>
                    <FlatList
                        horizontal
                        data={select}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: { title, icon, id }, item }) => (
                            <Text style={tw`text-sm font-semibold text-gray-500 bottom-1 left-0 mr-12`}>{title}</Text>

                        )}
                    />
                    <FlatList
                        horizontal
                        data={select}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item: { title, icon, id }, item }) => (


                            <TouchableOpacity

                                style={{
                                    backgroundColor: item.selected ? "#014f86" : "#002944",
                                    height: 68,
                                    width: 68,
                                    marginRight: 20,
                                    alignContent: "center",
                                    alignItems: "center",
                                    borderRadius: 37,
                                }}
                                onPress={() => handleOnpress(item)}
                            >
                                <Image
                                    style={{ width: 25, height: 25, resizeMode: 'contain', top: 23 }}
                                    source={item.icon}
                                />

                            </TouchableOpacity>



                        )}
                    />

                </View>

            </SwipeablePanel>

        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({

    info: {
        height: "16%",
        width: "100%",
        bottom: 130,
        borderRadius: 37,
        backgroundColor: "#002139",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#014f86',

    },
    speed2: {
        backgroundColor: "#014f86",
        height: 25,
        width: 36,
        color: "white",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 10,
        top:102,
        left:245
    },
    button: {
        height: 68,
        width: 68,
        marginRight: 20,
        backgroundColor: "#002944",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 37,
    },
    rain: {
        height: 33,
        width: 33,
        bottom: 18,
        right: 25

    },
    ac: {
        fontWeight: "500",
        color: "gray",
        bottom: 25,
        right: 25

    },
    rainTemp: {
        fontWeight: "500",
        color: "gray",
        bottom: 44,
        left: 12,
        fontSize: 17
    },
    info2: {
        height: "4%",
        width: "14%",
        top: 8,
        left: 165,
        borderRadius: "100%",
        backgroundColor: "#669bbc"
    },
    btn: {
        width: 70,
        height: 70,
        backgroundColor: "#014f86",
        borderRadius: "100%",
        left: 310,
        top: -75,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#014f86',

    },
    txt: {
        top: 7,
        left: 22
    },
    menu: {
        height: 15,
        width: 37,
        borderWidth: 1,
        bottom: 29,
        left: 210,
        borderColor: "transparent",
        borderBottomColor: "#669bbc"

    },
    text: {
        color: "gray",
        bottom: 3,
        fontWeight: "400"
    },
    swipe: {
        borderRadius: 37,
        backgroundColor: "#002139",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowColor: '#014f86',
    },
    circle: {
        left: 60,
        top: 55,
    },
    temp: {
        color: "white",
        fontWeight: "900",
        fontSize: 43
    },
    temp2: {
        color: "white",
        fontWeight: "700",
        fontSize: 19
    },
    speed: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
        top: 80,
        left: 150
    },
    thumb: {
        backgroundColor: '#008ABC',
        borderColor: 'white',
        borderRadius: 30,
        borderWidth: 5,
        height: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        width: 20,
    },
    track: {
        backgroundColor: "white",
        borderRadius: 25,
        height: 12,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1,
    },
    sliderWidth: {
        top: 95,
        marginRight: 35,
        marginLeft: 35

    }

})