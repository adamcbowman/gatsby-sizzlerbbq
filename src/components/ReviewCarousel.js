import React from "react";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewData = [
  {text: `Everything was perfect - the staff were efficient, courteous, and professional in every way. Despite a band trying to set up behind them, and several dogs running around their feet, they did a tremendous job. The food was delicious, and plentiful! Everyone got a kick out of seeing the pig on the spit - cameras were snapping everywhere!
    Thank you, thank you, thank you.`,
    name: "Kate & Clark Udle, Tom & Paulette Innes",
  },
  {
    text: "Thanks again for the job this weekend. You two helped make our weekend a smashing success!",
    name: "Jonathan Kierstead, MScF",
  },
  {
    text: "Thanks to both of you and your staff for once again providing us with a wonderful time at Glen Afton Golf Course followed by a delicious meal catered by The Sizzler.",
    name: "Thomas L. DeBlois",
  },
  {
    text: "Just a note to say, thanks for getting us over the hump for pre-opening and OHW.",
    name: "Jim Martell",
  },
  {
    text: `Thank you for supplying our dinner at our Employee Appreciation Day at Mill River Fun Park
    Once again, this year's food was superb! Thanks for a job well done. Everyone enjoyed it!`,
    name: "Cindy Butler",
  }
];


const ReviewCarousel = () => {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    draggable: true,
    swipeToSlide: true,
    adaptiveHeight: false,
  };

  return (
    <div className="w-2/3 py-6" >
      <Slider {...settings} >
        {reviewData.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
