/** @type {import('next').NextConfig} */
const nextConfig = {

  
    // Параметры для оптимизации изображений, если используешь компонент Image из Next.js
    images: {
      loader: 'imgix',  // Можно оставить или выбрать другой loader, в зависимости от требований
      path: '/my-repo/', // Путь, который будет использоваться для загрузки изображений
      unoptimized: true,  // Отключаем оптимизацию изображений (если нужно)
    },
  };
  
  export default nextConfig;
  