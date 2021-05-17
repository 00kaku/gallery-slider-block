import { registerBlockType } from '@wordpress/blocks';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { PanelBody, FormToggle, Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Slider from './components/Slider';
import SlideThumbnail from './components/SlideThumbnail';
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
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const { showNavControls, slides } = attributes;
		return (
			<div { ...useBlockProps() }>
				<InspectorControls>
					<PanelBody
						title="Navigation ArrThis is my modalows"
						initialOpen={ false }
					>
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
									tempArray.push( {
										url: media.url,
										caption: '',
										id: 'media.id',
									} );
									setAttributes( { slides: tempArray } );
								} }
								allowedTypes={ [ 'image', 'audio', 'video' ] }
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
				</InspectorControls>
				<Slider attributes={ attributes } />
				{ attributes.showSlideDetails && (
					<Modal
						style={ { width: '850px', height: '500px' } }
						title="Slide Details"
						onRequestClose={ () =>
							setAttributes( {
								showSlideDetails: false,
							} )
						}
					></Modal>
				) }
			</div>
		);
	},
	save: ( { attributes } ) => {
		return <Slider attributes={ attributes } />;
	},
} );
