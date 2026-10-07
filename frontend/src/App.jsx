import { useMemo, useState } from 'react'
import {
  ArrowLeftRight,
  BarChart3,
  Boxes,
  Download,
  House,
  LayoutDashboard,
  MessageCircle,
  PackagePlus,
  Search,
  Send,
  Truck,
  Wifi,
} from 'lucide-react'

const brandLogo = '/rag-byagro-logo.jpeg'

const navItems = [
  { id: 'dashboard', label: 'Panel principal', mobile: 'Inicio', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventario', mobile: 'Inventario', icon: Boxes },
  { id: 'movements', label: 'Movimientos', mobile: 'Movimientos', icon: ArrowLeftRight },
  { id: 'suppliers', label: 'Proveedores', mobile: 'Proveedores', icon: Truck },
  { id: 'reports', label: 'Reportes', mobile: 'Reportes', icon: BarChart3 },
  { id: 'assistant', label: 'Asistente', mobile: 'Asistente', icon: MessageCircle },
]

const products = [
  {
    code: 'F-1030',
    name: 'Fertilizante 10-30-10',
    category: 'Fertilizantes',
    location: 'Parrita',
    stock: 240,
    min: 80,
    unit: 'sacos',
    status: 'available',
  },
  {
    code: 'S-MH25',
    name: 'Semilla de maiz hibrido',
    category: 'Semillas',
    location: 'Orotina',
    stock: 18,
    min: 25,
    unit: 'bolsas',
    status: 'low',
  },
  {
    code: 'H-CC01',
    name: 'Herbicida Campo Claro',
    category: 'Herbicidas',
    location: 'Parrita',
    stock: 0,
    min: 12,
    unit: 'litros',
    status: 'empty',
  },
  {
    code: 'T-BM02',
    name: 'Bomba manual de espalda',
    category: 'Herramientas',
    location: 'Orotina',
    stock: 36,
    min: 10,
    unit: 'unidades',
    status: 'available',
  },
]

const movements = [
  { type: 'Entrada', product: 'Fertilizante 10-30-10', location: 'Parrita', qty: 120, date: '2026-10-06' },
  { type: 'Salida', product: 'Semilla de maiz hibrido', location: 'Orotina', qty: 24, date: '2026-10-06' },
  { type: 'Entrada', product: 'Bomba manual de espalda', location: 'Orotina', qty: 12, date: '2026-10-05' },
]

const suppliers = [
  { name: 'Insumos del Pacifico', contact: 'Maria Solano', phone: '+506 2641-1020', status: 'Activo' },
  { name: 'Semillas Ticas', contact: 'Daniel Rojas', phone: '+506 2456-3321', status: 'Activo' },
  {
    name: 'AgroDistribuidora Central',
    contact: 'Lucia Vargas',
    phone: '+506 2222-8140',
    status: 'Pendiente de revision',
  },
]

const assistantAnswers = {
  'Cuanto inventario hay en Parrita?':
    'En Parrita hay 5.140 unidades ficticias disponibles para esta demostracion.',
  'Que productos tienen pocas existencias?':
    'Semilla de maiz hibrido esta por debajo del minimo y Herbicida Campo Claro aparece agotado.',
  'Que movimientos se realizaron hoy?':
    'Hoy se registraron una entrada de fertilizante en Parrita y una salida de semillas en Orotina.',
}

function StatusTag({ status }) {
  const labels = {
    available: 'Disponible',
    low: 'Bajo stock',
    empty: 'Agotado',
  }

  return <span className={`tag ${status}`}>{labels[status] ?? status}</span>
}

function Sidebar({ activeView, onChangeView }) {
  return (
    <aside className="sidebar" aria-label="Navegacion principal">
      <div className="brand-mark">
        <img alt="RAG byAgro" className="brand-logo-small" src={brandLogo} />
        <div>
          <strong>RAG byAgro</strong>
          <span>Gestion de inventario</span>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              key={item.id}
              onClick={() => onChangeView(item.id)}
              type="button"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="sidebar-bottom">
        <span className="online-dot" />
        Conexion activa
      </div>
    </aside>
  )
}

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-title">Inventario operativo</div>
      <div className="top-status">
        <span className="status-chip">
          <Wifi size={14} />
          Conectado
        </span>
        <span className="status-chip pending">Datos ficticios MVP</span>
      </div>
    </header>
  )
}

function Dashboard({ onChangeView }) {
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0)
  const lowStock = products.filter((product) => product.status !== 'available').length

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <h1>Panel principal</h1>
          <p>Resumen visual del inventario con datos ficticios de demostracion.</p>
        </div>
        <button className="button-primary" onClick={() => onChangeView('movements')} type="button">
          <PackagePlus size={18} />
          Nuevo movimiento
        </button>
      </div>

      <div className="kpi-grid">
        <article className="panel kpi">
          <span className="kpi-label">Productos registrados</span>
          <strong className="kpi-value">{products.length}</strong>
          <span className="kpi-note">Catalogo inicial MVP</span>
        </article>
        <article className="panel kpi">
          <span className="kpi-label">Existencias totales</span>
          <strong className="kpi-value">{totalStock}</strong>
          <span className="kpi-note">Unidades consolidadas</span>
        </article>
        <article className="panel kpi">
          <span className="kpi-label">Alertas</span>
          <strong className="kpi-value">{lowStock}</strong>
          <span className="kpi-note">Bajo stock o agotado</span>
        </article>
        <article className="panel kpi">
          <span className="kpi-label">Ubicaciones</span>
          <strong className="kpi-value">2</strong>
          <span className="kpi-note">Parrita y Orotina</span>
        </article>
      </div>

      <div className="dashboard-grid">
        <article className="panel">
          <div className="panel-head">
            <div>
              <h2 className="panel-title">Inventario por categoria</h2>
              <span className="panel-sub">Vista provisional sin Chart.js</span>
            </div>
          </div>
          <div className="chart-body">
            {['Fertilizantes', 'Semillas', 'Herbicidas', 'Herramientas'].map((label, index) => (
              <div className="bar-row" key={label}>
                <span>{label}</span>
                <div className="bar-track">
                  <span className="bar-fill" style={{ width: `${[88, 44, 18, 62][index]}%` }} />
                </div>
                <strong>{[240, 18, 0, 36][index]}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <h2 className="panel-title">Accesos rapidos</h2>
              <span className="panel-sub">Operaciones frecuentes</span>
            </div>
          </div>
          <div className="quick-links">
            <button className="quick-link" onClick={() => onChangeView('inventory')} type="button">
              <Boxes size={22} />
              <span>
                <strong>Revisar inventario</strong>
                <small>Consulta productos por ubicacion.</small>
              </span>
            </button>
            <button className="quick-link" onClick={() => onChangeView('movements')} type="button">
              <ArrowLeftRight size={22} />
              <span>
                <strong>Registrar movimiento</strong>
                <small>Entradas y salidas de demostracion.</small>
              </span>
            </button>
            <button className="quick-link" onClick={() => onChangeView('assistant')} type="button">
              <MessageCircle size={22} />
              <span>
                <strong>Consultar asistente</strong>
                <small>Respuestas ficticias del MVP.</small>
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

function Inventory() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesSearch = `${product.code} ${product.name} ${product.category}`
          .toLowerCase()
          .includes(search.toLowerCase())
        const matchesCategory = !category || product.category === category
        const matchesLocation = !location || product.location === location
        return matchesSearch && matchesCategory && matchesLocation
      }),
    [category, location, search],
  )

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <h1>Inventario</h1>
          <p>Consulta de productos por categoria, ubicacion y estado.</p>
        </div>
        <button className="button-primary" type="button">
          <PackagePlus size={18} />
          Agregar producto
        </button>
      </div>

      <div className="toolbar">
        <label className="search-wrap">
          <Search size={18} />
          <input
            className="field-control"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar producto"
            type="search"
            value={search}
          />
        </label>
        <select className="field-control" onChange={(event) => setCategory(event.target.value)} value={category}>
          <option value="">Todas las categorias</option>
          <option>Fertilizantes</option>
          <option>Semillas</option>
          <option>Herbicidas</option>
          <option>Herramientas</option>
        </select>
        <select className="field-control" onChange={(event) => setLocation(event.target.value)} value={location}>
          <option value="">Todas las ubicaciones</option>
          <option>Parrita</option>
          <option>Orotina</option>
        </select>
      </div>

      <article className="panel table-wrap">
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Ubicacion</th>
              <th>Existencia</th>
              <th>Minimo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr key={product.code}>
                <td>{product.code}</td>
                <td>
                  <strong>{product.name}</strong>
                </td>
                <td>{product.category}</td>
                <td>{product.location}</td>
                <td>
                  {product.stock} {product.unit}
                </td>
                <td>{product.min}</td>
                <td>
                  <StatusTag status={product.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div className="empty-state">No hay productos con esos filtros.</div>}
      </article>
    </section>
  )
}

function Movements({ showToast }) {
  const [showForm, setShowForm] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setShowForm(false)
    event.currentTarget.reset()
    showToast('Movimiento registrado en modo demostracion.')
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <h1>Movimientos</h1>
          <p>Registro visual de entradas y salidas, sin afectar existencias reales.</p>
        </div>
        <button className="button-primary" onClick={() => setShowForm(true)} type="button">
          <ArrowLeftRight size={18} />
          Registrar movimiento
        </button>
      </div>

      <article className="panel table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Producto</th>
              <th>Ubicacion</th>
              <th>Cantidad</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((movement) => (
              <tr key={`${movement.type}-${movement.product}-${movement.date}`}>
                <td>
                  <span className={`tag ${movement.type === 'Entrada' ? 'available' : 'low'}`}>{movement.type}</span>
                </td>
                <td>
                  <strong>{movement.product}</strong>
                </td>
                <td>{movement.location}</td>
                <td>{movement.qty}</td>
                <td>{movement.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {showForm && (
        <form className="panel form-card section-gap" onSubmit={handleSubmit}>
          <h2 className="panel-title form-title">Registrar movimiento</h2>
          <div className="form-grid">
            <label className="form-field">
              Tipo
              <select required>
                <option>Entrada</option>
                <option>Salida</option>
              </select>
            </label>
            <label className="form-field">
              Producto
              <select required>
                {products.map((product) => (
                  <option key={product.code}>{product.name}</option>
                ))}
              </select>
            </label>
            <label className="form-field">
              Cantidad
              <input min="1" required type="number" />
            </label>
            <label className="form-field">
              Ubicacion
              <select required>
                <option>Parrita</option>
                <option>Orotina</option>
              </select>
            </label>
          </div>
          <div className="form-actions">
            <button className="button-secondary" onClick={() => setShowForm(false)} type="button">
              Cancelar
            </button>
            <button className="button-primary" type="submit">
              Guardar movimiento
            </button>
          </div>
        </form>
      )}
    </section>
  )
}

function Suppliers({ showToast }) {
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const filtered = suppliers.filter((supplier) => supplier.name.toLowerCase().includes(search.toLowerCase()))

  function handleSubmit(event) {
    event.preventDefault()
    setShowForm(false)
    event.currentTarget.reset()
    showToast('Proveedor guardado en modo demostracion.')
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <h1>Proveedores</h1>
          <p>Contactos de compra organizados para el MVP visual.</p>
        </div>
        <button className="button-primary" onClick={() => setShowForm(true)} type="button">
          <Truck size={18} />
          Agregar proveedor
        </button>
      </div>

      <div className="toolbar">
        <label className="search-wrap">
          <Search size={18} />
          <input
            className="field-control"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar proveedor"
            type="search"
            value={search}
          />
        </label>
      </div>

      <article className="panel table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Telefono</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((supplier) => (
              <tr key={supplier.name}>
                <td>
                  <strong>{supplier.name}</strong>
                </td>
                <td>{supplier.contact}</td>
                <td>{supplier.phone}</td>
                <td>
                  <span className={`tag ${supplier.status === 'Activo' ? 'available' : 'low'}`}>
                    {supplier.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      {showForm && (
        <form className="panel form-card section-gap" onSubmit={handleSubmit}>
          <h2 className="panel-title form-title">Registrar proveedor</h2>
          <div className="form-grid">
            <label className="form-field">
              Nombre
              <input required />
            </label>
            <label className="form-field">
              Contacto
              <input />
            </label>
            <label className="form-field">
              Telefono
              <input type="tel" />
            </label>
            <label className="form-field">
              Correo
              <input type="email" />
            </label>
            <label className="form-field full">
              Notas
              <textarea />
            </label>
          </div>
          <div className="form-actions">
            <button className="button-secondary" onClick={() => setShowForm(false)} type="button">
              Cancelar
            </button>
            <button className="button-primary" type="submit">
              Guardar proveedor
            </button>
          </div>
        </form>
      )}
    </section>
  )
}

function Reports({ showToast }) {
  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <h1>Reportes</h1>
          <p>Consultas visuales de existencias y compras por proveedor.</p>
        </div>
      </div>

      <div className="toolbar">
        <select className="field-control">
          <option>Ultimos 30 dias</option>
          <option>Este mes</option>
          <option>Ultimo trimestre</option>
        </select>
        <select className="field-control">
          <option>Todas las ubicaciones</option>
          <option>Parrita</option>
          <option>Orotina</option>
        </select>
        <button className="button-secondary" onClick={() => showToast('Exportacion Excel simulada.')} type="button">
          <Download size={17} />
          Excel
        </button>
        <button className="button-secondary" onClick={() => showToast('Exportacion PDF simulada.')} type="button">
          <Download size={17} />
          PDF
        </button>
      </div>

      <div className="report-grid">
        <article className="panel">
          <div className="panel-head">
            <div>
              <h2 className="panel-title">Inventario por ubicacion</h2>
              <span className="panel-sub">Unidades disponibles</span>
            </div>
          </div>
          <div className="report-list">
            <div className="report-row">
              <span>Parrita</span>
              <strong>5.140 unidades</strong>
            </div>
            <div className="report-row">
              <span>Orotina</span>
              <strong>3.280 unidades</strong>
            </div>
            <div className="report-row">
              <span>Total general</span>
              <strong>8.420 unidades</strong>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <h2 className="panel-title">Compras por proveedor</h2>
              <span className="panel-sub">Entradas registradas</span>
            </div>
          </div>
          <div className="report-list">
            <div className="report-row">
              <span>Insumos del Pacifico</span>
              <strong>14 entradas</strong>
            </div>
            <div className="report-row">
              <span>Semillas Ticas</span>
              <strong>9 entradas</strong>
            </div>
            <div className="report-row">
              <span>AgroDistribuidora Central</span>
              <strong>6 entradas</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Assistant() {
  const [messages, setMessages] = useState([
    {
      kind: 'bot',
      text: 'Hola. Puedo ayudarte a revisar existencias, alertas de inventario y movimientos recientes con datos ficticios.',
    },
  ])
  const [input, setInput] = useState('')

  function ask(question) {
    const answer =
      assistantAnswers[question] ??
      'Esta es una respuesta de demostracion. La version real se conectara al backend y al asistente hibrido.'
    setMessages((current) => [...current, { kind: 'user', text: question }, { kind: 'bot', text: answer }])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const value = input.trim()
    if (!value) return
    setInput('')
    ask(value)
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <h1>Asistente de inventario</h1>
          <p>Prototipo de consultas sobre existencias y movimientos.</p>
        </div>
      </div>

      <article className="panel assistant-panel">
        <div className="conversation">
          {messages.map((message, index) => (
            <div className={`bubble ${message.kind}`} key={`${message.kind}-${index}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="suggestions">
          {Object.keys(assistantAnswers).map((question) => (
            <button className="suggestion" key={question} onClick={() => ask(question)} type="button">
              {question}
            </button>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            onChange={(event) => setInput(event.target.value)}
            placeholder="Escribe una consulta sobre el inventario"
            type="text"
            value={input}
          />
          <button className="button-primary icon-button-text" type="submit">
            <Send size={17} />
            Enviar
          </button>
        </form>
      </article>
    </section>
  )
}

function MobileNav({ activeView, onChangeView }) {
  return (
    <nav className="mobile-nav" aria-label="Navegacion movil">
      {navItems
        .filter((item) => item.id !== 'suppliers')
        .map((item) => {
          const Icon = item.id === 'dashboard' ? House : item.icon
          return (
            <button
              className={activeView === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => onChangeView(item.id)}
              type="button"
            >
              <Icon size={19} />
              <span>{item.mobile}</span>
            </button>
          )
        })}
    </nav>
  )
}

function Welcome({ onOpen }) {
  return (
    <section className="welcome" aria-label="Acceso de demostracion">
      <div className="welcome-card">
        <div className="welcome-logo">
          <img alt="RAG byAgro" className="welcome-brand-image" src={brandLogo} />
          <div>
            <strong>RAG byAgro</strong>
            <span>Control de inventario</span>
          </div>
        </div>
        <h1>Bienvenido a la demostracion</h1>
        <p>Explora una herramienta de inventario disenada para productos, movimientos y proveedores agricolas.</p>
        <div className="welcome-note">Este MVP utiliza datos ficticios y no almacena credenciales ni datos reales.</div>
        <button className="button-primary full-width" onClick={onOpen} type="button">
          Abrir demostracion
        </button>
      </div>
    </section>
  )
}

function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [activeView, setActiveView] = useState('dashboard')
  const [toast, setToast] = useState('')

  function showToast(message) {
    setToast(message)
    window.setTimeout(() => setToast(''), 2600)
  }

  function renderView() {
    if (activeView === 'inventory') return <Inventory />
    if (activeView === 'movements') return <Movements showToast={showToast} />
    if (activeView === 'suppliers') return <Suppliers showToast={showToast} />
    if (activeView === 'reports') return <Reports showToast={showToast} />
    if (activeView === 'assistant') return <Assistant />
    return <Dashboard onChangeView={setActiveView} />
  }

  if (!demoOpen) {
    return <Welcome onOpen={() => setDemoOpen(true)} />
  }

  return (
    <div className="app-shell">
      <Sidebar activeView={activeView} onChangeView={setActiveView} />
      <div className={`main-area ${activeView === 'dashboard' ? 'dashboard-active' : ''}`}>
        <Topbar />
        <main>{renderView()}</main>
      </div>
      <MobileNav activeView={activeView} onChangeView={setActiveView} />
      <div className={`toast ${toast ? 'show' : ''}`} role="status">
        {toast}
      </div>
    </div>
  )
}

export default App
