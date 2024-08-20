import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [medals, setMedals] = useState([]);

  useEffect(() => {
    // Datos ficticios para el cuadro de medallas
    const fakeData = [
      { name: 'USA', flag: 'USA.png', gold: 10, silver: 5, bronze: 7, total: 22 },
      { name: 'China', flag: 'China.png', gold: 8, silver: 6, bronze: 10, total: 24 },
      { name: 'Japan', flag: 'Japan.png', gold: 7, silver: 9, bronze: 4, total: 20 },
      { name: 'Germany', flag: 'Germany.png', gold: 5, silver: 8, bronze: 6, total: 19 },
      { name: 'France', flag: 'France.png', gold: 4, silver: 6, bronze: 7, total: 17 },
      { name: 'Great Britain', flag: 'GreatBritain.png', gold: 3, silver: 7, bronze: 8, total: 18 },
    ];
    setMedals(fakeData);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/img/carousel1.jpg',
    '/img/carousel2.jpg',
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/img/olympics-logo.png" alt="Olympics 2024 Logo" className="olympics-logo" />
        <h1>Juegos Olímpicos 2024</h1>
      </header>

      <nav className="nav-menu">
        <a href="#intro">Inicio</a>
        <a href="#carousel">Imágenes de LeBron</a>
        <a href="#olympic-images">Imágenes Olímpicas</a>
        <a href="#medal-table">Tabla de Medallas</a>
        <a href="#lebron">LeBron James</a>
      </nav>
      <img src="/img/olympic-intro.jpg" alt="Juegos Olímpicos 2024 en París" className="intro-image" />
      <section id="intro" className="intro">
        <h2>Bienvenidos a los Juegos Olímpicos 2024</h2>
        <p>
          Los Juegos Olímpicos de 2024 se celebran en París, Francia, del 26 de julio al 11 de agosto.
          Esta edición de los Juegos promete ser una de las más emocionantes y competitivas hasta la fecha,
          con atletas de todo el mundo compitiendo en una amplia gama de deportes. La ciudad de París, famosa
          por su rica historia y cultura, está preparada para recibir a miles de visitantes y ofrecer una
          experiencia inolvidable tanto para los participantes como para el público.
        </p>

      </section>

      <section id="carousel" className="carousel-container">
        <div className="carousel">
          <button className="carousel-control prev" onClick={goToPrevious}>
            &lt;
          </button>
          <div className="carousel-images">
            <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
          </div>
          <button className="carousel-control next" onClick={goToNext}>
            &gt;
          </button>
        </div>
      </section>

      <section id="lebron" className="lebron">
        <h2>LeBron James en los Juegos Olímpicos 2024</h2>
        <p>
          LeBron James, el legendario jugador de baloncesto, está causando una gran expectativa en los Juegos Olímpicos de 2024. Con una carrera llena de logros y premios, LeBron se ha convertido en una de las figuras más destacadas del baloncesto mundial. En esta edición olímpica, él no solo busca añadir otra medalla a su impresionante colección, sino también inspirar a jóvenes atletas de todo el mundo con su habilidad y dedicación en la cancha.
        </p>
        <h3>Equipos en los que ha jugado:</h3>
        <ul>
          <li>Cleveland Cavaliers (2003-2010, 2014-2018)</li>
          <li>Miami Heat (2010-2014)</li>
          <li>Los Angeles Lakers (2018-presente)</li>
        </ul>
        <h3>Logros Destacados:</h3>
        <ul>
          <li>4 veces campeón de la NBA</li>
          <li>4 veces MVP de la NBA</li>
          <li>2 veces medallista de oro olímpico</li>
          <li>17 veces All-Star</li>
        </ul>
      </section>

      <section id="olympic-images" className="olympic-images">
        <div className="grid-container">
          <div className="grid-item">
            <img src="/img/image1.jpg" alt="Michael Johnson" />
            <p>
              <strong>Michael Johnson (USA):</strong> En los Juegos Olímpicos de 2024 en Francia, Michael Johnson brilló en Atletismo al ganar la medalla de oro en los 100 metros planos. Con una velocidad impresionante, logró romper el récord olímpico en la final. Esta victoria es su segunda medalla de oro en su carrera olímpica, consolidando su estatus como uno de los mejores velocistas de todos los tiempos.
            </p>
          </div>
          <div className="grid-item">
            <img src="/img/image2.jpg" alt="Sarah Thompson" />
            <p>
              <strong>Sarah Thompson (UK):</strong> Sarah Thompson se destacó en la final de Natación, ganando la medalla de plata en los 200 metros estilo libre. A pesar de enfrentarse a una competencia feroz, Sarah mostró una técnica excelente y consistencia a lo largo de la carrera. Esta medalla marca un gran logro para ella, quien ha estado entrenando durante años para alcanzar este nivel.
            </p>
          </div>
          <div className="grid-item">
            <img src="/img/image3.jpg" alt="Akiyo Nakamura" />
            <p>
              <strong>Akiyo Nakamura (Japan):</strong> En Gimnasia, Akiyo Nakamura obtuvo la medalla de bronce en el ejercicio de barra fija. Akiyo realizó una rutina impresionante a pesar de la alta presión y dificultad de los movimientos. Esta medalla representa su primer gran logro olímpico y es un testimonio de su dedicación y técnica en el deporte.
            </p>
          </div>
          <div className="grid-item">
            <img src="/img/image4.jpg" alt="David Müller" />
            <p>
              <strong>David Müller (Germany):</strong> David Müller ganó la medalla de oro en la prueba de ruta de Ciclismo. Con una actuación dominante durante toda la carrera, David logró mantenerse en la delantera y cruzar la línea de meta en primer lugar. Este es un logro significativo para él, que ha sido un ciclista profesional destacado durante años.
            </p>
          </div>
          <div className="grid-item">
            <img src="/img/image5.jpg" alt="Emily Davis" />
            <p>
              <strong>Emily Davis (Australia):</strong> Emily Davis ganó la medalla de plata en Esgrima, destacándose por su habilidad y estrategia en los combates. A pesar de una final muy disputada, Emily demostró gran destreza y agilidad. Esta medalla subraya su compromiso con el deporte y sus años de entrenamiento intensivo.
            </p>
          </div>
          <div className="grid-item">
            <img src="/img/image6.jpg" alt="Lucas Martínez" />
            <p>
              <strong>Lucas Martínez (Spain):</strong> En Judo, Lucas Martínez obtuvo la medalla de bronce en la categoría de peso medio. Lucas mostró una gran habilidad técnica y una sólida estrategia durante la competencia. Esta medalla es el resultado de su arduo trabajo y dedicación en el judo a nivel olímpico.
            </p>
          </div>
        </div>
      </section>

      <section id="medal-table" className="medal-table">
        <div className="table-container">
          <h2>Cuadro de Medallas</h2>
          <table>
            <thead>
              <tr>
                <th>País</th>
                <th>Oro</th>
                <th>Plata</th>
                <th>Bronce</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {medals.length > 0 ? (
                medals.map((country, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`/img/flags/${country.flag}`}
                        alt={`${country.name} Flag`}
                        className="flag-icon"
                      />
                      {country.name}
                    </td>
                    <td>
                      <span role="img" aria-label="Oro">🥇</span> {country.gold}
                    </td>
                    <td>
                      <span role="img" aria-label="Plata">🥈</span> {country.silver}
                    </td>
                    <td>
                      <span role="img" aria-label="Bronce">🥉</span> {country.bronze}
                    </td>
                    <td>{country.total}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Cargando datos...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <section id="games-summary" className="games-summary">
        <h2>Resumen de los Juegos Olímpicos 2024</h2>
        <p>
          Los Juegos Olímpicos de 2024 en París han sido una celebración espectacular del deporte y la cultura global. La competición ha sido feroz y emocionante, con atletas de todo el mundo mostrando un rendimiento excepcional en sus respectivas disciplinas. El evento ha contado con una impresionante participación, con nuevos récords olímpicos establecidos y momentos inolvidables que han capturado la atención del mundo entero.
        </p>
        <p>
          Además de las competiciones, París ha demostrado ser un anfitrión excepcional, ofreciendo una experiencia única tanto para los participantes como para los espectadores. La ciudad ha brillado con su vibrante vida cultural, eventos paralelos y la cálida hospitalidad que ha enriquecido el evento. Los Juegos Olímpicos de 2024 han dejado una marca indeleble en la historia del deporte, destacando no solo por los logros en el campo, sino también por el espíritu de unidad y camaradería que han fomentado.
        </p>
      </section>
    </div>
  );
}

export default App;
