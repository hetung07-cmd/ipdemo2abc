// ============================================================
// Technology Transfer Handbook — data loader
// ============================================================
// Loads JSON data files synchronously so the rest of the
// application code (app.js) can reference CONFIG, ACTS,
// IPS_DATA, RELEVANCE, FLOW as global `var` bindings exactly
// as in the original single-file version.
// ============================================================

(function loadData() {
  function loadJSON(path) {
    var xhr = new XMLHttpRequest();
    // Synchronous request — intentional, see header comment.
    xhr.open('GET', path, false);
    try {
      xhr.send(null);
    } catch (e) {
      throw new Error('Failed to load ' + path + ' — open the file via a web server, not file://');
    }
    if (xhr.status !== 200 && xhr.status !== 0) {
      throw new Error('Failed to load ' + path + ': HTTP ' + xhr.status);
    }
    return JSON.parse(xhr.responseText);
  }

  try {
    window.CONFIG    = loadJSON('data/config.json');
    window.ACTS      = loadJSON('data/acts_vi.json');
    window.IPS_DATA  = loadJSON('data/ips.json');
    window.RELEVANCE = loadJSON('data/relevance.json');
    window.FLOW      = loadJSON('data/flow.json');
  } catch (err) {
    console.error('Data load failed:', err);
    var msg = (err && err.message) ? err.message : String(err);
    document.addEventListener('DOMContentLoaded', function () {
      document.body.innerHTML =
        '<div style="padding:40px;text-align:center;color:#b91c1c;font-family:sans-serif">' +
        '<h2>Lỗi tải dữ liệu</h2><p>' + msg + '</p>';
    });
  }
})();
