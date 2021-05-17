const SlideThumbnail = ( { slide } ) => {
	return (
		<div
			key={ slide.id }
			className="thumbnail__container"
			style={ { backgroundImage: `url(${ slide.url })` } }
		></div>
	);
};
export default SlideThumbnail;
