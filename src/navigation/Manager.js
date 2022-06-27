import {screens, colors} from '../utilities/Constants';

// Screens:-
import SplashScreen from './screens/splash/Splash';
import MainScreen from './screens/main/Main';

export const routeComponent = key => routeDetails(key).component;

export const routeOptions = key => routeDetails(`${key}`).options;

// Every Route Screen :-
const routeDetails = key => {
  let name = screens[`${key}`];

  switch (key) {
    case screens.SplashScreen:
      return {
        name,
        component: SplashScreen,
        options: {
          title: screens.SplashScreen,
          headerBackVisible: false,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
          orientation: 'portrait',
        },
      };

    case screens.MainScreen:
      return {
        name,
        component: MainScreen,
        options: {
          title: screens.MainScreen,
          headerBackVisible: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerShown: false,
          orientation: 'portrait',
        },
      };
  }
};
