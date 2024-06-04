import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const maxStars = 5;
export const Stars = ({ stars = 0 }) => {
  const halfStar = !Number.isInteger(stars);

  const fullStar = Math.floor(stars);

  const emptyStar = maxStars - fullStar - (halfStar ? 1 : 0);

  if (stars > maxStars) {
    return "invalid ratings";
  }
  const showStars = [];
  // for (let i = 0; i < fullStar; i++) {
  //   showStars.push(<FaStar className="text-warning " />);
  // }
  // halfStar && showStars.push(<FaStarHalfAlt className="text-warning " />);

  // if (emptyStar) {
  //   for (let i = 0; i < emptyStar; i++) {
  //     showStars.push(<FaRegStar className=" " />);
  //   }
  // }

  for (let i = 0; i < maxStars; i++) {
    if (i < fullStar) {
      showStars.push(<FaStar className="text-warning" key={i} />);
    } else if (i === fullStar && halfStar) {
      showStars.push(<FaStarHalfAlt className="text-warning" key={i} />);
    } else {
      showStars.push(<FaRegStar className="" key={i} />);
    }
  }

  return <div className="fs-3">{showStars} stars</div>;
};
