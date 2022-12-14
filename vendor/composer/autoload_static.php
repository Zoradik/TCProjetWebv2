<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit28831ed3bd851ef9dd9ffe16a2f9ed84
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/class',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit28831ed3bd851ef9dd9ffe16a2f9ed84::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit28831ed3bd851ef9dd9ffe16a2f9ed84::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit28831ed3bd851ef9dd9ffe16a2f9ed84::$classMap;

        }, null, ClassLoader::class);
    }
}
