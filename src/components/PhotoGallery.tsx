import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import outsideLCC from '../images/outsideLCC.png';
import hockingHills from '../images/hockingHills.jpg';
import movieNight from '../images/movieNight.jpg';
import CarissaPraying from '../images/CarissaPraying.jpg';

const memories = [
  {
    id: 1,
    url: outsideLCC,
    caption: 'From getting to know you in parking lot conversations',
  },
  {
    id: 2,
    url: hockingHills,
    caption: 'Falling for you in Hocking Hills',
  },
  {
    id: 3,
    url: movieNight,
    caption: 'Feeling comfortable to have deep conversations',
  },
  {
    id: 4,
    url: CarissaPraying,
    caption: 'To the Honduras mission trip together',
  }
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof memories[0] | null>(null);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-gray-800"
        >
         Talking
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(memory)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-3">
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 rounded-2xl"
                >
                  <p className="text-white text-lg">{memory.caption}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-center text-xl mt-6"
            >
              {selectedImage.caption}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
