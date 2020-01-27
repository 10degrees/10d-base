
// Custom Gutenberg Blocks
import "./blocks/link-button.js";

// Admin-Specific JS
import DisableAlignment from './admin/disable-alignment';
import RegisterBlockStyles from './admin/register-block-styles';
import UnregisterBlockStyles from "./admin/unregister-block-styles";

// Common JS
import Accordion from "./common/blocks/_accordion";

class BlockEditor {
    constructor(){
        this.initBlocks();

        wp.domReady(this.domReady)
    }

    initBlocks(){
        new DisableAlignment();

        new Accordion();
    }

    domReady(){
        new UnregisterBlockStyles();
        new RegisterBlockStyles();
    }
}

new BlockEditor();