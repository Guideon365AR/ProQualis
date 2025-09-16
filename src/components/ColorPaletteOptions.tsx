import React from 'react';
import { Palette, Check } from 'lucide-react';

interface ColorPaletteOptionsProps {
  onSelectPalette?: (palette: string) => void;
}

const ColorPaletteOptions: React.FC<ColorPaletteOptionsProps> = ({ onSelectPalette }) => {
  const palettes = [
    {
      id: 'teal-midnight',
      name: 'Teal Medianoche',
      description: 'Teal oscuro con acentos coral y grises cálidos',
      colors: {
        primary: '#134e4a',
        secondary: '#475569',
        accent: '#ff7849',
        success: '#14b8a6',
        warning: '#f59e0b',
        error: '#ef4444'
      }
    },
    {
      id: 'modern-tech',
      name: 'Tecnología Moderna',
      description: 'Azul profundo con acentos verdes y grises elegantes',
      colors: {
        primary: '#1e3a8a',
        secondary: '#374151',
        accent: '#10b981',
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626'
      }
    },
    {
      id: 'corporate-blue',
      name: 'Azul Corporativo',
      description: 'Azul profesional con toques dorados y grises sofisticados',
      colors: {
        primary: '#1e40af',
        secondary: '#6b7280',
        accent: '#f59e0b',
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626'
      }
    }
  ];

  const handleSelectPalette = (paletteId: string) => {
    if (onSelectPalette) {
      onSelectPalette(paletteId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <Palette className="h-8 w-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Selecciona la Paleta de Colores
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige la combinación de colores que mejor represente la identidad de ProQualis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palettes.map((palette) => (
            <div
              key={palette.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-200"
              onClick={() => handleSelectPalette(palette.id)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{palette.name}</h3>
                <p className="text-gray-600 text-sm">{palette.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {Object.entries(palette.colors).map(([key, color]) => (
                  <div key={key} className="text-center">
                    <div
                      className="w-full h-12 rounded-lg mb-1"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-xs text-gray-500 capitalize">{key}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectPalette(palette.id);
                }}
              >
                <Check className="h-4 w-4 mr-2" />
                Seleccionar Paleta
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => handleSelectPalette('teal-midnight')}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Continuar con Teal Medianoche
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteOptions;