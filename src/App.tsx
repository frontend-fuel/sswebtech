import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useState } from 'react';
import { Phone, Mail, MessageCircle, MessageSquare, X } from 'lucide-react';

const queryClient = new QueryClient();

function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-2">
      {isOpen && (
        <div className="flex flex-col items-center space-y-2 mb-2">
          <a href="https://wa.me/9391502293" className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600">
            <img src="/src/pages/whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-cover" />
          </a>
          <a href="tel:9391502293" className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600">
            <Phone className="w-6 h-6 text-white" />
          </a>
          <a href="mailto:yarrusasi@gmail.com" className="bg-red-500 p-4 rounded-full shadow-lg hover:bg-red-600">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      )}
      <button
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transform transition-transform duration-300 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </button>
    </div>
  );
}

const App = () =>
<QueryClientProvider client={queryClient} data-id="b569m01jk" data-path="src/App.tsx">
    <TooltipProvider data-id="tm84ktxrk" data-path="src/App.tsx">
      <Toaster data-id="i78rersvj" data-path="src/App.tsx" />
      <BrowserRouter data-id="pqsn3oj35" data-path="src/App.tsx">
        <Routes data-id="y24alucny" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="0r5oti4dg" data-path="src/App.tsx" />} data-id="f9ooq23ia" data-path="src/App.tsx" />
          <Route path="/about" element={<About data-id="npgb141u6" data-path="src/App.tsx" />} data-id="8w8wkymo3" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="l355ew4md" data-path="src/App.tsx" />} data-id="zqabon6th" data-path="src/App.tsx" />
        </Routes>
        <ContactButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;