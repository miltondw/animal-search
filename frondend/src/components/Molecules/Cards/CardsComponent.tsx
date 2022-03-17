export default function CardsComponent() {
  const questions = [
    {
      id: 1,
      question: "¿Se ha extinguido su especie?",
    },
    {
      id: 2,
      question: "¿De qué zona es?",
    },
    {
      id: 3,
      question: "¿A qué familia pertenece?",
    },
    {
      id: 4,
      question: "¿De que se alimenta?",
    },
  ];
  return (
    <div className="cards">
      {questions.map((q) => (
        <div key={q.id} className="card-container">
          <h2 className="card-title">{q.question}</h2>
        </div>
      ))}
    </div>
  );
}
