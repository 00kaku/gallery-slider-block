const Slider = ( { attributes } ) => {
	const { showNavControls } = attributes;
	return (
		<div className="slider__container">
			<div
				className={ `slider__control ${
					! showNavControls && 'noShow'
				}` }
			>
				<span className="dashicons dashicons-arrow-left-alt2 slider__control__icon"></span>
			</div>
			<div className="slider__slider"></div>
			<div
				className={ `slider__control ${
					! showNavControls && 'noShow'
				}` }
			>
				<span className="dashicons dashicons-arrow-right-alt2 slider__control__icon"></span>
			</div>
		</div>
	);
};

export default Slider;
