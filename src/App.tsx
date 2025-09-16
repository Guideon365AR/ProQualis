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
                src="/logo-proq.png" 
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

            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-teal-700 to-slate-700 text-white px-6 py-2 rounded-lg font-medium hover:from-teal-800 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Consulta Gratuita
            </button>

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
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transformación
              <span className="bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent block">
                Digital Integral
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Impulsamos la evolución digital de empresas y organizaciones públicas  con soluciones innovadoras y estrategias personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-gradient-to-r from-teal-700 to-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-800 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center group"
              >
                Descubre Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('casos-de-exito')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Proyectos Exitosos', icon: Award },
              { number: '15+', label: 'Años de Experiencia', icon: TrendingUp },
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
                icon: Shield,
                title: 'Ciberseguridad',
                description: 'Protección integral de datos y sistemas con las mejores prácticas de seguridad digital.',
                features: ['Auditorías de seguridad', 'Implementación de controles', 'Capacitación']
              },
              {
                icon: Zap,
                title: 'Modernización Tecnológica',
                description: 'Actualización de infraestructura y sistemas legacy hacia tecnologías modernas.',
                features: ['Migración a la nube', 'Actualización de sistemas', 'Optimización']
              },
              {
                icon: Users,
                title: 'Capacitación Digital',
                description: 'Formación integral del personal en herramientas y competencias digitales.',
                features: ['Programas personalizados', 'Certificaciones', 'Seguimiento continuo']
              },
              {
                icon: Target,
                title: 'Estrategia Digital',
                description: 'Desarrollo de estrategias integrales para la transformación digital organizacional.',
                features: ['Diagnóstico digital', 'Hoja de ruta', 'Métricas y KPIs']
              },
              {
                icon: Settings,
                title: 'Gestión de Proyectos',
                description: 'Dirección y gestión profesional de proyectos de transformación digital.',
                features: ['Metodologías ágiles', 'Control de calidad', 'Gestión de riesgos']
              }
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
                Implementación integral del Sistema de Gestión del Servicio de Resguardo Patrimonial (SRP), que revolucionó la gestión administrativa y operativa del Servicio, mediante una digitalización  integral, automatización de procesos y sistemas de inteligencia preventiva basados en datos.
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
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Somos una consultora especializada en transformación digital con más de 15 años 
                de experiencia ayudando a organizaciones a evolucionar hacia el futuro digital.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestro enfoque integral combina estrategia, tecnología y gestión del cambio 
                para garantizar transformaciones exitosas y sostenibles en el tiempo.
              </p>

              <div className="space-y-4">
                {[
                  'Expertise en sector público y organizaciones sociales',
                  'Metodologías probadas y mejores prácticas',
                  'Equipo multidisciplinario de especialistas',
                  'Acompañamiento integral durante todo el proceso'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-slate-700 rounded-xl p-8 text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <Lightbulb className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                    <h4 className="text-lg font-semibold mb-2">Innovación</h4>
                    <p className="text-slate-200">Soluciones tecnológicas de vanguardia</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                    <h4 className="text-lg font-semibold mb-2">Experiencia</h4>
                    <p className="text-slate-200">Equipo de especialistas certificados</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                    <h4 className="text-lg font-semibold mb-2">Resultados</h4>
                    <p className="text-slate-200">Enfoque en impacto medible</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                    <h4 className="text-lg font-semibold mb-2">Confianza</h4>
                    <p className="text-slate-200">Soporte continuo y garantías</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-800 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Organización?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Comienza tu journey de transformación digital con una consultoría gratuita 
            personalizada para tu organización.
          </p>
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Solicita tu Consulta Gratuita
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Contacto
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte en tu proceso de transformación digital. 
              Contáctanos para una consulta personalizada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-teal-50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">contacto@proqualis.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
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