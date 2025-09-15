# Utilise une image officielle PHP avec Apache
FROM php:8.2-apache

# Variables d'environnement
ENV APP_ENV=production
ENV APP_DEBUG=false

# Installe les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    zip \
    nodejs \
    npm \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath gd \
    && a2enmod rewrite

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier composer.lock et composer.json
COPY composer.lock composer.json /var/www/html/

# Installer composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installer les dépendances PHP
RUN composer install --no-dev --optimize-autoloader

# Copier tout le projet
COPY . /var/www/html

# Installer les dépendances Node
RUN npm install
RUN npm run build

# Donner les permissions aux dossiers de stockage et bootstrap
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exposer le port utilisé par Railway
EXPOSE 8080

# Lancer Apache sur le port défini par Railway
CMD ["apache2-foreground"]
