# Glossa · Prototipo web para explorar LESCO

Aplicación de **demostración de interfaz** desarrollada con Next.js 14, React, TypeScript y Tailwind CSS. Incluye una pantalla de inicio, un diccionario de señas en el código, una interfaz de traducción de texto a descripciones y una pantalla de cámara.

> **Estado: prototipo, no traductor funcional con inteligencia artificial.** El reconocimiento visual y los indicadores de precisión, velocidad, usuarios y traducciones se generan mediante simulaciones y números aleatorios. No son métricas reales. Las descripciones de señas no constituyen un recurso lingüístico validado.

## Tecnologías
- Next.js, React y TypeScript
- Tailwind CSS, componentes Radix UI y Lucide
- Acceso a cámara desde el navegador para la demostración de interfaz

## Ejecutar
```bash
npm install
npm run dev
```
Visitar http://localhost:3000.

## Qué se puede revisar
- Interfaz responsiva, estados interactivos y componentes reutilizables
- Página de diccionario y descripciones de señas
- Flujo de permisos del navegador para usar cámara

## Pendiente antes de una publicación real
1. Eliminar o etiquetar claramente todos los valores simulados mostrados en la interfaz.
2. Reemplazar cualquier texto de «IA» o «reconocimiento» que sugiera funcionalidades que todavía no existen.
3. Implementar un servicio de reconocimiento verificable y pruebas con personas expertas en LESCO.
4. Actualizar dependencias, comprobar compilación y publicar una demostración.

**Autor:** Andrés Araya. [Perfil en GitHub](https://github.com/andresarzz).
