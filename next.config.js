/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // appDir: true,
        // Para que no se ejecute del lado del cliente estas librerias que provocan un error al usar nexth-auth
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    }
}

module.exports = nextConfig