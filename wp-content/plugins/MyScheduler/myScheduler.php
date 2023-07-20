
<?php
/*
Plugin Name: myScheduler
Plugin URI:
Description: スケジュールアプリ
Version: 1.0
Author: tsuru
Author URI: http://twitter.com/
License: GPL2
*/

// プラグインが有効化されたときに呼び出される関数を登録
register_activation_hook(__FILE__, 'create_myScheduler_html');

function create_myScheduler_html() {
    // テーマのtemplatesディレクトリのパスを取得
    $dir_path = get_template_directory() . '/templates';

    // ディレクトリが存在しない場合は作成
    if (!file_exists($dir_path)) {
        mkdir($dir_path, 0777, true);
    }

    // myScheduler.htmlのパス
    $file_path = $dir_path . '/myScheduler.html';

    // ファイルが既に存在しない場合のみ生成
    if (!file_exists($file_path)) {
        $file = fopen($file_path, 'w');
        
        if($file) {
            // 必要なHTMLをここで書き出す
            fwrite($file, '<html><body><h1>Hello, world!</h1></body></html>');
            fclose($file);
        }
    }
}

function my_custom_block_enqueue_assets() {
  wp_enqueue_script(
      'my-custom-block-editor',
      plugins_url('my-custom-block.js', __FILE__),
      array('wp-blocks', 'wp-element')
  );
}
add_action('enqueue_block_editor_assets', 'my_custom_block_enqueue_assets');
