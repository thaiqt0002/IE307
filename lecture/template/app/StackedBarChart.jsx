import { Dimensions, View } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";

export default function StackedBarChartShow() {
  return (
    <View>
      <StackedBarChart
        data={{
          labels: ["Test1", "Test2"],
          legend: ["L1", "L2", "L3"],
          data: [
            [60, 60, 60],
            [30, 30, 60],
          ],
          barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
