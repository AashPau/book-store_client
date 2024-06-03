import { Stars } from "../stars/Stars";

export const ReviewBlock = () => {
  return (
    <div>
      <div className="d-flex gap-2 align-items-baseline mb-2">
        <div
          className="bg-primary rounded-pill d-flex justify-content-center align-items-center fw-bolder text-white"
          style={{ width: "40px", height: "40px" }}
        >
          A
        </div>
        <h4>Aashish Paudel</h4>
      </div>
      <div className="d-flex gap-2">
        <div>
          <Stars />
        </div>
        <div>Lorem ipsum dolor sit.</div>{" "}
      </div>
      <small>data</small>
      <div className="mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nihil illo
        eaque culpa qui ad ex quas sapiente repudiandae consequuntur. Officia
        modi eum corrupti esse perferendis saepe, velit magnam sunt!
      </div>
    </div>
  );
};
