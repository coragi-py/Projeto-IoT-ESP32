const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const limit = document.getElementById("limit");

const temperatureVal = document.getElementById("temperatureVal");
const humidityVal = document.getElementById("humidityVal");

const relay = document.getElementById("relay");
const fan = document.getElementById("fan");

const ledFrio = document.getElementById("ledFrio");
const ledOk = document.getElementById("ledOk");
const ledQuente = document.getElementById("ledQuente");

const btnRandom = document.getElementById("btnRandom");
const statusRandom = document.getElementById("statusRandom")

const logBox = document.getElementById("log");

function addLog(origin){
  const temp = parseInt(temperature.value, 10);
  const hum = parseInt(humidity.value, 10);

  const row = `(${origin}) Temperatura = ${temp}°C, Umidade = ${hum}%<br>`

  logBox.innerHTML = row + logBox.innerHTML;
}

function setLed(led, on, color){
  led.style.background = on ? color : "#eee";
}

function atualizar(origin){
  const temp = parseInt(temperature.value, 10);
  const hum = parseInt(humidity.value, 10);
  const lim = parseInt(limit.value, 10);

  temperatureVal.textContent = temp;
  humidityVal.textContent = hum;

  // Relé: liga quando temp > limite
  const on = temp > lim;
  relay.textContent = on ? "ON" : "OFF";
  fan.textContent = on ? "GIRANDO" : "PARADO";

  // LEDs por faixa fixa
  setLed(ledFrio, temp <= 15, "dodgerblue");
  setLed(ledOk, temp > 15 && temp <= 32, "limegreen");
  setLed(ledQuente, temp >= 33, "crimson");

  if (origin){
    addLog(origin);
  }
}

async function randomizarLeitura(){
  statusRandom.textContent = "Lendo do backend...";
  try{
    const resp = await fetch("/random-reading");
    const data = await resp.json();

    temperature.value = data.temperature;
    humidity.value = data.humidity;
    atualizar("random");

    statusRandom.textContent = `Nova leitura: ${data.temperature}°C, ${data.humidity}%`;
  } catch (err){
    console.error(err);
    statusRandom.textContent = "Erro ao obter leitura.";
  }
}

temperature.addEventListener("input", () => atualizar("slider"));
humidity.addEventListener("input", () => atualizar("slider"));
limit.addEventListener("input", () => atualizar());
btnRandom.addEventListener("click", randomizarLeitura);

atualizar();