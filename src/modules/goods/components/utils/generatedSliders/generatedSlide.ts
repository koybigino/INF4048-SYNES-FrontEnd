/**
 * Return an array with objects containing data of sample images.
 *
 * @param length - Optional. A number of slides.
 * @param sig    - Optional. The signature for getting a different image.
 *
 * @return An array with objects for sample images.
 */
export function generateSlides( length = 30, sig = 10 ): Array<{ src: string, alt: string }> {
    return Array.from( { length } ).map( ( value, index ) => {
      index = sig || index;
  
      return {
        src: `https://picsum.photos/id/${ index }/900/600`,
        alt: `Image ${ index + 1 }`,
        className: 'slide ring-2 ring-gray-300 rounded-xl ',
      };
    } );
  }