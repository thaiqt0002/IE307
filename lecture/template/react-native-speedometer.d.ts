declare module 'react-native-speedometer' {
    import { Component } from 'react';
    import { ViewStyle } from 'react-native';
  
    interface RNSpeedometerProps {
      value: number;
      size?: number;
      minValue?: number;
      maxValue?: number;
      allowedDecimals?: number;
      labels?: Array<{ name: string; labelColor: string; activeBarColor: string }>;
      needleImage?: any;
      wrapperStyle?: ViewStyle;
      outerCircleStyle?: ViewStyle;
      halfCircleStyle?: ViewStyle;
      imageWrapperStyle?: ViewStyle;
      innerCircleStyle?: ViewStyle;
      labelWrapperStyle?: ViewStyle;
      labelStyle?: ViewStyle;
    }
  
    export default class RNSpeedometer extends Component<RNSpeedometerProps> {}
  }