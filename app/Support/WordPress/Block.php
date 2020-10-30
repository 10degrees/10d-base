<?php

namespace App\Support\WordPress;

/**
 * Abstract block registration
 *
 * @category Theme
 * @package  TenDegrees/10degrees-base
 * @author   10 Degrees <wordpress@10degrees.uk>
 * @license  https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html GPL-2.0+
 * @link     https://github.com/10degrees/10degrees-base
 * @since    2.0.0
 */
abstract class Block
{
    /**
     * A unique name that identifies the block (without namespace)
     *
     * @var string
     */
    protected $name = '';

    /**
     * The block options
     *
     * @var array
     */
    protected $options = [
        'title'       => '',
        'description' => '',
        'icon'        => '',
        'category'    => 'theme',
        'keywords'    => ['theme', 'block'],
        'supports'    => ['align' => ['wide', 'full']],
    ];

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->register();

        add_filter(
            'allowed_block_types',
            function ($blocks) {
                $blocks[] = 'acf/' . $this->name;
                return $blocks;
            }
        );
    }

    /**
     * Register the block
     *
     * @return void
     */
    protected function register(): void
    {
        acf_register_block(
            array_merge(
                $this->options,
                [
                    'name'            => $this->name,
                    'render_callback' => [$this, 'render'],
                ]
            )
        );
    }

    /**
     * Callback to render ACF blocks
     *
     * @param $block Name of block
     *
     * @return void
     */
    public function render(array $block)
    {
        echo td_view("partials/blocks/{$this->name}", compact('block'));
    }
}
