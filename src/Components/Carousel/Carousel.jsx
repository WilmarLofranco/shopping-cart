import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  margin: auto;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const SlideImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export default function Carousel ({images, interval}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length-1? 0 : prev + 1))
        }, interval)
        return () => clearInterval(timer)
    }, [interval, images.length])

    return (
        <CarouselContainer>
            <SlideImage
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            />
        </CarouselContainer>
    )
}