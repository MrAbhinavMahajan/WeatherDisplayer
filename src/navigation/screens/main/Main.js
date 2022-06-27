import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Assets from '../../../utilities/Assets';
import {api_key, colors} from '../../../utilities/Constants';
import {CustomButton, Icon} from '../../../utilities/Extensions';
import {styles} from './Stylesheet';

const Content = props => {
  const [currentWeatherDetails, setCurrentWeatherDetails] = React.useState();
  const [weatherDetails, setWeatherDetails] = React.useState();

  const fetchCurrentWeatherData = async () => {
    let currentWeatherDetails = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${api_key}`,
    );
    try {
      currentWeatherDetails = await currentWeatherDetails?.json();
      currentWeatherDetails = currentWeatherDetails.main;
      setCurrentWeatherDetails(currentWeatherDetails);
    } catch (error) {
      console.log({error});
    }
  };

  const fetchWeatherData = async () => {
    let weatherDetails = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&&exclude=hourly,minutely&appid=${api_key}`,
    );
    try {
      weatherDetails = await weatherDetails?.json();
      weatherDetails = weatherDetails.daily.slice(0, 6);
      setWeatherDetails(weatherDetails);
    } catch (error) {
      console.log({error});
    }
  };

  React.useEffect(() => {
    fetchCurrentWeatherData();
    fetchWeatherData();
  }, []);

  const Header = props => (
    <View style={styles.headerWrapper}>
      <View style={styles.headerInfoWrapper}>
        <View style={[styles.menuBarWrapper, styles.circle]}>
          <Image source={Assets.menuBars} />
        </View>

        <Text style={styles.headerLabel}>Weather</Text>
      </View>

      <CustomButton
        btn={{
          action: () => {
            fetchCurrentWeatherData();
            fetchWeatherData();
          },
          styles: styles.refreshPressable,
        }}
        label={{
          value: 'Refresh',
          styles: styles.refreshPressableLabel,
        }}
      />
    </View>
  );

  const renderWeatherItems = ({item, index}) => {
    return (
      <View style={styles.bottomSheetCards(index % 2 === 0)}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.nameLabel}>Temperature</Text>
            <Text style={{...styles.nameLabel, color: colors.white}}>
              {item.temp.day}
            </Text>
          </View>

          <View style={{flex: 1}}>
            <Text style={styles.nameLabel}>Humidity</Text>
            <Text style={{...styles.nameLabel, color: colors.white}}>
              {item.humidity}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const BottomSheet = ({data}) => (
    <View style={styles.bottomSheetWrapper()}>
      <View style={styles.capsule(colors.lightViolet, 64, 6, true)} />

      <View style={styles.bottomSheetFilters}>
        <Text style={styles.bottomSheetFilterHeaderLabel}>All Details</Text>

        <View style={styles.bottomSheetFilterApplier}>
          <Text style={styles.bottomSheetFilterApplierKeyLabel}>Sort by: </Text>
          <Text style={styles.bottomSheetFilterApplierValueLabel}>Recent </Text>
        </View>
      </View>

      <FlatList
        data={weatherDetails ?? []}
        renderItem={renderWeatherItems}
        keyExtractor={(item, index) => `Weather_${index.toString()}`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  if (currentWeatherDetails && weatherDetails) {
    return (
      <>
        <Header />
        <View style={styles.contentWrapper}>
          <Text style={styles.contentDescription}>Temperature is: -</Text>

          <Text style={styles.contentTitle}>
            {currentWeatherDetails.temp} °F
          </Text>

          <Text style={styles.contentDescription}>Humidity is: -</Text>
          <Text style={styles.contentTitle}>
            {currentWeatherDetails.humidity}
          </Text>
        </View>
        <BottomSheet data={[1, 2, 3]} />
      </>
    );
  }

  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const Main = props => {
  return (
    <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
      <Content {...props} />
    </SafeAreaView>
  );
};

export default Main;
