import { View, Text, Modal, TouchableOpacity, FlatList } from "react-native";
import { ALWAYS, NEVER } from "../data/kid-information";

export default function RegistroModal({
  modalVisible,
  setModalVisible,
  registro,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View className="flex-1 justify-center items-center bg-black/60">
        <View className="m-5 bg-white rounded-2xl p-4 items-center shadow-sm w-11/12 h-3/5">
          <View className="w-full mb-3">
            <Text className="text-gray-700 font-bold text-left text-lg">
              Porcentaje de avance: {registro?.rate}%
            </Text>
            <Text className="text-gray-700 font-bold text-left text-lg">
              Fecha: {registro?.date}
            </Text>
            <Text className="text-gray-700 font-bold text-left text-lg">
              Edad: {registro?.edad}
            </Text>
          </View>
          <View className="flex-1">
            {registro && (
              <FlatList
                data={registro.answers}
                renderItem={({ item: answer }) => (
                  <View className="w-full flex-row items-center justify-between p-2 border-b border-b-gray-100">
                    <View className="flex-row gap-3 w-3/5">
                      <Text className="text-gray-400">{answer.key + 1}</Text>
                      <Text className="text-gray-700">
                        {answer.competencia}
                      </Text>
                    </View>
                    <View
                      className={`p-2 rounded-xl ${
                        answer.answer === ALWAYS
                          ? "bg-green-500"
                          : answer.answer === NEVER
                          ? "bg-red-600"
                          : "bg-yellow-400"
                      }`}
                    >
                      <Text className="font-bold text-white">
                        {answer.answer}
                      </Text>
                    </View>
                  </View>
                )}
              />
            )}
          </View>
          <View className="w-full">
            <TouchableOpacity
              className="py-3 bg-sky-500 rounded-xl"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="font-sm font-bold text-center text-white">
                Cerrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
