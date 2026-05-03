<?php
/**
 * The base configuration for WordPress
 * 
 * Hiliree Headless CMS — Local Development
 * WAMP Server — hiliree.local
 */

// ================================================
// 1. DATABASE CONFIGURATION
// ================================================

/** Database name */
define('DB_NAME', 'hiliree');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'root');

/** Database host */
define('DB_HOST', 'localhost');

/** Database charset */
define('DB_CHARSET', 'utf8mb4');

/** Database collation */
define('DB_COLLATE', '');

// ================================================
// 2. AUTHENTICATION SALTS
// These make your site more secure.
// Generated from: https://api.wordpress.org/secret-key/1.1/salt/
// ================================================

define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');

// ================================================
// 3. TABLE PREFIX
// ================================================

$table_prefix = 'wp_';

// ================================================
// 4. HEADLESS WORDPRESS CONFIGURATION
// hiliree.local
// ================================================

/** Tell WordPress where it lives */
define('WP_HOME', 'http://hiliree.local/wordpress');
define('WP_SITEURL', 'http://hiliree.local/wordpress');

/** GraphQL endpoint URL */
define('WP_GRAPHQL_URL', 'http://hiliree.local/wordpress/graphql');

/** Local development mode */
define('WP_ENVIRONMENT_TYPE', 'local');

/** Increase PHP memory limit for GraphQL queries */
define('WP_MEMORY_LIMIT', '256M');

/** Disable automatic updates during development */
define('AUTOMATIC_UPDATER_DISABLED', true);
define('WP_AUTO_UPDATE_CORE', false);

/** Disable file editing from the admin panel */
define('DISALLOW_FILE_EDIT', true);

/** Limit post revisions */
define('WP_POST_REVISIONS', 5);

/** Empty trash after 7 days */
define('EMPTY_TRASH_DAYS', 7);

/** Disable wp-cron for local dev */
define('DISABLE_WP_CRON', true);

// ================================================
// 5. ABSOLUTE PATH & WordPress bootstrap
// ================================================

/** Absolute path to the WordPress directory */
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files */
require_once ABSPATH . 'wp-settings.php';