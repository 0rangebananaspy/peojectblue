if (!window.location.pathname.endsWith('/') && !window.location.pathname.endsWith('.html')) {
    window.location.replace(window.location.pathname + '/' + window.location.search + window.location.hash);
  }