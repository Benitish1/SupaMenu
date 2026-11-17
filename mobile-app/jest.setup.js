// Use AsyncStorage's official in-memory mock in tests (there is no native module under Jest).
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
