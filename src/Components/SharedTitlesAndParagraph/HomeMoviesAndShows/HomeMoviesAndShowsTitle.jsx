import './HomeMoviesAndShowsTitle.css';

export default function HomeMoviesAndShowsTitle({ title, home }) {
  return (
    <div>
      <h2 className={home ? "homeTitleZA" : "moviesAndShowsTitle"}>
        {title}
      </h2>
    </div>
  );
}