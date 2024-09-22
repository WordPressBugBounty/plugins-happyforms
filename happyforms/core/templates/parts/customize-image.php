<script type="text/template" id="happyforms-customize-image-template">
	<?php include( happyforms_get_core_folder() . '/templates/customize-form-part-header.php' ); ?>
	<% if ( instance.label ) { %>
		<div class="label-field-group">
			<label for="<%= instance.id %>_title"><?php _e( 'Label', 'happyforms' ); ?></label>
			<div class="label-group">
				<input type="text" id="<%= instance.id %>_title" class="widefat title" value="<%- instance.label %>" data-bind="label" />
				<div class="happyforms-buttongroup">
					<label for="<%= instance.id %>-label_placement-show">
						<input type="radio" id="<%= instance.id %>-label_placement-show" value="show" name="<%= instance.id %>-label_placement" data-bind="label_placement" <%= ( instance.label_placement == 'show' ) ? 'checked' : '' %> />
						<span><?php _e( 'Show', 'happyforms' ); ?></span>
					</label>
					<label for="<%= instance.id %>-label_placement-hidden">
						<input type="radio" id="<%= instance.id %>-label_placement-hidden" value="hidden" name="<%= instance.id %>-label_placement" data-bind="label_placement" <%= ( instance.label_placement == 'hidden' ) ? 'checked' : '' %> />
						<span><?php _e( 'Hide', 'happyforms' ); ?></span>
					</label>
	 			</div>
			</div>
		</div>
	<% } %>

	<?php do_action( 'happyforms_part_customize_placeholder_before_options' ); ?>

	<div class="happyforms-media-upload happyforms-image-upload" data-overlay-title="<?php _e( 'Select image', 'happyforms' ); ?>" data-overlay-button-text="<?php _e( 'Select Image', 'happyforms' ); ?>">
		<p><% if ( instance.label ) { %><label><?php _e( 'Image', 'happyforms' ); ?></label><% } %></p>
		<div class="attachment-media-view">
			<%
			let attachmentJSON = {};

			wp.media.attachment( instance.attachment ).fetch().then( function( data ) {
				attachmentJSON = wp.media.attachment( instance.attachment ).toJSON();
				console.log( attachmentJSON );

				switch ( attachmentJSON.type ) {
					case 'image':
						var image = document.getElementById( instance.id + '-image-preview' );
						image.src = attachmentJSON.url;
						image.classList.add( 'show' );
						break;

					default:
						break;
				}
			} );
			%>

			<img id="<%= instance.id %>-image-preview" src="" data-preview-target="<%= instance.id %>" class="happyforms-upload-preview">

			<button type="button" class="upload-button happyforms-upload-button button-add-media<%= ( ! instance.attachment ) ? ' show' : '' %>" data-upload-target="attachment"><?php _e( 'Select image', 'happyforms' ); ?></button>
			<input type="hidden" data-bind="attachment" value="<%= instance.attachment %>">

			<div class="actions happyforms-upload-actions">
				<button type="button" class="button happyforms-change-button upload-button<%= ( 0 != instance.attachment ) ? ' show' : '' %>"><?php _e( 'Replace Image', 'happyforms' ); ?></button>
			</div>
		</div>
	</div>

	<?php do_action( 'happyforms_part_customize_placeholder_after_options' ); ?>

	<?php do_action( 'happyforms_part_customize_placeholder_before_advanced_options' ); ?>

	<?php happyforms_customize_part_width_control(); ?>

	<?php do_action( 'happyforms_part_customize_placeholder_after_advanced_options' ); ?>

	<p>
		<label for="<%= instance.id %>_css_class"><?php _e( 'Additional CSS class(es)', 'happyforms' ); ?></label>
		<input type="text" id="<%= instance.id %>_css_class" class="widefat title" value="<%- instance.css_class %>" data-bind="css_class" />
	</p>

	<div class="happyforms-part-logic-wrap">
		<div class="happyforms-logic-view">
			<?php happyforms_customize_part_logic(); ?>
		</div>
	</div>

	<?php happyforms_customize_part_footer(); ?>
</script>
