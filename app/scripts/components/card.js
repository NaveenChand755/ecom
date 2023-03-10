import React,{useState} from "react";

export default function Card({ products }) {
  const [addbag, setaddbag] = useState(1);
  const [heart, setheart] = useState(1);

  const AddBag = () => {
    if (addbag < 10) {
      setaddbag(addbag + 1);
    }
  };
  const DecBag = () => {
    if (addbag >= 1) {
      setaddbag(addbag - 1);
    }
  };

  const truncate = (input) => input.length > 50 ? `${input.substring(0, 50)}...` : input;

  const Heart = () => {
    if (heart) {
      setheart(0);
    } else {
      setheart(1);
    }
  };

  return (
    <div className="container">
      {products.map((item) => {
        return (
          <div className="card">
            <div className="top_part">
              <div className="circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <small>
                <i
                  onClick={Heart}
                  className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}
                ></i>
              </small>
            </div>
            <div className="image">
              <img src={item.picture} className="d-block w-100"/>
            </div>
            <div className="vitamin">
              <h3>{item?.name}</h3>
              <div className="rating">
                <input type="radio" name="rating" value="5" id="5" />
                <label htmlFor="5">☆</label>
                <input type="radio" name="rating" value="4" id="4" />
                <label htmlFor="4">☆</label>
                <input type="radio" name="rating" value="3" id="3" />
                <label htmlFor="3">☆</label>
                <input type="radio" name="rating" value="2" id="2" />
                <label htmlFor="2">☆</label>
                <input type="radio" name="rating" value="1" id="1" />
                <label htmlFor="1">☆</label>
              </div>
            </div>
            <div className="reviews">
              <p>{truncate(item?.about)}</p>
              <u>144 Views</u>
            </div>
            <div className="size">
              <h5>Quantity : 1 FL Oz</h5>
            </div>
            <div className="buttons">
              <button>
                1 FL Oz<p>1 option from $23</p>
              </button>
              <button>
                2 FL Oz<p>$43($21/FL Oz)</p>
              </button>
            </div>
            <div className="last_buttons">
              <div className="qty_btn">
                <i onClick={DecBag} className="fa fa-minus"></i>
                <p>{addbag}</p>
                <i onClick={AddBag} className="fa fa-plus"></i>
              </div>
              <div className="money_bag">
                <h3>${item.price}</h3>
                <button onClick={AddBag}>
                  <i className="fa fa-shopping-bag"></i>Add to bag
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
