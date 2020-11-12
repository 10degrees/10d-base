<?php

namespace App\Console\Commands;

use App\Support\Console\Command;

/**
 * Create a wp-cli command
 *
 * @category Theme
 * @package  TenDegrees/10degrees-base
 * @author   10 Degrees <wordpress@10degrees.uk>
 * @license  https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html GPL-2.0+
 * @link     https://github.com/10degrees/10degrees-base
 * @since    2.0.0
 */
class ACFExport extends Command
{
    /**
     * The command signature.
     *
     * @var string
     */
    protected $signature = 'acf:export';

    /**
     * The command description.
     *
     * @var string
     */
    protected $description = 'Export an ACF Field Group into PHP';

    /**
     * Handle the command call.
     *
     * @return void
     */
    protected function handle(): void
    {
        $this->success('ACF Group imported.');
    }
}