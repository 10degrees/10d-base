<?php

/**
 * Output a class attribute with classes built from ACF block.
 *
 * ACF makes a variable `$block` available in block templates. This variable
 * includes useful information such as align which is used in the CSS to align
 * left/center/right/wide/full. This function will create a class attribute
 * that can be added to any ACF block that contains useful classes such as
 * alignwide.
 *
 * @param array $block
 * @param array|string $classes
 * @return void
 */
function td_block_class( array $block, $classes = [] ) : void
{
	if ( ! is_array( $classes ) ) $classes = [ trim( $classes ) ];

	if ( ! empty( $block['align'] ) ) $classes[] = 'align' . $block['align'];
	if ( ! empty( $block['id']    ) ) $classes[] = str_replace( '_', '-', $block['id']   );
	if ( ! empty( $block['name']  ) ) $classes[] = str_replace( '/', '-', $block['name'] );

	echo 'class="' . join( ' ', $classes ) . '"';
}