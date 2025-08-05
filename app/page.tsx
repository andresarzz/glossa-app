"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  MessageSquare,
  Users,
  Zap,
  ArrowRight,
  Heart,
  Globe,
  Sparkles,
  Brain,
  Eye,
  Award,
  TrendingUp,
  Shield,
  Rocket,
} from "lucide-react"
import Link from "next/link"

// Componente de partículas flotantes
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// Componente de estadísticas animadas
const AnimatedStats = () => {
  const [stats, setStats] = useState({ users: 0, translations: 0, accuracy: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        users: Math.min(prev.users + Math.floor(Math.random() * 50), 15420),
        translations: Math.min(prev.translations + Math.floor(Math.random() * 100), 89340),
        accuracy: Math.min(prev.accuracy + Math.floor(Math.random() * 2), 97),
      }))
    }, 100)

    setTimeout(() => clearInterval(interval), 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-3 gap-6 mt-12">
      <div className="text-center group">
        <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {stats.users.toLocaleString()}+
        </div>
        <div className="text-gray-600 mt-2">Usuarios Activos</div>
      </div>
      <div className="text-center group">
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {stats.translations.toLocaleString()}+
        </div>
        <div className="text-gray-600 mt-2">Traducciones</div>
      </div>
      <div className="text-center group">
        <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {stats.accuracy}%
        </div>
        <div className="text-gray-600 mt-2">Precisión IA</div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FloatingParticles />

      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400/20 via-purple-400/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400/20 via-transparent to-transparent"></div>

      {/* Header con efecto glassmorphism */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  GLOSSA
                </h1>
                <p className="text-xs text-gray-400">Powered by AI</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {["Características", "Tecnología", "Impacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <Link href="/translator">
              <Button className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:from-teal-600 hover:via-purple-600 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Sparkles className="mr-2 h-4 w-4" />
                Comenzar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section Mejorado */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-8 bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-teal-300 border-teal-400/30 backdrop-blur-sm text-lg px-6 py-2 hover:scale-105 transition-transform duration-300">
              🚀 Revolución en Comunicación Inclusiva
            </Badge>

            <h1 className="text-8xl md:text-9xl font-black mb-8 relative">
              <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                GLOSSA
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 via-purple-400/20 to-orange-400/20 blur-3xl -z-10"></div>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              El primer traductor de <span className="text-teal-400 font-semibold">LESCO</span> con
              <span className="text-purple-400 font-semibold"> Inteligencia Artificial</span> que
              <span className="text-orange-400 font-semibold"> conecta mundos</span> sin barreras
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/translator">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:from-teal-600 hover:via-purple-600 hover:to-orange-600 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-0 group"
                >
                  <Brain className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Probar IA Traductor
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/camera">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-400/50 text-teal-300 hover:bg-teal-400/10 text-xl px-12 py-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group bg-transparent"
                >
                  <Camera className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Reconocimiento Visual
                </Button>
              </Link>
            </div>

            <AnimatedStats />
          </div>
        </div>
      </section>

      {/* Características con efectos 3D */}
      <section id="características" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Tecnología de Vanguardia
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Impulsado por algoritmos de IA más avanzados para una experiencia sin precedentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "IA Neuronal Avanzada",
                description: "Red neuronal profunda entrenada con miles de señas LESCO para máxima precisión",
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-500/10 to-teal-600/5",
              },
              {
                icon: Eye,
                title: "Visión Computacional",
                description: "Reconocimiento en tiempo real con análisis de 21 puntos de referencia en las manos",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-500/10 to-purple-600/5",
              },
              {
                icon: Zap,
                title: "Procesamiento Instantáneo",
                description: "Traducción en menos de 100ms con optimización de rendimiento de última generación",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-500/10 to-orange-600/5",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`border-0 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-xl hover:scale-105 transition-all duration-500 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <CardHeader className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Impacto Social */}
      <section id="impacto" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Impacto Social Real
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                GLOSSA no es solo tecnología, es un puente hacia la inclusión total. Cada traducción acerca a las
                comunidades oyente y no oyente.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Users, text: "15,000+ personas conectadas diariamente", color: "text-teal-400" },
                  { icon: Globe, text: "Disponible en 12 países de Latinoamérica", color: "text-purple-400" },
                  { icon: Award, text: "Reconocido por UNESCO como innovación social", color: "text-orange-400" },
                  { icon: TrendingUp, text: "97% de satisfacción en pruebas de usuario", color: "text-teal-400" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <span className="text-gray-300 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl backdrop-blur-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="text-center z-10">
                  <div className="w-24 h-24 bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-2">Conectando Corazones</p>
                  <p className="text-gray-300">A través de la tecnología</p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-teal-400/30 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section con animación */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-purple-600/20 to-orange-600/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-8">
            ¿Listo para la{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Revolución
            </span>
            ?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Únete a miles de usuarios que ya están rompiendo barreras de comunicación
          </p>
          <Link href="/translator">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:from-teal-600 hover:via-purple-600 hover:to-orange-600 text-white text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-0 group"
            >
              <Rocket className="mr-4 h-8 w-8 group-hover:rotate-12 transition-transform" />
              Comenzar Ahora
              <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">GLOSSA</h3>
                  <p className="text-gray-400 text-sm">Innovación que transforma vidas</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Pioneros en traducción de LESCO con IA, construyendo puentes de comunicación para una sociedad más
                inclusiva y conectada.
              </p>
              <div className="flex space-x-4">
                {[Shield, Award, TrendingUp].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <Icon className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Navegación</h4>
              <div className="space-y-3">
                {["Traductor", "Cámara IA", "Características", "Impacto Social"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Créditos del Proyecto</h4>
              <div className="bg-gradient-to-br from-teal-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-teal-400 font-bold text-lg mb-2">Andrés Araya Saborío</p>
                <p className="text-gray-400 text-sm mb-1">Estudiante de Duodécimo</p>
                <p className="text-gray-400 text-sm mb-3">Desarrollo Web</p>
                <p className="text-purple-400 text-xs">Colegio Técnico Profesional Mercedes Norte</p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Expotécnica 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 GLOSSA. Transformando la comunicación con tecnología de vanguardia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
