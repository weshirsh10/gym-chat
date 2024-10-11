import { Text, useTheme } from "react-native-paper";

interface HeaderTitleProps {
  children: string;
  tintColor?: string;
}

const HeaderTitle = ({ children, tintColor }: HeaderTitleProps) => {
  console.log("children", children);
  const { fonts } = useTheme();
  return <Text style={[fonts.titleMedium]}>{children}</Text>;
};

export default HeaderTitle;
