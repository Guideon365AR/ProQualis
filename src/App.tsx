import React, { useState, useEffect } from 'react';
import ColorPaletteOptions from './components/ColorPaletteOptions';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap,
  Building,
  GraduationCap,
  Heart,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Target,
  Lightbulb,
  Settings
} from 'lucide-react';

function App() {
  const [showPaletteOptions, setShowPaletteOptions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo_pq.png" 
                alt="ProQualis" 
                className="h-10 w-auto"
              />
              <span className={`text-xl font-bold transition-colors ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}>
                ProQualis
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Inicio', 'Servicios', 'Casos de Éxito', 'Nosotros', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-').replace('é', 'e'))}
                  className={`font-medium transition-colors hover:text-teal-600 ${
                    scrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-slate-800' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-slate-800' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-4">
                {['Inicio', 'Servicios', 'Casos de Éxito', 'Nosotros', 'Contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-').replace('é', 'e'))}
                    className="text-slate-700 font-medium text-left hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-teal-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-800 transition-colors text-left"
                >
                  Consulta Gratuita
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-teal-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-500/30 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-pink-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-green-400/60 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-400/60 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo destacado */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl scale-150"></div>
                <img 
                  src="/logo_pq.png" 
                  alt="ProQualis" 
                  className="relative h-24 w-24 md:h-32 md:w-32 mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                Transformamos
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Organizaciones
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              Impulsamos la <span className="text-yellow-300 font-semibold">evolución digital</span> de empresas y organizaciones públicas
              <br className="hidden md:block" />
              con <span className="text-pink-300 font-semibold">soluciones innovadoras</span> y estrategias personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group backdrop-blur-sm"
              >
                Descubre Nuestros Servicios
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('casos-de-exito')}
                className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 transform hover:scale-105"
              >
                Ver Casos de Éxito
              </button>
            </div>
            
            {/* Indicadores de características clave */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-white font-bold text-lg mb-2">Innovación</h3>
                <p className="text-white/80 text-sm">Tecnologías de vanguardia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-white font-bold text-lg mb-2">Agilidad</h3>
                <p className="text-white/80 text-sm">Resultados rápidos y efectivos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-white font-bold text-lg mb-2">Precisión</h3>
                <p className="text-white/80 text-sm">Soluciones personalizadas</p>
              </div>
            </div>
          </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('servicios')}>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center hover:border-white/80 transition-colors">
            <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 'Ágiles', label: 'Metodologías Ágiles', icon: Award },
              { number: 'Experiencia', label: 'Equipo Especializado', icon: TrendingUp },
              { number: '100%', label: 'Satisfacción Cliente', icon: CheckCircle },
              { number: '24/7', label: 'Soporte Técnico', icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4 group-hover:bg-teal-100 transition-colors">
                  <stat.icon className="h-8 w-8 text-teal-700" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales de transformación digital adaptadas a las necesidades 
              específicas de cada organización.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Digitalización de Procesos',
                description: 'Automatización y optimización de procesos organizacionales para mejorar la eficiencia operativa.',
                features: ['Análisis de procesos', 'Automatización', 'Integración de sistemas']
              },
              {
                icon: Zap,
                title: 'Modernización Tecnológica',
                description: 'Actualización de infraestructura y sistemas legacy hacia tecnologías modernas.',
                features: ['Migración a la nube', 'Actualización de sistemas', 'Optimización']
              },
              {
                icon: Target,
                title: 'Estrategia Digital',
                description: 'Desarrollo de estrategias integrales para la transformación digital organizacional.',
                features: ['Diagnóstico digital', 'Hoja de ruta', 'Métricas y KPIs']
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-700 to-slate-700 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="h-5 w-5 text-teal-700 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casos-de-exito" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Casos de Éxito
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Descubre cómo hemos transformado digitalmente organizaciones de diferentes sectores,
              generando impacto real y resultados medibles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Universidad Nacional de Rosario */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-teal-50 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-8 w-8 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Universidad Nacional de Rosario</h3>
                  <p className="text-slate-600">Sector Público - Educación</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Implementación integral del Sistema de Gestión del Servicio de Resguardo Patrimonial (SRP), que revolucionó la gestión administrativa y operativa del Servicio mediante una digitalización integral y sistemas de inteligencia preventiva basados en datos.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-700 mb-1">85%</div>
                  <div className="text-sm text-slate-600">Reducción en tiempos de proceso</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">15,000+</div>
                  <div className="text-sm text-slate-600">Usuarios beneficiados</div>
                </div>
              </div>

              <div className="flex items-center text-teal-700 font-medium group cursor-pointer">
                Ver caso completo
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* ABVR */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-50 p-3 rounded-lg mr-4">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Bomberos Voluntarios</h3>
                  <p className="text-slate-600">ONG - Sector Social</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Transformación digital completa de la Asociación de Bomberos Voluntarios de Rosario
                optimizando sus procesos internos y mejorando su capacidad de impacto social 
                a través de soluciones tecnológicas innovadoras.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-500 mb-1">70%</div>
                  <div className="text-sm text-slate-600">Mejora en eficiencia</div>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-700 mb-1">3x</div>
                  <div className="text-sm text-slate-600">Aumento en alcance</div>
                </div>
              </div>

              <div className="flex items-center text-teal-700 font-medium group cursor-pointer">
                Ver caso completo
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Sector Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Sectores que Atendemos</h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="text-center group">
                <div className="bg-teal-50 p-4 rounded-full mb-3 group-hover:bg-teal-100 transition-colors">
                  <Building className="h-8 w-8 text-teal-700" />
                </div>
                <p className="text-slate-700 font-medium">Sector Público</p>
              </div>
              <div className="text-center group">
                <div className="bg-orange-50 p-4 rounded-full mb-3 group-hover:bg-orange-100 transition-colors">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-slate-700 font-medium">ONGs</p>
              </div>
              <div className="text-center group">
                <div className="bg-slate-100 p-4 rounded-full mb-3 group-hover:bg-slate-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-slate-600" />
                </div>
                <p className="text-slate-700 font-medium">Empresas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Sobre ProQualis
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Somos especialistas en transformación digital con más de 15 años de experiencia 
                ayudando a organizaciones a evolucionar y adaptarse al mundo digital.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nuestro enfoque integral combina tecnología de vanguardia, metodologías ágiles 
                y un profundo entendimiento de las necesidades organizacionales para entregar 
                soluciones que generan impacto real y duradero.
              </p>
            </div>
            <div>
              <img 
                src="/logo_pq.png" 
                alt="ProQualis Team" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Contacto
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ¿Listo para transformar tu organización? Contáctanos para una consulta gratuita 
              y descubre cómo podemos impulsar tu evolución digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-slate-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">contacto@proqualis.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-slate-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Teléfono</p>
                    <p className="text-slate-600">+54 341 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-slate-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Ubicación</p>
                    <p className="text-slate-600">Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                <h4 className="font-bold text-slate-800 mb-2">Horarios de Atención</h4>
                <p className="text-slate-600">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-slate-600">Soporte técnico 24/7 disponible</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Solicita tu Consulta Gratuita</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organización
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                    placeholder="Nombre de tu organización"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tipo de Organización
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all">
                    <option>Selecciona una opción</option>
                    <option>Organismo Público</option>
                    <option>ONG</option>
                    <option>Empresa Privada</option>
                    <option>Institución Educativa</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all"
                    placeholder="Cuéntanos sobre tu proyecto de transformación digital..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-700 to-slate-700 text-white py-4 rounded-lg font-semibold hover:from-teal-800 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo-proq.png" 
                  alt="ProQualis" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">ProQualis</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Tu socio estratégico en transformación digital. Conectamos tecnología, 
                estrategia y personas para impulsar el crecimiento de tu organización.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Servicios</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">Digitalización de Procesos</li>
                <li className="hover:text-white transition-colors cursor-pointer">Ciberseguridad</li>
                <li className="hover:text-white transition-colors cursor-pointer">Modernización Tecnológica</li>
                <li className="hover:text-white transition-colors cursor-pointer">Capacitación Digital</li>
                <li className="hover:text-white transition-colors cursor-pointer">Estrategia Digital</li>
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Sectores</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">Sector Público</li>
                <li className="hover:text-white transition-colors cursor-pointer">ONGs</li>
                <li className="hover:text-white transition-colors cursor-pointer">Empresas</li>
                <li className="hover:text-white transition-colors cursor-pointer">Instituciones Educativas</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <div className="space-y-3 text-slate-300">
                <p>contacto@proqualis.com</p>
                <p>+54 341 123-4567</p>
                <p>Rosario, Santa Fe<br />Argentina</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 ProQualis. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;