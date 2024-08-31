import React from 'react';
import './carousel.css';

function Carousel({ style, children, className }) {
  const [length, setLength] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const carouselListRef = React.useRef(null);

  React.useEffect(() => {
    if (!children) setLength(0);
    else if (!children.length) setLength(1);
    else if (children.length) setLength(children.length);

  }, [children]);

  React.useEffect(() => {
    if (length <= 1) return;
    if (!carouselListRef.current) return;
    (carouselListRef.current as HTMLElement).children[current].scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [length, current, children])

  function handleNext() {
    if (!carouselListRef.current) return;
    const newCurrent = current + 1;
    // Duplicate children after current children;
    if (newCurrent >= length) {
      const list = carouselListRef.current as HTMLElement;
      const nodeChildren = Array.from(list.childNodes);
      nodeChildren.forEach((child) => { const c = child.cloneNode(true); c.textContent = 'Clone' + c.textContent; list.appendChild(c) });
      list.children[newCurrent].scrollIntoView({ block: "center", behavior: 'smooth' });
      setTimeout(() => {
        nodeChildren.forEach((child) => list.removeChild(child));
        list.children[0].scrollIntoView({ block: "center", behavior: 'instant' });
        setCurrent(0);
      }, 1000);
    }
    else setCurrent(newCurrent);
  }

  function handlePrevious() {
    if (!carouselListRef.current) return;
    const newCurrent = current - 1;
    // Duplicate children before current children;
    if (newCurrent < 0) {
      const list = carouselListRef.current as HTMLElement;
      const nodeChildren = Array.from(list.childNodes).reverse();
      nodeChildren.forEach((child) => { const c = child.cloneNode(true); c.textContent = 'Clone' + c.textContent; list.prepend(c) });
      list.children[length].scrollIntoView({ block: "center", behavior: 'instant' });
      list.children[length - 1].scrollIntoView({ block: "center", behavior: 'smooth' });
      setTimeout(() => {
        nodeChildren.forEach((child) => list.removeChild(child));
        setCurrent(length - 1);
      }, 1000);
    }
    else setCurrent(newCurrent);
  }

  return <div
    className={className ? 'carousel ' + className : 'carousel'}
    style={style}
  >
    <div className='carousel_list' ref={carouselListRef}>
      {children}
    </div>
    <CarouselPagination
      length={length}
      current={current}
      onPrevious={handlePrevious}
      onNext={handleNext}
    />
  </div>
}

function CarouselItem({ style, className, children }) {
  return <div
    className={className ? 'carousel_item ' + className : 'carousel_item'}
    style={style}>
    {children}
  </div>
}

function CarouselPagination({ length, current = 0, onPrevious, onNext }) {
  return <div className='carousel_pagination'>
    <button onClick={onPrevious}>Previous</button>
    <p>{current + 1} de {length}</p>
    <button onClick={onNext}>Next</button>
  </div>
}
Carousel.Item = CarouselItem;

export default Carousel;
