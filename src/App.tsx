import { Image, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const App = () => (
  <SafeAreaProvider
    // https://github.com/react-navigation/react-native-safe-area-view/issues/104#issuecomment-597789305
    initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}
  >
    <SafeAreaView>
      <Text>Gin & Tonic</Text>
      <Image
        accessibilityValue={{ text: "Gin & Tonic Photo" }}
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://theforkedspoon.com/wp-content/uploads/2018/06/gin-and-tonic-500x375.jpg",
        }}
      />
      <Text>Hendrix Gin</Text>
      <Text>Fever Tree Tonic</Text>
      <Text>Lemon</Text>
      <Text>Lime</Text>
      <Text>Cucumber</Text>
      <Text>Ice</Text>
      <Text>1. Put one square cube into the glass</Text>
      <Text>2. Pour two shots of cold Hendricks Gin into the glass</Text>
      <Text>3. Add two shots of cold Fever Tree Tonic into the glass</Text>
      <Text>4. Squeeze one lemon wedge over the glass</Text>
      <Text>5. Squeeze one lime wedge over the glass</Text>
      <Text>6. Garnish glass with cucumber slice</Text>
    </SafeAreaView>
  </SafeAreaProvider>
)

export default App
