
let readyResolve = null;
let instance = new Promise((resolve) => {
  readyResolve = resolve
});

export function setFPMReady() {
  readyResolve && readyResolve()
}

export function getFMPReady() {
  return instance
}