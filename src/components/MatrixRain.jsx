/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';

const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 30;
const MAX_STREAM_SIZE = 100;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

const getRandInRange = (min, max) => // Define um número aleatório entre um intervalo
  Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () => // Pega um caractere aleatório da string VALID_CHARS
  VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () => // Cria uma stream (array de caracteres) com tamanho aleatório
  new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill()
    .map(_ => getRandChar());

const getMutatedStream = stream => { // Aplica mutação na stream (troca alguns caracteres)
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < STREAM_MUTATION_ODDS) {
      newStream.push(getRandChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandChar());
  return newStream;
};

const RainStream = props => {
	// Estados usados para gerenciar a stream e sua posição
	const [stream, setStream] = useState(getRandStream());
	const [topPadding, setTopPadding] = useState(stream.length * -50);
	const [intervalDelay, setIntervalDelay] = useState(null);
  
	// Define o delay inicial do intervalo de animação
	useEffect(() => {
	  setTimeout(() => {
		setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
	  }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
	}, []);
  
	// Hook useInterval executa a função a cada intervalo
	useInterval(() => {
	  if (!props.height) return; // Verifica se a prop height existe
	  if (!intervalDelay) return; // Verifica se o delay está definido
  
	  // Reinicia a stream se sair da tela
	  if (topPadding > props.height) {
		setStream([]);
		const newStream = getRandStream();
		setStream(newStream);
		setTopPadding(newStream.length * -44);
		setIntervalDelay(null);
		setTimeout(() => {
		  setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
		}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
	  } else {
		setTopPadding(topPadding + 44); // Move a stream para baixo
	  }
  
	  // Atualiza a stream com mutação
	  setStream(getMutatedStream);
	}, intervalDelay);
  
	// Renderiza a stream com cada caractere dentro de um elemento 'a'
	return (
	  <div
		style={{
		  fontFamily: 'matrixFont',
		  color: '#20c20e',
		  writingMode: 'vertical-rl',
		  textOrientation: 'upright',
		  userSelect: 'none',
		  whiteSpace: 'nowrap',
		  marginTop: topPadding,
		  marginLeft: 5,
		  marginRight: 5,
		  textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
		  fontSize: 40,
		}}
	  >
		{stream.map((char, index) => (
		  <a
			key={index} // Adiciona key para melhor performance
			style={{
			  marginTop: -12,
			  // - Se o índice for menor que 6, aplica uma fórmula para reduzir a opacidade gradualmente. // - Se não, a opacidade é 1 (opaca).
			  opacity: index < 6 ? 0.1 + index * 0.15 : 1,
			  // - Se o índice for igual ao tamanho da stream - 1 (último caractere), a cor é branca. // - Se não, a cor não é definida (herdada do estilo pai).
			  color: index === stream.length - 1 ? '#fff' : undefined,
			  // - Se o índice for igual ao tamanho da stream - 1 (último caractere), aplica uma sombra maior. // - Se não, a sombra não é definida.
			  textShadow:
			    index === stream.length - 1
				? '0px 0px 20px rgba(255, 255, 255, 1)'
				: undefined,
			}}>{char}
      	  </a>
      ))}
    </div>
  );
};

const MatrixRain = props => {
	// Ref para o container da MatrixRain
	const containerRef = useRef(null);
  
	// Estado para armazenar o tamanho do container
	const [containerSize, setContainerSize] = useState(null); // ?{width, height}
  
	// Define o tamanho do container no useEffect
	useEffect(() => {
	  const boundingClientRect = containerRef.current.getBoundingClientRect();
	  setContainerSize({
		width: boundingClientRect.width,
		height: boundingClientRect.height,
	  });
	}, []);
  
	// Calcula o número de colunas de acordo com a largura do container
	const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;
  
	// Renderiza o container com as streams (RainStream)
	return (
	  <div
		style={{
		  background: 'black',
		  position: 'fixed',
		  top: 0,
		  left: 0,
		  bottom: 0,
		  right: 0,
		  overflow: 'ignore',
		  display: 'flex',
		  flexDirection: 'row',
		  justifyContent: 'center',
		  zIndex: 0,
		}}
		ref={containerRef}
	  >
		{new Array(streamCount).fill().map(_ => (
		  <RainStream height={containerSize?.height} />
		))}
	  </div>
	);
};
  

export default MatrixRain;