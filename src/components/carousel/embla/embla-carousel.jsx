/* eslint-disable react/prop-types */
import "./embla-carousel.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Group from "../../group/group";
import Button from "../../button/button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import * as Progress from "@radix-ui/react-progress";
import Autoplay from "embla-carousel-autoplay";

function EmblaCarousel({ style, children, className, delay = 7000 }) {
  const [current, setCurrent] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay }),
  ]);

  React.useEffect(() => {
    if (emblaApi) {
      setCurrent(emblaApi.selectedScrollSnap());
      setTotal(emblaApi.scrollSnapList().length);

      emblaApi.on("settle", () => {
        setCurrent(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className={"embla__container " + (className ?? "")} style={style}>
          {children}
        </div>
        <CarouselPagination
          current={current}
          total={total}
          onPrevious={() => {
            emblaApi.scrollPrev();
          }}
          onNext={() => {
            emblaApi.scrollNext();
          }}
        />
      </div>
    </>
  );
}

function CarouselPagination({ current, total, onPrevious, onNext }) {
  return (
    <Group className="carousel_pagination" gap="sm">
      <Button
        variant="transparent"
        onClick={onPrevious}
        style={{ paddingInline: 0 }}
      >
        <CaretLeft color="var(--background-overlay)" />
      </Button>
      <Progress.Root value={length} className="progress">
        <Progress.Indicator
          style={{
            transform: `translateX(${((current + 1) / total) * 100}%)`,
          }}
          className="progress_indicator"
        />
      </Progress.Root>
      <Button
        onClick={onNext}
        variant="transparent"
        style={{ paddingInline: 0 }}
      >
        <CaretRight color="var(--background-overlay)" />
      </Button>
    </Group>
  );
}

EmblaCarousel.Pagination = CarouselPagination;
export default EmblaCarousel;
