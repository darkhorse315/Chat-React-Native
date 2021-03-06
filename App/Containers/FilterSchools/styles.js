import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'
import Metrics from '../../Themes/Metrics'
import ApplicationStyles from '../../Themes/ApplicationStyles'

const border = {
  borderBottomColor: Colors.frost,
  borderBottomWidth: StyleSheet.hairlineWidth
}
const commonRow = {
  flexDirection: 'row',
  justifyContent: 'space-between'
}
export default StyleSheet.create({
  ...ApplicationStyles,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  scrollContainer: {
    padding: Metrics.baseMargin
  },
  titleContainer: {
    ...border,
    marginLeft: 40,
    marginRight: Metrics.marginFifteen,
    paddingVertical: Metrics.baseMargin,
    marginBottom: Metrics.marginFifteen
  },
  title: {
    color: Colors.darkText,
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.sBold,
    paddingBottom: Metrics.baseMargin
  },
  description: {
    color: Colors.darkText,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.regular,
    paddingBottom: Metrics.baseMargin
  },
  detailItem: {
    flexDirection: 'row'
  },
  detailsItemIcon: {
    width: 25,
    fontSize: 20,
    color: Colors.themeColor,
    marginVertical: Metrics.doubleBaseMargin
  },
  labelText: {
    color: Colors.darkText,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.regular
  },
  itemValue: {
    color: Colors.darkText,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.sBold
  },
  dateRow: {
    ...commonRow
  },
  timeRow: {
    ...commonRow,
    marginTop: Metrics.smallMargin
  },
  dateTimeContainer: {
    ...border,
    flex: 1,
    marginHorizontal: Metrics.marginFifteen,
    paddingVertical: Metrics.doubleBaseMargin
  },
  filterTitle: {
    flex: 1,
    color: Colors.darkText,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.sBold,
    marginLeft: Metrics.baseMargin
  },
  filterContainer: {
    marginBottom: Metrics.baseMargin
  },
  filterInnerContainer: {
    flexDirection: 'row',
    paddingVertical: Metrics.marginFifteen
  },
  horizontalLine: {
    backgroundColor: Colors.frost,
    height: 0.5,
    marginLeft: Metrics.margin32,
    marginRight: Metrics.marginFifteen
  }
})
