import ShowCard from "./components/showCard/ShowCard";

import nogaImg from "./assets/show-noga.jpeg";
import tunaImg from "./assets/show-tuna.jpeg";
import jazzImg from "./assets/show-jazz.jpeg";

export interface ShowData {
  id: number;
  artist: string;
  stage: string;
  day: string;
  hour: string;
  ticketsLeft: number;
  image: string;
}

const shows: ShowData[] = [
  {
    id: 1,
    artist: "Noga Erez",
    stage: "Main Stage",
    day: "Thursday",
    hour: "21:00",
    ticketsLeft: 0,
    image: nogaImg,
  },
  {
    id: 2,
    artist: "Tuna",
    stage: "Indie Stage",
    day: "Friday",
    hour: "22:30",
    ticketsLeft: 18,
    image: tunaImg,
  },
  {
    id: 3,
    artist: "Jazz Ensemble",
    stage: "Jazz Hall",
    day: "Saturday",
    hour: "19:00",
    ticketsLeft: 85,
    image: jazzImg,
  },
];

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">Festival Lineup</h1>
        <p className="app-subtitle">
          Mark the shows you’re interested in and check ticket status.
        </p>
      </header>

      <main>
        <div className="shows-grid">
        {shows.map((show) =>{ return (
          <ShowCard id={show.id} artist={show.artist} stage={show.stage} day={show.day} hour={show.hour} ticketsLeft={show.ticketsLeft} image={show.image} />
        )})}
        </div>
      </main>
    </div>
  );
}
