const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    // Update Count of counters
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const incrementor = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + incrementor);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});