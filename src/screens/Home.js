import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../hooks/Provider";
import {
  ALWAYS,
  NEVER,
  answersResponses,
  areas,
  competencias,
} from "../data/kid-information";
import { saludo } from "../libs/date.helper";

export default function SignUp() {
  const {
    lastRegister,
    user,
    registros,
    alreadyHaveARegisterToday,
    resetEverything,
  } = useAppContext();
  const getRatesFromRegister = () => {
    const latestRegistro = registros.reduce(
      (acc, curr) => (acc.id > curr.id ? acc : curr),
      {}
    );
    if (Object.keys(latestRegistro).length === 0) return [0, 0, 0, 0];
    const rates = areas.reduce((acc, curr) => {
      const competenciasByArea = competencias.filter(
        (c) => c.areaId === curr.id
      );
      const currentAnswers = latestRegistro.answers.filter((c) =>
        competenciasByArea.some((a) => a.id === c.competenciaId)
      );
      const rate = Math.floor(
        (currentAnswers.reduce((acc, curr) => acc + curr.answerId, 0) /
          (currentAnswers.length * 2)) *
          100
      );
      return [...acc, rate];
    }, []);
    return rates;
  };
  const latestRates = useMemo(() => getRatesFromRegister(), [registros]);

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-sky-500">
      <SafeAreaView className="flex pb-0">
        <View className="mt-24 -mb-5">
          <Text className="text-white ml-4">
            Fecha de último registro: {lastRegister ?? " --"}
          </Text>
          <Text className="font-bold text-white ml-4 text-4xl">
            {saludo()} sr.(a)
          </Text>
        </View>
      </SafeAreaView>
      <View
        className="flex-1 px-8 pt-8 bg-white"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <ScrollView className="space-y-4">
          <Text className="text-gray-700 font-bold">
            Avance de {user.nombre} (último registro)
          </Text>
          {areas.map((i, idx) => (
            <View key={idx} className="space-y-2">
              <View className="flex-row justify-between">
                <Text className="text-gray-700">{i.description}</Text>
                <Text className="text-gray-700">{latestRates[idx] ?? 0}%</Text>
              </View>
              <View className="bg-gray-200 rounded-full h-3">
                <View
                  style={{ width: (latestRates[i.id] ?? 0) + "%" }}
                  className={`h-3 rounded-full ${
                    (latestRates[i.id] ?? 0) >= 60
                      ? "bg-green-500"
                      : (latestRates[i.id] ?? 0) < 30
                      ? "bg-red-600"
                      : "bg-yellow-400"
                  }`}
                ></View>
              </View>
            </View>
          ))}
          <View className="mb-4">
            <Text className="text-gray-500 text-xs text-center">
              Este es el resumen de su último registro en cada una de las áreas
            </Text>
          </View>
          <TouchableOpacity
            className="mb-2 py-3 bg-sky-500 rounded-xl"
            onPress={() => {
              // resetEverything();
              if (alreadyHaveARegisterToday()) {
                alert("Ya tienes un registro el día de hoy");
                return;
              }
              navigation.navigate("List", {
                screen: "Listed",
                params: { goToRegister: true },
              });
            }}
          >
            <Text className="text-sm font-bold text-center text-white">
              {registros.length > 0
                ? "Agregar Registro"
                : "Haz tu primer registro"}
            </Text>
          </TouchableOpacity>
          <View className="space-y-2">
            <Text className="text-gray-700 text-sm font-bold">
              Más Información
            </Text>
            <Text className="text-gray-500 text-sm">
              Aquí abajo se muestra el valor de cada respuesta para saber el
              avance del niño:
            </Text>
            <View className="flex-row gap-1 flex-wrap justify-evenly">
              {answersResponses.map((ar) => (
                <View
                  key={ar.id}
                  className={`p-2 rounded-xl w-min ${
                    ar.description === ALWAYS
                      ? "bg-green-500"
                      : ar.description === NEVER
                      ? "bg-red-600"
                      : "bg-yellow-400"
                  }`}
                >
                  <Text className="text-xs text-white font-bold">
                    {ar.description}({ar.id} ptos)
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
