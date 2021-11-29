// to be executed on Chrome Developer Tools

let id = 0;

copy(
  $$("article")
    .map((article) => {
      id++;
      const img = article.querySelector("img").getAttribute("src");

      const $price = article.querySelector(".thread-price");
      if (!$price) return null;
      const price = $price.innerText;

      const $description = article.querySelector(".cept-description-container");
      if (!$description) return null;
      const description = $description.innerText;

      const $title = article.querySelector(".cept-tt");
      if (!$title) return null;
      const title = $title.innerText;

      const $date = article.querySelector(".hide--toW3");
      const date = $date.innerText;

      const $linkA = article.querySelector(".cept-dealBtn");
      const $linkB = article.querySelector(".cept-vcb");
      const $linkC = article.querySelector(".cept-tb");

      let link = $linkA ?? $linkB ?? $linkC;
      if (!link) {
        console.log(title);
        return null;
      }

      const $merchant = article.querySelector(".cept-merchant-name");
      const merchant = $merchant.innerText;

      const href = link.getAttribute("href");

      return { id, img, date, description, href, merchant, title, price };
    })
    .filter(Boolean)
);
