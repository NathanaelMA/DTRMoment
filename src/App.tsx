import { Hero } from './components/Hero';
import { PhotoGallery } from './components/PhotoGallery';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Hero />
      <PhotoGallery />
      <VideoSection />
    </div>
  );
}
