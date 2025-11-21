// Bulletins Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Set current week date
    const currentWeekElem = document.getElementById('currentWeek');
    const bulletinDateElem = document.getElementById('bulletinDate');
    
    if (currentWeekElem && bulletinDateElem) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);
        
        currentWeekElem.textContent = formattedDate;
        bulletinDateElem.textContent = formattedDate;
    }

    // View Current Bulletin
    const viewCurrentBtn = document.getElementById('viewCurrent');
    const printCurrentBtn = document.getElementById('printCurrent');
    
    if (viewCurrentBtn) {
        viewCurrentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Bulletin PDF will open here. Connect to your bulletin management system.');
        });
    }

    if (printCurrentBtn) {
        printCurrentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.print();
        });
    }

    // Archive Links
    document.querySelectorAll('.archive-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Archive bulletin PDF will open here.');
        });
    });
});
