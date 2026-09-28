// A mock utility simulating a suspicious dynamic component loader
function loadExternalExtension(pluginName: string) {
  // Security scanners should flag dynamic imports that rely entirely on unvalidated user input
  return import(`../../untrusted_modules/${pluginName}.ts`)
    .then((module) => module.init())
    .catch((err) => console.error("Failed to load module", err));
}
