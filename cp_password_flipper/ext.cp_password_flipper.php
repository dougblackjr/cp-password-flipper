<?php

if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class Cp_password_flipper_ext
{

    public $settings = [];

    public $version = "1.0.0";

    public function __construct($settings = '')
    {
        $this->settings = $settings;
    }

    public function activate_extension()
    {
        $data = [
            [
                'class'     => __CLASS__,
                'method'    => 'cp_js_end',
                'hook'      => 'cp_js_end',
                'settings'  => serialize($this->settings),
                'priority'  => 10,
                'version'   => $this->version,
                'enabled'   => 'y'
            ],
        ];

        foreach ($data as $hook) {
            ee()->db->insert('extensions', $hook);
        }
    }

    public function disable_extension()
    {
        ee()->db->where('class', __CLASS__);
        ee()->db->delete('extensions');
        return true;
    }

    public function update_extension($current = '')
    {
        return true;
    }

    public function cp_js_end()
    {
        $script = file_get_contents(__DIR__ . '/script.js');
        return $script;
    }
}
