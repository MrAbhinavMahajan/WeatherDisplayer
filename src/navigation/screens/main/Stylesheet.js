import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../utilities/Constants';

export const styles = StyleSheet.create({
  shadow: (shadowColor = colors.black) => ({
    shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }),

  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },

  contentWrapper: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },

  contentDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.offWhite,
  },

  contentTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.lightOffWhite,
    marginVertical: 10,
  },

  contentPresablesWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 20,
  },

  contentPresablesLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.semiDarkViolet,
    padding: 15,
  },

  circle: {
    borderRadius: 1000,
  },

  menuBarWrapper: {
    backgroundColor: colors.violet,
    height: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },

  headerLabel: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
    padding: 15,
  },

  refreshPressable: {
    width: 100,
    aspectRatio: 90 / 32,
    backgroundColor: colors.violet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  refreshPressableLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.lightBlue,
  },

  bottomSheetWrapper: (height = Platform.OS === 'ios' ? '65%' : '55%') => ({
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    height,
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.semiDarkBlue,
  }),

  bottomSheetFilters: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },

  bottomSheetFilterApplier: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomSheetFilterHeaderLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },

  bottomSheetFilterApplierKeyLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightViolet,
  },

  bottomSheetFilterApplierValueLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
  },

  bottomSheetCards: (hightlight = false) => ({
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: hightlight ? colors.darkViolet : colors.semiDarkBlue,
  }),

  nameLabel: {
    fontSize: 16,
    color: colors.purple,
    marginBottom: 7,
  },

  capsule: (
    backgroundColor = colors.lightYellow,
    minWidth = 16,
    height = 8,
    shouldAlignCenter = false,
  ) => ({
    minWidth,
    height,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor,
    alignSelf: shouldAlignCenter ? 'center' : 'auto',
    alignItems: 'center',
    flexDirection: 'row',
  }),
});
