<?php
return [
    'enable'              => true,

    'build_dir'           => BASE_PATH . DIRECTORY_SEPARATOR . 'build',

    'phar_filename'       => 'webman.phar',

    'bin_filename'        => 'webman',

    'signature_algorithm' => Phar::SHA256, //set the signature algorithm for a phar and apply it. The signature algorithm must be one of Phar::MD5, Phar::SHA1, Phar::SHA256, Phar::SHA512, or Phar::OPENSSL.

    'private_key_file'    => '/etc/ssl/certs/ca-certificates.crt', // The file path for certificate or OpenSSL private key file.

    'exclude_pattern'     => '#^(?!.*(composer.json|/.github/|/.idea/|/.vscode/|/.git/|/.setting/|/runtime/|/vendor-bin/|/build/|/upload/|/public/|/update-sql/|/docs/))(.*)$#',

    'exclude_files'       => [
        '.env',
        '.env.example',
        'LICENSE',
        'start.php',
        'webman.phar',
        'webman.bin',
        'README.md',
        'LICENSE.txt',
        'composer.json',
        'composer.lock',
        'datebase.sql',
        '.user.ini',
        '*.sql',
        '.gitignore',
    ]
];
