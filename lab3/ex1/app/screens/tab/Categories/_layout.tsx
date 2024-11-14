

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Drawer } from 'expo-router/drawer'
import Categories1 from "./categories1"
import Categories2 from "./categories2"
import Categories3 from "./categories3"
import { Tabs } from "expo-router"

type CategoriesMaterialTopTabParamsList = {
    CATEGORIES1: undefined
    CATEGORIES2: undefined
    CATEGORIES3: undefined
}

export default function Categories() {
	return (
		<Tabs initialRouteName="CATEGORIES1">
			<Tabs.Screen name="CATEGORIES1" options={{
          title: "Categories1",
        }}/>

		</Tabs>
	)
}
