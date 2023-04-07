import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerContainer: {
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 70,
    position: 'relative',
  },
  
  taskInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 54,
    position: 'absolute',
    bottom: -27,
  },
  taskInput: {
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#808080',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },

  taskButton: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },

  taskButtonText: {
    color: '#FFF',
    fontSize: 24
  },
  
  bodyContainer: {
    alignItems: 'center',
    marginTop: 59,
    position: 'relative',
  },
  bodyContainerHeader: {
    flexDirection: 'row',
    width: 330,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countView: {
    flexDirection: 'row',
    gap: 8,
  },
  countNumber: {
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontWeight: 'bold',
    color: '#D9D9D9'
  },

  noTasksContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#808080'
  }
})