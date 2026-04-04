import { Link } from "react-router-dom";
import homeStyles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div id={`${homeStyles.keyVisual}`}>
        <div className={`${homeStyles.visual}`}>
          <div className={`${homeStyles.headline}`}>
            <h2>
              일상의 모든 물건을 <br />
              거래해 보세요
            </h2>

            <Link to={`/items`} className="btn-primary btn-lg">
              구경하러 가기
            </Link>
          </div>
        </div>
      </div>

      <div>
        <section
          id={`${homeStyles.hotItem}`}
          className={`${homeStyles.section}`}
        >
          <div className={`${homeStyles.banner}`}>
            <div className={`${homeStyles.thumb}`}></div>
            <div className={`${homeStyles.bannerInfo}`}>
              <p className={`${homeStyles.category}`}>Hot Item</p>
              <h2>
                인기 상품을 <br />
                확인해 보세요
              </h2>
              <div className={`${homeStyles.desc}`}>
                <p>
                  가장 HOT한 중고거래 물품을 <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id={`${homeStyles.search}`}
          className={`${homeStyles.section}`}
        >
          <div className={`${homeStyles.banner}`}>
            <div className={`${homeStyles.thumb}`}></div>
            <div className={`${homeStyles.bannerInfo}`}>
              <p className={`${homeStyles.category}`}>Search</p>
              <h2>
                구매를 원하는 <br />
                상품을 검색하세요
              </h2>
              <div className={`${homeStyles.desc}`}>
                <p>
                  구매하고 싶은 물품은 검색해서 <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id={`${homeStyles.register}`}
          className={`${homeStyles.section}`}
        >
          <div className={`${homeStyles.banner}`}>
            <div className={`${homeStyles.thumb}`}></div>
            <div className={`${homeStyles.bannerInfo}`}>
              <p className={`${homeStyles.category}`}>Register</p>
              <h2>
                판매를 원하는 <br />
                상품을 등록하세요
              </h2>
              <div className={`${homeStyles.desc}`}>
                <p>
                  어떤 물건이든 판매하고 싶은 상품을 <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id={`${homeStyles.promotion}`}>
        <div className={`${homeStyles.visual}`}>
          <div className={`${homeStyles.headline}`}>
            <h2>
              믿을 수 있는 <br />
              판다마켓 중고 거래
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
