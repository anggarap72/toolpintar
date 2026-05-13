export default function AIPPTGeneratorPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full border border-zinc-800 bg-zinc-950 rounded-3xl p-10 text-center shadow-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          AI Tool In Development
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          AI PPT Generator
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          We are currently building an advanced AI-powered presentation
          generator designed to create professional PowerPoint slides
          automatically with intelligent layouts, modern visuals,
          and smart content generation.
        </p>

        {/* Feature List */}
        <div className="grid md:grid-cols-2 gap-4 text-left mb-10">

          <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50">
            <h3 className="font-semibold text-white mb-2">
              Smart AI Content
            </h3>

            <p className="text-zinc-400 text-sm">
              Automatically generate presentation structure,
              titles, and slide content using AI.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50">
            <h3 className="font-semibold text-white mb-2">
              Modern Design
            </h3>

            <p className="text-zinc-400 text-sm">
              Professional slide layouts with clean and modern
              presentation styles.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50">
            <h3 className="font-semibold text-white mb-2">
              AI Visual Support
            </h3>

            <p className="text-zinc-400 text-sm">
              Intelligent visual and infographic generation
              for better storytelling.
            </p>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50">
            <h3 className="font-semibold text-white mb-2">
              Export Ready
            </h3>

            <p className="text-zinc-400 text-sm">
              Export presentations directly into fully editable
              PowerPoint format.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 pt-6 text-zinc-500 text-sm">
          Coming Soon — Next Generation AI Presentation Experience
        </div>
      </div>
    </div>
  );
}