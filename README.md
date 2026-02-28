# Projeto IoT ESP32 (Simulador Web) — DHT11 + Relé + LEDs

Simulador em navegador (HTML/CSS/JS) com **backend em Python** para representar um dispositivo IoT baseado em ESP32.

O projeto simula:
- Leitura de **temperatura** e **umidade** (DHT11).
- Acionamento de **relé/ventilador** ao ultrapassar um limite de temperatura.
- **LEDs** indicando faixas de temperatura.
- **Randomização** dos valores via botão.
- **Log** das leituras ao mudar sliders e/ou clicar em randomizar.

---

## Estrutura do projeto

```text
.
├── app.py
└── static/
    ├── index.html
    ├── styles.css
    └── app.js
```

- `app.py`: servidor web (Flask) e endpoint para gerar leitura aleatória.
- `static/index.html`: interface do simulador.
- `static/styles.css`: estilos.
- `static/app.js`: lógica do simulador (UI, regra do relé, LEDs, log e chamadas ao backend).

---

## Requisitos

- Python 3.10+ (recomendado)
- pip
- Flask

---

## Como executar (Windows/macOS/Linux)

### 1) Criar e ativar ambiente virtual (opcional, mas recomendado)

**Windows (PowerShell):**
```bash
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

**macOS/Linux:**
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2) Instalar dependências
```bash
pip install flask
```

### 3) Rodar o servidor
Na pasta onde está o `app.py`:

```bash
python app.py
```

### 4) Abrir no navegador

Acesse:
```text
http://127.0.0.1:5000/
```

> Importante: abra pelo endereço acima (servido pelo Python). Se abrir o HTML direto (file://), as rotas do backend não funcionam.

---

## Como usar

- Ajuste os sliders de **Temperatura** e **Umidade** para simular leituras.
- Defina o **limite de temperatura** para ligar o ventilador.
- Clique em **Randomizar leitura** para buscar uma leitura aleatória do backend Python.
- A caixa de **Log** registra cada alteração de leitura (slider/random).

---

## Endpoint do backend

- `GET /random-reading`  
  Retorna JSON com a leitura simulada:

```json
{
  "temperature": 25,
  "humidity": 55
}
```

---

## Regras da simulação

- **Relé/Ventilador:** liga quando `temperatura > limite`, desliga quando `temperatura <= limite`.
- **LEDs por faixa (exemplo):**
  - Frio: `< 20°C`
  - OK: `20–29°C`
  - Quente: `>= 30°C`

Você pode alterar essas faixas no `app.js` conforme a necessidade do professor/grupo.

---

## Integrantes

- Integrante 1: Anny Gabriely Souza do Nascimento / 11231103505
- Integrante 2: Antonio Luiz Lins Neto / 11231100697
- Integrante 3: Fábio Yuuki Saruwataru / 11231102676

---

## Licença

Projeto acadêmico / uso educacional.
