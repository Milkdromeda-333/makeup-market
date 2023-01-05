import { Link } from "react-router-dom";

export default function ShopBrands() {

    const brandsArr = () => {
        const arr = ["almay", "alva", "anna sui", "annabelle", "benefit", "boosh", "burt's bees", "butter london", "c'est moi", "cargo cosmetics", "china glaze", "clinique", "colourpop", "covergirl", "dalish", "deciem", "dr. hauschka", "e.l.f.", "essie", "fenty", "glossier", "green people", "iman", " l'oreal", "lotus cosmetics usa", "maia's mineral galaxy", "marcelle", "marienatie", "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica", "penny lane organics", "physicians formula", "piggy paint", "pure anada", "rejuva minerals", "revlon", "sally b's skin yummies", "salon perfect", "sante", "sinful colours", "smashbox", "stila", "suncoat", "w3llpeople", "wet n wild", "zorah", "zorah biocosmetiques"];

        return arr.map(brand => <Link to={"/shop/shop-by-brand/" + brand} className="shop-card mt-4 w-3/4 md:w-1/4" > {brand}</Link>);
    };

    return (
        <>
            <h2 className="title-style mt-4 mx-4 mb-20">&gt; &gt; Shop by Brands</h2>

            <div className="flex flex-row flex-wrap gap-10 justify-center items-center text-center mb-4">
                {brandsArr()}
            </div>

        </>
    );
}