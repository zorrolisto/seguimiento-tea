import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import SignUpImage from "../../assets/images/signup.png";
import { useAppContext } from "../hooks/Provider";
import SelectDropdown from "react-native-select-dropdown";
import { edades } from "../data/kid-information";
import { haveEmptyFields } from "../libs/object.helper";

export default function SignUp() {
  const [state, setState] = useState({
    nombre: "",
    edad: "2 meses",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { saveUser } = useAppContext();
  const navigation = useNavigation();

  const handleRegistrate = () => {
    if (isLoading) return;
    setIsLoading(true);
    if (haveEmptyFields(state)) {
      alert("Por favor llena todos los campos");
      return;
    }
    saveUser({ ...state });
  };

  return (
    <View className="flex-1 bg-sky-500">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="#38bdf8" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={SignUpImage} style={{ width: 165, height: 110 }} />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 px-8 pt-8 bg-white"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Nombre del niño/a</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={state.nombre}
            onChangeText={(nombre) => setState((c) => ({ ...c, nombre }))}
            placeholder="Ingresa el nombre de tu niño/a"
          />
          <Text className="text-gray-700 ml-4">Correo Electrónico</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Ingresa tu correo"
            value={state.email}
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            onChangeText={(email) => setState((c) => ({ ...c, email }))}
          />
          <Text className="text-gray-700 ml-4 mb-2">Edad del niño/a</Text>
          <SelectDropdown
            buttonStyle={{
              backgroundColor: "#f3f4f6",
              borderRadius: 16,
              width: "100%",
              marginBottom: 10,
            }}
            buttonTextStyle={{
              fontSize: 12,
              color: "#374151",
              textAlign: "left",
            }}
            rowTextStyle={{ fontSize: 12 }}
            data={edades}
            defaultValueByIndex={0}
            onSelect={(i) => setState((c) => ({ ...c, edad: i.description }))}
            buttonTextAfterSelection={(i) => i.description}
            rowTextForSelection={(i) => i.description}
          />
          <TouchableOpacity
            className="py-3 bg-sky-500 rounded-xl"
            onPress={handleRegistrate}
          >
            <Text className="text-sm font-bold text-center text-white">
              {isLoading ? "Cargando..." : "Registrate"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
