import { Modal } from '@wordpress/components';
const ModalComponent = ( { attributes, setAttributes } ) => {
	const { currentSlide } = attributes;
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
				<div className="modal__details"></div>
			</div>
		</Modal>
	);
};
export default ModalComponent;
