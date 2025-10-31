import { View, Button, Alert, StyleSheet } from 'react-native';

export default function AlertDesafio() {

  const gerarTipo = () => Math.floor(Math.random() * 3) + 1;

  const exibirAlerta = () => {
    const tipo = gerarTipo();

    if (tipo === 1) {
      console.log("Alerta simples exibido");
      Alert.alert("Alerta Simples", "Este é um alerta com um único botão!");
    } 
    else if (tipo === 2) {
      console.log("Alerta de confirmação exibido");
      Alert.alert(
        "Alerta de Confirmação",
        "Deseja confirmar esta ação?",
        [
          { text: "Cancelar", onPress: () => console.log("Cancelado"), style: "cancel" },
          { text: "OK", onPress: () => console.log("Confirmado") }
        ],
        { cancelable: true }
      );
    } 
    else {
      console.log("Alerta com três opções exibido");
      Alert.alert(
        "Alerta com Três Opções",
        "Escolha uma das opções abaixo:",
        [
          { text: "Depois", onPress: () => console.log("Depois") },
          { text: "Sim", onPress: () => console.log("Sim") },
          { text: "Não", onPress: () => console.log("Não") }
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={estilos.container}>
      <Button
        title="Exibir Alerta"
        color="#0051ffff"
        onPress={exibirAlerta}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});