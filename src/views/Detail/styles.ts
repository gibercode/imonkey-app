import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  main: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center'
  },

  title: {
   fontSize: 20,
   fontWeight: '700',
   marginTop: '8%',
   marginBottom: '5%'
  },

  text: {
    fontSize: 14,
    marginVertical: '1%'
  },

  button: {
    backgroundColor: '#1976d2',
    marginTop: '5%',
    padding: '2%',
    borderRadius: 10
  },

  buttonText: {
    padding: '3%',
    color: 'white',
    textAlign: 'center'
  }
  
})

export default styles;