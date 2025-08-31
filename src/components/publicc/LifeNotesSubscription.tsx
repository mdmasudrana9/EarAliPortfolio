import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, TrendingUp } from "lucide-react";

export default function LifeNotesSubscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
          {/* Left Section - Header and Social Proof */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Subscribe to
                </h1>
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                LifeNotes
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-slate-600 font-medium">
                Join a growing community of more than{" "}
                <span className="font-bold text-slate-800 bg-gradient-to-r from-yellow-200 to-yellow-300 px-2 py-1 rounded-lg">
                  310,000 friendly readers
                </span>
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-4 border-white shadow-lg"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-4 border-white shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">+</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    4.9 • 200+ reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Description and Form */}
          <div className="flex-1 space-y-6">
            <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Each week, I share{" "}
                <span className="font-bold text-indigo-600">
                  actionable productivity tips
                </span>
                ,{" "}
                <span className="font-bold text-purple-600">
                  practical life advice
                </span>
                , and{" "}
                <span className="font-bold text-pink-600">
                  highlights from my favourite books
                </span>
                , directly to your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 bg-white/80 backdrop-blur-sm placeholder:text-slate-400"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 text-lg rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]">
                Subscribe Now ✨
              </Button>
            </div>

            <div className="bg-slate-50/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
              <p className="text-sm text-slate-600 leading-relaxed">
                By submitting this form, you&apos;ll be signed up to my free
                newsletter, which sometimes includes mentions of my books, apps
                and courses. You can opt-out at any time with no hard feelings.
                😊 Check our{" "}
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors"
                >
                  privacy policy
                </a>{" "}
                if you&apos;re curious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
