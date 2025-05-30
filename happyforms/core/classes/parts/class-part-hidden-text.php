<?php

class HappyForms_Part_HiddenText extends HappyForms_Form_Part {
	public $type = 'hidden_text';

	public function __construct() {
		$this->label = __('Hidden', 'happyforms');
		$this->description = __('For hidden text fields.', 'happyforms');

		add_filter('happyforms_part_value', array($this, 'get_part_value'), 10, 3);
		add_filter('happyforms_the_part_value', array($this, 'output_part_value'), 10, 3);
		add_filter('happyforms_stringify_part_value', array($this, 'stringify_value'), 10, 3);
		add_filter('happyforms_part_class', array($this, 'html_part_class'), 10, 3);
		add_filter('happyforms_email_part_visible', array($this, 'email_part_visible'), 10, 4);
	}

	/**
	 * Get all part meta fields defaults.
	 *
	 * @since 1.0.0.
	 *
	 * @return array
	 */
	public function get_customize_fields() {
		$fields = array(
			'type' => array(
				'default' => $this->type,
				'sanitize' => 'sanitize_text_field',
			),
			'label' => array(
				'default' => __('', 'happyforms'),
				'sanitize' => 'sanitize_text_field',
			),
			'label_placement' => array(
				'default' => 'show',
				'sanitize' => 'sanitize_text_field'
			),
			'description' => array(
				'default' => '',
				'sanitize' => 'sanitize_text_field'
			),
			'description_mode' => array(
				'default' => '',
				'sanitize' => 'sanitize_text_field'
			),
			'prefix' => array(
				'default' => '',
				'sanitize' => 'sanitize_text_field',
			),
			'suffix' => array(
				'default' => '',
				'sanitize' => 'sanitize_text_field',
			),
			'width' => array(
				'default' => 'full',
				'sanitize' => 'sanitize_key'
			),
			'css_class' => array(
				'default' => '',
				'sanitize' => 'happyforms_sanitize_classnames'
			),
			'required' => array(
				'default' => 1,
				'sanitize' => 'happyforms_sanitize_checkbox',
			),
			'use_as_subject' => array(
				'default' => 0,
				'sanitize' => 'happyforms_sanitize_checkbox'
			),
			'default_value' => array(
				'default' => '',
				'sanitize' => 'sanitize_text_field'
			)
		);

		return happyforms_get_part_customize_fields($fields, $this->type);
	}

	/**
	 * Get template for part item in customize pane.
	 *
	 * @since 1.0.0.
	 *
	 * @return string
	 */
	public function customize_templates() {
		$template_path = happyforms_get_core_folder() . '/templates/parts/customize-hidden-text.php';
		$template_path = happyforms_get_part_customize_template_path($template_path, $this->type);

		require_once($template_path);
	}

	/**
	 * Get front end part template with parsed data.
	 *
	 * @since 1.0.0.
	 *
	 * @param array	$part_data 	Form part data.
	 * @param array	$form_data	Form (post) data.
	 *
	 * @return string	Markup for the form part.
	 */
	public function frontend_template($part_data = array(), $form_data = array()) {
		$part = wp_parse_args($part_data, $this->get_customize_defaults());
		$form = $form_data;

		include(happyforms_get_core_folder() . '/templates/parts/frontend-hidden-text.php');
	}

	/**
	 * Sanitize submitted value before storing it.
	 *
	 * @since 1.0.0.
	 *
	 * @param array $part_data Form part data.
	 *
	 * @return string
	 */
	public function sanitize_value($part_data = array(), $form_data = array(), $request = array()) {
		$sanitized_value = $this->get_default_value($part_data);
		$part_name = happyforms_get_part_name($part_data, $form_data);

		if (isset($request[$part_name])) {
			$sanitized_value = sanitize_text_field($request[$part_name]);
		}

		return $sanitized_value;
	}

	/**
	 * Validate value before submitting it. If it fails validation, return WP_Error object, showing respective error message.
	 *
	 * @since 1.0.0.
	 *
	 * @param array $part Form part data.
	 * @param string $value Submitted value.
	 *
	 * @return string|object
	 */
	public function validate_value($value, $part = array(), $form = array()) {
		if ((1 === $part['required']) && ('' === $value)) {
			return new WP_Error('error', happyforms_get_validation_message('field_empty'));
		}

		return $value;
	}

	public function stringify_value($value, $part, $form) {
		if ($this->type === $part['type']) {
			$value = "{$part['prefix']}{$value}{$part['suffix']}";
		}

		return $value;
	}

	public function get_part_value($value, $part, $form) {
		if ($this->type === $part['type']) {
			$value = $part['default_value'];
		}

		return $value;
	}

	public function output_part_value($value, $part, $form) {
		if ($this->type === $part['type']) {
			$value = stripslashes($value);
		}

		return $value;
	}

	public function html_part_class($class, $part, $form) {
		if ($this->type === $part['type']) {
			if (happyforms_get_part_value($part, $form)) {
				$class[] = 'happyforms-part--filled';
			}

			if ('focus-reveal' === $part['description_mode']) {
				$class[] = 'happyforms-part--focus-reveal-description';
			}
		}

		return $class;
	}

	public function email_part_visible($visible, $part, $form, $response) {
		if ($this->type === $part['type']) {
			$empty_value = $part['prefix'] . $part['suffix'];
			$value = happyforms_get_email_part_value($response, $part, $form);

			if ($empty_value === $value) {
				$visible = false;
			}
		}

		return $visible;
	}

	/**
	 * Enqueue scripts in customizer area.
	 *
	 * @since 1.0.0.
	 *
	 * @param array	List of dependencies.
	 *
	 * @return void
	 */
	public function customize_enqueue_scripts($deps = array()) {
		wp_enqueue_script(
			'part-hidden-text',
			happyforms_get_plugin_url() . 'core/assets/js/parts/part-hidden-text.js',
			$deps,
			happyforms_get_version(),
			true
		);
	}
}
