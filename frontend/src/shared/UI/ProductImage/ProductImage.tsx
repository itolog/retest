import React, { useState, memo } from 'react';

import './productImage.scss';

interface Props {
  src: string;
  alt: string;
  w?: number;
  h?: number;
}

const ProductImage: React.FC<Props> = memo(({ alt, src, w = 100, h = 100 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imgLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className='wrapp-image'>
      {!isLoaded ? <div className='placeholder'></div> : null}
      <img
        loading='lazy'
        className='image'
        src={src}
        alt={alt}
        onLoad={imgLoaded}
        width={w}
        height={h}
      />
    </div>
  );
});

export default ProductImage;
