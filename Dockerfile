# 1️⃣ Image de base
FROM php:8.2-fpm

# 2️⃣ Installer les extensions et composer
RUN apt-get update && apt-get install -y \
    zip unzip git libonig-dev libzip-dev && \
    docker-php-ext-install pdo_mysql mbstring zip

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 3️⃣ Copier le code d'abord
WORKDIR /var/www/html
COPY . .

# 4️⃣ Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# 5️⃣ Exposer le port
EXPOSE 8080

# 6️⃣ Lancer le serveur PHP (Laravel Sail style)
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
