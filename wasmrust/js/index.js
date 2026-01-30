import init, { hallo } from "../pkg/wasm2.js";

async function run() {
  await init();              // Wasm laden
    const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const message = hallo(name);
    output.innerHTML = message;
  });

}

run();
