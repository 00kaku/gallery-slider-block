import { Modal } from '@wordpress/components';
const ModalComponent = ( { attributes, setAttributes } ) => {
	const { slides, currentSlide } = attributes;
	const handleMove = ( index, value ) => {
		const tempArray = [ ...slides ];
		tempArray[ index ].index = tempArray[ index ].index + value;
		tempArray[ index + value ].index = tempArray[ index ].index + -value;

		const tempSlide = tempArray[ index ];
		tempArray[ index ] = tempArray[ index + value ];
		tempArray[ index + value ] = tempSlide;
		setAttributes( { slides: tempArray } );
	};
	const handleRemove = ( index ) => {
		const tempArray = [ ...slides ];
		tempArray.forEach( ( slide ) => {
			if ( slide.index > index ) slide.index = slide.index - 1;
		} );
		tempArray.splice( index, 1 );
		setAttributes( { slides: tempArray, showSlideDetails: false } );
	};
	const handleCaptionChange = ( index, event ) => {
		event.preventDefault();
		const tempArray = [ ...slides ];

		tempArray[ index ].caption = event.target.value;
		setAttributes( { slides: tempArray } );
	};
	return (
		<Modal
			title={ `Slide Number: ${ currentSlide.index + 1 }` }
			onRequestClose={ () =>
				setAttributes( {
					showSlideDetails: false,
				} )
			}
			className="modal__container"
		>
			<div className="modal__modal">
				<div
					className="modal__image"
					style={ { backgroundImage: `url(${ currentSlide.url })` } }
				></div>
				<div className="modal__details">
					<p>
						<b>Caption:</b>
					</p>
					<textarea
						className="caption__input"
						onChange={ ( event ) => {
							handleCaptionChange( currentSlide.index, event );
						} }
						value={ currentSlide.caption }
					></textarea>
					<div className="modal__controls">
						<button
							className="btn btn-move"
							onClick={ () =>
								handleMove( currentSlide.index, -1 )
							}
							disabled={ currentSlide.index === 0 }
						>
							Move slide up
						</button>
						<button
							className="btn btn-move"
							onClick={ () =>
								handleMove( currentSlide.index, 1 )
							}
							disabled={
								currentSlide.index === slides.length - 1
							}
						>
							Move slide down
						</button>
						<button
							className="btn btn-remove"
							onClick={ () => handleRemove( currentSlide.index ) }
						>
							Remove Slide
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};
export default ModalComponent;
