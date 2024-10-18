/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export mode
    // Optional: other configurations can go here
    webpack: (config) => {
        // Modify the existing config here
        return config;
      },
};
  
  export default nextConfig;