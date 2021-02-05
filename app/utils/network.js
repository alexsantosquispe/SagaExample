import NetInfo from '@react-native-community/netinfo';

const isNetworkAvailable = async () => {
  const response = await NetInfo.fetch();
  return response.isConnected;
};

export { isNetworkAvailable };
