<?php
// phpcs:ignoreFile

/**
 *
 * If this file is accessed directory, then abort.
 *
 */
if (!defined('WPINC')) {
    die;
}

/**
 * Composer
 *
 */
require __DIR__ . '/vendor/autoload.php';

/**
 *
 * Global helpers
 *
 */
foreach (glob(get_template_directory() . '/app/Helpers/*.php') as $filename) {
    include_once $filename;
}

/**
 *
 * Finally boot the theme and all core functionality
 *
 */
add_action('init', function () {
    new \App\Inc\RegisterServiceProviders;
});



function gutenberg_examples_01_register_block() {

    register_block_type( 'ten-degrees/button', [] );

}
add_action( 'init', 'gutenberg_examples_01_register_block' );