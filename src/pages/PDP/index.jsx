import { useParams } from "react-router-dom";
import Navbar from "../../components/navBar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { capitalize } from "../../helpers";
import PackageCard from "../../components/card/PackageCard";

const ProductDescriptionPage = () => {
  let { destination } = useParams();
  const [pdpData, setPdpData] = useState();
  const [infoData, setInfoData] = useState();
  const dontInclude = [
    "tags",
    "places",
    "image",
    "facts",
    "activities",
    "name",
    "description",
    "id",
    "created_at",
    "packages",
  ];
  const getInfoData = (data) => {
    let info = Object.keys(data).map((item) => {
      if (!dontInclude.includes(item)) {
        return { [item]: data[item] };
      }
      return "";
    });

    info = info.filter((item) => typeof item !== "string");
    return info;
  };
  useEffect(() => {
    const getPDPData = (destination) => {
      axios
        .get(
          `https://galaxify-bacend.vercel.app/api/destinations/${destination}`
        )
        .then((response) => {
          setPdpData(response.data);
          setInfoData(getInfoData(response.data));
        });
    };
    getPDPData(destination);
  }, [destination]);
  return (
    <div className="pdp__container">
      <Navbar />
      {pdpData ? (
        <div className="pdp__main">
          <div className="pdp__content">
            <div className="pdp__left">
              <img
                className="pdp__img"
                src={pdpData.image}
                alt="destination image"
              />
            </div>
            <div className="pdp__right">
              <div className="pdp__rightHeading">
                <h1>{pdpData.name}</h1>
              </div>
              <div className="pdp__infoContainer">
                <div className="pdp__infoHeading">Description: </div>
                <div className="pdp__infoP">{pdpData.description}</div>
              </div>

              {infoData &&
                infoData.map((item) => (
                  <div
                    key={Object.keys(item)[0]}
                    className="pdp__infoContainer"
                  >
                    <div className="pdp__infoHeading">
                      {capitalize(Object.keys(item)[0])} :
                    </div>
                    <div className="pdp__infoP">
                      {typeof item[Object.keys(item)[0]] === typeof boolean
                        ? item[Object.keys(item)[0]] === true
                          ? "Yes"
                          : "No"
                        : item[Object.keys(item)[0]]}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {pdpData.facts && <h1>Facts About {capitalize(destination)}</h1>}
          <ul className="pdp__facts">
            {pdpData.facts &&
              pdpData.facts?.map((item) => <li key={item.id}>{item}</li>)}
          </ul>
          <h1 className="pkg__heading">
            Packages for {capitalize(destination)}
          </h1>
          <div className="pdp__packages">
            {pdpData &&
              pdpData.packages.map((item) => (
                <PackageCard key={item.key} data={item} link={true}/>
              ))}
          </div>

          <h1 className="pkg__placesHeading">
            Interesting Places at {capitalize(destination)}
          </h1>
          <div className="pkg__places">
            {pdpData.places &&
              pdpData.places.map((place) => {
                const item = {
                  id: place.id,
                  PackageName: place.name,
                  Duration: place.location,
                  ImageUrl: place?.images[0] ?? undefined,
                  description: place.description,
                };
                return <PackageCard key={place.key} data={item} />;
              })}
          </div>
          <h1 className="pkg__placesHeading">
            Interesting Places at {capitalize(destination)}
          </h1>
          <div className="pkg__places">
            {pdpData.activities &&
              pdpData.activities.map((activity) => {
                const item = {
                  id: activity.id,
                  PackageName: activity.activityName,
                  Duration: activity.location,
                  ImageUrl: activity?.image ?? undefined,
                  description: activity.description,
                  Effort: activity.effort
                };
                return <PackageCard key={activity.key} data={item} link={true}/>;
              })}
          </div>
        </div>
      ) : (
        <div className="pdp__loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default ProductDescriptionPage;
