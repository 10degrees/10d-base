<footer class="footer">
    <div class="container footer__inner">

        <div class="row">
            <nav class="col-sm-12 footer__nav">
                <?php if (has_nav_menu('footer_navigation')) {
                    wp_nav_menu(
                        [
                            'theme_location' => 'footer_navigation',
                            'depth' => 1
                        ]
                    );
                } ?>
            </nav>
        </div>

    </div>

    <div class="container footer__inner">

        <div class="row">
            <div class="col-sm-12 footer__copyright">
                <p><?php echo '&copy;&nbsp2009 - ' . date('Y') . '&nbsp;' . get_bloginfo('name'); ?>.</p>
                <p><?php esc_html_e('WordPress by', '@textdomain'); ?>&nbsp;<a href="https://www.10degrees.uk" rel="nofollow"><?php esc_html_e('10 Degrees', '@textdomain'); ?></a></p>
            </div>
        </div>

    </div>

</footer>

<?php wp_footer();