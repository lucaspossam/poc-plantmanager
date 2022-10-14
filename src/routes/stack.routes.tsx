import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIndentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";
import { MyPlants } from "../pages/MyPlants";
import AuthRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const appRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
      headerShown: false,
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />

    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIndentification}
    />

    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />

    <stackRoutes.Screen name="PlantSave" component={PlantSave} />

    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
);

export default appRoutes;
