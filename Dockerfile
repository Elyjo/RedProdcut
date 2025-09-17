FROM php:8.2-fpm

ENV DEBIAN_FRONTEND=noninteractive
ENV APP_URL=https://red-product.up.railway.app
ENV ASSET_URL=https://red-product.up.railway.app

# Installer dépendances système (GD, PostgreSQL, etc.)
RUN apt-get update && apt-get install -y \
    git unzip zip curl \
    libzip-dev zlib1g-dev \
    libpng-dev libjpeg-dev libfreetype-dev \
    libonig-dev libxml2-dev \
    libpq-dev build-essential \
  && rm -rf /var/lib/apt/lists/*

# Configurer et installer GD et extensions PHP
RUN docker-php-ext-configure gd --with-jpeg --with-freetype \
  && docker-php-ext-install -j$(nproc) \
    pdo_mysql pdo_pgsql mbstring exif pcntl bcmath gd zip

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copier le projet
COPY . .

# Installer dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Installer Node.js + NPM
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && npm install -g npm@latest

# Nettoyer cache Laravel
RUN php artisan config:clear \
 && php artisan route:clear \
 && php artisan view:clear

# Installer front-end et builder en HTTPS
RUN npm install && npm run build && ls -l public/build

# Permissions Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Créer fichier SQLite si nécessaire
RUN mkdir -p /var/www/html/database && touch /var/www/html/database/database.sqlite

EXPOSE 8000

# Migration + lancement Laravel
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000
