import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email to our Netlify function
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-20 bg-gradient-to-b from-black via-black to-red-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Become part of the movement
          </h2>

          {isSubmitted ? (
            <div className="bg-green-900 bg-opacity-30 border border-green-700 p-6 rounded-sm text-white animate-fade-in">
              <p className="text-xl font-medium mb-2">You're in!</p>
              <p>Thank you for joining the revolution. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full py-3 px-4 bg-black bg-opacity-70 border-2 ${
                    error ? 'border-red-500' : 'border-red-700'
                  } text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
                  disabled={isSubmitting}
                  required
                />
                
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-700 hover:bg-red-800 text-white p-2 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !email}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <p className="text-gray-400 text-sm mt-2">
                Join our waitlist for early access. No spam, unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupForm;