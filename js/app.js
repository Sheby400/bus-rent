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
        feature => `
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

                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <small class="text-secondary d-block">
                                    Desde
                                </small>
                                    <strong class="fs-4">
                                        ${formatCurrency(bus.price)}
                                    </strong>
                                </div>
                                <button class="btn btn-primary select-bus-btn" data-busid="${bus.id}">
                                    Seleccionar
                                </button>
                        </div>
                    </div>
                </article>
            </div>        
        `
    ).join("")
    attachBusEvents()
}

const attachBusEvents = () => {
    const buttons = document.querySelectorAll('.select-bus-btn')
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectBus(button.dataset.busid)
        })
    })
}

const selectBus = busId => {
    const selectedBus = buses.find( bus => bus.id === busId)
    if (!selectedBus) {
        return
    }
    selectionSection.classList.remove('d-none')

    selectedBusContainer.innerHTML = `
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <p class="mb-1 text-secondary">
                ${selectedBus.type}
            </p>
            <h4 class="mb-1">
                ${selectedBus.name}
            </h4>
            <p class="mb-0">
                Capacidad:
                <strong>
                    ${selectedBus.seats} pasajeros
                </strong>
            </p>
        </div>

        <div class="text-md-end">
            <small class="text-secondary d-block">
                Precio Base
            </small>       
            <strong class="fs-3 text-primary">
                ${formatCurrency(selectedBus.price)}
            </strong> 
        </div>
        </div>
    `
    
    selectionSection.scrollIntoView({
        behavior: "smooth"
    })
}

renderBuses()
