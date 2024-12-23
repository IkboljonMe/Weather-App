// II. Components and Styling: Implemented ThemedView component for reusable styled views with theme support.
// III. Overview of basic components: Utilized View component to create a themed container.
// V. State Management and Context API: Integrated useThemeColor hook to manage background color based on the current theme.
// IV. Event handling and creating a simple user interface: Enhanced UI by allowing dynamic background colors based on the selected theme.

import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
