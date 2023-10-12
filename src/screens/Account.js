import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../hooks/Provider";
import { edades } from "../data/kid-information";
import SelectDropdown from "react-native-select-dropdown";
import { haveEmptyFields } from "../libs/object.helper";

export default function SignUp() {
  const [state, setState] = useState({ nombre: "", edad: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { user, saveUser, resetEverything } = useAppContext();

  useEffect(() => {
    setState({ ...user });
  }, []);

  const reset = () => {
    resetEverything();
    alert("Reinicie la aplicación");
  };
  const handleUpdateUsuario = async () => {
    if (isLoading) return;
    setIsLoading(true);
    if (haveEmptyFields(state)) {
      alert("Por favor llena todos los campos");
      return;
    }
    saveUser({ ...state });
    setIsLoading(false);
    alert("Datos actualizados correctamente");
  };

  return (
    <View className="flex-1 bg-sky-500">
      <SafeAreaView className="flex pb-0">
        <View className="mt-24 -mb-5">
          <Text className="text-white ml-4">
            Actualiza los datos de tu niño
          </Text>
          <Text className="font-bold text-white ml-4 text-4xl">Mi Cuenta</Text>
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
            defaultValueByIndex={
              edades.find((e) => e.description === state.edad)?.id ?? 0
            }
            onSelect={(i) => setState((c) => ({ ...c, edad: i.description }))}
            buttonTextAfterSelection={(i) => i.description}
            rowTextForSelection={(i) => i.description}
          />
          <Text className="text-gray-500 text-xs text-center mb-2">
            Actualice la edad de su niño cuando corresponda
          </Text>
          <TouchableOpacity
            className="py-3 bg-sky-500 rounded-xl"
            onPress={handleUpdateUsuario}
          >
            <Text className="text-sm font-bold text-center text-white">
              {isLoading ? "Cargando..." : "Actualizar"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-red-400 rounded-xl"
            onPress={reset}
          >
            <Text className="text-sm font-bold text-center text-white">
              Restablecer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
