const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    // Update Count of counters
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        console.log(target);
    }

    updateCount();
});