import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Headphones from "../../screens/Headphones";
import DetailS from "../../screens/Details";
import Earphones from "../../screens/Earphones";
import Speakers from "../../screens/Speakers";
import Cart from "../../screens/Cart";
import Checkout from "../../screens/Checkout";
import { colors } from "../../theme";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Ionicons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";

const THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },
};

const TabIcon = ({ fontFamily, name, color }) => {
    if (fontFamily === "MaterialIcons") {
        return <MaterialIcons name={name} size={24} color={color} />;
    } else if (fontFamily === "SimpleLineIcons") {
        return <SimpleLineIcons name={name} size={24} color={color} />;
    } else if (fontFamily === "MaterialCommunityIcons") {
        return <MaterialCommunityIcons name={name} size={24} color={color} />;
    } else if (fontFamily === "Ionicons") {
        return <Ionicons name={name} size={24} color={color} />;
    }
};

// Home screen
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    );
}

// Headhones screen
const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreen() {
    return (
        <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
            <HeadphonesStack.Screen name="Headphones" component={Headphones} />
            <HeadphonesStack.Screen name="Details" component={DetailS} />
        </HeadphonesStack.Navigator>
    );
}

// Earphones screen
const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreen() {
    return (
        <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
            <EarphonesStack.Screen name="Earphones" component={Earphones} />
            <EarphonesStack.Screen name="Details" component={DetailS} />
        </EarphonesStack.Navigator>
    );
}

// Speakers screen
const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
    return (
        <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
            <SpeakersStack.Screen name="Speakers" component={Speakers} />
            <SpeakersStack.Screen name="Details" component={DetailS} />
        </SpeakersStack.Navigator>
    );
}

// Cart screen
const CartStack = createNativeStackNavigator();
function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Checkout" component={Checkout} />
        </CartStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default function Navigation() {
    const cart = useSelector((state) => [...state.cart]);

    return (
        <NavigationContainer theme={THEME}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.primary,
                }}
            >
                <Tab.Screen
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                fontFamily={"MaterialIcons"}
                                name={"home"}
                                color={color}
                            />
                        ),
                    }}
                    name="HomeTab"
                    component={HomeStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Headphones",
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name={"headphones"}
                                color={color}
                            />
                        ),
                    }}
                    name="HeadphonesTab"
                    component={HeadphonesStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Earphones",
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                fontFamily={"SimpleLineIcons"}
                                name={"earphones"}
                                color={color}
                            />
                        ),
                    }}
                    name="EarphonesTab"
                    component={EarphonesStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Speakers",
                        tabBarIcon: ({ color }) => (
                            <TabIcon
                                fontFamily={"MaterialIcons"}
                                name={"speaker"}
                                color={color}
                            />
                        ),
                    }}
                    name="SpeakersTab"
                    component={SpeakersStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Cart",
                        tabBarIcon: ({ color }) => (
                            <TabIcon fontFamily={"Ionicons"} name={"cart"} color={color} />
                        ),
                        tabBarBadge: cart.length > 0 ? cart.length : null,
                    }}
                    name="CartTab"
                    component={CartStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
