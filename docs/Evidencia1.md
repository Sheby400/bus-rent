# Evidencia 1 Puga-Méndez 18/08/2026

## Creación del repositorio
Primero se creo el repositorio de la siguiente manera: 
```
main
  │
  └── develop
        │
        └── feature/project-base
```

## Organización de archivos 
El proyecto se organizo con esta configuración:
```
  bus-rent
        |
        ├── css
        |    |
        |    └── style.css
        |
        ├── docs
        |    |
        |    ├── 00_PREPARACION_ENTORNO.md
        |    |
        |    └── Evidencia1.md
        |
        ├── js
        |   |
        |   └── app.js
        |
        |
    index.html
```

## Código

### style.css
``` CSS
:root {
    --busrent-bg: #F5F7FB;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--busrent-bg);
    min-height: 100vh;
}

.hero-section {
    background: linear-gradient(135deg, #FFFFFF 0%, #EEF4FF 100%);
}

.min-vh-50 {
    min-height: 50vh;
}

.bus-hero-icon {
    font-size: clamp(7rem, 15vw, 12rem);
    line-height: 1;
}

.bus-card {
    border:0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.bus-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 2rem rgb( 0 0 0 / 10%); 
}

bus-icon {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    border-radius: 1rem;
    background: #EEF4FF;
    font-size: 2rem;
}

.feature-pill {
    display: inline-block;
    margin: 0.15rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    background: #F0F1F3;
    color: #555;
    font-size: 0.8rem;
}
```

### app.js
``` JS
const buses = [
    {
        id: 'BUS-001',
        name: 'Mercedes Sprinter',
        type: 'Ejecutivo',
        seats: 20,
        price: 5500,
        status: 'available',
        features: [
            'Aire Acondicionado', 'Wifi', 'USB'
        ]
    },
    {
        id: 'BUS-002',
        name: 'Volvo 9800',
        type: 'Turismo',
        seats: 45,
        price: 9500,
        status: 'available',
        features: [
            'Aire Acondicionado', 'Wifi', 'USB', 'Baño'
        ]    
    },
    {
        id: 'BUS-003',
        name: 'Scania K360',
        type: 'Ejecutivo',
        seats: 30,
        price: 6800,
        status: 'available',
        features: [
            'Aire Acondicionado', 'Wifi', 'USB', 'Pantalla'
        ]
    },
    {
        id: 'BUS-004',
        name: 'King Long XMQ',
        type: 'Turismo',
        seats: 38,
        price: 8200,
        status: 'available',
        features: [
            'Aire Acondicionado', 'USB', 'Baño', 'Pantalla'
        ]
    },
    {
        id: 'BUS-005',
        name: 'MAN Lions Coach',
        type: 'Premium',
        seats: 52,
        price: 11000,
        status: 'available',
        features: [
            'Aire Acondicionado', 'Wifi', 'USB', 'Baño', 'Pantalla'
        ]    
    }
]

const busContainer = document.querySelector('#bus-container')
const busCount = document.querySelector('#bus-count')
const selectionSection = document.querySelector('#selection-section')
const selectedBusContainer = document.querySelector('#selected-bus')

const formatCurrency = value => {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
    }).format(value)
}

const buildFeatures = features =>{
    return features.map(
        features => `
            <span class="feature-pill">
                ${feature}
            </span>
        `
    ).join('')
}

const renderBuses = () => {
    busCount.textContent = `${buses.length} unidades`
    busContainer.innerHTML = buses.map(
        bus => `
            <div class="col-md-6 col-lg-4">
                <article class="card bus-card shadow-sm h-100">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="bus-icon">
                                🚌
                            </div>
                            <span class="basge text-bg-success">
                                Disponible
                            </span>
                        </div>

                        <p class="text-primary fw-bold small mb-1">
                            ${bus.type.toUpperCase()}
                        </p>

                        <h3 class="h4 fw-bold">
                            ${bus.name}
                        </h3>

                        <p class="text-secondary  mb-2">
                            Código: ${bus.id}
                        </p>

                        <p class="mb-3">
                            <strong>
                                ${bus.seats}
                            </strong>
                            pasajeros
                        </p>

                        <div class="mb-4">
                            ${buildFeatures(bus.features)}
                        </div>
                    </div>
                </article>
            </div>        
        `
    )
}

```

### index.html
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BusRent | Renta de Autobuses</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
        crossorigin="anonymous"
/>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <a href="./index.html" class="navbar-brand fw-bold">
                🚌BusRent
            </a>
            <span class="navbar-text text-white-50">
                Renta de Autobuses
            </span>
        </div>

    </nav>
    <header class="hero-section">
        <div class="container py-5">
            <div class="row align-items-center min-vh-50">
                <div class="col-lg-7">
                    <span class="badge text-bg-warning mb-3">
                        Proyecto de Repaso
                    </span>
                    <h1 class="display-4 fw-bold">
                        Encuentra el autobús ideal para tu viaje
                    </h1>
                    <p class="lead text-secondary">
                        Consulta Unidades, capacidad y precio base
                    </p>
                    <a href="#catalog" class="btn btn-primary btn-lg">
                        Ver Autobuses
                    </a>
                </div>
                <div class="col-lg-5 text-center mt-4 mt-lg-0">
                    <div class="bus-hero-icon">
                        🚌
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section id="catalog" class="container py-5">
            <div class="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <p class="text-primary fw-bold mb-1">
                        CATÁLOGO
                    </p>
                    <h2 class="fw-bold mb-0">
                        Autobuses Disponibles
                    </h2>
                </div>
                <span id="bus-count" class="badge rounded-pill text-bg-dark">
                    0 Unidades
                </span>
            </div>
            <div id="bus-container" class="row g-4">
            </div>
        </section>
        <section  id="selection-section" class="container-pb-5 d-none">
            <div class="card border-0 shadow">
                <div class="card-body p-4">
                    <h3 class="h4 fw-bold">
                        Autobús Seleccionado
                    </h3>
                </div>
            </div>
        </section>
    </main>
    <footer class="bg-dark text-white py-4">
        <div class="container text-center">
            <small>
                todos los Derechos Reservados 2026
            </small>
            <small>
                Desarrollado por Sheby Puga
            </small>
        </div>
    </footer>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"
    ></script>

    <script type="module" src="./js/app.js"></script>

</body>
</html>
```