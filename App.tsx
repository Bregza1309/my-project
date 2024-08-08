import { Text, View, StatusBar } from 'react-native';
import styles from './styles';
import { Box } from './Box';
export default function App() {
  const boxes = new Array(10).fill(null).map((v, i) => i + 1);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {boxes.map((b) => (
        <Box key={b}>#{b}</Box>
      ))}
    </View>
  );
}
