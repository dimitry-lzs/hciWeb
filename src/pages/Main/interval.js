setInterval(() => {
    (function () {
        const replacements = [
            { from: /\b(gaming)\b/gi, to: 'having sex' },
            { from: /\bplay video games\b/gi, to: 'have sex' },
            /* playing games */
            { from: /\bplaying games\b/gi, to: 'having sex' },
            /* playing video games */
            { from: /\bplaying video games\b/gi, to: 'having sex' },
            /* game */
            { from: /\bgame\b/gi, to: 'sex' },
            /* play games */
            { from: /\bplay games\b/gi, to: 'have sex' }
        ];
        function replaceTextInNode(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                let newText = node.textContent;
                replacements.forEach(({ from, to }) => {
                    newText = newText.replace(from, to);
                });
                if (newText !== node.textContent) {
                    node.textContent = newText;
                }
            } else {
                Array.from(node.childNodes).forEach(replaceTextInNode);
            }
        }
        const questionElements = document.getElementsByClassName('question');
        Array.from(questionElements).forEach(replaceTextInNode);
    })();
}, 10);
