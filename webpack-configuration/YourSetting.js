'use strict';
/*
Все пути указываем относительно файла конфигурации webpack.base.config
 */
let yourSettings = {
    // Настройки для разработки
    dev: {
        // В какой папке находятся файлы для разработки
        devFolder: '../src',
        // где хранятся все страницы проекта относительно src
        pages: '/'
    },
    // Настройки для сборки
    build: {
        // Куда будет собираться проект
        buildFolder: '../dist',
        // где будут хранится css и js файлы
        assets: 'assets',
        // где будут храниться файлы относительно css
        img: '../../img'
    }


};

module.exports = yourSettings;