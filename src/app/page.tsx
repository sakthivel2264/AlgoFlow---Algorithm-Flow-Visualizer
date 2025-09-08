"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🌳</span>
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-900">AlgoFlow</span>
            </div>
            <Link
              href="/algo"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Algorithms into
              <span className="text-indigo-600 block">Visual Stories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate detailed ASCII flow diagrams for any coding algorithm using AI. 
              Perfect for students, educators, and developers who learn visually.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/algo"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
              >
                Start Creating Free →
              </Link>
              <Link
                href="#demo"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <span>⭐⭐⭐⭐⭐</span>
                <span>5.0 rating</span>
              </div>
              <div>🚀 10,000+ diagrams created</div>
              <div>💎 Free to use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AlgoFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most powerful and intuitive way to understand algorithms through visualization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-indigo-50 border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Generation</h3>
              <p className="text-gray-600">
                Advanced AI automatically generates detailed step-by-step flow diagrams from any algorithm description.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Canvas</h3>
              <p className="text-gray-600">
                Edit and customize your diagrams with our integrated Excalidraw drawing tools and save your work.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Analysis</h3>
              <p className="text-gray-600">
                See every iteration, variable state, and decision point clearly visualized in ASCII tree format.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Generate complex algorithm visualizations in seconds with our optimized AI pipeline.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 rounded-xl bg-yellow-50 border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save & Organize</h3>
              <p className="text-gray-600">
                Manage multiple algorithm visualizations with our built-in file management system.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 rounded-xl bg-red-50 border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple AI Models</h3>
              <p className="text-gray-600">
                Supports Gemini, OpenAI, and OpenRouter APIs for maximum flexibility and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              From algorithm to visualization in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enter Algorithm</h3>
              <p className="text-gray-600">
                Simply type in your algorithm name and provide an example input. Works with any coding algorithm.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Generation</h3>
              <p className="text-gray-600">
                Our AI analyzes your algorithm and generates a detailed ASCII flow diagram showing every step.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customize & Share</h3>
              <p className="text-gray-600">
                Edit your diagram with our interactive canvas, save your work, and share with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See AlgoFlow in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how we transform a complex algorithm into a clear visual diagram
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-indigo-400 font-mono text-sm overflow-auto max-w-4xl mx-auto">
            <div className="mb-4 text-white">
              <span className="text-indigo-400">Input:</span> Longest Palindrome Substring, &quot;babad&quot;
            </div>
            <pre className="whitespace-pre-wrap">
{`└── Algorithm: Longest Palindrome Substring ("babad")
    │
    ├── Initial State:
    │   ├── s = "babad", n = 5
    │   ├── start = 0, maxLen = 1
    │   └── result = ""
    │
    ├── Loop i=0 (center='b'):
    │   ├── Odd expansion: 'b' → length = 1
    │   └── Even expansion: 'b','a' → no match
    │
    ├── Loop i=1 (center='a'):
    │   ├── Odd expansion: 'a' → 'bab' → length = 3 ✓
    │   └── Even expansion: 'a','b' → no match
    │
    └── Result: "bab" (length = 3)`}
            </pre>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/algo"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Try It Yourself →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Loved by Developers Worldwide
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-indigo-700 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-indigo-200">Diagrams Created</div>
              </div>
              <div className="bg-indigo-700 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-indigo-200">Algorithm Types</div>
              </div>
              <div className="bg-indigo-700 rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">5.0★</div>
                <div className="text-indigo-200">User Rating</div>
              </div>
            </div>

            <div className="text-xl mb-8">
              &quot;AlgoFlow has completely changed how I understand algorithms. 
              The visual diagrams make complex logic crystal clear!&quot;
            </div>
            <div className="text-indigo-200">
              — Sarah Chen, Software Engineer at Google
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Visualize Your Algorithms?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers, students, and educators using AlgoFlow to understand algorithms better.
          </p>
          <Link
            href="/algo"
            className="bg-indigo-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Start Creating for Free →
          </Link>
          <p className="text-gray-500 mt-4">No signup required • Free forever • Generate unlimited diagrams</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">🌳</span>
              </div>
              <span className="text-2xl font-bold">AlgoFlow</span>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AlgoFlow. Built with Next.js, AI, and ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
