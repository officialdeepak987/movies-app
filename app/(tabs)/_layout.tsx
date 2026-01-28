import { Tabs } from "expo-router";
import {StyleSheet}  from "react-native"
import "../global.css";
import { ImageBackground } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
export default function TabsLayout() {

    const tableICons=()=>{
        return(
            <ImageBackground
             source={images.highlight}
            >
                <Image source={icons.home} tintColor="#151312" 
                
                />
                
            </ImageBackground>
        )
    }


  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index"
      options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:({
            focus
        })=>{
            <>
            <ImageBackground 
             source={images.highlight}
            >
                
            </ImageBackground>
            </>
        }
      }}
      
      />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}





const styles = StyleSheet.create({
  btnBg: {
     display:"flex",
     flexDirection:"row",
     width:"100%",
     minWidth:"112px",
     



     

  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
});
