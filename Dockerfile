FROM php:8.2-fpm

ENV DEBIAN_FRONTEND=noninteractive
ENV APP_URL=https://red-product.up.railway.app
ENV ASSET_URL=https://red-product.up.railway.app

# Installer dépendances système (libs GD, SQLite, Postgres, etc.)
RUN apt-get update && apt-get install -y \
    git unzip zip curl \
    libzip-dev zlib1g-dev \
    libpng-dev libjpeg-dev libfreetype-dev \
    libonig-dev libxml2-dev \
    libpq-dev libsqlite3-dev \
    build-essential \
  && rm -rf /var/lib/apt/lists/*

# Configurer et installer GD
RUN docker-php-ext-configure gd --with-jpeg --with-freetype \
  && docker-php-ext-install -j$(nproc) \
    pdo_mysql pdo_pgsql pdo_sqlite mbstring exif pcntl bcmath gd zip

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copier les fichiers du projet
COPY . .

# Installer dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Installer Node.js (via NodeSource)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get update && apt-get install -y nodejs \
  && npm install -g npm@latest

# Nettoyer cache Laravel avant build front
RUN php artisan config:clear \
 && php artisan route:clear \
 && php artisan view:clear

# Installer dépendances front et builder
RUN npm install && npm run build

# Permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Créer fichier sqlite si besoin
RUN mkdir -p /var/www/html/database && touch /var/www/html/database/database.sqlite

EXPOSE 8000

# Migration + lancement Laravel
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000
