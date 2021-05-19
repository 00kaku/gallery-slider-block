import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';
const Slider = ( { attributes, setAttributes } ) => {
	const { slides, showNavControls, slideIndex, transition } = attributes;

	useEffect( () => {
		const interval = setInterval( () => {
			setAttributes( {
				slideIndex:
					slideIndex >= slides.length - 1 ? 0 : slideIndex + 1,
			} );
		}, transition );
		return () => {
			clearInterval( interval );
		};
	}, [ slides, slideIndex, transition ] );
	return (
		<div className="slider__container">
			<div
				className={ `slider__control left ${
					! showNavControls ? 'noShow' : ''
				}` }
				onClick={ () =>
					slideIndex !== 0 &&
					setAttributes( { slideIndex: slideIndex - 1 } )
				}
				role="button"
				tabIndex={ 0 }
				onKeyDown={ ( event ) =>
					event.key === 'Enter' &&
					slideIndex !== 0 &&
					setAttributes( { slideIndex: slideIndex - 1 } )
				}
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
							src={ slides?.[ slideIndex ]?.url }
							alt={ __( slides?.[ slideIndex ]?.caption ) }
						/>

						<div className="slider__caption">
							{ __( slides?.[ slideIndex ]?.caption ) }
						</div>
					</>
				) }
			</div>
			<div
				className={ `slider__control right ${
					! showNavControls ? 'noShow' : ''
				}` }
				onClick={ () =>
					slideIndex !== slides.length - 1 &&
					setAttributes( { slideIndex: slideIndex + 1 } )
				}
				role="button"
				tabIndex={ 0 }
				onKeyDown={ ( event ) =>
					event.key === 'Enter' &&
					slideIndex !== 0 &&
					setAttributes( { slideIndex: slideIndex + 1 } )
				}
			>
				<span className="dashicons dashicons-arrow-right-alt2 slider__control__icon"></span>
			</div>
		</div>
	);
};

export default Slider;
