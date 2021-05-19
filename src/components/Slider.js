import { __ } from '@wordpress/i18n';
const Slider = ( { attributes } ) => {
	const { slides, showNavControls } = attributes;
	return (
		<div className="slider__container">
			<div
				className={ `slider__control left ${
					! showNavControls && 'noShow'
				}` }
			>
				<span className="dashicons dashicons-arrow-left-alt2 slider__control__icon"></span>
			</div>
			<div className="slider__slider">
				{ slides?.length > 0 && (
					<>
						<img
							style={ {
								height: '100%',
								width: '100%',
								objectFit: 'contain',
							} }
							src={ slides[ 0 ].url }
							alt={ __( slides[ 0 ].caption ) }
						/>

						<div className="slider__caption">
							{ __( slides[ 0 ].caption ) }
						</div>
					</>
				) }
			</div>
			<div
				className={ `slider__control right ${
					! showNavControls && 'noShow'
				}` }
			>
				<span className="dashicons dashicons-arrow-right-alt2 slider__control__icon"></span>
			</div>
		</div>
	);
};

export default Slider;
