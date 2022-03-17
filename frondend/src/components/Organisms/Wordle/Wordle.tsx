import { useEffect, useState } from "react";
import useWindow from "../../../hooks/useWindow";
import { getWordOfTheDay, isValidWord } from "../../../service/request";
import KeyBoard from "../../Molecules/KeyBoard/KeyBoard";
import Modal from "../../Molecules/Modal/Modal";
import RowCompleted from "../Row/RowCompleted";
import RowCurrent from "../Row/RowCurrent";
import RowEmpty from "../Row/RowEmpty";
import { GameStatus } from "../../types";

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Ñ",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export default function Wordle() {
  //States
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

  useWindow("keydown", handleKeyDown);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay);
  }, []);

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.key.toUpperCase();
    onKeyPressed(key);
  }
  function onKeyPressed(key: string) {
    if (gameStatus !== GameStatus.Playing) {
      return;
    }
    if (key === "BACKSPACE" && currentWord.length > 0) {
      onDelete();
      return;
    }
    if (key === "ENTER" && currentWord.length === 5 && turn <= 6) {
      onEnter();
      return;
    }
    if (currentWord.length >= 5) return;

    //Ingresar la letra el estado
    if (keys.includes(key)) {
      onInput(key);
      return;
    }
  }
  function onInput(letter: string) {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  }
  function onDelete() {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  }
  function onEnter() {
    if (currentWord === wordOfTheDay) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Won);
      return;
    }
    if (turn === 6) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Lost);
      return;
    }
    //Validar si existe la palabra
    if (currentWord.length === 5 && !isValidWord(currentWord)) {
      alert("Not valid word, please deleted words");
      return;
    }
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");
  }
  return (
    <>
      {gameStatus === GameStatus.Won ? (
        <Modal
          type="won"
          completedWords={completedWords}
          solution={wordOfTheDay}
        />
      ) : gameStatus === GameStatus.Lost ? (
        <Modal
          type="lost"
          completedWords={completedWords}
          solution={wordOfTheDay}
        />
      ) : null}
      <div className="mainContainer">
        {completedWords.map((word, i) => (
          <RowCompleted key={i} word={word} solution={wordOfTheDay} />
        ))}
        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} />
        ) : null}
        {Array.from(Array(6 - turn)).map((_, i) => (
          <RowEmpty key={i} />
        ))}
      </div>
      <KeyBoard keys={keys} onKeyPressed={onKeyPressed} />
    </>
  );
}
