import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="container mx-auto w-full flex justify-between items-center px-4 bg-white py-4 shadow">
      <div class="flex items-center">
        <img src="https://placehold.co/150x50?text=Logo" alt="Pipedrive logo" class="h-8 mr-4" />
        <nav class="space-x-4">
          <a href="#" class="text-gray-700 hover:text-gray-900">Товары</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Ценообразование</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">О продукте</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Ресурсы</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Справка</a>
        </nav>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fas fa-search text-gray-700"></i>
        <i class="fas fa-globe text-gray-700"></i>
        <a href="#" class="text-gray-700 hover:text-gray-900">Войти</a>
        <a href="#" class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Попробуйте бесплатно</a>
      </div>
    </div>
  )
}

export default Navbar