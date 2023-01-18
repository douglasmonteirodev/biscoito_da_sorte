import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [image, setImage] = useState(biscoito);
  const [fraseText, setFraseText] = useState('');
  const [quebrado, setQuebrado] = useState(false);

  const biscoito = require('./src/biscoito.png');
  const biscoitoAberto = require('./src/biscoitoAberto.png');

  let frases = [
    'Imagine uma nova história para sua vida e acredite nela.',
    'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
    'Não existe um caminho para a felicidade. A felicidade é o caminho.',
    'Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.',
    'A alegria não está nas coisas, está em nós.',
    'É a inveja a primeira a descobrir todos os méritos.',
    'A amizade perfeita apenas pode existir entre os bons.',
    'A única amizade que vale é a que nasceu sem razão.',
  ];

  const quebrarBiscoito = () => {
    if (quebrado) {
      return;
    }

    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setFraseText(`"${frases[numeroAleatorio]}"`);
    setImage(biscoitoAberto);
    setQuebrado(true);
  };

  const zerarBiscosto = () => {
    setQuebrado(false);
    setImage(biscoito);
    setFraseText('');
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <Text style={styles.textoFrase}>{fraseText}</Text>
      <TouchableOpacity style={styles.btn} onPress={quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            {quebrado ? 'Biscoito Quebrado' : 'Quebrar biscoito'}
          </Text>
        </View>
      </TouchableOpacity>

      {quebrado && (
        <TouchableOpacity
          style={[styles.btn, {marginTop: 15, borderColor: '#121212'}]}
          onPress={zerarBiscosto}>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color: '#121212'}]}>
              Reiniciar biscoito
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btn: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
