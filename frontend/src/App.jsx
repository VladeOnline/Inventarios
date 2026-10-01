function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Incremento 0
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Agricola Rancho Grande
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          Base tecnica inicial para la aplicacion web inteligente de gestion de
          inventario. Esta pantalla solo verifica React, Vite y Tailwind CSS.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-500">Frontend</span>
            <p className="mt-2 font-medium">React + Vite</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-500">Estilos</span>
            <p className="mt-2 font-medium">Tailwind CSS</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-500">Estado</span>
            <p className="mt-2 font-medium text-emerald-700">Infraestructura</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
