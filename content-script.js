(() => {
    if (!window.location.pathname.startsWith('/search')) return; // Only run on search pages
    let peopleAlsoAsk = document.querySelector("#rso > div > div > div > h3") ? document.querySelector("#rso > div > div > div > h3").parentElement : null; // Detect the People Also Ask box
    let i = 1; // Start at keybind 1
    let links = {};
    let parents = {};
    document.querySelectorAll("div > div > div > div > div > div > div > div > a > h3").forEach((node) => { // Detect a search link
        if (peopleAlsoAsk !== null && peopleAlsoAsk.contains(node)) return;
        if (i > 9) return;
        node.innerHTML = `<kbd style="background-color: #eee; position: relative; top: -2px; border-radius: 3px; border: 1px solid #b4b4b4; box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 2px 0 0 rgb(255 255 255 / 70%) inset; color: #333; display: inline-block; font-size: .85em; font-weight: 700; line-height: 1; padding: 2px 4px; margin-right: -27px; white-space: nowrap; right: 30px;">${i}</kbd> ` + node.innerHTML;
        links[i + ''] = node.parentElement.href;
        parents[i + ''] = node.parentElement;
        i++;
    });
    document.querySelector('html').style.scrollBehavior = 'smooth'; // Smooth scrolling
    document.body.onkeydown = event => {
        console.log(event);
        if (event.key == +event.key && +event.key < 10 && +event.key > 0) {
            console.log(event.key);
            let parent = parents[event.key + ''];
            if (parent) parent.click(); // Click link on keybind
        }
        if (event.key == 's') { // Use s (typically down on PC games) to go down
            window.scrollTo(0, (document.documentElement.scrollTop || document.body.scrollTop) + document.querySelector('html').clientHeight / 2);
        }
        if (event.key == 'w') { // Use s (typically up on PC games) to go up
            window.scrollTo(0, (document.documentElement.scrollTop || document.body.scrollTop) - document.querySelector('html').clientHeight / 2);
        }
    }
})();