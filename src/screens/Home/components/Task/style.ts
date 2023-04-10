import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    paddingVertical: 12,
    paddingLeft: 8,
    paddingRight: 12,
    gap: 8,
    borderRadius: 8,
    border: '0.2px solid #333333',
    backgroundColor: '#262626',
    fontFamily: 'interRegular'
  },
  taskText: {
    color: '#F2F2F2',
    width: 235,
    fontSize: 14,
    fontFamily: 'interRegular'
  },
  taskTextChecked: {
    color: '#F2F2F2',
    width: 235,
    fontSize: 14,
    textDecorationLine: 'line-through',
    fontFamily: 'interRegular'
  }
})