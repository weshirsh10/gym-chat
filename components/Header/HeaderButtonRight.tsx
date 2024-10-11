import { useRouter } from "expo-router";
import { IconButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

interface HeaderButtonRightProps {
  iconName: IconSource;
}

const HeaderButtonRight = ({ iconName }: HeaderButtonRightProps) => {
  const router = useRouter();
  return (
    <IconButton
      icon={iconName}
      size={24}
      onPress={() => {
        router.navigate("/history");
        console.log("history nav");
      }}
    />
  );
};

export default HeaderButtonRight;
