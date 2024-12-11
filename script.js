document.getElementById('convertBtn').addEventListener('click', () => {
  const inputTemp = parseFloat(document.getElementById('inputTemp').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (isNaN(inputTemp)) {
    alert('Please enter a valid temperature.');
    return;
  }

  // Konversi suhu menggunakan fungsi modular
  const convertTemperature = (temp, from, to) => {
    if (from === to) return temp;

    const conversions = {
      C: {
        F: (temp * 9/5) + 32,
        K: temp + 273.15,
        R: temp * 4/5,
      },
      F: {
        C: (temp - 32) * 5/9,
        K: (temp - 32) * 5/9 + 273.15,
        R: (temp - 32) * 4/9,
      },
      K: {
        C: temp - 273.15,
        F: (temp - 273.15) * 9/5 + 32,
        R: (temp - 273.15) * 4/5,
      },
      R: {
        C: temp * 5/4,
        F: (temp * 9/4) + 32,
        K: (temp * 5/4) + 273.15,
      },
    };

    return conversions[from]?.[to] || temp;
  };

  const result = convertTemperature(inputTemp, fromUnit, toUnit);
  document.getElementById('outputTemp').value = result.toFixed(2);
});
