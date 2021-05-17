import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * The function register our block with the cofiguration passed in the second argument. The 'edit' function in the object
 * the editor component presented to the user to make changes and the 'save' function is what will be presented on the screen.
 *
 * @return {undefined}
 */
registerBlockType( 'custom-block/galley-slider-block', {
	apiVersion: 2,
	title: __( 'Gallery Slider Block' ),
	icon: 'images-alt2',
	category: 'media',
	edit: () => {
		return <p>Hello Editor!!!!</p>;
	},
	save: () => {
		return <p>Hello Save !!!</p>
	},
} );
