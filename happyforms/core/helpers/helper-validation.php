<?php

if (! function_exists('happyforms_sanitize_checkbox')):
	/**
	 * Sanitize checkbox values.
	 *
	 * @since 1.0
	 *
	 * @param int|string $value The original value.
	 *
	 * @return int|string       1 if value was 1, or empty string.
	 */
	function happyforms_sanitize_checkbox($value) {
		return 1 === intval($value) ? 1: '';
	}

endif;

if (! function_exists('happyforms_sanitize_datetime')):
	/**
	 * Sanitize datetime values.
	 *
	 * @since 1.0
	 *
	 * @param int|string $value The original value.
	 *
	 * @return string
	 */
	function happyforms_sanitize_datetime($value) {
		return date('Y-m-d H:i:s', strtotime($value));
	}

endif;

if (! function_exists('happyforms_sanitize_post_status')):
	/**
	 * Sanitize post status values.
	 *
	 * @since 1.0
	 *
	 * @param string $value The original value.
	 *
	 * @return string       Original value if allowed, or 'draft'.
	 */
	function happyforms_sanitize_post_status($value) {
		$allowed_values = array('draft', 'publish');

		if (! in_array($value, $allowed_values)) {
			$value = 'draft';
		}

		return $value;
	}

endif;

if (! function_exists('happyforms_sanitize_array')):
	/**
	 * Sanitize array values.
	 *
	 * @since 1.0
	 *
	 * @param array $value The original value.
	 *
	 * @return array       Escaped value.
	 */
	function happyforms_sanitize_array($value) {
		if (is_array($value)) {
			foreach ($value as $key => $val) {
				if (is_array($value[$key])) {
					$subarray = $value[$key];

					foreach ($subarray as $subkey => $subvalue) {
						$subarray[$subkey] = esc_attr($subvalue);
					}

					$value[$key] = $subarray;
				} else {
					$value[$key] = esc_attr($val);
				}
			}

			return $value;
		}
	}

endif;

if (! function_exists('happyforms_sanitize_emails')):
	/**
	 * Sanitize email values. Handles a comma-separated
	 * string of multiple addresses.
	 *
	 * @since 1.0
	 *
	 * @param string $emails Original value.
	 *
	 * @return string
	 */
	function happyforms_sanitize_emails($emails) {
		$emails = explode(',', $emails);
		$emails = array_map('sanitize_text_field', $emails);
		$emails = array_filter($emails);
		$emails = implode(', ', $emails);

		return $emails;
	}

endif;

if (! function_exists('happyforms_sanitize_choice')):
	/**
	 * Sanitize a single choice value.
	 *
	 * @since 1.0
	 *
	 * @param string $value Original value.
	 *
	 * @return string
	 */
	function happyforms_sanitize_choice($value, $choices = array()) {
		if (! in_array($value, $choices)) {
			$value = $choices[0];
		}

		return $value;
	}

endif;

if (! function_exists('happyforms_sanitize_float')):
	/**
	 * Sanitize a float value.
	 *
	 * @param string $value Original value.
	 *
	 * @return float
	 */
	function happyforms_sanitize_float($value) {
		$value = preg_replace('/[^\d\.]/', '', $value);
		$value = floatval($value);

		return $value;
	}

endif;

if (! function_exists('happyforms_sanitize_list')):
	/**
	 * Sanitize a comma separated list value.
	 *
	 * @since 1.0
	 *
	 * @param string $value Original value.
	 *
	 * @return string
	 */
	function happyforms_sanitize_list($value, $choices = array()) {
		if (! is_array($value)) {
			$value = happyforms_explode_value($value);
		}

		$value = array_intersect($value, $choices);
		$value = implode(',', $value);

		return $value;
	}

endif;

if (! function_exists('happyforms_sanitize_intval_empty')):

	function happyforms_sanitize_intval_empty($value) {
		$value = trim($value);

		if ('' == $value) {
			return $value;
		}

		$value = intval($value);

		return $value;
	}

endif;

if (! function_exists('happyforms_sanitize_classnames')):
	/**
	 * Sanitize classnames.
	 *
	 * @since 1.26.8
	 *
	 * @param string $classes The original value.
	 *
	 * @return string
	 */
	function happyforms_sanitize_classnames($classes) {
		$classes_array = explode(' ', $classes);
		$sanitized_classes = array();
	
		foreach ($classes_array as $class) {
			$sanitized_classes[] = sanitize_html_class($class);
		}
	
		return implode(' ', $sanitized_classes);
	}

endif;
