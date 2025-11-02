function mudarCor(tema) {
    const root = document.documentElement;

    if (tema === 'padrao') {
      root.style.setProperty('--cor-fundo', '#f0e6d2');
      root.style.setProperty('--cor-navbar', '#1e1e1cea');
      root.style.setProperty('--cor-texto', '#333333');
      root.style.setProperty('--primary-color', '#5a0a1b');
    }
    if (tema === 'claro') {
      root.style.setProperty('--cor-fundo', '#f9f9f9');
      root.style.setProperty('--cor-navba--cor-navbar', '#d3d3d3');
      root.style.setProperty('--cor-texto', '#000');
      root.style.setProperty('--primary-color', '#5c5cff');
    }

    if (tema === 'escuro') {
      root.style.setProperty('--cor-fundo', '#121212');
      root.style.setProperty('--cor-navbar', '#1e1e1e');
      root.style.setProperty('--cor-texto', '#e0e0e0');
      root.style.setProperty('--primary-color', '#3f51b5');
    }

    if (tema === 'vinho') {
      root.style.setProperty('--cor-fundo', '#2B0A0A');
      root.style.setProperty('--cor-navbar', '#3E0E0E');
      root.style.setProperty('--cor-texto', '#F5E6E6');
      root.style.setProperty('--primary-color', '#8B0000');
    }
  }