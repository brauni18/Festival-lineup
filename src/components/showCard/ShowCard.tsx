import { useState } from "react";

export interface ShowCardProps {
  id: number;
  artist: string;
  stage: string;
  day: string;
  hour: string;
  ticketsLeft: number;
  image: string;
}

export default function ShowCard(props: ShowCardProps) {
  // TODO 2: Create state called isInterested of type boolean (default false)
  const [isInterested, setIsInterested] = useState<boolean>(false);
 

  // TODO 3: Function that toggles true/false in isInterested
  function handleToggleInterested() {
    setIsInterested((prev) => !prev);
  }

  
  let ticketsStatusText = "";
  if (props.ticketsLeft === 0) {
    ticketsStatusText = "SOLD OUT";
  } else if (props.ticketsLeft <= 30) {
    ticketsStatusText = "Last tickets – hurry up!";
  } else {
    ticketsStatusText = "Tickets available";
  }

  let interestedText = "";
  if (isInterested) {
    interestedText = "This show is in your interested list 🎟️";
  } else {
    interestedText = "You haven't added this show yet";
  }

  return (
    <article className="show-card">
      <div className="show-image-wrapper">
        <img src={props.image} alt={props.artist} className="show-image" />
      </div>

      <header className="show-header">
        <h2 className="show-artist">
          {isInterested && <span className="interested-star">⭐</span>}
          {props.artist}
        </h2>
        <p className="show-meta">
          {props.stage} · {props.day} · {props.hour}
        </p>
      </header>

      <section className="show-info">
        <p className="tickets-status">
          {ticketsStatusText}
        </p>

        <p className="interested-status">
          {interestedText}
        </p>
      </section>

      <button
        className="interested-button"
        onClick={handleToggleInterested}
      >
        {isInterested ? "Remove from my list" : "Mark as interested"}
      </button>
    </article>
  );
}
