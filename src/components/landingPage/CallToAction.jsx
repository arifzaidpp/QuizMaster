import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CallToAction() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute w-48 h-48 -top-12 -left-12 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute w-48 h-48 -bottom-12 -right-12 bg-white/10 rounded-full blur-2xl" />
            </div>

            <div className="relative text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-flex items-center gap-2 mb-8">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-medium px-2">
                    Start for free, upgrade anytime
                  </span>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Transform Your Quiz Experience?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of educators and create your first quiz today. Experience the
                power of interactive learning.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white px-8 py-4 rounded-full text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                  onClick={() => navigate('/signup')}
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <a href='#contact' className="text-white hover:text-white/90 transition-colors font-medium">
                  Contact Sales →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}