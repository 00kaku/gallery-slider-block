const SlideThumbnail = ( { slide, setAttributes } ) => {
	return (
		<div
			key={ slide.id }
			className="thumbnail__container"
			style={ { backgroundImage: `url(${ slide.url })` } }
			onClick={ () => {
				setAttributes( {
					currentSlide: slide,
					showSlideDetails: true,
				} );
			} }
			role="button"
			tabIndex={ 0 }
			onKeyDown={ ( event ) =>
				event.key === 'Enter' &&
				setAttributes( { currentSlide: slide, showSlideDetails: true } )
			}
		></div>
	);
};
export default SlideThumbnail;
