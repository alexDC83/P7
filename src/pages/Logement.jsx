import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLogement } from '../services/logement.service';
import { Collapse } from '../components/Collapse';
import './logement.module.css';
import Gallery from '../components/Gallery';
import Error from './Error';
import Rating from '../components/Rating';
import Tag from '../components/Tag';

export const Logement = () => {
  const [logement, setLogement] = useState();
  const [error, setError] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchLogement = async (logementId) => {
      try {
        const data = await getLogement(logementId);
        if (!data) {
          throw new Error('aucun logement trouvé');
        }
        setLogement(data);
      } catch (err) {
        console.log('error :', err);
        setError(err);
      }
    };

    fetchLogement(id);
  }, [id]);

  if (error) {
    return <Error />;
  }

  return logement ? (
    <section id="lodging">
      <Gallery data={logement} />

      <div className="container">
        <div className="header">
          <div className="title">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <Tag tags={logement.tags} />
          </div>
          <div className="sub-header">
            <div className="host">
              <span>{logement.host.name}</span>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className="contain containLogement">
        <Collapse title="Description">{logement.description}</Collapse>

        <Collapse title="Équipements">
          {logement.equipments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Collapse>
      </div>
    </section>
  ) : (
    <div>loading</div>
  );
};
