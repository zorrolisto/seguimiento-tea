import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EyeIcon } from "react-native-heroicons/solid";
import { useAppContext } from "../hooks/Provider";
import RegistroModal from "../components/RegistroModal";
import { answersResponses, competencias } from "../data/kid-information";

export default function SignUp() {
  const [modalVisible, setModalVisible] = useState(false);
  const [registroSelected, setRegistroSelected] = useState(null);
  const { alreadyHaveARegisterToday, registros } = useAppContext();
  const registrosWithKey = useMemo(
    () => registros.map((r, idx) => ({ ...r, key: idx })),
    [registros]
  );
  const navigation = useNavigation();
  const r = useRoute();

  useEffect(() => {
    const goToRegister = r?.params?.goToRegister;
    if (goToRegister) navigation.push("Register");
  }, [r.params]);

  const onPressShowRegistro = (registro) => {
    setModalVisible(true);
    const registroFormat = {
      ...registro,
      answers: registro.answers.map((a, idx) => ({
        ...a,
        answer: answersResponses.find((b) => b.id === a.answerId).description,
        competencia: competencias.find((c) => c.id === a.competenciaId)
          .description,
        key: idx,
      })),
    };
    setRegistroSelected(registroFormat);
  };

  return (
    <View className="flex-1 bg-sky-500">
      <SafeAreaView className="flex pb-0">
        <View className="mt-24 -mb-5">
          <Text className="text-white ml-4">
            Registros que has hecho hasta el momento
          </Text>
          <Text className="font-bold text-white ml-4 text-4xl">
            Lista de Registros
          </Text>
        </View>
      </SafeAreaView>
      <View
        className="flex-1 px-8 pt-8 bg-white space-y-3"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        {registrosWithKey.length > 0 && (
          <TouchableOpacity
            className="py-3 bg-sky-500 rounded-xl"
            onPress={() => {
              if (alreadyHaveARegisterToday()) {
                alert("Ya tienes un registro el día de hoy");
                return;
              }
              navigation.navigate("Register");
            }}
          >
            <Text className="font-sm font-bold text-center text-white">
              Agregar Registro
            </Text>
          </TouchableOpacity>
        )}
        <View className="flex-1">
          {registrosWithKey.length === 0 && (
            <View className="flex-1 justify-center items-center">
              <View className="space-y-3 w-full">
                <Text className="text-gray-500 text-xs text-center">
                  Aquí irán los registros que vayas haciendo de tu niño
                </Text>
                <TouchableOpacity
                  className="py-3 bg-sky-500 rounded-xl"
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text className="font-sm font-bold text-center text-white">
                    Haz tu primer registro
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {registrosWithKey.length > 0 && (
            <FlatList
              data={registrosWithKey}
              renderItem={({ item: registro }) => (
                <View className="flex-row items-center justify-between p-2 border-b border-b-gray-100">
                  <View className="flex-row gap-3">
                    <Text className="text-gray-400">{registro.key + 1}</Text>
                    <Text className="text-gray-700">{registro.date}</Text>
                  </View>
                  <View
                    className={`p-2 rounded-xl ${
                      registro.rate >= 60
                        ? "bg-green-500"
                        : registro.rate < 30
                        ? "bg-red-600"
                        : "bg-yellow-400"
                    }`}
                  >
                    <Text className="font-bold text-white">
                      {registro.rate}%
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="p-2 bg-sky-500 rounded-xl"
                    onPress={() => onPressShowRegistro(registro)}
                  >
                    <EyeIcon size={20} color="white" />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
        <RegistroModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          registro={registroSelected}
        />
      </View>
    </View>
  );
}
