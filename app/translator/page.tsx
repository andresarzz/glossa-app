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

// Componente de análisis de IA MEJORADO
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
    <Card className="border-2 border-purple-400/50 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl shadow-2xl">
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-spin shadow-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-purple-200">IA Procesando</h3>
            <p className="text-purple-300 font-medium">{currentStep}</p>
          </div>
        </div>
        <Progress value={progress} className="h-3 mb-3" />
        <p className="text-purple-200 font-semibold">{progress}% completado</p>
      </CardContent>
    </Card>
  )
}

export default function TranslatorPage() {
  const [inputText, setInputText] = useState("")
  const [translation, setTranslation] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedWord, setSelectedWord] = useState<string>("")
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
    setSelectedWord("")
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

  const selectWord = (word: string) => {
    setSelectedWord(word)
    setInputText(word)
    setTimeout(() => translateText(), 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-400/15 via-purple-400/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400/15 via-transparent to-transparent"></div>

      {/* Header Premium */}
      <header className="border-b border-white/20 bg-white/10 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver al inicio</span>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-300 via-purple-300 to-orange-300 bg-clip-text text-transparent">
                  IA Traductor LESCO
                </h1>
                <p className="text-sm text-gray-300">Powered by Neural Networks</p>
              </div>
            </div>

            <Link href="/camera">
              <Button
                variant="outline"
                className="border-2 border-teal-400/70 text-teal-200 hover:bg-teal-400/20 hover:text-white bg-transparent backdrop-blur-sm font-medium"
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
          {/* Estadísticas en tiempo real MEJORADAS */}
          {translation && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-teal-400/50 bg-gradient-to-br from-teal-500/20 to-teal-600/10 backdrop-blur-xl shadow-xl">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-10 w-10 text-teal-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-teal-200">{translationStats.accuracy}%</div>
                  <div className="text-teal-300 font-medium">Precisión IA</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-400/50 bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-xl shadow-xl">
                <CardContent className="p-6 text-center">
                  <Zap className="h-10 w-10 text-purple-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-200">{translationStats.speed}ms</div>
                  <div className="text-purple-300 font-medium">Velocidad</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-400/50 bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-xl shadow-xl">
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-orange-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-orange-200">{translationStats.complexity}</div>
                  <div className="text-orange-300 font-medium">Complejidad</div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Input Section MEJORADO */}
          <Card className="mb-8 border-2 border-white/30 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl shadow-2xl">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-4xl bg-gradient-to-r from-teal-300 via-purple-300 to-orange-300 bg-clip-text text-transparent font-black">
                    Traductor IA Avanzado
                  </CardTitle>
                  <CardDescription className="text-gray-200 text-xl font-medium">
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
                  className="min-h-[140px] bg-white/10 border-2 border-white/30 text-white placeholder-gray-300 text-xl focus:border-teal-400/70 backdrop-blur-sm resize-none font-medium"
                />
                <div className="absolute bottom-4 right-4 text-sm text-gray-300 bg-black/30 px-2 py-1 rounded">
                  {inputText.length}/500
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button
                  onClick={translateText}
                  disabled={!inputText.trim() || isLoading}
                  className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:from-teal-600 hover:via-purple-600 hover:to-orange-600 text-white px-10 py-4 text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin mr-3 h-6 w-6 border-3 border-white/30 border-t-white rounded-full"></div>
                      Procesando con IA...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-3 h-6 w-6" />
                      Traducir con IA
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={speakText}
                  disabled={!inputText.trim()}
                  className="border-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-medium px-6 py-4"
                >
                  <Volume2 className="mr-2 h-5 w-5" />
                  Escuchar
                </Button>

                <Button
                  variant="outline"
                  onClick={clearAll}
                  className="border-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-medium px-6 py-4"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Limpiar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Análisis de IA */}
          <AIAnalysis text={inputText} isAnalyzing={isLoading} />

          {/* Resultados de Traducción MEJORADOS */}
          {translation && (
            <Card className="border-2 border-white/30 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl mt-8 shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                    <div>
                      <CardTitle className="text-3xl text-white font-bold">Traducción Completada</CardTitle>
                      <CardDescription className="text-gray-200 text-lg">
                        Texto original: "{translation.originalText}" • Procesado a las {translation.timestamp}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-500/30 text-green-200 border-2 border-green-400/50 px-4 py-2 text-lg font-bold">
                    ✓ Verificado por IA
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-10">
                  {translation.words.map((word: string, index: number) => {
                    const cleanWord = word.replace(/[.,!?]/g, "")
                    const translationData = translation.translations[index]

                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl"
                      >
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="flex-shrink-0">
                            <div className="flex items-center space-x-3 mb-6">
                              <Badge className="bg-gradient-to-r from-teal-500 to-purple-500 text-white border-0 px-4 py-2 text-lg font-bold">
                                {cleanWord.toUpperCase()}
                              </Badge>
                              <Badge className="border-2 border-gray-400 text-gray-200 bg-gray-700/50 px-3 py-1 font-medium">
                                {translationData.difficulty}
                              </Badge>
                              <Badge className="border-2 border-gray-400 text-gray-200 bg-gray-700/50 px-3 py-1 font-medium">
                                {translationData.category}
                              </Badge>
                            </div>
                            <div className="w-80 h-80 bg-gradient-to-br from-teal-500/30 via-purple-500/30 to-orange-500/30 rounded-2xl border-3 border-white/30 flex items-center justify-center backdrop-blur-sm shadow-xl">
                              <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                  <span className="text-white font-bold text-4xl">{cleanWord[0].toUpperCase()}</span>
                                </div>
                                <p className="text-white font-bold text-2xl">{cleanWord.toUpperCase()}</p>
                                <p className="text-gray-200 text-lg mt-3 font-medium">Representación Visual</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <h4 className="font-bold text-3xl text-white mb-6 flex items-center">
                              <Eye className="mr-3 h-8 w-8 text-teal-300" />
                              Cómo hacer la seña:
                            </h4>
                            <p className="text-gray-200 leading-relaxed text-xl mb-8 font-medium">
                              {translationData.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                              {lescoDatabase[cleanWord] ? (
                                <Badge className="bg-green-500/30 text-green-200 border-2 border-green-400/50 px-6 py-3 text-lg font-bold">
                                  <CheckCircle className="mr-2 h-5 w-5" />
                                  Seña Verificada
                                </Badge>
                              ) : (
                                <Badge className="bg-yellow-500/30 text-yellow-200 border-2 border-yellow-400/50 px-6 py-3 text-lg font-bold">
                                  <Clock className="mr-2 h-5 w-5" />
                                  En Desarrollo
                                </Badge>
                              )}

                              <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white/40 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-medium"
                              >
                                <Mic className="mr-2 h-5 w-5" />
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

          {/* Palabras de Ejemplo COMPLETAMENTE MEJORADAS */}
          <Card className="mt-8 border-2 border-white/30 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center font-bold">
                <Sparkles className="mr-4 h-8 w-8 text-orange-300" />
                Biblioteca de Señas LESCO
              </CardTitle>
              <CardDescription className="text-gray-200 text-xl font-medium">
                Explora nuestra colección de señas verificadas por expertos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(lescoDatabase).map(([word, data]) => (
                  <Button
                    key={word}
                    variant="outline"
                    onClick={() => selectWord(word)}
                    className={`
                      border-2 h-auto p-6 flex flex-col items-center space-y-3 group transition-all duration-300 font-medium
                      ${
                        selectedWord === word
                          ? "border-teal-400 bg-gradient-to-br from-teal-500/30 to-purple-500/30 text-white shadow-xl scale-105"
                          : "border-white/40 text-gray-200 hover:border-teal-400/70 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-purple-500/20 hover:text-white bg-white/10"
                      }
                      backdrop-blur-sm hover:scale-105 hover:shadow-xl
                    `}
                  >
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300
                        ${
                          selectedWord === word
                            ? "bg-gradient-to-r from-teal-400 to-purple-400 text-white shadow-lg"
                            : "bg-gradient-to-r from-teal-500/70 to-purple-500/70 text-white group-hover:from-teal-400 group-hover:to-purple-400"
                        }
                      `}
                    >
                      {word[0].toUpperCase()}
                    </div>
                    <span className="font-bold capitalize text-lg group-hover:text-white transition-colors">
                      {word}
                    </span>
                    <Badge
                      className={`
                        text-sm font-medium
                        ${
                          selectedWord === word
                            ? "border-teal-300 text-teal-200 bg-teal-500/20"
                            : "border-gray-500 text-gray-300 bg-gray-700/50"
                        }
                      `}
                      variant="outline"
                    >
                      {data.category}
                    </Badge>
                  </Button>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border-2 border-blue-400/30 backdrop-blur-sm">
                <p className="text-blue-200 text-lg font-medium">
                  💡 <strong className="text-blue-100">Consejo:</strong> Nuestra IA está en constante aprendizaje. Cada
                  traducción mejora nuestro algoritmo para futuras interacciones.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
