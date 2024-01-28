const parallaxLayers = 7;

for (let i = 0; i <= parallaxLayers; i++) {
  const x = (parallaxLayers - i) / 2;
  const transformValue = `translateZ(-${100 * x}px) scale(${x + 1})`;
  const selector = `.parallax__layer__${i}`;
  const style = `transform: ${transformValue};`;

  const rule = `${selector} { ${style} }`;

  // Create a <style> element and append the CSS rule to it
  const styleElement = document.createElement('style');
  styleElement.innerHTML = rule;
  document.head.appendChild(styleElement);
}

