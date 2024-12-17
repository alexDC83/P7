import { useState } from "react"
import styles from './gallery.module.css'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

const Gallery = ({ data }) => {
    const [indexPicture, setIndexPicture] = useState(0);

    const previousPicture = () => setIndexPicture(indexPicture === 0 ? data.pictures.length - 1 : indexPicture - 1)
    const nextPicture = () => setIndexPicture(indexPicture === data.pictures.length - 1 ? 0 : indexPicture + 1)

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.gallery}>
                <img src={data.pictures[indexPicture]} alt={data.title} />
            </div>
            {
                data.pictures.length > 1 ? (
                    <>
                        <button
                            className={styles.arrowLeft}
                            onClick={() => previousPicture()}
                        >
                            <img src={arrowLeft} alt="bouton précédent" />
                        </button>
                        <button
                            className={styles.arrowRight}
                            onClick={() => nextPicture()}
                        >
                            <img src={arrowRight} alt="bouton prochain" />
                        </button>
                        <span className={styles.indicator}> {indexPicture + 1}/{data.pictures.length}</span>
                    </>
                ) : <></>
            }

        </div>
    )
}

export default Gallery