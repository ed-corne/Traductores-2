import React, { useState } from "react";
import Card from "./Card";
import "../styles/lexical.css";
import imgCon from "../assets/con.png"

function LexicalAnalyzer() {
  const [inputCode, setInputCode] = useState("");
  const [tokens, setTokens] = useState([]);

  const analyze = () => {
    const input = inputCode.trim();
    const tokenTypes = {
      "dataType": {id: 0, name: "Tipo de dato"},
      id: {id: 1, name: "identificador"},
      ";": {id: 2, name: "Punto y coma"},
      ",": {id: 3, name: "Coma"},
      "(": {id: 4, name: "Parentesis Apertura"},
      ")": {id: 5, name: "Parentesis Cierre"},
      "{": {id: 6, name: "Llave Apertura"},
      "}": {id: 7, name: "Llave cierre"},
      "=": {id: 8, name: "Igual"},
      if: {id: 9, name: "Condicional if"},
      while: {id: 10, name: "Condicional while"},
      return: {id: 11, name: "Palabra reserbada"},
      else: {id: 12, name: "Condicional else"},
      constante: {id: 13, name: "Constante"},
      opSuma: {id: 14, name: "Operador Suma"},
      "+": {id: 14, name: "Operador Suma"},
      "-": {id: 14, name: "Operador Suma"},
      opLogico: {id: 15, name: "Operador Logico"},
      "||": {id: 15, name: "Operador Logico"},
      "&&": {id: 15, name: "Operador Logico"},
      opMultiplicacion: {id: 16, name: "Operador Multiplicacion"},
      "*": {id: 16, name: "Operador Multiplicacion"},
      "/": {id: 16, name: "Operador Multiplicacion"},
      opRelacional: {id: 17, name: "Operador Relacional"},
      "==": {id: 17, name: "Operador Relacional"},
      "<": {id: 17, name: "Operador Relacional"},
      ">": {id: 17, name: "Operador Relacional"},
      "<=": {id: 17, name: "Operador Relacional"},
      ">=": {id: 17, name: "Operador Relacional"},
      "!=": {id: 17, name: "Operador Relacional"},
      $: {id: 18, name: "Terminal"},
    };
    const keywords = ["if", "while", "return", "else", "constante"];
    const dataType = ["int", "float", "char", "void", "string"];
    const operators = ["||", "&&", "+", "-", "==", "<", ">", "<=", ">=", "!=", "*", "/", "|", "&", "!", "="];
    const punctuation = [";", ",", "(", ")", "{", "}"];
    const digits = /[0-9]/;
    const letters = /[a-zA-Z]/;

    let currentToken = "";
    const foundTokens = [];

    let state = 0; // Estado inicial

    for (let i = 0; i < inputCode.length; i++) {
      const char = inputCode[i];

      switch (state) {
        case 0:
          if (char.charCodeAt(0) === 20) {
            state = 0;
          }else if (letters.test(char)) {
            state = 1; // Estado para identificadores o palabras clave
            currentToken += char;
          } else if (digits.test(char)) {
            state = 2; // Estado para números enteros
            currentToken += char;
          } else if (operators.includes(char)) {
            state = 3; // Estado para operadores
            currentToken += char;
          } else if (punctuation.includes(char)) {
            foundTokens.push({
              lexema: char,
              token: tokenTypes[char].name,
              id: tokenTypes[char].id,
            });
            currentToken = "";
          }
          break;
        case 1:
          if (letters.test(char) || digits.test(char)) {
            currentToken += char;
          } else {
            if (keywords.includes(currentToken)) {
              foundTokens.push({
                lexema: currentToken,
                token: tokenTypes[currentToken].name,
                id: tokenTypes[currentToken].id,
              });
            } else if (dataType.includes(currentToken)) {
              foundTokens.push({
                lexema: currentToken,
                token: tokenTypes["dataType"].name,
                id: tokenTypes["dataType"].id,
              });
            } else {
              foundTokens.push({
                lexema: currentToken,
                token: tokenTypes["id"].name,
                id: tokenTypes["id"].id,
              });
            }
            currentToken = "";
            state = 0; // Vuelve al estado inicial
            i--; // Revisa el caracter actual nuevamente
          }
          break;
        case 2:
          if (digits.test(char)) {
            currentToken += char;
          } else {
            foundTokens.push({
              lexema: parseInt(currentToken, 10),
              token: tokenTypes["constante"].name,
              id: tokenTypes["constante"].id,
            });
            currentToken = "";
            state = 0; // Vuelve al estado inicial
            i--; // Revisa el caracter actual nuevamente
          }
          break;
        case 3:
          if (operators.includes(currentToken + char)) {
            currentToken += char;
          } else {
            foundTokens.push({
              lexema: currentToken,
              token: tokenTypes[currentToken].name,
              id: tokenTypes[currentToken].id,
            });
            currentToken = "";
            state = 0; // Vuelve al estado inicial
            i--; // Revisa el caracter actual nuevamente
          }
          break;
        default:
          // Handle error state
          currentToken += char;
          foundTokens.push({
            lexema: currentToken,
            token: "Error",
            id: "Error",
          });
          break;
      }
    }

    setTokens(foundTokens);
  };

  const cleanInput = () =>{
    setInputCode("");
    setTokens([]);
  } 

  return (
    <div className="lexical">
      <h1 className="lexical__title">Analizador Lexico</h1>
      <div className="lexical__row1">
        
        <Card width={"50%"} color={"#574f8c"}>
          <textarea
            className="lexical__area"
            placeholder="Ingresa el código aquí..."
            lexema={inputCode}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
        </Card>
       <Card direction={"column"} width={"20%"}>
          <button onClick={analyze} className="lexical__btn">Analizar</button>
           <button onClick={cleanInput} className="lexical__btn --clean">Limpiar</button>
           </Card>
        <Card width={"50%"} color={"#ffa600"}>
          <img src={imgCon} alt="img" width={150}/>
        </Card>
      </div>
      <Card direction={"column"} color={"#003f5c"}>
        <h3>Tokens encontrados</h3>
        <table className="table">
          <tr className="table__tr">
            <th className="table__td">Lexema</th>
            <th className="table__td">Token</th>
            <th className="table__td">Number</th>
          </tr>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td className="table__td">{token.lexema}</td>
              <td className="table__td">{token.token}</td>
              <td className="table__td">{token.id}</td>
            </tr>
          ))}
        </table>
      </Card>
    </div>
  );
}

export default LexicalAnalyzer;

