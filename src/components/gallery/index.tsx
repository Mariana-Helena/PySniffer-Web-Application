import React, { useCallback, useState } from "react";
import { CssBaseline} from "@material-ui/core";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function GalleryComponent() {
    const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                source: x.src,
                caption: 'x.title'
              }))}
            />
                      </Modal>
        ) : null}
      </ModalGateway>
    </div>
      </main>
    </ThemeProvider>
  );
}