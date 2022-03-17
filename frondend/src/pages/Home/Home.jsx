import Wordle from "../../components/Organisms/Wordle/Wordle";
import Title from "../../components/Atoms/Title";
import CardsComponent from "../../components/Molecules/Cards/CardsComponent";
export default function Home() {
  return (
    <main className="app">
      <Title title="Animal Search" />
      <CardsComponent />
      <Wordle />
    </main>
  );
}
