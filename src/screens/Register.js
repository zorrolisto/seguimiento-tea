import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  answersResponses,
  areas,
  edades,
  getCompetenciasByAreaAndEdad,
} from "../data/kid-information";
import { useAppContext } from "../hooks/Provider";
import { getRandomId } from "../libs/id.helper";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentArea, setCurrentArea] = useState(null);
  const [currentCompetencias, setCurrentCompetencias] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { user, saveNewRegistro, alreadyHaveARegisterToday } = useAppContext();
  const navigation = useNavigation();

  useEffect(() => {
    getInformationByCurrentStep();
  }, [currentStep]);

  const getInformationByCurrentStep = () => {
    const edadId = edades.find((e) => e.description === user.edad).id;
    setCurrentArea(areas[currentStep]);
    setCurrentCompetencias(
      getCompetenciasByAreaAndEdad(areas[currentStep].id, edadId)
    );
  };
  const verifyCompetenciaAnswer = (competenciaId, answerId) => {
    const answerFound = answers.find((a) => a.competenciaId === competenciaId);
    return answerFound?.answerId === answerId;
  };
  const verifyAllAnsweredByStep = () => {
    const allAreAnswered = currentCompetencias.every((c) =>
      answers.some((a) => a.competenciaId === c.id)
    );
    if (!allAreAnswered) {
      alert("Por favor responde todas antes de continuar");
      return false;
    }
    return true;
  };
  const goToNextStep = () => {
    if (!verifyAllAnsweredByStep()) return;
    setCurrentStep((c) => (c < 3 ? c + 1 : 3));
    if (currentStep !== 3) return;
    const newRegistro = {
      id: getRandomId(),
      edad: user.edad,
      answers,
      date: new Date().toLocaleDateString(),
      rate: Math.floor(
        (answers.reduce((acc, curr) => acc + curr.answerId, 0) /
          (answers.length * 2)) *
          100
      ),
    };
    if (alreadyHaveARegisterToday()) {
      alert("Ya tienes un registro el día de hoy");
      navigation.goBack();
      return;
    }
    saveNewRegistro(newRegistro);
    alert("Gracias por responder el cuestionario");
    navigation.goBack();
  };
  const goToPreviousStep = () => setCurrentStep((c) => (c > 0 ? c - 1 : 0));
  const answerThisCompetencia = (competenciaId, answerId) => {
    const newAnswers = answers.filter((a) => a.competenciaId !== competenciaId);
    setAnswers([...newAnswers, { competenciaId, answerId }]);
  };

  return (
    <View className="flex-1 bg-sky-500">
      <SafeAreaView className="flex pb-0">
        <View className="mt-24 -mb-5">
          <Text className="text-white ml-4">Selecciona según tu criterio</Text>
          <Text className="font-bold text-white ml-4 text-4xl">
            {currentArea?.description ?? ""}
          </Text>
        </View>
      </SafeAreaView>
      <View
        className="flex-1 px-8 pt-8 bg-white space-y-3"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="flex-1">
          <ScrollView className=" space-y-4">
            {currentCompetencias.map((a, idx) => (
              <View
                key={idx}
                className="space-y-0 w-full items-center pb-4 border-b border-gray-100"
              >
                <View className="">
                  <Text className="text-gray-700 text-sm">{a.description}</Text>
                </View>
                <View className="flex flex-row gap-3">
                  {answersResponses.map((i) => (
                    <TouchableOpacity
                      key={i.id}
                      onPress={() => answerThisCompetencia(a.id, i.id)}
                      className={`p-3 border rounded-xl ${
                        verifyCompetenciaAnswer(a.id, i.id)
                          ? "bg-sky-400 border-sky-400"
                          : "border-sky-400"
                      }`}
                    >
                      <Text
                        className={`font-bold text-sm ${
                          verifyCompetenciaAnswer(a.id, i.id)
                            ? "text-white"
                            : "text-sky-400"
                        }`}
                      >
                        {i.description}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="mb-5 space-y-2">
          <TouchableOpacity
            onPress={goToNextStep}
            className="py-3 bg-sky-500 rounded-xl"
          >
            <Text className="font-sm font-bold text-center text-white">
              {currentStep === 3 ? "Finalizar" : "Siguiente"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToPreviousStep}
            className={`p-3 border border-sky-400 rounded-xl ${
              currentStep === 0 && "hidden"
            }`}
          >
            <Text className="font-sm font-bold text-center text-sky-400">
              Anterior
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
