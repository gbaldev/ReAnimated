import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');
export const ListItemWidth = width * 0.8;
export const ItemInternalPadding = 10;
export const ItemContainerWidth = ListItemWidth + ItemInternalPadding * 2;
export const ListPadding = (width - ItemContainerWidth) / 2;

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollview: {
      flex: 1,
    },
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: ListPadding,
    }
  });