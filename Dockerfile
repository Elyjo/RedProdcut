# Étape 1 : image PHP
FROM php:8.2-fpm

# Installer les dépendances système + Node.js/NPM
RUN apt-get update && apt-get install -y \
  libzip-dev zip unzip git curl libpng-dev libonig-dev libxml2-dev \
  nodejs npm \
  && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier tous les fichiers du projet
COPY . .

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Installer les dépendances Node et builder le front
RUN npm install
RUN npm run build

# Permissions Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exposer le port
EXPOSE 8000

# Lancer Laravel
CMD php artisan serve --host=0.0.0.0 --port=8000
