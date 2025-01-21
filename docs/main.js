window.addEventListener(
	"load",
	() => {
        document.querySelector("button").addEventListener(
            "click",
            () => {
                let iso = new Date().toISOString();
                let str = iso.replace(/[T:-]/g, "");
                str = str.replace(/\..*/, "");
                navigator.clipboard.writeText(str + ".txt");
            });
    });
