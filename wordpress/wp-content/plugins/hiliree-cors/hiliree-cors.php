<?php
/**
 * Plugin Name: Hiliree CORS Handler
 * Description: Allows the Next.js frontend to communicate with WordPress API during development
 * Version: 1.0.0
 * Author: Hiliree Team
 */

// CORS Headers
add_action('init', function() {
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Credentials: true');
});

// Register Site Settings Page
add_action('admin_menu', function() {
    add_menu_page(
        'Site Settings',
        'Site Settings',
        'manage_options',
        'site-settings',
        'hiliree_site_settings_page',
        'dashicons-admin-generic',
        30
    );
});

// Register Navigation Menus
add_action('after_setup_theme', function() {
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer'  => 'Footer Menu',
    ));
});

function hiliree_site_settings_page() {
    ?>
    <div class="wrap">
        <h1>Site Settings</h1>
        <p>Global site settings will be managed here.</p>
    </div>
    <?php
}