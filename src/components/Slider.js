const Slider = ( { attributes } ) => {
	const { slides, showNavControls } = attributes;
	return (
		<div className="slider__container">
			<div
				className={ `slider__control ${
					! showNavControls && 'noShow'
				}` }
			>
				<span className="dashicons dashicons-arrow-left-alt2 slider__control__icon"></span>
			</div>
			<div className="slider__slider">
				{ slides?.length > 0 && (
					<img
						style={ {
							height: '100%',
							width: '100%',
							objectFit: 'contain',
						} }
						src={ slides[ 0 ].url }
						alt={ `Galley` }
					/>
				) }
			</div>
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
