import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, FormToggle } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Slider from './components/Slider';
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
		},
		showNavControls: {
			type: Array,
			default: true,
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const { showNavControls } = attributes;
		return (
			<div { ...useBlockProps() }>
				<InspectorControls>
					<PanelBody title="Navigation Arrows">
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
				</InspectorControls>
				<Slider attributes={ attributes } />
			</div>
		);
	},
	save: ( { attributes } ) => {
		return <Slider attributes={ attributes } />;
	},
} );
