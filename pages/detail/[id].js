import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomReviews = () => getRandomNumber(5, 100);
const getRandomStars = () => Math.random() + getRandomNumber(3, 4);

export default function Detail() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return null;

    fetch(`/api/search?id=${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return null;

  const { featured, description, href, merchant, price, img, title } = product;

  return (
    <div
      className="relative items-center h-screen place-content-center transition-colors flex flex-col max-w-xs md:max-w-3xl mx-auto bg-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Link href="/">
        <a className="hover:bg-blue-100 p-2 rounded-lg">
          🔙 Volver a la portada
        </a>
      </Link>
      <div className="w-full md:w-1/3 grid place-items-center p-8">
        <img
          width="240"
          height="240"
          src={img}
          alt="tailwind logo"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium hidden md:block">
            {merchant}
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-gray-600 font-bold text-sm ml-1">
              {getRandomStars().toFixed(2)}
              <span className="text-gray-500 font-normal">
                {" "}
                ({getRandomReviews()} reviews)
              </span>
            </p>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {featured && (
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Destacado
            </div>
          )}
        </div>
        <h3 className="overflow-hidden overflow-ellipsis font-black text-gray-800 md:text-3xl text-xl">
          {title}
        </h3>
        <p className="md:text-lg text-gray-500 text-base">{description}</p>
        <p className="text-xl font-black text-gray-800">{price}</p>
      </div>
    </div>
  );
}
