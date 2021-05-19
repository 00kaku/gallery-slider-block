import { registerBlockType } from '@wordpress/blocks';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	FormToggle,
	Button,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Slider from './components/Slider';
import SlideThumbnail from './components/SlideThumbnail';
import Modal from './components/Modal';
/**
 * The function register our block with the cofiguration passed in the second argument. The 'edit' function in the object
 * the editor component presented to the user to make changes and the 'save' function is what will be presented on the screen.
 *
 * @return {undefined}
 */
registerBlockType( 'custom-block/galley-slider-block', {
	apiVersion: 2,
	title: __( 'Gallery Slider Block' ),
	icon: 'table-row-before',
	category: 'media',
	attributes: {
		slides: {
			type: Array,
			default: [],
		},
		showNavControls: {
			type: Array,
			default: true,
		},
		showSlideDetails: {
			type: Boolean,
			default: false,
		},
		currentSlide: {
			type: Object,
			default: {},
		},
		slideIndex: {
			type: Number,
			default: 0,
		},
		transition: {
			type: Number,
			default: 1000,
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const { showNavControls, slides, transition } = attributes;
		return (
			<div { ...useBlockProps() }>
				<InspectorControls>
					<PanelBody title="Navigation Arrows" initialOpen={ false }>
						<FormToggle
							checked={ showNavControls }
							onChange={ () =>
								setAttributes( {
									showNavControls: ! showNavControls,
								} )
							}
						/>
						<span className="nav__arrow__text">
							{ showNavControls ? ' HIDE' : ' SHOW' }
						</span>
					</PanelBody>
					<PanelBody title="Slides" initialOpen={ true }>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => {
									const tempArray = [ ...slides ];
									const index = tempArray.length;
									const currentSlide = {
										url: media.url,
										caption: '',
										id: media.id,
										index,
									};
									tempArray.push( currentSlide );
									setAttributes( {
										slides: tempArray,
										currentSlide,
										showSlideDetails: true,
									} );
								} }
								allowedTypes={ [ 'image', 'video' ] }
								value={ attributes.mediaId }
								render={ ( { open } ) => (
									<Button onClick={ open } className="btn">
										Add more slides
									</Button>
								) }
							/>
						</MediaUploadCheck>
						<div className="slide__thumbnails">
							{ slides?.length > 0 &&
								slides.map( ( slide ) => (
									<SlideThumbnail
										slide={ slide }
										key={ slide.id }
										setAttributes={ setAttributes }
									/>
								) ) }
						</div>
					</PanelBody>
					<PanelBody title="Transition Speed" initialOpen={ false }>
						<RangeControl
							label="Speed in seconds"
							value={ transition / 1000 }
							onChange={ ( value ) =>
								setAttributes( {
									transition: value * 1000,
								} )
							}
							min={ 1 }
							max={ 10 }
						/>
					</PanelBody>
				</InspectorControls>
				<Slider
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				{ attributes.showSlideDetails && (
					<Modal
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				) }
			</div>
		);
	},
	save: () => {
		return null;
	},
} );
