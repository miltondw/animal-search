interface KeyBoardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
}

export default function KeyBoard({ keys, onKeyPressed }: KeyBoardProps) {
  function handleInput(e: any) {
    onKeyPressed(e.target.textContent);
  }
  function handleEnter(e: any) {
    onKeyPressed("ENTER");
  }
  function handleDelete(e: any) {
    onKeyPressed("BACKSPACE");
  }
  return (
    <div className="keyBoardContainer">
      {Array.from(Array(10)).map((_, i) => (
        <button key={i} className="key" onClick={handleInput}>
          {keys[i]}
        </button>
      ))}
      {Array.from(Array(10)).map((_, i) => (
        <button key={i + 10} className="key" onClick={handleInput}>
          {keys[i + 10]}
        </button>
      ))}
      <div className="enterKey" onClick={handleEnter}>
        ENTER
      </div>
      {Array.from(Array(7)).map((_, i) => (
        <button key={i + 20} className="key" onClick={handleInput}>
          {keys[i + 20]}
        </button>
      ))}
      <div className="deleteKey" onClick={handleDelete}>
        DELETE
      </div>
    </div>
  );
}
