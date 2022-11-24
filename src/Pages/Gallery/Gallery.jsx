import React from "react";
import { Container } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/285871804_5462115633811708_9207438595692229967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LkIoHo72Bi0AX83smxi&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBrR7HcaUu9CweAGUZqLMA-r6l9FxtM2-_hzMN3GTLEZg&oe=63845DD8",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/285871804_5462115633811708_9207438595692229967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LkIoHo72Bi0AX83smxi&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBrR7HcaUu9CweAGUZqLMA-r6l9FxtM2-_hzMN3GTLEZg&oe=63845DD8",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/308622132_518373116962435_4825885058556974456_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5NWIjY988isAX8CuMRL&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDKByawbrMns5kerpVO3h7A43omCUBtFpPqSplqt_mrBA&oe=6383BD8A",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/308622132_518373116962435_4825885058556974456_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5NWIjY988isAX8CuMRL&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDKByawbrMns5kerpVO3h7A43omCUBtFpPqSplqt_mrBA&oe=6383BD8A",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309723489_516556457144101_3292237429914028638_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gnrM_J9LbTsAX8ec-sA&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCHVRwoiyMj-VjbJu678DyG46jVAdJNNPf5Sl8Ojyl5mw&oe=638356FE",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309723489_516556457144101_3292237429914028638_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gnrM_J9LbTsAX8ec-sA&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCHVRwoiyMj-VjbJu678DyG46jVAdJNNPf5Sl8Ojyl5mw&oe=638356FE",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309859029_516556420477438_1658529498318555180_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cr7_-0Fl_TgAX8YUixf&_nc_ht=scontent.fktm3-1.fna&oh=00_AfD_cTC7yhGAXIGms3sXrVMv0Hn1TaQYmvLzYvP4ddkAYA&oe=63832A84",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309859029_516556420477438_1658529498318555180_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cr7_-0Fl_TgAX8YUixf&_nc_ht=scontent.fktm3-1.fna&oh=00_AfD_cTC7yhGAXIGms3sXrVMv0Hn1TaQYmvLzYvP4ddkAYA&oe=63832A84",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309951194_516556343810779_4889980351242009246_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9Q4HzmWindgAX9kfM3_&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCGRzsbed8yF4Ed_Ts-lw6rDbcno6yGKeOroFv9B-DMVg&oe=63839521",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309951194_516556343810779_4889980351242009246_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9Q4HzmWindgAX9kfM3_&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCGRzsbed8yF4Ed_Ts-lw6rDbcno6yGKeOroFv9B-DMVg&oe=63839521",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309863064_516556330477447_2263360051499663846_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4F_d6EfESNQAX_TqJWM&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCbrjvp30SGF9t-1GvJFxoG4STEasKLdTxahxj02A93VQ&oe=6384658D",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309863064_516556330477447_2263360051499663846_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4F_d6EfESNQAX_TqJWM&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCbrjvp30SGF9t-1GvJFxoG4STEasKLdTxahxj02A93VQ&oe=6384658D",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309859107_516556170477463_8058765856699426297_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=REgJDAXkrz0AX-1cK6R&_nc_oc=AQnxeeBcQpI0JkkldHCvvRZ068g0jnexKeJXVKtRpkgrjXXViQ9eHh5dZA-UFAqoO8vIi98kbnTXA19fOMGhGPrr&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDB-L5Ygna2j1fZfCzA_4VwR1EqJxw1yQG4zYHJcZvrfQ&oe=6383C1B8",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309859107_516556170477463_8058765856699426297_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=REgJDAXkrz0AX-1cK6R&_nc_oc=AQnxeeBcQpI0JkkldHCvvRZ068g0jnexKeJXVKtRpkgrjXXViQ9eHh5dZA-UFAqoO8vIi98kbnTXA19fOMGhGPrr&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDB-L5Ygna2j1fZfCzA_4VwR1EqJxw1yQG4zYHJcZvrfQ&oe=6383C1B8",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309746842_516556133810800_4483101813854114499_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=blec3xozqp8AX-ncbhG&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDyRGq-tTjUWx-mzLaocHlTQKs93SFl5HdUUlvznsh8Bw&oe=63842D65",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/309746842_516556133810800_4483101813854114499_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=blec3xozqp8AX-ncbhG&_nc_ht=scontent.fktm3-1.fna&oh=00_AfDyRGq-tTjUWx-mzLaocHlTQKs93SFl5HdUUlvznsh8Bw&oe=63842D65",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/311058662_516403300492750_7073500700590170833_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=v5JwElEl_jAAX8sltwN&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCswaxajjWmg8fLPP9Sxau70BMLQ1T6AYYdE8QQsUGhzA&oe=638372AF",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/311058662_516403300492750_7073500700590170833_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=v5JwElEl_jAAX8sltwN&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCswaxajjWmg8fLPP9Sxau70BMLQ1T6AYYdE8QQsUGhzA&oe=638372AF",
    },
    {
      original:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/291984976_5544468248909779_1033646191856059254_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eCTsHGuJpqcAX8an1gp&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAbv7pGo0fB46G5gdT8DBmJ5rS_VTIErcIVCW7Mtpy31g&oe=6384EAEF",
      thumbnail:
        "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/291984976_5544468248909779_1033646191856059254_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eCTsHGuJpqcAX8an1gp&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAbv7pGo0fB46G5gdT8DBmJ5rS_VTIErcIVCW7Mtpy31g&oe=6384EAEF",
    },
  ];
  return (
    <Container fluid className="mb-5">
      <div className="mt-5 mb-5">
        <h1 className="text-center mt-3 mb-3">Take a look at our Gallery</h1>
      </div>
      <ReactImageGallery items={images} />
    </Container>
  );
};

export default Gallery;
