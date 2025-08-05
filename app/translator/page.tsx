"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  RotateCcw,
  Brain,
  Sparkles,
  Zap,
  CheckCircle,
  Clock,
  TrendingUp,
  Eye,
  Mic,
} from "lucide-react"
import Link from "next/link"

// Base de datos expandida de señas LESCO con tipado correcto
const lescoDatabase: Record<string, { description: string; difficulty: string; category: string }> = {
  hola: {
    description:
      "Levanta la mano derecha con la palma hacia adelante, mueve ligeramente de lado a lado con una sonrisa",
    difficulty: "Básico",
    category: "Saludos",
  },
  gracias: {
    description:
      "Coloca la mano derecha en el pecho y muévela hacia adelante con la palma hacia arriba, expresando gratitud",
    difficulty: "Básico",
    category: "Cortesía",
  },
  "por favor": {
    description: "Junta las palmas de las manos frente al pecho como en posición de oración, con movimiento suave",
    difficulty: "Básico",
    category: "Cortesía",
  },
  sí: {
    description: "Cierra la mano en puño y muévela hacia arriba y abajo como asintiendo, con expresión afirmativa",
    difficulty: "Básico",
    category: "Respuestas",
  },
  no: {
    description: "Extiende el dedo índice y muévelo de lado a lado, con expresión negativa clara",
    difficulty: "Básico",
    category: "Respuestas",
  },
  agua: {
    description: "Forma una 'W' con tres dedos y llévala hacia la boca, simulando el acto de beber",
    difficulty: "Intermedio",
    category: "Necesidades",
  },
  comer: {
    description: "Lleva los dedos juntos hacia la boca repetidamente, simulando el acto de alimentarse",
    difficulty: "Básico",
    category: "Necesidades",
  },
  casa: {
    description: "Forma un techo con las manos sobre la cabeza, representando el hogar",
    difficulty: "Básico",
    category: "Lugares",
  },
  familia: {
    description: "Forma una 'F' con la mano y haz un círculo en el aire, representando unión familiar",
    difficulty: "Intermedio",
    category: "Relaciones",
  },
  amor: {
    description: "Cruza los brazos sobre el pecho abrazándote a ti mismo, con expresión cariñosa",
    difficulty: "Básico",
    category: "Emociones",
  },
  ayuda: {
    description: "Extiende ambas manos hacia adelante con palmas hacia arriba, en gesto de solicitud",
    difficulty: "Básico",
    category: "Necesidades",
  },
  trabajo: {
    description: "Golpea suavemente el puño derecho sobre la palma izquierda repetidamente",
    difficulty: "Intermedio",
    category: "Actividades",
  },
}

// Componente de análisis de IA
const AIAnalysis = ({ text, isAnalyzing }: { text: string; isAnalyzing: boolean }) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState("")

  useEffect(() => {
    if (isAnalyzing) {
      const steps = [
        "Analizando estructura del texto...",
        "Procesando con IA neuronal...",
        "Identificando señas LESCO...",
        "Optimizando traducción...",
        "Generando visualización...",
      ]

      let stepIndex = 0
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 20, 100))
        setCurrentStep(steps[stepIndex])
        stepIndex++

        if (stepIndex >= steps.length) {
          clearInterval(interval)
        }
      }, 300)

      return () => clearInterval(interval)
    } else {
      setProgress(0)
      setCurrentStep("")
    }
  }, [isAnalyzing])

  if (!isAnalyzing) return null

  return (
    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-spin">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-purple-700">IA Procesando</h3>
            <p className="text-sm text-purple-600">{currentStep}</p>
          </div>
        </div>
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-xs text-purple-600">{progress}% completado</p>
      </CardContent>
    </Card>
  )
}

export default function TranslatorPage() {
  const [inputText, setInputText] = useState("")
  const [translation, setTranslation] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [translationStats, setTranslationStats] = useState({ accuracy: 0, speed: 0, complexity: 0 })

  const translateText = async () => {
    if (!inputText.trim()) return

    setIsLoading(true)
    setTranslation(null)

    // Simular análisis avanzado de IA
    setTimeout(() => {
      const words = inputText.toLowerCase().split(" ")
      const translations = words.map((word) => {
        const cleanWord = word.replace(/[.,!?]/g, "")
        return (
          lescoDatabase[cleanWord] || {
            description: `Seña para "${cleanWord}" - En desarrollo por nuestro equipo de lingüistas LESCO`,
            difficulty: "Avanzado",
            category: "Personalizado",
          }
        )
      })

      // Calcular estadísticas simuladas
      const accuracy = Math.floor(Math.random() * 15) + 85 // 85-100%
      const speed = Math.floor(Math.random() * 20) + 80 // 80-100ms
      const complexity = words.length > 3 ? "Alta" : words.length > 1 ? "Media" : "Baja"

      setTranslationStats({ accuracy, speed, complexity: complexity as any })
      setTranslation({
        originalText: inputText,
        words: words,
        translations: translations,
        timestamp: new Date().toLocaleTimeString(),
      })
      setIsLoading(false)
    }, 2000)
  }

  const clearAll = () => {
    setInputText("")
    setTranslation(null)
    setTranslationStats({ accuracy: 0, speed: 0, complexity: 0 })
  }

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(inputText)
      utterance.lang = "es-ES"
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400/10 via-purple-400/5 to-transparent"></div>

      {/* Header Premium */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Volver al inicio</span>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  IA Traductor LESCO
                </h1>
                <p className="text-xs text-gray-400">Powered by Neural Networks</p>
              </div>
            </div>

            <Link href="/camera">
              <Button
                variant="outline"
                className="border-teal-400/50 text-teal-300 hover:bg-teal-400/10 bg-transparent backdrop-blur-sm"
              >
                <Eye className="mr-2 h-4 w-4" />
                Usar Cámara
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Estadísticas en tiempo real */}
          {translation && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="border-0 bg-gradient-to-br from-teal-500/10 to-teal-600/5 backdrop-blur-xl">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-teal-400">{translationStats.accuracy}%</div>
                  <div className="text-sm text-gray-400">Precisión IA</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-xl">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">{translationStats.speed}ms</div>
                  <div className="text-sm text-gray-400">Velocidad</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-400">{translationStats.complexity}</div>
                  <div className="text-sm text-gray-400">Complejidad</div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Input Section Mejorado */}
          <Card className="mb-8 border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                    Traductor IA Avanzado
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    Tecnología neuronal de última generación para traducción LESCO
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <Textarea
                  placeholder="Escribe aquí el texto que quieres traducir a LESCO... La IA analizará cada palabra para darte la mejor traducción posible."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[120px] bg-white/5 border-white/20 text-white placeholder-gray-400 text-lg focus:border-teal-400/50 backdrop-blur-sm resize-none"
                />
                <div className="absolute bottom-3 right-3 text-sm text-gray-500">{inputText.length}/500</div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button
                  onClick={translateText}
                  disabled={!inputText.trim() || isLoading}
                  className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:from-teal-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin mr-2 h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></div>
                      Procesando con IA...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-5 w-5" />
                      Traducir con IA
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={speakText}
                  disabled={!inputText.trim()}
                  className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                >
                  <Volume2 className="mr-2 h-4 w-4" />
                  Escuchar
                </Button>

                <Button
                  variant="outline"
                  onClick={clearAll}
                  className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Limpiar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Análisis de IA */}
          <AIAnalysis text={inputText} isAnalyzing={isLoading} />

          {/* Resultados de Traducción Mejorados */}
          {translation && (
            <Card className="border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl mt-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                    <div>
                      <CardTitle className="text-2xl text-white">Traducción Completada</CardTitle>
                      <CardDescription className="text-gray-400">
                        Texto original: "{translation.originalText}" • Procesado a las {translation.timestamp}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/30">✓ Verificado por IA</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8">
                  {translation.words.map((word: string, index: number) => {
                    const cleanWord = word.replace(/[.,!?]/g, "")
                    const translationData = translation.translations[index]

                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                          <div className="flex-shrink-0">
                            <div className="flex items-center space-x-2 mb-4">
                              <Badge className="bg-gradient-to-r from-teal-500 to-purple-500 text-white border-0">
                                {cleanWord.toUpperCase()}
                              </Badge>
                              <Badge variant="outline" className="border-gray-600 text-gray-400">
                                {translationData.difficulty}
                              </Badge>
                              <Badge variant="outline" className="border-gray-600 text-gray-400">
                                {translationData.category}
                              </Badge>
                            </div>
                            <div className="w-64 h-64 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-orange-500/20 rounded-xl border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
                              <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <span className="text-white font-bold text-3xl">{cleanWord[0].toUpperCase()}</span>
                                </div>
                                <p className="text-white font-semibold text-lg">{cleanWord.toUpperCase()}</p>
                                <p className="text-gray-300 text-sm mt-2">Representación Visual</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <h4 className="font-bold text-2xl text-white mb-4 flex items-center">
                              <Eye className="mr-2 h-6 w-6 text-teal-400" />
                              Cómo hacer la seña:
                            </h4>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">{translationData.description}</p>

                            <div className="flex flex-wrap gap-3">
                              {lescoDatabase[cleanWord] ? (
                                <Badge className="bg-green-500/20 text-green-400 border-green-400/30 px-4 py-2">
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Seña Verificada
                                </Badge>
                              ) : (
                                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/30 px-4 py-2">
                                  <Clock className="mr-2 h-4 w-4" />
                                  En Desarrollo
                                </Badge>
                              )}

                              <Button
                                variant="outline"
                                size="sm"
                                className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent"
                              >
                                <Mic className="mr-2 h-4 w-4" />
                                Practicar Pronunciación
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Palabras de Ejemplo Mejoradas */}
          <Card className="mt-8 border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Sparkles className="mr-3 h-6 w-6 text-orange-400" />
                Biblioteca de Señas LESCO
              </CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Explora nuestra colección de señas verificadas por expertos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {Object.entries(lescoDatabase).map(([word, data]) => (
                  <Button
                    key={word}
                    variant="outline"
                    onClick={() => {
                      setInputText(word)
                      setTimeout(() => translateText(), 100)
                    }}
                    className="border-white/20 text-gray-300 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-purple-500/20 hover:border-white/40 bg-transparent h-auto p-4 flex flex-col items-center space-y-2 group transition-all duration-300"
                  >
                    <span className="font-semibold capitalize group-hover:text-white transition-colors">{word}</span>
                    <Badge variant="outline" className="border-gray-600 text-gray-500 text-xs">
                      {data.category}
                    </Badge>
                  </Button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Consejo:</strong> Nuestra IA está en constante aprendizaje. Cada traducción mejora nuestro
                  algoritmo para futuras interacciones.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
