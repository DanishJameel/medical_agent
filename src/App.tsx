import React from 'react';
import { Stethoscope } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="text-center pt-12 pb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Medical Appointment Assistant
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Click the icon below to speak with our AI assistant and schedule your medical appointment
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="relative w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors cursor-pointer mb-8" id="vapi-button">
          <Stethoscope className="w-16 h-16 text-white" />
        </div>
        <p className="text-gray-600 text-center">
          Tap the icon to start speaking with our medical scheduling assistant
        </p>
      </main>
    </div>
  );
}

export default App;