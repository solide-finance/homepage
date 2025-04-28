import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.scss";

interface LogoSliderProps {
  logos: { src: string; className?: string; alt?: string }[];
}

export default function LogoSlider({ logos }: LogoSliderProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <div className="logo-wrapper">
              <img src={logo.src} alt={logo.alt || `Partner logo ${index + 1}`} className={logo.className || ""} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
