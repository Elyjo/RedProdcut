FROM php:8.2-fpm

# Installer dépendances système de base
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git curl libpng-dev libonig-dev libxml2-dev \
    libpq-dev sqlite3 gnupg lsb-release ca-certificates \
    && docker-php-ext-install pdo_mysql pdo_pgsql pdo_sqlite pgsql mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Installer Node.js et npm (version stable)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Installer les dépendances Node et builder le front
RUN npm install
RUN npm run build

# Permissions Laravel
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Créer le fichier SQLite si besoin
RUN mkdir -p /var/www/html/database && touch /var/www/html/database/database.sqlite

# Exposer le port
EXPOSE 8000

# Lancer Laravel avec migration
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=8000
