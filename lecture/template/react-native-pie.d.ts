declare module 'react-native-pie' {
  import { Component } from 'react';
  import { ViewStyle } from 'react-native';

  interface PieProps {
    radius: number;
    series: number[];
    colors: string[];
    backgroundColor?: string;
    doughnut?: boolean;
    coverRadius?: number;
    coverFill?: string;
    style?: ViewStyle;
  }

  export default class Pie extends Component<PieProps> {}
}