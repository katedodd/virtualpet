export const msg = "Scruffies Project v0.1";

///////FOR IMAGES

function importAll(r) {
    return r.keys().map(r);
}

export const imagesScruffies = importAll(require.context("./assets/scruffies/", false, /\.png$/));

export const imagesNepoets = importAll(require.context("./assets/nepoets/", false, /\.png$/));
