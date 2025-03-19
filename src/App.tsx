
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EternalRomance from "./templates/EternalRomance";
import ModernFusion from "./templates/ModernFusion";
import StarCrossed from "./templates/StarCrossed";
import GardenOfLove from "./templates/GardenOfLove";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eternal-romance" element={<EternalRomance />} />
          <Route path="/modern-fusion" element={<ModernFusion />} />
          <Route path="/star-crossed" element={<StarCrossed />} />
          <Route path="/garden-of-love" element={<GardenOfLove />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
