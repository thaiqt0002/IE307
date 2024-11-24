import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import BezierLineChartShow from "./BezierLineChart";
import LineChartShow from "./LineChart";
import BarChartShow from "./BarChart";
import StackedBarChartShow from "./StackedBarChart";
import ProgressChartShow from "./ProgressChart";
import PieChartShow from "./PieChart";
import ContributionChartShow from "./ContributionChart";
import PieCharPart2 from "./PieChart2";

export default function Index() {
  return (
    <ScrollView>
      <View>
        <Text className="text-center text-3xl font-bold">
          Pie Chart
          <PieCharPart2 />
        </Text>
        <Text className="text-center text-3xl font-bold">
          ------------------------
        </Text>
        <Text className="text-center text-3xl font-bold">
          Bezier Line Chart
        </Text>
        <BezierLineChartShow />
      </View>
      <View>
        <Text className="text-center text-3xl font-bold">Line Chart</Text>
        <LineChartShow />
      </View>
      <View>
        <Text className="text-center text-3xl font-bold">Progress Chart</Text>
        <ProgressChartShow />
      </View>
      <View>
        <Text className="text-center text-3xl font-bold">Bar Chart</Text>
        <BarChartShow />
      </View>
      <View>
        <Text className="text-center text-3xl font-bold">StackedBar Chart</Text>
        <StackedBarChartShow />
      </View>
      <View>
        <Text className="text-center text-3xl font-bold">Pie Chart</Text>
        <PieChartShow />
      </View>
      <View>
        <Text className="text-center text-3xl font-bold">
          Contribution Chart
        </Text>
        <ContributionChartShow />
      </View>
    </ScrollView>
  );
}
