interface ModalProps {
  type: "won" | "lost";
  completedWords: string[];
  solution: string;
}
interface SquareProps {
  word: string;
  solution: string;
}
export default function Modal({ type, completedWords, solution }: ModalProps) {
  function Square({ word, solution }: SquareProps) {
    function checkLetter(letter: string, pos: number) {
      if (solution.includes(letter)) {
        if (solution[pos] === letter) {
          return <div className="box-modal box-modal__correct"></div>;
        } else {
          return <div className="box-modal box-modal__present"></div>;
        }
      } else {
        return <div className="box-modal box-modal__absent"></div>;
      }
    }
    return (
      <div className="puzzleWord">
        {word.split("").map((letter, i) => (
          <div>{checkLetter(letter, i)}</div>
        ))}
      </div>
    );
  }
  return (
    <div className="modalViewContainer">
      <div className="modalContainer">
        <h2>You {type === "won" ? "won!" : "lost"}</h2>
        <div className="puzzle">
          {completedWords.map((word, i) => (
            <Square key={i} word={word} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
}
