import Toast from 'react-native-root-toast';

export const actionObject = (type: any, payload: any = null) => {
  return { type, payload }
}

export const showToast = (message: string = 'sadsa', toastType: string, duration: number = 3000, extraMessage: string = '') => {
  Toast.show(message, {
    duration,
    animation: true,
    backgroundColor:
      toastType == 'danger' ? '#ca5c54'
        : toastType == 'success' ? '#74b566'
        : toastType == 'warning' ? '#e7af5f'
        : toastType,
    opacity: 1,
    shadow: false
  });
}