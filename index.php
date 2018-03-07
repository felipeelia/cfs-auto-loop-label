<?php 
/*
Plugin Name: CFS - Auto Loop Label
Description: CFS addon that auto label loops with the first textfield value.
Version: 1.0.2
Author: Felipe Elia
Author URI: https://felipeelia.com.br/
Text Domain: cfs-auto-loop-label
Domain Path: /languages
*/

function cfs_all_admin_enqueue( $hook ) {
    if ( 'post.php' == $hook OR 'post-new.php' == $hook ) {
		wp_enqueue_script( 'cfs_auto_loop_label', plugin_dir_url( __FILE__ ) . 'scripts.js' );
    }
}
add_action( 'admin_enqueue_scripts', 'cfs_all_admin_enqueue' );
