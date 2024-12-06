import { useState, useEffect } from 'react';
import { getAllLogements } from '../services/logement.service';
import { Hero } from '../components/Hero';
import heroImage from '../assets/IMG.png';
import { LogementSection } from '../components/Logement/LogementSection';

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const data = await getAllLogements();
        setLogements(data);
      } catch (err) {
        console.log('error :', err);
      }
    };

    fetchLogements();
  }, []);

  return (
    <>
      <Hero
        title="Chez vous, partout et ailleurs"
        backgroundImage={heroImage}
      />
      <LogementSection data={logements} />
    </>
  );
};

export default Home;
