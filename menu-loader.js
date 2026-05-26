function loadMenu(mdFile) {
    fetch(mdFile)
        .then(function(response) { return response.text(); })
        .then(function(md) {
            document.getElementById('menu-content').innerHTML = renderMarkdown(md);
        })
        .catch(function() {
            document.getElementById('menu-content').innerHTML = '<p>Failed to load menu.</p>';
        });
}

function renderMarkdown(md) {
    var html = '';
    var lines = md.split('\n');
    var inTable = false;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        if (line.match(/^# /)) {
            if (inTable) { html += '</tbody></table></div>'; inTable = false; }
            html += '<h1>' + line.slice(2) + '</h1>';
        } else if (line.match(/^## /)) {
            if (inTable) { html += '</tbody></table></div>'; inTable = false; }
            html += '<h2>' + line.slice(3) + '</h2>';
        } else if (line.match(/^\|/) && !line.match(/^\|[-\s|]+\|$/)) {
            var cells = line.split('|').filter(function(c) { return c.trim() !== ''; });
            if (!inTable) {
                html += '<div class="menu-table-wrapper"><table class="menu-table"><thead><tr>';
                cells.forEach(function(cell) {
                    html += '<th>' + cell.trim() + '</th>';
                });
                html += '</tr></thead><tbody>';
                inTable = true;
                i++;
            } else {
                html += '<tr>';
                cells.forEach(function(cell) {
                    html += '<td>' + cell.trim() + '</td>';
                });
                html += '</tr>';
            }
        } else if (line.match(/^---/)) {
            if (inTable) { html += '</tbody></table></div>'; inTable = false; }
            html += '<hr>';
        } else if (line.match(/^\*.*\*$/)) {
            if (inTable) { html += '</tbody></table></div>'; inTable = false; }
            html += '<p class="menu-note">' + line.slice(1, -1) + '</p>';
        } else if (line.trim() === '') {
            if (inTable) { html += '</tbody></table></div>'; inTable = false; }
        }
    }
    if (inTable) { html += '</tbody></table></div>'; }
    return html;
}
