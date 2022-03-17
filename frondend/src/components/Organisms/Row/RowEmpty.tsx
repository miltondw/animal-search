import Box from "../../Molecules/Box/Box";

export default function RowEmpty() {
  return (
    <div className="row">
      {Array.from(Array(5)).map((_, i) => (
        <Box key={i} value="" status="empty" />
      ))}
    </div>
  );
}
